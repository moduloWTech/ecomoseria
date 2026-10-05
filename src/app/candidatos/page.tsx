import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Candidatos() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '76px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ padding: '40px 20px' }}>
          <h1 className="h1" style={{ textAlign: 'center', marginBottom: '48px' }}>Candidatos à Presidência</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Lula */}
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                  L
                </div>
                <div>
                  <h2 className="h2">Luiz Inácio Lula da Silva</h2>
                  <span className="text-label" style={{ color: 'var(--text-muted)' }}>Partido dos Trabalhadores (PT) - 13</span>
                </div>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 className="h4" style={{ marginBottom: '8px' }}>Resumo Factual</h3>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                  Disputa o segundo turno das eleições presidenciais de 2026. Obteve 45,16% dos votos válidos no primeiro turno, segundo o TSE.
                </p>
              </div>
              
              <Button href="https://www.tse.jus.br" variant="secondary">
                Ver propostas completas
              </Button>
            </div>

            {/* Flavio */}
            <div className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                  F
                </div>
                <div>
                  <h2 className="h2">Flávio Bolsonaro</h2>
                  <span className="text-label" style={{ color: 'var(--text-muted)' }}>Partido Liberal (PL) - 22</span>
                </div>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 className="h4" style={{ marginBottom: '8px' }}>Resumo Factual</h3>
                <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                  Disputa o segundo turno das eleições presidenciais de 2026. Obteve 47,03% dos votos válidos no primeiro turno, segundo o TSE.
                </p>
              </div>

              <Button href="https://www.tse.jus.br" variant="secondary">
                Ver propostas completas
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
