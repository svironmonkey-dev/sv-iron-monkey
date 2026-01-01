import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
            Our Offerings
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Pricing Plans
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Transparent pricing for unforgettable experiences. Choose from sunset cruises, full-day adventures, or week-long charters.
          </p>
          <Button
            variant="gold"
            size="lg"
            onClick={() => navigate("/pricing")}
          >
            View Pricing Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
