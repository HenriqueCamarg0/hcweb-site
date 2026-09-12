import { EMPRESA } from "@/config/empresa";
import type { Artigo } from "@/types/blog";

interface BlogJsonLdProps {
  artigo: Artigo;
  url: string;
}

export function BlogJsonLd({ artigo, url }: BlogJsonLdProps) {
  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio;
  const imagemUrl = artigo.imagemDestaque ? `${baseUrl}${artigo.imagemDestaque}` : `${baseUrl}/blog/hero-mockup.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: artigo.titulo,
    description: artigo.descricao,
    image: imagemUrl,
    author: {
      "@type": "Person",
      name: artigo.autor,
      url: EMPRESA.redesSociais.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: EMPRESA.nome,
      url: EMPRESA.dominio,
      logo: {
        "@type": "ImageObject",
        url: `${EMPRESA.dominio}/favicon.ico`,
      },
    },
    datePublished: artigo.dataPublicacao,
    dateModified: artigo.dataAtualizacao || artigo.dataPublicacao,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: artigo.palavrasChave.join(", "),
    articleSection: artigo.categoria,
    timeRequired: `PT${artigo.tempoLeitura}M`,
    inLanguage: "pt-BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
