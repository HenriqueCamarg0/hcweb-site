import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/shared/Badge";
import type { Artigo } from "@/types/blog";
import { formatDate } from "@/lib/dates";

interface ArticleCardProps {
  artigo: Artigo;
  delay?: number;
}

export function ArticleCard({ artigo, delay = 0 }: ArticleCardProps) {
  const dataFormatada = formatDate(artigo.dataPublicacao);

  return (
    <Reveal delay={delay} as="article">
      <Link
        href={`/blog/${artigo.slug}`}
        className="glass group flex h-full flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {/* Imagem de destaque */}
        {artigo.imagemDestaque && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted rounded-t-2xl">
            <Image
              src={artigo.imagemDestaque}
              alt={artigo.titulo}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        {/* Categoria */}
        <div className="p-6 pb-4">
          <Badge variant="primary">{artigo.categoria}</Badge>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col px-6 pb-6">
          {/* Título */}
          <h3 className="text-xl font-semibold leading-tight group-hover:text-primary-glow transition-colors">
            {artigo.titulo}
          </h3>

          {/* Descrição */}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {artigo.descricao}
          </p>

          {/* Meta informações */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3.5" aria-hidden="true" />
              <time dateTime={artigo.dataPublicacao}>{dataFormatada}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              <span>{artigo.tempoLeitura} min de leitura</span>
            </div>
          </div>

          {/* Link "Ler artigo" */}
          <div className="mt-4">
            <span className="inline-flex items-center text-sm font-medium text-primary-glow group-hover:gap-2 transition-all">
              Ler artigo
              <span
                className="ml-1 inline-block transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
