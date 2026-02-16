import { Analytics } from "@vercel/analytics/react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const ConditionalAnalytics = () => {
  const { hasAnalyticsConsent } = useCookieConsent();

  // Only render Analytics component if analytics consent is granted
  if (!hasAnalyticsConsent) {
    return null;
  }

  return <Analytics />;
};

export default ConditionalAnalytics;
