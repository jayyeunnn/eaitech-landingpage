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

export const projectsPath = (lang: Lang) => `${homePath(lang)}projects/`;

export const projectPath = (lang: Lang, slug: string) => `${projectsPath(lang)}${slug}/`;

// Kunci bagian yang sama di kedua bahasa; id anchor mengikuti bahasa.
export type SectionKey = 'hero' | 'services' | 'project' | 'process' | 'faq' | 'contact';

export const sectionIds: Record<Lang, Record<SectionKey, string>> = {
  id: {
    hero: 'beranda',
    services: 'layanan',
    project: 'project',
    process: 'cara-kerja',
    faq: 'faq',
    contact: 'hubungi',
  },
  en: {
    hero: 'home',
    services: 'services',
    project: 'project',
    process: 'how-it-works',
    faq: 'faq',
    contact: 'contact',
  },
};
