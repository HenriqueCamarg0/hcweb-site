import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { EMPRESA } from "@/config/empresa";
import { SEO_CONFIG } from "@/config/seo";
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
        url: "/blog/hero-mockup.png",
        width: 1280,
        height: 1024,
        alt: `${EMPRESA.nome} - Criação de Sites Profissionais`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.tituloPrincipal,
    description: SEO_CONFIG.descricaoCurta,
    creator: EMPRESA.redesSociais.instagramHandle,
    images: ["/blog/hero-mockup.png"],
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
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
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
