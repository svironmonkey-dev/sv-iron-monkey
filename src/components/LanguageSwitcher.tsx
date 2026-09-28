import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { getLanguage, languages, languageNames, languageFlags, languagePath } from '@/i18n';
const LanguageSwitcher = ({ light = false }: { light?: boolean }) => {
  const location = useLocation();
  const current = getLanguage();
  const [suffix, setSuffix] = useState("");
  useEffect(() => { setSuffix(location.search + location.hash); }, [location.search, location.hash]);
  return <details className={`relative shrink-0 ${light ? 'text-white' : 'text-foreground'}`}>
    <summary aria-label="Choose language" className="list-none cursor-pointer flex items-center gap-1 rounded-sm px-2 py-2 text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
      <span aria-hidden="true" className="text-lg">{languageFlags[current]}</span><span translate="no">{current.toUpperCase()}</span><span aria-hidden="true">⌄</span>
    </summary>
    <nav aria-label="Languages" className="absolute right-0 top-full mt-2 min-w-40 bg-background text-foreground border border-border shadow-lg py-2">
      {languages.map(code => <a key={code} href={languagePath(location.pathname, code) + suffix} hrefLang={code} lang={code} aria-current={code === current ? 'true' : undefined} className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted focus-visible:bg-muted" translate="no"><span aria-hidden="true">{languageFlags[code]}</span>{languageNames[code]}</a>)}
    </nav>
  </details>;
};
export default LanguageSwitcher;
