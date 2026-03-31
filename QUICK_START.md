# 🚀 Quick Start - Páginas Dentista SaaS

## Passo 1: Instalar Dependências
```bash
npm install
```

## Passo 2: Customize `src/config/clinicaConfig.js`

Edite os seguintes dados:
- `nome`: Nome da sua clínica
- `whatsapp`: Seu número WhatsApp (ex: 11987654321 - SEM caracteres especiais)
- `telefone`: Telefone da clínica
- `email`: E-mail de contato
- `endereco`: Endereço completo
- `googleMapsEmbed`: URL embed do Google Maps
- `servicos`: Lista de serviços oferecidos

**IMPORTANTE**: O número WhatsApp é a chave para as conversões! Colhe certo!

## Passo 3: Rodar em Desenvolvimento
```bash
npm run dev
```
Abra `http://localhost:3000`

## Passo 4: Customizar Imagens
As imagens estão usando Unsplash (URLs externas). Para criar um projeto próprio:

1. Abra `src/components/sections/HeroSection.jsx`
2. Abra `src/components/sections/AboutSection.jsx`
3. Troque as URLs `https://images.unsplash.com/...` pelas suas próprias

## Passo 5: Google Maps
1. Vá em [maps.google.com](https://maps.google.com)
2. Procure seu endereço
3. Clique em "Compartilhar"
4. Selecione "Incorporar um mapa"
5. Copie o `src` (embed URL)
6. Atualize `googleMapsEmbed` em `clinicaConfig.js`

## Passo 6: Deploy
```bash
npm run build
```

### Opção A: Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Opção B: Netlify
Conecte a pasta `dist/` ao Netlify

## ⚡ Arquivos Mais Importantes Para Customizar

1. **`src/config/clinicaConfig.js`** ← CUSTOMIZE AQUI (dados da clínica)
2. **`src/components/sections/HeroSection.jsx`** ← Imagens e textos
3. **`src/components/sections/AboutSection.jsx`** ← Sobre a clínica
4. **`tailwind.config.js`** ← Cores (se quiser mudar)

## 📊 Rastreamento de Conversões

Para rastrear cliques no WhatsApp:

### Google Analytics (Sugerido)
```html
<!-- No index.html, dentro de <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### WhatsApp Button Event
O botão já está configurado para abrir WhatsApp automaticamente!

## 🎯 Dicas Pro

1. **Testes**: Teste no mobile antes de publicar
2. **WhatsApp**: Mensagem padrão já está configurada, mas customizável
3. **Cores**: Use a paleta padrão para consistência visual
4. **Responsividade**: Tudo está mobile-first (bom para SEO)
5. **Performance**: Vite já otimiza para você

## ❓ Dúvidas Comuns

**P: Como mudo as cores?**
R: Em `tailwind.config.js`, seção `theme.extend.colors`

**P: Como adiciono mais serviços?**
R: Em `src/config/clinicaConfig.js`, array `servicos`

**P: Como mudo a fonte?**
R: Em `tailwind.config.js`, seção `theme.extend.fontFamily`

**P: Preciso de backend?**
R: Não! WhatsApp já funciona como backend (o número está no config)

---

Qualquer dúvida, consulte o **README.md** (documentação completa) 📖
