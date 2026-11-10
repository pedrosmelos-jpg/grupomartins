import React, { useState, useEffect } from 'react';
import { Package, Users, ShoppingCart, DollarSign, LayoutDashboard, FileText, Shield, UserCheck, Trash2, Plus, Download } from 'lucide-react';

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState('dashboard');
  
  // Estados principais com localStorage
  const [produtos, setProdutos] = useState(() => JSON.parse(localStorage.getItem('gm_produtos')) || []);
  const [clientes, setClientes] = useState(() => JSON.parse(localStorage.getItem('gm_clientes')) || []);
  const [vendas, setVendas] = useState(() => JSON.parse(localStorage.getItem('gm_vendas')) || []);
  const [contratos, setContratos] = useState(() => JSON.parse(localStorage.getItem('gm_contratos')) || []);
  const [colaboradores, setColaboradores] = useState(() => JSON.parse(localStorage.getItem('gm_colaboradores')) || []);
  const [proLabore, setProLabore] = useState(() => JSON.parse(localStorage.getItem('gm_prolabore')) || []);

  // Estados dos formulários
  const [novoProd, setNovoProd] = useState({ nome: '', preco: '', estoque: '' });
  const [novoCli, setNovoCli] = useState({ nome: '', telefone: '', email: '' });
  const [novaVenda, setNovaVenda] = useState({ cliente: '', produto: '', quantidade: 1 });
  const [novoContrato, setNovoContrato] = useState({ cliente: '', servico: '', valorTotal: '', parcelas: 1, vencimento: '' });
  const [novoColab, setNovoColab] = useState({ nome: '', cargo: '', nivel: 'Operacional' });
  const [novoPL, setNovoPL] = useState({ socio: 'Pedro Melo', valor: '', mes: 'Outubro/2026' });

  useEffect(() => {
    localStorage.setItem('gm_produtos', JSON.stringify(produtos));
    localStorage.setItem('gm_clientes', JSON.stringify(clientes));
    localStorage.setItem('gm_vendas', JSON.stringify(vendas));
    localStorage.setItem('gm_contratos', JSON.stringify(contratos));
    localStorage.setItem('gm_colaboradores', JSON.stringify(colaboradores));
    localStorage.setItem('gm_prolabore', JSON.stringify(proLabore));
  }, [produtos, clientes, vendas, contratos, colaboradores, proLabore]);

  // Funções de cadastro
  const adicionarProduto = (e) => {
    e.preventDefault();
    if (!novoProd.nome || !novoProd.preco) return;
    setProdutos([...produtos, { id: Date.now(), ...novoProd }]);
    setNovoProd({ nome: '', preco: '', estoque: '' });
  };

  const adicionarCliente = (e) => {
    e.preventDefault();
    if (!novoCli.nome) return;
    setClientes([...clientes, { id: Date.now(), ...novoCli }]);
    setNovoCli({ nome: '', telefone: '', email: '' });
  };

  const registrarVenda = (e) => {
    e.preventDefault();
    if (!novaVenda.cliente || !novaVenda.produto) return;
    setVendas([...vendas, { id: Date.now(), ...novaVenda, data: new Date().toLocaleDateString('pt-BR') }]);
    setNovaVenda({ cliente: '', produto: '', quantidade: 1 });
  };

  const cadastrarContrato = (e) => {
    e.preventDefault();
    if (!novoContrato.cliente || !novoContrato.valorTotal) return;
    setContratos([...contratos, { id: Date.now(), ...novoContrato }]);
    setNovoContrato({ cliente: '', servico: '', valorTotal: '', parcelas: 1, vencimento: '' });
  };

  const cadastrarColaborador = (e) => {
    e.preventDefault();
    if (!novoColab.nome) return;
    setColaboradores([...colaboradores, { id: Date.now(), ...novoColab }]);
    setNovoColab({ nome: '', cargo: '', nivel: 'Operacional' });
  };

  const emitirProLabore = (e) => {
    e.preventDefault();
    if (!novoPL.valor) return;
    setProLabore([...proLabore, { id: Date.now(), ...novoPL, data: new Date().toLocaleDateString('pt-BR') }]);
    setNovoPL({ socio: 'Pedro Melo', valor: '', mes: 'Outubro/2026' });
  };

  // Exportar DRE CSV
  const exportarDRECSV = () => {
    const faturamentoVendas = vendas.reduce((acc, v) => {
      const p = produtos.find(item => item.nome === v.produto);
      return acc + (p ? Number(p.preco) * Number(v.quantidade) : 0);
    }, 0);

    const faturamentoContratos = contratos.reduce((acc, c) => acc + Number(c.valorTotal || 0), 0);
    const totalReceitas = faturamentoVendas + faturamentoContratos;

    const csvContent = "data:text/csv;charset=utf-8," 
      + "Conta,Valor (R$)\n"
      + `Receita de Vendas,${faturamentoVendas.toFixed(2)}\n`
      + `Receita de Contratos,${faturamentoContratos.toFixed(2)}\n`
      + `Faturamento Total,${totalReceitas.toFixed(2)}\n`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "DRE_Gerencial_GrupoMartins.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalFaturamento = vendas.reduce((acc, v) => {
    const p = produtos.find(item => item.nome === v.produto);
    return acc + (p ? Number(p.preco) * Number(v.quantidade) : 0);
  }, 0) + contratos.reduce((acc, c) => acc + Number(c.valorTotal || 0), 0);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h1 className="text-2xl font-bold mb-8 text-emerald-400 tracking-wide">Grupo Martins</h1>
          <nav className="space-y-1.5">
            <button onClick={() => setAbaAtiva('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'dashboard' ? 'bg-emerald-600 font-semibold shadow' : 'hover:bg-slate-800 text-slate-300'}`}>
              <LayoutDashboard size={20} /> Dashboard
            </button>
            <button onClick={() => setAbaAtiva('contratos')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'contratos' ? 'bg-emerald-600 font-semibold shadow' : 'hover:bg-slate-800 text-slate-300'}`}>
              <FileText size={20} /> Contratos
            </button>
            <button onClick={() => setAbaAtiva('produtos')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'produtos' ? 'bg-emerald-600 font-semibold shadow' : 'hover:bg-slate-800 text-slate-300'}`}>
              <Package size={20} /> Produtos
            </button>
            <button onClick={() => setAbaAtiva('clientes')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'clientes' ? 'bg-emerald-600 font-semibold shadow' : 'hover:bg-slate-800 text-slate-300'}`}>
              <Users size={20} /> Clientes
            </button>
            <button onClick={() => setAbaAtiva('vendas')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'vendas' ? 'bg-emerald-600 font-semibold shadow' : 'hover:bg-slate-800 text-slate-300'}`}>
              <ShoppingCart size={20} /> Vendas
            </button>
            <button onClick={() => setAbaAtiva('dre')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'dre' ? 'bg-emerald-600 font-semibold shadow' : 'hover:bg-slate-800 text-slate-300'}`}>
              <DollarSign size={20} /> DRE & Pró-Labore
            </button>
            <button onClick={() => setAbaAtiva('acessos')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'acessos' ? 'bg-emerald-600 font-semibold shadow' : 'hover:bg-slate-800 text-slate-300'}`}>
              <Shield size={20} /> Árvore de Acessos
            </button>
          </nav>
        </div>
        <div className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-800">Grupo Martins ERP v2.0</div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {abaAtiva === 'dashboard' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Visão Geral Corporativa</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500">
                <p className="text-gray-500 text-sm">Faturamento Consolidado</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">R$ {totalFaturamento.toFixed(2)}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <p className="text-gray-500 text-sm">Contratos Ativos</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{contratos.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
                <p className="text-gray-500 text-sm">Clientes Cadastrados</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{clientes.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                <p className="text-gray-500 text-sm">Colaboradores</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{colaboradores.length}</p>
              </div>
            </div>
          </div>
        )}

        {abaAtiva === 'contratos' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Gerenciamento de Contratos</h2>
            <form onSubmit={cadastrarContrato} className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-wrap gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
                <input type="text" value={novoContrato.cliente} onChange={e => setNovoContrato({...novoContrato, cliente: e.target.value})} className="border rounded px-3 py-2" placeholder="Nome do cliente" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Serviço / Objeto</label>
                <input type="text" value={novoContrato.servico} onChange={e => setNovoContrato({...novoContrato, servico: e.target.value})} className="border rounded px-3 py-2" placeholder="Ex: Regularização" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Valor Total (R$)</label>
                <input type="number" step="0.01" value={novoContrato.valorTotal} onChange={e => setNovoContrato({...novoContrato, valorTotal: e.target.value})} className="border rounded px-3 py-2" placeholder="0.00" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parcelas (até 4x)</label>
                <select value={novoContrato.parcelas} onChange={e => setNovoContrato({...novoContrato, parcelas: e.target.value})} className="border rounded px-3 py-2 bg-white">
                  <option value="1">1x</option>
                  <option value="2">2x</option>
                  <option value="3">3x</option>
                  <option value="4">4x</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vencimento</label>
                <input type="date" value={novoContrato.vencimento} onChange={e => setNovoContrato({...novoContrato, vencimento: e.target.value})} className="border rounded px-3 py-2" required />
              </div>
              <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-emerald-700 transition"><Plus size={18}/> Salvar Contrato</button>
            </form>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b">
                    <th className="p-4">Cliente</th>
                    <th className="p-4">Serviço</th>
                    <th className="p-4">Valor</th>
                    <th className="p-4">Parcelas</th>
                    <th className="p-4">Vencimento</th>
                    <th className="p-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {contratos.map(c => (
                    <tr key={c.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{c.cliente}</td>
                      <td className="p-4">{c.servico}</td>
                      <td className="p-4 text-emerald-600 font-semibold">R$ {Number(c.valorTotal).toFixed(2)}</td>
                      <td className="p-4">{c.parcelas}x</td>
                      <td className="p-4">{c.vencimento}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => setContratos(contratos.filter(x => x.id !== c.id))} className="text-red-500 hover:text-red-700"><Trash2 size={18}/></button>
                      </td>
                    </tr>
                  ))}
                  {contratos.length === 0 && <tr><td colSpan="6" className="p-6 text-center text-gray-400">Nenhum contrato cadastrado.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {abaAtiva === 'produtos' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Gerenciar Produtos</h2>
            <form onSubmit={adicionarProduto} className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-wrap gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto</label>
                <input type="text" value={novoProd.nome} onChange={e => setNovoProd({...novoProd, nome: e.target.value})} className="border rounded px-3 py-2" placeholder="Nome" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preço (R$)</label>
                <input type="number" step="0.01" value={novoProd.preco} onChange={e => setNovoProd({...novoProd, preco: e.target.value})} className="border rounded px-3 py-2" placeholder="0.00" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estoque</label>
                <input type="number" value={novoProd.estoque} onChange={e => setNovoProd({...novoProd, estoque: e.target.value})} className="border rounded px-3 py-2" placeholder="0" />
              </div>
              <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-emerald-700 transition"><Plus size={18}/> Adicionar</button>
            </form>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b">
                    <th className="p-4">Produto</th>
                    <th className="p-4">Preço</th>
                    <th className="p-4">Estoque</th>
                    <th className="p-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map(p => (
                    <tr key={p.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{p.nome}</td>
                      <td className="p-4">R$ {Number(p.preco).toFixed(2)}</td>
                      <td className="p-4">{p.estoque || 0}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => setProdutos(produtos.filter(x => x.id !== p.id))} className="text-red-500 hover:text-red-700"><Trash2 size={18}/></button>
                      </td>
                    </tr>
                  ))}
                  {produtos.length === 0 && <tr><td colSpan="4" className="p-6 text-center text-gray-400">Nenhum produto cadastrado.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {abaAtiva === 'clientes' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Gerenciar Clientes</h2>
            <form onSubmit={adicionarCliente} className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-wrap gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Cliente</label>
                <input type="text" value={novoCli.nome} onChange={e => setNovoCli({...novoCli, nome: e.target.value})} className="border rounded px-3 py-2" placeholder="Nome completo" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input type="text" value={novoCli.telefone} onChange={e => setNovoCli({...novoCli, telefone: e.target.value})} className="border rounded px-3 py-2" placeholder="(00) 00000-0000" />
              </div>
              <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-emerald-700 transition"><Plus size={18}/> Cadastrar</button>
            </form>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b">
                    <th className="p-4">Cliente</th>
                    <th className="p-4">Telefone</th>
                    <th className="p-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map(c => (
                    <tr key={c.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{c.nome}</td>
                      <td className="p-4">{c.telefone || '-'}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => setClientes(clientes.filter(x => x.id !== c.id))} className="text-red-500 hover:text-red-700"><Trash2 size={18}/></button>
                      </td>
                    </tr>
                  ))}
                  {clientes.length === 0 && <tr><td colSpan="3" className="p-6 text-center text-gray-400">Nenhum cliente cadastrado.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {abaAtiva === 'vendas' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Registro de Vendas</h2>
            <form onSubmit={registrarVenda} className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-wrap gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
                <select value={novaVenda.cliente} onChange={e => setNovaVenda({...novaVenda, cliente: e.target.value})} className="border rounded px-3 py-2 bg-white" required>
                  <option value="">Selecione o cliente</option>
                  {clientes.map(c => <option key={c.id} value={c.nome}>{c.nome}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Produto</label>
                <select value={novaVenda.produto} onChange={e => setNovaVenda({...novaVenda, produto: e.target.value})} className="border rounded px-3 py-2 bg-white" required>
                  <option value="">Selecione o produto</option>
                  {produtos.map(p => <option key={p.id} value={p.nome}>{p.nome} - R$ {p.preco}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Qtd</label>
                <input type="number" min="1" value={novaVenda.quantidade} onChange={e => setNovaVenda({...novaVenda, quantidade: e.target.value})} className="border rounded px-3 py-2 w-20" required />
              </div>
              <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-emerald-700 transition"><Plus size={18}/> Registrar</button>
            </form>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b">
                    <th className="p-4">Data</th>
                    <th className="p-4">Cliente</th>
                    <th className="p-4">Produto</th>
                    <th className="p-4">Qtd</th>
                    <th className="p-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {vendas.map(v => (
                    <tr key={v.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-sm text-gray-500">{v.data}</td>
                      <td className="p-4 font-medium">{v.cliente}</td>
                      <td className="p-4">{v.produto}</td>
                      <td className="p-4">{v.quantidade}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => setVendas(vendas.filter(x => x.id !== v.id))} className="text-red-500 hover:text-red-700"><Trash2 size={18}/></button>
                      </td>
                    </tr>
                  ))}
                  {vendas.length === 0 && <tr><td colSpan="5" className="p-6 text-center text-gray-400">Nenhuma venda registrada.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {abaAtiva === 'dre' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-slate-800">DRE Gerencial & Pró-Labore</h2>
              <button onClick={exportarDRECSV} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition shadow-sm"><Download size={18}/> Exportar DRE (CSV)</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Emitir Pró-Labore</h3>
                <form onSubmit={emitirProLabore} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sócio</label>
                    <input type="text" value={novoPL.socio} onChange={e => setNovoPL({...novoPL, socio: e.target.value})} className="border rounded px-3 py-2 w-full" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Valor (R$)</label>
                    <input type="number" step="0.01" value={novoPL.valor} onChange={e => setNovoPL({...novoPL, valor: e.target.value})} className="border rounded px-3 py-2 w-full" placeholder="0.00" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mês de Referência</label>
                    <input type="text" value={novoPL.mes} onChange={e => setNovoPL({...novoPL, mes: e.target.value})} className="border rounded px-3 py-2 w-full" required />
                  </div>
                  <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition w-full">Emitir Recibo Pró-Labore</button>
                </form>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Recibos Emitidos</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {proLabore.map(pl => (
                    <div key={pl.id} className="p-3 bg-gray-50 rounded border flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-slate-800">{pl.socio} - R$ {Number(pl.valor).toFixed(2)}</p>
                        <p className="text-xs text-gray-500">Ref: {pl.mes} | {pl.data}</p>
                      </div>
                      <button onClick={() => setProLabore(proLabore.filter(x => x.id !== pl.id))} className="text-red-500 hover:text-red-700"><Trash2 size={16}/></button>
                    </div>
                  ))}
                  {proLabore.length === 0 && <p className="text-gray-400 text-center py-6">Nenhum pró-labore emitido.</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {abaAtiva === 'acessos' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Árvore de Acessos & Colaboradores</h2>
            <form onSubmit={cadastrarColaborador} className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-wrap gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Colaborador</label>
                <input type="text" value={novoColab.nome} onChange={e => setNovoColab({...novoColab, nome: e.target.value})} className="border rounded px-3 py-2" placeholder="Nome" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                <input type="text" value={novoColab.cargo} onChange={e => setNovoColab({...novoColab, cargo: e.target.value})} className="border rounded px-3 py-2" placeholder="Ex: Analista" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nível de Acesso</label>
                <select value={novoColab.nivel} onChange={e => setNovoColab({...novoColab, nivel: e.target.value})} className="border rounded px-3 py-2 bg-white">
                  <option value="Operacional">Operacional</option>
                  <option value="Gerente">Gerente</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </div>
              <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-emerald-700 transition"><UserCheck size={18}/> Cadastrar Colaborador</button>
            </form>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b">
                    <th className="p-4">Colaborador</th>
                    <th className="p-4">Cargo</th>
                    <th className="p-4">Nível de Acesso (RBAC)</th>
                    <th className="p-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {colaboradores.map(col => (
                    <tr key={col.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{col.nome}</td>
                      <td className="p-4">{col.cargo || '-'}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded text-xs font-semibold ${col.nivel === 'Administrador' ? 'bg-purple-100 text-purple-700' : col.nivel === 'Gerente' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                          {col.nivel}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button onClick={() => setColaboradores(colaboradores.filter(x => x.id !== col.id))} className="text-red-500 hover:text-red-700"><Trash2 size={18}/></button>
                      </td>
                    </tr>
                  ))}
                  {colaboradores.length === 0 && <tr><td colSpan="4" className="p-6 text-center text-gray-400">Nenhum colaborador cadastrado.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
