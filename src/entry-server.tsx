import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { languageFromPath, setLanguage, missingMessages } from './i18n';
HelmetProvider.canUseDOM = false;
export function render(url: string) {
  setLanguage(languageFromPath(url));
  const context = {} as { helmet: HelmetServerState };
  const html = renderToString(<App url={url} helmetContext={context} />);
  const { helmet } = context;
  return { html, head: helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() + helmet.script.toString(), missing: [...missingMessages] };
}
