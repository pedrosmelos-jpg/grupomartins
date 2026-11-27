import React, { useMemo } from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { SST_MODULE_GROUPS } from '../sstConstants';

export default function SstCentralHub({
  searchTerm = '',
  stats = {},
  onSelectModule
}) {
  const q = searchTerm.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    if (!q) return SST_MODULE_GROUPS;
    return SST_MODULE_GROUPS
      .map((group) => {
        const groupMatch = group.title.toLowerCase().includes(q);
        const matchingItems = group.items.filter(
          (item) => groupMatch || item.label.toLowerCase().includes(q)
        );
        return { ...group, items: matchingItems };
      })
      .filter((group) => group.items.length > 0);
  }, [q]);

  const kpis = [
    {
      label: 'Vidas Ativas',
      value: stats.employeesCount ?? 0,
      borderClass: 'border-t-[#1B3B2B]',
      valueClass: 'text-[#1B3B2B]'
    },
    {
      label: 'ASOs / Exames Vencendo (30d)',
      value: stats.asosExpiring30d ?? 0,
      borderClass: 'border-t-amber-500',
      valueClass: 'text-amber-600'
    },
    {
      label: 'Treinamentos NR Vencendo (30d)',
      value: stats.trainingsExpiring30d ?? 0,
      borderClass: 'border-t-orange-600',
      valueClass: 'text-orange-700'
    },
    {
      label: 'Eventos eSocial S-2210/20/40',
      value: stats.esocialCount ?? 0,
      borderClass: 'border-t-emerald-600',
      valueClass: 'text-emerald-700'
    },
    {
      label: 'Riscos & Documentos SST',
      value: (stats.risksCount ?? 0) + (stats.docsCount ?? 0),
      borderClass: 'border-t-teal-700',
      valueClass: 'text-teal-800'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className={`bg-white rounded-2xl p-4 border border-slate-200 border-t-4 ${kpi.borderClass} shadow-sm`}
          >
            <div className="text-[11px] font-bold text-slate-500 uppercase">
              {kpi.label}
            </div>
            <div className={`text-xl font-black mt-1.5 ${kpi.valueClass}`}>
              {kpi.value}
            </div>
          </div>
        ))}
      </div>

      {filteredGroups.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center text-xs text-slate-500">
          Nenhuma função encontrada para &ldquo;{searchTerm}&rdquo;.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="bg-[#1B3B2B] text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                  <h3 className="text-xs font-extrabold uppercase tracking-wide">
                    {group.title}
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#2D5A43] text-emerald-200">
                  {group.items.length}
                </span>
              </div>

              <div className="p-3 space-y-1.5 flex-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      onSelectModule(item.targetTab || group.targetTab, item.subTab)
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl border border-slate-100 bg-[#F8F3EF]/40 hover:bg-[#E6F4EA] hover:border-[#B7DFC5] text-left text-xs font-bold text-[#1B3B2B] transition cursor-pointer group"
                  >
                    <span className="truncate pr-2">{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1B3B2B] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
