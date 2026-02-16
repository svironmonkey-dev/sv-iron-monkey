import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Privacy Policy | SV Iron Monkey"
        description="Privacy policy for SV Iron Monkey yacht charters. Learn how we collect, process, and protect your personal data in accordance with GDPR."
        canonicalUrl="https://svironmonkey.nl/privacy-policy"
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
                  Privacy Policy
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground/80">
              <h2 className="font-serif text-2xl text-foreground mt-8 mb-6">1. Data Controller</h2>
              <p>The data controller responsible for processing your personal data is:</p>
              <div className="bg-muted/30 p-6 rounded-lg my-6">
                <p className="font-semibold text-foreground mb-2">MONKEY'S CHARTER B.V.</p>
                <p className="mb-1">VAT: NL866509914B01</p>
                <p className="mb-1">Rijksstraatweg 239, 9752CB Haren, The Netherlands</p>
                <p>Email: <a href="mailto:info@svironmonkey.nl" className="text-accent hover:underline">info@svironmonkey.nl</a></p>
              </div>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">2. What Data We Collect</h2>
              <p>We may collect the following personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Requested dates</li>
                <li>Number of guests</li>
                <li>Booking preferences or additional information provided by the user</li>
              </ul>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">3. How We Collect Data</h2>
              <p>Personal data is collected through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact forms</li>
                <li>Booking forms</li>
                <li>Direct email communication</li>
              </ul>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">4. Purpose of Processing</h2>
              <p>Your data is processed for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Managing inquiries and bookings</li>
                <li>Providing requested services</li>
                <li>Administrative and operational management</li>
                <li>Compliance with legal obligations</li>
              </ul>
              <p className="mt-4">
                We do not send newsletters and do not use your data for unsolicited marketing communications.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">5. Legal Basis</h2>
              <p>Processing is based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your explicit consent</li>
                <li>The performance of a contract or pre-contractual measures</li>
                <li>Compliance with legal obligations</li>
              </ul>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">6. Data Storage and Processors</h2>
              <p>Your data may be stored and processed by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website hosting provider</li>
                <li>Andronautic (booking/charter management system)</li>
                <li>Google services (Analytics, Tag Manager)</li>
                <li>Meta Platforms (via Meta Pixel)</li>
              </ul>
              <p className="mt-4">
                These providers process data under appropriate data processing agreements in accordance with GDPR requirements.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">7. Data Retention</h2>
              <p>
                Personal data will be retained only for as long as necessary to fulfill the purposes described above and to comply with legal obligations.
              </p>

              <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">8. Your Rights</h2>
              <p>Under the General Data Protection Regulation (GDPR), you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure</li>
                <li>Restrict processing</li>
                <li>Object to processing</li>
                <li>Request data portability</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, please contact: <a href="mailto:info@svironmonkey.nl" className="text-accent hover:underline">info@svironmonkey.nl</a>
              </p>
              <p>
                You also have the right to lodge a complaint with the relevant supervisory authority.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
