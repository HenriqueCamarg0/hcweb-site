/**
 * Links de navegação do site
 */

export interface NavLink {
  href: string;
  label: string;
}

export const mainNavLinks: readonly NavLink[] = [
  { href: "/#solucao", label: "Serviços" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
] as const;
