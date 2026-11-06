// Judul bagian muncul dari samar ke penuh sambil naik 16 px, dan gambar Project
// terbuka dari atas ke bawah, sekali per elemen (DESIGN bagian 5). Teks dan gambar
// sudah ada di HTML sejak awal; keadaan awal hanya dipasang CSS saat JS aktif.
// Mengembalikan fungsi pembersih untuk dipanggil sebelum isi halaman ditukar.

import { animate, inView } from 'motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const stops: (() => void)[] = [];

  for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]')) {
    const delay = Number(el.dataset.revealDelay ?? 0);
    const stop = inView(
      el,
      () => {
        animate(el, { opacity: 1, transform: 'translateY(0px)' }, { duration: 0.7, delay, ease: EASE });
        stop();
      },
      { amount: 0.3 },
    );
    stops.push(stop);
  }

  // Yang diamati induknya: elemen yang terpotong penuh dianggap tidak terlihat.
  const covers = document.documentElement.classList.contains('swapped')
    ? []
    : document.querySelectorAll<HTMLElement>('[data-cover]');
  for (const el of covers) {
    const stop = inView(
      el.parentElement!,
      () => {
        animate(
          el,
          { clipPath: ['inset(0 0 100% 0 round 18px)', 'inset(0 0 0% 0 round 18px)'] },
          { duration: 0.9, ease: EASE },
        );
        stop();
      },
      { amount: 0.15 },
    );
    stops.push(stop);
  }

  return () => stops.forEach((stop) => stop());
}
