import { Globe, Linkedin } from "lucide-react";
import { AUTOR } from "@/config/autor";

/**
 * Box "Sobre o autor" exibido ao final de cada artigo do blog.
 * Reforça autoria e credibilidade (E-E-A-T) tanto para o leitor
 * quanto para o Google, e complementa os dados já enviados via JSON-LD.
 */
export function AuthorBio() {
  return (
    <aside
      aria-label="Sobre o autor"
      className="mt-12 flex flex-col gap-3 rounded-2xl border border-border p-6 sm:flex-row sm:items-start"
    >
      <div>
        <p className="text-sm text-muted-foreground">Escrito por</p>
        <h2 className="text-lg font-semibold">{AUTOR.nome}</h2>
        <p className="text-sm text-muted-foreground">{AUTOR.cargo}</p>
        <p className="mt-2 text-sm leading-relaxed">{AUTOR.bio}</p>
        <div className="mt-3 flex gap-4 text-sm">
          <a
            href={AUTOR.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
          >
            <Linkedin className="size-4" aria-hidden />
            LinkedIn
          </a>
          <a
            href={AUTOR.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
          >
            <Globe className="size-4" aria-hidden />
            Site
          </a>
        </div>
      </div>
    </aside>
  );
}
