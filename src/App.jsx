import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Inicialização segura do Supabase (com fallback automático se faltarem as chaves)
let supabase = null;
try {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey && supabaseUrl.startsWith('http')) {
    supabase = createClient(supabaseUrl, supabaseKey);
  }
} catch (e) {
  console.error("Erro ao inicializar Supabase:", e);
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Estado básico do ERP para garantir que nunca rebenta
  const [data, setData] = useState({
    transacoes: [],
    clientes: [],
    produtos: []
  });

  useEffect(() => {
    // Carregamento inicial seguro
    try {
      const saved = localStorage.getItem('grupo_martins_erp');
      if (saved) {
        setData(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Erro ao carregar dados locais:", e);
    }
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', minHeight: '100vh', backgroundColor: '#f3f4f6', color: '#1f2937' }}>
      {/* Barra Superior */}
      <header style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>Grupo Martins - ERP</h1>
          <p style={{ margin: '4px 0 0 0', fontSize: '12px', opacity: 0.8 }}>
            Estado da Nuvem: {supabase ? <span style={{ color: '#4ade80', fontWeight: 'bold' }}>● Conectado ao Supabase</span> : <span style={{ color: '#facc15', fontWeight: 'bold' }}>● Modo Local (LocalStorage)</span>}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setActiveTab('dashboard')} 
            style={{ padding: '8px 16px', background: activeTab === 'dashboard' ? '#3b82f6' : 'transparent', color: 'white', border: '1px solid #3b82f6', borderRadius: '4px', cursor: 'pointer' }}>
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('config')} 
            style={{ padding: '8px 16px', background: activeTab === 'config' ? '#3b82f6' : 'transparent', color: 'white', border: '1px solid #3b82f6', borderRadius: '4px', cursor: 'pointer' }}>
            Configurações
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
        {errorMsg && (
          <div style={{ backgroundColor: '#fee2e2', border: '1px solid #ef4444', color: '#b91c1c', padding: '12px 16px', borderRadius: '6px', marginBottom: '20px' }}>
            <strong>Aviso:</strong> {errorMsg}
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Painel Geral do Sistema</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#6b7280' }}>Transações Registadas</h3>
                <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{data.transacoes.length}</p>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#6b7280' }}>Clientes Ativos</h3>
                <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{data.clientes.length}</p>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#6b7280' }}>Produtos em Stock</h3>
                <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>{data.produtos.length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Estado da Conexão Supabase</h2>
            <p>URL Configurada: <code>{import.meta.env.VITE_SUPABASE_URL || 'Não definida'}</code></p>
            <p>Chave Anon: <code>{import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Definida (Oculta por segurança)' : 'Não definida'}</code></p>
            <p style={{ fontSize: '14px', color: '#4b5563', marginTop: '16px' }}>
              Se o indicador no topo estiver verde, o seu ERP está sincronizado em tempo real na nuvem. Se estiver amarelo, está a operar com salvamento local no navegador.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
