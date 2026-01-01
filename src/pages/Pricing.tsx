import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import StructuredData from "@/components/SEO/StructuredData";

const pricingPlans = [
  {
    name: "Sunset Cruise",
    price: "€1,100",
    duration: "4 hours",
    description: "A magical evening on the water",
    features: [
      "Up to 12 guests",
      "Champagne & canapés",
      "Professional crew",
      "Sound system access",
      "Swimming stops",
    ],
    featured: false,
  },
  {
    name: "Day Trip",
    price: "€2,200",
    duration: "8 hours",
    description: "A full day of exploration",
    features: [
      "Up to 12 guests",
      "Gourmet lunch included",
      "All non-alcoholic beverages (alcoholic beverages available upon request)",
      "Water toys, snorkeling & subs",
      "Multiple swimming locations",
      "Customizable itinerary",
    ],
    featured: true,
  },
  {
    name: "Week Charter",
    price: "€16,000",
    duration: "7 days",
    description: "The ultimate adventure",
    features: [
      "Up to 6 overnight guests",
      "Full board catering",
      "Premium beverages",
      "Complete Balearics tour",
      "Daily housekeeping",
      "Concierge services",
      "Airport transfers",
    ],
    featured: false,
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Pricing | SV Iron Monkey Yacht Charter Rates"
        description="Transparent pricing for luxury yacht charters in Mallorca. Sunset cruises from €1,100, day trips from €2,200, and week-long charters from €16,000. Professional crew and premium amenities included."
        keywords="yacht charter prices Mallorca, yacht rental cost, sunset cruise price, day charter rates, weekly yacht rental Balearic Islands"
        canonicalUrl="https://svironmonkey.nl/pricing"
      />
      <StructuredData type="pricing" />
      <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-20 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Page Title with Back Button */}
          <div className="mb-16 flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="text-muted-foreground hover:text-accent transition-colors duration-200 -ml-2"
              aria-label="Back to previous page"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div>
              <h1 className="font-serif text-5xl md:text-7xl text-foreground font-light mb-3">
                Pricing
              </h1>
              <div className="h-px w-24 bg-accent" />
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing for unforgettable experiences. All prices are starting rates.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card border p-8 md:p-10 flex flex-col transition-all duration-300 hover:shadow-[0_4px_30px_hsla(220,50%,12%,0.08)] ${
                  plan.featured
                    ? "border-accent md:-mt-4 md:mb-4"
                    : "border-border"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] tracking-[0.2em] uppercase px-4 py-1">
                    Most Popular
                  </span>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-4xl md:text-5xl text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {plan.duration}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? "gold" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => navigate("/#contact")}
                >
                  Contact Us
                </Button>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground text-sm mt-12">
            Prices may vary based on season and specific requirements. Contact us for a personalized quote.
          </p>
        </div>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default Pricing;

