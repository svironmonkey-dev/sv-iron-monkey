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

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CookieConsentProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <LoadingOverlay />
            <ScrollRestoration />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsentBanner />
          </BrowserRouter>
        </TooltipProvider>
        <MetaPixel />
        <ConditionalAnalytics />
        <SpeedInsights />
      </CookieConsentProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
