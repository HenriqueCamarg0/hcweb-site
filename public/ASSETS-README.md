# 📁 Assets e Imagens - Guia de Otimização

## 🖼️ Estrutura de Assets

### Imagens da Landing Page
As imagens estão em `src/assets/` e são importadas diretamente nos componentes usando `next/image` para otimização automática:

- `hero-mockup.png` - Imagem hero (1280x1024)
- `project-1.png` - Portfolio item 1
- `project-2.jpg` - Portfolio item 2  
- `project-3.jpg` - Portfolio item 3

**✅ Já otimizado**: O Next.js automaticamente converte para AVIF/WebP, redimensiona e lazy-load.

---

## 🎨 Ícones e Favicons Necessários

Você precisa criar/adicionar os seguintes arquivos na pasta `public/`:

### Favicon Básico
- ✅ `favicon.ico` - Já existe

### Ícones Modernos (PWA)
Crie estes ícones a partir do seu logo:

- ⚠️ `icon.svg` - Ícone vetorial (recomendado)
- ⚠️ `icon-192.png` - 192x192px (Android)
- ⚠️ `icon-512.png` - 512x512px (Android)
- ⚠️ `apple-touch-icon.png` - 180x180px (iOS)

### Open Graph / Social Media
- ⚠️ `og-image.jpg` - 1200x630px (compartilhamento redes sociais)
- ⚠️ `logo.png` - Logo para Schema.org

---

## 🛠️ Como Criar os Ícones

### Opção 1: Ferramenta Online (Mais Rápido)
Use [realfavicongenerator.net](https://realfavicongenerator.net/):
1. Upload do logo quadrado (mínimo 512x512px)
2. Baixe o pacote gerado
3. Copie os arquivos para `/public/`

### Opção 2: Figma/Photoshop
1. Crie um artboard 512x512px
2. Centralize seu logo
3. Exporte em múltiplos tamanhos:
   - 16x16, 32x32, 48x48 → `favicon.ico`
   - 192x192 → `icon-192.png`
   - 512x512 → `icon-512.png`
   - 180x180 → `apple-touch-icon.png`

### Opção 3: Comando ImageMagick (Linux/Mac)
```bash
# A partir de um logo.png 512x512
convert logo.png -resize 192x192 public/icon-192.png
convert logo.png -resize 512x512 public/icon-512.png
convert logo.png -resize 180x180 public/apple-touch-icon.png
```

---

## 🌐 Open Graph Image

A imagem `og-image.jpg` (1200x630px) aparece quando o link é compartilhado no:
- WhatsApp
- Facebook
- LinkedIn
- Twitter/X

**Design recomendado**:
- Fundo escuro (#0B0B0B)
- Logo + Texto: "Lumen Pages - Landing Pages de alta conversão"
- Mockup de um site/página
- Fontes grandes e legíveis

---

## ✅ Checklist de Assets

Antes de fazer deploy na Vercel:

- [ ] `favicon.ico` - Existe
- [ ] `icon.svg` - Criar
- [ ] `icon-192.png` - Criar (192x192)
- [ ] `icon-512.png` - Criar (512x512)
- [ ] `apple-touch-icon.png` - Criar (180x180)
- [ ] `og-image.jpg` - Criar (1200x630)
- [ ] `logo.png` - Criar (opcional, para Schema.org)

---

## 🚀 Otimização Automática do Next.js

O Next.js otimiza automaticamente:
- ✅ Conversão para AVIF/WebP
- ✅ Responsive images (múltiplos tamanhos)
- ✅ Lazy loading (carrega quando visível)
- ✅ Blur placeholder (efeito de carregamento)
- ✅ Cache agressivo com hash de conteúdo

**Não é necessário** otimizar manualmente as imagens de `src/assets/`.

---

## 📊 Lighthouse Score Esperado

Com os assets otimizados:
- Performance: 95-100
- Accessibility: 90-100
- Best Practices: 95-100
- SEO: 100

---

## 🔧 Comandos Úteis

### Verificar tamanho das imagens
```bash
Get-ChildItem -Path public -Recurse -Include *.jpg,*.png,*.webp | Select-Object Name, @{Name="Size(KB)";Expression={[Math]::Round($_.Length/1KB,2)}}
```

### Build para produção
```bash
npm run build
```

O build mostrará:
- Tamanho de cada página
- Imagens otimizadas
- Static/Dynamic pages
