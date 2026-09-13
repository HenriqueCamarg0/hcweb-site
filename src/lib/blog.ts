/**
 * Utilitários e funções de busca para o blog
 * Separado da lógica de dados para melhor organização
 */

import type { Artigo } from "@/types/blog";

/**
 * Busca um artigo pelo slug
 */
export function buscarArtigoPorSlug(
  artigos: Artigo[],
  slug: string,
): Artigo | undefined {
  return artigos.find((artigo) => artigo.slug === slug);
}

/**
 * Retorna artigos relacionados (mesma categoria, exceto o artigo atual)
 */
export function buscarArtigosRelacionados(
  artigos: Artigo[],
  slug: string,
  limite: number = 3,
): Artigo[] {
  const artigoAtual = buscarArtigoPorSlug(artigos, slug);
  if (!artigoAtual) return [];

  return artigos
    .filter(
      (artigo) =>
        artigo.slug !== slug && artigo.categoria === artigoAtual.categoria,
    )
    .slice(0, limite);
}

/**
 * Retorna todos os slugs para geração estática
 */
export function obterTodosSlugs(artigos: Artigo[]): { slug: string }[] {
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}
