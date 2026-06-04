'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Dashboard', active: true },
    { label: 'Assets', active: false },
    { label: 'Payments', active: false },
    { label: 'Documents', active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <Link href="/" className="flex items-center gap-2">
             <img src="/iconosinfondo.png" alt="VRD ZF Logo" className="w-10 h-10 md:w-12 md:h-12" />
           </Link>
          <span className="text-[28px] leading-9 font-bold text-primary">VRD ZF</span>
          <span className="hidden md:inline px-1 py-0.5 bg-secondary-container text-on-secondary-container text-[12px] font-semibold rounded">INSTITUCIONAL</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a className="text-secondary font-bold border-b-2 border-secondary pb-1" href="/dashboard">Dashboard</a>
          <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors" href="#">Assets</a>
          <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors" href="#">Payments</a>
          <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors" href="#">Documents</a>
        </nav>

        <div className="flex items-center gap-6">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold text-[12px] hover:bg-primary-container transition-all">INVERTIR AHORA</button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-surface border-t border-outline-variant">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`font-medium py-2 transition-colors ${
                  item.active
                    ? 'text-secondary border-b-2 border-secondary pb-1'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
