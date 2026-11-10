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
  UserPlus
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
          {/* Tronco com base alargada */}
          <path
            d="M36 93 C44 90, 46 82, 46 68 L46 30 L54 30 L54 68 C54 82, 56 90, 64 93 Z"
            fill={primaryColor}
          />
          {/* Ramos */}
          <path
            d="M50 67 L32 54 M50 67 L68 54 M50 47 L34 33 M50 47 L66 33"
            stroke={primaryColor}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Folha Topo Central */}
          <path
            d="M50 10 C41 20, 41 31, 50 37 C59 31, 59 20, 50 10 Z"
            fill={primaryColor}
          />
          <path d="M50 17 L50 31" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
          {/* Folha Superior Esquerda */}
          <path
            d="M23 22 C22 33, 30 39, 41 37 C39 27, 32 21, 23 22 Z"
            fill={primaryColor}
          />
          <path d="M28 26 L37 34" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
          {/* Folha Superior Direita */}
          <path
            d="M77 22 C78 33, 70 39, 59 37 C61 27, 68 21, 77 22 Z"
            fill={primaryColor}
          />
          <path d="M72 26 L63 34" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
          {/* Folha Inferior Esquerda */}
          <path
            d="M19 46 C20 57, 29 62, 40 58 C37 48, 29 44, 19 46 Z"
            fill={primaryColor}
          />
          <path d="M25 50 L36 55" stroke={bgBadge} strokeWidth="2.2" strokeLinecap="round" />
          {/* Folha Inferior Direita */}
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
      {/* Símbolo Circular da Árvore */}
      <svg viewBox="0 0 120 120" className={size === 'lg' ? 'w-24 h-24' : 'w-16 h-16'}>
        <circle cx="60" cy="60" r="52" fill="none" stroke="#1B3B2B" strokeWidth="6" />
        {/* Tronco */}
        <path
          d="M42 111 C52 107, 56 97, 56 80 L56 36 L64 36 L64 80 C64 97, 68 107, 78 111 Z"
          fill="#1B3B2B"
        />
        {/* Galhos */}
        <path
          d="M60 80 L38 64 M60 80 L82 64 M60 56 L41 40 M60 56 L79 40"
          stroke="#1B3B2B"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Folha Central Topo */}
        <path
          d="M60 13 C49 25, 49 38, 60 45 C71 38, 71 25, 60 13 Z"
          fill="#1B3B2B"
        />
        <path d="M60 21 L60 39" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
        {/* Folha Superior Esquerda */}
        <path
          d="M27 27 C26 40, 36 47, 49 45 C47 33, 38 26, 27 27 Z"
          fill="#1B3B2B"
        />
        <path d="M33 32 L44 41" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
        {/* Folha Superior Direita */}
        <path
          d="M93 27 C94 40, 84 47, 71 45 C73 33, 82 26, 93 27 Z"
          fill="#1B3B2B"
        />
        <path d="M87 32 L76 41" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
        {/* Folha Inferior Esquerda */}
        <path
          d="M22 55 C24 68, 35 74, 48 69 C45 57, 35 53, 22 55 Z"
          fill="#1B3B2B"
        />
        <path d="M29 59 L43 66" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
        {/* Folha Inferior Direita */}
        <path
          d="M98 55 C96 68, 85 74, 72 69 C75 57, 85 53, 98 55 Z"
          fill="#1B3B2B"
        />
        <path d="M91 59 L77 66" stroke="#F8F3EF" strokeWidth="2.4" strokeLinecap="round" />
      </svg>

      {/* Linha --- GRUPO --- */}
      <div className="flex items-center gap-2.5 mt-1.5 w-full justify-center">
        <span className="h-[1px] w-8 bg-[#2D5A43]" />
        <span className="text-[10px] tracking-[0.35em] font-semibold text-[#1B3B2B]">
          GRUPO
        </span>
        <span className="h-[1px] w-8 bg-[#2D5A43]" />
      </div>

      {/* MARTINS */}
      <div
        className={`${
          size === 'lg' ? 'text-3xl' : 'text-2xl'
        } font-black tracking-[0.08em] text-[#1B3B2B] leading-none mt-0.5`}
        style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
      >
        MARTINS
      </div>

      {/* Sub-divisão Dupla: Soluções Ambientais | MS Segurança do Trabalho */}
      <div className="flex items-center justify-center gap-2.5 mt-2.5 pt-2 border-t border-[#DFD8CE] w-full">
        {/* Esquerda: Soluções Ambientais */}
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

        {/* Direita: MS Segurança do Trabalho */}
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
// 2. CONSTANTES, CATEGORIAS E DADOS INICIAIS (100% FIÉIS À PLANILHA V3 2026)
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

