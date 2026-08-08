import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HC Web Solutions - Desenvolvimento Web Profissional",
    short_name: "HC Web Solutions",
    description:
      "Desenvolvimento de sites profissionais, landing pages de alta conversão e soluções web para empresas.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0B",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
