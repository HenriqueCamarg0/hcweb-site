/**
 * Configurações de contato e links sociais
 */

import { EMPRESA } from "@/config/empresa";
import { Instagram, Linkedin, MessageCircle, type LucideIcon } from "lucide-react";

export const WHATSAPP_URL =
  `https://wa.me/${EMPRESA.whatsapp}?text=` +
  encodeURIComponent("Olá! Quero um orçamento para criação de site.");

export interface SocialLink {
  href: string;
  label: string;
  Icon: LucideIcon;
}

export const socialLinks: readonly SocialLink[] = [
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: MessageCircle },
  { href: EMPRESA.redesSociais.instagram, label: "Instagram", Icon: Instagram },
  { href: EMPRESA.redesSociais.linkedin, label: "LinkedIn", Icon: Linkedin },
] as const;
