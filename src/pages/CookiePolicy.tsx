import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const CookiePolicy = () => {
  const navigate = useNavigate();
  const { openPreferences } = useCookieConsent();

  return (
    <>
      <SEOHead
        title="Cookie Policy | SV Iron Monkey"
        description="Cookie policy for SV Iron Monkey yacht charters. Learn about the cookies we use and how to manage your preferences."
        canonicalUrl="https://svironmonkey.nl/cookie-policy"
      />
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 pt-24 pb-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            {/* Page Title with Back Button */}
            <div className="mb-12 flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="text-muted-foreground hover:text-accent transition-colors duration-200 -ml-2"
                aria-label="Back to previous page"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <div>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground font-light">
                  Cookie Policy
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground/80">
              <h2 className="font-serif text-2xl text-foreground mt-8 mb-6">What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and provide valuable insights into how visitors use the site.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Types of Cookies Used</h2>
              <p>This website uses the following types of cookies:</p>

              <h3 className="font-serif text-xl text-foreground mt-8 mb-4">1. Technical Cookies (Essential)</h3>
              <p>
                These cookies are necessary for the proper functioning of the website. They enable core functionality such as page navigation and security features. The website cannot function properly without these cookies.
              </p>

              <h3 className="font-serif text-xl text-foreground mt-8 mb-4">2. Analytics Cookies</h3>
              <p>
                We use Vercel Analytics to analyze website traffic and improve performance. These cookies help us understand how visitors interact with our website, which pages are most popular, and how users navigate through the site.
              </p>

              <h3 className="font-serif text-xl text-foreground mt-8 mb-4">3. Marketing Cookies</h3>
              <p>
                We use Meta Pixel to measure the effectiveness of advertising campaigns. These cookies track your interactions with our ads and help us provide more relevant advertising.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Consent</h2>
              <p>
                Non-essential cookies (analytics and marketing) will only be activated after you provide explicit consent via the cookie banner.
              </p>
              <p>
                You can withdraw your consent at any time through the cookie settings panel.
              </p>

              <div className="my-8">
                <Button variant="gold" onClick={openPreferences}>
                  Manage Cookie Preferences
                </Button>
              </div>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">More Information</h2>
              <p>
                For more information about how we handle your data, please read our{" "}
                <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>.
              </p>
              <p>
                If you have any questions about our use of cookies, please contact us at{" "}
                <a href="mailto:info@svironmonkey.nl" className="text-accent hover:underline">info@svironmonkey.nl</a>.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
