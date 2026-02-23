---
name: cookie-banner-universal
description: >
  Skill universal para implementação de sistema de consentimento de cookies (LGPD/GDPR)
  em qualquer tipo de site estático ou dinâmico. Gera CSS com variáveis customizáveis,
  JS vanilla sem dependências e HTML semântico acessível.
  Inclui 5 categorias de cookies, modal de personalização, botão flutuante de preferências
  e persistência via localStorage.
skills:
  - frontend-design
  - seo-fundamentals
---

# 🍪 SKILL: Cookie Banner Universal — LGPD/GDPR

> **Skill profissional e agnóstica de framework.** Funciona em qualquer site HTML/CSS/JS,
> WordPress, Next.js, Astro, Vue, React ou qualquer outro stack.

---

## 📁 Estrutura da Skill

```
Skill-Cookie-Site/
├── SKILL.md              ← Este arquivo (instruções completas)
├── cookie-banner.css     ← CSS universal com variáveis customizáveis
├── cookie-banner.js      ← JS vanilla sem dependências externas
├── cookie-banner.html    ← Snippet HTML completo para copiar/colar
├── examples/
│   ├── theme-dark.css    ← Tema escuro (padrão)
│   ├── theme-light.css   ← Tema claro
│   └── theme-custom.css  ← Template para tema personalizado
└── README.md             ← Documentação rápida
```

---

## 🚀 Implementação em 4 Passos

### PASSO 1 — Copiar os arquivos para o projeto

```
cookie-banner.css  →  /raiz-do-projeto/
cookie-banner.js   →  /raiz-do-projeto/
```

### PASSO 2 — Adicionar no `<head>` de TODAS as páginas

```html
<link rel="stylesheet" href="cookie-banner.css">
```

### PASSO 3 — Adicionar antes do `</body>` de TODAS as páginas

Cole o conteúdo de `cookie-banner.html` e depois:

```html
<script src="cookie-banner.js" defer></script>
```

### PASSO 4 — Personalizar as cores (opcional)

No seu CSS principal, sobrescreva as variáveis do banner:

```css
:root {
  --ck-bg: #1a1a2e;           /* Cor de fundo do banner e modal header */
  --ck-accent: #e94560;       /* Cor de destaque (botão primário, badge) */
  --ck-accent-dark: #c73652;  /* Hover da cor de destaque */
  --ck-text-muted: rgba(255,255,255,0.45); /* Texto secundário no banner */
}
```

---

## 🎨 Sistema de Temas

A skill inclui 3 temas prontos em `examples/`:

| Arquivo | Descrição | Quando usar |
|---|---|---|
| `theme-dark.css` | Fundo escuro, accent customizável | Sites com dark mode |
| `theme-light.css` | Fundo claro, bordas sutis | Sites corporativos/claros |
| `theme-custom.css` | Template em branco | Criar tema do zero |

Para usar um tema, importe-o **após** `cookie-banner.css`:

```html
<link rel="stylesheet" href="cookie-banner.css">
<link rel="stylesheet" href="examples/theme-light.css">
```

---

## ⚙️ Configurações do JavaScript

No início de `cookie-banner.js`, ajuste as configurações:

```js
const CONFIG = {
  storageKey: 'site_cookie_consent',  // Chave no localStorage
  expiryDays: 365,                    // Dias até expirar o consentimento
  bannerDelay: 600,                   // ms antes de mostrar o banner
  showFloatingBtn: true,              // Mostrar botão flutuante após fechar
  privacyPolicyUrl: 'politica-de-privacidade.html', // URL da política
};
```

---

## 🔌 API Pública

Após carregar o script, use `window.CookieBanner` para controle programático:

```js
// Abrir modal de preferências (ex: link no rodapé)
CookieBanner.open();

// Aceitar todos os cookies
CookieBanner.acceptAll();

// Rejeitar todos (apenas necessários)
CookieBanner.rejectAll();

// Obter preferências salvas
const prefs = CookieBanner.getPreferences();
// { necessary: true, functional: true, analytics: false, ... }

// Verificar se usuário já decidiu
const decided = CookieBanner.hasDecided();
```

