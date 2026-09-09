import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import type { Artigo } from "@/types/blog";

interface RelatedArticlesProps {
  artigos: Artigo[];
}

export function RelatedArticles({ artigos }: RelatedArticlesProps) {
  if (artigos.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-12">
      <h2 className="text-2xl font-semibold mb-8">Artigos relacionados</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artigos.map((artigo) => (
          <Link
            key={artigo.slug}
            href={`/blog/${artigo.slug}`}
            className="glass group flex flex-col rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Badge variant="primary" className="mb-3 w-fit">
              {artigo.categoria}
            </Badge>
            <h3 className="text-lg font-semibold leading-tight group-hover:text-primary-glow transition-colors line-clamp-2">
              {artigo.titulo}
            </h3>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" aria-hidden="true" />
              <span>{artigo.tempoLeitura} min</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
