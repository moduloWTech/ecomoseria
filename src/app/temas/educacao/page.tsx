"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ExternalLink, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const PERSPECTIVAS = [
  {
    id: "pai",
    title: "Pai / Mãe",
    questions: [
      "Meu filho está aprendendo?",
      "Quem decide como ele deve aprender?"
    ]
  },
  {
    id: "aluno",
    title: "Aluno com dificuldade",
    questions: [
      "Alguém percebeu que fiquei para trás?",
      "Como recupero esse tempo?"
    ]
  },
  {
    id: "professor",
    title: "Professor",
    questions: [
      "Tenho formação, tempo e estrutura para executar essa ideia?",
      "Quem avalia o meu trabalho e o dos alunos?"
    ]
  },
  {
    id: "jovem",
    title: "Jovem",
    questions: [
      "Isso aumenta minhas oportunidades depois da escola?",
      "Consigo pagar e permanecer na universidade?"
    ]
  },
  {
    id: "familia",
    title: "Família sem creche",
    questions: [
      "Quanto tempo preciso esperar?",
      "A prefeitura ou o governo pode pagar uma vaga onde eu encontro uma?"
    ]
  },
  {
    id: "escola",
    title: "Escola vulnerável",
    questions: [
      "Receberei ajuda porque preciso ou menos recursos porque meu resultado é baixo?"
    ]
  },
  {
    id: "municipio",
    title: "Município pequeno",
    questions: [
      "Consigo contratar profissionais e manter essa estrutura?"
    ]
  },
  {
    id: "governo",
    title: "Governo",
    questions: [
      "Como transformar dinheiro em aprendizagem e medir se funcionou?"
    ]
  }
];

