"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { solucoes } from "@/data/landing";
import { getLucideIcon } from "@/lib/icons";

export function Solution() {
  return (
    <section className="section-pad relative overflow-hidden" id="solucao">
      <div aria-hidden className="aura top-1/3 -right-40 size-[32rem] opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader
          category="A solução"
          title="Tudo o que sua página precisa para converter, incluído."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solucoes.map((s, i) => {
            const Icon = getLucideIcon(s.icon);
            return (
              <Reveal key={s.title} delay={i * 50}>
                <article className="glass group h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
