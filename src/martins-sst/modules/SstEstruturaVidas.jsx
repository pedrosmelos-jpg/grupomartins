import React, { useState, useMemo } from 'react';
import {
  Building2,
  Layers,
  Briefcase,
  Grid,
  Users,
  Plus,
  Trash2,
  Search,
  ArrowRightLeft
} from 'lucide-react';

const emptyUnit = (clientId) => ({
  client_id: String(clientId || ''),
  name: '',
  cnpj_cno: '',
  address: '',
  cnae: '',
  risk_grade: 3,
  active: true
});

const emptySector = (clientId, unitId = '') => ({
  client_id: String(clientId || ''),
  unit_id: unitId || '',
  name: '',
  description: '',
  environment_desc: '',
  active: true
});

const emptyRole = (clientId, sectorId = '') => ({
  client_id: String(clientId || ''),
  sector_id: sectorId || '',
  name: '',
  cbo: '',
  activities_desc: '',
  active: true
});

const emptyGhe = (clientId, unitId = '') => ({
  client_id: String(clientId || ''),
  unit_id: unitId || '',
  code: '',
  name: '',
  description: '',
  role_ids: []
});

const emptyEmployee = (clientId) => ({
  client_id: String(clientId || ''),
  unit_id: '',
  sector_id: '',
  role_id: '',
  ghe_id: '',
  full_name: '',
  cpf: '',
  rg: '',
  birth_date: '',
  gender: 'Masculino',
  esocial_registration: '',
  admission_date: new Date().toISOString().slice(0, 10),
  dismissal_date: '',
  status: 'Ativo'
});

