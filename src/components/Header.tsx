"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logoLink}>
          <Logo compact={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/entenda">Entenda a eleição</Link>
          <Link href="/#temas">Temas</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/alem-das-propostas" style={{ color: 'var(--warning)', fontWeight: 700 }}>Além das propostas</Link>
          <Link href="/candidatos">Candidatos</Link>
          <Link href="/fontes">Fontes</Link>
          <Link href="/sobre">Sobre</Link>
          <Button href="/#temas" variant="primary" style={{ height: '40px', padding: '0 16px', borderRadius: '8px', marginLeft: '16px' }}>
            Quero entender
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
            <Link href="/entenda" onClick={() => setIsMobileMenuOpen(false)}>Entenda a eleição</Link>
            <Link href="/#temas" onClick={() => setIsMobileMenuOpen(false)}>Temas</Link>
            <Link href="/compare" onClick={() => setIsMobileMenuOpen(false)}>Comparar</Link>
            <Link href="/alem-das-propostas" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--warning)', fontWeight: 700 }}>Além das propostas</Link>
            <Link href="/candidatos" onClick={() => setIsMobileMenuOpen(false)}>Candidatos</Link>
            <Link href="/fontes" onClick={() => setIsMobileMenuOpen(false)}>Fontes</Link>
            <Button href="/#temas" variant="primary" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '16px' }}>
              Quero entender
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
