import { z } from "zod";

const dateKey = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const status = z.enum(["available", "unavailable"]);
export const availabilitySchema = z.object({
  updatedAt: z.string().datetime(),
  validUntil: z.string().datetime(),
  dates: z.record(dateKey, z.object({
    "day-charter": status.optional(),
    "sunset-cruise": status.optional(),
    "overnight-charter": status.optional(),
  })),
});
export type Availability = z.infer<typeof availabilitySchema>;
export type AvailabilityStatus = "available" | "unavailable" | "unknown";

export const dateInPalma = (now = new Date()) => new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit",
}).format(now);

export const addDays = (iso: string, days: number) => {
  const date = new Date(`${iso}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

export const displayDate = (iso: string) => new Intl.DateTimeFormat("en-GB", {
  timeZone: "UTC", day: "numeric", month: "long", year: "numeric",
}).format(new Date(`${iso}T12:00:00Z`));

// Never infer availability from a missing date, missing experience or stale feed.
export const getAvailability = (feed: Availability | null, date: string, charter: string, now = Date.now()): AvailabilityStatus => {
  if (!feed) return "unknown";
  const updated = Date.parse(feed.updatedAt);
  const expiry = Date.parse(feed.validUntil);
  if (!Number.isFinite(updated) || !Number.isFinite(expiry) || updated > now || now - updated > 15 * 60 * 1000 || expiry <= now) return "unknown";
  return feed.dates[date]?.[charter] ?? "unknown";
};

export const enquiryLinks = (message: string, title: string) => ({
  email: `mailto:info@svironmonkey.nl?subject=${encodeURIComponent(`${title} enquiry`)}&body=${encodeURIComponent(message)}`,
  whatsapp: `https://wa.me/34689573660?text=${encodeURIComponent(message)}`,
});
