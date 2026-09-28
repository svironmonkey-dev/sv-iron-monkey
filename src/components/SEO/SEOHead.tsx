import { useLocation } from "react-router-dom";
import { getLanguage, languages, languagePath, t } from "@/i18n";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title = "SV Iron Monkey | Luxury Yacht Charters in Balearic Islands",
  description = "Experience exclusive luxury yacht charters in Mallorca, Ibiza, and Menorca. Day trips, sunset cruises, and week-long adventures aboard SV Iron Monkey. MCA certified with professional crew and premium amenities.",
  keywords = "yacht charter Mallorca, luxury yacht charter, Balearic Islands sailing, day yacht rental, sunset cruise Mallorca, yacht charter Ibiza, yacht charter Menorca, private yacht charter",
  canonicalUrl = "https://svironmonkey.nl/",
  ogImage = "https://www.svironmonkey.nl/iron-monkey-under-sail.jpg",
  ogType = "website",
  noindex = false,
}: SEOHeadProps) => {
  const { pathname } = useLocation();
  const canonical = `https://www.svironmonkey.nl${languagePath(pathname)}`;
  title = t(title);
  description = t(description);
  return (
    <Helmet>
      <html lang={getLanguage()} />
      {languages.map(code => <link key={code} rel="alternate" hrefLang={code} href={`https://www.svironmonkey.nl${languagePath(pathname, code)}`} />)}
      <link rel="alternate" hrefLang="x-default" href={`https://www.svironmonkey.nl${pathname}`} />
      <meta property="og:locale" content={({ en: "en_GB", fr: "fr_FR", it: "it_IT", de: "de_DE" })[getLanguage()]} />
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
