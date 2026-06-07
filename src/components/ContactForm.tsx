import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Send, 
  CheckCircle, 
  Award, 
  Layers, 
  CheckSquare, 
  Square, 
  MessageSquare,
  Mail,
  User,
  MapPin
} from "lucide-react";

interface ContactFormProps {
  preselectedService: string;
}

export default function ContactForm({ preselectedService }: ContactFormProps) {
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState(preselectedService ? `Hola NEXOR, me interesa agendar una consultoría para el desarrollo de: ${preselectedService}.` : "");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Specialization checklist States (Matched with exact 6 specialties requested by client)
  const [selectedLanding, setSelectedLanding] = useState(true);
  const [selectedCorp, setSelectedCorp] = useState(false);
  const [selectedShop, setSelectedShop] = useState(false);
  const [selectedRedesign, setSelectedRedesign] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState(false);
  const [selectedMaint, setSelectedMaint] = useState(false);
  
  // Ambition Tier Slider: 1 = Ágil High Impact, 2 = Enterprise Premium, 3 = Awwwards Custom Craft
  const [ambitionTier, setAmbitionTier] = useState<number>(2);

  const getBriefMetrics = () => {
    const servicesCount = [selectedLanding, selectedCorp, selectedShop, selectedRedesign, selectedSpeed, selectedMaint].filter(Boolean).length;
    
    let baseTime = 2; // weeks
    let calculatedWeeks = baseTime + (servicesCount * 1.0) + (ambitionTier * 0.5);
    
    let tierName = "NEXOR ESTÁNDAR";
    let tierDescription = "Desarrollo pulido y de alta fidelidad, enfocado en conversiones inmediatas.";
    let expectedROI = "+150% Leads";

    if (ambitionTier === 2) {
      tierName = "NEXOR ENTERPRISE";
      tierDescription = "Arquitectura premium completa, interfaces a medida y velocidad de carga instantánea.";
      expectedROI = "+320% Conversiones";
    } else if (ambitionTier === 3) {
      tierName = "NEXOR ARTWORK (AWWWARDS)";
      tierDescription = "La cumbre visual. Sin límites artísticos, código ultra robusto y look exclusivo de nivel global.";
      expectedROI = "+500% Valor de Marca";
    }

    return {
      weeks: Math.round(calculatedWeeks * 10) / 10,
      tier: tierName,
      description: tierDescription,
      roi: expectedROI,
      count: servicesCount
    };
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // 6. Validar que nombre, correo y descripción estén completos antes de enviar.
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setFormError("Por favor, ingrese su nombre y apellido.");
      return;
    }
    
    if (!trimmedEmail) {
      setFormError("Por favor, ingrese su correo corporativo.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFormError("Por favor, ingrese una dirección de correo electrónico válida.");
      return;
    }

    if (!trimmedMessage) {
      setFormError("Por favor, cuéntenos brevemente sobre su rubro y los objetivos del proyecto.");
      return;
    }

    setIsSending(true);
    setIsSubmitting(true);

    // Create an AbortController to set a strict 10 second timeout on EmailJS REST call
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);

    try {
      // 2. Incluir en el correo todos los datos capturados:
      // - Nombre
      // - Correo electrónico
      // - Tipo de empresa o rubro
      // - Descripción del proyecto
      // - Fecha y hora del envío

      // Build modern specialty list for deeper insight
      const specialtiesList: string[] = [];
      if (selectedLanding) specialtiesList.push("Landing Pages");
      if (selectedCorp) specialtiesList.push("Sitios Corporativos");
      if (selectedShop) specialtiesList.push("Tiendas Online");
      if (selectedRedesign) specialtiesList.push("Rediseño Web");
      if (selectedSpeed) specialtiesList.push("Optimización de Velocidad");
      if (selectedMaint) specialtiesList.push("Mantenimiento VIP");

      let formattedDate = "";
      try {
        formattedDate = new Date().toLocaleString("es-BO", {
          timeZone: "America/La_Paz",
          dateStyle: "long",
          timeStyle: "medium"
        });
      } catch (dateError) {
        try {
          formattedDate = new Date().toLocaleString();
        } catch (_) {
          formattedDate = new Date().toString();
        }
      }

      const currentMetrics = getBriefMetrics();

      const templateParams = {
        from_name: trimmedName,
        from_email: trimmedEmail,
        reply_to: trimmedEmail,
        company_type: company.trim() || "Particular / Rubro No Especificado",
        company: company.trim() || "Particular / Rubro No Especificado", // Support both common template parameter names
        project_description: trimmedMessage,
        message: trimmedMessage, // Support both keys
        submit_date: formattedDate,
        date_time: formattedDate, // Support both keys
        specialties: specialtiesList.length > 0 ? specialtiesList.join(", ") : "Ninguna seleccionada",
        service_tier: currentMetrics.tier,
        estimated_weeks: `${currentMetrics.weeks} semanas`,
        expected_roi: currentMetrics.roi
      };

      const payload = {
        service_id: "service_vb0glvf",
        template_id: "template_9cvmzdq",
        user_id: "HpLgZhEFddPsYLkrV",
        template_params: templateParams
      };

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorDetails = await response.text();
        throw new Error(errorDetails || "Error al conectar con EmailJS REST API");
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.error("EmailJS Submission Error: ", err);
      // 4. Mostrar un mensaje de error profesional si falla el envío.
      if (err.name === "AbortError") {
        setFormError("El servidor de EmailJS tardó demasiado en responder (Timeout). Por favor, intenta de nuevo o envía un correo directo a wearenexor@gmail.com.");
      } else {
        setFormError("No se pudo establecer conexión para enviar la cotización. Por favor reintente o mande un correo directo a wearenexor@gmail.com");
      }
    } finally {
      setIsSending(false);
      setIsSubmitting(false);
    }
  };

  const metrics = getBriefMetrics();

  return (
    <section id="contacto" className="bg-luxury-black py-24 border-b border-white/[0.05] relative px-6 sm:px-8 overflow-hidden">
      
      {/* Background ambient gold glows */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[150px] pointer-events-none luxury-glow-gold"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[150px] pointer-events-none luxury-glow-gold" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block and Contact Information Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-8 text-left space-y-4">
            <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] font-semibold block">COMIENCE SU PROYECTO</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              ¿Listo para tener una web que <br className="hidden sm:inline" />
              represente el <span className="italic font-normal text-gold">nivel real</span> de tu negocio?
            </h2>
            <p className="text-white/50 text-sm sm:text-base font-light max-w-xl leading-relaxed">
              Trabajamos únicamente con proyectos seleccionados por mes para garantizar la máxima dirección de arte y rigurosidad técnica. Define el alcance de tus aspiraciones abajo o envíanos un correo directo.
            </p>
          </div>
          
          {/* Quick Contact Info Block (Ubicación & Correo strictly aligned, NO phone numbers) */}
          <div className="lg:col-span-4 bg-luxury-gray/80 border border-white/5 p-6 rounded text-left space-y-4 shadow-xl self-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold/5 rounded border border-gold/20 text-gold">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/30 block tracking-widest leading-none">UBICACIÓN</span>
                <span className="text-sm font-sans text-white">Santa Cruz de la Sierra, Bolivia</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pb-2">
              <div className="p-2 bg-gold/5 rounded border border-gold/20 text-gold">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/30 block tracking-widest leading-none font-sans">CORREO DIRECTO</span>
                <a href="mailto:wearenexor@gmail.com" className="text-sm font-mono text-white hover:text-gold transition-colors block">
                  wearenexor@gmail.com
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-4 text-[9px] font-mono uppercase text-white/30">
              SOLICITUD EXCLUSIVA SIN INTERMEDIARIOS
            </div>
          </div>
        </div>

        {/* Form and Planner Interactive grid splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Proposal Brief Planner (WOW factor) */}
          <div className="lg:col-span-6 bg-luxury-gray border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-8" id="brief-planner">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
                <div className="p-2 bg-gold/5 text-gold rounded border border-gold/10">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white font-serif">Configurador de Alcance</h3>
                  <p className="text-[10px] font-mono text-white/40 uppercase">EVALUACIÓN AUTOMÁTICA DE TIEMPOS</p>
                </div>
              </div>

              {/* 1. Toggle Services Checklist (Custom checkboxes) */}
              <div className="space-y-3">
                <label className="text-[11px] font-mono text-white/40 uppercase tracking-widest block font-semibold">1. Especialidades requeridas</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="brief-disciplines">
                  
                  {/* Landing Pages */}
                  <div 
                    onClick={() => setSelectedLanding(!selectedLanding)}
                    className={`p-3 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                      selectedLanding ? "bg-gold/10 border-gold/80 text-gold" : "bg-white/[0.02] border-white/[0.05] text-white/60 hover:border-white/15"
                    }`}
                  >
                    <span className="text-xs font-semibold">Landing Pages</span>
                    {selectedLanding ? <CheckSquare className="w-4 h-4 text-gold" /> : <Square className="w-4 h-4 text-white/30" />}
                  </div>

                  {/* Sitios Corporativos */}
                  <div 
                    onClick={() => setSelectedCorp(!selectedCorp)}
                    className={`p-3 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                      selectedCorp ? "bg-gold/10 border-gold/80 text-gold" : "bg-white/[0.02] border-white/[0.05] text-white/60 hover:border-white/15"
                    }`}
                  >
                    <span className="text-xs font-semibold">Sitios Corporativos</span>
                    {selectedCorp ? <CheckSquare className="w-4 h-4 text-gold" /> : <Square className="w-4 h-4 text-white/30" />}
                  </div>

                  {/* Tiendas Online */}
                  <div 
                    onClick={() => setSelectedShop(!selectedShop)}
                    className={`p-3 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                      selectedShop ? "bg-gold/10 border-gold/80 text-gold" : "bg-white/[0.02] border-white/[0.05] text-white/60 hover:border-white/15"
                    }`}
                  >
                    <span className="text-xs font-semibold">Tiendas Online</span>
                    {selectedShop ? <CheckSquare className="w-4 h-4 text-gold" /> : <Square className="w-4 h-4 text-white/30" />}
                  </div>

                  {/* Rediseño Web */}
                  <div 
                    onClick={() => setSelectedRedesign(!selectedRedesign)}
                    className={`p-3 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                      selectedRedesign ? "bg-gold/10 border-gold/80 text-gold" : "bg-white/[0.02] border-white/[0.05] text-white/60 hover:border-white/15"
                    }`}
                  >
                    <span className="text-xs font-semibold">Rediseño Web</span>
                    {selectedRedesign ? <CheckSquare className="w-4 h-4 text-gold" /> : <Square className="w-4 h-4 text-white/30" />}
                  </div>

                  {/* Optimización de Velocidad */}
                  <div 
                    onClick={() => setSelectedSpeed(!selectedSpeed)}
                    className={`p-3 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                      selectedSpeed ? "bg-gold/10 border-gold/80 text-gold" : "bg-white/[0.02] border-white/[0.05] text-white/60 hover:border-white/15"
                    }`}
                  >
                    <span className="text-xs font-semibold">Ópt. Velocidad</span>
                    {selectedSpeed ? <CheckSquare className="w-4 h-4 text-gold" /> : <Square className="w-4 h-4 text-white/30" />}
                  </div>

                  {/* Mantenimiento Web */}
                  <div 
                    onClick={() => setSelectedMaint(!selectedMaint)}
                    className={`p-3 rounded border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                      selectedMaint ? "bg-gold/10 border-gold/80 text-gold" : "bg-white/[0.02] border-white/[0.05] text-white/60 hover:border-white/15"
                    }`}
                  >
                    <span className="text-xs font-semibold">Mantenimiento VIP</span>
                    {selectedMaint ? <CheckSquare className="w-4 h-4 text-gold" /> : <Square className="w-4 h-4 text-white/30" />}
                  </div>

                </div>
              </div>

              {/* 2. Range Ambition Selector */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 uppercase tracking-widest font-semibold">
                  <span>2. Ambición Artística del Proyecto</span>
                  <span className="text-gold">Nivel {ambitionTier} de 3</span>
                </div>
                
                <div className="relative w-full pt-2">
                  <input 
                    type="range"
                    min="1"
                    max="3"
                    step="1"
                    value={ambitionTier}
                    onChange={(e) => setAmbitionTier(Number(e.target.value))}
                    className="w-full h-1.5 accent-gold bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none"
                    id="ambition-slider"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 font-mono mt-2 uppercase">
                    <span>Económico / Veloz</span>
                    <span className={ambitionTier === 2 ? "text-gold font-bold" : ""}>Enterprise Premium</span>
                    <span className={ambitionTier === 3 ? "text-gold font-bold" : ""}>Awwwards Custom Art</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Output estimation summaries */}
            <div className="bg-[#0b0b0b] p-5 rounded border border-white/[0.05] space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-[10px] font-mono text-white/40 font-sans">
                <span>ESTIMACIÓN INMEDIATA NEXOR</span>
                <span>RETORNO PREESTABLECIDO</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] font-mono text-white/30 block tracking-widest">NIVEL DE SERVICIO</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono text-gold block mt-0.5 leading-none">{metrics.tier}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-white/30 block tracking-widest">RETORNO ESPERADO</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono text-white block mt-0.5 leading-none">{metrics.roi}</span>
                </div>
              </div>

              <p className="text-[11px] text-white/50 leading-relaxed font-light italic font-sans pt-1">
                "{metrics.description}"
              </p>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-white/[0.05] text-white/40 font-mono font-sans">
                <span>TIEMPO ESTIMADO</span>
                <span className="text-white font-bold">{metrics.weeks} semanas</span>
              </div>
            </div>

          </div>

          {/* Right Column: High End Persuasive Form with Success states */}
          <div className="lg:col-span-6 bg-luxury-gray border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-center shadow-2xl relative" id="contact-form-container">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                  id="inquiry-form-element"
                >
                  <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-[0.2em] font-semibold block">RESERVA DE COTIZACIÓN</span>
                  
                  {/* Name field */}
                  <div className="space-y-1.5 relative">
                    <label htmlFor="name-input" className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-semibold">Su Nombre Ejecutivo</label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 w-4 h-4 text-white/20" />
                      <input
                        type="text"
                        id="name-input"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Carlos Rojas"
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-gold hover:border-white/20 text-white font-light text-sm pl-11 pr-4 py-3 rounded focus:outline-none transition-colors duration-300 font-sans"
                      />
                    </div>
                  </div>

                  {/* Email & Company inline fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-semibold">Correo Corporativo</label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3.5 w-4 h-4 text-white/20" />
                        <input
                          type="email"
                          id="email-input"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="carlos@empresa.com"
                          className="w-full bg-white/[0.02] border border-white/10 focus:border-gold hover:border-white/20 text-white font-light text-sm pl-11 pr-4 py-3 rounded focus:outline-none transition-colors duration-300 font-sans"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="company-input" className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-semibold font-sans">Empresa o Negocio</label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3.5 w-4 h-4 text-white/20 opacity-0" />
                        <span className="absolute left-3.5 text-white/20 text-xs font-mono font-bold">C/N</span>
                        <input
                          type="text"
                          id="company-input"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Ej. Tierra & Fuego SC"
                          className="w-full bg-white/[0.02] border border-white/10 focus:border-gold hover:border-white/20 text-white font-light text-sm pl-11 pr-4 py-3 rounded focus:outline-none transition-colors duration-300 font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-semibold">Cuéntanos sobre tu Rubro y Objetivos</label>
                    <div className="relative flex items-start">
                      <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-white/20" />
                      <textarea
                        id="message-input"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ej. Necesitamos rediseñar completamente la web corporativa de nuestra inmobiliaria para que se vea elegante ante inversionistas exigentes."
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-gold hover:border-white/20 text-white font-light text-sm pl-11 pr-4 py-3.5 rounded focus:outline-none transition-colors duration-300 font-sans resize-none"
                      />
                    </div>
                  </div>

                  {/* Capacity indicator */}
                  <div className="flex items-start gap-2.5 text-[10px] text-white/35 leading-normal bg-white/[0.01] p-3 rounded border border-white/[0.02] font-mono uppercase font-sans">
                    <Award className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Tu solicitud será evaluada de inmediato. Recibirás respuesta técnica directa en menos de 2 horas.</span>
                  </div>

                  {/* Elegant error notice */}
                  {formError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-950/25 border border-red-500/30 text-red-200 text-xs rounded font-sans leading-relaxed text-left"
                    >
                      <strong className="text-red-400 font-mono text-[9px] uppercase tracking-wider block mb-1">PROCESO DE SOLICITUD FALLIDO</strong>
                      {formError}
                    </motion.div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full py-4 bg-gold hover:bg-gold-light text-luxury-black font-bold uppercase text-xs tracking-widest transition-all duration-300 rounded shadow-[0_10px_20px_rgba(212,175,55,0.15)] flex items-center justify-center gap-2 ${
                      isSending ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                    }`}
                    id="form-submit-btn"
                  >
                    {isSending ? "Procesando Cotización..." : "Solicitar Cotización"}
                    <Send className={`w-3.5 h-3.5 ${isSending ? "animate-pulse" : ""}`} />
                  </button>
                  
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-12"
                  id="form-success-element"
                >
                  <div className="relative mx-auto w-16 h-16 bg-gold/10 text-gold border border-gold/40 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                    <div className="absolute inset-0 bg-gold/10 w-full h-full rounded-full animate-ping [animation-duration:3s]"></div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold block">ALINEACIÓN DE HISTORIAL DE RESERVA</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">¡Solicitud Enviada!</h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-sans font-light">
                      Muchas gracias, <strong>{name}</strong>. Hemos registrado tu solicitud de cotización para <strong>{company || "tu prestigioso negocio"}</strong>. Un socio director de NEXOR se pondrá en contacto contigo de forma inmediata en las próximas horas para coordinar la llamada estratégica inicial.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/[0.05] max-w-xs mx-auto">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                      }}
                      className="px-6 py-2.5 border border-white/10 hover:border-gold hover:text-gold text-white/50 text-[10px] tracking-widest uppercase font-mono transition-colors duration-300 rounded cursor-pointer"
                      id="reset-form-btn"
                    >
                      Enviar otra consulta
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
}
