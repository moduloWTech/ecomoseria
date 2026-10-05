import styles from './Logo.module.css';

interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div className={`${styles.logoContainer} ${compact ? styles.compact : ''}`} aria-label="E como seria...?">
      <span className={styles.textPart}>E como seria</span>
      <span className={styles.dotsWrapper}>
        <span className={styles.dots}>...</span>
      </span>
      <span className={styles.questionMark}>?</span>
    </div>
  );
}
