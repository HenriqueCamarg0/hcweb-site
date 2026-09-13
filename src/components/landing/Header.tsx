"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EMPRESA } from "@/config/empresa";
import { mainNavLinks } from "@/data/navigation";
import logoIcon from "@/assets/logo-icon.png";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

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

        <div className="flex items-center gap-2">
          <WhatsAppButton size="sm" origem="header" className="rounded-full">
            Orçamento
          </WhatsAppButton>

          <Sheet open={menuAberto} onOpenChange={setMenuAberto}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Abrir menu de navegação"
                className="glass inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary md:hidden"
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="flex w-4/5 flex-col gap-8 sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Image src={logoIcon} alt={`Logo ${EMPRESA.nome}`} className="h-7 w-auto" />
                  {EMPRESA.nome}
                </SheetTitle>
              </SheetHeader>

              <ul className="flex flex-col gap-1 text-base">
                {mainNavLinks.map((link) => {
                  const isInternalRoute = link.href.startsWith("/");

                  return (
                    <li key={link.href}>
                      <SheetClose asChild>
                        {isInternalRoute ? (
                          <Link
                            href={link.href}
                            className="block rounded-lg px-3 py-3 text-foreground transition-colors hover:bg-accent"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="block rounded-lg px-3 py-3 text-foreground transition-colors hover:bg-accent"
                          >
                            {link.label}
                          </a>
                        )}
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>

              <WhatsAppButton origem="menu_mobile" className="mt-auto w-full rounded-full">
                Solicitar orçamento
              </WhatsAppButton>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
