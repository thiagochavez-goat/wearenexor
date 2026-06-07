import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { servicesData } from "../data";
import { Service } from "../types";
import { 
  Code, 
  PenTool, 
  Instagram, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  X, 
  Check, 
  Clock, 
  Layers, 
  ArrowUpRight,
  Target,
  Building,
  ShoppingBag,
  Shield
} from "lucide-react";

interface ServicesProps {
  onOpenConsultation: (preselectedService?: string) => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [activeDrawer, setActiveDrawer] = useState<Service | null>(null);

  // Dynamic icon helper
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case "Target": return <Target className={className} />;
      case "Building": return <Building className={className} />;
      case "ShoppingBag": return <ShoppingBag className={className} />;
      case "Sparkles": return <Sparkles className={className} />;
      case "Zap": return <Zap className={className} />;
      case "Shield": return <Shield className={className} />;
      case "Code": return <Code className={className} />;
      case "PenTool": return <PenTool className={className} />;
      case "Instagram": return <Instagram className={className} />;
      case "TrendingUp": return <TrendingUp className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <section id="servicios" className="bg-luxury-black py-24 border-b border-white/[0.05] relative px-6 sm:px-8 overflow-hidden">
      
      {/* Background ambient circular glow */}
      <div className="absolute right-[-10%] top-[20%] w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none luxury-glow-gold"></div>
      <div className="absolute left-[-5%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl text-left space-y-4">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-semibold block">SERVICIOS DE AUTOR</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Ingeniería e <span className="italic font-normal text-gold">Identidad</span> Web de firma.
            </h2>
          </div>
          <p className="text-white/50 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Huyamos de lo genérico. NEXOR se especializa de forma exclusiva en el diseño y desarrollo de portales web premium, optimizados y de alto valor percibido para Bolivia.
          </p>
        </div>

        {/* Dynamic Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative rounded bg-luxury-gray hover:bg-white/[0.02] p-8 border border-white/[0.06] hover:border-gold/30 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl"
              id={`service-card-${service.id}`}
            >
              {/* Card Hover background glow */}
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div>
                {/* Header card icon and duration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/[0.02] text-gold rounded border border-white/5 group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-500">
                    {renderIcon(service.iconName, "w-6 h-6")}
                  </div>
                  <span className="font-mono text-[10px] text-white/40 tracking-wider flex items-center gap-1.5 bg-white/[0.03] px-2.5 py-1 rounded">
                    <Clock className="w-3 h-3 text-gold/60" />
                    {service.duration}
                  </span>
                </div>

                {/* Service text content */}
                <h3 className="font-serif text-xl font-medium text-white group-hover:text-gold transition-colors duration-300 mb-2">
                  {service.title}
                </h3>
                <h4 className="text-xs text-white/40 font-semibold mb-4 uppercase tracking-[0.15em] font-sans">
                  {service.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light font-sans mb-8">
                  {service.description}
                </p>
              </div>

              {/* Action Button trigger */}
              <button
                onClick={() => setActiveDrawer(service)}
                className="mt-auto inline-flex items-center text-xs tracking-widest text-[#D4AF37] hover:text-white uppercase font-mono group/btn transition-colors duration-300 w-fit cursor-pointer gap-2"
                id={`explore-service-${service.id}`}
              >
                Diseño metodológico
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Slide-out Sidebar Drawer Detail Panel (Extremely Premium) */}
      <AnimatePresence>
        {activeDrawer && (
          <>
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDrawer(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
              id="drawer-backdrop"
            ></motion.div>

            {/* Sidebar drawer card */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[550px] bg-luxury-gray border-l border-white/10 z-50 overflow-y-auto px-8 sm:px-12 py-10 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.9)]"
              id="drawer-container"
            >
              
              <div>
                {/* Header bar */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/[0.06]">
                  <span className="font-mono text-xs tracking-[0.3em] text-gold uppercase">EXPEDIENTE DE SERVICIO</span>
                  <button
                    onClick={() => setActiveDrawer(null)}
                    className="p-1.5 text-white/50 hover:text-gold rounded-full hover:bg-white/5 transition-all focus:outline-none"
                    aria-label="Cerrar cajón"
                    id="drawer-close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Dynamic details icon & titles */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gold/5 text-gold border border-gold/30 rounded">
                    {renderIcon(activeDrawer.iconName, "w-8 h-8")}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-white font-medium">{activeDrawer.title}</h3>
                    <p className="text-xs text-gold/70 font-mono uppercase tracking-widest">{activeDrawer.subtitle}</p>
                  </div>
                </div>

                {/* Core description text */}
                <p className="text-white/70 text-sm leading-relaxed font-light mb-8 pt-2">
                  {activeDrawer.extendedDescription}
                </p>

                {/* Key Deliverables layout section */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-mono tracking-widest text-white/40 uppercase font-semibold flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-gold" />
                    ENTREGABLES CLAVE EXCLUSIVOS
                  </h4>
                  <ul className="space-y-3">
                    {activeDrawer.keyDeliverables.map((item, id) => (
                      <li key={id} className="flex items-start text-xs sm:text-sm text-white/80 font-light gap-2.5">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta details */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-6 mb-8 text-xs font-mono">
                  <div>
                    <span className="text-white/30 block mb-1">TIEMPO ESTIMADO</span>
                    <span className="text-white font-medium">{activeDrawer.duration}</span>
                  </div>
                  <div>
                    <span className="text-white/30 block mb-1">PROGRAMA DE ENTREGA</span>
                    <span className="text-gold font-medium">Bespoke (A Medida)</span>
                  </div>
                </div>

              </div>

              {/* Drawer lower actions block */}
              <div className="pt-6 border-t border-white/[0.06] space-y-3">
                <button
                  onClick={() => {
                    setActiveDrawer(null);
                    onOpenConsultation(activeDrawer.title);
                  }}
                  className="w-full py-4 bg-gold hover:bg-gold-light text-luxury-black text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded flex items-center justify-center gap-2 cursor-pointer"
                  id="drawer-cta-primary"
                >
                  Solicitar Cotización de Firma
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => setActiveDrawer(null)}
                  className="w-full py-4 text-center border border-white/10 hover:border-gold hover:bg-white/[0.01] text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded cursor-pointer"
                  id="drawer-cta-secondary"
                >
                  Cerrar Expediente
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
