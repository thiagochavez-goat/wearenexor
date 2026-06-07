import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Award } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Por qué Nexor", href: "#beneficios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Testimonios", href: "#testimonios" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-luxury-black/90 backdrop-blur-md border-b border-white/[0.06] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center space-x-2.5 group"
            id="nav-logo"
          >
            <div className="relative w-8 h-8 flex items-center justify-center border border-gold/70 group-hover:border-gold transition-colors duration-500 rounded">
              <span className="font-serif text-sm font-semibold text-gold group-hover:scale-110 transition-transform duration-500">N</span>
              <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-gold rounded-full"></div>
            </div>
            <span className="font-serif text-xl tracking-[0.2em] font-medium text-white group-hover:text-gold transition-colors duration-500">
              NEXOR
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-[13px] tracking-widest font-normal text-white/70 hover:text-gold uppercase transition-colors duration-300 relative py-1 group"
                id={`nav-${item.href.replace('#', '')}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="relative px-5 py-2 text-[12px] tracking-widest uppercase text-gold font-medium border border-gold/40 hover:border-gold hover:bg-gold/5 transition-all duration-300 rounded cursor-pointer flex items-center gap-1.5"
              id="cta-nav"
            >
              Solicitar Cotización
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gold p-1.5 focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Overlay Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-luxury-black z-40 md:hidden flex flex-col justify-center px-10 pt-20"
            id="mobile-navigation-overlay"
          >
            {/* Background luxury accents */}
            <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-gold/5 blur-[90px] luxury-glow-gold pointer-events-none"></div>
            
            {/* Nav menu links count */}
            <div className="flex flex-col space-y-6 my-auto">
              <span className="text-xs uppercase tracking-[0.3em] text-gold/60 font-mono">Índice Digital</span>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="font-serif text-3xl font-light text-white hover:text-gold transition-colors block py-2"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: menuItems.length * 0.1, duration: 0.5 }}
                className="pt-6 border-t border-white/5"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-4 text-center text-sm uppercase tracking-widest bg-gold text-luxury-black font-semibold hover:bg-gold-light transition-colors duration-300 rounded flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  Solicitar Cotización
                </button>
              </motion.div>
            </div>
            
            <div className="mt-auto py-8 text-center text-white/30 font-mono text-xs">
              NEXOR GLOBAL © 2026 · PRIVATE LUXURY OFFICE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
