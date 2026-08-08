import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env["NEXT_PUBLIC_SITE_URL"] || "https://hcwebsolutions.com.br"),
  title: {
    default: "HC Web Solutions | Desenvolvimento Web Profissional",
    template: "%s | HC Web Solutions",
  },
  description:
    "Desenvolvimento de sites profissionais, landing pages de alta conversão e soluções web para empresas. Criamos sua presença digital com tecnologia de ponta.",
  keywords: [
    "desenvolvimento web",
    "criação de sites",
    "landing pages",
    "sites profissionais",
    "HC Web Solutions",
    "Henrique Camargo",
    "desenvolvedor web",
    "SEO",
    "Next.js",
    "React",
  ],
  authors: [{ name: "HC Web Solutions - Henrique Camargo" }],
  creator: "HC Web Solutions",
  publisher: "HC Web Solutions",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "HC Web Solutions | Desenvolvimento Web Profissional",
    description:
      "Desenvolvimento de sites profissionais, landing pages de alta conversão e soluções web para empresas. Criamos sua presença digital com tecnologia de ponta.",
    siteName: "HC Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HC Web Solutions - Desenvolvimento Web Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HC Web Solutions | Desenvolvimento Web Profissional",
    description:
      "Desenvolvimento de sites profissionais, landing pages de alta conversão e soluções web para empresas.",
    images: ["/og-image.jpg"],
    creator: "@HCWebSolutions",
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
