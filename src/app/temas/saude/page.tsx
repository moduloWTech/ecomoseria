"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ExternalLink, ArrowRight, ArrowDown, User } from "lucide-react";
import styles from "./page.module.css";

const PERSPECTIVAS = [
  {
    id: "paciente",
    title: "Paciente na fila",
    questions: [
      "Quanto tempo até ser atendido?",
      "Vou conseguir continuar o tratamento?"
    ]
  },
  {
    id: "morador",
    title: "Morador do interior",
    questions: [
      "O especialista existe perto de mim?",
      "A estrutura local dá conta do meu caso?"
    ]
  },
  {
    id: "idoso",
    title: "Idoso/Doente crônico",
    questions: [
      "Vou precisar me deslocar todo mês?",
      "Meus exames de rotina estão acessíveis?"
    ]
  },
  {
    id: "profissional",
    title: "Profissional do SUS",
    questions: [
      "O sistema reduz a burocracia ou cria mais trabalho?",
      "Tenho a estrutura e a equipe de que preciso?"
    ]
  },
  {
    id: "municipio",
    title: "Município pequeno",
    questions: [
      "Tenho dinheiro e escala para manter esse serviço sozinho?",
      "A responsabilidade recai toda sobre a prefeitura?"
    ]
  },
  {
    id: "governo",
    title: "Governo",
    questions: [
      "É melhor construir capacidade, contratar atendimento disponível ou combinar os dois?",
      "Como equilibrar expansão e custos contínuos?"
    ]
  },
  {
    id: "rede_privada",
    title: "Rede privada / Santa Casa",
    questions: [
      "O valor pago cobre o custo real do atendimento?",
      "Temos garantia de previsibilidade nos contratos?"
    ]
  }
];

