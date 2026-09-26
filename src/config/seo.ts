/**
 * Configurações SEO e metadados do site
 */

export const SEO_CONFIG = {
  tituloPrincipal: "HC Web Sites | Criação de Sites Profissionais",
  tituloTemplate: "%s | HC Web Sites",
  descricao:
    "Criação de sites profissionais e landing pages de alta conversão para empresas. Presença digital com design moderno e otimização para resultados.",
  descricaoCurta:
    "Criação de sites profissionais e landing pages de alta conversão para empresas.",
  keywords: [
    "criação de sites",
    "sites profissionais",
    "landing pages",
    "desenvolvimento web",
    "HC Web Sites",
    "Henrique Camargo",
    "design web",
    "SEO",
    "presença digital",
  ] as string[],
  // Imagens OG temporariamente desabilitadas até criação dos assets
  // imagemOG: "/og-image.jpg",
  // imagemOGWidth: 1200,
  // imagemOGHeight: 630,
} as const;

/**
 * Metadados específicos por rota
 */
export const PAGE_METADATA = {
  home: {
    title: SEO_CONFIG.tituloPrincipal,
    description: SEO_CONFIG.descricao,
  },
  blog: {
    title: "Blog | Dicas e conteúdos sobre desenvolvimento web",
    description:
      "Artigos educativos sobre criação de sites, landing pages, SEO e marketing digital para pequenas empresas. Aprenda a fortalecer sua presença online.",
  },
} as const;
