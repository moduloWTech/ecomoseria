export default function Footer() {

  return (
    <footer style={{ padding: '64px 20px', borderTop: '1px solid var(--border-soft)', marginTop: '80px', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <strong style={{ fontFamily: 'var(--font-manrope)', fontSize: '24px', color: 'var(--brand-primary)' }}>E como seria...?</strong>
          <p className="text-small" style={{ color: 'var(--text-muted)', marginTop: '8px', maxWidth: '400px' }}>
            Um site para quem não acompanha política, mas quer entender o que as escolhas desta eleição podem significar para sua vida.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span className="text-label">Sobre o projeto</span>
            <a href="/sobre" className="text-small">Metodologia</a>
            <a href="/fontes" className="text-small">Fontes utilizadas</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '24px', marginTop: '24px' }}>
          <p className="text-small" style={{ color: 'var(--text-muted)' }}>
            Atualizado em: 05/10/2026. Informação baseada em propostas oficiais e fontes verificáveis. O site não recomenda candidatos.
          </p>
        </div>
      </div>
    </footer>
  );
}
