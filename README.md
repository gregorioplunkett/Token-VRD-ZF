# VRD-ZF — Plataforma de Logística Tokenizada

Este proyecto es una plataforma moderna para la tokenización de activos de infraestructura real (RWA) bajo la normativa sandbox de la CNV (Argentina). Diseñado con **Next.js**, **React** y **Tailwind CSS**, este prototipo sirve como portal interactivo para inversores interesados en el fideicomiso financiero de la nave logística en Puerto Galván, promovido por **ZONASUR**.
Este proyecto fue realizado para el Challenge Universitario 2026 de SmartPort Lab (https://smartportlab.puertobahiablanca.com/challengeuniversitario2026/) por el equipo PortPulse (Tiberio Cantarelli)
Este portal es un prototipo interactivo (maqueta base) diseñado para simular visual y conceptualmente la experiencia del inversor del proyecto VRD-ZF. Aunque reproduce fielmente el diseño, los flujos del marketplace, el seguimiento de obra y la telemetría técnica detallada en el White Paper, es una versión demostrativa y estática que no cuenta con conexión real a redes de blockchain ni procesa transacciones financieras reales.

## 🚀 Características Clave

La plataforma está dividida en tres módulos principales completamente maquetados con diseño profesional y animaciones fluidas:

1. **Landing Page (`/`)**: 
   - Explicación de la propuesta de valor y ventajas institucionales.
   - Ficha técnica moderna con la estructura del token basándose en el **White Paper** del proyecto.
   - Hitos de ejecución de obra y hoja de ruta tecnológica.

2. **Portal del Inversor (`/dashboard`)**:
   - Vista de portafolio personal del inversor (balance de tokens, USD equivalentes, cupones cobrados).
   - Telemetría pública en vivo del proyecto (monto total colocado, cantidad de inversores, fondos de reserva).
   - Rastreo en tiempo real de **Hitos de Construcción** y estado de la cuenta escrow gobernada por oráculos (Chainlink Functions).
   - Historial inmutable simulado de **Eventos On-Chain** en Polygon Mainnet.
   - Conexión con MiActivo(PSAV) para la compra y venta del token.
---

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) (configuración moderna con `@theme` y variables CSS)
- **Iconografía**: [Lucide React](https://lucide.dev/)

---

## 💻 Primeros Pasos

Sigue estos pasos para ejecutar el proyecto de manera local en tu entorno de desarrollo:

### 1. Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 2. Instalación de Dependencias

Navega a la carpeta del proyecto e instala las dependencias necesarias:

```bash
cd "/Users/grego/Desktop/vrd-zf"
npm install
```

### 3. Iniciar el Servidor de Desarrollo

Inicia el entorno de desarrollo local de Next.js:

```bash
npm run dev
```

Abre tu navegador e ingresa a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

### 4. Compilación para Producción

Para generar una compilación optimizada lista para producción (por ejemplo, para desplegar en Vercel):

```bash
npm run build
```

---

## 📄 Conexión con el White Paper Técnico

Toda la lógica y los datos maquetados corresponden directamente a los lineamientos establecidos en el **White Paper v1.0** del Token VRD-ZF:
- **Red de Operación**: Polygon Mainnet (EVM L2 pública).
- **Estándar Técnico**: ERC-3643 (T-REX) con atestaciones `KYC_VERIFIED`, `COUNTRY_RESIDENT` (ARG), etc.
- **Monto de Emisión**: USD 1.750.000 (35.000 tokens a valor nominal de USD 50 c/u).
- **Rendimiento**: Tasa indicativa de 7% - 9% nominal anual con pagos trimestrales de cupón.

---


