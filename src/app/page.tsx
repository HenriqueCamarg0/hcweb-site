import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem, Solution } from "@/components/landing/ProblemSolution";
import { Steps } from "@/components/landing/Steps";
import { Portfolio } from "@/components/landing/Portfolio";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "HC Web Solutions | Desenvolvimento Web Profissional",
  description:
    "Desenvolvimento de sites profissionais, landing pages de alta conversão e soluções web para empresas. Tecnologia de ponta para sua presença digital.",
  openGraph: {
    title: "HC Web Solutions | Desenvolvimento Web Profissional",
    description:
      "Desenvolvimento de sites profissionais, landing pages de alta conversão e soluções web para empresas. Tecnologia de ponta para sua presença digital.",
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
