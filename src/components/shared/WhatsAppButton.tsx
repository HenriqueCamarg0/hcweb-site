"use client";

import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/data/contato";
import { cn } from "@/lib/utils";
import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppButtonProps extends Omit<ButtonProps, "asChild"> {
  message?: string;
  children?: React.ReactNode;
  /** Identifica de onde partiu o clique, para segmentar o evento (ex.: "header", "hero", "blog"). */
  origem?: string;
}

export function WhatsAppButton({
  message,
  children = "Solicitar orçamento",
  className,
  origem,
  onClick,
  ...props
}: WhatsAppButtonProps) {
  const url = message
    ? `https://wa.me/${WHATSAPP_URL.split("wa.me/")[1]?.split("?")[0]}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackWhatsAppClick({ origem: origem ?? "botao_whatsapp" });
    onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>);
  };

  return (
    <Button asChild className={cn(className)} {...props}>
      <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <MessageCircle aria-hidden />
        {children}
      </a>
    </Button>
  );
}
