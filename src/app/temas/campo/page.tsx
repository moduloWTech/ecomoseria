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
      "No fim das contas, minha comida ficará mais barata?"
    ]
  },
  {
    id: "pequeno",
    title: "Pequeno agricultor",
    questions: [
      "Eu consigo acessar esse crédito, esse seguro e esse mercado, ou ele só funciona para quem é grande?"
    ]
  },
  {
    id: "grande",
    title: "Grande produtor",
    questions: [
      "Tenho a infraestrutura e a segurança jurídica (previsibilidade) para investir na próxima década?"
    ]
  },
  {
    id: "trabalhador",
    title: "Trabalhador rural",
    questions: [
      "Essa expansão da fronteira agrícola melhora minhas condições ou só me substitui por tecnologia?"
    ]
  },
  {
    id: "comerciante",
    title: "Comerciante do varejo",
    questions: [
      "Quanto do preço final já foi consumido por estradas ruins antes mesmo do alimento chegar na minha loja?"
    ]
  },
  {
    id: "exportador",
    title: "Exportador",
    questions: [
      "O Brasil vai manter uma relação diplomática que me garanta mercado lá fora?"
    ]
  },
  {
    id: "governo",
    title: "Governo",
    questions: [
      "Como aumentar produção sem estourar custos ou destruir a capacidade da terra produzir amanhã?"
    ]
  }
];

