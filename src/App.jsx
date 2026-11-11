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

// Inicialização Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

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
      className={`flex flex-col items-center justify-center p-4 rounded-2xl border shadow-sm select-none ${className}`} style={{ backgroundColor: '#F8F3EF', borderColor: '#E2DCD3' }} > <svg viewBox="0 0 120 120" className={size === 'lg' ? 'w-24 h-24' : 'w-16 h-16'}> <circle cx="60" cy="60" r="52" fill="none" stroke="#1B3B2B" strokeWidth="6" /> <path d="M42 111 C52 107, 56 97, 56 80 L56 36 L64 36 L64 80 C64 97, 68 107, 78 111 Z" fill="#1B3B2B" /> <path d="M60 80 L38 64 M60 80 L82 64 M60 56 L41 40 M60 56 L79 40" stroke="#1B3B2B" strokeWidth="5" strokeLinecap="round" /> <path d="M60 13 C49 25, 49 38, 60 45 C71 38, 71 25, 60 13 Z" fill="#1B3B2B" /> <path d="M60 21 L60 39" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" /> <path d="M27 27 C26 40, 36 47, 49 45 C47 33, 38 26, 27 27 Z" fill="#1B3B2B" /> <path d="M33 32 L44 41" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" /> <path d="M93 27 C94 40, 84 47, 71 45 C73 33, 82 26, 93 27 Z" fill="#1B3B2B" /> <path d="M87 32 L76 41" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" /> <path d="M22 55 C24 68, 35 74, 48 69 C45 57, 35 53, 22 55 Z" fill="#1B3B2B" /> <path d="M29 59 L43 66" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" /> <path d="M98 55 C96 68, 85 74, 72 69 C75 57, 85 53, 98 55 Z" fill="#1B3B2B" /> <path d="M91 59 L77 66" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" /> </svg>  <div className="flex items-center gap-2.5 mt-1.5 w-full justify-center"> <span className="h-[1px] w-8 bg-[#2D5A43]" /> <span className="text-[10px] tracking-[0.35em] font-semibold text-[#1B3B2B]"> GRUPO </span> <span className="h-[1px] w-8 bg-[#2D5A43]" /> </div>  <div className={`${
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

    const contractId = editingContract ? editingContract.id : `CT-2026-${String(contracts.length + 1).padStart(2, '0')}`; const contractData = { id: contractId, ...ctForm, contractValue: contractVal, receivedValue: receivedVal, directCosts: directVal };  setContracts(prev => editingContract ? prev.map(c => c.id === contractId ? contractData : c) : [...prev, contractData]); if (supabase) { await supabase.from('contracts').upsert(contractData); }  if (!editingContract) { const installmentVal = contractVal / nInstallments; const newTxs = []; for (let i = 0; i < nInstallments; i++) { const instDate = ctForm.installmentDates[i] \vert{}\vert{} '2026-12-30'; const monthNames = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' }; const monthNum = instDate.split('-')[1] \vert{}\vert{} '12'; const monthStr = monthNames[monthNum] \vert{}\vert{} 'Dez'; const tId = `MT-${String(transactions.length + 15 + i).padStart(3, '0')}`;
        
        const newTx = {
          id: tId,
          date: instDate,
          month: monthStr,
          type: 'Entrada',
          category: revenueCategories[0],
          entity: ctForm.client,
          contractId: contractId,
          description: `Parcela ${i + 1}/${nInstallments} (${ctForm.paymentMethod}) — Contrato${contractId}`,
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
    showToast(`Contrato ${contractId} excluído.`); setDeleteContractTarget(null); };  const handleSaveClient = async (e) => { e.preventDefault(); if (!cliForm.name) return; const clientId = editingClient ? editingClient.id : `CLI-${String(clients.length + 1).padStart(3, '0')}`;
    const clientData = { id: clientId, ...cliForm };
    setClients(prev => editingClient ? prev.map(c => c.id === clientId ? clientData : c) : [...prev, clientData]);
    if (supabase) await supabase.from('clients').upsert(clientData);
    showToast('Cliente salvo no CRM com sucesso!');
    setShowClientModal(false);
  };

  const handleSaveNewUserRole = (e) => {
    e.preventDefault();
    if (!newRoleForm.name || !newRoleForm.holder || !newRoleForm.email) return;
    const newRole = {
      id: `ROLE-${Date.now()}`, level: newRoleForm.level, name: newRoleForm.name, holder: newRoleForm.holder, email: newRoleForm.email, password: newRoleForm.password \vert{}\vert{} 'martins2026', badgeColor: 'bg-[#1B3B2B] text-white', description: newRoleForm.description \vert{}\vert{} 'Perfil personalizado de acesso.', permissions: JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS)) }; setAccessRoles([...accessRoles, newRole]); setShowUserRoleModal(false); setNewRoleForm({ level: 'Nível Especial — Colaborador', name: '', holder: '', email: '', password: 'martins2026', description: '' }); showToast('Novo utilizador cadastrado com sucesso!'); };  const handlePermissionToggle = (roleId, moduleKey, actionKey) => { setAccessRoles(prevRoles => prevRoles.map(role => { if (role.id === roleId) { const currentVal = role.permissions?.[moduleKey]?.[actionKey] \vert{}\vert{} false; const updatedRole = { ...role, permissions: { ...role.permissions, [moduleKey]: { ...role.permissions[moduleKey], [actionKey]: !currentVal } } }; if (editingRolePermissions && editingRolePermissions.id === roleId) { setEditingRolePermissions(updatedRole); } return updatedRole; } return role; }) ); };  const filteredTransactions = useMemo(() => transactions.filter(t => (t.entity \vert{}\vert{} '').toLowerCase().includes(txSearch.toLowerCase()) \vert{}\vert{} (t.description \vert{}\vert{} '').toLowerCase().includes(txSearch.toLowerCase())), [transactions, txSearch]);  const filteredContracts = useMemo(() => { return contracts.filter(c => { const matchSearch = (c.client \vert{}\vert{} '').toLowerCase().includes(ctSearch.toLowerCase()) \vert{}\vert{} (c.service \vert{}\vert{} '').toLowerCase().includes(ctSearch.toLowerCase()) \vert{}\vert{} (c.id \vert{}\vert{} '').toLowerCase().includes(ctSearch.toLowerCase()) \vert{}\vert{} (c.agency \vert{}\vert{} '').toLowerCase().includes(ctSearch.toLowerCase()); const matchStatus = ctStatusFilter === 'Todos' \vert{}\vert{} c.status === ctStatusFilter; return matchSearch && matchStatus; }); }, [contracts, ctSearch, ctStatusFilter]);  const filteredClients = useMemo(() => clients.filter(cli => (cli.name \vert{}\vert{} '').toLowerCase().includes(cliSearch.toLowerCase())), [clients, cliSearch]);  const PIE_COLORS = ['#1B3B2B', '#2D5A43', '#3B7A57', '#557A46', '#7A9A8B'];  const navItems = [ { id: 'dashboard', label: 'Painel Executivo', icon: LayoutDashboard, badge: 'KPIs', permKey: 'dashboard' }, { id: 'prolabore', label: 'Pró-Labore (Maikon Martins)', icon: UserCheck, badge: 'Sócio', permKey: 'prolabore' }, { id: 'lancamentos', label: 'Livro Caixa & Lançamentos', icon: ArrowUpDown, badge: transactions.length, permKey: 'lancamentos' }, { id: 'dre', label: 'DRE Gerencial Mensal', icon: FileSpreadsheet, badge: 'AV\%', permKey: 'dre' }, { id: 'contratos', label: 'Contratos Ambientais & SST', icon: Briefcase, badge: contracts.length, permKey: 'contratos' }, { id: 'clientes', label: 'Cadastro de Clientes (CRM)', icon: Users, badge: clients.length, permKey: 'clientes' }, { id: 'acessos', label: 'Árvore de Acessos & Perfis', icon: Network, badge: `${accessRoles.length} Níveis`, permKey: 'acessos' },
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
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ${isActive ? 'bg-[#1B3B2B] text-[#F8F3EF]' : 'bg-[#2D5A43]
