// Bahasa, URL dan id bagian per bahasa. Teks halaman ada di content.ts.

export const languages = {
  en: 'English',
  id: 'Indonesia',
} as const;

export type Lang = keyof typeof languages;

// Default Inggris (revisi Jay 2026-10-29, BR-004).
export const defaultLang: Lang = 'en';

export const otherLang = (lang: Lang): Lang => (lang === 'id' ? 'en' : 'id');

export const homePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);

// Kunci bagian yang sama di kedua bahasa; id anchor mengikuti bahasa.
export type SectionKey = 'hero' | 'services' | 'process' | 'faq' | 'contact';

export const sectionIds: Record<Lang, Record<SectionKey, string>> = {
  id: {
    hero: 'beranda',
    services: 'layanan',
    process: 'cara-kerja',
    faq: 'faq',
    contact: 'hubungi',
  },
  en: {
    hero: 'home',
    services: 'services',
    process: 'how-it-works',
    faq: 'faq',
    contact: 'contact',
  },
};
