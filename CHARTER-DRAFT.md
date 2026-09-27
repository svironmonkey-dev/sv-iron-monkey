# Charter pages — review draft, 27 September 2026

Base: `main` at `1def85df6aa8f6c0c4b9de33d32f08b84191ca68`.
Draft branch: `draft/charter-pages-2026-09-27`.

The live website and main branch have not changed. The draft application files have been uploaded to the matching GitHub branch and deployed by Vercel as a preview. This draft uses the original React/Vite application, design tokens, fonts, components and images.

## Pages

- `/day-charter`
- `/sunset-cruise`
- `/overnight-charter`

The homepage's three Learn More links now lead to these pages in the draft. A partnership invitation for agents and charter brokers appears between pricing and contact, with a mailto link to `agency@svironmonkey.nl`. Each charter page has a hero, experience description, suggested itinerary, practical information, FAQs, the shared enquiry widget and links to the other two experiences. Footer section links return to the homepage correctly. Vercel rewrites support directly opening the three new routes.

## Shared availability and enquiry widget

- Month calendar in Mallorca time, with available (green), unavailable (red) and please enquire (neutral) states.
- Past dates and known unavailable dates cannot be selected.
- Date, guest count and optional notes; overnight has labelled start and end date fields, a night count, and both dates in the enquiry.
- Capacity options match the existing website: 12 day guests, 9 overnight guests.
- For overnight enquiries, any known unavailable date from departure through return blocks the selection. This is deliberately conservative until turnaround and arrival/departure rules are agreed.
- Email opens an unsent enquiry to `info@svironmonkey.nl`.
- WhatsApp opens an unsent enquiry to `+34 689 573 660`, the Spanish number on the existing website; confirm this is the intended WhatsApp Business account before release.
- No email or WhatsApp message is automatically sent. No deposit or booking is created.

### Availability integration still required

The draft reads `/charter-availability.json` every minute with caching disabled. The supplied file contains no availability, so dates honestly show **Please enquire**. It is not a live calendar connection and contains no invented reservations.

The eventual server-side booking integration should serve this same URL, returning only date and experience status, never customer names, phone numbers, guest lists or event descriptions. Use one authoritative booking source that includes reservations, holds and maintenance. Google Calendar alone should not be treated as authoritative until its sync with the owner hub is verified.

Payload contract (example shape only; these dates are not real availability):

```json
{
  "updatedAt": "2030-06-01T09:59:00Z",
  "validUntil": "2030-06-01T10:05:00Z",
  "dates": {
    "2030-06-03": {
      "day-charter": "available",
      "sunset-cruise": "unavailable",
      "overnight-charter": "unavailable"
    }
  }
}
```

Missing dates/experiences, malformed responses, fetch failures, future timestamps, expired snapshots or snapshots older than 15 minutes all display neutral. Status must be calculated separately for each charter: a sunset booking does not automatically mean the entire day is occupied. Keep booking/calendar credentials on the server, never in the frontend or a public repository.

## Access and preview status — updated 27 September 2026

- GitHub owner access verified in the authenticated browser; draft branch is published. The ChatGPT GitHub plugin remains unconnected.
- Vercel preview works: https://sv-iron-monkey-git-draft-charte-720bc0-sv-iron-monkeys-projects.vercel.app/day-charter
- All three pages render; day-charter selection generated correct email and WhatsApp enquiry links. No test enquiries were sent. Direct overnight-page reload works.
- Google Photos access verified for svironmonkey@gmail.com. Overnight now uses the boat's actual cabin photo (`rooms/bed3.png`) as its hero and the prepared breakfast table (`breakfast/bf1.png`) as its second image. Day charter uses daytime deck imagery; sunset hero retained.
- Day charter copy confirms usually 8–10 hours, swimwear and a towel, with towel packages available on request. Overnight copy offers an alternative pickup by arrangement, with any repositioning cost confirmed in the quote.
- No new prices have been invented or published. Seasonal starting rates, inclusions and optional extras still need owner input.
- Real availability integration remains outstanding. An authoritative feed is required before dates can show green/red reliably.

No cPanel, Resend or WhatsApp API credentials are needed for the two click-to-enquire buttons. The existing enquiry form and production integrations are unchanged. Use secure sign-in/connector prompts for access rather than passwords in chat.

## Review before publishing

- Confirm page wording, photos, destinations and preferred tone.
- Confirm charter duration, inclusions and any minimum overnight stay. The draft intentionally avoids new price or inclusion promises; existing homepage copy still quotes day 8–10 hours, sunset 4 hours and particular catering inclusions.
- Confirm WhatsApp Business number.
- Agree availability rules for provisional holds, crew/maintenance, charter hours and turnaround buffers.
- Verify all pages at desktop and mobile widths in a Vercel preview, including date selection, overnight conflicts, FAQ controls, links and the enquiry text. Do not send test customer enquiries.
- Only merge/deploy to production after the owner's approval. Preview should be protected from search indexing using Vercel's preview settings/headers.

## Local checks

Verified: production build passes; focused ESLint passes; 20 booking-helper checks pass. No test emails or WhatsApp messages were sent.

```sh
npm install --package-lock=false --ignore-scripts
npm run dev
npm run build
node --import tsx scripts/check-charter-booking.ts
npx eslint src/pages/Charter.tsx src/components/CharterBooking.tsx src/lib/charter-booking.ts src/data/charters.ts src/components/Header.tsx src/components/ExperiencesSection.tsx src/components/Footer.tsx
```

The project uses the original `bun.lockb`; neither that lockfile nor package.json was changed. Frozen install with the available newer Bun could not use the old lock without migration, so local checks used npm without writing a replacement lockfile. A production release should repeat validation in the project's established build environment.

The hosted preview has been checked at desktop width. Mobile review remains outstanding. The local check script has not yet been uploaded to GitHub. Full TypeScript checking also reports six pre-existing type assertions in `src/components/MetaPixel.tsx`; that file is unchanged in this draft. The build has an existing CSS font-import ordering warning.
