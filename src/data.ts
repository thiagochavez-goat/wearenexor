import { Service, PortfolioProject, ProcessStep, Testimonial, Benefit } from "./types";

export const servicesData: Service[] = [
  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversión",
    subtitle: "Conversión sin fricción para campañas de impacto",
    description: "Diseño y desarrollo de páginas de aterrizaje monoproducto o servicio enfocadas al 100% en captar leads calificados y potenciar tus ventas en Bolivia.",
    extendedDescription: "Creamos experiencias optimizadas para embudos de pauta publicitaria en Meta Ads, Google Ads y TikTok. Una estructura clara, llamadas a la acción persuasivas y velocidad de carga instantánea de menos de un segundo para que no pierdas ningún cliente.",
    keyDeliverables: [
      "Estructura orientada a neuro-diseño y CRO",
      "Formularios optimizados con validación instantánea",
      "Integración nativa con píxeles de seguimiento y WhatsApp",
      "Redacción y copywriting persuasivo de alto nivel",
      "Garantía de rendimiento Lighthouse arriba del 95 puntos"
    ],
    duration: "1 - 2 semanas",
    iconName: "Target"
  },
  {
    id: "sitios-corporativos",
    title: "Sitios Web Corporativos",
    subtitle: "Presencia institucional de nivel internacional",
    description: "Sitios web multi-sección sofisticados diseñados para empresas exigentes en Santa Cruz y Bolivia que desean posicionarse como líderes del mercado.",
    extendedDescription: "Desarrollamos el hub digital central de tu empresa. Combinamos una dirección artística de primer nivel que coincide con los estándares de marcas globales con una arquitectura de información clara para atraer a clientes finales e inversionistas de alto ticket.",
    keyDeliverables: [
      "Estructura multi-página escalable y modular",
      "Sistemas de administración autolimpiables (Headless CMS)",
      "Cumplimiento estricto de accesibilidad e identidad de marca",
      "SEO Técnico inicial (Indexación en Google optimizada)",
      "Sección de blog y contenidos dinámicos autogestionable"
    ],
    duration: "3 - 5 semanas",
    iconName: "Building"
  },
  {
    id: "tiendas-online",
    title: "Tiendas Online (E-Commerce)",
    subtitle: "Plataformas de venta automatizadas",
    description: "E-Commerce robustos y atractivos creados desde cero. Experiencia de compra fluida que impulsa la facturación mensual de tu negocio.",
    extendedDescription: "Diseñamos tiendas online sofisticadas con catálogos dinámicos, filtros rápidos, búsquedas inteligentes y flujos de pago minimalistas y directos. Optimizadas para dispositivos móviles para asegurar un bajo abandono de carritos.",
    keyDeliverables: [
      "Catálogo de productos dinámicos con variantes complejas",
      "Carrito optimizado e integraciones de pago locales",
      "Flujo automatizado de facturación y correos de cliente",
      "Panel interno intuitivo para inventarios y despachos",
      "Módulo de descuentos, cupones y ofertas VIP"
    ],
    duration: "4 - 6 semanas",
    iconName: "ShoppingBag"
  },
  {
    id: "rediseno-web",
    title: "Rediseño Web Premium",
    subtitle: "Modernización y evolución digital absoluta",
    description: "Transformamos tu antiguo y lento sitio web en una obra maestra interactiva de alto rendimiento alineada a las últimas tendencias globales.",
    extendedDescription: "Si tu web parece del 2018, estás perdiendo credibilidad y clientes todos los días. Rediseñamos tu ecosistema web anterior rescatando tu identidad histórica y llevánola a un formato futurista, limpio y moderno que se adapta a las exigencias del cliente moderno.",
    keyDeliverables: [
      "Auditoría técnica del sitio actual para corregir fallos",
      "Rediseño visual completo con estándares de Awwwards",
      "Migración segura de URLs y contenido sin perder SEO existente",
      "Re-escritura de micro-copys institucionales",
      "Optimización de embudos antiguos obsoletos"
    ],
    duration: "3 - 4 semanas",
    iconName: "Sparkles"
  },
  {
    id: "optimizacion-velocidad",
    title: "Optimización de Velocidad",
    subtitle: "Velocidad extrema que enamora a Google",
    description: "Aceleramos tu sitio web actual reduciendo tiempos de espera para mejorar el posicionamiento SEO y evitar la fuga de posibles compradores.",
    extendedDescription: "Cada segundo extra en cargar cuesta un 20% menos de tasa de conversión. Re-programamos o re-configuramos tu infraestructura para que tu página web sea reactiva y cargue de forma casi inmediata en conexiones móviles difíciles o lentas.",
    keyDeliverables: [
      "Compresión de código JS e imágenes de última generación",
      "Minificación y saneamiento de bases de datos lentas",
      "Configuración de redes de entrega de contenidos de alta velocidad CDN",
      "Optimización total para móviles (Google Core Web Vitals)",
      "Reporte comparativo de velocidad Antes / Después"
    ],
    duration: "1 - 2 semanas",
    iconName: "Zap"
  },
  {
    id: "mantenimiento-web",
    title: "Mantenimiento Web VIP",
    subtitle: "Seguridad y soporte continuo blindado",
    description: "Cuidamos y actualizamos tu web de forma mensual para que opere al 100% sin caídas, errores técnicos o vulnerabilidades de seguridad.",
    extendedDescription: "Un sitio web huérfano es blanco fácil para hackers y genera desconfianza. Nos encargamos del monitoreo constante, backups en la nube automatizados y actualizaciones técnicas semanales para que te enfoques únicamente en hacer crecer tu negocio.",
    keyDeliverables: [
      "Soporte prioritario exclusivo",
      "Copias de seguridad semanales alojadas externamente",
      "Actualizaciones técnicas de plugins, servidores y CMS",
      "Reporte mensual de rendimiento y tráfico orgánico",
      "Prevención y eliminación de malware o intentos de hackeo"
    ],
    duration: "Mensual continuo",
    iconName: "Shield"
  }
];

