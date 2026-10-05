"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ExternalLink, ArrowDown } from "lucide-react";
import styles from "./page.module.css";

const PERSPECTIVAS = [
  {
    id: "trabalhador",
    title: "Trabalhador",
    questions: [
      "Vou trabalhar menos?",
      "Minha renda muda?",
      "Meu poder de negociação aumenta ou diminui?",
      "Tenho alternativas caso não aceite uma condição?"
    ]
  },
  {
    id: "desempregado",
    title: "Desempregado",
    questions: [
      "Isso pode facilitar uma contratação?",
      "Ou pode tornar algumas empresas mais cautelosas?"
    ]
  },
  {
    id: "empresario",
    title: "Pequeno empresário",
    questions: [
      "Quanto custa contratar?",
      "Preciso contratar mais alguém?",
      "Consigo reorganizar minha equipe?",
      "Minha margem suporta a mudança?"
    ]
  },
  {
    id: "consumidor",
    title: "Consumidor",
    questions: [
      "Parte de uma mudança de custos poderia chegar aos preços?",
      "Uma empresa poderia absorver esse custo?"
    ]
  },
  {
    id: "grande_empresa",
    title: "Grande empresa",
    questions: [
      "Tenho mais capacidade de reorganizar turnos, automatizar ou absorver custos do que um concorrente pequeno?"
    ]
  }
];

