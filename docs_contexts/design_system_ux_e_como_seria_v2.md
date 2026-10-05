# Design System & UX Specification --- Plataforma Eleitoral Informativa 2026

**Versão:** 2.0 --- experiência imersiva\
**Uso:** instruções para o agente de IA responsável por projetar e
implementar a interface.\
**Posicionamento:** *Um site para quem não acompanha política, mas quer
entender o que as escolhas desta eleição podem significar para sua
vida.*

------------------------------------------------------------------------

# 1. Princípio de experiência

O produto não deve parecer: - campanha eleitoral; - portal partidário; -
site governamental; - jornal tradicional pesado; - disputa visual
"vermelho contra azul".

O produto deve parecer: - editorial moderno; - humano; - simples; -
confiável; - calmo; - verificável; - fácil de explorar; - criado
primeiro para pessoas que normalmente evitam política.

A primeira sensação desejada é:

> "Isso não parece propaganda. Parece um lugar onde finalmente consigo
> entender."

A interface deve reduzir esforço cognitivo. O usuário deve receber
primeiro a resposta curta e decidir voluntariamente se quer aprofundar.

**Modelo de informação:**
`pergunta → resposta curta → impacto cotidiano → propostas → comparação → pontos de atenção → fontes`

------------------------------------------------------------------------

# 2. Design tokens

## 2.1 Cores principais

``` css
:root {
  --bg-primary: #F7F7F4;
  --bg-secondary: #FFFFFF;
  --bg-subtle: #F0F1EE;

  --text-primary: #171717;
  --text-secondary: #59616A;
  --text-muted: #7B8188;

  --brand-primary: #17324D;
  --brand-primary-hover: #10263B;
  --brand-soft: #E9EFF4;

  --accent: #E9A23B;
  --accent-soft: #FFF3DB;

  --success: #327A5B;
  --success-soft: #E8F3ED;

  --warning: #A96916;
  --warning-soft: #FFF2DA;

  --border: #D9DDDF;
  --border-soft: #E8EAE8;

  --focus: #275F8F;
}
```

### Regra política

Não associar candidato permanentemente a vermelho, azul, verde ou
amarelo.

Os dois candidatos devem ter **o mesmo peso visual**.

Quando for indispensável distinguir A/B em gráficos ou comparações, usar
duas cores secundárias de saturação semelhante, acompanhadas
obrigatoriamente pelo nome/foto/rótulo. Nunca depender apenas da cor.

------------------------------------------------------------------------

# 3. Tipografia

## Fontes

**Headings:** Manrope\
Fallback: `"Manrope", "Inter", system-ui, sans-serif`

