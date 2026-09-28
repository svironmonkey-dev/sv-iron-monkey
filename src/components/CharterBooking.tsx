import { dateLocale, t, formatMessage } from "@/i18n";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { charters, type CharterSlug } from "@/data/charters";
import { addDays, availabilitySchema, dateInPalma, displayDate, enquiryLinks, getAvailability, type Availability } from "@/lib/charter-booking";

const statusClasses = {
  available: "bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100",
  unavailable: "bg-rose-50 text-rose-900 border-rose-200",
  unknown: "bg-muted/50 text-foreground border-border hover:border-accent",
};
const statusLabels = { available: "Available", unavailable: "Unavailable", unknown: "Please enquire" };

const CharterBooking = ({ slug }: { slug: CharterSlug }) => {
  const [now, setNow] = useState(() => Number(typeof document !== "undefined" ? document.documentElement.dataset.buildTime : import.meta.env.VITE_BUILD_TIME) || Date.now());
  const today = dateInPalma(new Date(now));
  const [month, setMonth] = useState(() => today.slice(0, 7));
  const [selected, setSelected] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");
  const [availability, setAvailability] = useState<Availability | null>(null);
  const overnight = slug === "overnight-charter";
  const maxDate = addDays(today, 365);
  const charter = charters[slug];

  useEffect(() => {
    const controller = new AbortController();
    const refresh = async () => {
      setNow(Date.now());
      try {
        const response = await fetch("/charter-availability.json", { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error("Availability unavailable");
        const result = availabilitySchema.safeParse(await response.json());
        if (!controller.signal.aborted) setAvailability(result.success ? result.data : null);
      } catch {
        if (!controller.signal.aborted) setAvailability(null);
      }
    };
    void refresh();
    const interval = window.setInterval(refresh, 60_000);
    return () => { controller.abort(); window.clearInterval(interval); };
  }, []);

  const monthDate = new Date(`${month}-01T12:00:00Z`);
  const monthLabel = new Intl.DateTimeFormat(dateLocale(), { month: "long", year: "numeric", timeZone: "UTC" }).format(monthDate);
  const offset = (monthDate.getUTCDay() + 6) % 7;
  const days = new Date(Date.UTC(monthDate.getUTCFullYear(), monthDate.getUTCMonth() + 1, 0)).getUTCDate();
  const changeMonth = (delta: number) => {
    const next = new Date(monthDate);
    next.setUTCMonth(next.getUTCMonth() + delta);
    setMonth(next.toISOString().slice(0, 7));
  };
  const selectStartDate = (date: string) => {
    setSelected(date);
    if (date && date >= today && date <= maxDate) {
      setMonth(date.slice(0, 7));
      if (overnight && (!returnDate || returnDate <= date)) setReturnDate(date < maxDate ? addDays(date, 1) : "");
    }
  };
  const statusFor = (date: string) => getAvailability(availability, date, slug, now);
  const selectedDates: string[] = [];
  if (selected) {
    // Check the return day too: turnaround times must be agreed before confirmation.
    for (let date = selected; date <= (overnight && returnDate > selected ? returnDate : selected) && selectedDates.length <= 366; date = addDays(date, 1)) selectedDates.push(date);
  }
  const conflict = selectedDates.some(date => statusFor(date) === "unavailable");
  const allAvailable = selectedDates.length > 0 && selectedDates.every(date => statusFor(date) === "available");
  const valid = Boolean(selected && selected >= today && selected <= maxDate && !conflict && (!overnight || (returnDate > selected && returnDate <= maxDate)));
  const nights = valid && overnight ? Math.round((Date.parse(`${returnDate}T12:00:00Z`) - Date.parse(`${selected}T12:00:00Z`)) / 86_400_000) : 0;
  const message = [t("Hello Iron Monkey,"), "", formatMessage("I would like to enquire about: {charter}.", { charter: t(charter.title) }), "", `${t(overnight ? "Start date" : "Preferred date")}: ${selected ? displayDate(selected) : t("To be agreed")}`, ...(overnight && returnDate ? [`${t("End date")}: ${displayDate(returnDate)}`] : []), `${t("Guests")}: ${guests}`, ...(notes.trim() ? ["", `${t("Requests")}: ${notes.trim()}`] : []), "", t("Please confirm availability, timings and a quote."), "", t("Thank you!")].join("\n");
  const links = enquiryLinks(message, t(charter.title));

  return (
    <section id="enquire" className="section-padding scroll-mt-24" aria-labelledby="enquire-title">
      <div className="container-elegant">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">Your private charter</p>
          <h2 id="enquire-title" className="font-serif text-4xl md:text-6xl font-light mb-6">Let's make it your own.</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">{overnight ? "Choose your preferred start and end dates, tell us who is coming, and enquire by email or WhatsApp." : "Choose your preferred date, tell us who is coming, and enquire by email or WhatsApp."}</p>
        </div>
        <div className="border border-border bg-card grid lg:grid-cols-2 max-w-5xl mx-auto">
          <div className="p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border min-w-0">
            <div className="flex justify-between items-center mb-6">
              <Button variant="ghost" size="icon" aria-label="Previous month" disabled={month <= today.slice(0, 7)} onClick={() => changeMonth(-1)}><ChevronLeft aria-hidden="true" /></Button>
              <h3 className="font-serif text-2xl" aria-live="polite">{monthLabel}</h3>
              <Button variant="ghost" size="icon" aria-label="Next month" disabled={month >= maxDate.slice(0, 7)} onClick={() => changeMonth(1)}><ChevronRight aria-hidden="true" /></Button>
            </div>
            <div className="grid grid-cols-7 gap-1 sm:gap-2" role="group" aria-label={`${monthLabel}, choose ${overnight ? "start" : "charter"} date`}>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => <span key={day} className="text-center text-[10px] uppercase text-muted-foreground pb-2">{day}</span>)}
              {Array.from({ length: offset }, (_, i) => <span key={`empty-${i}`} aria-hidden="true" />)}
              {Array.from({ length: days }, (_, i) => {
                const date = `${month}-${String(i + 1).padStart(2, "0")}`;
                const status = statusFor(date);
                const past = date < today;
                const unavailable = status === "unavailable";
                return <button type="button" key={date} disabled={past || date > maxDate || unavailable} aria-label={`${displayDate(date)}, ${t(past ? "Past date" : statusLabels[status])}`} aria-pressed={selected === date} onClick={() => selectStartDate(date)} className={`relative aspect-square min-h-9 border text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:cursor-not-allowed ${past || date > maxDate ? "text-muted-foreground/40 border-transparent" : statusClasses[status]} ${selected === date ? "ring-2 ring-primary ring-offset-1 font-semibold" : ""}`}>
                  {i + 1}{!past && !unavailable && selected === date && <span className="sr-only">, selected</span>}
                </button>;
              })}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 mt-6 text-xs text-muted-foreground">
              {(["available", "unavailable", "unknown"] as const).map(status => <span key={status} className="flex items-center gap-2"><span className={`w-3 h-3 border ${statusClasses[status]}`} aria-hidden="true" />{statusLabels[status]}</span>)}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mt-5">Dates shown in Mallorca local time. Availability and timings are confirmed with your proposal.</p>
          </div>
          <div className="p-5 sm:p-8 lg:p-10 min-w-0">
            <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-2">Your enquiry</p>
            <h3 className="font-serif text-3xl mb-6">{charter.title}</h3>
            {overnight ? <>
              <div className="grid sm:grid-cols-2 gap-4 mb-3">
                <div className="min-w-0"><label htmlFor="charter-start" className="block text-xs uppercase tracking-wider mb-2">Start date</label><input id="charter-start" type="date" min={today} max={addDays(maxDate, -1)} value={selected} onChange={event => selectStartDate(event.target.value)} className="w-full min-w-0 border border-border bg-background p-3 text-sm" /></div>
                <div className="min-w-0"><label htmlFor="charter-return" className="block text-xs uppercase tracking-wider mb-2">End date</label><input id="charter-return" type="date" min={selected ? addDays(selected, 1) : addDays(today, 1)} max={maxDate} value={returnDate} onChange={event => setReturnDate(event.target.value)} className="w-full min-w-0 border border-border bg-background p-3 text-sm" /></div>
              </div>
              <p className="text-xs text-muted-foreground mb-5" aria-live="polite">{nights ? formatMessage(nights === 1 ? "{count} night aboard. Boarding and return times are agreed in your quote." : "{count} nights aboard. Boarding and return times are agreed in your quote.", { count: nights }) : "Choose your start date in the calendar or enter both dates here."}</p>
            </> : <p className="text-sm mb-5" aria-live="polite">{selected ? formatMessage("Selected date: {date}", { date: displayDate(selected) }) : "Select a date in the calendar to begin."}</p>}
            <label htmlFor="charter-guests" className="block text-xs uppercase tracking-wider mb-2">Guests</label>
            <select id="charter-guests" value={guests} onChange={event => setGuests(event.target.value)} className="w-full border border-border bg-background p-3 text-sm mb-5">{Array.from({ length: overnight ? 9 : 12 }, (_, i) => <option key={i} value={i + 1}>{i + 1} {i === 0 ? "guest" : "guests"}</option>)}</select>
            <label htmlFor="charter-notes" className="block text-xs uppercase tracking-wider mb-2">Anything special? <span className="normal-case tracking-normal text-muted-foreground">(optional)</span></label>
            <textarea id="charter-notes" value={notes} onChange={event => setNotes(event.target.value)} maxLength={600} rows={3} placeholder="An occasion, preferred timings or requests…" className="w-full border border-border bg-background p-3 text-sm resize-y" />
            <p className="text-xs text-muted-foreground leading-relaxed my-5" aria-live="polite">{conflict ? "Your selection includes an unavailable date. Please choose another date or a shorter stay." : overnight && selected && returnDate && returnDate <= selected ? "Please choose an end date after your start date." : allAvailable ? "Your selection is currently available. Enquire to confirm your charter." : "We will check your preferred dates and reply with availability and a quote."}</p>
            <div className="flex flex-col gap-3">
              {valid ? <><Button variant="gold" asChild><a href={links.email}><Mail aria-hidden="true" />Enquire by email</a></Button><Button variant="outline" asChild><a href={links.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Enquire on WhatsApp</a></Button></> : <><Button variant="gold" disabled><Mail aria-hidden="true" />Enquire by email</Button><Button variant="outline" disabled><MessageCircle aria-hidden="true" />Enquire on WhatsApp</Button></>}
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground mt-4">Opens your email or WhatsApp with your enquiry ready to send. Your charter is confirmed separately after we agree the details.</p>
            <p className="text-xs text-muted-foreground mt-5">Prefer to ask first? <a href="mailto:info@svironmonkey.nl" className="underline underline-offset-4">Email us</a> or <a href="https://wa.me/34689573660" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp us</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharterBooking;
