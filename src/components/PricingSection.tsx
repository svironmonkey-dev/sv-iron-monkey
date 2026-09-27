import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const PricingSection = () => {
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
            A sunset together, a full day at sea, or a little longer aboard. Explore our starting prices and make your charter your own.
          </p>
          <Button
            variant="gold"
            size="lg"
            asChild
          >
            <Link to="/pricing">View Pricing Plans</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