**Interface e corpo:** Inter\
Fallback:
`"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Não usar fontes serifadas como fonte principal. Não misturar mais de
duas famílias.

## Desktop

  Elemento          Tamanho       Peso   Line-height
  --------------- --------- ---------- -------------
  Display/Hero         64px   650--700          1.05
  H1                   52px   650--700          1.10
  H2                   40px        650          1.15
  H3                   28px        600          1.25
  H4/Card title        21px        600          1.30
  Lead                 21px        400          1.55
  Body                 18px        400          1.60
  Small                15px   400--500          1.50
  Label                13px        600          1.30

## Mobile

  Elemento       Tamanho       Peso   Line-height
  ------------ --------- ---------- -------------
  Hero              40px   650--700          1.08
  H1                36px   650--700          1.10
  H2                30px        650          1.15
  H3                24px        600          1.25
  Card title        19px        600          1.30
  Lead              19px        400          1.50
  Body              17px        400          1.60
  Small             14px   400--500          1.50

### Regras de leitura

-   Texto longo: máximo de **680--720px**.
-   Evitar linhas maiores que aproximadamente 75 caracteres.
-   Nunca usar corpo abaixo de 16px para conteúdo editorial.
-   Parágrafos curtos: preferencialmente 2--4 frases.
-   Negrito somente para termos realmente importantes.
-   Nunca usar blocos inteiros em caixa alta.

------------------------------------------------------------------------

# 4. Grid e espaçamento

Sistema base: **8px**.

Tokens:

``` css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 40px;
--space-8: 48px;
--space-9: 64px;
--space-10: 80px;
--space-11: 96px;
--space-12: 128px;
```

## Desktop

-   Container máximo: **1280px**
-   Conteúdo editorial: **720px**
-   Padding horizontal: 48--64px
-   Grid principal: 12 colunas
-   Gap: 24px
-   Seções principais: 96--128px
-   Subseções: 56--72px
-   Cards internos: 24--32px

## Mobile

-   Largura: 100%
-   Padding horizontal: **20px**
-   Gap principal: 16px
-   Seções: 56--72px
-   Subseções: 32--40px
-   Cards internos: 20px
-   Elementos tocáveis: mínimo **44x44px**

Mobile não deve ser simplesmente o desktop empilhado. Deve possuir
arquitetura própria.

------------------------------------------------------------------------

# 5. Bordas, sombras e superfícies

## Cards

``` css
border-radius: 20px;
border: 1px solid var(--border-soft);
background: #FFFFFF;
```

Sombras devem ser discretas:

``` css
box-shadow: 0 8px 30px rgba(20, 30, 40, 0.06);
```

Hover desktop:

``` css
transform: translateY(-3px);
box-shadow: 0 14px 40px rgba(20, 30, 40, 0.09);
```

Não transformar todo elemento em card. Grandes blocos editoriais podem
existir diretamente sobre o fundo.

------------------------------------------------------------------------

# 6. Estrutura global --- Desktop

## Header

Altura aproximada: 76px.

Esquerda: - logotipo/nome do projeto.

Centro/direita: - Entenda a eleição - Temas - Compare - Candidatos -
Fontes - Sobre

CTA discreto: **"Quero entender"**

Header inicialmente transparente/off-white. Após scroll, torna-se sticky
com fundo levemente translúcido + `backdrop-filter: blur(16px)`.

Não usar menu gigantesco ou navegação partidária.

------------------------------------------------------------------------

# 7. Home --- Desktop

## Seção 01 --- Hero

Altura visual: aproximadamente 80--90vh, sem obrigatoriamente ocupar
100vh.

Layout: duas colunas assimétricas.

**Esquerda --- 7 colunas** Eyebrow: `ELEIÇÃO 2026 · SEGUNDO TURNO`

Headline:

> **O que as escolhas desta eleição podem significar para a sua vida?**

Subheadline:

> Entenda de forma simples o que está sendo proposto, como isso pode
> chegar ao seu dia a dia e de onde vêm as informações.

CTA primário: **Quero entender**

CTA secundário: **Como funciona**

Microcopy:
`Informação baseada em propostas oficiais e fontes verificáveis.`

**Direita --- 5 colunas**

Não colocar foto gigante de candidato.

Criar uma composição editorial viva com: - pequenas fotos documentais; -
palavras/temas; - fragmentos de dados; - linhas conectando "proposta →
impacto → fonte"; - movimento lento e discreto.

A composição deve comunicar que o site traduz informação complexa em
algo compreensível.

------------------------------------------------------------------------

# 8. Home --- Seção "O que importa para você?"

Título:

> **Comece pelo que faz parte da sua vida.**

Subtexto: \> Você não precisa acompanhar política para entender o que
está sendo decidido.

Grid desktop: 4 colunas.

Cards: - Meu dinheiro - Meu trabalho - Minha saúde - Educação -
Segurança - Custo de vida - Campo e alimentos - Serviços públicos

Cada card possui: 1. ícone simples; 2. título; 3. pergunta curta; 4.
seta; 5. no máximo 2 linhas de descrição.

Exemplo:

**Meu trabalho**\
`Sua jornada, salário ou forma de contratação pode mudar?`\
`Entender →`

Hover: - elevação 3px; - ícone desloca 2--4px; - seta avança; - fundo
ganha leve tonalidade `brand-soft`.

Não usar animações saltitantes.

------------------------------------------------------------------------

# 9. Seção "Entenda em 2 minutos"

Fundo: `--brand-primary`.

Texto claro.

Layout desktop: - esquerda: título + introdução; - direita: player de
vídeo grande (16:9).

Título:

> **Não tem tempo para acompanhar política?**

Texto: \> Em poucos minutos, veja o essencial antes de decidir se quer
aprofundar.

Vídeo: - legendas obrigatórias; - sem autoplay com som; - controles
claros; - transcript disponível; - duração explícita.

Após vídeo: **Ver informações e fontes →**

------------------------------------------------------------------------

# 10. Seção "Como ler este site"

Três grandes passos horizontais:

**01 --- Entenda**\
Começamos pela pergunta que afeta sua realidade.

**02 --- Compare**\
Mostramos o que cada candidato realmente propõe.

**03 --- Verifique**\
Você pode abrir as fontes e chegar ao documento original.

Usar linha fina conectando os três passos no desktop.

------------------------------------------------------------------------

# 11. Página de tema --- estrutura editorial

Exemplo: `/temas/trabalho`

## Hero do tema

Eyebrow: `TRABALHO`

H1: \> **Sua jornada de trabalho pode mudar?**

Resumo de 2--3 linhas.

Badges editoriais: `PROPOSTA` `ANÁLISE` `FONTES`

CTA: **Entenda em 2 minutos ↓**

------------------------------------------------------------------------

## Bloco "Em 20 segundos"

Grande card destacado em `accent-soft`.

Título: **Em 20 segundos**

Conteúdo máximo: 70--100 palavras.

O usuário deve conseguir compreender o assunto sem continuar a página.

------------------------------------------------------------------------

## Bloco "O que está sendo proposto?"

Desktop: comparação em duas colunas iguais.

### Coluna candidato A

Foto pequena e neutra. Nome. Label `PROPOSTA OFICIAL`. Bullets curtos.
Link `Ver proposta original ↗`.

### Coluna candidato B

Exatamente a mesma estrutura, dimensões e hierarquia.

Nunca variar tamanho de foto, título ou quantidade visual para favorecer
um candidato.

Se um candidato não possuir proposta equivalente, escrever:

> **Não encontramos proposta específica sobre este ponto no programa
> consultado.**

Não preencher espaço com inferência.

------------------------------------------------------------------------

# 12. "Veja como isso pode afetar você"

Esta é a ponte principal entre política e cotidiano.

Layout desktop: conteúdo editorial + cards de cenários.

Exemplo:

**Se você é trabalhador** Texto explicativo.

**Se você emprega pessoas** Texto explicativo.

**Se você trabalha por aplicativo** Texto explicativo.

Usar linguagem condicional: - "pode" - "poderia" - "se aprovada" -
"dependeria" - "o programa pretende"

Nunca: - "vai melhorar" - "vai piorar" - "vai gerar" sem evidência
suficiente.

------------------------------------------------------------------------

# 13. Benefícios possíveis × Pontos de atenção

Não criar "prós e contras" como placar.

Usar dois blocos editoriais:

### O que a proposta pretende resolver

Fundo `success-soft`.

### O que precisa ser observado

Fundo `warning-soft`.

Isso evita sugerir que o site está atribuindo nota.

Cada ponto deve ser acompanhado de contexto e, quando necessário, fonte.

------------------------------------------------------------------------

# 14. Fontes

Fonte não deve ficar escondida no rodapé.

Componente:

**De onde vem essa informação?**

`TSE · Programa de Governo · página/seção`\
Descrição curta.\
**Abrir fonte original ↗**

Cards de fonte: - ícone de documento; - instituição; - título; - data; -
tipo: `FONTE PRIMÁRIA` / `CONTEXTO`; - link externo.

Fonte primária recebe prioridade visual.

------------------------------------------------------------------------

# 15. Página "Compare"

Desktop é o dispositivo ideal para comparação lado a lado.

Header: \> **Veja as propostas lado a lado.**

Filtro horizontal: `Economia` `Trabalho` `Saúde` `Educação` `Segurança`
`Meio ambiente` `Estado`

Tabela não deve parecer planilha.

Usar blocos horizontais:

    TEMA
    ────────────────────────────────────
    CANDIDATO A           CANDIDATO B
    proposta              proposta
    fonte                  fonte
    ────────────────────────────────────

Cabeçalhos dos candidatos permanecem sticky durante scroll.

Evitar score, estrelas, porcentagens de compatibilidade ou "vencedor".

------------------------------------------------------------------------

# 16. Página de candidato

Esta página existe para aprofundamento, não como entrada principal.

Ordem:

1.  Nome + foto documental
2.  Resumo factual
3.  Linha do tempo
4.  Cargos públicos
5.  Histórico
6.  Propostas por tema
7.  Declarações/documentos relevantes
8.  Fontes

Linha do tempo desktop pode ser horizontal em trechos ou vertical
editorial.

Não usar fotografia hero glorificada, bandeiras, multidões ou estética
de comício como elemento dominante.

------------------------------------------------------------------------

# 17. Mobile --- filosofia própria

Mobile é **consumo rápido, sequencial e com uma mão**.

Não replicar desktop.

Prioridades: 1. pergunta; 2. resposta; 3. swipe/tap; 4. aprofundamento
opcional; 5. fonte.

## Header mobile

Altura: 60--64px.

Esquerda: marca compacta.\
Direita: botão menu.

Bottom navigation sticky opcional:

`Início` · `Temas` · `Comparar` · `Fontes`

Usar apenas se testes mostrarem navegação recorrente entre essas áreas.

------------------------------------------------------------------------

# 18. Home --- Mobile

## Hero

Não usar duas colunas.

Sequência:

Eyebrow\
↓\
Headline\
↓\
subheadline\
↓\
CTA grande\
↓\
microcopy\
↓\
composição visual

Headline: 36--40px.

CTA ocupa largura disponível ou quase toda.

A composição visual do desktop vira uma sequência vertical animada:

`SEU DIA A DIA` ↓ `PROPOSTAS` ↓ `O QUE PODE MUDAR` ↓ `FONTES`

Cada item aparece progressivamente durante scroll.

------------------------------------------------------------------------

# 19. Temas --- Mobile

Não usar grid 4x2.

Usar cards horizontais grandes em lista ou carrossel com snap.

Card: - ícone; - título; - pergunta; - seta.

Altura aproximada: 132--156px.

Permitir que uma pequena parte do próximo card apareça para comunicar
horizontalidade quando houver carrossel.

Não esconder todos os temas atrás de swipe: manter alternativa "Ver
todos".

------------------------------------------------------------------------

# 20. Comparação --- Mobile

Não tentar colocar dois candidatos em colunas estreitas.

Usar alternância:

`[ Candidato A ] [ Candidato B ]`

ou cards sequenciais:

**Candidato A** proposta

↓ `Comparar com`

**Candidato B** proposta

Adicionar botão: **Ver lado a lado** que pode abrir landscape/modal
específico quando útil.

A ordem inicial dos candidatos deve ser consistente ou alternada por
regra neutra documentada; nunca baseada em preferência.

------------------------------------------------------------------------

# 21. Bottom sheets no mobile

Fontes e explicações secundárias podem abrir em **bottom sheet**.

Exemplo:

Usuário toca: `Por que isso importa?`

Bottom sheet sobe até 70--85% da tela.

Contém: - explicação; - fonte; - botão fechar; - possibilidade de
expandir.

Isso preserva contexto e evita navegação excessiva.

------------------------------------------------------------------------

# 22. Motion system

Motion deve ajudar compreensão, nunca criar espetáculo político.

## Curvas

``` css
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--ease-enter: cubic-bezier(0.16, 1, 0.3, 1);
```

## Durações

-   microinteração: 120--180ms
-   botão/card: 180--240ms
-   entrada de bloco: 350--500ms
-   transição editorial: 500--700ms
-   animação narrativa: máximo 900ms

## Scroll reveal

Elementos: - opacity 0 → 1 - translateY 16--24px → 0

Nunca mais de 3--4 elementos importantes animando simultaneamente.

## Desktop

Pode usar: - parallax muito leve em imagens; - sticky storytelling; -
linhas/progressos que avançam com scroll; - hover contextual; - cursor
apenas se realmente agregar informação; - comparação sticky.

## Mobile

Preferir: - fade/slide; - cards com snap; - progress indicator; - bottom
sheets; - microanimações de toque; - transições entre estados.

Evitar parallax pesado e efeitos dependentes de hover.

------------------------------------------------------------------------

# 23. Reduced motion

Respeitar obrigatoriamente:

``` css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Nenhuma informação pode depender da animação para ser compreendida.

