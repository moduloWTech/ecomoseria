"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Landmark, BookOpen, ShieldCheck, Newspaper } from "lucide-react";
import styles from "./page.module.css";

const SOURCES_DATA = [
  {
    category: "Fonte Primária Eleitoral",
    icon: Landmark,
    items: [
      {
        title: "Tribunal Superior Eleitoral (TSE)",
        type: "Instituição de Estado",
        description: "Base principal de todas as propostas do site. Utilizamos os Planos de Governo oficiais depositados pelos candidatos Luiz Inácio Lula da Silva e Flávio Bolsonaro, bem como resultados de apuração do 1º turno.",
        links: [
          { label: "Planos de Governo 2026", url: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/planos-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026" },
          { label: "Resultado e Segundo Turno", url: "https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/flavio-bolsonaro-e-lula-vao-disputar-o-2o-turno-para-a-presidencia-da-republica" }
        ]
      }
    ]
  },
  {
    category: "Órgãos de Estado e Indicadores",
    icon: BookOpen,
    items: [
      {
        title: "Tesouro Nacional e Banco Central",
        type: "Indicadores Econômicos",
        description: "Utilizados para os dados base da economia: Resultado primário, Dívida Pública e estimativas da inflação e Selic (Boletim Focus).",
        links: [
          { label: "Tesouro Transparente", url: "https://www.tesourotransparente.gov.br/" },
          { label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" },
          { label: "Boletim Focus", url: "https://www.bcb.gov.br/publicacoes/focus" }
        ]
      },
      {
        title: "IBGE e Conab",
        type: "Dados Demográficos e Agrícolas",
        description: "Fontes para números de inflação oficial (IPCA/IPCA-15), desemprego (PNAD Contínua), safra agrícola e preço de alimentos.",
        links: [
          { label: "Painel de Indicadores - IBGE", url: "https://www.ibge.gov.br/indicadores/indicadores-ipca.html" },
          { label: "Companhia Nacional de Abastecimento", url: "https://www.conab.gov.br/" }
        ]
      },
      {
        title: "Ministérios Federais",
        type: "Dados Administrativos",
        description: "Dados operacionais sobre Saúde (filas, procedimentos), Educação (IDEB, Censo Escolar), Trabalho e Segurança Pública (Sinesp).",
        links: [
          { label: "Ministério da Saúde", url: "https://www.gov.br/saude/pt-br" },
          { label: "Ministério da Educação / INEP", url: "https://www.gov.br/inep/pt-br" },
          { label: "Dados Sinesp (Segurança)", url: "https://www.gov.br/mj/pt-br/assuntos/sua-seguranca/seguranca-publica/sinesp-1" }
        ]
      },
      {
        title: "Congresso Nacional",
        type: "Legislativo",
        description: "Bancadas eleitas, andamento de Projetos de Lei (PLs) e Propostas de Emenda à Constituição (PECs) mencionadas nos temas de Segurança, Impostos e Estado.",
        links: [
          { label: "Câmara dos Deputados", url: "https://www.camara.leg.br/" },
          { label: "Senado Federal", url: "https://www12.senado.leg.br/" }
        ]
      }
    ]
  },
  {
    category: "Justiça e Checagem de Fatos",
    icon: ShieldCheck,
    items: [
      {
        title: "Supremo Tribunal Federal (STF)",
        type: "Poder Judiciário",
        description: "Utilizado na aba 'Além das Propostas' para verificação documental sobre o status real de investigações, condenações e anulações (Ex: Lava Jato, Inquérito Dark Horse, Rachadinha).",
        links: [
          { label: "Portal STF", url: "https://portal.stf.jus.br/" }
        ]
      },
      {
        title: "Aos Fatos",
        type: "Agência de Checagem",
        description: "Referência no combate à desinformação para diferenciar de forma clara anulações, absolvições e rumores espalhados durante a campanha.",
        links: [
          { label: "Aos Fatos", url: "https://www.aosfatos.org/" }
        ]
      }
    ]
  },
  {
    category: "Jornalismo Profissional",
    icon: Newspaper,
    items: [
      {
        title: "Folha de S.Paulo e Valor Econômico",
        type: "Imprensa Analítica",
        description: "Reportagens contextuais que detalham impactos fiscais, comparações de programas e histórico das pautas de ambos os candidatos.",
        links: [
          { label: "Folha de S.Paulo - Eleições", url: "https://www1.folha.uol.com.br/poder/eleicoes/" },
          { label: "Valor Econômico", url: "https://valor.globo.com/" }
        ]
      }
    ]
  }
];

export default function Fontes() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Transparência Editorial</span>
            <h1 className={styles.heroTitle}>De onde vêm as nossas informações?</h1>
            <p className={styles.heroSubtitle}>
              O <strong>E como seria...?</strong> não emite opiniões nem cria dados próprios. Nós simplificamos a compreensão de dados reais. Toda informação contida no site possui rastreabilidade até um documento oficial ou fonte jornalística de alta credibilidade.
            </p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            
            <div className={styles.disclaimerBox}>
              <p style={{ marginBottom: '12px' }}>
                <strong>Por que não linkamos vídeos de WhatsApp ou redes sociais dos candidatos como fontes de fatos?</strong>
              </p>
              <p>
                O que um candidato promete no palanque ou numa postagem pode mudar no dia seguinte. Por isso, a nossa régua de avaliação para o que eles <em>pretendem fazer</em> é exclusivamente o documento depositado sob validade jurídica no Tribunal Superior Eleitoral (o Plano de Governo) e as peças de acompanhamento orçamentário. Da mesma forma, acusações e boatos só são classificados após consulta aos andamentos de tribunais, diários oficiais ou agências certificadas de checagem.
              </p>
            </div>

            {SOURCES_DATA.map((group, index) => (
              <div key={index} className={styles.categoryGroup}>
                <h2 className={styles.categoryTitle}>{group.category}</h2>
                <div className={styles.sourcesGrid}>
                  
                  {group.items.map((item, i) => (
                    <div key={i} className={styles.sourceCard}>
                      <div className={styles.sourceHeader}>
                        <div className={styles.sourceIcon}>
                          <group.icon size={24} strokeWidth={2} />
                        </div>
                        <div className={styles.sourceInfo}>
                          <h3>{item.title}</h3>
                          <span className={styles.sourceType}>{item.type}</span>
                        </div>
                      </div>
                      
                      <p className={styles.sourceDesc}>
                        {item.description}
                      </p>
                      
                      <div className={styles.sourceLinks}>
                        {item.links.map((link, lIndex) => (
                          <a 
                            key={lIndex} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.linkItem}
                          >
                            <ExternalLink size={14} /> {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
