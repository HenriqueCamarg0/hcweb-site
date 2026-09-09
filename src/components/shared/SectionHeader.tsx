import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  category: string;
  title: string;
  description?: string;
  delay?: number;
}

export function SectionHeader({
  category,
  title,
  description,
  delay = 0,
}: SectionHeaderProps) {
  return (
    <Reveal delay={delay}>
      <p className="text-sm font-medium tracking-[0.2em] text-primary-glow uppercase">
        {category}
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground max-w-xl">
          {description}
        </p>
      )}
    </Reveal>
  );
}
