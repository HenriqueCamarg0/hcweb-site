import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/componentes/seo/JsonLd";
import { GoogleAnalytics } from "@/componentes/analytics/GoogleAnalytics";
import { MetaPixel } from "@/componentes/analytics/MetaPixel";
import { EMPRESA, SEO_CONFIG } from "@/configuracoes/empresa";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio),
  title: {
    default: SEO_CONFIG.tituloPrincipal,
    template: SEO_CONFIG.tituloTemplate,
  },
  description: SEO_CONFIG.descricao,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: EMPRESA.nomeCompleto }],
  creator: EMPRESA.nome,
  publisher: EMPRESA.nome,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: SEO_CONFIG.tituloPrincipal,
    description: SEO_CONFIG.descricao,
    siteName: EMPRESA.nome,
    images: [
      {
        url: SEO_CONFIG.imagemOG,
        width: SEO_CONFIG.imagemOGWidth,
        height: SEO_CONFIG.imagemOGHeight,
        alt: `${EMPRESA.nome} - Criação de Sites Profissionais`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.tituloPrincipal,
    description: SEO_CONFIG.descricaoCurta,
    images: [SEO_CONFIG.imagemOG],
    creator: EMPRESA.redesSociais.instagramHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  );
}
