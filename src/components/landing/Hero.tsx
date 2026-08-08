"use client";

import Image from "next/image";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";
import { WHATSAPP_URL } from "./data";

const seals = ["Design Premium", "SEO", "Alta Conversão", "Responsiva"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div aria-hidden className="aura -top-40 -left-32 size-[36rem]" />
      <div aria-hidden className="aura top-24 right-0 size-[28rem] opacity-20" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary-glow" aria-hidden />
            Desenvolvimento sob medida em até 30 dias
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Sua Landing Page pronta para <span className="text-gradient">vender</span> em poucos
            dias.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Criamos Landing Pages rápidas, modernas e focadas em conversão para transformar
            visitantes em clientes.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="glow h-12 rounded-full px-7 text-base">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden />
                Solicitar orçamento
              </a>
            </Button>
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

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
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
            alt="Landing page criada pela Lumen Pages exibida em um notebook e em um celular"
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
