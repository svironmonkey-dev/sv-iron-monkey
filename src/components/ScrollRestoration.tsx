import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Check if there's a hash in the URL (e.g., /#contact)
    if (location.hash) {
      // Wait for the page to render and loading overlay to complete
      const timer = window.setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 600); // 600ms to account for the 500ms loading overlay + buffer
      return () => window.clearTimeout(timer);
    }

    // Page links always start at the hero, including previously visited pages.
    // Instant scrolling overrides the site's smooth anchor scrolling.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname, location.hash, location.key]);

  return null;
};

export default ScrollRestoration;