export default function Saude() {
  const [activePerspectiva, setActivePerspectiva] = useState(PERSPECTIVAS[0]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Abertura */}
        <section className={styles.narrativeHero}>
          <div className="container">
            <span className={styles.eyebrow}>Minha Saúde</span>
            <h1 className={styles.narrativeTitle}>Quando você precisar do SUS, o que pode ser diferente?</h1>
            <p className={styles.narrativeSubtitle}>
              Na saúde, uma promessa só vira resultado quando existe profissional, estrutura, dinheiro, organização e atendimento disponível onde você está.
            </p>
            <Button href="#jornada" variant="primary" style={{ display: 'inline-flex', width: 'auto' }}>
              Vamos acompanhar um paciente
            </Button>
          </div>
        </section>

        {/* Experiência: A consulta foi só o começo */}
        <section id="jornada" className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>Você está com uma dor que não passa.</h2>
            
            <div className={styles.flowDiagram} style={{ flexWrap: "wrap", justifyContent: "center" }}>
              <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px 12px" }}>UNIDADE BÁSICA</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px 12px" }}>CONSULTA</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px 12px", background: "var(--brand-primary)", color: "white" }}>PEDIDO DE ESPECIALISTA</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px 12px", opacity: 0.5 }}>FILA</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px 12px", opacity: 0.3 }}>ATENDIMENTO</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px 12px", opacity: 0.2 }}>TRATAMENTO</div>
            </div>

            <h2 className={styles.hugeStatement} style={{ color: "var(--warning)", marginTop: "64px" }}>
              O médico pediu um especialista. E agora?
            </h2>

            <p className="text-body" style={{ marginTop: "24px" }}>
              A pessoa conseguiu entrar no SUS. O problema agora é continuar avançando.
            </p>
            
            <div className={styles.queueVisual}>
              <div className={styles.queueItem}><User size={24}/></div>
              <div className={styles.queueItem}><User size={24}/></div>
              <div className={styles.queueItem}><User size={24}/></div>
              <div className={`${styles.queueItem} ${styles.active}`}><User size={24}/></div>
              <div className={styles.queueItem}><User size={24}/></div>
              <div className={styles.queueItem}><User size={24}/></div>
              <div className={styles.queueItem}><User size={24}/></div>
            </div>

            <p className="text-body" style={{ marginTop: "24px" }}>
              Reduzir uma fila não depende apenas de “agendar melhor”. É preciso existir capacidade real de atendimento: especialistas, exames, hospitais, equipamentos, horários e coordenação entre os serviços.
            </p>
          </div>
        </section>

        {/* Duas perguntas diferentes */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Mecanismo</span>
            <h2 className={styles.hugeStatement}>Duas perguntas muito diferentes.</h2>

            <div className={styles.splitCompare}>
              <div>
                <h3 className="h3" style={{ color: "var(--brand-primary)", marginBottom: "16px" }}>"Onde existe vaga?"</h3>
                <p className="text-body" style={{ marginBottom: "16px" }}>
                  <strong>Problema:</strong> O atendimento existe, mas está mal organizado. Uma vaga pode estar ociosa em outro serviço e o sistema não encontrá-la rapidamente.
                </p>
                <p className="text-body" style={{ color: "var(--text-secondary)" }}>
                  <em>Possíveis respostas:</em> Integração de dados, regulação, prontuário conectado, agendamento por inteligência artificial.
                </p>
              </div>
              <div>
                <h3 className="h3" style={{ color: "var(--brand-primary)", marginBottom: "16px" }}>"Existe vaga?"</h3>
                <p className="text-body" style={{ marginBottom: "16px" }}>
                  <strong>Problema:</strong> Simplesmente não existe capacidade suficiente. Não há especialista, exame ou equipamento em número adequado.
                </p>
                <p className="text-body" style={{ color: "var(--text-secondary)" }}>
                  <em>Possíveis respostas:</em> Contratar e formar profissionais, ampliar capacidade pública ou comprar atendimento de clínicas privadas.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "48px", padding: "24px", borderLeft: "4px solid var(--accent)", backgroundColor: "var(--accent-soft)" }}>
              <p className="text-lead" style={{ fontWeight: 600, color: "var(--warning)" }}>
                Tecnologia pode ajudar a encontrar uma vaga. Ela não cria sozinha um médico, uma máquina de ressonância ou um leito.
              </p>
            </div>
          </div>
        </section>

        {/* Cenário: Máquina parada & Flávio Bolsonaro */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>O SUS tem uma fila.<br/>Uma clínica privada tem horário vazio.</h2>
            
            <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "32px", marginBottom: "32px" }}>
              Faz sentido o SUS pagar para usar esse horário?
            </h3>

            <div className={`${styles.flowDiagram} ${styles.vertical}`}>
              <div className={styles.flowNode} style={{ width: "100%", maxWidth: "400px" }}>PACIENTE NA FILA DO SUS</div>
              <div className={styles.flowArrow}><ArrowDown size={20}/></div>
              <div className={styles.flowNode} style={{ width: "100%", maxWidth: "400px", borderColor: "var(--success)", background: "var(--success-soft)", color: "var(--success)" }}>CAPACIDADE PRIVADA OCIOSA</div>
              <div className={styles.flowArrow}><ArrowDown size={20}/></div>
              <div className={styles.flowNode} style={{ width: "100%", maxWidth: "400px" }}>CONTRATO COM O SUS</div>
              <div className={styles.flowArrow}><ArrowDown size={20}/></div>
              <div className={styles.flowNode} style={{ width: "100%", maxWidth: "400px" }}>EXAME / CONSULTA REALIZADA</div>
            </div>

            <div className={styles.splitCompare} style={{ marginTop: "48px" }}>
              <div>
                <h4 style={{ color: "var(--success)", marginBottom: "12px" }}>Onde pode ajudar</h4>
                <ul className="text-body" style={{ paddingLeft: "20px" }}>
                  <li>Aproveitar estrutura que já existe.</li>
                  <li>Reduzir espera sem aguardar construção de nova unidade.</li>
                  <li>Ampliar temporariamente a oferta local.</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: "var(--warning)", marginBottom: "12px" }}>Onde fica difícil</h4>
                <ul className="text-body" style={{ paddingLeft: "20px" }}>
                  <li>Quanto o SUS pagará por isso?</li>
                  <li>Existe clínica privada justamente nas regiões mais carentes?</li>
                  <li>O dinheiro gasto não poderia ampliar a capacidade do próprio SUS?</li>
                </ul>
              </div>
            </div>

            {/* Proposta Flávio */}
            <div className={styles.proposalReveal}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta — Programa de Governo 2026</span>
              <h3 className={styles.proposalTitle}>Entre as propostas de Flávio Bolsonaro para saúde estão:</h3>
              <ul className={styles.proposalList}>
                <li>Uso de capacidade privada ociosa para serviços e exames;</li>
                <li>Prontuário eletrônico único vinculado ao CPF e integrado ao Gov.br;</li>
                <li>Inteligência artificial para agendar e identificar pacientes de risco;</li>
                <li>Correção e adequação da Tabela SUS;</li>
                <li>Ampliação de telessaúde e Estratégia Saúde da Família;</li>
                <li>Entrega domiciliar de medicamentos para crônicos e idosos.</li>
              </ul>

              <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
                <p className="text-body" style={{ marginBottom: "16px" }}>
                  <strong>A Lógica:</strong> Aproveitar capacidade já existente, melhorar coordenação e usar tecnologia para reduzir espera e aumentar eficiência.
                </p>
                <h3 className="h3" style={{ color: "var(--warning)" }}>Se parte da solução estiver fora da rede pública, como garantir preço, acesso, qualidade e capacidade justamente onde o paciente precisa?</h3>
              </div>
            </div>

          </div>
        </section>

        {/* Cenário: Aumentar Capacidade & Lula */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>E se, em vez de procurar uma vaga que já existe, aumentarmos a quantidade de profissionais do SUS?</h2>
            
            <div className={styles.flowDiagram}>
              <div className={styles.flowNode}>MAIS PROFISSIONAIS</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>MAIS CAPACIDADE</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode}>MAIS CONSULTAS</div>
              <div className={styles.flowArrow}><ArrowRight size={20}/></div>
              <div className={styles.flowNode} style={{ color: "var(--success)" }}>REDUÇÃO DA FILA</div>
            </div>

            <p className="text-body" style={{ marginTop: "48px" }}>
              Mas isso também possui dificuldades: formar especialistas leva muito tempo, os profissionais não estão distribuídos igualmente pelo país, contratar médicos não resolve a falta de aparelhos, e abrir novos serviços exige financiamento contínuo da prefeitura ou do estado.
            </p>

            <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "32px", marginBottom: "32px" }}>
              Ter mais médicos resolve se o exame seguinte continuar demorando meses?
            </h3>

            {/* Proposta Lula */}
            <div className={styles.proposalReveal}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Continuidade e Expansão de Políticas</span>
              <h3 className={styles.proposalTitle}>Entre os pontos defendidos pelo campo de Lula estão:</h3>
              <ul className={styles.proposalList}>
                <li>Expansão do Mais Médicos e fortalecimento da atenção primária;</li>
                <li>Ampliação de especialistas em regiões prioritárias (Mais Médicos Especialistas);</li>
                <li>Redução de filas de consultas, exames e procedimentos especializados;</li>
                <li>Expansão do Farmácia Popular e ampliação da telessaúde;</li>
                <li>Continuidade da digitalização do SUS;</li>
                <li>Fortalecimento de vacinação e ações de saúde mental/bucal.</li>
              </ul>

              <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
                <p className="text-body" style={{ marginBottom: "16px" }}>
                  <strong>A Lógica:</strong> Aumentar capacidade e fortalecer a rede pública, construindo estrutura especialmente onde existe escassez histórica de profissionais e atendimento.
                </p>
                <h3 className="h3" style={{ color: "var(--warning)" }}>Quanto tempo, dinheiro e estrutura são necessários para transformar expansão de programas em consulta disponível na ponta?</h3>
              </div>
            </div>

          </div>
        </section>

        {/* Convergência */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content" style={{ textAlign: "center" }}>
            <span className={`${styles.editorialTag} ${styles.tagFact}`}>Fato Verificado</span>
            <h2 className={styles.hugeStatement}>Nem tudo é "um quer e o outro não".</h2>
            <p className="text-lead" style={{ marginTop: "24px", maxWidth: "800px", margin: "24px auto" }}>
              Há convergências documentadas entre formuladores das duas candidaturas. Ambos falam em: digitalização, integração de dados, uso de tecnologia, redução de filas e fortalecimento da produção nacional de insumos.
            </p>
            <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "48px" }}>
              Se os dois prometem algo parecido, onde está a diferença?
            </h3>
            <p className="text-body" style={{ marginTop: "16px" }}>
              A diferença real pode estar na escala, na prioridade de financiamento, no equilíbrio entre usar capacidade própria do Estado vs. capacidade contratada da iniciativa privada, e principalmente na capacidade de execução.
            </p>
          </div>
        </section>

        {/* Tecnologias Específicas: Prontuário, Telemedicina, Medicamento */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            {/* Prontuário */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Tecnologia no SUS</span>
              <h2 className="h2">Seu médico sabe o que aconteceu antes?</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>
                Você fez um exame em uma unidade. Meses depois, chega a outro serviço. <strong>Seu histórico chega junto com você?</strong>
              </p>
              <div className={styles.flowDiagram} style={{ justifyContent: "flex-start", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>CONSULTA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>EXAME</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>RECEITA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>INTERNAÇÃO</div>
              </div>
              <p className="text-body" style={{ marginTop: "24px" }}>
                Um histórico conectado evita repetição de exames e melhora o cuidado. Onde fica difícil? Privacidade, segurança cibernética, integração entre sistemas completamente diferentes de prefeituras distintas.
              </p>
              <h4 className="h4" style={{ color: "var(--warning)", marginTop: "16px" }}>Quanto mais útil seu histórico se torna, mais importante fica decidir quem pode vê-lo?</h4>
            </div>

            {/* Telemedicina */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Tecnologia no SUS</span>
              <h2 className="h2">Consulta pela tela é atendimento?</h2>
              <p className="text-body" style={{ marginTop: "16px" }}>
                Você mora longe de um especialista.
              </p>
              <div className={styles.flowDiagram} style={{ justifyContent: "flex-start", marginTop: "24px" }}>
                <div className={styles.flowNode}>PACIENTE</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode}>UNIDADE LOCAL / CELULAR</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode}>ESPECIALISTA DISTANTE</div>
              </div>
              <p className="text-body" style={{ marginTop: "24px" }}>
                Pode ajudar quando a distância é barreira ou não exige exame físico. Não resolve sozinho quando falta equipamento, é preciso cirurgia ou o paciente não tem acesso à internet.
              </p>
              <h4 className="h4" style={{ color: "var(--warning)", marginTop: "16px" }}>A tecnologia aproxima o médico. Mas o que ainda precisa existir perto de você?</h4>
            </div>

            {/* Medicamentos */}
            <div>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O Tratamento</span>
              <h2 className="h2">Ter receita não significa ter tratamento.</h2>
              <div className={styles.flowDiagram} style={{ justifyContent: "flex-start", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>DIAGNÓSTICO</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>RECEITA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MEDICAMENTO</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--success)", color: "var(--success)" }}>USO CONTÍNUO</div>
              </div>
              <p className="text-body" style={{ marginTop: "24px" }}>
                O medicamento está disponível? O paciente consegue buscá-lo ou precisará de entrega domiciliar? Quem acompanha a evolução para saber se a dose está correta?
              </p>
            </div>

          </div>
        </section>

        {/* Dinheiro & Desfecho */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagAttention}`}>A Realidade Fiscal</span>
            <h2 className={styles.hugeStatement}>Tudo isso custa.</h2>
            
            <p className="text-body" style={{ marginTop: "24px" }}>
              Uma análise do IEPS (Instituto de Estudos para Políticas de Saúde) com a Umane concluiu que a grande maioria das propostas de saúde exige recursos adicionais e depende de pesada coordenação entre União, estados e municípios.
            </p>
            
            <div style={{ background: "var(--warning-soft)", padding: "24px", borderRadius: "16px", marginTop: "32px", borderLeft: "4px solid var(--warning)" }}>
              <p className="text-lead" style={{ color: "var(--warning)", fontWeight: 700 }}>
                Prometer atendimento é uma coisa. Financiar, coordenar e entregar atendimento todos os dias é outra.
              </p>
            </div>

            <h2 className={styles.hugeStatement} style={{ marginTop: "80px" }}>Você conseguiu a consulta. O sistema funcionou?</h2>
            
            <div className={styles.splitCompare} style={{ marginTop: "32px" }}>
              <div style={{ textAlign: "center", padding: "24px", border: "1px dashed var(--border)", borderRadius: "16px" }}>
                <h4 style={{ color: "var(--text-muted)", textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.05em", marginBottom: "8px" }}>Métrica Antiga</h4>
                <p className="text-lead" style={{ fontWeight: 700 }}>Procedimento Realizado</p>
                <span className="text-small" style={{ color: "var(--text-secondary)" }}>(O paciente foi visto por um médico)</span>
              </div>
              <div style={{ textAlign: "center", padding: "24px", border: "2px solid var(--success)", borderRadius: "16px", background: "var(--success-soft)" }}>
                <h4 style={{ color: "var(--success)", textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.05em", marginBottom: "8px" }}>Métrica Ideal</h4>
                <p className="text-lead" style={{ fontWeight: 700, color: "var(--success)" }}>Resultado para o Paciente</p>
                <span className="text-small" style={{ color: "var(--success)" }}>(O problema foi acompanhado e resolvido?)</span>
              </div>
            </div>
            <p className="text-body" style={{ marginTop: "24px", textAlign: "center" }}>
              Você foi atendido. <strong>Mas ficou melhor?</strong>
            </p>
          </div>
        </section>

        {/* Perspectivas (Tabs) */}
        <section className={styles.perspectivesSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O impacto no sistema</span>
            <h2 className={styles.hugeStatement}>Depende de onde você está olhando.</h2>
            <p className="text-lead">
              A mesma política pública muda de forma radical dependendo da cadeira em que a pessoa está sentada.
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
                <h3 className="h3" style={{ marginBottom: "24px" }}>Para: {activePerspectiva.title}</h3>
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
                  Informação documentada por fontes confiáveis (IEPS, Governo, etc).
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagExisting}`}>Política já existente</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Ações que já funcionam no SUS e o candidato propõe ampliar (ex: Mais Médicos).
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo / Mecanismo</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Como as filas, contratações e regulações operam na vida real.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagUncertainty}`}>Não sabemos ainda</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  O orçamento exato, adesão de profissionais, capacidade regional, e se a medida será executada até o fim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparação Final */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            <h2 className="h2" style={{ textAlign: "center", marginBottom: "40px" }}>Comparação Final</h2>
            
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
                  Foco na expansão e fortalecimento de políticas exclusivas do SUS: Mais Médicos Especialistas, atenção primária e redução direta de filas através de estrutura pública.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Questões para acompanhar:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Financiamento contínuo;</li>
                  <li>Velocidade dessa expansão;</li>
                  <li>Capacidade e distribuição regional.</li>
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
                  Foco em tecnologia e eficiência: digitalização, prontuário único, IA e o uso de capacidade ociosa na rede privada/Santas Casas para acelerar atendimentos.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Questões para acompanhar:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Contratação e fiscalização do privado;</li>
                  <li>Proteção de dados no prontuário;</li>
                  <li>Distribuição geográfica dessa rede privada.</li>
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
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Ministério da Saúde</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Mais Médicos Especialistas - SGTES</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagSource}`} style={{ marginBottom: 0 }}>Fonte Primária (Política Existente)</span>
                  </div>
                </div>
                <Button href="https://www.gov.br/saude/pt-br/composicao/sgtes/mais-medicos/especialistas" variant="link">
                  Abrir <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Folha de S.Paulo / IEPS</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Análise de verba extra e convergências (IEPS/Umane)</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto Analítico</span>
                  </div>
                </div>
                <Button href="https://www1.folha.uol.com.br" variant="link">
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
