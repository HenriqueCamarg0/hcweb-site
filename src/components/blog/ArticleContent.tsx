import Image from "next/image";
import type { ConteudoArtigo } from "@/types/blog";

interface ArticleContentProps {
  conteudo: ConteudoArtigo[];
}

export function ArticleContent({ conteudo }: ArticleContentProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      {conteudo.map((bloco, index) => {
        switch (bloco.tipo) {
          case "paragrafo":
            return (
              <p key={index} className="leading-relaxed text-muted-foreground">
                {bloco.conteudo as string}
              </p>
            );

          case "heading2":
            return (
              <h2
                key={index}
                className="mt-12 mb-4 text-2xl font-semibold text-foreground first:mt-0"
              >
                {bloco.conteudo as string}
              </h2>
            );

          case "heading3":
            return (
              <h3
                key={index}
                className="mt-8 mb-3 text-xl font-semibold text-foreground"
              >
                {bloco.conteudo as string}
              </h3>
            );

          case "lista":
            return (
              <ul key={index} className="my-6 space-y-2 list-disc pl-6">
                {(bloco.conteudo as string[]).map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="my-6 border-l-4 border-primary pl-6 italic text-muted-foreground"
              >
                {bloco.conteudo as string}
              </blockquote>
            );

          case "imagem":
            return (
              <figure key={index} className="not-prose my-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={bloco.conteudo as string}
                    alt={bloco.alt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
                {bloco.alt && (
                  <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                    {bloco.alt}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
