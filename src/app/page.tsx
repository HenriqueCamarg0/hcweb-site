import type { Metadata } from "next";
import { Header } from "@/componentes/landing/Header";
import { Hero } from "@/componentes/landing/Hero";
import { Problem, Solution } from "@/componentes/landing/ProblemSolution";
import { Steps } from "@/componentes/landing/Steps";
import { Portfolio } from "@/componentes/landing/Portfolio";
import { Benefits } from "@/componentes/landing/Benefits";
import { Testimonials } from "@/componentes/landing/Testimonials";
import { Faq } from "@/componentes/landing/Faq";
import { FinalCta } from "@/componentes/landing/FinalCta";
import { Footer } from "@/componentes/landing/Footer";
import { Toaster } from "@/componentes/ui/sonner";
import { SEO_CONFIG } from "@/configuracoes/empresa";

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
