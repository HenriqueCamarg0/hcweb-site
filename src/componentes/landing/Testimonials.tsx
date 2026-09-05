"use client";

import { Globe, Target, TrendingUp, Search, Shield, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/componentes/ui/carousel";
import { Reveal } from "./Reveal";
import { porQueTerSite } from "@/dados/landing";

const iconMap = {
  Globe,
  Target,
  TrendingUp,
  Search,
  Shield,
  Zap,
} as const;

export function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden" id="por-que-ter-site">
      <div aria-hidden className="aura top-0 left-1/2 size-[28rem] -translate-x-1/2 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
            Por que ter um site
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Motivos para investir em presença digital.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Carousel opts={{ align: "start", loop: true }} className="mt-8">
            <CarouselContent>
              {porQueTerSite.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <CarouselItem key={item.title} className="sm:basis-1/2 lg:basis-1/3">
                    <article className="glass flex h-full flex-col rounded-3xl p-7">
                      <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="size-6 text-primary-glow" aria-hidden />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="mt-8 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0 rounded-full border-border bg-transparent hover:bg-accent" />
              <CarouselNext className="static translate-y-0 rounded-full border-border bg-transparent hover:bg-accent" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
