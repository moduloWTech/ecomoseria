"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ExternalLink, ArrowRight, ArrowDown } from "lucide-react";
import styles from "./page.module.css";

const PERSPECTIVAS = [
  {
    id: "baixa_renda",
    title: "Família de baixa renda",
    questions: [
      "Quanto da minha renda vai apenas para comida, energia e transporte?"
    ]
  },
  {
    id: "trabalhador",
    title: "Trabalhador assalariado",
    questions: [
      "Meu salário acompanha a velocidade que os preços sobem no supermercado?"
    ]
  },
  {
    id: "aposentado",
    title: "Aposentado",
    questions: [
      "A minha renda está preservando meu poder de compra real?"
    ]
  },
  {
    id: "empresario",
    title: "Pequeno empresário",
    questions: [
      "Meus custos de operação caíram ou apenas o consumidor está pressionando meu preço de venda?"
    ]
  },
  {
    id: "endividado",
    title: "Endividado",
    questions: [
      "Quanto da minha renda todo mês vai apenas para pagar os juros passados?"
    ]
  },
  {
    id: "interior",
    title: "Morador do interior",
    questions: [
      "Transporte e gargalo logístico encarecem o produto antes mesmo de ele chegar na prateleira da minha cidade?"
    ]
  },
  {
    id: "governo",
    title: "Governo",
    questions: [
      "Como aliviar o custo para as pessoas hoje sem estourar as contas e criar um problema ainda maior com juros amanhã?"
    ]
  }
];

