"use client";

import { Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { steps } from "./data";

export function Steps() {
  return (
    <section className="section-pad relative" id="como-funciona">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
            Como funciona
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Um processo simples, do primeiro contato ao site no ar.
          </h2>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary-glow" aria-hidden />
            Prazo médio: 3 a 7 dias úteis
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
          <span
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 110} className="relative">
              <span className="glass relative z-10 inline-flex size-12 items-center justify-center rounded-full text-sm font-medium text-primary-glow">
                {s.n}
              </span>
              <h3 className="mt-5 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
