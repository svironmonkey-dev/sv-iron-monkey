import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import reviews from "@/data/reviews.json";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import tripadvisorLogo from "@/assets/tripadvisor.png";

const ReviewsSection = () => {
  // Calculate overall rating
  const overallRating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;
  
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="bg-background" style={{ padding: "60px 30px 20px 30px" }} aria-labelledby="reviews-heading">
      <div className="container-elegant">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          {/* Overall Rating - Centered */}
          <div className="flex items-center gap-6">
          <div className="text-2xl font-serif text-primary" aria-label="Overall rating: 5.0 out of 5 stars">
              5.0
            </div>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-7 h-7 ${i < Math.floor(overallRating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
          </div>

          {/* TripAdvisor Button */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white border-gray-300 text-primary hover:bg-gray-50 hover:text-primary h-10 w-10"
              style={{ width: '150px', padding: '10px' }}
              onClick={() => window.open('https://www.tripadvisor.es/Attraction_Review-g187463-d33011329-Reviews-or10-Sv_Iron_Monkey-Palma_de_Mallorca_Majorca_Balearic_Islands.html', '_blank')}
            >
              <img src={tripadvisorLogo} alt="TripAdvisor" />
            </Button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white text-primary p-8 h-full flex flex-col shadow-lg border border-gray-200">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-accent mb-4" />

                  {/* Review Text */}
                  <blockquote className="text-primary/80 leading-relaxed mb-6 flex-grow line-clamp-6">
                    {review.review_text}
                  </blockquote>

                  {/* Author Info */}
                  <footer className="border-t border-primary/10 pt-4">
                    <cite className="not-italic">
                      <span className="text-primary font-medium block">
                        {review.user_name}
                      </span>
                      <span className="text-primary/60 text-sm">
                        {review.date_posted}
                      </span>
                    </cite>
                  </footer>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-transparent border-0 text-primary hover:bg-transparent hover:text-primary/70" />
          <CarouselNext className="hidden md:flex bg-transparent border-0 text-primary hover:bg-transparent hover:text-primary/70" />
        </Carousel>
      </div>
    </section>
  );
};

export default ReviewsSection;

