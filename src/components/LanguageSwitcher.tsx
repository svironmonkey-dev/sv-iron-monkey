import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { getLanguage, languages, languageNames, languagePath, type Language } from '@/i18n';
// Draw flags as vectors: regional-indicator emoji appear as letters on some devices.
const LanguageFlag = ({ code }: { code: Language }) => (
  <svg viewBox="0 0 60 40" width="21" height="14" aria-hidden="true" focusable="false" className="shrink-0 rounded-[1px]">
    {code === 'en' ? <>
      <path fill="#012169" d="M0 0h60v40H0z" />
      <path stroke="#fff" strokeWidth="8" d="m0 0 60 40M60 0 0 40" />
      <path stroke="#C8102E" strokeWidth="3" d="m0 0 60 40M60 0 0 40" />
      <path stroke="#fff" strokeWidth="13" d="M30 0v40M0 20h60" />
      <path stroke="#C8102E" strokeWidth="8" d="M30 0v40M0 20h60" />
    </> : code === 'de' ? <>
      <path fill="#000" d="M0 0h60v14H0z" />
      <path fill="#DD0000" d="M0 13.333h60v13.334H0z" />
      <path fill="#FFCE00" d="M0 26.666h60V40H0z" />
    </> : <>
      <path fill={code === 'fr' ? '#002395' : '#009246'} d="M0 0h20v40H0z" />
      <path fill="#fff" d="M20 0h20v40H20z" />
      <path fill={code === 'fr' ? '#ED2939' : '#CE2B37'} d="M40 0h20v40H40z" />
    </>}
  </svg>
);
const LanguageSwitcher = ({ light = false }: { light?: boolean }) => {
  const location = useLocation();
  const current = getLanguage();
  const [suffix, setSuffix] = useState("");
  useEffect(() => { setSuffix(location.search + location.hash); }, [location.search, location.hash]);
  return <details className={`relative shrink-0 ${light ? 'text-white' : 'text-foreground'}`}>
    <summary aria-label="Choose language" className="list-none cursor-pointer flex items-center gap-1 rounded-sm px-2 py-2 text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
      <LanguageFlag code={current} /><span translate="no">{current.toUpperCase()}</span><span aria-hidden="true">⌄</span>
    </summary>
    <nav aria-label="Languages" className="absolute right-0 top-full mt-2 min-w-40 bg-background text-foreground border border-border shadow-lg py-2">
      {languages.map(code => <a key={code} href={languagePath(location.pathname, code) + suffix} hrefLang={code} lang={code} aria-current={code === current ? 'true' : undefined} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted focus-visible:bg-muted" translate="no"><LanguageFlag code={code} />{languageNames[code]}</a>)}
    </nav>
  </details>;
};
export default LanguageSwitcher;
