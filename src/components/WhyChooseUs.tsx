import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { benefitsData } from "../data";
import { Benefit } from "../types";
import { 
  Sparkles, 
  Smartphone, 
  Zap, 
  MessageSquare, 
  Code, 
  Clock, 
  HeartHandshake, 
  Laptop 
} from "lucide-react";

export default function WhyChooseUs() {
  const [activeId, setActiveId] = useState<string>("aesthetic");

  const getActiveBenefit = () => {
    return benefitsData.find(b => b.id === activeId) || benefitsData[0];
  };

  const activeBenefit = getActiveBenefit();

  return (
    <section id="beneficios" className="bg-luxury-black py-24 border-b border-white/[0.05] relative px-6 sm:px-8 overflow-hidden">
      
      {/* Glow effects */}
      <div className="absolute left-[5%] top-[10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none luxury-glow-gold"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left space-y-4 mb-20">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-semibold block">NUESTRO ESTÁNDAR DE EXCELENCIA</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            ¿Por qué <span className="italic font-normal text-gold">elegir NEXOR</span> para destacar?
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light max-w-xl leading-relaxed">
            No somos simplemente programadores. Somos un taller de diseño y alta ingeniería que convierte tu portal web en la carta de presentación más lujosa, veloz y confiable de todo tu sector en Bolivia.
          </p>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Cards list */}
          <div className="lg:col-span-6 space-y-4" id="benefits-cards-container">
            {benefitsData.map((benefit) => {
              const isActive = benefit.id === activeId;
              return (
                <div
                  key={benefit.id}
                  onClick={() => setActiveId(benefit.id)}
                  className={`group p-6 rounded border transition-all duration-500 cursor-pointer text-left relative overflow-hidden ${
                    isActive
                      ? "bg-luxury-gray/90 border-gold shadow-[0_10px_30px_rgba(212,175,55,0.05)]"
                      : "bg-transparent border-white/[0.05] hover:border-white/20 hover:bg-white/[0.01]"
                  }`}
                  id={`benefit-item-${benefit.id}`}
                >
                  {/* Active highlight side line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500 ${
                    isActive ? "bg-gold" : "bg-transparent"
                  }`}></div>

                  <div className="flex items-start gap-4">
                    {/* Badge Indicator/ID */}
                    <span className={`font-mono text-xs font-semibold ${
                      isActive ? "text-gold" : "text-white/30 group-hover:text-white/60"
                    } transition-colors duration-300 mt-1`}>
                      {benefit.id === "aesthetic" && <Sparkles className="w-4 h-4" />}
                      {benefit.id === "mobile" && <Smartphone className="w-4 h-4" />}
                      {benefit.id === "speed" && <Zap className="w-4 h-4" />}
                      {benefit.id === "whatsapp" && <MessageSquare className="w-4 h-4" />}
                      {benefit.id === "custom" && <Code className="w-4 h-4" />}
                      {benefit.id === "support" && <HeartHandshake className="w-4 h-4" />}
                    </span>

                    <div className="space-y-1">
                      <h3 className={`font-serif text-lg font-medium transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-white"
                      }`}>
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visualizer Simulator (WOW FACTOR) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-[480px] aspect-[4/3] rounded bg-luxury-gray border border-white/10 p-6 relative flex flex-col justify-between shadow-2xl overflow-hidden" id="benefits-visualizer">
              
              {/* Outer decorative line coordinates */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              
              {/* Top simulation control header bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 text-[10px] font-mono text-white/40">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  NEXOR SIMULATION ENGINE v2.6
                </span>
                <span>ID: {activeBenefit.id.toUpperCase()}_SYS</span>
              </div>

              {/* Dynamic State view renders */}
              <div className="my-auto py-4 flex flex-col items-center justify-center min-h-[180px]">
                <AnimatePresence mode="wait">
                  
                  {activeId === "aesthetic" && (
                    <motion.div
                      key="aesthetic"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="text-center space-y-6 w-full"
                    >
                      <div className="relative mx-auto w-24 h-24 flex items-center justify-center rounded-full border border-gold/45 bg-gold/5">
                        <Sparkles className="w-10 h-10 text-gold" />
                        <div className="absolute inset-0 border border-t-white rounded-full animate-spin [animation-duration:12s]"></div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">AUDITORÍA ESTÉTICA INTERNACIONAL</div>
                        <div className="font-serif text-2xl text-white font-medium">Bespoke Excellence</div>
                      </div>

                      <div className="flex justify-center gap-4 text-[10px] font-mono text-white/60">
                        <span className="bg-white/5 px-2.5 py-1 rounded">Cero Plantillas</span>
                        <span className="bg-white/5 px-2.5 py-1 rounded">Rigor Euclidiano</span>
                        <span className="bg-white/5 px-2.5 py-1 rounded">Firma Única</span>
                      </div>
                    </motion.div>
                  )}

                  {activeId === "mobile" && (
                    <motion.div
                      key="mobile"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="text-center space-y-4 w-full"
                    >
                      <div className="relative mx-auto w-20 h-32 border-2 border-white/20 rounded-xl bg-luxury-black/80 p-2 flex flex-col justify-between shadow-2xl">
                        <div className="w-8 h-1 bg-white/30 rounded-full mx-auto mb-1"></div>
                        {/* Simulated interface */}
                        <div className="flex-1 bg-gradient-to-b from-white/10 to-gold/10 rounded-lg p-1.5 flex flex-col justify-between">
                          <div className="w-full h-1 bg-gold/60 rounded"></div>
                          <div className="flex-1 my-1.5 flex flex-col gap-1 justify-center">
                            <div className="w-4/5 h-1.5 bg-white/20 rounded mx-auto"></div>
                            <div className="w-3/5 h-1 bg-white/10 rounded mx-auto"></div>
                          </div>
                          <div className="w-10 h-3 bg-gold text-luxury-black text-[5px] font-bold uppercase tracking-widest rounded-sm mx-auto flex items-center justify-center">NEXOR</div>
                        </div>
                        <div className="w-2 h-2 rounded-full border border-white/10 mx-auto mt-1"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">MAQUETADO ADAPTATIVO EXTREMO</div>
                        <div className="text-sm text-white font-serif font-light">Responsividad perfecta y gestual</div>
                      </div>
                    </motion.div>
                  )}

                  {activeId === "speed" && (
                    <motion.div
                      key="speed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="w-full text-center space-y-4"
                    >
                      {/* Speedometer simulated dial */}
                      <div className="relative mx-auto w-28 h-28 flex flex-col items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="#1f1f1f" strokeWidth="4" fill="transparent" />
                          <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="4" fill="transparent" strokeDasharray="251.2" strokeDashoffset="12.5" className="transition-all duration-1000" />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="font-mono text-3.5xl font-bold text-white">0.8s</span>
                          <span className="text-[8px] font-mono text-gold tracking-widest uppercase">OPTIMAL TIME</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-xs font-mono text-white/50">GOOGLE LIGHTHOUSE AUDITS</div>
                        <div className="flex justify-center gap-4 text-[9px] text-emerald-400 font-mono">
                          <span>Velocidad: 100%</span>
                          <span>Performance: 99%</span>
                          <span>SEO: 100%</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeId === "whatsapp" && (
                    <motion.div
                      key="whatsapp"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full space-y-4 text-center"
                    >
                      <div className="bg-luxury-black/90 border border-white/[0.08] rounded-lg p-4 font-mono text-[10px] space-y-3 max-w-sm mx-auto shadow-xl text-left">
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                          <span className="text-white font-bold text-[9px]">DIRECCIONAMIENTO INTELIGENTE</span>
                        </div>
                        <div className="text-white/60 space-y-2 text-[9px]">
                          <div className="text-emerald-400">&gt; Generando enlace en tiempo real...</div>
                          <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded text-emerald-300">
                            "Hola, vi su web NEXOR y me interesa cotizar una Landing Page hoy..."
                          </div>
                          <div className="text-white/40 font-light">&gt; Retención optimizada a 1 clic.</div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-[10px] tracking-widest text-[#D4AF37] uppercase">EMBUDO DE CONVERSIÓN RÁPIDA</div>
                        <div className="text-xs text-white font-serif font-light">Especialmente adaptado a la audiencia boliviana</div>
                      </div>
                    </motion.div>
                  )}

                  {activeId === "custom" && (
                    <motion.div
                      key="custom"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="w-full text-center space-y-4"
                    >
                      <div className="bg-white/[0.02] border border-white/[0.05] rounded p-4 text-left font-mono text-[9px] text-[#D4AF37]/80 space-y-2 max-w-sm mx-auto shadow-inner">
                        <div>&gt; import &#123; createServer &#125; from "vite";</div>
                        <div>&gt; const app = express(); // 100% CLEAN CODE</div>
                        <div>&gt; &lt;div className="text-gold tracking-tight"&gt;</div>
                        <div className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          ESTADO_ESTRUCTURAL: SOLIDO & PERSONALIZADO
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-[10px] tracking-widest text-white/40 uppercase">INDICE DE PROGRAMACIÓN A MEDIDA</div>
                        <div className="text-xs text-white font-serif font-light">Sin WordPress pesado, sin dependencias inútiles.</div>
                      </div>
                    </motion.div>
                  )}

                  {activeId === "support" && (
                    <motion.div
                      key="support"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="text-center space-y-6 w-full"
                    >
                      <div className="relative mx-auto w-24 h-24 flex items-center justify-center rounded-full border border-gold/45 bg-gold/5">
                        <Clock className="w-10 h-10 text-gold animate-pulse" />
                        <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-spin [animation-duration:24s]"></div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">TIEMPO CORRIDO DE RESPUESTA</div>
                        <div className="font-serif text-xl text-white font-medium">Asesoría de por vida</div>
                      </div>

                      <div className="flex justify-center gap-4 text-[10px] font-mono text-white/60">
                        <span className="bg-white/5 px-2.5 py-1 rounded">24 / 7 Emergencias</span>
                        <span className="bg-white/5 px-2.5 py-1 rounded">Garantía Real</span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Bottom statistics detail bar in gold */}
              <div className="grid grid-cols-2 border-t border-white/[0.06] pt-4 text-left">
                <div>
                  <span className="text-[9px] tracking-widest text-white/30 block font-mono">MÉTRICA AUDITADA</span>
                  <span className="text-xl font-mono text-gold font-bold">{activeBenefit.metric}</span>
                </div>
                <div>
                  <span className="text-[9px] tracking-widest text-white/30 block font-mono">ESTADO ACTUAL</span>
                  <span className="text-xl font-mono text-white font-bold">{activeBenefit.statLabel}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
