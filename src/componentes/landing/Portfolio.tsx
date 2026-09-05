"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { projetos } from "@/dados/landing";

export function Portfolio() {
  return (
    <section className="section-pad relative overflow-hidden" id="portfolio">
      <div aria-hidden className="aura -bottom-40 -left-40 size-[30rem] opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
            Portfólio
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Demonstrações reais, no ar, para você ver na prática.
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl">
            Clique em qualquer card abaixo e veja o site funcionando de verdade, no navegador.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projetos.map((project, i) => {
            return (
              <Reveal key={project.title} delay={i * 90}>
                <article className="glass group flex h-full flex-col rounded-3xl overflow-hidden">
                  <div className="relative w-full bg-muted flex-1 flex items-center justify-center p-4">
                    <Image
                      src={project.image}
                      alt={`Landing page de demonstração para ${project.title}`}
                      width={1024}
                      height={1400}
                      loading="lazy"
                      className="w-full h-auto max-h-[400px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                <div className="flex items-center justify-between gap-4 p-6 border-t border-border">
                  <div>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-1 font-medium">{project.title}</h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    Ver projeto
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
