// Semua teks halaman ID dan EN (AGENTS aturan 6). Ubah keduanya bersamaan.
//
// PLACEHOLDER (BR-002): setiap blok dengan `placeholder: true` belum final. Cari
// `placeholder: true` di file ini dan di src/config/whatsapp.ts untuk daftar
// lengkap sebelum publikasi.
// - Teks EN berasal dari frame 09 FigCraft (revisi Jay 2026-11-06); teks ID
//   terjemahan agent, perlu ditinjau Jay.
// - Copy layanan: menunggu tim (P-002)
// - Project: tiga karya dummy di src/data/projects.ts, diganti project asli Jay dan tim (F-006)
// - Cara Kerja dan jawaban FAQ: menunggu tim (P-008)
// - Kontak lain di footer: menunggu tim (P-016)
// - Penulisan "EAI Tech" vs "eAI Tech" dan ejaan "Intelegens": P-012

import type { Lang } from './ui';

export type ServiceKey = 'digital' | 'ai' | 'design' | 'content';
export type ServiceIcon =
  | 'website'
  | 'apps'
  | 'erp'
  | 'automation'
  | 'agent'
  | 'graphic'
  | 'three-d'
  | 'video'
  | 'social';

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
  nav: { services: string; project: string; process: string; faq: string };
  hero: { title: [string, string]; lead: string; discuss: string; work: string; placeholder: boolean };
  services: {
    title: string;
    concept: string;
    discuss: string;
    items: {
      key: ServiceKey;
      name: string;
      alt: string;
      list: { icon: ServiceIcon; name: string }[];
    }[];
    placeholder: boolean;
  };
  project: {
    title: string;
    concept: string;
    viewAll: string;
    placeholder: boolean;
  };
  projectPages: {
    meta: { title: string; description: string };
    all: string;
    filter: string;
    back: string;
    contact: string;
    about: string;
    challenge: string;
    solution: string;
    closer: string;
    next: string;
    view: string;
    preview: string;
    close: string;
  };
  process: {
    title: string;
    stages: { title: string; body: string }[];
    placeholder: boolean;
  };
  faq: {
    label: string;
    title: [string, string];
    items: { q: string; a: string }[];
    placeholder: boolean;
  };
  cta: { title: [string, string]; big: string; via: string; button: string; placeholder: boolean };
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
      title: 'EAI Tech - Produk Digital, AI, Desain dan Konten',
      description:
        'EAI Tech mengerjakan website, aplikasi, sistem berbasis AI, desain dan konten. Ceritakan kebutuhanmu lewat WhatsApp.',
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
    nav: { services: 'Layanan', project: 'Project', process: 'Cara Kerja', faq: 'FAQ' },
    hero: {
      title: ['Desain bertemu', 'teknologi.'],
      lead: 'Dari website dan aplikasi hingga visual 3D dan sistem berbasis AI, kami mewujudkan idemu.',
      discuss: 'Diskusikan proyekmu',
      work: 'Lihat karya kami',
      placeholder: true,
    },
    services: {
      title: 'Yang Kami Kerjakan',
      concept: 'Demo konsep / contoh ilustrasi',
      discuss: 'Diskusikan proyekmu',
      items: [
        {
          key: 'digital',
          name: 'Produk Digital',
          alt: 'Contoh konsep dashboard workspace dan aplikasi di HP.',
          list: [
            { icon: 'website', name: 'Website' },
            { icon: 'apps', name: 'Aplikasi' },
            { icon: 'erp', name: 'ERP System' },
          ],
        },
        {
          key: 'ai',
          name: 'AI & Automation',
          alt: 'Contoh konsep alur automation yang menghubungkan beberapa langkah kerja.',
          list: [
            { icon: 'automation', name: 'Automation' },
            { icon: 'agent', name: 'Agentic AI' },
          ],
        },
        {
          key: 'design',
          name: 'Desain & Visualisasi',
          alt: 'Contoh konsep poster dan render 3D benda keramik.',
          list: [
            { icon: 'graphic', name: 'Desain Grafis' },
            { icon: 'three-d', name: 'Desain & Visualisasi 3D' },
          ],
        },
        {
          key: 'content',
          name: 'Konten & Media Sosial',
          alt: 'Contoh konsep linimasa editing video dan papan rencana konten.',
          list: [
            { icon: 'video', name: 'Editing Video & Multimedia' },
            { icon: 'social', name: 'Strategi & Konsultasi Media Sosial' },
          ],
        },
      ],
      placeholder: true,
    },
    project: {
      title: 'Project',
      concept: 'Concept Project',
      viewAll: 'Lihat Semua',
      placeholder: true,
    },
    projectPages: {
      meta: {
        title: 'Project - EAI Tech',
        description: 'Project konsep EAI Tech di bidang produk digital, desain grafis dan visualisasi 3D.',
      },
      all: 'Semua Project',
      filter: 'Saring project',
      back: 'Kembali ke Project',
      contact: 'Kontak',
      about: 'Tentang project',
      challenge: 'Tantangannya',
      solution: 'Solusinya',
      closer: 'Klik untuk memperbesar',
      next: 'Project berikutnya',
      view: 'Lihat project',
      preview: 'Pratinjau gambar',
      close: 'Tutup',
    },
    process: {
      title: 'Cara kerja.',
      stages: [
        { title: 'Discover', body: 'Ceritakan idemu, kebutuhanmu, atau masalah yang ingin diselesaikan. Ide yang masih kasar pun tidak apa-apa.' },
        { title: 'Plan', body: 'Bentuk arah, cakupan dan perpaduan layanan yang tepat bersama-sama, sesuai proyekmu.' },
        { title: 'Create', body: 'Wujudkan arah yang disepakati menjadi desain, konten atau solusi digital yang berjalan.' },
        { title: 'Review & Refine', body: 'Tinjau hasilnya bersama, sampaikan masukan dan rapikan detail yang penting.' },
        { title: 'Deliver', body: 'Terima hasil akhirnya, beserta file atau akses yang relevan dengan proyekmu.' },
      ],
      placeholder: true,
    },
    faq: {
      label: 'FAQ',
      title: ['Perlu', 'diketahui'],
      items: [
        { q: 'Apa itu eAI Tech?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
        { q: 'Bisakah kita berdiskusi kalau ide proyekku masih belum matang?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
        { q: 'Bisakah aku menggabungkan beberapa layanan dalam satu proyek?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
        { q: 'Apa yang perlu aku siapkan sebelum memulai proyek?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
        { q: 'Bagaimana cara mulai bekerja dengan eAI Tech?', a: 'Jawaban placeholder. Isi menunggu tim EAI Tech.' },
      ],
      placeholder: true,
    },
    cta: {
      title: ['Punya ide atau masalah', 'yang ingin diselesaikan? Ceritakan ke kami.'],
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
      title: 'EAI Tech - Digital Products, AI, Design and Content',
      description:
        'EAI Tech builds websites, apps, AI-powered systems, design and content. Tell us what you need on WhatsApp.',
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
    nav: { services: 'Services', project: 'Project', process: 'How it works', faq: 'FAQ' },
    hero: {
      title: ['Design meets', 'technology.'],
      lead: 'From websites and apps to 3D visuals and AI-powered systems, we bring your ideas to life.',
      discuss: 'Discuss your project',
      work: 'View our work',
      placeholder: true,
    },
    services: {
      title: 'What We Do',
      concept: 'Concept demo / illustrative example',
      discuss: 'Discuss your project',
      items: [
        {
          key: 'digital',
          name: 'Digital Products',
          alt: 'Concept example of a workspace dashboard and a phone app.',
          list: [
            { icon: 'website', name: 'Website' },
            { icon: 'apps', name: 'Apps' },
            { icon: 'erp', name: 'ERP System' },
          ],
        },
        {
          key: 'ai',
          name: 'AI & Automation',
          alt: 'Concept example of an automation flow connecting several work steps.',
          list: [
            { icon: 'automation', name: 'Automation' },
            { icon: 'agent', name: 'Agentic AI' },
          ],
        },
        {
          key: 'design',
          name: 'Design & Visualization',
          alt: 'Concept example of a poster and a 3D render of ceramic objects.',
          list: [
            { icon: 'graphic', name: 'Graphic Design' },
            { icon: 'three-d', name: '3D Design & Visualization' },
          ],
        },
        {
          key: 'content',
          name: 'Content & Social Media',
          alt: 'Concept example of a video editing timeline and a content planning board.',
          list: [
            { icon: 'video', name: 'Video & Multimedia Editing' },
            { icon: 'social', name: 'Social Media Strategy & Consulting' },
          ],
        },
      ],
      placeholder: true,
    },
    project: {
      title: 'Project',
      concept: 'Concept Project',
      viewAll: 'View All',
      placeholder: true,
    },
    projectPages: {
      meta: {
        title: 'Project - EAI Tech',
        description: 'EAI Tech concept projects across digital products, graphic design and 3D visualization.',
      },
      all: 'All Projects',
      filter: 'Filter projects',
      back: 'Back to Projects',
      contact: 'Contact',
      about: 'About the project',
      challenge: 'The challenge',
      solution: 'The solution',
      closer: 'Click for a closer look',
      next: 'Next project',
      view: 'View project',
      preview: 'Image preview',
      close: 'Close',
    },
    process: {
      title: 'How it works.',
      stages: [
        { title: 'Discover', body: 'Tell us your idea, what you need, or the problem you want to solve. It is okay to start with a rough idea.' },
        { title: 'Plan', body: 'Shape the direction, scope and right mix of services together, around your project.' },
        { title: 'Create', body: 'Turn the agreed direction into designs, content or a working digital solution.' },
        { title: 'Review & Refine', body: 'Look at the work together, share feedback and refine the details that matter.' },
        { title: 'Deliver', body: 'Receive the final work, along with the files or access relevant to your project.' },
      ],
      placeholder: true,
    },
    faq: {
      label: 'FAQ',
      title: ['Good to', 'know'],
      items: [
        { q: 'What is eAI Tech?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
        { q: 'Can we talk if my project idea is still taking shape?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
        { q: 'Can I combine several services in one project?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
        { q: 'What should I prepare before starting a project?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
        { q: 'How do I start working with eAI Tech?', a: 'Placeholder answer. Content waits for the EAI Tech team.' },
      ],
      placeholder: true,
    },
    cta: {
      title: ['Have an idea or a problem', 'to solve? Tell us about it.'],
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
