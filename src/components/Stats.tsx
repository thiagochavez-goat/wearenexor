import { motion } from "motion/react";
import { FolderCheck, Smile, Sparkles, Clock } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "+20",
      label: "Proyectos realizados",
      description: "Plataformas web de alto nivel y landing pages exitosas.",
      icon: FolderCheck
    },
    {
      value: "+95%",
      label: "Clientes satisfechos",
      description: "Negocios que elevaron su marca y multiplicaron su tasa de contacto.",
      icon: Smile
    },
    {
      value: "100%",
      label: "Diseño personalizado",
      description: "Huyendo de plantillas baratas, creado a mano según tu identidad.",
      icon: Sparkles
    },
    {
      value: "24/7",
      label: "Soporte",
      description: "Atención prioritaria continua asegurando que tu web nunca caiga.",
      icon: Clock
    }
  ];

  return (
    <section className="bg-luxury-black py-16 border-y border-white/[0.05] relative px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col p-6 rounded-lg bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] hover:border-gold/25 transition-all duration-300"
                id={`stat-${idx}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors duration-300" />
                  <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">MÉTRICA {idx + 1}</span>
                </div>
                
                <h3 className="font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-white group-hover:text-gold transition-colors duration-300 mb-1">
                  {stat.value}
                </h3>
                
                <h4 className="text-sm font-medium text-white/90 mb-1 tracking-wide">
                  {stat.label}
                </h4>
                
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
