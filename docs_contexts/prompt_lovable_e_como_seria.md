# Prompt inicial para o Lovable --- E como seria...?

Quero que você crie a primeira versão completa do site **"E como
seria...?"**

**Domínio:** ecomoseria.com.br

Estou anexando dois documentos que são a especificação oficial do
projeto:

1.  **Base editorial:** contém o posicionamento, conteúdo político,
    propostas, possíveis impactos, pontos de atenção, fontes e regras
    editoriais.
2.  **Design System, UX & Interactive Storytelling:** contém identidade
    visual, tipografia, cores, espaçamento, componentes, arquitetura,
    comportamento, responsividade, motion, interatividade,
    scrollytelling e diferenças entre desktop e mobile.

## Regra inicial

**LEIA OS DOIS DOCUMENTOS INTEGRALMENTE ANTES DE IMPLEMENTAR.**

Eles são a fonte de verdade deste projeto.

## Objetivo

"E como seria...?" é uma experiência editorial interativa para pessoas
que normalmente não acompanham política.

O objetivo não é começar pelos políticos.

O usuário deve começar pela própria vida:

-   dinheiro;
-   trabalho;
-   saúde;
-   educação;
-   segurança;
-   custo de vida;
-   campo/alimentos;
-   serviços públicos.

A experiência deve ajudá-lo a responder:

> **Como as propostas desta eleição poderiam afetar a minha vida?**

O site **NÃO** deve recomendar candidato, criar ranking, calcular
compatibilidade política ou tentar convencer o usuário a votar em
alguém.

## Conceito criativo

A própria marca é uma pergunta:

> **E como seria...?**

Use isso como mecanismo narrativo.

Exemplos:

-   "E como seria... se a jornada 6×1 acabasse?"
-   "E como seria... a saúde com essa proposta?"
-   "E como seria... no seu bolso?"

Não quero apenas páginas com texto e cards.

Quero uma experiência editorial digital moderna, visual, interativa e
imersiva.

A tecnologia deve ajudar o usuário a **ENTENDER** a informação.

### Regra

> **NÃO ANIMAMOS PARA IMPRESSIONAR. ANIMAMOS PARA FAZER ENTENDER.**

## Experiência

Quando existir uma mudança que possa ser visualizada, mostre-a.

Quando existir comparação, permita compará-la.

Quando existir passagem do tempo, represente-a.

Quando houver relação entre proposta e cotidiano, transforme-a em
narrativa visual.

Quando houver incerteza, deixe isso explícito.

Quando houver uma fonte, permita verificá-la facilmente.

Use quando apropriado:

-   scrollytelling;
-   sticky storytelling;
-   before/after;
-   timelines;
-   gráficos animados;
-   comparações;
-   progressive disclosure;
-   microinterações;
-   transições editoriais;
-   scroll-driven storytelling.

Não transforme o projeto em um parque de animações.

## Home

A Home deve começar pela pessoa, não pelos candidatos.

Hero:

> **E como seria...?**

A narrativa deve desenvolver a ideia:

> **...se você entendesse o que essas propostas realmente podem mudar na
> sua vida?**

Depois transforme conceitos políticos em situações cotidianas.

Exemplo:

`ECONOMIA → SEU DINHEIRO`

`SAÚDE PÚBLICA → QUANDO VOCÊ PRECISA DE ATENDIMENTO`

`POLÍTICA TRABALHISTA → SEU TEMPO E SEU TRABALHO`

`EDUCAÇÃO → A ESCOLA DOS SEUS FILHOS`

Depois pergunte:

> **Por onde você quer começar?**

Apresente os temas definidos na documentação.

Inclua uma pequena experiência interativa real já na Home para
demonstrar como o produto funciona.

## Páginas de conteúdo

Não quero artigos tradicionais.

Sempre que possível, estruturar como:

`PERGUNTA → COMO É HOJE → O QUE ESTÁ SENDO PROPOSTO → E COMO SERIA...? → POSSÍVEIS IMPACTOS → PONTOS DE ATENÇÃO → COMPARAÇÃO → FONTES`

Deixe visualmente impossível confundir:

-   **FATO VERIFICADO**
-   **PROPOSTA**
-   **POSSÍVEL IMPACTO / CENÁRIO EXPLICATIVO**
-   **CONTEXTO**
-   **FONTE PRIMÁRIA**

