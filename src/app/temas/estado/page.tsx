"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PolicyRealityCheck from "@/components/PolicyRealityCheck";
import { ExternalLink, ArrowRight, ArrowDown } from "lucide-react";
import styles from "./page.module.css";

const PERSPECTIVAS = [
  {
    id: "contribuinte",
    title: "Contribuinte",
    questions: [
      "Estou pagando quanto e recebendo o quê?"
    ]
  },
  {
    id: "sus",
    title: "Usuário do SUS",
    questions: [
      "Existe atendimento de verdade quando eu preciso?"
    ]
  },
  {
    id: "empresario",
    title: "Empresário",
    questions: [
      "Quanto tempo e dinheiro eu gasto apenas para cumprir burocracia do Estado?"
    ]
  },
  {
    id: "servidor",
    title: "Servidor Público",
    questions: [
      "Tenho estrutura, tecnologia e número de pessoas suficiente para entregar o serviço?"
    ]
  },
  {
    id: "interior",
    title: "Morador do interior",
    questions: [
      "Esse serviço prometido na TV vai chegar onde eu moro?"
    ]
  },
  {
    id: "baixa_renda",
    title: "Pessoa de baixa renda",
    questions: [
      "Se o Estado reduzir sua atuação, eu consigo comprar esse serviço no mercado privado sozinho?"
    ]
  },
  {
    id: "governo",
    title: "Governo",
    questions: [
      "Qual serviço eu devo prestar diretamente? Qual devo contratar? Qual devo conceder e regular?"
    ]
  }
];

