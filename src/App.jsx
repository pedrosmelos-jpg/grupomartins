import React, { useState, useEffect } from 'react';
import { Package, Users, ShoppingCart, DollarSign, LayoutDashboard, Trash2, Plus } from 'lucide-react';

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState('dashboard');
  
  // Estados do ERP
  const [produtos, setProdutos] = useState(() => JSON.parse(localStorage.getItem('gm_produtos')) || []);
  const [clientes, setClientes] = useState(() => JSON.parse(localStorage.getItem('gm_clientes')) || []);
  const [vendas, setVendas] = useState(() => JSON.parse(localStorage.getItem('gm_vendas')) || []);

  // Formulários temporários
  const [novoProd, setNovoProd] = useState({ nome: '', preco: '', estoque: '' });
  const [novoCli, setNovoCli] = useState({ nome: '', telefone: '', email: '' });
  const [novaVenda, setNovaVenda] = useState({ cliente: '', produto: '', quantidade: 1 });

  useEffect(() => {
    localStorage.setItem('gm_produtos', JSON.stringify(produtos));
    localStorage.setItem('gm_clientes', JSON.stringify(clientes));
    localStorage.setItem('gm_vendas', JSON.stringify(vendas));
  }, [produtos, clientes, vendas]);

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

  const totalVendas = vendas.reduce((acc, v) => {
    const prod = produtos.find(p => p.nome === v.produto);
    return acc + (prod ? Number(prod.preco) * Number(v.quantidade) : 0);
  }, 0);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8 text-emerald-400">Grupo Martins</h1>
          <nav className="space-y-2">
            <button onClick={() => setAbaAtiva('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'dashboard' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}>
              <LayoutDashboard size={20} /> Dashboard
            </button>
            <button onClick={() => setAbaAtiva('produtos')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'produtos' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}>
              <Package size={20} /> Produtos
            </button>
            <button onClick={() => setAbaAtiva('clientes')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'clientes' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}>
              <Users size={20} /> Clientes
            </button>
            <button onClick={() => setAbaAtiva('vendas')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${abaAtiva === 'vendas' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}>
              <ShoppingCart size={20} /> Vendas
            </button>
          </nav>
        </div>
        <div className="text-xs text-slate-500 mt-6">ERP Grupo Martins v1.0</div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {abaAtiva === 'dashboard' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Visão Geral</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-emerald-500">
                <p className="text-gray-500 text-sm">Faturamento Total</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">R$ {totalVendas.toFixed(2)}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
                <p className="text-gray-500 text-sm">Produtos Cadastrados</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">{produtos.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-purple-500">
                <p className="text-gray-500 text-sm">Clientes Ativos</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">{clientes.length}</p>
              </div>
            </div>
          </div>
        )}

        {abaAtiva === 'produtos' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Gerenciar Produtos</h2>
            <form onSubmit={adicionarProduto} className="bg-white p-6 rounded-xl shadow mb-6 flex flex-wrap gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto</label>
                <input type="text" value={novoProd.nome} onChange={e => setNovoProd({...novoProd, nome: e.target.value})} className="border rounded px-3 py-2" placeholder="Ex: Item A" required />
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

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b">
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
            <form onSubmit={adicionarCliente} className="bg-white p-6 rounded-xl shadow mb-6 flex flex-wrap gap-4 items-end">
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

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b">
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
            <form onSubmit={registrarVenda} className="bg-white p-6 rounded-xl shadow mb-6 flex flex-wrap gap-4 items-end">
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

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b">
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
      </main>
    </div>
  );
}
