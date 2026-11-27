import React, { useState, useMemo } from 'react';
import { Send, FileCode2, Download, Plus, Trash2 } from 'lucide-react';

export default function SstEsocial({
  supabase,
  selectedClientId,
  clients = [],
  sstData,
  onReload,
  showToast
}) {
  const [eventType, setEventType] = useState('S-2220'); // S-2210 | S-2220 | S-2240
  const [employeeId, setEmployeeId] = useState('');
  const [receiptInput, setReceiptInput] = useState('');
  const [saving, setSaving] = useState(false);

  const clientObj = useMemo(
    () => clients.find((c) => String(c.id) === String(selectedClientId)) || null,
    [clients, selectedClientId]
  );

  const empMap = useMemo(() => {
    const m = {};
    (sstData.employees || []).forEach((e) => { m[e.id] = e; });
    return m;
  }, [sstData.employees]);

  const buildXml = (type, emp) => {
    const cnpjLimpo = String(clientObj?.document || '00000000000000').replace(/\D/g, '');
    const cpfLimpo = String(emp?.cpf || '00000000000').replace(/\D/g, '');
    const nowIso = new Date().toISOString();

    if (type === 'S-2210') {
      const cat = (sstData.accidents || []).find((a) => a.employee_id === emp?.id) || {};
      return `<eSocial xmlns="http://www.esocial.gov.br/schema/evt/evtCAT/v_S_01_02_00">
  <evtCAT Id="ID${Date.now()}">
    <ideEvento><tpAmb>2</tpAmb><procEmi>1</procEmi><verProc>GM-ERP-SST</verProc></ideEvento>
    <ideEmpregador><tpInsc>1</tpInsc><nrInsc>${cnpjLimpo}</nrInsc></ideEmpregador>
    <ideTrabalhador><cpfTrab>${cpfLimpo}</cpfTrab></ideTrabalhador>
    <cat><dtAcid>${cat.accident_date || nowIso}</dtAcid><tpAcid>${cat.accident_type || 'Típico'}</tpAcid><codCID>${cat.cid_code || ''}</codCID></cat>
  </evtCAT>
</eSocial>`;
    }

    if (type === 'S-2240') {
      const risksList = (sstData.risks || [])
        .map((r) => `      <fatRisco><codAgNoc>${r.esocial_code || '09.01.001'}</codAgNoc><dscAgNoc>${r.agent_name || 'Risco'}</dscAgNoc></fatRisco>`)
        .join('\n');
      return `<eSocial xmlns="http://www.esocial.gov.br/schema/evt/evtExpRisco/v_S_01_02_00">
  <evtExpRisco Id="ID${Date.now()}">
    <ideEvento><tpAmb>2</tpAmb><procEmi>1</procEmi><verProc>GM-ERP-SST</verProc></ideEvento>
    <ideEmpregador><tpInsc>1</tpInsc><nrInsc>${cnpjLimpo}</nrInsc></ideEmpregador>
    <ideTrabalhador><cpfTrab>${cpfLimpo}</cpfTrab></ideTrabalhador>
    <infoExpRisco><dtIniCond>${nowIso.slice(0, 10)}</dtIniCond>\n${risksList || '      <fatRisco><codAgNoc>09.01.001</codAgNoc></fatRisco>'}\n    </infoExpRisco>
  </evtExpRisco>
</eSocial>`;
    }

    const latestAso = (sstData.asos || []).find((a) => a.employee_id === emp?.id) || {};
    return `<eSocial xmlns="http://www.esocial.gov.br/schema/evt/evtMonit/v_S_01_02_00">
  <evtMonit Id="ID${Date.now()}">
    <ideEvento><tpAmb>2</tpAmb><procEmi>1</procEmi><verProc>GM-ERP-SST</verProc></ideEvento>
    <ideEmpregador><tpInsc>1</tpInsc><nrInsc>${cnpjLimpo}</nrInsc></ideEmpregador>
    <ideTrabalhador><cpfTrab>${cpfLimpo}</cpfTrab></ideTrabalhador>
    <exMedOcup><tpExameOcup>1</tpExameOcup><aso><dtAso>${latestAso.exam_date || nowIso.slice(0, 10)}</dtAso><resAso>${latestAso.result === 'Inapto' ? '2' : '1'}</resAso></aso></exMedOcup>
  </evtMonit>
</eSocial>`;
  };

  const handleGenerateEvent = async (e) => {
    e.preventDefault();
    const cid = selectedClientId || clients[0]?.id || '';
    if (!cid || !employeeId) {
      alert('Selecione a empresa e o funcionário.');
      return;
    }
    const emp = empMap[employeeId];
    const xml = buildXml(eventType, emp);

    setSaving(true);
    try {
      const { error } = await supabase.from('sst_esocial_events').insert([{
        client_id: String(cid),
        employee_id: employeeId,
        event_type: eventType,
        xml_content: xml,
        status: receiptInput.trim() ? 'Processado' : 'Validado (Pronto p/ Envio)',
        receipt_number: receiptInput.trim() || null,
        sent_at: receiptInput.trim() ? new Date().toISOString() : null
      }]);
      if (error) throw error;
      setReceiptInput('');
      showToast(`Evento ${eventType} gerado e adicionado à fila!`);
      await onReload?.();
    } catch (err) {
      alert('Erro ao gerar evento eSocial: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const downloadXml = (ev) => {
    const emp = empMap[ev.employee_id] || {};
    const blob = new Blob([ev.xml_content || '<eSocial />'], { type: 'application/xml;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${ev.event_type}_${emp.cpf || 'trab'}.xml`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleMarkSent = async (ev) => {
    const receipt = window.prompt('Informe o número do recibo/protocolo retornado pelo eSocial:', ev.receipt_number || '');
    if (receipt === null) return;
    const { error } = await supabase
      .from('sst_esocial_events')
      .update({
        status: 'Processado',
        receipt_number: receipt.trim() || `REC-${Date.now().toString().slice(-8)}`,
        sent_at: new Date().toISOString()
      })
      .eq('id', ev.id);
    if (error) {
      alert('Erro ao atualizar recibo: ' + error.message);
      return;
    }
    showToast('Recibo do eSocial registrado!');
    await onReload?.();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Remover este evento da fila?')) return;
    const { error } = await supabase.from('sst_esocial_events').delete().eq('id', id);
    if (error) {
      alert('Erro ao excluir: ' + error.message);
      return;
    }
    showToast('Evento removido da fila.');
    await onReload?.();
  };

  return (
    <div className="space-y-5">
      <form onSubmit={handleGenerateEvent} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-2.5">
          <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase flex items-center gap-2">
            <FileCode2 className="w-4 h-4 text-[#2D5A43]" />
            Mensageria eSocial SST (S-2210, S-2220 e S-2240)
          </h3>
          <span className="text-[11px] text-slate-500">
            Gera XML estruturado sem custo de API externa
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Evento eSocial</label>
            <select value={eventType} onChange={(e) => setEventType(e.target.value)} className="w-full px-3 py-2 rounded-xl border font-bold bg-white">
              <option value="S-2220">S-2220 — Monitoramento da Saúde (ASO)</option>
              <option value="S-2240">S-2240 — Condições Ambientais (Riscos)</option>
              <option value="S-2210">S-2210 — Comunicação de Acidente (CAT)</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Trabalhador</label>
            <select value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} className="w-full px-3 py-2 rounded-xl border font-bold bg-white" required>
              <option value="">Selecione...</option>
              {(sstData.employees || []).map((emp) => (
                <option key={emp.id} value={emp.id}>{emp.full_name} ({emp.cpf})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nº do Recibo (Opcional)</label>
            <input type="text" value={receiptInput} onChange={(e) => setReceiptInput(e.target.value)} placeholder="Ex: 1.2.202611.000123" className="w-full px-3 py-2 rounded-xl border font-mono" />
          </div>

          <div className="flex items-end">
            <button type="submit" disabled={saving} className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] cursor-pointer">
              <Plus className="w-4 h-4" /> Gerar XML na Fila
            </button>
          </div>
        </div>
      </form>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
              <th className="py-3 px-3">Evento</th>
              <th className="py-3 px-3">Trabalhador / CPF</th>
              <th className="py-3 px-3">Recibo eSocial</th>
              <th className="py-3 px-3 text-center">Status</th>
              <th className="py-3 px-3 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {(sstData.esocialEvents || []).length === 0 ? (
              <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhum evento na fila do eSocial.</td></tr>
            ) : (sstData.esocialEvents || []).map((ev) => {
              const emp = empMap[ev.employee_id] || {};
              return (
                <tr key={ev.id} className="hover:bg-slate-50">
                  <td className="py-3 px-3 font-mono font-extrabold text-[#1B3B2B]">{ev.event_type}</td>
                  <td className="py-3 px-3">
                    <div className="font-bold">{emp.full_name || 'Trabalhador'}</div>
                    <div className="text-[11px] font-mono text-slate-500">{emp.cpf || '—'}</div>
                  </td>
                  <td className="py-3 px-3 font-mono">{ev.receipt_number || 'Aguardando recibo'}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                      ev.status === 'Processado' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {ev.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center space-x-1 whitespace-nowrap">
                    <button type="button" onClick={() => downloadXml(ev)} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F8F3EF] text-[#1B3B2B] font-bold text-[11px] hover:bg-[#EAE3DA] cursor-pointer">
                      <Download className="w-3.5 h-3.5" /> XML
                    </button>
                    {ev.status !== 'Processado' && (
                      <button type="button" onClick={() => handleMarkSent(ev)} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#1B3B2B] text-white font-bold text-[11px] hover:bg-[#2D5A43] cursor-pointer">
                        <Send className="w-3.5 h-3.5" /> Recibo
                      </button>
                    )}
                    <button type="button" onClick={() => handleDelete(ev.id)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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
  );
}
