"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ExternalLink, ArrowRight, ArrowDown } from "lucide-react";
import styles from "./page.module.css";

const PERSPECTIVAS = [
  {
    id: "consumidor",
    title: "Consumidor",
    questions: [
      "Quais os custos dos meus pagamentos?",
      "Os preços de produtos importados vão mudar?",
      "A concorrência entre os meios de pagamento aumenta ou diminui?",
      "Como fica o câmbio?"
    ]
  },
  {
    id: "pequeno_empresario",
    title: "Pequeno empresário",
    questions: [
      "Quais as taxas para receber e pagar?",
      "Consigo acessar clientes e fornecedores internacionais mais facilmente?",
      "Qual é o meu custo de conversão de moeda?"
    ]
  },
  {
    id: "exportador",
    title: "Exportador",
    questions: [
      "Existem novas formas de receber?",
      "Quais novos mercados ficam disponíveis?",
      "O risco cambial aumenta ou diminui?",
      "Isso afeta meu financiamento?"
    ]
  },
  {
    id: "importador",
    title: "Empresa que importa",
    questions: [
      "Qual o meu custo real para pagar o fornecedor?",
      "A velocidade de liquidação muda?",
      "Existe mais de um meio de pagamento disponível para essa rota?"
    ]
  },
  {
    id: "governo",
    title: "Governo",
    questions: [
      "Como ficam as relações comerciais e a política externa?",
      "Qual o impacto sobre as reservas do país?",
      "Que autonomia (ou dependência) temos sobre nossa infraestrutura financeira?"
    ]
  }
];

