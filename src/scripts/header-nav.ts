// Tandai menu aktif dan bawa anchor bagian yang sedang dibaca di link ganti
// bahasa (FL-002; dipakai bila JS tidak menukar isi di tempat). Bagian "sedang
// dibaca" = yang melintasi sepertiga atas layar.

export function currentSection(): HTMLElement | undefined {
  const line = window.innerHeight / 3;
  return Array.from(document.querySelectorAll<HTMLElement>('[data-section], footer')).find((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= line && r.bottom > line;
  });
}

export function initHeaderNav() {
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-key]'));
  const langLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]'));
  let ticking = false;

  const update = () => {
    ticking = false;
    const key = currentSection()?.dataset.section;
    if (!key) return;

    for (const link of navLinks) {
      if (link.dataset.navKey === key) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }

    for (const link of langLinks) {
      const ids = JSON.parse(link.dataset.targetIds ?? '{}') as Record<string, string>;
      const hash = key !== 'hero' && ids[key] ? `#${ids[key]}` : '';
      link.href = `${link.dataset.base}${hash}`;
    }
  };

  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();

  return () => {
    window.removeEventListener('scroll', requestUpdate);
    window.removeEventListener('resize', requestUpdate);
  };
}
