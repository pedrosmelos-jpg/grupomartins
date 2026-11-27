import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  Grid,
  ClipboardList,
  FileText,
  Plus,
  Trash2,
  Printer,
  CheckCircle2
} from 'lucide-react';
import {
  RISK_CATEGORIES,
  ESOCIAL_TAB24_SAMPLES,
  calcRiskMatrix5x5
} from '../sstConstants';

const emptyRiskForm = (clientId) => ({
  client_id: String(clientId || ''),
  ghe_id: '',
  role_id: '',
  category: RISK_CATEGORIES[0],
  agent_name: '',
  esocial_code: '',
  generating_source: '',
  propagation_means: '',
  evaluation_type: 'Qualitativa',
  intensity_value: '',
  tolerance_limit: '',
  probability: 2,
  severity: 2,
  existing_controls: '',
  action_desc: '',
  action_responsible: '',
  action_deadline: '',
  generates_ltcat: false
});

export default function SstEngenhariaGro({
  supabase,
  selectedClientId,
  clients = [],
  sstData,
  onReload,
  showToast,
  params
}) {
  const [section, setSection] = useState('riscos'); // riscos | matriz | plano_acao | ltcat_ppp | ergonomia
  const [form, setForm] = useState(() => emptyRiskForm(selectedClientId));
  const [saving, setSaving] = useState(false);

  const clientName = useMemo(() => {
    const found = clients.find((c) => String(c.id) === String(selectedClientId));
    return found ? found.name : 'Todas as Empresas';
  }, [clients, selectedClientId]);

  const gheMap = useMemo(() => {
    const m = {};
    (sstData.ghes || []).forEach((g) => {
      m[g.id] = `${g.code} — ${g.name}`;
    });
    return m;
  }, [sstData.ghes]);

  const roleMap = useMemo(() => {
    const m = {};
    (sstData.roles || []).forEach((r) => {
      m[r.id] = r.cbo ? `${r.name} (CBO ${r.cbo})` : r.name;
    });
    return m;
  }, [sstData.roles]);

  const risks = sstData.risks || [];

  const handleSaveRisk = async (e) => {
    e.preventDefault();
    const cid = form.client_id || selectedClientId || clients[0]?.id || '';
    if (!cid || !form.agent_name.trim()) {
      alert('Selecione a empresa e informe o agente / perigo.');
      return;
    }

    const matrix = calcRiskMatrix5x5(form.probability, form.severity);
    const actions = form.action_desc.trim()
      ? [
          {
            action: form.action_desc.trim(),
            responsible: form.action_responsible.trim() || 'Técnico SST',
            deadline: form.action_deadline || null,
            status: 'Pendente'
          }
        ]
      : [];

    setSaving(true);
    try {
      const { error } = await supabase.from('sst_risks').insert([
        {
          client_id: String(cid),
          ghe_id: form.ghe_id || null,
          role_id: form.role_id || null,
          category: form.category,
          agent_name: form.agent_name.trim(),
          esocial_code: form.esocial_code.trim() || null,
          generating_source: form.generating_source.trim() || null,
          propagation_means: form.propagation_means.trim() || null,
          evaluation_type: form.evaluation_type,
          intensity_value: form.intensity_value.trim() || null,
          tolerance_limit: form.tolerance_limit.trim() || null,
          probability: Number(form.probability) || 1,
          severity: Number(form.severity) || 1,
          risk_level: matrix.level,
          existing_controls: form.existing_controls.trim() || null,
          action_plan: actions,
          generates_ltcat: Boolean(form.generates_ltcat)
        }
      ]);
      if (error) throw error;
      setForm(emptyRiskForm(cid));
      showToast(`Risco salvo na Matriz 5×5 (${matrix.level})!`);
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar risco: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActionStatus = async (risk, idx) => {
    const currentList = Array.isArray(risk.action_plan) ? [...risk.action_plan] : [];
    if (!currentList[idx]) return;
    currentList[idx] = {
      ...currentList[idx],
      status: currentList[idx].status === 'Concluído' ? 'Pendente' : 'Concluído'
    };
    const { error } = await supabase
      .from('sst_risks')
      .update({ action_plan: currentList })
      .eq('id', risk.id);
    if (error) {
      alert('Erro ao atualizar ação: ' + error.message);
      return;
    }
    showToast('Status do plano de ação atualizado!');
    await onReload?.();
  };

  const handleDeleteRisk = async (id, name) => {
    if (!window.confirm(`Excluir o risco "${name}"?`)) return;
    const { error } = await supabase.from('sst_risks').delete().eq('id', id);
    if (error) {
      alert('Erro ao excluir risco: ' + error.message);
      return;
    }
    showToast('Risco excluído!');
    await onReload?.();
  };

  const printTechnicalDoc = (docTitle) => {
    const win = window.open('', '_blank', 'width=980,height=820');
    if (!win) {
      alert('Permita pop-ups para imprimir o documento.');
      return;
    }
    const rowsHtml = risks
      .map((r) => {
        const m = calcRiskMatrix5x5(r.probability, r.severity);
        const acts = Array.isArray(r.action_plan)
          ? r.action_plan.map((a) => `${a.action} (${a.status || 'Pendente'})`).join(' | ')
          : '—';
        return `
          <tr>
            <td>${r.category || '—'}</td>
            <td><strong>${r.agent_name || '—'}</strong></td>
            <td>${r.esocial_code || '—'}</td>
            <td>${gheMap[r.ghe_id] || '—'}</td>
            <td>P:${r.probability || 1} × S:${r.severity || 1} (${m.level})</td>
            <td>${r.existing_controls || '—'}</td>
            <td>${acts || '—'}</td>
          </tr>
        `;
      })
      .join('');

    win.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>${docTitle} — ${clientName}</title>
  <style>
    @page { size: A4 landscape; margin: 14mm; }
    body { font-family: Arial, sans-serif; color: #1e293b; font-size: 10px; }
    .hdr { border-bottom: 2px solid #1B3B2B; padding-bottom: 8px; margin-bottom: 12px; display: flex; justify-content: space-between; }
    h1 { margin: 0; font-size: 15px; color: #1B3B2B; text-transform: uppercase; }
    table { width: 100%; border-collapse: collapse; }
    th { background: #1B3B2B; color: #fff; padding: 6px; text-align: left; border: 1px solid #1B3B2B; }
    td { padding: 6px; border: 1px solid #cbd5e1; vertical-align: top; }
  </style>
</head>
<body>
  <div class="hdr">
    <div>
      <h1>${docTitle}</h1>
      <div>Empresa / Cliente: <strong>${clientName}</strong></div>
    </div>
    <div style="text-align:right">
      <div><strong>GRUPO MARTINS</strong> — Soluções Ambientais &amp; MS Segurança</div>
      <div>CNPJ: ${params?.cnpj || '48.921.654/0001-82'} • ${params?.cidadeSede || 'Rondonópolis — MT'}</div>
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th>Grupo</th>
        <th>Agente / Perigo</th>
        <th>Tab. 24</th>
        <th>GHE</th>
        <th>Matriz 5×5</th>
        <th>Controles Existentes</th>
        <th>Plano de Ação</th>
      </tr>
    </thead>
    <tbody>${rowsHtml || '<tr><td colspan="7">Nenhum risco registrado para esta empresa.</td></tr>'}</tbody>
  </table>
  <script>window.onload = function(){ setTimeout(function(){ window.print(); }, 200); };</script>
</body>
</html>`);
    win.document.close();
  };

  const previewMatrix = calcRiskMatrix5x5(form.probability, form.severity);

  const actionItems = useMemo(() => {
    const list = [];
    risks.forEach((r) => {
      (Array.isArray(r.action_plan) ? r.action_plan : []).forEach((act, idx) => {
        list.push({
          risk: r,
          idx,
          ...act
        });
      });
    });
    return list;
  }, [risks]);

  return (
    <div className="space-y-5">
      {/* Barra de Sub-abas & Documentos Técnicos */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'riscos', label: 'Inventário de Riscos', icon: AlertTriangle },
            { id: 'matriz', label: 'Matriz 5×5', icon: Grid },
            { id: 'plano_acao', label: 'Plano de Ação PGR', icon: ClipboardList },
            { id: 'ltcat_ppp', label: 'LTCAT & PPP', icon: FileText },
            { id: 'ergonomia', label: 'Insalubridade & Ergonomia', icon: AlertTriangle }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = section === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSection(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                  active ? 'bg-[#1B3B2B] text-white' : 'bg-[#F8F3EF] text-[#1B3B2B] hover:bg-[#EAE3DA]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button type="button" onClick={() => printTechnicalDoc('PGR — Programa de Gerenciamento de Riscos (NR-01)')} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-bold hover:bg-[#2D5A43] cursor-pointer">
            <Printer className="w-3.5 h-3.5" /> PGR (PDF)
          </button>
          <button type="button" onClick={() => printTechnicalDoc('LTCAT — Laudo Técnico das Condições Ambientais')} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#244B38] text-white text-xs font-bold hover:bg-[#2D5A43] cursor-pointer">
            <Printer className="w-3.5 h-3.5" /> LTCAT
          </button>
          <button type="button" onClick={() => printTechnicalDoc('PPP — Perfil Profissiográfico Previdenciário')} className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#2D5A43] text-white text-xs font-bold hover:bg-[#1B3B2B] cursor-pointer">
            <Printer className="w-3.5 h-3.5" /> Emitir PPP
          </button>
        </div>
      </div>

      {/* Formulário de Novo Risco (visível em riscos e matriz) */}
      {(section === 'riscos' || section === 'matriz') && (
        <form onSubmit={handleSaveRisk} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
            <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase">
              Cadastrar Perigo / Agente de Risco — {clientName}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${previewMatrix.badgeClass}`}>
              Prévia Matriz 5×5: {previewMatrix.level} (Score {previewMatrix.score})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Grupo de Risco</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
                {RISK_CATEGORIES.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Agente / Perigo</label>
              <input type="text" value={form.agent_name} onChange={(e) => setForm({ ...form, agent_name: e.target.value })} placeholder="Ex: Ruído Contínuo, Poeira, Queda..." className="w-full px-3 py-2 rounded-xl border font-bold" required />
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Código eSocial (Tabela 24)</label>
              <input type="text" list="esocial-tab24-list" value={form.esocial_code} onChange={(e) => setForm({ ...form, esocial_code: e.target.value })} placeholder="Ex: 02.01.001" className="w-full px-3 py-2 rounded-xl border font-mono" />
              <datalist id="esocial-tab24-list">
                {ESOCIAL_TAB24_SAMPLES.map((s) => <option key={s.code} value={s.code}>{s.label}</option>)}
              </datalist>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">GHE Vinculado</label>
              <select value={form.ghe_id} onChange={(e) => setForm({ ...form, ghe_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold bg-white">
                <option value="">Selecione o GHE...</option>
                {(sstData.ghes || []).map((g) => <option key={g.id} value={g.id}>{g.code} — {g.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Cargo / Função</label>
              <select value={form.role_id} onChange={(e) => setForm({ ...form, role_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold bg-white">
                <option value="">Selecione o Cargo...</option>
                {(sstData.roles || []).map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Probabilidade (1 a 5)</label>
              <select value={form.probability} onChange={(e) => setForm({ ...form, probability: Number(e.target.value) })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
                <option value={1}>1 — Muito Baixa</option>
                <option value={2}>2 — Baixa</option>
                <option value={3}>3 — Média</option>
                <option value={4}>4 — Alta</option>
                <option value={5}>5 — Muito Alta</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Severidade (1 a 5)</label>
              <select value={form.severity} onChange={(e) => setForm({ ...form, severity: Number(e.target.value) })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
                <option value={1}>1 — Leve</option>
                <option value={2}>2 — Menor</option>
                <option value={3}>3 — Moderada</option>
                <option value={4}>4 — Grave</option>
                <option value={5}>5 — Crítica / Fatal</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Intensidade / Avaliação</label>
              <input type="text" value={form.intensity_value} onChange={(e) => setForm({ ...form, intensity_value: e.target.value })} placeholder="Ex: 87 dB(A) ou Qualitativa" className="w-full px-3 py-2 rounded-xl border" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Medidas de Controle Existentes (EPC / EPI / Adm)</label>
              <input type="text" value={form.existing_controls} onChange={(e) => setForm({ ...form, existing_controls: e.target.value })} placeholder="Ex: Protetor auricular CA, enclausuramento, treinamento NR..." className="w-full px-3 py-2 rounded-xl border" />
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Ação Inicial do Plano (Opcional)</label>
              <input type="text" value={form.action_desc} onChange={(e) => setForm({ ...form, action_desc: e.target.value })} placeholder="Ex: Realizar dosimetria de ruído" className="w-full px-3 py-2 rounded-xl border" />
            </div>

            <div className="flex flex-col justify-between">
              <label className="inline-flex items-center gap-2 font-bold text-[#1B3B2B] cursor-pointer pt-4">
                <input type="checkbox" checked={form.generates_ltcat} onChange={(e) => setForm({ ...form, generates_ltcat: e.target.checked })} className="w-4 h-4" />
                <span>Incidência LTCAT / PPP</span>
              </label>
              <button type="submit" disabled={saving} className="mt-2 w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                <Plus className="w-4 h-4" /> Salvar Risco
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Tabela de Inventário / Matriz / LTCAT / Ergonomia */}
      {section !== 'plano_acao' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                    <th className="py-3 px-3">Agente / Risco</th>
                    <th className="py-3 px-3">Grupo</th>
                    <th className="py-3 px-3">GHE / Cargo</th>
                    <th className="py-3 px-3">Tab. 24</th>
                    <th className="py-3 px-3 text-center">Matriz 5×5</th>
                    <th className="py-3 px-3">Controles</th>
                    <th className="py-3 px-3 text-center">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {risks.length === 0 ? (
                    <tr><td colSpan={7} className="py-8 text-center text-slate-400">Nenhum risco cadastrado para esta empresa.</td></tr>
                  ) : risks.map((r) => {
                    const m = calcRiskMatrix5x5(r.probability, r.severity);
                    return (
                      <tr key={r.id} className="hover:bg-slate-50">
                        <td className="py-3 px-3 font-bold text-slate-900">
                          <div>{r.agent_name}</div>
                          {r.intensity_value && <div className="text-[10px] text-slate-500">{r.intensity_value}</div>}
                        </td>
                        <td className="py-3 px-3 font-semibold">{r.category}</td>
                        <td className="py-3 px-3 text-[11px]">
                          <div>{gheMap[r.ghe_id] || '—'}</div>
                          <div className="text-slate-500">{roleMap[r.role_id] || '—'}</div>
                        </td>
                        <td className="py-3 px-3 font-mono">{r.esocial_code || '—'}</td>
                        <td className="py-3 px-3 text-center whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${m.badgeClass}`}>
                            {m.level} ({r.probability || 1}×{r.severity || 1})
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-600 max-w-xs truncate">{r.existing_controls || '—'}</td>
                        <td className="py-3 px-3 text-center">
                          <button type="button" onClick={() => handleDeleteRisk(r.id, r.agent_name)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
                            <Trash2 className="w-4 h-4 inline" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Grade Visual 5x5 */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
            <h4 className="text-xs font-extrabold uppercase text-[#1B3B2B]">Matriz de Risco 5×5 (Probabilidade × Severidade)</h4>
            <div className="grid grid-cols-5 gap-1 text-[10px] font-bold text-center">
              {[5, 4, 3, 2, 1].map((p) =>
                [1, 2, 3, 4, 5].map((s) => {
                  const cell = calcRiskMatrix5x5(p, s);
                  const bg =
                    cell.score >= 16 ? 'bg-rose-600 text-white' :
                    cell.score >= 10 ? 'bg-orange-500 text-white' :
                    cell.score >= 5 ? 'bg-amber-300 text-slate-900' :
                    cell.score >= 3 ? 'bg-sky-200 text-slate-900' :
                    'bg-emerald-200 text-slate-900';
                  const isSelected = Number(form.probability) === p && Number(form.severity) === s;
                  return (
                    <button
                      key={`${p}-${s}`}
                      type="button"
                      onClick={() => setForm({ ...form, probability: p, severity: s })}
                      className={`py-2.5 rounded-lg ${bg} ${isSelected ? 'ring-2 ring-[#1B3B2B] scale-105' : ''} cursor-pointer`}
                      title={`Probabilidade ${p} × Severidade ${s} = ${cell.score} (${cell.level})`}
                    >
                      {p}×{s}
                    </button>
                  );
                })
              )}
            </div>
            <p className="text-[11px] text-slate-500">
              Clique em qualquer célula da matriz para preencher Probabilidade e Severidade no formulário.
            </p>
          </div>
        </div>
      )}

      {/* Plano de Ação do PGR */}
      {section === 'plano_acao' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 bg-[#1B3B2B] text-white text-xs font-extrabold uppercase">
            Plano de Ação do PGR ({actionItems.length} itens)
          </div>
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-600 uppercase text-[11px]">
                <th className="py-3 px-3">Risco / Agente</th>
                <th className="py-3 px-3">Ação / Medida</th>
                <th className="py-3 px-3">Responsável</th>
                <th className="py-3 px-3">Prazo</th>
                <th className="py-3 px-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {actionItems.length === 0 ? (
                <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhuma ação cadastrada no plano de ação.</td></tr>
              ) : actionItems.map((item, idx) => (
                <tr key={`${item.risk.id}-${idx}`} className="hover:bg-slate-50">
                  <td className="py-3 px-3 font-bold text-[#1B3B2B]">{item.risk.agent_name}</td>
                  <td className="py-3 px-3">{item.action}</td>
                  <td className="py-3 px-3">{item.responsible || '—'}</td>
                  <td className="py-3 px-3 font-mono">{item.deadline || '—'}</td>
                  <td className="py-3 px-3 text-center">
                    <button
                      type="button"
                      onClick={() => handleToggleActionStatus(item.risk, item.idx)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase cursor-pointer ${
                        item.status === 'Concluído' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" /> {item.status || 'Pendente'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
