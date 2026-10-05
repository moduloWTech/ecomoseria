import React from 'react';
import styles from './PolicyPositionCheck.module.css';
import { HelpCircle } from 'lucide-react';

export default function PolicyPositionCheck() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HelpCircle className={styles.icon} size={28} />
        <h3 className={styles.title}>O Checklist da Política Pública</h3>
      </div>
      
      <p className={styles.intro}>
        Quando alguém diz "essa proposta é boa para o brasileiro", de qual brasileiro estamos falando? Faça sempre estas 5 perguntas:
      </p>

      <div className={styles.checklist}>
        <div className={styles.checkItem}>
          <div className={styles.number}>1</div>
          <div className={styles.content}>
            <strong>Quem recebe diretamente?</strong>
            <p>Quem é o beneficiário final do dinheiro, serviço ou incentivo?</p>
          </div>
        </div>
        
        <div className={styles.checkItem}>
          <div className={styles.number}>2</div>
          <div className={styles.content}>
            <strong>Quem paga diretamente?</strong>
            <p>De qual imposto, corte ou taxa o recurso está saindo?</p>
          </div>
        </div>

        <div className={styles.checkItem}>
          <div className={styles.number}>3</div>
          <div className={styles.content}>
            <strong>Quem pode ser afetado indiretamente?</strong>
            <p>Uma lei que muda o mercado afeta a inflação ou o emprego de quem nem participa daquela regra?</p>
          </div>
        </div>

        <div className={styles.checkItem}>
          <div className={styles.number}>4</div>
          <div className={styles.content}>
            <strong>Como chega a alguém na MINHA situação?</strong>
            <p>Com o seu mapa econômico em mãos, a política te atinge como trabalhador, consumidor, pagador de impostos ou tomador de crédito?</p>
          </div>
        </div>

        <div className={styles.checkItem}>
          <div className={styles.number}>5</div>
          <div className={styles.content}>
            <strong>O que acontece quando o sistema reage?</strong>
            <p>Pessoas e empresas mudam de comportamento quando as regras mudam. A promessa se sustenta após essa reação?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
