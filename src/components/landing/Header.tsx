import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { EMPRESA } from "@/config/empresa";
import { mainNavLinks } from "@/data/navigation";
import logoIcon from "@/assets/logo-icon.png";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Principal"
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
      >
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image
            src={logoIcon}
            alt={`Logo ${EMPRESA.nome}`}
            className="h-7 w-auto"
            priority
          />
          <span>{EMPRESA.nome}</span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {mainNavLinks.map((link) => {
            // Links internos (rotas) usam Next.js Link, âncoras usam <a>
            const isInternalRoute = link.href.startsWith('/');
            
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

        <WhatsAppButton size="sm" className="rounded-full">
          Orçamento
        </WhatsAppButton>
      </nav>
    </header>
  );
}
