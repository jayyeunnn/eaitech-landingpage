// Titik masuk skrip halaman. `__motionReady` memberi tahu skrip di <head>
// bahwa animasi siap; bila tidak dalam 3 detik, keadaan awal animasi dicabut
// agar teks tetap terlihat.
//
// Ganti bahasa menukar isi halaman lewat ClientRouter (revisi Jay 2026-10-30).
// Skrip ini hanya dimuat sekali, jadi semua bagian dibersihkan sebelum tukar
// (`astro:before-swap`) lalu dipasang ulang pada isi baru (`astro:after-swap`,
// sebelum halaman baru tampil), kemudian posisi scroll dikembalikan.

import { initHeroRibbon } from './hero-ribbon';
import { initReveal } from './reveal';
import { initServicesScroll } from './services-scroll';
import { initProcessScroll } from './process-scroll';
import { initHeaderNav } from './header-nav';
import { initLangSwitch, restoreLangScroll } from './lang-switch';

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

type Cleanup = (() => void) | undefined;
let cleanups: Cleanup[] = [];

function initPage() {
  cleanups = [initHeaderNav(), initLangSwitch(), initReveal(), initServicesScroll(), initProcessScroll()];
  initHeroRibbon();
}

window.__motionReady = true;
initPage();

document.addEventListener('astro:before-swap', () => {
  for (const cleanup of cleanups) cleanup?.();
  cleanups = [];
});

document.addEventListener('astro:after-swap', () => {
  // Atribut <html> ikut diganti saat tukar, jadi kelas `js`/`pin` dipasang lagi.
  document.documentElement.classList.add('js');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('pin');
  }
  initPage();
  restoreLangScroll();
});
