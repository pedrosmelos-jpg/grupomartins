export const SST_TABS = [
  { id: 'hub', label: 'Central de Módulos' },
  { id: 'alertas', label: 'Painel & Alertas' },
  { id: 'estrutura', label: 'Estrutura & Vidas' },
  { id: 'engenharia', label: 'Engenharia (GRO)' },
  { id: 'medicina', label: 'Medicina (PCMSO)' },
  { id: 'epis_nrs', label: 'EPIs, Treinamentos & NRs' },
  { id: 'esocial', label: 'eSocial SST' },
  { id: 'gestao_ged', label: 'CAT, CIPA, Rede & GED' }
];

export const SST_MODULE_GROUPS = [
  {
    id: 'estrutura_vidas',
    title: 'Estrutura & Vidas',
    targetTab: 'estrutura',
    items: [
      { id: 'unidades', label: 'Unidades, Obras & Filiais', subTab: 'unidades' },
      { id: 'setores_cargos', label: 'Setores & Cargos (CBO)', subTab: 'cargos' },
      { id: 'ghe', label: 'Matriz de GHE (Exposição)', subTab: 'ghe' },
      { id: 'funcionarios', label: 'Cadastro de Funcionários (Vidas)', subTab: 'funcionarios' },
      { id: 'transferencias', label: 'Histórico & Mudança de Função', subTab: 'funcionarios' }
    ]
  },
  {
    id: 'engenharia_gro',
    title: 'Engenharia & GRO',
    targetTab: 'engenharia',
    items: [
      { id: 'riscos', label: 'Inventário de Riscos (NR-01)', subTab: 'riscos' },
      { id: 'matriz_risco', label: 'Matriz de Risco 5×5 (P × S)', subTab: 'matriz' },
      { id: 'plano_acao', label: 'Plano de Ação do PGR', subTab: 'plano_acao' },
      { id: 'ltcat_ppp', label: 'LTCAT & PPP (Agentes Nocivos)', subTab: 'ltcat_ppp' },
      { id: 'insalubridade_ergo', label: 'Insalubridade, Periculosidade & AEP', subTab: 'ergonomia' }
    ]
  },
  {
    id: 'medicina_pcmso',
    title: 'Medicina Ocupacional',
    targetTab: 'medicina',
    items: [
      { id: 'grade_pcmso', label: 'PCMSO & Grade de Exames', subTab: 'grade' },
      { id: 'convocacoes', label: 'Convocação & Vencimentos (30/60/90d)', subTab: 'convocacoes' },
      { id: 'aso_guia', label: 'Guia de Encaminhamento & Emissão ASO', subTab: 'asos' },
      { id: 'prontuario', label: 'Prontuário Clínico Ocupacional', subTab: 'prontuario' },
      { id: 'absenteismo_vacinas', label: 'Absenteísmo, Atestados, Vacinas & PCD', subTab: 'absenteismo' }
    ]
  },
  {
    id: 'epis_nrs',
    title: 'EPIs, Treinamentos & NRs',
    targetTab: 'epis_nrs',
    items: [
      { id: 'treinamentos_nr', label: 'Turmas & Treinamentos (NRs)', subTab: 'treinamentos' },
      { id: 'certificados_qr', label: 'Gerador de Certificados + QR Code', subTab: 'treinamentos' },
      { id: 'ordem_servico', label: 'Ordem de Serviço de Segurança (NR-01)', subTab: 'os_nr01' },
      { id: 'catalogo_ca', label: 'Catálogo de EPIs, CA & Estoque', subTab: 'epis' },
      { id: 'ficha_epi', label: 'Ficha de EPI com Assinatura na Tela', subTab: 'ficha_epi' }
    ]
  },
  {
    id: 'seguranca_comissoes',
    title: 'Segurança & Comissões',
    targetTab: 'gestao_ged',
    items: [
      { id: 'cat_acidentes', label: 'CAT & Registro de Acidentes', subTab: 'cat' },
      { id: 'investigacao', label: 'Investigação de Acidentes & Afastamentos', subTab: 'cat' },
      { id: 'cipa', label: 'Gestão de Mandatos & Atas da CIPA', subTab: 'cipa' },
      { id: 'brigada_inspecoes', label: 'Brigada de Emergência & Inspeções', subTab: 'cipa' }
    ]
  },
  {
    id: 'esocial_rede_ged',
    title: 'eSocial, Rede, Financeiro & GED',
    targetTab: 'esocial',
    items: [
      { id: 'esocial_s2210', label: 'Evento S-2210 (CAT)', subTab: 'fila' },
      { id: 'esocial_s2220', label: 'Evento S-2220 (Monitoramento ASO)', subTab: 'fila' },
      { id: 'esocial_s2240', label: 'Evento S-2240 (Condições Ambientais)', subTab: 'fila' },
      { id: 'rede_faturamento', label: 'Rede Credenciada & Lançar no Caixa/DRE', targetTab: 'gestao_ged', subTab: 'rede' },
      { id: 'ged_portal', label: 'GED SST (Cofre Digital & Portal)', targetTab: 'gestao_ged', subTab: 'ged' }
    ]
  }
];

