import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/data/contato";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends Omit<ButtonProps, "asChild"> {
  message?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  message,
  children = "Solicitar orçamento",
  className,
  ...props
}: WhatsAppButtonProps) {
  const url = message
    ? `https://wa.me/${WHATSAPP_URL.split("wa.me/")[1]?.split("?")[0]}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

  return (
    <Button asChild className={cn(className)} {...props}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden />
        {children}
      </a>
    </Button>
  );
}
