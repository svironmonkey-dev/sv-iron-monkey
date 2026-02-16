import { useEffect } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

const META_PIXEL_ID = '1193176742980104';

const MetaPixel = () => {
  const { hasMarketingConsent } = useCookieConsent();

  useEffect(() => {
    // Only load Meta Pixel if marketing consent is granted
    if (!hasMarketingConsent) {
      return;
    }

    // Check if fbq is already loaded
    if (window.fbq) {
      return;
    }

    // Initialize fbq
    const fbq = function (...args: unknown[]) {
      if ((fbq as { callMethod?: (...args: unknown[]) => void }).callMethod) {
        (fbq as { callMethod: (...args: unknown[]) => void }).callMethod(...args);
      } else {
        (fbq as { queue: unknown[] }).queue.push(args);
      }
    };

    (fbq as { push: typeof Array.prototype.push }).push = fbq as unknown as typeof Array.prototype.push;
    (fbq as { loaded: boolean }).loaded = true;
    (fbq as { version: string }).version = '2.0';
    (fbq as { queue: unknown[] }).queue = [];

    window.fbq = fbq;
    if (!window._fbq) {
      window._fbq = fbq;
    }

    // Load the Facebook Pixel script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Initialize and track PageView
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');

  }, [hasMarketingConsent]);

  // Render noscript fallback only when consent is given
  if (!hasMarketingConsent) {
    return null;
  }

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
};

export default MetaPixel;
