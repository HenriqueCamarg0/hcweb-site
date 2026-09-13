import { EMPRESA } from "@/config/empresa";

export function getServiceSchema(_baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "ProfessionalService",
      name: EMPRESA.nome,
    },
    areaServed: {
      "@type": "Country",
      name: EMPRESA.localizacao.pais,
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
}
