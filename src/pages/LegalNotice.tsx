import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import Header from "@/components/Header";

const LegalNotice = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Legal Notice | SV Iron Monkey"
        description="Legal notice and company information for MONKEY'S CHARTER B.V., operator of SV Iron Monkey luxury yacht charters."
        canonicalUrl="https://svironmonkey.nl/legal-notice"
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
                  Legal Notice
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="lead text-lg">
                This website, www.svironmonkey.nl, is operated by:
              </p>

              <div className="bg-muted/30 p-6 rounded-lg my-8">
                <p className="font-semibold text-foreground mb-2">MONKEY'S CHARTER B.V.</p>
                <p className="mb-1">VAT Number: NL866509914B01</p>
                <p className="mb-1">Registered office: Rijksstraatweg 239, 9752CB Haren, The Netherlands</p>
                <p>Email: <a href="mailto:info@svironmonkey.nl" className="text-accent hover:underline">info@svironmonkey.nl</a></p>
              </div>

              <p>
                MONKEY'S CHARTER B.V. is a private limited liability company incorporated under Dutch law and operating internationally, including maritime activities carried out in Spain.
              </p>

              <p>
                The main activity of the company is the commercial charter of the sailing vessel "Iron Monkey", including skipper services.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Intellectual Property</h2>
              <p>
                All content on this website, including texts, images, branding, logos and design elements, is the property of MONKEY'S CHARTER B.V. or used with appropriate authorization. Any reproduction, distribution or commercial use without prior written consent is strictly prohibited.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Liability</h2>
              <p>
                MONKEY'S CHARTER B.V. strives to ensure that all information provided on this website is accurate and up to date. However, the company does not guarantee the completeness or accuracy of the content and reserves the right to modify it at any time without prior notice.
              </p>
              <p>
                The company shall not be held liable for any damages arising from the use of this website.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LegalNotice;
