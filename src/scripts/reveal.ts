// Judul bagian dan langkah Cara Kerja muncul dari samar ke penuh sambil naik
// 16 px, sekali per elemen (DESIGN bagian 5.2). Teks sudah ada di HTML sejak
// awal; keadaan samar hanya dipasang CSS saat JS aktif. Mengembalikan fungsi
// pembersih untuk dipanggil sebelum isi halaman ditukar (ganti bahasa).

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
  return () => stops.forEach((stop) => stop());
}
