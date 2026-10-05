import styles from './PolicyRealityCheck.module.css';

interface PolicyRealityCheckProps {
  title?: string;
}

export default function PolicyRealityCheck({ title = "O teste da política pública" }: PolicyRealityCheckProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.number}>1</span>
          <span><strong>Quanto custa?</strong> (É barato, caro, sustentável?)</span>
        </li>
        <li className={styles.item}>
          <span className={styles.number}>2</span>
          <span><strong>Quem paga?</strong> (Governo federal, estado, município, usuário via tarifa?)</span>
        </li>
        <li className={styles.item}>
          <span className={styles.number}>3</span>
          <span><strong>Quem executa?</strong> (Servidor, empresa privada, terceiro setor?)</span>
        </li>
        <li className={styles.item}>
          <span className={styles.number}>4</span>
          <span><strong>Como sabemos se funcionou?</strong> (Tem métrica clara de sucesso?)</span>
        </li>
        <li className={styles.item}>
          <span className={styles.number}>5</span>
          <span><strong>O que acontece se não funcionar?</strong> (Quem é responsabilizado? Como conserta?)</span>
        </li>
      </ul>
    </div>
  );
}
