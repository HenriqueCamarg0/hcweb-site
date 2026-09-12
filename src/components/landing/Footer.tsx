import Image from "next/image";
import Link from "next/link";
import { EMPRESA } from "@/config/empresa";
import { socialLinks } from "@/data/contato";
import { mainNavLinks } from "@/data/navigation";
import logoIcon from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <Image src={logoIcon} alt={`Logo ${EMPRESA.nome}`} className="h-6 w-auto" />
            {EMPRESA.nome}
          </div>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Criação de sites profissionais e landing pages para empresas e profissionais que querem crescer online.
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-3">
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

        <nav aria-label="Navegação do rodapé">
          <p className="text-sm font-semibold text-foreground">Navegação</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            {mainNavLinks.map((link) => {
              const isInternalRoute = link.href.startsWith("/");

              return (
                <li key={link.href}>
                  {isInternalRoute ? (
                    <Link href={link.href} className="transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="border-t border-t">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {EMPRESA.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
