import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { artigos } from "@/data/blog";
import { EMPRESA } from "@/config/empresa";

export const metadata: Metadata = {
  title: "Blog | Dicas e conteúdos sobre desenvolvimento web",
  description:
    "Artigos educativos sobre criação de sites, landing pages, SEO e marketing digital para pequenas empresas. Aprenda a fortalecer sua presença online.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog HC Web Sites | Conteúdo sobre desenvolvimento web",
    description:
      "Artigos educativos sobre criação de sites, landing pages, SEO e marketing digital para pequenas empresas.",
    url: `${EMPRESA.dominio}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog HC Web Sites | Conteúdo sobre desenvolvimento web",
    description:
      "Artigos educativos sobre criação de sites, landing pages e marketing digital.",
  },
};

export default function BlogPage() {
  // Ordenar artigos por data de publicação (mais recentes primeiro)
  const artigosOrdenados = [...artigos].sort(
    (a, b) =>
      new Date(b.dataPublicacao).getTime() -
      new Date(a.dataPublicacao).getTime(),
  );

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-background pt-32 pb-16">
          <div className="container relative z-10 mx-auto px-4">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  Blog
                </li>
              </ol>
            </nav>

            {/* Título */}
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                <BookOpen className="size-6 text-primary-glow" aria-hidden />
              </div>
              <h1 className="text-4xl font-bold md:text-5xl">
                Blog HC Web Sites
              </h1>
            </div>

            {/* Descrição */}
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Conteúdo educativo sobre desenvolvimento web, criação de sites,
              landing pages, SEO e marketing digital. Aprenda a fortalecer a
              presença online da sua empresa.
            </p>
          </div>

          {/* Decoração de fundo */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
        </section>

        {/* Artigos */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Grid de artigos */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {artigosOrdenados.map((artigo, index) => (
                <ArticleCard
                  key={artigo.slug}
                  artigo={artigo}
                  delay={index * 100}
                />
              ))}
            </div>

            {/* Mensagem quando não houver artigos (fallback) */}
            {artigos.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Em breve novos artigos serão publicados.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
