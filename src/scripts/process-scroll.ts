// How It Works: garis tergambar mengikuti scroll, titik tahap menyala dan teks
// muncul saat ujung garis sampai (DESIGN bagian 5.0). Ujung garis berada di 62%
// tinggi layar. Reduced motion: tidak dipasang, alur tampil utuh.

import { scroll } from 'motion';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

// Garis cabang memakai `non-scaling-stroke`, jadi panjang dash tidak persis sama
// dengan panjang garis. Celah 2 mencegah dash berulang di ujung, dan saat penuh
// dash dilepas agar garis utuh.
const drawPaths = (paths: SVGPathElement[], amount: number) => {
  for (const path of paths) {
    path.style.strokeDasharray = amount >= 1 ? 'none' : '1 2';
    path.style.strokeDashoffset = String(1 - amount);
  }
};

export function initProcessScroll() {
  const flow = document.querySelector<HTMLElement>('[data-flow]');
  if (!flow || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lines = Array.from(flow.querySelectorAll<HTMLElement>('[data-flow-line]'));
  const branch = flow.querySelector<HTMLElement>('[data-flow-branch]');
  const branchIn = Array.from(flow.querySelectorAll<SVGPathElement>('[data-branch-in]'));
  const branchOut = Array.from(flow.querySelectorAll<SVGPathElement>('[data-branch-out]'));
  const nodes = Array.from(flow.querySelectorAll<HTMLElement>('[data-flow-node]'));
  const items = Array.from(flow.querySelectorAll<HTMLElement>('[data-flow-item]'));

  // Posisi diukur dari dokumen agar transform kartu tidak ikut terhitung.
  const pageTop = (el: Element) => el.getBoundingClientRect().top + window.scrollY;

  let flowTop = 0;
  let flowHeight = 0;
  let segments: { bar: HTMLElement; top: number; height: number }[] = [];
  let triggers: { el: HTMLElement; at: number }[] = [];
  let branchTop = 0;
  let branchHeight = 0;

  const measure = () => {
    flowTop = pageTop(flow);
    flowHeight = flow.offsetHeight;
    segments = lines
      .filter((line) => line.offsetParent !== null)
      .map((line) => ({
        bar: line.querySelector<HTMLElement>('[data-flow-bar]')!,
        top: pageTop(line) - flowTop,
        height: line.offsetHeight,
      }));
    if (branch) {
      branchTop = pageTop(branch) - flowTop;
      branchHeight = branch.offsetHeight;
    }
    // `offsetTop` berantai mengabaikan transform; kartu yang belum muncul
    // tergeser 16 px, jadi titik pemicu tidak boleh dibaca dari rect-nya.
    const offsetIn = (el: HTMLElement) => {
      let top = 0;
      let node: HTMLElement | null = el;
      while (node && node !== flow) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      return top;
    };
    triggers = [...nodes, ...items].map((el) => ({ el, at: offsetIn(el) + Math.min(el.offsetHeight / 2, 40) }));
  };

  const render = (progress: number) => {
    const head = progress * flowHeight;
    for (const { bar, top, height } of segments) {
      // Keadaan awal memakai properti `scale` dari Tailwind, jadi ini yang diubah.
      bar.style.scale = `1 ${clamp((head - top) / height)}`;
    }
    // Pil berada di tengah cabang: 36% garis masuk, 36% garis keluar.
    const inner = clamp((head - branchTop) / (branchHeight * 0.36));
    const outer = clamp((head - branchTop - branchHeight * 0.64) / (branchHeight * 0.36));
    drawPaths(branchIn, inner);
    drawPaths(branchOut, outer);
    for (const { el, at } of triggers) el.toggleAttribute('data-on', head >= at);
  };

  measure();
  const stop = scroll(render, { target: flow, offset: ['start 62%', 'end 62%'] });
  const onResize = () => measure();
  window.addEventListener('resize', onResize);
  // Ukuran berubah setelah font dan gambar selesai dimuat.
  const observer = new ResizeObserver(onResize);
  observer.observe(flow);

  return () => {
    stop();
    window.removeEventListener('resize', onResize);
    observer.disconnect();
  };
}
