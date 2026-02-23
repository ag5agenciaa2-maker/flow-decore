Comando de Implementação: Links Legais no Rodapé + Páginas de Termos e Política
PARTE 1: MODIFICAÇÃO DO RODAPÉ
INSTRUÇÕES CRÍTICAS
MODIFICAR APENAS: Adicionar dois links abaixo do texto "© 2026"
NÃO ALTERAR: Layout, espaçamento, cores, ou qualquer outro elemento do rodapé existente

Especificações dos Links
Posicionamento:
© 2026 Antigravity
Termos e Condições  |  Política de Privacidade
Estilo Visual:
cssPropriedades obrigatórias:
- font-size: 11px (menor que o copyright)
- opacity: 0.7 (estado normal)
- opacity: 1 (estado hover)
- margin-top: 6px (do texto © 2026)
- display: inline
- text-decoration: none
- transition: opacity 0.2s ease
- color: herdar cor do texto © 2026

Separador entre links:
- Usar " | " ou " • "
- Mesma opacidade dos links
Código HTML:
html<!-- Localizar div/p com texto "© 2026" e adicionar IMEDIATAMENTE após: -->
<div class="footer-legal-links" style="margin-top: 6px; font-size: 11px; opacity: 0.7;">
  <a href="/termos-e-condicoes.html" style="text-decoration: none; color: inherit;">Termos e Condições</a>
  <span style="margin: 0 8px;">|</span>
  <a href="/politica-de-privacidade.html" style="text-decoration: none; color: inherit;">Política de Privacidade</a>
</div>
Validação:

✅ Links devem estar visíveis mas discretos
✅ Não aumentar altura total do rodapé
✅ Centralizado (se © 2026 for centralizado)
✅ Funcionar em mobile (empilhar se necessário < 400px)


PARTE 2: CRIAÇÃO DAS PÁGINAS LEGAIS
ESTRUTURA BASE PARA AMBAS AS PÁGINAS
Instruções Gerais:

Criar dois arquivos HTML na raiz do projeto
Copiar header e footer do site principal (manter navegação consistente)
Usar layout centralizado: max-width 900px, padding 40px
Tipografia: mesma família do site, line-height 1.8 para legibilidade
Incluir data de "Última atualização" no topo
Usar hierarquia clara: h1 (título), h2 (seções), h3 (subseções), p (texto)


ARQUIVO 1: termos-e-condicoes.html
Estrutura HTML:
html<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Termos e Condições - Antigravity</title>
    <!-- Incluir mesmos arquivos CSS do site principal -->
</head>
<body>
    <!-- COPIAR HEADER DO SITE PRINCIPAL -->
    
    <main style="max-width: 900px; margin: 60px auto; padding: 0 20px;">
        <h1>Termos e Condições de Uso</h1>
        <p><em>Última atualização: [INSERIR DATA ATUAL]</em></p>
        
        <!-- SEÇÕES OBRIGATÓRIAS -->
        <section>
            <h2>1. Aceitação dos Termos</h2>
            <p>[Texto sobre aceitação ao usar o site]</p>
        </section>
        
        <section>
            <h2>2. Direitos de Propriedade Intelectual</h2>
            <p>[Texto sobre direitos autorais e proteção de conteúdo]</p>
        </section>
        
        <section>
            <h2>3. Uso Aceitável</h2>
            <p>[Texto sobre uso permitido e proibições]</p>
        </section>
        
        <section>
            <h2>4. Cookies e Tecnologias</h2>
            <p>[Texto sobre uso de cookies conforme banner implementado]</p>
        </section>
        
        <section>
            <h2>5. Limitação de Responsabilidade</h2>
            <p>[Texto sobre isenção de garantias]</p>
        </section>
        
        <section>
            <h2>6. Lei Aplicável</h2>
            <p>[Texto sobre legislação brasileira]</p>
        </section>
        
        <section>
            <h2>7. Contato</h2>
            <p>[E-mail e informações de contato do Antigravity]</p>
        </section>
    </main>
    
    <!-- COPIAR FOOTER DO SITE PRINCIPAL -->
</body>
</html>
Diretrizes de Conteúdo:

