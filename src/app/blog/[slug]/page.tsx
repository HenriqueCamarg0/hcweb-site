import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import { BlogJsonLd } from "@/components/blog/BlogJsonLd";
import { Button } from "@/components/ui/button";
import { artigos } from "@/data/blog";
import {
  buscarArtigoPorSlug,
  buscarArtigosRelacionados,
  obterTodosSlugs,
} from "@/lib/blog";
import { EMPRESA } from "@/config/empresa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return obterTodosSlugs(artigos);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artigo = buscarArtigoPorSlug(artigos, slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
    };
  }

  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio;
  const url = `${baseUrl}/blog/${slug}`;
  const imagemUrl = artigo.imagemDestaque ? `${baseUrl}${artigo.imagemDestaque}` : `${baseUrl}/blog/hero-mockup.png`;

  return {
    title: artigo.titulo,
    description: artigo.descricao,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: artigo.titulo,
      description: artigo.descricao,
      url,
      type: "article",
      publishedTime: artigo.dataPublicacao,
      authors: [artigo.autor],
      tags: artigo.palavrasChave,
      images: [
        {
          url: imagemUrl,
          width: 1024,
          height: 1400,
          alt: artigo.titulo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: artigo.titulo,
      description: artigo.descricao,
      images: [imagemUrl],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const artigo = buscarArtigoPorSlug(artigos, slug);

  if (!artigo) {
    notFound();
  }

  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio;
  const url = `${baseUrl}/blog/${slug}`;
  const artigosRelacionados = buscarArtigosRelacionados(artigos, slug, 4);

  return (
    <>
      <BlogJsonLd artigo={artigo} url={url} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ArticleHero artigo={artigo} />

          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-0">
              <article className="min-w-0 lg:border-r lg:border-border lg:pr-12">
                <ArticleContent conteudo={artigo.conteudo} />
                <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center">
                  <h2 className="mb-3 text-2xl font-semibold">Pronto para transformar sua presença online?</h2>
                  <p className="mb-6 text-muted-foreground">Vamos criar juntos um site que converte visitantes em clientes</p>
                  <Button size="lg" asChild>
                    <Link
                      href={`https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(`Olá! Li o artigo "${artigo.titulo}" e gostaria de saber mais sobre criação de sites.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar com especialista
                    </Link>
                  </Button>
                </div>
              </article>

              {artigosRelacionados.length > 0 && (
                <div className="lg:pl-12">
                  <ArticleSidebar artigos={artigosRelacionados} />
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
