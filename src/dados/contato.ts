/**
 * Configurações de contato e WhatsApp
 */

import { EMPRESA } from "@/configuracoes/empresa";

export const WHATSAPP_URL =
  `https://wa.me/${EMPRESA.whatsapp}?text=` +
  encodeURIComponent("Olá! Quero um orçamento para criação de site.");
