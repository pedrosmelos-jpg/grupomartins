import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  LayoutDashboard,
  ArrowUpDown,
  FileSpreadsheet,
  Briefcase,
  UserCheck,
  Settings,
  Plus,
  Search,
  Filter,
  Download,
  CheckCircle2,
  RotateCcw,
  Trash2,
  Edit3,
  X,
  Leaf,
  Calendar,
  Menu,
  Users,
  Network,
  Lock,
  KeyRound,
  UserPlus,
  Cloud,
  CloudRain,
  Sliders,
  Check,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

import { createClient } from '@supabase/supabase-js';

// Inicialização Supabase direta
const supabaseUrl = "https://fhmgpgqqhcbxuqmpjrlh.supabase.co";
const supabaseKey = "sb_publishable_P1Xy1OH2KBqp-oITOLz0_g_615LlpyM";
const supabase = createClient(supabaseUrl, supabaseKey);

// ============================================================================
// 1. COMPONENTE DA LOGO OFICIAL VETORIZADA — GRUPO MARTINS
// ============================================================================
const GrupoMartinsLogo = ({ size = 'md', theme = 'cream', className = '' }) => {
  const isDarkBg = theme === 'dark';
  const primaryColor = isDarkBg ? '#F8F3EF' : '#1B3B2B';
  const secondaryColor = isDarkBg ? '#A7C9B5' : '#3B7A57';
  const bgBadge = isDarkBg ? '#132A1F' : '#F8F3EF';
  const borderBadge = isDarkBg ? '#2D5A43' : '#D5CFC7';

  if (size === 'compact') {
    return (
      <div
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${className}`}
        style={{ backgroundColor: bgBadge, borderColor: borderBadge }}
      >
        <svg viewBox="0 0 100 100" className="w-11 h-11 shrink-0">
          <circle cx="50" cy="50" r="44" fill="none" stroke={primaryColor} strokeWidth="5.5" />
          <path
            d="M36 93 C44 90, 46 82, 46 68 L46 30 L54 30 L54 68 C54 82, 56 90, 64 93 Z"
            fill={primaryColor}
          />
          <path
            d="M50 67 L32 54 M50 67 L68 54 M50 47 L34 33 M50 47 L66 33"
            stroke={primaryColor}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M50 10 C41 20, 41 31, 50 37 C59 31, 59 20, 50 10 Z"
            fill={primaryColor}
          />
          <path d="M50 17 L50 31" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M23 22 C22 33, 30 39, 41 37 C39 27, 32 21, 23 22 Z"
            fill={primaryColor}
          />
          <path d="M28 26 L37 34" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M77 22 C78 33, 70 39, 59 37 C61 27, 68 21, 77 22 Z"
            fill={primaryColor}
          />
          <path d="M72 26 L63 34" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M19 46 C20 57, 29 62, 40 58 C37 48, 29 44, 19 46 Z"
            fill={primaryColor}
          />
          <path d="M25 50 L36 55" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M81 46 C80 57, 71 62, 60 58 C63 48, 71 44, 81 46 Z"
            fill={primaryColor}
          />
          <path d="M75 50 L64 55" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <div className="leading-tight overflow-hidden">
          <div
            className="text-[9px] tracking-[0.28em] font-semibold uppercase"
            style={{ color: secondaryColor }}
          >
            G R U P O
          </div>
          <div
            className="text-lg font-extrabold tracking-wider"
            style={{
              color: primaryColor,
              fontFamily: 'Georgia, Cambria, "Times New Roman", serif'
            }}
          >
            MARTINS
          </div>
          <div
            className="text-[9px] font-medium truncate"
            style={{ color: isDarkBg ? '#D0E2D7' : '#4A6356' }}
          >
            Ambiental • MS Segurança
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-2xl border shadow-sm select-none ${className}`}
      style={{ backgroundColor: '#F8F3EF', borderColor: '#E2DCD3' }}
    >
      <svg viewBox="0 0 120 120" className={size === 'lg' ? 'w-24 h-24' : 'w-16 h-16'}>
        <circle cx="60" cy="60" r="52" fill="none" stroke="#1B3B2B" strokeWidth="6" />
        <path
          d="M42 111 C52 107, 56 97, 56 80 L56 36 L64 36 L64 80 C64 97, 68 107, 78 111 Z"
          fill="#1B3B2B"
        />
        <path
          d="M60 80 L38 64 M60 80 L82 64 M60 56 L41 40 M60 56 L79 40"
          stroke="#1B3B2B"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M60 13 C49 25, 49 38, 60 45 C71 38, 71 25, 60 13 Z"
          fill="#1B3B2B"
        />
        <path d="M60 21 L60 39" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
        <path
          d="M27 27 C26 40, 36 47, 49 45 C47 33, 38 26, 27 27 Z"
          fill="#1B3B2B"
        />
        <path d="M33 32 L44 41" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
        <path
          d="M93 27 C94 40, 84 47, 71 45 C73 33, 82 26, 93 27 Z"
          fill="#1B3B2B"
        />
        <path d="M87 32 L76 41" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
        <path
          d="M22 55 C24 68, 35 74, 48 69 C45 57, 35 53, 22 55 Z"
          fill="#1B3B2B"
        />
        <path d="M29 59 L43 66" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
        <path
          d="M98 55 C96 68, 85 74, 72 69 C75 57, 85 53, 98 55 Z"
          fill="#1B3B2B"
        />
        <path d="M91 59 L77 66" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
      </svg>

      <div className="flex items-center gap-2.5 mt-1.5 w-full justify-center">
        <span className="h-[1px] w-8 bg-[#2D5A43]" />
        <span className="text-[10px] tracking-[0.35em] font-semibold text-[#1B3B2B]">
          GRUPO
        </span>
        <span className="h-[1px] w-8 bg-[#2D5A43]" />
      </div>

      <div
        className={`${
          size === 'lg' ? 'text-3xl' : 'text-2xl'
        } font-black tracking-[0.08em] text-[#1B3B2B] leading-none mt-0.5`}
        style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
      >
        MARTINS
      </div>

      <div className="flex items-center justify-center gap-2.5 mt-2.5 pt-2 border-t border-[#DFD8CE] w-full">
        <div className="flex items-center gap-1.5 text-left">
          <svg viewBox="0 0 32 32" className="w-5 h-5 shrink-0">
            <path
              d="M16 28 L16 16 M16 22 C10 22, 5 17, 6 10 C12 10, 16 15, 16 22 Z"
              fill="#1B3B2B"
            />
            <path
              d="M16 24 C23 24, 28 18, 27 9 C20 9, 16 15, 16 24 Z"
              fill="#557A46"
            />
          </svg>
          <div className="leading-none">
            <div className="text-[8px] font-extrabold tracking-tight text-[#1B3B2B]">
              SOLUÇÕES AMBIENTAIS
            </div>
            <div className="text-[6.5px] tracking-widest text-[#3B5246] mt-0.5">
              E ASSOCIADOS
            </div>
          </div>
        </div>

        <div className="h-6 w-[1px] bg-[#2D5A43]/40" />

        <div className="flex items-center gap-1.5 text-left">
          <div className="w-6 h-6 rounded-full border-[1.5px] border-[#1B3B2B] flex items-center justify-center text-[8px] font-black text-[#1B3B2B] shrink-0">
            MS
          </div>
          <div className="leading-none">
            <div className="text-[8px] font-extrabold tracking-tight text-[#1B3B2B]">
              SEGURANÇA DO TRABALHO
            </div>
            <div className="text-[6px] tracking-wider text-[#3B5246] mt-0.5">
              SAÚDE • SEGURANÇA • TRABALHO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const MONTH_NAMES_MAP = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };

const ANOS_DRE = Array.from({ length: 15 }, (_, i) => 2026 + i);

const INITIAL_PLANO_CONTAS = {
  receitas: [
    { codigo: '1.1.01', nome: '1.1.01 — Licenciamento Ambiental (LP / LI / LO)' },
    { codigo: '1.1.02', nome: '1.1.02 — Planos Ambientais (PRAD / PGRS) e Auditorias' },
    { codigo: '1.1.03', nome: '1.1.03 — CAR, Georreferenciamento e Outorga de Água' },
    { codigo: '1.1.04', nome: '1.1.04 — Segurança do Trabalho (PGR / PCMSO / LTCAT)' },
    { codigo: '1.1.05', nome: '1.1.05 — Gestão de eSocial SST e Treinamentos NRs' },
    { codigo: '1.2.01', nome: '1.2.01 — Receitas Financeiras (Juros e Multas por Atraso)' }
  ],
  despesas: [
    { codigo: '2.1.01', nome: '2.1.01 — Impostos sobre Faturamento (ISS / Simples / PIS-COFINS)' },
    { codigo: '2.2.01', nome: '2.2.01 — Taxas de Órgãos (SEMA-MT / IBAMA / CREA / ART)' },
    { codigo: '2.2.02', nome: '2.2.02 — Análises Laboratoriais (Água / Solo / Efluentes) e Laudos' },
    { codigo: '2.2.03', nome: '2.2.03 — Topografia, Geoprocessamento e Vistorias de Campo' },
    { codigo: '2.3.01', nome: '2.3.01 — Deslocamento, Combustível e Diárias Técnicas' },
    { codigo: '2.4.01', nome: '2.4.01 — Saque de Pró-Labore — Sócio Maikon Martins' },
    { codigo: '2.4.02', nome: '2.4.02 — Folha de Pagamento Equipe Técnica e Encargos' },
    { codigo: '2.5.01', nome: '2.5.01 — Comissões Comerciais e Prospecção de Clientes' },
    { codigo: '2.6.01', nome: '2.6.01 — Softwares Técnicos (AutoCAD / QGIS / Sistema SST)' },
    { codigo: '2.7.01', nome: '2.7.01 — Aluguel, Energia, Internet e Infraestrutura' },
    { codigo: '2.8.01', nome: '2.8.01 — Tarifas Bancárias, Marketing e Despesas Gerais' }
  ]
};

const INITIAL_PARAMETERS = {
  saldoInicialCaixa: 35000,
  metaMensalReceita: 38000,
  proLaboreAlvoMensal: 8000,
  margemLiquidaAlvo: 0.45,
  socioDiretor: 'Maikon Martins',
  cargoSocio: 'Sócio-Diretor & Responsável Técnico',
  cnpj: '48.921.654/0001-82',
  cidadeSede: 'Rondonópolis — MT'
};

const INITIAL_SEGMENTS = [
  'Agronegócio / Propriedade Rural',
  'Indústria / Agroindústria',
  'Construtora / Loteamento',
  'Transporte / Logística',
  'Comércio / Serviços',
  'Saúde / Hospitalar'
];

const INITIAL_STATUSES = [
  'Ativo',
  'Em Prospecção',
  'Pendência Documental',
  'Inativo'
];

const INITIAL_AGENCIES = [
  'SEMA-MT',
  'IBAMA',
  'PREFEITURA',
  'SST / eSocial',
  'CREA-MT'
];

const DEFAULT_PERMISSIONS = {
  dashboard: { view: true, create: false, edit: false, delete: false, approve: false },
  prolabore: { view: false, create: false, edit: false, delete: false, approve: false },
  lancamentos: { view: true, create: true, edit: true, delete: false, approve: true },
  dre: { view: true, create: false, edit: false, delete: false, approve: false },
  contratos: { view: true, create: true, edit: true, delete: false, approve: false },
  clientes: { view: true, create: true, edit: true, delete: false, approve: false },
  condicionantes: { view: true, create: true, edit: true, delete: true, approve: false },
  acessos: { view: false, create: false, edit: false, delete: false, approve: false }
};

const INITIAL_ACCESS_ROLES = [
  {
    id: 'ROLE-01-PEDRO',
    level: 'Nível 1 — Master',
    name: 'Master',
    holder: 'Pedro Melo',
    email: 'pedrosmelos@gmail.com',
    password: 'Martins2027@',
    badgeColor: 'bg-[#1B3B2B] text-emerald-300',
    description: 'Acesso total e liberação máxima a todos os módulos estratégicos, aprovação de saques de Pró-Labore, DRE Gerencial, contratos e governança do sistema.',
    permissions: {
      dashboard: { view: true, create: true, edit: true, delete: true, approve: true },
      prolabore: { view: true, create: true, edit: true, delete: true, approve: true },
      lancamentos: { view: true, create: true, edit: true, delete: true, approve: true },
      dre: { view: true, create: true, edit: true, delete: true, approve: true },
      contratos: { view: true, create: true, edit: true, delete: true, approve: true },
      clientes: { view: true, create: true, edit: true, delete: true, approve: true },
      condicionantes: { view: true, create: true, edit: true, delete: true, approve: true },
      acessos: { view: true, create: true, edit: true, delete: true, approve: true }
    }
  }
];

const formatCurrency = (val) => {
  if (val === undefined || val === null || isNaN(val)) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCloudSynced, setIsCloudSynced] = useState(false);

  const [transactions, setTransactions] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [clients, setClients] = useState([]);
  const [condicionantes, setCondicionantes] = useState([]);

  const [selectedDreYear, setSelectedDreYear] = useState(2026);

  const [planoContasData, setPlanoContasData] = useState(INITIAL_PLANO_CONTAS);
  const [showPlanoModal, setShowPlanoModal] = useState(false);
  const [planoForm, setPlanoForm] = useState({ tipo: 'receitas', codigo: '', nome: '', originalCodigo: null });

  const [editingRoleTarget, setEditingRoleTarget] = useState(null);

  // Estados para Cadastro, Edição e Exclusão de Segmentos e Status do CRM
  const [availableSegments, setAvailableSegments] = useState(INITIAL_SEGMENTS);
  const [showSegmentManager, setShowSegmentManager] = useState(false);
  const [segmentInput, setSegmentInput] = useState('');
  const [editingSegmentOriginal, setEditingSegmentOriginal] = useState(null);

  const [availableStatuses, setAvailableStatuses] = useState(INITIAL_STATUSES);
  const [showStatusManager, setShowStatusManager] = useState(false);
  const [statusInput, setStatusInput] = useState('');
  const [editingStatusOriginal, setEditingStatusOriginal] = useState(null);

  // Estados para Cadastro, Edição e Exclusão de Órgãos / Setores dos Contratos
  const [availableAgencies, setAvailableAgencies] = useState(INITIAL_AGENCIES);
  const [showAgencyManager, setShowAgencyManager] = useState(false);
  const [agencyInput, setAgencyInput] = useState('');
  const [editingAgencyOriginal, setEditingAgencyOriginal] = useState(null);

  const [accessRoles, setAccessRoles] = useState(INITIAL_ACCESS_ROLES);
  const [activeRoleId, setActiveRoleId] = useState('ROLE-01-PEDRO');
  const [authLoggedIn, setAuthLoggedIn] = useState(false);
  const [authEmailInput, setAuthEmailInput] = useState('');
  const [authPasswordInput, setAuthPasswordInput] = useState('');
  const [authErrorMsg, setAuthErrorMsg] = useState('');

  const [params, setParams] = useState(INITIAL_PARAMETERS);

  const [showUserRoleModal, setShowUserRoleModal] = useState(false);
  const [editingRolePermissions, setEditingRolePermissions] = useState(null);
  const [newRoleForm, setNewRoleForm] = useState({
    level: 'Nível Especial — Colaborador',
    name: '',
    holder: '',
    email: '',
    password: 'martins2026',
    description: ''
  });

  const [txSearch, setTxSearch] = useState('');
  const [txTypeFilter, setTxTypeFilter] = useState('Todos');
  const [txCategoryFilter, setTxCategoryFilter] = useState('Todas');
  const [txStatusFilter, setTxStatusFilter] = useState('Todos');

  const [ctSearch, setCtSearch] = useState('');
  const [ctStatusFilter, setCtStatusFilter] = useState('Todos');
  const [ctDueDateFilter, setCtDueDateFilter] = useState('Todos');

  const [cliSearch, setCliSearch] = useState('');

  const [condSearch, setCondSearch] = useState('');
  const [condStatusFilter, setCondStatusFilter] = useState('Todos');
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const [showCondModal, setShowCondModal] = useState(false);
  const [editingCond, setEditingCond] = useState(null);
  const [deleteCondTarget, setDeleteCondTarget] = useState(null);

  const [condForm, setCondForm] = useState({
    client: '',
    service: '',
    dueDate: new Date().toISOString().split('T')[0],
    license: '',
    responsible: '',
    observation: '',
    status: 'EM ANDAMENTO'
  });

  const [showTxModal, setShowTxModal] = useState(false);
  const [editingTx, setEditingTx] = useState(null);
  const [deleteTxTarget, setDeleteTxTarget] = useState(null);
  
  const [showContractModal, setShowContractModal] = useState(false);
  const [editingContract, setEditingContract] = useState(null);
  const [deleteContractTarget, setDeleteContractTarget] = useState(null);
  const [viewingContractInstallments, setViewingContractInstallments] = useState(null);

  const [receivingInstallmentData, setReceivingInstallmentData] = useState(null);
  const [receiveForm, setReceiveForm] = useState({
    paymentDate: new Date().toISOString().split('T')[0],
    interestAmount: ''
  });

  const [cancelInstallmentTarget, setCancelInstallmentTarget] = useState(null);

  const [showClientModal, setShowClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [deleteClientTarget, setDeleteClientTarget] = useState(null);

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const [txForm, setTxForm] = useState({
    date: '2026-11-10',
    month: 'Nov',
    type: 'Entrada',
    planoContas: INITIAL_PLANO_CONTAS.receitas[0].codigo,
    category: INITIAL_PLANO_CONTAS.receitas[0].nome,
    entity: '',
    contractId: '—',
    description: '',
    paymentMethod: 'PIX',
    status: 'Pago / Recebido',
    amount: ''
  });

  const [ctForm, setCtForm] = useState({
    client: '',
    service: '',
    agency: INITIAL_AGENCIES[0],
    status: 'Em Elaboração Técnica',
    contractValue: '',
    directCosts: '',
    installmentsCount: '1',
    installmentDates: [`2026-12-30`, '', '', '', '', '', '', '', '', '', '', ''],
    installmentAmounts: ['', '', '', '', '', '', '', '', '', '', '', ''],
    paymentMethod: 'PIX',
    observation: ''
  });

  const [cliForm, setCliForm] = useState({
    name: '',
    document: '',
    registration: '',
    segment: INITIAL_SEGMENTS[0],
    city: 'Rondonópolis — MT',
    contactName: '',
    phone: '',
    email: '',
    mainProgram: 'Licenciamento Ambiental (LP / LI / LO)',
    status: INITIAL_STATUSES[0]
  });

  // Salva configurações globais no Supabase em Tempo Real (incluindo Órgãos/Setores)
  const syncSettingsToCloud = async (newSegments, newStatuses, newPlano, newParams, newAgencies) => {
    if (!supabase) return;
    const payload = {
      id: 'GLOBAL',
      segments: newSegments || availableSegments,
      statuses: newStatuses || availableStatuses,
      plano_contas: newPlano || planoContasData,
      params: newParams || params,
      agencies: newAgencies || availableAgencies
    };
    try {
      await supabase.from('erp_settings').upsert([payload]);
    } catch (err) {
      console.error('Erro ao sincronizar configurações:', err);
    }
  };

  // Funções de Gerenciamento de Órgãos / Setores dos Contratos
  const handleSaveAgency = async () => {
    const clean = agencyInput.trim();
    if (!clean) return;
    let updatedList;
    if (editingAgencyOriginal) {
      updatedList = availableAgencies.map(a => a === editingAgencyOriginal ? clean : a);
      setContracts(prev => prev.map(c => c.agency === editingAgencyOriginal ? { ...c, agency: clean } : c));
    } else {
      if (availableAgencies.includes(clean)) {
        alert('Este órgão já está cadastrado.');
        return;
      }
      updatedList = [...availableAgencies, clean];
    }
    setAvailableAgencies(updatedList);
    setCtForm(prev => ({ ...prev, agency: clean }));
    setAgencyInput('');
    setEditingAgencyOriginal(null);
    await syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, params, updatedList);
    showToast(editingAgencyOriginal ? 'Órgão atualizado!' : 'Novo órgão cadastrado!');
  };

  const handleDeleteAgency = async (agToDelete) => {
    if (availableAgencies.length <= 1) {
      alert('Mantenha pelo menos 1 órgão disponível.');
      return;
    }
    const updatedList = availableAgencies.filter(a => a !== agToDelete);
    setAvailableAgencies(updatedList);
    if (ctForm.agency === agToDelete) {
      setCtForm(prev => ({ ...prev, agency: updatedList[0] }));
    }
    await syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, params, updatedList);
    showToast('Órgão removido!');
  };

  // Funções de Gerenciamento de Segmentos do CRM
  const handleSaveSegment = async () => {
    const clean = segmentInput.trim();
    if (!clean) return;
    let updatedList;
    if (editingSegmentOriginal) {
      updatedList = availableSegments.map(s => s === editingSegmentOriginal ? clean : s);
      setClients(prev => prev.map(c => c.segment === editingSegmentOriginal ? { ...c, segment: clean } : c));
    } else {
      if (availableSegments.includes(clean)) {
        alert('Este segmento já está cadastrado.');
        return;
      }
      updatedList = [...availableSegments, clean];
    }
    setAvailableSegments(updatedList);
    setCliForm(prev => ({ ...prev, segment: clean }));
    setSegmentInput('');
    setEditingSegmentOriginal(null);
    await syncSettingsToCloud(updatedList, availableStatuses, planoContasData, params, availableAgencies);
    showToast(editingSegmentOriginal ? 'Segmento atualizado!' : 'Novo segmento adicionado!');
  };

  const handleDeleteSegment = async (segToDelete) => {
    if (availableSegments.length <= 1) {
      alert('Mantenha pelo menos 1 segmento disponível.');
      return;
    }
    const updatedList = availableSegments.filter(s => s !== segToDelete);
    setAvailableSegments(updatedList);
    if (cliForm.segment === segToDelete) {
      setCliForm(prev => ({ ...prev, segment: updatedList[0] }));
    }
    await syncSettingsToCloud(updatedList, availableStatuses, planoContasData, params, availableAgencies);
    showToast('Segmento removido!');
  };

  // Funções de Gerenciamento de Status do CRM
  const handleSaveStatus = async () => {
    const clean = statusInput.trim();
    if (!clean) return;
    let updatedList;
    if (editingStatusOriginal) {
      updatedList = availableStatuses.map(s => s === editingStatusOriginal ? clean : s);
      setClients(prev => prev.map(c => c.status === editingStatusOriginal ? { ...c, status: clean } : c));
    } else {
      if (availableStatuses.includes(clean)) {
        alert('Este status já está cadastrado.');
        return;
      }
      updatedList = [...availableStatuses, clean];
    }
    setAvailableStatuses(updatedList);
    setCliForm(prev => ({ ...prev, status: clean }));
    setStatusInput('');
    setEditingStatusOriginal(null);
    await syncSettingsToCloud(availableSegments, updatedList, planoContasData, params, availableAgencies);
    showToast(editingStatusOriginal ? 'Status atualizado!' : 'Novo status adicionado!');
  };

  const handleDeleteStatus = async (stToDelete) => {
    if (availableStatuses.length <= 1) {
      alert('Mantenha pelo menos 1 status disponível.');
      return;
    }
    const updatedList = availableStatuses.filter(s => s !== stToDelete);
    setAvailableStatuses(updatedList);
    if (cliForm.status === stToDelete) {
      setCliForm(prev => ({ ...prev, status: updatedList[0] }));
    }
    await syncSettingsToCloud(availableSegments, updatedList, planoContasData, params, availableAgencies);
    showToast('Status removido!');
  };

  const handleCnpjBlur = async (cnpjValue) => {
    const cleanCnpj = cnpjValue.replace(/\D/g, '');
    if (cleanCnpj.length !== 14) {
      alert('O CNPJ deve conter exatamente 14 dígitos.');
      return;
    }

    showToast('Consultando CNPJ...');
    try {
      let response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cleanCnpj}`);
      if (!response.ok) {
        response = await fetch(`https://minhareceita.org/${cleanCnpj}`);
      }

      if (!response.ok) {
        throw new Error('CNPJ não encontrado.');
      }

      const data = await response.json();

      const razaoSocial = data.razao_social || data.nome_fantasia;
      const municipio = data.municipio || data.estabelecimento?.cidade?.nome;
      const uf = data.uf || data.estabelecimento?.estado?.sigla;
      const telefone = data.ddd_telefone_1 || data.estabelecimento?.telefone1;
      const emailCorretor = data.email || data.estabelecimento?.email;

      setCliForm(prev => ({
        ...prev,
        name: razaoSocial || prev.name,
        document: cnpjValue,
        city: municipio && uf ? `${municipio} — ${uf}` : prev.city,
        phone: telefone ? String(telefone) : prev.phone,
        email: emailCorretor || prev.email
      }));

      showToast('Dados preenchidos com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Não foi possível consultar automaticamente. Preencha os dados manualmente.');
    }
  };

  // Busca inicial completa do Supabase
  const fetchAllData = useCallback(async () => {
    if (!supabase) return;
    try {
      const [txRes, ctRes, cliRes, roleRes, condRes, settingsRes] = await Promise.all([
        supabase.from('transactions').select('*'),
        supabase.from('contracts').select('*'),
        supabase.from('clients').select('*'),
        supabase.from('user_roles').select('*'),
        supabase.from('condicionantes').select('*'),
        supabase.from('erp_settings').select('*').eq('id', 'GLOBAL').maybeSingle()
      ]);

      if (!txRes.error && txRes.data) {
        setTransactions(txRes.data);
        setIsCloudSynced(true);
      }
      if (!ctRes.error && ctRes.data) setContracts(ctRes.data);
      if (!cliRes.error && cliRes.data) setClients(cliRes.data);
      if (!roleRes.error && roleRes.data && roleRes.data.length > 0) {
        setAccessRoles(roleRes.data);
      } else if (supabase && (!roleRes.data || roleRes.data.length === 0)) {
        await supabase.from('user_roles').upsert(INITIAL_ACCESS_ROLES);
      }
      if (!condRes.error && condRes.data) {
        setCondicionantes(condRes.data);
      }
      if (!settingsRes.error && settingsRes.data) {
        if (settingsRes.data.segments?.length) setAvailableSegments(settingsRes.data.segments);
        if (settingsRes.data.statuses?.length) setAvailableStatuses(settingsRes.data.statuses);
        if (settingsRes.data.agencies?.length) setAvailableAgencies(settingsRes.data.agencies);
        if (settingsRes.data.plano_contas) setPlanoContasData(settingsRes.data.plano_contas);
        if (settingsRes.data.params) setParams(settingsRes.data.params);
      }
    } catch (err) {
      console.error('Supabase sync error:', err);
    }
  }, []);

  // Sincronização em Tempo Real Instantânea
  useEffect(() => {
    fetchAllData();
    if (!supabase) return;

    const applyRealtimeChange = (setter) => (payload) => {
      const { eventType, new: newRow, old: oldRow } = payload;
      setter((prev) => {
        if (eventType === 'INSERT') {
          const exists = prev.some((item) => item.id === newRow.id);
          return exists ? prev.map((item) => (item.id === newRow.id ? newRow : item)) : [...prev, newRow];
        }
        if (eventType === 'UPDATE') {
          const exists = prev.some((item) => item.id === newRow.id);
          return exists ? prev.map((item) => (item.id === newRow.id ? newRow : item)) : [...prev, newRow];
        }
        if (eventType === 'DELETE') {
          const deletedId = oldRow?.id;
          if (!deletedId) return prev;
          return prev.filter((item) => item.id !== deletedId);
        }
        return prev;
      });
      fetchAllData();
    };

    const channel = supabase
      .channel(`realtime-erp-${Date.now()}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'transactions' }, applyRealtimeChange(setTransactions))
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contracts' }, applyRealtimeChange(setContracts))
      .on('postgres_changes', { event: '*', schema: 'public', table: 'clients' }, applyRealtimeChange(setClients))
      .on('postgres_changes', { event: '*', schema: 'public', table: 'user_roles' }, applyRealtimeChange(setAccessRoles))
      .on('postgres_changes', { event: '*', schema: 'public', table: 'condicionantes' }, applyRealtimeChange(setCondicionantes))
      .on('postgres_changes', { event: '*', schema: 'public', table: 'erp_settings' }, (payload) => {
        const data = payload.new;
        if (data) {
          if (data.segments?.length) setAvailableSegments(data.segments);
          if (data.statuses?.length) setAvailableStatuses(data.statuses);
          if (data.agencies?.length) setAvailableAgencies(data.agencies);
          if (data.plano_contas) setPlanoContasData(data.plano_contas);
          if (data.params) setParams(data.params);
        }
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') setIsCloudSynced(true);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchAllData]);

  const currentRole = useMemo(() => {
    return accessRoles.find((r) => r.id === activeRoleId) || accessRoles[0];
  }, [accessRoles, activeRoleId]);

  const isRootMaster = useMemo(() => {
    if (!currentRole) return false;
    return (
      currentRole.id === 'ROLE-01-PEDRO' ||
      (currentRole.email && currentRole.email.toLowerCase() === 'pedrosmelos@gmail.com')
    );
  }, [currentRole]);

  const hasPermission = useCallback((moduleKey, actionKey = 'view') => {
    if (!currentRole) return false;
    if (isRootMaster && moduleKey === 'acessos') return true;
    if (!currentRole.permissions || !currentRole.permissions[moduleKey]) return false;
    return Boolean(currentRole.permissions[moduleKey][actionKey]);
  }, [currentRole, isRootMaster]);

  const navItems = useMemo(() => [
    { id: 'dashboard', label: 'Painel Executivo', icon: LayoutDashboard, badge: 'KPIs', permKey: 'dashboard' },
    { id: 'prolabore', label: 'Pró-Labore (Maikon Martins)', icon: UserCheck, badge: 'Sócio', permKey: 'prolabore' },
    { id: 'lancamentos', label: 'Livro Caixa & Lançamentos', icon: ArrowUpDown, badge: transactions.length, permKey: 'lancamentos' },
    { id: 'dre', label: 'DRE Gerencial Mensal', icon: FileSpreadsheet, badge: 'AV%', permKey: 'dre' },
    { id: 'contratos', label: 'Contratos Ambientais & SST', icon: Briefcase, badge: contracts.length, permKey: 'contratos' },
    { id: 'clientes', label: 'Cadastro de Clientes (CRM)', icon: Users, badge: clients.length, permKey: 'clientes' },
    { id: 'condicionantes', label: 'Controle de Condicionantes', icon: Leaf, badge: condicionantes.length, permKey: 'condicionantes' },
    { id: 'acessos', label: 'Árvore de Acessos & Perfis', icon: Network, badge: `${accessRoles.length} Nível`, permKey: 'acessos' },
    { id: 'config', label: 'Plano de Contas & Metas', icon: Settings, permKey: 'dashboard' }
  ], [transactions.length, contracts.length, clients.length, condicionantes.length, accessRoles.length]);

  useEffect(() => {
    const currentNav = navItems.find((item) => item.id === activeTab);
    if (currentNav && !hasPermission(currentNav.permKey, 'view')) {
      const firstAllowed = navItems.find((item) => hasPermission(item.permKey, 'view'));
      if (firstAllowed) {
        setActiveTab(firstAllowed.id);
      }
    }
  }, [activeTab, navItems, hasPermission]);

  const currentTabPermKey = useMemo(() => {
    const found = navItems.find((item) => item.id === activeTab);
    return found ? found.permKey : 'dashboard';
  }, [activeTab, navItems]);

  const isCurrentTabAllowed = hasPermission(currentTabPermKey, 'view');

  const dreGerencialData = useMemo(() => {
    const monthsFull = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    const getVal = (codigoConta, mesStr, anoNum) => {
      return transactions
        .filter(t => t.status === 'Pago / Recebido' && (t.planocontas === codigoConta || t.planoContas === codigoConta || (t.category || '').includes(codigoConta)))
        .filter(t => {
          if (t.date) {
            const txAno = parseInt(t.date.split('-')[0], 10);
            if (txAno !== anoNum) return false;
          }
          if (mesStr) {
            const mName = t.month || (t.date ? MONTH_NAMES_MAP[t.date.split('-')[1]] : '');
            if (mName !== mesStr) return false;
          }
          return true;
        })
        .reduce((sum, cur) => sum + Number(cur.amount || 0), 0);
    };

    const receitasRows = planoContasData.receitas.map(rev => {
      const mensalValues = {};
      let totalAno = 0;
      monthsFull.forEach(m => {
        const val = getVal(rev.codigo, m, selectedDreYear);
        mensalValues[m] = val;
        totalAno += val;
      });
      return { codigo: rev.codigo, nome: rev.nome, mensalValues, totalAnual: totalAno };
    });

    const receitaBrutaTotalAnual = receitasRows.reduce((acc, r) => acc + r.totalAnual, 0);

    const despesasRows = planoContasData.despesas.map(desp => {
      const mensalValues = {};
      let totalAno = 0;
      monthsFull.forEach(m => {
        const val = getVal(desp.codigo, m, selectedDreYear);
        mensalValues[m] = val;
        totalAno += val;
      });
      return { codigo: desp.codigo, nome: desp.nome, mensalValues, totalAnual: totalAno };
    });

    const impostosRows = despesasRows.filter(d => d.codigo.startsWith('2.1'));
    const custosDiretosRows = despesasRows.filter(d => d.codigo.startsWith('2.2') || d.codigo.startsWith('2.3'));
    const despesasOpRows = despesasRows.filter(d => d.codigo >= '2.4');

    const sumRowsMonth = (rows, m) => rows.reduce((acc, r) => acc + (r.mensalValues[m] || 0), 0);
    const sumRowsTotal = (rows) => rows.reduce((acc, r) => acc + r.totalAnual, 0);

    const impostoTotalAnual = sumRowsTotal(impostosRows);
    const receitaLiquidaTotalAnual = receitaBrutaTotalAnual - impostoTotalAnual;
    const custosDiretosTotalAnual = sumRowsTotal(custosDiretosRows);
    const lucroBrutoTotalAnual = receitaLiquidaTotalAnual - custosDiretosTotalAnual;
    const despesasOpTotalAnual = sumRowsTotal(despesasOpRows);
    const lucroLiquidoTotalAnual = lucroBrutoTotalAnual - despesasOpTotalAnual;

    return {
      selectedDreYear,
      monthsFull,
      receitasRows,
      receitaBrutaTotalAnual,
      impostosRows,
      impostoTotalAnual,
      receitaLiquidaTotalAnual,
      custosDiretosRows,
      custosDiretosTotalAnual,
      lucroBrutoTotalAnual,
      despesasOpRows,
      despesasOpTotalAnual,
      lucroLiquidoTotalAnual,
      sumRowsMonth,
      sumRowsTotal
    };
  }, [transactions, planoContasData, selectedDreYear]);

  const financialData = useMemo(() => {
    const receitaBrutaAnual = transactions.filter((t) => t.type === 'Entrada').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const saidasTotaisAnual = transactions.filter((t) => t.type === 'Saída').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const lucroLiquidoAnual = receitaBrutaAnual - saidasTotaisAnual;
    
    const proLaboreTotalAnual = transactions.filter((t) => (t.category || t.planocontas || t.planoContas || '').includes('Pró-Labore')).reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const proLaborePago = transactions.filter((t) => (t.category || t.planocontas || t.planoContas || '').includes('Pró-Labore') && t.status === 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const entradasRealizadas = transactions.filter((t) => t.type === 'Entrada' && t.status === 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const saidasRealizadas = transactions.filter((t) => t.type === 'Saída' && t.status === 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const saldoAtualCaixa = Number(params.saldoInicialCaixa || 0) + entradasRealizadas - saidasRealizadas;

    const contasAReceber = transactions.filter((t) => t.type === 'Entrada' && t.status !== 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const contasAPagar = transactions.filter((t) => t.type === 'Saída' && t.status !== 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    let runningBalance = Number(params.saldoInicialCaixa || 0);
    const monthlySeries = MONTHS.map((m) => {
      const mTxs = transactions.filter((t) => t.month === m);
      const entradas = mTxs.filter((t) => t.type === 'Entrada').reduce((a, b) => a + Number(b.amount || 0), 0);
      const saidas = mTxs.filter((t) => t.type === 'Saída').reduce((a, b) => a + Number(b.amount || 0), 0);
      const resultadoLiquido = entradas - saidas;
      runningBalance += resultadoLiquido;
      return { month: m, entradas, saidas, resultadoLiquido, saldoAcumulado: runningBalance };
    });

    const revenueByCategory = planoContasData.receitas.map((rev) => {
      const value = transactions.filter(t => (t.planocontas === rev.codigo || t.planoContas === rev.codigo || t.category === rev.nome)).reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
      return { category: rev.nome, shortName: rev.nome.split(' — ')[1] || rev.nome, value, share: receitaBrutaAnual > 0 ? value / receitaBrutaAnual : 0 };
    }).sort((a, b) => b.value - a.value);

    const totalContratado = contracts.reduce((acc, c) => acc + Number(c.contractvalue || c.contractValue || 0), 0);
    const totalRecebidoContratos = contracts.reduce((acc, c) => {
      const insts = c.installmentsData || c.installmentsdata || [];
      const pagoInsts = insts.filter(i => i.status === 'Pago').reduce((sum, i) => sum + Number(i.amount || 0), 0);
      return acc + pagoInsts;
    }, 0);
    const saldoAFaturar = totalContratado - totalRecebidoContratos;
    
    let totalCustoContratos = contracts.reduce((acc, c) => acc + Number(c.directcosts || c.directCosts || 0), 0);
    const margemMedia = totalContratado > 0 ? ((totalContratado - totalCustoContratos) / totalContratado) * 100 : 88.2;

    return {
      receitaBrutaAnual,
      saidasTotaisAnual,
      lucroLiquidoAnual,
      proLaboreTotalAnual,
      proLaborePago,
      saldoAtualCaixa,
      contasAReceber,
      contasAPagar,
      monthlySeries,
      revenueByCategory,
      totalContratado,
      totalRecebidoContratos,
      saldoAFaturar,
      margemMedia
    };
  }, [transactions, contracts, params, planoContasData]);

  const handleToggleStatus = async (id) => {
    if (!hasPermission('lancamentos', 'approve') && !hasPermission('lancamentos', 'edit')) {
      showToast('Sem permissão para alterar o status de lançamentos.');
      return;
    }
    const item = transactions.find(t => t.id === id);
    if (!item) return;
    const nextStatus = item.status === 'Pago / Recebido' ? 'Pendente' : 'Pago / Recebido';
    const updatedItem = { ...item, status: nextStatus };
    setTransactions(prev => prev.map(t => t.id === id ? updatedItem : t));
    if (supabase) await supabase.from('transactions').upsert(updatedItem);
    showToast('Status atualizado!');
  };

  const handleSaveTransaction = async (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(String(txForm.amount).replace(',', '.'));
    if (!txForm.entity || isNaN(numericAmount) || numericAmount <= 0) {
      alert('Preencha o favorecido e o valor corretamente.');
      return;
    }

    try {
      const txId = editingTx ? editingTx.id : `MT-${Date.now().toString().slice(-5)}`;
      const txData = { 
        id: txId, 
        date: txForm.date,
        month: txForm.month,
        type: txForm.type,
        planocontas: txForm.planocontas || txForm.planoContas,
        category: txForm.category,
        entity: txForm.entity,
        contractid: txForm.contractId || txForm.contractid || '—',
        description: txForm.description,
        paymentmethod: txForm.paymentMethod || txForm.paymentmethod || 'PIX',
        status: txForm.status,
        amount: numericAmount 
      };

      if (supabase) {
        const { error } = await supabase.from('transactions').upsert([txData]);
        if (error) {
          console.error('Erro Supabase Lançamento:', error);
          alert('Erro ao salvar lançamento na nuvem: ' + error.message);
          return;
        }
      }

      setTransactions(prev => {
        const exists = prev.some(t => t.id === txId);
        return exists ? prev.map(t => t.id === txId ? txData : t) : [...prev, txData];
      });

      showToast('Lançamento salvo na nuvem com sucesso!');
      setShowTxModal(false);
      setEditingTx(null);
    } catch (err) {
      console.error('Erro crítico:', err);
      alert('Erro inesperado ao salvar lançamento.');
    }
  };

  const confirmDeleteTransaction = async () => {
    if (!deleteTxTarget) return;
    const id = deleteTxTarget.id;
    setTransactions(prev => prev.filter(t => t.id !== id));
    if (supabase) {
      await supabase.from('transactions').delete().eq('id', id);
    }
    showToast('Lançamento excluído com sucesso!');
    setDeleteTxTarget(null);
  };

  const handleSaveContract = async (e) => {
    e.preventDefault();
    const contractVal = parseFloat(String(ctForm.contractValue).replace(',', '.')) || 0;
    const directVal = parseFloat(String(ctForm.directCosts).replace(',', '.')) || 0;
    const nInstallments = parseInt(ctForm.installmentsCount) || 1;
    if (!ctForm.client || contractVal <= 0) return;

    try {
      const contractId = editingContract ? editingContract.id : `CT-${selectedDreYear}-${Date.now().toString().slice(-4)}`;
      
      let installments = [];
      const defaultInstVal = contractVal / nInstallments;

      for (let i = 0; i < nInstallments; i++) {
        const customAmt = parseFloat(String(ctForm.installmentAmounts?.[i]).replace(',', '.'));
        const instVal = !isNaN(customAmt) && customAmt > 0 ? customAmt : defaultInstVal;
        
        const existingInst = editingContract?.installmentsData?.[i] || editingContract?.installmentsdata?.[i];
        installments.push({
          number: i + 1,
          amount: instVal,
          dueDate: ctForm.installmentDates?.[i] || `${selectedDreYear}-12-30`,
          status: existingInst ? existingInst.status : 'Pendente',
          paymentDate: existingInst?.paymentDate || existingInst?.paymentdate || null,
          interestPaid: existingInst?.interestPaid || existingInst?.interestpaid || 0
        });
      }

      const contractData = {
        id: contractId,
        client: ctForm.client,
        service: ctForm.service,
        agency: ctForm.agency,
        status: ctForm.status,
        contractvalue: contractVal,
        receivedvalue: installments.filter(i => i.status === 'Pago').reduce((acc, cur) => acc + Number(cur.amount), 0),
        directcosts: directVal,
        installmentscount: String(nInstallments),
        paymentmethod: ctForm.paymentMethod,
        installmentsdata: installments,
        observation: ctForm.observation || ''
      };

      if (supabase) {
        const { error } = await supabase.from('contracts').upsert([contractData]);
        if (error) {
          console.error('Erro Supabase Contrato:', error);
          alert('Erro ao salvar contrato na nuvem: ' + error.message);
          return;
        }
      }

      setContracts(prev => {
        const exists = prev.some(c => c.id === contractId);
        return exists ? prev.map(c => c.id === contractId ? contractData : c) : [...prev, contractData];
      });

      showToast('Contrato salvo permanentemente na nuvem!');
      setShowContractModal(false);
      setEditingContract(null);
      setShowAgencyManager(false);
    } catch (err) {
      console.error('Erro ao salvar contrato:', err);
      alert('Erro inesperado ao salvar contrato.');
    }
  };

  const handleConfirmReceiveInstallment = async () => {
    if (!receivingInstallmentData) return;
    const { contractId, installmentNumber } = receivingInstallmentData;
    
    const contract = contracts.find(c => c.id === contractId);
    if (!contract) return;

    const targetInst = (contract.installmentsData || contract.installmentsdata).find(i => i.number === installmentNumber);
    if (!targetInst) return;

    const baseAmount = Number(targetInst.amount || 0);
    const interest = parseFloat(String(receiveForm.interestAmount).replace(',', '.')) || 0;
    const payDate = receiveForm.paymentDate || new Date().toISOString().split('T')[0];

    const updatedInstallments = (contract.installmentsData || contract.installmentsdata).map(inst => {
      if (inst.number === installmentNumber) {
        return { 
          ...inst, 
          status: 'Pago', 
          paymentDate: payDate, 
          interestPaid: interest,
          totalPaid: baseAmount + interest 
        };
      }
      return inst;
    });

    const receivedSum = updatedInstallments.filter(i => i.status === 'Pago').reduce((acc, cur) => acc + Number(cur.amount), 0);

    const updatedContract = {
      ...contract,
      receivedvalue: receivedSum,
      installmentsdata: updatedInstallments
    };

    setContracts(prev => prev.map(c => c.id === contractId ? updatedContract : c));
    if (supabase) {
      await supabase.from('contracts').upsert([updatedContract]);
    }

    const monthNames = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };
    const monthNum = payDate.split('-')[1] || '12';
    const monthStr = monthNames[monthNum] || 'Dez';

    const newTransactionsList = [];

    const tId1 = `MT-${Date.now().toString().slice(-5)}`;
    const txPrincipal = {
      id: tId1,
      date: payDate,
      month: monthStr,
      type: 'Entrada',
      planocontas: '1.1.01',
      category: 'Licenciamento Ambiental (LP / LI / LO)',
      entity: contract.client,
      contractid: contractId,
      description: `Parcela ${installmentNumber}/${(contract.installmentsData || contract.installmentsdata).length} (${contract.paymentmethod || contract.paymentMethod}) — Contrato ${contractId}`,
      paymentmethod: contract.paymentmethod || contract.paymentMethod,
      status: 'Pago / Recebido',
      amount: baseAmount
    };
    newTransactionsList.push(txPrincipal);

    if (interest > 0) {
      const tId2 = `MT-${(Date.now() + 1).toString().slice(-5)}`;
      const txJuros = {
        id: tId2,
        date: payDate,
        month: monthStr,
        type: 'Entrada',
        planocontas: '1.2.01',
        category: 'Receitas Financeiras (Juros e Multas por Atraso)',
        entity: contract.client,
        contractid: contractId,
        description: `Juros / Multa Parcela ${installmentNumber} — Contrato ${contractId}`,
        paymentmethod: contract.paymentmethod || contract.paymentMethod,
        status: 'Pago / Recebido',
        amount: interest
      };
      newTransactionsList.push(txJuros);
    }

    setTransactions(prev => [...prev, ...newTransactionsList]);
    if (supabase) {
      await supabase.from('transactions').upsert(newTransactionsList);
    }

    setViewingContractInstallments(updatedContract);
    showToast(`Recebimento registrado com sucesso no Caixa!`);
    setReceivingInstallmentData(null);
    setReceiveForm({ paymentDate: new Date().toISOString().split('T')[0], interestAmount: '' });
  };

  const confirmCancelReceiveInstallment = async () => {
    if (!cancelInstallmentTarget) return;
    const { contractId, installmentNumber } = cancelInstallmentTarget;

    const contract = contracts.find(c => c.id === contractId);
    if (!contract) return;

    const instList = contract.installmentsData || contract.installmentsdata || [];
    const descPrefix1 = `Parcela ${installmentNumber}/${instList.length}`;
    const descPrefix2 = `Juros / Multa Parcela ${installmentNumber} — Contrato ${contractId}`;

    const updatedInstallments = instList.map(inst => {
      if (inst.number === installmentNumber) {
        return { 
          ...inst, 
          status: 'Pendente', 
          paymentDate: null, 
          interestPaid: 0,
          totalPaid: 0 
        };
      }
      return inst;
    });

    const receivedSum = updatedInstallments.filter(i => i.status === 'Pago').reduce((acc, cur) => acc + Number(cur.amount), 0);

    const updatedContract = {
      ...contract,
      receivedvalue: receivedSum,
      installmentsdata: updatedInstallments
    };

    setContracts(prev => prev.map(c => c.id === contractId ? updatedContract : c));
    if (supabase) {
      await supabase.from('contracts').upsert([updatedContract]);
    }

    const txsToRemove = transactions.filter(t => (t.contractid === contractId || t.contractId === contractId) && (t.description.includes(descPrefix1) || t.description.includes(descPrefix2)));
    const txIdsToRemove = txsToRemove.map(t => t.id);

    setTransactions(prev => prev.filter(t => !txIdsToRemove.includes(t.id)));

    if (supabase && txIdsToRemove.length > 0) {
      for (const tId of txIdsToRemove) {
        await supabase.from('transactions').delete().eq('id', tId);
      }
    }

    setViewingContractInstallments(updatedContract);
    showToast(`Recebimento da Parcela ${installmentNumber} cancelado e estornado do Caixa!`);
    setCancelInstallmentTarget(null);
  };

  const confirmDeleteContract = async () => {
    if (!deleteContractTarget) return;
    const contractId = deleteContractTarget.id;
    setContracts(prev => prev.filter(c => c.id !== contractId));
    if (supabase) {
      await supabase.from('contracts').delete().eq('id', contractId);
    }
    showToast(`Contrato ${contractId} excluído.`);
    setDeleteContractTarget(null);
  };

  const handleSaveClient = async (e) => {
    e.preventDefault();
    if (!cliForm.name) {
      alert('Por favor, preencha a Razão Social / Nome.');
      return;
    }

    try {
      const clientId = editingClient ? editingClient.id : `CLI-${Date.now().toString().slice(-4)}`;
      const clientData = {
        id: clientId,
        name: cliForm.name,
        document: cliForm.document || '',
        registration: cliForm.registration || '',
        segment: cliForm.segment,
        city: cliForm.city,
        contactname: cliForm.contactName || cliForm.contactname || '',
        phone: cliForm.phone || '',
        email: cliForm.email || '',
        mainprogram: cliForm.mainProgram || cliForm.mainprogram || 'Licenciamento Ambiental (LP / LI / LO)',
        status: cliForm.status
      };

      if (supabase) {
        const { error } = await supabase.from('clients').upsert([clientData]);
        if (error) {
          console.error('Erro detalhado do Supabase:', error);
          alert('Erro ao salvar no Supabase: ' + error.message);
          return;
        }
      }

      setClients(prev => {
        const exists = prev.some(c => c.id === clientId);
        return exists ? prev.map(c => c.id === clientId ? clientData : c) : [...prev, clientData];
      });

      setShowClientModal(false);
      setEditingClient(null);
      showToast('Cliente salvo com sucesso na nuvem!');
      
      setCliForm({
        name: '',
        document: '',
        registration: '',
        segment: availableSegments[0],
        city: 'Rondonópolis — MT',
        contactName: '',
        phone: '',
        email: '',
        mainProgram: 'Licenciamento Ambiental (LP / LI / LO)',
        status: availableStatuses[0]
      });

    } catch (err) {
      console.error('Erro crítico ao salvar:', err);
      alert('Erro ao processar o salvamento.');
    }
  };

  const confirmDeleteClient = async () => {
    if (!deleteClientTarget) return;
    const clientId = deleteClientTarget.id;
    setClients(prev => prev.filter(c => c.id !== clientId));
    if (supabase) {
      await supabase.from('clients').delete().eq('id', clientId);
    }
    showToast(`Cliente ${deleteClientTarget.name} excluído do CRM.`);
    setDeleteClientTarget(null);
  };

  const handleSaveCondicionante = async (e) => {
    e.preventDefault();
    if (!condForm.client || !condForm.service) {
      alert('Preencha o cliente e o serviço/condicionante.');
      return;
    }

    try {
      const condId = editingCond ? editingCond.id : `COND-${Date.now().toString().slice(-4)}`;
      const condData = {
        id: condId,
        client: condForm.client,
        service: condForm.service,
        duedate: condForm.dueDate || condForm.duedate,
        license: condForm.license,
        responsible: condForm.responsible,
        observation: condForm.observation,
        status: condForm.status
      };

      setCondicionantes(prev => {
        const exists = prev.some(c => c.id === condId);
        return exists ? prev.map(c => c.id === condId ? condData : c) : [...prev, condData];
      });

      if (supabase) {
        const { error } = await supabase.from('condicionantes').upsert([condData]);
        if (error) {
          console.error('Erro Supabase Condicionantes:', error);
          alert('Erro ao salvar condicionante na nuvem: ' + error.message);
          return;
        }
      }

      setShowCondModal(false);
      setEditingCond(null);
      showToast('Condicionante salva com sucesso na nuvem!');
      setCondForm({
        client: '',
        service: '',
        dueDate: new Date().toISOString().split('T')[0],
        license: '',
        responsible: '',
        observation: '',
        status: 'EM ANDAMENTO'
      });
    } catch (err) {
      console.error(err);
      alert('Erro inesperado ao salvar condicionante.');
    }
  };

  const confirmDeleteCondicionante = async () => {
    if (!deleteCondTarget) return;
    const id = deleteCondTarget.id;

    setCondicionantes(prev => prev.filter(c => c.id !== id));

    if (supabase) {
      const { error } = await supabase.from('condicionantes').delete().eq('id', id);
      if (error) {
        console.error('Erro ao excluir no Supabase:', error);
        alert('Erro ao excluir condicionante na nuvem: ' + error.message);
        return;
      }
    }

    showToast('Condicionante excluída com sucesso!');
    setDeleteCondTarget(null);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSaveNewUserRole = async (e) => {
    e.preventDefault();
    if (!newRoleForm.name || !newRoleForm.holder || !newRoleForm.email) {
      alert('Preencha Nome do Perfil, Titular e E-mail.');
      return;
    }

    const newRole = {
      id: `ROLE-${Date.now()}`,
      level: newRoleForm.level || 'Nível Especial — Colaborador',
      name: newRoleForm.name.trim(),
      holder: newRoleForm.holder.trim(),
      email: newRoleForm.email.trim().toLowerCase(),
      password: newRoleForm.password || 'martins2026',
      description: newRoleForm.description || 'Perfil personalizado de acesso.',
      permissions: JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS))
    };

    try {
      if (supabase) {
        const { error } = await supabase.from('user_roles').upsert([newRole]);
        if (error) {
          console.error('Erro Supabase ao salvar utilizador:', error);
          alert('Erro ao salvar utilizador na nuvem: ' + error.message);
          return;
        }
      }

      setAccessRoles((prev) => [...prev, newRole]);
      setShowUserRoleModal(false);
      setNewRoleForm({
        level: 'Nível Especial — Colaborador',
        name: '',
        holder: '',
        email: '',
        password: 'martins2026',
        description: ''
      });
      showToast('Novo utilizador cadastrado e salvo na nuvem!');
    } catch (err) {
      console.error('Erro inesperado:', err);
      alert('Erro ao processar o cadastro do utilizador.');
    }
  };

  const handlePermissionToggle = async (roleId, moduleKey, actionKey) => {
    let targetUpdated = null;
    const updatedRoles = accessRoles.map((role) => {
      if (role.id === roleId) {
        const currentVal = role.permissions?.[moduleKey]?.[actionKey] || false;
        const updatedRole = {
          ...role,
          permissions: {
            ...role.permissions,
            [moduleKey]: {
              ...(role.permissions?.[moduleKey] || {}),
              [actionKey]: !currentVal
            }
          }
        };
        targetUpdated = updatedRole;
        if (editingRolePermissions && editingRolePermissions.id === roleId) {
          setEditingRolePermissions(updatedRole);
        }
        return updatedRole;
      }
      return role;
    });

    setAccessRoles(updatedRoles);
    if (supabase && targetUpdated) {
      const { id, level, name, holder, email, password, description, permissions } = targetUpdated;
      const { error } = await supabase
        .from('user_roles')
        .upsert([{ id, level, name, holder, email, password, description, permissions }]);
      if (error) {
        console.error('Erro ao salvar permissão:', error);
        alert('Erro ao salvar permissão na nuvem: ' + error.message);
      }
    }
  };

  const handleSaveRoleEdit = async (e) => {
    e.preventDefault();
    if (!editingRoleTarget) return;

    const { id, level, name, holder, email, password, description, permissions } = editingRoleTarget;
    const cleanRole = { id, level, name, holder, email: email.trim().toLowerCase(), password, description, permissions };

    if (supabase) {
      const { error } = await supabase.from('user_roles').upsert([cleanRole]);
      if (error) {
        console.error('Erro ao editar perfil:', error);
        alert('Erro ao atualizar perfil na nuvem: ' + error.message);
        return;
      }
    }

    setAccessRoles((prev) => prev.map((r) => (r.id === cleanRole.id ? { ...r, ...cleanRole } : r)));
    showToast('Perfil e senha atualizados na nuvem!');
    setEditingRoleTarget(null);
  };

  const handleDeleteRole = async (roleId) => {
    if (accessRoles.length <= 1) {
      alert('Você não pode excluir o último perfil ativo do sistema.');
      return;
    }
    if (window.confirm('Deseja realmente excluir este perfil de acesso do sistema?')) {
      setAccessRoles(prev => prev.filter(r => r.id !== roleId));
      if (supabase) {
        await supabase.from('user_roles').delete().eq('id', roleId);
      }
      showToast('Perfil excluído com sucesso!');
      setEditingRoleTarget(null);
    }
  };

  const exportDREToExcel = () => {
    const { selectedDreYear, monthsFull, receitasRows, receitaBrutaTotalAnual, impostosRows, impostoTotalAnual, receitaLiquidaTotalAnual, custosDiretosRows, custosDiretosTotalAnual, despesasOpRows, despesasOpTotalAnual, lucroLiquidoTotalAnual } = dreGerencialData;
    
    let csv = "\uFEFF";
    csv += `ESTRUTURA DRE — GRUPO MARTINS (${selectedDreYear}) (R$);` + monthsFull.join(";") + `;ACUMULADO ${selectedDreYear};AV %\n`;
    
    csv += "1. RECEITA OPERACIONAL BRUTA;" + monthsFull.map(m => receitasRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0).toFixed(2)).join(";") + ";" + receitaBrutaTotalAnual.toFixed(2) + ";100,0%\n";
    receitasRows.forEach(r => {
      csv += "(+) " + r.nome + ";" + monthsFull.map(m => (r.mensalValues[m]||0).toFixed(2)).join(";") + ";" + r.totalAnual.toFixed(2) + ";" + (receitaBrutaTotalAnual > 0 ? ((r.totalAnual/receitaBrutaTotalAnual)*100).toFixed(1)+"%" : "0,0%") + "\n";
    });

    csv += "2. (-) DEDUÇÕES E IMPOSTOS SOBRE FATURAMENTO;" + monthsFull.map(m => impostosRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0).toFixed(2)).join(";") + ";" + impostoTotalAnual.toFixed(2) + ";\n";
    
    csv += "3. (=) RECEITA OPERACIONAL LÍQUIDA;" + monthsFull.map(m => (receitasRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0) - impostosRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0)).toFixed(2)).join(";") + ";" + receitaLiquidaTotalAnual.toFixed(2) + ";\n";

    csv += "4. (-) CUSTOS DIRETOS DE PROJETOS E CAMPO (CSP);" + monthsFull.map(m => custosDiretosRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0).toFixed(2)).join(";") + ";" + custosDiretosTotalAnual.toFixed(2) + ";\n";
    custosDiretosRows.forEach(r => {
      csv += "(-) " + r.nome + ";" + monthsFull.map(m => (r.mensalValues[m]||0).toFixed(2)).join(";") + ";" + r.totalAnual.toFixed(2) + ";\n";
    });

    csv += "5. (-) DESPESAS OPERACIONAIS, COMERCIAIS E PRÓ-LABORE;" + monthsFull.map(m => despesasOpRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0).toFixed(2)).join(";") + ";" + despesasOpTotalAnual.toFixed(2) + ";\n";
    despesasOpRows.forEach(r => {
      csv += "(-) " + r.nome + ";" + monthsFull.map(m => (r.mensalValues[m]||0).toFixed(2)).join(";") + ";" + r.totalAnual.toFixed(2) + ";\n";
    });

    csv += "6. (=) LUCRO LÍQUIDO DO EXERCÍCIO (APÓS PRÓ-LABORE);" + monthsFull.map(m => {
      const rec = receitasRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0);
      const imp = impostosRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0);
      const cus = custosDiretosRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0);
      const des = despesasOpRows.reduce((a,b)=>a+(b.mensalValues[m]||0),0);
      return (rec - imp - cus - des).toFixed(2);
    }).join(";") + ";" + lucroLiquidoTotalAnual.toFixed(2) + ";\n";

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `DRE_Gerencial_GrupoMartins_${selectedDreYear}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Planilha DRE (${selectedDreYear}) exportada com sucesso!`);
  };

  const filteredTransactions = useMemo(() => {
    let list = transactions.filter(t => {
      const matchSearch = (t.entity || '').toLowerCase().includes(txSearch.toLowerCase()) || 
                          (t.description || '').toLowerCase().includes(txSearch.toLowerCase()) ||
                          (t.id || '').toLowerCase().includes(txSearch.toLowerCase());
      const matchType = txTypeFilter === 'Todos' || t.type === txTypeFilter;
      const matchCategory = txCategoryFilter === 'Todas' || t.category === txCategoryFilter || t.planocontas === txCategoryFilter || t.planoContas === txCategoryFilter;
      const matchStatus = txStatusFilter === 'Todos' || t.status === txStatusFilter;

      return matchSearch && matchType && matchCategory && matchStatus;
    });

    if (sortField) {
      list.sort((a, b) => {
        let valA = a[sortField] || '';
        let valB = b[sortField] || '';
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return list;
  }, [transactions, txSearch, txTypeFilter, txCategoryFilter, txStatusFilter, sortField, sortDirection]);
  
  const filteredContracts = useMemo(() => {
    const todayStr = new Date().toISOString().split('T')[0];

    let list = contracts.filter(c => {
      const matchSearch = (c.client || '').toLowerCase().includes(ctSearch.toLowerCase()) ||
        (c.service || '').toLowerCase().includes(ctSearch.toLowerCase()) ||
        (c.id || '').toLowerCase().includes(ctSearch.toLowerCase()) ||
        (c.agency || '').toLowerCase().includes(ctSearch.toLowerCase()) ||
        (c.observation || '').toLowerCase().includes(ctSearch.toLowerCase());
      const matchStatus = ctStatusFilter === 'Todos' || c.status === ctStatusFilter;

      let matchDueDate = true;
      if (ctDueDateFilter !== 'Todos') {
        const insts = c.installmentsData || c.installmentsdata || [];
        const pendingInsts = insts.filter(i => i.status !== 'Pago');

        if (ctDueDateFilter === 'Vencidos') {
          matchDueDate = pendingInsts.some(i => i.dueDate && i.dueDate < todayStr);
        } else if (ctDueDateFilter === 'Hoje') {
          matchDueDate = pendingInsts.some(i => i.dueDate && i.dueDate === todayStr);
        } else if (ctDueDateFilter === 'AVencer') {
          matchDueDate = pendingInsts.some(i => i.dueDate && i.dueDate > todayStr);
        }
      }

      return matchSearch && matchStatus && matchDueDate;
    });

    if (sortField) {
      list.sort((a, b) => {
        let valA = a[sortField] || '';
        let valB = b[sortField] || '';
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return list;
  }, [contracts, ctSearch, ctStatusFilter, ctDueDateFilter, sortField, sortDirection]);

  const filteredClients = useMemo(() => {
    let list = clients.filter(cli => (cli.name || '').toLowerCase().includes(cliSearch.toLowerCase()));
    if (sortField) {
      list.sort((a, b) => {
        let valA = a[sortField] || '';
        let valB = b[sortField] || '';
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return list;
  }, [clients, cliSearch, sortField, sortDirection]);

  const filteredCondicionantes = useMemo(() => {
    let list = condicionantes.filter(cond => {
      const matchSearch = (cond.client || '').toLowerCase().includes(condSearch.toLowerCase()) ||
                          (cond.service || '').toLowerCase().includes(condSearch.toLowerCase()) ||
                          (cond.license || '').toLowerCase().includes(condSearch.toLowerCase()) ||
                          (cond.responsible || '').toLowerCase().includes(condSearch.toLowerCase());
      const matchStatus = condStatusFilter === 'Todos' || cond.status === condStatusFilter;

      return matchSearch && matchStatus;
    });

    if (sortField) {
      list.sort((a, b) => {
        let valA = a[sortField] || a[sortField?.toLowerCase()] || '';
        let valB = b[sortField] || b[sortField?.toLowerCase()] || '';
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return list;
  }, [condicionantes, condSearch, condStatusFilter, sortField, sortDirection]);

  const PIE_COLORS = ['#1B3B2B', '#2D5A43', '#3B7A57', '#557A46', '#7A9A8B'];

  return (
    <div className="min-h-screen flex bg-[#F4F7F5] text-slate-800 font-sans">
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-[#1B3B2B] text-[#F8F3EF] px-5 py-3.5 rounded-xl shadow-2xl border border-[#3B7A57] animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#1B3B2B] text-[#F8F3EF] flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          <div className="p-4 border-b border-[#2D5A43]">
            <GrupoMartinsLogo size="md" />
          </div>

          <div className="mx-4 mt-4 p-3.5 rounded-xl bg-[#244B38] border border-[#3B7A57]/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F8F3EF] text-[#1B3B2B] font-extrabold flex items-center justify-center text-sm shrink-0 shadow">
              {currentRole.holder.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider truncate flex items-center gap-1">
                {isCloudSynced ? <Cloud className="w-3 h-3 text-emerald-400" /> : <CloudRain className="w-3 h-3 text-amber-400" />}
                {isCloudSynced ? 'Nuvem Tempo Real Ativa' : 'Conectando...'}
              </div>
              <div className="text-sm font-bold text-white truncate">
                {currentRole.holder}
              </div>
              <div className="text-[11px] text-emerald-100/80 truncate">
                {currentRole.name}
              </div>
            </div>
          </div>

          <nav className="mt-4 px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const allowed = hasPermission(item.permKey, 'view');
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (!allowed) {
                      showToast(`Módulo "${item.label}" bloqueado para o perfil "${currentRole.name}".`);
                      return;
                    }
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive && allowed
                      ? 'bg-[#F8F3EF] text-[#1B3B2B] font-bold shadow-md'
                      : allowed
                      ? 'text-emerald-100/85 hover:bg-[#244B38] hover:text-white cursor-pointer'
                      : 'text-emerald-200/40 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive && allowed ? 'text-[#1B3B2B]' : allowed ? 'text-emerald-300' : 'text-emerald-600'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {!allowed ? (
                    <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  ) : (
                    item.badge !== undefined && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ${isActive ? 'bg-[#1B3B2B] text-[#F8F3EF]' : 'bg-[#2D5A43] text-emerald-200'}`}>
                        {item.badge}
                      </span>
                    )
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-[#2D5A43]">
          <div className="text-[11px] text-center text-emerald-200/70">
            Grupo Martins ERP v4.0 • Realtime Sync
          </div>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg bg-[#1B3B2B] text-white">
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E6F4EA] text-[#1B3B2B] border border-[#B7DFC5]">
                  ERP NUVEM TEMPO REAL
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  CNPJ: {params.cnpj} • {params.cidadeSede}
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-extrabold text-[#1B3B2B] mt-0.5">
                GRUPO MARTINS — Soluções Ambientais & MS Segurança do Trabalho
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 bg-[#F8F3EF] px-3 py-1.5 rounded-xl border border-[#D5CFC7]">
              <KeyRound className="w-3.5 h-3.5 text-[#1B3B2B] shrink-0" />
              <span className="text-xs font-extrabold text-[#1B3B2B]">
                {currentRole.name} ({currentRole.holder})
              </span>
              <button
                onClick={() => setAuthLoggedIn(false)}
                className="ml-2 px-2 py-0.5 rounded bg-[#1B3B2B] text-white text-[10px] font-bold hover:bg-[#2D5A43] cursor-pointer"
              >
                Sair
              </button>
            </div>

            {hasPermission('lancamentos', 'create') && (
              <button
                onClick={() => {
                  setEditingTx(null);
                  setTxForm({
                    date: '2026-11-10',
                    month: 'Nov',
                    type: 'Entrada',
                    planoContas: planoContasData.receitas[0].codigo,
                    category: planoContasData.receitas[0].nome,
                    entity: '',
                    contractId: '—',
                    description: '',
                    paymentMethod: 'PIX',
                    status: 'Pago / Recebido',
                    amount: ''
                  });
                  setShowTxModal(true);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] shadow cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Novo Lançamento
              </button>
            )}
          </div>
        </header>

        <main className="p-4 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {!isCurrentTabAllowed ? (
            <div className="bg-white rounded-2xl p-12 border border-slate-200 shadow-sm text-center space-y-4 max-w-lg mx-auto my-12">
              <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-extrabold text-[#1B3B2B]">Acesso Restrito</h2>
              <p className="text-xs text-slate-600">
                O perfil <strong>{currentRole.name} ({currentRole.holder})</strong> não possui a permissão de visualização (<strong>View</strong>) ativa para este módulo. Solicite a liberação ao administrador Master.
              </p>
            </div>
          ) : (
            <>
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#1B3B2B] via-[#244B38] to-[#2D5A43] rounded-2xl p-5 text-white shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-5">
                      <GrupoMartinsLogo size="compact" theme="cream" />
                      <div className="text-center sm:text-left">
                        <div className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                          Sistema Integrado Supabase
                        </div>
                        <h2 className="text-xl sm:text-2xl font-extrabold mt-0.5">
                          Painel Executivo Anual — Exercício 2026
                        </h2>
                        <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
                          Sócio-Diretor Responsável: <strong>{params.socioDiretor}</strong>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 bg-[#132A1F]/80 px-4 py-3 rounded-xl border border-emerald-500/30">
                      <div className="text-right">
                        <div className="text-[11px] text-emerald-300 uppercase font-semibold">
                          Saldo em Caixa
                        </div>
                        <div className="text-xl font-black text-white">
                          {formatCurrency(financialData.saldoAtualCaixa)}
                        </div>
                      </div>
                      <div className="h-9 w-[1px] bg-emerald-600/40 mx-1" />
                      <div className="text-right">
                        <div className="text-[11px] text-amber-300 uppercase font-semibold">
                          Pró-Labore Pago
                        </div>
                        <div className="text-xl font-black text-amber-300">
                          {formatCurrency(financialData.proLaborePago)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-[#1B3B2B] shadow-sm">
                      <div className="text-xs font-bold text-slate-500 uppercase">Receita Bruta</div>
                      <div className="text-lg font-black text-[#1B3B2B] mt-2">{formatCurrency(financialData.receitaBrutaAnual)}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-rose-700 shadow-sm">
                      <div className="text-xs font-bold text-slate-500 uppercase">Saídas Totais</div>
                      <div className="text-lg font-black text-rose-700 mt-2">{formatCurrency(financialData.saidasTotaisAnual)}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-emerald-600 shadow-sm">
                      <div className="text-xs font-bold text-slate-500 uppercase">Lucro Líquido</div>
                      <div className="text-lg font-black text-emerald-700 mt-2">{formatCurrency(financialData.lucroLiquidoAnual)}</div>
                    </div>
                    <div
                      onClick={() => {
                        if (hasPermission('prolabore', 'view')) setActiveTab('prolabore');
                        else showToast('Módulo Pró-Labore bloqueado para seu perfil.');
                      }}
                      className="bg-[#F8F3EF] rounded-2xl p-4 border border-[#D5CFC7] border-t-4 border-t-[#2D5A43] shadow-sm cursor-pointer hover:shadow-md transition"
                    >
                      <div className="text-xs font-bold text-[#1B3B2B] uppercase">Pró-Labore</div>
                      <div className="text-lg font-black text-[#1B3B2B] mt-2">{formatCurrency(financialData.proLaboreTotalAnual)}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-teal-700 shadow-sm">
                      <div className="text-xs font-bold text-slate-500 uppercase">Caixa Atual</div>
                      <div className="text-lg font-black text-teal-800 mt-2">{formatCurrency(financialData.saldoAtualCaixa)}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-amber-500 shadow-sm">
                      <div className="text-xs font-bold text-slate-500 uppercase">A Receber</div>
                      <div className="text-lg font-black text-amber-600 mt-2">{formatCurrency(financialData.contasAReceber)}</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-orange-600 shadow-sm">
                      <div className="text-xs font-bold text-slate-500 uppercase">A Pagar</div>
                      <div className="text-lg font-black text-orange-700 mt-2">{formatCurrency(financialData.contasAPagar)}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                      <h3 className="text-base font-extrabold text-[#1B3B2B] mb-4">Evolução Financeira Mensal (2026)</h3>
                      <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <ComposedChart data={financialData.monthlySeries}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                            <YAxis tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 11 }} />
                            <Tooltip formatter={(value) => formatCurrency(value)} />
                            <Legend wrapperStyle={{ fontSize: '12px' }} />
                            <Bar dataKey="entradas" name="Receita Bruta" fill="#1B3B2B" radius={[6, 6, 0, 0]} />
                            <Bar dataKey="saidas" name="Saídas" fill="#C53030" radius={[6, 6, 0, 0]} />
                            <Line type="monotone" dataKey="resultadoLiquido" name="Lucro Líquido" stroke="#3B7A57" strokeWidth={3} />
                          </ComposedChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                      <h3 className="text-base font-extrabold text-[#1B3B2B]">Faturamento por Área</h3>
                      <div className="h-56 w-full my-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={financialData.revenueByCategory} dataKey="value" nameKey="shortName" cx="50%" cy="50%" innerRadius={48} outerRadius={80} paddingAngle={3}>
                              {financialData.revenueByCategory.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => formatCurrency(value)} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="space-y-2">
                        {financialData.revenueByCategory.map((item) => (
                          <div key={item.category} className="flex items-center justify-between text-xs border-b border-slate-100 pb-1.5">
                            <span className="text-slate-700 font-medium truncate">{item.category}</span>
                            <span className="font-bold text-[#1B3B2B]">{formatCurrency(item.value)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'prolabore' && (
                <div className="space-y-6">
                  <div className="bg-[#F8F3EF] border-2 border-[#1B3B2B] rounded-2xl p-6 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-5">
                      <GrupoMartinsLogo size="md" />
                      <div>
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#1B3B2B] text-[#F8F3EF] uppercase">
                          Conta Corrente Societária • Pró-Labore
                        </span>
                        <h2 className="text-2xl font-black text-[#1B3B2B] mt-2">Sócio-Diretor: {params.socioDiretor}</h2>
                        <p className="text-sm text-slate-600 mt-0.5">Controle individualizado de retiradas e emissão de recibos oficiais.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 bg-[#1B3B2B] text-white">
                      <h3 className="text-sm font-bold uppercase">Histórico de Saques de Pró-Labore (2026)</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-100 text-slate-600 border-b border-slate-200 font-bold uppercase text-xs">
                            <th className="py-3.5 px-4">Código</th>
                            <th className="py-3.5 px-4">Data</th>
                            <th className="py-3.5 px-4">Competência</th>
                            <th className="py-3.5 px-4">Descrição</th>
                            <th className="py-3.5 px-4 text-center">Status</th>
                            <th className="py-3.5 px-4 text-right">Valor</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {transactions.filter(t => (t.category || t.planocontas || t.planoContas || '').includes('Pró-Labore')).map((tx) => (
                            <tr key={tx.id} className="hover:bg-[#F8F3EF]/50">
                              <td className="py-3 px-4 font-mono font-bold text-[#1B3B2B]">{tx.id}</td>
                              <td className="py-3 px-4">{tx.date}</td>
                              <td className="py-3 px-4 font-bold">{tx.month}/2026</td>
                              <td className="py-3 px-4">{tx.description}</td>
                              <td className="py-3 px-4 text-center">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${tx.status === 'Pago / Recebido' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                                  {tx.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right font-extrabold text-[#1B3B2B]">{formatCurrency(tx.amount)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dre' && (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-extrabold text-[#1B3B2B]">DRE Gerencial Consolidada (Exercício {selectedDreYear})</h3>
                      <p className="text-xs text-slate-500">Selecione o ano desejado (2026 a 2040) para visualizar a projeção e os lançamentos oficiais.</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 bg-[#F8F3EF] px-3 py-1.5 rounded-xl border border-[#D5CFC7]">
                        <Calendar className="w-4 h-4 text-[#1B3B2B]" />
                        <span className="text-xs font-extrabold text-[#1B3B2B]">Exercício:</span>
                        <select
                          value={selectedDreYear}
                          onChange={(e) => setSelectedDreYear(Number(e.target.value))}
                          className="bg-white px-2.5 py-1 rounded-lg border font-bold text-xs text-[#1B3B2B] cursor-pointer"
                        >
                          {ANOS_DRE.map(ano => (
                            <option key={ano} value={ano}>{ano}</option>
                          ))}
                        </select>
                      </div>

                      <button
                        onClick={exportDREToExcel}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] shadow cursor-pointer"
                      >
                        <Download className="w-4 h-4" /> Exportar Planilha ({selectedDreYear})
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-[11px] whitespace-nowrap">
                        <thead>
                          <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                            <th className="py-3 px-3 min-w-[280px]">ESTRUTURA DRE — GRUPO MARTINS (R$)</th>
                            {dreGerencialData.monthsFull.map(m => (
                              <th key={m} className="py-3 px-2 text-right">{m}/{String(selectedDreYear).slice(2)}</th>
                            ))}
                            <th className="py-3 px-3 text-right bg-[#132A1F]">ACUMULADO {selectedDreYear}</th>
                            <th className="py-3 px-3 text-center bg-[#132A1F]">AV %</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                          <tr className="bg-slate-100 font-extrabold text-[#1B3B2B]">
                            <td className="py-2.5 px-3">1. RECEITA OPERACIONAL BRUTA</td>
                            {dreGerencialData.monthsFull.map(m => {
                              const val = dreGerencialData.sumRowsMonth(dreGerencialData.receitasRows, m);
                              return <td key={m} className="py-2.5 px-2 text-right">{formatCurrency(val)}</td>;
                            })}
                            <td className="py-2.5 px-3 text-right">{formatCurrency(dreGerencialData.receitaBrutaTotalAnual)}</td>
                            <td className="py-2.5 px-3 text-center">100,0%</td>
                          </tr>
                          {dreGerencialData.receitasRows.map(r => (
                            <tr key={r.codigo} className="hover:bg-slate-50 text-slate-700">
                              <td className="py-2 px-4 pl-6"><i>(+) {r.nome}</i></td>
                              {dreGerencialData.monthsFull.map(m => (
                                <td key={m} className="py-2 px-2 text-right">{formatCurrency(r.mensalValues[m] || 0)}</td>
                              ))}
                              <td className="py-2 px-3 text-right font-bold">{formatCurrency(r.totalAnual)}</td>
                              <td className="py-2 px-3 text-center text-slate-500">
                                {dreGerencialData.receitaBrutaTotalAnual > 0 ? ((r.totalAnual / dreGerencialData.receitaBrutaTotalAnual) * 100).toFixed(1).replace('.', ',') + '%' : '0,0%'}
                              </td>
                            </tr>
                          ))}

                          <tr className="bg-rose-50 text-rose-900 font-bold">
                            <td className="py-2.5 px-3">2. (-) DEDUÇÕES E IMPOSTOS SOBRE FATURAMENTO</td>
                            {dreGerencialData.monthsFull.map(m => {
                              const val = dreGerencialData.sumRowsMonth(dreGerencialData.impostosRows, m);
                              return <td key={m} className="py-2.5 px-2 text-right text-rose-700">{formatCurrency(val)}</td>;
                            })}
                            <td className="py-2.5 px-3 text-right text-rose-700">{formatCurrency(dreGerencialData.impostoTotalAnual)}</td>
                            <td className="py-2.5 px-3 text-center text-rose-700">
                              {dreGerencialData.receitaBrutaTotalAnual > 0 ? ((dreGerencialData.impostoTotalAnual / dreGerencialData.receitaBrutaTotalAnual) * 100).toFixed(1).replace('.', ',') + '%' : '0,0%'}
                            </td>
                          </tr>
                          {dreGerencialData.impostosRows.map(r => (
                            <tr key={r.codigo} className="hover:bg-slate-50 text-slate-700">
                              <td className="py-2 px-4 pl-6"><i>(-) {r.nome}</i></td>
                              {dreGerencialData.monthsFull.map(m => (
                                <td key={m} className="py-2 px-2 text-right">{formatCurrency(r.mensalValues[m] || 0)}</td>
                              ))}
                              <td className="py-2 px-3 text-right font-bold">{formatCurrency(r.totalAnual)}</td>
                              <td className="py-2 px-3 text-center text-slate-500">—</td>
                            </tr>
                          ))}

                          <tr className="bg-slate-100 font-extrabold text-[#1B3B2B]">
                            <td className="py-2.5 px-3">3. (=) RECEITA OPERACIONAL LÍQUIDA</td>
                            {dreGerencialData.monthsFull.map(m => {
                              const rec = dreGerencialData.sumRowsMonth(dreGerencialData.receitasRows, m);
                              const imp = dreGerencialData.sumRowsMonth(dreGerencialData.impostosRows, m);
                              return <td key={m} className="py-2.5 px-2 text-right">{formatCurrency(rec - imp)}</td>;
                            })}
                            <td className="py-2.5 px-3 text-right">{formatCurrency(dreGerencialData.receitaLiquidaTotalAnual)}</td>
                            <td className="py-2.5 px-3 text-center">
                              {dreGerencialData.receitaBrutaTotalAnual > 0 ? ((dreGerencialData.receitaLiquidaTotalAnual / dreGerencialData.receitaBrutaTotalAnual) * 100).toFixed(1).replace('.', ',') + '%' : '0,0%'}
                            </td>
                          </tr>

                          <tr className="bg-rose-50 text-rose-900 font-bold">
                            <td className="py-2.5 px-3">4. (-) CUSTOS DIRETOS DE PROJETOS E CAMPO (CSP)</td>
                            {dreGerencialData.monthsFull.map(m => {
                              const val = dreGerencialData.sumRowsMonth(dreGerencialData.custosDiretosRows, m);
                              return <td key={m} className="py-2.5 px-2 text-right text-rose-700">{formatCurrency(val)}</td>;
                            })}
                            <td className="py-2.5 px-3 text-right text-rose-700">{formatCurrency(dreGerencialData.custosDiretosTotalAnual)}</td>
                            <td className="py-2.5 px-3 text-center text-rose-700">
                              {dreGerencialData.receitaBrutaTotalAnual > 0 ? ((dreGerencialData.custosDiretosTotalAnual / dreGerencialData.receitaBrutaTotalAnual) * 100).toFixed(1).replace('.', ',') + '%' : '0,0%'}
                            </td>
                          </tr>
                          {dreGerencialData.custosDiretosRows.map(r => (
                            <tr key={r.codigo} className="hover:bg-slate-50 text-slate-700">
                              <td className="py-2 px-4 pl-6"><i>(-) {r.nome}</i></td>
                              {dreGerencialData.monthsFull.map(m => (
                                <td key={m} className="py-2 px-2 text-right">{formatCurrency(r.mensalValues[m] || 0)}</td>
                              ))}
                              <td className="py-2 px-3 text-right font-bold">{formatCurrency(r.totalAnual)}</td>
                              <td className="py-2 px-3 text-center text-slate-500">—</td>
                            </tr>
                          ))}

                          <tr className="bg-emerald-50 text-emerald-900 font-extrabold">
                            <td className="py-2.5 px-3">(=) LUCRO BRUTO</td>
                            {dreGerencialData.monthsFull.map(m => {
                              const rec = dreGerencialData.sumRowsMonth(dreGerencialData.receitasRows, m);
                              const imp = dreGerencialData.sumRowsMonth(dreGerencialData.impostosRows, m);
                              const cus = dreGerencialData.sumRowsMonth(dreGerencialData.custosDiretosRows, m);
                              return <td key={m} className="py-2.5 px-2 text-right">{formatCurrency(rec - imp - cus)}</td>;
                            })}
                            <td className="py-2.5 px-3 text-right">{formatCurrency(dreGerencialData.lucroBrutoTotalAnual)}</td>
                            <td className="py-2.5 px-3 text-center">
                              {dreGerencialData.receitaBrutaTotalAnual > 0 ? ((dreGerencialData.lucroBrutoTotalAnual / dreGerencialData.receitaBrutaTotalAnual) * 100).toFixed(1).replace('.', ',') + '%' : '0,0%'}
                            </td>
                          </tr>

                          <tr className="bg-rose-50 text-rose-900 font-bold">
                            <td className="py-2.5 px-3">5. (-) DESPESAS OPERACIONAIS, COMERCIAIS E PRÓ-LABORE</td>
                            {dreGerencialData.monthsFull.map(m => {
                              const val = dreGerencialData.sumRowsMonth(dreGerencialData.despesasOpRows, m);
                              return <td key={m} className="py-2.5 px-2 text-right text-rose-700">{formatCurrency(val)}</td>;
                            })}
                            <td className="py-2.5 px-3 text-right text-rose-700">{formatCurrency(dreGerencialData.despesasOpTotalAnual)}</td>
                            <td className="py-2.5 px-3 text-center text-rose-700">
                              {dreGerencialData.receitaBrutaTotalAnual > 0 ? ((dreGerencialData.despesasOpTotalAnual / dreGerencialData.receitaBrutaTotalAnual) * 100).toFixed(1).replace('.', ',') + '%' : '0,0%'}
                            </td>
                          </tr>
                          {dreGerencialData.despesasOpRows.map(r => (
                            <tr key={r.codigo} className="hover:bg-slate-50 text-slate-700">
                              <td className="py-2 px-4 pl-6"><i>{r.codigo.startsWith('2.4.01') ? '★ (-) ' : '(-) '} {r.nome}</i></td>
                              {dreGerencialData.monthsFull.map(m => (
                                <td key={m} className="py-2 px-2 text-right">{formatCurrency(r.mensalValues[m] || 0)}</td>
                              ))}
                              <td className="py-2 px-3 text-right font-bold">{formatCurrency(r.totalAnual)}</td>
                              <td className="py-2 px-3 text-center text-slate-500">—</td>
                            </tr>
                          ))}

                          <tr className="bg-[#1B3B2B] text-white font-black text-sm">
                            <td className="py-3 px-3">6. (=) LUCRO LÍQUIDO DO EXERCÍCIO (APÓS PRÓ-LABORE)</td>
                            {dreGerencialData.monthsFull.map(m => {
                              const rec = dreGerencialData.sumRowsMonth(dreGerencialData.receitasRows, m);
                              const imp = dreGerencialData.sumRowsMonth(dreGerencialData.impostosRows, m);
                              const cus = dreGerencialData.sumRowsMonth(dreGerencialData.custosDiretosRows, m);
                              const des = dreGerencialData.sumRowsMonth(dreGerencialData.despesasOpRows, m);
                              return <td key={m} className="py-3 px-2 text-right text-emerald-300">{formatCurrency(rec - imp - cus - des)}</td>;
                            })}
                            <td className="py-3 px-3 text-right text-emerald-300">{formatCurrency(dreGerencialData.lucroLiquidoTotalAnual)}</td>
                            <td className="py-3 px-3 text-center text-emerald-300">
                              {dreGerencialData.receitaBrutaTotalAnual > 0 ? ((dreGerencialData.lucroLiquidoTotalAnual / dreGerencialData.receitaBrutaTotalAnual) * 100).toFixed(1).replace('.', ',') + '%' : '0,0%'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'lancamentos' && (
                <div className="space-y-5">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="relative flex-1 min-w-[220px]">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          value={txSearch}
                          onChange={(e) => setTxSearch(e.target.value)}
                          placeholder="Pesquisar por favorecido, ID ou descrição..."
                          className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                        />
                      </div>
                      {hasPermission('lancamentos', 'create') && (
                        <button
                          onClick={() => {
                            setEditingTx(null);
                            setTxForm({
                              date: '2026-11-10',
                              month: 'Nov',
                              type: 'Entrada',
                              planoContas: planoContasData.receitas[0].codigo,
                              category: planoContasData.receitas[0].nome,
                              entity: '',
                              contractId: '—',
                              description: '',
                              paymentMethod: 'PIX',
                              status: 'Pago / Recebido',
                              amount: ''
                            });
                            setShowTxModal(true);
                          }}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] cursor-pointer"
                        >
                          <Plus className="w-4 h-4" /> Incluir Lançamento
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 text-xs">
                      <span className="font-bold text-slate-600 flex items-center gap-1">
                        <Filter className="w-3.5 h-3.5 text-[#1B3B2B]" /> Filtrar colunas:
                      </span>
                      
                      <select
                        value={txTypeFilter}
                        onChange={(e) => setTxTypeFilter(e.target.value)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold cursor-pointer"
                      >
                        <option value="Todos">Tipo: Todos</option>
                        <option value="Entrada">Entrada</option>
                        <option value="Saída">Saída</option>
                      </select>

                      <select
                        value={txCategoryFilter}
                        onChange={(e) => setTxCategoryFilter(e.target.value)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold max-w-[260px] truncate cursor-pointer"
                      >
                        <option value="Todas">Plano de Contas: Todas</option>
                        <optgroup label="Receitas (1.X)">
                          {planoContasData.receitas.map(r => <option key={r.codigo} value={r.codigo}>{r.nome}</option>)}
                        </optgroup>
                        <optgroup label="Despesas (2.X)">
                          {planoContasData.despesas.map(d => <option key={d.codigo} value={d.codigo}>{d.nome}</option>)}
                        </optgroup>
                      </select>

                      <select
                        value={txStatusFilter}
                        onChange={(e) => setTxStatusFilter(e.target.value)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold cursor-pointer"
                      >
                        <option value="Todos">Status: Todos</option>
                        <option value="Pago / Recebido">Pago / Recebido</option>
                        <option value="Pendente">Pendente</option>
                      </select>

                      {(txTypeFilter !== 'Todos' || txCategoryFilter !== 'Todas' || txStatusFilter !== 'Todos' || txSearch !== '') && (
                        <button
                          onClick={() => {
                            setTxTypeFilter('Todos');
                            setTxCategoryFilter('Todas');
                            setTxStatusFilter('Todos');
                            setTxSearch('');
                          }}
                          className="text-rose-600 font-bold hover:underline ml-auto cursor-pointer"
                        >
                          Limpar Filtros
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                            <th onClick={() => handleSort('id')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">ID {sortField === 'id' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('date')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Data {sortField === 'date' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('type')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Tipo {sortField === 'type' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('planocontas')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Plano de Contas {sortField === 'planocontas' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('category')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Categoria Detalhada {sortField === 'category' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('entity')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Favorecido / Cliente {sortField === 'entity' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('description')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Descrição {sortField === 'description' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('status')} className="py-3.5 px-3 text-center cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center justify-center gap-1">Status {sortField === 'status' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('amount')} className="py-3.5 px-3 text-right cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center justify-end gap-1">Valor {sortField === 'amount' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th className="py-3.5 px-3 text-center">Ações</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredTransactions.length === 0 ? (
                            <tr>
                              <td colSpan="10" className="py-8 text-center text-slate-400">Nenhum lançamento encontrado com os filtros atuais.</td>
                            </tr>
                          ) : (
                            filteredTransactions.map((tx) => (
                              <tr key={tx.id} className="hover:bg-slate-50">
                                <td className="py-2.5 px-3 font-mono font-bold">{tx.id}</td>
                                <td className="py-2.5 px-3">{tx.date}</td>
                                <td className="py-2.5 px-3">
                                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${tx.type === 'Entrada' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                    {tx.type}
                                  </span>
                                </td>
                                <td className="py-2.5 px-3 font-mono font-bold text-teal-900">{tx.planocontas || tx.planoContas || '1.1.01'}</td>
                                <td className="py-2.5 px-3 text-slate-700">{tx.category}</td>
                                <td className="py-2.5 px-3 font-bold">{tx.entity}</td>
                                <td className="py-2.5 px-3">{tx.description}</td>
                                <td className="py-2.5 px-3 text-center">
                                  <button onClick={() => handleToggleStatus(tx.id)} className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${tx.status === 'Pago / Recebido' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'} cursor-pointer`}>
                                    {tx.status}
                                  </button>
                                </td>
                                <td className={`py-2.5 px-3 text-right font-extrabold ${tx.type === 'Entrada' ? 'text-emerald-700' : 'text-rose-700'}`}>
                                  {formatCurrency(tx.amount)}
                                </td>
                                <td className="py-2.5 px-3 text-center space-x-2">
                                  {hasPermission('lancamentos', 'edit') && (
                                    <button
                                      onClick={() => {
                                        setEditingTx(tx);
                                        setTxForm({
                                          date: tx.date,
                                          month: tx.month,
                                          type: tx.type,
                                          planoContas: tx.planocontas || tx.planoContas || '1.1.01',
                                          category: tx.category,
                                          entity: tx.entity,
                                          contractId: tx.contractid || tx.contractId || '—',
                                          description: tx.description,
                                          paymentMethod: tx.paymentmethod || tx.paymentMethod || 'PIX',
                                          status: tx.status,
                                          amount: tx.amount
                                        });
                                        setShowTxModal(true);
                                      }}
                                      className="p-1 rounded text-teal-700 hover:bg-teal-50 cursor-pointer"
                                      title="Editar Lançamento"
                                    >
                                      <Edit3 className="w-4 h-4 inline" />
                                    </button>
                                  )}
                                  {hasPermission('lancamentos', 'delete') && (
                                    <button
                                      onClick={() => setDeleteTxTarget(tx)}
                                      className="p-1 rounded text-rose-600 hover:bg-rose-50 cursor-pointer"
                                      title="Excluir Lançamento"
                                    >
                                      <Trash2 className="w-4 h-4 inline" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contratos' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">VALOR TOTAL CONTRATADO ({contracts.length} CONTRATOS)</div>
                      <div className="text-2xl font-black text-[#1B3B2B] mt-2">{formatCurrency(financialData.totalContratado)}</div>
                      <div className="text-xs text-slate-500 mt-1">Carteira Ambiental SEMA-MT & SST</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">TOTAL JÁ RECEBIDO DOS CONTRATOS</div>
                      <div className="text-2xl font-black text-emerald-700 mt-2">{formatCurrency(financialData.totalRecebidoContratos)}</div>
                      <div className="text-xs text-emerald-600 mt-1">Parcelas quitadas via baixa</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">SALDO A FATURAR / RECEBER</div>
                      <div className="text-2xl font-black text-amber-600 mt-2">{formatCurrency(financialData.saldoAFaturar)}</div>
                      <div className="text-xs text-slate-500 mt-1">Parcelas pendentes de recebimento</div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">MARGEM TÉCNICA MÉDIA DOS PROJETOS</div>
                      <div className="text-2xl font-black text-[#1B3B2B] mt-2">{financialData.margemMedia.toFixed(1).replace('.', ',')}%</div>
                      <div className="text-xs text-slate-500 mt-1">Após custos laboratoriais, drone e taxas</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
                    <div className="relative flex-1 min-w-[280px]">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={ctSearch}
                        onChange={(e) => setCtSearch(e.target.value)}
                        placeholder="Buscar por cliente, fazenda, órgão, observação ou código..."
                        className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <select
                        value={ctDueDateFilter}
                        onChange={(e) => setCtDueDateFilter(e.target.value)}
                        className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white text-[#1B3B2B] cursor-pointer"
                      >
                        <option value="Todos">Vencimento: Todos</option>
                        <option value="Vencidos">🔴 Vencidos</option>
                        <option value="Hoje">🟡 Vencendo Hoje</option>
                        <option value="AVencer">🟢 A Vencer</option>
                      </select>

                      <select
                        value={ctStatusFilter}
                        onChange={(e) => setCtStatusFilter(e.target.value)}
                        className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white cursor-pointer"
                      >
                        <option value="Todos">Status Técnico: Todos</option>
                        <option value="Em Elaboração Técnica">Em Elaboração Técnica</option>
                        <option value="Protocolado / SEMA">Protocolado / SEMA</option>
                        <option value="Em Andamento">Em Andamento</option>
                        <option value="Concluído / Licença Emitida">Concluído / Licença Emitida</option>
                      </select>
                      {hasPermission('contratos', 'create') && (
                        <button
                          onClick={() => {
                            setEditingContract(null);
                            setShowAgencyManager(false);
                            setCtForm({
                              client: '',
                              service: '',
                              agency: availableAgencies[0] || 'SEMA-MT',
                              status: 'Em Elaboração Técnica',
                              contractValue: '',
                              directCosts: '',
                              installmentsCount: '1',
                              installmentDates: [`${selectedDreYear}-12-30`, '', '', '', '', '', '', '', '', '', '', ''],
                              installmentAmounts: ['', '', '', '', '', '', '', '', '', '', '', ''],
                              paymentMethod: 'PIX',
                              observation: ''
                            });
                            setShowContractModal(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] cursor-pointer"
                        >
                          <Plus className="w-4 h-4" /> Novo Contrato Ambiental / SST
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                            <th onClick={() => handleSort('id')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Código {sortField === 'id' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('client')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Cliente / Empreendimento {sortField === 'client' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('service')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Escopo Técnico {sortField === 'service' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('agency')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Órgão {sortField === 'agency' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('observation')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Observação {sortField === 'observation' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('status')} className="py-3.5 px-3 text-center cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center justify-center gap-1">Status {sortField === 'status' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('contractvalue')} className="py-3.5 px-3 text-right cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center justify-end gap-1">Valor Contrato {sortField === 'contractvalue' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th className="py-3.5 px-3 text-right">Já Recebido</th>
                            <th className="py-3.5 px-3 text-right">Saldo a Receber</th>
                            <th className="py-3.5 px-3 text-center">Gerenciar Parcelas</th>
                            <th className="py-3.5 px-3 text-center">Ações</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredContracts.length === 0 ? (
                            <tr>
                              <td colSpan="11" className="py-8 text-center text-slate-400">Nenhum contrato cadastrado com os filtros selecionados.</td>
                            </tr>
                          ) : (
                            filteredContracts.map((ct) => {
                              const val = Number(ct.contractvalue || ct.contractValue || 0);
                              const insts = ct.installmentsData || ct.installmentsdata || [];
                              const rec = insts.filter(i => i.status === 'Pago').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
                              const saldo = val - rec;
                              return (
                                <tr key={ct.id} className="hover:bg-slate-50">
                                  <td className="py-3 px-3 font-mono font-bold text-[#1B3B2B]">{ct.id}</td>
                                  <td className="py-3 px-3 font-bold text-slate-900">{ct.client}</td>
                                  <td className="py-3 px-3 text-slate-700">{ct.service}</td>
                                  <td className="py-3 px-3 font-semibold text-slate-600">{ct.agency || 'SEMA-MT'}</td>
                                  <td className="py-3 px-3 text-slate-500 max-w-xs truncate" title={ct.observation || ''}>{ct.observation || '—'}</td>
                                  <td className="py-3 px-3 text-center">
                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                                      {ct.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-3 text-right font-bold text-[#1B3B2B]">{formatCurrency(val)}</td>
                                  <td className="py-3 px-3 text-right text-emerald-700 font-semibold">{formatCurrency(rec)}</td>
                                  <td className="py-3 px-3 text-right text-amber-600 font-semibold">{formatCurrency(saldo)}</td>
                                  <td className="py-3 px-3 text-center">
                                    <button
                                      onClick={() => setViewingContractInstallments(ct)}
                                      className="px-3 py-1 rounded-lg bg-teal-800 text-white font-bold text-[10px] hover:bg-teal-900 cursor-pointer"
                                    >
                                      Ver Parcelas ({insts.filter(i => i.status === 'Pago').length}/{insts.length})
                                    </button>
                                  </td>
                                  <td className="py-3 px-3 text-center space-x-2">
                                    {hasPermission('contratos', 'edit') && (
                                      <button
                                        onClick={() => {
                                          setEditingContract(ct);
                                          setShowAgencyManager(false);
                                          setCtForm({
                                            client: ct.client,
                                            service: ct.service,
                                            agency: ct.agency || availableAgencies[0] || 'SEMA-MT',
                                            status: ct.status,
                                            contractValue: ct.contractvalue || ct.contractValue,
                                            directCosts: ct.directcosts || ct.directCosts,
                                            installmentsCount: ct.installmentscount || ct.installmentsCount || '1',
                                            installmentDates: (ct.installmentsData || ct.installmentsdata)?.map(i => i.dueDate) || [`${selectedDreYear}-12-30`],
                                            installmentAmounts: (ct.installmentsData || ct.installmentsdata)?.map(i => i.amount) || [''],
                                            paymentMethod: ct.paymentmethod || ct.paymentMethod || 'PIX',
                                            observation: ct.observation || ''
                                          });
                                          setShowContractModal(true);
                                        }}
                                        className="p-1.5 rounded-lg text-teal-700 hover:bg-teal-50 cursor-pointer"
                                        title="Editar Contrato"
                                      >
                                        <Edit3 className="w-4 h-4 inline" />
                                      </button>
                                    )}
                                    {hasPermission('contratos', 'delete') && (
                                      <button
                                        onClick={() => setDeleteContractTarget(ct)}
                                        className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                                        title="Excluir Contrato"
                                      >
                                        <Trash2 className="w-4 h-4 inline" />
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              );
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'clientes' && (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div className="relative flex-1 max-w-md">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={cliSearch}
                        onChange={(e) => setCliSearch(e.target.value)}
                        placeholder="Buscar clientes..."
                        className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                      />
                    </div>
                    {hasPermission('clientes', 'create') && (
                      <button
                        onClick={() => {
                          setEditingClient(null);
                          setCliForm({
                            name: '',
                            document: '',
                            registration: '',
                            segment: availableSegments[0],
                            city: 'Rondonópolis — MT',
                            contactName: '',
                            phone: '',
                            email: '',
                            mainProgram: 'Licenciamento Ambiental (LP / LI / LO)',
                            status: availableStatuses[0]
                          });
                          setShowClientModal(true);
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#1B3B2B] text-white cursor-pointer"
                      >
                        <UserPlus className="w-4 h-4" /> Cadastrar Cliente
                      </button>
                    )}
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                            <th onClick={() => handleSort('id')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">ID {sortField === 'id' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('name')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Razão Social / Empreendimento {sortField === 'name' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('segment')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Segmento Econômico {sortField === 'segment' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('contactName')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Responsável / Contato {sortField === 'contactName' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('city')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Cidade {sortField === 'city' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('status')} className="py-3.5 px-3 text-center cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center justify-center gap-1">Status {sortField === 'status' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th className="py-3.5 px-3 text-center">Ações</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredClients.length === 0 ? (
                            <tr>
                              <td colSpan="7" className="py-8 text-center text-slate-400">Nenhum cliente cadastrado.</td>
                            </tr>
                          ) : (
                            filteredClients.map((cli) => (
                              <tr key={cli.id} className="hover:bg-slate-50">
                                <td className="py-3 px-3 font-mono font-bold">{cli.id}</td>
                                <td className="py-3 px-3 font-bold">{cli.name}</td>
                                <td className="py-3 px-3">{cli.segment}</td>
                                <td className="py-3 px-3">{cli.contactName || cli.contactname || '—'}</td>
                                <td className="py-3 px-3">{cli.city}</td>
                                <td className="py-3 px-3 text-center">
                                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                                    {cli.status}
                                  </span>
                                </td>
                                <td className="py-3 px-3 text-center space-x-2">
                                  {hasPermission('clientes', 'edit') && (
                                    <button
                                      onClick={() => {
                                        setEditingClient(cli);
                                        setCliForm({
                                          name: cli.name,
                                          document: cli.document || '',
                                          registration: cli.registration || '',
                                          segment: cli.segment || availableSegments[0],
                                          city: cli.city || 'Rondonópolis — MT',
                                          contactName: cli.contactName || cli.contactname || '',
                                          phone: cli.phone || '',
                                          email: cli.email || '',
                                          mainProgram: cli.mainProgram || cli.mainprogram || 'Licenciamento Ambiental',
                                          status: cli.status || availableStatuses[0]
                                        });
                                        setShowClientModal(true);
                                      }}
                                      className="p-1.5 rounded-lg text-teal-700 hover:bg-teal-50 cursor-pointer"
                                      title="Editar Cliente"
                                    >
                                      <Edit3 className="w-4 h-4 inline" />
                                    </button>
                                  )}
                                  {hasPermission('clientes', 'delete') && (
                                    <button
                                      onClick={() => setDeleteClientTarget(cli)}
                                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                                      title="Excluir Cliente"
                                    >
                                      <Trash2 className="w-4 h-4 inline" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'condicionantes' && (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
                    <div className="relative flex-1 min-w-[240px]">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        value={condSearch}
                        onChange={(e) => setCondSearch(e.target.value)}
                        placeholder="Buscar por cliente, condicionante, licença ou responsável..."
                        className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <select
                        value={condStatusFilter}
                        onChange={(e) => setCondStatusFilter(e.target.value)}
                        className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white text-[#1B3B2B] cursor-pointer"
                      >
                        <option value="Todos">Filtrar por Status</option>
                        <option value="FINALIZADO">FINALIZADO</option>
                        <option value="ATENDIDO">ATENDIDO</option>
                        <option value="EM ANDAMENTO">EM ANDAMENTO</option>
                        <option value="A VENCER">A VENCER</option>
                      </select>

                      {hasPermission('condicionantes', 'create') && (
                        <button
                          onClick={() => {
                            setEditingCond(null);
                            setCondForm({
                              client: '',
                              service: '',
                              dueDate: new Date().toISOString().split('T')[0],
                              license: '',
                              responsible: '',
                              observation: '',
                              status: 'EM ANDAMENTO'
                            });
                            setShowCondModal(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] cursor-pointer"
                        >
                          <Plus className="w-4 h-4" /> Nova Condicionante
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                            <th 
                              onClick={() => handleSort('client')} 
                              className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none"
                            >
                              <div className="flex items-center gap-1.5">
                                Nome do Cliente {sortField === 'client' && (sortDirection === 'asc' ? <ArrowUp className="w-3.5 h-3.5 text-emerald-300" /> : <ArrowDown className="w-3.5 h-3.5 text-emerald-300" />)}
                              </div>
                            </th>
                            <th 
                              onClick={() => handleSort('service')} 
                              className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none"
                            >
                              <div className="flex items-center gap-1.5">
                                Condicionantes / Serviço {sortField === 'service' && (sortDirection === 'asc' ? <ArrowUp className="w-3.5 h-3.5 text-emerald-300" /> : <ArrowDown className="w-3.5 h-3.5 text-emerald-300" />)}
                              </div>
                            </th>
                            <th 
                              onClick={() => handleSort('duedate')} 
                              className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none"
                            >
                              <div className="flex items-center gap-1.5">
                                Vencimento Final {sortField === 'duedate' && (sortDirection === 'asc' ? <ArrowUp className="w-3.5 h-3.5 text-emerald-300" /> : <ArrowDown className="w-3.5 h-3.5 text-emerald-300" />)}
                              </div>
                            </th>
                            <th onClick={() => handleSort('license')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Licença {sortField === 'license' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('responsible')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Responsável - Empresa {sortField === 'responsible' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('observation')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center gap-1">Observação {sortField === 'observation' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th onClick={() => handleSort('status')} className="py-3.5 px-3 text-center cursor-pointer hover:bg-[#2D5A43] transition select-none">
                              <div className="flex items-center justify-center gap-1">Status {sortField === 'status' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                            </th>
                            <th className="py-3.5 px-3 text-center">Ações</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredCondicionantes.length === 0 ? (
                            <tr>
                              <td colSpan="8" className="py-8 text-center text-slate-400">Nenhuma condicionante encontrada.</td>
                            </tr>
                          ) : (
                            filteredCondicionantes.map((cond) => (
                              <tr key={cond.id} className="hover:bg-slate-50">
                                <td className="py-3 px-3 font-bold text-slate-900">{cond.client}</td>
                                <td className="py-3 px-3 text-slate-700 max-w-xs">{cond.service}</td>
                                <td className="py-3 px-3 font-mono">{cond.dueDate || cond.duedate}</td>
                                <td className="py-3 px-3 font-semibold">{cond.license}</td>
                                <td className="py-3 px-3 font-bold text-slate-700">{cond.responsible}</td>
                                <td className="py-3 px-3 text-slate-500 max-w-xs truncate">{cond.observation || '—'}</td>
                                <td className="py-3 px-3 text-center">
                                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                                    cond.status === 'FINALIZADO' ? 'bg-emerald-700 text-white' :
                                    cond.status === 'ATENDIDO' ? 'bg-emerald-600 text-white' :
                                    cond.status === 'EM ANDAMENTO' ? 'bg-amber-500 text-white' : 'bg-amber-600 text-white'
                                  }`}>
                                    {cond.status}
                                  </span>
                                </td>
                                <td className="py-3 px-3 text-center space-x-1">
                                  {hasPermission('condicionantes', 'edit') && (
                                    <button
                                      onClick={() => {
                                        setEditingCond(cond);
                                        setCondForm({
                                          client: cond.client,
                                          service: cond.service,
                                          dueDate: cond.dueDate || cond.duedate,
                                          license: cond.license,
                                          responsible: cond.responsible,
                                          observation: cond.observation,
                                          status: cond.status
                                        });
                                        setShowCondModal(true);
                                      }}
                                      className="p-1.5 rounded-lg text-teal-700 hover:bg-teal-50 cursor-pointer"
                                      title="Editar Condicionante"
                                    >
                                      <Edit3 className="w-4 h-4 inline" />
                                    </button>
                                  )}
                                  {hasPermission('condicionantes', 'delete') && (
                                    <button
                                      onClick={() => setDeleteCondTarget(cond)}
                                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                                      title="Excluir Condicionante"
                                    >
                                      <Trash2 className="w-4 h-4 inline" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'acessos' && (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-[#1B3B2B]">Árvore de Acessos & Perfis</h3>
                      <p className="text-xs text-slate-500">Gerencie colaboradores, edite senhas e configure permissões granulares por módulo.</p>
                    </div>
                    {hasPermission('acessos', 'create') && (
                      <button
                        onClick={() => setShowUserRoleModal(true)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] cursor-pointer"
                      >
                        <UserPlus className="w-4 h-4" /> Cadastrar Novo Utilizador
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {accessRoles.map((role) => (
                      <div key={role.id} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#1B3B2B] text-emerald-300 uppercase">
                              {role.level}
                            </span>
                            <div className="flex items-center gap-1">
                              {hasPermission('acessos', 'edit') && (
                                <button
                                  onClick={() => setEditingRoleTarget(role)}
                                  className="p-1.5 rounded-lg text-teal-800 hover:bg-teal-50 cursor-pointer"
                                  title="Editar Perfil e Senha"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                              )}
                              {hasPermission('acessos', 'delete') && (
                                <button
                                  onClick={() => handleDeleteRole(role.id)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                                  title="Excluir Perfil"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                          <h4 className="font-extrabold text-[#1B3B2B] text-sm">{role.name}</h4>
                          <div className="text-xs font-bold text-slate-700">👤 {role.holder}</div>
                          <div className="text-xs text-slate-500">✉️ {role.email}</div>
                          <p className="text-[11px] text-slate-600 border-t pt-2 mt-2">{role.description}</p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          {hasPermission('acessos', 'edit') && (
                            <button
                              onClick={() => setEditingRolePermissions(role)}
                              className="w-full py-1.5 rounded-xl text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Sliders className="w-3.5 h-3.5" /> Configurar Permissões (Flags)
                            </button>
                          )}
                          <span className="w-full py-1.5 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center justify-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Sincronizado na Nuvem
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'config' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                    <div>
                      <h2 className="text-base font-extrabold text-[#1B3B2B]">
                        Parâmetros Financeiros e Metas — Grupo Martins ({selectedDreYear})
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Ajuste o Saldo Inicial de Caixa, Meta de Faturamento e Pró-Labore Alvo do Sócio-Diretor Maikon Martins.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1.5">
                          SALDO INICIAL DE CAIXA (R$)
                        </label>
                        <input
                          type="number"
                          value={params.saldoInicialCaixa}
                          onChange={(e) => {
                            const updated = { ...params, saldoInicialCaixa: Number(e.target.value) };
                            setParams(updated);
                            syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, updated, availableAgencies);
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1.5">
                          META MENSAL DE RECEITA (R$)
                        </label>
                        <input
                          type="number"
                          value={params.metaMensalReceita}
                          onChange={(e) => {
                            const updated = { ...params, metaMensalReceita: Number(e.target.value) };
                            setParams(updated);
                            syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, updated, availableAgencies);
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1.5">
                          PRÓ-LABORE MENSAL ALVO (R$)
                        </label>
                        <input
                          type="number"
                          value={params.proLaboreAlvoMensal}
                          onChange={(e) => {
                            const updated = { ...params, proLaboreAlvoMensal: Number(e.target.value) };
                            setParams(updated);
                            syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, updated, availableAgencies);
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1.5">
                          SÓCIO-DIRETOR RESPONSÁVEL
                        </label>
                        <input
                          type="text"
                          value={params.socioDiretor}
                          onChange={(e) => {
                            const updated = { ...params, socioDiretor: e.target.value };
                            setParams(updated);
                            syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, updated, availableAgencies);
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase">
                          Gerenciamento do Plano de Contas (DRE)
                        </h3>
                        <p className="text-xs text-slate-500">Adicione, edite ou remova contas do plano contábil do ERP.</p>
                      </div>
                      <button
                        onClick={() => {
                          setPlanoForm({ tipo: 'receitas', codigo: '', nome: '', originalCodigo: null });
                          setShowPlanoModal(true);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] cursor-pointer"
                      >
                        <Plus className="w-4 h-4" /> Novo Plano de Contas
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-3">
                        <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Contas de Receita (1.X)</h4>
                        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                          {planoContasData.receitas.map((rev) => (
                            <div key={rev.codigo} className="flex items-center justify-between p-3 rounded-xl border border-emerald-200 bg-emerald-50/40 text-xs">
                              <span className="font-semibold text-slate-800 truncate mr-2">{rev.nome}</span>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  onClick={() => {
                                    setPlanoForm({ tipo: 'receitas', codigo: rev.codigo, nome: rev.nome, originalCodigo: rev.codigo });
                                    setShowPlanoModal(true);
                                  }}
                                  className="p-1 rounded text-teal-800 hover:bg-emerald-100 cursor-pointer"
                                  title="Editar"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm(`Deseja excluir a conta ${rev.codigo}?`)) {
                                      const updated = {
                                        ...planoContasData,
                                        receitas: planoContasData.receitas.filter(r => r.codigo !== rev.codigo)
                                      };
                                      setPlanoContasData(updated);
                                      syncSettingsToCloud(availableSegments, availableStatuses, updated, params, availableAgencies);
                                      showToast('Conta removida do plano de contas!');
                                    }
                                  }}
                                  className="p-1 rounded text-rose-600 hover:bg-rose-100 cursor-pointer"
                                  title="Excluir"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-xs font-extrabold text-rose-950 uppercase tracking-wider">Contas de Despesas e Custos (2.X)</h4>
                        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                          {planoContasData.despesas.map((desp) => (
                            <div key={desp.codigo} className="flex items-center justify-between p-3 rounded-xl border border-rose-200 bg-rose-50/30 text-xs">
                              <span className="font-semibold text-slate-800 truncate mr-2">{desp.nome}</span>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  onClick={() => {
                                    setPlanoForm({ tipo: 'despesas', codigo: desp.codigo, nome: desp.nome, originalCodigo: desp.codigo });
                                    setShowPlanoModal(true);
                                  }}
                                  className="p-1 rounded text-rose-800 hover:bg-rose-100 cursor-pointer"
                                  title="Editar"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm(`Deseja excluir a conta ${desp.codigo}?`)) {
                                      const updated = {
                                        ...planoContasData,
                                        despesas: planoContasData.despesas.filter(d => d.codigo !== desp.codigo)
                                      };
                                      setPlanoContasData(updated);
                                      syncSettingsToCloud(availableSegments, availableStatuses, updated, params, availableAgencies);
                                      showToast('Conta removida do plano de contas!');
                                    }
                                  }}
                                  className="p-1 rounded text-rose-600 hover:bg-rose-100 cursor-pointer"
                                  title="Excluir"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* ========================================================================== */}
      {/* TODOS OS 13 MODAIS DO SISTEMA UNIFICADOS E ATIVOS                          */}
      {/* ========================================================================== */}

      {/* 1. MODAL NOVO / EDITAR PLANO DE CONTAS */}
      {showPlanoModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-extrabold text-[#1B3B2B]">{planoForm.originalCodigo ? 'Editar Conta' : 'Novo Plano de Contas'}</h3>
              <button onClick={() => setShowPlanoModal(false)} className="text-slate-500 hover:text-slate-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (!planoForm.codigo || !planoForm.nome) return;
              const targetListKey = planoForm.tipo;
              const list = planoContasData[targetListKey];
              
              let updatedList;
              if (planoForm.originalCodigo) {
                updatedList = list.map(item => item.codigo === planoForm.originalCodigo ? { codigo: planoForm.codigo, nome: planoForm.nome } : item);
              } else {
                updatedList = [...list, { codigo: planoForm.codigo, nome: planoForm.nome }];
              }

              const updatedPlano = { ...planoContasData, [targetListKey]: updatedList };
              setPlanoContasData(updatedPlano);
              syncSettingsToCloud(availableSegments, availableStatuses, updatedPlano, params, availableAgencies);
              setShowPlanoModal(false);
              showToast('Plano de Contas salvo e sincronizado!');
            }} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Tipo de Conta</label>
                <select
                  value={planoForm.tipo}
                  onChange={(e) => setPlanoForm({ ...planoForm, tipo: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold cursor-pointer"
                >
                  <option value="receitas">Receita (1.X)</option>
                  <option value="despesas">Despesa / Custo (2.X)</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1">Código da Conta</label>
                <input
                  type="text"
                  value={planoForm.codigo}
                  onChange={(e) => setPlanoForm({ ...planoForm, codigo: e.target.value })}
                  placeholder="Ex: 1.1.06"
                  className="w-full px-3 py-2 rounded-xl border font-mono font-bold"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Nome / Descrição da Conta</label>
                <input
                  type="text"
                  value={planoForm.nome}
                  onChange={(e) => setPlanoForm({ ...planoForm, nome: e.target.value })}
                  placeholder="Ex: 1.1.06 — Consultoria Ambiental Especial"
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setShowPlanoModal(false)} className="px-4 py-2 rounded-xl border font-bold cursor-pointer">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer">Salvar Conta</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. MODAL NOVO / EDITAR CONTRATO AMBIENTAL / SST (COM CADASTRO DE ÓRGÃO E OBSERVAÇÃO) */}
      {showContractModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[92vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">{editingContract ? 'Editar Contrato' : 'Novo Contrato Ambiental / SST'}</h3>
              <button onClick={() => { setShowContractModal(false); setEditingContract(null); setShowAgencyManager(false); }} className="text-white hover:text-emerald-300 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveContract} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">CLIENTE / EMPREENDIMENTO</label>
                <input
                  type="text"
                  list="client-list-ct"
                  value={ctForm.client}
                  onChange={(e) => setCtForm({ ...ctForm, client: e.target.value })}
                  placeholder="Nome do cliente..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-800"
                  required
                />
                <datalist id="client-list-ct">
                  {clients.map(cli => <option key={cli.id} value={cli.name} />)}
                </datalist>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">ESCOPO TÉCNICO / SERVIÇO</label>
                <input
                  type="text"
                  value={ctForm.service}
                  onChange={(e) => setCtForm({ ...ctForm, service: e.target.value })}
                  placeholder="Ex: Licenciamento LP/LI/LO para Fazenda..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-semibold"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* CAMPO DE ÓRGÃO / SETOR COM GERENCIADOR DE CADASTRO, EDIÇÃO E EXCLUSÃO */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block font-bold text-slate-700 uppercase">ÓRGÃO / SETOR</label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowAgencyManager(!showAgencyManager);
                        setAgencyInput('');
                        setEditingAgencyOriginal(null);
                      }}
                      className="text-[11px] font-extrabold text-[#1B3B2B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> {showAgencyManager ? 'Fechar Opções' : 'Cadastrar / Editar'}
                    </button>
                  </div>
                  <select
                    value={ctForm.agency}
                    onChange={(e) => setCtForm({ ...ctForm, agency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    {availableAgencies.map(ag => <option key={ag} value={ag}>{ag}</option>)}
                  </select>

                  {showAgencyManager && (
                    <div className="p-3 rounded-xl border border-[#B7DFC5] bg-[#F4F9F5] space-y-2.5">
                      <div className="text-[10px] font-extrabold uppercase text-[#1B3B2B]">
                        {editingAgencyOriginal ? `Editando: ${editingAgencyOriginal}` : 'Novo Órgão / Setor'}
                      </div>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={agencyInput}
                          onChange={(e) => setAgencyInput(e.target.value)}
                          placeholder="Ex: INCRA, ANM, SEMA..."
                          className="flex-1 px-2.5 py-1.5 rounded-lg border bg-white text-xs font-semibold"
                        />
                        <button
                          type="button"
                          onClick={handleSaveAgency}
                          className="px-3 py-1.5 rounded-lg bg-[#1B3B2B] text-white font-bold text-xs hover:bg-[#2D5A43] cursor-pointer"
                        >
                          {editingAgencyOriginal ? 'Salvar' : 'Adicionar'}
                        </button>
                      </div>
                      <div className="max-h-28 overflow-y-auto space-y-1 pt-1 border-t border-emerald-200/60">
                        {availableAgencies.map((ag) => (
                          <div key={ag} className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200">
                            <span className="truncate font-medium pr-2">{ag}</span>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingAgencyOriginal(ag);
                                  setAgencyInput(ag);
                                }}
                                className="p-0.5 text-teal-700 hover:bg-teal-50 rounded cursor-pointer"
                                title="Editar Órgão"
                              >
                                <Edit3 className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteAgency(ag)}
                                className="p-0.5 text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                                title="Excluir Órgão"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">STATUS TÉCNICO</label>
                  <select
                    value={ctForm.status}
                    onChange={(e) => setCtForm({ ...ctForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white cursor-pointer"
                  >
                    <option value="Em Elaboração Técnica">Em Elaboração Técnica</option>
                    <option value="Protocolado / SEMA">Protocolado / SEMA</option>
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Concluído / Licença Emitida">Concluído / Licença Emitida</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">VALOR TOTAL (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={ctForm.contractValue}
                    onChange={(e) => setCtForm({ ...ctForm, contractValue: e.target.value })}
                    placeholder="0.00"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-black text-[#1B3B2B]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">CUSTOS DIRETOS (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={ctForm.directCosts}
                    onChange={(e) => setCtForm({ ...ctForm, directCosts: e.target.value })}
                    placeholder="Taxas, laudos..."
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">PARCELAS</label>
                  <select
                    value={ctForm.installmentsCount}
                    onChange={(e) => setCtForm({ ...ctForm, installmentsCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white cursor-pointer"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,12].map(n => <option key={n} value={n}>{n}x</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block font-bold text-[#1B3B2B] uppercase">Vencimentos e Valores das Parcelas</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                  {Array.from({ length: parseInt(ctForm.installmentsCount) || 1 }).map((_, idx) => (
                    <div key={idx} className="p-2 rounded-xl border bg-slate-50 flex items-center gap-2">
                      <span className="font-bold text-slate-600 w-8">{idx + 1}ª:</span>
                      <input
                        type="date"
                        value={ctForm.installmentDates?.[idx] || ''}
                        onChange={(e) => {
                          const newDates = [...(ctForm.installmentDates || [])];
                          newDates[idx] = e.target.value;
                          setCtForm({ ...ctForm, installmentDates: newDates });
                        }}
                        className="px-2 py-1 rounded border text-[11px] font-mono flex-1"
                      />
                      <input
                        type="number"
                        step="0.01"
                        placeholder="Valor (auto)"
                        value={ctForm.installmentAmounts?.[idx] || ''}
                        onChange={(e) => {
                          const newAmts = [...(ctForm.installmentAmounts || [])];
                          newAmts[idx] = e.target.value;
                          setCtForm({ ...ctForm, installmentAmounts: newAmts });
                        }}
                        className="px-2 py-1 rounded border text-[11px] w-24 font-bold"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CAMPO DE OBSERVAÇÃO DO CONTRATO */}
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">OBSERVAÇÃO</label>
                <textarea
                  value={ctForm.observation || ''}
                  onChange={(e) => setCtForm({ ...ctForm, observation: e.target.value })}
                  placeholder="Digite observações sobre o contrato, nº de protocolo, prazos ou detalhes técnicos..."
                  className="w-full px-3.5 py-2.5 rounded-xl border h-16 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => { setShowContractModal(false); setEditingContract(null); setShowAgencyManager(false); }}
                  className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
                >
                  Salvar Contrato
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. MODAL VER PARCELAS DO CONTRATO */}
      {viewingContractInstallments && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold">Gerenciamento de Parcelas</h3>
                <p className="text-xs text-emerald-300">Contrato: <strong>{viewingContractInstallments.id} — {viewingContractInstallments.client}</strong></p>
              </div>
              <button onClick={() => setViewingContractInstallments(null)} className="text-white hover:text-emerald-300 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 font-bold uppercase text-[11px] border-b">
                      <th className="py-2.5 px-3">Parcela</th>
                      <th className="py-2.5 px-3">Vencimento</th>
                      <th className="py-2.5 px-3 text-right">Valor Base</th>
                      <th className="py-2.5 px-3 text-center">Status</th>
                      <th className="py-2.5 px-3 text-center">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {(viewingContractInstallments.installmentsData || viewingContractInstallments.installmentsdata || []).map((inst) => (
                      <tr key={inst.number} className="hover:bg-slate-50">
                        <td className="py-3 px-3 font-bold">Parcela {inst.number}</td>
                        <td className="py-3 px-3 font-mono">{inst.dueDate || inst.duedate}</td>
                        <td className="py-3 px-3 text-right font-black text-[#1B3B2B]">{formatCurrency(inst.amount)}</td>
                        <td className="py-3 px-3 text-center">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${inst.status === 'Pago' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                            {inst.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          {inst.status === 'Pago' ? (
                            <button
                              onClick={() => setCancelInstallmentTarget({ contractId: viewingContractInstallments.id, installmentNumber: inst.number })}
                              className="px-3 py-1 rounded bg-rose-100 text-rose-700 font-bold text-[10px] hover:bg-rose-200 cursor-pointer"
                            >
                              Estornar Baixa
                            </button>
                          ) : (
                            <button
                              onClick={() => setReceivingInstallmentData({ contractId: viewingContractInstallments.id, installmentNumber: inst.number })}
                              className="px-3 py-1 rounded bg-emerald-800 text-white font-bold text-[10px] hover:bg-emerald-900 cursor-pointer"
                            >
                              Baixar / Receber
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end pt-4 border-t">
                <button
                  onClick={() => setViewingContractInstallments(null)}
                  className="px-6 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL BAIXAR / RECEBER PARCELA */}
      {receivingInstallmentData && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl border">
            <h3 className="text-base font-extrabold text-[#1B3B2B]">Registrar Recebimento da Parcela</h3>
            <p className="text-xs text-slate-600">Informe a data de recebimento e juros eventuais. O sistema lançará automaticamente no Livro Caixa.</p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold uppercase mb-1">Data do Recebimento</label>
                <input
                  type="date"
                  value={receiveForm.paymentDate}
                  onChange={(e) => setReceiveForm({ ...receiveForm, paymentDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                />
              </div>
              <div>
                <label className="block font-bold uppercase mb-1">Juros / Multa por Atraso (R$)</label>
                <input
                  type="number"
                  step="0.01"
                  value={receiveForm.interestAmount}
                  onChange={(e) => setReceiveForm({ ...receiveForm, interestAmount: e.target.value })}
                  placeholder="0.00"
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setReceivingInstallmentData(null)} className="px-4 py-2 rounded-xl border font-bold text-xs cursor-pointer">Cancelar</button>
              <button onClick={handleConfirmReceiveInstallment} className="px-5 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs cursor-pointer">Confirmar Baixa</button>
            </div>
          </div>
        </div>
      )}

      {/* 5. MODAL CONFIRMAR ESTORNO DE PARCELA */}
      {cancelInstallmentTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Estornar Recebimento?</h3>
            <p className="text-xs text-slate-600">
              Deseja cancelar a baixa da <strong>Parcela {cancelInstallmentTarget.installmentNumber}</strong> e remover o lançamento correspondente do Livro Caixa?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button onClick={() => setCancelInstallmentTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer">Cancelar</button>
              <button onClick={confirmCancelReceiveInstallment} className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer">Sim, Estornar</button>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL EXCLUIR CONTRATO */}
      {deleteContractTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Contrato?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover o contrato <strong>{deleteContractTarget.id} ({deleteContractTarget.client})</strong>?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button onClick={() => setDeleteContractTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer">Cancelar</button>
              <button onClick={confirmDeleteContract} className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer">Sim, Excluir</button>
            </div>
          </div>
        </div>
      )}

      {/* 7. MODAL CADASTRAR / EDITAR LANÇAMENTO */}
      {showTxModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">{editingTx ? 'Editar Lançamento' : 'Novo Lançamento no Livro Caixa'}</h3>
              <button onClick={() => { setShowTxModal(false); setEditingTx(null); }} className="text-white hover:text-emerald-300 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">TIPO</label>
                  <select
                    value={txForm.type}
                    onChange={(e) => setTxForm({ ...txForm, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">DATA</label>
                  <input
                    type="date"
                    value={txForm.date}
                    onChange={(e) => {
                      const dt = e.target.value;
                      const mNum = dt.split('-')[1];
                      const mNames = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };
                      setTxForm({ ...txForm, date: dt, month: mNames[mNum] || 'Nov' });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">PLANO DE CONTAS</label>
                <select
                  value={txForm.planocontas || txForm.planoContas}
                  onChange={(e) => {
                    const code = e.target.value;
                    const allC = [...planoContasData.receitas, ...planoContasData.despesas];
                    const found = allC.find(c => c.codigo === code);
                    setTxForm({ ...txForm, planoContas: code, planocontas: code, category: found ? found.nome : txForm.category });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                >
                  <optgroup label="Receitas (1.X)">
                    {planoContasData.receitas.map(r => <option key={r.codigo} value={r.codigo}>{r.nome}</option>)}
                  </optgroup>
                  <optgroup label="Despesas (2.X)">
                    {planoContasData.despesas.map(d => <option key={d.codigo} value={d.codigo}>{d.nome}</option>)}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">FAVORECIDO / CLIENTE</label>
                <input
                  type="text"
                  list="client-list-tx"
                  value={txForm.entity}
                  onChange={(e) => setTxForm({ ...txForm, entity: e.target.value })}
                  placeholder="Nome do cliente ou fornecedor..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                  required
                />
                <datalist id="client-list-tx">
                  {clients.map(cli => <option key={cli.id} value={cli.name} />)}
                </datalist>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">VALOR (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={txForm.amount}
                    onChange={(e) => setTxForm({ ...txForm, amount: e.target.value })}
                    placeholder="0.00"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-black text-[#1B3B2B]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">STATUS</label>
                  <select
                    value={txForm.status}
                    onChange={(e) => setTxForm({ ...txForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    <option value="Pago / Recebido">Pago / Recebido</option>
                    <option value="Pendente">Pendente</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">DESCRIÇÃO</label>
                <input
                  type="text"
                  value={txForm.description}
                  onChange={(e) => setTxForm({ ...txForm, description: e.target.value })}
                  placeholder="Detalhes do lançamento..."
                  className="w-full px-3.5 py-2.5 rounded-xl border"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => { setShowTxModal(false); setEditingTx(null); }}
                  className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
                >
                  Salvar Lançamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 8. MODAL EXCLUIR LANÇAMENTO */}
      {deleteTxTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Lançamento?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover o lançamento <strong>{deleteTxTarget.id} ({deleteTxTarget.entity})</strong>?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button onClick={() => setDeleteTxTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer">Cancelar</button>
              <button onClick={confirmDeleteTransaction} className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer">Sim, Excluir</button>
            </div>
          </div>
        </div>
      )}

      {/* 9. MODAL CADASTRAR / EDITAR CLIENTE (COM GERENCIADOR DE SEGMENTO E STATUS) */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[92vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">{editingClient ? 'Editar Cliente' : 'Novo Cadastro de Cliente'}</h3>
              <button onClick={() => { setShowClientModal(false); setEditingClient(null); setShowSegmentManager(false); setShowStatusManager(false); }} className="text-white hover:text-emerald-300 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveClient} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">CNPJ (BUSCA AUTOMÁTICA AO SAIR DO CAMPO)</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={cliForm.document}
                    onChange={(e) => setCliForm({ ...cliForm, document: e.target.value })}
                    onBlur={(e) => { if (e.target.value) handleCnpjBlur(e.target.value); }}
                    placeholder="Digite o CNPJ (apenas números)..."
                    className="w-full px-3.5 py-2.5 rounded-xl border font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">RAZÃO SOCIAL / NOME</label>
                <input
                  type="text"
                  value={cliForm.name}
                  onChange={(e) => setCliForm({ ...cliForm, name: e.target.value })}
                  placeholder="Nome do cliente ou empresa..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-800"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block font-bold text-slate-700 uppercase">SEGMENTO</label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowSegmentManager(!showSegmentManager);
                        setSegmentInput('');
                        setEditingSegmentOriginal(null);
                      }}
                      className="text-[11px] font-extrabold text-[#1B3B2B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> {showSegmentManager ? 'Fechar Opções' : 'Cadastrar / Editar'}
                    </button>
                  </div>
                  <select
                    value={cliForm.segment}
                    onChange={(e) => setCliForm({ ...cliForm, segment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    {availableSegments.map(seg => <option key={seg} value={seg}>{seg}</option>)}
                  </select>

                  {showSegmentManager && (
                    <div className="p-3 rounded-xl border border-[#B7DFC5] bg-[#F4F9F5] space-y-2.5">
                      <div className="text-[10px] font-extrabold uppercase text-[#1B3B2B]">
                        {editingSegmentOriginal ? `Editando: ${editingSegmentOriginal}` : 'Novo Segmento Econômico'}
                      </div>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={segmentInput}
                          onChange={(e) => setSegmentInput(e.target.value)}
                          placeholder="Digite o segmento..."
                          className="flex-1 px-2.5 py-1.5 rounded-lg border bg-white text-xs font-semibold"
                        />
                        <button
                          type="button"
                          onClick={handleSaveSegment}
                          className="px-3 py-1.5 rounded-lg bg-[#1B3B2B] text-white font-bold text-xs hover:bg-[#2D5A43] cursor-pointer"
                        >
                          {editingSegmentOriginal ? 'Salvar' : 'Adicionar'}
                        </button>
                      </div>
                      <div className="max-h-28 overflow-y-auto space-y-1 pt-1 border-t border-emerald-200/60">
                        {availableSegments.map((seg) => (
                          <div key={seg} className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200">
                            <span className="truncate font-medium pr-2">{seg}</span>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingSegmentOriginal(seg);
                                  setSegmentInput(seg);
                                }}
                                className="p-0.5 text-teal-700 hover:bg-teal-50 rounded cursor-pointer"
                                title="Editar Segmento"
                              >
                                <Edit3 className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteSegment(seg)}
                                className="p-0.5 text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                                title="Excluir Segmento"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block font-bold text-slate-700 uppercase">STATUS</label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowStatusManager(!showStatusManager);
                        setStatusInput('');
                        setEditingStatusOriginal(null);
                      }}
                      className="text-[11px] font-extrabold text-[#1B3B2B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> {showStatusManager ? 'Fechar Opções' : 'Cadastrar / Editar'}
                    </button>
                  </div>
                  <select
                    value={cliForm.status}
                    onChange={(e) => setCliForm({ ...cliForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    {availableStatuses.map(st => <option key={st} value={st}>{st}</option>)}
                  </select>

                  {showStatusManager && (
                    <div className="p-3 rounded-xl border border-[#B7DFC5] bg-[#F4F9F5] space-y-2.5">
                      <div className="text-[10px] font-extrabold uppercase text-[#1B3B2B]">
                        {editingStatusOriginal ? `Editando: ${editingStatusOriginal}` : 'Novo Status de Cliente'}
                      </div>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={statusInput}
                          onChange={(e) => setStatusInput(e.target.value)}
                          placeholder="Digite o status..."
                          className="flex-1 px-2.5 py-1.5 rounded-lg border bg-white text-xs font-semibold"
                        />
                        <button
                          type="button"
                          onClick={handleSaveStatus}
                          className="px-3 py-1.5 rounded-lg bg-[#1B3B2B] text-white font-bold text-xs hover:bg-[#2D5A43] cursor-pointer"
                        >
                          {editingStatusOriginal ? 'Salvar' : 'Adicionar'}
                        </button>
                      </div>
                      <div className="max-h-28 overflow-y-auto space-y-1 pt-1 border-t border-emerald-200/60">
                        {availableStatuses.map((st) => (
                          <div key={st} className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200">
                            <span className="truncate font-medium pr-2">{st}</span>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingStatusOriginal(st);
                                  setStatusInput(st);
                                }}
                                className="p-0.5 text-teal-700 hover:bg-teal-50 rounded cursor-pointer"
                                title="Editar Status"
                              >
                                <Edit3 className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteStatus(st)}
                                className="p-0.5 text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                                title="Excluir Status"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">RESPONSÁVEL / CONTATO</label>
                  <input
                    type="text"
                    value={cliForm.contactName || cliForm.contactname || ''}
                    onChange={(e) => setCliForm({ ...cliForm, contactName: e.target.value, contactname: e.target.value })}
                    placeholder="Nome do contato..."
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">TELEFONE</label>
                  <input
                    type="text"
                    value={cliForm.phone}
                    onChange={(e) => setCliForm({ ...cliForm, phone: e.target.value })}
                    placeholder="(66) 99999-9999"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">E-MAIL</label>
                  <input
                    type="email"
                    value={cliForm.email}
                    onChange={(e) => setCliForm({ ...cliForm, email: e.target.value })}
                    placeholder="email@empresa.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">CIDADE</label>
                  <input
                    type="text"
                    value={cliForm.city}
                    onChange={(e) => setCliForm({ ...cliForm, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => { setShowClientModal(false); setEditingClient(null); setShowSegmentManager(false); setShowStatusManager(false); }}
                  className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
                >
                  Salvar Cliente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 10. MODAL EXCLUIR CLIENTE */}
      {deleteClientTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Cliente do CRM?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover o cliente <strong>{deleteClientTarget.name}</strong>?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button onClick={() => setDeleteClientTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer">Cancelar</button>
              <button onClick={confirmDeleteClient} className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer">Sim, Excluir</button>
            </div>
          </div>
        </div>
      )}

      {/* 11. MODAL CADASTRAR / EDITAR CONDICIONANTE */}
      {showCondModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">{editingCond ? 'Editar Condicionante Ambiental' : 'Novo Cadastro de Condicionante Ambiental'}</h3>
              <button onClick={() => { setShowCondModal(false); setEditingCond(null); }} className="text-white hover:text-emerald-300 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCondicionante} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">NOME DO CLIENTE / EMPREENDIMENTO</label>
                <input
                  type="text"
                  list="client-list-cond"
                  value={condForm.client}
                  onChange={(e) => setCondForm({ ...condForm, client: e.target.value })}
                  placeholder="Selecione ou digite o nome do cliente..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-800"
                  required
                />
                <datalist id="client-list-cond">
                  {clients.map(cli => (
                    <option key={cli.id} value={cli.name} />
                  ))}
                </datalist>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">LICENÇA (Nº / ANO)</label>
                  <input
                    type="text"
                    value={condForm.license}
                    onChange={(e) => setCondForm({ ...condForm, license: e.target.value })}
                    placeholder="Ex: LO: 106/2026"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-semibold"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">VENCIMENTO FINAL</label>
                  <input
                    type="date"
                    value={condForm.dueDate}
                    onChange={(e) => setCondForm({ ...condForm, dueDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">STATUS</label>
                  <select
                    value={condForm.status}
                    onChange={(e) => setCondForm({ ...condForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    <option value="FINALIZADO">FINALIZADO</option>
                    <option value="ATENDIDO">ATENDIDO</option>
                    <option value="EM ANDAMENTO">EM ANDAMENTO</option>
                    <option value="A VENCER">A VENCER</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">RESPONSÁVEL - EMPRESA</label>
                <input
                  type="text"
                  value={condForm.responsible}
                  onChange={(e) => setCondForm({ ...condForm, responsible: e.target.value })}
                  placeholder="Nome do responsável técnico..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-semibold"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">TIPO DE SERVIÇO / DESCRIÇÃO DA CONDICIONANTE</label>
                <textarea
                  value={condForm.service}
                  onChange={(e) => setCondForm({ ...condForm, service: e.target.value })}
                  placeholder="Ex: A CADA 6 MESES - ANÁLISE FÍSICO QUÍMICA..."
                  className="w-full px-3.5 py-2.5 rounded-xl border h-20 resize-none font-medium"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">OBSERVAÇÃO</label>
                <textarea
                  value={condForm.observation}
                  onChange={(e) => setCondForm({ ...condForm, observation: e.target.value })}
                  placeholder="Digite observações adicionais..."
                  className="w-full px-3.5 py-2.5 rounded-xl border h-16 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => { setShowCondModal(false); setEditingCond(null); }}
                  className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
                >
                  Salvar Condicionante
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 12. MODAL EXCLUIR CONDICIONANTE */}
      {deleteCondTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Condicionante?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover a condicionante de <strong>{deleteCondTarget.client}</strong>?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button 
                onClick={() => setDeleteCondTarget(null)} 
                className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmDeleteCondicionante} 
                className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer"
              >
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 13A. MODAL CADASTRAR NOVO UTILIZADOR */}
      {showUserRoleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-extrabold text-[#1B3B2B]">Cadastrar Novo Utilizador</h3>
              <button onClick={() => setShowUserRoleModal(false)} className="text-slate-500 hover:text-slate-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveNewUserRole} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Nível Hierárquico</label>
                <select
                  value={newRoleForm.level}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, level: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold bg-white cursor-pointer"
                >
                  <option value="Nível 1 — Master">Nível 1 — Master</option>
                  <option value="Nível 2 — Diretoria">Nível 2 — Diretoria</option>
                  <option value="Nível 3 — Financeiro">Nível 3 — Financeiro</option>
                  <option value="Nível Especial — Colaborador">Nível Especial — Colaborador</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1">Nome do Perfil / Departamento</label>
                <input
                  type="text"
                  value={newRoleForm.name}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, name: e.target.value })}
                  placeholder="Ex: Financeiro, Técnico..."
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Nome do Titular / Responsável</label>
                <input
                  type="text"
                  value={newRoleForm.holder}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, holder: e.target.value })}
                  placeholder="Nome completo..."
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">E-mail Corporativo de Acesso</label>
                <input
                  type="email"
                  value={newRoleForm.email}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, email: e.target.value })}
                  placeholder="email@grupomartins.eng.br"
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Senha Inicial</label>
                <input
                  type="text"
                  value={newRoleForm.password}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, password: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold text-teal-900 bg-emerald-50"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Descrição das Alçadas</label>
                <textarea
                  value={newRoleForm.description}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, description: e.target.value })}
                  placeholder="Explique o escopo de acesso..."
                  className="w-full px-3 py-2 rounded-xl border h-16 resize-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setShowUserRoleModal(false)} className="px-4 py-2 rounded-xl border font-bold cursor-pointer">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer">Salvar Utilizador</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 13B. MODAL CONFIGURAR PERMISSÕES (FLAGS) */}
      {editingRolePermissions && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-extrabold text-[#1B3B2B]">Configurar Permissões Granulares</h3>
                <p className="text-xs text-slate-500">Perfil: <strong>{editingRolePermissions.name} ({editingRolePermissions.holder})</strong></p>
              </div>
              <button onClick={() => setEditingRolePermissions(null)} className="text-slate-500 hover:text-slate-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              {Object.keys(editingRolePermissions.permissions || {}).map((modKey) => {
                const modPerms = editingRolePermissions.permissions[modKey];
                return (
                  <div key={modKey} className="p-3 rounded-xl border bg-slate-50 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-extrabold text-[#1B3B2B] uppercase w-32">{modKey}</span>
                    <div className="flex flex-wrap items-center gap-4">
                      {['view', 'create', 'edit', 'delete', 'approve'].map((actKey) => (
                        <label key={actKey} className="flex items-center gap-1.5 cursor-pointer font-medium select-none">
                          <input
                            type="checkbox"
                            checked={Boolean(modPerms?.[actKey])}
                            onChange={() => handlePermissionToggle(editingRolePermissions.id, modKey, actKey)}
                            className="w-4 h-4 rounded text-[#1B3B2B] focus:ring-[#1B3B2B] cursor-pointer"
                          />
                          <span className="capitalize">{actKey}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-3 border-t">
              <button onClick={() => setEditingRolePermissions(null)} className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer">
                Concluir & Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 13C. MODAL EDITAR PERFIL / SENHA / EXCLUIR */}
      {editingRoleTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-extrabold text-[#1B3B2B]">Editar Perfil e Senha</h3>
              <button onClick={() => setEditingRoleTarget(null)} className="text-slate-500 hover:text-slate-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveRoleEdit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Cargo / Nível</label>
                <input
                  type="text"
                  value={editingRoleTarget.level}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, level: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Nome do Departamento / Função</label>
                <input
                  type="text"
                  value={editingRoleTarget.name}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Titular / Responsável</label>
                <input
                  type="text"
                  value={editingRoleTarget.holder}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, holder: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">E-mail Corporativo</label>
                <input
                  type="email"
                  value={editingRoleTarget.email}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Nova Senha de Acesso</label>
                <input
                  type="text"
                  value={editingRoleTarget.password || ''}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, password: e.target.value })}
                  placeholder="Digite a nova senha..."
                  className="w-full px-3 py-2 rounded-xl border font-bold text-teal-900 bg-emerald-50"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Descrição / Alçadas</label>
                <textarea
                  value={editingRoleTarget.description}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border h-16 resize-none"
                  required
                />
              </div>
              <div className="flex items-center justify-between pt-3 border-t">
                <button
                  type="button"
                  onClick={() => handleDeleteRole(editingRoleTarget.id)}
                  className="px-4 py-2 rounded-xl bg-rose-100 text-rose-700 font-bold hover:bg-rose-200 cursor-pointer"
                >
                  Excluir Perfil
                </button>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setEditingRoleTarget(null)} className="px-4 py-2 rounded-xl border font-bold cursor-pointer">Cancelar</button>
                  <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer">Salvar Alterações</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TELA DE LOGIN */}
      {!authLoggedIn && (
        <div className="fixed inset-0 z-50 bg-[#1B3B2B]/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border text-center space-y-6">
            <GrupoMartinsLogo size="md" className="mx-auto" />
            <div>
              <h2 className="text-xl font-black text-[#1B3B2B]">Autenticação de Acesso — Nuvem</h2>
              <p className="text-xs text-slate-500 mt-1">Insira seu e-mail corporativo e senha cadastrados.</p>
            </div>
            {authErrorMsg && (
              <div className="p-3 rounded-xl bg-rose-100 text-rose-800 text-xs font-bold">
                {authErrorMsg}
              </div>
            )}
            <form onSubmit={(e) => {
              e.preventDefault();
              setAuthErrorMsg('');
              const found = accessRoles.find(r => r.email && r.email.toLowerCase() === authEmailInput.trim().toLowerCase());
              if (!found) {
                setAuthErrorMsg('E-mail não cadastrado.');
                return;
              }
              if (found.password && found.password !== authPasswordInput.trim()) {
                setAuthErrorMsg('Senha incorreta.');
                return;
              }
              setActiveRoleId(found.id);
              const isMasterUser = found.id === 'ROLE-01-PEDRO' || found.email.toLowerCase() === 'pedrosmelos@gmail.com';
              const firstOpenTab = navItems.find(item => (isMasterUser && item.permKey === 'acessos') || Boolean(found.permissions?.[item.permKey]?.view));
              if (firstOpenTab) setActiveTab(firstOpenTab.id);

              setAuthLoggedIn(true);
              showToast(`Bem-vindo(a), ${found.holder}! Acesso autorizado.`);
            }} className="space-y-4 text-left text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">E-mail Corporativo</label>
                <input type="email" value={authEmailInput} onChange={(e) => setAuthEmailInput(e.target.value)} placeholder="ex: maikon@grupomartins.eng.br" className="w-full px-3.5 py-2.5 rounded-xl border" required />
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Senha</label>
                <input type="password" value={authPasswordInput} onChange={(e) => setAuthPasswordInput(e.target.value)} placeholder="••••••••" className="w-full px-3.5 py-2.5 rounded-xl border" required />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer">
                Entrar no ERP (Sincronizado)
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
