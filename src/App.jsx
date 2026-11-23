import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import {
  LayoutDashboard,
// ... existing code ...
      {/* 5. MODAL CONFIRMAR ESTORNO DE PARCELA */}
      {cancelInstallmentTarget && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Estornar Recebimento?</h3>
            <p className="text-xs text-slate-600">
              Deseja cancelar a baixa da <strong>Parcela {cancelInstallmentTarget.installmentNumber}</strong> e remover
              o lançamento correspondente do Livro Caixa?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button
                onClick={() => setCancelInstallmentTarget(null)}
                className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmCancelReceiveInstallment}
                className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer"
              >
                Sim, Estornar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL EXCLUIR CONTRATO */}
      {deleteContractTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Contrato?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover o contrato{' '}
              <strong>
                {deleteContractTarget.id} ({deleteContractTarget.client})
              </strong>
              ?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button
                onClick={() => setDeleteContractTarget(null)}
                className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteContract}
                className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer"
              >
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. MODAL CADASTRAR / EDITAR LANÇAMENTO */}
      {showTxModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">
                {editingTx ? 'Editar Lançamento' : 'Novo Lançamento no Livro Caixa'}
              </h3>
              <button
                onClick={() => {
                  setShowTxModal(false);
                  setEditingTx(null);
                }}
                className="text-white hover:text-emerald-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">TIPO</label>
                  <select
                    value={txForm.type}
                    onChange={(e) => {
                      const nextType = e.target.value;
                      const defaultAcc =
                        nextType === 'Entrada' ? planoContasData.receitas[0] : planoContasData.despesas[0];
                      setTxForm({
                        ...txForm,
                        type: nextType,
                        planoContas: defaultAcc?.codigo || txForm.planoContas,
                        planocontas: defaultAcc?.codigo || txForm.planocontas,
                        category: defaultAcc?.nome || txForm.category
                      });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">DATA</label>
                  <input
                    type="date"
                    value={txForm.date}
                    onChange={(e) => {
                      const dt = e.target.value;
                      const mNum = dt.split('-')[1];
                      setTxForm({ ...txForm, date: dt, month: MONTH_NAMES_MAP[mNum] || 'Nov' });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">PLANO DE CONTAS</label>
                <select
                  value={txForm.planocontas || txForm.planoContas}
                  onChange={(e) => {
                    const code = e.target.value;
                    const allC = [...planoContasData.receitas, ...planoContasData.despesas];
                    const found = allC.find((c) => c.codigo === code);
                    setTxForm({
                      ...txForm,
                      planoContas: code,
                      planocontas: code,
                      category: found ? found.nome : txForm.category
                    });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                >
                  <optgroup label="Receitas (1.X)">
                    {planoContasData.receitas.map((r) => (
                      <option key={r.codigo} value={r.codigo}>
                        {r.nome}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Despesas (2.X)">
                    {planoContasData.despesas.map((d) => (
                      <option key={d.codigo} value={d.codigo}>
                        {d.nome}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">FAVORECIDO / CLIENTE</label>
                <input
                  type="text"
                  list="client-list-tx"
                  value={txForm.entity}
                  onChange={(e) => setTxForm({ ...txForm, entity: e.target.value })}
                  placeholder="Nome do cliente ou fornecedor..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                  required
                />
                <datalist id="client-list-tx">
                  {clients.map((cli) => (
                    <option key={cli.id} value={cli.name} />
                  ))}
                </datalist>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">VALOR (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={txForm.amount}
                    onChange={(e) => setTxForm({ ...txForm, amount: e.target.value })}
                    placeholder="0.00"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-black text-[#1B3B2B]"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">FORMA PAGAMENTO</label>
                  <select
                    value={txForm.paymentMethod || 'PIX'}
                    onChange={(e) => setTxForm({ ...txForm, paymentMethod: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    {PAYMENT_METHODS.map((pm) => (
                      <option key={pm} value={pm}>
                        {pm}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">STATUS</label>
                  <select
                    value={txForm.status}
                    onChange={(e) => setTxForm({ ...txForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    <option value="Pago / Recebido">Pago / Recebido</option>
                    <option value="Pendente">Pendente</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">DESCRIÇÃO</label>
                <input
                  type="text"
                  value={txForm.description}
                  onChange={(e) => setTxForm({ ...txForm, description: e.target.value })}
                  placeholder="Detalhes do lançamento..."
                  className="w-full px-3.5 py-2.5 rounded-xl border"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setShowTxModal(false);
                    setEditingTx(null);
                  }}
                  className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
                >
                  Salvar Lançamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 8. MODAL EXCLUIR LANÇAMENTO */}
      {deleteTxTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Lançamento?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover o lançamento{' '}
              <strong>
                {deleteTxTarget.id} ({deleteTxTarget.entity})
              </strong>
              ?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button
                onClick={() => setDeleteTxTarget(null)}
                className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteTransaction}
                className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer"
              >
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. MODAL CADASTRAR / EDITAR CLIENTE */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[92vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">
                {editingClient ? 'Editar Cliente' : 'Novo Cadastro de Cliente'}
              </h3>
              <button
                onClick={() => {
                  setShowClientModal(false);
                  setEditingClient(null);
                  setShowSegmentManager(false);
                  setShowStatusManager(false);
                }}
                className="text-white hover:text-emerald-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveClient} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  CNPJ (BUSCA AUTOMÁTICA AO SAIR DO CAMPO)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={cliForm.document}
                    onChange={(e) => setCliForm({ ...cliForm, document: e.target.value })}
                    onBlur={(e) => {
                      if (e.target.value) handleCnpjBlur(e.target.value);
                    }}
                    placeholder="Digite o CNPJ (apenas números)..."
                    className="w-full px-3.5 py-2.5 rounded-xl border font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">RAZÃO SOCIAL / NOME</label>
                <input
                  type="text"
                  value={cliForm.name}
                  onChange={(e) => setCliForm({ ...cliForm, name: e.target.value })}
                  placeholder="Nome do cliente ou empresa..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-800"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block font-bold text-slate-700 uppercase">SEGMENTO</label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowSegmentManager(!showSegmentManager);
                        setSegmentInput('');
                        setEditingSegmentOriginal(null);
                      }}
                      className="text-[11px] font-extrabold text-[#1B3B2B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> {showSegmentManager ? 'Fechar Opções' : 'Cadastrar / Editar'}
                    </button>
                  </div>
                  <select
                    value={cliForm.segment}
                    onChange={(e) => setCliForm({ ...cliForm, segment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    {availableSegments.map((seg) => (
                      <option key={seg} value={seg}>
                        {seg}
                      </option>
                    ))}
                  </select>

                  {showSegmentManager && (
                    <div className="p-3 rounded-xl border border-[#B7DFC5] bg-[#F4F9F5] space-y-2.5">
                      <div className="text-[10px] font-extrabold uppercase text-[#1B3B2B]">
                        {editingSegmentOriginal ? `Editando: ${editingSegmentOriginal}` : 'Novo Segmento Econômico'}
                      </div>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={segmentInput}
                          onChange={(e) => setSegmentInput(e.target.value)}
                          placeholder="Digite o segmento..."
                          className="flex-1 px-2.5 py-1.5 rounded-lg border bg-white text-xs font-semibold"
                        />
                        <button
                          type="button"
                          onClick={handleSaveSegment}
                          className="px-3 py-1.5 rounded-lg bg-[#1B3B2B] text-white font-bold text-xs hover:bg-[#2D5A43] cursor-pointer"
                        >
                          {editingSegmentOriginal ? 'Salvar' : 'Adicionar'}
                        </button>
                      </div>
                      <div className="max-h-28 overflow-y-auto space-y-1 pt-1 border-t border-emerald-200/60">
                        {availableSegments.map((seg) => (
                          <div
                            key={seg}
                            className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200"
                          >
                            <span className="truncate font-medium pr-2">{seg}</span>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingSegmentOriginal(seg);
                                  setSegmentInput(seg);
                                }}
                                className="p-0.5 text-teal-700 hover:bg-teal-50 rounded cursor-pointer"
                                title="Editar Segmento"
                              >
                                <Edit3 className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteSegment(seg)}
                                className="p-0.5 text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                                title="Excluir Segmento"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block font-bold text-slate-700 uppercase">STATUS</label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowStatusManager(!showStatusManager);
                        setStatusInput('');
                        setEditingStatusOriginal(null);
                      }}
                      className="text-[11px] font-extrabold text-[#1B3B2B] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> {showStatusManager ? 'Fechar Opções' : 'Cadastrar / Editar'}
                    </button>
                  </div>
                  <select
                    value={cliForm.status}
                    onChange={(e) => setCliForm({ ...cliForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    {availableStatuses.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>

                  {showStatusManager && (
                    <div className="p-3 rounded-xl border border-[#B7DFC5] bg-[#F4F9F5] space-y-2.5">
                      <div className="text-[10px] font-extrabold uppercase text-[#1B3B2B]">
                        {editingStatusOriginal ? `Editando: ${editingStatusOriginal}` : 'Novo Status de Cliente'}
                      </div>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={statusInput}
                          onChange={(e) => setStatusInput(e.target.value)}
                          placeholder="Digite o status..."
                          className="flex-1 px-2.5 py-1.5 rounded-lg border bg-white text-xs font-semibold"
                        />
                        <button
                          type="button"
                          onClick={handleSaveStatus}
                          className="px-3 py-1.5 rounded-lg bg-[#1B3B2B] text-white font-bold text-xs hover:bg-[#2D5A43] cursor-pointer"
                        >
                          {editingStatusOriginal ? 'Salvar' : 'Adicionar'}
                        </button>
                      </div>
                      <div className="max-h-28 overflow-y-auto space-y-1 pt-1 border-t border-emerald-200/60">
                        {availableStatuses.map((st) => (
                          <div
                            key={st}
                            className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200"
                          >
                            <span className="truncate font-medium pr-2">{st}</span>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingStatusOriginal(st);
                                  setStatusInput(st);
                                }}
                                className="p-0.5 text-teal-700 hover:bg-teal-50 rounded cursor-pointer"
                                title="Editar Status"
                              >
                                <Edit3 className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteStatus(st)}
                                className="p-0.5 text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                                title="Excluir Status"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">RESPONSÁVEL / CONTATO</label>
                  <input
                    type="text"
                    value={cliForm.contactName || cliForm.contactname || ''}
                    onChange={(e) =>
                      setCliForm({ ...cliForm, contactName: e.target.value, contactname: e.target.value })
                    }
                    placeholder="Nome do contato..."
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">TELEFONE</label>
                  <input
                    type="text"
                    value={cliForm.phone}
                    onChange={(e) => setCliForm({ ...cliForm, phone: e.target.value })}
                    placeholder="(66) 99999-9999"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">E-MAIL</label>
                  <input
                    type="email"
                    value={cliForm.email}
                    onChange={(e) => setCliForm({ ...cliForm, email: e.target.value })}
                    placeholder="email@empresa.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">CIDADE</label>
                  <input
                    type="text"
                    value={cliForm.city}
                    onChange={(e) => setCliForm({ ...cliForm, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setShowClientModal(false);
                    setEditingClient(null);
                    setShowSegmentManager(false);
                    setShowStatusManager(false);
                  }}
                  className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
                >
                  Salvar Cliente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 10. MODAL EXCLUIR CLIENTE */}
      {deleteClientTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Cliente do CRM?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover o cliente <strong>{deleteClientTarget.name}</strong>?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button
                onClick={() => setDeleteClientTarget(null)}
                className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteClient}
                className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer"
              >
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 11. MODAL CADASTRAR / EDITAR CONDICIONANTE */}
      {showCondModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
            <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-extrabold">
                {editingCond ? 'Editar Condicionante Ambiental' : 'Novo Cadastro de Condicionante Ambiental'}
              </h3>
              <button
                onClick={() => {
                  setShowCondModal(false);
                  setEditingCond(null);
                }}
                className="text-white hover:text-emerald-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCondicionante} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  NOME DO CLIENTE / EMPREENDIMENTO
                </label>
                <input
                  type="text"
                  list="client-list-cond"
                  value={condForm.client}
                  onChange={(e) => setCondForm({ ...condForm, client: e.target.value })}
                  placeholder="Selecione ou digite o nome do cliente..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-800"
                  required
                />
                <datalist id="client-list-cond">
                  {clients.map((cli) => (
                    <option key={cli.id} value={cli.name} />
                  ))}
                </datalist>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">LICENÇA (Nº / ANO)</label>
                  <input
                    type="text"
                    value={condForm.license}
                    onChange={(e) => setCondForm({ ...condForm, license: e.target.value })}
                    placeholder="Ex: LO: 106/2026"
                    className="w-full px-3.5 py-2.5 rounded-xl border font-semibold"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">VENCIMENTO FINAL</label>
                  <input
                    type="date"
                    value={condForm.dueDate}
                    onChange={(e) => setCondForm({ ...condForm, dueDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">STATUS</label>
                  <select
                    value={condForm.status}
                    onChange={(e) => setCondForm({ ...condForm, status: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    <option value="FINALIZADO">FINALIZADO</option>
                    <option value="ATENDIDO">ATENDIDO</option>
                    <option value="EM ANDAMENTO">EM ANDAMENTO</option>
                    <option value="A VENCER">A VENCER</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">RESPONSÁVEL - EMPRESA</label>
                <input
                  type="text"
                  value={condForm.responsible}
                  onChange={(e) => setCondForm({ ...condForm, responsible: e.target.value })}
                  placeholder="Nome do responsável técnico..."
                  className="w-full px-3.5 py-2.5 rounded-xl border font-semibold"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  TIPO DE SERVIÇO / DESCRIÇÃO DA CONDICIONANTE
                </label>
                <textarea
                  value={condForm.service}
                  onChange={(e) => setCondForm({ ...condForm, service: e.target.value })}
                  placeholder="Ex: A CADA 6 MESES - ANÁLISE FÍSICO QUÍMICA..."
                  className="w-full px-3.5 py-2.5 rounded-xl border h-20 resize-none font-medium"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">OBSERVAÇÃO</label>
                <textarea
                  value={condForm.observation}
                  onChange={(e) => setCondForm({ ...condForm, observation: e.target.value })}
                  placeholder="Digite observações adicionais..."
                  className="w-full px-3.5 py-2.5 rounded-xl border h-16 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setShowCondModal(false);
                    setEditingCond(null);
                  }}
                  className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
                >
                  Salvar Condicionante
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 12. MODAL EXCLUIR CONDICIONANTE */}
      {deleteCondTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Condicionante?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover a condicionante de <strong>{deleteCondTarget.client}</strong>?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button
                onClick={() => setDeleteCondTarget(null)}
                className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteCondicionante}
                className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer"
              >
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 13A. MODAL CADASTRAR NOVO UTILIZADOR */}
      {showUserRoleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-extrabold text-[#1B3B2B]">Cadastrar Novo Utilizador</h3>
              <button
                onClick={() => setShowUserRoleModal(false)}
                className="text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveNewUserRole} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Nível Hierárquico</label>
                <select
                  value={newRoleForm.level}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, level: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold bg-white cursor-pointer"
                >
                  <option value="Nível 1 — Master">Nível 1 — Master</option>
                  <option value="Nível 2 — Diretoria">Nível 2 — Diretoria</option>
                  <option value="Nível 3 — Financeiro">Nível 3 — Financeiro</option>
                  <option value="Nível Especial — Colaborador">Nível Especial — Colaborador</option>
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1">Nome do Perfil / Departamento</label>
                <input
                  type="text"
                  value={newRoleForm.name}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, name: e.target.value })}
                  placeholder="Ex: Financeiro, Técnico..."
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Nome do Titular / Responsável</label>
                <input
                  type="text"
                  value={newRoleForm.holder}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, holder: e.target.value })}
                  placeholder="Nome completo..."
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">E-mail Corporativo de Acesso</label>
                <input
                  type="email"
                  value={newRoleForm.email}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, email: e.target.value })}
                  placeholder="email@grupomartins.eng.br"
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Senha Inicial</label>
                <input
                  type="text"
                  value={newRoleForm.password}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, password: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold text-teal-900 bg-emerald-50"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Descrição das Alçadas</label>
                <textarea
                  value={newRoleForm.description}
                  onChange={(e) => setNewRoleForm({ ...newRoleForm, description: e.target.value })}
                  placeholder="Explique o escopo de acesso..."
                  className="w-full px-3 py-2 rounded-xl border h-16 resize-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowUserRoleModal(false)}
                  className="px-4 py-2 rounded-xl border font-bold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer"
                >
                  Salvar Utilizador
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 13B. MODAL CONFIGURAR PERMISSÕES (FLAGS) */}
      {editingRolePermissions && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-extrabold text-[#1B3B2B]">Configurar Permissões Granulares</h3>
                <p className="text-xs text-slate-500">
                  Perfil: <strong>{editingRolePermissions.name} ({editingRolePermissions.holder})</strong>
                </p>
              </div>
              <button
                onClick={() => setEditingRolePermissions(null)}
                className="text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              {Object.keys(editingRolePermissions.permissions || {}).map((modKey) => {
                const modPerms = editingRolePermissions.permissions[modKey];
                return (
                  <div
                    key={modKey}
                    className="p-3 rounded-xl border bg-slate-50 flex flex-wrap items-center justify-between gap-3"
                  >
                    <span className="font-extrabold text-[#1B3B2B] uppercase w-32">{modKey}</span>
                    <div className="flex flex-wrap items-center gap-4">
                      {['view', 'create', 'edit', 'delete', 'approve', ...(modKey === 'contratos' ? ['viewValues'] : [])].map(
                        (actKey) => (
                          <label key={actKey} className="flex items-center gap-1.5 cursor-pointer font-medium select-none">
                            <input
                              type="checkbox"
                              checked={
                                actKey === 'viewValues'
                                  ? modPerms?.viewValues !== false
                                  : Boolean(modPerms?.[actKey])
                              }
                              onChange={() => handlePermissionToggle(editingRolePermissions.id, modKey, actKey)}
                              className="w-4 h-4 rounded text-[#1B3B2B] focus:ring-[#1B3B2B] cursor-pointer"
                            />
                            <span className="capitalize">{actKey === 'viewValues' ? 'Ver valores' : actKey}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-3 border-t">
              <button
                onClick={() => setEditingRolePermissions(null)}
                className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer"
              >
                Concluir & Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 13C. MODAL EDITAR PERFIL / SENHA */}
      {editingRoleTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-extrabold text-[#1B3B2B]">Editar Perfil e Senha</h3>
              <button
                onClick={() => setEditingRoleTarget(null)}
                className="text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveRoleEdit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">Cargo / Nível</label>
                <input
                  type="text"
                  value={editingRoleTarget.level}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, level: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Nome do Departamento / Função</label>
                <input
                  type="text"
                  value={editingRoleTarget.name}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border font-bold"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Titular / Responsável</label>
                <input
                  type="text"
                  value={editingRoleTarget.holder}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, holder: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">E-mail Corporativo</label>
                <input
                  type="email"
                  value={editingRoleTarget.email}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Nova Senha de Acesso</label>
                <input
                  type="text"
                  value={editingRoleTarget.password || ''}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, password: e.target.value })}
                  placeholder="Digite a nova senha..."
                  className="w-full px-3 py-2 rounded-xl border font-bold text-teal-900 bg-emerald-50"
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Descrição / Alçadas</label>
                <textarea
                  value={editingRoleTarget.description}
                  onChange={(e) => setEditingRoleTarget({ ...editingRoleTarget, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border h-16 resize-none"
                  required
                />
              </div>
              <div className="flex items-center justify-between pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setDeleteRoleTarget(editingRoleTarget)}
                  className="px-4 py-2 rounded-xl bg-rose-100 text-rose-700 font-bold hover:bg-rose-200 cursor-pointer"
                >
                  Excluir Perfil
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingRoleTarget(null)}
                    className="px-4 py-2 rounded-xl border font-bold cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 13D. MODAL CONFIRMAR EXCLUSÃO DE PERFIL */}
      {deleteRoleTarget && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-rose-700">Excluir Perfil de Acesso?</h3>
            <p className="text-xs text-slate-600">
              Deseja realmente remover o perfil{' '}
              <strong>
                {deleteRoleTarget.name} ({deleteRoleTarget.holder})
              </strong>
              ?
            </p>
            <div className="flex justify-center gap-2 pt-2">
              <button
                onClick={() => setDeleteRoleTarget(null)}
                className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteRole}
                className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer"
              >
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TELA DE LOGIN */}
      {!authLoggedIn && (
        <div className="fixed inset-0 z-50 bg-[#1B3B2B]/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border text-center space-y-6">
            <GrupoMartinsLogo size="md" className="mx-auto" />
            <div>
              <h2 className="text-xl font-black text-[#1B3B2B]">Autenticação de Acesso — Nuvem</h2>
              <p className="text-xs text-slate-500 mt-1">Insira seu e-mail corporativo e senha cadastrados.</p>
            </div>
            {authErrorMsg && (
              <div className="p-3 rounded-xl bg-rose-100 text-rose-800 text-xs font-bold">{authErrorMsg}</div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAuthErrorMsg('');
                const found = accessRoles.find(
                  (r) => r.email && r.email.toLowerCase() === authEmailInput.trim().toLowerCase()
                );
                if (!found) {
                  setAuthErrorMsg('E-mail não cadastrado.');
                  return;
                }
                if (found.password && found.password !== authPasswordInput.trim()) {
                  setAuthErrorMsg('Senha incorreta.');
                  return;
                }
                setActiveRoleId(found.id);
                try {
                  sessionStorage.setItem(SESSION_ROLE_KEY, found.id);
                } catch {
                  // ignora caso sessionStorage não esteja disponível
                }
                const isMasterUser =
                  found.id === 'ROLE-01-PEDRO' || found.email.toLowerCase() === 'pedrosmelos@gmail.com';
                const firstOpenTab = navItems.find(
                  (item) =>
                    (isMasterUser && item.permKey === 'acessos') || Boolean(found.permissions?.[item.permKey]?.view)
                );
                if (firstOpenTab) setActiveTab(firstOpenTab.id);

                setAuthLoggedIn(true);
                showToast(`Bem-vindo(a), ${found.holder}! Acesso autorizado.`);
              }}
              className="space-y-4 text-left text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">E-mail Corporativo</label>
                <input
                  type="email"
                  value={authEmailInput}
                  onChange={(e) => setAuthEmailInput(e.target.value)}
                  placeholder="ex: maikon@grupomartins.eng.br"
                  className="w-full px-3.5 py-2.5 rounded-xl border"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Senha</label>
                <input
                  type="password"
                  value={authPasswordInput}
                  onChange={(e) => setAuthPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
              >
                Entrar no ERP (Sincronizado)
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
