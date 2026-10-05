# Engenharia reversa conceitual --- Santioni Spirits → E como seria...?

## Objetivo

Este documento não propõe copiar o Santioni Spirits. Ele extrai
princípios técnicos e de experiência observáveis no código fornecido e
os traduz para o projeto **E como seria...?**.

A regra continua sendo:

> **Não animamos para impressionar. Animamos para fazer entender.**

------------------------------------------------------------------------

## 1. O que o código do Santioni revela

O código mostra uma aplicação construída como uma experiência
controlada, e não apenas como uma página convencional.

Entre os padrões observáveis estão:

-   `#Stage` ocupando toda a viewport;
-   `overflow: hidden` e `touch-action: none` no palco principal;
-   uma `.Story` fixa que organiza cenas;
-   seções dimensionadas em `vh`/`dvh`;
-   componentes específicos para diferentes momentos da narrativa;
-   loader próprio com progresso e container Lottie;
-   textos divididos em linha, palavra e caractere (`XText`);
-   elementos em camadas;
-   controles arrastáveis;
-   uso de `will-change`, `translateZ(0)` e `backface-visibility`;
-   áreas destinadas a conteúdo gráfico (`gl-bounds`);
-   comportamento diferente conforme viewport/dispositivo;
-   menu fixo;
-   acessibilidade com `sr-only`, `focus-visible` e atributos ARIA;
-   tipografia fluida usando `calc()` + `vw`;
-   componentes como `Story`, `CollectionUI`, `DrinkPourUI`, `HandUI`,
    `ProductsUI`, `AudioToggle` etc.

A principal ideia arquitetural que podemos extrair é:

> **viewport → palco → cenas → estado/progresso → transformação visual →
> interação**

------------------------------------------------------------------------

# 2. Técnica → adaptação → instrução ao agente

## Técnica 1 --- Stage controlado

### Santioni

A experiência possui um palco principal (`#Stage`) que ocupa a viewport.
A página assume maior controle sobre scroll, toque e posicionamento.

### E como seria...?

Criar um componente conceitual:

`StoryStage`

Ele deve ser usado **somente nas experiências editoriais especiais**,
não no site inteiro.

Exemplo:

`StoryStage` → `IntroScene` → `CurrentSituationScene` → `ProposalScene`
→ `ImpactScene` → `TradeOffScene` → `ComparisonScene` → `SourceScene`

### Pedir ao Lovable/agente

> Crie um componente reutilizável `StoryStage` para matérias imersivas.
> Ele deve controlar o progresso narrativo baseado no scroll sem
> bloquear a navegação normal do restante do site. Cada cena deve
> receber um progresso normalizado e poder reagir visualmente a ele.

------------------------------------------------------------------------

## Técnica 2 --- Story fixa + cenas

### Santioni

A classe `.Story` aparece fixa na viewport e suas seções possuem alturas
controladas.

Isso permite que a interface permaneça visualmente estável enquanto o
estado da história muda.

### E como seria...?

Em uma matéria sobre jornada de trabalho, a semana pode permanecer no
centro da tela enquanto o texto e o estado visual mudam.

Exemplo:

`SEG TER QUA QUI SEX SÁB DOM`

Scroll 0--25%: situação atual.

25--50%: proposta aparece.

50--75%: semana se reorganiza.

75--100%: impactos e dependências aparecem.

### Pedir ao agente

> Em experiências de scrollytelling, mantenha a visualização principal
> sticky/fixa enquanto o usuário percorre etapas narrativas. O scroll
> deve modificar o estado da visualização, não simplesmente empurrar
> todos os elementos para cima.

------------------------------------------------------------------------

## Técnica 3 --- Texto fragmentado

### Santioni

`XText` possui estrutura para:

`line → word → char`

Isso permite animar texto em granularidade fina.

### E como seria...?

Usar principalmente em:

-   perguntas;
-   transições conceituais;
-   números importantes;
-   transformação de linguagem política em cotidiana.

Exemplo:

`POLÍTICA TRABALHISTA`

transforma-se em:

`SEU TEMPO`

### Pedir ao agente

