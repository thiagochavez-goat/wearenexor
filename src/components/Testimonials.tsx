import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonialsData } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonios" className="bg-luxury-black py-24 border-b border-white/[0.05] relative px-6 sm:px-8 overflow-hidden">
      
      {/* Decorative subtle glows */}
      <div className="absolute right-[-10%] top-[10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none luxury-glow-gold"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-semibold block">CONFIANZA EMPRESARIAL</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            La palabra de <span className="italic font-normal text-gold">nuestros clientes</span>.
          </h2>
        </div>

        {/* Dynamic Interactive Testimonial Slider Case */}
        <div className="relative bg-luxury-gray border border-white/10 rounded-xl p-8 sm:p-16 shadow-2xl" id="testimonials-slider">
          
          {/* Top Elegant Quote Icon Decoration */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 text-white/[0.03] pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1px]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 relative z-10 text-center"
            >
              {/* Star Rating Icons Row in gold */}
              <div className="flex justify-center items-center gap-1">
                {[...Array(current.rating)].map((_, id) => (
                  <Star key={id} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Majestic Quote Text */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl font-light text-white italic leading-relaxed max-w-3xl mx-auto">
                "{current.quote}"
              </p>

              {/* Author Metadata Frame */}
              <div className="flex flex-col items-center justify-center space-y-3 pt-4">
                <img
                  src={current.avatarUrl}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/40 shadow-md"
                />
                <div className="text-center">
                  <div className="text-sm font-semibold text-white tracking-widest uppercase">{current.name}</div>
                  <div className="text-xs text-[#D4AF37] font-mono mt-0.5 tracking-wider">
                    {current.role} &middot; <span className="text-white/60">{current.company}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Slider Control Buttons Left & Right */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full border border-white/10 hover:border-gold hover:text-gold text-white/50 bg-white/[0.01] hover:bg-gold/5 transition-all flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Testimonio anterior"
              id="slider-prev-btn"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full border border-white/10 hover:border-gold hover:text-gold text-white/50 bg-white/[0.01] hover:bg-gold/5 transition-all flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Siguiente testimonio"
              id="slider-next-btn"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bullet Indicators bottom center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-gold w-4" : "bg-white/20"
                }`}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
