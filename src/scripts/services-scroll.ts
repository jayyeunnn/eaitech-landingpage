// What We Do: bagian menahan layar dan tiap kategori berupa kartu yang naik
// menimpa kartu sebelumnya mengikuti scroll (DESIGN bagian 5.0). Kartu lama
// mengecil sedikit dan tepi atasnya tetap terlihat. Daftar di kiri kosong di awal:
// 01 muncul saat bagian ini naik ke layar, lalu 02, 03, 04 muncul satu per satu.
// Kartu yang tertutup diberi `inert` agar tombolnya tidak terjangkau keyboard.
// Reduced motion: tidak dipasang, kartu tampil berurutan.

import { scroll } from 'motion';

const clamp = (value: number) => Math.min(1, Math.max(0, value));
// Jarak tepi kartu yang terlihat dan pengecilan per kartu di atasnya.
const STACK_GAP = 14;
const STACK_SCALE = 0.035;

export function initServicesScroll() {
  const section = document.querySelector<HTMLElement>('[data-services]');
  if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const panels = Array.from(section.querySelectorAll<HTMLElement>('[data-service-panel]'));
  const steps = Array.from(section.querySelectorAll<HTMLElement>('[data-service-step]'));
  const moves = panels.length - 1;
  let current = -1;
  let entered = false;
  let progress = 0;

  const markSteps = () => {
    steps.forEach((step, i) => {
      step.toggleAttribute('data-active', i === current);
      step.toggleAttribute('data-shown', entered && i <= current);
    });
  };

  const render = () => {
    // Tiap perpindahan memakai 75% jatahnya, sisanya kartu diam agar bisa dibaca.
    const rises = panels.map((_, i) => {
      if (i === 0) return 1;
      const slot = 1 / moves;
      return clamp((progress - (i - 1) * slot - slot * 0.125) / (slot * 0.75));
    });

    panels.forEach((panel, i) => {
      const covered = rises.slice(i + 1).reduce((sum, rise) => sum + rise, 0);
      // Kartu mulai tepat di bawah tepi layar.
      const hidden = window.innerHeight - (panel.offsetParent as HTMLElement).offsetTop;
      const y = (1 - rises[i]) * hidden + i * STACK_GAP;
      panel.style.transform = `translate3d(0, ${y}px, 0) scale(${1 - covered * STACK_SCALE})`;
    });

    const index = rises.filter((rise) => rise >= 0.5).length - 1;
    if (index === current) return;
    current = index;
    panels.forEach((panel, i) => {
      panel.toggleAttribute('data-active', i === index);
      panel.inert = i !== index;
    });
    markSteps();
  };

  render();
  const stopEnter = scroll(
    (value: number) => {
      if (entered === value > 0) return;
      entered = value > 0;
      markSteps();
    },
    { target: section, offset: ['start 35%', 'start start'] },
  );
  const stopCards = scroll(
    (value: number) => {
      progress = value;
      render();
    },
    { target: section, offset: ['start start', 'end end'] },
  );
  window.addEventListener('resize', render);

  return () => {
    stopEnter();
    stopCards();
    window.removeEventListener('resize', render);
  };
}
