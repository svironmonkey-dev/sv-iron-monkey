import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ironLogo from "@/assets/iron-logo.svg";

const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loading overlay on route change
    setIsLoading(true);
    
    // Hide after 500ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)' }}>
      <div className="flex flex-col items-center gap-4">
        <img
          src={ironLogo}
          alt="Iron Monkey Logo"
          className="h-24 w-24 animate-blink"
          style={{ 
            filter: 'brightness(0) saturate(100%) invert(65%) sepia(31%) saturate(692%) hue-rotate(357deg) brightness(96%) contrast(87%)'
          }}
        />
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: '#c6a553', animationDelay: '0ms' }}></span>
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: '#c6a553', animationDelay: '150ms' }}></span>
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: '#c6a553', animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;

