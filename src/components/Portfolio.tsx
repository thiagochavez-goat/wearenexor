import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioProjects } from "../data";
import { PortfolioProject } from "../types";
import { ArrowUpRight, X, Calendar, User, TrendingUp, Sparkles } from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = ["Todos", "Landing Page", "Sitio Corporativo", "Tienda Virtual", "Rediseño"];

  const filteredProjects = filter === "Todos"
    ? portfolioProjects
    : portfolioProjects.filter(p => {
        if (filter === "Landing Page") return p.tags.includes("Landing Page");
        if (filter === "Sitio Corporativo") return p.tags.includes("Sitio Web Corporativo") || p.tags.includes("Estructura Corporativa");
        if (filter === "Tienda Virtual") return p.tags.includes("Tienda Virtual");
        if (filter === "Rediseño") return p.tags.includes("Rediseño de Sitio");
        return p.category === filter;
      });

  return (
    <section id="portafolio" className="bg-luxury-black py-24 border-b border-white/[0.05] relative px-6 sm:px-8 overflow-hidden">
      
      {/* Background radial decor */}
      <div className="absolute left-[10%] bottom-[20%] w-[380px] h-[380px] rounded-full bg-gold/5 blur-[120px] pointer-events-none luxury-glow-gold"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl text-left space-y-4">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-semibold block">ARCHIVOS SELECCIONADOS</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Obras de arte <span className="italic font-normal text-gold">interactivas</span>.
            </h2>
          </div>
          <p className="text-white/50 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Una colección depurada de plataformas de primer rango internacional. Diseños exclusivos construídos bajo estrictos estándares de ingeniería de software.
          </p>
        </div>

        {/* Filter Navigation items in gold theme */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-white/[0.05] pb-6" id="portfolio-filters">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-sans text-xs tracking-wider uppercase transition-all duration-300 rounded cursor-pointer ${
                  isActive
                    ? "bg-gold text-luxury-black font-semibold shadow-[0_5px_15px_rgba(212,175,55,0.15)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                id={`portfolio-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#0d0d0d] rounded-lg border border-white/[0.06] hover:border-gold/30 overflow-hidden cursor-pointer shadow-2xl flex flex-col justify-between"
                id={`portfolio-card-${project.id}`}
              >
                {/* Image and metrics preview block */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  {/* Subtle black overlay mask */}
                  <div className="absolute inset-0 bg-black/45 z-10 group-hover:bg-black/30 transition-all duration-500"></div>
                  
                  {/* Actual premium placeholder image */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Year Tag absolute upper right */}
                  <span className="absolute top-4 right-4 z-20 font-mono text-[10px] text-white bg-luxury-black/80 backdrop-blur-md px-2.5 py-1 border border-white/10 rounded">
                    {project.year}
                  </span>

                  {/* Golden KPI Indicator Badge bottom left */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-gold/90 text-luxury-black font-mono text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded shadow-lg">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                {/* Text and categories detail box */}
                <div className="p-6 text-left space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest text-[#D4AF37] font-mono uppercase block">{project.category}</span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-gold transition-colors duration-300 mt-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] tracking-wider text-white/40 font-mono bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Exquisite Complete Project Details Modal (WOW FACTOR) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-md"
              id="portfolio-modal-backdrop"
            ></motion.div>

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-6 sm:inset-x-12 md:max-w-3xl lg:max-w-4xl mx-auto top-[8%] bottom-[8%] bg-luxury-gray border border-white/10 z-50 rounded shadow-2xl overflow-y-auto flex flex-col justify-between"
              id="portfolio-modal"
            >
              
              <div>
                {/* Header bar */}
                <div className="flex items-center justify-between p-6 sm:px-10 border-b border-white/[0.06]">
                  <span className="font-mono text-xs tracking-widest text-gold uppercase flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    PORTAFOLIO DE AUTOR
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 text-white/40 hover:text-gold rounded-full hover:bg-white/5 transition-all"
                    aria-label="Cerrar modal"
                    id="portfolio-modal-close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Interactive Large Image Banner */}
                <div className="relative aspect-[21/9] w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-gray via-transparent to-transparent z-10"></div>
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Quick summary over image */}
                  <div className="absolute bottom-6 left-6 sm:left-10 z-20 text-left">
                    <span className="text-[10px] bg-gold text-luxury-black font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-2">{selectedProject.title}</h3>
                  </div>
                </div>

                {/* Body Details Grid */}
                <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                  
                  {/* Left explanation column */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-white/30 tracking-widest uppercase">SUMARIO DEL PROYECTO</h4>
                      <p className="text-white/80 leading-relaxed font-light text-sm sm:text-base font-sans">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-white/30 tracking-widest uppercase">TECNOLOGÍAS Y SERVICIO</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono text-[#D4AF37] bg-gold/5 px-3 py-1 rounded border border-gold/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side data ledgers column */}
                  <div className="md:col-span-5 space-y-6 border-t md:border-t-0 md:border-l border-white/[0.06] pt-6 md:pt-0 md:pl-8 font-mono">
                    
                    <div className="space-y-4">
                      
                      {/* Metric achieved ledger */}
                      <div className="p-4 bg-gold/5 border border-gold/20 rounded">
                        <span className="text-[10px] text-gold/60 block mb-1 uppercase tracking-wider">RETORNO Y IMPACTO COMERCIAL</span>
                        <span className="text-lg font-bold text-white tracking-tight leading-tight flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-gold" />
                          {selectedProject.metrics}
                        </span>
                      </div>

                      {/* Client info */}
                      <div className="text-xs">
                        <span className="text-white/30 block mb-1">CLIENTE EXPEDIDOR</span>
                        <span className="text-white font-medium flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-gold/60" />
                          {selectedProject.client}
                        </span>
                      </div>

                      {/* Launch details */}
                      <div className="text-xs">
                        <span className="text-white/30 block mb-1">AÑO DE LANZAMIENTO</span>
                        <span className="text-white font-medium flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gold/60" />
                          {selectedProject.year}
                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* Lower Actions section */}
              <div className="p-6 sm:px-10 border-t border-white/[0.06] flex items-center justify-end gap-4 bg-[#0a0a0a]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-white/10 hover:border-white/30 text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded cursor-pointer"
                  id="portfolio-close-btn"
                >
                  Cerrar Detalles
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
