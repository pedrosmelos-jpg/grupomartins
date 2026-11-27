import React, { useState, useRef, useMemo } from 'react';
import {
  HardHat,
  Award,
  FileCheck2,
  Plus,
  Trash2,
  Printer,
  Eraser
} from 'lucide-react';
import { NR_COURSES_PRESETS } from '../sstConstants';

export default function SstEpisNrs({
  supabase,
  selectedClientId,
  clients = [],
  sstData,
  onReload,
  showToast,
  params
}) {
  const [section, setSection] = useState('treinamentos'); // treinamentos | ficha_epi | catalogo_epi | os_nr01
  const [saving, setSaving] = useState(false);

  // Estado de Treinamento & Certificado NR
  const [trForm, setTrForm] = useState({
    employee_id: '',
    preset_nr: 'NR-35',
    nr_code: 'NR-35',
    course_name: 'Trabalho em Altura',
    workload_hours: 8,
    completion_date: new Date().toISOString().slice(0, 10),
    expiration_date: '',
    instructor_name: '',
    instructor_reg: '',
    syllabus: 'Análise de Risco (AR), permissão de trabalho, sistemas antiqueda, ancoragem, EPIs específicos e procedimentos de emergência.'
  });

  // Estado de Catálogo de EPI / CA
  const [epiForm, setEpiForm] = useState({
    name: '',
    ca_number: '',
    ca_expiration: '',
    manufacturer: '',
    replacement_days: 180,
    stock_qty: 10
  });

  // Estado de Entrega de EPI com Assinatura na Tela
  const [delivForm, setDelivForm] = useState({
    employee_id: '',
    epi_id: '',
    quantity: 1,
    delivery_date: new Date().toISOString().slice(0, 10),
    notes: ''
  });

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  const clientName = useMemo(() => {
    const found = clients.find((c) => String(c.id) === String(selectedClientId));
    return found ? found.name : 'Todas as Empresas';
  }, [clients, selectedClientId]);

  const empMap = useMemo(() => {
    const m = {};
    (sstData.employees || []).forEach((e) => { m[e.id] = e; });
    return m;
  }, [sstData.employees]);

  const epiMap = useMemo(() => {
    const m = {};
    (sstData.epis || []).forEach((ep) => { m[ep.id] = ep; });
    return m;
  }, [sstData.epis]);

  const getCanvasPoint = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches && e.touches[0];
    const clientX = touch ? touch.clientX : e.clientX;
    const clientY = touch ? touch.clientY : e.clientY;
    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,
      y: ((clientY - rect.top) / rect.height) * canvas.height
    };
  };

  const startSign = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const pt = getCanvasPoint(e);
    ctx.strokeStyle = '#1B3B2B';
    ctx.lineWidth = 2.4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(pt.x, pt.y);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const moveSign = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const pt = getCanvasPoint(e);
    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
  };

  const endSign = () => setIsDrawing(false);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handleSaveTraining = async (e) => {
    e.preventDefault();
    const cid = selectedClientId || clients[0]?.id || '';
    if (!cid || !trForm.employee_id || !trForm.course_name.trim()) {
      alert('Selecione a empresa, o funcionário e o curso/NR.');
      return;
    }

    let expDate = trForm.expiration_date;
    if (!expDate && trForm.completion_date) {
      const preset = NR_COURSES_PRESETS.find((p) => p.nr === trForm.nr_code);
      const months = preset?.validityMonths || 24;
      const dt = new Date(trForm.completion_date + 'T00:00:00');
      dt.setMonth(dt.getMonth() + months);
      expDate = dt.toISOString().slice(0, 10);
    }

    const code = `GM-${Date.now().toString(36).toUpperCase()}`;
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_trainings').insert([{
        client_id: String(cid),
        employee_id: trForm.employee_id,
        nr_code: trForm.nr_code.trim(),
        course_name: trForm.course_name.trim(),
        workload_hours: Number(trForm.workload_hours) || 8,
        completion_date: trForm.completion_date,
        expiration_date: expDate || null,
        instructor_name: trForm.instructor_name.trim() || null,
        instructor_reg: trForm.instructor_reg.trim() || null,
        syllabus: trForm.syllabus.trim() || null,
        validation_code: code,
        status: 'Válido'
      }]);
      if (error) throw error;
      showToast(`Treinamento ${trForm.nr_code} salvo! Código: ${code}`);
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar treinamento: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const printCertificate = (tr) => {
    const emp = empMap[tr.employee_id] || {};
    const valCode = tr.validation_code || `GM-${String(tr.id).slice(0, 8).toUpperCase()}`;
    const win = window.open('', '_blank', 'width=1020,height=740');
    if (!win) {
      alert('Permita pop-ups para imprimir o Certificado.');
      return;
    }

    win.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Certificado ${tr.nr_code} — ${emp.full_name || 'Aluno'}</title>
  <style>
    @page { size: A4 landscape; margin: 12mm; }
    body { font-family: Georgia, serif; color: #1B3B2B; margin: 0; padding: 0; }
    .cert { border: 4px solid #1B3B2B; border-radius: 14px; padding: 26px 34px; position: relative; background: #fff; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2D5A43; padding-bottom: 12px; }
    .brand { font-size: 20px; font-weight: 900; letter-spacing: 2px; }
    .sub { font-family: Arial, sans-serif; font-size: 10px; color: #475569; }
    .title { text-align: center; font-size: 28px; font-weight: 900; margin: 22px 0 6px; text-transform: uppercase; }
    .nr { text-align: center; font-family: Arial, sans-serif; font-size: 13px; font-weight: 800; color: #2D5A43; margin-bottom: 20px; }
    .body-txt { font-family: Arial, sans-serif; font-size: 13px; line-height: 1.65; text-align: center; color: #1e293b; margin: 0 auto 24px; max-width: 780px; }
    .student { font-size: 22px; font-weight: 900; color: #1B3B2B; text-decoration: underline; }
    .meta { font-family: Arial, sans-serif; font-size: 11px; text-align: center; color: #334155; margin-bottom: 30px; }
    .sigs { display: flex; justify-content: space-around; gap: 36px; margin-top: 34px; font-family: Arial, sans-serif; font-size: 11px; }
    .sig-box { flex: 1; max-width: 280px; border-top: 1.5px solid #1B3B2B; padding-top: 6px; text-align: center; }
    .qr-box { position: absolute; right: 26px; bottom: 18px; border: 1.5px solid #1B3B2B; padding: 6px 10px; border-radius: 8px; font-family: monospace; font-size: 10px; text-align: center; background: #F8F3EF; }
    .verso { page-break-before: always; border: 2px solid #2D5A43; border-radius: 12px; padding: 24px; font-family: Arial, sans-serif; }
    .verso h2 { margin: 0 0 10px; font-size: 15px; color: #1B3B2B; }
  </style>
</head>
<body>
  <div class="cert">
    <div class="top-bar">
      <div>
        <div class="brand">GRUPO MARTINS</div>
        <div class="sub">SOLUÇÕES AMBIENTAIS • MS SEGURANÇA DO TRABALHO</div>
      </div>
      <div class="sub" style="text-align:right">
        <div><strong>CNPJ:</strong> ${params?.cnpj || '48.921.654/0001-82'}</div>
        <div>${params?.cidadeSede || 'Rondonópolis — MT'}</div>
      </div>
    </div>

    <div class="title">Certificado de Conclusão</div>
    <div class="nr">${tr.nr_code} — ${tr.course_name} • Carga Horária: ${tr.workload_hours || 8}h</div>

    <p class="body-txt">
      Certificamos que <span class="student">${emp.full_name || 'Trabalhador'}</span>, portador(a) do CPF <strong>${emp.cpf || '—'}</strong>,
      colaborador(a) da empresa <strong>${clientName}</strong>, concluiu com êxito o treinamento de capacitação em Segurança do Trabalho
      <strong>${tr.nr_code} — ${tr.course_name}</strong>, com carga horária total de <strong>${tr.workload_hours || 8} horas</strong>.
    </p>

    <div class="meta">
      <strong>Conclusão:</strong> ${tr.completion_date || '—'} &nbsp;|&nbsp;
      <strong>Validade:</strong> ${tr.expiration_date || '—'} &nbsp;|&nbsp;
      <strong>Código de Autenticidade:</strong> ${valCode}
    </div>

    <div class="sigs">
      <div class="sig-box">
        <strong>${tr.instructor_name || 'Instrutor Responsável'}</strong><br/>
        <span>${tr.instructor_reg || 'Registro Profissional'}</span>
      </div>
      <div class="sig-box">
        <strong>${params?.socioDiretor || 'Responsável Técnico'}</strong><br/>
        <span>Coordenação SST • Grupo Martins</span>
      </div>
    </div>

    <div class="qr-box">
      <div><strong>VALIDAÇÃO</strong></div>
      <div>${valCode}</div>
    </div>
  </div>

  <div class="verso">
    <h2>CONTEÚDO PROGRAMÁTICO — ${tr.nr_code} (${tr.course_name})</h2>
    <p style="font-size:12px;line-height:1.6;color:#334155;">${tr.syllabus || 'Conteúdo programático conforme Norma Regulamentadora aplicável.'}</p>
    <p style="font-size:11px;color:#64748b;margin-top:20px;">Código de validação: <strong>${valCode}</strong> • Emitido por Grupo Martins.</p>
  </div>
  <script>window.onload = function(){ setTimeout(function(){ window.print(); }, 200); };</script>
</body>
</html>`);
    win.document.close();
  };

  const handleSaveEpiCatalog = async (e) => {
    e.preventDefault();
    if (!epiForm.name.trim() || !epiForm.ca_number.trim()) {
      alert('Informe o nome do EPI e o número do CA.');
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_epis').insert([{
        client_id: selectedClientId ? String(selectedClientId) : null,
        name: epiForm.name.trim(),
        ca_number: epiForm.ca_number.trim(),
        ca_expiration: epiForm.ca_expiration || null,
        manufacturer: epiForm.manufacturer.trim() || null,
        replacement_days: Number(epiForm.replacement_days) || 180,
        stock_qty: Number(epiForm.stock_qty) || 0,
        active: true
      }]);
      if (error) throw error;
      setEpiForm({ name: '', ca_number: '', ca_expiration: '', manufacturer: '', replacement_days: 180, stock_qty: 10 });
      showToast('EPI / CA adicionado ao catálogo!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar EPI: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveEpiDelivery = async (e) => {
    e.preventDefault();
    const cid = selectedClientId || clients[0]?.id || '';
    if (!cid || !delivForm.employee_id || !delivForm.epi_id) {
      alert('Selecione a empresa, o funcionário e o EPI.');
      return;
    }
    const epi = epiMap[delivForm.epi_id];
    const sigBase64 = hasSignature && canvasRef.current ? canvasRef.current.toDataURL('image/png') : null;

    let nextRep = null;
    if (delivForm.delivery_date) {
      const dt = new Date(delivForm.delivery_date + 'T00:00:00');
      dt.setDate(dt.getDate() + (Number(epi?.replacement_days) || 180));
      nextRep = dt.toISOString().slice(0, 10);
    }

    setSaving(true);
    try {
      const { error } = await supabase.from('sst_epi_deliveries').insert([{
        client_id: String(cid),
        employee_id: delivForm.employee_id,
        epi_id: delivForm.epi_id,
        quantity: Number(delivForm.quantity) || 1,
        delivery_date: delivForm.delivery_date,
        next_replacement_date: nextRep,
        signature_data: sigBase64,
        notes: delivForm.notes.trim() || null
      }]);
      if (error) throw error;
      clearSignature();
      setDelivForm({ ...delivForm, notes: '' });
      showToast('Entrega de EPI registrada com assinatura!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao registrar entrega de EPI: ' + err.message);
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
            { id: 'treinamentos', label: 'Treinamentos & Certificados NR', icon: Award },
            { id: 'ficha_epi', label: 'Ficha de EPI (Assinatura na Tela)', icon: FileCheck2 },
            { id: 'catalogo_epi', label: 'Catálogo de EPIs & CA', icon: HardHat },
            { id: 'os_nr01', label: 'Ordem de Serviço (NR-01)', icon: FileCheck2 }
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
      </div>

      {/* 1. TREINAMENTOS & CERTIFICADOS NR */}
      {section === 'treinamentos' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveTraining} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
            <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase border-b pb-2.5">
              Lançar Treinamento &amp; Gerar Certificado NR — {clientName}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Colaborador</label>
                <select value={trForm.employee_id} onChange={(e) => setTrForm({ ...trForm, employee_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white" required>
                  <option value="">Selecione...</option>
                  {(sstData.employees || []).map((emp) => (
                    <option key={emp.id} value={emp.id}>{emp.full_name} ({emp.cpf})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Modelo de NR</label>
                <select
                  value={trForm.preset_nr}
                  onChange={(e) => {
                    const val = e.target.value;
                    const found = NR_COURSES_PRESETS.find((p) => p.nr === val);
                    setTrForm({
                      ...trForm,
                      preset_nr: val,
                      nr_code: found ? found.nr : trForm.nr_code,
                      course_name: found ? found.title : trForm.course_name,
                      workload_hours: found ? found.hours : trForm.workload_hours
                    });
                  }}
                  className="w-full px-3 py-2 rounded-xl border font-bold bg-white"
                >
                  {NR_COURSES_PRESETS.map((p) => (
                    <option key={p.nr} value={p.nr}>{p.nr} — {p.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nome do Curso / NR</label>
                <input type="text" value={trForm.course_name} onChange={(e) => setTrForm({ ...trForm, course_name: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" required />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Carga Horária (h)</label>
                <input type="number" value={trForm.workload_hours} onChange={(e) => setTrForm({ ...trForm, workload_hours: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Data de Conclusão</label>
                <input type="date" value={trForm.completion_date} onChange={(e) => setTrForm({ ...trForm, completion_date: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold" required />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Validade / Reciclagem</label>
                <input type="date" value={trForm.expiration_date} onChange={(e) => setTrForm({ ...trForm, expiration_date: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold" />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Instrutor</label>
                <input type="text" value={trForm.instructor_name} onChange={(e) => setTrForm({ ...trForm, instructor_name: e.target.value })} placeholder="Nome do instrutor" className="w-full px-3 py-2 rounded-xl border" />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Registro Instrutor (CREA / MTE)</label>
                <input type="text" value={trForm.instructor_reg} onChange={(e) => setTrForm({ ...trForm, instructor_reg: e.target.value })} placeholder="Ex: CREA-MT 12345" className="w-full px-3 py-2 rounded-xl border font-mono" />
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" disabled={saving} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                <Plus className="w-4 h-4" /> Registrar Treinamento
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Colaborador</th>
                  <th className="py-3 px-3">Norma / Curso</th>
                  <th className="py-3 px-3">Carga</th>
                  <th className="py-3 px-3">Validade</th>
                  <th className="py-3 px-3 text-center">Certificado &amp; Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.trainings || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhum treinamento registrado ainda.</td></tr>
                ) : (sstData.trainings || []).map((tr) => (
                  <tr key={tr.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold text-slate-900">{empMap[tr.employee_id]?.full_name || 'Colaborador'}</td>
                    <td className="py-3 px-3">
                      <span className="font-extrabold text-[#1B3B2B]">{tr.nr_code}</span> — {tr.course_name}
                    </td>
                    <td className="py-3 px-3 font-mono">{tr.workload_hours || 8}h</td>
                    <td className="py-3 px-3 font-mono">{tr.expiration_date || '—'}</td>
                    <td className="py-3 px-3 text-center space-x-1 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => printCertificate(tr)}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#1B3B2B] text-white font-bold text-[11px] hover:bg-[#2D5A43] cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" /> Certificado PDF
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete('sst_trainings', tr.id, tr.nr_code)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                      >
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

      {/* 2. FICHA DE EPI COM ASSINATURA NA TELA */}
      {section === 'ficha_epi' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveEpiDelivery} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
            <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase border-b pb-2.5">
              Ficha de Entrega de EPI com Assinatura na Tela — {clientName}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Colaborador</label>
                <select value={delivForm.employee_id} onChange={(e) => setDelivForm({ ...delivForm, employee_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white" required>
                  <option value="">Selecione...</option>
                  {(sstData.employees || []).map((emp) => (
                    <option key={emp.id} value={emp.id}>{emp.full_name} ({emp.cpf})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">EPI / CA</label>
                <select value={delivForm.epi_id} onChange={(e) => setDelivForm({ ...delivForm, epi_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold bg-white" required>
                  <option value="">Selecione...</option>
                  {(sstData.epis || []).map((ep) => (
                    <option key={ep.id} value={ep.id}>{ep.name} (CA {ep.ca_number})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Quantidade / Data</label>
                <div className="flex gap-1.5">
                  <input type="number" min="1" value={delivForm.quantity} onChange={(e) => setDelivForm({ ...delivForm, quantity: e.target.value })} className="w-20 px-2.5 py-2 rounded-xl border font-bold" />
                  <input type="date" value={delivForm.delivery_date} onChange={(e) => setDelivForm({ ...delivForm, delivery_date: e.target.value })} className="flex-1 px-2.5 py-2 rounded-xl border font-semibold" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Observação</label>
                <input type="text" value={delivForm.notes} onChange={(e) => setDelivForm({ ...delivForm, notes: e.target.value })} placeholder="Tamanho / lote..." className="w-full px-3 py-2 rounded-xl border" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-[10px] font-extrabold uppercase text-[#1B3B2B]">
                  Assinatura do Trabalhador (Desenhe com mouse ou toque na tela)
                </label>
                <button type="button" onClick={clearSignature} className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-rose-600 cursor-pointer">
                  <Eraser className="w-3.5 h-3.5" /> Limpar assinatura
                </button>
              </div>
              <canvas
                ref={canvasRef}
                width={520}
                height={130}
                onMouseDown={startSign}
                onMouseMove={moveSign}
                onMouseUp={endSign}
                onMouseLeave={endSign}
                onTouchStart={startSign}
                onTouchMove={moveSign}
                onTouchEnd={endSign}
                className="w-full max-w-xl h-32 rounded-xl border-2 border-dashed border-[#2D5A43] bg-[#F8F3EF]/50 touch-none cursor-crosshair"
              />
            </div>

            <button type="submit" disabled={saving} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
              <Plus className="w-4 h-4" /> Confirmar Entrega de EPI
            </button>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Colaborador</th>
                  <th className="py-3 px-3">EPI / CA</th>
                  <th className="py-3 px-3">Entrega / Próx. Troca</th>
                  <th className="py-3 px-3 text-center">Assinatura</th>
                  <th className="py-3 px-3 text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.epiDeliveries || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhuma entrega de EPI registrada.</td></tr>
                ) : (sstData.epiDeliveries || []).map((d) => {
                  const ep = epiMap[d.epi_id] || {};
                  return (
                    <tr key={d.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-bold">{empMap[d.employee_id]?.full_name || 'Colaborador'}</td>
                      <td className="py-3 px-3 font-semibold">{ep.name || 'EPI'} (CA {ep.ca_number || '—'}) ×{d.quantity || 1}</td>
                      <td className="py-3 px-3 font-mono text-[11px]">
                        <div>Ent.: {d.delivery_date || '—'}</div>
                        <div className="text-slate-500">Troca: {d.next_replacement_date || '—'}</div>
                      </td>
                      <td className="py-3 px-3 text-center">
                        {d.signature_data ? (
                          <img src={d.signature_data} alt="Assinatura" className="h-9 mx-auto object-contain" />
                        ) : (
                          <span className="text-slate-400">Sem assinatura</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <button type="button" onClick={() => handleDelete('sst_epi_deliveries', d.id, 'Entrega de EPI')} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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

      {/* 3. CATÁLOGO DE EPIs & CA */}
      {section === 'catalogo_epi' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveEpiCatalog} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 text-xs">
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nome do EPI</label>
              <input type="text" value={epiForm.name} onChange={(e) => setEpiForm({ ...epiForm, name: e.target.value })} placeholder="Ex: Protetor Auricular" className="w-full px-3 py-2 rounded-xl border font-bold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nº do CA</label>
              <input type="text" value={epiForm.ca_number} onChange={(e) => setEpiForm({ ...epiForm, ca_number: e.target.value })} placeholder="Ex: 14235" className="w-full px-3 py-2 rounded-xl border font-mono font-bold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Validade do CA</label>
              <input type="date" value={epiForm.ca_expiration} onChange={(e) => setEpiForm({ ...epiForm, ca_expiration: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-semibold" />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Troca (Dias)</label>
              <input type="number" value={epiForm.replacement_days} onChange={(e) => setEpiForm({ ...epiForm, replacement_days: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Estoque Inicial</label>
              <input type="number" value={epiForm.stock_qty} onChange={(e) => setEpiForm({ ...epiForm, stock_qty: e.target.value })} className="w-full px-3 py-2 rounded-xl border font-bold" />
            </div>
            <div className="flex items-end">
              <button type="submit" disabled={saving} className="w-full px-4 py-2 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                + Cadastrar EPI
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">EPI</th>
                  <th className="py-3 px-3">CA</th>
                  <th className="py-3 px-3">Validade CA</th>
                  <th className="py-3 px-3">Troca / Estoque</th>
                  <th className="py-3 px-3 text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.epis || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhum EPI cadastrado no catálogo.</td></tr>
                ) : (sstData.epis || []).map((ep) => (
                  <tr key={ep.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold">{ep.name}</td>
                    <td className="py-3 px-3 font-mono font-bold text-[#1B3B2B]">{ep.ca_number}</td>
                    <td className="py-3 px-3 font-mono">{ep.ca_expiration || '—'}</td>
                    <td className="py-3 px-3">A cada {ep.replacement_days || 180}d • Estoque: {ep.stock_qty || 0}</td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_epis', ep.id, ep.name)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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

      {/* 4. ORDEM DE SERVIÇO NR-01 */}
      {section === 'os_nr01' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase">
                Ordem de Serviço de Segurança e Saúde no Trabalho (NR-01) — {clientName}
              </h3>
              <p className="text-slate-500 mt-0.5">
                Dá ciência aos trabalhadores sobre os riscos ocupacionais, medidas de prevenção, EPIs obrigatórios e procedimentos de emergência.
              </p>
            </div>
            <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold hover:bg-[#2D5A43] cursor-pointer">
              <Printer className="w-4 h-4" /> Imprimir OS
            </button>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EF] border border-[#D5CFC7] space-y-2">
            <div className="font-extrabold text-[#1B3B2B]">Riscos Mapeados no PGR ({(sstData.risks || []).length})</div>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {(sstData.risks || []).length === 0 ? (
                <li>Cadastre riscos na aba Engenharia (GRO) para listar automaticamente nesta Ordem de Serviço.</li>
              ) : (sstData.risks || []).map((r) => (
                <li key={r.id}>
                  <strong>{r.agent_name}</strong> ({r.category}) — Controle: {r.existing_controls || 'Conforme PGR'}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
