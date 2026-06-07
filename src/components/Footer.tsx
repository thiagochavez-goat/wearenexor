import { ArrowUp, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-luxury-black border-t border-white/[0.05] relative pt-16 pb-12 px-6 sm:px-8 text-left overflow-hidden">
      
      {/* Decorative ambient background blur */}
      <div className="absolute left-[50%] bottom-0 -translate-x-1/2 w-[300px] h-[100px] rounded-full bg-gold/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-12">
          
          {/* Brand Presentation */}
          <div className="space-y-4 text-center md:text-left">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-center md:justify-start space-x-2.5 group"
              id="footer-logo"
            >
              <div className="relative w-7 h-7 flex items-center justify-center border border-gold/70 group-hover:border-gold transition-colors duration-500 rounded">
                <span className="font-serif text-sm font-semibold text-gold">N</span>
                <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-gold rounded-full"></div>
              </div>
              <span className="font-serif text-lg tracking-[0.2em] font-medium text-white group-hover:text-gold transition-colors duration-500">
                NEXOR
              </span>
            </a>
            <p className="text-white/40 text-xs max-w-sm font-sans font-light leading-relaxed">
              Desarrollamos portales web de primer nivel para empresas y negocios en Bolivia que se niegan a pasar desapercibidos.
            </p>
          </div>

          {/* Quick Contact Info Block (NO numbers) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/30 block tracking-widest uppercase flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" /> UBICACIÓN
              </span>
              <span className="text-xs text-white/70 font-sans">Santa Cruz de la Sierra, Bolivia</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-white/30 block tracking-widest uppercase flex items-center justify-center sm:justify-start gap-1">
                <Mail className="w-3 h-3 text-[#D4AF37]" /> CORREO ELECTRÓNICO
              </span>
              <a 
                href="mailto:wearenexor@gmail.com" 
                className="text-xs text-[#D4AF37] font-mono hover:text-white transition-colors"
              >
                wearenexor@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Lower Legal Line & Scroll to Top */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="text-[11px] text-white/30 font-mono uppercase tracking-wider text-center sm:text-left">
            <span>© Nexor 2026 · PRIVATE WEB ENGINEERING OFFICE</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group p-2.5 border border-white/10 hover:border-gold rounded-full text-white/60 hover:text-gold hover:bg-gold/5 transition-all flex items-center justify-center focus:outline-none cursor-pointer"
            aria-label="Volver arriba"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
