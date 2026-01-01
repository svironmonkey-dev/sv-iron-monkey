import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import sunsetCruise from "@/assets/sunset-cruise.jpg";
import heroYacht from "@/assets/hero-yacht.jpg";
import yachtCabin from "@/assets/yacht-deck.png";
import LazyImage from "./LazyImage";

const experiences = [
  {
    title: "Day Trips",
    subtitle: "Magic of Mallorca",
    description:
      "Spend a perfect day exploring crystal-clear waters, hidden coves, and pristine beaches. Includes gourmet lunch and refreshments.",
    image: yachtCabin,
    duration: "8-10 hours",
  },
  {
    title: "Sunset Cruises",
    subtitle: "Golden Hour",
    description:
      "Watch the sun dip below the horizon while enjoying champagne and canapés. An unforgettable romantic experience.",
    image: sunsetCruise,
    duration: "4 hours",
  },
  {
    title: "Week Charters",
    subtitle: "Complete Luxury",
    description:
      "Embark on a week-long adventure exploring the entire Balearic archipelago. Fully customizable itinerary with overnight stays.",
    image: heroYacht,
    duration: "Multiple days",
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="bg-muted/30" style={{ padding: "80px 30px 60px 30px" }} aria-labelledby="experiences-heading">
      <div className="container-elegant">
        {/* Section Header */}
        <header className="text-center mb-16 md:mb-24">
          <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
            Cruises
          </span>
          <h2 id="experiences-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Experiences
          </h2>
          <div className="divider-gold mx-auto mb-6" aria-hidden="true" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from daily charters to complete luxurious custom voyages accommodating your every desire.
          </p>
        </header>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((experience, index) => (
            <article
              key={index}
              className="group bg-card border border-border overflow-hidden hover:shadow-[0_4px_30px_hsla(220,50%,12%,0.08)] transition-all duration-500"
            >
              {/* Image */}
              <figure className="overflow-hidden max-h-[250px]">
                <LazyImage
                  src={experience.image}
                  alt={`${experience.title} - ${experience.description.substring(0, 50)}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </figure>

              {/* Content */}
              <div className="p-8">
                <span className="text-accent text-[10px] tracking-[0.3em] uppercase">
                  {experience.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-foreground mt-2 mb-3">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {experience.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs tracking-wider text-muted-foreground uppercase">
                    {experience.duration}
                  </span>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-foreground text-sm font-medium hover:text-accent transition-colors group/link"
                    aria-label={`Learn more about ${experience.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Request Custom Charter</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
