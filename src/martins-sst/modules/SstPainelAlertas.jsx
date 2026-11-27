import React, { useState, useMemo } from 'react';
import { BellRing, MessageSquare, FileText, Download } from 'lucide-react';

const formatDateBR = (d) => {
  if (!d) return '—';
  const parts = String(d).slice(0, 10).split('-');
  return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : d;
};

export default function SstPainelAlertas({ sstData, clients = [] }) {
  const [windowFilter, setWindowFilter] = useState('all'); // all | expired | 30 | 60 | 90

  const empMap = useMemo(() => {
    const m = {};
    (sstData.employees || []).forEach((e) => { m[e.id] = e.full_name; });
    return m;
  }, [sstData.employees]);

  const clientMap = useMemo(() => {
    const m = {};
    clients.forEach((c) => { m[String(c.id)] = c.name; });
    return m;
  }, [clients]);

  const alertRows = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const rows = [];

    (sstData.asos || []).forEach((aso) => {
      if (!aso.next_due_date) return;
      const due = new Date(String(aso.next_due_date).slice(0, 10) + 'T00:00:00');
      const daysLeft = Math.round((due - today) / (1000 * 60 * 60 * 24));
      rows.push({
        id: `aso-${aso.id}`,
        type: 'ASO / Exame',
        personOrItem: empMap[aso.employee_id] || 'Colaborador',
        clientName: clientMap[String(aso.client_id)] || '—',
        detail: `${aso.aso_type} (${aso.result})`,
        dueDate: aso.next_due_date,
        daysLeft
      });
    });

    (sstData.trainings || []).forEach((tr) => {
      if (!tr.expiration_date) return;
      const due = new Date(String(tr.expiration_date).slice(0, 10) + 'T00:00:00');
      const daysLeft = Math.round((due - today) / (1000 * 60 * 60 * 24));
      rows.push({
        id: `tr-${tr.id}`,
        type: 'Treinamento NR',
        personOrItem: empMap[tr.employee_id] || 'Colaborador',
        clientName: clientMap[String(tr.client_id)] || '—',
        detail: `${tr.nr_code} — ${tr.course_name}`,
        dueDate: tr.expiration_date,
        daysLeft
      });
    });

    (sstData.epis || []).forEach((epi) => {
      if (!epi.ca_expiration) return;
      const due = new Date(String(epi.ca_expiration).slice(0, 10) + 'T00:00:00');
      const daysLeft = Math.round((due - today) / (1000 * 60 * 60 * 24));
      rows.push({
        id: `epi-${epi.id}`,
        type: 'CA de EPI',
        personOrItem: epi.name,
        clientName: clientMap[String(epi.client_id)] || 'Geral',
        detail: `CA ${epi.ca_number}`,
        dueDate: epi.ca_expiration,
        daysLeft
      });
    });

    return rows.sort((a, b) => a.daysLeft - b.daysLeft);
  }, [sstData, empMap, clientMap]);

  const filtered = useMemo(() => {
    if (windowFilter === 'expired') return alertRows.filter((r) => r.daysLeft < 0);
    if (windowFilter === '30') return alertRows.filter((r) => r.daysLeft >= 0 && r.daysLeft <= 30);
    if (windowFilter === '60') return alertRows.filter((r) => r.daysLeft >= 0 && r.daysLeft <= 60);
    if (windowFilter === '90') return alertRows.filter((r) => r.daysLeft >= 0 && r.daysLeft <= 90);
    return alertRows;
  }, [alertRows, windowFilter]);

  const sendWhatsApp = (row) => {
    const statusTxt = row.daysLeft < 0 ? `VENCIDO há ${Math.abs(row.daysLeft)} dia(s)` : `vence em ${row.daysLeft} dia(s) (${formatDateBR(row.dueDate)})`;
    const msg = `Olá! *Martins Segurança do Trabalho* informa: *${row.type}* (${row.detail}) referente a *${row.personOrItem}* — Empresa: *${row.clientName}* — *${statusTxt}*.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  const exportCsv = () => {
    const headers = ['Tipo', 'Colaborador / Item', 'Empresa', 'Detalhe', 'Vencimento', 'Dias'];
    const lines = [headers.join(';')];
    filtered.forEach((r) => {
      lines.push([r.type, r.personOrItem, r.clientName, r.detail, formatDateBR(r.dueDate), r.daysLeft].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(';'));
    });
    const blob = new Blob(['\uFEFF' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alertas_SST_GrupoMartins.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: `Todos (${alertRows.length})` },
            { id: 'expired', label: `Vencidos (${alertRows.filter((r) => r.daysLeft < 0).length})` },
            { id: '30', label: `30 dias (${alertRows.filter((r) => r.daysLeft >= 0 && r.daysLeft <= 30).length})` },
            { id: '60', label: `60 dias (${alertRows.filter((r) => r.daysLeft >= 0 && r.daysLeft <= 60).length})` },
            { id: '90', label: `90 dias (${alertRows.filter((r) => r.daysLeft >= 0 && r.daysLeft <= 90).length})` }
          ].map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setWindowFilter(f.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                windowFilter === f.id ? 'bg-[#1B3B2B] text-white' : 'bg-[#F8F3EF] text-[#1B3B2B] hover:bg-[#EAE3DA]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-rose-200 bg-rose-50 text-rose-800 hover:bg-rose-100 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" /> Imprimir / PDF
          </button>
          <button
            type="button"
            onClick={exportCsv}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Excel
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                <th className="py-3 px-3">Tipo</th>
                <th className="py-3 px-3">Colaborador / Item</th>
                <th className="py-3 px-3">Empresa</th>
                <th className="py-3 px-3">Detalhe</th>
                <th className="py-3 px-3">Vencimento</th>
                <th className="py-3 px-3 text-center">Situação</th>
                <th className="py-3 px-3 text-center">Alerta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-slate-400">
                    <BellRing className="w-6 h-6 mx-auto mb-2 text-slate-300" />
                    Nenhum vencimento encontrado para este filtro.
                  </td>
                </tr>
              ) : filtered.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50">
                  <td className="py-3 px-3 font-bold text-[#1B3B2B]">{row.type}</td>
                  <td className="py-3 px-3 font-bold text-slate-900">{row.personOrItem}</td>
                  <td className="py-3 px-3">{row.clientName}</td>
                  <td className="py-3 px-3 text-slate-600">{row.detail}</td>
                  <td className="py-3 px-3 font-mono">{formatDateBR(row.dueDate)}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                      row.daysLeft < 0 ? 'bg-rose-100 text-rose-800' :
                      row.daysLeft <= 30 ? 'bg-amber-100 text-amber-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {row.daysLeft < 0 ? `Vencido (${Math.abs(row.daysLeft)}d)` : `${row.daysLeft}d restantes`}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <button
                      type="button"
                      onClick={() => sendWhatsApp(row)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-700 text-white font-bold text-[11px] hover:bg-emerald-800 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