export const RISK_CATEGORIES = [
  'Físico',
  'Químico',
  'Biológico',
  'Ergonômico',
  'Acidente',
  'Psicossocial'
];

export const ESOCIAL_TAB24_SAMPLES = [
  { code: '01.01.001', label: '01.01.001 — Poeiras minerais / sílica / cimento' },
  { code: '01.03.001', label: '01.03.001 — Produtos químicos / agrotóxicos / solventes' },
  { code: '02.01.001', label: '02.01.001 — Ruído contínuo ou intermitente' },
  { code: '02.01.002', label: '02.01.002 — Ruído de impacto' },
  { code: '02.01.005', label: '02.01.005 — Exposição ao calor (IBUTG)' },
  { code: '02.01.006', label: '02.01.006 — Radiações ionizantes / não ionizantes' },
  { code: '03.01.001', label: '03.01.001 — Agentes biológicos / vírus / bactérias / fungos' },
  { code: '05.01.001', label: '05.01.001 — Periculosidade / inflamáveis / eletricidade' }
];

export const NR_COURSES_PRESETS = [
  { nr: 'NR-01', title: 'Disposições Gerais e GRO / Ordem de Serviço', hours: 4, validityMonths: 24 },
  { nr: 'NR-05', title: 'CIPA — Prevenção de Acidentes e Assédio', hours: 20, validityMonths: 12 },
  { nr: 'NR-06', title: 'Equipamento de Proteção Individual (EPI)', hours: 4, validityMonths: 12 },
  { nr: 'NR-10', title: 'Segurança em Instalações e Serviços em Eletricidade', hours: 40, validityMonths: 24 },
  { nr: 'NR-12', title: 'Segurança no Trabalho em Máquinas e Equipamentos', hours: 8, validityMonths: 24 },
  { nr: 'NR-18', title: 'Condições e Meio Ambiente de Trabalho na Indústria da Construção', hours: 6, validityMonths: 24 },
  { nr: 'NR-20', title: 'Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis', hours: 16, validityMonths: 36 },
  { nr: 'NR-23', title: 'Proteção Contra Incêndios e Brigada de Emergência', hours: 8, validityMonths: 12 },
  { nr: 'NR-31', title: 'Segurança e Saúde no Trabalho na Agricultura e Pecuária', hours: 8, validityMonths: 24 },
  { nr: 'NR-33', title: 'Segurança e Saúde nos Trabalhos em Espaços Confinados', hours: 16, validityMonths: 12 },
  { nr: 'NR-35', title: 'Trabalho em Altura', hours: 8, validityMonths: 24 }
];

export const calcRiskMatrix5x5 = (prob = 1, sev = 1) => {
  const p = Math.min(5, Math.max(1, Number(prob) || 1));
  const s = Math.min(5, Math.max(1, Number(sev) || 1));
  const score = p * s;
  if (score >= 16) return { score, level: 'Intolerável', badgeClass: 'bg-rose-100 text-rose-800 border-rose-200' };
  if (score >= 10) return { score, level: 'Substancial', badgeClass: 'bg-orange-100 text-orange-800 border-orange-200' };
  if (score >= 5) return { score, level: 'Moderado', badgeClass: 'bg-amber-100 text-amber-800 border-amber-200' };
  if (score >= 3) return { score, level: 'Tolerável', badgeClass: 'bg-sky-100 text-sky-800 border-sky-200' };
  return { score, level: 'Trivial', badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
};