------------------------------------------------------------------------

# 24. Transições entre páginas

Usar transição discreta:

1.  conteúdo atual fade 100--150ms;
2.  nova página entra em 250--350ms;
3.  scroll vai ao topo;
4.  foco é enviado ao H1 para acessibilidade quando apropriado.

Não usar page transitions cinematográficas.

------------------------------------------------------------------------

# 25. Botões

## Primário

Fundo `brand-primary`.\
Texto branco.\
Altura: 52px desktop / 52--56px mobile.\
Border radius: 14px.\
Padding horizontal: 24px.

Hover desktop: - fundo escurece; - translateY(-1px).

Texto preferencial: - Quero entender - Entenda em 2 minutos - Veja como
isso afeta você

## Secundário

Fundo transparente.\
Borda `border`.\
Texto `text-primary`.

## Link editorial

Sem caixa.

`Ver propostas e fontes →`

Seta move 3px no hover.

------------------------------------------------------------------------

# 26. Ícones

Usar uma única família de ícones lineares.

Características: - stroke 1.5--2px; - formas simples; - tamanho
20--24px; - não usar emojis na interface final; - não usar ícones
partidários.

Ícone nunca substitui label em ações importantes.

------------------------------------------------------------------------

# 27. Fotografias

Direção: - documental; - brasileira; - pessoas reais; - luz natural; -
situações cotidianas; - diversidade contextual; - pouco tratamento; -
sem estética de banco de imagens artificial.

