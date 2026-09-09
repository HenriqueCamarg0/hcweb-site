import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { BlogJsonLd } from "@/components/blog/BlogJsonLd";
import { Button } from "@/components/ui/button";
import { artigos } from "@/data/blog";
import {
  buscarArtigoPorSlug,
  buscarArtigosRelacionados,
  obterTodosSlugs,
} from "@/lib/blog";
import { formatDate } from "@/lib/dates";
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
  const artigosRelacionados = buscarArtigosRelacionados(artigos, slug, 3);

  return (
    <>
      <BlogJsonLd artigo={artigo} url={url} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <article className="section-pad mx-auto max-w-3xl px-4">
            <nav className="mb-8" aria-label="Breadcrumb">
              <Link href="/blog" className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Voltar para o blog
              </Link>
            </nav>
            <header className="mb-8 space-y-4">
              <div className="flex flex-wrap gap-2">
                {artigo.palavrasChave.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tag}</span>
                ))}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{artigo.titulo}</h1>
              <p className="text-lg text-muted-foreground">{artigo.descricao}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" aria-hidden />
                  <time dateTime={artigo.dataPublicacao}>{formatDate(artigo.dataPublicacao)}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4" aria-hidden />
                  <span>{artigo.tempoLeitura} min</span>
                </div>
                <span>Por {artigo.autor}</span>
              </div>
            </header>
            <ArticleContent conteudo={artigo.conteudo} />
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center">
              <h2 className="mb-3 text-2xl font-semibold">Pronto para transformar sua presença online?</h2>
              <p className="mb-6 text-muted-foreground">Vamos criar juntos um site que converte visitantes em clientes</p>
              <Button size="lg" asChild><Link href={`https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(`Olá! Li o artigo "${artigo.titulo}" e gostaria de saber mais sobre criação de sites.`)}`} target="_blank" rel="noopener noreferrer">Falar com especialista</Link></Button>
            </div>
          </article>
          {artigosRelacionados.length > 0 && <RelatedArticles artigos={artigosRelacionados} />}
        </main>
        <Footer />
      </div>
    </>
  );
}