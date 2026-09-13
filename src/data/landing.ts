/**
 * Dados do conteúdo da landing page
 */

import type { Solucao, Etapa, Beneficio, PorQueTerSite, FAQ, Projeto } from "@/types/landing";
import demoAdvocacia from "@/assets/demo-advocacia.jpg";
import demoFloricultura from "@/assets/demo-floricultura.jpg";
import demoOdonto from "@/assets/demo-odonto.jpg";
import demoPetshop from "@/assets/demo-petshop.jpg";
import demoPizzaria from "@/assets/demo-pizzaria.jpg";
import demoRestaurante from "@/assets/demo-restaurante.jpg";
import demoStudio from "@/assets/demo-studio.jpg";

export const problemas: readonly string[] = [
  "Dependem apenas do Instagram para vender",
  "Não possuem uma presença profissional na internet",
  "Perdem clientes todos os dias para concorrentes",
  "Têm sites lentos que ninguém espera carregar",
  "Não transmitem confiança para quem chega",
] as const;

export const solucoes: readonly Solucao[] = [
  { icon: "Zap", title: "Landing Pages rápidas", desc: "Carregamento em menos de 1 segundo." },
  { icon: "Search", title: "SEO técnico", desc: "Estrutura pronta para o Google entender." },
  {
    icon: "FormInput",
    title: "Formulários inteligentes",
    desc: "Validação e captura de leads.",
  },
  { icon: "MessageCircle", title: "Integração WhatsApp", desc: "Contato direto em um clique." },
  { icon: "BarChart3", title: "Google Analytics", desc: "Métricas reais de visitantes." },
  { icon: "Target", title: "Pixel da Meta", desc: "Remarketing e campanhas otimizadas." },
  { icon: "Server", title: "Hospedagem inclusa", desc: "Infraestrutura global e estável." },
  { icon: "ShieldCheck", title: "Certificado SSL", desc: "Conexão segura e confiável." },
  { icon: "Smartphone", title: "Responsividade total", desc: "Perfeita em qualquer tela." },
  { icon: "Gauge", title: "Alta velocidade", desc: "Nota 95+ no Lighthouse." },
] as const;

export const etapas: readonly Etapa[] = [
  {
    n: "01",
    title: "Conversa inicial",
    desc: "Entendemos seu negócio, público e objetivo de conversão.",
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Definimos estrutura, copy e estratégia de captação.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Design premium e código otimizado, com revisões.",
  },
  {
    n: "04",
    title: "Publicação",
    desc: "Domínio, SSL, analytics e sua página no ar.",
  },
] as const;

export const beneficios: readonly Beneficio[] = [
  {
    icon: "Users",
    title: "Mais clientes",
    desc: "Um canal que trabalha para você 24 horas por dia.",
  },
  {
    icon: "BadgeCheck",
    title: "Mais credibilidade",
    desc: "Presença digital à altura do seu serviço.",
  },
  {
    icon: "TrendingUp",
    title: "Mais vendas",
    desc: "Página desenhada para converter visitantes.",
  },
  {
    icon: "Rocket",
    title: "Mais velocidade",
    desc: "Performance que reduz a perda de visitas.",
  },
  {
    icon: "LineChart",
    title: "Melhor posição no Google",
    desc: "SEO técnico desde o primeiro dia.",
  },
  {
    icon: "Wrench",
    title: "Fácil manutenção",
    desc: "Atualizações simples e rápidas quando precisar.",
  },
] as const;

export const porQueTerSite: readonly PorQueTerSite[] = [
  {
    icon: "Globe",
    title: "Credibilidade profissional",
    text: "Clientes confiam mais em empresas que possuem um site próprio. É a diferença entre parecer amador e parecer estabelecido.",
  },
  {
    icon: "Target",
    title: "Você escolhe o que mostrar",
    text: "Diferente das redes sociais, no seu site você controla totalmente a mensagem, o design e a experiência do visitante.",
  },
  {
    icon: "TrendingUp",
    title: "Trabalha 24 horas por dia",
    text: "Seu site está sempre disponível apresentando seus serviços, captando leads e direcionando clientes enquanto você dorme.",
  },
  {
    icon: "Search",
    title: "Aparece no Google",
    text: "Com SEO bem feito, seu site pode aparecer quando potenciais clientes pesquisam pelos seus serviços na sua região.",
  },
  {
    icon: "Shield",
    title: "Não depende de redes sociais",
    text: "Algoritmos mudam, contas podem ser bloqueadas. Seu site é seu território, onde você tem controle total.",
  },
  {
    icon: "Zap",
    title: "Conversão otimizada",
    text: "Diferente de perfis em redes sociais, um site é estruturado especificamente para converter visitantes em clientes.",
  },
] as const;

export const perguntasFrequentes: readonly FAQ[] = [
  {
    q: "Quanto custa uma landing page?",
    a: "O investimento varia conforme escopo e número de seções. Projetos começam a partir de um valor único, sem mensalidade obrigatória. Envie uma mensagem e enviamos um orçamento personalizado em até 24h.",
  },
  {
    q: "Em quanto tempo fica pronta?",
    a: "O prazo de entrega é de até 30 dias úteis. Como desenvolvemos páginas sob medida, cada projeto recebe atenção completa para garantir qualidade, design exclusivo e conversão otimizada.",
  },
  {
    q: "Posso editar depois?",
    a: "Sim. Entregamos a página com uma estrutura simples de editar e, se preferir, cuidamos das alterações para você.",
  },
  {
    q: "Vocês hospedam a página?",
    a: "Sim. A hospedagem em infraestrutura global com SSL está inclusa, e podemos conectar seu domínio próprio.",
  },
  {
    q: "Tem suporte após a entrega?",
    a: "Sim. Todo projeto inclui um período de suporte para ajustes, além de planos opcionais de manutenção contínua.",
  },
] as const;

export const projetos: readonly Projeto[] = [
  {
    title: "Advocacia",
    category: "Escritório Jurídico • Demonstração",
    image: demoAdvocacia,
    url: "https://demo-advocacia.hcwebsites.com.br",
  },
  {
    title: "Floricultura",
    category: "Floricultura • Demonstração",
    image: demoFloricultura,
    url: "https://demo-floricultura.hcwebsites.com.br",
  },
  {
    title: "Odontologia",
    category: "Clínica Odontológica • Demonstração",
    image: demoOdonto,
    url: "https://demo-odonto.hcwebsites.com.br",
  },
  {
    title: "Pet Shop",
    category: "Pet Shop • Demonstração",
    image: demoPetshop,
    url: "https://demo-petshop.hcwebsites.com.br",
  },
  {
    title: "Pizzaria",
    category: "Pizzaria • Demonstração",
    image: demoPizzaria,
    url: "https://demo-pizzaria.hcwebsites.com.br",
  },
  {
    title: "Restaurante",
    category: "Restaurante • Demonstração",
    image: demoRestaurante,
    url: "https://demo-restaurante.hcwebsites.com.br",
  },
  {
    title: "Studio",
    category: "Studio Fotográfico • Demonstração",
    image: demoStudio,
    url: "https://demo-studio.hcwebsites.com.br",
  },
] as const;