> Crie um componente `AnimatedText` capaz de dividir conteúdo por
> linha/palavra quando necessário. Use animação tipográfica apenas em
> momentos narrativos importantes. O texto deve continuar semanticamente
> acessível e legível sem JavaScript ou com reduced motion.

------------------------------------------------------------------------

## Técnica 4 --- Tipografia fluida

### Santioni

O código usa tamanhos calculados com viewport (`vw`) entre limites
definidos por media queries.

### E como seria...?

Títulos narrativos podem crescer de forma contínua conforme a tela, em
vez de saltar entre poucos breakpoints.

Aplicar especialmente em:

-   hero;
-   perguntas "E como seria...?";
-   números editoriais;
-   títulos de cenas.

### Pedir ao agente

> Use tipografia fluida com `clamp()` para títulos narrativos,
> respeitando os tokens do Design System. Não replique as fontes ou
> dimensões do Santioni.

------------------------------------------------------------------------

## Técnica 5 --- Camadas

### Santioni

Há elementos sobrepostos por grid e posicionamento absoluto.

### E como seria...?

Permite mostrar uma informação se transformando sem trocar de página.

Exemplo:

camada 1: situação atual;\
camada 2: proposta;\
camada 3: cenário explicativo;\
camada 4: incertezas.

### Pedir ao agente

> Nas cenas imersivas, use camadas sobrepostas para transformar um mesmo
> objeto visual entre estados. Evite desmontar e recriar toda a tela em
> cada etapa.

------------------------------------------------------------------------

## Técnica 6 --- Interação direta

### Santioni

Existem controles com `cursor: grab`, elementos arrastáveis e áreas de
interação.

### E como seria...?

Usar drag apenas quando ele representar uma ação compreensível.

Boas aplicações:

-   slider antes/depois;
-   arrastar entre dois cenários;
-   explorar uma escala;
-   mover uma timeline;
-   comparar propostas.

### Pedir ao agente

> Quando drag acrescentar compreensão, crie controles manipuláveis com
> mouse e toque. Sempre forneça alternativa por botão/teclado e
> indicação visual clara de que o elemento é interativo.

------------------------------------------------------------------------

## Técnica 7 --- Área gráfica independente

### Santioni

Classes como `.gl-bounds` indicam uma área reservada para renderização
visual separada da interface textual.

### E como seria...?

Podemos ter componentes visuais independentes:

`WeekVisualization` `BudgetFlow` `TaxComparison` `HealthcareJourney`
`EducationTimeline`

Esses componentes recebem estado/progresso e desenham a explicação.

Não precisam começar com WebGL.

Prioridade:

`DOM/CSS → SVG → Canvas → WebGL`

### Pedir ao agente

> Separe visualizações narrativas do conteúdo editorial. Crie
> componentes de visualização que recebam dados e progresso como props.
> Comece com DOM/SVG. Use Canvas ou WebGL apenas quando houver ganho
> real de compreensão ou performance.

------------------------------------------------------------------------

## Técnica 8 --- Loader e preload

### Santioni

Existe `LoaderView`, barra de progresso e container Lottie.

### E como seria...?

Não queremos um loader cinematográfico obrigatório.

A página editorial deve abrir imediatamente.

Loader especial somente quando uma experiência realmente precisar
carregar recursos pesados.

### Pedir ao agente

> Não crie splash screen. Conteúdo textual deve aparecer imediatamente.
> Se uma experiência pesada precisar carregar recursos, mostre loader
> local apenas dentro dela, mantendo o restante da página utilizável.

------------------------------------------------------------------------

## Técnica 9 --- Componentes por cena

### Santioni

O código possui componentes específicos para diferentes experiências
(`CollectionUI`, `DrinkPourUI`, `HandUI`, `ProductsUI` etc.).

### E como seria...?

Não tentar criar um componente universal que faça todas as histórias.

Criar uma base comum e experiências especializadas:

`StoryStage` `StoryScene` `StoryProgress` `SourcePanel`

e componentes específicos:

`WorkWeekStory` `HealthcareQueueStory` `TaxStory` `SecurityStory`

### Pedir ao agente

> Crie uma infraestrutura narrativa reutilizável, mas permita que cada
> assunto possua sua própria visualização. Não force todas as matérias a
> usar o mesmo card ou a mesma animação.

