"use client";

import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

/**
 * Wrapper que isola lógica de animação em um Client Component
 * Permite que componentes pais sejam Server Components
 */
export function AnimatedSection({ children, className, id, delay = 0 }: AnimatedSectionProps) {
  return (
    <section className={className} id={id}>
      <Reveal delay={delay}>{children}</Reveal>
    </section>
  );
}

interface AnimatedGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * Grid com animação em cascata para itens
 */
export function AnimatedGrid({ children, className, staggerDelay = 50 }: AnimatedGridProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <Reveal key={i} delay={i * staggerDelay}>
              {child}
            </Reveal>
          ))
        : children}
    </div>
  );
}
