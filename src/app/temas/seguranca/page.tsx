"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ExternalLink, ArrowRight, ArrowDown } from "lucide-react";
import styles from "./page.module.css";

const PERSPECTIVAS = [
  {
    id: "vitima",
    title: "Pessoa assaltada",
    questions: [
      "Quero que isso não aconteça novamente."
    ]
  },
  {
    id: "morador",
    title: "Morador de área dominada",
    questions: [
      "Quero segurança sem ficar no meio do confronto."
    ]
  },
  {
    id: "policial",
    title: "Policial",
    questions: [
      "Tenho informação, equipamento, treinamento e respaldo para agir?"
    ]
  },
  {
    id: "familia",
    title: "Família da vítima",
    questions: [
      "O criminoso será identificado e responsabilizado?"
    ]
  },
  {
    id: "jovem",
    title: "Jovem da periferia",
    questions: [
      "Serei protegido ou tratado como suspeito?"
    ]
  },
  {
    id: "comerciante",
    title: "Comerciante",
    questions: [
      "Posso abrir e fechar meu negócio sem pagar ou obedecer ao crime?"
    ]
  },
  {
    id: "governo",
    title: "Governo",
    questions: [
      "Coloco mais recurso em polícia, investigação, prisão, tecnologia ou prevenção?"
    ]
  }
];

