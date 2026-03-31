# 🦷 Clinical Atelier - Template SaaS de Clínica Odontológica

Um template moderno, responsivo e otimizado para conversão, desenvolvido com React e Tailwind CSS. Perfeito para clínicas odontológicas que querem gerar leads e agendamentos via WhatsApp.

## ✨ Características

- ✅ **Design Limpo e Moderno** - Baseado em boas práticas de UX/UI
- ✅ **Totalmente Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Otimizado para Conversão** - CTA forte com WhatsApp integrado
- ✅ **Componentes Reutilizáveis** - Arquitetura escalável e bem organizada
- ✅ **Google Maps Integrado** - Mostra localização no footer
- ✅ **Botão WhatsApp Flutuante** - Sempre acessível para agendamentos
- ✅ **SEO Básico** - Meta tags e estrutura otimizada
- ✅ **Zero Dependências Backend** - Template estático configurável

## 🚀 Quick Start

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Dados da Clínica
Edite `src/config/clinicaConfig.js` com os dados da sua clínica:

```javascript
export const clinicaConfig = {
  nome: 'Sua Clínica',
  whatsapp: '11987654321', // Seu WhatsApp (sem caracteres especiais)
  telefone: '(11) 3000-0000',
  email: 'contato@suaclinica.com.br',
  // ... mais configurações
}
```

### 3. Iniciar Desenvolvimento
```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador.

### 4. Build para Produção
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/              # Componentes reutilizáveis
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── index.js
│   ├── layout/              # Componentes de layout
│   │   ├── Header.jsx
│   │   └── index.js
│   └── sections/            # Seções da página
│       ├── HeroSection.jsx
│       ├── DifferencesSection.jsx
│       ├── ServicesSection.jsx
│       ├── AboutSection.jsx
│       ├── CTASection.jsx
│       ├── Footer.jsx
│       └── index.js
├── config/
│   └── clinicaConfig.js     # ⭐ Configure aqui os dados da clínica
├── index.css                # Estilos globais
├── main.jsx
└── App.jsx

```

## 🎨 Paleta de Cores

- **Primária**: `#1A365D` (Azul escuro)
- **Secundária**: `#2D3748` (Cinza escuro)
- **Terciária**: `#4FD1C5` (Turquesa)
- **Neutra**: `#F7FAFC` (Cinza claro)

## 📱 Seções da Página

### 1. **Header**
- Logo e navegação responsiva
- Links de navegação suave (smooth scroll)
- Menu mobile colapsável
- Exibição do telefone

### 2. **Hero Section**
- CTA forte com WhatsApp
- Imagem destacada
- Badge com diferencial
- Estatísticas iniciais (5000+ sorrisos)

### 3. **Differences Section**
- Cards com diferenças da clínica
- Destaque para "8 Especialistas"
- Design atrativo com hover effects

### 4. **Services Section**
- Grid responsivo de serviços
- Ícones e descrições
- Cards com interatividade

### 5. **About Section**
- Missão da clínica com imagem
- Features com checkmarks
- Design limpo e profissional

### 6. **CTA Section**
- Call-to-action final
- Botão destaque para WhatsApp
- Mensagens de confiança

### 7. **Footer**
- Google Maps integrado
- Informações de contato
- Links de redes sociais
- Copyright e links legais

## 🔧 Customizações Comuns

### Trocar Logo
Edite o Header em `src/components/layout/Header.jsx`:
```jsx
<div className="w-10 h-10 bg-[#4FD1C5] rounded-lg flex items-center justify-center">
  {/* Coloque sua logo aqui */}
</div>
```

### Adicionar Imagens
1. Adicione as imagens em `public/` ou use URLs externas
2. Troque as URLs do Unsplash pelas suas próprias

### Adicionar Novos Serviços
Edite `src/config/clinicaConfig.js`:
```javascript
servicos: [
  {
    id: 5,
    titulo: 'Seu Novo Serviço',
    descricao: 'Descrição do serviço',
    icon: '✨'
  },
  // ...
]
```

### Mudar Cores
Todas as cores estão em `tailwind.config.js` e `src/config/clinicaConfig.js`. Troque para a cor desejada.

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Faça build: `npm run build`
2. Conecte a pasta `dist/` no Netlify

### GitHub Pages
```bash
npm run build
# Suba a pasta `dist/` para seu repositório
```

## 📈 Otimizações para Conversão

- ✅ WhatsApp button sempre visível
- ✅ CTA em várias seções
- ✅ Estatísticas de credibilidade
- ✅ Imagens de confiança
- ✅ Formulário simplificado (WhatsApp)
- ✅ Scroll suave para melhor UX
- ✅ Mobile-first design

## 🛠️ Tech Stack

- **React 18** - Biblioteca de UI
- **Vite** - Build tool moderno
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Ícones
- **React Icons** - Ícones alternativos

## 📝 Licença

MIT - Use livremente em seus projetos!

## 💡 Dicas

1. **SEO**: Customize o title e meta description no `index.html`
2. **Analytics**: Adicione Google Analytics no `index.html` ou use através do Vercel Analytics
3. **Google Maps**: Gere seu embed em [maps.google.com](https://maps.google.com)
4. **WhatsApp Business**: Use WhatsApp Business API para tracking profissional

---

Desenvolvido com ❤️ para clínicas odontológicas que querem crescer! 🚀
