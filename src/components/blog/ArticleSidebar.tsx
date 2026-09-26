import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import type { Artigo } from "@/types/blog";

interface ArticleSidebarProps {
  artigos: Artigo[];
}

export function ArticleSidebar({ artigos }: ArticleSidebarProps) {
  if (artigos.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-28">
      <h2 className="mb-5 text-lg font-semibold text-foreground">Veja também</h2>
      <div className="flex flex-col gap-3">
        {artigos.map((artigo) => (
          <Link
            key={artigo.slug}
            href={`/blog/${artigo.slug}`}
            className="group flex gap-4 rounded-xl p-2 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {artigo.imagemDestaque && (
              <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                <Image
                  src={artigo.imagemDestaque}
                  alt={artigo.titulo}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex min-w-0 flex-col justify-center">
              <Badge variant="secondary" className="mb-1.5 w-fit text-[10px]">
                {artigo.categoria}
              </Badge>
              <h3 className="text-sm font-medium leading-snug text-foreground line-clamp-2 transition-colors group-hover:text-primary-glow">
                {artigo.titulo}
              </h3>
              <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3" aria-hidden />
                <span>{artigo.tempoLeitura} min</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