export const benefitsData: Benefit[] = [
  {
    id: "aesthetic",
    title: "Diseño moderno y exclusivo",
    description: "Huyes de soluciones comunes y plantillas genéricas. Desarrollamos interfaces únicas con la sofisticada estética limpia de marcas internacionales como Apple o Stripe.",
    metric: "100%",
    statLabel: "Personalizado"
  },
  {
    id: "mobile",
    title: "Optimización móvil milimétrica",
    description: "Más del 80% del tráfico en Bolivia navega por celular. Tu sitio se adaptará a la perfección y de manera responsiva en pantallas de cualquier dimensión.",
    metric: "100%",
    statLabel: "Responsivo"
  },
  {
    id: "speed",
    title: "Velocidad de carga ultra rápida",
    description: "Sitios web ligeros, veloces y dinámicos que garantizan retener a clientes sofisticados e indexar perfectamente en las mejores posiciones de Google.",
    metric: "<1.2s",
    statLabel: "Carga Inicial"
  },
  {
    id: "whatsapp",
    title: "Integración fluida con WhatsApp",
    description: "Amigable y directo para el mercado boliviano. Diseñamos llamados a la acción precisos que derivan a chats de asesores optimizando la tasa de contacto.",
    metric: "Directo",
    statLabel: "Venta Automatizada"
  },
  {
    id: "custom",
    title: "Estructura adaptada al sector",
    description: "Sin trucos de código inflado. Cada línea de programación está diseñada específicamente para resolver las dolencias técnicas e impulsar el crecimiento comercial único de tu rubro.",
    metric: "Premium",
    statLabel: "Arquitectura"
  },
  {
    id: "support",
    title: "Soporte comprometido continuo",
    description: "Nunca te sentirás solo tras el lanzamiento. Nuestro equipo te respalda de forma constante frente a cualquier cambio, duda o emergencia técnica las 24 horas.",
    metric: "24/7",
    statLabel: "Garantía Real"
  }
];

