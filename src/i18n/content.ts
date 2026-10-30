// Semua teks halaman ID dan EN (AGENTS aturan 6). Ubah keduanya bersamaan.
//
// PLACEHOLDER (BR-002): setiap blok dengan `placeholder: true` belum final dan
// tampil dengan tanda "Placeholder" di halaman. Cari `placeholder: true` di file
// ini dan di src/config/whatsapp.ts untuk daftar lengkap sebelum publikasi.
// - Judul bagian dan ajakan WA: copy final dari tim (P-002). Judul hero
//   sudah dipilih Jay (2026-10-29).
// - Penjelasan layanan: draft teman tim, bukan copy final (P-002)
// - Gambar kartu layanan: menunggu gambar dari Jay/tim (revisi 2026-10-29)
// - Cara Kerja dan FAQ: menunggu tim (P-008)
// - Kontak lain di footer: menunggu tim (P-016)
// - Penulisan "EAI Tech" vs "eAI Tech" dan ejaan "Intelegens": P-012

import type { Lang } from './ui';

export interface Content {
  meta: { title: string; description: string; placeholder: boolean };
  a11y: {
    skip: string;
    home: string;
    logoAlt: string;
    primaryNav: string;
    langSwitch: string;
    newTab: string;
    placeholderTag: string;
  };
  nav: { services: string; process: string; faq: string };
  hero: { title: string; visualAlt: string; placeholder: boolean };
  // Judul bagian dua baris: [baris tipis, baris tebal] (revisi Jay 2026-10-30).
  services: {
    title: [string, string];
    discuss: string;
    image: { label: string; placeholder: boolean };
    items: { name: string; desc: string }[];
    placeholder: boolean;
  };
  process: {
    title: [string, string];
    steps: { title: string; body: string }[];
    placeholder: boolean;
  };
  faq: {
    label: string;
    title: [string, string];
    items: { q: string; a: string }[];
    placeholder: boolean;
  };
  cta: { title: string; big: string; via: string; button: string; placeholder: boolean };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    langTitle: string;
    whatsapp: string;
    otherContacts: { label: string; placeholder: boolean };
    copyright: string;
    backToTop: string;
  };
  whatsapp: { general: string; service: string };
}

