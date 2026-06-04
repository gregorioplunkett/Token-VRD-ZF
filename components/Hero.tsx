import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur rounded-full border border-white/20">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-[12px] font-semibold uppercase tracking-widest text-secondary-fixed">Blockchain Security Enabled</span>
          </div>
          <h1 className="text-[48px] md:text-[64px] leading-tight text-white font-extrabold">
            El Futuro de la <br/>
            <span className="text-secondary-container">Logística Tokenizada</span>
          </h1>
          <p className="text-[18px] leading-7 text-white/80 max-w-xl">
            Acceda a rendimientos institucionales respaldados por activos físicos reales en la Zona Franca. VRD ZF transforma la propiedad de naves logísticas en activos digitales líquidos y seguros.
          </p>
          <div className="flex flex-wrap gap-6 pt-2">
            <Link href="/dashboard" className="px-20 py-6 bg-secondary text-white font-bold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-secondary/20">
              Invertir Ahora
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute w-125 h-125 bg-secondary/20 blur-[120px] rounded-full"></div>
          <div className="rounded-full overflow-hidden border-4 border-secondary/50 shadow-2xl z-20 animate-float token-glow">
            <img
              alt="VRD ZF Token Logo"
              className="w-full max-w-125"
              src="token_logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