export default function SstEstruturaVidas({
  supabase,
  selectedClientId,
  clients = [],
  sstData,
  onReload,
  showToast
}) {
  const [section, setSection] = useState('funcionarios'); // funcionarios | unidades | setores | cargos | ghe
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);

  const [unitForm, setUnitForm] = useState(() => emptyUnit(selectedClientId));
  const [sectorForm, setSectorForm] = useState(() => emptySector(selectedClientId));
  const [roleForm, setRoleForm] = useState(() => emptyRole(selectedClientId));
  const [gheForm, setGheForm] = useState(() => emptyGhe(selectedClientId));
  const [empForm, setEmpForm] = useState(() => emptyEmployee(selectedClientId));
  const [editingEmpId, setEditingEmpId] = useState(null);

  const clientNameMap = useMemo(() => {
    const map = {};
    clients.forEach((c) => {
      map[String(c.id)] = c.name;
    });
    return map;
  }, [clients]);

  const unitNameMap = useMemo(() => {
    const map = {};
    (sstData.units || []).forEach((u) => {
      map[u.id] = u.name;
    });
    return map;
  }, [sstData.units]);

  const sectorNameMap = useMemo(() => {
    const map = {};
    (sstData.sectors || []).forEach((s) => {
      map[s.id] = s.name;
    });
    return map;
  }, [sstData.sectors]);

  const roleNameMap = useMemo(() => {
    const map = {};
    (sstData.roles || []).forEach((r) => {
      map[r.id] = r.cbo ? `${r.name} (CBO ${r.cbo})` : r.name;
    });
    return map;
  }, [sstData.roles]);

  const gheNameMap = useMemo(() => {
    const map = {};
    (sstData.ghes || []).forEach((g) => {
      map[g.id] = `${g.code} — ${g.name}`;
    });
    return map;
  }, [sstData.ghes]);

  const resolveClientId = (formClientId) => formClientId || selectedClientId || clients[0]?.id || '';

  const handleSaveUnit = async (e) => {
    e.preventDefault();
    const cid = resolveClientId(unitForm.client_id);
    if (!cid || !unitForm.name.trim()) {
      alert('Selecione uma empresa e informe o nome da unidade/obra.');
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_units').insert([{
        client_id: String(cid),
        name: unitForm.name.trim(),
        cnpj_cno: unitForm.cnpj_cno.trim() || null,
        address: unitForm.address.trim() || null,
        cnae: unitForm.cnae.trim() || null,
        risk_grade: Number(unitForm.risk_grade) || 3,
        active: true
      }]);
      if (error) throw error;
      setUnitForm(emptyUnit(cid));
      showToast('Unidade / Obra cadastrada!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar unidade: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveSector = async (e) => {
    e.preventDefault();
    const cid = resolveClientId(sectorForm.client_id);
    if (!cid || !sectorForm.name.trim()) {
      alert('Selecione uma empresa e informe o nome do setor.');
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_sectors').insert([{
        client_id: String(cid),
        unit_id: sectorForm.unit_id || null,
        name: sectorForm.name.trim(),
        description: sectorForm.description.trim() || null,
        environment_desc: sectorForm.environment_desc.trim() || null,
        active: true
      }]);
      if (error) throw error;
      setSectorForm(emptySector(cid, sectorForm.unit_id));
      showToast('Setor cadastrado!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar setor: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveRole = async (e) => {
    e.preventDefault();
    const cid = resolveClientId(roleForm.client_id);
    if (!cid || !roleForm.name.trim()) {
      alert('Selecione uma empresa e informe o nome do cargo/função.');
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_roles').insert([{
        client_id: String(cid),
        sector_id: roleForm.sector_id || null,
        name: roleForm.name.trim(),
        cbo: roleForm.cbo.trim() || null,
        activities_desc: roleForm.activities_desc.trim() || null,
        active: true
      }]);
      if (error) throw error;
      setRoleForm(emptyRole(cid, roleForm.sector_id));
      showToast('Cargo / Função (CBO) cadastrado!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar cargo: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveGhe = async (e) => {
    e.preventDefault();
    const cid = resolveClientId(gheForm.client_id);
    if (!cid || !gheForm.code.trim() || !gheForm.name.trim()) {
      alert('Informe código e nome do GHE.');
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from('sst_ghes').insert([{
        client_id: String(cid),
        unit_id: gheForm.unit_id || null,
        code: gheForm.code.trim(),
        name: gheForm.name.trim(),
        description: gheForm.description.trim() || null,
        role_ids: gheForm.role_ids || []
      }]);
      if (error) throw error;
      setGheForm(emptyGhe(cid, gheForm.unit_id));
      showToast('GHE cadastrado!');
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar GHE: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSaveEmployee = async (e) => {
    e.preventDefault();
    const cid = resolveClientId(empForm.client_id);
    if (!cid || !empForm.full_name.trim() || !empForm.cpf.trim()) {
      alert('Preencha nome completo e CPF do funcionário.');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        client_id: String(cid),
        unit_id: empForm.unit_id || null,
        sector_id: empForm.sector_id || null,
        role_id: empForm.role_id || null,
        ghe_id: empForm.ghe_id || null,
        full_name: empForm.full_name.trim(),
        cpf: empForm.cpf.trim(),
        rg: empForm.rg.trim() || null,
        birth_date: empForm.birth_date || null,
        gender: empForm.gender || null,
        esocial_registration: empForm.esocial_registration.trim() || null,
        admission_date: empForm.admission_date || null,
        dismissal_date: empForm.dismissal_date || null,
        status: empForm.status || 'Ativo'
      };

      if (editingEmpId) {
        const { error } = await supabase.from('sst_employees').update(payload).eq('id', editingEmpId);
        if (error) throw error;
        showToast('Cadastro / movimentação do funcionário atualizado!');
      } else {
        const { error } = await supabase.from('sst_employees').insert([payload]);
        if (error) throw error;
        showToast('Funcionário (vida) cadastrado com sucesso!');
      }

      setEditingEmpId(null);
      setEmpForm(emptyEmployee(cid));
      await onReload?.();
    } catch (err) {
      alert('Erro ao salvar funcionário: ' + err.message);
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
    showToast(`${label} excluído.`);
    await onReload?.();
  };

  const q = search.trim().toLowerCase();

  const filteredEmployees = useMemo(() => {
    return (sstData.employees || []).filter((emp) => {
      if (!q) return true;
      return (
        (emp.full_name || '').toLowerCase().includes(q) ||
        (emp.cpf || '').toLowerCase().includes(q) ||
        (roleNameMap[emp.role_id] || '').toLowerCase().includes(q) ||
        (gheNameMap[emp.ghe_id] || '').toLowerCase().includes(q)
      );
    });
  }, [sstData.employees, q, roleNameMap, gheNameMap]);

  const subSections = [
    { id: 'funcionarios', label: 'Funcionários (Vidas)', icon: Users, count: (sstData.employees || []).length },
    { id: 'unidades', label: 'Unidades & Obras', icon: Building2, count: (sstData.units || []).length },
    { id: 'setores', label: 'Setores', icon: Layers, count: (sstData.sectors || []).length },
    { id: 'cargos', label: 'Cargos & CBO', icon: Briefcase, count: (sstData.roles || []).length },
    { id: 'ghe', label: 'Matriz de GHE', icon: Grid, count: (sstData.ghes || []).length }
  ];

  const renderClientSelect = (value, onChange) => (
    <div>
      <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Empresa</label>
      <select
        value={value || selectedClientId || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
        required
      >
        <option value="">Selecione a empresa...</option>
        {clients.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="space-y-5">
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {subSections.map((s) => {
            const Icon = s.icon;
            const active = section === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSection(s.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  active
                    ? 'bg-[#1B3B2B] text-white'
                    : 'bg-[#F8F3EF] text-[#1B3B2B] hover:bg-[#EAE3DA]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{s.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${active ? 'bg-[#2D5A43] text-emerald-200' : 'bg-white text-slate-600'}`}>
                  {s.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filtrar nome, CPF, cargo ou GHE..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs"
          />
        </div>
      </div>

      {/* 1. FUNCIONÁRIOS (VIDAS) */}
      {section === 'funcionarios' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveEmployee} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-[#2D5A43]" />
                {editingEmpId ? 'Editar / Transferir Funcionário' : 'Cadastrar Funcionário (Vida)'}
              </h3>
              {editingEmpId && (
                <button
                  type="button"
                  onClick={() => { setEditingEmpId(null); setEmpForm(emptyEmployee(selectedClientId)); }}
                  className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                >
                  Cancelar Edição
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {renderClientSelect(empForm.client_id, (val) => setEmpForm({ ...empForm, client_id: val }))}

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nome Completo</label>
                <input
                  type="text"
                  value={empForm.full_name}
                  onChange={(e) => setEmpForm({ ...empForm, full_name: e.target.value })}
                  placeholder="Nome do colaborador"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">CPF</label>
                <input
                  type="text"
                  value={empForm.cpf}
                  onChange={(e) => setEmpForm({ ...empForm, cpf: e.target.value })}
                  placeholder="000.000.000-00"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Matrícula eSocial</label>
                <input
                  type="text"
                  value={empForm.esocial_registration}
                  onChange={(e) => setEmpForm({ ...empForm, esocial_registration: e.target.value })}
                  placeholder="Ex: 000124"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Unidade / Obra</label>
                <select
                  value={empForm.unit_id}
                  onChange={(e) => setEmpForm({ ...empForm, unit_id: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                >
                  <option value="">Selecione...</option>
                  {(sstData.units || []).map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Setor</label>
                <select
                  value={empForm.sector_id}
                  onChange={(e) => setEmpForm({ ...empForm, sector_id: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                >
                  <option value="">Selecione...</option>
                  {(sstData.sectors || []).map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Cargo / Função (CBO)</label>
                <select
                  value={empForm.role_id}
                  onChange={(e) => setEmpForm({ ...empForm, role_id: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                >
                  <option value="">Selecione...</option>
                  {(sstData.roles || []).map((r) => <option key={r.id} value={r.id}>{roleNameMap[r.id]}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">GHE (Grupo Homogêneo)</label>
                <select
                  value={empForm.ghe_id}
                  onChange={(e) => setEmpForm({ ...empForm, ghe_id: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white"
                >
                  <option value="">Selecione...</option>
                  {(sstData.ghes || []).map((g) => <option key={g.id} value={g.id}>{gheNameMap[g.id]}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Data de Admissão</label>
                <input
                  type="date"
                  value={empForm.admission_date}
                  onChange={(e) => setEmpForm({ ...empForm, admission_date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nascimento</label>
                <input
                  type="date"
                  value={empForm.birth_date}
                  onChange={(e) => setEmpForm({ ...empForm, birth_date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Situação</label>
                <select
                  value={empForm.status}
                  onChange={(e) => setEmpForm({ ...empForm, status: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Afastado">Afastado</option>
                  <option value="Demitido">Demitido</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-extrabold hover:bg-[#2D5A43] cursor-pointer disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" />
                  {editingEmpId ? 'Salvar Alterações' : 'Adicionar Vida'}
                </button>
              </div>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                    <th className="py-3 px-3">Colaborador</th>
                    <th className="py-3 px-3">CPF / Matrícula</th>
                    <th className="py-3 px-3">Empresa / Unidade</th>
                    <th className="py-3 px-3">Setor / Cargo (CBO)</th>
                    <th className="py-3 px-3">GHE</th>
                    <th className="py-3 px-3 text-center">Status</th>
                    <th className="py-3 px-3 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredEmployees.length === 0 ? (
                    <tr><td colSpan={7} className="py-8 text-center text-slate-400">Nenhum funcionário cadastrado.</td></tr>
                  ) : filteredEmployees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-bold text-slate-900">{emp.full_name}</td>
                      <td className="py-3 px-3 font-mono text-[11px]">
                        <div>{emp.cpf}</div>
                        {emp.esocial_registration && <div className="text-slate-500">Mat: {emp.esocial_registration}</div>}
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-[#1B3B2B]">{clientNameMap[emp.client_id] || '—'}</div>
                        <div className="text-[11px] text-slate-500">{unitNameMap[emp.unit_id] || '—'}</div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold">{roleNameMap[emp.role_id] || '—'}</div>
                        <div className="text-[11px] text-slate-500">{sectorNameMap[emp.sector_id] || '—'}</div>
                      </td>
                      <td className="py-3 px-3 font-semibold text-teal-800">{gheNameMap[emp.ghe_id] || '—'}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                          emp.status === 'Ativo' ? 'bg-emerald-100 text-emerald-800' :
                          emp.status === 'Afastado' ? 'bg-amber-100 text-amber-800' :
                          'bg-slate-200 text-slate-700'
                        }`}>
                          {emp.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center space-x-1 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingEmpId(emp.id);
                            setEmpForm({
                              client_id: emp.client_id || selectedClientId || '',
                              unit_id: emp.unit_id || '',
                              sector_id: emp.sector_id || '',
                              role_id: emp.role_id || '',
                              ghe_id: emp.ghe_id || '',
                              full_name: emp.full_name || '',
                              cpf: emp.cpf || '',
                              rg: emp.rg || '',
                              birth_date: emp.birth_date || '',
                              gender: emp.gender || 'Masculino',
                              esocial_registration: emp.esocial_registration || '',
                              admission_date: emp.admission_date || '',
                              dismissal_date: emp.dismissal_date || '',
                              status: emp.status || 'Ativo'
                            });
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#F8F3EF] text-[#1B3B2B] font-bold text-[11px] hover:bg-[#EAE3DA] cursor-pointer"
                        >
                          Editar / Mover
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete('sst_employees', emp.id, emp.full_name)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
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
        </div>
      )}

      {/* 2. UNIDADES & OBRAS */}
      {section === 'unidades' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveUnit} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {renderClientSelect(unitForm.client_id, (val) => setUnitForm({ ...unitForm, client_id: val }))}
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nome da Unidade / Obra</label>
              <input type="text" value={unitForm.name} onChange={(e) => setUnitForm({ ...unitForm, name: e.target.value })} placeholder="Ex: Matriz / Fazenda Boa Vista" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">CNPJ / CNO</label>
              <input type="text" value={unitForm.cnpj_cno} onChange={(e) => setUnitForm({ ...unitForm, cnpj_cno: e.target.value })} placeholder="CNPJ ou CNO" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono" />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">CNAE / Grau Risco</label>
              <div className="flex gap-1.5">
                <input type="text" value={unitForm.cnae} onChange={(e) => setUnitForm({ ...unitForm, cnae: e.target.value })} placeholder="CNAE" className="w-2/3 px-2.5 py-2 rounded-xl border border-slate-200 text-xs" />
                <select value={unitForm.risk_grade} onChange={(e) => setUnitForm({ ...unitForm, risk_grade: e.target.value })} className="w-1/3 px-2 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white">
                  {[1, 2, 3, 4].map((g) => <option key={g} value={g}>GR {g}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Endereço</label>
              <input type="text" value={unitForm.address} onChange={(e) => setUnitForm({ ...unitForm, address: e.target.value })} placeholder="Rodovia / Endereço" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs" />
            </div>
            <div className="flex items-end">
              <button type="submit" disabled={saving} className="w-full px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                + Salvar Unidade
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Unidade / Obra</th>
                  <th className="py-3 px-3">Empresa</th>
                  <th className="py-3 px-3">CNPJ / CNO</th>
                  <th className="py-3 px-3">CNAE / Grau Risco</th>
                  <th className="py-3 px-3 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.units || []).length === 0 ? (
                  <tr><td colSpan={5} className="py-8 text-center text-slate-400">Nenhuma unidade cadastrada.</td></tr>
                ) : (sstData.units || []).map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold">{u.name}</td>
                    <td className="py-3 px-3">{clientNameMap[u.client_id] || '—'}</td>
                    <td className="py-3 px-3 font-mono">{u.cnpj_cno || '—'}</td>
                    <td className="py-3 px-3">{u.cnae || '—'} • Grau {u.risk_grade || 3}</td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_units', u.id, u.name)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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

      {/* 3. SETORES */}
      {section === 'setores' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveSector} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {renderClientSelect(sectorForm.client_id, (val) => setSectorForm({ ...sectorForm, client_id: val }))}
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Unidade</label>
              <select value={sectorForm.unit_id} onChange={(e) => setSectorForm({ ...sectorForm, unit_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white">
                <option value="">Todas / Geral</option>
                {(sstData.units || []).map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nome do Setor</label>
              <input type="text" value={sectorForm.name} onChange={(e) => setSectorForm({ ...sectorForm, name: e.target.value })} placeholder="Ex: Oficina / Produção" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Descrição do Ambiente</label>
              <input type="text" value={sectorForm.environment_desc} onChange={(e) => setSectorForm({ ...sectorForm, environment_desc: e.target.value })} placeholder="Piso concreto, ventilação..." className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs" />
            </div>
            <div className="flex items-end">
              <button type="submit" disabled={saving} className="w-full px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                + Salvar Setor
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Setor</th>
                  <th className="py-3 px-3">Unidade</th>
                  <th className="py-3 px-3">Ambiente</th>
                  <th className="py-3 px-3 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.sectors || []).length === 0 ? (
                  <tr><td colSpan={4} className="py-8 text-center text-slate-400">Nenhum setor cadastrado.</td></tr>
                ) : (sstData.sectors || []).map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold">{s.name}</td>
                    <td className="py-3 px-3">{unitNameMap[s.unit_id] || '—'}</td>
                    <td className="py-3 px-3">{s.environment_desc || '—'}</td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_sectors', s.id, s.name)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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

      {/* 4. CARGOS & CBO */}
      {section === 'cargos' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveRole} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {renderClientSelect(roleForm.client_id, (val) => setRoleForm({ ...roleForm, client_id: val }))}
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Setor</label>
              <select value={roleForm.sector_id} onChange={(e) => setRoleForm({ ...roleForm, sector_id: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white">
                <option value="">Selecione...</option>
                {(sstData.sectors || []).map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Cargo / Função</label>
              <input type="text" value={roleForm.name} onChange={(e) => setRoleForm({ ...roleForm, name: e.target.value })} placeholder="Ex: Operador de Pá Carregadeira" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Código CBO</label>
              <input type="text" value={roleForm.cbo} onChange={(e) => setRoleForm({ ...roleForm, cbo: e.target.value })} placeholder="Ex: 7152-10" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono" />
            </div>
            <div className="flex items-end">
              <button type="submit" disabled={saving} className="w-full px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                + Salvar Cargo
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Cargo / Função</th>
                  <th className="py-3 px-3">CBO</th>
                  <th className="py-3 px-3">Setor</th>
                  <th className="py-3 px-3 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.roles || []).length === 0 ? (
                  <tr><td colSpan={4} className="py-8 text-center text-slate-400">Nenhum cargo cadastrado.</td></tr>
                ) : (sstData.roles || []).map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold">{r.name}</td>
                    <td className="py-3 px-3 font-mono">{r.cbo || '—'}</td>
                    <td className="py-3 px-3">{sectorNameMap[r.sector_id] || '—'}</td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_roles', r.id, r.name)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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

      {/* 5. MATRIZ DE GHE */}
      {section === 'ghe' && (
        <div className="space-y-5">
          <form onSubmit={handleSaveGhe} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {renderClientSelect(gheForm.client_id, (val) => setGheForm({ ...gheForm, client_id: val }))}
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Código GHE</label>
              <input type="text" value={gheForm.code} onChange={(e) => setGheForm({ ...gheForm, code: e.target.value })} placeholder="Ex: GHE-01" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono font-bold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Nome do GHE</label>
              <input type="text" value={gheForm.name} onChange={(e) => setGheForm({ ...gheForm, name: e.target.value })} placeholder="Ex: Operação de Campo" className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold" required />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Descrição da Exposição</label>
              <input type="text" value={gheForm.description} onChange={(e) => setGheForm({ ...gheForm, description: e.target.value })} placeholder="Exposição similar..." className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs" />
            </div>
            <div className="flex items-end">
              <button type="submit" disabled={saving} className="w-full px-4 py-2 rounded-xl bg-[#1B3B2B] text-white text-xs font-extrabold hover:bg-[#2D5A43] cursor-pointer">
                + Salvar GHE
              </button>
            </div>
          </form>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Código</th>
                  <th className="py-3 px-3">Nome do GHE</th>
                  <th className="py-3 px-3">Descrição</th>
                  <th className="py-3 px-3 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(sstData.ghes || []).length === 0 ? (
                  <tr><td colSpan={4} className="py-8 text-center text-slate-400">Nenhum GHE cadastrado.</td></tr>
                ) : (sstData.ghes || []).map((g) => (
                  <tr key={g.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-mono font-bold text-[#1B3B2B]">{g.code}</td>
                    <td className="py-3 px-3 font-bold">{g.name}</td>
                    <td className="py-3 px-3">{g.description || '—'}</td>
                    <td className="py-3 px-3 text-center">
                      <button type="button" onClick={() => handleDelete('sst_ghes', g.id, g.code)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer">
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
