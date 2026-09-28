import { ArrowRight, Anchor, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import CharterBooking from "@/components/CharterBooking";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { charters, commonQuestions, type CharterSlug } from "@/data/charters";

const Charter = ({ slug }: { slug: CharterSlug }) => {
  const charter = charters[slug];

  return (
    <>
      <SEOHead title={`${charter.title} in Mallorca | SV Iron Monkey`} description={charter.intro} canonicalUrl={`https://svironmonkey.nl/${slug}`} />
      <Header enquiryHref="#enquire" />
      <main>
        <section className="relative min-h-[680px] md:min-h-[760px] flex items-end bg-primary text-primary-foreground">
          <img src={charter.image} alt={charter.imageAlt} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/40" />
          <div className="relative container-elegant w-full px-6 md:px-12 lg:px-20 pt-36 pb-16 md:pb-24">
            <nav aria-label="Breadcrumb" className="text-xs tracking-wider mb-12 text-white/80 flex flex-wrap gap-3">
              <Link to="/" className="hover:text-accent">Home</Link><span aria-hidden="true">/</span>
              <Link to="/#experiences" className="hover:text-accent">Experiences</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{charter.title}</span>
            </nav>
            <p className="text-gold-light text-xs tracking-[0.3em] uppercase mb-5">{charter.eyebrow}</p>
            <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[1.05] mb-6">{charter.headline}</h1>
            <p className="text-white/90 max-w-xl leading-relaxed mb-8">{charter.intro}</p>
            <Button variant="gold" size="lg" className="w-full sm:w-auto px-5 sm:px-10 text-xs sm:text-sm" asChild><a href="#enquire">{`Plan your ${charter.title.toLowerCase()}`}<ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></a></Button>
          </div>
        </section>

        <div className="border-b border-border bg-card">
          <dl className="container-elegant grid sm:grid-cols-3 px-6 md:px-12 lg:px-20 py-8 gap-7">
            {[
              { icon: MapPin, label: "Departure", value: "Palma de Mallorca" },
              { icon: Clock3, label: "Your time aboard", value: charter.duration },
              { icon: Anchor, label: "The experience", value: charter.mood },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 items-center"><Icon className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><div><dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{label}</dt><dd className="text-sm">{value}</dd></div></div>
            ))}
          </dl>
        </div>

        <section className="section-padding" aria-labelledby="experience-title">
          <div className="container-elegant grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-accent text-xs uppercase tracking-[0.3em] mb-4">{charter.title}</p>
              <h2 id="experience-title" className="font-serif text-4xl md:text-6xl font-light mb-6">{charter.storyTitle}</h2>
              <div className="divider-gold mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-8">{charter.story}</p>
              <h3 className="font-serif text-2xl mb-3">Where we could take you</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{charter.route}</p>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Every itinerary is a suggestion. Your captain adapts the route to the weather, sea conditions and agreed charter time.</p>
            </div>
            <img src={charter.detailImage} alt={charter.detailAlt} loading="lazy" className="w-full aspect-[4/5] max-h-[620px] object-cover" />
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground" aria-labelledby="itinerary-title">
          <div className="container-elegant">
            <p className="text-gold-light text-xs tracking-[0.3em] uppercase mb-4">A little inspiration</p>
            <h2 id="itinerary-title" className="font-serif text-4xl md:text-6xl font-light mb-14">How your time could unfold.</h2>
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {charter.moments.map((moment, index) => (
                <li key={moment.title} className="border-t border-white/20 pt-6">
                  <span className="text-gold-light font-serif text-3xl">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-2xl mt-5 mb-3">{moment.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{moment.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-padding bg-muted/30" aria-labelledby="before-title">
          <div className="container-elegant grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">A few useful details</p>
              <h2 id="before-title" className="font-serif text-4xl md:text-5xl font-light mb-8">Before you step aboard.</h2>
              <h3 className="font-serif text-2xl mb-4">What to bring</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">{charter.bring.map(item => <li key={item} className="flex gap-3"><span className="text-accent" aria-hidden="true">—</span>{item}</li>)}</ul>
              <p className="text-sm text-muted-foreground mt-8 leading-relaxed">Travelling with children or have a particular access need? Tell us before booking so we can discuss what works for your group.</p>
            </div>
            <Accordion type="single" collapsible>
              {[...charter.questions, ...commonQuestions].map((faq, index) => (
                <AccordionItem key={faq.question} value={`question-${index}`}>
                  <AccordionTrigger className="text-left py-6 text-base font-normal">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CharterBooking key={slug} slug={slug} />

        <section className="px-6 md:px-12 lg:px-20 pb-20" aria-label="More charter experiences">
          <div className="container-elegant border-t border-border pt-10">
            <h2 className="font-serif text-3xl mb-8">Another way to escape.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {(Object.keys(charters) as CharterSlug[]).filter(key => key !== slug).map(key => (
                <Link key={key} to={`/${key}`} className="group flex items-center gap-5 border border-border p-4 hover:border-accent transition-colors">
                  <img src={charters[key].image} alt="" loading="lazy" className="w-20 h-24 sm:w-28 object-cover shrink-0" />
                  <div className="min-w-0"><p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Explore</p><h3 className="font-serif text-2xl">{charters[key].title}</h3></div>
                  <ArrowRight className="ml-auto w-5 h-5 shrink-0 text-accent group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Charter;
