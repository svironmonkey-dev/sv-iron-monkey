import { Instagram, Facebook, Mail, Linkedin, Youtube } from "lucide-react";
import ironLogo from "@/assets/iron-logo.svg";
import redEnsignLogo from "@/assets/red-ensign.png";
import mcaLogo from "@/assets/ mca.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10" role="contentinfo">
      <div className="container-elegant section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src={ironLogo} 
                  alt="SV Iron Monkey Logo" 
                  className="h-10 w-10"
                  width="40"
                  height="40"
                />
                <div>
                  <span className="font-serif text-2xl font-semibold tracking-wide">
                    Iron Monkey
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60 block">
                    Sailing Vessel
                  </span>
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs mb-6">
              Luxury yacht charters in Mallorca and the Balearic Islands. 
              Creating unforgettable maritime experiences since 2020. 
            </p>
            
            {/* Certifications */}
            <div>
              <p className="text-primary-foreground/60 text-xs tracking-wider uppercase mb-3">
                Red Ensign Code MCA Certified
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={redEnsignLogo} 
                  alt="Red Ensign Group Certification" 
                  className="h-12 w-auto opacity-80"
                  width="48"
                  height="48"
                />
                <img 
                  src={mcaLogo} 
                  alt="Maritime and Coastguard Agency (MCA) Certified" 
                  className="h-12 w-auto opacity-80"
                  width="48"
                  height="48"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs tracking-[0.3em] uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {[
                { href: "#yacht", label: "The Yacht" },
                { href: "#experiences", label: "Experiences" },
                { href: "#islands", label: "Islands" },
                { href: "#crew", label: "Crew" },
                { href: "#facilities", label: "Facilities" },
                { href: "#pricing", label: "Pricing" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase mb-6">
              Connect
            </h3>
            <nav aria-label="Social media links" className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/sv.ironmonkey/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/monkey-s-charter/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCBA4Fee2s8ZpkTLRPUbBfcg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Watch our videos on YouTube"
              >
                <Youtube className="w-4 h-4" aria-hidden="true" />
              </a>
            </nav>
            <address className="text-primary-foreground/60 text-sm not-italic">
              La Lonja Marina, Palma de Mallorca
              <br />
              Balearic Islands, Spain
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-xs tracking-wider">
            © {currentYear} SV Iron Monkey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
