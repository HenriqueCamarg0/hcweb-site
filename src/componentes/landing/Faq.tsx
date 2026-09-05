"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/componentes/ui/accordion";
import { Reveal } from "./Reveal";
import { perguntasFrequentes } from "@/dados/landing";

export function Faq() {
  return (
    <section className="section-pad" id="faq">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ainda com dúvidas? Fale com a gente pelo WhatsApp e respondemos em minutos.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="glass rounded-3xl px-6">
            {perguntasFrequentes.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
