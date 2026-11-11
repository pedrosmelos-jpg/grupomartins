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

// Inicialização segura do Supabase (Variáveis de ambiente da Vercel)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;
let isSupabaseConnected = false;

try {
if (supabaseUrl && supabaseKey && supabaseUrl.startsWith('http')) {
supabase = createClient(supabaseUrl.trim(), supabaseKey.trim());
isSupabaseConnected = true;
}
} catch (e) {
console.warn("Modo de armazenamento local de segurança ativado.");
}

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
className={flex items-center gap-3 px-3 py-2.5 rounded-xl border ${className}}
style={{ backgroundColor: bgBadge, borderColor: borderBadge }}
>
















<div
className="text-[9px] tracking-[0.28em] font-semibold uppercase"
style={{ color: secondaryColor }}
>
G R U P O

<div
className="text-lg font-extrabold tracking-wider"
style={{
color: primaryColor,
fontFamily: 'Georgia, Cambria, "Times New Roman", serif'
}}
>
MARTINS

<div
className="text-[9px] font-medium truncate"
style={{ color: isDarkBg ? '#D0E2D7' : '#4A6356' }}
>
Ambiental • MS Segurança



);
}

return (
<div
className={flex flex-col items-center justify-center p-4 rounded-2xl border shadow-sm select-none ${className}}
style={{ backgroundColor: '#F8F3EF', borderColor: '#E2DCD3' }}
>
<svg viewBox="0 0 120 120" className={size === 'lg' ? 'w-24 h-24' : 'w-16 h-16'}>















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
// 2. CONSTANTES E DADOS INICIAIS DA DRE
// ============================================================================
const MONTHS_KEYS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const MONTHS_LABELS = ['JAN/26', 'FEV/26', 'MAR/26', 'ABR/26', 'MAI/26', 'JUN/26', 'JUL/26', 'AGO/26', 'SET/26', 'OUT/26', 'NOV/26', 'DEZ/26'];

const REVENUE_CATEGORIES = [
'Licenciamento Ambiental (LP / LI / LO)',
'Planos Ambientais (PRAD / PGRS) e Auditorias',
'CAR, Georreferenciamento e Outorga de Água',
'Segurança do Trabalho (PGR / PCMSO / LTCAT)',
'Gestão de eSocial SST e Treinamentos NRs'
];

const DEDUCTION_CATEGORIES = [
'Impostos sobre Faturamento (ISS / Simples / PIS-COFINS)'
];

const DIRECT_COST_CATEGORIES = [
'Taxas de Órgãos (SEMA-MT / IBAMA / CREA / ART)',
'Análises Laboratoriais (Água / Solo / Efluentes) e Laudos',
'Topografia, Geoprocessamento e Vistorias de Campo',
'Deslocamento, Combustível e Diárias Técnicas'
];

const OPERATIONAL_EXPENSE_CATEGORIES = [
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

const [isAddingSegment, setIsAddingSegment] = useState(false);
const [newSegmentText, setNewSegmentText] = useState('');
const [isAddingStatus, setIsAddingStatus] = useState(false);
const [newStatusText, setNewStatusText] = useState('');

const [accessRoles, setAccessRoles] = useState(INITIAL_ACCESS_ROLES);
const [activeRoleId, setActiveRoleId] = useState('ROLE-01');
const [authLoggedIn, setAuthLoggedIn] = useState(true); // Permitir visualização direta sem login se necessário
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

// Carregar e Sincronizar com Supabase
useEffect(() => {
const fetchData = async () => {
if (!isSupabaseConnected) {
const savedTx = localStorage.getItem('martins_erp_tx_v7');
const savedCt = localStorage.getItem('martins_erp_ct_v7');
const savedCli = localStorage.getItem('martins_erp_cli_v7');
if (savedTx) setTransactions(JSON.parse(savedTx));
if (savedCt) setContracts(JSON.parse(savedCt));
if (savedCli) setClients(JSON.parse(savedCli));
return;
}

  try {
    const { data: txData } = await supabase.from('transactions').select('*');
    if (txData) {
      setTransactions(txData);
      setIsCloudSynced(true);
    }

    const { data: ctData } = await supabase.from('contracts').select('*');
    if (ctData) setContracts(ctData);

    const { data: cliData } = await supabase.from('clients').select('*');
    if (cliData) setClients(cliData);
  } catch (err) {
    console.error("Erro ao carregar dados do Supabase:", err);
  }
};

fetchData();

if (isSupabaseConnected) {
  const channel = supabase
    .channel('schema-db-changes')
    .on('postgres_changes', { event: '*', schema: 'public' }, () => {
      fetchData();
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') setIsCloudSynced(true);
    });

  return () => {
    supabase.removeChannel(channel);
  };
}


}, []);

useEffect(() => {
if (!isSupabaseConnected) {
localStorage.setItem('martins_erp_tx_v7', JSON.stringify(transactions));
localStorage.setItem('martins_erp_ct_v7', JSON.stringify(contracts));
localStorage.setItem('martins_erp_cli_v7', JSON.stringify(clients));
}
}, [transactions, contracts, clients]);

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
category: REVENUE_CATEGORIES[0],
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

// ============================================================================
// 4. MOTOR DA DRE GERENCIAL (BLINDADO E À PROVA DE FALHAS)
// ============================================================================
const dreData = useMemo(() => {
const getSum = (catName, mKey) => {
return transactions
.filter(t => t.category === catName && (t.month === mKey || t.date?.includes(-${mKey}-) || t.date?.toLowerCase()?.includes(mKey.toLowerCase())))
.reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
};

const revSubItems = REVENUE_CATEGORIES.map(cat => {
  const monthsVals = MONTHS_KEYS.map(m => getSum(cat, m));
  const total = monthsVals.reduce((a, b) => a + b, 0);
  return { category: cat, monthsVals, total };
});

const receitaBrutaMonths = MONTHS_KEYS.map((_, idx) => revSubItems.reduce((acc, sub) => acc + sub.monthsVals[idx], 0));
const receitaBrutaTotal = receitaBrutaMonths.reduce((a, b) => a + b, 0);

const dedSubItems = DEDUCTION_CATEGORIES.map(cat => {
  const monthsVals = MONTHS_KEYS.map(m => getSum(cat, m));
  const total = monthsVals.reduce((a, b) => a + b, 0);
  return { category: cat, monthsVals, total };
});
const dedMonths = MONTHS_KEYS.map((_, idx) => dedSubItems.reduce((acc, sub) => acc + sub.monthsVals[idx], 0));
const dedTotal = dedMonths.reduce((a, b) => a + b, 0);

const receitaLiqMonths = receitaBrutaMonths.map((bruta, idx) => bruta - dedMonths[idx]);
const receitaLiqTotal = receitaLiqMonths.reduce((a, b) => a + b, 0);

const costSubItems = DIRECT_COST_CATEGORIES.map(cat => {
  const monthsVals = MONTHS_KEYS.map(m => getSum(cat, m));
  const total = monthsVals.reduce((a, b) => a + b, 0);
  return { category: cat, monthsVals, total };
});
const costMonths = MONTHS_KEYS.map((_, idx) => costSubItems.reduce((acc, sub) => acc + sub.monthsVals[idx], 0));
const costTotal = costMonths.reduce((a, b) => a + b, 0);

const lucroBrutoMonths = receitaLiqMonths.map((liq, idx) => liq - costMonths[idx]);
const lucroBrutoTotal = lucroBrutoMonths.reduce((a, b) => a + b, 0);

const expSubItems = OPERATIONAL_EXPENSE_CATEGORIES.map(cat => {
  const monthsVals = MONTHS_KEYS.map(m => getSum(cat, m));
  const total = monthsVals.reduce((a, b) => a + b, 0);
  return { category: cat, monthsVals, total };
});
const expMonths = MONTHS_KEYS.map((_, idx) => expSubItems.reduce((acc, sub) => acc + sub.monthsVals[idx], 0));
const expTotal = expMonths.reduce((a, b) => a + b, 0);

const lucroLiqMonths = lucroBrutoMonths.map((bruto, idx) => bruto - expMonths[idx]);
const lucroLiqTotal = lucroLiqMonths.reduce((a, b) => a + b, 0);

const getAV = (val) => receitaBrutaTotal > 0 ? (val / receitaBrutaTotal) * 100 : 0;

return {
  revSubItems,
  receitaBrutaMonths,
  receitaBrutaTotal,
  dedSubItems,
  dedMonths,
  dedTotal,
  receitaLiqMonths,
  receitaLiqTotal,
  costSubItems,
  costMonths,
  costTotal,
  lucroBrutoTotal,
  expSubItems,
  expMonths,
  expTotal,
  lucroLiqMonths,
  lucroLiqTotal,
  getAV
};


}, [transactions]);

const handleExportDRECSV = () => {
const headers = ['ESTRUTURA DRE — GRUPO MARTINS (R$)', ...MONTHS_LABELS, 'ACUMULADO 2026', 'AV %'];
const rows = [];

rows.push(['1. RECEITA OPERACIONAL BRUTA', ...dreData.receitaBrutaMonths.map(v => v.toFixed(2)), dreData.receitaBrutaTotal.toFixed(2), '100,0%']);
dreData.revSubItems.forEach(sub => {
  rows.push([`  (+) ${sub.category}`, ...sub.monthsVals.map(v => v.toFixed(2)), sub.total.toFixed(2), `${dreData.getAV(sub.total).toFixed(1)}%`]);
});
rows.push(['2. (-) DEDUÇÕES E IMPOSTOS SOBRE FATURAMENTO', ...dreData.dedMonths.map(v => v.toFixed(2)), dreData.dedTotal.toFixed(2), `${dreData.getAV(dreData.dedTotal).toFixed(1)}%`]);
rows.push(['3. (=) RECEITA OPERACIONAL LÍQUIDA', ...dreData.receitaLiqMonths.map(v => v.toFixed(2)), dreData.receitaLiqTotal.toFixed(2), `${dreData.getAV(dreData.receitaLiqTotal).toFixed(1)}%`]);
rows.push(['4. (-) CUSTOS DIRETOS DE PROJETOS E CAMPO (CSP)', ...dreData.costMonths.map(v => v.toFixed(2)), dreData.costTotal.toFixed(2), `${dreData.getAV(dreData.costTotal).toFixed(1)}%`]);
dreData.costSubItems.forEach(sub => {
  rows.push([`  (-) ${sub.category}`, ...sub.monthsVals.map(v => v.toFixed(2)), sub.total.toFixed(2), `${dreData.getAV(sub.total).toFixed(1)}%`]);
});
rows.push(['5. (-) DESPESAS OPERACIONAIS, COMERCIAIS E PRÓ-LABORE', ...dreData.expMonths.map(v => v.toFixed(2)), dreData.expTotal.toFixed(2), `${dreData.getAV(dreData.expTotal).toFixed(1)}%`]);
dreData.expSubItems.forEach(sub => {
  rows.push([`  (-) ${sub.category}`, ...sub.monthsVals.map(v => v.toFixed(2)), sub.total.toFixed(2), `${dreData.getAV(sub.total).toFixed(1)}%`]);
});
rows.push(['6. (=) LUCRO LÍQUIDO DO EXERCÍCIO (APÓS PRÓ-LABORE)', ...dreData.lucroLiqMonths.map(v => v.toFixed(2)), dreData.lucroLiqTotal.toFixed(2), `${dreData.getAV(dreData.lucroLiqTotal).toFixed(1)}%`]);

const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(';'), ...rows.map(e => e.join(';'))].join('\n');
const encodedUri = encodeURI(csvContent);
const link = document.createElement('a');
link.setAttribute('href', encodedUri);
link.setAttribute('download', 'DRE_Gerencial_Grupo_Martins_2026.csv');
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
showToast('Planilha DRE exportada com sucesso!');


};

const financialData = useMemo(() => {
const receitaBrutaAnual = transactions.filter((t) => t.type === 'Entrada').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
const saidasTotaisAnual = transactions.filter((t) => t.type === 'Saída').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
const lucroLiquidoAnual = receitaBrutaAnual - saidasTotaisAnual;

const proLaboreCat = 'Saque de Pró-Labore — Sócio Maikon Martins';
const proLaboreTotalAnual = transactions.filter((t) => t.category === proLaboreCat).reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
const proLaborePago = transactions.filter((t) => t.category === proLaboreCat && t.status === 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

const entradasRealizadas = transactions.filter((t) => t.type === 'Entrada' && t.status === 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
const saldoAtualCaixa = Number(params.saldoInicialCaixa || 0) + entradasRealizadas - saidasTotaisAnual;

const contasAReceber = transactions.filter((t) => t.type === 'Entrada' && t.status !== 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);
const contasAPagar = transactions.filter((t) => t.type === 'Saída' && t.status !== 'Pago / Recebido').reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

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
  totalContratado,
  totalRecebidoContratos,
  saldoAFaturar,
  margemMedia
};


}, [transactions, contracts, params]);

const handleToggleStatus = async (id) => {
const item = transactions.find(t => t.id === id);
if (!item) return;
const nextStatus = item.status === 'Pago / Recebido' ? 'Pendente' : 'Pago / Recebido';
const updatedItem = { ...item, status: nextStatus };
setTransactions(prev => prev.map(t => t.id === id ? updatedItem : t));
if (isSupabaseConnected) await supabase.from('transactions').upsert(updatedItem);
showToast('Status atualizado!');
};

const handleSaveTransaction = async (e) => {
e.preventDefault();
const numericAmount = parseFloat(String(txForm.amount).replace(',', '.'));
if (!txForm.entity || isNaN(numericAmount) || numericAmount <= 0) return;
const txId = editingTx ? editingTx.id : MT-${String(transactions.length + 15).padStart(3, '0')};
const txData = { id: txId, ...txForm, amount: numericAmount };
setTransactions(prev => editingTx ? prev.map(t => t.id === txId ? txData : t) : [...prev, txData]);
if (isSupabaseConnected) await supabase.from('transactions').upsert(txData);
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
if (isSupabaseConnected) {
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
      category: 'Licenciamento Ambiental (LP / LI / LO)',
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
  if (isSupabaseConnected && newTxs.length > 0) {
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
if (isSupabaseConnected) {
await supabase.from('contracts').delete().eq('id', contractId);
}
showToast(Contrato ${contractId} excluído.);
setDeleteContractTarget(null);
};

const handleSaveClient = async (e) => {
e.preventDefault();
if (!cliForm.name) return;
const clientId = editingClient ? editingClient.id : CLI-${String(clients.length + 1).padStart(3, '0')};
const clientData = { id: clientId, ...cliForm };
setClients(prev => editingClient ? prev.map(c => c.id === clientId ? clientData : c) : [...prev, clientData]);
if (isSupabaseConnected) await supabase.from('clients').upsert(clientData);
showToast('Cliente salvo no CRM com sucesso!');
setShowClientModal(false);
};

const handleSaveNewUserRole = (e) => {
e.preventDefault();
if (!newRoleForm.name || !newRoleForm.holder || !newRoleForm.email) return;
const newRole = {
id: ROLE-${Date.now()},
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
{ id: 'acessos', label: 'Árvore de Acessos & Perfis', icon: Network, badge: ${accessRoles.length} Níveis, permKey: 'acessos' },
{ id: 'config', label: 'Plano de Contas & Metas', icon: Settings, permKey: 'dashboard' }
];

return (

{toastMessage && (


{toastMessage}

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
            {isSupabaseConnected ? <Cloud className="w-3 h-3 text-emerald-400" /> : <CloudRain className="w-3 h-3 text-amber-400" />}
            {isSupabaseConnected ? 'Nuvem Sincronizada' : 'Modo Local'}
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
        Grupo Martins ERP v3.7 • Supabase
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
                category: REVENUE_CATEGORIES[0],
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

      {/* ======================================================== */}
      {/* ABA DRE GERENCIAL (A TODA PROVA DE ERRO)                 */}
      {/* ======================================================== */}
      {activeTab === 'dre' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">LUCRO BRUTO OPERACIONAL</div>
                <div className="text-2xl font-black text-[#1B3B2B] mt-1">{formatCurrency(dreData.lucroBrutoTotal)}</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">RESULTADO LÍQUIDO FINAL</div>
                <div className="text-2xl font-black text-emerald-700 mt-1">
                  {formatCurrency(dreData.lucroLiqTotal)} ({dreData.getAV(dreData.lucroLiqTotal).toFixed(1).replace('.', ',')}%)
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#1B3B2B] font-semibold">REGIME DE COMPETÊNCIA • CONTABILIDADE GERENCIAL</div>
              <h2 className="text-lg font-black text-[#1B3B2B] mt-0.5">DRE — Demonstrativo do Resultado do Exercício (Jan a Dez 2026)</h2>
            </div>
            <button
              onClick={handleExportDRECSV}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] shadow cursor-pointer"
            >
              <Download className="w-4 h-4" /> Gerar Planilha DRE (CSV)
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[10px]">
                    <th className="py-3 px-3 min-w-[280px]">ESTRUTURA DRE — GRUPO MARTINS (R$)</th>
                    {MONTHS_LABELS.map(m => (
                      <th key={m} className="py-3 px-2 text-right">{m}</th>
                    ))}
                    <th className="py-3 px-3 text-right">ACUMULADO 2026</th>
                    <th className="py-3 px-3 text-center">AV %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr className="bg-slate-100 font-extrabold text-[#1B3B2B]">
                    <td className="py-3 px-3">1. RECEITA OPERACIONAL BRUTA</td>
                    {dreData.receitaBrutaMonths.map((v, i) => (
                      <td key={i} className="py-3 px-2 text-right">{v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    ))}
                    <td className="py-3 px-3 text-right">{dreData.receitaBrutaTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-3 px-3 text-center">100,0%</td>
                  </tr>
                  {dreData.revSubItems.map(sub => (
                    <tr key={sub.category} className="hover:bg-slate-50 text-slate-700">
                      <td className="py-2 px-4 text-slate-600">(+) {sub.category}</td>
                      {sub.monthsVals.map((v, i) => (
                        <td key={i} className="py-2 px-2 text-right text-slate-600">{v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      ))}
                      <td className="py-2 px-3 text-right font-semibold text-slate-800">{sub.total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td className="py-2 px-3 text-center text-slate-500">{dreData.getAV(sub.total).toFixed(1).replace('.', ',')}%</td>
                    </tr>
                  ))}

                  <tr className="bg-rose-50/60 font-bold text-rose-900">
                    <td className="py-3 px-3">2. (-) DEDUÇÕES E IMPOSTOS SOBRE FATURAMENTO</td>
                    {dreData.dedMonths.map((v, i) => (
                      <td key={i} className="py-3 px-2 text-right">{v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    ))}
                    <td className="py-3 px-3 text-right">{dreData.dedTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-3 px-3 text-center">{dreData.getAV(dreData.dedTotal).toFixed(1).replace('.', ',')}%</td>
                  </tr>

                  <tr className="bg-emerald-50/70 font-extrabold text-[#1B3B2B]">
                    <td className="py-3 px-3">3. (=) RECEITA OPERACIONAL LÍQUIDA</td>
                    {dreData.receitaLiqMonths.map((v, i) => (
                      <td key={i} className="py-3 px-2 text-right">{v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    ))}
                    <td className="py-3 px-3 text-right">{dreData.receitaLiqTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-3 px-3 text-center">{dreData.getAV(dreData.receitaLiqTotal).toFixed(1).replace('.', ',')}%</td>
                  </tr>

                  <tr className="bg-rose-50/60 font-bold text-rose-900">
                    <td className="py-3 px-3">4. (-) CUSTOS DIRETOS DE PROJETOS E CAMPO (CSP)</td>
                    {dreData.costMonths.map((v, i) => (
                      <td key={i} className="py-3 px-2 text-right">{v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    ))}
                    <td className="py-3 px-3 text-right">{dreData.costTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-3 px-3 text-center">{dreData.getAV(dreData.costTotal).toFixed(1).replace('.', ',')}%</td>
                  </tr>
                  {dreData.costSubItems.map(sub => (
                    <tr key={sub.category} className="hover:bg-slate-50 text-slate-700">
                      <td className="py-2 px-4 text-slate-600">(-) {sub.category}</td>
                      {sub.monthsVals.map((v, i) => (
                        <td key={i} className="py-2 px-2 text-right text-slate-600">{v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      ))}
                      <td className="py-2 px-3 text-right font-semibold text-slate-800">{sub.total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td className="py-2 px-3 text-center text-slate-500">{dreData.getAV(sub.total).toFixed(1).replace('.', ',')}%</td>
                    </tr>
                  ))}

                  <tr className="bg-rose-50/60 font-bold text-rose-900">
                    <td className="py-3 px-3">5. (-) DESPESAS OPERACIONAIS, COMERCIAIS E PRÓ-LABORE</td>
                    {dreData.expMonths.map((v, i) => (
                      <td key={i} className="py-3 px-2 text-right">{v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    ))}
                    <td className="py-3 px-3 text-right">{dreData.expTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-3 px-3 text-center">{dreData.getAV(dreData.expTotal).toFixed(1).replace('.', ',')}%</td>
                  </tr>
                  {dreData.expSubItems.map(sub => (
                    <tr key={sub.category} className="hover:bg-slate-50 text-slate-700">
                      <td className="py-2 px-4 text-slate-600">
                        {sub.category.includes('Pró-Labore') ? <strong className="text-[#1B3B2B]">★ (-) {sub.category}</strong> : `(-) ${sub.category}`}
                      </td>
                      {sub.monthsVals.map((v, i) => (
                        <td key={i} className={`py-2 px-2 text-right ${sub.category.includes('Pró-Labore') ? 'font-bold text-[#1B3B2B]' : 'text-slate-600'}`}>
                          {v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                      ))}
                      <td className="py-2 px-3 text-right font-semibold text-slate-800">{sub.total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td className="py-2 px-3 text-center text-slate-500">{dreData.getAV(sub.total).toFixed(1).replace('.', ',')}%</td>
                    </tr>
                  ))}

                  <tr className="bg-[#1B3B2B] text-white font-black text-sm">
                    <td className="py-3.5 px-3">6. (=) LUCRO LÍQUIDO DO EXERCÍCIO (APÓS PRÓ-LABORE)</td>
                    {dreData.lucroLiqMonths.map((v, i) => (
                      <td key={i} className="py-3.5 px-2 text-right">{v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    ))}
                    <td className="py-3.5 px-3 text-right">{dreData.lucroLiqTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-3 px-3 text-center text-emerald-300">{dreData.getAV(dreData.lucroLiqTotal).toFixed(1).replace('.', ',')}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'contratos' && (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-2xl border flex items-center justify-between">
            <input type="text" value={ctSearch} onChange={(e) => setCtSearch(e.target.value)} placeholder="Pesquisar contratos..." className="w-full max-w-md px-3 py-2 rounded-xl border text-xs" />
            <button onClick={() => { setEditingContract(null); setShowContractModal(true); }} className="px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold">Novo Contrato</button>
          </div>
          <div className="bg-white rounded-2xl border overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1B3B2B] text-white uppercase font-bold">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Cliente</th>
                  <th className="p-3">Serviço</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-right">Valor</th>
                  <th className="p-3 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredContracts.map(ct => (
                  <tr key={ct.id} className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold">{ct.id}</td>
                    <td className="p-3 font-bold">{ct.client}</td>
                    <td className="p-3">{ct.service}</td>
                    <td className="p-3 text-center"><span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">{ct.status}</span></td>
                    <td className="p-3 text-right font-bold">{formatCurrency(ct.contractValue)}</td>
                    <td className="p-3 text-center">
                      <button onClick={() => setDeleteContractTarget(ct)} className="text-rose-600"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'clientes' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border flex items-center justify-between">
            <input type="text" value={cliSearch} onChange={(e) => setCliSearch(e.target.value)} placeholder="Pesquisar clientes..." className="w-full max-w-md px-3 py-2 rounded-xl border text-xs" />
            <button onClick={() => { setEditingClient(null); setShowClientModal(true); }} className="px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold">Novo Cliente</button>
          </div>
          <div className="bg-white rounded-2xl border overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1B3B2B] text-white uppercase font-bold">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Nome</th>
                  <th className="p-3">CNPJ</th>
                  <th className="p-3">Segmento</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredClients.map(cli => (
                  <tr key={cli.id} className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold">{cli.id}</td>
                    <td className="p-3 font-bold">{cli.name}</td>
                    <td className="p-3">{cli.document}</td>
                    <td className="p-3">{cli.segment}</td>
                    <td className="p-3 text-center"><span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">{cli.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'acessos' && (
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <h3 className="text-base font-extrabold text-[#1B3B2B] mb-4">Perfis de Acesso do Sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessRoles.map(role => (
              <div key={role.id} className="p-4 rounded-xl border bg-slate-50 space-y-2">
                <div className="font-bold text-[#1B3B2B]">{role.name}</div>
                <div className="text-xs text-slate-600">Titular: {role.holder}</div>
                <button onClick={() => setActiveRoleId(role.id)} className={`w-full py-1.5 rounded-lg text-xs font-bold ${activeRoleId === role.id ? 'bg-[#1B3B2B] text-white' : 'bg-white border'}`}>
                  {activeRoleId === role.id ? 'Ativo' : 'Simular'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  </div>

  {/* MODAL LANÇAMENTO */}
  {showTxModal && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4">
        <h3 className="text-base font-bold text-[#1B3B2B]">Novo Lançamento</h3>
        <form onSubmit={handleSaveTransaction} className="space-y-3 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <input type="date" value={txForm.date} onChange={e => setTxForm({...txForm, date: e.target.value})} className="px-3 py-2 border rounded-xl" required />
            <select value={txForm.type} onChange={e => setTxForm({...txForm, type: e.target.value})} className="px-3 py-2 border rounded-xl font-bold">
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
          <select value={txForm.category} onChange={e => setTxForm({...txForm, category: e.target.value})} className="w-full px-3 py-2 border rounded-xl">
            {(txForm.type === 'Entrada' ? REVENUE_CATEGORIES : EXPENSE_CATEGORIES).map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <input type="text" value={txForm.entity} onChange={e => setTxForm({...txForm, entity: e.target.value})} placeholder="Favorecido / Cliente" className="w-full px-3 py-2 border rounded-xl" required />
          <div className="grid grid-cols-2 gap-3">
            <input type="number" step="0.01" value={txForm.amount} onChange={e => setTxForm({...txForm, amount: e.target.value})} placeholder="Valor R$" className="px-3 py-2 border rounded-xl font-bold" required />
            <select value={txForm.status} onChange={e => setTxForm({...txForm, status: e.target.value})} className="px-3 py-2 border rounded-xl font-bold">
              <option value="Pago / Recebido">Pago / Recebido</option>
              <option value="Pendente">Pendente</option>
            </select>
          </div>
          <input type="text" value={txForm.description} onChange={e => setTxForm({...txForm, description: e.target.value})} placeholder="Descrição" className="w-full px-3 py-2 border rounded-xl" required />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setShowTxModal(false)} className="px-4 py-2 border rounded-xl">Cancelar</button>
            <button type="submit" className="px-5 py-2 bg-[#1B3B2B] text-white rounded-xl font-bold">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )}

  {/* MODAL CONTRATO */}
  {showContractModal && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4">
        <h3 className="text-base font-bold text-[#1B3B2B]">Novo Contrato</h3>
        <form onSubmit={handleSaveContract} className="space-y-3 text-xs">
          <input type="text" value={ctForm.client} onChange={e => setCtForm({...ctForm, client: e.target.value})} placeholder="Nome do Cliente" className="w-full px-3 py-2 border rounded-xl" required />
          <input type="text" value={ctForm.service} onChange={e => setCtForm({...ctForm, service: e.target.value})} placeholder="Serviço Técnico" className="w-full px-3 py-2 border rounded-xl" required />
          <input type="number" value={ctForm.contractValue} onChange={e => setCtForm({...ctForm, contractValue: e.target.value})} placeholder="Valor do Contrato (R$)" className="w-full px-3 py-2 border rounded-xl font-bold" required />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setShowContractModal(false)} className="px-4 py-2 border rounded-xl">Cancelar</button>
            <button type="submit" className="px-5 py-2 bg-[#1B3B2B] text-white rounded-xl font-bold">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )}

  {/* MODAL CLIENTE */}
  {showClientModal && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4">
        <h3 className="text-base font-bold text-[#1B3B2B]">Cadastrar Cliente</h3>
        <form onSubmit={handleSaveClient} className="space-y-3 text-xs">
          <input type="text" value={cliForm.name} onChange={e => setCliForm({...cliForm, name: e.target.value})} placeholder="Razão Social / Nome" className="w-full px-3 py-2 border rounded-xl font-bold" required />
          <input type="text" value={cliForm.document} onChange={e => setCliForm({...cliForm, document: e.target.value})} placeholder="CNPJ / CPF" className="w-full px-3 py-2 border rounded-xl" required />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setShowClientModal(false)} className="px-4 py-2 border rounded-xl">Cancelar</button>
            <button type="submit" className="px-5 py-2 bg-[#1B3B2B] text-white rounded-xl font-bold">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )}

  {/* CONFIRMAÇÃO EXCLUSÃO CONTRATO */}
  {deleteContractTarget && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center space-y-4">
        <h3 className="font-bold text-rose-700">Excluir Contrato?</h3>
        <div className="flex justify-center gap-2">
          <button onClick={() => setDeleteContractTarget(null)} className="px-4 py-2 border rounded-xl text-xs">Cancelar</button>
          <button onClick={confirmDeleteContract} className="px-4 py-2 bg-rose-700 text-white rounded-xl text-xs font-bold">Excluir</button>
        </div>
      </div>
    </div>
  )}
</div>


);
}
