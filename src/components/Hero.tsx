import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Award, ShieldAlert, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenConsultation, onExploreServices }: HeroProps) {
  const handleScrollDown = () => {
    onExploreServices();
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-luxury-black flex items-center justify-center pt-24 overflow-hidden px-6 sm:px-8"
    >
      {/* Premium ambient decorative particles/glows */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-gold/5 blur-[120px] luxury-glow-gold pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-gold/5 blur-[150px] luxury-glow-gold pointer-events-none" style={{ animationDelay: '3s' }}></div>

      {/* Grid Pattern Background overlay with subtle opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-80"></div>

      {/* Horizontal and vertical thin guide-lines for high-end digital agency layout */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-white/[0.02] hidden md:block"></div>
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-white/[0.02] hidden md:block"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-widest uppercase font-mono"
            id="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>EXCLUSIVIDAD · DISEÑO WEB PREMIUM</span>
          </motion.div>

          {/* Majestic Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.1]"
            id="hero-title"
          >
            Sitios web que hacen que <br className="hidden md:inline" />
            tu negocio parezca una <br />
            <span className="gold-gradient-text italic font-normal">empresa de primer nivel.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 font-sans text-base sm:text-lg max-w-xl font-light leading-relaxed"
            id="hero-subtitle"
          >
            Diseñamos páginas web modernas, rápidas y profesionales para negocios que quieren destacar en Bolivia.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
            id="hero-cta-group"
          >
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-gold hover:bg-gold-light text-luxury-black text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded shadow-[0_10px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-primary-btn"
            >
              Solicitar Cotización
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            
            <button
              onClick={() => {
                const portfolioSec = document.getElementById("portafolio");
                if (portfolioSec) {
                  const offset = 80;
                  const pos = portfolioSec.getBoundingClientRect().top + window.pageYOffset - offset;
                  window.scrollTo({ top: pos, behavior: "smooth" });
                }
              }}
              className="px-8 py-4 border border-white/10 hover:border-gold hover:bg-white/[0.02] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded flex items-center justify-center gap-2 cursor-pointer"
              id="hero-secondary-btn"
            >
              Ver Proyectos
            </button>
          </motion.div>

          {/* Quality Seals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/[0.05] w-full max-w-xl text-white/40 font-mono text-xs"
            id="hero-badges-container"
          >
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-gold" />
              <span>Gusto Estético Europeo</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>Cero Plantillas</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>Código Privado Sólido</span>
            </div>
          </motion.div>

        </div>

        {/* Hero Right Visual Column - Elegant Abstract Geometric Sphere and Glassmorphism Ring */}
        <div className="lg:col-span-5 flex justify-center relative items-center py-6">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center"
            id="hero-visual"
          >
            
            {/* Ambient gold aura behind representation */}
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-[60px]"></div>

            {/* Elegant rotating external ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute w-[95%] h-[95%] border border-dashed border-gold/20 rounded-full flex items-center justify-center pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -ml-1 w-2.5 h-2.5 bg-gold rounded-full shadow-[0_0_10px_#D4AF37]"></div>
              <div className="absolute bottom-1/2 left-0 -mt-1 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            </motion.div>

            {/* Rotating intermediate glass card ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border border-white/[0.05] rounded-full pointer-events-none"
            ></motion.div>

            {/* Core Vector Sculpture: Geometric Wireframe Cube-Sphere (Fully custom React drawing) */}
            <div className="w-[70%] h-[70%] rounded-full bg-luxury-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center relative p-8 shadow-2xl">
              
              {/* Inner geometric shapes drawing with SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-white overflow-visible">
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#8C620B" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Custom glowing orbit loops */}
                <motion.ellipse 
                  cx="50" cy="50" rx="35" ry="12" 
                  stroke="url(#goldGrad)" strokeWidth="0.5" fill="none"
                  animate={{ rotateX: [12, -12, 12], rotateY: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  style={{ transformOrigin: "center" }}
                />

                <motion.ellipse 
                  cx="50" cy="50" rx="12" ry="35" 
                  stroke="url(#goldGrad)" strokeWidth="0.5" fill="none"
                  animate={{ rotateY: [15, -15, 15], rotateZ: [360, 0] }}
                  transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                  style={{ transformOrigin: "center" }}
                />

                <motion.ellipse 
                  cx="50" cy="50" rx="30" ry="30" 
                  stroke="white" strokeWidth="0.2" fill="none"
                  strokeDasharray="4 4"
                />

                {/* Complex inner matrix nodes */}
                <circle cx="50" cy="50" r="2" fill="#D4AF37" className="animate-ping" />
                <circle cx="50" cy="50" r="1" fill="#FFF" />
                <circle cx="20" cy="50" r="1.5" fill="#D4AF37" />
                <circle cx="80" cy="50" r="1.5" fill="#D4AF37" />
                <line x1="20" y1="50" x2="80" y2="50" stroke="white" strokeWidth="0.15" strokeOpacity="0.3" />
                
                <circle cx="50" cy="20" r="1.5" fill="#D4AF37" />
                <circle cx="50" cy="80" r="1.5" fill="#D4AF37" />
                <line x1="50" y1="20" x2="50" y2="80" stroke="white" strokeWidth="0.15" strokeOpacity="0.3" />

                <circle cx="30" cy="30" r="1" fill="#FFF" strokeOpacity="0.5" />
                <circle cx="70" cy="70" r="1" fill="#FFF" strokeOpacity="0.5" />
                <line x1="30" y1="30" x2="70" y2="70" stroke="white" strokeWidth="0.1" strokeOpacity="0.2" />

                <circle cx="70" cy="30" r="1" fill="#FFF" strokeOpacity="0.5" />
                <circle cx="30" cy="70" r="1" fill="#FFF" strokeOpacity="0.5" />
                <line x1="70" y1="30" x2="30" y2="70" stroke="white" strokeWidth="0.1" strokeOpacity="0.2" />

              </svg>

              {/* Suspended holographic text panel in gold */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-luxury-gray/95 border border-white/[0.08] px-4 py-1.5 text-[9px] tracking-widest text-[#D4AF37] font-mono rounded flex items-center space-x-2 shadow-xl whitespace-nowrap">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span>DESARROLLO EXCLUSIVO ACTIVO</span>
              </div>
            </div>

            {/* Little floating detail tags card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -right-4 top-[20%] bg-luxury-gray/90 border border-white/10 px-4 py-3 rounded shadow-2xl backdrop-blur-md flex items-center space-x-3 pointer-events-none"
            >
              <div className="text-right">
                <div className="text-[10px] text-white/50 font-mono tracking-widest uppercase">AUDITORÍA</div>
                <div className="text-xs text-white font-bold tracking-tight">Carga &lt; 0.8s</div>
              </div>
              <div className="w-1.5 h-8 bg-gold rounded"></div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-[20%] bg-luxury-gray/90 border border-white/10 px-4 py-3 rounded shadow-2xl backdrop-blur-md flex items-center space-x-3 pointer-events-none"
            >
              <div className="w-1.5 h-8 bg-white/20 rounded"></div>
              <div>
                <div className="text-[10px] text-gold font-mono tracking-widest uppercase">UX DESIGN</div>
                <div className="text-xs text-white font-bold tracking-tight">Efecto Inmersivo</div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Floating indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer pointer-events-auto" onClick={handleScrollDown}>
        <span className="text-[9px] tracking-[0.25em] text-white/40 uppercase font-mono mb-2">Deslizar</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-1 items-center justify-center flex border border-white/20 rounded-full h-8 w-5"
        >
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </motion.div>
      </div>

    </section>
  );
}
