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
  CloudRain
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

import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

// Inicialização Firebase (Regras Obrigatórias)
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

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

const PAYMENT_METHODS = [
  'PIX Empresarial',
  'Boleto Bancário Faturado',
  'Transferência TED / DOC',
  'Cartão Corporativo',
  'Débito Automático',
  'Faturamento 30/60 Dias'
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
  },
  {
    id: 'ROLE-03',
    level: 'Nível 3 — Ambiental',
    name: 'Coordenação de Engenharia Ambiental (SEMA / IBAMA / CAR)',
    holder: 'Eng. Ambiental & Equipe Geoprocessamento',
    email: 'ambiental@grupomartins.eng.br',
    password: 'martins2026',
    badgeColor: 'bg-emerald-700 text-white',
    description: 'Gestão técnica de processos LP/LI/LO, PRAD, PGRS, CAR e Outorgas.',
    permissions: {
      dashboard: { view: true, create: false, edit: false, delete: false, approve: false },
      prolabore: { view: false, create: false, edit: false, delete: false, approve: false },
      lancamentos: { view: false, create: true, edit: false, delete: false, approve: false },
      dre: { view: false, create: false, edit: false, delete: false, approve: false },
      contratos: { view: true, create: true, edit: true, delete: false, approve: false },
      clientes: { view: true, create: true, edit: true, delete: false, approve: false },
      acessos: { view: false, create: false, edit: false, delete: false, approve: false }
    }
  },
  {
    id: 'ROLE-04',
    level: 'Nível 4 — MS SST',
    name: 'Coordenação de Segurança do Trabalho (MS SST / eSocial)',
    holder: 'Eng. Segurança & Técnicos SST',
    email: 'sst@grupomartins.eng.br',
    password: 'martins2026',
    badgeColor: 'bg-amber-700 text-white',
    description: 'Gestão de programas PGR, PCMSO, LTCAT, eventos no eSocial e treinamentos.',
    permissions: {
      dashboard: { view: true, create: false, edit: false, delete: false, approve: false },
      prolabore: { view: false, create: false, edit: false, delete: false, approve: false },
      lancamentos: { view: false, create: false, edit: false, delete: false, approve: false },
      dre: { view: false, create: false, edit: false, delete: false, approve: false },
      contratos: { view: true, create: true, edit: true, delete: false, approve: false },
      clientes: { view: true, create: true, edit: true, delete: false, approve: false },
      acessos: { view: false, create: false, edit: false, delete: false, approve: false }
    }
  },
  {
    id: 'ROLE-05',
    level: 'Nível 5 — Comercial',
    name: 'Comercial, Prospecção & Parceiros Agro/Industrial',
    holder: 'Consultores Comerciais Externos',
    email: 'comercial@grupomartins.eng.br',
    password: 'martins2026',
    badgeColor: 'bg-slate-700 text-white',
    description: 'Prospecção de novos clientes no CRM Ambiental & SST e propostas.',
    permissions: {
      dashboard: { view: false, create: false, edit: false, delete: false, approve: false },
      prolabore: { view: false, create: false, edit: false, delete: false, approve: false },
      lancamentos: { view: false, create: false, edit: false, delete: false, approve: false },
      dre: { view: false, create: false, edit: false, delete: false, approve: false },
      contratos: { view: true, create: true, edit: false, delete: false, approve: false },
      clientes: { view: true, create: true, edit: true, delete: false, approve: false },
      acessos: { view: false, create: false, edit: false, delete: false, approve: false }
    }
  }
];

const formatCurrency = (val) => {
  if (val === undefined || val === null || isNaN(val)) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
};

const formatPercent = (val) => {
  if (val === undefined || val === null || isNaN(val)) return '0,0%';
  return `${(val * 100).toFixed(1).replace('.', ',')}%`;
};

