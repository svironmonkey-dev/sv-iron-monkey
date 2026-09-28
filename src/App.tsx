import { StaticRouter } from "react-router-dom/server";
import { getLanguage } from "./i18n";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { CookieConsentProvider } from "./contexts/CookieConsentContext";
import Index from "./pages/Index";
import Facilities from "./pages/Facilities";
import Charter from "./pages/Charter";
import Pricing from "./pages/Pricing";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import LoadingOverlay from "./components/LoadingOverlay";
import ScrollRestoration from "./components/ScrollRestoration";
import CookieConsentBanner from "./components/CookieConsentBanner";
import MetaPixel from "./components/MetaPixel";
import ConditionalAnalytics from "./components/ConditionalAnalytics";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const App = ({ url, helmetContext = {} }: { url?: string; helmetContext?: object }) => {
  const Router = url ? StaticRouter : BrowserRouter;
  const basename = getLanguage() === "en" ? "/" : `/${getLanguage()}`;
  return (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <CookieConsentProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router basename={basename} location={url}>
            <LoadingOverlay />
            <ScrollRestoration />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/day-charter" element={<Charter slug="day-charter" />} />
              <Route path="/sunset-cruise" element={<Charter slug="sunset-cruise" />} />
              <Route path="/overnight-charter" element={<Charter slug="overnight-charter" />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsentBanner />
          </Router>
        </TooltipProvider>
        <MetaPixel />
        <ConditionalAnalytics />
        <SpeedInsights />
      </CookieConsentProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
};

export default App;
