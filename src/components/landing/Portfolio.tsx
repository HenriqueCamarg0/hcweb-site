"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects, WHATSAPP_URL } from "./data";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const images = [p1, p2, p3];

export function Portfolio() {
  return (
    <section className="section-pad relative overflow-hidden" id="portfolio">
      <div aria-hidden className="aura -bottom-40 -left-40 size-[30rem] opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
            Portfólio
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Projetos recentes feitos para converter.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => {
            const image = images[i] ?? p1; // Fallback para primeira imagem
            return (
              <Reveal key={project.title} delay={i * 90}>
                <article className="glass group h-full overflow-hidden rounded-3xl">
                  <div className="overflow-hidden">
                    <Image
                      src={image}
                      alt={`Landing page do projeto ${project.title}`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-1 font-medium">{project.title}</h3>
                  </div>
                  <a
                    href={WHATSAPP_URL}
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
