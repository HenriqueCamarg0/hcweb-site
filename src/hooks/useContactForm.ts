"use client";

import { useState } from "react";
import { toast } from "sonner";
import { formatContactMessage, openWhatsApp } from "@/lib/whatsapp";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface UseContactFormReturn {
  isSubmitting: boolean;
  handleSubmit: (data: FormData) => void;
}

/**
 * Hook para gerenciar estado e lógica do formulário de contato
 */
export function useContactForm(): UseContactFormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (data: FormData) => {
    setIsSubmitting(true);

    try {
      const mensagem = formatContactMessage(data);
      openWhatsApp(mensagem);
      
      toast.success("Pedido enviado! Continuamos a conversa no WhatsApp.");
      
      // Reset flag após animação
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error("Erro ao processar formulário:", error);
      toast.error("Erro ao processar solicitação", {
        description: "Por favor, tente novamente.",
      });
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit,
  };
}
