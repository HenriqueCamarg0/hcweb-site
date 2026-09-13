"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { porQueTerSite } from "@/data/landing";
import { getLucideIcon } from "@/lib/icons";

export function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden" id="por-que-ter-site">
      <div aria-hidden className="aura top-0 left-1/2 size-[28rem] -translate-x-1/2 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader
          category="Por que ter um site"
          title="Motivos para investir em presença digital."
        />

        <Reveal delay={120}>
          <Carousel opts={{ align: "start", loop: true }} className="mt-8">
            <CarouselContent>
              {porQueTerSite.map((item) => {
                const Icon = getLucideIcon(item.icon);
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
