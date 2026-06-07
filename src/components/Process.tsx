import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { processSteps } from "../data";
import { CheckCircle2, ChevronRight, MessageSquare, Paintbrush, Code2, Sparkles, Rocket } from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Return specific premium icons based on index
  const getStepIcon = (index: number, className: string) => {
    switch (index) {
      case 0: return <MessageSquare className={className} />;
      case 1: return <Paintbrush className={className} />;
      case 2: return <Code2 className={className} />;
      case 3: return <Sparkles className={className} />;
      case 4: return <Rocket className={className} />;
      default: return <CheckCircle2 className={className} />;
    }
  };

  return (
    <section id="proceso" className="bg-luxury-black py-28 border-b border-white/[0.05] relative px-6 sm:px-8 overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute right-[-10%] top-[30%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px] pointer-events-none luxury-glow-gold"></div>
      <div className="absolute left-[5%] bottom-[10%] w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left space-y-4 mb-20">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-semibold block">METODOLOGÍA EXCLUSIVA</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Nuestro proceso de <span className="italic font-normal text-gold">trabajo premium</span>.
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light max-w-xl leading-relaxed">
            La excelencia visual y técnica no se logra por accidente. Contamos con un método riguroso en 5 etapas secuenciales para garantizar que tu portal web represente el nivel máximo de tu marca.
          </p>
        </div>

        {/* Premium Alternating Timeline Grid */}
        <div className="relative mt-16">
          {/* Main vertical central spine line in gold */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold via-gold/30 to-white/5 -translate-x-[1px] pointer-events-none"></div>

          <div className="space-y-24 relative">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = activeStep === idx;
              
              // Dynamic padding classes to prevent center line collisions
              const textPaddingClass = isEven ? "md:pl-0 md:pr-16" : "md:pl-16 md:pr-0";
              const cardPaddingClass = isEven ? "md:pl-16 md:pr-0" : "md:pl-0 md:pr-16";
              
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                  id={`timeline-step-${idx}`}
                >
                  
                  {/* Timeline Central Interactive Node Point */}
                  <div className="absolute left-4 md:left-1/2 top-4 md:top-6 flex items-center justify-center z-20 -translate-x-[17px] md:-translate-x-1/2">
                    <button
                      onClick={() => setActiveStep(idx)}
                      className={`w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                        isActive
                          ? "bg-gold border-4 border-luxury-black text-luxury-black shadow-[0_0_15px_rgba(212,175,55,0.7)] scale-110"
                          : "bg-luxury-black border-2 border-white/20 text-white/60 hover:border-gold hover:text-white"
                      }`}
                      title={`Paso ${idx + 1}: ${step.title}`}
                      id={`process-node-${idx}`}
                    >
                      <span className="font-mono text-xs font-bold">{idx + 1}</span>
                    </button>
                  </div>

                  {/* Left Content Side Area */}
                  <div className={`w-full md:w-1/2 pl-12 ${textPaddingClass} text-left flex flex-col justify-start pt-2 md:pt-4`}>
                    <div className={`transition-all duration-500 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <span className="font-mono text-xs text-gold/70 tracking-widest uppercase block mb-1">
                        Paso {step.phase} · {step.duration}
                      </span>
                      <h3 
                        className="font-serif text-xl sm:text-2xl font-medium text-white cursor-pointer hover:text-gold transition-colors inline-block"
                        onClick={() => setActiveStep(idx)}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-white/40 tracking-wider font-sans uppercase mb-4 block">
                        {step.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light font-sans max-w-lg inline-block">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Content Side Area: Details Bento Box */}
                  <div className={`w-full md:w-1/2 pl-12 ${cardPaddingClass} pt-6 md:pt-0`}>
                    <motion.div
                      animate={{ 
                        borderColor: isActive ? "rgba(212, 175, 55, 0.4)" : "rgba(255, 255, 255, 0.05)",
                        backgroundColor: isActive ? "rgba(18, 18, 18, 0.85)" : "rgba(18, 18, 18, 0.3)"
                      }}
                      transition={{ duration: 0.4 }}
                      className="rounded border p-6 sm:p-8 text-left transition-all relative overflow-hidden backdrop-blur-sm shadow-xl flex flex-col justify-between h-full"
                      id={`process-detail-${idx}`}
                    >
                      {/* Ambient background watermark icon of step */}
                      <div className="absolute right-4 bottom-4 opacity-[0.03] text-white pointer-events-none">
                        {getStepIcon(idx, "w-28 h-28")}
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-white/[0.02] border border-white/5 text-gold rounded">
                            {getStepIcon(idx, "w-4 h-4")}
                          </div>
                          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
                            ACCIONES E HITOS CLAVE
                          </span>
                        </div>
                        
                        <ul className="space-y-3">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start text-xs text-white/80 gap-2.5 font-sans font-light">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Lower selection prompt */}
                      {!isActive && (
                        <button
                          onClick={() => setActiveStep(idx)}
                          className="mt-6 flex items-center gap-1.5 text-[9px] font-mono text-[#D4AF37] hover:text-white uppercase tracking-wider transition-colors"
                        >
                          Ver detalles del hito 
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      )}
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
