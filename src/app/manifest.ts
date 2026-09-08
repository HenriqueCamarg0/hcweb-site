import { MetadataRoute } from "next";
import { EMPRESA, SEO_CONFIG } from "@/configuracoes/empresa";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${EMPRESA.nome} - Criação de Sites Profissionais`,
    short_name: EMPRESA.nome,
    description: SEO_CONFIG.descricaoCurta,
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0B",
    theme_color: "#2563EB",
    icons: [],
  };
}
