// Perbesar gambar di Detail Project (keputusan Jay 2026-11-06): buka 200 ms, tutup
// 150 ms, Esc dan klik di luar gambar menutup. `<dialog>` menjaga fokus dan
// mengembalikannya ke gambar yang diklik. Reduced motion: tanpa gerak.

import { animate } from 'motion';

export function initLightbox() {
  const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox]');
  if (!dialog) return;

  const image = dialog.querySelector<HTMLImageElement>('[data-lightbox-image]')!;
  const caption = dialog.querySelector<HTMLElement>('[data-lightbox-caption]')!;
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-lightbox-close]')!;
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-lightbox-open]'));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let closing = false;

  const open = (event: MouseEvent) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    const link = event.currentTarget as HTMLAnchorElement;
    image.src = link.href;
    image.alt = link.dataset.alt ?? '';
    caption.textContent = link.dataset.caption ?? '';
    dialog.showModal();
    if (!reduced) {
      animate(
        dialog,
        { opacity: [0, 1], transform: ['scale(0.96)', 'scale(1)'] },
        { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
      );
    }
  };

  const close = async () => {
    if (closing || !dialog.open) return;
    closing = true;
    if (!reduced) {
      await animate(dialog, { opacity: 0, transform: 'scale(0.98)' }, { duration: 0.15, ease: 'easeOut' });
    }
    dialog.close();
    image.removeAttribute('src');
    closing = false;
  };

  const onCancel = (event: Event) => {
    event.preventDefault();
    close();
  };
  const onBackdrop = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('[data-lightbox-image], [data-lightbox-close]')) close();
  };

  for (const link of links) link.addEventListener('click', open);
  closeButton.addEventListener('click', close);
  dialog.addEventListener('cancel', onCancel);
  dialog.addEventListener('click', onBackdrop);

  return () => {
    for (const link of links) link.removeEventListener('click', open);
    closeButton.removeEventListener('click', close);
    dialog.removeEventListener('cancel', onCancel);
    dialog.removeEventListener('click', onBackdrop);
  };
}