// ============================================================================
// 3. COMPONENTE PRINCIPAL COM FIREBASE REAL-TIME SYNC
// ============================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isCloudSynced, setIsCloudSynced] = useState(false);

  // Estados dos Dados
  const [transactions, setTransactions] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [clients, setClients] = useState([]);

  const [clientSegments, setClientSegments] = useState(['Agronegócio', 'Indústria', 'Construtora/Loteamento', 'Transporte/Logística', 'Comércio/Serviços', 'Saúde']);
  const [clientStatuses, setClientStatuses] = useState(['Ativo', 'Em Prospecção', 'Pendência Documental', 'Inativo']);
  const [accessRoles, setAccessRoles] = useState(INITIAL_ACCESS_ROLES);
  const [activeRoleId, setActiveRoleId] = useState('ROLE-01');
  const [authLoggedIn, setAuthLoggedIn] = useState(false);
  const [authEmailInput, setAuthEmailInput] = useState('');
  const [authPasswordInput, setAuthPasswordInput] = useState('');
  const [authErrorMsg, setAuthErrorMsg] = useState('');

  const [params, setParams] = useState(INITIAL_PARAMETERS);

  // Autenticação Firebase (Regra Obrigatória 3)
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        console.error("Auth error:", err);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Sincronização em Tempo Real com Firestore (Regras 1, 2 e 3)
  useEffect(() => {
    if (!user) return;

    const txCol = collection(db, 'artifacts', appId, 'public', 'data', 'transactions');
    const unsubTx = onSnapshot(txCol, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(data);
      setIsCloudSynced(true);
    }, (error) => {
      console.error("Firestore transactions error:", error);
    });

    const ctCol = collection(db, 'artifacts', appId, 'public', 'data', 'contracts');
    const unsubCt = onSnapshot(ctCol, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContracts(data);
    }, (error) => {
      console.error("Firestore contracts error:", error);
    });

    const cliCol = collection(db, 'artifacts', appId, 'public', 'data', 'clients');
    const unsubCli = onSnapshot(cliCol, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setClients(data);
    }, (error) => {
      console.error("Firestore clients error:", error);
    });

    return () => {
      unsubTx();
      unsubCt();
      unsubCli();
    };
  }, [user]);

  const currentRole = useMemo(() => {
    return accessRoles.find((r) => r.id === activeRoleId) || accessRoles[0];
  }, [accessRoles, activeRoleId]);

  const hasPermission = (moduleKey, actionKey = 'view') => {
    if (!currentRole || !currentRole.permissions[moduleKey]) return true;
    return Boolean(currentRole.permissions[moduleKey][actionKey]);
  };

  // Estados de Filtro
  const [txSearch, setTxSearch] = useState('');
  const [txMonthFilter, setTxMonthFilter] = useState('Todos');
  const [txTypeFilter, setTxTypeFilter] = useState('Todos');
  const [txCategoryFilter, setTxCategoryFilter] = useState('Todas');
  const [txStatusFilter, setTxStatusFilter] = useState('Todos');

  const [ctSearch, setCtSearch] = useState('');
  const [ctStatusFilter, setCtStatusFilter] = useState('Todos');

  const [cliSearch, setCliSearch] = useState('');
  const [cliSegmentFilter, setCliSegmentFilter] = useState('Todos');
  const [cliStatusFilter, setCliStatusFilter] = useState('Todos');

  // Modais
  const [showTxModal, setShowTxModal] = useState(false);
  const [editingTx, setEditingTx] = useState(null);
  const [deleteTxTarget, setDeleteTxTarget] = useState(null);

  const [showContractModal, setShowContractModal] = useState(false);
  const [editingContract, setEditingContract] = useState(null);
  const [deleteContractTarget, setDeleteContractTarget] = useState(null);
  const [deleteLinkedTransactions, setDeleteLinkedTransactions] = useState(false);

  const [showClientModal, setShowClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [deleteClientTarget, setDeleteClientTarget] = useState(null);
  const [historyClientTarget, setHistoryClientTarget] = useState(null);

  const [showUserRoleModal, setShowUserRoleModal] = useState(false);
  const [newRoleForm, setNewRoleForm] = useState({
    level: 'Nível Especial',
    name: '',
    holder: '',
    email: '',
    password: 'martins2026',
    description: ''
  });

  const [receiptModalTx, setReceiptModalTx] = useState(null);
  const [receiveInstallmentContract, setReceiveInstallmentContract] = useState(null);
  const [installmentAmount, setInstallmentAmount] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const [txForm, setTxForm] = useState({
    date: '2026-11-10',
    month: 'Nov',
    type: 'Entrada',
    category: REVENUE_CATEGORIES[0],
    entity: '',
    contractId: '—',
    description: '',
    paymentMethod: 'PIX Empresarial',
    status: 'Pago / Recebido',
    amount: ''
  });

  const [ctForm, setCtForm] = useState({
    client: '',
    service: '',
    agency: 'SEMA-MT',
    startDate: '2026-11-10',
    deadline: '2026-12-30',
    status: 'Em Elaboração Técnica',
    contractValue: '',
    receivedValue: '',
    directCosts: '',
    installmentsCount: '1',
    installmentDates: ['2026-12-30', '', '', '']
  });

  const [cliForm, setCliForm] = useState({
    name: '',
    document: '',
    registration: '',
    segment: 'Agronegócio',
    city: 'Rondonópolis — MT',
    contactName: '',
    phone: '',
    email: '',
    mainProgram: 'Licenciamento Ambiental (LP / LI / LO)',
    status: 'Ativo'
  });

  const [newSegmentInput, setNewSegmentInput] = useState('');
  const [newStatusInput, setNewStatusInput] = useState('');

  // ============================================================================
  // 4. MOTOR CONTÁBIL E FINANCEIRO
  // ============================================================================
  const financialData = useMemo(() => {
    const getCatMonth = (cat, month = null) => {
      return transactions
        .filter(
          (t) =>
            t.category === cat &&
            (month ? t.month === month : true)
        )
        .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
    };

    const receitaBrutaAnual = transactions
      .filter((t) => t.type === 'Entrada')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const saidasTotaisAnual = transactions
      .filter((t) => t.type === 'Saída')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const lucroLiquidoAnual = receitaBrutaAnual - saidasTotaisAnual;
    const margemLiquidaAnual = receitaBrutaAnual > 0 ? lucroLiquidoAnual / receitaBrutaAnual : 0;

    const proLaboreCat = 'Saque de Pró-Labore — Sócio Maikon Martins';
    const proLaboreTotalAnual = transactions
      .filter((t) => t.category === proLaboreCat)
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const proLaborePago = transactions
      .filter((t) => t.category === proLaboreCat && t.status === 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const proLaborePendente = proLaboreTotalAnual - proLaborePago;

    const entradasRealizadas = transactions
      .filter((t) => t.type === 'Entrada' && t.status === 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const saidasRealizadas = transactions
      .filter((t) => t.type === 'Saída' && t.status === 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const saldoAtualCaixa = Number(params.saldoInicialCaixa || 0) + entradasRealizadas - saidasRealizadas;

    const contasAReceber = transactions
      .filter((t) => t.type === 'Entrada' && t.status !== 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const contasAPagar = transactions
      .filter((t) => t.type === 'Saída' && t.status !== 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    let runningBalance = Number(params.saldoInicialCaixa || 0);
    const monthlySeries = MONTHS.map((m) => {
      const mTxs = transactions.filter((t) => t.month === m);
      const entradas = mTxs.filter((t) => t.type === 'Entrada').reduce((a, b) => a + Number(b.amount || 0), 0);
      const saidas = mTxs.filter((t) => t.type === 'Saída').reduce((a, b) => a + Number(b.amount || 0), 0);
      const proLaboreMes = mTxs.filter((t) => t.category === proLaboreCat).reduce((a, b) => a + Number(b.amount || 0), 0);
      const resultadoLiquido = entradas - saidas;
      runningBalance += resultadoLiquido;
      const margem = entradas > 0 ? resultadoLiquido / entradas : 0;
      const atingiuMeta = entradas >= Number(params.metaMensalReceita || 0);

      return {
        month: m,
        entradas,
        saidas,
        proLaboreMes,
        resultadoLiquido,
        saldoAcumulado: runningBalance,
        margem,
        atingiuMeta
      };
    });

    const revenueByCategory = REVENUE_CATEGORIES.map((cat) => {
      const value = getCatMonth(cat);
      return {
        category: cat,
        shortName: cat.split(' (')[0],
        value,
        share: receitaBrutaAnual > 0 ? value / receitaBrutaAnual : 0
      };
    }).sort((a, b) => b.value - a.value);

    const expensesByCategory = EXPENSE_CATEGORIES.map((cat) => {
      const value = getCatMonth(cat);
      return {
        category: cat,
        value,
        share: saidasTotaisAnual > 0 ? value / saidasTotaisAnual : 0,
        isProLabore: cat === proLaboreCat
      };
    }).sort((a, b) => b.value - a.value);

    return {
      getCatMonth,
      receitaBrutaAnual,
      saidasTotaisAnual,
      lucroLiquidoAnual,
      margemLiquidaAnual,
      proLaboreTotalAnual,
      proLaborePago,
      proLaborePendente,
      saldoAtualCaixa,
      contasAReceber,
      contasAPagar,
      monthlySeries,
      revenueByCategory,
      expensesByCategory
    };
  }, [transactions, params]);

  // ============================================================================
  // 5. AÇÕES COM PERSISTÊNCIA NA NUVEM (FIRESTORE)
  // ============================================================================
  const handleToggleStatus = async (id) => {
    if (!hasPermission('lancamentos', 'edit')) {
      showToast('Acesso restrito: seu perfil atual não possui permissão.');
      return;
    }
    const item = transactions.find(t => t.id === id);
    if (!item) return;
    const nextStatus = item.status === 'Pago / Recebido' ? 'Pendente' : 'Pago / Recebido';
    try {
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'transactions', id), {
        ...item,
        status: nextStatus
      });
      showToast('Status atualizado na nuvem em tempo real!');
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDeleteTransaction = async () => {
    if (!deleteTxTarget) return;
    try {
      await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'transactions', deleteTxTarget.id));
      showToast(`Lançamento ${deleteTxTarget.id} excluído da nuvem.`);
      setDeleteTxTarget(null);
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDeleteContract = async () => {
    if (!deleteContractTarget) return;
    const contractId = deleteContractTarget.id;
    try {
      await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'contracts', contractId));
      if (deleteLinkedTransactions) {
        const linked = transactions.filter(t => t.contractId === contractId);
        for (const l of linked) {
          await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'transactions', l.id));
        }
      }
      showToast(`Contrato ${contractId} excluído da nuvem com sucesso!`);
      setDeleteContractTarget(null);
      setDeleteLinkedTransactions(false);
    } catch (err) {
      console.error(err);
    }
  };

  const openNewClientModal = () => {
    setEditingClient(null);
    setCliForm({
      name: '',
      document: '',
      registration: '',
      segment: 'Agronegócio',
      city: 'Rondonópolis — MT',
      contactName: '',
      phone: '',
      email: '',
      mainProgram: 'Licenciamento Ambiental (LP / LI / LO)',
      status: 'Ativo'
    });
    setShowClientModal(true);
  };

  const openEditClientModal = (client) => {
    setEditingClient(client);
    setCliForm({
      name: client.name,
      document: client.document,
      registration: client.registration,
      segment: client.segment,
      city: client.city,
      contactName: client.contactName,
      phone: client.phone,
      email: client.email,
      mainProgram: client.mainProgram,
      status: client.status
    });
    setShowClientModal(true);
  };

  const handleSaveClient = async (e) => {
    e.preventDefault();
    if (!cliForm.name) return;
    try {
      const clientId = editingClient ? editingClient.id : `CLI-${String(clients.length + 1).padStart(3, '0')}`;
      const clientData = { id: clientId, ...cliForm };
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'clients', clientId), clientData);
      showToast(`Cliente ${clientId} salvo na nuvem com sucesso!`);
      setShowClientModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDeleteClient = async () => {
    if (!deleteClientTarget) return;
    try {
      await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'clients', deleteClientTarget.id));
      showToast(`Cliente removido da nuvem.`);
      setDeleteClientTarget(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveTransaction = async (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(String(txForm.amount).replace(',', '.'));
    if (!txForm.entity || isNaN(numericAmount) || numericAmount <= 0) return;

    try {
      const txId = editingTx ? editingTx.id : `MT-${String(transactions.length + 15).padStart(3, '0')}`;
      const txData = {
        id: txId,
        ...txForm,
        amount: numericAmount
      };
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'transactions', txId), txData);
      showToast(`Lançamento ${txId} salvo na nuvem em tempo real!`);
      setShowTxModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveContract = async (e) => {
    e.preventDefault();
    const contractVal = parseFloat(String(ctForm.contractValue).replace(',', '.')) || 0;
    const receivedVal = parseFloat(String(ctForm.receivedValue).replace(',', '.')) || 0;
    const directVal = parseFloat(String(ctForm.directCosts).replace(',', '.')) || 0;
    const nInstallments = parseInt(ctForm.installmentsCount) || 1;
    if (!ctForm.client || contractVal <= 0) return;

    try {
      const contractId = editingContract ? editingContract.id : `CT-2026-${String(contracts.length + 1).padStart(2, '0')}`;
      const contractData = {
        id: contractId,
        ...ctForm,
        contractValue: contractVal,
        receivedValue: receivedVal,
        directCosts: directVal
      };

      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'contracts', contractId), contractData);

      if (!editingContract) {
        const installmentVal = contractVal / nInstallments;
        for (let i = 0; i < nInstallments; i++) {
          const instDate = ctForm.installmentDates[i] || ctForm.deadline;
          const monthNames = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };
          const monthNum = instDate.split('-')[1] || '12';
          const monthStr = monthNames[monthNum] || 'Dez';
          const tId = `MT-${String(transactions.length + 15 + i).padStart(3, '0')}`;
          
          await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'transactions', tId), {
            id: tId,
            date: instDate,
            month: monthStr,
            type: 'Entrada',
            category: 'Licenciamento Ambiental (LP / LI / LO)',
            entity: ctForm.client,
            contractId: contractId,
            description: `Parcela ${i + 1}/${nInstallments} — Contrato ${contractId}`,
            paymentMethod: 'Boleto Bancário Faturado',
            status: 'Pendente',
            amount: installmentVal
          });
        }
      }

      showToast(`Contrato ${contractId} salvo na nuvem com sucesso!`);
      setShowContractModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleReceiveContractInstallment = async (e) => {
    e.preventDefault();
    if (!receiveInstallmentContract) return;
    const val = parseFloat(String(installmentAmount).replace(',', '.'));
    if (isNaN(val) || val <= 0) return;

    try {
      const newReceived = Math.min(receiveInstallmentContract.contractValue, receiveInstallmentContract.receivedValue + val);
      const newStatus = newReceived >= receiveInstallmentContract.contractValue ? 'Concluído / Licença Emitida' : receiveInstallmentContract.status;

      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'contracts', receiveInstallmentContract.id), {
        ...receiveInstallmentContract,
        receivedValue: newReceived,
        status: newStatus
      });

      const tId = `MT-${String(transactions.length + 15).padStart(3, '0')}`;
      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'transactions', tId), {
        id: tId,
        date: '2026-11-10',
        month: 'Nov',
        type: 'Entrada',
        category: 'Licenciamento Ambiental (LP / LI / LO)',
        entity: receiveInstallmentContract.client,
        contractId: receiveInstallmentContract.id,
        description: `Recebimento de parcela — Contrato ${receiveInstallmentContract.id}`,
        paymentMethod: 'PIX Empresarial',
        status: 'Pago / Recebido',
        amount: val
      });

      setReceiveInstallmentContract(null);
      setInstallmentAmount('');
      showToast('Parcela recebida e sincronizada na nuvem!');
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetDatabase = async () => {
    try {
      for (const t of transactions) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'transactions', t.id));
      }
      for (const c of contracts) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'contracts', c.id));
      }
      for (const cli of clients) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'clients', cli.id));
      }
      showToast('Base na nuvem limpa com sucesso!');
    } catch (err) {
      console.error(err);
    }
  };

  const openNewTransactionModal = (preset = null) => {
    setEditingTx(null);
    if (preset === 'prolabore') {
      setTxForm({
        date: '2026-11-28',
        month: 'Nov',
        type: 'Saída',
        category: 'Saque de Pró-Labore — Sócio Maikon Martins',
        entity: 'Maikon Martins (Sócio-Diretor)',
        contractId: '—',
        description: 'Saque de Pró-Labore Extraordinário — Sócio Maikon Martins',
        paymentMethod: 'PIX Empresarial',
        status: 'Pago / Recebido',
        amount: '8500'
      });
    } else {
      setTxForm({
        date: '2026-11-10',
        month: 'Nov',
        type: 'Entrada',
        category: REVENUE_CATEGORIES[0],
        entity: '',
        contractId: '—',
        description: '',
        paymentMethod: 'PIX Empresarial',
        status: 'Pago / Recebido',
        amount: ''
      });
    }
    setShowTxModal(true);
  };

  const openEditTransactionModal = (tx) => {
    setEditingTx(tx);
    setTxForm({
      date: tx.date,
      month: tx.month,
      type: tx.type,
      category: tx.category,
      entity: tx.entity,
      contractId: tx.contractId || '—',
      description: tx.description,
      paymentMethod: tx.paymentMethod,
      status: tx.status,
      amount: String(tx.amount)
    });
    setShowTxModal(true);
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Data', 'Mes', 'Tipo', 'Categoria', 'Favorecido', 'Contrato', 'Descricao', 'Forma_Pagamento', 'Status', 'Valor'];
    const rows = transactions.map((t) => [
      t.id, t.date, t.month, t.type, `"${t.category}"`, `"${t.entity}"`, t.contractId, `"${t.description}"`, `"${t.paymentMethod}"`, t.status, t.amount
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(';'), ...rows.map((e) => e.join(';'))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Livro_Caixa_Grupo_Martins_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Arquivo CSV exportado com sucesso!');
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchSearch = t.entity.toLowerCase().includes(txSearch.toLowerCase()) ||
        t.description.toLowerCase().includes(txSearch.toLowerCase()) ||
        t.id.toLowerCase().includes(txSearch.toLowerCase()) ||
        t.category.toLowerCase().includes(txSearch.toLowerCase());
      const matchMonth = txMonthFilter === 'Todos' || t.month === txMonthFilter;
      const matchType = txTypeFilter === 'Todos' || t.type === txTypeFilter;
      const matchCat = txCategoryFilter === 'Todas' || t.category === txCategoryFilter;
      const matchStatus = txStatusFilter === 'Todos' || t.status === txStatusFilter;
      return matchSearch && matchMonth && matchType && matchCat && matchStatus;
    });
  }, [transactions, txSearch, txMonthFilter, txTypeFilter, txCategoryFilter, txStatusFilter]);

  const filteredContracts = useMemo(() => {
    return contracts.filter((c) => {
      const matchSearch = c.client.toLowerCase().includes(ctSearch.toLowerCase()) ||
        c.service.toLowerCase().includes(ctSearch.toLowerCase()) ||
        c.id.toLowerCase().includes(ctSearch.toLowerCase()) ||
        c.agency.toLowerCase().includes(ctSearch.toLowerCase());
      const matchStatus = ctStatusFilter === 'Todos' || c.status === ctStatusFilter;
      return matchSearch && matchStatus;
    });
  }, [contracts, ctSearch, ctStatusFilter]);

  const filteredClients = useMemo(() => {
    return clients.filter((cli) => {
      const matchSearch = cli.name.toLowerCase().includes(cliSearch.toLowerCase()) ||
        cli.document.toLowerCase().includes(cliSearch.toLowerCase()) ||
        cli.city.toLowerCase().includes(cliSearch.toLowerCase()) ||
        cli.contactName.toLowerCase().includes(cliSearch.toLowerCase()) ||
        cli.id.toLowerCase().includes(cliSearch.toLowerCase());
      const matchSeg = cliSegmentFilter === 'Todos' || cli.segment === cliSegmentFilter;
      const matchStatus = cliStatusFilter === 'Todos' || cli.status === cliStatusFilter;
      return matchSearch && matchSeg && matchStatus;
    });
  }, [clients, cliSearch, cliSegmentFilter, cliStatusFilter]);

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
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#1B3B2B] text-[#F8F3EF] flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
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
                    isActive
                      ? 'bg-[#F8F3EF] text-[#1B3B2B] font-bold shadow-md'
                      : allowed
                      ? 'text-emerald-100/85 hover:bg-[#244B38] hover:text-white'
                      : 'text-emerald-200/40 cursor-not-allowed'
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

        <div className="p-4 border-t border-[#2D5A43] space-y-2">
          <button
            onClick={handleResetDatabase}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-[#244B38] hover:bg-[#2D5A43] text-emerald-200 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Zerar Base na Nuvem
          </button>
          <div className="text-[11px] text-center text-emerald-200/60">
            Grupo Martins ERP v3.6 • Nuvem Ativa
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
                onClick={() => openNewTransactionModal('prolabore')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#F8F3EF] text-[#1B3B2B] border border-[#D5CFC7] hover:bg-[#EFE7DF]"
              >
                <UserCheck className="w-4 h-4 text-[#2D5A43]" />
                Saque Pró-Labore
              </button>
            )}

            {hasPermission('lancamentos', 'create') && (
              <button
                onClick={() => openNewTransactionModal()}
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
                      Sincronizado na Nuvem em Tempo Real
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
                      Saldo Realizado em Caixa
                    </div>
                    <div className="text-xl font-black text-white">
                      {formatCurrency(financialData.saldoAtualCaixa)}
                    </div>
                  </div>
                  <div className="h-9 w-[1px] bg-emerald-600/40 mx-1" />
                  <div className="text-right">
                    <div className="text-[11px] text-amber-300 uppercase font-semibold">
                      Pró-Labore (Maikon)
                    </div>
                    <div className="text-xl font-black text-amber-300">
                      {formatCurrency(financialData.proLaboreTotalAnual)}
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
                  <div className="text-xs font-bold text-slate-500 uppercase">Custos + Despesas</div>
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
                    {financialData.revenueByCategory.map((item, idx) => (
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
                <button onClick={() => openNewTransactionModal('prolabore')} className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] shadow-lg">
                  <Plus className="w-4 h-4" /> Registrar Novo Saque
                </button>
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
                        <th className="py-3.5 px-4 text-center">Ações</th>
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
                            <button onClick={() => handleToggleStatus(tx.id)} className={`px-3 py-1 rounded-full text-xs font-bold ${tx.status === 'Pago / Recebido' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                              {tx.status}
                            </button>
                          </td>
                          <td className="py-3 px-4 text-right font-extrabold text-[#1B3B2B]">{formatCurrency(tx.amount)}</td>
                          <td className="py-3 px-4 text-center">
                            <button onClick={() => setReceiptModalTx(tx)} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#1B3B2B] text-white text-xs font-semibold hover:bg-[#2D5A43] mx-auto">
                              <Printer className="w-3.5 h-3.5" /> Recibo
                            </button>
                          </td>
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
                <div className="flex flex-wrap items-center gap-2.5 flex-1">
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
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={handleExportCSV} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
                    <Download className="w-4 h-4" /> Exportar CSV
                  </button>
                  <button onClick={() => openNewTransactionModal()} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white">
                    <Plus className="w-4 h-4" /> Incluir Lançamento
                  </button>
                </div>
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
                        <th className="py-3.5 px-3 text-center">Ações</th>
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
                          <td className="py-2.5 px-3 text-center">
                            <button onClick={() => setDeleteTxTarget(tx)} className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50">
                              <Trash2 className="w-4 h-4" />
                            </button>
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
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={ctSearch}
                    onChange={(e) => setCtSearch(e.target.value)}
                    placeholder="Buscar contratos..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>
                <button
                  onClick={() => {
                    setEditingContract(null);
                    setCtForm({
                      client: '',
                      service: '',
                      agency: 'SEMA-MT',
                      startDate: '2026-11-10',
                      deadline: '2026-12-30',
                      status: 'Em Elaboração Técnica',
                      contractValue: '',
                      receivedValue: '0',
                      directCosts: '',
                      installmentsCount: '1',
                      installmentDates: ['2026-12-30', '', '', '']
                    });
                    setShowContractModal(true);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43]"
                >
                  <Plus className="w-4 h-4" /> Novo Contrato
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                        <th className="py-3.5 px-3">ID</th>
                        <th className="py-3.5 px-3">Cliente</th>
                        <th className="py-3.5 px-3">Serviço Técnico</th>
                        <th className="py-3.5 px-3 text-center">Status</th>
                        <th className="py-3.5 px-3 text-right">Valor</th>
                        <th className="py-3.5 px-3 text-right">Recebido</th>
                        <th className="py-3.5 px-3 text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredContracts.map((ct) => (
                        <tr key={ct.id} className="hover:bg-slate-50">
                          <td className="py-3 px-3 font-mono font-bold">{ct.id}</td>
                          <td className="py-3 px-3 font-bold">{ct.client}</td>
                          <td className="py-3 px-3">{ct.service}</td>
                          <td className="py-3 px-3 text-center">
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">
                              {ct.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right font-bold">{formatCurrency(ct.contractValue)}</td>
                          <td className="py-3 px-3 text-right text-emerald-700">{formatCurrency(ct.receivedValue)}</td>
                          <td className="py-3 px-3 text-center">
                            <div className="flex items-center justify-center gap-2">
                              {ct.contractValue > ct.receivedValue && (
                                <button
                                  onClick={() => {
                                    setReceiveInstallmentContract(ct);
                                    setInstallmentAmount(String(ct.contractValue - ct.receivedValue));
                                  }}
                                  className="px-2.5 py-1 rounded-lg bg-emerald-700 text-white text-[11px] font-bold"
                                >
                                  + Receber
                                </button>
                              )}
                              <button onClick={() => setDeleteContractTarget(ct)} className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
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
                <button onClick={openNewClientModal} className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#1B3B2B] text-white">
                  <UserPlus className="w-4 h-4" /> Cadastrar Cliente
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                        <th className="py-3.5 px-3">ID</th>
                        <th className="py-3.5 px-3">Razão Social</th>
                        <th className="py-3.5 px-3">CNPJ / CPF</th>
                        <th className="py-3.5 px-3">Segmento</th>
                        <th className="py-3.5 px-3">Cidade</th>
                        <th className="py-3.5 px-3 text-center">Status</th>
                        <th className="py-3.5 px-3 text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredClients.map((cli) => (
                        <tr key={cli.id} className="hover:bg-slate-50">
                          <td className="py-3 px-3 font-mono font-bold">{cli.id}</td>
                          <td className="py-3 px-3 font-bold">{cli.name}</td>
                          <td className="py-3 px-3">{cli.document}</td>
                          <td className="py-3 px-3">{cli.segment}</td>
                          <td className="py-3 px-3">{cli.city}</td>
                          <td className="py-3 px-3 text-center">
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                              {cli.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center">
                            <button onClick={() => setDeleteClientTarget(cli)} className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50">
                              <Trash2 className="w-4 h-4" />
                            </button>
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
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-base font-extrabold text-[#1B3B2B] mb-4">Árvore de Acessos & Perfis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {accessRoles.map((role) => (
                    <div key={role.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                      <div className="font-extrabold text-[#1B3B2B]">{role.name}</div>
                      <div className="text-xs text-slate-600">Titular: {role.holder}</div>
                      <div className="text-xs text-slate-500">E-mail: {role.email}</div>
                      <button onClick={() => setActiveRoleId(role.id)} className={`mt-2 w-full py-1.5 rounded-lg text-xs font-bold ${activeRoleId === role.id ? 'bg-[#1B3B2B] text-white' : 'bg-white text-[#1B3B2B] border'}`}>
                        {activeRoleId === role.id ? 'Perfil Ativo' : 'Simular Perfil'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'config' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-extrabold text-[#1B3B2B]">Parâmetros Financeiros</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Saldo Inicial de Caixa (R$)</label>
                  <input
                    type="number"
                    value={params.saldoInicialCaixa}
                    onChange={(e) => setParams({ ...params, saldoInicialCaixa: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Meta Mensal Receita (R$)</label>
                  <input
                    type="number"
                    value={params.metaMensalReceita}
                    onChange={(e) => setParams({ ...params, metaMensalReceita: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border"
                  />
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
                  {(txForm.type === 'Entrada' ? REVENUE_CATEGORIES : EXPENSE_CATEGORIES).map(c => <option key={c} value={c}>{c}</option>)}
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
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold">Salvar na Nuvem</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CONTRATO */}
      {showContractModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-[#1B3B2B]">Novo Contrato Ambiental & SST</h3>
            <form onSubmit={handleSaveContract} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Cliente</label>
                <input type="text" value={ctForm.client} onChange={(e) => setCtForm({ ...ctForm, client: e.target.value })} placeholder="Nome do cliente" className="w-full px-3 py-2 rounded-xl border" required />
              </div>
              <div>
                <label className="block font-bold mb-1">Serviço Técnico</label>
                <input type="text" value={ctForm.service} onChange={(e) => setCtForm({ ...ctForm, service: e.target.value })} placeholder="Ex: Licenciamento SEMA-MT" className="w-full px-3 py-2 rounded-xl border" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Valor Contrato (R$)</label>
                  <input type="number" value={ctForm.contractValue} onChange={(e) => setCtForm({ ...ctForm, contractValue: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" required />
                </div>
                <div>
                  <label className="block font-bold mb-1">Vencimento</label>
                  <input type="date" value={ctForm.deadline} onChange={(e) => setCtForm({ ...ctForm, deadline: e.target.value })} className="w-full px-3 py-2 rounded-xl border" required />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowContractModal(false)} className="px-4 py-2 rounded-xl border font-bold">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold">Salvar na Nuvem</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL CLIENTE */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-[#1B3B2B]">Cadastrar Cliente (CRM)</h3>
            <form onSubmit={handleSaveClient} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Razão Social / Nome</label>
                <input type="text" value={cliForm.name} onChange={(e) => setCliForm({ ...cliForm, name: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">CNPJ / CPF</label>
                  <input type="text" value={cliForm.document} onChange={(e) => setCliForm({ ...cliForm, document: e.target.value })} className="w-full px-3 py-2 rounded-xl border" required />
                </div>
                <div>
                  <label className="block font-bold mb-1">Cidade</label>
                  <input type="text" value={cliForm.city} onChange={(e) => setCliForm({ ...cliForm, city: e.target.value })} className="w-full px-3 py-2 rounded-xl border" required />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowClientModal(false)} className="px-4 py-2 rounded-xl border font-bold">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold">Salvar na Nuvem</button>
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
              <button type="submit" className="w-full py-3 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md">
                Entrar no ERP (Sincronizado)
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
