/**
 * Utilitários para formatação de datas
 */

/**
 * Formata data no padrão brasileiro longo
 * @example "15 de janeiro de 2024"
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/**
 * Formata data no padrão brasileiro curto
 * @example "15/01/2024"
 */
export function formatDateShort(dateString: string): string {
  return new Date(dateString).toLocaleDateString("pt-BR");
}

/**
 * Calcula tempo relativo
 * @example "2 dias atrás"
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Hoje";
  if (diffInDays === 1) return "Ontem";
  if (diffInDays < 7) return `${diffInDays} dias atrás`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} semanas atrás`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} meses atrás`;
  return `${Math.floor(diffInDays / 365)} anos atrás`;
}
