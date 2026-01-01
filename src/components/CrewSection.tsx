import captainImage from "@/assets/captain.png";
import LazyImage from "./LazyImage";

const CrewSection = () => {
  return (
    <section id="crew" className="section-padding bg-primary text-primary-foreground" aria-labelledby="crew-heading">
      <div className="container-elegant">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
              Professional Crew
            </span>
            <h2 id="crew-heading" className="font-serif text-4xl md:text-5xl font-light mb-8">
              At Your Service
            </h2>
            <div className="w-16 h-[1px] bg-accent mb-8" aria-hidden="true" />
            
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Our experienced crew is dedicated to providing exceptional service 
              throughout your voyage. With years of experience navigating the 
              Mediterranean waters, they ensure your safety while creating an 
              atmosphere of relaxed luxury.
            </p>

            <ul className="space-y-4 text-primary-foreground/70" role="list">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                <span>Professional captain with extensive Mediterranean experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                <span>Skilled hostess for personalized hospitality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                <span>Expert local knowledge of hidden gems and best anchorages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                <span>Multilingual service in English, Spanish, German, and Dutch</span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <figure className="relative">
            <LazyImage
              src={captainImage} 
              alt="Professional captain and crew of SV Iron Monkey yacht on deck" 
              className="w-full h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default CrewSection;