export default function Trabalho() {
  const [activePerspectiva, setActivePerspectiva] = useState(PERSPECTIVAS[0]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Abertura */}
        <section className={styles.narrativeHero}>
          <div className="container">
            <span className={styles.eyebrow}>Trabalho e Economia</span>
            <h1 className={styles.narrativeTitle}>O que pode mudar no seu bolso e no seu trabalho?</h1>
            <p className={styles.narrativeSubtitle}>
              Duas propostas podem parecer boas quando resumidas em uma frase. A questão fica mais difícil quando colocamos pessoas, empresas, salários, custos e escolhas dentro delas.
            </p>
            <Button href="#realidade" variant="primary" style={{ display: 'inline-flex', width: 'auto' }}>
              Vamos colocar isso na vida real
            </Button>
          </div>
        </section>

        {/* Experiência 1: Flexibilização */}
        <section id="realidade" className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>Você precisa do emprego.</h2>
            <h2 className={styles.hugeSubtitle}>A empresa precisa de alguém.</h2>
            
            <div className={styles.pauseBlock}>
              <p className="text-lead">Parece uma negociação entre duas partes.</p>
            </div>

            <h2 className={styles.hugeStatement} style={{ color: "var(--warning)" }}>
              Mas os dois têm o mesmo poder para dizer "não"?
            </h2>

            <p className="text-body" style={{ marginTop: "24px" }}>
              Uma empresa abriu uma vaga. Existem várias pessoas interessadas. Imagine que a empresa passe a ter maior liberdade para negociar determinadas condições diretamente com quem será contratado.
            </p>

            <div className={styles.negotiationVisual}>
              <div className={styles.partyCard}>
                <div className={styles.partyName}>Empresa</div>
                <div className={styles.partySpeech}>"Posso oferecer estas condições."</div>
              </div>
              <div className={styles.partyCard}>
                <div className={styles.partyName}>Trabalhador</div>
                <div className={styles.partySpeech}>"Posso aceitar ou recusar."</div>
              </div>
            </div>

            <div className={styles.conflictBox}>
              <h2 className={styles.hugeStatement} style={{ marginBottom: "16px" }}>No papel, existe negociação.</h2>
              <h3 className={styles.hugeSubtitle} style={{ color: "var(--accent-soft)" }}>Na prática, existe uma pergunta:</h3>
              <h2 className={styles.hugeStatement} style={{ marginTop: "16px", color: "var(--accent)" }}>quem pode se dar ao luxo de dizer não?</h2>
            </div>

            <p className="text-body">
              Uma empresa pode entrevistar outro candidato.<br/>
              Um trabalhador desempregado, com contas vencendo e poucas alternativas, pode não possuir a mesma capacidade de esperar.
            </p>
            <p className="text-body" style={{ marginTop: "16px" }}>
              Isso não significa que toda negociação individual prejudicará o trabalhador. Significa que maior liberdade de negociação torna o <strong>poder de barganha</strong> das duas partes uma variável importante.
            </p>

            <div className={styles.proposalReveal}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial</span>
              <h3 className={styles.proposalTitle}>Flávio Bolsonaro propõe, entre outras medidas:</h3>
              <ul className={styles.proposalList}>
                <li>Maior espaço para o negociado sobre o legislado;</li>
                <li>Redução do custo do trabalho;</li>
                <li>Redução de impostos e revisão de regras fiscais;</li>
                <li>Programas voltados a emprego e empreendedorismo.</li>
              </ul>

              <div className={styles.benefitsAndDifficulties}>
                <div className={styles.bdCol}>
                  <h4 style={{ color: "var(--success)" }}>Possível benefício</h4>
                  <p className="text-body">
                    Regras mais flexíveis podem reduzir barreiras e custos de contratação. Para determinadas empresas — principalmente negócios com margens pequenas — isso pode tornar uma contratação economicamente mais viável.
                  </p>
                </div>
                <div className={styles.bdCol}>
                  <h4 style={{ color: "var(--warning)" }}>Ponto difícil</h4>
                  <p className="text-body">
                    Quanto maior o espaço para negociação individual, maior pode ser a importância da diferença de poder entre trabalhador e empregador.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
                <h3 className="h3" style={{ color: "var(--brand-primary)" }}>Como facilitar a contratação sem transformar necessidade econômica em perda de poder de negociação?</h3>
              </div>
            </div>

          </div>
        </section>

        {/* Experiência 2: Redução da Jornada */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>Agora você é dono de um pequeno restaurante.</h2>
            
            <p className="text-body" style={{ marginTop: "24px" }}>
              O restaurante funciona seis dias por semana e possui poucos funcionários. Agora imagine que a jornada semanal desses funcionários seja reduzida sem redução salarial.
            </p>

            <h2 className={styles.hugeStatement} style={{ marginTop: "48px" }}>O restaurante continua aberto pelo mesmo tempo.</h2>
            <h2 className={styles.hugeSubtitle}>Quem cobre as horas que desapareceram da escala?</h2>

            <div className={styles.optionsGrid}>
              <div className={styles.optionCard}>
                <div className={styles.optionTitle}>Contratar</div>
                <p className="text-small">Outra pessoa cobre parte das horas.</p>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.optionTitle}>Reorganizar</div>
                <p className="text-small">A empresa altera turnos e processos.</p>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.optionTitle}>Produzir mais</div>
                <p className="text-small">A produtividade compensa parte da redução.</p>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.optionTitle}>Absorver</div>
                <p className="text-small">A empresa assume parte do aumento do custo por hora.</p>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.optionTitle}>Repensar a operação</div>
                <p className="text-small">Horários, automação ou quantidade de funcionários podem mudar.</p>
              </div>
            </div>

            <p className="text-body" style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>
              Nenhuma dessas respostas é automática. Empresas diferentes podem reagir de maneiras diferentes.
            </p>

            <div className={styles.proposalReveal}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial</span>
              <h3 className={styles.proposalTitle}>Lula propõe, entre outras medidas:</h3>
              <ul className={styles.proposalList}>
                <li>Fim da escala 6×1 e redução da jornada para 40 horas;</li>
                <li>Manutenção da política de valorização do salário mínimo;</li>
                <li>Regulamentação do trabalho por aplicativos;</li>
                <li>Investimentos em infraestrutura;</li>
                <li>Crédito e apoio a micro, pequenas e médias empresas.</li>
              </ul>

              <div className={styles.benefitsAndDifficulties}>
                <div className={styles.bdCol}>
                  <h4 style={{ color: "var(--success)" }}>Possível benefício</h4>
                  <p className="text-body">
                    Menos tempo trabalhando sem redução salarial pode significar mais tempo para descanso, família, estudo e vida pessoal.
                  </p>
                </div>
                <div className={styles.bdCol}>
                  <h4 style={{ color: "var(--warning)" }}>Ponto difícil</h4>
                  <p className="text-body">
                    Se a empresa continuar precisando das mesmas horas de operação, será necessário decidir como cobri-las. Para negócios pequenos, intensivos em mão de obra ou com margens estreitas, a adaptação pode ser mais difícil.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
                <h3 className="h3" style={{ color: "var(--brand-primary)" }}>Quem absorve o custo de trabalhar menos horas mantendo a renda?</h3>
              </div>
            </div>

          </div>
        </section>

        {/* Perspectivas (Interativo) */}
        <section className={styles.perspectivesSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
            <h2 className={styles.hugeStatement}>Depende de onde você está olhando.</h2>
            <p className="text-lead">
              Nenhuma medida afeta todo mundo da mesma maneira. Escolha uma perspectiva para ver quais mecanismos precisam ser considerados.
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
                <h3 className="h3" style={{ marginBottom: "24px" }}>Como {activePerspectiva.title.toLowerCase()}...</h3>
                {activePerspectiva.questions.map((q, i) => (
                  <div key={i} className={styles.perspectiveQuestion}>{q}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impostos */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
            <h2 className={styles.hugeStatement}>Se o governo arrecada menos, alguma coisa precisa acontecer do outro lado.</h2>
            
            <p className="text-body" style={{ marginTop: "24px" }}>
              Dependendo da política implementada, isso pode significar redução de despesas, mudança de prioridades, aumento de eficiência, alteração de outras receitas ou maior endividamento.
            </p>
            <p className="text-body" style={{ marginTop: "16px" }}>
              Por outro lado, impostos menores também podem aumentar a renda disponível, reduzir determinados custos empresariais ou estimular investimento e consumo em alguns contextos.
            </p>

            <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "48px" }}>
              Quanto você economiza de um lado — e o que muda do outro?
            </h3>
          </div>
        </section>

        {/* Caminho do dinheiro */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
            <h2 className="h2" style={{ marginBottom: "32px", textAlign: "center" }}>O caminho do investimento público</h2>

            <div className={styles.pathVisual}>
              <div className={styles.pathStep}>RECURSO PÚBLICO</div>
              <div className={styles.pathArrow}></div>
              <div className={styles.pathStep}>OBRA / INFRAESTRUTURA</div>
              <div className={styles.pathArrow}></div>
              <div className={styles.pathStep}>EXECUÇÃO</div>
              <div className={styles.pathArrow}></div>
              <div className={styles.pathStep}>ESTRADA / ENERGIA / LOGÍSTICA</div>
              <div className={styles.pathArrow}></div>
              <div className={styles.pathStep} style={{ background: "var(--success-soft)", borderColor: "var(--success)", color: "var(--success)" }}>
                POSSÍVEL REDUÇÃO DE GARGALOS
              </div>
              <div className={styles.pathArrow}></div>
              <div className={styles.pathStep} style={{ background: "var(--success-soft)", borderColor: "var(--success)", color: "var(--success)" }}>
                POSSÍVEIS GANHOS ECONÔMICOS
              </div>
            </div>

            <div style={{ background: "var(--warning-soft)", padding: "24px", borderRadius: "16px", marginTop: "32px" }}>
              <h4 style={{ color: "var(--warning)", marginBottom: "16px", fontWeight: "700" }}>Pontos de atenção no caminho:</h4>
              <ul className="text-body" style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>De onde vêm os recursos? Existe espaço fiscal?</li>
                <li>O projeto é bem escolhido? A obra é executada ou para no meio?</li>
                <li>Quanto tempo leva? Existe desperdício?</li>
                <li>O benefício econômico no final supera o custo inicial?</li>
              </ul>
            </div>

            <h3 className="h2" style={{ textAlign: "center", color: "var(--brand-primary)", marginTop: "48px" }}>
              Investir não produz resultado automaticamente.<br/>
              O caminho entre gastar e gerar benefício importa.
            </h3>
          </div>
        </section>

        {/* Sabemos e não sabemos */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <h2 className="h2">O que sabemos — e o que não sabemos</h2>
            
            <div className={styles.knowledgeGrid}>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagFact}`}>Sabemos</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  O que está efetivamente escrito nos programas oficiais de cada candidato no TSE.
                </p>
              </div>
              
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Sabemos o mecanismo</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  As relações econômicas diretas (ex: se custo sobe, ele precisa ser absorvido ou repassado).
                </p>
              </div>

              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Pode acontecer</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Cenários plausíveis decorrentes das respostas naturais de empresas, trabalhadores e consumidores.
                </p>
              </div>

              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagUncertainty}`}>Não sabemos ainda</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Resultados exatos, que dependem do texto final aprovado no Congresso, da implementação, do orçamento e do contexto econômico futuro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparação Final */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <h2 className="h2" style={{ textAlign: "center", marginBottom: "40px" }}>Os dois caminhos lado a lado</h2>
            
            <div className={styles.finalCompare}>
              <div className={styles.finalCandidateCard}>
                <div className={styles.finalCandidateHeader}>
                  <div className={styles.avatar}>L</div>
                  <div>
                    <h3 className="h3">Luiz Inácio Lula da Silva</h3>
                    <span className="text-label" style={{ color: "var(--text-muted)" }}>PT</span>
                  </div>
                </div>
                <p className="text-body" style={{ marginBottom: "24px" }}>
                  Busca maior proteção/redução da jornada e maior participação do Estado em determinados investimentos e políticas.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas que isso levanta:</h4>
                <ul className="text-body" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Adaptação das empresas</li>
                  <li>Custos e produtividade</li>
                  <li>Financiamento estatal</li>
                  <li>Qualidade da execução</li>
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
                <p className="text-body" style={{ marginBottom: "24px" }}>
                  Busca maior flexibilização, redução de determinados custos/impostos e menor participação estatal em algumas áreas.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas que isso levanta:</h4>
                <ul className="text-body" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Poder de negociação individual</li>
                  <li>Proteção trabalhista</li>
                  <li>Quais despesas seriam reduzidas</li>
                  <li>Distribuição dos benefícios e custos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fontes */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <h2 className="h3">De onde vem essa informação?</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Tribunal Superior Eleitoral (TSE)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Planos de Governo 2026 - Macrotema "Economia e Trabalho"</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagSource}`} style={{ marginBottom: 0 }}>Fonte Primária</span>
                  </div>
                </div>
                <Button href="https://www.tse.jus.br" variant="link">
                  Abrir fonte original <ExternalLink size={16} />
                </Button>
              </div>
              
              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Veículos de Imprensa</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Síntese comparativa (Folha e BBC News Brasil)</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto</span>
                  </div>
                </div>
                <Button href="https://www.bbc.com/portuguese" variant="link">
                  Abrir reportagem <ExternalLink size={16} />
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