export default function Seguranca() {
  const [activePerspectiva, setActivePerspectiva] = useState(PERSPECTIVAS[0]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Abertura */}
        <section className={styles.narrativeHero}>
          <div className="container">
            <span className={styles.eyebrow}>Segurança</span>
            <h1 className={styles.narrativeTitle}>Você quer sair de casa e voltar em segurança.</h1>
            <p className={styles.narrativeSubtitle}>
              No discurso político, quase todo mundo promete combater o crime. Na vida real, a pergunta é outra: <strong>o que precisa acontecer para que o crime deixe de chegar até você?</strong>
            </p>
            <Button href="#caminho" variant="primary" style={{ display: 'inline-flex', width: 'auto' }}>
              Vamos seguir o caminho do crime
            </Button>
            
            <p className="text-small" style={{ marginTop: "64px", color: "var(--text-secondary)", textTransform: "uppercase" }}>A ponta do problema e a estrutura invisível:</p>
            <div className={`${styles.flowDiagram} ${styles.reverse}`} style={{ opacity: 0.7, marginTop: "16px" }}>
              <div className={styles.flowNode} style={{ color: "white", background: "var(--warning)", borderColor: "var(--warning)" }}>CRIME NA RUA</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>RECEPTAÇÃO</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>DINHEIRO</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ARMAS / DROGAS</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>FACÇÃO / TERRITÓRIO</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PRISÃO / FRONTEIRA</div>
            </div>
          </div>
        </section>

        {/* Roubo de Celular & Flávio */}
        <section id="caminho" className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>Você sai do trabalho. Alguém leva seu celular.</h2>
            <h3 className="h2" style={{ color: "var(--warning)", marginTop: "48px" }}>O problema termina quando o ladrão é preso?</h3>
            
            <div className={styles.flowDiagram} style={{ marginTop: "32px", fontSize: "12px" }}>
              <div className={styles.flowNode} style={{ padding: "8px 12px", borderColor: "var(--warning)" }}>ROUBO</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px" }}>APARELHO</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px" }}>RECEPTADOR</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px" }}>REVENDA</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px", color: "var(--success)" }}>DINHEIRO</div>
            </div>

            <p className="text-body" style={{ marginTop: "24px" }}>
              Se existir mercado para o produto roubado, prender apenas quem executou o roubo pode não eliminar o incentivo econômico. Quem compra? Quem revende? Como bloquear o aparelho? Como seguir o dinheiro?
            </p>

            <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Flávio Bolsonaro</span>
              <p className="text-body" style={{ marginTop: "8px" }}>
                Flávio propõe medidas de endurecimento penal, incluindo penas maiores (inclusive para furto/revenda de celulares), redução da maioridade penal e restrições à progressão de regime.
              </p>

              <h3 className="h3" style={{ color: "var(--brand-primary)", marginTop: "32px" }}>Se a pena ficar muito maior, haverá menos roubos?</h3>

              <div className={styles.splitCompare}>
                <div>
                  <h4 style={{ color: "var(--success)", marginBottom: "8px", fontSize: "14px", textTransform: "uppercase" }}>Mecanismo Pretendido:</h4>
                  <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px" }}>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PENA MAIOR</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MAIOR RISCO DO CRIME</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)", borderColor: "var(--success)" }}>POSSÍVEL EFEITO DISSUASÓRIO</div>
                  </div>
                </div>
                <div>
                  <h4 style={{ color: "var(--warning)", marginBottom: "8px", fontSize: "14px", textTransform: "uppercase" }}>A Realidade Paralela:</h4>
                  <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px" }}>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", opacity: 0.5 }}>PENA NO PAPEL</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--warning)" }}>INVESTIGAÇÃO E IDENTIFICAÇÃO</div>
                    <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                    <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", opacity: 0.5 }}>PRISÃO E CUMPRIMENTO</div>
                  </div>
                </div>
              </div>

              <h3 className="h3" style={{ marginTop: "32px", textAlign: "center", color: "var(--warning)" }}>
                Uma pena muito alta muda o comportamento de quem acredita que não será identificado?
              </h3>
            </div>
          </div>
        </section>

        {/* Integração de Inteligência & Lula */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            <h2 className={styles.hugeStatement}>A polícia de uma cidade encontra uma parte da quadrilha.</h2>
            <h2 className={styles.hugeSubtitle}>Outra polícia tem informações sobre o dinheiro. Uma terceira conhece a rota das armas. E se esses dados não conversarem?</h2>
            
            <div className={styles.splitCompare} style={{ marginTop: "48px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>POLÍCIA A</div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>POLÍCIA B</div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>POLÍCIA C</div>
                </div>
                <div style={{ margin: "16px 0", color: "var(--text-muted)" }}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ borderColor: "var(--warning)", color: "var(--warning)" }}>DADOS SEPARADOS</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", opacity: 0.5 }}>DADOS</div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", opacity: 0.5 }}>INTELIGÊNCIA</div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", opacity: 0.5 }}>INVESTIGAÇÃO</div>
                </div>
                <div style={{ margin: "16px 0", color: "var(--text-muted)" }}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ borderColor: "var(--success)", color: "var(--success)" }}>CONEXÃO DA REDE</div>
              </div>
            </div>

            <div style={{ marginTop: "48px" }}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Lula</span>
              <p className="text-body" style={{ marginTop: "8px" }}>
                Lula propõe ampliar a integração entre União, estados e municípios, compartilhamento de dados, inteligência, coordenação das forças, tecnologias de rastreamento de armas e iniciativas como Celular Seguro.
              </p>
              
              <div className={styles.splitCompare}>
                <div>
                  <h4 style={{ color: "var(--success)", marginBottom: "8px", fontSize: "14px", textTransform: "uppercase" }}>Onde ajuda:</h4>
                  <p className="text-body">Permite atingir estruturas e quadrilhas maiores, não apenas o autor do crime que fica na ponta da linha.</p>
                </div>
                <div>
                  <h4 style={{ color: "var(--warning)", marginBottom: "8px", fontSize: "14px", textTransform: "uppercase" }}>Onde fica difícil:</h4>
                  <ul className="text-small" style={{ paddingLeft: "20px" }}>
                    <li>Integração de governos/sistemas incompatíveis;</li>
                    <li>Disputas institucionais e burocracia;</li>
                    <li>Orçamento para modernizar e executar.</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "32px", textAlign: "center" }}>Informação compartilhada vira prisão e redução do crime automaticamente? Não.</h3>
            </div>
          </div>
        </section>

        {/* O Crime Organizado (Asfixia Financeira / Narcoterrorismo) */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O Crime Estruturado</span>
            <h2 className={styles.hugeStatement}>Uma facção não é uma pessoa.</h2>
            
            <div className={styles.treeVisual}>
              <div className={styles.flowNode} style={{ background: "black", color: "white", borderColor: "black" }}>LIDERANÇA</div>
              <div style={{ margin: "8px 0", color: "var(--text-muted)" }}><ArrowDown size={20} /></div>
              <div className={styles.treeBranch}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>DINHEIRO</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ARMAS</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>DROGAS</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>TERRITÓRIO</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>LAVAGEM</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>RECRUTAMENTO</div>
              </div>
            </div>

            <h3 className="h3" style={{ textAlign: "center", marginBottom: "32px" }}>Qual peça precisa ser retirada para a organização parar de funcionar?</h3>

            <div style={{ background: "var(--brand-soft)", padding: "24px", borderRadius: "16px", borderLeft: "4px solid var(--success)" }}>
              <span className={`${styles.editorialTag} ${styles.tagConvergence}`}>Convergência Importante</span>
              <p className="text-body" style={{ fontWeight: 600, color: "var(--brand-primary)", marginTop: "8px" }}>Lula e Flávio defendem atingir o dinheiro do crime organizado.</p>
              <p className="text-small" style={{ marginTop: "8px" }}>
                Lula fala em asfixia financeira. Flávio propõe seguir o dinheiro, bloquear ativos e combater lavagem.
                Uma organização pode substituir pessoas. Recuperar dinheiro, contas e empresas atinge a capacidade real de operar.
              </p>
            </div>

            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "48px", marginTop: "48px" }}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Flávio Bolsonaro</span>
              <h2 className="h2" style={{ marginTop: "8px", marginBottom: "16px" }}>Narcoterroristas</h2>
              <p className="text-body" style={{ marginBottom: "24px" }}>
                Flávio propõe classificar grandes facções como narcoterroristas, com o objetivo de ampliar os instrumentos de repressão. A pergunta não é emocional, é jurídica e prática:
              </p>
              <h3 className="h3" style={{ color: "var(--brand-primary)" }}>Trocar o nome jurídico do inimigo muda as ferramentas disponíveis para combatê-lo?</h3>
              <div style={{ marginTop: "16px", padding: "16px", backgroundColor: "var(--bg-secondary)", borderRadius: "12px" }}>
                <p className="text-small" style={{ color: "var(--text-secondary)" }}>
                  <em>O Brasil já possui leis recentes específicas contra facções com mecanismos amplos de bloqueio e confisco. O que o novo enquadramento adiciona? A Justiça Federal e a PF teriam estrutura para absorver esses casos? E a classificação sobrepõe ou melhora os instrumentos?</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Território e Confronto Armado */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Controle de Território</span>
              <h2 className={styles.hugeStatement}>Você mora em um lugar onde o crime controla parte da vida cotidiana.</h2>
              
              <h3 className="h3" style={{ marginTop: "32px", color: "var(--brand-primary)" }}>O que significa "retomar o território"?</h3>
              
              <div className={styles.flowDiagram} style={{ flexWrap: "wrap", justifyContent: "center", marginTop: "16px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>POLICIAMENTO</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>INVESTIGAÇÃO</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PRESENÇA PERMANENTE</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>SERVIÇOS URBANOS</div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)", borderColor: "var(--success)" }}>PROTEÇÃO DOS MORADORES</div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                Lula propõe policiamento de proximidade e requalificação urbana. Flávio enfatiza repressão armada e retomada territorial dura. 
              </p>
              <h3 className="h2" style={{ color: "var(--warning)", marginTop: "24px", textAlign: "center" }}>A polícia entra hoje. Quem permanece amanhã?</h3>
            </div>

            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Uso da Força</span>
              <h2 className="h2" style={{ marginBottom: "24px" }}>O confronto armado</h2>
              <p className="text-body">Flávio afirma que criminosos armados com fuzis que enfrentarem forças de segurança poderão ser abatidos. Essa é a consequência mais dura da dinâmica criminal.</p>
              
              <div className={styles.splitCompare} style={{ marginTop: "32px" }}>
                <div>
                  <h4 style={{ color: "var(--warning)", marginBottom: "8px", fontSize: "14px", textTransform: "uppercase" }}>O Risco do Estado</h4>
                  <p className="text-body" style={{ fontWeight: 600 }}>Quando o Estado usa mais força, o que precisa existir para proteger quem não participa do confronto?</p>
                  <ul className="text-small" style={{ paddingLeft: "20px", marginTop: "8px" }}>
                    <li>Regras de uso de força e identificação de alvos;</li>
                    <li>Câmeras e investigação posterior para evitar abusos.</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: "var(--warning)", marginBottom: "8px", fontSize: "14px", textTransform: "uppercase" }}>O Risco do Domínio</h4>
                  <p className="text-body" style={{ fontWeight: 600 }}>O que acontece quando criminosos fortemente armados dominam o território porque o Estado não consegue enfrentá-los?</p>
                  <p className="text-small" style={{ marginTop: "8px" }}>
                    A população refém de regras de facções, milícias ou organizações de tráfico local.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Prisão e Maioridade */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className={styles.hugeStatement}>O criminoso foi preso.</h2>
              <h2 className={styles.hugeSubtitle}>Mas continua dando ordens lá de dentro.</h2>

              <div className={styles.flowDiagram} style={{ justifyContent: "center", marginTop: "32px" }}>
                <div className={styles.flowNode}>RUA</div>
                <div className={styles.flowArrow}><ArrowRight size={20}/></div>
                <div className={styles.flowNode} style={{ borderColor: "var(--warning)", background: "var(--warning-soft)", color: "var(--warning)" }}>PRISÃO</div>
                <div className={styles.flowArrow}><ArrowRight size={20}/></div>
                <div className={styles.flowNode} style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>COMUNICAÇÃO</div>
                <div className={styles.flowArrow}><ArrowRight size={20}/></div>
                <div className={styles.flowNode}>RUA</div>
              </div>
              
              <h3 className="h3" style={{ textAlign: "center", color: "var(--warning)", marginTop: "24px" }}>A prisão interrompeu o crime?</h3>

              <p className="text-body" style={{ marginTop: "32px" }}>
                Flávio propõe expansão de vagas, 5 presídios de segurança máxima e isolamento rigoroso. Lula foca em reduzir a superlotação, isolar as lideranças no sistema federal e ampliar trabalho/educação.
              </p>

              <div className={styles.splitCompare} style={{ marginTop: "24px" }}>
                <div>
                  <h4 style={{ marginBottom: "8px" }}>Criminoso de alta periculosidade</h4>
                  <p className="text-small">Como impedir que a liderança continue comandando a facção?</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: "8px" }}>Preso que retornará à sociedade</h4>
                  <p className="text-small">Como reduzir a chance dele voltar ao crime e reincidir?</p>
                </div>
              </div>
              <h3 className="h3" style={{ textAlign: "center", marginTop: "24px", color: "var(--brand-primary)" }}>O mesmo modelo de prisão serve para todos?</h3>
            </div>

            {/* Maioridade Penal */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Flávio Bolsonaro</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>Redução da maioridade penal</h2>
              <p className="text-body">Flávio propõe reduzir a maioridade para 16 anos (e endurecimento para maiores de 14 em crimes graves).</p>
              
              <div style={{ marginTop: "24px", padding: "24px", background: "var(--bg-secondary)", borderRadius: "16px" }}>
                <h3 className="h3" style={{ color: "var(--warning)", marginBottom: "16px" }}>Um adolescente de 16 anos participa de um homicídio. Ele deve responder como adulto? E o que acontece depois que ele entra no sistema prisional?</h3>
                <ul className="text-small" style={{ paddingLeft: "20px" }}>
                  <li>É sobre punição justa ou sobre proteger a sociedade?</li>
                  <li>Ele será recrutado por facções na prisão de adultos?</li>
                  <li>O atual sistema socioeducativo (para jovens) tem capacidade de ressocialização?</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Tecnologias & Fronteira */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            {/* Reconhecimento Facial */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Tecnologia de Vigilância</span>
              <h2 className="h2">A câmera encontrou alguém</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>Flávio propõe um sistema nacional de reconhecimento facial.</p>
              
              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>CÂMERA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>FACE</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>BANCO DE DADOS</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)", borderColor: "var(--success)" }}>ALERTA E POLÍCIA</div>
              </div>

              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "24px" }}>E se o sistema identificar a pessoa errada? (Falso positivo)</h3>
              <p className="text-small" style={{ marginTop: "8px" }}>
                A qualidade da base, os vieses algorítmicos, a necessidade de revisão humana e o risco de privacidade são custos de implementação. <strong>Quanto de vigilância você aceita em troca de uma possibilidade maior de encontrar criminosos?</strong>
              </p>
            </div>

            {/* Proteção à Mulher */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px", marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Proteção e Prevenção</span>
              <h2 className="h2">A medida protetiva precisa proteger antes</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>Uma mulher denuncia uma ameaça. O agressor recebe uma ordem para não se aproximar.</p>
              <h3 className="h3" style={{ color: "var(--brand-primary)", marginTop: "16px" }}>Como o sistema descobre que ele está chegando antes que seja tarde?</h3>
              
              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MEDIDA PROTETIVA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MONITORAMENTO</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ALERTA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)", borderColor: "var(--success)" }}>RESPOSTA</div>
              </div>
              <p className="text-small" style={{ marginTop: "8px" }}>
                Tecnologia e tornozeleiras ajudam, mas dependem de resposta policial rápida, rede de acolhimento e dinheiro para funcionarem 24h por dia.
              </p>
            </div>

            {/* Fronteiras */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>As Fronteiras</span>
              <h2 className="h2">A arma não nasceu na sua rua</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>Uma arma apreendida na cidade pode ter atravessado milhares de quilômetros.</p>

              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>FRONTEIRA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ROTA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>FACÇÃO</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "var(--warning-soft)", color: "var(--warning)", borderColor: "var(--warning)" }}>CRIME LOCAL</div>
              </div>
              <h3 className="h3" style={{ color: "var(--brand-primary)", marginTop: "24px", textAlign: "center" }}>É mais eficiente apreender a arma na fronteira ou depois que ela chegou à mão do criminoso?</h3>
              <p className="text-small" style={{ marginTop: "8px", textAlign: "center" }}>Ambas as abordagens se complementam e são atacadas pelos programas (Lula com integração/tecnologia e Flávio com o Sistema Nacional de Fronteira/Militares).</p>
            </div>
          </div>
        </section>

        {/* Prevenção & Dinheiro */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--brand-primary)", color: "white" }}>
          <div className="container editorial-content">
            
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`} style={{ background: "white", color: "var(--brand-primary)" }}>As origens do crime</span>
            <h2 className={styles.hugeStatement} style={{ color: "white" }}>Segurança não é só polícia.<br/>O crime também recruta.</h2>
            <h3 className="h2" style={{ color: "var(--accent)", marginTop: "24px" }}>O que faz um adolescente escolher — ou ser empurrado para — uma facção?</h3>

            <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "32px", justifyContent: "flex-start" }}>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>MENOS VULNERABILIDADE</div>
              <div className={styles.flowArrow} style={{ color: "white" }}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>MAIS OPORTUNIDADES</div>
              <div className={styles.flowArrow} style={{ color: "white" }}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px", background: "var(--accent)", color: "white", borderColor: "var(--accent)" }}>MENOR ESPAÇO PARA RECRUTAMENTO</div>
            </div>

            <p className="text-lead" style={{ marginTop: "24px", color: "rgba(255,255,255,0.9)" }}>
              Isso é uma estratégia de médio/longo prazo e não substitui a necessidade de resposta imediata a crimes violentos. <strong>Como proteger quem está em perigo hoje sem deixar de reduzir quem entra para o crime amanhã?</strong>
            </p>

            <div style={{ marginTop: "80px", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "64px", textAlign: "center" }}>
              <h2 className={styles.hugeStatement} style={{ color: "white" }}>Polícia, presídio, câmera, inteligência e tecnologia custam dinheiro.</h2>
              <p className="text-body" style={{ marginTop: "24px", color: "rgba(255,255,255,0.9)" }}>
                É investimento inicial ou gasto permanente? Quem paga: União ou estados? Quantos profissionais serão necessários para operar novos presídios ou sistemas de IA?
              </p>
              <h3 className="h2" style={{ color: "var(--accent)", marginTop: "32px" }}>Construir é uma decisão. Manter funcionando todos os dias é outra.</h3>
            </div>
          </div>
        </section>

        {/* Perspectivas (Tabs) */}
        <section className={styles.perspectivesSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O impacto no sistema</span>
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
                  Não transformar "pena maior = crime menor" ou "prevenção = menos crime" em relações matemáticas e imediatas.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  O que consta nos programas oficiais de governo de 2026.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Como as estruturas de repressão, integração, bloqueio financeiro ou monitoramento operam na realidade.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagUncertainty}`}>Incerteza</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Eficácia causal sem evidência, capacidade financeira dos Estados e se a política ataca a raiz ou a ponta da cadeia criminosa.
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
                  Foco na inteligência, cooperação e ataque à estrutura financeira e logística do crime. Ênfase em integração de dados, rastreamento de armas, retomada e urbanização de territórios, policiamento de proximidade e reinserção prisional.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas de execução:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Integração entre diferentes polícias funcionará na prática?</li>
                  <li>Recursos suficientes para estados e prefeituras?</li>
                  <li>Em quanto tempo a prevenção reduz o crime violento hoje?</li>
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
                  Foco no endurecimento penal, isolamento prisional absoluto e repressão coercitiva/armada. Ênfase em classificar facções como narcoterroristas, reduzir maioridade penal, construir presídios de segurança máxima e ampliar tecnologias de vigilância (reconhecimento facial).
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas de execução:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Penas maiores mudam crimes quando a taxa de investigação é baixa?</li>
                  <li>Como financiar e manter a grande expansão prisional?</li>
                  <li>Quais poderes reais a classificação de narcoterrorismo cria na lei?</li>
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
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Folha de S.Paulo (Análise Comparativa)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Asfixia financeira, endurecimento penal e presídios</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto Analítico 1</span>
                  </div>
                </div>
                <Button href="https://www1.folha.uol.com.br/poder/2026/08/lula-e-flavio-bolsonaro-propoem-caminhos-diferentes-para-derrotar-faccoes.shtml" variant="link">
                  Ler reportagem <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Folha de S.Paulo (Eixos)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Lula foca no controle, Flávio foca na redução da maioridade</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto Analítico 2</span>
                  </div>
                </div>
                <Button href="https://www1.folha.uol.com.br/cotidiano/2026/09/lula-foca-no-controle-da-policia-e-flavio-bolsonaro-promete-reducao-da-maioridade-e-castracao-quimica.shtml" variant="link">
                  Ler reportagem <ExternalLink size={16} />
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
