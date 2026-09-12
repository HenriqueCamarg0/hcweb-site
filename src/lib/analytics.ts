/**
 * Utilitários para disparo de eventos de conversão.
 *
 * Centraliza o disparo de eventos para o Google Analytics (GA4) e para o
 * Meta Pixel, garantindo que toda ação de valor (clique no WhatsApp, envio
 * de formulário) vire um evento de conversão nas duas plataformas — e não
 * apenas o `PageView` automático.
 *
 * As chamadas são seguras mesmo se os scripts não tiverem sido carregados
 * (ex.: env var ausente, ad-blocker, execução no servidor).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export interface ConversionEventParams {
  [key: string]: unknown;
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Dispara um evento equivalente no GA4 (`gtag`) e no Meta Pixel (`fbq`).
 *
 * @param gaEventName Nome do evento no padrão GA4 (ex.: "generate_lead")
 * @param fbEventName Nome do evento padrão do Meta Pixel (ex.: "Lead")
 * @param params Parâmetros adicionais enviados para ambas as plataformas
 */
export function trackConversion(
  gaEventName: string,
  fbEventName: string,
  params: ConversionEventParams = {},
): void {
  if (!isBrowser()) return;

  try {
    window.gtag?.("event", gaEventName, params);
  } catch (error) {
    console.error("Erro ao disparar evento no Google Analytics:", error);
  }

  try {
    window.fbq?.("track", fbEventName, params);
  } catch (error) {
    console.error("Erro ao disparar evento no Meta Pixel:", error);
  }
}

/**
 * Clique em qualquer botão/link de WhatsApp do site (header, hero, CTA
 * final, artigo de blog, etc). Mapeado como "Contact" no Meta Pixel, que é
 * o evento padrão reconhecido para otimização de campanhas de contato.
 */
export function trackWhatsAppClick(params: ConversionEventParams = {}): void {
  trackConversion("whatsapp_click", "Contact", {
    content_name: "WhatsApp",
    ...params,
  });
}

/**
 * Envio do formulário de contato — o evento de lead mais qualificado do
 * funil, já que a pessoa preencheu nome/e-mail/telefone antes de seguir
 * para o WhatsApp. Mapeado como "generate_lead" (GA4) e "Lead" (Meta), os
 * nomes de evento padrão que as duas plataformas usam para otimização.
 */
export function trackFormSubmit(params: ConversionEventParams = {}): void {
  trackConversion("generate_lead", "Lead", {
    content_name: "Formulario de contato",
    ...params,
  });
}