------------------------------------------------------------------------

## Técnica 10 --- Responsividade como mudança de interação

### Santioni

O código possui vários comportamentos condicionados à largura, inclusive
controles diferentes no mobile.

### E como seria...?

Desktop e mobile compartilham conteúdo, mas não necessariamente a mesma
coreografia.

Desktop: - sticky; - mouse; - hover; - comparação lado a lado; - maior
profundidade espacial.

Mobile: - narrativa vertical; - tap; - swipe; - bottom sheets; - uma
ideia dominante por viewport.

### Pedir ao agente

> Não converta desktop em mobile apenas empilhando colunas. Para cada
> experiência interativa, defina explicitamente `desktop behavior` e
> `mobile behavior`.

------------------------------------------------------------------------

# 3. O que NÃO copiar do Santioni

O objetivo não é reproduzir o site.

Não copiar:

-   identidade;
-   fontes;
-   cores;
-   assets;
-   imagens;
-   textos;
-   layout específico;
-   efeitos proprietários;
-   código;
-   temática;
-   navegação;
-   loader;
-   interações literalmente.

Também não devemos assumir que tudo que funciona para uma marca de
bebidas funciona para um produto editorial político.

O que interessa é o princípio:

> **A página se comporta como uma experiência dirigida, não como um
> documento estático.**

------------------------------------------------------------------------

# 4. Diferença fundamental entre os projetos

Santioni pode priorizar:

`impacto → desejo → atmosfera → marca`

E como seria...? deve priorizar:

`curiosidade → compreensão → contexto → comparação → verificação`

Portanto, nossa imersão deve ser mais calma e explicativa.

A experiência não deve competir com a informação.

------------------------------------------------------------------------

# 5. Arquitetura recomendada

``` text
App
├── EditorialLayout
│
├── StoryStage
│   ├── StoryScene
│   ├── StoryProgress
│   ├── AnimatedText
│   ├── VisualLayer
│   ├── InteractionLayer
│   └── SourcePanel
│
├── Visualizations
│   ├── WorkWeekVisualization
│   ├── TimelineVisualization
│   ├── BeforeAfterVisualization
│   ├── ComparisonVisualization
│   └── DataVisualization
│
└── Editorial
    ├── Fact
    ├── Proposal
    ├── PossibleImpact
    ├── Context
    ├── Dependency
    └── PrimarySource
```

------------------------------------------------------------------------

# 6. Estado narrativo

Cada experiência pode trabalhar conceitualmente com:

``` text
progress: 0 → 1
scene: current
direction: forward/backward
reducedMotion: true/false
deviceMode: desktop/mobile
```

O scroll atualiza `progress`.

As cenas interpretam esse progresso.

Isso separa:

**entrada do usuário**\
de\
**representação visual**.

------------------------------------------------------------------------

# 7. Exemplo --- jornada 6×1

## Cena 1

Tela:

> **E como seria... se a jornada 6×1 acabasse?**

Movimento mínimo.

------------------------------------------------------------------------

## Cena 2 --- hoje

Surge uma semana:

`SEG TER QUA QUI SEX SÁB DOM`

A visualização explica a configuração usada como referência editorial.

------------------------------------------------------------------------

## Cena 3 --- proposta

Chip:

`PROPOSTA`

A mudança é introduzida.

------------------------------------------------------------------------

## Cena 4 --- transformação

O calendário se reorganiza visualmente.

Não trocar simplesmente uma imagem pela outra.

O usuário deve **ver a mudança acontecer**.

------------------------------------------------------------------------

## Cena 5 --- trabalhador

A interface explica possíveis consequências sustentadas pela base
editorial.

------------------------------------------------------------------------

## Cena 6 --- empregador

A mesma visualização muda de perspectiva e apresenta reorganização,
custos ou outros pontos documentados.

------------------------------------------------------------------------

## Cena 7 --- depende de...

A animação desacelera.

Entram:

`CONGRESSO` `REGULAMENTAÇÃO` `IMPLEMENTAÇÃO`

conforme aplicável.

------------------------------------------------------------------------

## Cena 8 --- comparação

