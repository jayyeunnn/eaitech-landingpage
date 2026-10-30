// Satu konfigurasi untuk semua tombol WhatsApp (F-002, BR-001, BR-003).
//
// PLACEHOLDER (P-001): nomor tujuan dan teks pesan awal belum diberikan tim.
// Selama nomor kosong, link memakai `wa.me/?text=` yang membuka pilihan
// penerima di WhatsApp - sengaja tidak memakai nomor rekaan agar tidak
// terkirim ke orang lain. Isi `number` (format internasional tanpa + dan
// spasi, mis. 628xxxxxxxxxx) lalu ubah `placeholder` menjadi false.

import { content } from '../i18n/content';
import type { Lang } from '../i18n/ui';

export const whatsapp = {
  number: '',
  placeholder: true,
};

export function waLink(lang: Lang, service?: string): string {
  const messages = content[lang].whatsapp;
  const text = service ? messages.service.replace('{service}', service) : messages.general;
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;
}
