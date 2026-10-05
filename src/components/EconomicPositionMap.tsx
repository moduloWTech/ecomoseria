"use client";
import React, { useState } from 'react';
import { ArrowRight, Wallet, Home, ShieldAlert, Briefcase, Landmark } from 'lucide-react';
import styles from './EconomicPositionMap.module.css';

export default function EconomicPositionMap() {
  const [householdIncome, setHouseholdIncome] = useState<string>('');
  const [members, setMembers] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  // Calcula renda per capita localmente
  const income = parseFloat(householdIncome.replace(/\D/g, '')) || 0;
  const numMembers = parseInt(members) || 1;
  const perCapita = income > 0 ? (income / numMembers) : 0;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>1. Qual a sua Renda?</h3>
      
      {!showResult ? (
        <form onSubmit={handleCalculate} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="income">Renda total da casa (R$)</label>
            <input 
              type="number" 
              id="income" 
              placeholder="Ex: 5000"
              value={householdIncome}
              onChange={(e) => setHouseholdIncome(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="members">Quantas pessoas vivem dessa renda?</label>
            <input 
              type="number" 
              id="members" 
              placeholder="Ex: 3"
              value={members}
              onChange={(e) => setMembers(e.target.value)}
              min="1"
            />
          </div>
          
          <button type="submit" className={styles.button}>Mapear Renda</button>
          <button type="button" onClick={() => setShowResult(true)} className={styles.skipButton}>
            Continuar sem informar valores
          </button>
          <p className={styles.privacyNote}>
            *O cálculo é feito apenas no seu navegador. Nenhum dado é enviado ou salvo.
          </p>
        </form>
      ) : (
        <div className={styles.results}>
          {perCapita > 0 && (
            <div className={styles.resultCard}>
              <span className={styles.resultLabel}>Renda Domiciliar Per Capita (Sua casa)</span>
              <span className={styles.resultValue}>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(perCapita)}
              </span>
              <p className={styles.comparisonText}>
                No Brasil, segundo o IBGE (2025), o rendimento médio domiciliar per capita foi de <strong>R$ 2.316</strong>. 
                <br/><span style={{ fontSize: '11px', opacity: 0.8 }}>REFERÊNCIA ESTATÍSTICA — NÃO É UMA DEFINIÇÃO DE CLASSE SOCIAL.</span>
              </p>
            </div>
          )}

          <div className={styles.fragmentationHeader}>
            <h4 className="h4" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
              Mas a pirâmide se desmonta...
            </h4>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Duas pessoas podem ganhar exatamente o mesmo valor por mês, mas viver realidades econômicas completamente diferentes. <strong>Sua posição no mundo real é um mapa multidimensional:</strong>
            </p>
          </div>

          <div className={styles.dimensionsGrid}>
            <div className={styles.dimensionCard}>
              <div className={styles.dimensionIcon}><Wallet size={20} /></div>
              <h5>Patrimônio x Dívida</h5>
              <p>Renda é fluxo. Patrimônio é estoque (o que você tem). Dívida é renda futura já comprometida.</p>
            </div>
            <div className={styles.dimensionCard}>
              <div className={styles.dimensionIcon}><Briefcase size={20} /></div>
              <h5>Trabalho e Fonte</h5>
              <p>O dinheiro vem de venda de força de trabalho, de negócio próprio, ou de rendimentos de patrimônio?</p>
            </div>
            <div className={styles.dimensionCard}>
              <div className={styles.dimensionIcon}><ShieldAlert size={20} /></div>
              <h5>Segurança (Colchão)</h5>
              <p>Se a sua principal fonte de renda secar hoje, por quantos meses você consegue manter seu padrão de vida?</p>
            </div>
            <div className={styles.dimensionCard}>
              <div className={styles.dimensionIcon}><Landmark size={20} /></div>
              <h5>Dependência do Estado</h5>
              <p>Quais serviços (saúde, escola, segurança, transporte) você consome via imposto e quais compra no mercado privado?</p>
            </div>
          </div>
          
          <div className={styles.conclusionBox}>
            <p>
              Esse é o seu mapa econômico. Ele não diz em quem você deve votar. Ele ajuda a entender <strong>como</strong> e <strong>por que</strong> diferentes escolhas econômicas do governo chegam até você.
            </p>
          </div>
          
          {perCapita > 0 && (
             <button type="button" onClick={() => { setShowResult(false); setHouseholdIncome(''); setMembers(''); }} className={styles.skipButton} style={{ marginTop: '16px' }}>
               Refazer cálculo
             </button>
          )}
        </div>
      )}
    </div>
  );
}
