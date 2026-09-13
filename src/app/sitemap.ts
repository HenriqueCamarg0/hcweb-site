import type { MetadataRoute } from "next";
import { EMPRESA } from "@/config/empresa";
import { artigos } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio;

  // Sinal real de "última atualização": data do artigo mais recente,
  // em vez da data do build (que mudaria a cada deploy sem conteúdo novo)
  const datasArtigos = artigos.map(
    (a) => new Date(a.dataAtualizacao || a.dataPublicacao)
  );
  const dataMaisRecente =
    datasArtigos.length > 0
      ? new Date(Math.max(...datasArtigos.map((d) => d.getTime())))
      : new Date();

  // Página principal
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: dataMaisRecente,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Página do blog
  const blogPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: dataMaisRecente,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // Páginas de artigos individuais
  const artigoPages: MetadataRoute.Sitemap = artigos.map((artigo) => ({
    url: `${baseUrl}/blog/${artigo.slug}`,
    lastModified: new Date(artigo.dataAtualizacao || artigo.dataPublicacao),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...homepage, ...blogPage, ...artigoPages];
}
