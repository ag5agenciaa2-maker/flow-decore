---
name: skill-rodape
description: >
  Agente especialista em criação e reformulação de rodapés para sites de advocacia e negócios locais.
  Possui dois modelos homologados: Modelo A (Premium/A&A — dark, dourado, com mapa) e
  Modelo B (Direto/Lopes e Szaz — simples, com especialidades e botão flutuante WhatsApp).
  Ao ser acionado, analisa o projeto e decide automaticamente qual base usar, podendo ser
  orientado manualmente pelo usuário.
skills:
  - frontend-design
  - clean-code
---

# 🦶 SKILL: Rodapé Premium Universal

## OBJETIVO

Criar ou reformular o rodapé de qualquer site com base em dois modelos homologados.
O agente lê os arquivos do projeto, analisa o contexto visual e de conteúdo, decide
qual modelo se encaixa melhor (ou segue instrução do usuário) e gera o HTML + CSS completo.

---

## PASSO 0 — DECISÃO DO MODELO

Antes de qualquer ação, o agente DEVE determinar qual modelo será utilizado.

### Critérios de Decisão Automática

| Indicador no projeto                                    | Modelo A (Premium) | Modelo B (Direto) |
|---------------------------------------------------------|--------------------|-------------------|
| Design dark com paleta dourada / variáveis `--color-*`  | ✅                 | ❌                |
| Site usa Google Maps embed ou perfil Google Business    | ✅                 | ❌                |
| Rodapé precisa de 4ª coluna com **mapa**                | ✅                 | ❌                |
| Site sem lista de serviços/especialidades no rodapé     | ✅                 | ❌                |
| Design mais simples, sem variáveis CSS avançadas        | ❌                 | ✅                |
| Site tem **lista de serviços/especialidades** no rodapé | ❌                 | ✅                |
| WhatsApp é o canal principal de contato                 | ❌                 | ✅                |
| Site já usa botão flutuante de WhatsApp                 | ❌                 | ✅                |
| Rodapé tem coluna separada de **navegação**             | ❌                 | ✅                |

### Regra de Desempate
- Se o usuário especificar explicitamente ("use o modelo A" / "use o modelo B"), seguir sem questionar.
- Se os indicadores forem mistos, **priorizar Modelo B** quando o site tiver lista de especialidades; **priorizar Modelo A** quando o site tiver Google Maps ou design dark premium.
- Em caso de dúvida, **perguntar ao usuário** antes de prosseguir.

### Declaração Obrigatória
Ao iniciar, o agente DEVE declarar:
> "📋 **Modelo escolhido: [A ou B]** — Motivo: [breve justificativa com base nos critérios acima]."

---

## PASSO 1 — LEITURA E EXTRAÇÃO DE DADOS

Antes de gerar qualquer código, o agente DEVE ler os arquivos do projeto e extrair:

### Dados Comuns (ambos os modelos)

