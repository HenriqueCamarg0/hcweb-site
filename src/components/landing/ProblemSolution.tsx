import * as Icons from "lucide-react";
import { Reveal } from "./Reveal";
import { problems, solutions } from "./data";

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return <C className={className} aria-hidden />;
}

export function Problem() {
  return (
    <section className="section-pad relative" id="problema">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
            O problema
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A maioria das empresas perde clientes sem nem perceber.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 70}>
              <div className="glass h-full rounded-2xl p-6">
                <Icons.X className="size-5 text-destructive" aria-hidden />
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Solution() {
  return (
    <section className="section-pad relative overflow-hidden" id="solucao">
      <div aria-hidden className="aura top-1/3 -right-40 size-[32rem] opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
            A solução
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Tudo o que sua página precisa para converter, incluído.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <article className="glass group h-full rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h3 className="mt-5 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
