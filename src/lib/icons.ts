/**
 * Utilitário para obter ícones Lucide dinamicamente
 */

import * as Icons from "lucide-react";

/**
 * Obtém um componente de ícone Lucide pelo nome
 * Retorna Sparkles como fallback se o ícone não existir
 */
export function getLucideIcon(name: string): Icons.LucideIcon {
  const icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
  return icon ?? Icons.Sparkles;
}