export const content: Record<Lang, Content> = {
  id: {
    meta: {
      title: 'EAI Tech - Website, Aplikasi, Automation dan AI',
      description:
        'EAI Tech mengerjakan website, aplikasi, automation, agentic AI dan ERP. Ceritakan kebutuhanmu lewat WhatsApp.',
      placeholder: true,
    },
    a11y: {
      skip: 'Lompat ke konten',
      home: 'EAI Tech, kembali ke atas',
      logoAlt: 'EAI Tech',
      primaryNav: 'Navigasi utama',
      langSwitch: 'Pilih bahasa',
      newTab: '(membuka WhatsApp)',
      placeholderTag: 'Placeholder',
    },
    nav: { services: 'Layanan', process: 'Cara Kerja', faq: 'FAQ' },
    hero: {
      title: 'Dari ide jadi sistem yang berjalan.',
      visualAlt: '',
      placeholder: false,
    },
    services: {
      title: ['Yang kami', 'kerjakan'],
      discuss: 'Diskusikan',
      image: { label: 'Gambar layanan menyusul', placeholder: true },
      items: [
        { name: 'Website', desc: 'Website yang ringan dan membuat pengunjung bertindak.' },
        { name: 'Aplikasi', desc: 'Aplikasi web dan mobile untuk alur kerja nyata penggunanya.' },
        { name: 'Automation', desc: 'Proses manual yang berulang diubah menjadi alur otomatis.' },
        { name: 'Agentic AI', desc: 'Agent AI yang terhubung ke sistem bisnis dan menindaklanjuti pekerjaan.' },
        { name: 'ERP System', desc: 'Satu sistem untuk mengelola operasional bisnis dari ujung ke ujung.' },
      ],
      placeholder: true,
    },
    process: {
      title: ['Cara', 'kerja'],
      steps: [
        { title: 'Diskusi kebutuhan', body: 'Langkah placeholder. Isi menunggu tim EAI Tech.' },
        { title: 'Rancangan', body: 'Langkah placeholder. Isi menunggu tim EAI Tech.' },
        { title: 'Pengerjaan', body: 'Langkah placeholder. Isi menunggu tim EAI Tech.' },
        { title: 'Serah terima', body: 'Langkah placeholder. Isi menunggu tim EAI Tech.' },
      ],
      placeholder: true,
    },
    faq: {
      label: 'FAQ',
      // Judul raksasa dipilih Jay 2026-10-30 (adaptasi FAQ Aperios).
      title: ['Perlu', 'diketahui'],
      items: [
        { q: 'Berapa biaya untuk sebuah proyek?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
        { q: 'Berapa lama pengerjaannya?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
        { q: 'Apakah bisa mulai dari skala kecil?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
        { q: 'Bagaimana setelah proyek selesai?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
      ],
      placeholder: true,
    },
    cta: {
      title: 'Punya ide atau masalah yang ingin diselesaikan? Ceritakan ke kami.',
      // Judul raksasa dipilih Jay 2026-10-30 (adaptasi penutup Aperios).
      big: 'Ayo ngobrol',
      // Teks di kotak hover judul ajakan (arahan Jay 2026-10-30).
      via: 'Via WhatsApp',
      button: 'Chat via WhatsApp',
      placeholder: true,
    },
    footer: {
      tagline: 'Equator Andalas Intelegens',
      navTitle: 'Navigasi',
      contactTitle: 'Kontak',
      langTitle: 'Bahasa',
      whatsapp: 'WhatsApp',
      otherContacts: { label: 'Email · Instagram · LinkedIn', placeholder: true },
      copyright: '© 2026 EAI Tech',
      backToTop: 'Kembali ke atas',
    },
    whatsapp: {
      general: 'Halo EAI Tech, saya ingin berdiskusi tentang kebutuhan saya.',
      service: 'Halo EAI Tech, saya tertarik dengan layanan {service}.',
    },
  },
  en: {
    meta: {
      title: 'EAI Tech - Websites, Apps, Automation and AI',
      description:
        'EAI Tech builds websites, apps, automation, agentic AI and ERP. Tell us what you need on WhatsApp.',
      placeholder: true,
    },
    a11y: {
      skip: 'Skip to content',
      home: 'EAI Tech, back to top',
      logoAlt: 'EAI Tech',
      primaryNav: 'Main navigation',
      langSwitch: 'Choose language',
      newTab: '(opens WhatsApp)',
      placeholderTag: 'Placeholder',
    },
    nav: { services: 'Services', process: 'How it works', faq: 'FAQ' },
    hero: {
      title: 'From idea to a working system.',
      visualAlt: '',
      placeholder: false,
    },
    services: {
      title: ['What we', 'build'],
      discuss: 'Discuss',
      image: { label: 'Service image coming soon', placeholder: true },
      items: [
        { name: 'Website', desc: 'Lightweight websites that get visitors to take action.' },
        { name: 'Apps', desc: 'Web and mobile apps built around how people really work.' },
        { name: 'Automation', desc: 'Repetitive manual work turned into automated flows.' },
        { name: 'Agentic AI', desc: 'AI agents connected to your business systems that follow work through.' },
        { name: 'ERP System', desc: 'One system to run business operations end to end.' },
      ],
      placeholder: true,
    },
    process: {
      title: ['How it', 'works'],
      steps: [
        { title: 'Discuss your needs', body: 'Placeholder step. Content waits for the EAI Tech team.' },
        { title: 'Plan', body: 'Placeholder step. Content waits for the EAI Tech team.' },
        { title: 'Build', body: 'Placeholder step. Content waits for the EAI Tech team.' },
        { title: 'Handover', body: 'Placeholder step. Content waits for the EAI Tech team.' },
      ],
      placeholder: true,
    },
    faq: {
      label: 'FAQ',
      title: ['Good to', 'know'],
      items: [
        { q: 'How much does a project cost?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
        { q: 'How long does it take?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
        { q: 'Can we start small?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
        { q: 'What happens after the project ends?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
      ],
      placeholder: true,
    },
    cta: {
      title: 'Have an idea or a problem to solve? Tell us about it.',
      big: "Let's talk",
      via: 'Via WhatsApp',
      button: 'Chat on WhatsApp',
      placeholder: true,
    },
    footer: {
      tagline: 'Equator Andalas Intelegens',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      langTitle: 'Language',
      whatsapp: 'WhatsApp',
      otherContacts: { label: 'Email · Instagram · LinkedIn', placeholder: true },
      copyright: '© 2026 EAI Tech',
      backToTop: 'Back to top',
    },
    whatsapp: {
      general: 'Hi EAI Tech, I would like to discuss what I need.',
      service: 'Hi EAI Tech, I am interested in your {service} service.',
    },
  },
};
