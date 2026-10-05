import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EconomicPositionMap from '@/components/EconomicPositionMap';
import PolicyPositionCheck from '@/components/PolicyPositionCheck';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Onde você está nessa história? Renda, trabalho e patrimônio | E como seria...?',
  description: 'Entenda como renda, patrimônio, trabalho, dívidas e serviços públicos ajudam a explicar por que decisões econômicas podem afetar pessoas de maneiras diferentes.',
};

export default function OndeVoceEsta() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>Renda &middot; Trabalho &middot; Patrimônio</span>
            <h1 className={styles.heroTitle}>Onde você está nessa história?</h1>
            <p className={styles.heroSubtitle}>
              Entenda renda, patrimônio, trabalho e por que uma mesma decisão econômica pode afetar pessoas de maneiras diferentes.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
          <div className="container editorial-content">
            <h2 className="h2" style={{ marginBottom: '24px' }}>Afinal, o que é "Consciência de Classe"?</h2>
            <p className="text-body" style={{ marginBottom: '16px' }}>
              "Consciência de classe" muitas vezes vira um termo usado para acusar alguém de não saber votar. Mas o conceito real é sobre compreender como a posição que você ocupa na economia (de onde vem seu dinheiro, o que você possui, de quem você depende) influencia seus interesses, as oportunidades que você tem e os riscos que você corre.
            </p>
            <p className="text-body" style={{ marginBottom: '32px' }}>
              A tradição marxista foca muito na relação entre capital (quem possui os meios de produção) e trabalho (quem vende seu tempo). Já abordagens contemporâneas adicionam camadas como educação, status, segurança e patrimônio. <strong>O ponto é: a economia não é uma linha reta, é um sistema. E o seu lugar nesse sistema muda como as políticas te atingem.</strong>
            </p>

            {/* Interactive Component */}
            <EconomicPositionMap />
            
            <div className={styles.infoBox}>
              <h4 className="h4" style={{ marginBottom: '12px' }}>Exemplo Prático: Mesmo rendimento, realidades diferentes</h4>
              <p className="text-body" style={{ marginBottom: '16px' }}>
                Imagine a <strong>Pessoa A</strong> e a <strong>Pessoa B</strong>. Ambas ganham R$ 6.000 por mês.
              </p>
              <ul className="text-body" style={{ marginLeft: '24px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>A Pessoa A</strong> recebe esse valor de salário (CLT). Ela paga aluguel, tem um financiamento do carro e depende do SUS e da escola pública. Se ela for demitida, a renda cai para zero no mês seguinte.</li>
                <li><strong>A Pessoa B</strong> recebe esse valor através de rendimentos de um galpão que tem alugado e pequenos negócios. Ela tem casa própria quitada, plano de saúde e uma reserva de emergência alta.</li>
              </ul>
              <p className="text-body" style={{ fontWeight: 600 }}>
                A renda mensal é exatamente igual. Mas a "posição econômica" e os riscos de inflação, desemprego e juros que cada um corre são idênticos? Não.
              </p>
            </div>

            <h2 className="h2" style={{ marginTop: '56px', marginBottom: '24px' }}>A desigualdade é fluxo e estoque</h2>
            <p className="text-body" style={{ marginBottom: '16px' }}>
              Renda é fluxo (o que entra todo mês). Patrimônio é estoque (o que fica). 
              <br/><br/>
              Segundo estimativas de um estudo divulgado pelo Ipea (baseado em dados tributários e Pnad de 2019), enquanto o 1% com maior renda concentrava cerca de 25% do fluxo (renda), eles concentravam quase <strong>35% da riqueza líquida</strong> (patrimônio). Entender de onde vêm os impostos propostos (se taxam fluxo de renda ou estoque de patrimônio) muda tudo.
            </p>

            {/* Policy Checklist Component */}
            <PolicyPositionCheck />

            <div style={{ marginTop: '64px', textAlign: 'center', maxWidth: '600px', margin: '64px auto 0' }}>
              <h3 className="h3" style={{ marginBottom: '16px' }}>Nuance Importante</h3>
              <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                Entender sua posição econômica não significa que você deve "votar com o bolso" e ignorar o resto. Decisões políticas também envolvem valores, família, comunidade, liberdade, segurança e planejamento para as gerações futuras. <strong>Mapear sua posição serve para clarear os impactos, não para engessar o seu voto.</strong>
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
