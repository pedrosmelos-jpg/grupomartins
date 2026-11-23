```
                  {(techSearch !== '' || techStatusFilter !== 'Todos') && (
                    <button
                      type="button"
                      onClick={() => {
                        setTechSearch('');
                        setTechStatusFilter('Todos');
                      }}
                      className="text-xs text-rose-600 font-bold hover:underline cursor-pointer"
                    >
                      Limpar Filtros
                    </button>
                  )}
                </div>

                <div className="text-xs font-semibold text-slate-500">
                  Exibindo {filteredTechnicalContracts.length} de {contracts.length} contratos
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px] tracking-wider">
                        {[
                          ['id', 'CÓDIGO', ''],
                          ['client', 'CLIENTE / EMPREENDIMENTO', ''],
                          ['service', 'PLANO DE CONTAS', ''],
                          ['agency', 'ÓRGÃO / SETOR', ''],
                          ['observation', 'OBSERVAÇÃO', ''],
                          ['status', 'STATUS ATUAL', 'text-center justify-center']
                        ].map(([field, label, extra]) => (
                          <th
                            key={field}
                            onClick={() => handleTechSort(field)}
                            className={`py-3.5 px-4 cursor-pointer hover:bg-[#244B38] transition select-none ${extra.includes('text-center') ? 'text-center' : ''}`}
                          >
                            <div className={`flex items-center gap-1 ${extra.includes('justify-center') ? 'justify-center' : ''}`}>
                              {label}
                              {techSortField === field && (techSortDirection === 'asc'
                                ? <ArrowUp className="w-3 h-3 text-emerald-300" />
                                : <ArrowDown className="w-3 h-3 text-emerald-300" />)}
                            </div>
                          </th>
                        ))}
                        <th className="py-3.5 px-4 text-right">ALTERAR STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredTechnicalContracts.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="py-10 text-center text-slate-400">
                            Nenhum contrato encontrado para o filtro selecionado.
                          </td>
                        </tr>
                      ) : (
                        filteredTechnicalContracts.map((ct) => {
                          const currentTechStatus = ct.status || 'Em Andamento';
                          return (
                            <tr key={ct.id} className="hover:bg-[#F8F3EF]/60 transition-colors">
                              <td className="py-4 px-4 font-mono font-bold text-[#1B3B2B] whitespace-nowrap">{ct.id}</td>
                              <td className="py-4 px-4 font-semibold text-slate-900">{ct.client}</td>
                              <td className="py-4 px-4 text-slate-700">{ct.service}</td>
                              <td className="py-4 px-4 font-medium text-slate-700 whitespace-nowrap">{ct.agency || 'SEMA-MT'}</td>
                              <td className="py-4 px-4 text-slate-500 max-w-xs truncate" title={ct.observation || ''}>
                                {ct.observation || '—'}
                              </td>
                              <td className="py-4 px-4 text-center whitespace-nowrap">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold border ${getTechnicalStatusBadgeClass(currentTechStatus)}`}>
                                  {currentTechStatus}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-right whitespace-nowrap">
                                <select
                                  value={currentTechStatus}
                                  disabled={!hasPermission('status_tecnico', 'edit')}
                                  onChange={(e) => handleUpdateContractTechnicalStatus(ct.id, e.target.value)}
                                  className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold bg-white text-[#1B3B2B] cursor-pointer disabled:opacity-50"
                                >
                                  {technicalStatusOptions.map((st) => (
                                    <option key={st} value={st}>{st}</option>
                                  ))}
                                </select>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clientes' && (
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={cliSearch}
                    onChange={(e) => setCliSearch(e.target.value)}
                    placeholder="Buscar clientes..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>
                {hasPermission('clientes', 'create') && (
                  <button
                    onClick={() => {
                      setEditingClient(null);
                      setCliForm({
                        name: '',
                        document: '',
                        registration: '',
                        segment: availableSegments[0],
                        city: 'Rondonópolis — MT',
                        contactName: '',
                        phone: '',
                        email: '',
                        mainProgram: 'Licenciamento Ambiental (LP / LI / LO)',
                        status: availableStatuses[0],
                        observation: ''
                      });
                      setShowClientModal(true);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#1B3B2B] text-white cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4" /> Cadastrar Cliente
                  </button>
                )}
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase">
                        <th onClick={() => handleSort('id')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center gap-1">ID {sortField === 'id' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th onClick={() => handleSort('name')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center gap-1">Razão Social / Empreendimento {sortField === 'name' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th onClick={() => handleSort('segment')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center gap-1">Segmento Econômico {sortField === 'segment' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th onClick={() => handleSort('contactname')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center gap-1">Responsável / Contato {sortField === 'contactname' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th onClick={() => handleSort('city')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center gap-1">Cidade {sortField === 'city' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th onClick={() => handleSort('status')} className="py-3.5 px-3 text-center cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center justify-center gap-1">Status {sortField === 'status' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th className="py-3.5 px-3 text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredClients.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="py-8 text-center text-slate-400">Nenhum cliente cadastrado.</td>
                        </tr>
                      ) : (
                        filteredClients.map((cli) => (
                          <tr key={cli.id} className="hover:bg-slate-50">
                            <td className="py-3 px-3 font-mono font-bold">{cli.id}</td>
                            <td className="py-3 px-3 font-bold">{cli.name}</td>
                            <td className="py-3 px-3">{cli.segment}</td>
                            <td className="py-3 px-3">{cli.contactName || cli.contactname || '—'}</td>
                            <td className="py-3 px-3">{cli.city}</td>
                            <td className="py-3 px-3 text-center">
                              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                                {cli.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-center space-x-2">
                              {hasPermission('clientes', 'edit') && (
                                <button
                                  onClick={() => {
                                    setEditingClient(cli);
                                    setCliForm({
                                      name: cli.name,
                                      document: cli.document || '',
                                      registration: cli.registration || '',
                                      segment: cli.segment || availableSegments[0],
                                      city: cli.city || 'Rondonópolis — MT',
                                      contactName: cli.contactName || cli.contactname || '',
                                      phone: cli.phone || '',
                                      email: cli.email || '',
                                      mainProgram: cli.mainProgram || cli.mainprogram || 'Licenciamento Ambiental',
                                      status: cli.status || availableStatuses[0],
                                      observation: cli.observation || ''
                                    });
                                    setShowClientModal(true);
                                  }}
                                  className="p-1.5 rounded-lg text-teal-700 hover:bg-teal-50 cursor-pointer"
                                  title="Editar Cliente"
                                >
                                  <Edit3 className="w-4 h-4 inline" />
                                </button>
                              )}
                              {hasPermission('clientes', 'delete') && (
                                <button
                                  onClick={() => setDeleteClientTarget(cli)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                                  title="Excluir Cliente"
                                >
                                  <Trash2 className="w-4 h-4 inline" />
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'condicionantes' && (
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={condSearch}
                    onChange={(e) => setCondSearch(e.target.value)}
                    placeholder="Buscar por cliente, condicionante, licença ou responsável..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <select
                    value={condStatusFilter}
                    onChange={(e) => setCondStatusFilter(e.target.value)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white text-[#1B3B2B] cursor-pointer"
                  >
                    <option value="Todos">Filtrar por Status</option>
                    <option value="FINALIZADO">FINALIZADO</option>
                    <option value="ATENDIDO">ATENDIDO</option>
                    <option value="EM ANDAMENTO">EM ANDAMENTO</option>
                    <option value="A VENCER">A VENCER</option>
                  </select>

                  {hasPermission('condicionantes', 'create') && (
                    <button
                      onClick={() => {
                        setEditingCond(null);
                        setCondForm({
                          client: '',
                          service: '',
                          dueDate: new Date().toISOString().split('T')[0],
                          license: '',
                          responsible: '',
                          observation: '',
                          status: 'EM ANDAMENTO'
                        });
                        setShowCondModal(true);
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> Nova Condicionante
                    </button>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-white font-bold uppercase text-[11px]">
                        <th
                          onClick={() => handleSort('client')}
                          className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none"
                        >
                          <div className="flex items-center gap-1.5">
                            Nome do Cliente {sortField === 'client' && (sortDirection === 'asc' ? <ArrowUp className="w-3.5 h-3.5 text-emerald-300" /> : <ArrowDown className="w-3.5 h-3.5 text-emerald-300" />)}
                          </div>
                        </th>
                        <th
                          onClick={() => handleSort('service')}
                          className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none"
                        >
                          <div className="flex items-center gap-1.5">
                            Condicionantes / Serviço {sortField === 'service' && (sortDirection === 'asc' ? <ArrowUp className="w-3.5 h-3.5 text-emerald-300" /> : <ArrowDown className="w-3.5 h-3.5 text-emerald-300" />)}
                          </div>
                        </th>
                        <th
                          onClick={() => handleSort('duedate')}
                          className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none"
                        >
                          <div className="flex items-center gap-1.5">
                            Vencimento Final {sortField === 'duedate' && (sortDirection === 'asc' ? <ArrowUp className="w-3.5 h-3.5 text-emerald-300" /> : <ArrowDown className="w-3.5 h-3.5 text-emerald-300" />)}
                          </div>
                        </th>
                        <th onClick={() => handleSort('license')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center gap-1">Licença {sortField === 'license' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th onClick={() => handleSort('responsible')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center gap-1">Responsável - Empresa {sortField === 'responsible' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th onClick={() => handleSort('observation')} className="py-3.5 px-3 cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center gap-1">Observação {sortField === 'observation' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th onClick={() => handleSort('status')} className="py-3.5 px-3 text-center cursor-pointer hover:bg-[#2D5A43] transition select-none">
                          <div className="flex items-center justify-center gap-1">Status {sortField === 'status' && (sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-emerald-300" /> : <ArrowDown className="w-3 h-3 text-emerald-300" />)}</div>
                        </th>
                        <th className="py-3.5 px-3 text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredCondicionantes.length === 0 ? (
                        <tr>
                          <td colSpan="8" className="py-8 text-center text-slate-400">Nenhuma condicionante encontrada.</td>
                        </tr>
                      ) : (
                        filteredCondicionantes.map((cond) => (
                          <tr key={cond.id} className="hover:bg-slate-50">
                            <td className="py-3 px-3 font-bold text-slate-900">{cond.client}</td>
                            <td className="py-3 px-3 text-slate-700 max-w-xs">{cond.service}</td>
                            <td className="py-3 px-3 font-mono">{cond.dueDate || cond.duedate}</td>
                            <td className="py-3 px-3 font-semibold">{cond.license}</td>
                            <td className="py-3 px-3 font-bold text-slate-700">{cond.responsible}</td>
                            <td className="py-3 px-3 text-slate-500 max-w-xs truncate">{cond.observation || '—'}</td>
                            <td className="py-3 px-3 text-center">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                                cond.status === 'FINALIZADO' ? 'bg-emerald-700 text-white' :
                                cond.status === 'ATENDIDO' ? 'bg-emerald-600 text-white' :
                                cond.status === 'EM ANDAMENTO' ? 'bg-amber-500 text-white' : 'bg-amber-600 text-white'
                              }`}>
                                {cond.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-center space-x-1">
                              {hasPermission('condicionantes', 'edit') && (
                                <button
                                  onClick={() => {
                                    setEditingCond(cond);
                                    setCondForm({
                                      client: cond.client,
                                      service: cond.service,
                                      dueDate: cond.dueDate || cond.duedate,
                                      license: cond.license,
                                      responsible: cond.responsible,
                                      observation: cond.observation,
                                      status: cond.status
                                    });
                                    setShowCondModal(true);
                                  }}
                                  className="p-1.5 rounded-lg text-teal-700 hover:bg-teal-50 cursor-pointer"
                                  title="Editar Condicionante"
                                >
                                  <Edit3 className="w-4 h-4 inline" />
                                </button>
                              )}
                              {hasPermission('condicionantes', 'delete') && (
                                <button
                                  onClick={() => setDeleteCondTarget(cond)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                                  title="Excluir Condicionante"
                                >
                                  <Trash2 className="w-4 h-4 inline" />
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'acessos' && (
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-[#1B3B2B]">Árvore de Acessos &amp; Perfis</h3>
                  <p className="text-xs text-slate-500">Gerencie colaboradores, edite senhas e configure permissões granulares por módulo.</p>
                </div>
                {hasPermission('acessos', 'create') && (
                  <button
                    onClick={() => setShowUserRoleModal(true)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4" /> Cadastrar Novo Utilizador
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {accessRoles.map((role) => (
                  <div key={role.id} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#1B3B2B] text-emerald-300 uppercase">
                          {role.level}
                        </span>
                        <div className="flex items-center gap-1">
                          {hasPermission('acessos', 'edit') && (
                            <button
                              onClick={() => setEditingRoleTarget(role)}
                              className="p-1.5 rounded-lg text-teal-800 hover:bg-teal-50 cursor-pointer"
                              title="Editar Perfil e Senha"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                          )}
                          {hasPermission('acessos', 'delete') && (
                            <button
                              onClick={() => handleDeleteRole(role.id)}
                              className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                              title="Excluir Perfil"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      <h4 className="font-extrabold text-[#1B3B2B] text-sm">{role.name}</h4>
                      <div className="text-xs font-bold text-slate-700">👤 {role.holder}</div>
                      <div className="text-xs text-slate-500">✉️ {role.email}</div>
                      <p className="text-[11px] text-slate-600 border-t pt-2 mt-2">{role.description}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {hasPermission('acessos', 'edit') && (
                        <button
                          onClick={() => setEditingRolePermissions(role)}
                          className="w-full py-1.5 rounded-xl text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Sliders className="w-3.5 h-3.5" /> Configurar Permissões (Flags)
                        </button>
                      )}
                      <span className="w-full py-1.5 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center justify-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Sincronizado na Nuvem
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'config' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div>
                  <h2 className="text-base font-extrabold text-[#1B3B2B]">
                    Parâmetros Financeiros e Metas — Grupo Martins ({selectedDreYear})
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ajuste o Saldo Inicial de Caixa, Meta de Faturamento e Pró-Labore Alvo do Sócio-Diretor Maikon Martins.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1.5">
                      SALDO INICIAL DE CAIXA (R$)
                    </label>
                    <input
                      type="number"
                      value={params.saldoInicialCaixa}
                      onChange={(e) => setParams({ ...params, saldoInicialCaixa: Number(e.target.value) })}
                      onBlur={() => syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, params, availableAgencies)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1.5">
                      META MENSAL DE RECEITA (R$)
                    </label>
                    <input
                      type="number"
                      value={params.metaMensalReceita}
                      onChange={(e) => setParams({ ...params, metaMensalReceita: Number(e.target.value) })}
                      onBlur={() => syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, params, availableAgencies)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1.5">
                      PRÓ-LABORE MENSAL ALVO (R$)
                    </label>
                    <input
                      type="number"
                      value={params.proLaboreAlvoMensal}
                      onChange={(e) => setParams({ ...params, proLaboreAlvoMensal: Number(e.target.value) })}
                      onBlur={() => syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, params, availableAgencies)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1.5">
                      SÓCIO-DIRETOR RESPONSÁVEL
                    </label>
                    <input
                      type="text"
                      value={params.socioDiretor}
                      onChange={(e) => setParams({ ...params, socioDiretor: e.target.value })}
                      onBlur={() => syncSettingsToCloud(availableSegments, availableStatuses, planoContasData, params, availableAgencies)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="text-sm font-extrabold text-[#1B3B2B] uppercase">
                      Gerenciamento do Plano de Contas (DRE)
                    </h3>
                    <p className="text-xs text-slate-500">Adicione, edite ou remova contas do plano contábil do ERP.</p>
                  </div>
                  <button
                    onClick={() => {
                      setReopenContractAfterPlano(false);
                      setPlanoForm({ tipo: 'receitas', codigo: '', nome: '', originalCodigo: null });
                      setShowPlanoModal(true);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1B3B2B] text-white hover:bg-[#2D5A43] cursor-pointer"
                  >
                    <Plus className="w-4 h-4" /> Novo Plano de Contas
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Contas de Receita (1.X)</h4>
                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {planoContasData.receitas.map((rev) => (
                        <div key={rev.codigo} className="flex items-center justify-between p-3 rounded-xl border border-emerald-200 bg-emerald-50/40 text-xs">
                          <span className="font-semibold text-slate-800 truncate mr-2">{rev.nome}</span>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => {
                                setReopenContractAfterPlano(false);
                                setPlanoForm({ tipo: 'receitas', codigo: rev.codigo, nome: rev.nome, originalCodigo: rev.codigo });
                                setShowPlanoModal(true);
                              }}
                              className="p-1 rounded text-teal-800 hover:bg-emerald-100 cursor-pointer"
                              title="Editar"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Deseja excluir a conta ${rev.codigo}?`)) {
                                  const updated = {
                                    ...planoContasData,
                                    receitas: planoContasData.receitas.filter(r => r.codigo !== rev.codigo)
                                  };
                                  setPlanoContasData(updated);
                                  syncSettingsToCloud(availableSegments, availableStatuses, updated, params, availableAgencies);
                                  showToast('Conta removida do plano de contas!');
                                }
                              }}
                              className="p-1 rounded text-rose-600 hover:bg-rose-100 cursor-pointer"
                              title="Excluir"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-extrabold text-rose-950 uppercase tracking-wider">Contas de Despesas e Custos (2.X)</h4>
                    <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                      {planoContasData.despesas.map((desp) => (
                        <div key={desp.codigo} className="flex items-center justify-between p-3 rounded-xl border border-rose-200 bg-rose-50/30 text-xs">
                          <span className="font-semibold text-slate-800 truncate mr-2">{desp.nome}</span>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => {
                                setReopenContractAfterPlano(false);
                                setPlanoForm({ tipo: 'despesas', codigo: desp.codigo, nome: desp.nome, originalCodigo: desp.codigo });
                                setShowPlanoModal(true);
                              }}
                              className="p-1 rounded text-rose-800 hover:bg-rose-100 cursor-pointer"
                              title="Editar"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Deseja excluir a conta ${desp.codigo}?`)) {
                                  const updated = {
                                    ...planoContasData,
                                    despesas: planoContasData.despesas.filter(d => d.codigo !== desp.codigo)
                                  };
                                  setPlanoContasData(updated);
                                  syncSettingsToCloud(availableSegments, availableStatuses, updated, params, availableAgencies);
                                  showToast('Conta removida do plano de contas!');
                                }
                              }}
                              className="p-1 rounded text-rose-600 hover:bg-rose-100 cursor-pointer"
                              title="Excluir"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  </div>

  {/* ========================================================================== */}
  {/* TODOS OS 13 MODAIS DO SISTEMA UNIFICADOS E ATIVOS                          */}
  {/* ========================================================================== */}

  {/* 1. MODAL NOVO / EDITAR PLANO DE CONTAS */}
  {showPlanoModal && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="text-base font-extrabold text-[#1B3B2B]">{planoForm.originalCodigo ? 'Editar Conta' : 'Novo Plano de Contas'}</h3>
          <button
            onClick={() => {
              setShowPlanoModal(false);
              if (reopenContractAfterPlano) {
                setReopenContractAfterPlano(false);
                setShowContractModal(true);
              }
            }}
            className="text-slate-500 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (!planoForm.codigo || !planoForm.nome) return;
          const targetListKey = planoForm.tipo;
          const list = planoContasData[targetListKey];
          const newItem = { codigo: planoForm.codigo.trim(), nome: planoForm.nome.trim() };

          let updatedList;
          if (planoForm.originalCodigo) {
            updatedList = list.map(item => item.codigo === planoForm.originalCodigo ? newItem : item);
          } else {
            updatedList = [...list, newItem];
          }

          const updatedPlano = { ...planoContasData, [targetListKey]: updatedList };
          setPlanoContasData(updatedPlano);
          syncSettingsToCloud(availableSegments, availableStatuses, updatedPlano, params, availableAgencies);

          if (targetListKey === 'receitas' && reopenContractAfterPlano) {
            setCtForm(prev => ({ ...prev, service: newItem.nome }));
            setReopenContractAfterPlano(false);
            setShowPlanoModal(false);
            setShowContractModal(true);
          } else {
            setShowPlanoModal(false);
          }
          showToast('Plano de Contas salvo e sincronizado!');
        }} className="space-y-3 text-xs">
          <div>
            <label className="block font-bold mb-1">Tipo de Conta</label>
            <select
              value={planoForm.tipo}
              onChange={(e) => setPlanoForm({ ...planoForm, tipo: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border font-bold cursor-pointer"
            >
              <option value="receitas">Receita (1.X)</option>
              <option value="despesas">Despesa / Custo (2.X)</option>
            </select>
          </div>
          <div>
            <label className="block font-bold mb-1">Código da Conta</label>
            <input
              type="text"
              value={planoForm.codigo}
              onChange={(e) => setPlanoForm({ ...planoForm, codigo: e.target.value })}
              placeholder="Ex: 1.1.06"
              className="w-full px-3 py-2 rounded-xl border font-mono font-bold"
              required
            />
          </div>
          <div>
            <label className="block font-bold mb-1">Nome / Descrição da Conta</label>
            <input
              type="text"
              value={planoForm.nome}
              onChange={(e) => setPlanoForm({ ...planoForm, nome: e.target.value })}
              placeholder="Ex: 1.1.06 — Consultoria Ambiental Especial"
              className="w-full px-3 py-2 rounded-xl border font-bold"
              required
            />
          </div>
          <div className="flex justify-end gap-2 pt-3 border-t">
            <button
              type="button"
              onClick={() => {
                setShowPlanoModal(false);
                if (reopenContractAfterPlano) {
                  setReopenContractAfterPlano(false);
                  setShowContractModal(true);
                }
              }}
              className="px-4 py-2 rounded-xl border font-bold cursor-pointer"
            >
              Cancelar
            </button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer">Salvar Conta</button>
          </div>
        </form>
      </div>
    </div>
  )}

  {/* 2. MODAL NOVO / EDITAR CONTRATO AMBIENTAL / SST */}
  {showContractModal && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[92vh] overflow-y-auto">
        <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
          <h3 className="text-base font-extrabold">{editingContract ? 'Editar Contrato' : 'Novo Contrato Ambiental / SST'}</h3>
          <button onClick={() => { setShowContractModal(false); setEditingContract(null); setShowAgencyManager(false); }} className="text-white hover:text-emerald-300 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSaveContract} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">CLIENTE / EMPREENDIMENTO</label>
            <input
              type="text"
              list="client-list-ct"
              value={ctForm.client}
              onChange={(e) => setCtForm({ ...ctForm, client: e.target.value })}
              placeholder="Nome do cliente..."
              className="w-full px-3.5 py-2.5 rounded-xl border font-bold text-slate-800"
              required
            />
            <datalist id="client-list-ct">
              {clients.map(cli => <option key={cli.id} value={cli.name} />)}
            </datalist>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block font-bold text-slate-700 uppercase">PLANO DE CONTAS (RECEITAS 1.X)</label>
              <button
                type="button"
                onClick={() => {
                  setShowContractModal(false);
                  setReopenContractAfterPlano(true);
                  setPlanoForm({ tipo: 'receitas', codigo: '', nome: '', originalCodigo: null });
                  setShowPlanoModal(true);
                }}
                className="text-[11px] font-extrabold text-[#1B3B2B] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> + Novo Plano
              </button>
            </div>
            <select
              value={ctForm.service}
              onChange={(e) => setCtForm({ ...ctForm, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
              required
            >
              <option value="" disabled>Selecione uma conta de receita...</option>
              {planoContasData.receitas.map(r => (
                <option key={r.codigo} value={r.nome}>{r.nome}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block font-bold text-slate-700 uppercase">ÓRGÃO / SETOR</label>
              <button
                type="button"
                onClick={() => {
                  setShowAgencyManager(!showAgencyManager);
                  setAgencyInput('');
                  setEditingAgencyOriginal(null);
                }}
                className="text-[11px] font-extrabold text-[#1B3B2B] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> {showAgencyManager ? 'Fechar Opções' : 'Cadastrar / Editar'}
              </button>
            </div>
            <select
              value={ctForm.agency}
              onChange={(e) => setCtForm({ ...ctForm, agency: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
            >
              {availableAgencies.map(ag => <option key={ag} value={ag}>{ag}</option>)}
            </select>

            {showAgencyManager && (
              <div className="p-3 rounded-xl border border-[#B7DFC5] bg-[#F4F9F5] space-y-2.5">
                <div className="text-[10px] font-extrabold uppercase text-[#1B3B2B]">
                  {editingAgencyOriginal ? `Editando: ${editingAgencyOriginal}` : 'Novo Órgão / Setor'}
                </div>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={agencyInput}
                    onChange={(e) => setAgencyInput(e.target.value)}
                    placeholder="Ex: INCRA, ANM, SEMA..."
                    className="flex-1 px-2.5 py-1.5 rounded-lg border bg-white text-xs font-semibold"
                  />
                  <button
                    type="button"
                    onClick={handleSaveAgency}
                    className="px-3 py-1.5 rounded-lg bg-[#1B3B2B] text-white font-bold text-xs hover:bg-[#2D5A43] cursor-pointer"
                  >
                    {editingAgencyOriginal ? 'Salvar' : 'Adicionar'}
                  </button>
                </div>
                <div className="max-h-28 overflow-y-auto space-y-1 pt-1 border-t border-emerald-200/60">
                  {availableAgencies.map((ag) => (
                    <div key={ag} className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200">
                      <span className="truncate font-medium pr-2">{ag}</span>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingAgencyOriginal(ag);
                            setAgencyInput(ag);
                          }}
                          className="p-0.5 text-teal-700 hover:bg-teal-50 rounded cursor-pointer"
                          title="Editar Órgão"
                        >
                          <Edit3 className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteAgency(ag)}
                          className="p-0.5 text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                          title="Excluir Órgão"
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">VALOR TOTAL (R$)</label>
              <input
                type="number"
                step="0.01"
                value={ctForm.contractValue}
                onChange={(e) => setCtForm({ ...ctForm, contractValue: e.target.value })}
                placeholder="0.00"
                className="w-full px-3.5 py-2.5 rounded-xl border font-black text-[#1B3B2B]"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">CUSTOS DIRETOS (R$)</label>
              <input
                type="number"
                step="0.01"
                value={ctForm.directCosts}
                onChange={(e) => setCtForm({ ...ctForm, directCosts: e.target.value })}
                placeholder="Taxas, laudos..."
                className="w-full px-3.5 py-2.5 rounded-xl border font-bold"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">PARCELAS</label>
              <select
                value={ctForm.installmentsCount}
                onChange={(e) => setCtForm({ ...ctForm, installmentsCount: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white cursor-pointer"
              >
                {[1,2,3,4,5,6,7,8,9,10,12].map(n => <option key={n} value={n}>{n}x</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="block font-bold text-[#1B3B2B] uppercase">Vencimentos e Valores das Parcelas</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
              {Array.from({ length: parseInt(ctForm.installmentsCount) || 1 }).map((_, idx) => (
                <div key={idx} className="p-2 rounded-xl border bg-slate-50 flex items-center gap-2">
                  <span className="font-bold text-slate-600 w-8">{idx + 1}ª:</span>
                  <input
                    type="date"
                    value={ctForm.installmentDates?.[idx] || ''}
                    onChange={(e) => {
                      const newDates = [...(ctForm.installmentDates || [])];
                      newDates[idx] = e.target.value;
                      setCtForm({ ...ctForm, installmentDates: newDates });
                    }}
                    className="px-2 py-1 rounded border text-[11px] font-mono flex-1"
                  />
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Valor (auto)"
                    value={ctForm.installmentAmounts?.[idx] || ''}
                    onChange={(e) => {
                      const newAmts = [...(ctForm.installmentAmounts || [])];
                      newAmts[idx] = e.target.value;
                      setCtForm({ ...ctForm, installmentAmounts: newAmts });
                    }}
                    className="px-2 py-1 rounded border text-[11px] w-24 font-bold"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">OBSERVAÇÃO</label>
            <textarea
              value={ctForm.observation || ''}
              onChange={(e) => setCtForm({ ...ctForm, observation: e.target.value })}
              placeholder="Digite observações sobre o contrato, nº de protocolo, prazos ou detalhes técnicos..."
              className="w-full px-3.5 py-2.5 rounded-xl border h-16 resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={() => { setShowContractModal(false); setEditingContract(null); setShowAgencyManager(false); }}
              className="px-5 py-2.5 rounded-xl border font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer"
            >
              Salvar Contrato
            </button>
          </div>
        </form>
      </div>
    </div>
  )}

  {/* 3. MODAL VER PARCELAS DO CONTRATO */}
  {viewingContractInstallments && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
        <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold">Gerenciamento de Parcelas</h3>
            <p className="text-xs text-emerald-300">Contrato: <strong>{viewingContractInstallments.id} — {viewingContractInstallments.client}</strong></p>
          </div>
          <button onClick={() => setViewingContractInstallments(null)} className="text-white hover:text-emerald-300 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600 font-bold uppercase text-[11px] border-b">
                  <th className="py-2.5 px-3">Parcela</th>
                  <th className="py-2.5 px-3">Vencimento</th>
                  <th className="py-2.5 px-3 text-right">Valor Base</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                  <th className="py-2.5 px-3 text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {(viewingContractInstallments.installmentsData || viewingContractInstallments.installmentsdata || []).map((inst) => (
                  <tr key={inst.number} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold">Parcela {inst.number}</td>
                    <td className="py-3 px-3 font-mono">{inst.dueDate || inst.duedate}</td>
                    <td className="py-3 px-3 text-right font-black text-[#1B3B2B]">{formatCurrency(inst.amount)}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${inst.status === 'Pago' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {inst.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      {inst.status === 'Pago' ? (
                        <button
                          onClick={() => setCancelInstallmentTarget({ contractId: viewingContractInstallments.id, installmentNumber: inst.number })}
                          className="px-3 py-1 rounded bg-rose-100 text-rose-700 font-bold text-[10px] hover:bg-rose-200 cursor-pointer"
                        >
                          Estornar Baixa
                        </button>
                      ) : (
                        <button
                          onClick={() => setReceivingInstallmentData({ contractId: viewingContractInstallments.id, installmentNumber: inst.number })}
                          className="px-3 py-1 rounded bg-emerald-800 text-white font-bold text-[10px] hover:bg-emerald-900 cursor-pointer"
                        >
                          Baixar / Receber
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <button
              onClick={() => setViewingContractInstallments(null)}
              className="px-6 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* 4. MODAL BAIXAR / RECEBER PARCELA */}
  {receivingInstallmentData && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl border">
        <h3 className="text-base font-extrabold text-[#1B3B2B]">Registrar Recebimento da Parcela</h3>
        <p className="text-xs text-slate-600">Informe a data de recebimento e juros eventuais. O sistema lançará automaticamente no Livro Caixa e na DRE do plano de contas do contrato.</p>
        <div className="space-y-3 text-xs">
          <div>
            <label className="block font-bold uppercase mb-1">Data do Recebimento</label>
            <input
              type="date"
              value={receiveForm.paymentDate}
              onChange={(e) => setReceiveForm({ ...receiveForm, paymentDate: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border font-bold"
            />
          </div>
          <div>
            <label className="block font-bold uppercase mb-1">Juros / Multa por Atraso (R$)</label>
            <input
              type="number"
              step="0.01"
              value={receiveForm.interestAmount}
              onChange={(e) => setReceiveForm({ ...receiveForm, interestAmount: e.target.value })}
              placeholder="0.00"
              className="w-full px-3 py-2 rounded-xl border font-bold"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <button onClick={() => setReceivingInstallmentData(null)} className="px-4 py-2 rounded-xl border font-bold text-xs cursor-pointer">Cancelar</button>
          <button onClick={handleConfirmReceiveInstallment} className="px-5 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs cursor-pointer">Confirmar Baixa</button>
        </div>
      </div>
    </div>
  )}

  {/* 5. MODAL CONFIRMAR ESTORNO DE PARCELA */}
  {cancelInstallmentTarget && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl border border-rose-200">
        <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
          <RotateCcw className="w-6 h-6" />
        </div>
        <h3 className="text-base font-extrabold text-rose-700">Estornar Recebimento?</h3>
        <p className="text-xs text-slate-600">
          Deseja cancelar a baixa da <strong>Parcela {cancelInstallmentTarget.installmentNumber}</strong> e remover o lançamento correspondente do Livro Caixa?
        </p>
        <div className="flex justify-center gap-2 pt-2">
          <button onClick={() => setCancelInstallmentTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer">Cancelar</button>
          <button onClick={confirmCancelReceiveInstallment} className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer">Sim, Estornar</button>
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
          Deseja realmente remover o contrato <strong>{deleteContractTarget.id} ({deleteContractTarget.client})</strong>?
        </p>
        <div className="flex justify-center gap-2 pt-2">
          <button onClick={() => setDeleteContractTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer">Cancelar</button>
          <button onClick={confirmDeleteContract} className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer">Sim, Excluir</button>
        </div>
      </div>
    </div>
  )}

  {/* 7. MODAL CADASTRAR / EDITAR LANÇAMENTO */}
  {showTxModal && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
        <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
          <h3 className="text-base font-extrabold">{editingTx ? 'Editar Lançamento' : 'Novo Lançamento no Livro Caixa'}</h3>
          <button onClick={() => { setShowTxModal(false); setEditingTx(null); }} className="text-white hover:text-emerald-300 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSaveTransaction} className="p-6 space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">TIPO</label>
              <select
                value={txForm.type}
                onChange={(e) => setTxForm({ ...txForm, type: e.target.value })}
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
                const found = allC.find(c => c.codigo === code);
                setTxForm({ ...txForm, planoContas: code, planocontas: code, category: found ? found.nome : txForm.category });
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border font-bold bg-white text-[#1B3B2B] cursor-pointer"
            >
              <optgroup label="Receitas (1.X)">
                {planoContasData.receitas.map(r => <option key={r.codigo} value={r.codigo}>{r.nome}</option>)}
              </optgroup>
              <optgroup label="Despesas (2.X)">
                {planoContasData.despesas.map(d => <option key={d.codigo} value={d.codigo}>{d.nome}</option>)}
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
              {clients.map(cli => <option key={cli.id} value={cli.name} />)}
            </datalist>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              onClick={() => { setShowTxModal(false); setEditingTx(null); }}
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
          Deseja realmente remover o lançamento <strong>{deleteTxTarget.id} ({deleteTxTarget.entity})</strong>?
        </p>
        <div className="flex justify-center gap-2 pt-2">
          <button onClick={() => setDeleteTxTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer">Cancelar</button>
          <button onClick={confirmDeleteTransaction} className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer">Sim, Excluir</button>
        </div>
      </div>
    </div>
  )}

  {/* 9. MODAL CADASTRAR / EDITAR CLIENTE */}
  {showClientModal && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[92vh] overflow-y-auto">
        <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
          <h3 className="text-base font-extrabold">{editingClient ? 'Editar Cliente' : 'Novo Cadastro de Cliente'}</h3>
          <button onClick={() => { setShowClientModal(false); setEditingClient(null); setShowSegmentManager(false); setShowStatusManager(false); }} className="text-white hover:text-emerald-300 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSaveClient} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">CNPJ (BUSCA AUTOMÁTICA AO SAIR DO CAMPO)</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={cliForm.document}
                onChange={(e) => setCliForm({ ...cliForm, document: e.target.value })}
                onBlur={(e) => { if (e.target.value) handleCnpjBlur(e.target.value); }}
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
                {availableSegments.map(seg => <option key={seg} value={seg}>{seg}</option>)}
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
                      <div key={seg} className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200">
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
                {availableStatuses.map(st => <option key={st} value={st}>{st}</option>)}
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
                      <div key={st} className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200">
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
                onChange={(e) => setCliForm({ ...cliForm, contactName: e.target.value, contactname: e.target.value })}
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

          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">OBSERVAÇÃO</label>
            <textarea
              value={cliForm.observation || ''}
              onChange={(e) => setCliForm({ ...cliForm, observation: e.target.value })}
              placeholder="Digite observações sobre o cliente..."
              className="w-full px-3.5 py-2.5 rounded-xl border h-16 resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={() => { setShowClientModal(false); setEditingClient(null); setShowSegmentManager(false); setShowStatusManager(false); }}
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
          <button onClick={() => setDeleteClientTarget(null)} className="px-4 py-2 rounded-xl border font-bold text-xs text-slate-600 cursor-pointer">Cancelar</button>
          <button onClick={confirmDeleteClient} className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md cursor-pointer">Sim, Excluir</button>
        </div>
      </div>
    </div>
  )}

  {/* 11. MODAL CADASTRAR / EDITAR CONDICIONANTE */}
  {showCondModal && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1B3B2B] max-h-[90vh] overflow-y-auto">
        <div className="bg-[#1B3B2B] text-white px-6 py-4 flex items-center justify-between">
          <h3 className="text-base font-extrabold">{editingCond ? 'Editar Condicionante Ambiental' : 'Novo Cadastro de Condicionante Ambiental'}</h3>
          <button onClick={() => { setShowCondModal(false); setEditingCond(null); }} className="text-white hover:text-emerald-300 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSaveCondicionante} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">NOME DO CLIENTE / EMPREENDIMENTO</label>
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
              {clients.map(cli => (
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
            <label className="block font-bold text-slate-700 uppercase mb-1">TIPO DE SERVIÇO / DESCRIÇÃO DA CONDICIONANTE</label>
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
              onClick={() => { setShowCondModal(false); setEditingCond(null); }}
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
      <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="text-base font-extrabold text-[#1B3B2B]">Cadastrar Novo Utilizador</h3>
          <button onClick={() => setShowUserRoleModal(false)} className="text-slate-500 hover:text-slate-700 cursor-pointer">
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
            <button type="button" onClick={() => setShowUserRoleModal(false)} className="px-4 py-2 rounded-xl border font-bold cursor-pointer">Cancelar</button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer">Salvar Utilizador</button>
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
            <p className="text-xs text-slate-500">Perfil: <strong>{editingRolePermissions.name} ({editingRolePermissions.holder})</strong></p>
          </div>
          <button onClick={() => setEditingRolePermissions(null)} className="text-slate-500 hover:text-slate-700 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs">
          {Array.from(new Set([...Object.keys(DEFAULT_PERMISSIONS), ...Object.keys(editingRolePermissions.permissions || {})])).map((modKey) => {
            const modPerms = getModulePerms(editingRolePermissions, modKey);
            return (
              <div key={modKey} className="p-3 rounded-xl border bg-slate-50 flex flex-wrap items-center justify-between gap-3">
                <span className="font-extrabold text-[#1B3B2B] uppercase w-32">{modKey.replace('_', ' ')}</span>
                <div className="flex flex-wrap items-center gap-4">
                  {['view', 'create', 'edit', 'delete', 'approve', ...(modKey === 'contratos' ? ['viewValues'] : [])].map((actKey) => (
                    <label key={actKey} className="flex items-center gap-1.5 cursor-pointer font-medium select-none">
                      <input
                        type="checkbox"
                        checked={actKey === 'viewValues' ? modPerms?.viewValues !== false : Boolean(modPerms?.[actKey])}
                        onChange={() => handlePermissionToggle(editingRolePermissions.id, modKey, actKey)}
                        className="w-4 h-4 rounded text-[#1B3B2B] focus:ring-[#1B3B2B] cursor-pointer"
                      />
                      <span className="capitalize">{actKey === 'viewValues' ? 'Ver valores' : actKey}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end pt-3 border-t">
          <button onClick={() => setEditingRolePermissions(null)} className="px-6 py-2.5 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer">
            Concluir &amp; Salvar
          </button>
        </div>
      </div>
    </div>
  )}

  {/* 13C. MODAL EDITAR PERFIL / SENHA / EXCLUIR */}
  {editingRoleTarget && (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="text-base font-extrabold text-[#1B3B2B]">Editar Perfil e Senha</h3>
          <button onClick={() => setEditingRoleTarget(null)} className="text-slate-500 hover:text-slate-700 cursor-pointer">
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
              onClick={() => handleDeleteRole(editingRoleTarget.id)}
              className="px-4 py-2 rounded-xl bg-rose-100 text-rose-700 font-bold hover:bg-rose-200 cursor-pointer"
            >
              Excluir Perfil
            </button>
            <div className="flex gap-2">
              <button type="button" onClick={() => setEditingRoleTarget(null)} className="px-4 py-2 rounded-xl border font-bold cursor-pointer">Cancelar</button>
              <button type="submit" className="px-5 py-2 rounded-xl bg-[#1B3B2B] text-white font-bold cursor-pointer">Salvar Alterações</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )}

  {/* MODAL OPÇÃO 2: DEFINIR SENHA VIA LINK DO E-MAIL (PASSWORD_RECOVERY) */}
  {showFirstAccessPasswordModal && (
    <div className="fixed inset-0 z-50 bg-[#1B3B2B]/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border text-center space-y-5">
        <GrupoMartinsLogo size="md" className="mx-auto" />
        <div>
          <h2 className="text-xl font-black text-[#1B3B2B]">Definir Senha de Acesso</h2>
          <p className="text-xs text-slate-500 mt-1">
            {recoveryEmail
              ? `Defina sua senha pessoal para o e-mail ${recoveryEmail}.`
              : 'Escolha e confirme sua senha pessoal para acessar o ERP.'}
          </p>
        </div>
        {recoveryStatusMsg && (
          <div className="p-3 rounded-xl bg-rose-100 text-rose-800 text-xs font-bold">
            {recoveryStatusMsg}
          </div>
        )}
        <form onSubmit={handleConfirmFirstAccessPassword} className="space-y-4 text-left text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">Nova Senha</label>
            <input
              type="password"
              value={newRecoveryPassword}
              onChange={(e) => setNewRecoveryPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              className="w-full px-3.5 py-2.5 rounded-xl border"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">Confirmar Nova Senha</label>
            <input
              type="password"
              value={confirmRecoveryPassword}
              onChange={(e) => setConfirmRecoveryPassword(e.target.value)}
              placeholder="Repita a senha"
              className="w-full px-3.5 py-2.5 rounded-xl border"
              required
            />
          </div>
          <button
            type="submit"
            disabled={savingRecoveryPassword}
            className="w-full py-3 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer disabled:opacity-60"
          >
            {savingRecoveryPassword ? 'Salvando senha...' : 'Salvar Senha e Entrar'}
          </button>
        </form>
      </div>
    </div>
  )}

  {/* TELA DE LOGIN */}
  {!authLoggedIn && !showFirstAccessPasswordModal && (
    <div className="fixed inset-0 z-50 bg-[#1B3B2B]/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border text-center space-y-6">
        <GrupoMartinsLogo size="md" className="mx-auto" />
        <div>
          <h2 className="text-xl font-black text-[#1B3B2B]">Autenticação de Acesso — Nuvem</h2>
          <p className="text-xs text-slate-500 mt-1">Insira seu e-mail corporativo e senha cadastrados.</p>
        </div>
        {authErrorMsg && (
          <div className="p-3 rounded-xl bg-rose-100 text-rose-800 text-xs font-bold">
            {authErrorMsg}
          </div>
        )}
        <form onSubmit={async (e) => {
          e.preventDefault();
          setAuthErrorMsg('');
          const normalizedEmail = authEmailInput.trim().toLowerCase();
          const cleanPassword = authPasswordInput.trim();

          // 1) Tenta autenticar via Supabase Auth (usuários com senha definida pelo e-mail)
          if (supabase?.auth?.signInWithPassword) {
            const { data: signInData, error: signInErr } = await supabase.auth.signInWithPassword({
              email: normalizedEmail,
              password: cleanPassword
            });
            if (!signInErr && signInData?.user) {
              const matchedRole = accessRoles.find(
                r => r.email && r.email.toLowerCase() === normalizedEmail
              );
              const activeUser = matchedRole || {
                id: signInData.user.id,
                level: 'Nível Especial — Colaborador',
                name: 'Colaborador',
                holder: signInData.user.email || normalizedEmail,
                email: normalizedEmail,
                description: 'Acesso autenticado via Supabase Auth.',
                permissions: JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS))
              };
              setActiveRoleId(activeUser.id);
              const isMasterUser =
                activeUser.id === 'ROLE-01-PEDRO' ||
                (activeUser.email || '').toLowerCase() === 'pedrosmelos@gmail.com';
              const firstOpenTab = navItems.find(
                item =>
                  (isMasterUser && item.permKey === 'acessos') ||
                  Boolean(getModulePerms(activeUser, item.permKey)?.view)
              );
              if (firstOpenTab) setActiveTab(firstOpenTab.id);

              setAuthLoggedIn(true);
              showToast(`Bem-vindo(a), ${activeUser.holder}! Acesso autorizado.`);
              return;
            }
          }

          // 2) Fallback RPC / local
          let rpcUser = null;
          let rpcFailed = false;

          if (supabase) {
            const { data, error } = await supabase.rpc('check_user_login', {
              p_email: normalizedEmail,
              p_password: cleanPassword
            });
            if (error) {
              rpcFailed = true;
            } else if (data) {
              rpcUser = Array.isArray(data) ? data[0] : data;
            }
          }

          if (!rpcFailed) {
            if (!rpcUser || !rpcUser.id) {
              setAuthErrorMsg('E-mail ou senha incorretos.');
              return;
            }
            setAccessRoles((prev) => {
              const exists = prev.some((r) => r.id === rpcUser.id);
              return exists
                ? prev.map((r) => (r.id === rpcUser.id ? { ...r, ...rpcUser } : r))
                : [...prev, rpcUser];
            });
            setActiveRoleId(rpcUser.id);
            const isMasterUser = rpcUser.id === 'ROLE-01-PEDRO' || (rpcUser.email || '').toLowerCase() === 'pedrosmelos@gmail.com';
            const firstOpenTab = navItems.find(item => (isMasterUser && item.permKey === 'acessos') || Boolean(getModulePerms(rpcUser, item.permKey)?.view));
            if (firstOpenTab) setActiveTab(firstOpenTab.id);

            setAuthLoggedIn(true);
            showToast(`Bem-vindo(a), ${rpcUser.holder}! Acesso autorizado.`);
            return;
          }

          const found = accessRoles.find(r => r.email && r.email.toLowerCase() === normalizedEmail);
          if (!found) {
            setAuthErrorMsg('E-mail não cadastrado.');
            return;
          }
          if (found.password && found.password !== cleanPassword) {
            setAuthErrorMsg('Senha incorreta.');
            return;
          }
          setActiveRoleId(found.id);
          const isMasterUser = found.id === 'ROLE-01-PEDRO' || found.email.toLowerCase() === 'pedrosmelos@gmail.com';
          const firstOpenTab = navItems.find(item => (isMasterUser && item.permKey === 'acessos') || Boolean(getModulePerms(found, item.permKey)?.view));
          if (firstOpenTab) setActiveTab(firstOpenTab.id);

          setAuthLoggedIn(true);
          showToast(`Bem-vindo(a), ${found.holder}! Acesso autorizado.`);
        }} className="space-y-4 text-left text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">E-mail Corporativo</label>
            <input type="email" value={authEmailInput} onChange={(e) => setAuthEmailInput(e.target.value)} placeholder="ex: maikon@grupomartins.eng.br" className="w-full px-3.5 py-2.5 rounded-xl border" required />
          </div>
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">Senha</label>
            <input type="password" value={authPasswordInput} onChange={(e) => setAuthPasswordInput(e.target.value)} placeholder="••••••••" className="w-full px-3.5 py-2.5 rounded-xl border" required />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-[#1B3B2B] text-white font-extrabold hover:bg-[#2D5A43] shadow-md cursor-pointer">
            Entrar no ERP (Sincronizado)
          </button>
        </form>
      </div>
    </div>
  )}
</div>

```

);
}

```

```
