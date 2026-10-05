"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PromisePath from "@/components/PromisePath";
import { ExternalLink, Building2, Users, Landmark, Scale, Coins, Map } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

const TEMAS = [
  { title: "Meu dinheiro", href: "/temas/dinheiro" },
  { title: "Meu trabalho", href: "/temas/trabalho" },
  { title: "Minha saúde", href: "/temas/saude" },
  { title: "Educação", href: "/temas/educacao" },
  { title: "Segurança", href: "/temas/seguranca" },
  { title: "Custo de vida", href: "/temas/custo-de-vida" },
  { title: "Campo e alimentos", href: "/temas/campo" },
  { title: "Serviços públicos", href: "/temas/estado" },
];

export default function EntendaAEleicao() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Eleição 2026 &middot; Segundo Turno</span>
            <h1 className={styles.heroTitle}>Não é só sobre escolher um presidente.</h1>
            <h2 className={styles.heroSubtitle} style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
              É sobre quais decisões o Brasil vai tomar nos próximos quatro anos — e quem terá poder para tomá-las.
            </h2>
            <p className={styles.heroSubtitle}>
              Lula e Flávio Bolsonaro chegam ao segundo turno com propostas diferentes para economia, Estado e políticas sociais. Mas nenhuma dessas escolhas acontece no vazio — nem depende apenas do presidente.
            </p>
            <div className={styles.heroCtas}>
              <Button href="#ponto-de-partida" variant="primary">Entender o que está em jogo</Button>
              <Button href="#temas" variant="secondary">Ir direto aos temas</Button>
            </div>
            <p className="text-small" style={{ marginTop: '16px', color: 'var(--text-muted)' }}>
              *Dados baseados na conjuntura real e nos planos de governo oficiais depositados no TSE.
            </p>
          </div>
        </section>

        {/* Starting Point */}
        <section id="ponto-de-partida" className={styles.section} style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container editorial-content">
            <span className={`${styles.editorialTag} ${styles.tagContext}`}>O Brasil em Movimento</span>
            <h2 className={styles.hugeStatement}>O próximo presidente não começa do zero.</h2>
            <p className="text-lead" style={{ marginTop: '24px' }}>
              Quem assumir em 2027 recebe um país que já tem contas, problemas, instituições e gastos obrigatórios em andamento. Não existe "folha em branco".
            </p>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <h3 className="text-label" style={{ color: 'var(--text-muted)' }}>PREÇOS (IBGE)</h3>
                <div className={styles.metricValue}>4,47%</div>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  IPCA-15 acumulado em 12 meses (Set/2026). <br/>
                  <em>Como manter o poder de compra sem criar novas pressões sobre os preços?</em>
                </p>
              </div>
              <div className={styles.metricCard}>
                <h3 className="text-label" style={{ color: 'var(--text-muted)' }}>CONTAS PÚBLICAS (Tesouro)</h3>
                <div className={styles.metricValue}>-R$ 13,6 bi</div>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Déficit primário mensal (Ago/2026). <br/>
                  <em>Quanto o governo consegue gastar, onde deve gastar e como financiar suas escolhas?</em>
                </p>
              </div>
              <div className={styles.metricCard}>
                <h3 className="text-label" style={{ color: 'var(--text-muted)' }}>SAÚDE (Min. Saúde)</h3>
                <div className={styles.metricValue}>+1 Milhão</div>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Procedimentos em carretas p/ suprir falta de especialistas. <br/>
                  <em>Como fazer o atendimento de alta complexidade existir na hora que a pessoa precisa?</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Turning Point (Escolhas) */}
        <section className={styles.section}>
          <div className="container editorial-content">
            <h2 className={styles.hugeStatement}>É aqui que a eleição começa.</h2>
            <p className="text-lead" style={{ marginTop: '24px' }}>
              Os candidatos não escolhem quais problemas existem. Eles escolhem prioridades, instrumentos e formas diferentes de tentar enfrentá-los. <br/>
              <strong>A eleição não decide apenas objetivos (todos querem educação e saúde). Decide caminhos — e caminhos têm consequências diferentes.</strong>
            </p>

            <div className={styles.splitGrid}>
              <div className={styles.splitCard}>
                <h3 className="h3" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>O papel do Estado</h3>
                <p className="text-body" style={{ marginBottom: '16px' }}>
                  <strong>Lula</strong> mantém papel relevante do Estado em investimentos (Novo PAC), políticas sociais, empresas públicas e coordenação ativa da economia.
                  <br/><br/>
                  <strong>Flávio</strong> enfatiza corte de despesas da estrutura, concessões/privatizações massivas e devolução do dinheiro à iniciativa privada via redução tributária.
                </p>
                <p className="text-small" style={{ color: 'var(--warning)', fontWeight: 600 }}>
                  Pergunta: Onde o Estado precisa estar presente e onde deve sair para deixar o mercado atuar?
                </p>
              </div>
              
              <div className={styles.splitCard}>
                <h3 className="h3" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>Dinheiro Público e Renda</h3>
                <p className="text-body" style={{ marginBottom: '16px' }}>
                  Os dois querem crescimento econômico e geração de renda. A diferença é se isso acontece impulsionado pelo consumo e obras estatais, ou pela redução da carga de impostos que atrai capital privado.
                </p>
                <p className="text-small" style={{ color: 'var(--warning)', fontWeight: 600 }}>
                  Pergunta: Quando alguém promete gastar mais (ou cobrar menos imposto), qual é o restante da equação? Quem paga a conta no final?
                </p>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '24px', background: 'var(--brand-soft)', borderRadius: '16px' }}>
              <h3 className="h3" style={{ marginBottom: '16px', color: 'var(--brand-primary)' }}>Eles discordam de muita coisa. Mas não de tudo.</h3>
              <p className="text-body">
                Os programas possuem convergências importantes. Ambos defendem, por exemplo, a digitalização e eficiência dos serviços públicos, investimentos em infraestrutura e estratégias de segurança. 
                <br/><br/>
                <em>Se os dois dizem querer resolver o mesmo problema, o método é o mesmo? Essa é a grande diferença na urna.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Institutions (NÃO) */}
        <section className={styles.sectionDark}>
          <div className="container editorial-content">
            <h2 className="h2" style={{ textAlign: 'center', marginBottom: '8px' }}>Mas o presidente pode fazer tudo isso sozinho?</h2>
            <div style={{ fontSize: '120px', fontWeight: 900, textAlign: 'center', lineHeight: 1, margin: '40px 0', color: 'var(--accent)' }}>NÃO.</div>
            
            <h2 className={styles.hugeSubtitle} style={{ textAlign: 'center' }}>
              O presidente tem muito poder. Mas governa dentro de um sistema.
            </h2>

            <div className={styles.systemGrid}>
              <div className={styles.systemNode}>
                <div className={styles.systemIcon}><Building2 size={28}/></div>
                <div className={styles.systemInfo}>
                  <h3>Presidente da República</h3>
                  <p>Executa o orçamento, nomeia ministros, comanda Forças Armadas e propõe leis. Mas não dita as regras sozinho.</p>
                </div>
              </div>

              <div className={styles.systemNode}>
                <div className={styles.systemIcon}><Users size={28}/></div>
                <div className={styles.systemInfo}>
                  <h3>Congresso (Câmara e Senado)</h3>
                  <p><strong>A decisão que já aconteceu.</strong> Em 05 de outubro, você elegeu 513 deputados e 54 senadores. O PL terá a maior bancada do Senado. O presidente precisará deles para aprovar leis, orçamentos e mudanças na Constituição.</p>
                </div>
              </div>

              <div className={styles.systemNode}>
                <div className={styles.systemIcon}><Scale size={28}/></div>
                <div className={styles.systemInfo}>
                  <h3>Supremo Tribunal Federal (STF)</h3>
                  <p>Não escreve programa econômico, mas julga se as leis e atos do presidente e do Congresso respeitam a Constituição. O presidente indica ministros, mas quem aprova é o Senado.</p>
                </div>
              </div>

              <div className={styles.systemNode}>
                <div className={styles.systemIcon}><Coins size={28}/></div>
                <div className={styles.systemInfo}>
                  <h3>Banco Central</h3>
                  <p>É uma instituição com autonomia legal. O presidente da República não escolhe a taxa Selic num canetada. É o Copom quem decide, mirando a meta de inflação.</p>
                </div>
              </div>

              <div className={styles.systemNode}>
                <div className={styles.systemIcon}><Map size={28}/></div>
                <div className={styles.systemInfo}>
                  <h3>Estados e Municípios</h3>
                  <p>Seu posto de saúde, a PM na sua rua e a escola do seu filho geralmente não são administrados pelo presidente. Uma promessa nacional frequentemente depende do prefeito ou do governador para acontecer fisicamente.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '80px' }}>
              <PromisePath />
            </div>

          </div>
        </section>

        {/* Transition to life */}
        <section id="temas" className={styles.section} style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container editorial-content" style={{ textAlign: 'center' }}>
            <h2 className={styles.hugeStatement}>Certo. Mas o que isso tem a ver comigo?</h2>
            <p className="text-lead" style={{ marginTop: '24px', maxWidth: '700px', margin: '24px auto' }}>
              Você não está escolhendo um resultado pronto para o futuro. Está escolhendo quem vai tentar construí-lo, dentro de todas essas condições, amarras e instituições.
              <br/><br/>
              <strong>É aqui que as grandes decisões deixam Brasília e chegam à sua vida. Comece pelo que afeta sua rotina:</strong>
            </p>

            <div className={styles.topicsGrid}>
              {TEMAS.map((tema, i) => (
                <Link key={i} href={tema.href} className={styles.topicCard}>
                  {tema.title}
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* Fontes */}
        <section className={styles.section}>
          <div className="container editorial-content">
            <h2 className="h3">De onde vem essa informação?</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Justiça Eleitoral e TSE</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Planos de Governo e Resultados 1º Turno (05/10)</span>
                </div>
                <Button href="https://www.tse.jus.br" variant="link">
                  Ver fontes <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Congresso Nacional (Câmara e Senado)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Composição eleita e regras institucionais</span>
                </div>
                <Button href="https://www12.senado.leg.br/noticias/videos/2026/10/senado-tera-nova-composicao-partidaria-em-2027-veja-como-ficam-as-bancadas" variant="link">
                  Bancada Projetada <ExternalLink size={16} />
                </Button>
              </div>

              <div className="card" style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="text-label" style={{ color: "var(--text-muted)", display: "block" }}>Órgãos Oficiais (IBGE, Tesouro, BC)</span>
                  <span className="text-body" style={{ fontWeight: 600 }}>Indicadores de partida (Set-Ago/2026)</span>
                </div>
                <Button href="https://www.tesourotransparente.gov.br/" variant="link">
                  Tesouro Transparente <ExternalLink size={16} />
                </Button>
              </div>
            </div>
            <p className="text-small" style={{ marginTop: '24px', color: 'var(--text-muted)' }}>Dados temporais verificados na conjutura do início de outubro de 2026.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
