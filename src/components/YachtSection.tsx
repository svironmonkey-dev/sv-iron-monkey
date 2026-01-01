import { Anchor, Compass, Users, Waves, ChevronDown, Ship, Ruler, Gauge, Fuel, Droplet, BedDouble, UserCog } from "lucide-react";
import yachtNight from "@/assets/yacht-night.jpg";
import { useState, useRef } from "react";
import LazyImage from "./LazyImage";

const features = [
  {
    icon: Anchor,
    title: "Pure Sailing",
    description: "SV Iron Monkey is a premium motor sailing vessel combining elegance with performance.",
  },
  {
    icon: Compass,
    title: "Amazing Ports",
    description: "Explore hidden coves, pristine beaches, and charming ports throughout the Balearics.",
  },
  {
    icon: Users,
    title: "Professional Crew",
    description: "Experienced, friendly crew dedicated to creating unforgettable moments.",
  },
  {
    icon: Waves,
    title: "New Horizons",
    description: "Discover breathtaking destinations and create memories that last a lifetime.",
  },
];

const specifications = [
  { icon: Ship, label: "Yacht Type", value: "Luxury Sailing Yacht" },
  { icon: Anchor, label: "Rig", value: "Ketch-rigged" },
  { icon: Ship, label: "Builder", value: "Jongert Yachts (Netherlands)" },
  { icon: Ship, label: "Hull Material", value: "Steel" },
  { icon: Ruler, label: "Length Overall (LOA)", value: "22.4 m / 73.5 ft" },
  { icon: Ruler, label: "Beam (Width)", value: "5.8 m / 19.2 ft" },
  { icon: Ruler, label: "Draft", value: "2.7 m / 9.8–10 ft" },
  { icon: Gauge, label: "Displacement", value: "84–87 tonnes" },
  { icon: Gauge, label: "Cruising Speed", value: "8 knots" },
  { icon: Gauge, label: "Maximum Speed", value: "10 knots" },
  { icon: Compass, label: "Range", value: "2,500 nautical miles" },
  { icon: Fuel, label: "Engine", value: "Mercedes-Benz OM402 (~250 hp)" },
  { icon: Fuel, label: "Fuel Capacity", value: "4,000 liters" },
  { icon: Droplet, label: "Fresh Water Capacity", value: "4,000 liters" },
  { icon: BedDouble, label: "Guest Cabins", value: "3" },
  { icon: Users, label: "Guest Capacity", value: "9 guests overnight & 12 guests day trips" },
  { icon: UserCog, label: "Crew", value: "2 professional crew (Captain & Stewardess)" },
  { icon: Droplet, label: "Bathrooms", value: "3" },
  { icon: Ship, label: "Interior", value: "Classic teak with spacious saloon" },
  { icon: Waves, label: "Best Suited For", value: "Multi-day sailing trips & private charters" },
];

const YachtSection = () => {
  const [showSpecs, setShowSpecs] = useState(false);
  const viewButtonRef = useRef<HTMLDivElement>(null);

  const handleCloseSpecs = () => {
    setShowSpecs(false);
    setTimeout(() => {
      viewButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <section id="yacht" className="bg-background" style={{ paddingBottom: '30px', paddingTop: '120px' }} aria-labelledby="yacht-heading">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-16">
          <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
            Sailing Vessel
          </span>
          <h2 id="yacht-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light">
            Iron Monkey
          </h2>
          <div className="divider-gold mx-auto" aria-hidden="true" />
        </div>

        {/* Content Grid */}
        <div id="yacht-content" className="max-w-4xl mx-auto px-[30px] md:px-0">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Step aboard SV Iron Monkey and discover a world of refined elegance. 
              Our vessel offers the perfect blend of comfort, style, and adventure 
              for discerning travelers seeking an exceptional maritime experience.
            </p>
          </div>

          {/* Image */}
          <figure className="relative mb-12">
            <div className="aspect-[16/9] overflow-hidden">
              <LazyImage
                src={yachtNight}
                alt="SV Iron Monkey luxury sailing yacht illuminated at night in Mediterranean waters"
                className="w-full h-full object-cover"
              />
            </div>
          </figure>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12" role="list">
            {features.map((feature, index) => (
              <article key={index} className="group" role="listitem">
                <div className="flex items-center gap-3 mb-2">
                  <feature.icon className="w-8 h-8 text-accent transition-colors duration-300" aria-hidden="true" />
                  <h3 className="font-serif text-lg text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          {/* View More Button */}
          <div ref={viewButtonRef} className="pt-6 text-center">
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="group flex items-center gap-3 text-accent hover:text-accent/80 transition-colors duration-300 mx-auto"
              aria-expanded={showSpecs}
              aria-controls="yacht-specs"
            >
              <span className="font-serif text-lg">View Technical Specifications</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${showSpecs ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Expandable Specifications Section */}
        <div 
          id="yacht-specs"
          className={`overflow-hidden transition-all duration-500 ease-in-out px-[30px] md:px-0 ${
            showSpecs ? 'max-h-[3000px] opacity-100 mt-16' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!showSpecs}
        >
          <div className="border-t border-accent/20 pt-12">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Jongert 22D Specifications
              </h3>
              <p className="text-muted-foreground text-sm">
                Specifications may vary slightly depending on refits and equipment
              </p>
            </div>

            <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-accent/10 rounded-lg p-4 sm:p-6"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <spec.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <dt className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">
                        {spec.label}
                      </dt>
                      <dd className="text-sm sm:text-base text-foreground font-serif">
                        {spec.value}
                      </dd>
                    </div>
                  </div>
                </div>
              ))}
            </dl>

            {/* Close Button */}
            <div className="pt-12 text-center">
              <button
                onClick={handleCloseSpecs}
                className="group flex items-center gap-3 text-accent hover:text-accent/80 transition-colors duration-300 mx-auto"
                aria-label="Close specifications"
              >
                <span className="font-serif text-lg">Close Specifications</span>
                <ChevronDown 
                  className="w-5 h-5 rotate-180 transition-transform duration-300"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtSection;
