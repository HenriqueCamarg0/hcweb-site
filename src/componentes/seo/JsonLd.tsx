import { EMPRESA } from "@/configuracoes/empresa";
import { perguntasFrequentes } from "@/dados/landing";

export function JsonLd() {
  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: EMPRESA.nome,
    alternateName: EMPRESA.nomeCompleto,
    description:
      "Criação de sites profissionais e landing pages de alta conversão para empresas.",
    url: baseUrl,
    telephone: EMPRESA.telefone,
    email: EMPRESA.email,
    founder: {
      "@type": "Person",
      name: EMPRESA.fundador,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: EMPRESA.localizacao.pais,
      addressLocality: EMPRESA.localizacao.cidade,
      addressRegion: EMPRESA.localizacao.estado,
    },
    areaServed: {
      "@type": "Country",
      name: EMPRESA.localizacao.pais,
    },
    priceRange: "$$",
    serviceType: "Criação de Sites",
    sameAs: [EMPRESA.redesSociais.instagram, EMPRESA.redesSociais.linkedin],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntasFrequentes.map((faq) => ({
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: EMPRESA.nome,
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
