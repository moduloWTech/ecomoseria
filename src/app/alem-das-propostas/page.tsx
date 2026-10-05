"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ArrowRight, Info, ExternalLink } from "lucide-react";
import { POLITICAL_CASES, CaseStatus, RelationType } from "@/data/politicalCases";
import styles from "./page.module.css";

const STATUS_LABELS: Record<CaseStatus, string> = {
  documented: "Fato Documentado",
  allegation: "Acusação",
  investigation: "Investigação em andamento",
  indictment: "Denúncia",
  defendant: "Réu",
  conviction: "Condenação",
  annulled: "Condenação Anulada",
  acquitted: "Absolvição",
  archived: "Arquivado",
  prescribed: "Prescrição",
  contested: "Contestado",
  misleading: "Enganoso",
  false: "Falso",
  "insufficient-evidence": "Sem evidência suficiente",
};

const RELATION_LABELS: Record<RelationType, string> = {
  candidate: "Diretamente Relacionado",
  administration: "Relacionado à Gestão",
  "party-ally": "Partido / Aliado",
  rumor: "Boato / Alegação",
};

const RELATION_STYLES: Record<RelationType, string> = {
  candidate: styles.tagCandidate,
  administration: styles.tagAdmin,
  "party-ally": styles.tagAlly,
  rumor: styles.tagRumor,
};

