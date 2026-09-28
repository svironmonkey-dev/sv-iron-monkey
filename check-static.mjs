import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const routes = ['', '/day-charter', '/sunset-cruise', '/overnight-charter', '/pricing', '/facilities', '/legal-notice', '/privacy-policy', '/cookie-policy'];
const titles = { en: 'Wake up somewhere beautiful.', fr: 'Réveillez-vous dans un lieu magnifique.', it: 'Risvegliati in un luogo speciale.', de: 'An einem wunderschönen Ort aufwachen.' };
let checks = 0;
for (const lang of ['en','fr','it','de']) for (const route of routes) {
  const url = (lang === 'en' ? '' : `/${lang}`) + route || '/';
  const file = url === '/' ? 'dist/index.html' : `dist${url}.html`;
  const html = await fs.readFile(file,'utf8');
  assert(html.includes(`<html lang="${lang}"`), `${url}: document language`);
  assert(html.includes(`href="https://www.svironmonkey.nl${url}"`), `${url}: canonical`);
  assert.equal((html.match(/rel="canonical"/g)||[]).length,1,`${url}: one canonical`);
  assert.equal((html.match(/rel="alternate"/g)||[]).length,5,`${url}: language alternates`);
  assert(html.includes('<h1') || html.includes('<h2'), `${url}: content available in HTML`);
  assert(!html.includes('+34-XXX') && !html.includes('"lowPrice":"350"'), `${url}: no obsolete structured data`);
  if (route === '/overnight-charter') assert(html.includes(titles[lang]),`${url}: translated content`);
  if (lang !== 'en') assert(!html.includes('>View Pricing Plans<') && !html.includes('>Your time.</h1>'), `${url}: translated navigation`);
  checks++;
}
const sitemap=await fs.readFile('dist/sitemap.xml','utf8');
assert.equal((sitemap.match(/<url>/g)||[]).length,36);
console.log(`${checks} static pages verified: rendered content, language, canonical, alternates, schema and sitemap.`);
