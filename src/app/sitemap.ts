import type { MetadataRoute } from "next";
import { EMPRESA } from "@/config/empresa";
import { artigos } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio;
  const currentDate = new Date();

  // Página principal
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Página do blog
  const blogPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
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
