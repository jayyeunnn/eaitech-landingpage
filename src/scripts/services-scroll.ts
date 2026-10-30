// Bagian Layanan menempel; saat di-scroll ke bawah, deretan kartu bergeser ke
// kiri dan kartu muncul satu per satu mulai 01 (revisi Jay 2026-10-29, A1).
// Motion: `scroll` membaca progres, `animate` memunculkan/menyembunyikan kartu.
//
// Tidak berjalan dengan reduced motion: kartu tetap deretan biasa yang bisa
// digeser (keadaan bawaan HTML, juga saat JS gagal). Mengembalikan fungsi
// pembersih untuk dipanggil sebelum isi halaman ditukar (ganti bahasa).

import { animate, scroll } from 'motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const HIDDEN = { opacity: 0, transform: 'translateY(40px) scale(0.96)' };
const SHOWN = { opacity: 1, transform: 'translateY(0px) scale(1)' };

export function initServicesScroll() {
  const section = document.querySelector<HTMLElement>('[data-services]');
  if (!section) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const pin = section.querySelector<HTMLElement>('[data-services-pin]');
  const sticky = pin?.firstElementChild as HTMLElement | null;
  const viewport = section.querySelector<HTMLElement>('[data-services-viewport]');
  const track = section.querySelector<HTMLElement>('[data-services-track]');
  if (!pin || !sticky || !viewport || !track) return;

  const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-service-card]'));
  const shown = cards.map((_, i) => i === 0);
  section.dataset.pinned = '';
  cards.forEach((card, i) => {
    if (i > 0) Object.assign(card.style, HIDDEN);
  });

  let distance = 0; // jarak geser deretan kartu
  let length = 0; // panjang scroll selama menempel
  let progress = 0;

  const measure = () => {
    distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
    // Ruang scroll cukup untuk menggeser deretan dan memunculkan tiap kartu.
    length = distance + window.innerHeight * 0.8;
    pin.style.height = `${sticky.offsetHeight + length}px`;
    apply(true);
  };

  // Deretan bergeser bersamaan dengan munculnya kartu yang tidak muat lagi di
  // layar, sehingga kartu terbaru selalu terlihat utuh tanpa ruang kosong.
  let offset = 0;
  const offsetFor = (count: number) => {
    const first = cards[0];
    if (!first) return 0;
    const step = cards.length > 1 ? cards[1].offsetLeft - first.offsetLeft : first.offsetWidth;
    const rightEdge = (count - 1) * step + first.offsetWidth;
    return Math.min(distance, Math.max(0, rightEdge - viewport.clientWidth));
  };

  const apply = (instant = false) => {
    const count = Math.min(cards.length, Math.floor(progress * cards.length) + 1);
    const next = offsetFor(count);
    if (next !== offset || instant) {
      offset = next;
      const transform = `translateX(${-offset}px)`;
      if (instant) track.style.transform = transform;
      else animate(track, { transform }, { duration: 0.6, ease: EASE });
    }
    cards.forEach((card, i) => {
      const visible = progress >= i / cards.length;
      if (visible === shown[i]) return;
      shown[i] = visible;
      animate(card, visible ? SHOWN : HIDDEN, { duration: 0.6, ease: EASE });
    });
  };

  const cancelScroll = scroll(
    (p: number) => {
      progress = p;
      apply();
    },
    { target: pin, offset: ['start start', 'end end'], trackContentSize: true },
  );

  // Keyboard: saat fokus masuk ke kartu yang belum terlihat, gulir ke posisinya.
  track.addEventListener('focusin', (event) => {
    const i = cards.findIndex((card) => card.contains(event.target as Node));
    if (i < 0 || shown[i]) return;
    const pinTop = pin.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: pinTop + (i / cards.length + 0.02) * length, behavior: 'instant' });
  });

  const resizeObserver = new ResizeObserver(measure);
  resizeObserver.observe(viewport);
  measure();

  return () => {
    cancelScroll();
    resizeObserver.disconnect();
  };
}
