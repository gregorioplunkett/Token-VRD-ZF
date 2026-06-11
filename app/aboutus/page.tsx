'use client';

import React from 'react';
import Header from '../../components/Header';
import { motion, Variants } from 'framer-motion';
import {
  Building2,
  Target,
  Briefcase,
  Mail,
  Computer,
  TrendingUpDown,
} from 'lucide-react';

// Variantes de animación estrictamente tipadas para TypeScript
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutUs = () => {
  // Información de la empresa
  const companyInfo = [
    {
      icon: <Building2 size={24} />,
      title: 'Quiénes Somos',
      description: 'PortPulse, un equipo de innovadores apasionados por la intersección entre tecnología, finanzas e infraestructura. Participantes del Challenge Universitario 2026 de SmartPort Lab, estamos comprometidos con la transformación digital del sector logístico a través de la tokenización de activos.'
    },
    {
      icon: <Target size={24} />,
      title: 'Nuestra Misión',
      description: 'Democratizar el acceso a inversiones en infraestructura de alto rendimiento mediante tokenización blockchain, permitiendo que inversores de todas las escalas participen en proyectos de impacto real.'
    },
    {
      icon: <TrendingUpDown size={24} />,
      title: 'ZonaSur',
      description: 'Zona Franca Zona Sur tiene como objetivo ser la más importante y eficiente plataforma de negocios de la región',
      link: 'https://zfzonasur.com.ar/quienes-somos/'
    }
  ];

  // Miembros del equipo
  const teamMembers = [
    {
      name: 'Tiberio Cantarelli',
      description: 'Estudiante de Licenciatura en Economía en la Universidad Nacional del Sur',
      socials: { linkedin: 'https://www.linkedin.com/in/tiberio-cantarelli-72a2a0408/', github: '#' }
    },
    {
      name: 'Gregorio Plunkett',
      description: 'Estudiante de Ingeniería en Sistemas en la Universidad Nacional del Sur',
      socials: { linkedin: 'https://www.linkedin.com/in/gregorio-plunkett-3643a3230/', github: 'https://github.com/gregorioplunkett' }
    },
    {
      name: 'Manuel Bualo',
      description: 'Estudiante de Licenciatura en Economía en la Universidad Nacional del Sur',
      socials: { linkedin: '#', github: '#', email: 'email@example.com' }
    },
    {
      name: 'Valentino Kleja',
      description: 'Estudiante de Licenciatura en Economía en la Universidad Nacional del Sur',
      socials: { linkedin: 'https://www.linkedin.com/in/valentino-kleja-725536241/', github: '#', email: 'email@example.com' }
    },
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col overflow-hidden">
      <Header />

      <main className="grow flex flex-col w-full">
        {/* Hero Header Section */}
        <motion.section
          className="hero-gradient text-white py-20 md:py-28 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/fotopuerto33.jpg" 
              alt="Puerto background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              Sobre Nosotros
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl max-w-3xl leading-relaxed text-white/85"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Conoce a PortPulse, nuestro equipo, ZonaSur y la visión detrás de la tokenización de infraestructura logística en Argentina.
            </motion.p>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="grow max-w-7xl mx-auto px-6 w-full pt-16 pb-16">

        {/* Sección de la Empresa */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-primary mb-10 flex items-center gap-3">
            <Building2 className="text-secondary" /> La Empresa
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {companyInfo.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-8 rounded-3xl border border-outline-variant hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 transition-all flex flex-col bg-white/5 backdrop-blur-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary transform transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-base grow">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center px-6 py-2.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/20 transition-all text-sm w-fit"
                  >
                    Conoce más
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sección del Proyecto VRD-ZF */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="glass-card p-10 md:p-14 rounded-[2.5rem] border border-outline-variant relative overflow-hidden bg-gradient-to-br from-surface to-surface-variant/30">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30">
              <img 
                src="/img-subzona.jpg" 
                alt="Proyecto background" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply pointer-events-none rounded-[2.5rem]" />
            
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-3xl font-bold text-primary mb-8 relative z-10">El Proyecto VRD-ZF</h2>
            <div className="space-y-6 text-on-surface text-lg relative z-10">
              <p className="leading-relaxed">
                <span className="font-bold text-secondary">VRD-ZF</span> es un fideicomiso financiero de propósito específico que tokeniza una nave logística de clase mundial ubicada en Puerto Galván, Bahía Blanca. El proyecto fue desarrollado bajo el framework de sandbox regulatorio de la Comisión Nacional de Valores (CNV) de Argentina.
              </p>
              <p className="leading-relaxed">
                El token VRD-ZF es un activo de deuda USD-linked (1:1) que representa participación en los flujos de caja generados por la nave. Los inversores reciben cupones trimestrales respaldados por flujos operacionales reales y un fondo de reserva del 100%.
              </p>
              <div className="pt-4 border-t border-outline-variant/50 mt-6 flex items-center gap-2">
                <span className="font-semibold text-primary">Equipo Desarrollador:</span> 
                <span className="text-on-surface-variant">PortPulse - Participante del</span>
                <a href="https://smartportlab.puertobahiablanca.com/challengeuniversitario2026/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 hover:underline font-semibold transition-colors">
                  Challenge Universitario 2026
                </a>
                <span className="text-on-surface-variant">de SmartPort Lab</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Sección del Equipo */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-primary mb-10 text-center md:text-left">
            Equipo del Proyecto
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-3xl border border-outline-variant hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col bg-white/5 backdrop-blur-sm"
              >
                <div className="mb-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl mb-5 shadow-lg shadow-primary/20">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

               

                {/* Redes Sociales */}
                <div className="flex gap-4 justify-center pt-5 border-t border-outline-variant">
                  {member.socials.linkedin !== '#' && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-xl bg-surface hover:bg-secondary text-primary hover:text-white border border-outline-variant hover:border-transparent transition-all shadow-sm" title="LinkedIn">
                      <Briefcase size={20} />
                    </a>
                  )}
                  {member.socials.github !== '#' && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-xl bg-surface hover:bg-secondary text-primary hover:text-white border border-outline-variant hover:border-transparent transition-all shadow-sm" title="GitHub">
                      <Computer size={20} />
                    </a>
                  )}
                  {member.socials.email && member.socials.email !== 'email@example.com' && (
                    <a href={`mailto:${member.socials.email}`} className="flex items-center justify-center w-11 h-11 rounded-xl bg-surface hover:bg-secondary text-primary hover:text-white border border-outline-variant hover:border-transparent transition-all shadow-sm" title="Email">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sección Call to Action */}
        <motion.section 
          className="mt-24 glass-card p-12 md:p-16 rounded-[2.5rem] border border-outline-variant bg-gradient-to-br from-primary/5 via-surface to-secondary/10 relative overflow-hidden text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">¿Quieres Conocer Más?</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              Explora el portal del inversor para acceder a documentación oficial, telemetría del proyecto y más detalles sobre la oportunidad de inversión en VRD-ZF.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/dashboard" 
              className="inline-flex px-10 py-4 bg-secondary text-white font-bold rounded-2xl hover:bg-secondary/90 transition-colors shadow-xl shadow-secondary/25 text-lg"
            >
              Ir al Portal del Inversor
            </motion.a>
          </div>
        </motion.section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;