import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { LayoutDashboard, Users, Package, DollarSign, Settings, CheckCircle2, AlertCircle } from 'lucide-react';

// Inicialização segura do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseKey && supabaseUrl.startsWith('http')) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Estados do ERP
  const [transacoes, setTransacoes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);

  // Campos dos formulários
  const [novaTransacao, setNovaTransacao] = useState({ descricao: '', valor: '', tipo: 'entrada' });
  const [novoCliente, setNovoCliente] = useState({ nome: '', telefone: '' });
  const [novoProduto, setNovoProduto] = useState({ nome: '', qtd: '', preco: '' });

  // Carregamento de dados (Supabase ou LocalStorage de backup)
  useEffect(() => {
    async function carregarDados() {
      if (supabase) {
        try {
          const { data: tData } = await supabase.from('transacoes').select('*');
          const { data: cData } = await supabase.from('clientes').select('*');
          const { data: pData } = await supabase.from('produtos').select('*');
          
          if (tData) setTransacoes(tData);
          if (cData) setClientes(cData);
          if (pData) setProdutos(pData);
          return;
        } catch (err) {
          console.log("Usando modo local de segurança", err);
        }
      }
      
      // Fallback para LocalStorage
      const saved = localStorage.getItem('grupo_martins_erp_data');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setTransacoes(parsed.transacoes || []);
          setClientes(parsed.clientes || []);
          setProdutos(parsed.produtos || []);
        } catch (e) {
          console.error(e);
        }
      }
    }

    carregarDados();

    // Sincronização em tempo real (Realtime do Supabase)
    if (supabase) {
      const channel = supabase
        .channel('schema-db-changes')
        .on('postgres_changes', { event: '*', schema: 'public' }, () => {
          carregarDados();
        })
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, []);

  // Backup automático local
  useEffect(() => {
    localStorage.setItem('grupo_martins_erp_data', JSON.stringify({ transacoes, clientes, produtos }));
  }, [transacoes, clientes, produtos]);

  const handleAddTransacao = async (e) => {
    e.preventDefault();
    if (!novaTransacao.descricao || !novaTransacao.valor) return;
    const item = { id: Date.now(), ...novaTransacao, valor: Number(novaTransacao.valor) };
    if (supabase) {
      await supabase.from('transacoes').insert([item]).catch(() => {});
    }
    setTransacoes([item, ...transacoes]);
    setNovaTransacao({ descricao: '', valor: '', tipo: 'entrada' });
  };

  const handleAddCliente = async (e) => {
    e.preventDefault();
    if (!novoCliente.nome) return;
    const item = { id: Date.now(), ...novoCliente };
    if (supabase) {
      await supabase.from('clientes').insert([item]).catch(() => {});
    }
    setClientes([item, ...clientes]);
    setNovoCliente({ nome: '', telefone: '' });
  };

  const handleAddProduto = async (e) => {
    e.preventDefault();
    if (!novoProduto.nome) return;
    const item = { id: Date.now(), nome: novoProduto.nome, qtd: Number(novoProduto.qtd), preco: Number(novoProduto.preco) };
    if (supabase) {
      await supabase.from('produtos').insert([item]).catch(() => {});
    }
    setProdutos([item, ...produtos]);
    setNovoProduto({ nome: '', qtd: '', preco: '' });
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', minHeight: '100vh', backgroundColor: '#f3f4f6', color: '#1f2937', display: 'flex' }}>
      {/* Menu Lateral */}
      <aside style={{ width: '260px', backgroundColor: '#1e3a8a', color: 'white', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Grupo Martins</h1>
          <p style={{ fontSize: '12px', opacity: 0.8, margin: '4px 0 0 0' }}>ERP & Sincronização em Tempo Real</p>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => setActiveTab('dashboard')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: activeTab === 'dashboard' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: 500 }}>
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button onClick={() => setActiveTab('transacoes')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: activeTab === 'transacoes' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: 500 }}>
            <DollarSign size={18} /> Transações
          </button>
          <button onClick={() => setActiveTab('clientes')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: activeTab === 'clientes' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: 500 }}>
            <Users size={18} /> Clientes
          </button>
          <button onClick={() => setActiveTab('produtos')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: activeTab === 'produtos' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: 500 }}>
            <Package size={18} /> Produtos & Stock
          </button>
          <button onClick={() => setActiveTab('config')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: activeTab === 'config' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontWeight: 500 }}>
            <Settings size={18} /> Configurações
          </button>
        </nav>

        <div style={{ marginTop: 'auto', padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', color: supabase ? '#4ade80' : '#facc15' }}>
            {supabase ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
            {supabase ? 'Supabase Conectado' : 'Modo Local'}
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        {activeTab === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '24px' }}>Painel Geral</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#6b7280' }}>Transações</p>
                <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{transacoes.length}</p>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#6b7280' }}>Clientes</p>
                <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{clientes.length}</p>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#6b7280' }}>Produtos</p>
                <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{produtos.length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transacoes' && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '24px' }}>Gestão de Transações</h2>
            <form onSubmit={handleAddTransacao} style={{ background: 'white', padding: '20px', borderRadius: '8px', display: 'flex', gap: '12px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <input type="text" placeholder="Descrição" value={novaTransacao.descricao} onChange={e => setNovaTransacao({...novaTransacao, descricao: e.target.value})} style={{ flex: 2, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }} />
              <input type="number" placeholder="Valor (R$)" value={novaTransacao.valor} onChange={e => setNovaTransacao({...novaTransacao, valor: e.target.value})} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }} />
              <select value={novaTransacao.tipo} onChange={e => setNovaTransacao({...novaTransacao, tipo: e.target.value})} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
              <button type="submit" style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>Adicionar</button>
            </form>

            <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <th style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>Descrição</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>Tipo</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {transacoes.length === 0 ? (
                    <tr><td colSpan="3" style={{ padding: '24px', textAlign: 'center', color: '#9ca3af' }}>Nenhuma transação registada.</td></tr>
                  ) : (
                    transacoes.map((t, index) => (
                      <tr key={t.id || index} style={{ borderBottom: '1px solid #f3f4f6' }}>
                        <td style={{ padding: '12px 16px' }}>{t.descricao}</td>
                        <td style={{ padding: '12px 16px', color: t.tipo === 'entrada' ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{t.tipo.toUpperCase()}</td>
                        <td style={{ padding: '12px 16px' }}>R$ {Number(t.valor).toFixed(2)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'clientes' && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '24px' }}>Cadastro de Clientes</h2>
            <form onSubmit={handleAddCliente} style={{ background: 'white', padding: '20px', borderRadius: '8px', display: 'flex', gap: '12px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <input type="text" placeholder="Nome do Cliente" value={novoCliente.nome} onChange={e => setNovoCliente({...novoCliente, nome: e.target.value})} style={{ flex: 2, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }} />
              <input type="text" placeholder="Telefone" value={novoCliente.telefone} onChange={e => setNovoCliente({...novoCliente, telefone: e.target.value})} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }} />
              <button type="submit" style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>Cadastrar</button>
            </form>

            <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <th style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>Nome</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>Telefone</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.length === 0 ? (
                    <tr><td colSpan="2" style={{ padding: '24px', textAlign: 'center', color: '#9ca3af' }}>Nenhum cliente cadastrado.</td></tr>
                  ) : (
                    clientes.map((c, index) => (
                      <tr key={c.id || index} style={{ borderBottom: '1px solid #f3f4f6' }}>
                        <td style={{ padding: '12px 16px' }}>{c.nome}</td>
                        <td style={{ padding: '12px 16px' }}>{c.telefone || '-'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'produtos' && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '24px' }}>Controle de Stock</h2>
            <form onSubmit={handleAddProduto} style={{ background: 'white', padding: '20px', borderRadius: '8px', display: 'flex', gap: '12px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <input type="text" placeholder="Nome do Produto" value={novoProduto.nome} onChange={e => setNovoProduto({...novoProduto, nome: e.target.value})} style={{ flex: 2, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }} />
              <input type="number" placeholder="Quantidade" value={novoProduto.qtd} onChange={e => setNovoProduto({...novoProduto, qtd: e.target.value})} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }} />
              <input type="number" placeholder="Preço (R$)" value={novoProduto.preco} onChange={e => setNovoProduto({...novoProduto, preco: e.target.value})} style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }} />
              <button type="submit" style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>Adicionar</button>
            </form>

            <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <th style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>Produto</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>Stock</th>
                    <th style={{ padding: '12px 16px', fontSize: '13px', color: '#6b7280' }}>Preço Unitário</th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.length === 0 ? (
                    <tr><td colSpan="3" style={{ padding: '24px', textAlign: 'center', color: '#9ca3af' }}>Nenhum produto em stock.</td></tr>
                  ) : (
                    produtos.map((p, index) => (
                      <tr key={p.id || index} style={{ borderBottom: '1px solid #f3f4f6' }}>
                        <td style={{ padding: '12px 16px' }}>{p.nome}</td>
                        <td style={{ padding: '12px 16px' }}>{p.qtd}</td>
                        <td style={{ padding: '12px 16px' }}>R$ {Number(p.preco).toFixed(2)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Configurações & Nuvem</h2>
            <p><strong>URL do Supabase:</strong> <code>{supabaseUrl || 'Não configurada'}</code></p>
            <p><strong>Estado:</strong> {supabase ? <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Conectado (Sincronização em Tempo Real Ativa)</span> : <span style={{ color: '#ca8a04', fontWeight: 'bold' }}>Modo Local</span>}</p>
          </div>
        )}
      </main>
    </div>
  );
}
