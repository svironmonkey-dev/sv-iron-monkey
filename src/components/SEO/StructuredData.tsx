import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: 'home' | 'pricing' | 'facilities';
}

const StructuredData = ({ type = 'home' }: StructuredDataProps) => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": "https://svironmonkey.nl/#organization",
    "name": "SV Iron Monkey",
    "alternateName": "Iron Monkey Yacht Charters",
    "url": "https://svironmonkey.nl",
    "logo": "https://svironmonkey.nl/logo.png",
    "description": "Luxury yacht charter service in Mallorca and the Balearic Islands offering day trips, sunset cruises, and private voyages.",
    "image": "https://svironmonkey.nl/og-image.jpg",
    "telephone": "+34-XXX-XXX-XXX",
    "email": "info@svironmonkey.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "La Lonja Marina",
      "addressLocality": "Palma de Mallorca",
      "addressRegion": "Balearic Islands",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.5696",
      "longitude": "2.6502"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Mallorca"
      },
      {
        "@type": "City",
        "name": "Ibiza"
      },
      {
        "@type": "City",
        "name": "Menorca"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/sv.ironmonkey/",
      "https://www.linkedin.com/company/monkey-s-charter/",
      "https://www.youtube.com/channel/UCBA4Fee2s8ZpkTLRPUbBfcg"
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Yacht Charter Service",
    "provider": {
      "@id": "https://svironmonkey.nl/#organization"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Balearic Islands, Spain"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Yacht Charter Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Day Charter",
            "description": "Full day yacht charter experience around Mallorca"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sunset Cruise",
            "description": "Romantic sunset sailing experience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Week-Long Charter",
            "description": "Extended luxury yacht charter across the Balearic Islands"
          }
        }
      ]
    }
  };

  // Product Schema for the Yacht
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SV Iron Monkey Luxury Yacht",
    "description": "40ft luxury sailing yacht, MCA certified, accommodating up to 12 guests for day charters",
    "brand": {
      "@type": "Brand",
      "name": "Iron Monkey"
    },
    "category": "Yacht Charter",
    "image": "https://svironmonkey.nl/og-image.jpg",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "350",
      "highPrice": "8500",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://svironmonkey.nl/#pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://svironmonkey.nl/"
      },
      ...(type === 'pricing' ? [
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pricing",
          "item": "https://svironmonkey.nl/pricing"
        }
      ] : []),
      ...(type === 'facilities' ? [
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Facilities",
          "item": "https://svironmonkey.nl/facilities"
        }
      ] : [])
    ]
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SV Iron Monkey",
    "image": "https://svironmonkey.nl/og-image.jpg",
    "@id": "https://svironmonkey.nl",
    "url": "https://svironmonkey.nl",
    "telephone": "+34-XXX-XXX-XXX",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "La Lonja Marina",
      "addressLocality": "Palma de Mallorca",
      "postalCode": "07012",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5696,
      "longitude": 2.6502
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/sv.ironmonkey/",
      "https://www.linkedin.com/company/monkey-s-charter/",
      "https://www.youtube.com/channel/UCBA4Fee2s8ZpkTLRPUbBfcg"
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in a yacht charter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our charters include a professional skipper, fuel, insurance, safety equipment, and basic amenities. Premium packages include catering, water sports equipment, and additional crew members."
        }
      },
      {
        "@type": "Question",
        "name": "How many people can the yacht accommodate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SV Iron Monkey can accommodate up to 12 guests for day charters and up to 6 guests for overnight stays in 3 comfortable cabins."
        }
      },
      {
        "@type": "Question",
        "name": "What destinations do you sail to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer charters throughout the Balearic Islands including Mallorca, Ibiza, Menorca, and Formentera. Custom itineraries are available based on your preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Is the yacht MCA certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SV Iron Monkey is fully MCA (Maritime and Coastguard Agency) certified and operates under Red Ensign Group regulations, ensuring the highest safety standards."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {type === 'home' && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default StructuredData;

