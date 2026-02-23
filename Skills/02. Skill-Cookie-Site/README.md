# 🍪 Cookie Banner Universal

**Skill profissional de consentimento de cookies — LGPD/GDPR compliant.**  
Sem dependências. Funciona em qualquer site HTML/CSS/JS.

---

## ⚡ Início Rápido (3 passos)

**1. Copie os arquivos para a raiz do seu projeto:**
```
cookie-banner.css
cookie-banner.js
```

**2. No `<head>` de todas as páginas:**
```html
<link rel="stylesheet" href="cookie-banner.css">
```

**3. Antes do `</body>` de todas as páginas:**  
Cole o conteúdo de `cookie-banner.html` e adicione:
```html
<script src="cookie-banner.js" defer></script>
```

---

## 🎨 Personalizar cores

No seu CSS principal, após importar `cookie-banner.css`:

```css
:root {
  --ck-bg: #1a1a2e;       /* Fundo do banner */
  --ck-accent: #e94560;   /* Cor de destaque */
  --ck-accent-dark: #c73652;
  --ck-accent-rgb: 233, 69, 96; /* RGB sem parênteses */
}
```

Ou use um tema pronto da pasta `examples/`:
- `theme-dark.css` — Fundo escuro (padrão)
- `theme-light.css` — Fundo claro / corporativo
- `theme-custom.css` — Template em branco

---

## ⚙️ Configurar o JS

No início de `cookie-banner.js`, edite o objeto `CONFIG`:

```js
var CONFIG = {
  storageKey: 'meu_site_cookies', // Chave única por projeto
  expiryDays: 365,
  bannerDelay: 600,               // ms antes de aparecer
  showFloatingBtn: true,          // Botão flutuante após fechar
  privacyPolicyUrl: 'politica-de-privacidade.html',
};
```

---

## 🔌 API

```js
CookieBanner.open()           // Abre o modal de preferências
CookieBanner.acceptAll()      // Aceita tudo
CookieBanner.rejectAll()      // Rejeita (só necessários)
CookieBanner.getPreferences() // Retorna objeto com preferências
CookieBanner.hasDecided()     // true se usuário já decidiu
CookieBanner.reset()          // Limpa o localStorage (para testes)
```

### Integração com Google Analytics

```js
window.addEventListener('cookieConsentUpdated', function(e) {
  if (e.detail.preferences.analytics) {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
});
```

---

## 📁 Estrutura

```
Skill-Cookie-Site/
├── SKILL.md              ← Documentação completa
├── cookie-banner.css     ← CSS universal
├── cookie-banner.js      ← JS vanilla
├── cookie-banner.html    ← Snippet HTML para copiar/colar
├── examples/
│   ├── theme-dark.css
│   ├── theme-light.css
│   └── theme-custom.css
└── README.md             ← Este arquivo
```

---

## ✅ Checklist

- [ ] CSS linkado no `<head>` de todas as páginas
- [ ] HTML do banner colado antes do `</body>`
- [ ] `storageKey` único configurado no JS
- [ ] URL da política de privacidade ajustada
- [ ] Cores personalizadas via variáveis CSS
- [ ] Testado: banner não reaparece após aceite
- [ ] Testado: botão flutuante aparece após fechar
- [ ] Integração com analytics configurada (se aplicável)
