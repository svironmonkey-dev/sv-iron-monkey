import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import YachtSection from "@/components/YachtSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ReviewsSection from "@/components/ReviewsSection";
import IslandsSection from "@/components/IslandsSection";
import CrewSection from "@/components/CrewSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/SEO/StructuredData";
import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <SEOHead />
      <StructuredData type="home" />
      <div className="overflow-hidden">
        <Header />
        <main id="main-content">
          <HeroSection />
          <YachtSection />
          <ExperiencesSection />
          <ReviewsSection />
          <IslandsSection />
          <CrewSection />
          <FacilitiesSection />
          <PricingSection />
          <section id="agency" className="section-padding bg-primary text-primary-foreground scroll-mt-24" aria-labelledby="agency-title">
            <div className="container-elegant grid lg:grid-cols-[1.5fr_1fr] items-center gap-10 lg:gap-20">
              <div>
                <p className="text-gold-light text-xs tracking-[0.3em] uppercase mb-5">For agents &amp; charter brokers</p>
                <h2 id="agency-title" className="font-serif text-4xl md:text-5xl font-light mb-6">Bring your clients aboard.</h2>
                <p className="text-primary-foreground/80 leading-relaxed max-w-2xl">Are you a travel agent or charter broker interested in working with SV Iron Monkey? From private day charters and sunset cruises to tailored overnight voyages, we would be delighted to discuss the possibilities.</p>
              </div>
              <div className="lg:justify-self-end">
                <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="mailto:agency@svironmonkey.nl?subject=Agency%20partnership%20enquiry">Discuss a partnership<ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /></a>
                </Button>
                <p className="text-sm text-primary-foreground/70 mt-4"><a className="underline underline-offset-4 hover:text-gold-light" href="mailto:agency@svironmonkey.nl">agency@svironmonkey.nl</a></p>
              </div>
            </div>
          </section>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
