import { faqs } from "@/components/landing/data";

export function JsonLd() {
  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || "https://hcwebsolutions.com.br";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "HC Web Solutions",
    alternateName: "Henrique Camargo Web Solutions",
    description:
      "Desenvolvimento de sites profissionais, landing pages de alta conversão e soluções web para empresas.",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    telephone: "+55-11-94208-1459",
    email: "henriqueteach@gmail.com",
    founder: {
      "@type": "Person",
      name: "Henrique Camargo",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressLocality: "São Paulo",
      addressRegion: "SP",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    priceRange: "$$",
    serviceType: "Desenvolvimento Web",
    sameAs: [
      "https://instagram.com/hcwebsolutions",
      "https://linkedin.com/company/hcwebsolutions",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "ProfessionalService",
      name: "HC Web Solutions",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Desenvolvimento Web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sites Profissionais",
            description: "Desenvolvimento de sites completos com design moderno e SEO otimizado",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HC Web Solutions",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationSchema, faqSchema, serviceSchema, websiteSchema],
          }),
        }}
      />
    </>
  );
}
