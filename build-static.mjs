import { build } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
process.env.VITE_BUILD_TIME = String(Date.now());
await build();
await build({ build: { ssr: 'src/entry-server.tsx', outDir: '.ssr', rollupOptions: { output: { manualChunks: undefined } } } });
const { render } = await import('./.ssr/entry-server.js');
const shell = await fs.readFile('dist/index.html', 'utf8');
const routes = ['/', '/day-charter', '/sunset-cruise', '/overnight-charter', '/pricing', '/facilities', '/legal-notice', '/privacy-policy', '/cookie-policy'];
const languages = ['en', 'fr', 'it', 'de', 'es'];
const urls = [];
let missing = [];
for (const language of languages) for (const route of routes) {
  const url = language === 'en' ? route : `/${language}${route === "/" ? "" : route}`;
  const rendered = render(url);
  const html = shell.replace('<html lang="en">', `<html lang="${language}" data-build-time="${process.env.VITE_BUILD_TIME}">`).replace('<!--app-head-->', rendered.head).replace('<!--app-html-->', rendered.html);
  const destination = url === '/' ? 'dist/index.html' : path.join('dist', url.slice(1) + '.html');
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, html);
  urls.push(url);
  missing = rendered.missing;
}
await fs.writeFile('.ssr/missing-translations.json', JSON.stringify(missing, null, 2));
const escape = s => s.replaceAll('&','&amp;');
const entries = urls.map(url => {
 const route = url.replace(/^\/(fr|it|de|es)(?=\/|$)/, '') || '/';
 const alternates = languages.map(lang => `<xhtml:link rel="alternate" hreflang="${lang}" href="https://www.svironmonkey.nl${escape(lang === 'en' ? route : `/${lang}${route === "/" ? "" : route}`)}"/>`).join('');
 return `<url><loc>https://www.svironmonkey.nl${escape(url)}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="https://www.svironmonkey.nl${escape(route)}"/></url>`;
});
await fs.writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`);
console.log(`Generated ${urls.length} complete HTML pages.`);
