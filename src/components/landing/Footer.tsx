import { EMPRESA } from "@/config/empresa";
import { socialLinks } from "@/data/contato";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span
              aria-hidden
              className="inline-block size-6 rounded-lg bg-[image:var(--gradient-primary)]"
            />
            {EMPRESA.nome}
          </div>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Criação de sites profissionais e landing pages para empresas e profissionais que querem crescer online.
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-3">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-t">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {EMPRESA.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
