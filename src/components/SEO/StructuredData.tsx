import { Helmet } from "react-helmet-async";
import { getLanguage, languagePath, t } from "@/i18n";
const StructuredData = ({ type = 'home' }: { type?: 'home' | 'facilities' }) => {
  const root = 'https://www.svironmonkey.nl';
  const organization = {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': `${root}/#organization`,
    name: 'SV Iron Monkey', legalName: "MONKEY'S CHARTER B.V.", url: root,
    telephone: '+34 689 573 660', email: 'info@svironmonkey.nl',
    image: `${root}/iron-monkey-under-sail.jpg`,
    address: { '@type': 'PostalAddress', streetAddress: 'La Lonja Marina', addressLocality: 'Palma de Mallorca', addressCountry: 'ES' },
    sameAs: ['https://www.instagram.com/sv.ironmonkey/', 'https://www.linkedin.com/company/monkey-s-charter/', 'https://www.youtube.com/channel/UCBA4Fee2s8ZpkTLRPUbBfcg'],
  };
  const services = ['Day Charter', 'Sunset Cruise', 'Overnight Charter'].map((name, index) => ({
    '@context': 'https://schema.org', '@type': 'Service', name: t(name),
    provider: { '@id': `${root}/#organization` }, areaServed: { '@type': 'Place', name: 'Mallorca, Balearic Islands, Spain' },
    url: root + languagePath('/' + ['day-charter', 'sunset-cruise', 'overnight-charter'][index]),
  }));
  return <Helmet><script type="application/ld+json">{JSON.stringify([organization, ...services])}</script></Helmet>;
};
export default StructuredData;
