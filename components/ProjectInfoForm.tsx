'use client';

import React from 'react';
import { Building2, Coins, TrendingUp, CircleDollarSign, Clock, Cpu } from 'lucide-react';

const ProjectInfoForm = () => {
  const keyMetrics = [
    { 
      label: 'Nombre Comercial', 
      value: 'Token Galván', 
      icon: <Building2 size={24} />, 
      color: 'text-secondary' 
    },
    { 
      label: 'Emisión Total', 
      value: 'USD 1.75M', 
      icon: <Coins size={24} />, 
      color: 'text-primary' 
    },
    { 
      label: 'Tasa Estimada', 
      value: '7% - 9% Anual', 
      icon: <TrendingUp size={24} />, 
      color: 'text-secondary-container' 
    },
    { 
      label: 'Ticket Mínimo', 
      value: 'USD 50', 
      icon: <CircleDollarSign size={24} />, 
      color: 'text-secondary' 
    },
    { 
      label: 'Plazo', 
      value: '7 Años', 
      icon: <Clock size={24} />, 
      color: 'text-primary' 
    },
    { 
      label: 'Blockchain', 
      value: 'Polygon (ERC-3643)', 
      icon: <Cpu size={24} />, 
      color: 'text-secondary-container' 
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold text-[12px] uppercase tracking-widest mb-2 block">Ficha Técnica del Instrumento</span>
          <h2 className="text-[48px] font-extrabold text-primary leading-tight">Estructura VRD-ZF</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Quick Info Grid - Updated to 6 items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {keyMetrics.map((item, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl border border-outline-variant hover:border-secondary transition-all duration-300 group hover:-translate-y-2 shadow-sm">
              <div className={`w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest mb-2">{item.label}</h3>
              <p className="text-[24px] font-bold text-primary leading-tight">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Detailed Description Card - Enhanced with Whitepaper info */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-secondary to-primary rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-card p-10 rounded-3xl border border-outline-variant overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-1/3">
                <h3 className="text-[20px] font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-6 bg-secondary rounded-full"></span>
                  Naturaleza del Activo
                </h3>
                <p className="text-on-surface-variant text-[14px] leading-relaxed">
                  El Token VRD-ZF es la representación digital de un Valor Representativo de Deuda emitido bajo el régimen sandbox de la CNV, respaldado por la infraestructura logística de Puerto Galván.
                </p>
              </div>
              <div className="md:w-2/3">
                <div className="bg-white/50 p-6 rounded-2xl border border-white/60 italic text-on-surface text-[18px] leading-relaxed relative">
                  <span className="absolute top-4 left-4 text-6xl text-secondary/10 font-serif">“</span>
                  Este instrumento de renta fija permite el acceso a rendimientos institucionales mediante la tokenización de flujos contractuales de alquiler de una nave logística de 5,000 m². Garantizado por el patrimonio fideicomitido y una contragarantía corporativa de ZONASUR, ofrece seguridad jurídica y transparencia total on-chain mediante el estándar ERC-3643.
                  <span className="absolute bottom-4 right-4 text-6xl text-secondary/10 font-serif">”</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfoForm;