Usar informações REAIS extraídas do código do site Antigravity
Mencionar funcionalidades específicas presentes no site
Referenciar o sistema de cookies implementado
Incluir informações de contato reais (se disponíveis no site)
Adequar à legislação brasileira (Lei de Direitos Autorais, CDC)


ARQUIVO 2: politica-de-privacidade.html
Estrutura HTML:
html<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Política de Privacidade - Antigravity</title>
    <!-- Incluir mesmos arquivos CSS do site principal -->
</head>
<body>
    <!-- COPIAR HEADER DO SITE PRINCIPAL -->
    
    <main style="max-width: 900px; margin: 60px auto; padding: 0 20px;">
        <h1>Política de Privacidade</h1>
        <p><em>Última atualização: [INSERIR DATA ATUAL]</em></p>
        <p><strong>Esta política está em conformidade com a LGPD (Lei 13.709/2018)</strong></p>
        
        <!-- SEÇÕES OBRIGATÓRIAS LGPD -->
        <section>
            <h2>1. Informações que Coletamos</h2>
            <h3>1.1 Dados Fornecidos Diretamente</h3>
            <p>[Listar formulários e dados coletados no site]</p>
            <h3>1.2 Dados Coletados Automaticamente</h3>
            <p>[IP, navegador, cookies - conforme implementação]</p>
        </section>
        
        <section>
            <h2>2. Como Usamos Suas Informações</h2>
            <p>[Finalidades específicas baseadas nas funcionalidades do site]</p>
        </section>
        
        <section>
            <h2>3. Cookies</h2>
            <p>[Detalhar categorias de cookies implementadas: Necessários, Funcionais, Analíticos, Desempenho, Publicidade]</p>
        </section>
        
        <section>
            <h2>4. Compartilhamento de Dados</h2>
            <p>[Informar se há compartilhamento com terceiros]</p>
        </section>
        
        <section>
            <h2>5. Seus Direitos (LGPD)</h2>
            <ul>
                <li>Confirmação de tratamento de dados</li>
                <li>Acesso aos dados</li>
                <li>Correção de dados incompletos/incorretos</li>
                <li>Anonimização, bloqueio ou eliminação</li>
                <li>Portabilidade dos dados</li>
                <li>Revogação do consentimento</li>
            </ul>
        </section>
        
        <section>
            <h2>6. Segurança</h2>
            <p>[Medidas de proteção implementadas]</p>
        </section>
        
        <section>
            <h2>7. Retenção de Dados</h2>
            <p>[Período de armazenamento]</p>
        </section>
        
        <section>
            <h2>8. Menores de Idade</h2>
            <p>[Política sobre coleta de dados de menores de 18 anos]</p>
        </section>
        
        <section>
            <h2>9. Contato e Encarregado de Dados</h2>
            <p>E-mail: [INSERIR E-MAIL DO DPO/ENCARREGADO]</p>
        </section>
    </main>
    
    <!-- COPIAR FOOTER DO SITE PRINCIPAL -->
</body>
</html>
Diretrizes de Conteúdo:

Analisar CÓDIGO REAL do site para identificar formulários, cookies, scripts de terceiros
Listar EXATAMENTE quais dados são coletados (nomes de campos de formulários)
Detalhar os 5 tipos de cookies conforme banner implementado
Mencionar ferramentas de terceiros usadas (Google Analytics, etc. se presentes)
Incluir canal real de contato para exercício de direitos LGPD


CHECKLIST DE IMPLEMENTAÇÃO
Rodapé:

 Links adicionados abaixo de "© 2026"
 Tamanho menor e discreto
 Não expandiu altura do rodapé
 Links funcionais

Páginas:

 Header idêntico ao site principal
 Footer idêntico ao site principal
 Conteúdo baseado em informações REAIS do site
 Data de atualização preenchida
 Contato real incluído
 Responsivo em mobile
 Tipografia legível (line-height adequado)

Conformidade Legal:

 Termos mencionam funcionalidades reais do site
 Política de Privacidade lista cookies reais implementados
 LGPD: todos os direitos do titular listados
 Informações de contato do encarregado/DPO


ENTREGA
Forneça 3 arquivos:

Snippet HTML para inserir no rodapé
termos-e-condicoes.html completo
politica-de-privacidade.html completo

CRITICAL: Use APENAS informações extraídas do código real do site Antigravity. Não invente funcionalidades, formulários ou dados coletados que não existam.