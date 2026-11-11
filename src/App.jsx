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
    email: 'comercial@grupomart
