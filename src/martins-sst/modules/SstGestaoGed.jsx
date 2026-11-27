import React, { useState, useMemo } from 'react';
import {
  Siren,
  Users2,
  Receipt,
  FolderArchive,
  Plus,
  Trash2,
  Printer,
  CheckCircle2
} from 'lucide-react';

const generateTxId = () => `MT-${Date.now().toString(36).toUpperCase()}`;
const MONTH_MAP = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export default function SstGestaoGed({
  supabase,
  selectedClientId,
  clients = [],
  sstData,
  onReload,
  showToast,
  params,
  onAddTransaction
}) {
  const [section, setSection] = useState('cat'); // cat | cipa | faturamento | ged
  const [saving, setSaving] = useState(false);

  // Estado CAT & Acidentes
  const [catForm, setCatForm] = useState({
    employee_id: '',
    accident_date: new Date().toISOString().slice(0, 16),
    accident_type: 'Típico',
    body_part: '',
    causative_agent: '',
    cid_code: '',
    cat_number: '',
    leave_days: 0,
    investigation_notes: ''
  });

  // Estado CIPA & Brigada
  const [cipaForm, setCipaForm] = useState({
    unit_id: '',
    mandate_year: '2026/2027',
    start_date: '2026-01-01',
    end_date: '2027-12-31',
    president_name: '',
    vice_name: '',
    meeting_notes: ''
  });

  // Estado Faturamento direto no Livro Caixa / DRE
  const [billForm, setBillForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    planocontas: '1.1.04',
    category: '1.1.04 — Segurança do Trabalho (PGR / PCMSO / LTCAT)',
    entity: '',
    description: '',
    amount: '',
    status: 'Pago / Recebido'
  });

  // Estado GED SST
  const [docForm, setDocForm] = useState({
    employee_id: '',
    doc_type: 'PGR',
    title: '',
    issue_date: new Date().toISOString().slice(0, 10),
    expiration_date: '',
    file_url: '',
    notes: ''
  });

  const clientObj = useMemo(
    () => clients.find((c) => String(c.id) === String(selectedClientId)) || null,
    [clients, selectedClientId]
  );

  const clientName = clientObj ? clientObj.name : 'Todas as Empresas';

  const empMap = useMemo(() => {
    const m = {};
    (sstData.employees || []).forEach((e) => { m[e.id] = e; });
    return m;
  }, [sstData.employees]);

  const unitMap = useMemo(() => {
    const m = {};
    (sstData.units || []).forEach((u) => { m[u.id] = u.name; });
    return m;
  }, [sstData.units]);

  const handleSaveCat = async (e) => {
    e.preventDefault();
    const cid = selectedClientId || clients[0]?.id || '';
    if (!cid || !catForm.employee_id) {
      alert('Selecione a empresa e o colaborador.');
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_accidents_cat').insert([{
        client_id: String(cid),
        employee_id: catForm.employee_id,
        accident_date: catForm.accident_date ? new Date(catForm.accident_date).toISOString() : new Date().toISOString(),
        accident_type: catForm.accident_type,
        body_part: catForm.body_part.trim() || null,
        causative_agent: catForm.causative_agent.trim() || null,
        cid_code: catForm.cid_code.trim() || null,
        cat_number: catForm.cat_number.trim() || null,
        leave_days: Number(catForm.leave_days) || 0,
        investigation_notes: catForm.investigation_notes.trim() || null
      }]);
      if (error) throw error;
      setCatForm({ ...catForm, body_part: '', causative_agent: '', cid_code: '', cat_number: '', leave_days: 0, investigation_notes: '' });
      showToast('Registro de acidente / CAT salvo!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar CAT: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveCipa = async (e) => {
    e.preventDefault();
    const cid = selectedClientId || clients[0]?.id || '';
    if (!cid || !cipaForm.mandate_year.trim()) {
      alert('Selecione a empresa e informe o mandato.');
      return;
    }
    setSaving(true);
    try {
      const members = [
        cipaForm.president_name && { name: cipaForm.president_name.trim(), role: 'Presidente / Coordenação' },
        cipaForm.vice_name && { name: cipaForm.vice_name.trim(), role: 'Vice-Presidente / Empregados' }
      ].filter(Boolean);

      const meetings = cipaForm.meeting_notes.trim()
        ? [{ date: new Date().toISOString().slice(0, 10), notes: cipaForm.meeting_notes.trim() }]
        : [];

      const { error } = await supabase.from('sst_cipa_mandates').insert([{
        client_id: String(cid),
        unit_id: cipaForm.unit_id || null,
        mandate_year: cipaForm.mandate_year.trim(),
        start_date: cipaForm.start_date || null,
        end_date: cipaForm.end_date || null,
        members,
        meetings
      }]);
      if (error) throw error;
      setCipaForm({ ...cipaForm, president_name: '', vice_name: '', meeting_notes: '' });
      showToast('Mandato / registro da CIPA salvo!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar CIPA: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleBillToErp = async (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(String(billForm.amount).replace(',', '.'));
    const favorecido = (billForm.entity || clientObj?.name || '').trim();
    if (!favorecido || isNaN(numericAmount) || numericAmount <= 0) {
      alert('Informe o cliente/favorecido e um valor válido.');
      return;
    }

    const dt = billForm.date || new Date().toISOString().slice(0, 10);
    const mIdx = Math.max(0, Math.min(11, (parseInt(dt.split('-')[1], 10) || 1) - 1));

    const txRecord = {
      id: generateTxId(),
      date: dt,
      month: MONTH_MAP[mIdx],
      type: 'Entrada',
      planocontas: billForm.planocontas,
      category: billForm.category,
      entity: favorecido,
      contractid: 'SST',
      description: billForm.description.trim() || `Serviço SST — ${favorecido}`,
      paymentmethod: 'PIX',
      status: billForm.status,
      amount: numericAmount
    };

    setSaving(true);
    try {
      if (supabase) {
        const { error } = await supabase.from('transactions').insert([txRecord]);
        if (error) throw error;
      }
      onAddTransaction?.(txRecord);
      setBillForm({ ...billForm, description: '', amount: '' });
      showToast('Lançamento enviado para o Livro Caixa e DRE!');
    } catch (err) {
      alert('Erro ao lançar no Livro Caixa: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveDoc = async (e) => {
    e.preventDefault();
    const cid = selectedClientId || clients[0]?.id || '';
    if (!cid || !docForm.title.trim()) {
      alert('Selecione a empresa e informe o título do documento.');
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_documents').insert([{
        client_id: String(cid),
        employee_id: docForm.employee_id || null,
        doc_type: docForm.doc_type,
        title: docForm.title.trim(),
        issue_date: docForm.issue_date || null,
        expiration_date: docForm.expiration_date || null,
        file_url: docForm.file_url.trim() || null,
        notes: docForm.notes.trim() || null
      }]);
      if (error) throw error;
      setDocForm({ ...docForm, title: '', expiration_date: '', file_url: '', notes: '' });
      showToast('Documento arquivado no GED SST!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar documento no GED: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (table, id, label) => {
    if (!window.confirm(`Excluir ${label}?`)) return;
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) {
      alert('Erro ao excluir: ' + error.message);
      return;
    }
    showToast(`${label} excluído!`);
    await onReload?.();
  };

  return (
    <div className="space-y-5">
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'cat', label: 'CAT & Acidentes', icon: Siren },
            { id: 'cipa', label: 'CIPA & Brigada', icon: Users2 },
            { id: 'faturamento', label: 'Faturamento (Caixa / DRE)', icon: Receipt },
            { id: 'ged', label: 'GED SST (Documentos)', icon: FolderArchive }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = section === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSection(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                  active ? 'bg-[#1B3B2B] text-white' : 'bg-[#F8F3EF] text-[#1B3B2B] hover:bg-[#EAE3DA]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold hover:bg-[#2D5A43] cursor-pointer">
          <Printer className="w-3.5 h-3.5" /> Imprimir
        </button>
      </div>

      {/* 1. CAT & ACIDENTES */}
      {section === 'cat' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveCat} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
            <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase border-b pb-2.5">
              Registrar Acidente / CAT — {clientName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Colaborador</label>
                <select value={catForm.employee_id} onChange={(e) => setCatForm({ ...catForm, employee_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white" required>
                  <option value="">Selecione...</option>
                  {(sstData.employees || []).map((emp) => (
                    <option key={emp.id} value={emp.id}>{emp.full_name} ({emp.cpf})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Data / Hora</label>
                <input type="datetime-local" value={catForm.accident_date} onChange={(e) => setCatForm({ ...catForm, accident_date: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold" required />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Tipo</label>
                <select value={catForm.accident_type} onChange={(e) => setCatForm({ ...catForm, accident_type: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
                  <option value="Típico">Típico</option>
                  <option value="Trajeto">Trajeto</option>
                  <option value="Doença Ocupacional">Doença Ocupacional</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nº da CAT / CID</label>
                <div className="flex gap-1.5">
                  <input type="text" value={catForm.cat_number} onChange={(e) => setCatForm({ ...catForm, cat_number: e.target.value })} placeholder="Nº CAT" className="w-1/2 px-2.5 py-2 rounded-xl border font-mono" />
                  <input type="text" value={catForm.cid_code} onChange={(e) => setCatForm({ ...catForm, cid_code: e.target.value })} placeholder="CID" className="w-1/2 px-2.5 py-2 rounded-xl border font-mono" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Parte Atingida</label>
                <input type="text" value={catForm.body_part} onChange={(e) => setCatForm({ ...catForm, body_part: e.target.value })} placeholder="Ex: Mão direita" className="w-full px-3 py-2 rounded-xl border" />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Agente Causador</label>
                <input type="text" value={catForm.causative_agent} onChange={(e) => setCatForm({ ...catForm, causative_agent: e.target.value })} placeholder="Ex: Ferramenta manual" className="w-full px-3 py-2 rounded-xl border" />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Dias de Afastamento</label>
                <input type="number" value={catForm.leave_days} onChange={(e) => setCatForm({ ...catForm, leave_days: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" />
              </div>
              <div className="flex items-end">
                <button type="submit" disabled={saving} className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                  <Plus className="w-4 h-4" /> Salvar CAT
                </button>
              </div>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Colaborador</th>
                  <th className="py-3 px-3">Tipo / CAT</th>
                  <th className="py-3 px-3">Parte / Agente</th>
                  <th className="py-3 px-3">Afastamento</th>
                  <th className="py-3 px-3 text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.accidents || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhum acidente ou CAT registrado.</td></tr>
                ) : (sstData.accidents || []).map((acc) => (
                  <tr key={acc.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold">{empMap[acc.employee_id]?.full_name || 'Colaborador'}</td>
                    <td className="py-3 px-3 font-semibold">{acc.accident_type} • CAT {acc.cat_number || '—'}</td>
                    <td className="py-3 px-3">{acc.body_part || '—'} • {acc.causative_agent || '—'}</td>
                    <td className="py-3 px-3 font-mono">{acc.leave_days || 0} dia(s)</td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_accidents_cat', acc.id, 'CAT')} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. CIPA & BRIGADA */}
      {section === 'cipa' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveCipa} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
            <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase border-b pb-2.5">
              Mandato da CIPA &amp; Brigada — {clientName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Unidade</label>
                <select value={cipaForm.unit_id} onChange={(e) => setCipaForm({ ...cipaForm, unit_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold bg-white">
                  <option value="">Geral / Unidade</option>
                  {(sstData.units || []).map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Mandato (Ano)</label>
                <input type="text" value={cipaForm.mandate_year} onChange={(e) => setCipaForm({ ...cipaForm, mandate_year: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" required />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Início / Fim</label>
                <div className="flex gap-1.5">
                  <input type="date" value={cipaForm.start_date} onChange={(e) => setCipaForm({ ...cipaForm, start_date: e.target.value })} className="w-1/2 px-2 py-2 rounded-xl border text-[11px]" />
                  <input type="date" value={cipaForm.end_date} onChange={(e) => setCipaForm({ ...cipaForm, end_date: e.target.value })} className="w-1/2 px-2 py-2 rounded-xl border text-[11px]" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Presidente / Vice</label>
                <div className="flex gap-1.5">
                  <input type="text" value={cipaForm.president_name} onChange={(e) => setCipaForm({ ...cipaForm, president_name: e.target.value })} placeholder="Presidente" className="w-1/2 px-2.5 py-2 rounded-xl border" />
                  <input type="text" value={cipaForm.vice_name} onChange={(e) => setCipaForm({ ...cipaForm, vice_name: e.target.value })} placeholder="Vice" className="w-1/2 px-2.5 py-2 rounded-xl border" />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" disabled={saving} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                <Plus className="w-4 h-4" /> Salvar Mandato CIPA
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Mandato</th>
                  <th className="py-3 px-3">Unidade</th>
                  <th className="py-3 px-3">Vigência</th>
                  <th className="py-3 px-3">Membros</th>
                  <th className="py-3 px-3 text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.cipaMandates || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhum mandato da CIPA cadastrado.</td></tr>
                ) : (sstData.cipaMandates || []).map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold text-[#1B3B2B]">{c.mandate_year}</td>
                    <td className="py-3 px-3">{unitMap[c.unit_id] || 'Geral'}</td>
                    <td className="py-3 px-3 font-mono text-[11px]">{c.start_date || '—'} até {c.end_date || '—'}</td>
                    <td className="py-3 px-3">{Array.isArray(c.members) ? c.members.map((m) => `${m.name} (${m.role})`).join(', ') : '—'}</td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_cipa_mandates', c.id, c.mandate_year)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. FATURAMENTO DIRETO NO LIVRO CAIXA / DRE */}
      {section === 'faturamento' && (
        <form onSubmit={handleBillToErp} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="border-b pb-2.5">
            <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase">
              Lançar Receita de SST no Livro Caixa &amp; DRE
            </h3>
            <p className="text-slate-500 mt-0.5">
              Grava diretamente na tabela <code className="font-mono">transactions</code> do seu ERP principal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Data</label>
              <input type="date" value={billForm.date} onChange={(e) => setBillForm({ ...billForm, date: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Conta de Receita (DRE)</label>
              <select
                value={billForm.planocontas}
                onChange={(e) => {
                  const code = e.target.value;
                  const label = code === '1.1.05'
                    ? '1.1.05 — Gestão de eSocial SST e Treinamentos NRs'
                    : '1.1.04 — Segurança do Trabalho (PGR / PCMSO / LTCAT)';
                  setBillForm({ ...billForm, planocontas: code, category: label });
                }}
                className="w-full px-3 py-2 rounded-xl border font-bold bg-white"
              >
                <option value="1.1.04">1.1.04 — Segurança do Trabalho (PGR / PCMSO / LTCAT)</option>
                <option value="1.1.05">1.1.05 — Gestão de eSocial SST e Treinamentos NRs</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Cliente / Favorecido</label>
              <input
                type="text"
                value={billForm.entity || clientObj?.name || ''}
                onChange={(e) => setBillForm({ ...billForm, entity: e.target.value })}
                placeholder="Nome do cliente..."
                className="w-full px-3 py-2 rounded-xl border font-bold"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Valor (R$)</label>
              <input type="number" step="0.01" value={billForm.amount} onChange={(e) => setBillForm({ ...billForm, amount: e.target.value })} placeholder="0.00" className="w-full px-3 py-2 rounded-xl border font-black text-[#1B3B2B]" required />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Descrição do Serviço / Lote</label>
              <input type="text" value={billForm.description} onChange={(e) => setBillForm({ ...billForm, description: e.target.value })} placeholder="Ex: Elaboração PGR/PCMSO + 12 ASOs" className="w-full px-3 py-2 rounded-xl border" />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Status</label>
              <select value={billForm.status} onChange={(e) => setBillForm({ ...billForm, status: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
                <option value="Pago / Recebido">Pago / Recebido</option>
                <option value="Pendente">Pendente</option>
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" disabled={saving} className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                <CheckCircle2 className="w-4 h-4" /> Lançar no Caixa
              </button>
            </div>
          </div>
        </form>
      )}

      {/* 4. GED SST */}
      {section === 'ged' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveDoc} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
            <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase border-b pb-2.5">
              GED SST — Arquivar Documento / Laudo — {clientName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Tipo de Documento</label>
                <select value={docForm.doc_type} onChange={(e) => setDocForm({ ...docForm, doc_type: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
                  <option value="PGR">PGR</option>
                  <option value="PCMSO">PCMSO</option>
                  <option value="LTCAT">LTCAT</option>
                  <option value="ASO">ASO</option>
                  <option value="PPP">PPP</option>
                  <option value="Certificado NR">Certificado NR</option>
                  <option value="Ficha EPI">Ficha EPI</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Título / Descrição</label>
                <input type="text" value={docForm.title} onChange={(e) => setDocForm({ ...docForm, title: e.target.value })} placeholder="Ex: PGR 2026 — Unidade Sede" className="w-full px-3 py-2 rounded-xl border font-bold" required />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Colaborador (Opcional)</label>
                <select value={docForm.employee_id} onChange={(e) => setDocForm({ ...docForm, employee_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold bg-white">
                  <option value="">Documento da Empresa</option>
                  {(sstData.employees || []).map((emp) => <option key={emp.id} value={emp.id}>{emp.full_name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Link / URL do Arquivo</label>
                <input type="text" value={docForm.file_url} onChange={(e) => setDocForm({ ...docForm, file_url: e.target.value })} placeholder="https://..." className="w-full px-3 py-2 rounded-xl border" />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" disabled={saving} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                <Plus className="w-4 h-4" /> Registrar Documento
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Tipo</th>
                  <th className="py-3 px-3">Título</th>
                  <th className="py-3 px-3">Colaborador</th>
                  <th className="py-3 px-3">Link</th>
                  <th className="py-3 px-3 text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.documents || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhum documento registrado no GED SST.</td></tr>
                ) : (sstData.documents || []).map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-extrabold text-[#1B3B2B]">{doc.doc_type}</td>
                    <td className="py-3 px-3 font-bold">{doc.title}</td>
                    <td className="py-3 px-3">{empMap[doc.employee_id]?.full_name || 'Empresa'}</td>
                    <td className="py-3 px-3">
                      {doc.file_url ? (
                        <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold underline">Abrir</a>
                      ) : '—'}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_documents', doc.id, doc.title)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
