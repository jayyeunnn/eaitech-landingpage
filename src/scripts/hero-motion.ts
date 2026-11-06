// Animasi hero frame 09 (DESIGN bagian 5.0, referensi northeasttomato.com).
// - Masuk: HP dan laptop membesar dan berputar ke posisinya, hanya saat halaman
//   pertama dibuka. Judul dan tombol tidak menunggu.
// - Kursor: naik-turun searah; ke kiri geser dan miring keluar, ke kanan ke dalam.
//   Pegas membuat perangkat menyusul kursor. Hanya perangkat dengan mouse.
// - Scroll: perangkat turun dan melebar keluar sampai terpotong tepi hero.
// Reduced motion: tidak ada yang dipasang; perangkat diam di posisi akhir.

import { animate, inView, motionValue, scroll, springValue } from 'motion';

// Nilai pada layar 1440 px, hasil ukur referensi. `turn` positif = searah jarum
// jam; HP miring ke dalam saat kursor ke kanan, laptop sebaliknya.
const devices = {
  phone: { x: 12, y: 9, turn: 2.4, scrollX: '-15%', scrollY: '30%' },
  laptop: { x: -14, y: 11, turn: -3.8, scrollX: '15%', scrollY: '40%' },
} as const;

type DeviceKey = keyof typeof devices;

function playIntro(hero: HTMLElement) {
  const root = document.documentElement;
  if (root.classList.contains('intro-done')) return;

  const images = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-intro]'));
  const runs = images.map((image) =>
    animate(
      image,
      { opacity: [0, 1], transform: ['scale(0.9) rotate(-15deg)', 'scale(1) rotate(0deg)'] },
      {
        transform: { duration: 1.6, ease: [0.22, 1.12, 0.36, 1] },
        opacity: { duration: 0.6, ease: 'easeOut' },
      },
    ),
  );
  Promise.all(runs).then(() => root.classList.add('intro-done'));
}

function followCursor(hero: HTMLElement) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const targets = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-device]')).map((el) => ({
    tilt: el.querySelector<HTMLElement>('[data-hero-tilt]')!,
    values: devices[el.dataset.heroDevice as DeviceKey],
  }));

  const pointerX = motionValue(0);
  const pointerY = motionValue(0);
  const spring = { stiffness: 70, damping: 18, mass: 1 };
  const x = springValue(pointerX, spring);
  const y = springValue(pointerY, spring);

  const render = () => {
    const scale = window.innerWidth / 1440;
    for (const { tilt, values } of targets) {
      const moveX = values.x * x.get() * scale;
      const moveY = values.y * y.get() * scale;
      tilt.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${values.turn * x.get()}deg)`;
    }
  };
  const stopX = x.on('change', render);
  const stopY = y.on('change', render);

  let visible = true;
  const stopView = inView(hero, () => {
    visible = true;
    return () => {
      visible = false;
    };
  });

  const onMove = (event: PointerEvent) => {
    if (!visible) return;
    pointerX.set((event.clientX / window.innerWidth) * 2 - 1);
    pointerY.set((event.clientY / window.innerHeight) * 2 - 1);
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  return () => {
    window.removeEventListener('pointermove', onMove);
    stopView();
    stopX();
    stopY();
    x.destroy();
    y.destroy();
  };
}

function followScroll(hero: HTMLElement) {
  const stops = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-device]')).map((el) => {
    const { scrollX, scrollY } = devices[el.dataset.heroDevice as DeviceKey];
    const run = animate(
      el,
      { transform: ['translate(0%, 0%)', `translate(${scrollX}, ${scrollY})`] },
      { ease: 'linear' },
    );
    return scroll(run, { target: hero, offset: ['start start', 'end start'] });
  });
  return () => stops.forEach((stop) => stop());
}

export function initHero() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  playIntro(hero);
  const stopCursor = followCursor(hero);
  const stopScroll = followScroll(hero);
  return () => {
    stopCursor?.();
    stopScroll();
  };
}
