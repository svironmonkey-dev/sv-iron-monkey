import { ArrowRight, Check, Gift, Waves, Utensils, Wine, Flower2, Camera, Music2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { charters, type CharterSlug } from "@/data/charters";
import deckImage from "@/assets/out/out3.png";

const plans: { slug: CharterSlug; price: string; detail: string; guests: string; note: string; cta: string }[] = [
  { slug: "day-charter", price: "€2,000", detail: "A full day, at your own pace.", guests: "Up to 12 guests", note: "Usually 8–10 hours", cta: "Plan a day aboard" },
  { slug: "sunset-cruise", price: "€1,200", detail: "An evening worth lingering over.", guests: "Up to 12 guests", note: "Timings follow the sunset", cta: "Plan your sunset" },
  { slug: "overnight-charter", price: "€2,900", detail: "Make the yacht your home.", guests: "Up to 9 guests", note: "Length of stay agreed in your quote", cta: "Plan your escape" },
];

const extras = [
  { icon: Waves, title: "Towel package", text: "Travel a little lighter. Ask us to have fresh towels ready for your time on the water." },
  { icon: Gift, title: "Birthday package", text: "A cake and a thoughtfully dressed table. Tell us about the occasion and we will agree the finishing touches with you." },
  { icon: Utensils, title: "Catering & private chef", text: "From a special menu to a chef aboard, share your tastes, dietary needs and the kind of meal you have in mind." },
  { icon: Wine, title: "Champagne & premium drinks", text: "Have a favourite bottle or a toast in mind? Special drinks can be requested ahead of your charter." },
  { icon: Flower2, title: "Flowers", text: "A personal touch for an anniversary, a surprise or simply a beautiful day together." },
  { icon: Camera, title: "Photography", text: "Ask about arranging a photographer to capture the people and moments that matter." },
  { icon: Music2, title: "Music aboard", text: "Discuss live music for your occasion. Arrangements depend on the itinerary and available space aboard." },
  { icon: MapPin, title: "Transfers & pickup", text: "Need help getting to the yacht or a different boarding location? Tell us your plans so we can explore the possibilities." },
];

const Pricing = () => (
  <>
    <SEOHead title="Charter Prices & Optional Extras | SV Iron Monkey" description="Private yacht charters in Mallorca: day charters from €2,000, sunset cruises from €1,200 and overnight charters from €2,900. Explore personal touches and request your quote." canonicalUrl="https://www.svironmonkey.nl/pricing" />
    <Header enquiryHref="#charter-options" />
    <main>
      <section className="bg-primary text-primary-foreground pt-32 md:pt-40 pb-14 md:pb-20 px-6 md:px-12 lg:px-20">
        <div className="container-elegant">
          <nav aria-label="Breadcrumb" className="flex gap-3 text-xs text-white/70 mb-10">
            <Link to="/" className="hover:text-accent">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Pricing</span>
          </nav>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-center">
            <div>
              <p className="text-gold-light text-xs tracking-[0.3em] uppercase mb-5">Private charters · Mallorca & the Balearics</p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6">Your time.<br /><span className="italic text-gold-light">Your escape.</span></h1>
              <p className="text-white/80 leading-relaxed max-w-lg mb-8">Choose a day, a sunset or a longer stay aboard SV Iron Monkey. Start with the experience, then add the details that make it yours.</p>
              <Button variant="gold" size="lg" asChild><a href="#starting-prices">Explore our prices<ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></a></Button>
            </div>
            <figure className="relative">
              <img src={deckImage} alt="The teak deck of SV Iron Monkey beside a sunny Mallorca anchorage" fetchPriority="high" className="w-full h-64 sm:h-80 lg:h-[420px] object-cover" />
              <figcaption className="text-white/60 text-xs tracking-wider mt-4">One yacht. A world of possibilities.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="starting-prices" className="section-padding scroll-mt-24 bg-muted/30" aria-labelledby="prices-title">
        <div className="container-elegant">
          <div className="max-w-2xl mb-10">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Three ways to get away</p>
            <h2 id="prices-title" className="font-serif text-4xl md:text-5xl font-light mb-5">A private yacht. Your people.</h2>
            <p className="text-muted-foreground leading-relaxed">Starting prices are for a private charter of the yacht, for your group. Your dates, itinerary, length of stay and chosen extras shape your personalised quote.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <article key={plan.slug} className="bg-background border border-border p-7 md:p-9 flex flex-col">
                <h3 className="font-serif text-3xl mb-3">{charters[plan.slug].title}</h3>
                <p className="text-sm text-muted-foreground mb-8">{plan.detail}</p>
                <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">From</p>
                <p className="font-serif text-5xl md:text-6xl font-light mb-2">{plan.price}</p>
                <p className="text-xs text-muted-foreground mb-7">{plan.slug === "overnight-charter" ? "per private overnight charter" : "per private charter"}</p>
                <ul className="border-t border-border pt-6 mb-8 space-y-3 text-sm text-muted-foreground">
                  <li>{plan.note}</li><li>{plan.guests}</li><li>Departure from Palma de Mallorca</li>
                </ul>
                <Button variant="gold" className="mt-auto w-full text-xs px-3" asChild><Link to={`/${plan.slug}`}>{plan.cta}<ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></Link></Button>
              </article>
            ))}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mt-6 max-w-3xl">All amounts are in euros. Your proposal confirms the total price, tax breakdown and agreed inclusions before you book. Overnight and longer stays are quoted for your chosen start and end dates; the starting price is not a total for any length of stay.</p>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="included-title">
        <div className="container-elegant grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">The essentials, taken care of</p>
            <h2 id="included-title" className="font-serif text-4xl md:text-5xl font-light mb-6">Settle into life aboard.</h2>
            <p className="text-muted-foreground leading-relaxed">Your charter starts with the yacht, your captain and crew, and normal charter fuel. We agree the route and onboard arrangements with you, so you know what to expect before stepping aboard.</p>
          </div>
          <div className="border-l-2 border-accent pl-7 space-y-6">
            {[
              ["Private use of the yacht", "Space to spend time with your own group, with the crew looking after your charter."],
              ["Food & refreshments", "Tapas or light food, water, soft drinks, beer and wine form our standard offering. Your proposal confirms the menu and provisioning for your experience and length of stay."],
              ["A plan made together", "Share your dates, group size and wishes. We shape a suitable itinerary and confirm availability with your quote."],
            ].map(([title, text]) => <div key={title} className="flex gap-3"><Check className="text-accent w-4 h-4 mt-1 shrink-0" aria-hidden="true" /><div><h3 className="font-serif text-2xl mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground" aria-labelledby="extras-title">
        <div className="container-elegant">
          <div className="max-w-2xl mb-12">
            <p className="text-gold-light text-xs tracking-[0.3em] uppercase mb-4">Make it personal</p>
            <h2 id="extras-title" className="font-serif text-4xl md:text-6xl font-light mb-6">The finishing touches.</h2>
            <p className="text-white/75 leading-relaxed">A birthday on the water. Towels waiting after a swim. Something special at the table. Mention your favourites when you enquire and we will discuss the options.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {extras.map(({ icon: Icon, title, text }) => <article key={title} className="border-t border-white/20 pt-6"><Icon className="w-6 h-6 text-gold-light mb-5" aria-hidden="true" /><h3 className="font-serif text-2xl mb-3">{title}</h3><p className="text-sm text-white/70 leading-relaxed mb-4">{text}</p><p className="text-gold-light text-[10px] uppercase tracking-[0.2em]">On request</p></article>)}
          </div>
          <p className="mt-10 border-t border-white/20 pt-6 text-xs text-white/65 leading-relaxed">Optional extras are quoted separately and arranged subject to availability. Package contents, any transfer or repositioning costs, and supplier arrangements are agreed before confirmation.</p>
        </div>
      </section>

      <section className="section-padding bg-muted/30" aria-labelledby="booking-title">
        <div className="container-elegant">
          <h2 id="booking-title" className="font-serif text-4xl md:text-5xl font-light mb-10">From a good idea to a day aboard.</h2>
          <ol className="grid md:grid-cols-3 gap-8">
            {[
              ["Choose your experience", "Open a charter page, select your dates and tell us who is coming."],
              ["Make it yours", "Mention any extras in your enquiry. We reply with availability and a personalised quote."],
              ["Confirm your charter", "Once the details are agreed, we send your contract and payment instructions to secure the date."],
            ].map(([title, text], i) => <li key={title} className="border-t border-border pt-5"><span className="text-accent font-serif text-3xl">0{i + 1}</span><h3 className="font-serif text-2xl mt-4 mb-3">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="charter-options" className="section-padding scroll-mt-24" aria-labelledby="choose-title">
        <div className="container-elegant">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Where would you like to begin?</p>
          <h2 id="choose-title" className="font-serif text-4xl md:text-6xl font-light mb-10">Choose your escape.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(({ slug, price }) => <Link key={slug} to={`/${slug}`} className="group border border-border block hover:border-accent transition-colors" aria-label={`Explore ${charters[slug].title}`}><div className="overflow-hidden"><img src={charters[slug].image} alt={charters[slug].imageAlt} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" /></div><div className="p-6"><p className="text-xs text-muted-foreground mb-2">From {price} · private charter</p><h3 className="font-serif text-3xl mb-5">{charters[slug].title}</h3><span className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-accent">Explore & enquire<ArrowRight className="w-4 h-4" aria-hidden="true" /></span></div></Link>)}
          </div>
          <p className="text-sm text-muted-foreground mt-8">Something different in mind? <Link to="/#contact" className="underline underline-offset-4 hover:text-accent">Tell us about your plans.</Link></p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Pricing;
