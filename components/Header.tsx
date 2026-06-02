import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[28px] leading-9 font-bold text-primary">VRD ZF</span>
          <span className="hidden md:inline px-1 py-0.5 bg-secondary-container text-on-secondary-container text-[12px] font-semibold rounded">INSTITUCIONAL</span>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <a className="text-secondary font-bold border-b-2 border-secondary pb-1" href="#">Portfolio</a>
          <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors" href="#">Assets</a>
          <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors" href="#">Payments</a>
          <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors" href="#">Documents</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold text-[12px] hover:bg-primary-container transition-all">INVERTIR AHORA</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
