// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Output statis (SSG) dan dua bahasa: `/` Inggris (default), `/id` Indonesia.
// Rujukan: PRD bagian 4, F-005, BR-004 (revisi Jay 2026-10-29).
export default defineConfig({
  // Domain dibeli Jay 2026-11-06. Dipakai untuk URL canonical, hreflang, Open
  // Graph dan sitemap.
  site: 'https://eaitech.id',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
