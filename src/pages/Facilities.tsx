import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft, X } from "lucide-react";
import Footer from "@/components/Footer";
import { facilities, type Facility } from "@/data/facilities";
import SEOHead from "@/components/SEO/SEOHead";
import StructuredData from "@/components/SEO/StructuredData";
import LazyImage from "@/components/LazyImage";

const Facilities = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("facility");
  
  // Filter to only show clickable facilities
  const clickableFacilities = facilities.filter(f => f.clickable);
  
  const selectedFacility = clickableFacilities.find(f => f.id === selectedId) || clickableFacilities[0];
  const [currentFacility, setCurrentFacility] = useState(selectedFacility);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleFacilitySelect = (facility: Facility) => {
    setCurrentFacility(facility);
    setSearchParams({ facility: facility.id });
  };

  return (
    <>
      <SEOHead
        title="Facilities | SV Iron Monkey Yacht Amenities & Features"
        description="Explore the luxurious facilities aboard SV Iron Monkey. Modern cabins, gourmet galley, entertainment systems, water sports equipment, and premium amenities for an unforgettable sailing experience."
        keywords="yacht facilities, yacht amenities Mallorca, luxury yacht features, yacht cabins, yacht entertainment, water sports equipment"
        canonicalUrl="https://svironmonkey.nl/facilities"
      />
      <StructuredData type="facilities" />
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
                Facilities
              </h1>
              <div className="h-px w-24 bg-accent" />
            </div>
          </div>

          {/* Minimalistic Archive List - Horizontal Facility Selector */}
          <div className="mb-20 border-t border-b border-border py-8">
            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-start">
              {clickableFacilities.map((facility, index) => (
                <button
                  key={facility.id}
                  onClick={() => handleFacilitySelect(facility)}
                  className={`group flex items-center gap-2 transition-colors duration-200 ${
                    currentFacility.id === facility.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-xs text-muted-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm uppercase tracking-wider font-medium">
                    {facility.label}
                  </span>
                  <facility.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Selected Facility Details */}
          <div className="max-w-5xl">
            {/* Facility Header */}
            <div className="mb-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 border border-accent/30 bg-accent/5 flex items-center justify-center shrink-0">
                  <currentFacility.icon className="w-10 h-10 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-4">
                    {currentFacility.label}
                  </h2>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">
                    {currentFacility.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentFacility.images.map((image, idx) => (
                <div 
                  key={idx} 
                  className="aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setZoomedImage(image)}
                >
                  <LazyImage
                    src={image}
                    alt={`${currentFacility.label} view ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={() => setZoomedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
      </div>
    </>
  );
};

export default Facilities;

