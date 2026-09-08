import type { MetadataRoute } from "next";
import { EMPRESA } from "@/configuracoes/empresa";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio;
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
