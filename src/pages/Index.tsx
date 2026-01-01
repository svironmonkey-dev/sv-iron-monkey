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
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
