import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/dates";
import type { Artigo } from "@/types/blog";

interface ArticleHeroProps {
  artigo: Artigo;
}

export function ArticleHero({ artigo }: ArticleHeroProps) {
  return (
    <div className="relative flex min-h-[62vh] w-full items-end overflow-hidden bg-muted sm:min-h-[70vh]">
      {artigo.imagemDestaque && (
        <Image
          src={artigo.imagemDestaque}
          alt={artigo.titulo}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* Overlays para garantir contraste do texto sobre a foto */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20" />
      <div className="absolute inset-0 bg-background/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-32 sm:px-6 sm:pb-14">
        <Link
          href="/blog"
          className="group mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Voltar para o blog
        </Link>

        <div className="flex flex-wrap gap-2">
          {artigo.palavrasChave.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary-glow backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {artigo.titulo}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {artigo.descricao}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="size-4" aria-hidden />
            <time dateTime={artigo.dataPublicacao}>{formatDate(artigo.dataPublicacao)}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4" aria-hidden />
            <span>{artigo.tempoLeitura} min</span>
          </div>
          <span>Por {artigo.autor}</span>
        </div>
      </div>
    </div>
  );
}
