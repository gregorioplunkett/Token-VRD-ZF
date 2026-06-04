'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import { 
  Wallet, 
  TrendingUp, 
  Calendar, 
  FileText, 
  ShieldCheck,
  Coins,
  Database,
  CheckCircle,
  ExternalLink,
  Lock,
  Boxes,
  ArrowUpRight
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'project'>('personal');

  // Personal investor stats
  const personalStats = [
    { label: 'Mi Balance', value: '250 VRD-ZF', subtitle: 'Tokens de Deuda', icon: <Wallet size={20} />, color: 'text-secondary' },
    { label: 'Valor Estimado', value: '$12,500.00 USD', subtitle: 'USD-Linked (1:1)', icon: <Coins size={20} />, color: 'text-primary' },
    { label: 'Cupones Cobrados', value: '$187.50 USD', subtitle: 'Rendimiento Acum.', icon: <TrendingUp size={20} />, color: 'text-green-600' },
    { label: 'Próximo Cupón', value: '15 Oct 2026', subtitle: 'Monto est.: $218.75', icon: <Calendar size={20} />, color: 'text-secondary-container' },
  ];

  // Public project telemetry (from Whitepaper Section 13.3)
  const projectStats = [
    { label: 'Total Emitido', value: 'USD 1,750,000', subtitle: '35,000 VRD-ZF', icon: <Boxes size={20} />, color: 'text-primary' },
    { label: 'Total Colocado', value: 'USD 1,450,000', subtitle: '82.8% Suscripto', icon: <CheckCircle size={20} />, color: 'text-green-600' },
    { label: 'Inversores Únicos', value: '142 Cuentas', subtitle: 'KYC Integrado', icon: <Database size={20} />, color: 'text-secondary' },
    { label: 'Fondo de Reserva', value: 'USD 150,000', subtitle: '100% Cobertura', icon: <Lock size={20} />, color: 'text-secondary-container' },
  ];

  // Construction progress hitos (from Whitepaper Section 7.2)
  const constructionMilestones = [
    { id: 'M0', title: 'Cierre de Colocación', progress: 100, status: 'Liberado', date: 'Julio 2026' },
    { id: 'M1', title: 'Excavación y Fundaciones', progress: 100, status: 'Verificado', date: 'Agosto 2026' },
    { id: 'M2', title: 'Estructura Metálica', progress: 65, status: 'En Curso', date: 'Septiembre 2026' },
    { id: 'M3', title: 'Cerramientos y Pisos', progress: 0, status: 'Pendiente', date: 'Noviembre 2026' },
  ];

  // Recent On-chain Events (from Whitepaper Section 13.2)
  const onChainEvents = [
    { event: 'WorkMilestoneVerified', details: 'Hito M1 verificado por Oráculo Chainlink', tx: '0x3a82...d2e9', time: 'Hace 2 días' },
    { event: 'Issued', details: 'Emisión de 10 tokens para Wallet 0x8a92...', tx: '0x712a...ff12', time: 'Hace 4 días' },
    { event: 'CouponPaid', details: 'Distribución masiva de cupón trimestral', tx: '0x992b...c38d', time: '1 Jul 2026' },
    { event: 'Transfer', details: 'Transferencia secundaria entre wallets autorizadas', tx: '0x882a...e911', time: '28 Jun 2026' },
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Top Navbar */}
      <Header />

      {/* Main Content Container */}
      <main className="grow pt-28 pb-16 max-w-7xl mx-auto px-6 w-full">
        {/* Top Header Row inside the layout */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-primary tracking-tight">Portal del Inversor</h1>
            <p className="text-on-surface-variant text-sm mt-1">
              Fideicomiso Financiero ZONASUR — <span className="font-semibold text-secondary">Token VRD-ZF</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-200">
              <ShieldCheck size={14} /> KYC Verificado por Sumsub
            </div>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold border border-white/20">
              JD
            </div>
          </div>
        </header>

        {/* Tab Selector */}
        <div className="flex border-b border-outline-variant mb-8">
          <button 
            onClick={() => setActiveTab('personal')}
            className={`pb-4 px-6 font-bold text-sm transition-all relative ${
              activeTab === 'personal' ? 'text-secondary' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Mi Portafolio
            {activeTab === 'personal' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full" />}
          </button>
          <button 
            onClick={() => setActiveTab('project')}
            className={`pb-4 px-6 font-bold text-sm transition-all relative ${
              activeTab === 'project' ? 'text-secondary' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Telemetría del Proyecto (Público)
            {activeTab === 'project' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full" />}
          </button>
        </div>

        {/* Stats Grid based on active tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {(activeTab === 'personal' ? personalStats : projectStats).map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl border border-outline-variant shadow-sm hover:border-secondary transition-all">
              <div className={`w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <p className="text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-on-surface-variant text-[11px] mt-1">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Visual Sections */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Avance de Obra / Escrow Section (Specific from whitepaper) */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary">Avance de Obra & Escrow</h3>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Monitoreado con Oráculos Descentralizados (Chainlink Functions)
                  </p>
                </div>
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-bold flex items-center gap-1">
                  M2 en Proceso
                </span>
              </div>
              
              <div className="space-y-6">
                {constructionMilestones.map((m, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-primary">{m.id} — {m.title}</span>
                      <span className="text-on-surface-variant text-xs font-medium">{m.date} | {m.status}</span>
                    </div>
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${
                          m.progress === 100 ? 'bg-green-500' : 'bg-secondary'
                        }`} 
                        style={{ width: `${m.progress}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Log / On-chain Events Table (From Section 13.2) */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary">Registro de Eventos On-chain</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Historial inmutable en Polygon Mainnet</p>
                </div>
                <button className="text-secondary text-xs font-bold flex items-center gap-1 hover:underline">
                  Ver Polygonscan <ExternalLink size={14} />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider border-b border-outline-variant">
                      <th className="pb-4">Evento</th>
                      <th className="pb-4">Detalle Operativo</th>
                      <th className="pb-4">Transacción</th>
                      <th className="pb-4">Tiempo</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {onChainEvents.map((ev, i) => (
                      <tr key={i} className="border-b border-outline-variant/50 last:border-0 hover:bg-white/30 transition-colors">
                        <td className="py-4 font-mono text-xs font-bold text-secondary">{ev.event}</td>
                        <td className="py-4 text-on-surface font-medium">{ev.details}</td>
                        <td className="py-4 font-mono text-xs text-on-surface-variant flex items-center gap-1">
                          {ev.tx} <ExternalLink size={12} className="opacity-40" />
                        </td>
                        <td className="py-4 text-on-surface-variant text-xs">{ev.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Quick Actions & Legal (Fully customized to RWA) */}
          <div className="space-y-8">
            
            {/* Identity & Compliance Panel */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant bg-linear-to-br from-primary to-secondary text-primary">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-secondary-container" /> Cumplimiento On-chain
              </h3>
              <p className="text-xs text-primary/80 leading-relaxed mb-6">
                Tu wallet está autorizada con OnchainID bajo el estándar regulado ERC-3643. Toda tu información personal se mantiene 100% privada off-chain.
              </p>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-primary/60 text-xs">Identificador OnchainID</span>
                  <span className="font-mono text-xs text-secondary">0x7a81...23fd</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-primary/60 text-xs">Estándar de Seguridad</span>
                  <span className="font-semibold text-secondary">ERC-3643 (Permissioned)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-primary/60 text-xs">Límite de Tenencia</span>
                  <span className="font-semibold text-secondary">Max. 51% (RG 1087)</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-secondary-fixed transition-all shadow-lg flex items-center justify-center gap-2">
                Aumentar Posición <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Official Documents Panel (From Section 13.1) */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <FileText size={20} className="text-secondary" /> Documentos Oficiales
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container-low transition-all text-sm text-on-surface font-medium border border-transparent hover:border-outline-variant">
                    <span>Prospecto del Fideicomiso</span>
                    <ExternalLink size={14} className="text-on-surface-variant" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container-low transition-all text-sm text-on-surface font-medium border border-transparent hover:border-outline-variant">
                    <span>Certificado de Tenencia (ADCVN)</span>
                    <ExternalLink size={14} className="text-on-surface-variant" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container-low transition-all text-sm text-on-surface font-medium border border-transparent hover:border-outline-variant">
                    <span>Suplemento de Emisión</span>
                    <ExternalLink size={14} className="text-on-surface-variant" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