Temas: - supermercado; - transporte; - escola; - hospital; - comércio; -
trabalho; - campo; - família; - rua/bairro.

Fotos de candidatos: - enquadramento equivalente; - qualidade
equivalente; - tratamento equivalente; - tamanho equivalente; - preferir
retrato institucional/documental neutro.

Não usar imagens de multidões, bandeiras ou comícios como linguagem
dominante.

------------------------------------------------------------------------

# 28. Vídeo

Formatos: - site desktop: 16:9; - conteúdos sociais/mobile: 9:16; -
cards: preview 4:5 quando necessário.

Obrigatório: - legenda; - duração; - pause/play; - transcript; - não
autoplay com áudio.

Primeiros segundos devem apresentar a pergunta, não uma vinheta longa.

Estrutura:
`pergunta → contexto → proposta A → proposta B → ponto de atenção → veja as fontes`

------------------------------------------------------------------------

# 29. Estados editoriais

Criar chips padronizados:

**FATO VERIFICADO**\
Tom neutro/verde discreto.

**PROPOSTA**\
Azul suave.

**POSSÍVEL IMPACTO**\
Âmbar suave.

**CONTEXTO**\
Cinza.

**FONTE PRIMÁRIA**\
Outline azul.

Esses estados devem ensinar o usuário a distinguir o tipo de informação.

