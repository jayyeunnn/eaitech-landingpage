// Sitemap statis dua bahasa dengan tautan hreflang (Fase 3, PRD bagian 4).
// Domain dari `site` di astro.config.mjs (placeholder sampai domain diketahui).
import type { APIRoute } from 'astro';
import { defaultLang, homePath, languages, type Lang } from '../i18n/ui';

export const GET: APIRoute = ({ site }) => {
  const codes = Object.keys(languages) as Lang[];
  const url = (code: Lang) => new URL(homePath(code), site).href;
  const alternates = [
    ...codes.map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${url(code)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(defaultLang)}"/>`,
  ].join('\n');
  const entries = codes
    .map((code) => `  <url>\n    <loc>${url(code)}</loc>\n${alternates}\n  </url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
