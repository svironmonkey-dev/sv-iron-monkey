import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  essential: boolean; // Always true, required for site functionality
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  preferences: CookiePreferences;
  hasConsented: boolean;
  hasAnalyticsConsent: boolean;
  hasMarketingConsent: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  isPreferencesOpen: boolean;
}

const STORAGE_KEY = 'cookie-consent-preferences';

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences({
          essential: true, // Always true
          analytics: parsed.analytics ?? false,
          marketing: parsed.marketing ?? false,
        });
        setHasConsented(true);
      } catch (e) {
        console.error('Failed to parse cookie preferences:', e);
      }
    }
  }, []);

  // Save preferences to localStorage
  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setHasConsented(true);
    setIsPreferencesOpen(false);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const updatePreferences = (prefs: Partial<CookiePreferences>) => {
    const newPrefs = {
      ...preferences,
      ...prefs,
      essential: true, // Always keep essential true
    };
    savePreferences(newPrefs);
  };

  const openPreferences = () => setIsPreferencesOpen(true);
  const closePreferences = () => setIsPreferencesOpen(false);

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasConsented,
        hasAnalyticsConsent: preferences.analytics,
        hasMarketingConsent: preferences.marketing,
        acceptAll,
        rejectNonEssential,
        updatePreferences,
        openPreferences,
        closePreferences,
        isPreferencesOpen,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
