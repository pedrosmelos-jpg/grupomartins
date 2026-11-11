import React, { useState, useMemo, useEffect } from 'react';
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
  Clock,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Wallet,
  Building2,
  Printer,
  RotateCcw,
  Trash2,
  Edit3,
  X,
  ChevronRight,
  ShieldCheck,
  Leaf,
  Award,
  DollarSign,
  FileText,
  Calendar,
  CreditCard,
  Eye,
  Menu,
  Users,
  Network,
  Lock,
  Unlock,
  Phone,
  Mail,
  MapPin,
  KeyRound,
  UserPlus,
  Cloud,
  CloudRain,
  Sliders
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
  Cell,
  BarChart
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

// ============================================================================
// 2. CONSTANTES E DADOS INICIAIS
// ============================================================================
const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const REVENUE_CATEGORIES = [
  'Licenciamento Ambiental (LP / LI / LO)',
  'Planos Ambientais (PRAD / PGRS) e Auditorias',
  'CAR, Georreferenciamento e Outorga de Água',
  'Segurança do Trabalho (PGR / PCMSO / LTCAT)',
  'Gestão de eSocial SST e Treinamentos NRs'
];

const EXPENSE_CATEGORIES = [
  'Impostos sobre Faturamento (ISS / Simples / PIS-COFINS)',
  'Taxas de Órgãos (SEMA-MT / IBAMA / CREA / ART)',
  'Análises Laboratoriais (Água / Solo / Efluentes) e Laudos',
  'Topografia, Geoprocessamento e Vistorias de Campo',
  'Deslocamento, Combustível e Diárias Técnicas',
  'Saque de Pró-Labore — Sócio Maikon Martins',
  'Folha de Pagamento Equipe Técnica e Encargos',
  'Comissões Comerciais e Prospecção de Clientes',
  'Softwares Técnicos (AutoCAD / QGIS / Sistema SST)',
  'Aluguel, Energia, Internet e Infraestrutura',
  'Tarifas Bancárias, Marketing e Despesas Gerais'
];

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

const DEFAULT_PERMISSIONS = {
  dashboard: { view: true, create: false, edit: false, delete: false, approve: false },
  prolabore: { view: false, create: false, edit: false, delete: false, approve: false },
  lancamentos: { view: true, create: true, edit: true, delete: false, approve: true },
  dre: { view: true, create: false, edit: false, delete: false, approve: false },
  contratos: { view: true, create: true, edit: true, delete: false, approve: false },
  clientes: { view: true, create: true, edit: true, delete: false, approve: false },
  acessos: { view: false, create: false, edit: false, delete: false, approve: false }
};

const INITIAL_ACCESS_ROLES = [
  {
    id: 'ROLE-01',
    level: 'Nível 1 — Master',
    name: 'Diretoria Executiva / Sócio-Administrador',
    holder: 'Maikon Martins (Sócio-Diretor)',
    email: 'maikon@grupomartins.eng.br',
    password: 'martins2026',
    badgeColor: 'bg-[#1B3B2B] text-[#F8F3EF]',
    description: 'Acesso total e irrestrito a todos os módulos estratégicos, aprovação de saques de Pró-Labore, DRE Gerencial, exclusão de contratos/lançamentos e governança de acessos.',
    permissions: {
      dashboard: { view: true, create: true, edit: true, delete: true, approve: true },
      prolabore: { view: true, create: true, edit: true, delete: true, approve: true },
      lancamentos: { view: true, create: true, edit: true, delete: true, approve: true },
      dre: { view: true, create: true, edit: true, delete: true, approve: true },
      contratos: { view: true, create: true, edit: true, delete: true, approve: true },
      clientes: { view: true, create: true, edit: true, delete: true, approve: true },
      acessos: { view: true, create: true, edit: true, delete: true, approve: true }
    }
  },
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
      acessos: { view: true, create: true, edit: true, delete: true, approve: true }
    }
  },
  {
    id: 'ROLE-02',
    level: 'Nível 2 — Financeiro',
    name: 'Gestão Financeira & Faturamento',
    holder: 'Aline Costa (Analista Financeira)',
    email: 'financeiro@grupomartins.eng.br',
    password: 'martins2026',
    badgeColor: 'bg-teal-800 text-white',
    description: 'Operação diária do Livro Caixa, emissão de boletos/NF, baixa de parcelas de contratos e cadastro de clientes.',
    permissions: {
      dashboard: { view: true, create: false, edit: false, delete: false, approve: false },
      prolabore: { view: false, create: false, edit: false, delete: false, approve: false },
      lancamentos: { view: true, create: true, edit: true, delete: false, approve: true },
      dre: { view: true, create: false, edit: false, delete: false, approve: false },
      contratos: { view: true, create: true, edit: true, delete: false, approve: false },
      clientes: { view: true, create: true, edit: true, delete: false, approve: false },
      acessos: { view: false, create: false, edit: false, delete: false, approve: false }
    }
  }
];

const formatCurrency = (val) => {
  if (val === undefined || val === null || isNaN(val)) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
};

