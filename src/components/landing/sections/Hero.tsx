import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import heroMockup from "@/assets/hero-mockup.png";
import { EMPRESA } from "@/config/empresa";

const seals = ["Design Premium", "SEO", "Alta Conversão", "Responsiva"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <div aria-hidden className="aura -top-40 -left-32 size-[36rem]" />
      <div aria-hidden className="aura top-24 right-0 size-[28rem] opacity-20" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="animate-rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary-glow" aria-hidden />
            Desenvolvimento sob medida em até 30 dias
          </span>

          <h1 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Sua Landing Page pronta para <span className="text-gradient">vender</span> em poucos
            dias.
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Criamos Landing Pages rápidas, modernas e focadas em conversão para transformar
            visitantes em clientes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton size="lg" origem="hero" className="glow h-12 rounded-full px-7 text-base">
              Solicitar orçamento
            </WhatsAppButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border bg-transparent px-7 text-base hover:bg-accent"
            >
              <a href="#portfolio">
                Ver projetos
                <ArrowRight aria-hidden />
              </a>
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {seals.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <Check className="size-4 text-primary-glow" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-float">
          <Image
            src={heroMockup}
            alt={`Landing page profissional da ${EMPRESA.nome} exibida em um notebook e em um celular`}
            width={1280}
            height={1024}
            priority
            className="w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
