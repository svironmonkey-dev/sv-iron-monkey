# Languages and static pages

`npm run build` produces 45 complete HTML pages in `dist`, with English at the existing URLs and French, Italian, German and Spanish at `/fr`, `/it`, `/de` and `/es`. Vercel serves the generated HTML with clean URLs. No browser automation or external translation service is needed during builds.

React hydrates the same page to enable calendars, enquiries, galleries, menus and consent. Client-only effects remain client-only. The build timestamp keeps the calendar's initial server/client state identical; availability refreshes after hydration and never assumes an unlisted date is available.

The JSX text boundary in `src/i18n` translates website text and accessible labels before rendering on both server and client. It does not modify values, identifiers, styles, scripts or user-entered notes. The catalog maps existing English copy to French, Italian, German and Spanish. Complete dynamic sentences use `formatMessage`. New English copy needs a catalog entry for all four translations. Brand names, email addresses and identifiers stay unchanged.

Language links preserve the current page and, after hydration, query and fragment. React Router uses a locale basename; normal internal anchors are localized by the JSX text boundary. Language links explicitly opt out through `hrefLang`. Locale does not depend on cookies or geolocation, and no automatic redirects hide pages from crawlers.

Every generated page has one self-referencing canonical and reciprocal language alternates. The sitemap is rebuilt from real pages. Organization/service schema replaces obsolete telephone, pricing and rating placeholders.

Validation: `node check-static.mjs` after the build checks rendered content, document language, canonical uniqueness, alternates, obsolete schema and the complete sitemap. Existing MetaPixel TypeScript errors predate this change.

Shared sailing/cabin sales are not implemented by this release; existing charter enquiry rules and pricing remain unchanged.
