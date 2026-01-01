import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import mallorcaImg from "@/assets/mallorca.png";
import menorcaImg from "@/assets/menorca.png";
import ibizaImg from "@/assets/ibiza.png";
import LazyImage from "./LazyImage";

const islands = [
  {
    name: "Mallorca",
    subtitle: "The Pearl of the Mediterranean",
    description:
      "Discover Mallorca's stunning coastline with dramatic cliffs, hidden coves, and pristine beaches. Perfect for day trips and sunset cruises, explore the Serra de Tramuntana mountains from the sea or anchor in secluded bays.",
    image: mallorcaImg,
    experiences: ["Day Trips", "Sunset Cruises", "Week Charters"],
    highlights: ["Pristine beaches", "Hidden coves", "Dramatic cliffs"],
  },
  {
    name: "Menorca",
    subtitle: "Unspoiled Natural Beauty",
    description:
      "Experience Menorca's tranquil turquoise waters and untouched beaches. This UNESCO Biosphere Reserve offers peaceful anchorages and authentic Mediterranean charm, ideal for extended charters and those seeking serenity.",
    image: menorcaImg,
    experiences: ["Multiple days"],
    highlights: ["Turquoise waters", "Quiet coves", "Natural reserves"],
  },
  {
    name: "Ibiza & Formentera",
    subtitle: "Islands of Contrasts",
    description:
      "Sail to Ibiza and Formentera for a blend of vibrant culture and serene beaches. From the stunning sunset views at Es Vedrà to Formentera's crystalline waters and hidden northern coves, experience both lively coastal towns and peaceful Mediterranean retreats.",
    image: ibizaImg,
    experiences: ["Multiple days"],
    highlights: ["Sunset views", "Vibrant culture", "Secluded beaches"],
  },
];

const IslandsSection = () => {
  return (
    <section id="islands" className="section-padding bg-background" aria-labelledby="islands-heading">
      <div className="container-elegant">
        {/* Section Header */}
        <header className="text-center mb-16 md:mb-24">
          <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
            Destinations
          </span>
          <h2 id="islands-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Balearic Islands
          </h2>
          <div className="divider-gold mx-auto mb-6" aria-hidden="true" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the magnificent Balearic archipelago aboard Iron Monkey. Each island offers unique experiences and unforgettable moments.
          </p>
        </header>

        {/* Islands Grid */}
        <div className="space-y-16 lg:space-y-24">
          {islands.map((island, index) => (
            <article
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <figure
                className={`relative overflow-hidden group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={island.image}
                    alt={`${island.name} - ${island.subtitle}: Beautiful coastline of ${island.name} in the Balearic Islands`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </figure>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <span className="text-accent text-[10px] tracking-[0.3em] uppercase">
                  {island.subtitle}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-4">
                  {island.name}
                </h3>
                <div className="w-16 h-[1px] bg-accent mb-6" aria-hidden="true" />
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  {island.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium tracking-wider uppercase text-foreground mb-3">
                    Highlights
                  </h4>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {island.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="px-3 py-1 bg-muted border border-border text-xs tracking-wide"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Experiences */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium tracking-wider uppercase text-foreground mb-3">
                    Available Experiences
                  </h4>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {island.experiences.map((exp, idx) => (
                      <li
                        key={idx}
                        className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs tracking-wide"
                      >
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-foreground text-sm font-medium hover:text-accent transition-colors group"
                  aria-label={`Plan your journey to ${island.name}`}
                >
                  Plan Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Ready to explore the Balearic Islands? Contact us to create your perfect sailing itinerary.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href="#contact">Book Your Voyage</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IslandsSection;