------------------------------------------------------------------------

# 30. Menu Desktop

Estrutura:

    [Marca]    Entenda | Temas | Compare | Candidatos | Fontes | Sobre    [Quero entender]

Mega menu somente para "Temas", se necessário.

Ao abrir:

    O QUE IMPORTA PARA VOCÊ?
    Dinheiro        Saúde
    Trabalho        Educação
    Segurança       Custo de vida
    Campo           Serviços públicos

------------------------------------------------------------------------

# 31. Menu Mobile

Menu fullscreen ou sheet lateral.

Topo: marca + fechar.

Links grandes (20--24px): - Entenda a eleição - O que importa para
você - Compare propostas - Candidatos - Fontes - Sobre o projeto

Rodapé: `Metodologia · Atualizado em [data]`

------------------------------------------------------------------------

# 32. Feedback de leitura

Em artigos longos, desktop pode usar uma barra fina de progresso no
topo.

Mobile pode usar indicador discreto de progresso.

Não gamificar leitura com pontos, streaks ou ranking.

------------------------------------------------------------------------

# 33. Acessibilidade

Obrigatório: - contraste mínimo WCAG AA; - texto normal ≥ 4.5:1; - foco
visível; - navegação por teclado; - labels em inputs; - alt text
descritivo; - captions/transcripts; - áreas de toque ≥ 44px; - não
depender apenas de cor; - `prefers-reduced-motion`; - HTML semântico; -
headings em ordem lógica; - `aria-expanded` em accordions; - skip link
"Ir para o conteúdo".

------------------------------------------------------------------------

# 34. Responsividade

Breakpoints de referência:

