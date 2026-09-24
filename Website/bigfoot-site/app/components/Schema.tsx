import { TRIPADVISOR_URL } from "../links";

const BASE_URL = "https://manuelmoureh.github.io/bigfoot-adventures-site";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Bigfoot Adventures",
    url: BASE_URL,
    telephone: "+254722972374",
    foundingDate: "2013",
    sameAs: [TRIPADVISOR_URL],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Adams Mini Mall, Adams Arcade, Suna Road, off Ngong Road",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1492",
    },
    memberOf: [
      { "@type": "Organization", name: "Kenya Association of Tour Operators (KATO)" },
      { "@type": "Organization", name: "Tours and Safaris Kenya (TOSK)" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FaqSchema({ faqs }: { faqs: [string, string][] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ReviewSchema({ voices }: { voices: { quote: string; who: string; on: string }[] }) {
  const data = voices.map((v) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: v.quote,
    author: { "@type": "Person", name: v.who },
    itemReviewed: { "@type": "Person", name: v.on },
  }));
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