export default function Dinheiro() {
  const [activePerspectiva, setActivePerspectiva] = useState(PERSPECTIVAS[0]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Abertura */}
        <section className={styles.narrativeHero}>
          <div className="container">
            <span className={styles.eyebrow}>Meu Dinheiro</span>
            <h1 className={styles.narrativeTitle}>O que acontece com seu dinheiro depois que ele sai da sua mão?</h1>
            <p className={styles.narrativeSubtitle}>
              Você recebe, paga, transfere, compra, parcela e guarda dinheiro todos os dias. Por trás dessas ações existem impostos, bancos, meios de pagamento, juros, câmbio e regras definidas pelo Estado. Algumas decisões desta eleição podem mudar esses caminhos.
            </p>
            <Button href="#caminho" variant="primary" style={{ display: 'inline-flex', width: 'auto' }}>
              Quero ver onde isso chega no meu bolso
            </Button>
            
            <div className={styles.flowDiagram} style={{ marginTop: "64px", opacity: 0.7 }}>
              <div className={styles.flowNode}>SALÁRIO</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>CONTA</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>PIX / CARTÃO / IMPOSTOS</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>EMPRESAS / GOVERNO / OUTROS PAÍSES</div>
            </div>
          </div>
        </section>

        {/* Experiência 1: Você manda R$ 50 pelo Pix */}
        <section id="caminho" className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>Você manda R$ 50 pelo Pix.</h2>
            
            <div className={styles.flowDiagram}>
              <div className={styles.flowNode}>VOCÊ</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode} style={{ color: "var(--success)" }}>R$ 50</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>PIX</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>OUTRA PESSOA</div>
            </div>

            <h2 className={styles.hugeStatement} style={{ color: "var(--brand-primary)", marginTop: "64px" }}>
              Quanto chega do outro lado?
            </h2>

            <p className="text-body" style={{ marginTop: "24px" }}>
              Para você, é apenas um botão. Mas por trás dele existe uma infraestrutura financeira brasileira que determina como o dinheiro circula e quais instituições conseguem participar.
            </p>
            
            <h3 className="h3" style={{ color: "var(--accent)", marginTop: "48px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
              Agora leve essa ideia para uma empresa brasileira fazendo negócio com outro país.
            </h3>
            <p className="text-small" style={{ color: "var(--text-muted)", marginTop: "8px" }}>
              *Isso diz respeito a infraestruturas e integrações transfronteiriças em desenvolvimento ou debate.
            </p>
          </div>
        </section>

        {/* O dinheiro atravessando fronteiras */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
            <h2 className={styles.hugeStatement}>O dinheiro atravessando fronteiras</h2>

            <div className={`${styles.flowDiagram} ${styles.vertical}`}>
              <div className={styles.flowNode}>EMPRESA BRASILEIRA</div>
              <div className={styles.flowArrow}><ArrowDown size={24}/></div>
              <div className={styles.flowNode} style={{ backgroundColor: "var(--bg-subtle)" }}>CÂMBIO / BANCOS / SISTEMAS DE PAGAMENTO / INTERMEDIÁRIOS</div>
              <div className={styles.flowArrow}><ArrowDown size={24}/></div>
              <div className={styles.flowNode}>EMPRESA EM OUTRO PAÍS</div>
            </div>

            <h2 className={styles.hugeStatement} style={{ marginTop: "64px" }}>Quantas portas seu dinheiro precisa atravessar antes de chegar lá?</h2>
            
            <p className="text-body" style={{ marginTop: "24px" }}>
              Pagamentos internacionais podem envolver conversão de moedas, bancos correspondentes, sistemas de liquidação e outros intermediários. Cada arquitetura possui custos, riscos, vantagens e dependências diferentes.
            </p>

            <h2 className={styles.hugeSubtitle} style={{ marginTop: "48px", color: "var(--success)" }}>
              E se sistemas nacionais de pagamento conseguissem conversar diretamente?
            </h2>
            <p className="text-body" style={{ marginTop: "16px" }}>
              Como possibilidade tecnológica e institucional, integrações buscam pagamentos transfronteiriços mais rápidos, redução de custos, uso de moedas locais e menos barreiras para o comércio.
            </p>

            <div className={styles.proposalReveal}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta / Posição documentada</span>
              <p className="text-body" style={{ marginTop: "8px" }}>
                Em julho de 2026, <strong>Flávio Bolsonaro</strong> propôs um compromisso legislativo para impedir que o Pix fosse interconectado a mecanismos de liquidação transfronteiriça considerados "não ocidentais". A proposta foi apresentada no contexto de discussões comerciais com os Estados Unidos.
              </p>
              <p className="text-body" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
                <em>*Posteriormente, Flávio defendeu publicamente o Pix diante das autoridades americanas, afirmando que o sistema não deveria ser tratado como um problema.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Coloque a barreira no caminho */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            <h2 className={styles.hugeStatement}>Coloque a barreira no caminho</h2>

            <p className="text-label" style={{ color: "var(--text-muted)", marginBottom: "8px" }}>Antes da proposta:</p>
            <div className={styles.flowDiagram}>
              <div className={styles.flowNode}>BRASIL</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>SISTEMA BRASILEIRO</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode} style={{ color: "var(--success)" }}>POSSÍVEIS INTEGRAÇÕES INTERNACIONAIS</div>
            </div>

            <p className="text-label" style={{ color: "var(--text-muted)", marginBottom: "8px", marginTop: "32px" }}>Depois da proposta:</p>
            <div className={styles.flowDiagram}>
              <div className={styles.flowNode}>BRASIL</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>PIX</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={`${styles.flowNode} ${styles.flowBarrier}`}>[RESTRIÇÃO A DETERMINADOS ARRANJOS NÃO OCIDENTAIS]</div>
            </div>

            <h2 className={styles.hugeSubtitle} style={{ marginTop: "48px", color: "var(--brand-primary)" }}>
              O que o Brasil ganha — e do que pode abrir mão — ao colocar essa barreira?
            </h2>

            <div className={styles.splitCompare}>
              <div>
                <h4 style={{ color: "var(--success)", marginBottom: "12px" }}>Possível lógica da restrição</h4>
                <p className="text-body">
                  A proposta foi apresentada como forma de reduzir preocupações comerciais dos EUA em relação ao Pix e preservar/aliviar relações econômicas com o país.
                </p>
              </div>
              <div>
                <h4 style={{ color: "var(--warning)", marginBottom: "12px" }}>Onde pode ficar difícil</h4>
                <p className="text-body">
                  Uma proibição prévia pode limitar opções futuras de integração do Pix. Se integrações reduzirem custos ou intermediários, deixar de participar pode significar abrir mão dessas possibilidades.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "32px", padding: "16px", borderLeft: "4px solid var(--warning)", backgroundColor: "var(--warning-soft)" }}>
              <span className={`${styles.editorialTag} ${styles.tagAttention}`} style={{ marginBottom: "8px" }}>Possível Consequência</span>
              <p className="text-body" style={{ color: "var(--warning)" }}>
                Restrição → Menos opções de integração → Possível manutenção de intermediários/caminhos existentes → Possível diferença de custo.<br/>
                <em>*Depende estritamente da implementação e das alternativas disponíveis.</em>
              </p>
            </div>
          </div>
        </section>

        {/* China, BRICS e o Caminho do Dinheiro */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
            <h2 className={styles.hugeStatement}>Essa discussão não termina no Pix.</h2>
            
            <p className="text-body" style={{ marginTop: "24px" }}>
              O <strong>BRICS</strong> (grupo de economias emergentes do qual o Brasil participa) vem discutindo: maior uso de moedas locais no comércio internacional, meios de pagamento transfronteiriços mais rápidos e baratos, e interoperabilidade entre sistemas.
            </p>

            <h2 className={styles.hugeStatement} style={{ marginTop: "48px", color: "var(--brand-primary)", fontSize: "clamp(28px, 4vw, 40px)" }}>
              Isso não significa criar uma "moeda do BRICS".
            </h2>
            <p className="text-body" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Documentos oficiais e declarações brasileiras diferenciam a discussão sobre moedas locais e sistemas de pagamento da criação de uma moeda única do bloco.
            </p>

            <div style={{ marginTop: "64px", borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h3 className={styles.hugeSubtitle} style={{ color: "var(--brand-primary)", marginBottom: "32px" }}>Uma empresa brasileira precisa pagar uma empresa chinesa.</h3>
              
              <div className={styles.splitCompare}>
                <div className={styles.splitCard}>
                  <h4 style={{ marginBottom: "16px", color: "var(--text-secondary)" }}>Caminho tradicional</h4>
                  <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px" }}>
                    <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px" }}>REAL</div>
                    <div className={styles.flowArrow} style={{ margin: "2px" }}><ArrowDown size={16}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px" }}>Conversões/Intermediários</div>
                    <div className={styles.flowArrow} style={{ margin: "2px" }}><ArrowDown size={16}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px" }}>Liquidação internacional</div>
                    <div className={styles.flowArrow} style={{ margin: "2px" }}><ArrowDown size={16}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px" }}>FORNECEDOR</div>
                  </div>
                </div>
                
                <div className={styles.splitCard} style={{ borderColor: "var(--success)" }}>
                  <h4 style={{ marginBottom: "16px", color: "var(--success)" }}>Possível integração financeira</h4>
                  <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px" }}>
                    <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px" }}>REAL / Infra brasileira</div>
                    <div className={styles.flowArrow} style={{ margin: "2px" }}><ArrowDown size={16}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px", borderColor: "var(--success)" }}>Infra interoperável</div>
                    <div className={styles.flowArrow} style={{ margin: "2px" }}><ArrowDown size={16}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px" }}>Moedas locais / conectados</div>
                    <div className={styles.flowArrow} style={{ margin: "2px" }}><ArrowDown size={16}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px" }}>FORNECEDOR</div>
                  </div>
                </div>
              </div>

              <h3 className="h3" style={{ marginTop: "48px", color: "var(--brand-primary)" }}>Se existirem mais caminhos para fazer o pagamento, isso aumenta a competição?</h3>
              <h3 className="h3" style={{ marginTop: "16px", color: "var(--warning)" }}>E se o Brasil decidir antecipadamente que alguns desses caminhos não poderão ser utilizados?</h3>
            </div>
          </div>
        </section>

        {/* BRICS Trade-offs */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Posição Política Documentada</span>
            <p className="text-body" style={{ marginTop: "8px" }}>
              Flávio Bolsonaro manifestou posição favorável à retirada do Brasil do BRICS e maior alinhamento com os EUA.
            </p>

            <h2 className={styles.hugeStatement} style={{ marginTop: "48px" }}>Sair do BRICS não impede o Brasil de negociar com China, Índia ou outros integrantes.</h2>
            
            <h2 className={styles.hugeSubtitle} style={{ marginTop: "24px", color: "var(--brand-primary)" }}>
              Mas continuar podendo negociar é a mesma coisa que participar da construção das novas formas de fazer essas negociações?
            </h2>

            <div className={styles.splitCompare} style={{ marginTop: "48px" }}>
              <div className={styles.splitCard}>
                <h3 className="h3" style={{ marginBottom: "16px" }}>Permanecer e aprofundar</h3>
                <h4 style={{ color: "var(--success)", fontSize: "14px", textTransform: "uppercase" }}>Oportunidades</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                  <li>Participar do desenvolvimento de novas infraestruturas financeiras</li>
                  <li>Ampliar alternativas de pagamentos</li>
                  <li>Estimular comércio em moedas locais</li>
                </ul>
                <h4 style={{ color: "var(--warning)", fontSize: "14px", textTransform: "uppercase" }}>Riscos e Perguntas</h4>
                <ul className="text-small" style={{ paddingLeft: "20px" }}>
                  <li>Essas infraestruturas realmente reduzirão custos?</li>
                  <li>Quais os padrões de segurança e governança?</li>
                  <li>Dependência de infraestruturas de outros membros?</li>
                </ul>
              </div>

              <div className={styles.splitCard}>
                <h3 className="h3" style={{ marginBottom: "16px" }}>Sair e alinhar com Ocidente</h3>
                <h4 style={{ color: "var(--success)", fontSize: "14px", textTransform: "uppercase" }}>Oportunidades</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                  <li>Aprofundar integração econômica com mercados ocidentais</li>
                  <li>Facilitar determinadas negociações diplomáticas</li>
                  <li>Reduzir conflitos com interesses estratégicos americanos</li>
                </ul>
                <h4 style={{ color: "var(--warning)", fontSize: "14px", textTransform: "uppercase" }}>Riscos e Perguntas</h4>
                <ul className="text-small" style={{ paddingLeft: "20px" }}>
                  <li>Quais iniciativas o Brasil deixaria de influenciar?</li>
                  <li>Perderia opções futuras de pagamentos e financiamento?</li>
                  <li>Acordos bilaterais compensariam isso?</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "64px", textAlign: "center", borderTop: "1px solid var(--border)", paddingTop: "64px" }}>
              <h2 className="h2" style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>A questão não é:<br/>"O Brasil ainda poderá vender para a China?"</h2>
              <span className={`${styles.editorialTag} ${styles.tagFact}`}>FATO VERIFICADO</span>
              <p className="text-body" style={{ fontWeight: 600, marginBottom: "32px" }}>Sim. Sair de um bloco não elimina automaticamente relações comerciais bilaterais.</p>
              
              <h2 className={styles.hugeStatement} style={{ color: "var(--accent)" }}>A questão mais difícil é:</h2>
              <h2 className={styles.hugeSubtitle} style={{ color: "var(--brand-primary)" }}>em quais mesas o Brasil quer estar enquanto novas regras e infraestruturas de comércio e pagamentos estão sendo construídas?</h2>
            </div>
          </div>
        </section>

        {/* Dólar */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--brand-primary)", color: "white" }}>
          <div className="container editorial-content">
            <h2 className={styles.hugeStatement} style={{ color: "white" }}>Por que tantos negócios internacionais passam pelo dólar?</h2>
            <p className="text-lead" style={{ color: "rgba(255,255,255,0.8)", marginTop: "24px" }}>
              O dólar atua como moeda dominante devido à sua liquidez, segurança institucional dos EUA e sua ampla aceitação como padrão global de reservas e transações.
            </p>

            <h2 className={styles.hugeStatement} style={{ color: "var(--accent)", marginTop: "64px" }}>Usar real, yuan ou outras moedas significa "acabar com o dólar"?</h2>
            <h2 className={styles.hugeSubtitle} style={{ color: "white", marginTop: "16px" }}>Não.</h2>
            
            <p className="text-body" style={{ color: "rgba(255,255,255,0.8)", marginTop: "16px" }}>
              O uso de moedas locais cria alternativas, mas não significa necessariamente substituir completamente o dólar. <strong>Mais alternativas ≠ Fim do dólar.</strong>
            </p>

            <div style={{ marginTop: "32px", padding: "24px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--accent)", marginBottom: "16px" }}>Perguntas que permanecem:</h4>
              <ul className="text-body" style={{ paddingLeft: "24px", color: "white" }}>
                <li>Alternativas podem reduzir determinados custos de conversão?</li>
                <li>Podem criar novos riscos cambiais?</li>
                <li>Empresas teriam liquidez suficiente nessas moedas?</li>
                <li>Quando o dólar continua sendo a alternativa mais eficiente?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Perspectivas (No Bolso) */}
        <section className={styles.perspectivesSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O impacto no dia a dia</span>
            <h2 className={styles.hugeStatement}>Tá, mas onde eu entro nisso?</h2>
            <p className="text-lead">
              Esses mecanismos internacionais operam como canais através dos quais os efeitos podem chegar até você. Escolha uma perspectiva.
            </p>

            <div className={styles.perspectivesGrid}>
              <div className={styles.perspectiveTabs} role="tablist">
                {PERSPECTIVAS.map(p => (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={activePerspectiva.id === p.id}
                    className={styles.perspectiveTab}
                    onClick={() => setActivePerspectiva(p)}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
              <div className={styles.perspectiveContent} role="tabpanel">
                <h3 className="h3" style={{ marginBottom: "24px" }}>Para {activePerspectiva.title.toLowerCase()}, as questões são:</h3>
                {activePerspectiva.questions.map((q, i) => (
                  <div key={i} className={styles.perspectiveQuestion}>{q}</div>
                ))}
                <p className="text-small" style={{ color: "var(--text-muted)", marginTop: "32px" }}>
                  *Estes itens são canais pelos quais efeitos podem ocorrer, não uma promessa de que ocorrerão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sabemos e não sabemos */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <h2 className="h2">O que sabemos — e o que não sabemos</h2>
            
            <div className={styles.knowledgeGrid}>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagFact}`}>Fato verificado</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Posições, documentos, declarações e iniciativas efetivamente documentadas.
                </p>
              </div>
              
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Como determinada infraestrutura econômica ou financeira funciona e conecta atores globais.
                </p>
              </div>

              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Situações hipotéticas usadas para tornar o mecanismo compreensível.
                </p>
              </div>

              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagUncertainty}`}>Não sabemos ainda</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Legislação final, negociações, custos tecnológicos, adesão de outros países e contexto geopolítico futuro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fontes */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <h2 className="h3">De onde vem essa informação?</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Reuters / Investing (2026)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Proposta sobre interconexão do Pix a arranjos não ocidentais</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagSource}`} style={{ marginBottom: 0 }}>Contexto Jornalístico</span>
                  </div>
                </div>
                <Button href="https://br.investing.com/news/stock-market-news/flavio-bolsonaro-propoe-que-pix-nao-se-conecte-a-sistemas-nao-ocidentais-como-alternativa-a-tarifas-dos-eua-1991524" variant="link">
                  Abrir <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>BRICS FMCBG (2024)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Declaração conjunta sobre pagamentos transfronteiriços</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagSource}`} style={{ marginBottom: 0 }}>Fonte Oficial</span>
                  </div>
                </div>
                <Button href="https://brics.br/pt-br/documentos/acervo-de-presidencias-anteriores/finance-ministers-central-bank-governors-declarations/2024-brics-fmcbg-joint-statement.pdf/%40%40download/file" variant="link">
                  Abrir documento <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
