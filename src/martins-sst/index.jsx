import React, { useState, useEffect, useCallback } from 'react';
import { Search, ShieldCheck, Building2, RotateCcw } from 'lucide-react';
import { SST_TABS } from './sstConstants';
import SstCentralHub from './modules/SstCentralHub';
import SstPainelAlertas from './modules/SstPainelAlertas';
import SstEstruturaVidas from './modules/SstEstruturaVidas';
import SstEngenhariaGro from './modules/SstEngenhariaGro';
import SstMedicinaPcmso from './modules/SstMedicinaPcmso';
import SstEpisNrs from './modules/SstEpisNrs';
import SstEsocial from './modules/SstEsocial';
import SstGestaoGed from './modules/SstGestaoGed';

export default function MartinsSegurancaTrabalho({
  supabase,
  clients = [],
  params,
  transactions = [],
  onAddTransaction,
  showToast
}) {
  const [activeSubTab, setActiveSubTab] = useState('hub');
  const [subSection, setSubSection] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClientId, setSelectedClientId] = useState(() => clients[0]?.id || '');
  const [loading, setLoading] = useState(false);

  const [sstData, setSstData] = useState({
    units: [],
    sectors: [],
    roles: [],
    ghes: [],
    employees: [],
    risks: [],
    examMatrix: [],
    asos: [],
    epis: [],
    epiDeliveries: [],
    trainings: [],
    accidents: [],
    cipaMandates: [],
    esocialEvents: [],
    documents: []
  });

  useEffect(() => {
    if (!selectedClientId && clients.length > 0) {
      setSelectedClientId(clients[0].id);
    }
  }, [clients, selectedClientId]);

  const loadSstData = useCallback(async () => {
    if (!supabase) return;
    setLoading(true);
    try {
      const filterByClient = (q) =>
        selectedClientId ? q.eq('client_id', String(selectedClientId)) : q;

      const [
        unitsRes,
        sectorsRes,
        rolesRes,
        ghesRes,
        empRes,
        risksRes,
        matrixRes,
        asosRes,
        episRes,
        delivRes,
        trainRes,
        accRes,
        cipaRes,
        esocRes,
        docsRes
      ] = await Promise.all([
        filterByClient(supabase.from('sst_units').select('*')),
        filterByClient(supabase.from('sst_sectors').select('*')),
        filterByClient(supabase.from('sst_roles').select('*')),
        filterByClient(supabase.from('sst_ghes').select('*')),
        filterByClient(supabase.from('sst_employees').select('*')),
        filterByClient(supabase.from('sst_risks').select('*')),
        filterByClient(supabase.from('sst_exam_matrix').select('*')),
        filterByClient(supabase.from('sst_asos').select('*')),
        supabase.from('sst_epis').select('*'),
        filterByClient(supabase.from('sst_epi_deliveries').select('*')),
        filterByClient(supabase.from('sst_trainings').select('*')),
        filterByClient(supabase.from('sst_accidents_cat').select('*')),
        filterByClient(supabase.from('sst_cipa_mandates').select('*')),
        filterByClient(supabase.from('sst_esocial_events').select('*')),
        filterByClient(supabase.from('sst_documents').select('*'))
      ]);

      setSstData({
        units: unitsRes.data || [],
        sectors: sectorsRes.data || [],
        roles: rolesRes.data || [],
        ghes: ghesRes.data || [],
        employees: empRes.data || [],
        risks: risksRes.data || [],
        examMatrix: matrixRes.data || [],
        asos: asosRes.data || [],
        epis: episRes.data || [],
        epiDeliveries: delivRes.data || [],
        trainings: trainRes.data || [],
        accidents: accRes.data || [],
        cipaMandates: cipaRes.data || [],
        esocialEvents: esocRes.data || [],
        documents: docsRes.data || []
      });
    } catch (err) {
      console.error('Erro ao carregar dados de SST:', err);
    } finally {
      setLoading(false);
    }
  }, [supabase, selectedClientId]);

  useEffect(() => {
    loadSstData();
  }, [loadSstData]);

  const stats = React.useMemo(() => {
    const now = Date.now();
    const in30Days = now + 30 * 24 * 60 * 60 * 1000;

    const countExpiring = (items, dateField) =>
      items.filter((item) => {
        const raw = item?.[dateField];
        if (!raw) return false;
        const ts = new Date(String(raw).slice(0, 10)).getTime();
        return !isNaN(ts) && ts <= in30Days;
      }).length;

    return {
      employeesCount: sstData.employees.length,
      asosExpiring30d: countExpiring(sstData.asos, 'next_due_date'),
      trainingsExpiring30d: countExpiring(sstData.trainings, 'expiration_date'),
      esocialCount: sstData.esocialEvents.length,
      risksCount: sstData.risks.length,
      docsCount: sstData.documents.length
    };
  }, [sstData]);

  const handleSelectModule = (tabId, nextSubSection = '') => {
    setActiveSubTab(tabId);
    setSubSection(nextSubSection);
  };

  return (
    <div className="space-y-5">
      <div className="bg-gradient-to-r from-[#1B3B2B] via-[#244B38] to-[#2D5A43] rounded-2xl p-5 text-white shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F8F3EF] text-[#1B3B2B] font-black text-base flex items-center justify-center shrink-0 shadow">
            MS
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-emerald-300 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Gestão Ocupacional Integrada • Padrão SOC</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
              MARTINS SEGURANÇA DO TRABALHO
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 bg-white text-[#1B3B2B] px-3 py-2 rounded-xl shadow-sm">
            <Building2 className="w-4 h-4 text-[#2D5A43] shrink-0" />
            <span className="text-[11px] font-extrabold uppercase whitespace-nowrap">
              Empresa Ativa:
            </span>
            <select
              value={selectedClientId}
              onChange={(e) => setSelectedClientId(e.target.value)}
              className="text-xs font-bold bg-transparent focus:outline-none cursor-pointer max-w-[230px]"
            >
              <option value="">Todas as Empresas</option>
              {clients.map((cli) => (
                <option key={cli.id} value={cli.id}>
                  {cli.name}
                </option>
              ))}
            </select>
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar função (PGR, ASO, NR, S-2220)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white text-slate-800 text-xs font-semibold shadow-sm focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={loadSstData}
            disabled={loading}
            className="p-2.5 rounded-xl bg-[#132A1F] text-emerald-200 hover:text-white border border-emerald-500/30 cursor-pointer disabled:opacity-50"
            title="Sincronizar dados SST com o Supabase"
          >
            <RotateCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-1.5">
        {SST_TABS.map((tab) => {
          const isSelected = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveSubTab(tab.id);
                setSubSection('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                isSelected
                  ? 'bg-[#1B3B2B] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-[#F8F3EF] hover:text-[#1B3B2B]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeSubTab === 'hub' && (
        <SstCentralHub
          searchTerm={searchTerm}
          stats={stats}
          onSelectModule={handleSelectModule}
        />
      )}

      {activeSubTab === 'alertas' && (
        <SstPainelAlertas
          sstData={sstData}
          clients={clients}
        />
      )}

      {activeSubTab === 'estrutura' && (
        <SstEstruturaVidas
          supabase={supabase}
          selectedClientId={selectedClientId}
          clients={clients}
          sstData={sstData}
          onReload={loadSstData}
          showToast={showToast}
        />
      )}

      {activeSubTab === 'engenharia' && (
        <SstEngenhariaGro
          supabase={supabase}
          selectedClientId={selectedClientId}
          clients={clients}
          sstData={sstData}
          onReload={loadSstData}
          showToast={showToast}
          params={params}
        />
      )}

      {activeSubTab === 'medicina' && (
        <SstMedicinaPcmso
          supabase={supabase}
          selectedClientId={selectedClientId}
          clients={clients}
          sstData={sstData}
          onReload={loadSstData}
          showToast={showToast}
          params={params}
        />
      )}

      {activeSubTab === 'epis_nrs' && (
        <SstEpisNrs
          supabase={supabase}
          selectedClientId={selectedClientId}
          clients={clients}
          sstData={sstData}
          onReload={loadSstData}
          showToast={showToast}
          params={params}
        />
      )}

      {activeSubTab === 'esocial' && (
        <SstEsocial
          supabase={supabase}
          selectedClientId={selectedClientId}
          clients={clients}
          sstData={sstData}
          onReload={loadSstData}
          showToast={showToast}
        />
      )}

      {activeSubTab === 'gestao_ged' && (
        <SstGestaoGed
          supabase={supabase}
          selectedClientId={selectedClientId}
          clients={clients}
          sstData={sstData}
          onReload={loadSstData}
          showToast={showToast}
          params={params}
          onAddTransaction={onAddTransaction}
        />
      )}
    </div>
  );
}
