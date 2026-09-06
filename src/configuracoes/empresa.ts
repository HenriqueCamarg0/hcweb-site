/**
 * Configurações centralizadas da empresa HC Web Sites
 * Todas as referências à marca, contatos e identidade da empresa
 */

export const EMPRESA = {
  nome: "HC Web Sites",
  nomeCompleto: "HC Web Sites - Henrique Camargo",
  fundador: "Henrique Camargo",
  dominio: "https://hcwebsites.com.br",
  email: "henriqueteach@gmail.com",
  telefone: "+55-11-94208-1459",
  whatsapp: "5511942081459",
  localizacao: {
    cidade: "São Paulo",
    estado: "SP",
    pais: "Brasil",
  },
  redesSociais: {
    instagram: "https://www.instagram.com/hcweb_sites/",
    instagramHandle: "@hcweb_sites",
    linkedin: "https://www.linkedin.com/in/henriquecamargodesousa/",
  },
} as const;

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
  imagemOG: "/og-image.jpg",
  imagemOGWidth: 1200,
  imagemOGHeight: 630,
};
