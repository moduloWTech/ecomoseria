import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sobre() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '76px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container editorial-content" style={{ padding: '64px 20px' }}>
          <h1 className="h1" style={{ marginBottom: '24px' }}>Metodologia e Princípios Editoriais</h1>
          
          <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
            <h2 className="h3" style={{ marginBottom: '16px' }}>Nosso Posicionamento</h2>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Um site para quem não acompanha política, mas quer entender o que as escolhas desta eleição podem significar para sua vida.
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              A promessa editorial é entregar informação simples, verificável e relacionada ao cotidiano.
            </p>
          </div>

          <div className="card" style={{ padding: '32px' }}>
            <h2 className="h3" style={{ marginBottom: '16px' }}>Regras que seguimos</h2>
            <ul className="text-body" style={{ color: 'var(--text-secondary)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Nunca recomendamos candidato.</li>
              <li>Diferenciamos visualmente fato, proposta e análise.</li>
              <li>Efeitos futuros nunca são apresentados como garantidos.</li>
              <li>Toda afirmação factual possui fonte documental.</li>
              <li>Os candidatos recebem sempre o mesmo peso visual e editorial.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