- [ ] **Nome completo da empresa**
- [ ] **Logo** (URL ou caminho local) + dimensões recomendadas
- [ ] **Descrição da empresa** (1-2 frases do "Sobre" ou meta description)
- [ ] **Número de WhatsApp/celular** (com texto de abertura de conversa, se disponível)
- [ ] **@ do Instagram** (link + handle)
- [ ] **Endereço completo** (para link Google Maps Directions)
- [ ] **Horário de funcionamento**
- [ ] **Seções do site** (IDs de âncoras: #home, #sobre, #servicos, etc.)
- [ ] **Ano atual** (para copyright)
- [ ] **Nome + link da agência** criadora (créditos)

### Dados Exclusivos — Modelo A (Premium)

- [ ] **Embed ID do Google Maps** (para iframe)
- [ ] **URL do perfil Google Business** (se disponível)
- [ ] **Número fixo** (link `tel:`, aparece APÓS o celular)
- [ ] **URL do Facebook** (se disponível)
- [ ] **Links de páginas legais** (termos-e-condicoes.html, politica-de-privacidade.html)
- [ ] **Áreas de atendimento** (cidades/bairros)
- [ ] **Paleta de cores do projeto** (para adaptar variáveis CSS)

### Dados Exclusivos — Modelo B (Direto)

- [ ] **Lista de especialidades/serviços** (mínimo 4, máximo 6 itens)
- [ ] **Texto do WhatsApp** para link flutuante e botão (URL encode)
- [ ] **Âncoras de cada serviço** (ex: `#services`, `#bpc`, etc.)

---

## PASSO 2A — HTML: MODELO A (Premium / A&A Advocacia)

> **Usar quando:** design dark premium, mapa, Google Business, sem lista de especialidades.

```html
<!-- ========== FOOTER PREMIUM — MODELO A ========== -->
<footer class="footer">
  <!-- Elemento decorativo de fundo (opcional) -->
  <!-- <div class="footer-bg-decor" aria-hidden="true"></div> -->

  <div class="container footer-grid">

    <!-- COLUNA 1: Marca + Redes Sociais -->
    <div class="footer-brand">
      <div class="footer-logo">
        <img src="[URL_LOGO]" alt="[NOME_EMPRESA]" width="50" height="50" loading="lazy" decoding="async">
        <span class="footer-logo-text">[NOME_CURTO]</span>
      </div>
      <p>[DESCRIÇÃO_EMPRESA]</p>

      <div class="footer-social" aria-label="Redes sociais">
        <!-- Instagram -->
        <a href="https://instagram.com/[INSTAGRAM_HANDLE]" target="_blank" rel="noopener noreferrer"
           aria-label="Instagram de [NOME_EMPRESA]" class="footer-social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
        </a>
        <!-- WhatsApp -->
        <a href="https://wa.me/55[CELULAR_SEM_FORMATACAO]" target="_blank" rel="noopener noreferrer"
           aria-label="WhatsApp de [NOME_EMPRESA]" class="footer-social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <!-- Facebook (se disponível) -->
        <!-- <a href="[URL_FACEBOOK]" target="_blank" rel="noopener noreferrer"
           aria-label="Facebook de [NOME_EMPRESA]" class="footer-social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a> -->
      </div>
    </div>

    <!-- COLUNA 2: Links Rápidos -->
    <div class="footer-column">
      <h3 class="footer-heading">Links Rápidos</h3>
      <div class="footer-links">
        <a href="#home">Home</a>
        <a href="#[SECAO_2]">[NOME_SECAO_2]</a>
        <a href="#[SECAO_3]">[NOME_SECAO_3]</a>
        <a href="#[SECAO_4]">[NOME_SECAO_4]</a>
        <a href="#contato">Contato</a>
      </div>
    </div>

    <!-- COLUNA 3: Contatos — ORDEM OBRIGATÓRIA -->
    <div class="footer-column">
      <h3 class="footer-heading">Contatos</h3>
      <div class="footer-contact">

        <!-- 1º: Nome da empresa -->
        <p>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 21h18M3 10l9-7 9 7v11H3V10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 21V12h6v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <!-- COM link Google Business: -->
          <a href="[URL_GOOGLE_BUSINESS]" target="_blank" rel="noopener noreferrer"
             style="color: var(--color-gold); font-weight: 600;">[NOME_COMPLETO_EMPRESA]</a>
          <!-- SEM link Google Business: -->
          <!-- <strong style="color: var(--color-gold);">[NOME_COMPLETO_EMPRESA]</strong> -->
        </p>

        <!-- 2º: Endereço -->
        <p>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>
          <a href="https://www.google.com/maps/dir/?api=1&destination=[ENDERECO_URL_ENCODED]"
             target="_blank" rel="noopener noreferrer" aria-label="Ver rota para [NOME_EMPRESA]">
            [ENDERECO_LINHA_1]<br>[ENDERECO_LINHA_2]
          </a>
        </p>

        <!-- 3º: Celular PRIMEIRO -->
        <p>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="currentColor" stroke-width="2"/>
          </svg>
          <a href="tel:+55[CELULAR_SEM_FORMATACAO]">[CELULAR_FORMATADO]</a>
        </p>

        <!-- 4º: Fixo APÓS celular (se existir) -->
        <!-- <p>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22 16.92v3..." stroke="currentColor" stroke-width="2"/>
          </svg>
          <a href="tel:+55[FIXO_SEM_FORMATACAO]">[FIXO_FORMATADO]</a>
        </p> -->

        <!-- 5º: Instagram ao FINAL -->
        <p>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
          <a href="https://instagram.com/[INSTAGRAM_HANDLE]" target="_blank" rel="noopener noreferrer">
            @[INSTAGRAM_HANDLE]
          </a>
        </p>
      </div>
    </div>

    <!-- COLUNA 4: Atendimento + Mapa -->
    <div class="footer-column">
      <h3 class="footer-heading">Atendimento</h3>

      <div class="footer-map" style="margin-bottom: 5px;">
        <iframe
          src="https://www.google.com/maps/embed?pb=[EMBED_ID_DO_MAPS]"
          width="100%" height="120" style="border:0; border-radius: 8px;"
          allowfullscreen="" loading="lazy"
          title="Mapa de localização de [NOME_EMPRESA]"
          aria-label="Localização de [NOME_EMPRESA] no mapa"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <p style="color: rgba(255,255,255,0.8); font-size: var(--text-sm); margin-bottom: 4px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
             style="vertical-align: middle; margin-right: 6px;">
          <circle cx="12" cy="12" r="10" stroke="#c9a962" stroke-width="2"/>
          <path d="M12 6v6l4 2" stroke="#c9a962" stroke-width="2" stroke-linecap="round"/>
        </svg>
        [HORARIO_FUNCIONAMENTO]
      </p>

      <p style="color: rgba(255,255,255,0.6); font-size: 0.85rem;">
        <strong style="color: var(--color-gold);">Locais:</strong> [AREAS_ATENDIMENTO]
      </p>
    </div>

  </div>

  <!-- ========== BOTTOM BAR ========== -->
  <div class="footer-bottom">
    <div class="container footer-bottom-content">
      <div class="footer-info">
        <p>© <span id="current-year">[ANO]</span> [NOME_EMPRESA]. Todos os direitos reservados.</p>
        <!-- Links legais (incluir apenas se as páginas existirem no projeto) -->
        <div class="footer-legal-links" style="margin-top: 6px; font-size: 11px; opacity: 0.7;">
          <a href="termos-e-condicoes.html" style="text-decoration: none; color: inherit;">Termos e Condições</a>
          <span style="margin: 0 8px;">|</span>
          <a href="politica-de-privacidade.html" style="text-decoration: none; color: inherit;">Política de Privacidade</a>
        </div>
      </div>
      <p class="credits">Desenvolvido por
        <a href="https://www.ag5agencia.com.br/" target="_blank" rel="noopener noreferrer"
           style="color: #c9a962; font-weight: 600;">AG5 Agência</a>
      </p>
    </div>
  </div>

</footer>
```

---

## PASSO 2B — HTML: MODELO B (Direto / Lopes e Szaz)

> **Usar quando:** design simples, lista de especialidades/serviços, WhatsApp como canal principal, botão flutuante.

```html
<!-- ========== FOOTER DIRETO — MODELO B ========== -->
<footer id="footer-contact" class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- COLUNA 1: Logo + Descrição + Redes Sociais -->
      <div class="footer-col">
        <img src="[URL_LOGO]" alt="[NOME_EMPRESA]" class="footer-logo" width="180" height="56">
        <div class="footer-about-text">
          <p>[DESCRIÇÃO_EMPRESA]</p>
        </div>
        <div class="footer-social-icons">
          <!-- Instagram -->
          <a href="https://www.instagram.com/[INSTAGRAM_HANDLE]" target="_blank" rel="noopener noreferrer"
             aria-label="Instagram">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.222-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <!-- WhatsApp -->
          <a href="https://wa.me/55[CELULAR_SEM_FORMATACAO]?text=[TEXTO_WA_URL_ENCODED]"
             target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- COLUNA 2: Navegação -->
      <div class="footer-col">
        <h4 class="footer-heading">Navegação</h4>
        <ul class="footer-links">
          <li><a href="#">Início</a></li>
          <li><a href="#[SECAO_2]">[NOME_SECAO_2]</a></li>
          <li><a href="#[SECAO_3]">[NOME_SECAO_3]</a></li>
          <li><a href="#[SECAO_4]">[NOME_SECAO_4]</a></li>
          <li><a href="#footer-contact">Contato</a></li>
        </ul>
      </div>

      <!-- COLUNA 3: Especialidades/Serviços -->
      <div class="footer-col">
        <h4 class="footer-heading">[TITULO_COLUNA_3]</h4>
        <ul class="footer-links">
          <li><a href="#[ANCORA_SERVICO_1]">[SERVICO_1]</a></li>
          <li><a href="#[ANCORA_SERVICO_2]">[SERVICO_2]</a></li>
          <li><a href="#[ANCORA_SERVICO_3]">[SERVICO_3]</a></li>
          <li><a href="#[ANCORA_SERVICO_4]">[SERVICO_4]</a></li>
          <li><a href="#[ANCORA_SERVICO_5]">[SERVICO_5]</a></li>
          <!-- Adicionar ou remover itens conforme o projeto -->
        </ul>
      </div>

      <!-- COLUNA 4: Nossos Contatos -->
      <div class="footer-col">
        <h4 class="footer-heading">Nossos Contatos</h4>
        <div class="footer-info">

          <!-- 1º: Nome da empresa -->
          <div class="footer-info-item">
            <svg class="icon icon-contact" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <p><strong>[NOME_COMPLETO_EMPRESA]</strong></p>
          </div>

          <!-- 2º: Endereço -->
          <div class="footer-info-item">
            <svg class="icon icon-contact" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <p>[ENDERECO_LINHA_1]<br>[ENDERECO_LINHA_2]</p>
          </div>

          <!-- 3º: Telefone/WhatsApp -->
          <div class="footer-info-item">
            <svg class="icon icon-contact" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <p>
              <a href="https://wa.me/55[CELULAR_SEM_FORMATACAO]?text=[TEXTO_WA_URL_ENCODED]"
                 target="_blank" rel="noopener noreferrer">[CELULAR_FORMATADO]</a>
            </p>
          </div>

          <!-- 4º: Horário de Atendimento -->
          <div class="footer-hours-box">
            <h5 class="hours-title">Horário de Atendimento</h5>
            <p>[HORARIO_FUNCIONAMENTO]</p>
          </div>

        </div>
      </div>

    </div>

    <!-- ========== BOTTOM BAR ========== -->
    <div class="footer-bottom">
      <p>© <span id="current-year">[ANO]</span> [NOME_EMPRESA]. Todos os direitos reservados.</p>
      <p>Criado por
        <a href="[URL_AGENCIA]" target="_blank" rel="noopener noreferrer" class="agency-link">[NOME_AGENCIA]</a>
      </p>
    </div>
  </div>
</footer>

<!-- ========== BOTÃO FLUTUANTE WHATSAPP ========== -->
<a href="https://wa.me/55[CELULAR_SEM_FORMATACAO]?text=[TEXTO_WA_URL_ENCODED]"
   target="_blank" rel="noopener noreferrer"
   class="floating-whatsapp"
   aria-label="Abrir conversa no WhatsApp com [NOME_EMPRESA]"
   title="Falar no WhatsApp">
  <svg class="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
```

---

## PASSO 3A — CSS: MODELO A (Premium)

```css
/* ========== FOOTER PREMIUM — MODELO A ========== */
.footer {
  background: var(--color-bg-dark, #0d2d38);
  color: rgba(255, 255, 255, 0.75);
  position: relative;
  overflow: hidden;
}

.footer-bg-decor {
  position: absolute;
  bottom: 0; right: 0;
  width: 300px; height: 300px;
  opacity: 0.03;
  pointer-events: none;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 3rem;
  padding: 3rem 0 2rem;
}

.footer-brand p {
  font-size: 0.9rem;
  line-height: 1.7;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.65);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo img {
  width: 50px; height: 50px;
  object-fit: contain;
  border-radius: 8px;
}

.footer-logo-text {
  font-family: var(--font-display, 'Playfair Display', serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-white, #fff);
}

.footer-social {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px; height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(201, 169, 98, 0.3);
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.footer-social-link:hover {
  background: rgba(201, 169, 98, 0.15);
  border-color: var(--color-gold, #c9a962);
  color: var(--color-gold, #c9a962);
  transform: translateY(-2px);
}

.footer-heading {
  font-family: var(--font-display, 'Playfair Display', serif);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white, #fff);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(201, 169, 98, 0.2);
  position: relative;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 0;
  width: 40px; height: 2px;
  background: var(--gradient-gold, linear-gradient(135deg, #c9a962, #a68a4a));
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a::before {
  content: '›';
  color: var(--color-gold, #c9a962);
  font-size: 1.1rem;
  line-height: 1;
}

.footer-links a:hover {
  color: var(--color-gold, #c9a962);
  padding-left: 4px;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer-contact p {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.footer-contact p svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-gold, #c9a962);
  opacity: 0.8;
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.2s ease;
}

.footer-contact a:hover { color: var(--color-gold, #c9a962); }

.footer-map iframe {
  border-radius: 8px;
  opacity: 0.85;
  transition: opacity 0.3s ease;
}

.footer-map iframe:hover { opacity: 1; }

.footer-bottom {
  border-top: 1px solid rgba(201, 169, 98, 0.15);
  padding: 1rem 0;
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-info p,
.credits {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Responsividade */
@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
}

@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; padding: 2rem 0 1.5rem; }
  .footer-bottom-content { flex-direction: column; text-align: center; gap: 0.5rem; }
}
```

---

## PASSO 3B — CSS: MODELO B (Direto)

```css
/* ========== FOOTER DIRETO — MODELO B ========== */
.footer {
  background-color: var(--color-footer-bg, #1a1a2e);
  color: rgba(255, 255, 255, 0.75);
  padding: 3rem 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 2.5rem;
  padding-bottom: 2rem;
}

/* Coluna 1 */
.footer-col .footer-logo {
  display: block;
  max-width: 180px;
  height: auto;
  margin-bottom: 1rem;
}

.footer-about-text p {
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.25rem;
}

.footer-social-icons {
  display: flex;
  gap: 0.75rem;
}

.footer-social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px; height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  transition: background 0.2s ease, color 0.2s ease;
}

.footer-social-icons a:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}

.footer-social-icons .icon {
  width: 18px; height: 18px;
}

/* Headings das colunas */
.footer-heading {
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Links (Colunas 2 e 3) */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links li a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.footer-links li a:hover {
  color: #fff;
  padding-left: 4px;
}

/* Coluna 4: Informações de contato */
.footer-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.footer-info-item .icon-contact {
  width: 18px; height: 18px;
  flex-shrink: 0;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.5);
}

.footer-info-item p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
}

.footer-info-item a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-info-item a:hover { color: #fff; }

/* Box de horário */
.footer-hours-box {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
}

.hours-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35rem;
}

.footer-hours-box p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
}

.agency-link {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s ease;
}

.agency-link:hover { color: #fff; }

/* Botão Flutuante WhatsApp */
.floating-whatsapp {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px; height: 56px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.floating-whatsapp:hover {
  transform: scale(1.08) translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.55);
}

.floating-whatsapp .icon {
  width: 28px; height: 28px;
}

/* Responsividade */
@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
}

@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; gap: 1.75rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .floating-whatsapp { bottom: 1rem; right: 1rem; width: 50px; height: 50px; }
}
```

---

## PASSO 4 — REGRAS DE LINKS FUNCIONAIS

### WhatsApp (Modelo B — link com texto)
```html
<!-- Texto URL encoded: "Olá vim pelo site e gostaria de mais informações." -->
<a href="https://wa.me/5521999999999?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
   target="_blank" rel="noopener noreferrer">(21) 99999-9999</a>
```

### Celular — link `tel:` (Modelo A)
```html
<a href="tel:+5521969958970">(21) 96995-8970</a>
```

### Endereço → Rota Google Maps
```html
<a href="https://www.google.com/maps/dir/?api=1&destination=Rua+Viuva+Dantas,+214,+Campo+Grande,+Rio+de+Janeiro"
   target="_blank" rel="noopener noreferrer">
  Rua Viúva Dantas, 214 – Sala 608<br>Campo Grande – RJ
</a>
```

### Nome da Empresa → Google Business (Modelo A)
```html
<a href="https://g.page/[SLUG_EMPRESA]" target="_blank" rel="noopener noreferrer"
   style="color: var(--color-gold); font-weight: 600;">
  [NOME_COMPLETO_EMPRESA]
</a>
```

### Instagram
```html
<a href="https://instagram.com/[HANDLE]" target="_blank" rel="noopener noreferrer">
  @[HANDLE]
</a>
```

---

## PASSO 5 — ELEMENTO DECORATIVO (Modelo A — Opcional)

```html
<div class="footer-bg-decor" aria-hidden="true">
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Balança da Justiça estilizada -->
    <line x1="100" y1="20" x2="100" y2="180" stroke="white" stroke-width="2"/>
    <line x1="40" y1="60" x2="160" y2="60" stroke="white" stroke-width="2"/>
    <circle cx="40" cy="100" r="30" stroke="white" stroke-width="2"/>
    <circle cx="160" cy="100" r="30" stroke="white" stroke-width="2"/>
  </svg>
</div>
```

---

## PASSO 6 — CHECKLIST FINAL

### ✅ Checklist Comum (ambos os modelos)
- [ ] Logo está carregando corretamente com `alt` descritivo
- [ ] Descrição da empresa está preenchida (1-2 frases)
- [ ] Ícones de redes sociais com `aria-label` e `rel="noopener noreferrer"`
- [ ] Bottom bar tem copyright com ano correto e créditos da agência
- [ ] CSS é responsivo: 4 colunas → 2 colunas → 1 coluna

### ✅ Checklist Exclusivo — Modelo A
- [ ] Coluna 3: nome empresa PRIMEIRO → endereço SEGUNDO → celular TERCEIRO → fixo QUARTO (se houver) → Instagram AO FINAL
- [ ] Todos os `tel:` usam formato `+55` + DDD + número
- [ ] Endereço tem link para Google Maps Directions API
- [ ] Coluna 4 tem iframe do Google Maps embed
- [ ] Links legais incluídos (apenas se os arquivos existirem no projeto)

### ✅ Checklist Exclusivo — Modelo B
- [ ] Coluna 3 lista as especialidades/serviços com âncoras corretas
- [ ] Link do telefone aponta para WhatsApp (`wa.me`) com texto URL-encoded
- [ ] Botão flutuante `.floating-whatsapp` posicionado como `fixed`
- [ ] `footer` tem `id="footer-contact"` para ser âncora do menu de navegação
- [ ] Box `.footer-hours-box` preenchido com horário correto

---

## NOTAS IMPORTANTES

1. **Declarar o modelo escolhido** no início — nunca omitir a justificativa.
2. **Paleta de cores**: adapte `--color-gold`, `--color-bg-dark` e `--color-footer-bg` conforme o design system do projeto.
3. **Tipografia**: use a fonte de display do projeto para os headings do rodapé.
4. **Mapa embed** (Modelo A): gere via `https://maps.google.com/maps?q=[ENDERECO]&output=embed`.
5. **Texto do WhatsApp** (Modelo B): sempre URL-encode o texto antes de colocar no `href`.
6. **Acessibilidade**: todos os links externos devem ter `target="_blank" rel="noopener noreferrer"` e `aria-label` descritivo.
7. **Créditos**: sempre manter a seção "Criado por / Desenvolvido por" com link da agência.
