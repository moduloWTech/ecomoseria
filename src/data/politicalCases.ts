export type CaseStatus =
  | 'documented'
  | 'allegation'
  | 'investigation'
  | 'indictment'
  | 'defendant'
  | 'conviction'
  | 'annulled'
  | 'acquitted'
  | 'archived'
  | 'prescribed'
  | 'contested'
  | 'misleading'
  | 'false'
  | 'insufficient-evidence';

export type RelationType =
  | 'candidate'
  | 'administration'
  | 'party-ally'
  | 'rumor';

export interface Source {
  title: string;
  url: string;
  type: 'primary' | 'secondary';
}

export interface PoliticalCase {
  id: string;
  candidate: 'lula' | 'flavio';
  title: string;
  relationType: RelationType;
  status: CaseStatus;
  statusDate: string;
  heardOnline?: string;
  summary: string;
  verifiedFacts: string[];
  legalMeaning?: string;
  doesNotMean?: string[];
  candidateResponse?: string;
  timeline: {
    date: string;
    label: string;
    description: string;
  }[];
  primarySources: Source[];
  secondarySources: Source[];
  lastReviewedAt: string;
}

export const POLITICAL_CASES: PoliticalCase[] = [
  // LULA
  {
    id: 'lula-1',
    candidate: 'lula',
    title: 'Triplex, Sítio de Atibaia e ações da Lava Jato',
    relationType: 'candidate',
    status: 'annulled',
    statusDate: '2021',
    heardOnline: 'Lula foi condenado por corrupção.',
    summary: 'Lula foi condenado, mas o STF confirmou a incompetência da 13ª Vara Federal de Curitiba para julgar os processos e declarou a suspeição de Sergio Moro, anulando as condenações.',
    verifiedFacts: [
      'Lula foi condenado nos casos do triplex e do sítio.',
      'O STF confirmou a incompetência do foro e declarou a suspeição do juiz.',
      'As condenações foram anuladas e não possuem validade jurídica atual.'
    ],
    legalMeaning: 'É correto dizer historicamente que "Lula foi condenado". Mas é incorreto apresentar essas condenações como criminais válidas hoje.',
    doesNotMean: [
      'Anulação não é a mesma coisa que uma absolvição de mérito (não é um julgamento dizendo que os fatos nunca aconteceram).',
      'Também é incorreto tratar Lula atualmente como condenado com base nessas decisões.'
    ],
    timeline: [
      { date: '2017/2019', label: 'Condenações', description: 'Condenações em primeira e segunda instância.' },
      { date: '2021', label: 'Anulação', description: 'STF anula condenações apontando incompetência de foro e suspeição.' }
    ],
    primarySources: [
      { title: 'STF - Confirmação da anulação', url: 'https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=464261&ori=l', type: 'primary' },
      { title: 'STF - Extensão de suspeição', url: 'https://portal.stf.jus.br/processos/detalhe.asp?incidente=5581966', type: 'primary' }
    ],
    secondarySources: [
      { title: 'Aos Fatos - Diferença entre anulação e absolvição', url: 'https://www.aosfatos.org/noticias/o-que-e-falso-e-o-que-e-fato-em-declaracoes-de-lula-sobre-absolvicoes-na-onu-e-na-justica/', type: 'secondary' }
    ],
    lastReviewedAt: '05/10/2026'
  },
  {
    id: 'lula-2',
    candidate: 'lula',
    title: 'A alegação de "absolvição em todos os processos"',
    relationType: 'rumor',
    status: 'misleading',
    statusDate: '2026',
    heardOnline: 'Lula foi absolvido em todos os processos.',
    summary: 'Diferentes procedimentos tiveram desfechos diferentes (anulações, prescrições, arquivamentos e absolvições). Não houve absolvição de mérito em todos eles.',
    verifiedFacts: [
      'Alguns casos prescreveram.',
      'Alguns foram arquivados ou rejeitados.',
      'Houve casos de absolvição específica, mas não representa a totalidade dos processos.'
    ],
    legalMeaning: 'Absolvição, Anulação e Prescrição não são a mesma coisa. Generalizar tudo como absolvição é enganoso.',
    timeline: [],
    primarySources: [],
    secondarySources: [
      { title: 'Aos Fatos', url: 'https://www.aosfatos.org/noticias/o-que-e-falso-e-o-que-e-fato-em-declaracoes-de-lula-sobre-absolvicoes-na-onu-e-na-justica/', type: 'secondary' }
    ],
    lastReviewedAt: '05/10/2026'
  },
  {
    id: 'lula-3',
    candidate: 'lula',
    title: 'A elegibilidade e a Ficha Limpa',
    relationType: 'rumor',
    status: 'false',
    statusDate: '2026',
    heardOnline: 'Lula é ficha suja hoje.',
    summary: 'As condenações que produziram efeitos eleitorais foram anuladas. O Tribunal Superior Eleitoral validou sua candidatura.',
    verifiedFacts: [
      'Não há condenação válida em segunda instância que o enquadre na Lei da Ficha Limpa no presente momento.',
      'O TSE aprovou o registro de candidatura.'
    ],
    doesNotMean: [
      '"Não ser ficha suja" não é o mesmo que "foi inocentado de todas as acusações". São critérios jurídicos diferentes.'
    ],
    timeline: [
      { date: 'Setembro 2026', label: 'Registro Deferido', description: 'TSE valida registro de candidatura.' }
    ],
    primarySources: [
      { title: 'TSE - Validação', url: 'https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/tse-valida-seis-registros-de-candidatura-a-presidencia-da-republica', type: 'primary' }
    ],
    secondarySources: [],
    lastReviewedAt: '05/10/2026'
  },
  {
    id: 'lula-4',
    candidate: 'lula',
    title: 'Fraudes e descontos indevidos no INSS',
    relationType: 'administration',
    status: 'investigation',
    statusDate: '2026',
    summary: 'Esquema de descontos indevidos atingiu milhões de aposentados. Gerou CPMI e devoluções bilionárias. Ocorreu durante a gestão federal.',
    verifiedFacts: [
      'R$ 2,9 bilhões devolvidos a 4,2 milhões de aposentados e pensionistas.',
      'Governo e órgãos apuraram os fatos após denúncias.'
    ],
    doesNotMean: [
      'Não há evidência apontando que o presidente executou pessoalmente o esquema.'
    ],
    legalMeaning: 'Existe responsabilidade administrativa de fiscalização por parte do Estado, mas não é uma acusação criminal direta contra o presidente no momento.',
    timeline: [
      { date: 'Fev 2026', label: 'Balanço', description: 'INSS apresenta balanço bilionário de ressarcimento.' }
    ],
    primarySources: [
      { title: 'Gov.br / INSS', url: 'https://www.gov.br/inss/pt-br/assuntos/presidente-do-inss-apresenta-a-cpmi-balanco-sobre-ressarcimento-e-protecao-no-credito-consignado', type: 'primary' },
      { title: 'STF', url: 'https://noticias.stf.jus.br/postsnoticias/presidente-do-stf-assume-relatoria-de-peticao-e-determina-envio-de-casos-master-e-inss-a-presidencia/', type: 'primary' }
    ],
    secondarySources: [],
    lastReviewedAt: '05/10/2026'
  },
  
  // FLAVIO
  {
    id: 'flavio-1',
    candidate: 'flavio',
    title: 'O caso da "Rachadinha" na Alerj',
    relationType: 'candidate',
    status: 'annulled',
    statusDate: '2025/2026',
    heardOnline: 'Flávio foi condenado pela rachadinha.',
    summary: 'Foi denunciado em 2020. Decisões do STF e STJ anularam as principais provas (relatórios financeiros, quebras de sigilo). Sem provas, a denúncia foi rejeitada/encerrada.',
    verifiedFacts: [
      'O MP-RJ denunciou Flávio.',
      'O STF anulou os relatórios financeiros que basearam o caso por irregularidade na obtenção.',
      'A denúncia não prosseguiu pela perda da base probatória.'
    ],
    legalMeaning: 'Flávio não foi condenado. O caso criminal foi encerrado processualmente.',
    doesNotMean: [
      'Não é correto dizer que "A Justiça provou que nunca houve rachadinha". O encerramento foi por invalidação de provas, não um julgamento final de mérito absolvendo-o após análise de provas lícitas.'
    ],
    candidateResponse: 'Sempre negou irregularidades e apontou perseguição e ilegalidade na investigação.',
    timeline: [
      { date: '2020', label: 'Denúncia', description: 'MP-RJ denuncia esquema.' },
      { date: '2021', label: 'Anulação', description: 'STF anula relatórios financeiros (Coaf).' },
      { date: '2022', label: 'Rejeição', description: 'TJ-RJ rejeita denúncia sem provas.' },
      { date: '2025/2026', label: 'Fim', description: 'Decisões consolidam o encerramento das tentativas de reabertura.' }
    ],
    primarySources: [
      { title: 'STF - Ilegalidade de relatórios', url: 'https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=477496', type: 'primary' }
    ],
    secondarySources: [
      { title: 'Folha - TJ-RJ negou retomada', url: 'https://www1.folha.uol.com.br/poder/2026/03/tj-rj-negou-tentativa-de-retomada-do-caso-rachadinha-contra-flavio-bolsonaro.shtml', type: 'secondary' }
    ],
    lastReviewedAt: '05/10/2026'
  },
  {
    id: 'flavio-2',
    candidate: 'flavio',
    title: 'Inquérito Dark Horse / Banco Master',
    relationType: 'candidate',
    status: 'investigation',
    statusDate: 'Setembro 2026',
    summary: 'Investigação formal no STF (em andamento) sobre financiamento do filme Dark Horse, com suspeitas de lavagem de dinheiro.',
    verifiedFacts: [
      'A Polícia Federal pediu e o STF abriu apuração formal.',
      'Inquérito apura possível lavagem de dinheiro e evasão de divisas.'
    ],
    legalMeaning: 'A existência do inquérito significa que autoridades estão apurando fatos. Investigação não é denúncia nem condenação.',
    candidateResponse: 'Defendeu retirada de sigilo e transparência sobre a investigação, negando crimes.',
    timeline: [
      { date: 'Set 2026', label: 'Inquérito', description: 'Abertura de inquérito formal noticiada.' }
    ],
    primarySources: [
      { title: 'STF - Operação', url: 'https://noticias.stf.jus.br/postsnoticias/stf-autoriza-operacao-da-pf-sobre-destinacao-de-emendas-parlamentares-no-caso-dark-horse/', type: 'primary' }
    ],
    secondarySources: [
      { title: 'Folha', url: 'https://www1.folha.uol.com.br/poder/2026/09/flavio-bolsonaro-e-investigado-no-stf-em-inquerito-sobre-dark-horse.shtml', type: 'secondary' },
      { title: 'Aos Fatos', url: 'https://www.aosfatos.org/noticias/mendonca-inquerito-flavio-bolsonaro-dark-horse/', type: 'secondary' }
    ],
    lastReviewedAt: '05/10/2026'
  },
  {
    id: 'flavio-3',
    candidate: 'flavio',
    title: 'Inquérito por suposta calúnia',
    relationType: 'candidate',
    status: 'investigation',
    statusDate: 'Abril 2026',
    summary: 'Decisão do STF determinou instauração de inquérito para apurar suposta calúnia proferida pelo candidato.',
    verifiedFacts: [
      'Inquérito instaurado a mando do STF.'
    ],
    legalMeaning: 'Abertura do inquérito não comprova que o crime ocorreu.',
    timeline: [
      { date: 'Abril 2026', label: 'Inquérito', description: 'Inquérito aberto no STF.' }
    ],
    primarySources: [
      { title: 'STF', url: 'https://portal.stf.jus.br/processos/detalhe.asp?incidente=7527182', type: 'primary' }
    ],
    secondarySources: [],
    lastReviewedAt: '05/10/2026'
  }
];
