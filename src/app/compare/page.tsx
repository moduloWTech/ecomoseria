"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ExternalLink } from "lucide-react";
import styles from "./page.module.css";

const themes = ["Todos", "Trabalho", "Saúde", "Segurança", "Educação"];

const comparisonData = [
  {
    theme: "Trabalho",
    lula: [
      "Fim da escala 6x1 e redução da jornada para 40 horas.",
      "Regulamentação do trabalho por aplicativos.",
      "Novo ciclo de investimentos em infraestrutura."
    ],
    flavio: [
      "Maior espaço para o negociado sobre o legislado.",
      "Redução de impostos e revisão da reforma tributária.",
      "Programas para primeiro emprego e trabalhadores acima de 50 anos."
    ]
  },
  {
    theme: "Saúde",
    lula: [
      "Ampliar equipes multiprofissionais e fortalecer Mais Médicos.",
      "Reduzir filas de especialistas e consolidar prontuário único.",
      "Expandir Farmácia Popular com exames para doenças crônicas."
    ],
    flavio: [
      "Digitalização do SUS com agendamento apoiado por IA.",
      "Usar horários ociosos da rede privada para reduzir filas.",
      "Entrega de medicamentos em casa para idosos e pacientes crônicos."
    ]
  },
  {
    theme: "Segurança",
    lula: [
      "Ampliar integração pelo Sistema Único de Segurança Pública.",
      "Aumentar inteligência estatal e asfixia financeira do crime.",
      "Ampliar controle de armas e munições."
    ],
    flavio: [
      "Classificar grandes facções como narcoterroristas.",
      "Reduzir maioridade penal para 16 anos.",
      "Construir cinco presídios de segurança máxima."
    ]
  }
];

export default function Compare() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredData = activeFilter === "Todos" 
    ? comparisonData 
    : comparisonData.filter(d => d.theme === activeFilter);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <h1 className="h1">Veja as propostas lado a lado.</h1>
            <div className={styles.filters}>
              {themes.map(t => (
                <button 
                  key={t}
                  className={`${styles.filterBtn} ${activeFilter === t ? styles.filterBtnActive : ""}`}
                  onClick={() => setActiveFilter(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.compareTable}>
          <div className="container">
            <div className={styles.stickyHeader}>
              <div className={styles.candidateHeader}>
                <div className={styles.avatar}>L</div>
                <div>
                  <div className={styles.candidateName}>Lula</div>
                  <div className="text-label" style={{ color: "var(--text-muted)" }}>PT</div>
                </div>
              </div>
              <div className={styles.candidateHeader}>
                <div className={styles.avatar}>F</div>
                <div>
                  <div className={styles.candidateName}>Flávio Bolsonaro</div>
                  <div className="text-label" style={{ color: "var(--text-muted)" }}>PL</div>
                </div>
              </div>
            </div>

            {filteredData.map((data, idx) => (
              <div key={idx} className={styles.themeBlock}>
                <h2 className={`h3 ${styles.themeTitle}`}>{data.theme}</h2>
                <div className={styles.proposalRow}>
                  <div className={styles.proposalCard}>
                    <ul className={styles.proposalsList}>
                      {data.lula.map((item, i) => <li key={i} className="text-body">{item}</li>)}
                    </ul>
                    <Button href="https://www.tse.jus.br" variant="link" className="text-small">
                      Fonte original no TSE <ExternalLink size={14} />
                    </Button>
                  </div>
                  <div className={styles.proposalCard}>
                    <ul className={styles.proposalsList}>
                      {data.flavio.map((item, i) => <li key={i} className="text-body">{item}</li>)}
                    </ul>
                    <Button href="https://www.tse.jus.br" variant="link" className="text-small">
                      Fonte original no TSE <ExternalLink size={14} />
                    </Button>
                  </div>
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
