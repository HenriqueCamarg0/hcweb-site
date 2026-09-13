"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { beneficios } from "@/data/landing";
import { getLucideIcon } from "@/lib/icons";

export function Benefits() {
  return (
    <section className="section-pad" id="beneficios">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          category="Benefícios"
          title="O que muda no seu negócio a partir da entrega."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => {
            const Icon = getLucideIcon(b.icon);
            return (
              <Reveal key={b.title} delay={i * 60}>
                <article className="glass h-full rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1">
                  <Icon className="size-6 text-primary-glow" aria-hidden />
                  <h3 className="mt-5 text-lg font-medium">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
