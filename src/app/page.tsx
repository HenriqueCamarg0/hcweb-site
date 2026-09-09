import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/sections/Hero";
import { Problem } from "@/components/landing/sections/Problem";
import { Solution } from "@/components/landing/sections/Solution";
import { Steps } from "@/components/landing/sections/Steps";
import { Portfolio } from "@/components/landing/sections/Portfolio";
import { Benefits } from "@/components/landing/sections/Benefits";
import { Testimonials } from "@/components/landing/sections/Testimonials";
import { Faq } from "@/components/landing/sections/Faq";
import { FinalCta } from "@/components/landing/sections/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";
import { SEO_CONFIG } from "@/config/seo";

export const metadata: Metadata = {
  title: SEO_CONFIG.tituloPrincipal,
  description: SEO_CONFIG.descricao,
  openGraph: {
    title: SEO_CONFIG.tituloPrincipal,
    description: SEO_CONFIG.descricao,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Steps />
        <Portfolio />
        <Benefits />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