export default function EstadoServicos() {
  const [activePerspectiva, setActivePerspectiva] = useState(PERSPECTIVAS[0]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Abertura */}
        <section className={styles.narrativeHero}>
          <div className="container">
            <span className={styles.eyebrow}>Serviços Públicos</span>
            <h1 className={styles.narrativeTitle}>Você paga imposto. Para onde esse dinheiro vai?</h1>
            <p className={styles.narrativeSubtitle}>
              Antes de virar escola, hospital, estrada, segurança ou benefício, o dinheiro público atravessa orçamento, ministérios, governadores, prefeitos, contratos, servidores e decisões políticas.
            </p>
            <Button href="#siga" variant="primary" style={{ display: 'inline-flex', width: 'auto' }}>
              Vamos seguir esse dinheiro
            </Button>
            
            <div className={styles.flowDiagram} style={{ marginTop: "64px", opacity: 0.8 }}>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "var(--brand-primary)", color: "white" }}>SEU DINHEIRO</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>IMPOSTOS</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ORÇAMENTO</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>GOVERNO E CONTRATOS</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>SERVIÇO PÚBLICO</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--success)", color: "var(--success)" }}>SUA VIDA</div>
            </div>
            <p className="text-small" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              No caminho, podem aparecer: Prioridade da vez, Burocracia, Desperdício, Investimento de longo prazo, Fiscalização ou Resultado real.
            </p>
          </div>
        </section>

        {/* Orçamento 101 */}
        <section id="siga" className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            <h2 className={styles.hugeStatement}>Imagine R$ 100 entrando nos cofres do governo.</h2>
            <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "24px" }}>O governo pode simplesmente gastar os R$ 100 onde ele quiser?</h3>
            
            <p className="text-lead" style={{ fontWeight: 600, color: "var(--warning)", marginTop: "24px" }}>
              Não.
            </p>

            <div className={styles.flowDiagram} style={{ marginTop: "24px" }}>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ARRECADAÇÃO (R$ 100)</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", borderColor: "var(--warning)", color: "var(--warning)" }}>OBRIGAÇÕES (R$ 90+)</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PRIORIDADES</div>
              <div className={styles.flowArrow}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>INVESTIMENTOS</div>
            </div>

            <p className="text-body" style={{ marginTop: "24px" }}>
              A parte absoluta e esmagadora do orçamento público já possui dono definido pela Constituição e pelas leis: salários, previdência, transferências a estados/municípios, dívidas e mínimos obrigatórios (saúde/educação). Quando um candidato promete um novo gasto, ele está lutando por uma fração minúscula que sobra, ou precisará cortar alguém da fila das obrigações.
            </p>

            {/* "Cortar Gasto" Interativo */}
            <div style={{ marginTop: "64px", borderTop: "1px solid var(--border)", paddingTop: "64px", textAlign: "center" }}>
              <h2 className="h2">Um candidato diz: <em>"Vou cortar despesas"</em></h2>
              <p className="text-body" style={{ marginTop: "16px" }}>Qual gasto?</p>
              
              <div className={styles.cutChoices}>
                <span className={styles.cutChoice}>SERVIDOR?</span>
                <span className={styles.cutChoice}>MINISTÉRIO?</span>
                <span className={styles.cutChoice}>BENEFÍCIO?</span>
                <span className={styles.cutChoice}>OBRA?</span>
                <span className={styles.cutChoice}>SUBSÍDIO?</span>
                <span className={styles.cutChoice}>SAÚDE?</span>
                <span className={styles.cutChoice}>EDUCAÇÃO?</span>
              </div>
              
              <p className="text-lead" style={{ fontWeight: 600, color: "var(--brand-primary)", marginTop: "32px", maxWidth: "600px", margin: "32px auto" }}>
                "Cortar gasto" não explica sozinho o que muda na sua vida. É preciso saber exatamente qual gasto deixa de existir.
              </p>
            </div>
          </div>
        </section>

        {/* Flávio (Estado Menor) vs Lula (Investidor) */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            <div className={styles.splitCompare}>
              {/* Flávio */}
              <div className={styles.splitCard}>
                <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta — Flávio</span>
                <h3 className="h3" style={{ marginBottom: "16px" }}>O Estado Menor e Corte de Despesas</h3>
                <p className="text-small" style={{ marginBottom: "16px" }}>
                  Flávio propõe reduzir a estrutura administrativa (eliminar ministérios), cortar despesas para colocar num novo teto de gastos e ampliar privatizações/concessões, visando aliviar as contas para reduzir impostos.
                </p>
                <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px", alignItems: "flex-start" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>MENOS GASTO/ESTRUTURA</div>
                  <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>MENOR PRESSÃO NAS CONTAS</div>
                  <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px", color: "var(--success)", borderColor: "var(--success)" }}>ESPAÇO PARA REDUZIR TRIBUTOS OU DÍVIDA</div>
                </div>
                <h4 className="h4" style={{ marginTop: "24px", color: "var(--warning)" }}>Mas qual estrutura deixa de existir?</h4>
                <p className="text-small">
                  Funções desaparecem ou apenas migram de nome? A economia é permanente? O corte administrativo é suficiente para bater a meta fiscal trilionária do Brasil?
                </p>
              </div>

              {/* Lula */}
              <div className={styles.splitCard}>
                <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta — Lula</span>
                <h3 className="h3" style={{ marginBottom: "16px" }}>O Estado Investidor e Prestador</h3>
                <p className="text-small" style={{ marginBottom: "16px" }}>
                  Lula defende a manutenção do papel ativo do Estado em infraestrutura (Novo PAC), políticas sociais, e expansão de capacidades públicas, entendendo que o gasto público estimula o privado e cuida da base.
                </p>
                <div className={`${styles.flowDiagram} ${styles.vertical}`} style={{ margin: 0, gap: "8px", alignItems: "flex-start" }}>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px" }}>ARRECADAÇÃO</div>
                  <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px", borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>INVESTIMENTO PÚBLICO (PAC)</div>
                  <div className={styles.flowArrow}><ArrowDown size={14}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "12px", padding: "6px", color: "var(--success)", borderColor: "var(--success)" }}>GANHO SOCIAL / INFRAESTRUTURA</div>
                </div>
                <h4 className="h4" style={{ marginTop: "24px", color: "var(--warning)" }}>Gastar mais significa entregar mais?</h4>
                <p className="text-small">
                  Não automaticamente. Para virar resultado, o dinheiro precisa atravessar <em>Projeto, Licitação, Fiscalização, Entrega e Manutenção.</em> O orçamento existe para todas as etapas?
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Obra de R$ 100 Milhões & Privatização/Concessões */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            
            {/* Gasto vs Resultado */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className={styles.hugeStatement}>O governo anuncia uma obra de R$ 100 milhões.</h2>
              <h2 className={styles.hugeSubtitle}>Isso significa que a sociedade ganhou R$ 100 milhões?</h2>
              
              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "24px" }}>Não. GASTO ≠ RESULTADO.</h3>
              <p className="text-body" style={{ marginTop: "16px" }}>
                Uma obra pode gerar um benefício imenso para a sociedade, ou pode atrasar, ficar muito mais cara que o previsto, ser mal desenhada e nunca receber manutenção. 
                <br/><br/>
                A pergunta política adulta não é apenas "quanto foi gasto", mas sim <strong>"o que esse gasto resolveu de fato na vida da pessoa?"</strong>.
              </p>
            </div>

            {/* Privatização */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Gestão e Propriedade</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>Vender não faz o serviço desaparecer.</h2>
              <p className="text-body">Hoje uma empresa pertence ao Estado. Amanhã passa ao controle privado. O que muda para você?</p>

              <div className={styles.splitCompare} style={{ marginTop: "32px", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div className={styles.flowNode} style={{ borderColor: "var(--text-muted)", color: "var(--text-secondary)" }}>ESTADO PROPRIETÁRIO + REGULADOR</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", color: "var(--text-muted)" }}>
                  <ArrowRight size={32} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div className={styles.flowNode} style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>EMPRESA PRIVADA + ESTADO REGULADOR</div>
                </div>
              </div>

              <p className="text-body" style={{ marginTop: "32px" }}>
                Privatização (venda) ou Concessão (aluguel de longo prazo, como rodovias com pedágio) são fortes propostas de Flávio Bolsonaro, visando eficiência e dinheiro para o caixa.
                <br/><br/>
                O risco que precisa ser fiscalizado pelo <em>Estado Regulador</em>: Existe concorrência na área ou é um monopólio natural? Quem controla a tarifa? Como garantir atendimento em bairros periféricos que não dão lucro para a empresa privada?
              </p>
            </div>
            
          </div>
        </section>

        {/* Serviços Digitais e Identidade */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagConvergence}`}>Convergência Importante</span>
            <h2 className={styles.hugeStatement}>Você precisa emitir um documento.</h2>
            <p className="text-body" style={{ marginTop: "16px" }}>Ambos os candidatos defendem massiva digitalização de serviços públicos.</p>
            
            <div className={styles.digitalCompare}>
              <div className={styles.splitCard}>
                <h4 style={{ color: "var(--text-muted)", marginBottom: "16px" }}>ANTES</h4>
                <div className={styles.flowDiagram} style={{ gap: "8px" }}>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>DESLOCAMENTO</div><div className={styles.flowArrow}><ArrowRight size={12}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>FILA</div><div className={styles.flowArrow}><ArrowRight size={12}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>PAPEL</div><div className={styles.flowArrow}><ArrowRight size={12}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>ATENDIMENTO LENTO</div>
                </div>
              </div>
              <div className={styles.splitCard}>
                <h4 style={{ color: "var(--success)", marginBottom: "16px" }}>DEPOIS</h4>
                <div className={styles.flowDiagram} style={{ gap: "8px" }}>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>CELULAR / IDENTIDADE GOV</div><div className={styles.flowArrow}><ArrowRight size={12}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px", borderColor: "var(--success)", color: "var(--success)" }}>DOCUMENTO NA HORA</div>
                </div>
              </div>
            </div>

            <div className={styles.splitCompare} style={{ marginTop: "48px" }}>
              <div>
                <h3 className="h3" style={{ color: "var(--warning)" }}>Identidade Única (Flávio)</h3>
                <p className="text-small" style={{ marginTop: "8px" }}>
                  Ter tudo conectado (Saúde, Tributos, Benefícios) numa identidade digital única facilita a vida e combate fraudes. <strong>Mas quem pode acessar?</strong> Concentração de dados gigantesca atrai ataques cibernéticos e riscos enormes de privacidade.
                </p>
              </div>
              <div>
                <h3 className="h3" style={{ color: "var(--warning)" }}>O Processo (Lula e Flávio)</h3>
                <p className="text-small" style={{ marginTop: "8px" }}>
                  Digitalizar um processo que é inútil ou ruim resolve o processo? <strong>Não. Transforma papel em aplicativo, criando um processo ruim mais rápido.</strong> A digitalização real exige redesenhar a burocracia antes de escrever o código do App. E nunca esquecer: quem não tem internet (ou habilidade, como idosos) vai falar com quem?
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Servidor e Níveis Federativos */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            
            {/* Servidor */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Recursos Humanos</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>Para o orçamento, um servidor é despesa.<br/>Para quem precisa do serviço, ele é o médico, o professor ou o técnico.</h2>
              <p className="text-body">Quando reduzir pessoal significa eficiência — e quando significa apenas menos capacidade de atendimento?</p>
              <div style={{ padding: "24px", background: "var(--bg-secondary)", borderRadius: "16px", marginTop: "24px" }}>
                <ul className="text-body" style={{ paddingLeft: "20px" }}>
                  <li style={{ marginBottom: "16px" }}><strong>Corte sem redesenho:</strong> Significa menos pessoas correndo para fazer o mesmo serviço (Gera apagão de atendimento).</li>
                  <li style={{ marginBottom: "16px" }}><strong>Automação de processo:</strong> Significa menos necessidade de trabalho administrativo manual (Gera eficiência e permite remanejar o servidor para a "ponta").</li>
                  <li><strong>Mais servidores sem gestão:</strong> Significa mais despesa sem nenhuma garantia de melhoria no serviço final.</li>
                </ul>
              </div>
            </div>

            {/* União/Estado/Municipio */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px", marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>O Pacto Federativo</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>O presidente não administra tudo.</h2>
              
              <div className={styles.flowDiagram} style={{ justifyContent: "center", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>UNIÃO (PRESIDENTE)</div>
                <div style={{ margin: "0 16px" }}>↔</div>
                <div className={styles.flowNode} style={{ borderColor: "var(--text-primary)" }}>ESTADOS (GOVERNADORES)</div>
                <div style={{ margin: "0 16px" }}>↔</div>
                <div className={styles.flowNode} style={{ borderColor: "var(--text-secondary)" }}>MUNICÍPIOS (PREFEITOS)</div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                Seu posto de saúde é municipal. A escola fundamental pode ser da prefeitura ou do estado. Apenas parte das rodovias é federal. <strong>Uma promessa presidencial de campanha quase sempre depende de outro governante para chegar fisicamente até você.</strong>
              </p>
            </div>

            {/* Dinheiro Parado */}
            <div>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Execução Pública</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>O orçamento autorizou. Mas a obra não aconteceu.</h2>
              
              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ORÇAMENTO</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--warning)", borderColor: "var(--warning)" }}>DINHEIRO PARADO (Gargalo de Projeto/Licitação)</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", opacity: 0.5 }}>EXECUÇÃO</div>
                <div className={styles.flowArrow}><ArrowRight size={14}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", opacity: 0.5 }}>ENTREGA REAL</div>
              </div>
              <p className="text-body" style={{ marginTop: "24px" }}>
                A capacidade de <em>executar o gasto</em> (fazer a licitação sem fraude, aprovar licenciamento, acompanhar obra) é um gargalo imenso do Estado. <strong>Não basta prometer bilhões; é preciso ter a engenharia pública para tirar os bilhões do papel.</strong>
              </p>
            </div>

          </div>
        </section>

        {/* Impostos e Dívida (O Fechamento) */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--brand-primary)", color: "white" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagAttention}`} style={{ background: "white", color: "var(--brand-primary)" }}>As Contas Públicas</span>
            <h2 className={styles.hugeStatement} style={{ color: "white" }}>Você paga menos imposto. O que acontece com o serviço?</h2>
            
            <p className="text-body" style={{ marginTop: "24px", color: "rgba(255,255,255,0.9)" }}>
              Se você paga menos (Flávio Bolsonaro), o governo ou corta o gasto, ou ganha eficiência assombrosa, ou emite dívida. 
              <br/>Se você paga mais imposto (Lula/progressividade), o governo tem caixa, mas isso <strong>NÃO = MELHOR SERVIÇO AUTOMATICAMENTE</strong>.
            </p>

            <h3 className="h2" style={{ color: "var(--accent)", marginTop: "40px" }}>A Dívida Pública: O governo pode gastar mais do que arrecada?</h3>
            
            <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "24px", justifyContent: "flex-start" }}>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>RECEITA &lt; DESPESA</div>
              <div className={styles.flowArrow} style={{ color: "white" }}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "var(--warning)", borderColor: "var(--warning)" }}>FINANCIAMENTO</div>
              <div className={styles.flowArrow} style={{ color: "white" }}><ArrowRight size={14}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "var(--accent)", color: "white", borderColor: "var(--accent)" }}>DÍVIDA (E Juros)</div>
            </div>

            <p className="text-body" style={{ marginTop: "24px", color: "rgba(255,255,255,0.9)" }}>
              Dívida não é sempre ruim; países emitem dívida para financiar hospitais ou infraestruturas vitais. O perigo é a <em>trajetória insustentável</em>: quando a dívida sai de controle, os juros disparam, o governo gasta boa parte do que arrecada só para pagar juro ao banco, e não sobra nada para o serviço na sua rua.
            </p>
          </div>
        </section>

        {/* Componente Reutilizável de Teste */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <PolicyRealityCheck title="Antes de acreditar na promessa, faça o teste:" />
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
                  A maior fatia do orçamento brasileiro já está amarrada em regras de gastos obrigatórios da constituição. Promessa grande de despesa extra exige cortes cirúrgicos ou aumento real da receita.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagUncertainty}`}>Incertezas de Consequência</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  <strong>NUNCA transformar:</strong> Menos ministério em "Menos gasto garantido"; Privatização em "Serviço espetacular"; Mais servidor em "Atendimento incrível"; Digitalização em "Eficiência sem burocracia".
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
                  Defende o "Estado Ativo": usa a arrecadação para atuar fortemente em infraestrutura (PAC), políticas sociais e fortalecimento das capacidades públicas, entendendo que investir no serviço atrai o crescimento da economia.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas de execução:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>De onde vêm os recursos sem aumentar a dívida de forma insustentável?</li>
                  <li>O serviço melhora na ponta, ou apenas a despesa do governo incha?</li>
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
                  Defende o "Estado Menor": corte severo de despesas, limitação constitucional dos gastos, forte agenda de privatizações/concessões e digitalização massiva, transferindo a prestação de serviços para a iniciativa privada.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas de execução:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Quais despesas sociais vitais serão efetivamente cortadas para fechar a conta do teto?</li>
                  <li>As empresas privadas terão regulação suficiente para atender quem é pobre e não dá lucro?</li>
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
                  <span className="text-body" style={{ fontWeight: 600 }}>Planos de Flávio propõe tesourada; Financiamento das promessas</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto Analítico / Fiscal</span>
                  </div>
                </div>
                <Button href="https://www1.folha.uol.com.br/mercado/2026/08/programas-de-lula-e-flavio-fazem-promessas-sem-dizer-como-vao-bancar-gastos.shtml" variant="link">
                  Ler reportagem <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Portal da Transparência / Tesouro Nacional</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Dados Abertos sobre Execução Orçamentária</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Referência de Base Pública</span>
                  </div>
                </div>
                <Button href="https://portaldatransparencia.gov.br/" variant="link">
                  Acessar <ExternalLink size={16} />
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
