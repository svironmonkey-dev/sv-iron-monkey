import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import ironLogo from "@/assets/iron-logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isFacilitiesPage = location.pathname === "/facilities";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: isHomePage ? "#yacht" : "/#yacht", label: "The Yacht" },
    { href: isHomePage ? "#experiences" : "/#experiences", label: "Experiences" },
    { href: isHomePage ? "#islands" : "/#islands", label: "Islands" },
    { href: isHomePage ? "#crew" : "/#crew", label: "Crew" },
    { href: isHomePage ? "#facilities" : "/#facilities", label: "Facilities" },
    { href: isHomePage ? "#pricing" : "/#pricing", label: "Pricing" },
  ];

  // Hide header on scroll when on facilities page
  const shouldHideHeader = isFacilitiesPage && isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldHideHeader 
          ? "-translate-y-full opacity-0" 
          : "translate-y-0 opacity-100"
      } ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container-elegant">
        <nav className="flex items-center justify-between h-20 md:h-24 px-6 md:px-12 lg:px-20" aria-label="Main navigation">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src={ironLogo} 
              alt="SV Iron Monkey Logo" 
              className={`h-10 w-10 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen ? "brightness-0" : ""
              }`}
              width="40"
              height="40"
            />
            <div className="flex flex-col items-start">
              <span
                className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                Iron Monkey
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen ? "text-muted-foreground" : "text-primary-foreground/70"
                }`}
              >
                Sailing Vessel
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 link-underline ${
                    isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant={isScrolled || isMobileMenuOpen ? "gold" : "hero"}
              size="sm"
              asChild
            >
              <a href={isHomePage ? "#contact" : "/#contact"}>Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 transition-colors ${
                  isScrolled || isMobileMenuOpen ? "text-foreground" : "text-primary-foreground"
                }`}
                aria-hidden="true"
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors ${
                  isScrolled || isMobileMenuOpen ? "text-foreground" : "text-primary-foreground"
                }`}
                aria-hidden="true"
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-background backdrop-blur-sm border-t border-border animate-fade-in">
            <ul className="flex flex-col py-6 px-6" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button variant="gold" size="default" className="w-full" asChild>
                  <a 
                    href={isHomePage ? "#contact" : "/#contact"}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
