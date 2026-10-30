// Ganti bahasa tanpa memuat ulang (revisi Jay 2026-10-30): klik ID/EN menukar
// isi halaman lewat ClientRouter Astro, lalu posisi scroll dikembalikan ke
// titik yang sama di bagian yang sama. URL tetap berganti `/` ↔ `/id`.
// Tanpa JS, link tetap membuka halaman bahasa lain seperti biasa.

import { navigate } from 'astro:transitions/client';
import { currentSection } from './header-nav';

interface Pending {
  key: string;
  offset: number;
}

let pending: Pending | null = null;

const sectionTop = (el: Element) => el.getBoundingClientRect().top + window.scrollY;

const findSection = (key: string) =>
  key === 'footer'
    ? document.querySelector('footer')
    : document.querySelector(`[data-section="${key}"]`);

export function initLangSwitch() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]'));

  const onClick = (event: MouseEvent) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const link = event.currentTarget as HTMLAnchorElement;
    event.preventDefault();
    const section = currentSection();
    if (section) {
      pending = {
        key: section.dataset.section ?? 'footer',
        offset: window.scrollY - sectionTop(section),
      };
    }
    navigate(link.dataset.base ?? link.href);
  };

  for (const link of links) link.addEventListener('click', onClick);
  return () => {
    for (const link of links) link.removeEventListener('click', onClick);
  };
}

// Dipanggil setelah isi baru terpasang dan area menempel sudah diukur ulang.
export function restoreLangScroll() {
  if (!pending) return;
  const target = findSection(pending.key);
  if (target) window.scrollTo({ top: sectionTop(target) + pending.offset, behavior: 'instant' });
  pending = null;
}