export default function CustoDeVida() {
  const [activePerspectiva, setActivePerspectiva] = useState(PERSPECTIVAS[0]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Abertura */}
        <section className={styles.narrativeHero}>
          <div className="container">
            <span className={styles.eyebrow}>Custo de Vida</span>
            <h1 className={styles.narrativeTitle}>O preço das coisas vai mudar?</h1>
            <p className={styles.narrativeSubtitle}>
              Você entra no supermercado com R$ 200. Quanto cabe no carrinho? O custo de vida não depende de um único botão em Brasília. O preço que chega até você atravessou produção, energia, impostos, margens e muita concorrência.
            </p>
            <Button href="#desmontar" variant="primary" style={{ display: 'inline-flex', width: 'auto' }}>
              Vamos desmontar esse preço
            </Button>

            <div className={styles.formulaVisual} style={{ marginTop: "64px" }}>
              <span className={styles.formulaNode} style={{ fontSize: "14px" }}>PRODUÇÃO + INSUMOS</span>
              <span className={styles.formulaOp}>+</span>
              <span className={styles.formulaNode} style={{ fontSize: "14px" }}>ENERGIA E TRANSPORTE</span>
              <span className={styles.formulaOp}>+</span>
              <span className={styles.formulaNode} style={{ fontSize: "14px" }}>IMPOSTOS</span>
              <span className={styles.formulaOp}>+</span>
              <span className={styles.formulaNode} style={{ fontSize: "14px" }}>MARGEM</span>
              <span className={styles.formulaOp}>=</span>
              <span className={styles.formulaResult}>PREÇO FINAL</span>
            </div>
          </div>
        </section>

        {/* Arroz e Produção */}
        <section id="desmontar" className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Cadeia de Produção</span>
            <h2 className={styles.hugeStatement}>Você paga o preço do arroz.</h2>
            <h2 className={styles.hugeSubtitle}>Quem colocou aquele preço ali?</h2>

            <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "32px", justifyContent: "flex-start" }}>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>PRODUTOR</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>FERTILIZANTE</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>ARMAZENAMENTO</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>TRANSPORTE</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>VAREJO E IMPOSTOS</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px", color: "white", background: "var(--brand-primary)" }}>CONSUMIDOR</div>
            </div>

            <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "48px" }}>
              Se uma dessas etapas ficar mais barata, quanto chega até você?
            </h3>
            <p className="text-body" style={{ marginTop: "16px" }}>
              Uma redução de custo na produção pode ser totalmente repassada, repassada apenas parcialmente (absorvida pelas margens das empresas), ou simplesmente servir para compensar outro custo que subiu ao mesmo tempo (como o frete).
            </p>

            {/* Proposta Flávio */}
            <div className={styles.proposalReveal}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Flávio Bolsonaro</span>
              <p className="text-body" style={{ marginTop: "8px" }}>
                Flávio associa a redução do preço dos alimentos à melhora da cadeia produtiva: criar corredores logísticos, ampliar armazenamento, investir em seguro rural e apoiar a produção nacional de fertilizantes para reduzir gargalos.
              </p>
              
              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>LOGÍSTICA MAIS EFICIENTE</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MENOR PRESSÃO DE CUSTO</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--success)", color: "var(--success)" }}>POSSIBILIDADE DE PREÇO MENOR</div>
              </div>

              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "32px" }}>Se produzir ficar mais barato, o supermercado é obrigado a baixar o preço?</h3>
              <p className="text-body" style={{ marginTop: "16px", fontWeight: "bold" }}>Não automaticamente.</p>
              <p className="text-small" style={{ marginTop: "8px", color: "var(--text-secondary)" }}>
                Concorrência, câmbio, clima e margens de lucro dos atacadistas e varejistas determinam se a economia feita antes da prateleira chega até a etiqueta ou vira apenas lucro para quem vende.
              </p>
            </div>
          </div>
        </section>

        {/* Renda vs Preço (Lula) & Imposto na Cesta */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>E se o preço não cair, mas sobrar mais dinheiro na sua mão?</h2>
            
            <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "32px", justifyContent: "flex-start" }}>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>RENDA BRUTA</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--warning)", borderColor: "var(--warning)" }}>IMPOSTOS / DESCONTOS</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)", borderColor: "var(--success)", background: "var(--success-soft)" }}>RENDA DISPONÍVEL</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>COMPRAS E CONTAS</div>
            </div>

            <p className="text-body" style={{ marginTop: "24px" }}>
              Custo de vida menor e poder de compra maior não são a mesma coisa. O preço menor significa que o produto custa menos. A renda disponível maior significa que você consegue comprar mais itens mesmo que os preços não caiam.
            </p>

            <div className={styles.proposalReveal} style={{ backgroundColor: "white", border: "1px solid var(--border-soft)" }}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Estratégia e Políticas — Lula</span>
              <p className="text-body" style={{ marginTop: "8px" }}>
                A estratégia de Lula foca muito em recuperar o poder de compra da base: valorização do salário mínimo, maior progressividade tributária (isenção/redução de Imposto de Renda), desoneração da cesta básica, renegociação de dívidas e transferências sociais.
              </p>
            </div>

            {/* Imposto some, preço cai igual? */}
            <div style={{ marginTop: "80px", borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Repasse Tributário</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>Um imposto deixa de existir. O preço cai igual?</h2>
              
              <div style={{ display: "flex", gap: "32px", alignItems: "center", marginTop: "32px", flexWrap: "wrap" }}>
                <div className={styles.priceBreakdown}>
                  <div className={`${styles.priceLayer} ${styles.main}`}>R$ 10,00</div>
                  <div className={`${styles.priceLayer} ${styles.margin}`}>MARGEM DA LOJA</div>
                  <div className={`${styles.priceLayer} ${styles.tax}`}>IMPOSTOS DE CONSUMO</div>
                  <div className={`${styles.priceLayer} ${styles.cost}`}>CUSTOS DE PRODUÇÃO</div>
                </div>
                <div style={{ color: "var(--text-muted)" }}><ArrowRight size={32} /></div>
                <div className={styles.priceBreakdown}>
                  <div className={`${styles.priceLayer} ${styles.main}`}>R$ 9,00 ?</div>
                  <div className={`${styles.priceLayer} ${styles.margin}`}>MARGEM DA LOJA (ou maior)</div>
                  <div className={`${styles.priceLayer} ${styles.removed}`}>IMPOSTO ZERADO</div>
                  <div className={`${styles.priceLayer} ${styles.cost}`}>CUSTOS DE PRODUÇÃO</div>
                </div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                A reforma tributária prevê desoneração de itens da cesta básica. Mas não se deve assumir que o repasse do corte de imposto é integral e instantâneo no supermercado. A concorrência obriga o mercado a baixar, mas se outros custos também subiram no período, o preço final pode ficar onde estava.
              </p>
            </div>

          </div>
        </section>

        {/* Flávio Reduzir Impostos (O outro lado da moeda) */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Flávio Bolsonaro</span>
            <h2 className={styles.hugeStatement}>O governo tira R$ 1 de imposto.</h2>
            <h2 className={styles.hugeSubtitle}>Você economiza R$ 1? E o que acontece na outra ponta?</h2>

            <p className="text-body" style={{ marginTop: "24px" }}>
              Flávio propõe redução de impostos, revisão da reforma tributária e diminuição da carga sobre combustíveis e energia.
            </p>

            <div className={styles.splitCompare} style={{ marginTop: "32px" }}>
              <div>
                <h4 style={{ color: "var(--success)", marginBottom: "8px", fontSize: "14px", textTransform: "uppercase" }}>O Repasse:</h4>
                <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px", alignItems: "flex-start" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>REDUÇÃO DE TRIBUTO</div>
                  <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)", borderColor: "var(--success)" }}>MENOR ENCARGO / PREÇO MENOR</div>
                </div>
              </div>
              <div>
                <h4 style={{ color: "var(--warning)", marginBottom: "8px", fontSize: "14px", textTransform: "uppercase" }}>A Compensação Fiscal:</h4>
                <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px", alignItems: "flex-start" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MENOR ARRECADAÇÃO PÚBLICA</div>
                  <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--warning)", borderColor: "var(--warning)" }}>GOVERNO PRECISA CORTAR DESPESA OU EMITIR DÍVIDA</div>
                </div>
              </div>
            </div>

            <h3 className="h3" style={{ color: "var(--brand-primary)", marginTop: "40px", textAlign: "center" }}>
              Quanto você economiza de um lado — e o que muda do outro?
            </h3>
            <p className="text-small" style={{ textAlign: "center", marginTop: "8px", color: "var(--text-secondary)" }}>Corte de impostos aumenta a renda das pessoas, mas obriga o governo a reduzir serviços, atrasar investimentos ou assumir juros de dívida.</p>
          </div>
        </section>

        {/* Luz, Gasolina, Juros, Dólar */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Setor Elétrico</span>
              <h2 className="h2">Você apaga a luz para economizar.</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>Mas quanto da conta depende do seu consumo e quanto depende do sistema de encargos?</p>
              
              <div className={styles.formulaVisual} style={{ marginTop: "24px" }}>
                <span className={styles.formulaNode} style={{ fontSize: "12px" }}>GERAÇÃO</span>
                <span className={styles.formulaOp}>+</span>
                <span className={styles.formulaNode} style={{ fontSize: "12px" }}>TRANSMISSÃO</span>
                <span className={styles.formulaOp}>+</span>
                <span className={styles.formulaNode} style={{ fontSize: "12px" }}>DISTRIBUIÇÃO</span>
                <span className={styles.formulaOp}>+</span>
                <span className={styles.formulaNode} style={{ fontSize: "12px", color: "var(--warning)" }}>ENCARGOS E IMPOSTOS</span>
                <span className={styles.formulaOp}>=</span>
                <span className={styles.formulaResult} style={{ fontSize: "14px" }}>SUA CONTA</span>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                Lula aposta em transição energética e tarifa social subsidiada. Flávio propõe retirar ou enxugar os subsídios cruzados (como a CDE) e baixar impostos. <strong>Pergunta:</strong> Se retirar um subsídio ou encargo, o custo daquela estrutura some ou apenas alguém deixa de ser isento para pagar a conta?
              </p>
            </div>

            <div style={{ marginBottom: "80px", borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Combustíveis</span>
              <h2 className="h2">Baixar imposto garante o preço da gasolina?</h2>
              
              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PETRÓLEO INT.</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--warning)", borderColor: "var(--warning)" }}>CÂMBIO (DÓLAR)</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>REFINO E BIOCOMBUSTÍVEIS</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>TRIBUTOS DA BOMBA</div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                O preço depende fortemente do câmbio e do petróleo no exterior. As políticas podem mitigar impostos (Flávio) ou usar o peso da Petrobras e refino local (Lula), mas nenhuma controla totalmente os fatores externos.
              </p>
            </div>

            {/* Dívida e Juros */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className="h2">A geladeira custa R$ 3.000... ou 12 parcelas?</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>O custo de vida não é só a mercadoria, é o <strong>custo do crédito (juros)</strong> que viabiliza o consumo do brasileiro e afeta os investimentos das empresas.</p>
              
              <div className={styles.splitCompare} style={{ marginTop: "24px" }}>
                <div className={styles.splitCard}>
                  <h3 className="h4" style={{ marginBottom: "16px" }}>A Dívida Familiar</h3>
                  <p className="text-body" style={{ marginBottom: "16px" }}>O salário cai e uma parte já pertence ao passado.</p>
                  <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "4px", alignItems: "flex-start" }}>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>RENDA</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px", color: "var(--warning)", borderColor: "var(--warning)" }}>PARCELAS E JUROS</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>SOBRA</div>
                  </div>
                </div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                Lula aposta em grandes rodadas de renegociação e regulação de crédito. Flávio foca no programa "Ganha, Ganha" e educação financeira. Mas renegociar resolve a dívida de ontem. <strong>O que impede a próxima de se formar com juros altos?</strong>
              </p>
            </div>

          </div>
        </section>

        {/* Inflação e A Questão Fiscal */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--brand-primary)", color: "white" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagAttention}`} style={{ background: "white", color: "var(--brand-primary)" }}>Inflação e Gasto Público</span>
            <h2 className={styles.hugeStatement} style={{ color: "white" }}>A conta do governo chega até você.</h2>
            
            <p className="text-body" style={{ marginTop: "24px", color: "rgba(255,255,255,0.9)" }}>
              Se o governo coloca mais dinheiro na sua mão, mas a inflação faz os preços subirem na mesma velocidade, quanto você realmente ganhou?
            </p>

            <div style={{ marginTop: "24px", display: "inline-block", background: "var(--bg-secondary)", padding: "8px 16px", borderRadius: "8px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMarket}`} style={{ margin: 0 }}>Expectativa de Mercado (Boletim Focus 05/10/2026)</span>
              <p className="text-lead" style={{ color: "var(--brand-primary)", fontWeight: "bold", marginTop: "4px" }}>
                Previsão de inflação a 5,01% ao ano (acima do teto de 4,5%).
              </p>
            </div>

            <div className={styles.splitCompare} style={{ marginTop: "48px" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "24px", borderRadius: "16px" }}>
                <h4 style={{ color: "var(--warning)", marginBottom: "16px", fontSize: "14px", textTransform: "uppercase" }}>Tensão A: Gastar mais do que arrecada</h4>
                <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px", alignItems: "flex-start" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "white" }}>DÉFICIT E DÍVIDA ALTA</div>
                  <div className={styles.flowArrow} style={{ color: "white" }}><ArrowDown size={14}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "var(--warning)", borderColor: "var(--warning)" }}>RISCO AUMENTA INFLAÇÃO E JUROS</div>
                </div>
                <p className="text-small" style={{ color: "rgba(255,255,255,0.8)", marginTop: "16px" }}>
                  <strong>Lula</strong> propõe manter o arcabouço fiscal e cobrir os investimentos aumentando arrecadação e revendo renúncias. Se a arrecadação não subir o bastante, a dívida pesa.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.1)", padding: "24px", borderRadius: "16px" }}>
                <h4 style={{ color: "var(--accent)", marginBottom: "16px", fontSize: "14px", textTransform: "uppercase" }}>Tensão B: Cortar despesas bruscamente</h4>
                <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px", alignItems: "flex-start" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "white" }}>AJUSTE FISCAL (CORTAR GASTO)</div>
                  <div className={styles.flowArrow} style={{ color: "white" }}><ArrowDown size={14}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "var(--accent)", borderColor: "var(--accent)" }}>QUAL SERVIÇO DEIXA DE EXISTIR?</div>
                </div>
                <p className="text-small" style={{ color: "rgba(255,255,255,0.8)", marginTop: "16px" }}>
                  <strong>Flávio</strong> propõe novo teto de gastos e um tesourada de ~1,5% do PIB. O ajuste reduz juros e dívida, mas a sociedade sentirá cortes na saúde, educação, transferências ou subsídios?
                </p>
              </div>
            </div>

            <h3 className="h2" style={{ color: "var(--accent)", marginTop: "64px", textAlign: "center" }}>
              "Cortar gasto" e "Aumentar investimento" só ganham significado quando sabemos de onde o dinheiro sai e para onde vai.
            </h3>
          </div>
        </section>

        {/* Perspectivas (Tabs) */}
        <section className={styles.perspectivesSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Cadeias Diferentes</span>
            <h2 className={styles.hugeStatement}>Quem sente primeiro?</h2>
            
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
                <h3 className="h3" style={{ marginBottom: "24px", color: "var(--brand-primary)" }}>{activePerspectiva.title} pergunta:</h3>
                {activePerspectiva.questions.map((q, i) => (
                  <div key={i} className={styles.perspectiveQuestion}>{q}</div>
                ))}
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
                  Nenhum presidente controla sozinho o câmbio, juros globais, conflitos bélicos, preço do barril de petróleo internacional e clima. Cuidado com promessas matemáticas fixas.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagMarket}`}>Expectativa de Mercado</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Previsões consolidadas por economistas (como no Relatório Focus) com validade técnica para o cenário atual, mas não são promessas políticas imutáveis.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  A cascata real de um preço: de impostos diretos ao custo embutido do crédito rotativo da empresa transportadora.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagUncertainty}`}>Incerteza Fiscal</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Como os candidatos vão fechar a conta financeira de todas essas desonerações e investimentos prometidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparação Final */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <h2 className="h2" style={{ textAlign: "center", marginBottom: "40px" }}>Os programas lado a lado</h2>
            
            <div className={styles.finalCompare}>
              <div className={styles.finalCandidateCard}>
                <div className={styles.finalCandidateHeader}>
                  <div className={styles.avatar}>L</div>
                  <div>
                    <h3 className="h3">Luiz Inácio Lula da Silva</h3>
                    <span className="text-label" style={{ color: "var(--text-muted)" }}>PT</span>
                  </div>
                </div>
                <p className="text-body" style={{ marginBottom: "16px" }}>
                  Aposta em colocar mais dinheiro no bolso para as pessoas conseguirem pagar os custos de vida, preservando investimento público (PAC) e programas sociais, mantendo o Arcabouço.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas Centrais:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Como conseguir arrecadar o suficiente para fechar a conta?</li>
                  <li>O ganho de renda supera a inflação a longo prazo?</li>
                </ul>
              </div>

              <div className={styles.finalCandidateCard}>
                <div className={styles.finalCandidateHeader}>
                  <div className={styles.avatar}>F</div>
                  <div>
                    <h3 className="h3">Flávio Bolsonaro</h3>
                    <span className="text-label" style={{ color: "var(--text-muted)" }}>PL</span>
                  </div>
                </div>
                <p className="text-body" style={{ marginBottom: "16px" }}>
                  Aposta em reduzir o preço dos produtos diminuindo os "pesos" da economia: corta impostos, facilita logística, cria um novo Teto e promete um corte grande (1,5% do PIB) no Estado.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas Centrais:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>O corte de imposto no papel vai chegar no desconto do preço no mercado?</li>
                  <li>Onde essa tesourada do Estado vai ocorrer na vida real?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fontes */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <h2 className="h3">De onde vem essa informação?</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Tribunal Superior Eleitoral (TSE)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Planos de Governo Oficiais - Eleições 2026</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagSource}`} style={{ marginBottom: 0 }}>Fonte Primária Principal</span>
                  </div>
                </div>
                <Button href="https://www.tse.jus.br" variant="link">
                  Abrir TSE <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Folha de S.Paulo (Plano Econômico)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Plano de Flávio propõe tesourada e novo teto</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto Jornalístico</span>
                  </div>
                </div>
                <Button href="https://www1.folha.uol.com.br/mercado/2026/08/plano-de-governo-de-flavio-bolsonaro-propoe-tesouraco-e-novo-teto-de-gastos.shtml" variant="link">
                  Ler reportagem <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Folha de S.Paulo (Pressão Fiscal)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Disputa ocorre sob pressão fiscal e juros altos</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto Analítico</span>
                  </div>
                </div>
                <Button href="https://www1.folha.uol.com.br/mercado/2026/10/disputa-entre-lula-e-flavio-ocorre-sob-pressao-fiscal-e-juros-altos.shtml" variant="link">
                  Ler reportagem <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Banco Central do Brasil</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Boletim Focus (Relatório de Mercado, Out/2026)</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagMarket}`} style={{ marginBottom: 0 }}>Dados Oficiais Financeiros</span>
                  </div>
                </div>
                <Button href="https://www.bcb.gov.br" variant="link">
                  Consultar Focus <ExternalLink size={16} />
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