Nunca apresente uma previsão como fato.

## Candidatos

Os candidatos devem receber exatamente o mesmo peso visual.

-   Mesmo tamanho de fotografia.
-   Mesma hierarquia tipográfica.
-   Mesma estrutura.
-   Mesmo espaço.
-   Mesmo tratamento visual.

Não usar cores partidárias como mecanismo principal de diferenciação.

Não criar vencedor.

## Fontes

Fontes são parte da experiência, não um detalhe escondido no rodapé.

O usuário deve conseguir entender:

> **De onde veio isso?**

Permita abrir a fonte original facilmente.

Dê prioridade visual às fontes primárias.

## Desktop e mobile

**IMPORTANTE:** não quero apenas um layout responsivo onde o desktop é
empilhado no celular.

Crie duas experiências adaptadas ao comportamento de cada dispositivo.

### Desktop

-   exploração;
-   espaço;
-   comparação lado a lado;
-   sticky storytelling;
-   hover;
-   gráficos exploráveis;
-   layouts assimétricos;
-   maior profundidade visual.

### Mobile

-   sequência;
-   toque;
-   uma ideia dominante por viewport;
-   cards maiores;
-   swipe quando fizer sentido;
-   tap para revelar;
-   bottom sheets;
-   comparações adaptadas;
-   narrativa vertical;
-   ritmo mais rápido.

As duas versões devem compartilhar identidade e conteúdo, mas podem
utilizar mecanismos de interação diferentes.

## Visual

Siga rigorosamente os tokens, tipografia, cores e espaçamentos
especificados no documento de Design System.

A sensação deve ser:

**editorial + humana + moderna + simples + confiável.**

Não quero aparência de:

-   campanha eleitoral;
-   portal governamental;
-   dashboard;
-   landing page SaaS;
-   template genérico de IA;
-   jornal tradicional pesado.

Use bastante espaço negativo.

Hierarquia tipográfica forte.

Fotografia documental quando necessária.

Interface limpa.

## Motion

Motion deve possuir significado.

Evite:

-   animações gratuitas;
-   partículas decorativas;
-   glow excessivo;
-   gradientes "AI style";
-   efeitos futuristas genéricos;
-   bounce;
-   elementos voando sem função;
-   excesso de parallax.

Respeite `prefers-reduced-motion`.

## Conteúdo político --- regra crítica

**NÃO INVENTE INFORMAÇÃO.**

**NÃO COMPLETE LACUNAS COM CONHECIMENTO PRÓPRIO.**

**NÃO CRIE PROPOSTAS.**

**NÃO CRIE ESTATÍSTICAS.**

**NÃO CRIE DECLARAÇÕES DOS CANDIDATOS.**

Use **SOMENTE** as informações existentes na base editorial anexada.

Se alguma informação necessária não existir, use um placeholder
claramente identificado:

> **Conteúdo aguardando verificação/fonte.**

Nunca invente conteúdo apenas para completar visualmente a interface.

## Implementação

Construa componentes reutilizáveis.

Separe conteúdo de apresentação sempre que possível.

Organize o projeto para que posteriormente outro agente/desenvolvedor
consiga continuar o código facilmente.

Evite hardcoding desnecessário.

Mantenha arquitetura simples.

Priorize:

-   acessibilidade;
-   performance;
-   SEO;
-   mobile performance;
-   código legível;
-   componentes reutilizáveis.

## Primeira entrega

Quero que você implemente:

1.  identidade global;
2.  Header desktop/mobile;
3.  Home completa;
4.  sistema de temas;
5.  pelo menos uma página de tema completa usando conteúdo REAL da base
    editorial;
6.  comparação entre candidatos;
7.  componente de fontes;
8.  página de candidatos;
9.  página/metodologia;
10. Footer;
11. experiência desktop;
12. experiência mobile;
13. motion e microinterações principais.

Use uma das propostas reais presentes na documentação para construir a
primeira experiência de scrollytelling.

Não tente criar todas as experiências especiais de uma vez.

Primeiro estabeleça uma excelente arquitetura visual e um exemplo
completo que servirá de padrão para as demais.

Antes de finalizar, revise toda a implementação comparando-a novamente
com os dois documentos anexados.

O resultado deve fazer alguém que normalmente não acompanha política
pensar:

> **"Finalmente estou conseguindo entender isso."**
