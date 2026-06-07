import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Volume2, VolumeX, Sparkles, HelpCircle } from "lucide-react";

export default function App() {
  const [preselectedService, setPreselectedService] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(false);

  // High Fidelity Audiophile Tactile Synthesizer using Web Audio API (Cero Assets)
  // Generates a soft luxurious high-end clock tick or woodblock click dynamically
  const playTactileClick = (frequency = 1800, duration = 0.015, volume = 0.05) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      
      // Decay gain for soft organic decay
      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio context may be suspended or blocked
    }
  };

  // Navigates down to the booking form with service pre-filling
  const handleOpenConsultation = (serviceName?: string) => {
    playTactileClick(1500, 0.03, 0.08);
    if (serviceName) {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService("");
    }
    
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleExploreServices = () => {
    playTactileClick(1200, 0.02, 0.06);
    const servicesSection = document.getElementById("servicios");
    if (servicesSection) {
      const offset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      className="bg-luxury-black min-h-screen text-white font-sans antialiased selection:bg-gold selection:text-luxury-black relative overflow-x-hidden"
      onMouseMove={() => {
        // Safe trigger to resume audio context if suspended
      }}
    >
      
      {/* Absolute Header background texture guide */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent z-40"></div>

      {/* Floating Interactive Tactile sound controller bottom-left (Posh details) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <button
          onClick={() => {
            setSoundEnabled(!soundEnabled);
            setTimeout(() => {
              if (!soundEnabled) playTactileClick(1600, 0.04, 0.1);
            }, 50);
          }}
          className={`p-3 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md ${
            soundEnabled 
              ? "bg-gold text-luxury-black border-gold shadow-[0_5px_15px_rgba(212,175,55,0.3)]" 
              : "bg-luxury-gray/80 text-white/50 border-white/10 hover:border-gold/40 hover:text-white"
          }`}
          title={soundEnabled ? "Desactivar respuesta háptica sonora" : "Activar respuesta háptica sonora (Sonido Premium)"}
          id="sound-design-toggle"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Short notice showing sound layout */}
        {soundEnabled && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-mono tracking-widest text-[#D4AF37] bg-luxury-gray/90 px-3 py-1.5 rounded border border-white/5 shadow-2xl backdrop-blur-md uppercase hidden sm:inline-block"
          >
            Tactiles Habilitados
          </motion.span>
        )}
      </div>

      {/* Structured sections */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />
      
      <Hero 
        onOpenConsultation={() => handleOpenConsultation()} 
        onExploreServices={handleExploreServices} 
      />
      
      <Stats />
      
      <div 
        onMouseEnter={() => playTactileClick(2000, 0.005, 0.02)}
        className="transition-all duration-300"
      >
        <Services onOpenConsultation={handleOpenConsultation} />
      </div>

      <WhyChooseUs />

      <Process />

      <Portfolio />

      <Testimonials />

      <ContactForm preselectedService={preselectedService} />

      <Footer />

    </div>
  );
}
