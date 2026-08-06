import * as Icons from "lucide-react";
import { Reveal } from "./Reveal";
import { benefits } from "./data";

export function Benefits() {
  return (
    <section className="section-pad" id="beneficios">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
            Benefícios
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            O que muda no seu negócio a partir da entrega.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const C = (Icons as unknown as Record<string, Icons.LucideIcon>)[b.icon];
            return (
              <Reveal key={b.title} delay={i * 60}>
                <article className="glass h-full rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1">
                  {C ? <C className="size-6 text-primary-glow" aria-hidden /> : null}
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