export default function CampoEAlimentos() {
  const [activePerspectiva, setActivePerspectiva] = useState(PERSPECTIVAS[0]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Abertura */}
        <section className={styles.narrativeHero}>
          <div className="container">
            <span className={styles.eyebrow}>Campo e Alimentos</span>
            <h1 className={styles.narrativeTitle}>Você compra um tomate no supermercado.</h1>
            <h1 className={styles.narrativeTitle} style={{ color: "var(--warning)" }}>Quantas decisões aconteceram antes de ele chegar até você?</h1>
            <p className={styles.narrativeSubtitle}>
              Da terra até seu prato, muita coisa pode encarecer. Antes de chegar à prateleira, um alimento passou por sementes, fertilizantes, clima, armazenamento, estrada, pedágio, energia, indústria e comércio.
            </p>
            <Button href="#jornada" variant="primary" style={{ display: 'inline-flex', width: 'auto' }}>
              Vamos seguir esse alimento
            </Button>
          </div>
        </section>

        <div id="jornada" className="container">
          <div className={styles.flowDiagram} style={{ padding: "32px 0", borderBottom: "1px solid var(--border-soft)" }}>
            <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PRODUTOR</div>
            <div className={styles.flowArrow}><ArrowRight size={14}/></div>
            <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>COLHEITA</div>
            <div className={styles.flowArrow}><ArrowRight size={14}/></div>
            <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ARMAZENAMENTO</div>
            <div className={styles.flowArrow}><ArrowRight size={14}/></div>
            <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>TRANSPORTE</div>
            <div className={styles.flowArrow}><ArrowRight size={14}/></div>
            <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>DISTRIBUIÇÃO</div>
            <div className={styles.flowArrow}><ArrowRight size={14}/></div>
            <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "var(--brand-primary)", color: "white" }}>SUA MESA</div>
          </div>
        </div>

        {/* Produtor vs Consumidor */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>Você paga mais caro no tomate.</h2>
            <h2 className={styles.hugeSubtitle}>Isso significa que o agricultor ganhou mais?</h2>
            
            <p className="text-lead" style={{ fontWeight: 600, color: "var(--warning)", marginTop: "24px" }}>
              Não necessariamente.
            </p>

            <div className={styles.twoLinesCompare}>
              <div className={styles.compareLine}>
                <span className={styles.lineLabel} style={{ color: "var(--brand-primary)" }}>O que você paga no caixa</span>
                <span className={styles.lineLabel}>R$ X</span>
              </div>
              
              <div style={{ padding: "16px 0", color: "var(--text-secondary)", fontSize: "14px", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span>PERDAS +</span>
                <span>TRANSPORTE +</span>
                <span>ARMAZENAMENTO +</span>
                <span>DISTRIBUIÇÃO +</span>
                <span>VAREJO +</span>
                <span>IMPOSTOS</span>
              </div>

              <div className={styles.compareLine}>
                <span className={styles.lineLabel} style={{ color: "var(--success)" }}>O que fica com o produtor</span>
                <span className={styles.lineLabel} style={{ color: "var(--success)" }}>R$ Y (Muito menor)</span>
              </div>
            </div>

            <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "40px" }}>Quando o preço sobe, em qual exata parte dessa cadeia ele subiu?</h3>
          </div>
        </section>

        {/* Fertilizantes & Convergência */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Insumos Externos</span>
            <h2 className={styles.hugeStatement}>O agricultor compra o insumo muito antes de colher.</h2>
            
            <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "32px", justifyContent: "flex-start" }}>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>DÓLAR / IMPORTAÇÃO</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>FERTILIZANTE</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>CUSTO DA LAVOURA</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>COLHEITA</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--warning)", borderColor: "var(--warning)" }}>PREÇO FINAL</div>
            </div>

            <p className="text-body" style={{ marginTop: "24px" }}>
              O Brasil é um gigante agrícola, mas depende fortemente de fertilizantes importados. Se o câmbio dispara ou um fornecedor externo aumenta o preço, quem absorve o custo? O produtor (aceitando lucro menor)? O consumidor (pagando mais)? O agricultor troca de cultura ou simplesmente aplica menos fertilizante?
            </p>

            <div style={{ marginTop: "48px", background: "var(--brand-soft)", padding: "24px", borderRadius: "16px", borderLeft: "4px solid var(--success)" }}>
              <span className={`${styles.editorialTag} ${styles.tagConvergence}`}>Convergência Importante</span>
              <p className="text-body" style={{ fontWeight: 600, color: "var(--brand-primary)", marginTop: "8px" }}>
                Os programas de Lula e Flávio Bolsonaro defendem ampliar a produção nacional de fertilizantes.
              </p>
              
              <h4 className="h4" style={{ marginTop: "24px", color: "var(--warning)" }}>Mas fabricar fertilizante no Brasil significa comida mais barata automaticamente?</h4>
              <p className="text-small" style={{ marginTop: "8px" }}>
                Reduz a nossa dependência do exterior e o risco diplomático, mas não determina sozinho o preço. Quanto custa construir as fábricas? Nossa matéria-prima e energia são competitivas o suficiente para a indústria vender barato? Quanto desse ganho chegaria na mesa e quanto viraria margem da indústria?
              </p>
            </div>
          </div>
        </section>

        {/* Clima, Seguro e Irrigação */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            
            {/* Clima e Seguro */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className={styles.hugeStatement}>O produtor plantou. A política não controla a chuva.</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>Veio seca, enchente ou evento climático extremo.</p>
              
              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PLANTIO</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--warning)", color: "var(--warning)" }}>EVENTO CLIMÁTICO</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PERDA DE PRODUÇÃO</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MENOR OFERTA</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "var(--warning-soft)" }}>PREÇO SOBE</div>
              </div>

              <h3 className="h3" style={{ color: "var(--brand-primary)", marginTop: "32px" }}>Como proteger o produtor sem fazer toda a sociedade assumir sempre o prejuízo?</h3>
              <p className="text-body" style={{ marginTop: "16px" }}>
                Ambos os programas dão atenção vital ao Seguro Rural. O seguro não impede a seca; ele muda quem absorve a pancada do prejuízo. A pergunta de implementação é: o pequeno consegue contratar ou só o grande? O programa (com subsídio do Estado) tem orçamento suficiente para cobrir todos quando a tragédia for geral?
              </p>
            </div>

            {/* Irrigação */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Infraestrutura</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>A chuva não veio. Mas existe água para irrigar.</h2>
              
              <div className={styles.flowDiagram} style={{ gap: "8px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--success)" }}>ÁGUA + INFRAESTRUTURA</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MENOS DEPENDÊNCIA DA CHUVA</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)" }}>PRODUÇÃO PREVISÍVEL</div>
              </div>

              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "24px" }}>Mas de onde vem essa água?</h3>
              <p className="text-body" style={{ marginTop: "16px" }}>
                Os dois programas citam irrigação, mas irrigação precisa de duas coisas: energia (que tem custo) e disponibilidade de recursos hídricos. Não existe irrigação se houver disputa pela água do mesmo rio ou aquífero com o abastecimento humano e industrial.
              </p>
            </div>

          </div>
        </section>

        {/* Armazenamento e Estrada */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            {/* Silo */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className={styles.hugeStatement}>A safra foi boa. Mas todo mundo precisa vender ao mesmo tempo.</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>Colheu, mas não tem onde guardar.</p>
              
              <div className={styles.splitCompare} style={{ marginTop: "32px" }}>
                <div style={{ opacity: 0.7 }}>
                  <h4 style={{ marginBottom: "16px", color: "var(--text-muted)", textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.05em" }}>Sem Silo</h4>
                  <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px", alignItems: "flex-start" }}>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>COLHEITA</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>VENDA IMEDIATA</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--warning)", color: "var(--warning)" }}>MENOR PREÇO RECEBIDO</div>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: "16px", color: "var(--brand-primary)", textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.05em" }}>Com Silo (Armazenamento)</h4>
                  <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px", alignItems: "flex-start" }}>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>COLHEITA</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--success)" }}>ARMAZENAMENTO</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)" }}>ESCOLHA DO MOMENTO DE VENDA</div>
                  </div>
                </div>
              </div>
              
              <p className="text-body" style={{ marginTop: "32px" }}>
                Flávio enfatiza ampliação da armazenagem e Lula inclui logística no abastecimento. Ter onde guardar permite ao produtor esperar o preço melhorar para vender. <strong>Mas esse ganho do produtor significa automaticamente preço menor no supermercado?</strong> Geralmente, não.
              </p>
            </div>

            {/* Estrada/Logística */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Logística</span>
              <h2 className="h2">O alimento foi produzido. Agora precisa viajar.</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>Quanto custa mover uma tonelada daqui até o porto ou até o mercado?</p>

              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>FAZENDA</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--warning)" }}>ESTRADA / FERROVIA</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>DISTRIBUIÇÃO</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MERCADO</div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                <strong>Lula</strong> enfatiza investimentos de infraestrutura ligados ao Novo PAC e atuação estatal/privada. <strong>Flávio</strong> enfatiza concessões, corredores logísticos e participação estritamente privada.
              </p>
              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "24px" }}>
                A questão não é apenas qual modelo fazer, mas: A rota atende pequenos produtores ou só os corredores de exportação? E se for concessão, quanto custará o pedágio na tonelada final?
              </h3>
            </div>

          </div>
        </section>

        {/* Produtor Pequeno e Agricultura Familiar */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            <h2 className={styles.hugeStatement}>Dois produtores enfrentam a mesma seca.</h2>
            <h2 className={styles.hugeSubtitle}>Um tem milhares de hectares. O outro vive de uma pequena propriedade familiar. Eles conseguem reagir da mesma maneira?</h2>

            <p className="text-body" style={{ marginTop: "32px" }}>
              O acesso a crédito (juros mais baixos), contratação de seguro, compra em escala de fertilizantes e adoção de tecnologia criam realidades opostas na capacidade de suportar uma quebra de safra. 
            </p>

            <h3 className="h3" style={{ color: "var(--brand-primary)", marginTop: "32px", marginBottom: "24px" }}>Uma política que funciona para uma grande operação funciona igual para quem produz em pequena escala?</h3>

            <div className={styles.proposalReveal}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Lula</span>
              <p className="text-body" style={{ marginTop: "8px" }}>
                Lula propõe fortalecer programas voltados diretamente à agricultura familiar, que participam ativamente do que chega ao mercado interno e à mesa escolar.
              </p>
              
              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px", flexWrap: "wrap" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>CRÉDITO (Pronaf) / ASSISTÊNCIA</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PRODUÇÃO</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--success)" }}>COMPRA PÚBLICA (MERCADO)</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>RENDA E CONTINUIDADE</div>
              </div>

              <h4 className="h4" style={{ marginTop: "24px", color: "var(--warning)" }}>Onde fica o desafio real?</h4>
              <ul className="text-small" style={{ paddingLeft: "20px" }}>
                <li>O crédito realmente chega ou a burocracia do banco trava tudo?</li>
                <li>Existe assistência técnica no município dele para usar melhor a terra?</li>
                <li>Como tornar a produção competitiva para não depender unicamente da compra governamental no futuro?</li>
              </ul>
            </div>
            <p className="text-small" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              *Flávio também apresenta medidas para crédito, seguro e tecnologia no campo, mas com uma orientação forte voltada à produtividade, segurança jurídica e competitividade geral do setor.
            </p>
          </div>
        </section>

        {/* Exportação, Mundo e Meio Ambiente */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            {/* Mercado Interno vs Exportação */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O Mercado</span>
              <h2 className="h2" style={{ marginBottom: "24px" }}>Exportar deixa a comida mais cara aqui dentro?</h2>
              
              <div className={styles.splitCompare}>
                <div style={{ textAlign: "center", opacity: 0.8 }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PRODUÇÃO BRASILEIRA</div>
                  <div style={{ margin: "8px 0", color: "var(--text-muted)" }}><ArrowDown size={20} /></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MERCADO INTERNO</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PRODUÇÃO BRASILEIRA</div>
                  <div style={{ margin: "8px 0", color: "var(--text-muted)" }}><ArrowDown size={20} /></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>EXPORTAÇÃO</div>
                </div>
              </div>

              <p className="text-body" style={{ marginTop: "32px" }}>
                O Brasil produz alimentos e os vende para o mundo. <strong>Se o preço lá fora (ou o Dólar) subir muito, o produtor prefere vender para quem?</strong>
              </p>
              <p className="text-body" style={{ marginTop: "16px" }}>
                Se os produtores mandarem o que têm para fora, a oferta diminui no Brasil e o preço sobe na prateleira local. Contudo, não podemos afirmar que "mais exportação = comida mais cara" automaticamente, porque é justamente a exportação (e o lucro em dólar) que financia o maquinário, a tecnologia e a existência das próprias fazendas, o que mantém o Brasil produzindo muito.
              </p>
              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "24px" }}>Como aproveitar o mercado externo gigante sem ignorar o prato do brasileiro?</h3>
            </div>

            {/* Preservação e Produção */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O Meio Ambiente</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>"Preservar ou produzir?" é uma pergunta incompleta.</h2>
              <p className="text-body">O produtor precisa da terra livre. Mas a produção depende de solo rico, água e clima regulado.</p>
              
              <div className={styles.sumBox} style={{ justifyContent: "center", marginTop: "32px", padding: "32px 0", background: "transparent" }}>
                <span className={styles.sumItem}>SOLO</span>
                <span className={styles.sumOp}>+</span>
                <span className={styles.sumItem}>ÁGUA</span>
                <span className={styles.sumOp}>+</span>
                <span className={styles.sumItem}>CLIMA REGULADO</span>
                <span className={styles.sumOp}>=</span>
                <span className={styles.sumItem} style={{ borderColor: "var(--success)", color: "var(--success)" }}>PRODUÇÃO CONSTANTE</span>
              </div>

              <div className={styles.splitCompare} style={{ marginTop: "32px" }}>
                <div className={styles.splitCard}>
                  <p className="text-lead" style={{ fontWeight: 600, color: "var(--brand-primary)" }}>Como produzir hoje sem destruir a capacidade da terra de produzir a mesma coisa amanhã?</p>
                </div>
                <div className={styles.splitCard}>
                  <p className="text-lead" style={{ fontWeight: 600, color: "var(--warning)" }}>Como o governo exige que se preserve áreas gigantes sem ignorar o custo disso para o produtor?</p>
                </div>
              </div>
              <p className="text-small" style={{ marginTop: "24px", color: "var(--text-secondary)" }}>
                <strong>Lula</strong> enfatiza bioeconomia, transição climática rigorosa e combate ao desmatamento. <strong>Flávio</strong> enfatiza segurança jurídica para quem produz, e foca em soluções pelo mercado de carbono e compensações financeiras por conservação.
              </p>
            </div>

          </div>
        </section>

        {/* O Preço dos Alimentos Sintese */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--brand-primary)", color: "white" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagAttention}`} style={{ background: "white", color: "var(--brand-primary)" }}>A Síntese</span>
            <h2 className={styles.hugeStatement} style={{ color: "white" }}>Toda essa cadeia vira o preço.</h2>
            
            <div className={styles.sumBox} style={{ marginTop: "40px", background: "rgba(255,255,255,0.1)", justifyContent: "center" }}>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>INSUMOS</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>CLIMA</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>CRÉDITO</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>PRODUTIVIDADE</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>ARMAZENAMENTO</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>FRETE</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>CÂMBIO/DÓLAR</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>OFERTA</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>IMPOSTOS</span><span className={styles.sumOp} style={{ color: "rgba(255,255,255,0.5)" }}>+</span>
              <span className={styles.sumItem} style={{ color: "var(--text-primary)" }}>MARGENS</span>
              
              <div className={styles.sumResult} style={{ color: "var(--accent)", borderColor: "rgba(255,255,255,0.3)", textAlign: "center" }}>
                = PREÇO QUE CHEGA À SUA MESA
              </div>
            </div>

            <h3 className="h2" style={{ color: "var(--accent)", marginTop: "40px", textAlign: "center" }}>
              Qual exata parte dessa fórmula uma promessa de candidato consegue realmente mudar de forma imediata?
            </h3>
          </div>
        </section>

        {/* Perspectivas (Tabs) */}
        <section className={styles.perspectivesSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>As cadeiras no sistema</span>
            <h2 className={styles.hugeStatement}>A mesma política vista de lugares diferentes</h2>
            
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
                  O Brasil importa grande parte do fertilizante que usa. O mercado internacional de commodities e o Dólar têm forte influência local.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagExisting}`}>Política já existente</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Tanto o Plano Safra quanto os planos de Fertilizantes já rodam no país. A política decide o grau de prioridade ou alteração que fará neles.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagUncertainty}`}>Incertezas de Consequência</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Mais crédito não gera matematicamente mais produção (o clima manda). Mais estrada não barateia matematicamente a prateleira (o supermercado manda na margem).
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
                  Ênfase governamental focada em agricultura familiar (Pronaf), controle de estoques e compras governamentais, transição climática, bioeconomia e reestruturação produtiva com viés de sustentabilidade forte.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas de execução:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>A infraestrutura do PAC vai chegar no pequeno produtor isolado?</li>
                  <li>As exigências ambientais preveem tempo ou ajuda para adaptação de quem não tem caixa?</li>
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
                  Ênfase orientada ao agronegócio competitivo: ampliação massiva de corredores logísticos (concessões), armazenamento, segurança jurídica no campo, e adoção de soluções de mercado para o meio ambiente (crédito de carbono).
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas de execução:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>O investimento 100% privado vai chegar em regiões do interior onde não há rota de exportação?</li>
                  <li>A simplificação regulatória vai conseguir evitar acidentes ambientais reais?</li>
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
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Folha de S.Paulo</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Comparação de Infraestrutura e Ambiental (Lula x Flávio)</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto Jornalístico</span>
                  </div>
                </div>
                <Button href="https://www1.folha.uol.com.br/poder/2026/08/veja-pontos-em-que-os-planos-de-governo-de-lula-e-flavio-bolsonaro-divergem.shtml" variant="link">
                  Ler reportagem <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Governo Federal (MAPA)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Plano Nacional de Fertilizantes</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagExisting}`} style={{ marginBottom: 0 }}>Referência Institucional</span>
                  </div>
                </div>
                <Button href="https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-agricolas/fertilizantes/plano-nacional-de-fertilizantes" variant="link">
                  Ler documento <ExternalLink size={16} />
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
