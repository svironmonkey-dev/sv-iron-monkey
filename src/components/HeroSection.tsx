import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroVideo from "@/assets/hero-yacht-high.mp4";

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
          title="SV Iron Monkey sailing in the Mediterranean"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/100" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="inline-block text-accent text-xs md:text-sm tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-up">
          Luxury Yacht Charters
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-light leading-[1.1] mb-8 opacity-0 animate-fade-up delay-100">
          Embark on Your
          <span className="block italic font-normal text-accent mt-2">Adventure</span>
        </h1>
        
        <p className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up delay-200">
          Exclusive daily charters and private custom voyages around the most breathtaking destinations of Mallorca and the Balearic Islands.
        </p>

        <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-300" aria-label="Call to action">
          <Button variant="gold" size="lg" asChild>
            <a href="#experiences">Explore Experiences</a>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <a href="#yacht">Discover The Yacht</a>
          </Button>
        </nav>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#yacht"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors opacity-0 animate-fade-in delay-500"
        aria-label="Scroll to yacht section"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
};

export default HeroSection;
