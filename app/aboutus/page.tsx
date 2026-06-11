'use client';

import React from 'react';
import Header from '../../components/Header';
import {
  Building2,
  Users,
  Award,
  Globe,
  Target,
  Heart,
  Briefcase,
  Mail,
  Computer,
  TrendingUpDown,
} from 'lucide-react';

const AboutUs = () => {
  // Company information sections
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


  // Project team members
  const teamMembers = [
    {
      name: 'Tiberio Cantarelli',
      role: 'Líder de Proyecto & Desarrollo Full-Stack',
      description: 'Innovador en tecnología blockchain y tokenización de activos. Lideró el equipo PortPulse en el Challenge Universitario 2026 de SmartPort Lab.',
      skills: ['Next.js', 'React', 'Blockchain', 'Web3'],
      socials: {
        linkedin: '#',
        github: '#',
        email: 'tiberio@portpulse.dev'
      }
    },
    {
      name: 'Gregorio Plunkett',
      role: 'Posición en el Equipo',
      description: 'Descripción del miembro del equipo, expertise y contribuciones clave al proyecto.',
      skills: ['Skill 1', 'Skill 2', 'Skill 3'],
      socials: {
        linkedin: 'https://www.linkedin.com/in/gregorio-plunkett-3643a3230/',
        github: 'https://github.com/gregorioplunkett',
        email: 'gregorioplunketta@gmail.com'
      }
    },
    {
      name: 'Manuel Bualo',
      role: 'Posición en el Equipo',
      description: 'Descripción del miembro del equipo, expertise y contribuciones clave al proyecto.',
      skills: ['Skill 1', 'Skill 2', 'Skill 3'],
      socials: {
        linkedin: '#',
        github: '#',
        email: 'email@example.com'
      }
    },
    {
      name: 'Valentino Kleja',
      role: 'Posición en el Equipo',
      description: 'Descripción del miembro del equipo, expertise y contribuciones clave al proyecto.',
      skills: ['Skill 1', 'Skill 2', 'Skill 3'],
      socials: {
        linkedin: '#',
        github: '#',
        email: 'email@example.com'
      }
    },
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Top Navbar */}
      <Header />

      {/* Main Content Container */}
      <main className="grow pt-28 pb-16 max-w-7xl mx-auto px-6 w-full">
        {/* Top Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-primary tracking-tight mb-3">Sobre Nosotros</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            Conoce a PortPulse, nuestro equipo, ZonaSur y la visión detrás de la tokenización de infraestructura logística en Argentina.
          </p>
        </header>

        {/* Company Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">La Empresa</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {companyInfo.map((item, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl border border-outline-variant hover:border-secondary transition-all flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm flex-grow">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-secondary text-white font-semibold rounded-lg hover:opacity-90 transition text-sm"
                  >
                    Conoce más
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        

        {/* Project Information Section */}
        <section className="mb-16">
          <div className="glass-card p-10 rounded-3xl border border-outline-variant">
            <h2 className="text-2xl font-bold text-primary mb-6">El Proyecto VRD-ZF</h2>
            <div className="space-y-4 text-on-surface">
              <p>
                <span className="font-semibold">VRD-ZF</span> es un fideicomiso financiero de propósito específico que tokeniza una nave logística de clase mundial ubicada en Puerto Galván, Bahía Blanca. El proyecto fue desarrollado bajo el framework de sandbox regulatorio de la Comisión Nacional de Valores (CNV) de Argentina.
              </p>
              <p>
                El token VRD-ZF es un activo de deuda USD-linked (1:1) que representa participación en los flujos de caja generados por la nave. Los inversores reciben cupones trimestrales respaldados por flujos operacionales reales y un fondo de reserva del 100%.
              </p>
              <p>
                <span className="font-semibold">Equipo Desarrollador:</span> PortPulse - Participante del <a href="https://smartportlab.puertobahiablanca.com/challengeuniversitario2026/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-semibold">Challenge Universitario</a> 2026 de SmartPort Lab 
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-8">Equipo del Proyecto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl border border-outline-variant hover:border-secondary transition-all flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Especialidades</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium border border-secondary/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-outline-variant">
                  {member.socials.linkedin !== '#' && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container hover:bg-secondary/20 text-secondary transition-all" title="LinkedIn">
                      <Briefcase size={18} />
                    </a>
                  )}
                  {member.socials.github !== '#' && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container hover:bg-secondary/20 text-secondary transition-all" title="GitHub">
                      <Computer size={18} />
                    </a>
                  )}
                  {member.socials.email && member.socials.email !== 'email@example.com' && (
                    <a href={`mailto:${member.socials.email}`} className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container hover:bg-secondary/20 text-secondary transition-all" title="Email">
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-16 glass-card p-12 rounded-3xl border border-outline-variant bg-linear-to-br from-primary/5 to-secondary/5">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">¿Quieres Conocer Más?</h2>
            <p className="text-on-surface-variant mb-8">
              Explora el portal del inversor para acceder a documentación oficial, telemetría del proyecto y más detalles sobre la oportunidad de inversión en VRD-ZF.
            </p>
            <a href="/dashboard" className="inline-block px-8 py-3 bg-secondary text-white font-bold rounded-xl hover:opacity-95 transition">
              Ir al Portal del Inversor
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
