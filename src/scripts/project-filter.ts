// Filter kategori List Project: kartu lama memudar, lalu kartu baru muncul
// bergantian dengan jarak 40 ms (keputusan Jay 2026-11-06). Reduced motion:
// kartu langsung berganti.

import { animate } from 'motion';

export function initProjectFilter() {
  const bar = document.querySelector<HTMLElement>('[data-project-filter]');
  if (!bar) return;

  const buttons = Array.from(bar.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-project-card]'));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let run = 0;

  const apply = (key: string) => {
    const shown = cards.filter((card) => key === 'all' || card.dataset.category === key);
    for (const card of cards) card.hidden = !shown.includes(card);
    return shown;
  };

  const onClick = async (event: MouseEvent) => {
    const button = event.currentTarget as HTMLButtonElement;
    if (button.getAttribute('aria-pressed') === 'true') return;
    for (const item of buttons) item.setAttribute('aria-pressed', String(item === button));
    const key = button.dataset.filter ?? 'all';

    if (reduced) {
      apply(key);
      return;
    }

    const id = ++run;
    const visible = cards.filter((card) => !card.hidden);
    await Promise.all(visible.map((card) => animate(card, { opacity: 0 }, { duration: 0.12, ease: 'easeOut' })));
    if (id !== run) return;
    apply(key).forEach((card, i) => {
      animate(
        card,
        { opacity: [0, 1], transform: ['translateY(8px)', 'translateY(0px)'] },
        { duration: 0.2, delay: i * 0.04, ease: 'easeOut' },
      );
    });
  };

  for (const button of buttons) button.addEventListener('click', onClick);
  return () => {
    for (const button of buttons) button.removeEventListener('click', onClick);
  };
}
