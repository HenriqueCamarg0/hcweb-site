import { EMPRESA } from "@/config/empresa";

export function getOrganizationSchema(baseUrl: string) {
  return {
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
}