// 72 Lançamentos Financeiros Oficiais de 2026 (MT-001 a MT-072)
const INITIAL_TRANSACTIONS = [
  // JANEIRO
  { id: 'MT-001', date: '2026-01-05', month: 'Jan', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Agropecuária Santa Fé S/A (Faz. Rio Verde)', contractId: 'CT-2026-01', description: 'Sinal 50% — Renovação Licença de Operação (LO SEMA-MT)', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 14500 },
  { id: 'MT-002', date: '2026-01-09', month: 'Jan', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Frigorífico Vale do Boi Ltda', contractId: 'CT-2026-02', description: 'Elaboração de PGR, PCMSO e LTCAT — Planta Industrial', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 8800 },
  { id: 'MT-003', date: '2026-01-15', month: 'Jan', type: 'Entrada', category: 'CAR, Georreferenciamento e Outorga de Água', entity: 'Fazenda São Judas Tadeu (Grupo Soares)', contractId: 'CT-2026-03', description: 'Retificação de CAR e Outorga Superficial de Captação', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 7200 },
  { id: 'MT-004', date: '2026-01-20', month: 'Jan', type: 'Entrada', category: 'Gestão de eSocial SST e Treinamentos NRs', entity: 'Transportadora Rota Grãos MT', contractId: 'CT-2026-04', description: 'Mensalidade eSocial SST (S-2210/S-2220/S-2240) + NR-35', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 4600 },
  { id: 'MT-005', date: '2026-01-25', month: 'Jan', type: 'Saída', category: 'Impostos sobre Faturamento (ISS / Simples / PIS-COFINS)', entity: 'Receita Federal / Prefeitura Municipal', contractId: '—', description: 'DAS Simples Nacional e ISSQN competência Janeiro', paymentMethod: 'Débito Automático', status: 'Pago / Recebido', amount: 2850 },
  { id: 'MT-006', date: '2026-01-28', month: 'Jan', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Jan/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 7500 },
  { id: 'MT-007', date: '2026-01-30', month: 'Jan', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Eng. Segurança, Biólogo e Encargos (Jan/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 4500 },

  // FEVEREIRO
  { id: 'MT-008', date: '2026-02-04', month: 'Fev', type: 'Entrada', category: 'Planos Ambientais (PRAD / PGRS) e Auditorias', entity: 'Sementes Ouro Branco Ltda', contractId: 'CT-2026-05', description: 'Elaboração de PGRS Industrial e Plano de Emergência', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 11500 },
  { id: 'MT-009', date: '2026-02-11', month: 'Fev', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Agropecuária Santa Fé S/A (Faz. Rio Verde)', contractId: 'CT-2026-01', description: 'Parcela Final 50% — Protocolo LO SEMA-MT Concluído', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 14500 },
  { id: 'MT-010', date: '2026-02-19', month: 'Fev', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Construtora Horizonte Engenharia', contractId: 'CT-2026-06', description: 'PGR de Canteiro de Obras + Treinamento NR-18 e NR-35', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 7400 },
  { id: 'MT-011', date: '2026-02-22', month: 'Fev', type: 'Saída', category: 'Análises Laboratoriais (Água / Solo / Efluentes) e Laudos', entity: 'AcquaLab Análises Ambientais', contractId: 'CT-2026-01', description: 'Ensaios físico-químicos de efluentes e qualidade da água', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 2400 },
  { id: 'MT-012', date: '2026-02-26', month: 'Fev', type: 'Saída', category: 'Aluguel, Energia, Internet e Infraestrutura', entity: 'Centro Empresarial Cerrado / Concessionárias', contractId: '—', description: 'Aluguel sede técnica, energia, fibra óptica e condomínio', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 3450 },
  { id: 'MT-013', date: '2026-02-28', month: 'Fev', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Fev/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 7500 },
  { id: 'MT-014', date: '2026-02-28', month: 'Fev', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Fev/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 4500 },

  // MARÇO
  { id: 'MT-015', date: '2026-03-05', month: 'Mar', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Usina BioEnergia Cerrado S/A', contractId: 'CT-2026-07', description: '1ª Parcela — Licença de Instalação (LI) Ampliação de Caldeira', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 21000 },
  { id: 'MT-016', date: '2026-03-12', month: 'Mar', type: 'Entrada', category: 'CAR, Georreferenciamento e Outorga de Água', entity: 'Agropecuária Irmãos Rezende', contractId: 'CT-2026-08', description: 'Outorga de Poço Tubular Profundo + Teste de Vazão', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 9600 },
  { id: 'MT-017', date: '2026-03-20', month: 'Mar', type: 'Entrada', category: 'Gestão de eSocial SST e Treinamentos NRs', entity: 'Rede Postos Araguaia (6 Unidades)', contractId: 'CT-2026-04', description: 'Gestão Mensal SST + Treinamento NR-20 Inflamáveis', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 6800 },
  { id: 'MT-018', date: '2026-03-22', month: 'Mar', type: 'Saída', category: 'Taxas de Órgãos (SEMA-MT / IBAMA / CREA / ART)', entity: 'SEMA-MT / CREA-MT', contractId: 'CT-2026-07', description: 'Emissão de ARTs de projetos ambientais e taxas de vistoria', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 1850 },
  { id: 'MT-019', date: '2026-03-25', month: 'Mar', type: 'Saída', category: 'Comissões Comerciais e Prospecção de Clientes', entity: 'Representante Comercial Agro-Industrial', contractId: 'CT-2026-07', description: 'Comissão de fechamento contrato Usina BioEnergia (10%)', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 3150 },
  { id: 'MT-020', date: '2026-03-28', month: 'Mar', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Mar/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 7800 },
  { id: 'MT-021', date: '2026-03-30', month: 'Mar', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Mar/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 4700 },

  // ABRIL
  { id: 'MT-022', date: '2026-04-06', month: 'Abr', type: 'Entrada', category: 'Planos Ambientais (PRAD / PGRS) e Auditorias', entity: 'Mineração Serra Dourada Ltda', contractId: 'CT-2026-09', description: 'Plano de Recuperação de Área Degradada (PRAD) — Jazida Sul', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 16500 },
  { id: 'MT-023', date: '2026-04-14', month: 'Abr', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Cerealista Planalto Grãos', contractId: 'CT-2026-06', description: 'Laudo de Insalubridade/Periculosidade (LIP) + Dosimetria Ruído', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 9200 },
  { id: 'MT-024', date: '2026-04-21', month: 'Abr', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Loteamento Residencial Parque das Águas', contractId: 'CT-2026-07', description: 'Licença Prévia (LP) Urbanística + Estudo de Impacto Vizinhança', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 12000 },
  { id: 'MT-025', date: '2026-04-24', month: 'Abr', type: 'Saída', category: 'Topografia, Geoprocessamento e Vistorias de Campo', entity: 'GeoDrone Aerofotogrametria MT', contractId: 'CT-2026-09', description: 'Levantamento com VANT/Drone RTK para PRAD Mineração', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 2800 },
  { id: 'MT-026', date: '2026-04-26', month: 'Abr', type: 'Saída', category: 'Impostos sobre Faturamento (ISS / Simples / PIS-COFINS)', entity: 'Receita Federal / Prefeitura Municipal', contractId: '—', description: 'Apuração Simples Nacional + ISSQN Trimestral', paymentMethod: 'Débito Automático', status: 'Pago / Recebido', amount: 3240 },
  { id: 'MT-027', date: '2026-04-28', month: 'Abr', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Abr/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 7800 },
  { id: 'MT-028', date: '2026-04-30', month: 'Abr', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Abr/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 4700 },

  // MAIO
  { id: 'MT-029', date: '2026-05-05', month: 'Mai', type: 'Entrada', category: 'CAR, Georreferenciamento e Outorga de Água', entity: 'Fazenda Santa Bárbara (3.400 ha)', contractId: 'CT-2026-08', description: 'Georreferenciamento INCRA + Validação PRA/SEMA', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 15800 },
  { id: 'MT-030', date: '2026-05-13', month: 'Mai', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Indústria Metalúrgica AçoForte', contractId: 'CT-2026-02', description: 'Renovação anual PGR, PCMSO, AET (Ergonomia NR-17)', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 11400 },
  { id: 'MT-031', date: '2026-05-19', month: 'Mai', type: 'Entrada', category: 'Gestão de eSocial SST e Treinamentos NRs', entity: 'Carteira Recorrente SST (14 Empresas)', contractId: 'CT-2026-04', description: 'Faturamento mensal gestão de envios eSocial + NR-06/NR-12', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 8900 },
  { id: 'MT-032', date: '2026-05-22', month: 'Mai', type: 'Saída', category: 'Softwares Técnicos (AutoCAD / QGIS / Sistema SST)', entity: 'Autodesk / Sistema SOC SST / Cloud GIS', contractId: '—', description: 'Licenças anuais AutoCAD, plataforma SST e banco geoespacial', paymentMethod: 'Cartão Corporativo', status: 'Pago / Recebido', amount: 1950 },
  { id: 'MT-033', date: '2026-05-26', month: 'Mai', type: 'Saída', category: 'Deslocamento, Combustível e Diárias Técnicas', entity: 'Frota Técnica Caminhonete 4x4', contractId: 'CT-2026-08', description: 'Combustível, pedágio e diárias de vistoria no interior do MT', paymentMethod: 'Cartão Corporativo', status: 'Pago / Recebido', amount: 1680 },
  { id: 'MT-034', date: '2026-05-28', month: 'Mai', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Mai/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 8000 },
  { id: 'MT-035', date: '2026-05-30', month: 'Mai', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Mai/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 4800 },

  // JUNHO
  { id: 'MT-036', date: '2026-06-03', month: 'Jun', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Usina BioEnergia Cerrado S/A', contractId: 'CT-2026-07', description: '2ª Parcela — Emissão da Licença de Instalação (LI SEMA-MT)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 21000 },
  { id: 'MT-037', date: '2026-06-11', month: 'Jun', type: 'Entrada', category: 'Planos Ambientais (PRAD / PGRS) e Auditorias', entity: 'Hospital e Maternidade São Lucas', contractId: 'CT-2026-10', description: 'Elaboração de PGRSS (Resíduos de Serviços de Saúde) + Treinamento', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 13200 },
  { id: 'MT-038', date: '2026-06-18', month: 'Jun', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Cooperativa Agrícola CoopSul', contractId: 'CT-2026-06', description: 'Programa de Proteção Respiratória (PPR) + Espaço Confinado NR-33', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 8500 },
  { id: 'MT-039', date: '2026-06-22', month: 'Jun', type: 'Saída', category: 'Análises Laboratoriais (Água / Solo / Efluentes) e Laudos', entity: 'AcquaLab / Calibração de Dosímetros', contractId: 'CT-2026-07', description: 'Monitoramento de emissões atmosféricas e calibração RBC', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 3600 },
  { id: 'MT-040', date: '2026-06-26', month: 'Jun', type: 'Saída', category: 'Impostos sobre Faturamento (ISS / Simples / PIS-COFINS)', entity: 'Receita Federal / Prefeitura Municipal', contractId: '—', description: 'DAS Simples Nacional e ISSQN sobre notas de Junho', paymentMethod: 'Débito Automático', status: 'Pago / Recebido', amount: 3680 },
  { id: 'MT-041', date: '2026-06-28', month: 'Jun', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Jun/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 8000 },
  { id: 'MT-042', date: '2026-06-30', month: 'Jun', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Jun/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 4800 },

  // JULHO
  { id: 'MT-043', date: '2026-07-07', month: 'Jul', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Armazéns Gerais Grão Forte Ltda', contractId: 'CT-2026-11', description: 'Licenciamento Trifásico (LP/LI/LO) Unidade Silos Secadores', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 24500 },
  { id: 'MT-044', date: '2026-07-15', month: 'Jul', type: 'Entrada', category: 'CAR, Georreferenciamento e Outorga de Água', entity: 'Grupo Agropecuário Horizonte (2 Fazendas)', contractId: 'CT-2026-03', description: 'Outorga para Pivô Central de Irrigação + Balanço Hídrico', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 14200 },
  { id: 'MT-045', date: '2026-07-22', month: 'Jul', type: 'Entrada', category: 'Gestão de eSocial SST e Treinamentos NRs', entity: 'Carteira Recorrente SST (16 Empresas)', contractId: 'CT-2026-04', description: 'Mensalidades Gestão SST + Brigada de Incêndio NR-23', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 9400 },
  { id: 'MT-046', date: '2026-07-25', month: 'Jul', type: 'Saída', category: 'Comissões Comerciais e Prospecção de Clientes', entity: 'Parceiro Comercial Contábil & Agro', contractId: 'CT-2026-11', description: 'Comissão sobre indicação de contrato Armazéns Grão Forte', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 2950 },
  { id: 'MT-047', date: '2026-07-28', month: 'Jul', type: 'Saída', category: 'Aluguel, Energia, Internet e Infraestrutura', entity: 'Centro Empresarial Cerrado / Concessionárias', contractId: '—', description: 'Aluguel escritório, energia, limpeza e manutenção', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 3480 },
  { id: 'MT-048', date: '2026-07-29', month: 'Jul', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Jul/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 8000 },
  { id: 'MT-049', date: '2026-07-30', month: 'Jul', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Jul/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 5200 },

  // AGOSTO
  { id: 'MT-050', date: '2026-08-05', month: 'Ago', type: 'Entrada', category: 'Planos Ambientais (PRAD / PGRS) e Auditorias', entity: 'Indústria de Fertilizantes SoloVivo', contractId: 'CT-2026-10', description: 'Auditoria Ambiental Compulsória + Relatório Anual RAPP/IBAMA', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 14800 },
  { id: 'MT-051', date: '2026-08-12', month: 'Ago', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Supermercados Bom Preço (4 Lojas)', contractId: 'CT-2026-12', description: 'Pacote Completo SST (PGR, PCMSO, LTCAT e PPP Eletrônico)', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 12600 },
  { id: 'MT-052', date: '2026-08-19', month: 'Ago', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Posto Rodoviário BR-163 Sul', contractId: 'CT-2026-11', description: 'Renovação LO + Laudo de Estanqueidade SASC', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 11000 },
  { id: 'MT-053', date: '2026-08-23', month: 'Ago', type: 'Saída', category: 'Taxas de Órgãos (SEMA-MT / IBAMA / CREA / ART)', entity: 'SEMA-MT / IBAMA / CREA-MT', contractId: 'CT-2026-11', description: 'Taxas de análise processual e ARTs múltiplas de SST', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 2150 },
  { id: 'MT-054', date: '2026-08-26', month: 'Ago', type: 'Saída', category: 'Deslocamento, Combustível e Diárias Técnicas', entity: 'Equipe de Campo Ambiental & SST', contractId: 'CT-2026-11', description: 'Deslocamento para vistorias na BR-163 e revisão caminhonete', paymentMethod: 'Cartão Corporativo', status: 'Pago / Recebido', amount: 2290 },
  { id: 'MT-055', date: '2026-08-28', month: 'Ago', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Ago/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 8000 },
  { id: 'MT-056', date: '2026-08-30', month: 'Ago', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Ago/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 5200 },

  // SETEMBRO
  { id: 'MT-057', date: '2026-09-04', month: 'Set', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Algodoeira São Francisco S/A', contractId: 'CT-2026-13', description: 'Sinal 50% — Licenciamento Ambiental de Beneficiamento de Algodão', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 19000 },
  { id: 'MT-058', date: '2026-09-14', month: 'Set', type: 'Entrada', category: 'CAR, Georreferenciamento e Outorga de Água', entity: 'Fazenda Boa Esperança (Grupo Viana)', contractId: 'CT-2026-03', description: 'Regularização Ambiental CAR + Laudo de Reserva Legal', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 11800 },
  { id: 'MT-059', date: '2026-09-21', month: 'Set', type: 'Entrada', category: 'Gestão de eSocial SST e Treinamentos NRs', entity: 'Carteira Recorrente SST (18 Empresas)', contractId: 'CT-2026-04', description: 'Mensalidades Gestão eSocial SST + Treinamento NR-31 Rural', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 11200 },
  { id: 'MT-060', date: '2026-09-25', month: 'Set', type: 'Saída', category: 'Impostos sobre Faturamento (ISS / Simples / PIS-COFINS)', entity: 'Receita Federal / Prefeitura Municipal', contractId: '—', description: 'DAS Simples Nacional e ISSQN competência Setembro', paymentMethod: 'Débito Automático', status: 'Pago / Recebido', amount: 3910 },
  { id: 'MT-061', date: '2026-09-28', month: 'Set', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Set/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 8300 },
  { id: 'MT-062', date: '2026-09-30', month: 'Set', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Set/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 5200 },

  // OUTUBRO
  { id: 'MT-063', date: '2026-10-06', month: 'Out', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Agroindústria SojaBrasil S/A', contractId: 'CT-2026-12', description: 'Avaliações Quantitativas de Higiene Ocupacional (Poeira/Ruído/Calor)', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 16500 },
  { id: 'MT-064', date: '2026-10-15', month: 'Out', type: 'Entrada', category: 'Planos Ambientais (PRAD / PGRS) e Auditorias', entity: 'Concessionária Rodovias do Norte', contractId: 'CT-2026-09', description: 'Monitoramento de Fauna e Flora + Relatório Semestral SEMA', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 15000 },
  { id: 'MT-065', date: '2026-10-22', month: 'Out', type: 'Saída', category: 'Topografia, Geoprocessamento e Vistorias de Campo', entity: 'Equipe Biólogos & Topografia', contractId: 'CT-2026-09', description: 'Campanha de monitoramento de fauna e inventário florestal', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 4500 },
  { id: 'MT-066', date: '2026-10-25', month: 'Out', type: 'Saída', category: 'Tarifas Bancárias, Marketing e Despesas Gerais', entity: 'Agência Digital / Google Ads / Banco', contractId: '—', description: 'Campanha captação clientes SST/Ambiental + material gráfico', paymentMethod: 'Cartão Corporativo', status: 'Pago / Recebido', amount: 2300 },
  { id: 'MT-067', date: '2026-10-28', month: 'Out', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Out/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 8300 },
  { id: 'MT-068', date: '2026-10-30', month: 'Out', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Salários Equipe Técnica e Encargos Sociais (Out/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 5300 },

  // NOVEMBRO
  { id: 'MT-069', date: '2026-11-05', month: 'Nov', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Algodoeira São Francisco S/A', contractId: 'CT-2026-13', description: 'Parcela Final 50% — Entrega de EIA/RIMA e Protocolo SEMA', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 19000 },
  { id: 'MT-070', date: '2026-11-12', month: 'Nov', type: 'Entrada', category: 'CAR, Georreferenciamento e Outorga de Água', entity: 'Estância Pecuária Rio Manso', contractId: 'CT-2026-08', description: 'Outorga de Captação Superficial + Cadastro CNARH', paymentMethod: 'Boleto Bancário Faturado', status: 'Atrasado', amount: 13000 },
  { id: 'MT-071', date: '2026-11-18', month: 'Nov', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Construtora Vanguarda Obras Civis', contractId: 'CT-2026-14', description: 'Elaboração de PCMAT/PGR + Treinamentos Admissionais', paymentMethod: 'Boleto Bancário Faturado', status: 'Pendente', amount: 9800 },
  { id: 'MT-072', date: '2026-11-24', month: 'Nov', type: 'Saída', category: 'Comissões Comerciais e Prospecção de Clientes', entity: 'Consultor Comercial Externo', contractId: 'CT-2026-13', description: 'Comissão comercial fechamento Algodoeira e Construtora', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 4600 },
  { id: 'MT-073', date: '2026-11-28', month: 'Nov', type: 'Saída', category: 'Aluguel, Energia, Internet e Infraestrutura', entity: 'Centro Empresarial Cerrado / Concessionárias', contractId: '—', description: 'Aluguel escritório, energia e telecomunicações Nov/2026', paymentMethod: 'Boleto Bancário Faturado', status: 'Pendente', amount: 3520 },
  { id: 'MT-074', date: '2026-11-30', month: 'Nov', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore Mensal — Sócio Maikon Martins (Nov/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pago / Recebido', amount: 8500 },

  // DEZEMBRO
  { id: 'MT-075', date: '2026-12-04', month: 'Dez', type: 'Entrada', category: 'Licenciamento Ambiental (LP / LI / LO)', entity: 'Complexo Agroindustrial Nova Era', contractId: 'CT-2026-13', description: '1ª Parcela — Licenciamento Ambiental de Armazém e Moega', paymentMethod: 'Faturamento 30/60 Dias', status: 'Pendente', amount: 25000 },
  { id: 'MT-076', date: '2026-12-10', month: 'Dez', type: 'Entrada', category: 'Planos Ambientais (PRAD / PGRS) e Auditorias', entity: 'Grupo Hoteleiro Águas Quentes', contractId: 'CT-2026-10', description: 'Plano de Gerenciamento de Resíduos + Outorga ETE Compacta', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 12000 },
  { id: 'MT-077', date: '2026-12-15', month: 'Dez', type: 'Entrada', category: 'Gestão de eSocial SST e Treinamentos NRs', entity: 'Carteira Recorrente SST (20 Empresas)', contractId: 'CT-2026-04', description: 'Fechamento Anual eSocial SST + Renovação Contratos 2027', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 14400 },
  { id: 'MT-078', date: '2026-12-18', month: 'Dez', type: 'Entrada', category: 'Segurança do Trabalho (PGR / PCMSO / LTCAT)', entity: 'Logística Integrada Centro-Oeste', contractId: 'CT-2026-14', description: 'LTCAT + Laudo Ergonômico AET de Frota e Armazém', paymentMethod: 'Boleto Bancário Faturado', status: 'Pendente', amount: 16300 },
  { id: 'MT-079', date: '2026-12-20', month: 'Dez', type: 'Saída', category: 'Taxas de Órgãos (SEMA-MT / IBAMA / CREA / ART)', entity: 'SEMA-MT / CREA-MT', contractId: 'CT-2026-13', description: 'Taxas de protocolo Complexo Nova Era e ARTs de Dezembro', paymentMethod: 'PIX Empresarial', status: 'Pendente', amount: 1950 },
  { id: 'MT-080', date: '2026-12-22', month: 'Dez', type: 'Saída', category: 'Saque de Pró-Labore — Sócio Maikon Martins', entity: 'Maikon Martins (Sócio-Diretor)', contractId: '—', description: 'Saque de Pró-Labore + Bonificação Anual — Maikon Martins (Dez/26)', paymentMethod: 'Transferência TED / DOC', status: 'Pendente', amount: 10000 },
  { id: 'MT-081', date: '2026-12-23', month: 'Dez', type: 'Saída', category: 'Folha de Pagamento Equipe Técnica e Encargos', entity: 'Equipe Técnica Ambiental & SST', contractId: '—', description: 'Folha salarial Dezembro + 2ª Parcela 13º Salário Equipe Técnica', paymentMethod: 'Transferência TED / DOC', status: 'Pendente', amount: 9500 },
  { id: 'MT-082', date: '2026-12-28', month: 'Dez', type: 'Saída', category: 'Impostos sobre Faturamento (ISS / Simples / PIS-COFINS)', entity: 'Receita Federal / Prefeitura Municipal', contractId: '—', description: 'Provisão DAS Simples Nacional e ISSQN Dezembro/2026', paymentMethod: 'Boleto Bancário Faturado', status: 'Pago / Recebido', amount: 3720 },
  { id: 'MT-083', date: '2026-12-29', month: 'Dez', type: 'Saída', category: 'Comissões Comerciais e Prospecção de Clientes', entity: 'Equipe Comercial & Parceiros', contractId: 'CT-2026-14', description: 'Comissões sobre contratos fechados no 4º Trimestre', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 4210 },
  { id: 'MT-084', date: '2026-12-30', month: 'Dez', type: 'Saída', category: 'Softwares Técnicos (AutoCAD / QGIS / Sistema SST)', entity: 'Servidor Cloud / Backup Técnico', contractId: '—', description: 'Renovação armazenamento em nuvem de mapas e laudos', paymentMethod: 'Cartão Corporativo', status: 'Pago / Recebido', amount: 1000 },
  { id: 'MT-085', date: '2026-12-30', month: 'Dez', type: 'Saída', category: 'Deslocamento, Combustível e Diárias Técnicas', entity: 'Equipe de Campo Ambiental & SST', contractId: 'CT-2026-13', description: 'Viagens técnicas de vistoria de fim de ano', paymentMethod: 'Cartão Corporativo', status: 'Pago / Recebido', amount: 1400 },
  { id: 'MT-086', date: '2026-12-30', month: 'Dez', type: 'Saída', category: 'Taxas de Órgãos (SEMA-MT / IBAMA / CREA / ART)', entity: 'CREA-MT / Conselhos', contractId: '—', description: 'Taxas complementares de acervo técnico CAT', paymentMethod: 'PIX Empresarial', status: 'Pago / Recebido', amount: 830 }
];

// 14 Contratos Técnicos Oficiais (CT-2026-01 a CT-2026-14)
const INITIAL_CONTRACTS = [
  { id: 'CT-2026-01', client: 'Agropecuária Santa Fé S/A (Faz. Rio Verde)', service: 'Renovação de Licença de Operação (LO) + Monitoramento', agency: 'SEMA-MT', startDate: '2026-01-05', deadline: '2026-02-20', status: 'Concluído / Licença Emitida', contractValue: 29000, receivedValue: 29000, directCosts: 3200 },
  { id: 'CT-2026-02', client: 'Frigorífico Vale do Boi & Metalúrgica AçoForte', service: 'Pacote PGR, PCMSO, LTCAT e Ergonomia (NR-17)', agency: 'eSocial / MTE', startDate: '2026-01-09', deadline: '2026-05-25', status: 'Concluído / Licença Emitida', contractValue: 20200, receivedValue: 20200, directCosts: 1800 },
  { id: 'CT-2026-03', client: 'Grupo Soares & Horizonte (3 Fazendas)', service: 'Retificação de CAR, Reserva Legal e Outorga Irrigação', agency: 'SEMA-MT / ANA', startDate: '2026-01-15', deadline: '2026-09-30', status: 'Concluído / Licença Emitida', contractValue: 33200, receivedValue: 33200, directCosts: 4100 },
  { id: 'CT-2026-04', client: 'Carteira Recorrente SST (20 Empresas Ativas)', service: 'Gestão Mensal de Envios eSocial SST + Treinamentos NRs', agency: 'eSocial / NRs', startDate: '2026-01-02', deadline: '2026-12-31', status: 'Contrato Recorrente Ativo', contractValue: 55300, receivedValue: 55300, directCosts: 3900 },
  { id: 'CT-2026-05', client: 'Sementes Ouro Branco Ltda', service: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS + PAE)', agency: 'SEMA-MT / Pref.', startDate: '2026-02-04', deadline: '2026-03-15', status: 'Concluído / Licença Emitida', contractValue: 11500, receivedValue: 11500, directCosts: 950 },
  { id: 'CT-2026-06', client: 'Construtora Horizonte & CoopSul', service: 'PGR Canteiro, Laudo Insalubridade e Espaço Confinado NR-33', agency: 'MTE / NR-18 / NR-33', startDate: '2026-02-19', deadline: '2026-06-30', status: 'Concluído / Licença Emitida', contractValue: 25100, receivedValue: 25100, directCosts: 2300 },
  { id: 'CT-2026-07', client: 'Usina BioEnergia Cerrado S/A', service: 'Licença de Instalação (LI) Ampliação Industrial + Emissões', agency: 'SEMA-MT', startDate: '2026-03-05', deadline: '2026-06-15', status: 'Concluído / Licença Emitida', contractValue: 42000, receivedValue: 42000, directCosts: 6400 },
  { id: 'CT-2026-08', client: 'Fazenda Santa Bárbara & Estância Rio Manso', service: 'Georreferenciamento INCRA + Outorga de Poço e Captação', agency: 'INCRA / SEMA-MT', startDate: '2026-03-12', deadline: '2026-11-30', status: 'Protocolado SEMA / Órgão', contractValue: 38400, receivedValue: 25400, directCosts: 4850 },
  { id: 'CT-2026-09', client: 'Mineração Serra Dourada & Rodovias do Norte', service: 'PRAD com Drone RTK + Monitoramento Semestral de Fauna', agency: 'SEMA-MT / ANM', startDate: '2026-04-06', deadline: '2026-10-30', status: 'Concluído / Licença Emitida', contractValue: 31500, receivedValue: 31500, directCosts: 7300 },
  { id: 'CT-2026-10', client: 'Hospital São Lucas, SoloVivo & Águas Quentes', service: 'PGRSS Hospitalar, Auditoria RAPP/IBAMA e ETE Compacta', agency: 'IBAMA / VISA / SEMA', startDate: '2026-06-11', deadline: '2026-12-20', status: 'Concluído / Licença Emitida', contractValue: 40000, receivedValue: 40000, directCosts: 3800 },
  { id: 'CT-2026-11', client: 'Armazéns Grão Forte & Posto BR-163 Sul', service: 'Licenciamento Trifásico Silos + LO e Estanqueidade Posto', agency: 'SEMA-MT / Corpo Bomb.', startDate: '2026-07-07', deadline: '2026-09-10', status: 'Concluído / Licença Emitida', contractValue: 35500, receivedValue: 35500, directCosts: 4600 },
  { id: 'CT-2026-12', client: 'Supermercados Bom Preço & SojaBrasil S/A', service: 'Higiene Ocupacional Quantitativa (Ruído/Poeira/Calor) + LTCAT', agency: 'eSocial / NR-15', startDate: '2026-08-12', deadline: '2026-10-25', status: 'Concluído / Licença Emitida', contractValue: 29100, receivedValue: 29100, directCosts: 3100 },
  { id: 'CT-2026-13', client: 'Algodoeira São Francisco & Complexo Nova Era', service: 'EIA/RIMA Beneficiamento de Algodão + LP/LI Armazém Graneleiro', agency: 'SEMA-MT', startDate: '2026-09-04', deadline: '2026-12-28', status: 'Protocolado SEMA / Órgão', contractValue: 63000, receivedValue: 38000, directCosts: 8200 },
  { id: 'CT-2026-14', client: 'Construtora Vanguarda & Logística Centro-Oeste', service: 'PGR Obras Civis, LTCAT e Análise Ergonômica do Trabalho (AET)', agency: 'eSocial / NR-17 / NR-18', startDate: '2026-11-18', deadline: '2026-12-30', status: 'Em Elaboração Técnica', contractValue: 26100, receivedValue: 0, directCosts: 1950 }
];

// 15 Clientes Corporativos e Rurais Pré-Cadastrados (CRM Ambiental & SST)
const INITIAL_CLIENTS = [
  { id: 'CLI-001', name: 'Agropecuária Santa Fé S/A (Faz. Rio Verde)', document: '14.582.901/0001-44', registration: 'CAR MT-5107602-8A9F / IE 13.445.890-1', segment: 'Agronegócio', city: 'Rondonópolis — MT', contactName: 'Eng. Roberto Albuquerque', phone: '(66) 99984-1120', email: 'ambiental@agrosantafe.com.br', mainProgram: 'Licenciamento LO SEMA-MT & Outorga', status: 'Ativo' },
  { id: 'CLI-002', name: 'Frigorífico Vale do Boi Ltda', document: '21.309.445/0001-18', registration: 'SIF 4412 / IE 13.882.104-5', segment: 'Indústria', city: 'Jaciara — MT', contactName: 'Carlos Eduardo Nunes (RH/SST)', phone: '(66) 99612-4500', email: 'sst@valedoboi.ind.br', mainProgram: 'PGR, PCMSO, LTCAT & eSocial SST', status: 'Ativo' },
  { id: 'CLI-003', name: 'Fazenda São Judas Tadeu (Grupo Soares)', document: '08.912.334/0002-71', registration: 'CAR MT-5107008-3C1D / Mat. 18.402', segment: 'Agronegócio', city: 'Primavera do Leste — MT', contactName: 'Henrique Soares', phone: '(66) 99911-3090', email: 'gestao@gruposoaresmt.com.br', mainProgram: 'Retificação CAR & Outorga Superficial', status: 'Ativo' },
  { id: 'CLI-004', name: 'Transportadora Rota Grãos MT', document: '33.781.209/0001-90', registration: 'ANTT 884120 / IE 13.901.223-8', segment: 'Transporte/Logística', city: 'Rondonópolis — MT', contactName: 'Fernanda Lima', phone: '(66) 99234-8871', email: 'seguranca@rotagraos.com.br', mainProgram: 'Gestão Mensal eSocial SST + NR-35/NR-20', status: 'Ativo' },
  { id: 'CLI-005', name: 'Sementes Ouro Branco Ltda', document: '11.402.889/0001-05', registration: 'RENASEM MT-0492 / LO 88210', segment: 'Agronegócio', city: 'Campo Verde — MT', contactName: 'Agr. Marcos Vinícius', phone: '(66) 99801-7740', email: 'qualidade@sementesourobranco.com.br', mainProgram: 'PGRS Industrial & Plano de Emergência', status: 'Ativo' },
  { id: 'CLI-006', name: 'Construtora Horizonte Engenharia', document: '19.845.670/0001-62', registration: 'CREA-MT PJ 10492', segment: 'Construtora/Loteamento', city: 'Cuiabá — MT', contactName: 'Eng. Patrícia Medeiros', phone: '(65) 99945-6012', email: 'engenharia@horizontemt.com.br', mainProgram: 'PGR Canteiro de Obras & NR-18/NR-35', status: 'Ativo' },
  { id: 'CLI-007', name: 'Usina BioEnergia Cerrado S/A', document: '04.221.990/0001-33', registration: 'LP/LI SEMA-MT Proc. 99412/2026', segment: 'Indústria', city: 'Nova Mutum — MT', contactName: 'Dr. Gustavo Cavalcanti', phone: '(65) 99678-9200', email: 'meioambiente@bioenergiacerrado.com.br', mainProgram: 'Licença de Instalação (LI) & Emissões', status: 'Ativo' },
  { id: 'CLI-008', name: 'Fazenda Santa Bárbara (3.400 ha)', document: '412.889.301-53', registration: 'INCRA CCIR 901.224.881-0', segment: 'Agronegócio', city: 'Itiquira — MT', contactName: 'Sr. Antônio Rezende', phone: '(66) 99972-1944', email: 'fazendasantabarbara@agro.com.br', mainProgram: 'Georreferenciamento INCRA & PRA/SEMA', status: 'Ativo' },
  { id: 'CLI-009', name: 'Mineração Serra Dourada Ltda', document: '27.654.110/0001-88', registration: 'ANM Proc. 866.412/2025', segment: 'Indústria', city: 'Poxoréu — MT', contactName: 'Geól. Leonardo Farias', phone: '(66) 99605-3321', email: 'tecnico@mineracaoserradourada.com.br', mainProgram: 'PRAD com Drone RTK & Monitoramento Fauna', status: 'Ativo' },
  { id: 'CLI-010', name: 'Hospital e Maternidade São Lucas', document: '09.118.450/0001-12', registration: 'CNES 2409112 / VISA-MT', segment: 'Saúde', city: 'Rondonópolis — MT', contactName: 'Dra. Camila Vasconcelos', phone: '(66) 3422-8900', email: 'diretoria@hospitalsaolucasmt.com.br', mainProgram: 'PGRSS Hospitalar & Insalubridade LTCAT', status: 'Ativo' },
  { id: 'CLI-011', name: 'Armazéns Gerais Grão Forte Ltda', document: '31.509.882/0001-40', registration: 'CONAB UG-5104 / SEMA-MT', segment: 'Agronegócio', city: 'Sorriso — MT', contactName: 'Valdir Scheffer', phone: '(66) 99932-4410', email: 'operacoes@graoforte.com.br', mainProgram: 'Licenciamento Trifásico (LP/LI/LO) Silos', status: 'Ativo' },
  { id: 'CLI-012', name: 'Supermercados Bom Preço (4 Lojas)', document: '16.774.201/0001-99', registration: 'IE 13.550.912-0 / Alvará Bombeiros', segment: 'Comércio/Serviços', city: 'Rondonópolis — MT', contactName: 'Juliana Martins (DP/RH)', phone: '(66) 99201-5560', email: 'rh@superbomprecomt.com.br', mainProgram: 'Pacote Completo SST (PGR, PCMSO, PPP)', status: 'Ativo' },
  { id: 'CLI-013', name: 'Algodoeira São Francisco S/A', document: '05.890.123/0001-77', registration: 'SEMA-MT EIA/RIMA 2026-901', segment: 'Agronegócio', city: 'Sapezal — MT', contactName: 'Eng. Rodrigo Fontana', phone: '(65) 99988-7100', email: 'sustentabilidade@algodoeirasf.com.br', mainProgram: 'EIA/RIMA & Licenciamento Beneficiamento', status: 'Ativo' },
  { id: 'CLI-014', name: 'Complexo Agroindustrial Nova Era', document: '44.102.980/0001-09', registration: 'SEMA-MT LP/LI 77812', segment: 'Indústria', city: 'Lucas do Rio Verde — MT', contactName: 'Diretor Paulo Renato', phone: '(65) 99640-1188', email: 'projetos@agroindustrialnovaera.com.br', mainProgram: 'LP/LI Armazém Graneleiro e Moega', status: 'Pendência Documental' },
  { id: 'CLI-015', name: 'Construtora Vanguarda & Logística Centro-Oeste', document: '29.401.556/0001-21', registration: 'CREA-MT 22019 / eSocial', segment: 'Construtora/Loteamento', city: 'Sinop — MT', contactName: 'Eng. Marcelo Tavares', phone: '(66) 99918-2040', email: 'compras@vanguardaobras.com.br', mainProgram: 'PGR Obras Civis, LTCAT e AET Frota', status: 'Em Prospecção' }
];

// Árvore de Acessos e Perfis de Governança do Sistema (RBAC)
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
    description: 'Operação diária do Livro Caixa, emissão de boletos/NF, baixa de parcelas de contratos e cadastro de clientes. Sem acesso a saques de Pró-Labore da Diretoria nem exclusão definitiva de contratos.',
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
    description: 'Gestão técnica de processos LP/LI/LO, PRAD, PGRS, CAR e Outorgas, atualização de status SEMA-MT e consulta técnica ao CRM de Clientes.',
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
    description: 'Gestão de programas PGR, PCMSO, LTCAT, eventos S-2210/S-2220/S-2240 no eSocial, treinamentos de NRs e carteira de contratos recorrentes.',
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
    description: 'Prospecção de novos clientes no CRM Ambiental & SST, abertura de propostas de contratos e acompanhamento de status comercial.',
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

// Formatadores utilitários
const formatCurrency = (val) => {
  if (val === undefined || val === null || isNaN(val)) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(val);
};

const formatPercent = (val) => {
  if (val === undefined || val === null || isNaN(val)) return '0,0%';
  return `${(val * 100).toFixed(1).replace('.', ',')}%`;
};

// ============================================================================
// 3. COMPONENTE PRINCIPAL DO ERP
// ============================================================================
export default function App() {
  // Navegação
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estados Persistentes (LocalStorage)
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem('martins_erp_transactions_v3');
      return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
    } catch {
      return INITIAL_TRANSACTIONS;
    }
  });

  const [contracts, setContracts] = useState(() => {
    try {
      const saved = localStorage.getItem('martins_erp_contracts_v3');
      return saved ? JSON.parse(saved) : INITIAL_CONTRACTS;
    } catch {
      return INITIAL_CONTRACTS;
    }
  });

  const [clients, setClients] = useState(() => {
    try {
      const saved = localStorage.getItem('martins_erp_clients_v3');
      return saved ? JSON.parse(saved) : INITIAL_CLIENTS;
    } catch {
      return INITIAL_CLIENTS;
    }
  });

  const [clientSegments, setClientSegments] = useState(() => {
    try {
      const saved = localStorage.getItem('martins_erp_client_segments');
      return saved ? JSON.parse(saved) : ['Agronegócio', 'Indústria', 'Construtora/Loteamento', 'Transporte/Logística', 'Comércio/Serviços', 'Saúde'];
    } catch {
      return ['Agronegócio', 'Indústria', 'Construtora/Loteamento', 'Transporte/Logística', 'Comércio/Serviços', 'Saúde'];
    }
  });

  const [clientStatuses, setClientStatuses] = useState(() => {
    try {
      const saved = localStorage.getItem('martins_erp_client_statuses');
      return saved ? JSON.parse(saved) : ['Ativo', 'Em Prospecção', 'Pendência Documental', 'Inativo'];
    } catch {
      return ['Ativo', 'Em Prospecção', 'Pendência Documental', 'Inativo'];
    }
  });

  const [accessRoles, setAccessRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('martins_erp_roles_v3');
      return saved ? JSON.parse(saved) : INITIAL_ACCESS_ROLES;
    } catch {
      return INITIAL_ACCESS_ROLES;
    }
  });

  const [activeRoleId, setActiveRoleId] = useState('ROLE-01');
  const [authLoggedIn, setAuthLoggedIn] = useState(false);
  const [authEmailInput, setAuthEmailInput] = useState('');
  const [authPasswordInput, setAuthPasswordInput] = useState('');
  const [authErrorMsg, setAuthErrorMsg] = useState('');

  const [params, setParams] = useState(() => {
    try {
      const saved = localStorage.getItem('martins_erp_params_v3');
      return saved ? JSON.parse(saved) : INITIAL_PARAMETERS;
    } catch {
      return INITIAL_PARAMETERS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('martins_erp_transactions_v3', JSON.stringify(transactions));
    } catch (e) {
      console.error(e);
    }
  }, [transactions]);

  useEffect(() => {
    try {
      localStorage.setItem('martins_erp_contracts_v3', JSON.stringify(contracts));
    } catch (e) {
      console.error(e);
    }
  }, [contracts]);

  useEffect(() => {
    try {
      localStorage.setItem('martins_erp_clients_v3', JSON.stringify(clients));
      localStorage.setItem('martins_erp_client_segments', JSON.stringify(clientSegments));
      localStorage.setItem('martins_erp_client_statuses', JSON.stringify(clientStatuses));
    } catch (e) {
      console.error(e);
    }
  }, [clients, clientSegments, clientStatuses]);

  // Perfil de Acesso Ativo no Simulador
  const currentRole = useMemo(() => {
    return accessRoles.find((r) => r.id === activeRoleId) || accessRoles[0];
  }, [accessRoles, activeRoleId]);

  const hasPermission = (moduleKey, actionKey = 'view') => {
    if (!currentRole || !currentRole.permissions[moduleKey]) return true;
    return Boolean(currentRole.permissions[moduleKey][actionKey]);
  };

  // Estados de Filtro — Livro Caixa
  const [txSearch, setTxSearch] = useState('');
  const [txMonthFilter, setTxMonthFilter] = useState('Todos');
  const [txTypeFilter, setTxTypeFilter] = useState('Todos');
  const [txCategoryFilter, setTxCategoryFilter] = useState('Todas');
  const [txStatusFilter, setTxStatusFilter] = useState('Todos');

  // Estados de Filtro — Contratos
  const [ctSearch, setCtSearch] = useState('');
  const [ctStatusFilter, setCtStatusFilter] = useState('Todos');

  // Estados de Filtro — Clientes (CRM)
  const [cliSearch, setCliSearch] = useState('');
  const [cliSegmentFilter, setCliSegmentFilter] = useState('Todos');
  const [cliStatusFilter, setCliStatusFilter] = useState('Todos');

  // Estados de Modais
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

  // Formulário de Lançamento
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

  // Formulário de Contrato
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

  // Formulário de Cliente (CRM)
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
  // 4. MOTOR CONTÁBIL E FINANCEIRO (MEMOIZED CALCULATIONS)
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
    const margemLiquidaAnual =
      receitaBrutaAnual > 0 ? lucroLiquidoAnual / receitaBrutaAnual : 0;

    const proLaboreCat = 'Saque de Pró-Labore — Sócio Maikon Martins';
    const proLaboreTotalAnual = transactions
      .filter((t) => t.category === proLaboreCat)
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const proLaborePago = transactions
      .filter(
        (t) => t.category === proLaboreCat && t.status === 'Pago / Recebido'
      )
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const proLaborePendente = proLaboreTotalAnual - proLaborePago;

    const entradasRealizadas = transactions
      .filter((t) => t.type === 'Entrada' && t.status === 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const saidasRealizadas = transactions
      .filter((t) => t.type === 'Saída' && t.status === 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const saldoAtualCaixa =
      Number(params.saldoInicialCaixa || 0) +
      entradasRealizadas -
      saidasRealizadas;

    const contasAReceber = transactions
      .filter((t) => t.type === 'Entrada' && t.status !== 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    const contasAPagar = transactions
      .filter((t) => t.type === 'Saída' && t.status !== 'Pago / Recebido')
      .reduce((acc, cur) => acc + Number(cur.amount || 0), 0);

    let runningBalance = Number(params.saldoInicialCaixa || 0);
    const monthlySeries = MONTHS.map((m) => {
      const mTxs = transactions.filter((t) => t.month === m);
      const entradas = mTxs
        .filter((t) => t.type === 'Entrada')
        .reduce((a, b) => a + Number(b.amount || 0), 0);
      const saidas = mTxs
        .filter((t) => t.type === 'Saída')
        .reduce((a, b) => a + Number(b.amount || 0), 0);
      const proLaboreMes = mTxs
        .filter((t) => t.category === proLaboreCat)
        .reduce((a, b) => a + Number(b.amount || 0), 0);
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
  // 5. AÇÕES DO SISTEMA (CRUD LANÇAMENTOS, CONTRATOS, CLIENTES E ACESSOS)
  // ============================================================================
  const handleToggleStatus = (id) => {
    if (!hasPermission('lancamentos', 'edit')) {
      showToast('Acesso restrito: seu perfil atual não possui permissão para alterar status no Livro Caixa.');
      return;
    }
    setTransactions((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const nextStatus =
          item.status === 'Pago / Recebido' ? 'Pendente' : 'Pago / Recebido';
        return { ...item, status: nextStatus };
      })
    );
    showToast('Status do lançamento atualizado com sucesso!');
  };

  const confirmDeleteTransaction = () => {
    if (!deleteTxTarget) return;
    setTransactions((prev) => prev.filter((item) => item.id !== deleteTxTarget.id));
    showToast(`Lançamento ${deleteTxTarget.id} excluído permanentemente.`);
    setDeleteTxTarget(null);
  };

  const confirmDeleteContract = () => {
    if (!deleteContractTarget) return;
    const contractId = deleteContractTarget.id;
    setContracts((prev) => prev.filter((c) => c.id !== contractId));
    if (deleteLinkedTransactions) {
      setTransactions((prev) => prev.filter((t) => t.contractId !== contractId));
      showToast(`Contrato ${contractId} e seus lançamentos vinculados foram excluídos!`);
    } else {
      showToast(`Contrato ${contractId} excluído com sucesso!`);
    }
    setDeleteContractTarget(null);
    setDeleteLinkedTransactions(false);
  };

  // CRUD de Clientes (CRM)
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

  const handleSaveClient = (e) => {
    e.preventDefault();
    if (!cliForm.name) return;
    if (editingClient) {
      setClients((prev) =>
        prev.map((c) => (c.id === editingClient.id ? { ...c, ...cliForm } : c))
      );
      showToast(`Cadastro do cliente ${editingClient.id} atualizado!`);
    } else {
      const nextNum = clients.length + 1;
      const newId = `CLI-${String(nextNum).padStart(3, '0')}`;
      setClients((prev) => [{ id: newId, ...cliForm }, ...prev]);
      showToast(`Novo cliente ${newId} cadastrado no CRM Ambiental & SST!`);
    }
    setShowClientModal(false);
  };

  const confirmDeleteClient = () => {
    if (!deleteClientTarget) return;
    setClients((prev) => prev.filter((c) => c.id !== deleteClientTarget.id));
    showToast(`Cliente ${deleteClientTarget.name} removido da base CRM.`);
    setDeleteClientTarget(null);
  };

  const handleAddSegment = (e) => {
    e.preventDefault();
    if (!newSegmentInput.trim()) return;
    if (clientSegments.includes(newSegmentInput.trim())) {
      showToast('Este segmento econômico já existe.');
      return;
    }
    setClientSegments([...clientSegments, newSegmentInput.trim()]);
    setNewSegmentInput('');
    showToast('Novo segmento econômico cadastrado!');
  };

  const handleDeleteSegment = (seg) => {
    if (clientSegments.length <= 1) {
      showToast('É necessário manter pelo menos um segmento econômico.');
      return;
    }
    setClientSegments(clientSegments.filter((s) => s !== seg));
    showToast(`Segmento "${seg}" removido.`);
  };

  const handleAddStatus = (e) => {
    e.preventDefault();
    if (!newStatusInput.trim()) return;
    if (clientStatuses.includes(newStatusInput.trim())) {
      showToast('Este status já existe.');
      return;
    }
    setClientStatuses([...clientStatuses, newStatusInput.trim()]);
    setNewStatusInput('');
    showToast('Novo status de cliente cadastrado!');
  };

  const handleDeleteStatus = (st) => {
    if (clientStatuses.length <= 1) {
      showToast('É necessário manter pelo menos um status.');
      return;
    }
    setClientStatuses(clientStatuses.filter((s) => s !== st));
    showToast(`Status "${st}" removido.`);
  };

  // Governança e Árvore de Acessos
  const handleToggleRolePermission = (roleId, moduleKey, actionKey) => {
    if (roleId === 'ROLE-01') {
      showToast('O Nível 1 Master (Sócio-Diretor Maikon Martins) possui acesso total permanente.');
      return;
    }
    setAccessRoles((prev) =>
      prev.map((role) => {
        if (role.id !== roleId) return role;
        const currentVal = role.permissions[moduleKey]?.[actionKey] || false;
        return {
          ...role,
          permissions: {
            ...role.permissions,
            [moduleKey]: {
              ...role.permissions[moduleKey],
              [actionKey]: !currentVal
            }
          }
        };
      })
    );
    showToast('Matriz de permissões atualizada em tempo real!');
  };

  const handleCreateCustomRole = (e) => {
    e.preventDefault();
    if (!newRoleForm.name || !newRoleForm.holder) return;
    const newId = `ROLE-0${accessRoles.length + 1}`;
    const generatedEmail = newRoleForm.email || `${newRoleForm.holder.toLowerCase().replace(/\s+/g, '')}@grupomartins.eng.br`;
    const generatedPassword = newRoleForm.password || 'martins2026';
    const created = {
      id: newId,
      level: newRoleForm.level,
      name: newRoleForm.name,
      holder: newRoleForm.holder,
      email: generatedEmail,
      password: generatedPassword,
      badgeColor: 'bg-indigo-800 text-white',
      description: newRoleForm.description || 'Perfil customizado criado pela Diretoria com acesso autenticado.',
      permissions: {
        dashboard: { view: true, create: false, edit: false, delete: false, approve: false },
        prolabore: { view: false, create: false, edit: false, delete: false, approve: false },
        lancamentos: { view: true, create: true, edit: false, delete: false, approve: false },
        dre: { view: false, create: false, edit: false, delete: false, approve: false },
        contratos: { view: true, create: true, edit: true, delete: false, approve: false },
        clientes: { view: true, create: true, edit: true, delete: false, approve: false },
        acessos: { view: false, create: false, edit: false, delete: false, approve: false }
      }
    };
    setAccessRoles((prev) => [...prev, created]);
    setNewRoleForm({ level: 'Nível Especial', name: '', holder: '', email: '', password: 'martins2026', description: '' });
    setShowUserRoleModal(false);
    showToast(`Novo perfil criado! E-mail: ${generatedEmail} | Senha: ${generatedPassword}`);
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

  const handleSaveTransaction = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(String(txForm.amount).replace(',', '.'));
    if (!txForm.entity || isNaN(numericAmount) || numericAmount <= 0) return;

    if (editingTx) {
      setTransactions((prev) =>
        prev.map((t) =>
          t.id === editingTx.id ? { ...t, ...txForm, amount: numericAmount } : t
        )
      );
      showToast(`Lançamento ${editingTx.id} atualizado!`);
    } else {
      const nextNum = transactions.length + 15;
      const newId = `MT-${String(nextNum).padStart(3, '0')}`;
      const newTx = {
        id: newId,
        ...txForm,
        amount: numericAmount
      };
      setTransactions((prev) => [newTx, ...prev]);
      showToast(`Novo lançamento ${newId} registrado no Livro Caixa!`);
    }
    setShowTxModal(false);
  };

  const handleSaveContract = (e) => {
    e.preventDefault();
    const contractVal = parseFloat(String(ctForm.contractValue).replace(',', '.')) || 0;
    const receivedVal = parseFloat(String(ctForm.receivedValue).replace(',', '.')) || 0;
    const directVal = parseFloat(String(ctForm.directCosts).replace(',', '.')) || 0;
    const nInstallments = parseInt(ctForm.installmentsCount) || 1;
    if (!ctForm.client || contractVal <= 0) return;

    if (editingContract) {
      setContracts((prev) =>
        prev.map((c) =>
          c.id === editingContract.id
            ? {
                ...c,
                ...ctForm,
                contractValue: contractVal,
                receivedValue: receivedVal,
                directCosts: directVal
              }
            : c
        )
      );
      showToast(`Contrato ${editingContract.id} atualizado com sucesso!`);
    } else {
      const nextNum = contracts.length + 1;
      const newId = `CT-2026-${String(nextNum).padStart(2, '0')}`;
      const newContract = {
        id: newId,
        ...ctForm,
        contractValue: contractVal,
        receivedValue: receivedVal,
        directCosts: directVal
      };
      
      // Gerar parcelas no Livro Caixa automaticamente
      const installmentVal = contractVal / nInstallments;
      const newTxs = [];
      for (let i = 0; i < nInstallments; i++) {
        const instDate = ctForm.installmentDates[i] || ctForm.deadline;
        const monthNames = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };
        const monthNum = instDate.split('-')[1] || '12';
        const monthStr = monthNames[monthNum] || 'Dez';

        newTxs.push({
          id: `MT-${String(transactions.length + 15 + i).padStart(3, '0')}`,
          date: instDate,
          month: monthStr,
          type: 'Entrada',
          category: 'Licenciamento Ambiental (LP / LI / LO)',
          entity: ctForm.client,
          contractId: newId,
          description: `Parcela ${i + 1}/${nInstallments} — Contrato ${newId} (${ctForm.service})`,
          paymentMethod: 'Boleto Bancário Faturado',
          status: 'Pendente',
          amount: installmentVal
        });
      }

      setContracts((prev) => [...prev, newContract]);
      setTransactions((prev) => [...newTxs, ...prev]);
      showToast(`Contrato técnico ${newId} cadastrado com ${nInstallments} parcela(s) gerada(s) no Caixa!`);
    }
    setShowContractModal(false);
  };

  const handleReceiveContractInstallment = (e) => {
    e.preventDefault();
    if (!receiveInstallmentContract) return;
    const val = parseFloat(String(installmentAmount).replace(',', '.'));
    if (isNaN(val) || val <= 0) return;

    // Atualiza o contrato
    setContracts((prev) =>
      prev.map((c) => {
        if (c.id !== receiveInstallmentContract.id) return c;
        const newReceived = Math.min(c.contractValue, c.receivedValue + val);
        const newStatus =
          newReceived >= c.contractValue ? 'Concluído / Licença Emitida' : c.status;
        return { ...c, receivedValue: newReceived, status: newStatus };
      })
    );

    // Gera lançamento automático no Livro Caixa
    const newId = `MT-${String(transactions.length + 15).padStart(3, '0')}`;
    const newTx = {
      id: newId,
      date: '2026-11-10',
      month: 'Nov',
      type: 'Entrada',
      category: 'Licenciamento Ambiental (LP / LI / LO)',
      entity: receiveInstallmentContract.client,
      contractId: receiveInstallmentContract.id,
      description: `Recebimento de parcela — Contrato ${receiveInstallmentContract.id} (${receiveInstallmentContract.service})`,
      paymentMethod: 'PIX Empresarial',
      status: 'Pago / Recebido',
      amount: val
    };
    setTransactions((prev) => [newTx, ...prev]);
    setReceiveInstallmentContract(null);
    setInstallmentAmount('');
    showToast(`Parcela de ${formatCurrency(val)} recebida e lançada no Caixa!`);
  };

  const handleResetDatabase = () => {
    setTransactions(INITIAL_TRANSACTIONS);
    setContracts(INITIAL_CONTRACTS);
    setClients(INITIAL_CLIENTS);
    setAccessRoles(INITIAL_ACCESS_ROLES);
    setActiveRoleId('ROLE-01');
    setParams(INITIAL_PARAMETERS);
    localStorage.removeItem('martins_erp_transactions_v3');
    localStorage.removeItem('martins_erp_contracts_v3');
    localStorage.removeItem('martins_erp_clients_v3');
    localStorage.removeItem('martins_erp_roles_v3');
    localStorage.removeItem('martins_erp_params_v3');
    showToast('Base de dados 2026 restaurada para os valores originais!');
  };

  const handleExportCSV = () => {
    const headers = [
      'ID',
      'Data',
      'Mes',
      'Tipo',
      'Categoria',
      'Favorecido_Cliente_Socio',
      'Contrato',
      'Descricao',
      'Forma_Pagamento',
      'Status',
      'Valor'
    ];
    const rows = transactions.map((t) => [
      t.id,
      t.date,
      t.month,
      t.type,
      `"${t.category}"`,
      `"${t.entity}"`,
      t.contractId,
      `"${t.description}"`,
      `"${t.paymentMethod}"`,
      t.status,
      t.amount
    ]);
    const csvContent =
      'data:text/csv;charset=utf-8,\uFEFF' +
      [headers.join(';'), ...rows.map((e) => e.join(';'))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Livro_Caixa_Grupo_Martins_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Arquivo CSV exportado com sucesso!');
  };

  // Filtragem Livro Caixa
  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchSearch =
        t.entity.toLowerCase().includes(txSearch.toLowerCase()) ||
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

  // Filtragem Contratos
  const filteredContracts = useMemo(() => {
    return contracts.filter((c) => {
      const matchSearch =
        c.client.toLowerCase().includes(ctSearch.toLowerCase()) ||
        c.service.toLowerCase().includes(ctSearch.toLowerCase()) ||
        c.id.toLowerCase().includes(ctSearch.toLowerCase()) ||
        c.agency.toLowerCase().includes(ctSearch.toLowerCase());
      const matchStatus = ctStatusFilter === 'Todos' || c.status === ctStatusFilter;
      return matchSearch && matchStatus;
    });
  }, [contracts, ctSearch, ctStatusFilter]);

  // Filtragem Clientes CRM
  const filteredClients = useMemo(() => {
    return clients.filter((cli) => {
      const matchSearch =
        cli.name.toLowerCase().includes(cliSearch.toLowerCase()) ||
        cli.document.toLowerCase().includes(cliSearch.toLowerCase()) ||
        cli.city.toLowerCase().includes(cliSearch.toLowerCase()) ||
        cli.contactName.toLowerCase().includes(cliSearch.toLowerCase()) ||
        cli.id.toLowerCase().includes(cliSearch.toLowerCase());
      const matchSeg = cliSegmentFilter === 'Todos' || cli.segment === cliSegmentFilter;
      const matchStatus = cliStatusFilter === 'Todos' || cli.status === cliStatusFilter;
      return matchSearch && matchSeg && matchStatus;
    });
  }, [clients, cliSearch, cliSegmentFilter, cliStatusFilter]);

  // Cores para Gráficos
  const PIE_COLORS = ['#1B3B2B', '#2D5A43', '#3B7A57', '#557A46', '#7A9A8B'];

  // ============================================================================
  // 6. RENDERIZAÇÃO DOS MÓDULOS
  // ============================================================================
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
      {/* Notificação Flutuante (Toast) */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-[#1B3B2B] text-[#F8F3EF] px-5 py-3.5 rounded-xl shadow-2xl border border-[#3B7A57] animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* ====================================================================
          SIDEBAR CORPORATIVA — GRUPO MARTINS
      ==================================================================== */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#1B3B2B] text-[#F8F3EF] flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Topo com a Logo Oficial do Grupo Martins */}
          <div className="p-4 border-b border-[#2D5A43]">
            <GrupoMartinsLogo size="md" />
          </div>

          {/* Card do Sócio-Diretor Maikon Martins / Perfil Ativo */}
          <div className="mx-4 mt-4 p-3.5 rounded-xl bg-[#244B38] border border-[#3B7A57]/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F8F3EF] text-[#1B3B2B] font-extrabold flex items-center justify-center text-sm shrink-0 shadow">
              MM
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider truncate">
                {currentRole.level}
              </div>
              <div className="text-sm font-bold text-white truncate">
                {currentRole.holder}
              </div>
              <div className="text-[11px] text-emerald-100/80 truncate">
                Pró-Labore Pago: {formatCurrency(financialData.proLaborePago)}
              </div>
            </div>
          </div>

          {/* Menu de Navegação */}
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
                      showToast(`Módulo bloqueado para o perfil "${currentRole.name}". Altere o Simulador de Perfil no topo para Nível 1 Master.`);
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
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-[#1B3B2B]' : allowed ? 'text-emerald-300' : 'text-emerald-600'
                      }`}
                    />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {!allowed ? (
                    <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  ) : (
                    item.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ${
                          isActive
                            ? 'bg-[#1B3B2B] text-[#F8F3EF]'
                            : 'bg-[#2D5A43] text-emerald-200'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Rodapé da Sidebar */}
        <div className="p-4 border-t border-[#2D5A43] space-y-2">
          <button
            onClick={handleResetDatabase}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-[#244B38] hover:bg-[#2D5A43] text-emerald-200 transition"
            title="Restaura os 72 lançamentos, 14 contratos e 15 clientes originais"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restaurar Base Original 2026
          </button>
          <div className="text-[11px] text-center text-emerald-200/60">
            Grupo Martins ERP v3.5 • Exercício 2026
          </div>
        </div>
      </aside>

      {/* ====================================================================
          ÁREA DE CONTEÚDO PRINCIPAL
      ==================================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER EXECUTIVO SUPERIOR COM SIMULADOR DE PERFIL DE ACESSO */}
        <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#1B3B2B] text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E6F4EA] text-[#1B3B2B] border border-[#B7DFC5]">
                  ERP CORPORATIVO 2026
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

          {/* Autenticação e Perfil Ativo (Governança Segura) */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 bg-[#F8F3EF] px-3 py-1.5 rounded-xl border border-[#D5CFC7]">
              <KeyRound className="w-3.5 h-3.5 text-[#1B3B2B] shrink-0" />
              <div className="text-[10px] font-bold uppercase text-slate-500 hidden md:block">
                Sessão Autenticada:
              </div>
              <span className="text-xs font-extrabold text-[#1B3B2B]">
                {currentRole.level} ({currentRole.holder})
              </span>
              <button
                onClick={() => setAuthLoggedIn(false)}
                className="ml-2 px-2 py-0.5 rounded bg-[#1B3B2B] text-white text-[10px] font-bold hover:bg-[#2D5A43]"
                title="Encerrar Sessão e Bloquear Troca Livre de Perfil"
              >
                Bloquear / Sair
              </button>
            </div>

            {hasPermission('prolabore', 'create') && (
              <button
                onClick={() => openNewTransactionModal('prolabore')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#F8F3EF] text-[#1B3B2B] border border-[#D5CFC7] hover:bg-[#EFE7DF] transition shadow-sm"
              >
                <UserCheck className="w-4 h-4 text-[#2D5A43]" />
                Saque Pró-Labore
              </button>
            )}

            {hasPermission('lancamentos', 'create') && (
              <button
                onClick={() => openNewTransactionModal()}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] transition shadow"
              >
                <Plus className="w-4 h-4" />
                Novo Lançamento
              </button>
            )}
          </div>
        </header>

        {/* CONTEÚDO DINÂMICO DAS ABAS */}
        <main className="p-4 lg:p-8 space-y-6 max-w-[1600px] w-full mx-auto">
          {/* ================================================================
              ABA 1: PAINEL EXECUTIVO (DASHBOARD)
          ================================================================ */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Banner Institucional com Logo e Resumo do Sócio */}
              <div className="bg-gradient-to-r from-[#1B3B2B] via-[#244B38] to-[#2D5A43] rounded-2xl p-5 text-white shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <GrupoMartinsLogo size="compact" theme="cream" />
                  <div className="text-center sm:text-left">
                    <div className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                      Gestão Financeira, Ambiental & SST
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold mt-0.5">
                      Painel Executivo Anual — Exercício 2026
                    </h2>
                    <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
                      Sócio-Diretor Responsável: <strong>{params.socioDiretor}</strong> • Licenciamento SEMA-MT, Outorgas, CAR, PGR, LTCAT e eSocial SST.
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
                    <div className="text-[10px] text-emerald-200/80">
                      Inclui {formatCurrency(params.saldoInicialCaixa)} de saldo inicial
                    </div>
                  </div>
                  <div className="h-9 w-[1px] bg-emerald-600/40 mx-1" />
                  <div className="text-right">
                    <div className="text-[11px] text-amber-300 uppercase font-semibold">
                      Pró-Labore (Maikon Martins)
                    </div>
                    <div className="text-xl font-black text-amber-300">
                      {formatCurrency(financialData.proLaboreTotalAnual)}
                    </div>
                    <div className="text-[10px] text-emerald-200/80">
                      {formatCurrency(financialData.proLaborePago)} já sacados no ano
                    </div>
                  </div>
                </div>
              </div>

              {/* 7 CARTÕES DE KPIs EXECUTIVOS (IDÊNTICOS À PLANILHA V3) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                {/* KPI 1 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-[#1B3B2B] shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
                    <span>Receita Bruta (DRE)</span>
                    <TrendingUp className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div className="text-lg font-black text-[#1B3B2B] mt-2">
                    {formatCurrency(financialData.receitaBrutaAnual)}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium mt-1">
                    Meta Anual: {formatCurrency(params.metaMensalReceita * 12)}
                  </div>
                </div>

                {/* KPI 2 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-rose-700 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
                    <span>Custos + Despesas</span>
                    <TrendingDown className="w-4 h-4 text-rose-700" />
                  </div>
                  <div className="text-lg font-black text-rose-700 mt-2">
                    {formatCurrency(financialData.saidasTotaisAnual)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {formatPercent(
                      financialData.receitaBrutaAnual > 0
                        ? financialData.saidasTotaisAnual / financialData.receitaBrutaAnual
                        : 0
                    )}{' '}
                    da receita bruta
                  </div>
                </div>

                {/* KPI 3 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-emerald-600 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
                    <span>Lucro Líquido Empresa</span>
                    <Award className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-lg font-black text-emerald-700 mt-2">
                    {formatCurrency(financialData.lucroLiquidoAnual)}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-1">
                    Margem Líquida: {formatPercent(financialData.margemLiquidaAnual)}
                  </div>
                </div>

                {/* KPI 4 — PRÓ-LABORE MAIKON MARTINS */}
                <div
                  onClick={() => setActiveTab('prolabore')}
                  className="bg-[#F8F3EF] rounded-2xl p-4 border border-[#D5CFC7] border-t-4 border-t-[#2D5A43] shadow-sm cursor-pointer hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#1B3B2B] uppercase">
                    <span>Pró-Labore (Maikon)</span>
                    <UserCheck className="w-4 h-4 text-[#2D5A43]" />
                  </div>
                  <div className="text-lg font-black text-[#1B3B2B] mt-2">
                    {formatCurrency(financialData.proLaboreTotalAnual)}
                  </div>
                  <div className="text-[11px] text-[#2D5A43] font-semibold mt-1">
                    Pago: {formatCurrency(financialData.proLaborePago)} (Ver Conta →)
                  </div>
                </div>

                {/* KPI 5 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-teal-700 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
                    <span>Saldo Atual Caixa</span>
                    <Wallet className="w-4 h-4 text-teal-700" />
                  </div>
                  <div className="text-lg font-black text-teal-800 mt-2">
                    {formatCurrency(financialData.saldoAtualCaixa)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Disponibilidade imediata
                  </div>
                </div>

                {/* KPI 6 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-amber-500 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
                    <span>Contas a Receber</span>
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-lg font-black text-amber-600 mt-2">
                    {formatCurrency(financialData.contasAReceber)}
                  </div>
                  <div className="text-[11px] text-amber-700 mt-1">
                    Parcelas de clientes em aberto
                  </div>
                </div>

                {/* KPI 7 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 border-t-4 border-t-orange-600 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
                    <span>Contas a Pagar</span>
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-lg font-black text-orange-700 mt-2">
                    {formatCurrency(financialData.contasAPagar)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Provisionado Nov/Dez
                  </div>
                </div>
              </div>

              {/* GRÁFICOS INTERATIVOS */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Gráfico Principal: Evolução Mensal */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-extrabold text-[#1B3B2B]">
                        Evolução Financeira Mensal (Jan a Dez 2026)
                      </h3>
                      <p className="text-xs text-slate-500">
                        Comparativo de Receitas Brutas, Saídas Totais e Resultado Líquido
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                      Meta Mensal: {formatCurrency(params.metaMensalReceita)}
                    </span>
                  </div>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={financialData.monthlySeries}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                        <YAxis
                          tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`}
                          tick={{ fontSize: 11 }}
                        />
                        <Tooltip
                          formatter={(value) => formatCurrency(value)}
                          contentStyle={{
                            borderRadius: '12px',
                            borderColor: '#CBD5E1'
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                        <Bar
                          dataKey="entradas"
                          name="Receita Bruta (R$)"
                          fill="#1B3B2B"
                          radius={[6, 6, 0, 0]}
                        />
                        <Bar
                          dataKey="saidas"
                          name="Saídas Totais (R$)"
                          fill="#C53030"
                          radius={[6, 6, 0, 0]}
                        />
                        <Line
                          type="monotone"
                          dataKey="resultadoLiquido"
                          name="Lucro Líquido (R$)"
                          stroke="#3B7A57"
                          strokeWidth={3}
                          dot={{ r: 4, fill: '#3B7A57' }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Gráfico de Pizza: Receita por Linha Ambiental & SST */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#1B3B2B]">
                      Faturamento por Área Técnica
                    </h3>
                    <p className="text-xs text-slate-500">
                      Participação (Share %) Ambiental vs. Segurança do Trabalho
                    </p>
                  </div>
                  <div className="h-56 w-full my-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={financialData.revenueByCategory}
                          dataKey="value"
                          nameKey="shortName"
                          cx="50%"
                          cy="50%"
                          innerRadius={48}
                          outerRadius={80}
                          paddingAngle={3}
                        >
                          {financialData.revenueByCategory.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={PIE_COLORS[index % PIE_COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => formatCurrency(value)} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2">
                    {financialData.revenueByCategory.map((item, idx) => (
                      <div
                        key={item.category}
                        className="flex items-center justify-between text-xs border-b border-slate-100 pb-1.5"
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <span
                            className="w-3 h-3 rounded-sm shrink-0"
                            style={{ backgroundColor: PIE_COLORS[idx % PIE_COLORS.length] }}
                          />
                          <span className="text-slate-700 font-medium truncate">
                            {item.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-bold text-[#1B3B2B]">
                            {formatCurrency(item.value)}
                          </span>
                          <span className="text-[11px] text-slate-500 w-11 text-right">
                            {formatPercent(item.share)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TABELA MENSAL CONSOLIDADA + ESTRUTURA DE SAÍDAS */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Tabela de Evolução Mensal */}
                <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 bg-[#1B3B2B] text-white flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider">
                        1. Evolução Financeira Mensal e Saques do Sócio (2026)
                      </h3>
                    </div>
                    <span className="text-xs text-emerald-200">
                      Saldo Inicial: {formatCurrency(params.saldoInicialCaixa)}
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-100 text-slate-600 border-b border-slate-200 font-bold uppercase">
                          <th className="py-3 px-3">Mês</th>
                          <th className="py-3 px-3 text-right">Receita Bruta</th>
                          <th className="py-3 px-3 text-right">Saídas Totais</th>
                          <th className="py-3 px-3 text-right bg-[#F8F3EF] text-[#1B3B2B]">
                            Pró-Labore (Maikon)
                          </th>
                          <th className="py-3 px-3 text-right">Lucro Líquido</th>
                          <th className="py-3 px-3 text-right">Saldo Acumulado</th>
                          <th className="py-3 px-3 text-center">Margem %</th>
                          <th className="py-3 px-3 text-center">Status Meta</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {financialData.monthlySeries.map((row) => (
                          <tr key={row.month} className="hover:bg-slate-50">
                            <td className="py-2.5 px-3 font-bold text-[#1B3B2B]">
                              {row.month}/26
                            </td>
                            <td className="py-2.5 px-3 text-right font-semibold text-emerald-800">
                              {formatCurrency(row.entradas)}
                            </td>
                            <td className="py-2.5 px-3 text-right text-rose-700">
                              {formatCurrency(row.saidas)}
                            </td>
                            <td className="py-2.5 px-3 text-right font-bold bg-[#F8F3EF]/60 text-[#1B3B2B]">
                              {formatCurrency(row.proLaboreMes)}
                            </td>
                            <td className="py-2.5 px-3 text-right font-bold text-emerald-700">
                              {formatCurrency(row.resultadoLiquido)}
                            </td>
                            <td className="py-2.5 px-3 text-right font-semibold text-slate-800">
                              {formatCurrency(row.saldoAcumulado)}
                            </td>
                            <td className="py-2.5 px-3 text-center font-medium text-slate-600">
                              {formatPercent(row.margem)}
                            </td>
                            <td className="py-2.5 px-3 text-center">
                              {row.atingiuMeta ? (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                  Meta Atingida
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                                  Abaixo da Meta
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-[#E6EFEA] font-extrabold text-[#1B3B2B] border-t-2 border-[#1B3B2B]">
                          <td className="py-3 px-3">TOTAL 2026</td>
                          <td className="py-3 px-3 text-right">
                            {formatCurrency(financialData.receitaBrutaAnual)}
                          </td>
                          <td className="py-3 px-3 text-right text-rose-800">
                            {formatCurrency(financialData.saidasTotaisAnual)}
                          </td>
                          <td className="py-3 px-3 text-right bg-[#F8F3EF] text-[#1B3B2B]">
                            {formatCurrency(financialData.proLaboreTotalAnual)}
                          </td>
                          <td className="py-3 px-3 text-right text-emerald-800">
                            {formatCurrency(financialData.lucroLiquidoAnual)}
                          </td>
                          <td className="py-3 px-3 text-right">
                            {formatCurrency(
                              Number(params.saldoInicialCaixa) +
                                financialData.lucroLiquidoAnual
                            )}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {formatPercent(financialData.margemLiquidaAnual)}
                          </td>
                          <td className="py-3 px-3 text-center">
                            {financialData.receitaBrutaAnual >=
                            params.metaMensalReceita * 12
                              ? 'Meta Anual OK'
                              : 'Em Curso'}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {/* Destinação de Saídas e Destaque Pró-Labore */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="px-5 py-4 bg-[#2D5A43] text-white">
                      <h3 className="text-sm font-bold uppercase tracking-wider">
                        2. Destinação de Saídas e Saques do Sócio
                      </h3>
                    </div>
                    <div className="p-4 space-y-2.5">
                      {financialData.expensesByCategory.map((exp) => (
                        <div
                          key={exp.category}
                          className={`p-2.5 rounded-xl border ${
                            exp.isProLabore
                              ? 'bg-[#F8F3EF] border-[#1B3B2B] shadow-sm'
                              : 'bg-slate-50/70 border-slate-200/80'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span
                              className={`font-bold truncate pr-2 ${
                                exp.isProLabore ? 'text-[#1B3B2B]' : 'text-slate-700'
                              }`}
                            >
                              {exp.isProLabore ? '★ ' : ''}
                              {exp.category}
                            </span>
                            <span
                              className={`font-extrabold shrink-0 ${
                                exp.isProLabore ? 'text-[#1B3B2B]' : 'text-rose-700'
                              }`}
                            >
                              {formatCurrency(exp.value)}
                            </span>
                          </div>
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  exp.isProLabore ? 'bg-[#1B3B2B]' : 'bg-rose-600'
                                }`}
                                style={{ width: `${Math.min(100, exp.share * 100)}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-semibold text-slate-500 w-12 text-right">
                              {formatPercent(exp.share)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              ABA 2: MÓDULO EXCLUSIVO PRÓ-LABORE & CONTA SÓCIO (MAIKON MARTINS)
          ================================================================ */}
          {activeTab === 'prolabore' && (
            <div className="space-y-6">
              {/* Cabeçalho Executivo do Sócio */}
              <div className="bg-[#F8F3EF] border-2 border-[#1B3B2B] rounded-2xl p-6 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <GrupoMartinsLogo size="md" />
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#1B3B2B] text-[#F8F3EF] uppercase tracking-wider">
                      Conta Corrente Societária • Pró-Labore
                    </span>
                    <h2 className="text-2xl font-black text-[#1B3B2B] mt-2">
                      Sócio-Diretor: {params.socioDiretor}
                    </h2>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Controle individualizado de retiradas mensais de Pró-Labore, bonificações e emissão de recibos oficiais do Grupo Martins.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openNewTransactionModal('prolabore')}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] shadow-lg transition"
                  >
                    <Plus className="w-4 h-4" />
                    Registrar Novo Saque de Pró-Labore
                  </button>
                </div>
              </div>

              {/* KPIs do Sócio Maikon Martins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-[#1B3B2B] shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Total Anual Previsto (2026)
                  </div>
                  <div className="text-2xl font-black text-[#1B3B2B] mt-2">
                    {formatCurrency(financialData.proLaboreTotalAnual)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    12 competências (Jan a Dez)
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-emerald-600 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Total Já Sacado (Realizado)
                  </div>
                  <div className="text-2xl font-black text-emerald-700 mt-2">
                    {formatCurrency(financialData.proLaborePago)}
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">
                    Transferido para conta pessoal
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Saldo Pendente de Saque
                  </div>
                  <div className="text-2xl font-black text-amber-600 mt-2">
                    {formatCurrency(financialData.proLaborePendente)}
                  </div>
                  <div className="text-xs text-amber-700 mt-1">
                    Programado para Dezembro/2026
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-teal-600 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Média Mensal de Retirada
                  </div>
                  <div className="text-2xl font-black text-teal-800 mt-2">
                    {formatCurrency(financialData.proLaboreTotalAnual / 12)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Alvo configurado: {formatCurrency(params.proLaboreAlvoMensal)}/mês
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-l-4 border-l-indigo-600 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    % Sobre a Receita Bruta
                  </div>
                  <div className="text-2xl font-black text-indigo-900 mt-2">
                    {formatPercent(
                      financialData.receitaBrutaAnual > 0
                        ? financialData.proLaboreTotalAnual / financialData.receitaBrutaAnual
                        : 0
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Equilíbrio saudável com reserva de 50,1%
                  </div>
                </div>
              </div>

              {/* Tabela Histórica de Saques de Maikon Martins + Emissão de Recibo */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-[#1B3B2B] text-white flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      Histórico de Saques de Pró-Labore — Sócio Maikon Martins (2026)
                    </h3>
                    <p className="text-xs text-emerald-200">
                      Clique em "Emitir Recibo" para visualizar e imprimir o comprovante formal de retirada societária
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-slate-600 border-b border-slate-200 font-bold uppercase text-xs">
                        <th className="py-3.5 px-4">Código</th>
                        <th className="py-3.5 px-4">Data</th>
                        <th className="py-3.5 px-4">Competência</th>
                        <th className="py-3.5 px-4">Favorecido / Sócio</th>
                        <th className="py-3.5 px-4">Descrição da Retirada</th>
                        <th className="py-3.5 px-4">Meio de Pagamento</th>
                        <th className="py-3.5 px-4 text-center">Status</th>
                        <th className="py-3.5 px-4 text-right">Valor do Saque</th>
                        <th className="py-3.5 px-4 text-center">Ações / Recibo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {transactions
                        .filter(
                          (t) =>
                            t.category === 'Saque de Pró-Labore — Sócio Maikon Martins'
                        )
                        .map((tx) => (
                          <tr key={tx.id} className="hover:bg-[#F8F3EF]/50">
                            <td className="py-3 px-4 font-mono font-bold text-[#1B3B2B]">
                              {tx.id}
                            </td>
                            <td className="py-3 px-4 text-slate-600">{tx.date}</td>
                            <td className="py-3 px-4 font-bold text-[#1B3B2B]">
                              {tx.month}/2026
                            </td>
                            <td className="py-3 px-4 font-bold text-slate-800">
                              {tx.entity}
                            </td>
                            <td className="py-3 px-4 text-slate-600">{tx.description}</td>
                            <td className="py-3 px-4 text-slate-600">
                              {tx.paymentMethod}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <button
                                onClick={() => handleToggleStatus(tx.id)}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                                  tx.status === 'Pago / Recebido'
                                    ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                                }`}
                              >
                                {tx.status === 'Pago / Recebido'
                                  ? '✓ Sacado / Pago'
                                  : '⏳ Pendente (Dar Baixa)'}
                              </button>
                            </td>
                            <td className="py-3 px-4 text-right font-extrabold text-[#1B3B2B]">
                              {formatCurrency(tx.amount)}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  onClick={() => setReceiptModalTx(tx)}
                                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#1B3B2B] text-white text-xs font-semibold hover:bg-[#2D5A43] transition"
                                >
                                  <Printer className="w-3.5 h-3.5" />
                                  Recibo
                                </button>
                                <button
                                  onClick={() => openEditTransactionModal(tx)}
                                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                                  title="Editar"
                                >
                                  <Edit3 className="w-4 h-4" />
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

          {/* ================================================================
              ABA 3: LIVRO CAIXA & LANÇAMENTOS (CONTAS A PAGAR E RECEBER)
          ================================================================ */}
          {activeTab === 'lancamentos' && (
            <div className="space-y-5">
              {/* Barra de Subtotais Dinâmicos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">
                      Entradas Filtradas
                    </div>
                    <div className="text-xl font-black text-emerald-700 mt-1">
                      {formatCurrency(
                        filteredTransactions
                          .filter((t) => t.type === 'Entrada')
                          .reduce((a, b) => a + Number(b.amount), 0)
                      )}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">
                      Saídas Filtradas
                    </div>
                    <div className="text-xl font-black text-rose-700 mt-1">
                      {formatCurrency(
                        filteredTransactions
                          .filter((t) => t.type === 'Saída')
                          .reduce((a, b) => a + Number(b.amount), 0)
                      )}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-[#F8F3EF] p-4 rounded-2xl border border-[#D5CFC7] shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#1B3B2B] uppercase">
                      Pró-Labore Pago (Maikon)
                    </div>
                    <div className="text-xl font-black text-[#1B3B2B] mt-1">
                      {formatCurrency(financialData.proLaborePago)}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1B3B2B] text-[#F8F3EF] flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">
                      Saldo Líquido da Seleção
                    </div>
                    <div className="text-xl font-black text-[#1B3B2B] mt-1">
                      {formatCurrency(
                        filteredTransactions.reduce(
                          (a, b) =>
                            a + (b.type === 'Entrada' ? Number(b.amount) : -Number(b.amount)),
                          0
                        )
                      )}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#1B3B2B] flex items-center justify-center">
                    <Wallet className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Barra de Filtros e Pesquisa */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5 flex-1">
                  <div className="relative flex-1 min-w-[220px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={txSearch}
                      onChange={(e) => setTxSearch(e.target.value)}
                      placeholder="Buscar por cliente, Maikon Martins, descrição ou código..."
                      className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#1B3B2B]"
                    />
                  </div>

                  <select
                    value={txMonthFilter}
                    onChange={(e) => setTxMonthFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50"
                  >
                    <option value="Todos">Mês: Todos (Jan-Dez)</option>
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>
                        {m}/2026
                      </option>
                    ))}
                  </select>

                  <select
                    value={txTypeFilter}
                    onChange={(e) => setTxTypeFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50"
                  >
                    <option value="Todos">Tipo: Entrada & Saída</option>
                    <option value="Entrada">Somente Entradas</option>
                    <option value="Saída">Somente Saídas</option>
                  </select>

                  <select
                    value={txCategoryFilter}
                    onChange={(e) => setTxCategoryFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50 max-w-[230px]"
                  >
                    <option value="Todas">Categoria: Todas</option>
                    <optgroup label="Receitas Operacionais">
                      {REVENUE_CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Custos, Despesas e Pró-Labore">
                      {EXPENSE_CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </optgroup>
                  </select>

                  <select
                    value={txStatusFilter}
                    onChange={(e) => setTxStatusFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50"
                  >
                    <option value="Todos">Status: Todos</option>
                    <option value="Pago / Recebido">Pago / Recebido</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Atrasado">Atrasado</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                  >
                    <Download className="w-4 h-4" />
                    Exportar CSV
                  </button>
                  <button
                    onClick={() => openNewTransactionModal()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] transition"
                  >
                    <Plus className="w-4 h-4" />
                    Incluir Lançamento
                  </button>
                </div>
              </div>

              {/* Tabela Completa de Lançamentos */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                        <th className="py-3.5 px-3">ID</th>
                        <th className="py-3.5 px-3">Data</th>
                        <th className="py-3.5 px-2">Mês</th>
                        <th className="py-3.5 px-3">Tipo</th>
                        <th className="py-3.5 px-3">Categoria Plano de Contas</th>
                        <th className="py-3.5 px-3">Cliente / Favorecido / Sócio</th>
                        <th className="py-3.5 px-3">Descrição Técnica</th>
                        <th className="py-3.5 px-3 text-center">Status (Baixa Rápida)</th>
                        <th className="py-3.5 px-3 text-right">Valor (R$)</th>
                        <th className="py-3.5 px-3 text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredTransactions.map((tx) => {
                        const isProLabore =
                          tx.category === 'Saque de Pró-Labore — Sócio Maikon Martins';
                        return (
                          <tr
                            key={tx.id}
                            className={`hover:bg-slate-50 transition ${
                              isProLabore ? 'bg-[#F8F3EF]/60' : ''
                            }`}
                          >
                            <td className="py-2.5 px-3 font-mono font-bold text-slate-700">
                              {tx.id}
                            </td>
                            <td className="py-2.5 px-3 text-slate-600 whitespace-nowrap">
                              {tx.date}
                            </td>
                            <td className="py-2.5 px-2 font-bold text-[#1B3B2B]">
                              {tx.month}
                            </td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                  tx.type === 'Entrada'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-rose-100 text-rose-800'
                                }`}
                              >
                                {tx.type}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-medium text-slate-700 max-w-[210px] truncate">
                              {isProLabore ? '★ ' : ''}
                              {tx.category}
                            </td>
                            <td className="py-2.5 px-3 font-bold text-slate-800 max-w-[190px] truncate">
                              {tx.entity}
                            </td>
                            <td className="py-2.5 px-3 text-slate-600 max-w-[250px] truncate">
                              {tx.description}
                            </td>
                            <td className="py-2.5 px-3 text-center whitespace-nowrap">
                              <button
                                onClick={() => handleToggleStatus(tx.id)}
                                title="Clique para alternar entre Pago/Recebido e Pendente"
                                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition ${
                                  tx.status === 'Pago / Recebido'
                                    ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                    : tx.status === 'Atrasado'
                                    ? 'bg-red-100 text-red-800 hover:bg-red-200'
                                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                                }`}
                              >
                                {tx.status}
                              </button>
                            </td>
                            <td
                              className={`py-2.5 px-3 text-right font-extrabold whitespace-nowrap ${
                                tx.type === 'Entrada' ? 'text-emerald-700' : 'text-rose-700'
                              }`}
                            >
                              {tx.type === 'Saída' ? '- ' : '+ '}
                              {formatCurrency(tx.amount)}
                            </td>
                            <td className="py-2.5 px-3 text-center whitespace-nowrap">
                              <div className="flex items-center justify-center gap-1">
                                <button
                                  onClick={() => openEditTransactionModal(tx)}
                                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                                  title="Editar Lançamento"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                {hasPermission('lancamentos', 'delete') ? (
                                  <button
                                    onClick={() => setDeleteTxTarget(tx)}
                                    className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                                    title="Excluir Lançamento"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                ) : (
                                  <span
                                    className="p-1.5 text-slate-300 cursor-not-allowed"
                                    title="Seu perfil atual não permite excluir lançamentos"
                                  >
                                    <Lock className="w-3.5 h-3.5" />
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              ABA 4: DRE GERENCIAL MENSAL (JAN A DEZ + ANÁLISE VERTICAL AV%)
          ================================================================ */}
          {activeTab === 'dre' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E6EFEA] text-[#1B3B2B] border border-[#B7DFC5]">
                      Demonstrativo Contábil Oficial
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Regime de Competência • Exercício 2026
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1B3B2B]">
                    DRE Gerencial — Grupo Martins (Soluções Ambientais & SST)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Demonstrativo padronizado e formal com separação de custos diretos (CSP), despesas operacionais e Pró-Labore do Sócio-Diretor Maikon Martins.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      const dreHeaders = ['Estrutura DRE Oficial', ...MONTHS.map(m => `${m}/2026`), 'Acumulado 2026', 'AV %'];
                      const totalRec = REVENUE_CATEGORIES.reduce((acc, c) => acc + financialData.getCatMonth(c), 0);
                      const dreRows = [
                        ['1. RECEITA OPERACIONAL BRUTA', ...MONTHS.map(m => REVENUE_CATEGORIES.reduce((acc, c) => acc + financialData.getCatMonth(c, m), 0)), totalRec, '100,0%'],
                        ...REVENUE_CATEGORIES.map(cat => [cat, ...MONTHS.map(m => financialData.getCatMonth(cat, m)), financialData.getCatMonth(cat), formatPercent(totalRec > 0 ? financialData.getCatMonth(cat) / totalRec : 0)]),
                        ['2. DEDUÇÕES E IMPOSTOS SOBRE FATURAMENTO', ...MONTHS.map(m => financialData.getCatMonth(EXPENSE_CATEGORIES[0], m)), financialData.getCatMonth(EXPENSE_CATEGORIES[0]), formatPercent(financialData.getCatMonth(EXPENSE_CATEGORIES[0]) / (totalRec || 1))],
                        ['3. RECEITA OPERACIONAL LÍQUIDA', ...MONTHS.map(m => REVENUE_CATEGORIES.reduce((acc, c) => acc + financialData.getCatMonth(c, m), 0) - financialData.getCatMonth(EXPENSE_CATEGORIES[0], m)), totalRec - financialData.getCatMonth(EXPENSE_CATEGORIES[0]), formatPercent((totalRec - financialData.getCatMonth(EXPENSE_CATEGORIES[0])) / (totalRec || 1))],
                        ['4. CUSTOS DIRETOS DE PROJETOS E CAMPO (CSP)', ...MONTHS.map(m => [1,2,3,4].reduce((acc, idx) => acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx], m), 0)), [1,2,3,4].reduce((acc, idx) => acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx]), 0), formatPercent([1,2,3,4].reduce((acc, idx) => acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx]), 0) / (totalRec || 1))],
                        ...[1,2,3,4].map(idx => [
                          `(-) ${EXPENSE_CATEGORIES[idx]}`,
                          ...MONTHS.map(m => financialData.getCatMonth(EXPENSE_CATEGORIES[idx], m)),
                          financialData.getCatMonth(EXPENSE_CATEGORIES[idx]),
                          formatPercent(financialData.getCatMonth(EXPENSE_CATEGORIES[idx]) / (totalRec || 1))
                        ]),
                        ['5. DESPESAS OPERACIONAIS E PRÓ-LABORE', ...MONTHS.map(m => [5,6,7,8,9,10].reduce((acc, idx) => acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx], m), 0)), [5,6,7,8,9,10].reduce((acc, idx) => acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx]), 0), formatPercent([5,6,7,8,9,10].reduce((acc, idx) => acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx]), 0) / (totalRec || 1))],
                        ...[5,6,7,8,9,10].map(idx => [
                          `(-) ${EXPENSE_CATEGORIES[idx]}`,
                          ...MONTHS.map(m => financialData.getCatMonth(EXPENSE_CATEGORIES[idx], m)),
                          financialData.getCatMonth(EXPENSE_CATEGORIES[idx]),
                          formatPercent(financialData.getCatMonth(EXPENSE_CATEGORIES[idx]) / (totalRec || 1))
                        ]),
                        ['6. LUCRO LÍQUIDO DO EXERCÍCIO', ...financialData.monthlySeries.map(m => m.resultadoLiquido), financialData.lucroLiquidoAnual, formatPercent(financialData.margemLiquidaAnual)]
                      ];
                      const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [dreHeaders.join(';'), ...dreRows.map(r => r.join(';'))].join('\n');
                      const encodedUri = encodeURI(csvContent);
                      const link = document.createElement('a');
                      link.setAttribute('href', encodedUri);
                      link.setAttribute('download', 'DRE_Gerencial_Oficial_Grupo_Martins_2026.csv');
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      showToast('Planilha DRE formal e completa exportada com sucesso!');
                    }}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] transition shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    Baixar Planilha DRE Formal (Excel / CSV)
                  </button>
                  <div className="flex items-center gap-4 bg-[#F8F3EF] px-5 py-3 rounded-xl border border-[#D5CFC7] shadow-xs">
                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-500">
                        Lucro Bruto Consolidado
                      </div>
                      <div className="text-base font-black text-[#1B3B2B]">
                        {formatCurrency(
                          financialData.receitaBrutaAnual -
                            financialData.getCatMonth(EXPENSE_CATEGORIES[0]) -
                            financialData.getCatMonth(EXPENSE_CATEGORIES[1]) -
                            financialData.getCatMonth(EXPENSE_CATEGORIES[2]) -
                            financialData.getCatMonth(EXPENSE_CATEGORIES[3]) -
                            financialData.getCatMonth(EXPENSE_CATEGORIES[4])
                        )}
                      </div>
                    </div>
                    <div className="h-8 w-[1px] bg-slate-300" />
                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-500">
                        Resultado Líquido Final
                      </div>
                      <div className="text-base font-black text-emerald-700">
                        {formatCurrency(financialData.lucroLiquidoAnual)} ({formatPercent(financialData.margemLiquidaAnual)})
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabela DRE Formal e Padronizada */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-extrabold uppercase tracking-wide text-[11px]">
                        <th className="py-4 px-4 min-w-[280px] sticky left-0 bg-[#1B3B2B] z-10 border-r border-[#2D5A43]">
                          Estrutura Contábil DRE (R$)
                        </th>
                        {MONTHS.map((m) => (
                          <th key={m} className="py-4 px-3 text-right font-semibold">
                            {m}/26
                          </th>
                        ))}
                        <th className="py-4 px-4 text-right bg-[#132A1F] font-black border-l border-[#2D5A43]">
                          ACUMULADO
                        </th>
                        <th className="py-4 px-3 text-center bg-[#132A1F] font-black">
                          AV %
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {/* 1. RECEITA BRUTA */}
                      <tr className="bg-[#E6EFEA] font-extrabold text-[#1B3B2B]">
                        <td className="py-3 px-4 sticky left-0 bg-[#E6EFEA] border-r border-slate-200">
                          1. RECEITA OPERACIONAL BRUTA
                        </td>
                        {MONTHS.map((m) => {
                          const val = REVENUE_CATEGORIES.reduce(
                            (acc, c) => acc + financialData.getCatMonth(c, m),
                            0
                          );
                          return (
                            <td key={m} className="py-3 px-3 text-right font-bold text-emerald-900">
                              {formatCurrency(val)}
                            </td>
                          );
                        })}
                        <td className="py-3 px-4 text-right bg-[#D5E6DC] font-black text-[#1B3B2B] border-l border-slate-200">
                          {formatCurrency(financialData.receitaBrutaAnual)}
                        </td>
                        <td className="py-3 px-3 text-center bg-[#D5E6DC] font-black text-[#1B3B2B]">
                          100,0%
                        </td>
                      </tr>

                      {REVENUE_CATEGORIES.map((cat) => {
                        const totalCat = financialData.getCatMonth(cat);
                        return (
                          <tr key={cat} className="hover:bg-slate-50/80 text-slate-700">
                            <td className="py-2.5 px-4 pl-8 sticky left-0 bg-white border-r border-slate-100 font-medium">
                              (+) {cat}
                            </td>
                            {MONTHS.map((m) => (
                              <td key={m} className="py-2.5 px-3 text-right text-slate-600">
                                {formatCurrency(financialData.getCatMonth(cat, m))}
                              </td>
                            ))}
                            <td className="py-2.5 px-4 text-right font-bold text-[#1B3B2B] bg-slate-50/50 border-l border-slate-200">
                              {formatCurrency(totalCat)}
                            </td>
                            <td className="py-2.5 px-3 text-center text-slate-500 bg-slate-50/50">
                              {formatPercent(
                                financialData.receitaBrutaAnual > 0
                                  ? totalCat / financialData.receitaBrutaAnual
                                  : 0
                              )}
                            </td>
                          </tr>
                        );
                      })}

                      {/* 2. DEDUÇÕES E IMPOSTOS */}
                      <tr className="bg-rose-50/60 font-bold text-rose-900">
                        <td className="py-3 px-4 sticky left-0 bg-rose-50 border-r border-rose-200">
                          2. (-) DEDUÇÕES E IMPOSTOS SOBRE FATURAMENTO
                        </td>
                        {MONTHS.map((m) => (
                          <td key={m} className="py-3 px-3 text-right text-rose-800">
                            {formatCurrency(
                              financialData.getCatMonth(EXPENSE_CATEGORIES[0], m)
                            )}
                          </td>
                        ))}
                        <td className="py-3 px-4 text-right bg-rose-100/70 border-l border-rose-200 font-black">
                          {formatCurrency(financialData.getCatMonth(EXPENSE_CATEGORIES[0]))}
                        </td>
                        <td className="py-3 px-3 text-center bg-rose-100/70 font-black">
                          {formatPercent(
                            financialData.getCatMonth(EXPENSE_CATEGORIES[0]) /
                              (financialData.receitaBrutaAnual || 1)
                          )}
                        </td>
                      </tr>

                      {/* 3. RECEITA LÍQUIDA */}
                      <tr className="bg-slate-100 font-extrabold text-slate-900 border-t-2 border-slate-300">
                        <td className="py-3.5 px-4 sticky left-0 bg-slate-100 border-r border-slate-300">
                          3. (=) RECEITA OPERACIONAL LÍQUIDA
                        </td>
                        {MONTHS.map((m) => {
                          const rec = REVENUE_CATEGORIES.reduce(
                            (acc, c) => acc + financialData.getCatMonth(c, m),
                            0
                          );
                          const imp = financialData.getCatMonth(EXPENSE_CATEGORIES[0], m);
                          return (
                            <td key={m} className="py-3.5 px-3 text-right font-bold">
                              {formatCurrency(rec - imp)}
                            </td>
                          );
                        })}
                        <td className="py-3.5 px-4 text-right bg-slate-200/80 border-l border-slate-300 font-black text-slate-950">
                          {formatCurrency(
                            financialData.receitaBrutaAnual -
                              financialData.getCatMonth(EXPENSE_CATEGORIES[0])
                          )}
                        </td>
                        <td className="py-3.5 px-3 text-center bg-slate-200/80 font-black text-slate-950">
                          {formatPercent(
                            (financialData.receitaBrutaAnual -
                              financialData.getCatMonth(EXPENSE_CATEGORIES[0])) /
                              (financialData.receitaBrutaAnual || 1)
                          )}
                        </td>
                      </tr>

                      {/* 4. CUSTOS DIRETOS (CSP) */}
                      <tr className="bg-rose-50/60 font-bold text-rose-900">
                        <td className="py-3 px-4 sticky left-0 bg-rose-50 border-r border-rose-200">
                          4. (-) CUSTOS DIRETOS DE PROJETOS E CAMPO (CSP)
                        </td>
                        {MONTHS.map((m) => {
                          const csp = [1, 2, 3, 4].reduce(
                            (acc, idx) =>
                              acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx], m),
                            0
                          );
                          return (
                            <td key={m} className="py-3 px-3 text-right text-rose-800">
                              {formatCurrency(csp)}
                            </td>
                          );
                        })}
                        <td className="py-3 px-4 text-right bg-rose-100/70 border-l border-rose-200 font-black">
                          {formatCurrency(
                            [1, 2, 3, 4].reduce(
                              (acc, idx) =>
                                acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx]),
                              0
                            )
                          )}
                        </td>
                        <td className="py-3 px-3 text-center bg-rose-100/70 font-black">
                          {formatPercent(
                            [1, 2, 3, 4].reduce(
                              (acc, idx) =>
                                acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx]),
                              0
                            ) / (financialData.receitaBrutaAnual || 1)
                          )}
                        </td>
                      </tr>

                      {[1, 2, 3, 4].map((idx) => {
                        const cat = EXPENSE_CATEGORIES[idx];
                        const totalCat = financialData.getCatMonth(cat);
                        return (
                          <tr key={cat} className="hover:bg-slate-50/80 text-slate-600">
                            <td className="py-2.5 px-4 pl-8 sticky left-0 bg-white border-r border-slate-100 font-medium">
                              (-) {cat}
                            </td>
                            {MONTHS.map((m) => (
                              <td key={m} className="py-2.5 px-3 text-right">
                                {formatCurrency(financialData.getCatMonth(cat, m))}
                              </td>
                            ))}
                            <td className="py-2.5 px-4 text-right font-semibold bg-slate-50/50 border-l border-slate-200 text-slate-800">
                              {formatCurrency(totalCat)}
                            </td>
                            <td className="py-2.5 px-3 text-center bg-slate-50/50 text-slate-500">
                              {formatPercent(
                                totalCat / (financialData.receitaBrutaAnual || 1)
                              )}
                            </td>
                          </tr>
                        );
                      })}

                      {/* 5. DESPESAS OPERACIONAIS E PRÓ-LABORE MAIKON MARTINS */}
                      <tr className="bg-rose-50/60 font-bold text-rose-900">
                        <td className="py-3 px-4 sticky left-0 bg-rose-50 border-r border-rose-200">
                          5. (-) DESPESAS OPERACIONAIS, COMERCIAIS E PRÓ-LABORE
                        </td>
                        {MONTHS.map((m) => {
                          const desp = [5, 6, 7, 8, 9, 10].reduce(
                            (acc, idx) =>
                              acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx], m),
                            0
                          );
                          return (
                            <td key={m} className="py-3 px-3 text-right text-rose-800">
                              {formatCurrency(desp)}
                            </td>
                          );
                        })}
                        <td className="py-3 px-4 text-right bg-rose-100/70 border-l border-rose-200 font-black">
                          {formatCurrency(
                            [5, 6, 7, 8, 9, 10].reduce(
                              (acc, idx) =>
                                acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx]),
                              0
                            )
                          )}
                        </td>
                        <td className="py-3 px-3 text-center bg-rose-100/70 font-black">
                          {formatPercent(
                            [5, 6, 7, 8, 9, 10].reduce(
                              (acc, idx) =>
                                acc + financialData.getCatMonth(EXPENSE_CATEGORIES[idx]),
                              0
                            ) / (financialData.receitaBrutaAnual || 1)
                          )}
                        </td>
                      </tr>

                      {[5, 6, 7, 8, 9, 10].map((idx) => {
                        const cat = EXPENSE_CATEGORIES[idx];
                        const isProLabore = idx === 5;
                        const totalCat = financialData.getCatMonth(cat);
                        return (
                          <tr
                            key={cat}
                            className={
                              isProLabore
                                ? 'bg-[#F8F3EF] font-extrabold text-[#1B3B2B]'
                                : 'hover:bg-slate-50/80 text-slate-600'
                            }
                          >
                            <td
                              className={`py-2.5 px-4 pl-8 sticky left-0 border-r border-slate-100 ${
                                isProLabore ? 'bg-[#F8F3EF] text-[#1B3B2B]' : 'bg-white'
                              }`}
                            >
                              {isProLabore ? '★ (-) ' : '(-) '}
                              {cat}
                            </td>
                            {MONTHS.map((m) => (
                              <td key={m} className="py-2.5 px-3 text-right">
                                {formatCurrency(financialData.getCatMonth(cat, m))}
                              </td>
                            ))}
                            <td
                              className={`py-2.5 px-4 text-right font-bold border-l border-slate-200 ${
                                isProLabore ? 'bg-[#EDE3D9] text-[#1B3B2B]' : 'bg-slate-50/50 text-slate-800'
                              }`}
                            >
                              {formatCurrency(totalCat)}
                            </td>
                            <td
                              className={`py-2.5 px-3 text-center ${
                                isProLabore ? 'bg-[#EDE3D9] text-[#1B3B2B]' : 'bg-slate-50/50 text-slate-500'
                              }`}
                            >
                              {formatPercent(
                                totalCat / (financialData.receitaBrutaAnual || 1)
                              )}
                            </td>
                          </tr>
                        );
                      })}

                      {/* 6. LUCRO LÍQUIDO DO EXERCÍCIO */}
                      <tr className="bg-[#1B3B2B] text-white font-black text-xs border-t-4 border-[#132A1F]">
                        <td className="py-4 px-4 sticky left-0 bg-[#1B3B2B] border-r border-[#2D5A43] text-emerald-300">
                          6. (=) LUCRO LÍQUIDO DO EXERCÍCIO (APÓS PRÓ-LABORE)
                        </td>
                        {financialData.monthlySeries.map((m) => (
                          <td key={m.month} className="py-4 px-3 text-right font-black text-emerald-200">
                            {formatCurrency(m.resultadoLiquido)}
                          </td>
                        ))}
                        <td className="py-4 px-4 text-right bg-[#132A1F] text-emerald-300 border-l border-[#2D5A43] text-sm">
                          {formatCurrency(financialData.lucroLiquidoAnual)}
                        </td>
                        <td className="py-4 px-3 text-center bg-[#132A1F] text-emerald-300 text-sm font-black">
                          {formatPercent(financialData.margemLiquidaAnual)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              ABA 5: GESTÃO DE CONTRATOS AMBIENTAIS & SST (PIPELINE TÉCNICO)
          ================================================================ */}
          {activeTab === 'contratos' && (
            <div className="space-y-6">
              {/* KPIs da Carteira de Contratos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-t-4 border-t-[#1B3B2B] shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Valor Total Contratado (14 Contratos)
                  </div>
                  <div className="text-2xl font-black text-[#1B3B2B] mt-1">
                    {formatCurrency(
                      contracts.reduce((a, b) => a + Number(b.contractValue), 0)
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Carteira Ambiental SEMA-MT & SST
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-t-4 border-t-emerald-600 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Total Já Recebido dos Contratos
                  </div>
                  <div className="text-2xl font-black text-emerald-700 mt-1">
                    {formatCurrency(
                      contracts.reduce((a, b) => a + Number(b.receivedValue), 0)
                    )}
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">
                    Parcelas quitadas pelos clientes
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-t-4 border-t-amber-500 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Saldo a Faturar / Receber
                  </div>
                  <div className="text-2xl font-black text-amber-600 mt-1">
                    {formatCurrency(
                      contracts.reduce(
                        (a, b) => a + (Number(b.contractValue) - Number(b.receivedValue)),
                        0
                      )
                    )}
                  </div>
                  <div className="text-xs text-amber-700 mt-1">
                    Vinculado à entrega de licenças/laudos
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 border-t-4 border-t-teal-700 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Margem Técnica Média dos Projetos
                  </div>
                  <div className="text-2xl font-black text-teal-800 mt-1">
                    {formatPercent(
                      contracts.reduce(
                        (a, b) => a + (Number(b.contractValue) - Number(b.directCosts)),
                        0
                      ) /
                        (contracts.reduce((a, b) => a + Number(b.contractValue), 0) || 1)
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Após custos laboratoriais, drone e taxas
                  </div>
                </div>
              </div>

              {/* Filtro e Botão de Novo Contrato */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3 flex-1">
                  <div className="relative flex-1 min-w-[240px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={ctSearch}
                      onChange={(e) => setCtSearch(e.target.value)}
                      placeholder="Buscar por cliente, fazenda, SEMA-MT, eSocial ou código..."
                      className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                    />
                  </div>
                  <select
                    value={ctStatusFilter}
                    onChange={(e) => setCtStatusFilter(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50"
                  >
                    <option value="Todos">Status Técnico: Todos</option>
                    <option value="Concluído / Licença Emitida">
                      Concluído / Licença Emitida
                    </option>
                    <option value="Protocolado SEMA / Órgão">
                      Protocolado SEMA / Órgão
                    </option>
                    <option value="Contrato Recorrente Ativo">
                      Contrato Recorrente Ativo
                    </option>
                    <option value="Em Elaboração Técnica">Em Elaboração Técnica</option>
                  </select>
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
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] transition shadow"
                >
                  <Plus className="w-4 h-4" />
                  Novo Contrato Ambiental / SST
                </button>
              </div>

              {/* Tabela de Contratos */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                        <th className="py-3.5 px-3">Código</th>
                        <th className="py-3.5 px-3">Cliente / Empreendimento</th>
                        <th className="py-3.5 px-3">Escopo Técnico (Ambiental / SST)</th>
                        <th className="py-3.5 px-3 text-center">Órgão / Norma</th>
                        <th className="py-3.5 px-3 text-center">Vencimento</th>
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
                      {filteredContracts.map((ct) => {
                        const pending = ct.contractValue - ct.receivedValue;
                        const netMargin = ct.contractValue - ct.directCosts;
                        const marginPct =
                          ct.contractValue > 0 ? netMargin / ct.contractValue : 0;

                        return (
                          <tr key={ct.id} className="hover:bg-slate-50">
                            <td className="py-3 px-3 font-mono font-bold text-[#1B3B2B]">
                              {ct.id}
                            </td>
                            <td className="py-3 px-3 font-bold text-slate-800">
                              {ct.client}
                            </td>
                            <td className="py-3 px-3 text-slate-600">{ct.service}</td>
                            <td className="py-3 px-3 text-center">
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold">
                                {ct.agency}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-center font-medium text-slate-700">
                              {ct.deadline || '—'}
                            </td>
                            <td className="py-3 px-3 text-center">
                              <span
                                className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                  ct.status === 'Concluído / Licença Emitida'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : ct.status === 'Contrato Recorrente Ativo'
                                    ? 'bg-teal-100 text-teal-800'
                                    : ct.status === 'Protocolado SEMA / Órgão'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {ct.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right font-bold text-slate-800">
                              {formatCurrency(ct.contractValue)}
                            </td>
                            <td className="py-3 px-3 text-right font-semibold text-emerald-700">
                              {formatCurrency(ct.receivedValue)}
                            </td>
                            <td
                              className={`py-3 px-3 text-right font-extrabold ${
                                pending > 0 ? 'text-amber-600' : 'text-emerald-700'
                              }`}
                            >
                              {formatCurrency(pending)}
                            </td>
                            <td className="py-3 px-3 text-right text-rose-700">
                              {formatCurrency(ct.directCosts)}
                            </td>
                            <td className="py-3 px-3 text-center font-bold text-[#1B3B2B]">
                              {formatPercent(marginPct)}
                            </td>
                            <td className="py-3 px-3 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                {pending > 0 && hasPermission('contratos', 'edit') && (
                                  <button
                                    onClick={() => {
                                      setReceiveInstallmentContract(ct);
                                      setInstallmentAmount(String(pending));
                                    }}
                                    className="px-2.5 py-1 rounded-lg bg-emerald-700 text-white text-[11px] font-bold hover:bg-emerald-800 transition"
                                    title="Receber Parcela e Lançar no Caixa"
                                  >
                                    + Receber
                                  </button>
                                )}
                                {hasPermission('contratos', 'edit') && (
                                  <button
                                    onClick={() => {
                                      setEditingContract(ct);
                                      setCtForm({
                                        client: ct.client,
                                        service: ct.service,
                                        agency: ct.agency,
                                        startDate: ct.startDate,
                                        deadline: ct.deadline,
                                        status: ct.status,
                                        contractValue: String(ct.contractValue),
                                        receivedValue: String(ct.receivedValue),
                                        directCosts: String(ct.directCosts),
                                        installmentsCount: ct.installmentsCount || '1',
                                        installmentDates: ct.installmentDates || [ct.deadline || '2026-12-30', '', '', '']
                                      });
                                      setShowContractModal(true);
                                    }}
                                    className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
                                    title="Editar Contrato"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                )}
                                {hasPermission('contratos', 'delete') ? (
                                  <button
                                    onClick={() => {
                                      setDeleteContractTarget(ct);
                                      setDeleteLinkedTransactions(false);
                                    }}
                                    className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition"
                                    title="Excluir Contrato"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                ) : (
                                  <span
                                    className="p-1.5 text-slate-300 cursor-not-allowed"
                                    title="Exclusão permitida apenas para Nível 1 Master (Maikon Martins)"
                                  >
                                    <Lock className="w-3.5 h-3.5" />
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              ABA 6 (NOVA): CADASTRO DE CLIENTES (CRM AMBIENTAL & SST)
          ================================================================ */}
          {activeTab === 'clientes' && (
            <div className="space-y-6">
              {/* Cabeçalho CRM Clientes */}
              <div className="bg-gradient-to-r from-[#1B3B2B] to-[#2D5A43] rounded-2xl p-6 text-white shadow-md flex flex-col lg:flex-row items-center justify-between gap-4">
                <div>
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#F8F3EF] text-[#1B3B2B] uppercase tracking-wider">
                    Base Corporativa & Rural • Mato Grosso
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black mt-2">
                    Cadastro de Clientes — CRM Ambiental & Segurança do Trabalho
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
                    Gestão centralizada de Fazendas, Agroindústrias, Frigoríficos, Construtoras, matrículas CAR/INCRA e histórico financeiro por cliente.
                  </p>
                </div>
                {hasPermission('clientes', 'create') && (
                  <button
                    onClick={openNewClientModal}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#F8F3EF] text-[#1B3B2B] hover:bg-white transition shadow-lg shrink-0"
                  >
                    <UserPlus className="w-4 h-4" />
                    Cadastrar Novo Cliente
                  </button>
                )}
              </div>

              {/* GERENCIADOR DE SEGMENTOS ECONÔMICOS E STATUS */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-3">
                    Gerenciar Segmentos Econômicos ({clientSegments.length})
                  </h3>
                  <form onSubmit={handleAddSegment} className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={newSegmentInput}
                      onChange={(e) => setNewSegmentInput(e.target.value)}
                      placeholder="Novo segmento (ex: Energias Renováveis)"
                      className="flex-1 px-3 py-1.5 rounded-xl border border-slate-300 text-xs"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold hover:bg-[#2D5A43]"
                    >
                      Adicionar
                    </button>
                  </form>
                  <div className="flex flex-wrap gap-1.5">
                    {clientSegments.map((seg) => (
                      <span
                        key={seg}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#E6EFEA] text-[#1B3B2B] text-xs font-semibold"
                      >
                        {seg}
                        {clientSegments.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteSegment(seg)}
                            className="text-slate-400 hover:text-rose-700 font-bold ml-1"
                            title="Excluir segmento"
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-3">
                    Gerenciar Status de Clientes ({clientStatuses.length})
                  </h3>
                  <form onSubmit={handleAddStatus} className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={newStatusInput}
                      onChange={(e) => setNewStatusInput(e.target.value)}
                      placeholder="Novo status (ex: Contrato Renovado)"
                      className="flex-1 px-3 py-1.5 rounded-xl border border-slate-300 text-xs"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold hover:bg-[#2D5A43]"
                    >
                      Adicionar
                    </button>
                  </form>
                  <div className="flex flex-wrap gap-1.5">
                    {clientStatuses.map((st) => (
                      <span
                        key={st}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold"
                      >
                        {st}
                        {clientStatuses.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteStatus(st)}
                            className="text-slate-400 hover:text-rose-700 font-bold ml-1"
                            title="Excluir status"
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* KPIs da Carteira de Clientes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 border-l-4 border-l-[#1B3B2B] shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Total de Clientes Cadastrados
                  </div>
                  <div className="text-2xl font-black text-[#1B3B2B] mt-1">
                    {clients.length} Empresas / Fazendas
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">
                    {clients.filter((c) => c.status === 'Ativo').length} clientes ativos em carteira
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 border-l-4 border-l-emerald-600 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Segmento Agronegócio & Rural
                  </div>
                  <div className="text-2xl font-black text-emerald-700 mt-1">
                    {clients.filter((c) => c.segment === 'Agronegócio').length} Clientes
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    CAR, Georreferenciamento, Outorga e LO
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 border-l-4 border-l-teal-600 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Indústrias, Frigoríficos & Saúde
                  </div>
                  <div className="text-2xl font-black text-teal-800 mt-1">
                    {
                      clients.filter((c) =>
                        ['Indústria', 'Saúde'].includes(c.segment)
                      ).length
                    }{' '}
                    Clientes
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    PGR, LTCAT, PRAD, PGRS e Licenciamento
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 shadow-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase">
                    Construção, Logística & Comércio
                  </div>
                  <div className="text-2xl font-black text-amber-600 mt-1">
                    {
                      clients.filter((c) =>
                        ['Construtora/Loteamento', 'Transporte/Logística', 'Comércio/Serviços'].includes(
                          c.segment
                        )
                      ).length
                    }{' '}
                    Clientes
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Gestão Recorrente eSocial SST e NRs
                  </div>
                </div>
              </div>

              {/* Barra de Busca e Filtros do CRM */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3 flex-1">
                  <div className="relative flex-1 min-w-[240px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={cliSearch}
                      onChange={(e) => setCliSearch(e.target.value)}
                      placeholder="Buscar por Razão Social, Fazenda, CNPJ/CPF, Cidade ou Contato..."
                      className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                    />
                  </div>

                  <select
                    value={cliSegmentFilter}
                    onChange={(e) => setCliSegmentFilter(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50"
                  >
                    <option value="Todos">Segmento: Todos</option>
                    {clientSegments.map((seg) => (
                      <option key={seg} value={seg}>
                        {seg}
                      </option>
                    ))}
                  </select>

                  <select
                    value={cliStatusFilter}
                    onChange={(e) => setCliStatusFilter(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-slate-50"
                  >
                    <option value="Todos">Status: Todos</option>
                    {clientStatuses.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tabela Completa de Clientes */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                        <th className="py-3.5 px-3">ID</th>
                        <th className="py-3.5 px-3">Razão Social / Propriedade Rural</th>
                        <th className="py-3.5 px-3">CNPJ / CPF & Registro (CAR/IE)</th>
                        <th className="py-3.5 px-3">Segmento</th>
                        <th className="py-3.5 px-3">Cidade / UF</th>
                        <th className="py-3.5 px-3">Responsável & Contato</th>
                        <th className="py-3.5 px-3">Programa / Licença Principal</th>
                        <th className="py-3.5 px-3 text-center">Status</th>
                        <th className="py-3.5 px-3 text-center">Ações / Histórico</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredClients.map((cli) => (
                        <tr key={cli.id} className="hover:bg-slate-50 transition">
                          <td className="py-3 px-3 font-mono font-bold text-[#1B3B2B]">
                            {cli.id}
                          </td>
                          <td className="py-3 px-3 font-bold text-slate-800">
                            {cli.name}
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-mono font-semibold text-slate-700">
                              {cli.document}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {cli.registration}
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#E6EFEA] text-[#1B3B2B] font-semibold">
                              {cli.segment}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-slate-700 font-medium whitespace-nowrap">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#2D5A43]" />
                              {cli.city}
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-semibold text-slate-800">
                              {cli.contactName}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {cli.phone} • {cli.email}
                            </div>
                          </td>
                          <td className="py-3 px-3 text-slate-600 font-medium">
                            {cli.mainProgram}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                cli.status === 'Ativo'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : cli.status === 'Em Prospecção'
                                  ? 'bg-blue-100 text-blue-800'
                                  : cli.status === 'Pendência Documental'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {cli.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                onClick={() => setHistoryClientTarget(cli)}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#1B3B2B] text-white text-[11px] font-bold hover:bg-[#2D5A43] transition"
                                title="Ver Histórico Financeiro e Contratos do Cliente"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                Ficha
                              </button>
                              {hasPermission('clientes', 'edit') && (
                                <button
                                  onClick={() => openEditClientModal(cli)}
                                  className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
                                  title="Editar Cliente"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                              )}
                              {hasPermission('clientes', 'delete') ? (
                                <button
                                  onClick={() => setDeleteClientTarget(cli)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                                  title="Excluir Cliente"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              ) : (
                                <span
                                  className="p-1.5 text-slate-300 cursor-not-allowed"
                                  title="Exclusão restrita ao Nível 1 Master"
                                >
                                  <Lock className="w-3.5 h-3.5" />
                                </span>
                              )}
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

          {/* ================================================================
              ABA 7 (NOVA): ÁRVORE DE ACESSOS & PERMISSÕES (GOVERNANÇA RBAC)
          ================================================================ */}
          {activeTab === 'acessos' && (
            <div className="space-y-6">
              {/* Banner da Árvore de Acessos */}
              <div className="bg-[#F8F3EF] border-2 border-[#1B3B2B] rounded-2xl p-6 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <GrupoMartinsLogo size="compact" />
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#1B3B2B] text-[#F8F3EF] uppercase tracking-wider">
                      Governança Corporativa & Segurança da Informação
                    </span>
                    <h2 className="text-2xl font-black text-[#1B3B2B] mt-2">
                      Árvore de Acessos, Alçadas e Permissões do Sistema
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Hierarquia organizacional comandada pelo Sócio-Diretor <strong>Maikon Martins (Nível 1 Master)</strong> com controle granular por módulo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setShowUserRoleModal(true)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] transition shadow"
                  >
                    <UserPlus className="w-4 h-4" />
                    Novo Perfil / Colaborador
                  </button>
                </div>
              </div>

              {/* DIAGRAMA VISUAL DA ÁRVORE DE HIERARQUIA DO GRUPO MARTINS */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
                  <div>
                    <h3 className="text-base font-extrabold text-[#1B3B2B]">
                      1. Estrutura Hierárquica — Árvore de Acessos Grupo Martins
                    </h3>
                    <p className="text-xs text-slate-500">
                      Clique em "Simular Este Perfil" em qualquer cartão para testar o comportamento do ERP na visão daquele colaborador
                    </p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-lg bg-[#E6F4EA] text-[#1B3B2B]">
                    Perfil Simulado Agora: {currentRole.level} ({currentRole.holder})
                  </span>
                </div>

                {/* Nó Raiz: Nível 1 Master (Maikon Martins) */}
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-xl bg-gradient-to-r from-[#1B3B2B] to-[#244B38] text-white rounded-2xl p-5 border-2 border-[#1B3B2B] shadow-lg relative">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#F8F3EF] text-[#1B3B2B] font-black flex items-center justify-center text-base shrink-0">
                          N1
                        </div>
                        <div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase">
                            Nível 1 — Sócio-Administrador (Master)
                          </span>
                          <h4 className="text-lg font-black text-white mt-1">
                            Maikon Martins — Sócio-Diretor
                          </h4>
                          <p className="text-xs text-emerald-200">
                            Alçada Total: DRE, Saques de Pró-Labore, Exclusão de Contratos, Caixa e Governança
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setActiveRoleId('ROLE-01');
                          showToast('Perfil Nível 1 Master (Maikon Martins) ativado!');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                          activeRoleId === 'ROLE-01'
                            ? 'bg-emerald-400 text-slate-950'
                            : 'bg-white/15 text-white hover:bg-white/25'
                        }`}
                      >
                        {activeRoleId === 'ROLE-01' ? '✓ Perfil Ativo' : 'Ativar Master'}
                      </button>
                    </div>
                  </div>

                  {/* Linhas Conectoras da Árvore */}
                  <div className="w-0.5 h-8 bg-[#1B3B2B]" />
                  <div className="w-4/5 border-t-2 border-[#1B3B2B] hidden lg:block" />

                  {/* Nós Filhos: Níveis 2, 3, 4, 5 e adicionais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4">
                    {accessRoles.slice(1).map((role) => {
                      const isSimulated = activeRoleId === role.id;
                      return (
                        <div
                          key={role.id}
                          className={`rounded-2xl p-4 border-2 transition flex flex-col justify-between ${
                            isSimulated
                              ? 'bg-[#F8F3EF] border-[#1B3B2B] shadow-md'
                              : 'bg-white border-slate-200 hover:border-[#2D5A43]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${role.badgeColor}`}
                              >
                                {role.level}
                              </span>
                              <span className="text-[11px] font-mono text-slate-400">
                                {role.id}
                              </span>
                            </div>
                            <h4 className="text-sm font-extrabold text-[#1B3B2B]">
                              {role.name}
                            </h4>
                            <div className="text-xs font-bold text-slate-700 mt-1">
                              👤 {role.holder}
                            </div>
                            <div className="text-[11px] text-slate-500 truncate">
                              ✉️ {role.email}
                            </div>
                            <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                              {role.description}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div className="text-[10px] font-semibold text-slate-500">
                              Pró-Labore / Exclusão:{' '}
                              <strong className="text-rose-700">Bloqueado</strong>
                            </div>
                            <button
                              onClick={() => {
                                setActiveRoleId(role.id);
                                showToast(`Simulando visão de: ${role.name}`);
                              }}
                              className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                                isSimulated
                                  ? 'bg-[#1B3B2B] text-white'
                                  : 'bg-slate-100 text-[#1B3B2B] hover:bg-slate-200'
                              }`}
                            >
                              {isSimulated ? '✓ Em Simulação' : 'Simular Perfil'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* MATRIZ INTERATIVA DE PERMISSÕES POR MÓDULO */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-[#1B3B2B] text-white flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      2. Matriz Interativa de Alçadas e Permissões por Módulo
                    </h3>
                    <p className="text-xs text-emerald-200">
                      Clique nos botões Ver, Criar, Editar ou Excluir abaixo para liberar ou bloquear acessos de cada departamento
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase">
                        <th className="py-3.5 px-4">Nível / Perfil de Usuário</th>
                        <th className="py-3.5 px-3 text-center">Painel KPIs</th>
                        <th className="py-3.5 px-3 text-center bg-[#F8F3EF] text-[#1B3B2B]">
                          Pró-Labore (Maikon)
                        </th>
                        <th className="py-3.5 px-3 text-center">Livro Caixa</th>
                        <th className="py-3.5 px-3 text-center">DRE Mensal</th>
                        <th className="py-3.5 px-3 text-center">Contratos (Ver/Editar/Excluir)</th>
                        <th className="py-3.5 px-3 text-center">Clientes CRM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {accessRoles.map((role) => (
                        <tr key={role.id} className="hover:bg-slate-50">
                          <td className="py-3.5 px-4">
                            <div className="font-extrabold text-[#1B3B2B]">
                              {role.level} — {role.name}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              Titular: {role.holder}
                            </div>
                          </td>

                          {/* Colunas de Módulos */}
                          {[
                            { key: 'dashboard', actions: ['view'] },
                            { key: 'prolabore', actions: ['view', 'create', 'approve'] },
                            { key: 'lancamentos', actions: ['view', 'create', 'edit', 'delete'] },
                            { key: 'dre', actions: ['view'] },
                            { key: 'contratos', actions: ['view', 'create', 'edit', 'delete'] },
                            { key: 'clientes', actions: ['view', 'create', 'edit', 'delete'] }
                          ].map((mod) => (
                            <td
                              key={mod.key}
                              className={`py-3 px-2.5 text-center ${
                                mod.key === 'prolabore' ? 'bg-[#F8F3EF]/60' : ''
                              }`}
                            >
                              <div className="flex flex-wrap items-center justify-center gap-1">
                                {mod.actions.map((act) => {
                                  const active = role.permissions[mod.key]?.[act];
                                  const labelMap = {
                                    view: 'Ver',
                                    create: 'Criar',
                                    edit: 'Editar',
                                    delete: 'Excluir',
                                    approve: 'Sacar'
                                  };
                                  return (
                                    <button
                                      key={act}
                                      onClick={() =>
                                        handleToggleRolePermission(role.id, mod.key, act)
                                      }
                                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
                                        active
                                          ? act === 'delete'
                                            ? 'bg-rose-700 text-white'
                                            : 'bg-emerald-700 text-white'
                                          : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
                                      }`}
                                    >
                                      {active ? '✓ ' : '✕ '}
                                      {labelMap[act]}
                                    </button>
                                  );
                                })}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              ABA 8: PLANO DE CONTAS & PARÂMETROS FINANCEIROS
          ================================================================ */}
          {activeTab === 'config' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-lg font-extrabold text-[#1B3B2B]">
                  Parâmetros Financeiros e Metas — Grupo Martins (2026)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Ajuste o Saldo Inicial de Caixa, Meta de Faturamento e Pró-Labore Alvo do Sócio-Diretor Maikon Martins.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Saldo Inicial de Caixa (R$)
                    </label>
                    <input
                      type="number"
                      value={params.saldoInicialCaixa}
                      onChange={(e) =>
                        setParams({
                          ...params,
                          saldoInicialCaixa: Number(e.target.value)
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-[#1B3B2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Meta Mensal de Receita (R$)
                    </label>
                    <input
                      type="number"
                      value={params.metaMensalReceita}
                      onChange={(e) =>
                        setParams({
                          ...params,
                          metaMensalReceita: Number(e.target.value)
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Pró-Labore Mensal Alvo (R$)
                    </label>
                    <input
                      type="number"
                      value={params.proLaboreAlvoMensal}
                      onChange={(e) =>
                        setParams({
                          ...params,
                          proLaboreAlvoMensal: Number(e.target.value)
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-[#1B3B2B] bg-[#F8F3EF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Sócio-Diretor Responsável
                    </label>
                    <input
                      type="text"
                      value={params.socioDiretor}
                      onChange={(e) =>
                        setParams({ ...params, socioDiretor: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                  <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase mb-3">
                    Categorias de Receita Operacional (Ambiental & SST)
                  </h3>
                  <ul className="space-y-2 text-xs">
                    {REVENUE_CATEGORIES.map((c, i) => (
                      <li
                        key={c}
                        className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70 font-semibold text-[#1B3B2B] flex items-center justify-between"
                      >
                        <span>
                          {i + 1}. {c}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-200/70 text-emerald-900">
                          Entrada
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                  <h3 className="text-sm font-extrabold text-rose-900 uppercase mb-3">
                    Categorias de Custos Diretos, Despesas e Pró-Labore
                  </h3>
                  <ul className="space-y-2 text-xs">
                    {EXPENSE_CATEGORIES.map((c, i) => (
                      <li
                        key={c}
                        className={`p-2.5 rounded-xl border font-semibold flex items-center justify-between ${
                          c.includes('Maikon Martins')
                            ? 'bg-[#F8F3EF] border-[#1B3B2B] text-[#1B3B2B]'
                            : 'bg-rose-50/50 border-rose-200/60 text-slate-700'
                        }`}
                      >
                        <span>
                          {i + 1}. {c}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                          Saída
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ====================================================================
          MODAL 1: INCLUIR / EDITAR LANÇAMENTO FINANCEIRO
      ==================================================================== */}
      {showTxModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="px-6 py-4 bg-[#1B3B2B] text-white flex items-center justify-between">
              <h3 className="text-base font-bold">
                {editingTx
                  ? `Editar Lançamento ${editingTx.id}`
                  : 'Novo Lançamento no Livro Caixa'}
              </h3>
              <button
                onClick={() => setShowTxModal(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Data
                  </label>
                  <input
                    type="date"
                    value={txForm.date}
                    onChange={(e) => setTxForm({ ...txForm, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Mês Competência
                  </label>
                  <select
                    value={txForm.month}
                    onChange={(e) => setTxForm({ ...txForm, month: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                  >
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>
                        {m}/2026
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Natureza
                  </label>
                  <select
                    value={txForm.type}
                    onChange={(e) => {
                      const nextType = e.target.value;
                      setTxForm({
                        ...txForm,
                        type: nextType,
                        category:
                          nextType === 'Entrada'
                            ? REVENUE_CATEGORIES[0]
                            : EXPENSE_CATEGORIES[0]
                      });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                  >
                    <option value="Entrada">Entrada (+)</option>
                    <option value="Saída">Saída (-)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Categoria do Plano de Contas
                </label>
                <select
                  value={txForm.category}
                  onChange={(e) => setTxForm({ ...txForm, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                >
                  {(txForm.type === 'Entrada'
                    ? REVENUE_CATEGORIES
                    : EXPENSE_CATEGORIES
                  ).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Cliente / Favorecido / Sócio
                  </label>
                  <input
                    type="text"
                    list="crm-clients-list"
                    value={txForm.entity}
                    onChange={(e) => setTxForm({ ...txForm, entity: e.target.value })}
                    placeholder="Selecione um cliente do CRM ou digite..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                  <datalist id="crm-clients-list">
                    <option value="Maikon Martins (Sócio-Diretor)" />
                    {clients.map((cl) => (
                      <option key={cl.id} value={cl.name} />
                    ))}
                  </datalist>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Valor (R$)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={txForm.amount}
                    onChange={(e) => setTxForm({ ...txForm, amount: e.target.value })}
                    placeholder="0,00"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-[#1B3B2B]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Descrição Detalhada
                </label>
                <input
                  type="text"
                  value={txForm.description}
                  onChange={(e) =>
                    setTxForm({ ...txForm, description: e.target.value })
                  }
                  placeholder="Ex: 1ª Parcela Licenciamento Ambiental ou Saque Pró-Labore"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Meio de Pagamento
                  </label>
                  <select
                    value={txForm.paymentMethod}
                    onChange={(e) =>
                      setTxForm({ ...txForm, paymentMethod: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  >
                    {PAYMENT_METHODS.map((pm) => (
                      <option key={pm} value={pm}>
                        {pm}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Status Financeiro
                  </label>
                  <select
                    value={txForm.status}
                    onChange={(e) => setTxForm({ ...txForm, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                  >
                    <option value="Pago / Recebido">Pago / Recebido</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Atrasado">Atrasado</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowTxModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 font-semibold text-slate-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold hover:bg-[#2D5A43]"
                >
                  Salvar Lançamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 2: RECIBO OFICIAL DE PRÓ-LABORE (MAIKON MARTINS)
      ==================================================================== */}
      {receiptModalTx && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#F8F3EF] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border-2 border-[#1B3B2B]">
            <div className="px-6 py-4 bg-[#1B3B2B] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-emerald-300" />
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Recibo Oficial de Saque de Pró-Labore Societário
                </h3>
              </div>
              <button
                onClick={() => setReceiptModalTx(null)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-xs sm:text-sm text-slate-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#D5CFC7] pb-4">
                <GrupoMartinsLogo size="compact" />
                <div className="text-right">
                  <div className="text-xs font-bold uppercase text-slate-500">
                    Recibo Nº {receiptModalTx.id}
                  </div>
                  <div className="text-2xl font-black text-[#1B3B2B] mt-1">
                    {formatCurrency(receiptModalTx.amount)}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-semibold">
                    Competência: {receiptModalTx.month}/2026
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#D5CFC7] leading-relaxed">
                Recebi da empresa{' '}
                <strong>
                  GRUPO MARTINS — ENGENHARIA, SOLUÇÕES AMBIENTAIS E SEGURANÇA DO TRABALHO
                </strong>{' '}
                (CNPJ {params.cnpj}), a importância líquida de{' '}
                <strong>{formatCurrency(receiptModalTx.amount)}</strong> referente a{' '}
                <strong>{receiptModalTx.description}</strong>, pago via{' '}
                <strong>{receiptModalTx.paymentMethod}</strong> na data de{' '}
                <strong>{receiptModalTx.date}</strong>, dando plena e rasa quitação.
              </div>

              <div className="pt-6 border-t border-[#D5CFC7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  {params.cidadeSede}, {receiptModalTx.date}
                </div>
                <div className="text-center">
                  <div className="w-56 border-b border-[#1B3B2B] mb-1" />
                  <div className="font-bold text-[#1B3B2B]">{params.socioDiretor}</div>
                  <div className="text-[10px] text-slate-500">{params.cargoSocio}</div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setReceiptModalTx(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                >
                  Fechar
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold hover:bg-[#2D5A43]"
                >
                  <Printer className="w-4 h-4" />
                  Imprimir Comprovante
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 3: RECEBER PARCELA DE CONTRATO
      ==================================================================== */}
      {receiveInstallmentContract && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="px-6 py-4 bg-emerald-800 text-white flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase">
                Receber Parcela — {receiveInstallmentContract.id}
              </h3>
              <button
                onClick={() => setReceiveInstallmentContract(null)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={handleReceiveContractInstallment}
              className="p-6 space-y-4 text-xs sm:text-sm"
            >
              <div className="text-slate-600">
                Cliente: <strong className="text-slate-800">{receiveInstallmentContract.client}</strong>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Valor Recebido Agora (R$)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={installmentAmount}
                  onChange={(e) => setInstallmentAmount(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-emerald-800"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setReceiveInstallmentContract(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800"
                >
                  Confirmar e Lançar no Caixa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 4: NOVO / EDITAR CONTRATO TÉCNICO
      ==================================================================== */}
      {showContractModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 bg-[#1B3B2B] text-white flex items-center justify-between sticky top-0 z-10">
              <h3 className="text-base font-bold">
                {editingContract
                  ? `Editar Contrato ${editingContract.id}`
                  : 'Novo Contrato Ambiental & SST'}
              </h3>
              <button
                onClick={() => setShowContractModal(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveContract} className="p-6 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Cliente / Fazenda / Indústria (Vinculado ao CRM)
                </label>
                <input
                  type="text"
                  list="crm-clients-list-contract"
                  value={ctForm.client}
                  onChange={(e) => setCtForm({ ...ctForm, client: e.target.value })}
                  placeholder="Selecione da base de clientes ou digite novo..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  required
                />
                <datalist id="crm-clients-list-contract">
                  {clients.map((cl) => (
                    <option key={cl.id} value={cl.name} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Serviço Técnico (Ambiental / SST)
                </label>
                <input
                  type="text"
                  value={ctForm.service}
                  onChange={(e) => setCtForm({ ...ctForm, service: e.target.value })}
                  placeholder="Ex: Licenciamento LP/LI/LO SEMA-MT + PGR/LTCAT"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Órgão Regulador / Norma
                  </label>
                  <input
                    type="text"
                    value={ctForm.agency}
                    onChange={(e) => setCtForm({ ...ctForm, agency: e.target.value })}
                    placeholder="SEMA-MT / eSocial / INCRA"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Vencimento Final
                  </label>
                  <input
                    type="date"
                    value={ctForm.deadline}
                    onChange={(e) => setCtForm({ ...ctForm, deadline: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Status do Processo
                  </label>
                  <select
                    value={ctForm.status}
                    onChange={(e) => setCtForm({ ...ctForm, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                  >
                    <option value="Em Elaboração Técnica">Em Elaboração Técnica</option>
                    <option value="Protocolado SEMA / Órgão">
                      Protocolado SEMA / Órgão
                    </option>
                    <option value="Concluído / Licença Emitida">
                      Concluído / Licença Emitida
                    </option>
                    <option value="Contrato Recorrente Ativo">
                      Contrato Recorrente Ativo
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Valor Contrato (R$)
                  </label>
                  <input
                    type="number"
                    value={ctForm.contractValue}
                    onChange={(e) =>
                      setCtForm({ ...ctForm, contractValue: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-[#1B3B2B]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Já Recebido (R$)
                  </label>
                  <input
                    type="number"
                    value={ctForm.receivedValue}
                    onChange={(e) =>
                      setCtForm({ ...ctForm, receivedValue: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Custos Diretos (R$)
                  </label>
                  <input
                    type="number"
                    value={ctForm.directCosts}
                    onChange={(e) =>
                      setCtForm({ ...ctForm, directCosts: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-rose-700"
                  />
                </div>
              </div>

              {/* OPÇÃO DE PARCELAMENTO EM ATÉ 4 VEZES COM DATAS EDITÁVEIS */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Forma de Pagamento / Parcelamento (Até 4x)
                  </label>
                  <select
                    value={ctForm.installmentsCount}
                    onChange={(e) => setCtForm({ ...ctForm, installmentsCount: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold bg-white text-slate-800"
                  >
                    <option value="1">À Vista (1 Parcela)</option>
                    <option value="2">Parcelado em 2 Vezes (50% / 50%)</option>
                    <option value="3">Parcelado em 3 Vezes (33% / 33% / 34%)</option>
                    <option value="4">Parcelado em 4 Vezes (25% cada)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase text-slate-500">
                    Datas de Vencimento de Cada Parcela:
                  </div>
                  {Array.from({ length: parseInt(ctForm.installmentsCount) || 1 }).map((_, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-600 w-24">
                        Parcela {idx + 1} ({formatCurrency((parseFloat(ctForm.contractValue) || 0) / parseInt(ctForm.installmentsCount))}):
                      </span>
                      <input
                        type="date"
                        value={ctForm.installmentDates[idx] || ctForm.deadline}
                        onChange={(e) => {
                          const newDates = [...ctForm.installmentDates];
                          newDates[idx] = e.target.value;
                          setCtForm({ ...ctForm, installmentDates: newDates });
                        }}
                        className="flex-1 px-3 py-1.5 rounded-xl border border-slate-300 text-xs bg-white font-semibold"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowContractModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold hover:bg-[#2D5A43]"
                >
                  Salvar Contrato e Gerar Parcelas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 5: CONFIRMAÇÃO DE EXCLUSÃO DE CONTRATO
      ==================================================================== */}
      {deleteContractTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-rose-200">
            <div className="px-6 py-4 bg-rose-700 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trash2 className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase">
                  Excluir Contrato {deleteContractTarget.id}
                </h3>
              </div>
              <button
                onClick={() => setDeleteContractTarget(null)}
                className="text-rose-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm">
              <p className="text-slate-700 leading-relaxed">
                Tem certeza que deseja excluir o contrato{' '}
                <strong>{deleteContractTarget.id}</strong> do cliente{' '}
                <strong>{deleteContractTarget.client}</strong> no valor de{' '}
                <strong>{formatCurrency(deleteContractTarget.contractValue)}</strong>?
              </p>

              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={deleteLinkedTransactions}
                  onChange={(e) => setDeleteLinkedTransactions(e.target.checked)}
                  className="mt-0.5 rounded border-rose-400 text-rose-700"
                />
                <span className="text-xs text-rose-900 font-medium">
                  Remover também todos os lançamentos financeiros vinculados a este contrato (
                  {
                    transactions.filter((t) => t.contractId === deleteContractTarget.id)
                      .length
                  }{' '}
                  lançamentos no Livro Caixa)
                </span>
              </label>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setDeleteContractTarget(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={confirmDeleteContract}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-700 text-white text-xs font-bold hover:bg-rose-800 transition"
                >
                  <Trash2 className="w-4 h-4" />
                  Confirmar Exclusão
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 6: CONFIRMAÇÃO DE EXCLUSÃO DE LANÇAMENTO DO LIVRO CAIXA
      ==================================================================== */}
      {deleteTxTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-rose-200">
            <div className="px-6 py-4 bg-rose-700 text-white flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase">
                Excluir Lançamento {deleteTxTarget.id}
              </h3>
              <button
                onClick={() => setDeleteTxTarget(null)}
                className="text-rose-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-xs sm:text-sm">
              <p className="text-slate-700">
                Deseja realmente remover o lançamento{' '}
                <strong>{deleteTxTarget.id}</strong> ({deleteTxTarget.description}) de{' '}
                <strong>{formatCurrency(deleteTxTarget.amount)}</strong>? O saldo de caixa e o DRE serão recalculados automaticamente.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setDeleteTxTarget(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmDeleteTransaction}
                  className="px-4 py-2 rounded-xl bg-rose-700 text-white text-xs font-bold hover:bg-rose-800"
                >
                  Excluir Lançamento
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 7: NOVO / EDITAR CLIENTE (CRM AMBIENTAL & SST)
      ==================================================================== */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="px-6 py-4 bg-[#1B3B2B] text-white flex items-center justify-between">
              <h3 className="text-base font-bold">
                {editingClient
                  ? `Editar Cliente ${editingClient.id}`
                  : 'Novo Cadastro de Cliente — CRM Ambiental & SST'}
              </h3>
              <button
                onClick={() => setShowClientModal(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveClient} className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Razão Social / Nome da Fazenda ou Empreendimento
                  </label>
                  <input
                    type="text"
                    value={cliForm.name}
                    onChange={(e) => setCliForm({ ...cliForm, name: e.target.value })}
                    placeholder="Ex: Agropecuária Rio Vermelho S/A (Fazenda São João)"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    CNPJ / CPF
                  </label>
                  <input
                    type="text"
                    value={cliForm.document}
                    onChange={(e) => setCliForm({ ...cliForm, document: e.target.value })}
                    placeholder="00.000.000/0001-00"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Nº CAR / Inscrição Estadual / Matrícula
                  </label>
                  <input
                    type="text"
                    value={cliForm.registration}
                    onChange={(e) =>
                      setCliForm({ ...cliForm, registration: e.target.value })
                    }
                    placeholder="Ex: CAR MT-5107602 / IE 13.000.000-0"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Segmento Econômico
                  </label>
                  <select
                    value={cliForm.segment}
                    onChange={(e) => setCliForm({ ...cliForm, segment: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                  >
                    {clientSegments.map((seg) => (
                      <option key={seg} value={seg}>
                        {seg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Cidade / UF
                  </label>
                  <input
                    type="text"
                    value={cliForm.city}
                    onChange={(e) => setCliForm({ ...cliForm, city: e.target.value })}
                    placeholder="Ex: Rondonópolis — MT"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Responsável / Contato Técnico
                  </label>
                  <input
                    type="text"
                    value={cliForm.contactName}
                    onChange={(e) =>
                      setCliForm({ ...cliForm, contactName: e.target.value })
                    }
                    placeholder="Nome do Engenheiro, Gerente ou Proprietário"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={cliForm.phone}
                    onChange={(e) => setCliForm({ ...cliForm, phone: e.target.value })}
                    placeholder="(66) 99999-0000"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    value={cliForm.email}
                    onChange={(e) => setCliForm({ ...cliForm, email: e.target.value })}
                    placeholder="contato@empresa.com.br"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Status do Cliente
                  </label>
                  <select
                    value={cliForm.status}
                    onChange={(e) => setCliForm({ ...cliForm, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                  >
                    {clientStatuses.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Licença / Programa Principal Contratado
                  </label>
                  <input
                    type="text"
                    value={cliForm.mainProgram}
                    onChange={(e) =>
                      setCliForm({ ...cliForm, mainProgram: e.target.value })
                    }
                    placeholder="Ex: Licenciamento LO SEMA-MT + Gestão Mensal eSocial SST"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowClientModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 font-semibold text-slate-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold hover:bg-[#2D5A43]"
                >
                  Salvar Cliente no CRM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 8: FICHA FINANCEIRA E HISTÓRICO DE CONTRATOS DO CLIENTE
      ==================================================================== */}
      {historyClientTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="px-6 py-4 bg-[#1B3B2B] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold">
                  Ficha Técnica & Financeira do Cliente ({historyClientTarget.id})
                </span>
                <h3 className="text-base font-extrabold">{historyClientTarget.name}</h3>
              </div>
              <button
                onClick={() => setHistoryClientTarget(null)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-xs sm:text-sm max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#F8F3EF] p-4 rounded-xl border border-[#D5CFC7]">
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-500">
                    CNPJ / CPF & Registro
                  </div>
                  <div className="font-bold text-[#1B3B2B]">
                    {historyClientTarget.document}
                  </div>
                  <div className="text-[11px] text-slate-600">
                    {historyClientTarget.registration}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-500">
                    Contato & Cidade
                  </div>
                  <div className="font-bold text-slate-800">
                    {historyClientTarget.contactName}
                  </div>
                  <div className="text-[11px] text-slate-600">
                    {historyClientTarget.city} • {historyClientTarget.phone}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-500">
                    Escopo Principal
                  </div>
                  <div className="font-bold text-emerald-800">
                    {historyClientTarget.mainProgram}
                  </div>
                </div>
              </div>

              {/* Lançamentos vinculados ao nome do cliente */}
              <div>
                <h4 className="text-xs font-extrabold uppercase text-[#1B3B2B] mb-2">
                  Movimentações no Livro Caixa deste Cliente
                </h4>
                {(() => {
                  const prefix = historyClientTarget.name.split(' ')[0].toLowerCase();
                  const clientTxs = transactions.filter(
                    (t) =>
                      t.entity
                        .toLowerCase()
                        .includes(historyClientTarget.name.toLowerCase()) ||
                      (prefix.length > 4 && t.entity.toLowerCase().includes(prefix))
                  );
                  if (clientTxs.length === 0) {
                    return (
                      <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl">
                        Nenhum lançamento direto localizado com esta razão social exata.
                      </p>
                    );
                  }
                  return (
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 font-bold text-slate-600">
                          <tr>
                            <th className="py-2 px-3">Data</th>
                            <th className="py-2 px-3">Descrição</th>
                            <th className="py-2 px-3 text-center">Status</th>
                            <th className="py-2 px-3 text-right">Valor</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {clientTxs.map((t) => (
                            <tr key={t.id}>
                              <td className="py-2 px-3">{t.date}</td>
                              <td className="py-2 px-3">{t.description}</td>
                              <td className="py-2 px-3 text-center font-bold">
                                {t.status}
                              </td>
                              <td className="py-2 px-3 text-right font-bold text-[#1B3B2B]">
                                {formatCurrency(t.amount)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })()}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setHistoryClientTarget(null)}
                  className="px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold"
                >
                  Fechar Ficha do Cliente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 9: CONFIRMAÇÃO DE EXCLUSÃO DE CLIENTE DO CRM
      ==================================================================== */}
      {deleteClientTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-rose-200">
            <div className="px-6 py-4 bg-rose-700 text-white flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase">
                Remover Cliente {deleteClientTarget.id}
              </h3>
              <button
                onClick={() => setDeleteClientTarget(null)}
                className="text-rose-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-xs sm:text-sm">
              <p className="text-slate-700">
                Confirma a exclusão do cliente{' '}
                <strong>{deleteClientTarget.name}</strong> do CRM Ambiental & SST?
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setDeleteClientTarget(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmDeleteClient}
                  className="px-4 py-2 rounded-xl bg-rose-700 text-white text-xs font-bold hover:bg-rose-800"
                >
                  Confirmar Exclusão
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 10: NOVO PERFIL / COLABORADOR NA ÁRVore DE ACESSOS
      ==================================================================== */}
      {showUserRoleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="px-6 py-4 bg-[#1B3B2B] text-white flex items-center justify-between">
              <h3 className="text-base font-bold">
                Adicionar Colaborador / Nível na Árvore de Acessos
              </h3>
              <button
                onClick={() => setShowUserRoleModal(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateCustomRole} className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Nível Hierárquico
                  </label>
                  <input
                    type="text"
                    value={newRoleForm.level}
                    onChange={(e) =>
                      setNewRoleForm({ ...newRoleForm, level: e.target.value })
                    }
                    placeholder="Ex: Nível 6 — Campo / Biólogo"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Cargo / Departamento
                  </label>
                  <input
                    type="text"
                    value={newRoleForm.name}
                    onChange={(e) =>
                      setNewRoleForm({ ...newRoleForm, name: e.target.value })
                    }
                    placeholder="Ex: Analista de Licenciamento"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Nome do Colaborador
                  </label>
                  <input
                    type="text"
                    value={newRoleForm.holder}
                    onChange={(e) =>
                      setNewRoleForm({ ...newRoleForm, holder: e.target.value })
                    }
                    placeholder="Ex: Eng. Lucas Andrade"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    E-mail de Acesso
                  </label>
                  <input
                    type="email"
                    value={newRoleForm.email}
                    onChange={(e) =>
                      setNewRoleForm({ ...newRoleForm, email: e.target.value })
                    }
                    placeholder="lucas@grupomartins.eng.br"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Escopo de Alçada e Responsabilidades
                </label>
                <input
                  type="text"
                  value={newRoleForm.description}
                  onChange={(e) =>
                    setNewRoleForm({ ...newRoleForm, description: e.target.value })
                  }
                  placeholder="Ex: Acesso a contratos e CRM, sem visualização de DRE e Pró-Labore"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowUserRoleModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 font-semibold text-slate-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold hover:bg-[#2D5A43]"
                >
                  Criar Perfil na Árvore
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL 10: NOVO PERFIL / COLABORADOR NA ÁRVORE DE ACESSOS
      ==================================================================== */}
      {showUserRoleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="px-6 py-4 bg-[#1B3B2B] text-white flex items-center justify-between">
              <h3 className="text-base font-bold">
                Adicionar Colaborador / Nível na Árvore de Acessos
              </h3>
              <button
                onClick={() => setShowUserRoleModal(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateCustomRole} className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Nível Hierárquico
                  </label>
                  <input
                    type="text"
                    value={newRoleForm.level}
                    onChange={(e) =>
                      setNewRoleForm({ ...newRoleForm, level: e.target.value })
                    }
                    placeholder="Ex: Nível 6 — Campo / Biólogo"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Cargo / Departamento
                  </label>
                  <input
                    type="text"
                    value={newRoleForm.name}
                    onChange={(e) =>
                      setNewRoleForm({ ...newRoleForm, name: e.target.value })
                    }
                    placeholder="Ex: Analista de Licenciamento"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Nome do Colaborador
                  </label>
                  <input
                    type="text"
                    value={newRoleForm.holder}
                    onChange={(e) =>
                      setNewRoleForm({ ...newRoleForm, holder: e.target.value })
                    }
                    placeholder="Ex: Eng. Lucas Andrade"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    E-mail de Acesso
                  </label>
                  <input
                    type="email"
                    value={newRoleForm.email}
                    onChange={(e) =>
                      setNewRoleForm({ ...newRoleForm, email: e.target.value })
                    }
                    placeholder="lucas@grupomartins.eng.br"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Senha de Acesso Personalizada
                </label>
                <input
                  type="text"
                  value={newRoleForm.password}
                  onChange={(e) =>
                    setNewRoleForm({ ...newRoleForm, password: e.target.value })
                  }
                  placeholder="Defina a senha do colaborador (ex: martins2026)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Escopo de Alçada e Responsabilidades
                </label>
                <input
                  type="text"
                  value={newRoleForm.description}
                  onChange={(e) =>
                    setNewRoleForm({ ...newRoleForm, description: e.target.value })
                  }
                  placeholder="Ex: Acesso a contratos e CRM, sem visualização de DRE e Pró-Labore"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowUserRoleModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 font-semibold text-slate-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold hover:bg-[#2D5A43]"
                >
                  Criar Perfil na Árvore
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          TELA DE LOGIN SEGURA (IMPEDE TROCA LIVRE DE PERFIL E ERRO DE MASTER)
      ==================================================================== */}
      {!authLoggedIn && (
        <div className="fixed inset-0 z-50 bg-[#1B3B2B]/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-emerald-900/20 text-center space-y-6">
            <GrupoMartinsLogo size="md" className="mx-auto" />
            <div>
              <h2 className="text-xl font-black text-[#1B3B2B]">
                Autenticação de Acesso — Grupo Martins
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Insira seu e-mail corporativo e senha cadastrados para acessar seu respectivo perfil.
              </p>
            </div>

            {authErrorMsg && (
              <div className="p-3 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold animate-bounce">
                {authErrorMsg}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAuthErrorMsg('');
                const inputEmail = authEmailInput.trim().toLowerCase();
                const inputPass = authPasswordInput.trim();

                const found = accessRoles.find(
                  (r) => r.email && r.email.toLowerCase() === inputEmail
                );

                if (!found) {
                  setAuthErrorMsg('E-mail não cadastrado na base de acessos. Verifique o endereço digitado.');
                  return;
                }

                if (found.password && found.password !== inputPass) {
                  setAuthErrorMsg('Senha incorreta para este usuário.');
                  return;
                }

                setActiveRoleId(found.id);
                setAuthLoggedIn(true);
                showToast(`Bem-vindo(a), ${found.holder}! Acesso autorizado.`);
              }}
              className="space-y-4 text-left text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  value={authEmailInput}
                  onChange={(e) => setAuthEmailInput(e.target.value)}
                  placeholder="ex: maikon@grupomartins.eng.br"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-[#1B3B2B]"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  Senha de Acesso
                </label>
                <input
                  type="password"
                  value={authPasswordInput}
                  onChange={(e) => setAuthPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-[#1B3B2B]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] transition shadow-md"
              >
                Entrar no Sistema ERP
              </button>
            </form>

            <div className="text-[11px] text-slate-400"
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