### Integração com Google Analytics / GTM

```js
window.addEventListener('cookieConsentUpdated', function(e) {
  const { preferences } = e.detail;

  if (preferences.analytics) {
    // Ativar Google Analytics
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }

  if (preferences.advertising) {
    // Ativar pixels de publicidade
    gtag('consent', 'update', { ad_storage: 'granted' });
  }
});
```

---

## ♿ Acessibilidade

O sistema implementa:
- `role="dialog"` e `aria-modal="true"` no banner e modal
- `aria-label` em todos os botões interativos
- `aria-live="polite"` para anúncios de status
- Fechamento do modal com tecla `Escape`
- Foco automático no primeiro elemento do modal ao abrir
- Toggle switches com `focus-visible` para navegação por teclado

---

## 📋 Categorias de Cookies

| Categoria | Obrigatório | Descrição |
|---|---|---|
| **Necessário** | ✅ Sempre ativo | Funcionamento básico do site |
| **Funcional** | ❌ Opcional | Preferências, compartilhamento social |
| **Analítico** | ❌ Opcional | Google Analytics, Hotjar, etc. |
| **Desempenho** | ❌ Opcional | Monitoramento de velocidade |
| **Publicidade** | ❌ Opcional | Google Ads, Meta Pixel, etc. |

---

## 🔧 Personalização Avançada

### Adicionar/remover categorias

No `cookie-banner.html`, cada categoria segue este padrão:

```html
<div class="ck-category">
  <div class="ck-category__header">
    <div class="ck-category__info">
      <h3 class="ck-category__name">Nome da Categoria</h3>
      <p class="ck-category__desc">Descrição da categoria.</p>
    </div>
    <!-- Para categoria obrigatória: -->
    <span class="ck-category__badge">Sempre ativo</span>
    <!-- Para categoria opcional: -->
    <label class="ck-toggle" aria-label="Ativar [categoria]">
      <input type="checkbox" id="ck-[id]" name="[id]">
      <span class="ck-toggle__slider"></span>
    </label>
  </div>
</div>
```

No `cookie-banner.js`, adicione o ID ao `TOGGLE_MAP`:

```js
const TOGGLE_MAP = {
  'ck-functional': 'functional',
  'ck-analytics': 'analytics',
  'ck-performance': 'performance',
  'ck-advertising': 'advertising',
  'ck-minha-categoria': 'minha_categoria', // ← adicionar aqui
};
```

### Alterar posição do banner

```css
/* Banner no topo (padrão: bottom) */
.ck-banner {
  top: 0;
  bottom: auto;
  border-top: none;
  border-bottom: 1px solid rgba(var(--ck-accent-rgb), 0.15);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  transform: translateY(-100%);
}
.ck-banner.ck-banner--visible { transform: translateY(0); }
.ck-banner.ck-banner--hidden { transform: translateY(-100%); }
```

---

## ✅ Checklist de Implementação

- [ ] `cookie-banner.css` linkado no `<head>` de todas as páginas
- [ ] HTML do banner e modal colado antes do `</body>`
- [ ] `cookie-banner.js` adicionado antes do `</body>`
- [ ] Configurações do JS ajustadas (storageKey, privacyPolicyUrl)
- [ ] Cores personalizadas via variáveis CSS (se necessário)
- [ ] Link para política de privacidade funcionando
- [ ] Testado em mobile e desktop
- [ ] Testado: banner não reaparece após aceite
- [ ] Testado: botão flutuante aparece após fechar o banner
- [ ] Integração com analytics/pixels configurada (se aplicável)

---

## 📋 Notas Legais

- **LGPD** (Lei 13.709/2018 — Brasil): Exige consentimento explícito para cookies não essenciais
- **GDPR** (Regulamento UE 2016/679): Mesmos requisitos para usuários europeus
- Cookies **Necessários** nunca precisam de consentimento
- O consentimento deve ser **granular** (por categoria) — ✅ implementado
- O usuário deve poder **revogar** o consentimento a qualquer momento — ✅ implementado via botão flutuante
- Recomenda-se revisar as categorias conforme os serviços reais utilizados no site
