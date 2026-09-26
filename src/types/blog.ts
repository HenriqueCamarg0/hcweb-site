/**
 * Tipos para o blog da HC Web Sites
 */

export interface Artigo {
  slug: string;
  titulo: string;
  descricao: string;
  conteudo: ConteudoArtigo[];
  categoria: Categoria;
  dataPublicacao: string; // ISO 8601
  dataAtualizacao?: string; // ISO 8601
  tempoLeitura: number; // minutos
  autor: string;
  palavrasChave: string[];
  imagemDestaque?: string; // URL ou path da imagem
}

export interface ConteudoArtigo {
  tipo: "paragrafo" | "heading2" | "heading3" | "lista" | "imagem" | "quote";
  conteudo: string | string[]; // string para texto, string[] para listas
  alt?: string; // para imagens
}

export type Categoria =
  | "Desenvolvimento Web"
  | "SEO"
  | "Marketing Digital"
  | "Sites para Empresas"
  | "Landing Pages"
  | "Tecnologia"
  | "Identidade Visual";

export interface ArtigoRelacionado {
  slug: string;
  titulo: string;
  categoria: Categoria;
  tempoLeitura: number;
}