``` css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

Não projetar apenas nesses pontos. Layout deve ser fluido.

Usar `clamp()` em títulos e espaços quando apropriado.

------------------------------------------------------------------------

# 35. Performance

O público pode acessar por celular e conexão limitada.

Objetivos: - imagens AVIF/WebP; - lazy loading; - vídeos não carregam
integralmente antes da interação; - evitar bibliotecas pesadas para
animações simples; - reservar dimensões para mídia para evitar layout
shift; - priorizar LCP do Hero; - fontes locais/subset quando legalmente
possível; - no máximo dois pesos principais por família no carregamento
inicial.

Animação nunca deve prejudicar Core Web Vitals.

------------------------------------------------------------------------

# 36. Ordem da Home completa

1.  Header
2.  Hero --- "O que as escolhas desta eleição podem significar para sua
    vida?"
3.  O que importa para você?
4.  Entenda em 2 minutos
5.  Destaque editorial atual
6.  Como cada proposta pode chegar ao cotidiano
7.  Comparação rápida de um tema
8.  Como ler este site: Entenda → Compare → Verifique
9.  Candidatos --- acesso secundário
10. Fontes/metodologia
11. CTA final --- "Escolha um tema e comece"
12. Footer

------------------------------------------------------------------------

# 37. Footer

Colunas desktop: - Projeto - Explorar - Transparência - Fontes

Mostrar: - metodologia; - política de correções; - última atualização; -
responsável pelo projeto; - aviso de neutralidade editorial; - links das
fontes oficiais.

Mobile: accordions ou blocos verticais.

------------------------------------------------------------------------

# 38. Regra de densidade

Uma tela não deve competir por atenção.

Por viewport: - 1 mensagem principal; - 1 CTA principal; - no máximo 1
CTA secundário; - elementos auxiliares visualmente subordinados.

Se tudo parecer importante, nada é importante.

------------------------------------------------------------------------

# 39. Regra de conteúdo

Nunca começar um bloco com o nome de um político quando puder começar
com uma pergunta da vida real.

Preferir:

> **Sua jornada de trabalho pode mudar?**

em vez de:

> **Proposta trabalhista de candidato X**

Preferir:

> **Quando você precisar do SUS, o que pode ser diferente?**

em vez de:

> **Plano de saúde dos candidatos**

A política entra como resposta à realidade, não como ponto inicial da
experiência.

------------------------------------------------------------------------

# 40. Comportamentos proibidos

O agente NÃO deve: - criar ranking de candidatos; - usar score de
compatibilidade; - declarar vencedor; - destacar visualmente um
candidato sobre outro; - usar dark patterns; - esconder fontes; - criar
urgência artificial; - usar contadores eleitorais para pressionar
decisão; - usar vermelho × azul como "times"; - usar fotos heroicas de
um candidato e neutras do outro; - transformar promessa em fato; - criar
animações chamativas em torno de nome/foto de candidato; - usar
depoimentos políticos como prova de verdade.

------------------------------------------------------------------------

# 41. Desktop × Mobile --- resumo

## Desktop

Experiência: **exploração + comparação + profundidade**

Usar: - grid; - duas colunas; - comparação lado a lado; - sticky
sections; - hover; - storytelling com scroll; - imagens amplas; - maior
densidade informacional.

## Mobile

Experiência: **velocidade + sequência + toque**

Usar: - uma ideia por tela; - cards grandes; - swipe quando
apropriado; - bottom sheets; - conteúdo progressivo; - CTAs largos; -
leitura vertical; - navegação curta; - vídeo vertical quando produzido
para mobile.

**Não são versões reduzida e ampliada do mesmo layout. São duas
experiências desenhadas para o comportamento de cada dispositivo.**

------------------------------------------------------------------------

# 42. Prompt operacional para o agente

Ao implementar qualquer página:

1.  Identifique a pergunta cotidiana que inicia a experiência.
2.  Mostre a resposta curta primeiro.
3.  Permita aprofundamento progressivo.
4.  Dê o mesmo peso visual aos candidatos.
5.  Diferencie fato, proposta e análise.
6.  Mostre fontes próximas da afirmação.
7.  Use linguagem simples.
8.  Priorize mobile sem transformar desktop em mobile esticado.
9.  Use motion apenas para orientar atenção e explicar relações.
10. Preserve desempenho e acessibilidade.
11. Nunca invente conteúdo político; use somente a base editorial
    fornecida.
12. Se uma informação não estiver na base, sinalize necessidade de fonte
    em vez de completar por inferência.

------------------------------------------------------------------------

# 43. Resultado visual esperado

A interface final deve comunicar simultaneamente:

**"É simples."**\
**"É para mim."**\
**"Posso verificar."**\
**"Não estão tentando decidir por mim."**

Essa combinação é o centro do design system.

------------------------------------------------------------------------

# 44. Direção imersiva

**E como seria...?** deve ser uma experiência editorial interativa, não
apenas um conjunto de cards e artigos.

> **Não animamos para impressionar. Animamos para fazer entender.**

Toda interação deve explicar pelo menos uma destas coisas: mudança,
escala, passagem do tempo, comparação, causa e consequência, impacto
cotidiano ou origem da informação. Se um efeito não melhorar a
compreensão, não deve existir.

# 45. A marca como mecanismo narrativo

O nome inicia as histórias:

> **E como seria... se a jornada 6×1 acabasse?**

> **E como seria... a saúde com essa proposta?**

> **E como seria... no seu bolso?**

Estrutura narrativa:

`pergunta → como é hoje → proposta → transformação visual → possíveis impactos → pontos de atenção → comparação → fonte`

O político não é o protagonista. **A situação vivida pelo usuário é o
protagonista.**

# 46. Scrollytelling

Usar scrollytelling quando houver sequência, transformação ou
comparação.

No desktop, uma área visual pode permanecer sticky enquanto o texto
avança. Exemplo para jornada de trabalho:

1.  mostrar a semana atual;
2.  destacar dias/horas;
3.  introduzir a proposta;
4.  transformar visualmente a semana;
5.  mostrar possíveis efeitos para trabalhador;
6.  mostrar possíveis efeitos para empregador;
7.  explicar dependências e incertezas;
8.  revelar proposta oficial e fonte.

O usuário deve conseguir compreender a transformação mesmo lendo pouco
texto.

# 47. Mecânicas interativas

## Antes × depois

Para jornadas, impostos, regras, serviços e processos. Usar slider,
toggle ou scroll. Rótulos obrigatórios: **HOJE** e **CENÁRIO PROPOSTO**.
Nunca chamar o segundo estado de "futuro".

## Linha do tempo

Para histórico, implantação, mandatos, indicadores e etapas
legislativas. Desktop pode usar timeline horizontal/sticky; mobile deve
preferir vertical.

## Simulação explicativa

O usuário pode selecionar contextos genéricos como
`Trabalho com carteira`, `Tenho pequeno negócio` ou
`Trabalho por aplicativo`. Mostrar apenas informação verificada na base
editorial. Nunca calcular afinidade eleitoral ou "candidato ideal".

## Comparador

Desktop: duas áreas sincronizadas. Mobile: toggle ou sequência. Destacar
convergências, divergências, ausência de proposta e dependência do
Congresso.

## Dados em movimento

Gráficos podem responder ao scroll/toque para revelar séries, comparar
períodos ou explicar escala. Nunca alterar eixos de maneira enganosa.
Mostrar valores e fontes.

# 48. Arquitetura de uma matéria imersiva

**Ato 1 --- A pergunta**\
Uma pergunta forte e pouco conteúdo.

**Ato 2 --- Como é hoje**\
Dados, rotina, calendário, diagrama ou representação visual.

**Ato 3 --- O que está sendo proposto**\
Label obrigatório: **PROPOSTA**.

**Ato 4 --- Transformação**\
Mostrar visualmente o que mudaria caso fosse aprovado e implementado.
Label: **CENÁRIO EXPLICATIVO**.

**Ato 5 --- Quem pode sentir isso**\
Trabalhador, família, empresário, estudante, aposentado, produtor ou
usuário de serviço público, conforme a evidência disponível.

**Ato 6 --- Mas depende de...**\
Congresso, orçamento, regulamentação, estados/municípios, capacidade
operacional e outras incertezas.

**Ato 7 --- Compare**\
Apresentar a proposta do outro candidato sobre o mesmo tema.

**Ato 8 --- Verifique**\
Finalizar com documentos e fontes originais.

# 49. Desktop --- experiência própria

Desktop explora **espaço + comparação + profundidade + precisão do
ponteiro**.

Pode usar: - sticky storytelling; - layouts assimétricos; - comparação
lado a lado; - hover contextual; - diagramas manipuláveis; - timelines
horizontais; - gráficos exploráveis; - imagens amplas; - camadas, masks
e clipping; - pequenas mudanças de escala e profundidade.

Parallax deve ser leve. 3D/WebGL somente quando explicar espaço, volume,
infraestrutura ou escala de forma realmente superior --- nunca como
decoração.

# 50. Mobile --- experiência própria

Mobile explora **sequência + toque + ritmo**.

Usar: - uma ideia dominante por viewport; - narrativa vertical; -
capítulos curtos; - tap para revelar; - swipe para comparações
específicas; - drag para antes/depois; - bottom sheets; - gráficos
adaptados ao toque; - vídeos 9:16 quando apropriado.

Gestos nunca podem ser ocultos. Sempre mostrar uma pista visual.

# 51. Microinterações editoriais

**Fonte:** tap/hover expande instituição, documento, data, contexto e
link original.

**Termo difícil:** sublinhado pontilhado abre explicação de uma frase.

**Dependência legislativa:** chip `DEPENDE DO CONGRESSO`, com
explicação.

**Informação incompleta:** chip `AINDA NÃO ESTÁ DETALHADO`.

É preferível mostrar incerteza a preencher lacunas com IA.

# 52. Ritmo

Não manter intensidade visual constante.

Usar:

`IMPACTO → CALMA → INFORMAÇÃO → INTERAÇÃO → CALMA → COMPARAÇÃO → FONTE`

Depois de uma cena imersiva, permitir uma seção editorial simples.
Espaço vazio faz parte da narrativa.

# 53. Transições com significado

Mudança de regra → elementos mudam de posição/quantidade.\
Passagem de tempo → timeline progride.\
Comparação → tela se divide.\
Incerteza → outline/label explicativo.\
Fonte → movimento desacelera e interface assume caráter documental.

Não usar glitch, partículas, explosões, spin ou bounce sem função
semântica.

# 54. Home imersiva

## Cena 1

> **E como seria...?**

Em seguida:

> **...se você entendesse o que essas propostas realmente podem mudar na
> sua vida?**

CTA: **Quero entender**

## Cena 2 --- Política vira cotidiano

Durante o scroll:

`ECONOMIA → SEU DINHEIRO`

`SAÚDE PÚBLICA → QUANDO VOCÊ PRECISA DE ATENDIMENTO`

`POLÍTICA TRABALHISTA → SEU TEMPO E SEU TRABALHO`

`EDUCAÇÃO → A ESCOLA DOS SEUS FILHOS`

## Cena 3

> **Por onde você quer começar?**

Desktop: composição espacial interativa.\
Mobile: cards sequenciais.

## Cena 4

Mostrar uma mini-experiência real de 30--60 segundos baseada em uma
proposta.

CTA: **Entendi. Quero ver mais →**

## Cena 5

Mostrar visualmente:

`PROPOSTA → CONTEXTO → POSSÍVEL IMPACTO → PONTOS DE ATENÇÃO → FONTE`

# 55. Identidade em movimento

As reticências de **E como seria...?** podem funcionar como elemento
gráfico proprietário, representando continuação, descoberta e
progressão.

Exemplo ocasional:

`E como seria` → `.` → `..` → `...?`

Não criar splash screen obrigatória nem atrasar o conteúdo para
reproduzir animações.

# 56. Personalização editorial

O usuário pode escolher o que importa para ele --- `Trabalho`, `Saúde`,
`Dinheiro`, etc. --- e o site reorganiza conteúdo por assunto.

Isso é **navegação editorial**, não persuasão.

É proibido: - inferir ideologia; - calcular afinidade eleitoral; -
recomendar candidato; - adaptar argumentos políticos a características
pessoais; - criar perfil persuasivo.

# 57. Compartilhamento

Cada experiência pode gerar um card neutro:

> **E como seria... se \[proposta\]?**

`Entenda o que está sendo proposto.`\
`ecomoseria.com.br`

Não gerar slogans de ataque, ranking ou material de campanha.

# 58. Performance da imersão

Prioridade tecnológica:

1.  CSS transitions;
2.  Web Animations API;
3.  SVG;
4.  Canvas quando necessário;
5.  biblioteca de motion quando justificar;
6.  WebGL apenas excepcionalmente.

Lazy-load de cenas abaixo da dobra. Reduced motion deve manter toda a
informação disponível de forma estática.

# 59. Regra para qualquer efeito

Antes de implementar, responder:

1.  O que este efeito está explicando?
2.  A informação fica mais compreensível com ele?
3.  Funciona em teclado e toque?
4.  Existe fallback sem animação?
5.  O custo de performance é justificável?

Se 1 ou 2 não tiver resposta clara, não implementar.

# 60. Template para cada experiência

``` text
PERGUNTA:
E como seria...?

