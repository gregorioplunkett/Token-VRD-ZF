import React from 'react';

const ProgressSection = () => {
  const milestones = [
    { title: 'Cimentación', status: 'COMPLETADO' },
    { title: 'Estructura', status: 'COMPLETADO' },
    { title: 'Instalaciones', status: 'COMPLETADO' },
    { title: 'Acabados', status: '100% FINALIZADO' },
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/obra-desktop2.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/40 via-primary/35 to-primary/40"></div>
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-secondary-container font-bold text-[12px] uppercase tracking-widest">Ejecución del Proyecto</span>
          <h2 className="text-[36px] font-bold text-white mt-2">Progreso de Obra</h2>
          <div className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-secondary/20 rounded-full border border-secondary/30">
            <span className="text-secondary-fixed text-[14px] font-bold">100% FINALIZADO</span>
          </div>
        </div>
        
        <div className="relative py-12 overflow-x-auto lg:overflow-x-visible">
          <div className="min-w-200 lg:min-w-0 relative">
            <div className="absolute top-9.5 left-[10%] right-[10%] h-0.5 bg-white/10"></div>
            <div className="absolute top-9.5 left-[10%] right-[10%] h-0.5 bg-secondary-container shadow-[0_0_15px_rgba(145,186,255,0.5)]"></div>
            
            <div className="flex justify-between relative">
              {milestones.map((m, i) => (
                <div key={i} className="flex flex-col items-center w-1/5 text-center group">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary z-10 shadow-lg border border-white/20 transition-transform group-hover:scale-110">
                    <span className="font-bold">✓</span>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-[12px] text-white font-bold uppercase tracking-wider">{m.title}</h4>
                    <p className="text-secondary-fixed text-[10px] font-bold mt-1">{m.status}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex flex-col items-center w-1/5 text-center group">
                <div className="w-16 h-16 -mt-2 rounded-full bg-secondary flex items-center justify-center text-white z-10 shadow-[0_0_25px_rgba(50,95,158,0.6)] border-4 border-primary-container transition-transform group-hover:scale-105">
                  <span className="text-2xl">🚩</span>
                </div>
                <div className="mt-4">
                  <h4 className="text-[12px] text-white font-bold uppercase tracking-wider">Entrega Final</h4>
                  <p className="text-secondary-fixed text-[10px] font-bold mt-1">AGOSTO 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
