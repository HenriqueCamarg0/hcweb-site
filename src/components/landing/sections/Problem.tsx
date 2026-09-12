"use client";

import { X } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { problemas } from "@/data/landing";

export function Problem() {
  return (
    <section className="section-pad relative" id="problema">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          category="O problema"
          title="A maioria das empresas perde clientes sem nem perceber."
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 70}>
              <div className="glass h-full rounded-2xl p-6">
                <X className="size-5 text-destructive" aria-hidden />
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
