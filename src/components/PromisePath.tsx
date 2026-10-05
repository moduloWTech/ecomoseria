"use client";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import styles from "./PromisePath.module.css";

type PathType = "executivo" | "lei" | "pec" | "estado";

const PROMISES = [
  {
    id: "lei",
    label: "Criar uma nova regra penal (aumentar pena) ou tributária",
    type: "lei" as PathType,
    explanation: "O presidente não pode criar leis sozinho. Ele precisa enviar um projeto que deve ser aprovado pela Câmara e pelo Senado."
  },
  {
    id: "pec",
    label: "Mudar as regras da Constituição (ex: limite de idade, sistema de governo)",
    type: "pec" as PathType,
    explanation: "O presidente não altera a Constituição. É preciso uma PEC (Proposta de Emenda à Constituição), que exige 3/5 dos votos na Câmara e no Senado, em dois turnos."
  },
  {
    id: "estado",
    label: "Melhorar o policiamento na rua e prender ladrão de celular",
    type: "estado" as PathType,
    explanation: "A Polícia Militar e a Polícia Civil são comandadas pelos Governadores dos Estados. O Presidente pode mandar dinheiro ou Força Nacional, mas quem patrulha é o Estado."
  },
  {
    id: "executivo",
    label: "Mudar a diretoria de um banco público ou ministério",
    type: "executivo" as PathType,
    explanation: "Essa é uma atribuição direta do Presidente da República. Ele pode nomear ou exonerar ministros e presidentes de estatais livremente (dentro das regras da lei das estatais)."
  }
];

export default function PromisePath() {
  const [selected, setSelected] = useState<string | null>(null);

  const activePromise = PROMISES.find(p => p.id === selected);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Teste: O presidente pode fazer isso sozinho?</h3>
      <p className="text-body" style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--text-secondary)' }}>
        Selecione uma promessa comum de campanha para ver o caminho real:
      </p>

      <div className={styles.selector}>
        {PROMISES.map(p => (
          <button
            key={p.id}
            className={styles.optionBtn}
            aria-selected={selected === p.id}
            onClick={() => setSelected(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {activePromise && (
        <div className={styles.pathResult}>
          <h4 className="h4" style={{ textAlign: 'center', color: 'var(--brand-primary)', marginBottom: '16px' }}>Caminho de Execução</h4>
          
          <div className={styles.flowDiagram}>
            <div className={styles.flowNode} style={{ borderColor: 'var(--brand-primary)' }}>PROMESSA PRESIDENCIAL</div>
            <div className={styles.flowArrow}><ArrowDown size={20} /></div>
            
            {activePromise.type === "executivo" && (
              <>
                <div className={styles.flowNode} style={{ borderColor: 'var(--success)', color: 'var(--success)' }}>DECISÃO DIRETA DO EXECUTIVO</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ background: 'var(--success-soft)' }}>EXECUÇÃO</div>
              </>
            )}

            {activePromise.type === "lei" && (
              <>
                <div className={styles.flowNode}>PROJETO DE LEI (CONGRESSO)</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ borderColor: 'var(--warning)', color: 'var(--warning)' }}>CÂMARA DOS DEPUTADOS</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ borderColor: 'var(--warning)', color: 'var(--warning)' }}>SENADO FEDERAL</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ background: 'var(--bg-subtle)' }}>SANÇÃO PRESIDENCIAL</div>
              </>
            )}

            {activePromise.type === "pec" && (
              <>
                <div className={styles.flowNode}>PROPOSTA DE EMENDA À CONSTITUIÇÃO (PEC)</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ borderColor: '#C81E1E', color: '#C81E1E' }}>CÂMARA (Requer 308 votos em 2 turnos)</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ borderColor: '#C81E1E', color: '#C81E1E' }}>SENADO (Requer 49 votos em 2 turnos)</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ background: 'var(--bg-subtle)' }}>PROMULGAÇÃO (CONGRESSO)</div>
              </>
            )}

            {activePromise.type === "estado" && (
              <>
                <div className={styles.flowNode}>VERBAS / DIRETRIZES FEDERAIS</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>GOVERNOS ESTADUAIS (Execução)</div>
                <div className={styles.flowArrow}><ArrowDown size={20} /></div>
                <div className={styles.flowNode} style={{ background: 'var(--bg-subtle)' }}>POLÍCIAS LOCAIS</div>
              </>
            )}
          </div>

          <div className={styles.explanation}>
            {activePromise.explanation}
          </div>
        </div>
      )}
    </div>
  );
}
