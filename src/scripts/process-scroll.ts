// Cara Kerja menempel selayar penuh; cincin titik terisi halus mengikuti scroll
// dan teks langkah berganti 01 → 04 di tiap tahap (revisi Jay 2026-10-30).
// Motion: `scroll` membaca progres, `animate` mengganti teks (lama naik dan
// memudar, baru masuk dari bawah).
//
// Tidak berjalan dengan reduced motion: daftar langkah biasa tetap tampil
// (keadaan bawaan HTML, juga saat JS gagal).

import { animate, scroll } from 'motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Step {
  title: string;
  body: string;
}

export function initProcessScroll() {
  const section = document.querySelector<HTMLElement>('[data-process]');
  if (!section) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const pin = section.querySelector<HTMLElement>('[data-process-pin]');
  const stage = section.querySelector<HTMLElement>('[data-process-stage]');
  const panel = section.querySelector<HTMLElement>('[data-process-panel]');
  const text = section.querySelector<HTMLElement>('[data-step-text]');
  const number = section.querySelector<HTMLElement>('[data-step-number]');
  const ringNumber = section.querySelector<HTMLElement>('[data-ring-number]');
  const title = section.querySelector<HTMLElement>('[data-step-title]');
  const body = section.querySelector<HTMLElement>('[data-step-body]');
  if (!pin || !stage || !panel || !text || !number || !ringNumber || !title || !body) return;

  const steps = JSON.parse(panel.dataset.steps ?? '[]') as Step[];
  const dots = Array.from(section.querySelectorAll<SVGCircleElement>('[data-ring-dot]'));
  if (steps.length === 0 || dots.length === 0) return;

  section.dataset.pinned = '';

  // Panjang scroll selama menempel: sekitar 60% tinggi layar per langkah.
  const measure = () => {
    pin.style.height = `${stage.offsetHeight + window.innerHeight * 0.6 * steps.length}px`;
  };

  let lit = -1;
  const paintRing = (p: number) => {
    const count = Math.round(p * dots.length);
    if (count === lit) return;
    lit = count;
    dots.forEach((dot, i) => {
      const on = i < count;
      const head = i === count - 1;
      dot.setAttribute('class', head ? 'fill-ribbon-2' : on ? 'fill-ribbon-3' : 'fill-light-line');
      dot.setAttribute('r', head ? '3.2' : on ? '2.3' : '1.9');
    });
  };

  let current = 0;
  let displayed = 0;
  let swap: Promise<unknown> = Promise.resolve();
  const showStep = (index: number) => {
    if (index === current) return;
    current = index;
    ringNumber.textContent = String(index + 1);
    // Antre agar pergantian tidak bertabrakan; langkah yang terlewati saat
    // scroll cepat tidak ditampilkan, langsung ke langkah terbaru.
    swap = swap.then(async () => {
      if (displayed === current) return;
      await animate(text, { opacity: 0, transform: 'translateY(-16px)' }, { duration: 0.22, ease: EASE });
      const target = current;
      displayed = target;
      number.textContent = String(target + 1);
      title.textContent = steps[target].title;
      body.textContent = steps[target].body;
      text.style.transform = 'translateY(16px)';
      await animate(text, { opacity: 1, transform: 'translateY(0px)' }, { duration: 0.3, ease: EASE });
    });
  };

  const cancelScroll = scroll(
    (p: number) => {
      paintRing(p);
      showStep(Math.min(steps.length - 1, Math.floor(p * steps.length)));
    },
    // trackContentSize: posisi ikut diperbarui saat tinggi halaman berubah
    // (font selesai dimuat, area menempel lain diukur ulang).
    { target: pin, offset: ['start start', 'end end'], trackContentSize: true },
  );

  const resizeObserver = new ResizeObserver(measure);
  resizeObserver.observe(stage);
  measure();

  // Pembersih sebelum isi halaman ditukar (ganti bahasa).
  return () => {
    cancelScroll();
    resizeObserver.disconnect();
  };
}
