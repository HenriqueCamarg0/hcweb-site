/**
 * Utilitários para integração com WhatsApp
 */

import { EMPRESA } from "@/config/empresa";

/**
 * Gera URL do WhatsApp com mensagem pré-formatada
 */
export function getWhatsAppUrl(mensagem: string): string {
  return `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Formata mensagem de contato do formulário para WhatsApp
 */
export function formatContactMessage(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  return `Olá! Sou ${data.name}.

E-mail: ${data.email}
Telefone: ${data.phone}

Projeto: ${data.message}`;
}

/**
 * Abre WhatsApp em nova aba com mensagem
 */
export function openWhatsApp(mensagem: string): void {
  const url = getWhatsAppUrl(mensagem);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Gera mensagem padrão para CTA
 */
export function getDefaultCTAMessage(origem: string = "site"): string {
  return `Olá! Vim do ${origem} e gostaria de saber mais sobre criação de sites profissionais.`;
}

