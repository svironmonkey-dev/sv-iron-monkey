import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

type FormState = 'idle' | 'sending' | 'success' | 'error';

const ContactSection = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if Turnstile is completed
    if (!turnstileToken) {
      setFormState('error');
      setErrorMessage('Please complete the security verification.');
      return;
    }
    
    setFormState('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      experience: formData.get('experience') as string,
      date: formData.get('date') as string,
      message: formData.get('message') as string,
      turnstileToken,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormState('success');
        // Reset Turnstile
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      } else {
        throw new Error(result.error || 'Failed to send inquiry');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage(error instanceof Error ? error.message : "Failed to send inquiry. Please try again or contact us directly.");
      // Reset Turnstile on error
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  };

  const resetForm = () => {
    setFormState('idle');
    setErrorMessage('');
    setTurnstileToken(null);
    turnstileRef.current?.reset();
  };

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground" aria-labelledby="contact-heading">
      <div className="container-elegant">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block">
              Start Your Journey
            </span>
            <h2 id="contact-heading" className="font-serif text-4xl md:text-5xl font-light mb-8">
              Book Your Charter
            </h2>
            <div className="w-16 h-[1px] bg-accent mb-8" aria-hidden="true" />
            
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
              Ready to embark on your adventure? Contact us to discuss your perfect 
              charter experience. We'll help you plan every detail for an unforgettable voyage.
            </p>

            {/* Contact Info */}
            <address className="space-y-6 not-italic">
              <a
                href="mailto:info@svironmonkey.nl"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
                aria-label="Email us at info@svironmonkey.nl"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Email
                  </span>
                  <span className="text-primary-foreground">info@svironmonkey.nl</span>
                </div>
              </a>

              <a
                href="tel:+34689573660"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors group"
                aria-label="Call us at +34 689 573 660"
              >
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Phone
                  </span>
                  <span className="text-primary-foreground">+34 689 573 660</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 block">
                    Location
                  </span>
                  <span className="text-primary-foreground">La Lonja Marina, Palma de Mallorca</span>
                </div>
              </div>
            </address>
          </div>

          {/* Form */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 md:p-10 min-h-[540px] flex flex-col">
            {/* Sending State */}
            {formState === 'sending' && (
              <div className="flex flex-col items-center justify-center flex-1">
                <Loader2 className="w-16 h-16 text-accent animate-spin mb-6" />
                <p className="text-2xl font-serif text-primary-foreground">Sending...</p>
              </div>
            )}

            {/* Success State */}
            {formState === 'success' && (
              <div className="flex flex-col items-center justify-center flex-1 text-center">
                <CheckCircle2 className="w-20 h-20 text-accent mb-6" />
                <h3 className="text-3xl font-serif text-primary-foreground mb-4">Thank You!</h3>
                <p className="text-primary-foreground/80 text-lg mb-2">Your inquiry has been sent successfully.</p>
                <p className="text-primary-foreground/60 mb-8">We'll get back to you within 24 hours.</p>
                <Button 
                  variant="gold" 
                  onClick={resetForm}
                  className="mt-4"
                >
                  Send Another Inquiry
                </Button>
              </div>
            )}

            {/* Form or Error State */}
            {(formState === 'idle' || formState === 'error') && (
              <form className="space-y-6" aria-label="Contact form" onSubmit={handleSubmit}>
                {formState === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 p-4 rounded">
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your email"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-experience" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                    Experience Type
                  </label>
                  <select 
                    id="contact-experience"
                    name="experience"
                    className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="text-foreground">Select an option</option>
                    <option value="sunset" className="text-foreground">Sunset Cruise</option>
                    <option value="day" className="text-foreground">Day Trip</option>
                    <option value="multiple" className="text-foreground">Multiple days</option>
                    <option value="custom" className="text-foreground">Custom Charter</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-date" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    name="date"
                    type="date"
                    className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 block mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-primary-foreground/20 pb-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your ideal charter experience..."
                  />
                </div>

                {/* Turnstile */}
                <div className="flex justify-center">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || ''}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken(null)}
                    onExpire={() => setTurnstileToken(null)}
                  />
                </div>

                <Button variant="gold" size="lg" className="w-full mt-4" type="submit" disabled={!turnstileToken}>
                  Send Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