A tela permite entender o que cada candidato propõe.

Mesmo peso visual.

------------------------------------------------------------------------

## Cena 9 --- fonte

A experiência visual termina e a interface assume caráter documental.

> **Veja de onde tiramos isso.**

Documento original + data + referência.

------------------------------------------------------------------------

# 8. Motion language do E como seria...?

Movimentos devem possuir significado.

### Reveal

Descoberta de informação.

### Transform

Mudança de cenário/regra.

### Split

Comparação.

### Connect

Causa e consequência.

### Progress

Tempo/processo.

### Focus

Direcionamento de atenção.

### Settle

Momento de leitura/reflexão.

Evitar motion que não se encaixe em uma dessas funções.

------------------------------------------------------------------------

# 9. Performance

O Santioni pode justificar uma experiência muito controlada e pesada
porque vende atmosfera.

Nosso produto precisa priorizar acesso à informação.

Portanto:

1.  HTML semântico;
2.  CSS;
3.  SVG;
4.  animações por `transform` e `opacity`;
5.  lazy loading;
6.  bibliotecas de animação somente quando justificadas;
7.  Canvas quando necessário;
8.  WebGL somente excepcionalmente.

O conteúdo essencial nunca pode depender da animação.

------------------------------------------------------------------------

# 10. Acessibilidade

Manter:

-   conteúdo semântico;
-   navegação por teclado;
-   foco visível;
-   labels;
-   ARIA quando apropriado;
-   contraste;
-   reduced motion;
-   alternativa estática;
-   fontes acessíveis.

Não desabilitar seleção de texto globalmente no E como seria...?.

Não bloquear scroll nativo do site inteiro.

Controle especial deve ficar restrito ao `StoryStage`.

------------------------------------------------------------------------

# 11. Instrução complementar para Lovable/agente

Use este bloco junto com o prompt principal:

> Use o Santioni Spirits apenas como referência conceitual de
> experiência imersiva, nunca como referência para copiar identidade,
> assets ou código.
>
> Quero adotar o princípio de uma interface organizada como **palco +
> cenas + progresso narrativo + transformação visual**.
>
> Nas matérias especiais, implemente um `StoryStage` reutilizável. O
> scroll deve poder controlar o progresso das cenas e transformar uma
> visualização persistente enquanto a narrativa avança.
>
> Crie uma infraestrutura composta por `StoryStage`, `StoryScene`,
> `AnimatedText`, `VisualLayer`, `StoryProgress` e `SourcePanel`.
>
> Cada tema poderá criar visualizações especializadas sobre essa
> infraestrutura.
>
> Desktop deve explorar sticky storytelling, camadas, comparação e
> espaço.
>
> Mobile deve reinterpretar a experiência em sequência vertical, toque,
> swipe e progressive disclosure.
>
> Não bloqueie o scroll nativo de todo o site. O controle narrativo deve
> existir apenas nas experiências que realmente precisarem dele.
>
> Não use animação como decoração. Cada movimento precisa representar
> descoberta, transformação, comparação, conexão, progressão ou foco.
>
> Priorize DOM, CSS e SVG. Canvas/WebGL somente quando houver
> justificativa.
>
> Preserve acessibilidade, reduced motion, performance e conteúdo
> semântico.
>
> Nenhuma animação pode alterar o sentido editorial, sugerir que uma
> proposta é fato ou favorecer visualmente um candidato.
>
> A experiência deve continuar compreensível sem animações.
>
> A referência não deve ser clonada. O objetivo é traduzir sua lógica de
> experiência para a identidade e a função editorial de **E como
> seria...?**.

------------------------------------------------------------------------

# 12. Síntese

O aprendizado mais importante da referência não é um efeito específico.

É a mudança de mentalidade:

### Site convencional

`seção → seção → seção → seção`

### Experiência narrativa

`pergunta → cena → transformação → descoberta → consequência → comparação → verificação`

Para **E como seria...?**, essa diferença é central.

A interface não deve apenas dizer:

> "isso poderia mudar."

Ela deve ajudar a pessoa a **ver e compreender a mudança**, mantendo
clara a diferença entre fato, proposta, cenário explicativo e incerteza.
