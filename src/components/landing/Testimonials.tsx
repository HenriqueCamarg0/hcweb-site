import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "./Reveal";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden" id="depoimentos">
      <div aria-hidden className="aura top-0 left-1/2 size-[28rem] -translate-x-1/2 opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
            Depoimentos
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Quem já colocou a página no ar.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Carousel opts={{ align: "start", loop: true }} className="mt-12">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="sm:basis-1/2 lg:basis-1/3">
                  <figure className="glass flex h-full flex-col rounded-3xl p-7">
                    <div className="flex gap-1" aria-label="Avaliação 5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-primary-glow text-primary-glow" aria-hidden />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                      “{t.text}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border pt-5">
                      <p className="font-medium">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
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
