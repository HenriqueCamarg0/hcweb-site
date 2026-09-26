"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { perguntasFrequentes } from "@/data/landing";

export function Faq() {
  return (
    <section className="section-pad" id="faq">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          category="FAQ"
          title="Perguntas frequentes"
          description="Ainda com dúvidas? Fale com a gente pelo WhatsApp e respondemos em minutos."
        />

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
