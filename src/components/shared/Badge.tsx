import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

/**
 * Badge reutilizÃ¡vel para categorias, tags e labels
 */
export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-primary/10 text-primary-glow": variant === "primary",
          "bg-primary/10 text-primary": variant === "default",
          "bg-muted text-muted-foreground": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
