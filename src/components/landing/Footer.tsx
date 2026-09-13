import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { EMPRESA } from "@/config/empresa";
import { socialLinks, WHATSAPP_URL } from "@/data/contato";
import { mainNavLinks } from "@/data/navigation";
import logoIcon from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="aura bottom-0 left-1/2 size-[30rem] -translate-x-1/2 opacity-10"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Image src={logoIcon} alt={`Logo ${EMPRESA.nome}`} className="h-7 w-auto" />
            {EMPRESA.nome}
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Criação de sites profissionais e landing pages para empresas e profissionais que
            querem crescer online.
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

        <div>
          <p className="text-sm font-semibold text-foreground">Contato</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${EMPRESA.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {EMPRESA.email}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden />
                Fale no WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {EMPRESA.localizacao.cidade}, {EMPRESA.localizacao.estado} — atendimento remoto
                para todo o {EMPRESA.localizacao.pais}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {EMPRESA.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
