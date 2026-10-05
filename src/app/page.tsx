import Link from "next/link";
import { ArrowRight, Briefcase, Calculator, HeartPulse, GraduationCap, Shield, ShoppingCart, Tractor, Building2 } from "lucide-react";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Home() {
  const themes = [
    { title: "Meu dinheiro", question: "Como as propostas afetam seu bolso?", icon: Calculator, href: "/temas/dinheiro" },
    { title: "Meu trabalho", question: "Sua jornada, salário ou forma de contratação pode mudar?", icon: Briefcase, href: "/temas/trabalho" },
    { title: "Minha saúde", question: "Quando você precisar do SUS, o que pode ser diferente?", icon: HeartPulse, href: "/temas/saude" },
    { title: "Educação", question: "O que pode mudar na escola dos seus filhos?", icon: GraduationCap, href: "/temas/educacao" },
    { title: "Segurança", question: "Como cada proposta pretende enfrentar o crime?", icon: Shield, href: "/temas/seguranca" },
    { title: "Custo de vida", question: "O preço das coisas vai mudar?", icon: ShoppingCart, href: "/temas/custo-de-vida" },
    { title: "Campo e alimentos", question: "Isso muda alguma coisa no campo e no preço dos alimentos?", icon: Tractor, href: "/temas/campo" },
    { title: "Serviços públicos", question: "Como pretendem usar o dinheiro público?", icon: Building2, href: "/temas/estado" },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroContent}`}>
            <div>
              <span className={styles.eyebrow}>Eleição 2026 &middot; Segundo Turno</span>
              <h1 className={`h-display ${styles.heroTitle}`}>
                O que as escolhas desta eleição podem significar para a sua vida?
              </h1>
              <p className={`text-lead ${styles.heroSubtitle}`}>
                Entenda de forma simples o que está sendo proposto, como isso pode chegar ao seu dia a dia e de onde vêm as informações.
              </p>
              <div className={styles.heroCtas}>
                <Button href="#temas" variant="primary">Quero entender</Button>
                <Button href="#como-funciona" variant="secondary">Como funciona</Button>
              </div>
              <p className={styles.heroMicrocopy}>Informação baseada em propostas oficiais e fontes verificáveis.</p>
            </div>
            
            <div className={styles.heroVisual}>
              <div className={styles.visualSequence}>
                <div className={styles.visualItem}>
                  <div className="badge badge-proposal">Proposta Oficial</div>
                  <ArrowRight size={16} />
                  <span className="text-small">Revisão de impostos</span>
                </div>
                <div className={styles.visualItem}>
                  <div className="badge badge-impact">Possível Impacto</div>
                  <ArrowRight size={16} />
                  <span className="text-small">Mudança no seu bolso</span>
                </div>
                <div className={styles.visualItem}>
                  <div className="badge badge-source">Fonte Primária</div>
                  <ArrowRight size={16} />
                  <span className="text-small">Plano no TSE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Onde Você Está Highlight */}
        <section className={styles.themesSection} style={{ paddingBottom: 'var(--space-4)' }}>
          <div className="container">
            <Link href="/onde-voce-esta" className="card" style={{ display: 'block', padding: 'var(--space-8)', background: 'var(--brand-primary)', color: 'white', border: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span className="badge badge-proposal" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>MAPA INTERATIVO</span>
              </div>
              <h3 className="h2" style={{ marginBottom: '12px', color: 'white' }}>Onde você está nessa história?</h3>
              <p className="text-lead" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '800px', marginBottom: '24px' }}>
                Consciência de classe não é rótulo, é um mapa. Entenda como renda, patrimônio, trabalho e dívidas explicam por que uma mesma promessa eleitoral afeta as pessoas de formas diferentes.
              </p>
              <div className="text-body" style={{ color: 'var(--accent)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Mapear minha posição na economia <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </section>

        {/* Themes Section */}
        <section id="temas" className={styles.themesSection} style={{ paddingTop: 'var(--space-6)' }}>
          <div className="container">
            <div className={styles.themesHeader}>
              <h2 className="h2">Comece pelo que faz parte da sua vida.</h2>
              <p className="text-lead" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
                Você não precisa acompanhar política para entender o que está sendo decidido.
              </p>
            </div>
            
            <div className={styles.themesGrid}>
              {themes.map((theme, i) => (
                <Link key={i} href={theme.href} className={`card ${styles.themeCard}`}>
                  <theme.icon className={styles.themeIcon} size={32} strokeWidth={1.5} />
                  <h3 className={`h4 ${styles.themeTitle}`}>{theme.title}</h3>
                  <p className={`text-body ${styles.themeQuestion}`}>{theme.question}</p>
                  <div className={styles.themeArrow}>
                    Entender <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Além das Propostas Highlight */}
        <section className={styles.themesSection} style={{ paddingTop: 0, paddingBottom: 'var(--space-10)' }}>
          <div className="container">
            <Link href="/alem-das-propostas" className="card" style={{ display: 'block', padding: 'var(--space-8)', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--warning)' }}>
              <span className="badge badge-impact" style={{ background: 'var(--warning-soft)', color: 'var(--warning)', marginBottom: '16px' }}>NOVO</span>
              <h3 className="h3" style={{ marginBottom: '8px' }}>Além das propostas</h3>
              <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '24px' }}>
                Acusações, investigações e decisões judiciais mudam com o tempo. Você ouviu muita coisa sobre eles, mas o que realmente aconteceu? Acompanhe o estado atual de cada caso.
              </p>
              <div className="text-small" style={{ color: 'var(--warning)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Ver checagens <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </section>

        {/* How to Read Section */}
        <section id="como-funciona" className={styles.howToReadSection}>
          <div className="container editorial-content" style={{ textAlign: 'center' }}>
            <h2 className="h2">Como ler este site</h2>
            <div className={styles.stepsContainer}>
              <div className={styles.stepLine}></div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3 className="h4" style={{ marginBottom: '8px' }}>Entenda</h3>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>Começamos pela pergunta que afeta sua realidade.</p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3 className="h4" style={{ marginBottom: '8px' }}>Compare</h3>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>Mostramos o que cada candidato realmente propõe.</p>
              </div>
              
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3 className="h4" style={{ marginBottom: '8px' }}>Verifique</h3>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>Você pode abrir as fontes e chegar ao documento original.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
