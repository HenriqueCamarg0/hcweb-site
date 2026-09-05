# 🌟 HC Web Sites - Landing Pages de Alta Conversão

Landing page moderna, rápida e otimizada para SEO, construída com **Next.js 15** e **App Router**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

### 🎨 Design Premium
- ✅ Glassmorphism UI
- ✅ Dark theme moderno
- ✅ Animações suaves
- ✅ Totalmente responsivo
- ✅ 53+ componentes UI (Radix UI)

### ⚡ Performance
- ✅ Server Components (Next.js 15)
- ✅ Image optimization (AVIF/WebP)
- ✅ Lazy loading automático
- ✅ Code splitting
- ✅ Lighthouse Score 95+

### 🔍 SEO Otimizado
- ✅ Metadata API completa
- ✅ Open Graph + Twitter Cards
- ✅ Schema.org JSON-LD
- ✅ Sitemap dinâmico
- ✅ Robots.txt otimizado
- ✅ PWA ready

### 📊 Analytics
- ✅ Google Analytics 4
- ✅ Meta (Facebook) Pixel
- ✅ Pronto para remarketing

### 📱 Seções da Landing Page
- Hero com CTA principal
- Problema/Solução
- Como funciona (Steps)
- Portfólio de projetos
- Benefícios
- Depoimentos (Carousel)
- FAQ (Accordion)
- Formulário de contato
- Footer completo

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ ou Bun
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/web-solution.git
cd web-solution

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com suas configurações

# Rode em desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout + metadata
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots
├── components/
│   ├── landing/           # Componentes da landing
│   ├── ui/                # 53 componentes UI (Radix)
│   ├── seo/               # SEO components (JSON-LD)
│   └── analytics/         # GA4, Meta Pixel
├── lib/
│   ├── utils.ts           # Utilitários
│   └── image-loader.ts    # Image optimization
└── assets/                # Imagens (otimizadas auto)
```

## 🛠️ Stack Tecnológica

### Core
- **Next.js 15** - Framework React com App Router
- **React 19** - UI library
- **TypeScript 5.8** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS

### UI Components
- **Radix UI** - Acessível e não-estilizado
- **shadcn/ui** - Componentes reutilizáveis
- **Lucide React** - Ícones modernos
- **Embla Carousel** - Carousel touch-friendly

### Forms & Validation
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Schema validation
- **Sonner** - Toast notifications

### Deployment
- **Vercel** - Hospedagem otimizada (recomendado)

## 🎯 Deploy na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Via GitHub (Recomendado)

1. Push para GitHub
2. Conecte seu repo na [Vercel](https://vercel.com)
3. Configure variáveis de ambiente
4. Deploy automático!

### Via CLI

```bash
npm i -g vercel
vercel
```

### Variáveis de Ambiente

```env
NEXT_PUBLIC_SITE_URL=https://hcwebsites.com.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Opcional
NEXT_PUBLIC_META_PIXEL_ID=123456789     # Opcional
```

## 📊 Performance

### Lighthouse Scores (Produção)
- ⚡ Performance: **95-100**
- ♿ Accessibility: **90-100**
- ✅ Best Practices: **95-100**
- 🎯 SEO: **100**

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🎨 Customização

### Cores e Tema
Edite `src/app/globals.css`:

```css
:root {
  --primary: 217 91% 60%;        /* Azul principal */
  --primary-glow: 217 91% 65%;   /* Azul claro */
  --background: 11 0% 4%;         /* Fundo escuro */
  /* ... */
}
```

### Conteúdo
Edite `src/components/landing/data.ts`:

```typescript
export const WHATSAPP_URL = "https://wa.me/...";
export const problems = [...];
export const solutions = [...];
// ...
```

### Metadados SEO
Edite `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Seu Títuloo",
  description: "Sua Descrição",
  // ...
}
```

## 📝 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento (localhost:3000)
npm run build        # Build de produção
npm start            # Servidor de produção
npm run lint         # ESLint
npm run format       # Prettier
```

## 🐛 Troubleshooting

### Build Error?
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Type Errors?
```bash
npx tsc --noEmit
```

### Imagens não otimizando?
Certifique-se de usar `next/image`:
```tsx
import Image from "next/image";
<Image src={img} alt="..." />
```

## 📚 Documentação

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/docs)
- [React Hook Form Docs](https://react-hook-form.com/)

### Documentação do Projeto
- 📘 [MIGRATION.md](./MIGRATION.md) - Guia completo da migração Vite → Next.js
- 📘 [public/ASSETS-README.md](./public/ASSETS-README.md) - Guia de assets e imagens

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙋 Suporte

Precisa de ajuda? 

- 📧 Email: henriqueteach@gmail.com
- 💬 WhatsApp: [Clique aqui](https://wa.me/5511942081459)
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/web-solution/issues)

---

**Desenvolvido com ❤️ usando Next.js 15**

⭐ Se este projeto foi útil, dê uma estrela no GitHub!