export default function AlemDasPropostas() {
  const [filter, setFilter] = useState<'todos' | 'lula' | 'flavio'>('todos');

  const filteredCases = POLITICAL_CASES.filter(c => {
    if (filter === 'todos') return true;
    return c.candidate === filter;
  });

  return (
    <>
      <Header />
      <main className={styles.page}>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Além das Propostas</span>
            <h1 className={styles.heroTitle}>Você já ouviu muita coisa sobre eles.</h1>
            <h1 className={styles.heroTitle} style={{ color: "var(--warning)", marginTop: "-16px" }}>Mas o que realmente aconteceu?</h1>

            <p className={styles.heroSubtitle}>
              Acusações, investigações e decisões judiciais mudam com o tempo. Aqui você acompanha os fatos, o estado atual de cada caso e as fontes originais — sem transformar acusação em culpa nem anulação em absolvição.
            </p>

            <div className={styles.heroCtas}>
              <Button href="#casos" variant="primary">Ver os casos</Button>
              <Button href="#termos" variant="secondary">Entender os termos</Button>
            </div>
          </div>
        </section>

        <div className="container">
          <div className={styles.editorialWarning}>
            <p className={styles.warningText}>
              <Info size={20} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '8px', color: 'var(--accent)' }} />
              <strong>Investigação não significa culpa. Acusação não significa condenação.</strong> Processos podem ser anulados, arquivados ou modificados por decisões posteriores. Por isso, mostramos a situação e a data da última verificação de cada caso.
            </p>
          </div>
        </div>

        {/* Educational: Parece a mesma coisa. Não é. */}
        <section id="termos" className={styles.educationalSection}>
          <div className="container">
            <h2 className={styles.eduTitle}>Parece a mesma coisa. Não é.</h2>

            <div className={styles.eduFlow}>
              <div className={styles.eduNode}>CITADO</div>
              <div className={styles.eduArrow}><ArrowRight size={16} /></div>
              <div className={styles.eduNode}>INVESTIGADO</div>
              <div className={styles.eduArrow}><ArrowRight size={16} /></div>
              <div className={styles.eduNode}>DENUNCIADO</div>
              <div className={styles.eduArrow}><ArrowRight size={16} /></div>
              <div className={styles.eduNode}>RÉU</div>
              <div className={styles.eduArrow}><ArrowRight size={16} /></div>
              <div className={styles.eduNode}>CONDENADO</div>
              <div className={styles.eduArrow}><ArrowRight size={16} /></div>
              <div className={styles.eduNode} style={{ borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' }}>TRÂNSITO EM JULGADO</div>
            </div>

            <p className="text-small" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
              Um nome falado em depoimento (Citado) não faz da pessoa investigada. Uma investigação não é uma denúncia. Ser réu não é ser condenado. E uma condenação só é definitiva após o trânsito em julgado.
            </p>

            <div className={styles.eduAltFlow}>
              <div className={styles.eduAltNode}>ARQUIVAMENTO</div>
              <div className={styles.eduAltNode}>REJEIÇÃO DA DENÚNCIA</div>
              <div className={styles.eduAltNode}>ABSOLVIÇÃO</div>
              <div className={styles.eduAltNode}>ANULAÇÃO</div>
              <div className={styles.eduAltNode}>PRESCRIÇÃO</div>
            </div>

            <p className="text-small" style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '16px' }}>
              No meio do caminho, decisões diferentes podem encerrar um caso por razões totalmente diferentes.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section id="casos" className={styles.filtersSection}>
          <div className="container">
            <div className={styles.filters}>
              <button className={styles.filterBtn} aria-pressed={filter === 'todos'} onClick={() => setFilter('todos')}>Todos os Casos</button>
              <button className={styles.filterBtn} aria-pressed={filter === 'lula'} onClick={() => setFilter('lula')}>Luiz Inácio Lula da Silva</button>
              <button className={styles.filterBtn} aria-pressed={filter === 'flavio'} onClick={() => setFilter('flavio')}>Flávio Bolsonaro</button>
            </div>
          </div>
        </section>

        {/* Cases Feed */}
        <section className={styles.casesGrid}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "900px", margin: "0 auto" }}>

              {filteredCases.map((c) => (
                <article key={c.id} className={styles.caseCard}>
                  <div className={styles.caseHeader}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      <span className={`${styles.statusBadge} ${styles[`status_${c.status}`] || styles.status_archived}`}>
                        {STATUS_LABELS[c.status]}
                      </span>
                      <span className={`${styles.editorialTag} ${RELATION_STYLES[c.relationType]} `} style={{ marginBottom: 0 }}>
                        {RELATION_LABELS[c.relationType]}
                      </span>
                    </div>

                    <h2 className={styles.caseTitle}>{c.title}</h2>

                    {c.heardOnline && (
                      <div className={styles.heardQuote}>
                        "Você pode ter ouvido: <strong>{c.heardOnline}</strong>"
                      </div>
                    )}
                  </div>

                  <div className={styles.caseBody}>
                    <div>
                      <h3 className={styles.caseSectionTitle}>O que aconteceu</h3>
                      <p className="text-body">{c.summary}</p>

                      {c.verifiedFacts && c.verifiedFacts.length > 0 && (
                        <>
                          <h3 className={styles.caseSectionTitle}>Fatos Verificados</h3>
                          <ul className="text-body" style={{ paddingLeft: '20px' }}>
                            {c.verifiedFacts.map((fact, idx) => <li key={idx} style={{ marginBottom: '8px' }}>{fact}</li>)}
                          </ul>
                        </>
                      )}

                      {c.legalMeaning && (
                        <>
                          <h3 className={styles.caseSectionTitle}>O que isso significa</h3>
                          <p className="text-body" style={{ color: 'var(--brand-primary)' }}>{c.legalMeaning}</p>
                        </>
                      )}

                      {c.doesNotMean && c.doesNotMean.length > 0 && (
                        <>
                          <h3 className={styles.caseSectionTitle} style={{ color: 'var(--warning)' }}>O que NÃO significa</h3>
                          <ul className="text-body" style={{ paddingLeft: '20px' }}>
                            {c.doesNotMean.map((fact, idx) => <li key={idx} style={{ marginBottom: '8px' }}>{fact}</li>)}
                          </ul>
                        </>
                      )}

                      {c.candidateResponse && (
                        <>
                          <h3 className={styles.caseSectionTitle}>O que diz {c.candidate === 'lula' ? 'Lula' : 'Flávio'}</h3>
                          <p className="text-body">{c.candidateResponse}</p>
                        </>
                      )}
                    </div>

                    <div>
                      {c.timeline && c.timeline.length > 0 && (
                        <div style={{ marginBottom: '24px' }}>
                          <h3 className={styles.caseSectionTitle}>Linha do Tempo</h3>
                          <div className={styles.timeline}>
                            {c.timeline.map((item, idx) => (
                              <div key={idx} className={styles.timelineItem}>
                                <div className={styles.timelineDate}>{item.date}</div>
                                <div className={styles.timelineLabel}>{item.label}</div>
                                <div className={styles.timelineDesc}>{item.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className={styles.sourcesBox}>
                        <h3 className={styles.caseSectionTitle}>Fontes</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {c.primarySources.map((s, idx) => (
                            <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" className="text-small" style={{ color: 'var(--brand-primary)', textDecoration: 'underline', display: 'flex', gap: '4px', alignItems: 'center' }}>
                              <ExternalLink size={12} /> {s.title}
                            </a>
                          ))}
                          {c.secondarySources.map((s, idx) => (
                            <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" className="text-small" style={{ color: 'var(--text-secondary)', textDecoration: 'underline', display: 'flex', gap: '4px', alignItems: 'center' }}>
                              <ExternalLink size={12} /> {s.title}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: '16px' }}>
                        <span className="text-small" style={{ color: 'var(--text-muted)' }}>
                          Status e data: <strong>{c.statusDate}</strong><br />
                          Última verificação: {c.lastReviewedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
