import { useState } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Button } from './ui/button';
import { X, Cookie, Settings } from 'lucide-react';

const CookieConsentBanner = () => {
  const {
    hasConsented,
    preferences,
    acceptAll,
    rejectNonEssential,
    updatePreferences,
    isPreferencesOpen,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  const [tempPrefs, setTempPrefs] = useState({
    analytics: preferences.analytics,
    marketing: preferences.marketing,
  });

  // Don't show banner if user has already consented
  if (hasConsented && !isPreferencesOpen) {
    return null;
  }

  const handleSavePreferences = () => {
    updatePreferences(tempPrefs);
  };

  // Preferences Modal
  if (isPreferencesOpen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-background border border-border rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-accent" />
              <h2 className="font-serif text-xl">Cookie Preferences</h2>
            </div>
            <button
              onClick={closePreferences}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Close preferences"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <p className="text-muted-foreground text-sm">
              We use cookies to improve your experience, analyze traffic, and measure marketing performance. 
              You can customize your preferences below.
            </p>

            {/* Essential Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium mb-1">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-5 h-5 accent-accent cursor-not-allowed"
                />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium mb-1">Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Help us understand how visitors interact with our website using services like Google Analytics.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={tempPrefs.analytics}
                  onChange={(e) => setTempPrefs({ ...tempPrefs, analytics: e.target.checked })}
                  className="w-5 h-5 accent-accent cursor-pointer"
                />
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium mb-1">Marketing Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Used to measure the effectiveness of advertising campaigns via Meta Pixel.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={tempPrefs.marketing}
                  onChange={(e) => setTempPrefs({ ...tempPrefs, marketing: e.target.checked })}
                  className="w-5 h-5 accent-accent cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-border">
            <Button
              variant="outline"
              onClick={rejectNonEssential}
              className="flex-1"
            >
              Reject All
            </Button>
            <Button
              variant="gold"
              onClick={handleSavePreferences}
              className="flex-1"
            >
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Main Banner
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99] p-4 md:p-6 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl">
      <div className="container-elegant">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
          {/* Icon and Text */}
          <div className="flex items-start gap-4 flex-1">
            <Cookie className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-lg mb-1">Cookie Consent</h3>
              <p className="text-muted-foreground text-sm">
                We use cookies to improve your experience, analyze traffic, and measure marketing performance. 
                You can accept all cookies or manage your preferences.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectNonEssential}
              className="order-2 sm:order-1"
            >
              Reject Non-Essential
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={openPreferences}
              className="order-3 sm:order-2"
            >
              Manage Preferences
            </Button>
            <Button
              variant="gold"
              size="sm"
              onClick={acceptAll}
              className="order-1 sm:order-3"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
