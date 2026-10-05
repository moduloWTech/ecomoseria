import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Button({ children, href, variant = 'primary', className = '', onClick, style }: ButtonProps) {
  const btnClass = `${styles.btn} ${styles[variant]} ${className}`;
  
  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} className={btnClass} onClick={onClick} style={style} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={btnClass} onClick={onClick} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
