import messages from './messages.json';
export const languages = ['en', 'fr', 'it', 'de'] as const;
export type Language = typeof languages[number];
export const languageNames = { en: 'English', fr: 'Français', it: 'Italiano', de: 'Deutsch' };
export const languageFlags = { en: '🇬🇧', fr: '🇫🇷', it: '🇮🇹', de: '🇩🇪' };
let language: Language = 'en';
export const getLanguage = () => language;
export const setLanguage = (value: Language) => { language = value; };
export const languageFromPath = (path: string): Language => languages.find(code => code !== 'en' && (path === `/${code}` || path.startsWith(`/${code}/`))) || 'en';
export const stripLanguage = (path: string) => path.replace(/^\/(fr|it|de)(?=\/|$)/, '') || '/';
export const languagePath = (path: string, code = language) => {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const clean = stripLanguage(path);
  return code === 'en' ? clean : `/${code}${clean === "/" ? "" : /^\/[?#]/.test(clean) ? clean.slice(1) : clean}`;
};
export const dateLocale = () => ({ en: 'en-GB', fr: 'fr-FR', it: 'it-IT', de: 'de-DE' }[language]);
export const missingMessages = new Set<string>();
const dictionary = messages as Record<string, string[]>;
export function t(value: string): string {
  if (!value || language === 'en') return value;
  const key = value.replace(/\s+/g, ' ').trim();
  const entry = dictionary[key];
  if (entry) return value.replace(value.trim(), entry[language === 'fr' ? 0 : language === 'it' ? 1 : 2]);
  // Braced messages keep dates/counts intact and translate complete sentences.
  for (const [template, translations] of Object.entries(dictionary)) {
    if (!template.includes('{')) continue;
    const names: string[] = [];
    const pattern = template.split(/(\{\w+\})/).map(part => {
      if (/^\{\w+\}$/.test(part)) { names.push(part.slice(1,-1)); return '(.+?)'; }
      return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('');
    const match = key.match(new RegExp(`^${pattern}$`));
    if (match) { let result = translations[language === 'fr' ? 0 : language === 'it' ? 1 : 2]; names.forEach((name,index) => { result = result.split(`{${name}}`).join(match[index+1]); }); return result; }
  }
  if (/[A-Za-z]{3}/.test(key)) missingMessages.add(key);
  return value;
}
export const formatMessage = (key: string, values: Record<string, string | number>) => Object.entries(values).reduce((result,[name,value]) => result.split(`{${name}}`).join(String(value)), t(key));