export default function Educacao() {
  const [activePerspectiva, setActivePerspectiva] = useState(PERSPECTIVAS[0]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Abertura */}
        <section className={styles.narrativeHero}>
          <div className="container">
            <span className={styles.eyebrow}>Educação</span>
            <h1 className={styles.narrativeTitle}>Seu filho está na escola. Mas ele está aprendendo?</h1>
            <p className={styles.narrativeSubtitle}>
              Matrícula é só o começo. Uma política educacional chega à vida real quando muda o que acontece dentro da sala, o tempo que o aluno permanece na escola, quem ensina, o que ele aprende e quais oportunidades aparecem depois.
            </p>
            <Button href="#alfabetizacao" variant="primary" style={{ display: 'inline-flex', width: 'auto' }}>
              Vamos entrar nessa escola
            </Button>
            
            <div className={styles.journeyVisual}>
              <div className={styles.journeyNode}>CRECHE<br/><span style={{fontSize: "12px", color: "var(--text-muted)"}}>Até 3 anos</span></div>
              <div className={styles.journeyArrow}><ArrowRight size={16}/></div>
              <div className={styles.journeyNode}>ALFABETIZAÇÃO<br/><span style={{fontSize: "12px", color: "var(--text-muted)"}}>6 a 7 anos</span></div>
              <div className={styles.journeyArrow}><ArrowRight size={16}/></div>
              <div className={styles.journeyNode}>FUNDAMENTAL<br/><span style={{fontSize: "12px", color: "var(--text-muted)"}}>Até 14 anos</span></div>
              <div className={styles.journeyArrow}><ArrowRight size={16}/></div>
              <div className={styles.journeyNode}>ENSINO MÉDIO<br/><span style={{fontSize: "12px", color: "var(--text-muted)"}}>Até 17 anos</span></div>
              <div className={styles.journeyArrow}><ArrowRight size={16}/></div>
              <div className={styles.journeyNode}>TÉCNICO / UNI.<br/><span style={{fontSize: "12px", color: "var(--text-muted)"}}>Jovem adulto</span></div>
              <div className={styles.journeyArrow}><ArrowRight size={16}/></div>
              <div className={styles.journeyNode} style={{color: "var(--success)"}}>TRABALHO</div>
            </div>
          </div>
        </section>

        {/* 2. Alfabetização (Flávio) */}
        <section id="alfabetizacao" className={styles.scenarioSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>Seu filho frequenta a escola.</h2>
            <h2 className={styles.hugeSubtitle}>Mas chega aos primeiros anos com dificuldade para ler.</h2>
            
            <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "48px" }}>O que uma decisão do presidente muda aqui?</h3>

            <div className={styles.flowDiagram} style={{ justifyContent: "center", marginTop: "32px", fontSize: "12px" }}>
              <div className={styles.flowNode} style={{ padding: "8px 12px" }}>POLÍTICA NACIONAL</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px" }}>ESTADO / MUNICÍPIO</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px" }}>ESCOLA</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px" }}>PROFESSOR</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px" }}>SALA</div>
              <div className={styles.flowArrow}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ padding: "8px 12px", background: "var(--brand-primary)", color: "white" }}>CRIANÇA</div>
            </div>

            <p className="text-body" style={{ marginTop: "24px", textAlign: "center" }}>
              O governo federal financia, induz políticas, estabelece diretrizes e avaliações, mas a aprendizagem depende também das redes e da implementação local. <strong>Uma decisão em Brasília precisa atravessar todo esse caminho antes de chegar à criança.</strong>
            </p>

            <div className={styles.proposalReveal}>
              <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Flávio Bolsonaro</span>
              <p className="text-body" style={{ marginTop: "8px" }}>
                Flávio propõe a adoção nacional do <strong>método fônico</strong> de alfabetização. Na prática, é um método que enfatiza a relação direta entre letras e sons para desenvolver a decodificação das palavras.
              </p>

              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "24px" }}>E se a escola ou o município já trabalhar com outra combinação de métodos?</h3>
              
              <div className={styles.splitCompare} style={{ marginTop: "24px" }}>
                <div>
                  <h4 style={{ color: "var(--success)", marginBottom: "8px", fontSize: "16px" }}>Possível lógica:</h4>
                  <ul className="text-small" style={{ paddingLeft: "20px" }}>
                    <li>Maior padronização no país;</li>
                    <li>Orientação muito clara aos professores;</li>
                    <li>Foco total na alfabetização básica.</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: "var(--warning)", marginBottom: "8px", fontSize: "16px" }}>Pontos de atenção:</h4>
                  <ul className="text-small" style={{ paddingLeft: "20px" }}>
                    <li>Custo e tempo da formação docente;</li>
                    <li>Adaptação de todos os materiais locais;</li>
                    <li>Diferença entre estabelecer um método e garantir que a aprendizagem aconteça.</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: "32px", borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
                <h3 className="h3" style={{ color: "var(--brand-primary)" }}>Quem deve decidir como uma criança aprende a ler: governo federal, rede de ensino ou o professor na sala?</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Recomposição (Lula) & 4. Tutoria (Flávio) */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
            
            <h2 className={styles.hugeStatement}>O aluno passou de ano.</h2>
            <h2 className={styles.hugeSubtitle}>Mas parte do que deveria ter aprendido ficou para trás.</h2>
            
            <p className="text-body" style={{ marginTop: "32px" }}>
              As campanhas desenharam duas estratégias diferentes para tratar a dificuldade dentro da escola:
            </p>

            <div className={styles.splitCompare} style={{ marginTop: "32px" }}>
              {/* Lula */}
              <div className={styles.splitCard}>
                <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Lula</span>
                <h3 className="h4" style={{ marginBottom: "16px" }}>Recomposição da aprendizagem</h3>
                <p className="text-body" style={{ marginBottom: "16px" }}>
                  Lula propõe políticas de recomposição e aceleração da aprendizagem (especialmente no Fundamental II e Médio).
                </p>
                <div className={styles.flowDiagram} style={{ gap: "8px", justifyContent: "flex-start", marginBottom: "16px" }}>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>IDENTIFICAR LACUNA</div>
                  <div className={styles.flowArrow}><ArrowRight size={12}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>REFORÇO / APOIO</div>
                  <div className={styles.flowArrow}><ArrowRight size={12}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>RECUPERAR</div>
                </div>
                <h4 style={{ color: "var(--warning)", fontSize: "14px", textTransform: "uppercase" }}>Dificuldades:</h4>
                <ul className="text-small" style={{ paddingLeft: "16px" }}>
                  <li>Disponibilizar professor e tempo extra;</li>
                  <li>Conciliar recuperação com o conteúdo novo;</li>
                  <li>Financiar isso em redes diferentes.</li>
                </ul>
                <p className="text-small" style={{ fontWeight: "bold", marginTop: "16px", color: "var(--brand-primary)" }}>Como recuperar o que ficou para trás sem atrasar o aluno ainda mais?</p>
              </div>

              {/* Flávio */}
              <div className={styles.splitCard}>
                <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Flávio</span>
                <h3 className="h4" style={{ marginBottom: "16px" }}>Aluno ensinando aluno</h3>
                <p className="text-body" style={{ marginBottom: "16px" }}>
                  Flávio propõe remunerar estudantes com bom desempenho para oferecer tutoria/reforço a colegas.
                </p>
                <div className={styles.flowDiagram} style={{ gap: "8px", justifyContent: "flex-start", marginBottom: "16px" }}>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>ALUNO EXCELENTE</div>
                  <div className={styles.flowArrow}><ArrowRight size={12}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px", color: "var(--success)", borderColor: "var(--success)" }}>PAGO PARA TUTORAR</div>
                  <div className={styles.flowArrow}><ArrowRight size={12}/></div>
                  <div className={styles.flowNode} style={{ fontSize: "10px", padding: "6px" }}>ALUNO DEFASADO</div>
                </div>
                <h4 style={{ color: "var(--warning)", fontSize: "14px", textTransform: "uppercase" }}>Dificuldades:</h4>
                <ul className="text-small" style={{ paddingLeft: "16px" }}>
                  <li>Quem garante a qualidade e seleciona os alunos?</li>
                  <li>Isso substitui o apoio de um professor formado?</li>
                  <li>Funciona para todas as matérias?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Tempo Integral & 6. Cívico-militar */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Estrutura e Rotina</span>
              <h2 className={styles.hugeStatement}>Seu filho sai da escola ao meio-dia.</h2>
              <h2 className={styles.hugeSubtitle}>E se permanecesse até o fim da tarde?</h2>
              
              <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "48px", marginBottom: "24px" }}>
                Mais horas significam automaticamente mais aprendizagem?
              </h3>
              
              <div className={styles.equationVisual}>
                <span>MAIS TEMPO</span>
                <span className={styles.eqOperator}>+</span>
                <span>PROFESSORES</span>
                <span className={styles.eqOperator}>+</span>
                <span>ESPAÇO</span>
                <span className={styles.eqOperator}>+</span>
                <span>ALIMENTAÇÃO</span>
                <span className={styles.eqOperator}>=</span>
                <span className={styles.eqResult}>MAIS OPORTUNIDADES</span>
              </div>
              
              <div className={styles.equationVisual}>
                <span>MAIS TEMPO</span>
                <span className={styles.eqOperator}>-</span>
                <span>ESTRUTURA BÁSICA</span>
                <span className={styles.eqOperator}>=</span>
                <span className={`${styles.eqResult} ${styles.negative}`}>NÃO É RESULTADO GARANTIDO</span>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                Lula propõe acelerar a expansão do tempo integral (com Fundeb e Novo PAC). Flávio também apoia a modalidade. A pergunta que define se a escola funcionará é: há espaço físico, refeitório, professores contratados e financiamento permanente no município?
              </p>
            </div>

            {/* Cívico-militar */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className={styles.hugeStatement}>Amanhã a escola do seu filho muda de modelo.</h2>
              <h2 className={styles.hugeSubtitle}>O que muda quando profissionais militares passam a participar da organização escolar?</h2>
              
              <p className="text-body" style={{ marginTop: "32px" }}>
                Flávio propõe ampliar as escolas cívico-militares. Os defensores argumentam que a inserção militar traz disciplina, organização, um ambiente mais controlado e maior participação das famílias.
              </p>
              
              <div className={styles.proposalReveal} style={{ backgroundColor: "var(--warning-soft)", color: "var(--warning)" }}>
                <h3 className="h3" style={{ marginBottom: "16px" }}>As perguntas da implementação:</h3>
                <ul className="text-body" style={{ paddingLeft: "24px" }}>
                  <li>Melhora a aprendizagem, ou o foco é principalmente ordem e disciplina?</li>
                  <li>Qual o custo adicional para pagar os profissionais militares?</li>
                  <li>Quais decisões são exclusivas dos educadores (pedagógicas) e quais ficam com militares (disciplinares)?</li>
                </ul>
              </div>

              <h3 className="h2" style={{ color: "var(--brand-primary)", marginTop: "48px", textAlign: "center" }}>
                Uma escola mais disciplinada é necessariamente uma escola onde se aprende mais?
              </h3>
            </div>
          </div>
        </section>

        {/* 7. Dinheiro seguindo resultado & 8. Voucher */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            {/* Indicadores */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O Destino do Dinheiro</span>
              <h2 className={styles.hugeStatement}>Duas escolas recebem dinheiro público.</h2>
              <h2 className={styles.hugeSubtitle}>Uma melhora seus indicadores. Outra continua com resultados ruins. Quem deveria receber mais?</h2>
              
              <p className="text-body" style={{ marginTop: "32px" }}>
                Flávio propõe que a distribuição de recursos seja mais baseada em metas e indicadores educacionais. A lógica é recompensar bons resultados para criar incentivos para melhorar a gestão.
              </p>

              <div style={{ padding: "24px", borderLeft: "4px solid var(--accent)", backgroundColor: "var(--accent-soft)", marginTop: "24px" }}>
                <p className="text-lead" style={{ fontWeight: 600 }}>
                  O conflito real: Uma escola com resultado pior pode atender justamente os estudantes mais vulneráveis — e ser a que mais precisa de dinheiro extra para conseguir reagir. Você recompensa quem melhorou ou ajuda mais quem está com maior dificuldade?
                </p>
                <p className="text-small" style={{ color: "var(--text-muted)", marginTop: "16px" }}>*Mecanismos que relacionam repasses a resultados já existem parcialmente no financiamento educacional, como no ICMS Educacional em alguns estados e nas regras atuais do Fundeb.</p>
              </div>
            </div>

            {/* Voucher */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className="h2" style={{ marginBottom: "16px" }}>Você precisa trabalhar. Seu filho precisa de creche. A prefeitura não tem vaga.</h2>
              <h2 className="h3" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>Do outro lado da rua existe uma creche particular com vaga.</h2>
              
              <h3 className="h1" style={{ color: "var(--brand-primary)" }}>O governo deveria pagar essa vaga?</h3>

              <div className={styles.flowDiagram} style={{ marginTop: "32px", gap: "8px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>FAMÍLIA SEM VAGA PÚBLICA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>RECURSO PÚBLICO (VOUCHER)</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>VAGA PRIVADA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)", borderColor: "var(--success)" }}>CRIANÇA ATENDIDA</div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                Flávio propõe o uso de vagas privadas/vouchers para atender à demanda não suprida (como em creches). Isso atende a família rapidamente, sem a necessidade de esperar anos pela construção de um prédio público.
              </p>

              <div className={styles.splitCompare}>
                <div>
                  <h4 style={{ color: "var(--warning)", marginBottom: "8px" }}>Onde fica difícil:</h4>
                  <ul className="text-small" style={{ paddingLeft: "20px" }}>
                    <li>Existe creche privada sobrando nas periferias e interiores remotos?</li>
                    <li>Como fiscalizar a qualidade se o parceiro for muito pequeno?</li>
                    <li>Isso drena investimento que construiria capacidade pública permanente?</li>
                    <li>Como evitar que as creches escolham apenas alunos fáceis e rejeitem casos complexos?</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 9. Ensino Técnico & 10. Universidade */}
        <section className={styles.scenarioSection}>
          <div className="container editorial-content">
            
            {/* Ensino Técnico */}
            <div style={{ marginBottom: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className={styles.hugeStatement}>Você termina o ensino médio.</h2>
              <h2 className={styles.hugeSubtitle}>O que você sabe fazer que alguém está disposto a contratar?</h2>

              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "32px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>ESCOLA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "var(--brand-soft)", borderColor: "var(--brand-primary)" }}>FORMAÇÃO TÉCNICA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>COMPETÊNCIA REAL</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)", borderColor: "var(--success)" }}>EMPREGO</div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                Ambos os programas defendem a expansão profissionalizante. <strong>Lula</strong> aposta nos Institutos Federais, ampliando acesso público nas periferias. <strong>Flávio</strong> propõe uma aproximação direta com o setor produtivo e economia digital/IA.
              </p>
              
              <h3 className="h3" style={{ color: "var(--warning)", marginTop: "24px" }}>
                Criar uma vaga em um curso técnico basta se ela não conversar com o trabalho que realmente existe ao redor do aluno?
              </h3>
            </div>

            {/* Universidade */}
            <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagScenario}`}>Cenário Explicativo</span>
              <h2 className={styles.hugeStatement}>Você passou na universidade.</h2>
              <h2 className={styles.hugeSubtitle}>Mas precisa pagar transporte, alimentação e talvez moradia durante anos. Conseguir entrar significa conseguir se formar?</h2>

              <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "32px", overflowX: "auto", flexWrap: "nowrap" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>VAGA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>MATRÍCULA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "var(--warning-soft)", borderColor: "var(--warning)" }}>MORADIA E TRANSPORTE</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)" }}>PERMANÊNCIA E DIPLOMA</div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                <strong>Lula</strong> propõe a expansão e interiorização do sistema público superior, atrelada a políticas de assistência e permanência estudantil. As perguntas clássicas persistem: de onde vem o financiamento? Há professores suficientes para os campi novos? E o auxílio chega a tempo para quem precisa?
              </p>
            </div>

          </div>
        </section>

        {/* 11. Financiamento Universitário (Flávio) & MCTI */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container editorial-content">
            
            <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial — Flávio Bolsonaro</span>
            <h2 className={styles.hugeStatement}>Você estudou com financiamento.</h2>
            <h2 className={styles.hugeSubtitle}>Formou-se, mas ainda ganha pouco. Quanto deveria pagar?</h2>
            
            <p className="text-body" style={{ marginTop: "32px" }}>
              Flávio propõe substituir o atual modelo de financiamento (como o FIES) por um <strong>Empréstimo Contingente à Renda</strong>. A lógica: se sua renda futura for muito baixa, a parcela será muito baixa (ou nula). Se for alta, a parcela aumenta. O pagamento acompanha a sua real capacidade.
            </p>

            <h3 className="h4" style={{ marginTop: "24px", color: "var(--warning)" }}>Pontos cegos do desenho (Incertezas):</h3>
            <ul className="text-small" style={{ paddingLeft: "20px" }}>
              <li>Qual o percentual descontado da renda?</li>
              <li>Por quantos anos a pessoa fica devendo?</li>
              <li>Qual o custo inicial de transição suportado pelo Estado?</li>
            </ul>

            <div style={{ marginTop: "80px", borderTop: "1px solid var(--border)", paddingTop: "80px" }}>
              <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>Pesquisa e Produtividade</span>
              <h2 className="h2" style={{ marginBottom: "24px" }}>Uma pesquisa feita na universidade deve chegar mais rápido às empresas?</h2>
              
              <div className={styles.flowDiagram} style={{ gap: "8px" }}>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>UNIVERSIDADE</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px" }}>PESQUISA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "var(--brand-soft)", borderColor: "var(--brand-primary)" }}>EMPRESA</div>
                <div className={styles.flowArrow}><ArrowRight size={16}/></div>
                <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", color: "var(--success)" }}>PRODUTO/EMPREGO</div>
              </div>

              <p className="text-body" style={{ marginTop: "24px" }}>
                Flávio propõe transferir a gestão das Universidades Federais (do MEC) para o Ministério da Ciência, Tecnologia e Inovação (MCTI), argumentando que isso aproximará a pesquisa do setor produtivo.
              </p>
              <p className="text-body" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
                <em>Questão: O ensino de base e a extensão mudariam de prioridade? Trocar de ministério realmente muda financiamento, pesquisa básica e transferência tecnológica?</em>
              </p>
            </div>
          </div>
        </section>

        {/* 13. O Dinheiro da Educação */}
        <section className={styles.scenarioSection} style={{ backgroundColor: "var(--brand-primary)", color: "white" }}>
          <div className="container editorial-content" style={{ textAlign: "center" }}>
            <span className={`${styles.editorialTag} ${styles.tagAttention}`} style={{ background: "white", color: "var(--brand-primary)" }}>A Realidade Fiscal</span>
            <h2 className={styles.hugeStatement} style={{ color: "white" }}>Toda promessa chega à mesma pergunta:</h2>
            <h2 className={styles.hugeStatement} style={{ color: "var(--accent)", fontSize: "clamp(48px, 8vw, 96px)" }}>Quem paga?</h2>
            
            <p className="text-lead" style={{ marginTop: "32px", color: "rgba(255,255,255,0.9)" }}>
              Análises de pesquisadores apontam lacunas importantes sobre financiamento nos programas dos candidatos.
            </p>

            <div className={styles.flowDiagram} style={{ gap: "8px", marginTop: "32px", justifyContent: "center" }}>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>MAIS ESCOLA</div>
              <div className={styles.flowArrow} style={{ color: "white" }}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>PROFESSORES</div>
              <div className={styles.flowArrow} style={{ color: "white" }}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "12px", padding: "8px", background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.3)" }}>ALIMENTAÇÃO E MANUTENÇÃO</div>
              <div className={styles.flowArrow} style={{ color: "white" }}><ArrowRight size={16}/></div>
              <div className={styles.flowNode} style={{ fontSize: "14px", padding: "8px", background: "var(--accent)", color: "white", borderColor: "var(--accent)" }}>RECURSO PERMANENTE</div>
            </div>

            <h3 className="h2" style={{ marginTop: "64px", color: "var(--accent)" }}>Anunciar uma vaga é uma decisão.<br/>Mantê-la funcionando todos os anos é outra.</h3>
          </div>
        </section>

        {/* Perspectivas (Tabs) */}
        <section className={styles.perspectivesSection}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagMechanism}`}>O impacto no sistema</span>
            <h2 className={styles.hugeStatement}>A mesma política vista de lugares diferentes</h2>
            <p className="text-lead">
              A política muda dependendo da cadeira em que a pessoa está sentada.
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
                  Informação documentada de forma factual pelas fontes eleitorais e jornalísticas.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagProposal}`}>Proposta Oficial</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  O que consta textualmente nos programas. Uma intenção, não um resultado garantido.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagExisting}`}>Política já existente</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Bandeiras que representam, na verdade, continuidade ou expansão de dinâmicas do MEC atual.
                </p>
              </div>
              <div className={styles.knowledgeCard}>
                <span className={`${styles.editorialTag} ${styles.tagUncertainty}`}>Incerteza</span>
                <p className="text-body" style={{ marginTop: "8px" }}>
                  Onde faltam o desenho final, o orçamento, a regulamentação ou evidência pedagógica clara.
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
                  Foca no papel forte da indução estatal tradicional. Ênfase em recomposição de aprendizagem, tempo integral, formação docente, expansão dos Institutos Federais e ampliação/interiorização das universidades públicas com permanência estudantil.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas de execução:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Financiamento da expansão e sustentabilidade;</li>
                  <li>Aprendizagem real vs apenas tempo de escola;</li>
                  <li>Capacidade de gestão dos novos campi.</li>
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
                  Foca na descentralização e gestão por indicadores. Ênfase em método fônico, alunos tutores, escolas cívico-militares, uso de vouchers para preencher demanda não atendida (ex: creches), financiamento atrelado à renda futura e aproximação entre universidade, ciência (MCTI) e empresas.
                </p>
                <h4 className="text-small" style={{ color: "var(--text-secondary)", marginBottom: "12px", textTransform: "uppercase" }}>Perguntas de execução:</h4>
                <ul className="text-small" style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Risco de ampliar desigualdade entre escolas;</li>
                  <li>Fiscalização de parceiros privados (vouchers);</li>
                  <li>Descentralização pedagógica abrupta.</li>
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
                  <span className="text-body" style={{ fontWeight: 600 }}>Planos são fracos em metas e reciclam propostas</span>
                  <div style={{ marginTop: "8px" }}>
                    <span className={`${styles.editorialTag} ${styles.tagContext}`} style={{ marginBottom: 0 }}>Contexto Analítico e de Financiamento</span>
                  </div>
                </div>
                <Button href="https://www1.folha.uol.com.br/poder/2026/08/planos-de-lula-e-flavio-bolsonaro-para-educacao-sao-fracos-em-metas-e-reciclam-propostas.shtml" variant="link">
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