export const processSteps: ProcessStep[] = [
  {
    phase: "01",
    title: "Reunión estratégica",
    subtitle: "Hitos claros, alineación profunda",
    description: "Nos reunimos contigo para comprender a fondo la historia y ambición de tu negocio. Evaluamos a tu competencia, definimos tus objetivos de conversión y trazamos el plan estratégico óptimo.",
    details: [
      "Reunión presencial o virtual exhaustiva",
      "Análisis técnico de tu competencia en Santa Cruz",
      "Mapeo de la estructura ideal del sitio web",
      "Definición clara de pilares y llamados de acción"
    ],
    duration: "Paso inicial"
  },
  {
    phase: "02",
    title: "Diseño visual exclusivo",
    subtitle: "Rigor estético y look premium",
    description: "Creamos y te presentamos una propuesta visual sofisticada e interactiva de alta fidelidad desde cero. Definimos contraste, tipografías y el look de lujo sin recurrir a plantillas comunes.",
    details: [
      "Moodboards y direcciones artísticas exclusivas",
      "Diseño conceptual único y de alto contraste estético",
      "Experiencia interactiva enfocada al usuario móvil",
      "Sesión de retroalimentación constructiva contigo"
    ],
    duration: "Semanas de Arte"
  },
  {
    phase: "03",
    title: "Desarrollo web de vanguardia",
    subtitle: "Código impecable y ágil",
    description: "Nuestros ingenieros transforman los diseños revisados en código impecable y ultra veloz mediante arquitecturas de programación sólidas y adaptables.",
    details: [
      "Programación adaptativa en TypeScript & Tailwind",
      "Optimización SEO on-page estricto desde los cimientos",
      "Integraciones con WhatsApp y pasarelas de pago",
      "Código limpio y libre de plugins pesados o lentos"
    ],
    duration: "Semanas de Código"
  },
  {
    phase: "04",
    title: "Revisión y ajustes",
    subtitle: "Pulido estético y pruebas rigurosas",
    description: "Subimos tu desarrollo a un enlace de pruebas seguro y privado para que interactúes con tu nuevo sitio. Ajustamos detalles, copys y animaciones hasta lograr la perfección esperada.",
    details: [
      "Pruebas avanzadas en múltiples celulares y navegadores",
      "Auditorías completas de velocidad y seguridad",
      "Refinamiento conjunto de textos y micro-interacciones",
      "Verificación de enlaces y flujos de formularios"
    ],
    duration: "Fase de control"
  },
  {
    phase: "05",
    title: "Entrega final y despegue",
    subtitle: "Lanzamiento y soporte posterior",
    description: "Hacemos el despliegue oficial de tu sitio web bajo tu dominio y configuramos las analíticas para arrancar la pauta. Tu marca ahora luce verdaderamente de primer nivel.",
    details: [
      "Lanzamiento controlado sin caídas de servicio",
      "Manual de administración fácil e intuitivo",
      "Configuración de Google Search Console y Analytics",
      "Inicio del soporte y monitoreo prioritario NEXOR"
    ],
    duration: "Despegue Oficial"
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "barberia-premium",
    title: "Corte y Clásico Barbería",
    category: "Barbería Premium",
    year: "2026",
    description: "Diseño de landing page interactiva con sistema de reservas en tiempo real para un salón boutique exclusivo ubicado en Equipetrol.",
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Landing Page", "UX Design", "Reserva Móvil"],
    metrics: "+120 citas semanales reservadas",
    client: "Corte & Clásico S.R.L."
  },
  {
    id: "restaurante-scz",
    title: "Tierra & Fuego Grill",
    category: "Restaurante Santa Cruz",
    year: "2025",
    description: "Sitio web corporativo e interactivo con menú digital dinámico de alta velocidad y reserva VIP para restaurante de carnes premium.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Estructura Corporativa", "Menú Auto-Administrable", "Estética de Lujo"],
    metrics: "Carga < 0.9s en celulares de clientes",
    client: "Tierra & Fuego Restaurante"
  },
  {
    id: "clinica-dental",
    title: "Clínica Dental DentiClinic",
    category: "Clínica Dental",
    year: "2025",
    description: "Rediseño web sofisticado y limpio con secciones clínicas estructuradas que inspira máxima confianza médica y profesionalismo.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Rediseño de Sitio", "SEO Fuerte", "Atención WhatsApp"],
    metrics: "+45% pacientes mensuales nuevos",
    client: "Grupo Médico Dental SC"
  },
  {
    id: "tienda-ropa-online",
    title: "Valkiria Boutique",
    category: "Tienda de Ropa Online",
    year: "2026",
    description: "E-Commerce elegante de moda con flujos de carrito ultra sencillos adaptado a pagos QR locales para potenciar la venta inmediata.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Tienda Virtual", "Catálogo Rápido", "Pasarela QR Inteligente"],
    metrics: "+60% conversión de carrito móvil",
    client: "Valkiria Fashion Bolivia"
  },
  {
    id: "inmobiliaria",
    title: "Altius Bienes Raíces",
    category: "Inmobiliaria",
    year: "2025",
    description: "Buscador de condominios y departamentos premium en el Urubó con experiencia visual inmersiva para inversionistas de lujo.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Sitio Web Corporativo", "Buscador de Inmuebles", "Estilo Minimalista"],
    metrics: "Filtrado rápido en menos de 0.5s",
    client: "Altius Real Estate"
  },
  {
    id: "gimnasio",
    title: "Ares High Performance Gym",
    category: "Gimnasio",
    year: "2026",
    description: "Página de aterrizaje deportiva de alto impacto visual con planes, horarios interactivos y fichaje de membresía VIP.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Landing Page", "Look Brutalista & Moderno", "Enfoque a Conversión"],
    metrics: "90% leads calificados convertidos",
    client: "Ares Fitness Club"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Carlos Rojas",
    role: "Socio Gerente",
    company: "Tierra & Fuego Grill",
    quote: "La web anterior de nuestro restaurante espantaba a los comensales. NEXOR diseñó un sitio tan impresionante y veloz que los clientes reservan directo al ver el menú. Son extremadamente profesionales, la mejor inversión digital que hemos hecho en Santa Cruz.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "t2",
    name: "María Fernández",
    role: "Directora Ejecutiva",
    company: "Valkiria Boutique",
    quote: "Queríamos una tienda de ropa online que se viera limpia como la de Zara o Apple. NEXOR captó la idea de inmediato y construyó un sistema de catálogo veloz de clase mundial. Conseguimos clientes reales todas las semanas en todo el país sin esfuerzo.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "t3",
    name: "Alejandro Suárez",
    role: "Presidente del Directorio",
    company: "Altius Bienes Raíces",
    quote: "En el sector de real estate de lujo, la primera impresión lo es todo. Las agencias tradicionales en Bolivia ofrecían diseños genéricos y lentos en WordPress. NEXOR entregó un desarrollo premium a medida, rápido y con un look de Awwwards que encanta a inversionistas.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
  }
];
