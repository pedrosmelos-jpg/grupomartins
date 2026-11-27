import React, { useState, useMemo } from 'react';
import {
  Stethoscope,
  ClipboardCheck,
  FileHeart,
  Plus,
  Trash2,
  Printer,
  MessageSquare
} from 'lucide-react';

const emptyExamMatrixForm = (clientId) => ({
  client_id: String(clientId || ''),
  role_id: '',
  ghe_id: '',
  exam_name: '',
  tuss_esocial_code: '',
  on_admission: true,
  on_periodic: true,
  periodic_months: 12,
  on_return: false,
  on_role_change: true,
  on_dismissal: true,
  default_cost: 0,
  default_price: 0
});

const emptyAsoForm = (clientId) => ({
  client_id: String(clientId || ''),
  employee_id: '',
  aso_type: 'Periódico',
  exam_date: new Date().toISOString().slice(0, 10),
  next_due_date: '',
  result: 'Apto',
  doctor_name: '',
  doctor_crm: '',
  doctor_uf: 'MT',
  clinic_name: '',
  exams_summary: 'Clínico Ocupacional',
  clinical_notes: '',
  total_price: 0
});

export default function SstMedicinaPcmso({
  supabase,
  selectedClientId,
  clients = [],
  sstData,
  onReload,
  showToast,
  params
}) {
  const [section, setSection] = useState('asos'); // asos | grade | prontuario | absenteismo
  const [matrixForm, setMatrixForm] = useState(() => emptyExamMatrixForm(selectedClientId));
  const [asoForm, setAsoForm] = useState(() => emptyAsoForm(selectedClientId));
  const [saving, setSaving] = useState(false);

  const clientName = useMemo(() => {
    const found = clients.find((c) => String(c.id) === String(selectedClientId));
    return found ? found.name : 'Todas as Empresas';
  }, [clients, selectedClientId]);

  const empMap = useMemo(() => {
    const m = {};
    (sstData.employees || []).forEach((e) => {
      m[e.id] = e;
    });
    return m;
  }, [sstData.employees]);

  const roleMap = useMemo(() => {
    const m = {};
    (sstData.roles || []).forEach((r) => {
      m[r.id] = r.name;
    });
    return m;
  }, [sstData.roles]);

  const gheMap = useMemo(() => {
    const m = {};
    (sstData.ghes || []).forEach((g) => {
      m[g.id] = `${g.code} — ${g.name}`;
    });
    return m;
  }, [sstData.ghes]);

  const handleSaveMatrix = async (e) => {
    e.preventDefault();
    const cid = matrixForm.client_id || selectedClientId || clients[0]?.id || '';
    if (!cid || !matrixForm.exam_name.trim()) {
      alert('Selecione a empresa e informe o nome do exame.');
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_exam_matrix').insert([
        {
          client_id: String(cid),
          role_id: matrixForm.role_id || null,
          ghe_id: matrixForm.ghe_id || null,
          exam_name: matrixForm.exam_name.trim(),
          tuss_esocial_code: matrixForm.tuss_esocial_code.trim() || null,
          on_admission: Boolean(matrixForm.on_admission),
          on_periodic: Boolean(matrixForm.on_periodic),
          periodic_months: Number(matrixForm.periodic_months) || 12,
          on_return: Boolean(matrixForm.on_return),
          on_role_change: Boolean(matrixForm.on_role_change),
          on_dismissal: Boolean(matrixForm.on_dismissal),
          default_cost: Number(matrixForm.default_cost) || 0,
          default_price: Number(matrixForm.default_price) || 0
        }
      ]);
      if (error) throw error;
      setMatrixForm(emptyExamMatrixForm(cid));
      showToast('Exame adicionado à Grade do PCMSO!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar grade: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveAso = async (e) => {
    e.preventDefault();
    const cid = asoForm.client_id || selectedClientId || clients[0]?.id || '';
    if (!cid || !asoForm.employee_id) {
      alert('Selecione a empresa e o funcionário.');
      return;
    }

    let computedNextDue = asoForm.next_due_date;
    if (!computedNextDue && asoForm.exam_date) {
      const dt = new Date(asoForm.exam_date + 'T00:00:00');
      dt.setFullYear(dt.getFullYear() + 1);
      computedNextDue = dt.toISOString().slice(0, 10);
    }

    setSaving(true);
    try {
      const { error } = await supabase.from('sst_asos').insert([
        {
          client_id: String(cid),
          employee_id: asoForm.employee_id,
          aso_type: asoForm.aso_type,
          exam_date: asoForm.exam_date,
          next_due_date: computedNextDue || null,
          result: asoForm.result,
          doctor_name: asoForm.doctor_name.trim() || null,
          doctor_crm: asoForm.doctor_crm.trim() || null,
          doctor_uf: asoForm.doctor_uf.trim() || 'MT',
          clinic_name: asoForm.clinic_name.trim() || null,
          exams_performed: [{ name: asoForm.exams_summary || 'Clínico Ocupacional' }],
          clinical_notes: asoForm.clinical_notes.trim() || null,
          total_price: Number(asoForm.total_price) || 0
        }
      ]);
      if (error) throw error;
      setAsoForm(emptyAsoForm(cid));
      showToast('ASO registrado com sucesso!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao registrar ASO: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const printAso = (aso) => {
    const emp = empMap[aso.employee_id] || {};
    const examsList = Array.isArray(aso.exams_performed)
      ? aso.exams_performed.map((x) => x.name || x).join(', ')
      : aso.exams_summary || 'Clínico Ocupacional';

    const win = window.open('', '_blank', 'width=820,height=900');
    if (!win) {
      alert('Permita pop-ups para imprimir o ASO.');
      return;
    }
    win.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>ASO — ${emp.full_name || 'Colaborador'}</title>
  <style>
    @page { size: A4 portrait; margin: 16mm; }
    body { font-family: Arial, sans-serif; color: #1e293b; font-size: 11px; }
    .box { border: 2px solid #1B3B2B; border-radius: 10px; padding: 18px; }
    .hdr { border-bottom: 1.5px solid #1B3B2B; padding-bottom: 10px; margin-bottom: 14px; display: flex; justify-content: space-between; }
    h1 { margin: 0; font-size: 15px; color: #1B3B2B; }
    .row { margin-bottom: 8px; }
    .apt { font-size: 14px; font-weight: 900; color: #1B3B2B; background: #e6f4ea; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-top: 6px; }
    .sig { margin-top: 42px; display: flex; justify-content: space-between; gap: 24px; }
    .line { flex: 1; border-top: 1px solid #334155; padding-top: 4px; text-align: center; font-size: 10px; }
  </style>
</head>
<body>
  <div class="box">
    <div class="hdr">
      <div>
        <h1>ATESTADO DE SAÚDE OCUPACIONAL (ASO) — NR-07</h1>
        <div>Empresa: <strong>${clientName}</strong></div>
      </div>
      <div style="text-align:right">
        <div><strong>GRUPO MARTINS</strong> • MS Segurança do Trabalho</div>
        <div>CNPJ: ${params?.cnpj || '48.921.654/0001-82'}</div>
      </div>
    </div>
    <div class="row"><strong>Trabalhador:</strong> ${emp.full_name || '—'} • <strong>CPF:</strong> ${emp.cpf || '—'}</div>
    <div class="row"><strong>Cargo:</strong> ${roleMap[emp.role_id] || '—'} • <strong>GHE:</strong> ${gheMap[emp.ghe_id] || '—'}</div>
    <div class="row"><strong>Tipo de Exame:</strong> ${aso.aso_type} • <strong>Data:</strong> ${aso.exam_date || '—'} • <strong>Próximo Vencimento:</strong> ${aso.next_due_date || '—'}</div>
    <div class="row"><strong>Exames Realizados:</strong> ${examsList}</div>
    <div class="row"><strong>Clínica:</strong> ${aso.clinic_name || '—'}</div>
    <div class="apt">Conclusão / Aptidão: ${String(aso.result || 'Apto').toUpperCase()}</div>
    <div class="sig">
      <div class="line">Assinatura do Trabalhador</div>
      <div class="line">${aso.doctor_name || 'Médico(a) Examinador(a)'} — CRM ${aso.doctor_crm || '____'}/${aso.doctor_uf || 'MT'}</div>
    </div>
  </div>
  <script>window.onload = function(){ setTimeout(function(){ window.print(); }, 200); };</script>
</body>
</html>`);
    win.document.close();
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

  const sendWhatsAppReminder = (aso) => {
    const emp = empMap[aso.employee_id] || {};
    const text = `Olá! *Martins Segurança do Trabalho* lembra que o exame/ASO (${aso.aso_type}) de *${emp.full_name || 'Colaborador'}* (${clientName}) tem vencimento em *${aso.next_due_date || 'breve'}*.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-5">
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'asos', label: 'Convocação & Emissão de ASO', icon: Stethoscope },
            { id: 'grade', label: 'Grade PCMSO por Cargo/GHE', icon: ClipboardCheck },
            { id: 'prontuario', label: 'Prontuário Clínico', icon: FileHeart },
            { id: 'absenteismo', label: 'Absenteísmo & Atestados', icon: ClipboardCheck }
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
          <Printer className="w-3.5 h-3.5" /> Imprimir PCMSO
        </button>
      </div>

      {/* ASOs & CONVOCAÇÕES */}
      {section === 'asos' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveAso} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase border-b pb-2.5">
              Registrar / Emitir ASO — {clientName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Funcionário (Vida)</label>
                <select value={asoForm.employee_id} onChange={(e) => setAsoForm({ ...asoForm, employee_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white" required>
                  <option value="">Selecione...</option>
                  {(sstData.employees || []).map((emp) => (
                    <option key={emp.id} value={emp.id}>{emp.full_name} ({emp.cpf})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Tipo de ASO</label>
                <select value={asoForm.aso_type} onChange={(e) => setAsoForm({ ...asoForm, aso_type: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
                  <option value="Admissional">Admissional</option>
                  <option value="Periódico">Periódico</option>
                  <option value="Retorno ao Trabalho">Retorno ao Trabalho</option>
                  <option value="Mudança de Riscos">Mudança de Riscos</option>
                  <option value="Demissional">Demissional</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Data do Exame</label>
                <input type="date" value={asoForm.exam_date} onChange={(e) => setAsoForm({ ...asoForm, exam_date: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold" required />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Próximo Vencimento</label>
                <input type="date" value={asoForm.next_due_date} onChange={(e) => setAsoForm({ ...asoForm, next_due_date: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold" />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Aptidão</label>
                <select value={asoForm.result} onChange={(e) => setAsoForm({ ...asoForm, result: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
                  <option value="Apto">Apto</option>
                  <option value="Apto com Restrições">Apto com Restrições</option>
                  <option value="Inapto">Inapto</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Médico Examinador &amp; CRM</label>
                <div className="flex gap-1.5">
                  <input type="text" value={asoForm.doctor_name} onChange={(e) => setAsoForm({ ...asoForm, doctor_name: e.target.value })} placeholder="Dr./Dra." className="w-2/3 px-2.5 py-2 rounded-xl border" />
                  <input type="text" value={asoForm.doctor_crm} onChange={(e) => setAsoForm({ ...asoForm, doctor_crm: e.target.value })} placeholder="CRM" className="w-1/3 px-2.5 py-2 rounded-xl border font-mono" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Exames Complementares</label>
                <input type="text" value={asoForm.exams_summary} onChange={(e) => setAsoForm({ ...asoForm, exams_summary: e.target.value })} placeholder="Clínico, Audiometria, Espirometria..." className="w-full px-3 py-2 rounded-xl border" />
              </div>

              <div className="flex items-end">
                <button type="submit" disabled={saving} className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                  <Plus className="w-4 h-4" /> Salvar ASO
                </button>
              </div>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Colaborador</th>
                  <th className="py-3 px-3">Tipo ASO</th>
                  <th className="py-3 px-3">Data / Vencimento</th>
                  <th className="py-3 px-3 text-center">Aptidão</th>
                  <th className="py-3 px-3 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.asos || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhum ASO lançado ainda.</td></tr>
                ) : (sstData.asos || []).map((aso) => {
                  const emp = empMap[aso.employee_id] || {};
                  return (
                    <tr key={aso.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-bold text-slate-900">{emp.full_name || 'Colaborador'}</td>
                      <td className="py-3 px-3 font-semibold">{aso.aso_type}</td>
                      <td className="py-3 px-3 font-mono text-[11px]">
                        <div>Exame: {aso.exam_date || '—'}</div>
                        <div className="text-slate-500">Venc.: {aso.next_due_date || '—'}</div>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                          aso.result === 'Apto' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {aso.result}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center space-x-1 whitespace-nowrap">
                        <button type="button" onClick={() => printAso(aso)} className="px-2.5 py-1 rounded-lg bg-[#1B3B2B] text-white font-bold text-[11px] hover:bg-[#2D5A43] cursor-pointer">
                          Imprimir ASO
                        </button>
                        <button type="button" onClick={() => sendWhatsAppReminder(aso)} className="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-[11px] hover:bg-emerald-200 cursor-pointer" title="Avisar no WhatsApp">
                          <MessageSquare className="w-3.5 h-3.5 inline" />
                        </button>
                        <button type="button" onClick={() => handleDelete('sst_asos', aso.id, 'ASO')} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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
      )}

      {/* GRADE PCMSO */}
      {section === 'grade' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveMatrix} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Cargo / Função</label>
              <select value={matrixForm.role_id} onChange={(e) => setMatrixForm({ ...matrixForm, role_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold bg-white">
                <option value="">Geral / Todos</option>
                {(sstData.roles || []).map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Exame Obrigatório</label>
              <input type="text" value={matrixForm.exam_name} onChange={(e) => setMatrixForm({ ...matrixForm, exam_name: e.target.value })} placeholder="Ex: Audiometria Tonal" className="w-full px-3 py-2 rounded-xl border font-bold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Código eSocial / TUSS</label>
              <input type="text" value={matrixForm.tuss_esocial_code} onChange={(e) => setMatrixForm({ ...matrixForm, tuss_esocial_code: e.target.value })} placeholder="Ex: 0295" className="w-full px-3 py-2 rounded-xl border font-mono" />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Periodicidade (Meses)</label>
              <input type="number" value={matrixForm.periodic_months} onChange={(e) => setMatrixForm({ ...matrixForm, periodic_months: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" />
            </div>
            <div className="flex items-end">
              <button type="submit" disabled={saving} className="w-full px-4 py-2 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                + Incluir na Grade
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Exame</th>
                  <th className="py-3 px-3">Cargo</th>
                  <th className="py-3 px-3">Código</th>
                  <th className="py-3 px-3">Periodicidade</th>
                  <th className="py-3 px-3 text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.examMatrix || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhum exame na grade PCMSO.</td></tr>
                ) : (sstData.examMatrix || []).map((m) => (
                  <tr key={m.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold">{m.exam_name}</td>
                    <td className="py-3 px-3">{roleMap[m.role_id] || 'Todos'}</td>
                    <td className="py-3 px-3 font-mono">{m.tuss_esocial_code || '—'}</td>
                    <td className="py-3 px-3">A cada {m.periodic_months || 12} meses</td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_exam_matrix', m.id, m.exam_name)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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

      {/* PRONTUÁRIO CLÍNICO & ABSENTEÍSMO */}
      {(section === 'prontuario' || section === 'absenteismo') && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 bg-[#1B3B2B] text-white text-xs font-extrabold uppercase">
            {section === 'prontuario' ? 'Registros Clínicos & Observações Médicas' : 'Histórico de Afastamentos & Atestados (ASOs)'}
          </div>
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-600 uppercase text-[11px]">
                <th className="py-3 px-3">Colaborador</th>
                <th className="py-3 px-3">Data</th>
                <th className="py-3 px-3">Tipo / Aptidão</th>
                <th className="py-3 px-3">Observações Clínicas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {(sstData.asos || []).length === 0 ? (
                <tr><td colSpan={4} className="py-8 text-center text-slate-400">Nenhum registro clínico disponível.</td></tr>
              ) : (sstData.asos || []).map((aso) => (
                <tr key={aso.id} className="hover:bg-slate-50">
                  <td className="py-3 px-3 font-bold">{empMap[aso.employee_id]?.full_name || 'Colaborador'}</td>
                  <td className="py-3 px-3 font-mono">{aso.exam_date || '—'}</td>
                  <td className="py-3 px-3 font-semibold">{aso.aso_type} — {aso.result}</td>
                  <td className="py-3 px-3 text-slate-600">{aso.clinical_notes || 'Sem observações registradas.'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
