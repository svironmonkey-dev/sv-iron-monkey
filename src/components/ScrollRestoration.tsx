import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., /#contact)
    if (location.hash) {
      // Wait for the page to render and loading overlay to complete
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 600); // 600ms to account for the 500ms loading overlay + buffer
      return;
    }

    // Save scroll position before navigating away
    const saveScrollPosition = () => {
      sessionStorage.setItem(
        `scroll-${location.pathname}`,
        window.scrollY.toString()
      );
    };

    // Restore scroll position when coming back
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(`scroll-${location.pathname}`);
      
      if (savedPosition) {
        // Wait a bit for the page to render and the loading overlay to complete
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition, 10));
        }, 600); // 600ms to account for the 500ms loading overlay + buffer
      } else {
        // Scroll to top for new pages
        window.scrollTo(0, 0);
      }
    };

    restoreScrollPosition();

    // Save scroll position on scroll
    window.addEventListener("scroll", saveScrollPosition);

    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollRestoration;