CONCEITO:
[o que precisa ser entendido]

ESTADO ATUAL:
[fato + fonte]

PROPOSTA:
[proposta + candidato + fonte]

MECÂNICA VISUAL:
[scroll / drag / swipe / timeline / comparação]

TRANSFORMAÇÃO:
[o que muda visualmente]

POSSÍVEIS IMPACTOS:
[base editorial]

PONTOS DE ATENÇÃO:
[base editorial]

DEPENDÊNCIAS:
[Congresso / orçamento / regulamentação etc.]

DESKTOP:
[experiência específica]

MOBILE:
[experiência específica]

REDUCED MOTION:
[alternativa estática]

FONTES:
[origens]
```

# 61. Critério de qualidade

Uma experiência só está pronta se passar quatro testes:

**Entendi?** Uma pessoa sem conhecimento político consegue explicar a
ideia?

**Sei o que é fato e cenário?** A diferença está evidente?

**Consigo verificar?** A fonte está próxima?

**A interação acrescentou compreensão?** Se a animação for removida,
perde-se uma explicação relevante?

Se a resposta à última for "não", simplificar.

# 62. Síntese atualizada

**E como seria...?** não é um portal eleitoral tradicional.

É uma **experiência editorial interativa** que transforma propostas
políticas abstratas em explicações visuais sobre situações da vida
cotidiana.

Desktop explora **espaço + comparação + scroll + profundidade**.

Mobile explora **sequência + toque + ritmo + conteúdo progressivo**.

> **A tecnologia serve à compreensão.**

> **A interação serve à informação.**

> **O usuário continua sendo quem tira a própria conclusão.**