// ============================================================================
// 3. COMPONENTE PRINCIPAL
// ============================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCloudSynced, setIsCloudSynced] = useState(false);

  const [transactions, setTransactions] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [clients, setClients] = useState([]);

  // Listas personalizáveis de Segmentos, Status e Plano de Contas
  const [availableSegments, setAvailableSegments] = useState([
    'Agronegócio / Propriedade Rural',
    'Indústria / Agroindústria',
    'Construtora / Loteamento',
    'Transporte / Logística',
    'Comércio / Serviços',
    'Saúde / Hospitalar'
  ]);
  const [availableStatuses, setAvailableStatuses] = useState([
    'Ativo',
    'Em Prospecção',
    'Pendência Documental',
    'Inativo'
  ]);

  const [revenueCategories, setRevenueCategories] = useState(REVENUE_CATEGORIES);
  const [expenseCategories, setExpenseCategories] = useState(EXPENSE_CATEGORIES);
  const [newRevenueCatText, setNewRevenueCatText] = useState('');
  const [newExpenseCatText, setNewExpenseCatText] = useState('');

  const [isAddingSegment, setIsAddingSegment] = useState(false);
  const [newSegmentText, setNewSegmentText] = useState('');
  const [isAddingStatus, setIsAddingStatus] = useState(false);
  const [newStatusText, setNewStatusText] = useState('');

  const [accessRoles, setAccessRoles] = useState(INITIAL_ACCESS_ROLES);
  const [activeRoleId, setActiveRoleId] = useState('ROLE-01');
  const [authLoggedIn, setAuthLoggedIn] = useState(false);
  const [authEmailInput, setAuthEmailInput] = useState('');
  const [authPasswordInput, setAuthPasswordInput] = useState('');
  const [authErrorMsg, setAuthErrorMsg] = useState('');

  const [params, setParams] = useState(INITIAL_PARAMETERS);

  // Estados de Cadastrar / Editar Utilizador & Permissões
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

  // Sincronização Supabase
  useEffect(() => {
    const fetchAllData = async () => {
      if (!supabase) return;
      try {
        const [txRes, ctRes, cliRes] = await Promise.all([
          supabase.from('transactions').select('*'),
          supabase.from('contracts').select('*'),
          supabase.from('clients').select('*')
        ]);

        if (!txRes.error && txRes.data) {
          setTransactions(txRes.data);
          setIsCloudSynced(true);
        }
        if (!ctRes.error && ctRes.data) setContracts(ctRes.data);
        if (!cliRes.error && cliRes.data) setClients(cliRes.data);
      } catch (err) {
        console.error('Supabase sync error:', err);
      }
    };

    fetchAllData();
    if (!supabase) return;

    const channel = supabase
      .channel('realtime-erp-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'transactions' }, fetchAllData)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contracts' }, fetchAllData)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'clients' }, fetchAllData)
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') setIsCloudSynced(true);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const currentRole = useMemo(() => {
    return accessRoles.find((r) => r.id === activeRoleId) || accessRoles[0];
  }, [accessRoles, activeRoleId]);

  const hasPermission = (moduleKey, actionKey = 'view') => {
    if (!currentRole || !currentRole.permissions || !currentRole.permissions[moduleKey]) return true;
    return Boolean(currentRole.permissions[moduleKey][actionKey]);
  };

  const [txSearch, setTxSearch] = useState('');
  const [ctSearch, setCtSearch] = useState('');
  const [ctStatusFilter, setCtStatusFilter] = useState('Todos');
  const [cliSearch, setCliSearch] = useState('');

  const [showTxModal, setShowTxModal] = useState(false);
  const [editingTx, setEditingTx] = useState(null);
  const [showContractModal, setShowContractModal] = useState(false);
  const [editingContract, setEditingContract] = useState(null);
  const [deleteContractTarget, setDeleteContractTarget] = useState(null);
  const [showClientModal, setShowClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const [txForm, setTxForm] = useState({
    date: '2026-11-10',
    month: 'Nov',
    type: 'Entrada',
    category: revenueCategories[0],
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
    agency: 'SEMA-MT',
    status: 'Em Elaboração Técnica',
    contractValue: '',
    receivedValue: '0',
    directCosts: '',
    installmentsCount: '1',
    installmentDates: ['2026-12-30', '', '', '', '', '', '', '', '', ''],
    paymentMethod: 'PIX'
  });

  const [cliForm, setCliForm] = useState({
    name: '',
    document: '',
    registration: '',
    segment: 'Agronegócio / Propriedade Rural',
    city: 'Rondonópolis — MT',
    contactName: '',
    phone: '',
    email: '',
    mainProgram: 'Licenciamento Ambiental (LP / LI / LO)',
    status: 'Ativo'
  });

  const financialData = useMemo(() => {
    const receitaBrutaAnual = transactions.filter((t) => t.type === 'Entrada').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const saidasTotaisAnual = transactions.filter((t) => t.type === 'Saída').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const lucroLiquidoAnual = receitaBrutaAnual - saidasTotaisAnual;
    
    const proLaboreCat = 'Saque de Pró-Labore — Sócio Maikon Martins';
    const proLaboreTotalAnual = transactions.filter((t) => t.category === proLaboreCat).reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    const proLaborePago = transactions.filter((t) => t.category === proLaboreCat && t.status === 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

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

    const revenueByCategory = revenueCategories.map((cat) => {
      const value = transactions.filter(t => t.category === cat).reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
      return { category: cat, shortName: cat.split(' (')[0], value, share: receitaBrutaAnual > 0 ? value / receitaBrutaAnual : 0 };
    }).sort((a, b) => b.value - a.value);

    const totalContratado = contracts.reduce((acc, c) => acc + Number(c.contractValue || 0), 0);
    const totalRecebidoContratos = contracts.reduce((acc, c) => acc + Number(c.receivedValue || 0), 0);
    const saldoAFaturar = totalContratado - totalRecebidoContratos;
    
    let totalCustoContratos = contracts.reduce((acc, c) => acc + Number(c.directCosts || 0), 0);
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
  }, [transactions, contracts, params, revenueCategories]);

  const handleToggleStatus = async (id) => {
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
    if (!txForm.entity || isNaN(numericAmount) || numericAmount <= 0) return;
    const txId = editingTx ? editingTx.id : `MT-${String(transactions.length + 15).padStart(3, '0')}`;
    const txData = { id: txId, ...txForm, amount: numericAmount };
    setTransactions(prev => editingTx ? prev.map(t => t.id === txId ? txData : t) : [...prev, txData]);
    if (supabase) await supabase.from('transactions').upsert(txData);
    showToast('Lançamento salvo!');
    setShowTxModal(false);
  };

  const handleSaveContract = async (e) => {
    e.preventDefault();
    const contractVal = parseFloat(String(ctForm.contractValue).replace(',', '.')) || 0;
    const receivedVal = parseFloat(String(ctForm.receivedValue).replace(',', '.')) || 0;
    const directVal = parseFloat(String(ctForm.directCosts).replace(',', '.')) || 0;
    const nInstallments = parseInt(ctForm.installmentsCount) || 1;
    if (!ctForm.client || contractVal <= 0) return;

    const contractId = editingContract ? editingContract.id : `CT-2026-${String(contracts.length + 1).padStart(2, '0')}`;
    const contractData = {
      id: contractId,
      ...ctForm,
      contractValue: contractVal,
      receivedValue: receivedVal,
      directCosts: directVal
    };

    setContracts(prev => editingContract ? prev.map(c => c.id === contractId ? contractData : c) : [...prev, contractData]);
    if (supabase) {
      await supabase.from('contracts').upsert(contractData);
    }

    if (!editingContract) {
      const installmentVal = contractVal / nInstallments;
      const newTxs = [];
      for (let i = 0; i < nInstallments; i++) {
        const instDate = ctForm.installmentDates[i] || '2026-12-30';
        const monthNames = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };
        const monthNum = instDate.split('-')[1] || '12';
        const monthStr = monthNames[monthNum] || 'Dez';
        const tId = `MT-${String(transactions.length + 15 + i).padStart(3, '0')}`;
        
        const newTx = {
          id: tId,
          date: instDate,
          month: monthStr,
          type: 'Entrada',
          category: revenueCategories[0],
          entity: ctForm.client,
          contractId: contractId,
          description: `Parcela ${i + 1}/${nInstallments} (${ctForm.paymentMethod}) — Contrato ${contractId}`,
          paymentMethod: ctForm.paymentMethod,
          status: i === 0 && receivedVal > 0 ? 'Pago / Recebido' : 'Pendente',
          amount: installmentVal
        };
        newTxs.push(newTx);
      }
      setTransactions(prev => [...prev, ...newTxs]);
      if (supabase && newTxs.length > 0) {
        await supabase.from('transactions').upsert(newTxs);
      }
    }

    showToast('Contrato e parcelas salvos com sucesso!');
    setShowContractModal(false);
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
      alert('Por favor, preencha o nome/razão social.');
      return;
    }

    try {
      const clientId = editingClient ? editingClient.id : `CLI-${String(clients.length + 1).padStart(3, '0')}`;
      const clientData = { id: clientId, ...cliForm };

      console.log('Salvando cliente:', clientData);

      if (supabase) {
        const { error } = await supabase.from('clients').upsert([clientData]);
        if (error) {
          console.error('Erro detalhado do Supabase:', error);
          alert('Erro ao salvar no Supabase: ' + error.message);
          return;
        }
      }

      setClients(prev => editingClient ? prev.map(c => c.id === clientId ? clientData : c) : [...prev, clientData]);
      
      if (supabase) {
        const { data, error: fetchError } = await supabase.from('clients').select('*');
        if (!fetchError && data) setClients(data);
      }

      setShowClientModal(false);
      alert('Cliente salvo com sucesso!');
    } catch (err) {
      console.error('Erro crítico ao salvar:', err);
      alert('Erro ao processar o salvamento.');
    }
  };

  const handleSaveNewUserRole = (e) => {
    e.preventDefault();
    if (!newRoleForm.name || !newRoleForm.holder || !newRoleForm.email) return;
    const newRole = {
      id: `ROLE-${Date.now()}`,
      level: newRoleForm.level,
      name: newRoleForm.name,
      holder: newRoleForm.holder,
      email: newRoleForm.email,
      password: newRoleForm.password || 'martins2026',
      badgeColor: 'bg-[#1B3B2B] text-white',
      description: newRoleForm.description || 'Perfil personalizado de acesso.',
      permissions: JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS))
    };
    setAccessRoles([...accessRoles, newRole]);
    setShowUserRoleModal(false);
    setNewRoleForm({
      level: 'Nível Especial — Colaborador',
      name: '',
      holder: '',
      email: '',
      password: 'martins2026',
      description: ''
    });
    showToast('Novo utilizador cadastrado com sucesso!');
  };

  const handlePermissionToggle = (roleId, moduleKey, actionKey) => {
    setAccessRoles(prevRoles =>
      prevRoles.map(role => {
        if (role.id === roleId) {
          const currentVal = role.permissions?.[moduleKey]?.[actionKey] || false;
          const updatedRole = {
            ...role,
            permissions: {
              ...role.permissions,
              [moduleKey]: {
                ...role.permissions[moduleKey],
                [actionKey]: !currentVal
              }
            }
          };
          if (editingRolePermissions && editingRolePermissions.id === roleId) {
            setEditingRolePermissions(updatedRole);
          }
          return updatedRole;
        }
        return role;
      })
    );
  };

  const filteredTransactions = useMemo(() => transactions.filter(t => (t.entity || '').toLowerCase().includes(txSearch.toLowerCase()) || (t.description || '').toLowerCase().includes(txSearch.toLowerCase())), [transactions, txSearch]);
  
  const filteredContracts = useMemo(() => {
    return contracts.filter(c => {
      const matchSearch = (c.client || '').toLowerCase().includes(ctSearch.toLowerCase()) ||
        (c.service || '').toLowerCase().includes(ctSearch.toLowerCase()) ||
        (c.id || '').toLowerCase().includes(ctSearch.toLowerCase()) ||
        (c.agency || '').toLowerCase().includes(ctSearch.toLowerCase());
      const matchStatus = ctStatusFilter === 'Todos' || c.status === ctStatusFilter;
      return matchSearch && matchStatus;
    });
  }, [contracts, ctSearch, ctStatusFilter]);

  const filteredClients = useMemo(() => clients.filter(cli => (cli.name || '').toLowerCase().includes(cliSearch.toLowerCase())), [clients, cliSearch]);

  const PIE_COLORS = ['#1B3B2B', '#2D5A43', '#3B7A57', '#557A46', '#7A9A8B'];

  const navItems = [
    { id: 'dashboard', label: 'Painel Executivo', icon: LayoutDashboard, badge: 'KPIs', permKey: 'dashboard' },
    { id: 'prolabore', label: 'Pró-Labore (Maikon Martins)', icon: UserCheck, badge: 'Sócio', permKey: 'prolabore' },
    { id: 'lancamentos', label: 'Livro Caixa & Lançamentos', icon: ArrowUpDown, badge: transactions.length, permKey: 'lancamentos' },
    { id: 'dre', label: 'DRE Gerencial Mensal', icon: FileSpreadsheet, badge: 'AV%', permKey: 'dre' },
    { id: 'contratos', label: 'Contratos Ambientais & SST', icon: Briefcase, badge: contracts.length, permKey: 'contratos' },
    { id: 'clientes', label: 'Cadastro de Clientes (CRM)', icon: Users, badge: clients.length, permKey: 'clientes' },
    { id: 'acessos', label: 'Árvore de Acessos & Perfis', icon: Network, badge: `${accessRoles.length} Níveis`, permKey: 'acessos' },
    { id: 'config', label: 'Plano de Contas & Metas', icon: Settings, permKey: 'dashboard' }
  ];

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
              MM
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider truncate flex items-center gap-1">
                {isCloudSynced ? <Cloud className="w-3 h-3 text-emerald-400" /> : <CloudRain className="w-3 h-3 text-amber-400" />}
                {isCloudSynced ? 'Nuvem Sincronizada' : 'Conectando...'}
              </div>
              <div className="text-sm font-bold text-white truncate">
                {currentRole.holder}
              </div>
              <div className="text-[11px] text-emerald-100/80 truncate">
                Pró-Labore Pago: {formatCurrency(financialData.proLaborePago)}
              </div>
            </div>
          </div>

          <nav className="mt-4 px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const allowed = hasPermission(item.permKey, 'view') || item.id === 'acessos';
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (!allowed) {
                      showToast(`Módulo bloqueado para o perfil "${currentRole.name}".`);
                      return;
                    }
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive ? 'bg-[#F8F3EF] text-[#1B3B2B] font-bold shadow-md' : allowed ? 'text-emerald-100/85 hover:bg-[#244B38] hover:text-white' : 'text-emerald-200/40 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#1B3B2B]' : allowed ? 'text-emerald-300' : 'text-emerald-600'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {!allowed ? (
                    <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  ) : (
                    item.badge && (
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
            Grupo Martins ERP v3.6 • Supabase
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
                {currentRole.level} ({currentRole.holder})
              </span>
              <button
                onClick={() => setAuthLoggedIn(false)}
                className="ml-2 px-2 py-0.5 rounded bg-[#1B3B2B] text-white text-[10px] font-bold hover:bg-[#2D5A43]"
              >
                Sair
              </button>
            </div>

            {hasPermission('prolabore', 'create') && (
              <button
                onClick={() => {
                  setEditingTx(null);
                  setTxForm({
                    date: '2026-11-28',
                    month: 'Nov',
                    type: 'Saída',
                    category: 'Saque de Pró-Labore — Sócio Maikon Martins',
                    entity: 'Maikon Martins (Sócio-Diretor)',
                    contractId: '—',
                    description: 'Saque de Pró-Labore Extraordinário',
                    paymentMethod: 'PIX',
                    status: 'Pago / Recebido',
                    amount: '8000'
                  });
                  setShowTxModal(true);
                }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#F8F3EF] text-[#1B3B2B] border border-[#D5CFC7] hover:bg-[#EFE7DF]"
              >
                <UserCheck className="w-4 h-4 text-[#2D5A43]" />
                Saque Pró-Labore
              </button>
            )}

            {hasPermission('lancamentos', 'create') && (
              <button
                onClick={() => {
                  setEditingTx(null);
                  setTxForm({
                    date: '2026-11-10',
                    month: 'Nov',
                    type: 'Entrada',
                    category: revenueCategories[0],
                    entity: '',
                    contractId: '—',
                    description: '',
                    paymentMethod: 'PIX',
                    status: 'Pago / Recebido',
                    amount: ''
                  });
                  setShowTxModal(true);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] shadow"
              >
                <Plus className="w-4 h-4" />
                Novo Lançamento
              </button>
            )}
          </div>
        </header>

        <main className="p-4 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
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

              {/* KPIS */}
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
                <div onClick={() => setActiveTab('prolabore')} className="bg-[#F8F3EF] rounded-2xl p-4 border border-[#D5CFC7] border-t-4 border-t-[#2D5A43] shadow-sm cursor-pointer hover:shadow-md transition">
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

              {/* GRÁFICOS */}
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
                      {transactions.filter(t => t.category === 'Saque de Pró-Labore — Sócio Maikon Martins').map((tx) => (
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

          {activeTab === 'lancamentos' && (
            <div className="space-y-5">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
                <div className="relative flex-1 min-w-[220px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={txSearch}
                    onChange={(e) => setTxSearch(e.target.value)}
                    placeholder="Buscar lançamentos..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>
                <button
                  onClick={() => {
                    setEditingTx(null);
                    setTxForm({
                      date: '2026-11-10',
                      month: 'Nov',
                      type: 'Entrada',
                      category: revenueCategories[0],
                      entity: '',
                      contractId: '—',
                      description: '',
                      paymentMethod: 'PIX',
                      status: 'Pago / Recebido',
                      amount: ''
                    });
                    setShowTxModal(true);
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white"
                >
                  <Plus className="w-4 h-4" /> Incluir Lançamento
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                        <th className="py-3.5 px-3">ID</th>
                        <th className="py-3.5 px-3">Data</th>
                        <th className="py-3.5 px-3">Tipo</th>
                        <th className="py-3.5 px-3">Categoria</th>
                        <th className="py-3.5 px-3">Favorecido / Cliente</th>
                        <th className="py-3.5 px-3">Descrição</th>
                        <th className="py-3.5 px-3 text-center">Status</th>
                        <th className="py-3.5 px-3 text-right">Valor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredTransactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-slate-50">
                          <td className="py-2.5 px-3 font-mono font-bold">{tx.id}</td>
                          <td className="py-2.5 px-3">{tx.date}</td>
                          <td className="py-2.5 px-3">
                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${tx.type === 'Entrada' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                              {tx.type}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-medium">{tx.category}</td>
                          <td className="py-2.5 px-3 font-bold">{tx.entity}</td>
                          <td className="py-2.5 px-3">{tx.description}</td>
                          <td className="py-2.5 px-3 text-center">
                            <button onClick={() => handleToggleStatus(tx.id)} className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${tx.status === 'Pago / Recebido' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                              {tx.status}
                            </button>
                          </td>
                          <td className={`py-2.5 px-3 text-right font-extrabold ${tx.type === 'Entrada' ? 'text-emerald-700' : 'text-rose-700'}`}>
                            {formatCurrency(tx.amount)}
                          </td>
                        </tr>
                      ))}
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
                  <div className="text-xs text-emerald-600 mt-1">Parcelas quitadas pelos clientes</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">SALDO A FATURAR / RECEBER</div>
                  <div className="text-2xl font-black text-amber-600 mt-2">{formatCurrency(financialData.saldoAFaturar)}</div>
                  <div className="text-xs text-slate-500 mt-1">Vinculado à entrega de licenças/laudos</div>
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
                    placeholder="Buscar por cliente, fazenda, SEMA-MT, eSocial ou código..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={ctStatusFilter}
                    onChange={(e) => setCtStatusFilter(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                  >
                    <option value="Todos">Status Técnico: Todos</option>
                    <option value="Em Elaboração Técnica">Em Elaboração Técnica</option>
                    <option value="Protocolado / SEMA">Protocolado / SEMA</option>
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Concluído / Licença Emitida">Concluído / Licença Emitida</option>
                  </select>
                  <button
                    onClick={() => {
                      setEditingContract(null);
                      setCtForm({
                        client: '',
                        service: '',
                        agency: 'SEMA-MT',
                        status: 'Em Elaboração Técnica',
                        contractValue: '',
                        receivedValue: '0',
                        directCosts: '',
                        installmentsCount: '1',
                        installmentDates: ['2026-12-30', '', '', '', '', '', '', '', '', ''],
                        paymentMethod: 'PIX'
                      });
                      setShowContractModal(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43]"
                  >
                    <Plus className="w-4 h-4" /> Novo Contrato Ambiental / SST
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                        <th className="py-3.5 px-3">Código</th>
                        <th className="py-3.5 px-3">Cliente / Empreendimento</th>
                        <th className="py-3.5 px-3">Escopo Técnico (Ambiental / SST)</th>
                        <th className="py-3.5 px-3">Órgão / Norma</th>
                        <th className="py-3.5 px-3 text-center">Status Técnico</th>
                        <th className="py-3.5 px-3 text-right">Valor Contrato</th>
                        <th className="py-3.5 px-3 text-right">Já Recebido</th>
                        <th className="py-3.5 px-3 text-right">Saldo a Receber</th>
                        <th className="py-3.5 px-3 text-right">Custos Diretos</th>
                        <th className="py-3.5 px-3 text-center">Margem %</th>
                        <th className="py-3.5 px-3 text-center">Ações / Exclusão</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredContracts.length === 0 ? (
                        <tr>
                          <td colSpan="11" className="py-8 text-center text-slate-400">Nenhum contrato cadastrado.</td>
                        </tr>
                      ) : (
                        filteredContracts.map((ct) => {
                          const val = Number(ct.contractValue || 0);
                          const rec = Number(ct.receivedValue || 0);
                          const saldo = val - rec;
                          const cost = Number(ct.directCosts || 0);
                          const marginPct = val > 0 ? ((val - cost) / val) * 100 : 0;
                          return (
                            <tr key={ct.id} className="hover:bg-slate-50">
                              <td className="py-3 px-3 font-mono font-bold text-[#1B3B2B]">{ct.id}</td>
                              <td className="py-3 px-3 font-bold text-slate-900">{ct.client}</td>
                              <td className="py-3 px-3 text-slate-700">{ct.service}</td>
                              <td className="py-3 px-3 font-semibold text-slate-600">{ct.agency || 'SEMA-MT'}</td>
                              <td className="py-3 px-3 text-center">
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                                  {ct.status}
                                </span>
                              </td>
                              <td className="py-3 px-3 text-right font-bold text-[#1B3B2B]">{formatCurrency(val)}</td>
                              <td className="py-3 px-3 text-right text-emerald-700 font-semibold">{formatCurrency(rec)}</td>
                              <td className="py-3 px-3 text-right text-amber-600 font-semibold">{formatCurrency(saldo)}</td>
                              <td className="py-3 px-3 text-right text-rose-600">{formatCurrency(cost)}</td>
                              <td className="py-3 px-3 text-center font-extrabold text-[#1B3B2B]">{marginPct.toFixed(1).replace('.', ',')}%</td>
                              <td className="py-3 px-3 text-center">
                                <button
                                  onClick={() => setDeleteContractTarget(ct)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                                  title="Excluir Contrato"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
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
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#1B3B2B] text-white"
                >
                  <UserPlus className="w-4 h-4" /> Cadastrar Cliente
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                        <th className="py-3.5 px-3">ID</th>
                        <th className="py-3.5 px-3">Razão Social / Empreendimento</th>
                        <th className="py-3.5 px-3">Segmento Econômico</th>
                        <th className="py-3.5 px-3">Responsável / Contato</th>
                        <th className="py-3.5 px-3">Cidade</th>
                        <th className="py-3.5 px-3 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredClients.map((cli) => (
                        <tr key={cli.id} className="hover:bg-slate-50">
                          <td className="py-3 px-3 font-mono font-bold">{cli.id}</td>
                          <td className="py-3 px-3 font-bold">{cli.name}</td>
                          <td className="py-3 px-3">{cli.segment}</td>
                          <td className="py-3 px-3">{cli.contactName || '—'}</td>
                          <td className="py-3 px-3">{cli.city}</td>
                          <td className="py-3 px-3 text-center">
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                              {cli.status}
                            </span>
                          </td>
                        </tr>
                      ))}
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
                  <p className="text-xs text-slate-500">Gerencie colaboradores e configure permissões granulares por módulo.</p>
                </div>
                <button
                  onClick={() => setShowUserRoleModal(true)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43]"
                >
                  <UserPlus className="w-4 h-4" /> Cadastrar Novo Utilizador
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {accessRoles.map((role) => (
                  <div key={role.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="font-extrabold text-[#1B3B2B]">{role.name}</div>
                      <div className="text-xs text-slate-600">Titular: {role.holder}</div>
                      <div className="text-xs text-slate-500">E-mail: {role.email}</div>
                      <div className="text-[11px] text-slate-500 italic mt-1">{role.description}</div>
                    </div>
                    
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <button
                        onClick={() => setEditingRolePermissions(role)}
                        className="w-full py-1.5 rounded-lg text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Sliders className="w-3.5 h-3.5" /> Configurar Permissões (Flags)
                      </button>
                      <button
                        onClick={() => setActiveRoleId(role.id)}
                        className={`w-full py-1.5 rounded-lg text-xs font-bold cursor-pointer ${activeRoleId === role.id ? 'bg-[#1B3B2B] text-white' : 'bg-white text-[#1B3B2B] border'}`}
                      >
                        {activeRoleId === role.id ? 'Perfil Ativo' : 'Simular Perfil'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ABA CONFIG / PLANO DE CONTAS & METAS EXATAMENTE COMO NA SUA IMAGEM */}
          {activeTab === 'config' && (
            <div className="space-y-6">
              {/* Bloco Superior: Parâmetros Financeiros e Metas */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div>
                  <h2 className="text-base font-extrabold text-[#1B3B2B]">
                    Parâmetros Financeiros e Metas — Grupo Martins (2026)
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
                      onChange={(e) => setParams({ ...params, saldoInicialCaixa: Number(e.target.value) })}
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
                      onChange={(e) => setParams({ ...params, metaMensalReceita: Number(e.target.value) })}
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
                      onChange={(e) => setParams({ ...params, proLaboreAlvoMensal: Number(e.target.value) })}
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
                      onChange={(e) => setParams({ ...params, socioDiretor: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Bloco Inferior: Categorias divididas em duas colunas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Coluna Esquerda: Receitas Operacionais */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h3 className="text-xs font-extrabold text-[#1B3B2B] tracking-wider uppercase">
                      CATEGORIAS DE RECEITA OPERACIONAL (AMBIENTAL & SST)
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {revenueCategories.map((cat, idx) => (
                      <div key={cat} className="flex items-center justify-between p-3 rounded-xl border border-emerald-200 bg-emerald-50/40">
                        <span className="text-xs font-semibold text-slate-800">
                          {idx + 1}. {cat}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                          Entrada
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Adicionar nova categoria de receita */}
                  <div className="pt-2 flex gap-2">
                    <input
                      type="text"
                      value={newRevenueCatText}
                      onChange={(e) => setNewRevenueCatText(e.target.value)}
                      placeholder="Adicionar nova categoria de receita..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (newRevenueCatText.trim()) {
                          if (!revenueCategories.includes(newRevenueCatText.trim())) {
                            setRevenueCategories([...revenueCategories, newRevenueCatText.trim()]);
                            showToast('Categoria de receita adicionada!');
                          }
                          setNewRevenueCatText('');
                        }
                      }}
                      className="px-4 py-2 bg-[#1B3B2B] text-white rounded-xl text-xs font-bold shrink-0 hover:bg-[#2D5A43]"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>

                {/* Coluna Direita: Custos Diretos, Despesas e Pró-Labore */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h3 className="text-xs font-extrabold text-rose-900 tracking-wider uppercase">
                      CATEGORIAS DE CUSTOS DIRETOS, DESPESAS E PRÓ-LABORE
                    </h3>
                  </div>

                  <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
                    {expenseCategories.map((cat, idx) => (
                      <div key={cat} className="flex items-center justify-between p-3 rounded-xl border border-rose-200 bg-rose-50/30">
                        <span className="text-xs font-semibold text-slate-800">
                          {idx + 1}. {cat}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 shrink-0">
                          Saída
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Adicionar nova categoria de despesa */}
                  <div className="pt-2 flex gap-2">
                    <input
                      type="text"
                      value={newExpenseCatText}
                      onChange={(e) => setNewExpenseCatText(e.target.value)}
                      placeholder="Adicionar nova categoria de despesa..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (newExpenseCatText.trim()) {
                          if (!expenseCategories.includes(newExpenseCatText.trim())) {
                            setExpenseCategories([...expenseCategories, newExpenseCatText.trim()]);
                            showToast('Categoria de despesa adicionada!');
                          }
                          setNewExpenseCatText('');
                        }
                      }}
                      className="px-4 py-2 bg-rose-700 text-white rounded-xl text-xs font-bold shrink-0 hover:bg-rose-800"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL LANÇAMENTO */}
      {showTxModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-[#1B3B2B]">Novo Lançamento no Livro Caixa</h3>
            <form onSubmit={handleSaveTransaction} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Data</label>
                  <input type="date" value={txForm.date} onChange={(e) => setTxForm({ ...txForm, date: e.target.value })} className="w-full px-3 py-2 rounded-xl border" required />
                </div>
                <div>
                  <label className="block font-bold mb-1">Natureza</label>
                  <select value={txForm.type} onChange={(e) => setTxForm({ ...txForm, type: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold">
                    <option value="Entrada">Entrada (+)</option>
                    <option value="Saída">Saída (-)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-bold mb-1">Categoria</label>
                <select value={txForm.category} onChange={(e) => setTxForm({ ...txForm, category: e.target.value })} className="w-full px-3 py-2 rounded-xl border">
                  {(txForm.type === 'Entrada' ? revenueCategories : expenseCategories).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1">Favorecido / Cliente</label>
                <input type="text" value={txForm.entity} onChange={(e) => setTxForm({ ...txForm, entity: e.target.value })} placeholder="Nome do cliente ou sócio" className="w-full px-3 py-2 rounded-xl border" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Valor (R$)</label>
                  <input type="number" step="0.01" value={txForm.amount} onChange={(e) => setTxForm({ ...txForm, amount: e.target.value })} placeholder="0.00" className="w-full px-3 py-2 rounded-xl border font-bold" required />
                </div>
                <div>
                  <label className="block font-bold mb-1">Status</label>
                  <select value={txForm.status} onChange={(e) => setTxForm({ ...txForm, status: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold">
                    <option value="Pago / Recebido">Pago / Recebido</option>
                    <option value="Pendente">Pendente</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-bold mb-1">Descrição</label>
                <input type="text" value={txForm.description} onChange={(e) => setTxForm({ ...txForm, description: e.target.value })} placeholder="Descrição detalhada" className="w-full px-3 py-2 rounded-xl border" required />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowTxModal(false)} className="px-4 py-2 rounded-xl border font-bold">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold">Salvar no Supabase</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CONTRATO */}
      {showContractModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">Novo Contrato Ambiental & SST</h3>
              <button onClick={() => setShowContractModal(false)} className="text-white hover:text-emerald-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveContract} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Cliente / Fazenda / Indústria (Vinculado ao CRM)</label>
                <input
                  type="text"
                  list="client-list"
                  value={ctForm.client}
                  onChange={(e) => setCtForm({ ...ctForm, client: e.target.value })}
                  placeholder="Selecione da base de clientes ou digite novo..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-800"
                  required
                />
                <datalist id="client-list">
                  {clients.map(cli => (
                    <option key={cli.id} value={cli.name} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Serviço Técnico (Ambiental / SST)</label>
                <input
                  type="text"
                  value={ctForm.service}
                  onChange={(e) => setCtForm({ ...ctForm, service: e.target.value })}
                  placeholder="Ex: Licenciamento LP/LI/LO SEMA-MT + PGR/LTCAT"
                  className="w-full px-3.5 py-2.5 rounded-xl border"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Órgão Regulador / Norma</label>
                  <input
                    type="text"
                    value={ctForm.agency}
                    onChange={(e) => setCtForm({ ...ctForm, agency: e.target.value })}
                    placeholder="SEMA-MT"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Status do Processo</label>
                  <select
                    value={ctForm.status}
                    onChange={(e) => setCtForm({ ...ctForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white"
                  >
                    <option value="Em Elaboração Técnica">Em Elaboração Técnica</option>
                    <option value="Protocolado / SEMA">Protocolado / SEMA</option>
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Concluído / Licença Emitida">Concluído / Licença Emitida</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Forma de Pagamento</label>
                  <select
                    value={ctForm.paymentMethod}
                    onChange={(e) => setCtForm({ ...ctForm, paymentMethod: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white"
                  >
                    <option value="PIX">PIX</option>
                    <option value="Boleto">Boleto</option>
                    <option value="Cartão">Cartão</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Parcelamento (Até 10x)</label>
                  <select
                    value={ctForm.installmentsCount}
                    onChange={(e) => setCtForm({ ...ctForm, installmentsCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={String(i + 1)}>{i + 1}x {i === 0 ? '(À vista)' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {parseInt(ctForm.installmentsCount) > 0 && (
                <div className="space-y-2 bg-slate-50 p-3 rounded-xl border">
                  <label className="block font-bold text-slate-700 uppercase text-[11px]">Datas de Vencimento das Parcelas</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                    {[...Array(parseInt(ctForm.installmentsCount))].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-slate-600 w-16">Parcela {i+1}:</span>
                        <input
                          type="date"
                          value={ctForm.installmentDates[i] || '2026-12-30'}
                          onChange={(e) => {
                            const newDates = [...ctForm.installmentDates];
                            newDates[i] = e.target.value;
                            setCtForm({ ...ctForm, installmentDates: newDates });
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg border text-xs bg-white"
                          required
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Valor Contrato (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={ctForm.contractValue}
                    onChange={(e) => setCtForm({ ...ctForm, contractValue: e.target.value })}
                    placeholder="0.00"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-emerald-800"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Já Recebido (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={ctForm.receivedValue}
                    onChange={(e) => setCtForm({ ...ctForm, receivedValue: e.target.value })}
                    placeholder="0"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-700"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Custos Diretos (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={ctForm.directCosts}
                    onChange={(e) => setCtForm({ ...ctForm, directCosts: e.target.value })}
                    placeholder="0.00"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-rose-700"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowContractModal(false)}
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

      {/* MODAL CONFIRMAR EXCLUSÃO CONTRATO */}
      {deleteContractTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl">
            <h3 className="text-base font-bold text-rose-700">Excluir Contrato?</h3>
            <p className="text-xs text-slate-600">Deseja realmente remover o contrato <strong>{deleteContractTarget.id}</strong> ({deleteContractTarget.client})?</p>
            <div className="flex justify-center gap-2 pt-2">
              <button onClick={() => setDeleteContractTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs">Cancelar</button>
              <button onClick={confirmDeleteContract} className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700">Sim, Excluir</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CLIENTE */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B]">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">Novo Cadastro de Cliente — CRM Ambiental & SST</h3>
              <button onClick={() => setShowClientModal(false)} className="text-white hover:text-emerald-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSaveClient} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">RAZÃO SOCIAL / NOME DA FAZENDA OU EMPREENDIMENTO</label>
                <input
                  type="text"
                  value={cliForm.name}
                  onChange={(e) => setCliForm({ ...cliForm, name: e.target.value })}
                  placeholder="Ex: Agropecuária Rio Vermelho S/A (Fazenda São João)"
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-800"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">CNPJ / CPF</label>
                  <input
                    type="text"
                    value={cliForm.document}
                    onChange={(e) => setCliForm({ ...cliForm, document: e.target.value })}
                    placeholder="00.000.000/0001-00"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Nº CAR / INSCRIÇÃO ESTADUAL / MATRÍCULA</label>
                  <input
                    type="text"
                    value={cliForm.registration}
                    onChange={(e) => setCliForm({ ...cliForm, registration: e.target.value })}
                    placeholder="Ex: CAR MT-5107602 / IE 13.000.000-0"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block font-bold text-slate-700 uppercase">SEGMENTO ECONÔMICO</label>
                    <button
                      type="button"
                      onClick={() => setIsAddingSegment(true)}
                      className="text-[10px] text-emerald-700 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                    >
                      <Plus className="w-3 h-3" /> Adicionar Segmento
                    </button>
                  </div>
                  {isAddingSegment && (
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newSegmentText}
                        onChange={(e) => setNewSegmentText(e.target.value)}
                        placeholder="Novo segmento..."
                        className="w-full px-3 py-1.5 rounded-xl border text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (newSegmentText.trim()) {
                            if (!availableSegments.includes(newSegmentText.trim())) {
                              setAvailableSegments([...availableSegments, newSegmentText.trim()]);
                              setCliForm({ ...cliForm, segment: newSegmentText.trim() });
                              showToast('Novo segmento adicionado!');
                            }
                            setNewSegmentText('');
                            setIsAddingSegment(false);
                          }
                        }}
                        className="px-3 py-1.5 bg-[#1B3B2B] text-white rounded-xl text-xs font-bold shrink-0"
                      >
                        OK
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAddingSegment(false)}
                        className="px-2 py-1.5 border rounded-xl text-xs text-slate-500 shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                  <select
                    value={cliForm.segment}
                    onChange={(e) => setCliForm({ ...cliForm, segment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white"
                  >
                    {availableSegments.map(seg => (
                      <option key={seg} value={seg}>{seg}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">CIDADE / UF</label>
                  <input
                    type="text"
                    value={cliForm.city}
                    onChange={(e) => setCliForm({ ...cliForm, city: e.target.value })}
                    placeholder="Rondonópolis — MT"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">RESPONSÁVEL / CONTATO TÉCNICO</label>
                  <input
                    type="text"
                    value={cliForm.contactName}
                    onChange={(e) => setCliForm({ ...cliForm, contactName: e.target.value })}
                    placeholder="Nome do Engenheiro, Gerente ou Proprietário"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">TELEFONE / WHATSAPP</label>
                  <input
                    type="text"
                    value={cliForm.phone}
                    onChange={(e) => setCliForm({ ...cliForm, phone: e.target.value })}
                    placeholder="(66) 99999-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">E-MAIL CORPORATIVO</label>
                  <input
                    type="email"
                    value={cliForm.email}
                    onChange={(e) => setCliForm({ ...cliForm, email: e.target.value })}
                    placeholder="contato@empresa.com.br"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block font-bold text-slate-700 uppercase">STATUS DO CLIENTE</label>
                    <button
                      type="button"
                      onClick={() => setIsAddingStatus(true)}
                      className="text-[10px] text-emerald-700 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                    >
                      <Plus className="w-3 h-3" /> Adicionar Status
                    </button>
                  </div>
                  {isAddingStatus && (
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newStatusText}
                        onChange={(e) => setNewStatusText(e.target.value)}
                        placeholder="Novo status..."
                        className="w-full px-3 py-1.5 rounded-xl border text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (newStatusText.trim()) {
                            if (!availableStatuses.includes(newStatusText.trim())) {
                              setAvailableStatuses([...availableStatuses, newStatusText.trim()]);
                              setCliForm({ ...cliForm, status: newStatusText.trim() });
                              showToast('Novo status adicionado!');
                            }
                            setNewStatusText('');
                            setIsAddingStatus(false);
                          }
                        }}
                        className="px-3 py-1.5 bg-[#1B3B2B] text-white rounded-xl text-xs font-bold shrink-0"
                      >
                        OK
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAddingStatus(false)}
                        className="px-2 py-1.5 border rounded-xl text-xs text-slate-500 shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                  <select
                    value={cliForm.status}
                    onChange={(e) => setCliForm({ ...cliForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white"
                  >
                    {availableStatuses.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">LICENÇA / PROGRAMA PRINCIPAL CONTRATADO</label>
                <input
                  type="text"
                  value={cliForm.mainProgram}
                  onChange={(e) => setCliForm({ ...cliForm, mainProgram: e.target.value })}
                  placeholder="Licenciamento Ambiental (LP / LI / LO)"
                  className="w-full px-3.5 py-2.5 rounded-xl border"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowClientModal(false)}
                  className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
                >
                  Salvar Cliente no CRM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CADASTRAR NOVO UTILIZADOR */}
      {showUserRoleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-[#1B3B2B]">Cadastrar Novo Utilizador / Perfil</h3>
            <form onSubmit={handleSaveNewUserRole} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Nome do Cargo / Função</label>
                <input
                  type="text"
                  value={newRoleForm.name}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, name: e.target.value })}
                  placeholder="Ex: Analista Ambiental Júnior"
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Nome do Titular</label>
                <input
                  type="text"
                  value={newRoleForm.holder}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, holder: e.target.value })}
                  placeholder="Ex: Carlos Silva"
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
                  placeholder="carlos@grupomartins.eng.br"
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Senha Inicial</label>
                <input
                  type="password"
                  value={newRoleForm.password}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, password: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Descrição</label>
                <input
                  type="text"
                  value={newRoleForm.description}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, description: e.target.value })}
                  placeholder="Breve resumo das responsabilidades"
                  className="w-full px-3 py-2 rounded-xl border"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowUserRoleModal(false)} className="px-4 py-2 rounded-xl border font-bold">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold">Cadastrar Utilizador</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CONFIGURAR PERMISSÕES (FLAGS) */}
      {editingRolePermissions && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-extrabold text-[#1B3B2B]">Configurar Permissões (Flags)</h3>
                <p className="text-xs text-slate-500">Perfil: <strong className="text-[#1B3B2B]">{editingRolePermissions.name}</strong> ({editingRolePermissions.holder})</p>
              </div>
              <button onClick={() => setEditingRolePermissions(null)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-slate-600 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                Altere abaixo as permissões em tempo real. Cada clique atualiza imediatamente o estado de acesso deste perfil.
              </p>

              <div className="border rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b">
                      <th className="p-3">Módulo do Sistema</th>
                      <th className="p-3 text-center">Visualizar</th>
                      <th className="p-3 text-center">Criar</th>
                      <th className="p-3 text-center">Editar</th>
                      <th className="p-3 text-center">Excluir</th>
                      <th className="p-3 text-center">Aprovar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { key: 'dashboard', label: 'Painel Executivo / KPIs' },
                      { key: 'prolabore', label: 'Pró-Labore (Sócio)' },
                      { key: 'lancamentos', label: 'Livro Caixa & Transações' },
                      { key: 'dre', label: 'DRE Gerencial Mensal' },
                      { key: 'contratos', label: 'Contratos Ambientais & SST' },
                      { key: 'clientes', label: 'Cadastro de Clientes (CRM)' },
                      { key: 'acessos', label: 'Árvore de Acessos & Perfis' }
                    ].map(mod => {
                      const perms = editingRolePermissions.permissions?.[mod.key] || { view: false, create: false, edit: false, delete: false, approve: false };
                      return (
                        <tr key={mod.key} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-800">{mod.label}</td>
                          {['view', 'create', 'edit', 'delete', 'approve'].map(action => (
                            <td key={action} className="p-3 text-center">
                              <input
                                type="checkbox"
                                checked={Boolean(perms[action])}
                                onChange={() => handlePermissionToggle(editingRolePermissions.id, mod.key, action)}
                                className="w-4 h-4 accent-[#1B3B2B] cursor-pointer"
                              />
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t">
              <button
                onClick={() => {
                  showToast('Permissões salvas com sucesso!');
                  setEditingRolePermissions(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-bold text-xs hover:bg-[#2D5A43] cursor-pointer"
              >
                Concluir & Fechar
              </button>
            </div>
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
