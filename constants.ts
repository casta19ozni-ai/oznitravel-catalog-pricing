import { ServiceFeature, TravelType } from './types';

export const BRAND_NAME = "OZNITRAVEL";
export const SLOGAN = "Revelamos el viaje que mereces.";
export const INSTAGRAM_URL = "https://www.instagram.com/crewonshore";
export const CONTACT_NUMBER = "0983977320";
export const CONTACT_EMAIL = "crewonshore@gmail.com";

export const SYSTEM_INSTRUCTION = `
Eres el Conserje de IA de OZNITRAVEL. Tu objetivo es vender experiencias exclusivas basadas en dos pilares:
1. Viajes VIP (Familia/Amigos/Tiempo Compartido): Enfocado en ahorros mayoristas, lujo accesible y experiencias sin estrés.
2. Crew on Shore: Enfocado EXCLUSIVAMENTE en tripulantes de barcos que atracan en Guayaquil. Solucionas el problema de tiempo limitado y estrés, ofreciendo tours seguros y rápidos.

Tono: Sofisticado, exclusivo, empático y directo. Usa el eslogan "Revelamos el viaje que mereces".
Siempre responde en Español.
`;

export const CATALOG_DISCLAIMER = "⚠️ IMPORTANTE: Los precios mostrados son referencias históricas basadas en el ahorro promedio de la membresía. Las tarifas reales fluctúan según disponibilidad y temporada. Solicita una cotización en tiempo real.";

export const VIP_FEATURES: ServiceFeature[] = [
  {
    title: "Precios Mayoristas",
    description: "Acceso exclusivo a tarifas de alojamiento y vuelos inalcanzables para el público general.",
    icon: "💎"
  },
  {
    title: "Experiencias Sin Estrés",
    description: "Planificación milimétrica para que solo te preocupes de disfrutar con tu familia.",
    icon: "✨"
  },
  {
    title: "Tiempo Compartido Redefinido",
    description: "La flexibilidad moderna se encuentra con el lujo tradicional.",
    icon: "🗝️"
  }
];

export const CREW_FEATURES: ServiceFeature[] = [
  {
    title: "Optimización de Tiempo",
    description: "Tours diseñados para ventanas cortas de desembarque en Guayaquil.",
    icon: "⏱️"
  },
  {
    title: "Seguridad Garantizada",
    description: "Transporte y guías verificados para tu tranquilidad total.",
    icon: "🛡️"
  },
  {
    title: "Desconexión Total",
    description: "Deja la rutina del barco atrás y sumérgete en la cultura local.",
    icon: "⚓"
  }
];

export const MEMBERSHIP_BENEFITS = [
  {
    title: "Plataforma de Mayorista",
    description: "Accede a precios netos reales. Ahorra hasta un 70% comparado con plataformas públicas en hoteles, renta de autos y cruceros.",
    price: "Ahorro Garantizado"
  },
  {
    title: "World Tours",
    description: "Viajes curados en grupo a los destinos más exóticos. Paga una fracción del costo usando tus puntos de membresía.",
    price: "Experiencias Curadas"
  },
  {
    title: "Getaways",
    description: "Semanas completas en resorts de lujo alrededor del mundo desde precios irrisorios. Tu semana de descanso asegurada.",
    price: "Desde $0 + Tasas"
  },
  {
    title: "Banco de Viajes",
    description: "Cada dólar de tu membresía se convierte en puntos. No es un gasto, es una cuenta de ahorro para tus próximas vacaciones.",
    price: "2x Puntos"
  }
];

export const FEATURED_DESTINATIONS = [
  {
    name: "Dubai, EAU",
    image: "https://picsum.photos/seed/dubai/600/400",
    tag: "World Tour",
    desc: "Lujo futurista y desierto eterno."
  },
  {
    name: "Santorini, Grecia",
    image: "https://picsum.photos/seed/santorini/600/400",
    tag: "Getaway",
    desc: "Atardeceres inolvidables."
  },
  {
    name: "Cancún, México",
    image: "https://picsum.photos/seed/cancun/600/400",
    tag: "All-Inclusive",
    desc: "Caribe turquesa y vida nocturna."
  },
  {
    name: "Las Vegas, USA",
    image: "https://picsum.photos/seed/vegas/600/400",
    tag: "Entertainment",
    desc: "Espectáculos y diversión sin fin."
  }
];

export interface CatalogItem {
  name: string;
  region: string;
  image: string;
  retailPrice: number;
  memberPrice: number;
  pointsApply?: number;
  description: string;
  dates?: string;
}

export const CATALOG_DATA: Record<string, CatalogItem[]> = {
  "World Tours": [
    { 
      name: "Dubai & Abu Dhabi", 
      region: "Medio Oriente",
      image: "https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 1899,
      memberPrice: 899,
      pointsApply: 1000,
      description: "Ejemplo de World Tour: 5 Noches en hotel 5 estrellas, Safari, Cena Dhow y Burj Khalifa.",
      dates: "Consultar Fechas"
    },
    { 
      name: "Bali & Phuket", 
      region: "Asia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 1450,
      memberPrice: 650,
      pointsApply: 800,
      description: "Ejemplo de World Tour: Templos antiguos y playas cristalinas con desayuno incluido.",
      dates: "Consultar Fechas"
    },
    { 
      name: "Cartagena de Indias", 
      region: "Colombia",
      image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 899,
      memberPrice: 299,
      pointsApply: 600,
      description: "Ejemplo: Historia colonial y encanto caribeño en hotel boutique.",
      dates: "Consultar Fechas"
    },
    { 
      name: "Cusco & Machu Picchu", 
      region: "Perú",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 1200,
      memberPrice: 550,
      pointsApply: 650,
      description: "Experiencia Inca con Tren Vistadome y guía privado.",
      dates: "Consultar Fechas"
    },
    { 
      name: "París Romántico", 
      region: "Francia",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 2100,
      memberPrice: 1100,
      pointsApply: 1000,
      description: "Alojamiento céntrico y actividades exclusivas en la ciudad de la luz.",
      dates: "Consultar Fechas"
    },
    { 
      name: "Estambul Mágico", 
      region: "Turquía",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 950,
      memberPrice: 350,
      pointsApply: 600,
      description: "Donde oriente encuentra occidente. Tours culturales incluidos.",
      dates: "Consultar Fechas"
    }
  ],
  "Getaways (Resorts)": [
    { 
      name: "Orlando Resort", 
      region: "Florida",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 1200,
      memberPrice: 149,
      description: "Ejemplo Getaway: Semana completa (7 noches) en suite familiar.",
      dates: "Sujeto a Disponibilidad"
    },
    { 
      name: "Cancún All-Inclusive", 
      region: "México",
      image: "https://images.unsplash.com/photo-1552074291-ad4df708e226?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 2500,
      memberPrice: 899,
      description: "Ejemplo: Lujo ilimitado frente al mar para 2 adultos.",
      dates: "Sujeto a Disponibilidad"
    },
    { 
      name: "Punta Cana", 
      region: "República Dominicana",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 1800,
      memberPrice: 499,
      description: "Ejemplo: Playas de arena blanca y relax total.",
      dates: "Sujeto a Disponibilidad"
    },
    { 
      name: "Tenerife", 
      region: "Islas Canarias",
      image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 900,
      memberPrice: 99,
      description: "Ejemplo: 7 Noches en apartamento de lujo.",
      dates: "Sujeto a Disponibilidad"
    },
    { 
      name: "Bali Villas", 
      region: "Indonesia",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 1500,
      memberPrice: 299,
      description: "Ejemplo: Villa privada con piscina.",
      dates: "Sujeto a Disponibilidad"
    }
  ],
  "Cruceros & Yates": [
    { 
      name: "Caribe Occidental", 
      region: "Royal Caribbean / Carnival",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 800,
      memberPrice: 350,
      pointsApply: 450,
      description: "Ejemplo: 4 Noches visitando Bahamas y Key West.",
      dates: "Salidas Semanales"
    },
    { 
      name: "Mediterráneo Griego", 
      region: "MSC / Costa",
      image: "https://images.unsplash.com/photo-1599640845513-534431836ea5?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 1200,
      memberPrice: 600,
      pointsApply: 600,
      description: "Ejemplo: 7 Noches recorriendo Santorini, Mykonos y Atenas.",
      dates: "Verano Europeo"
    },
    { 
      name: "Alaska Glaciers", 
      region: "Princess / Holland",
      image: "https://images.unsplash.com/photo-1517424606781-42cb06e2329a?q=80&w=1000&auto=format&fit=crop",
      retailPrice: 1500,
      memberPrice: 750,
      pointsApply: 750,
      description: "Ejemplo: Naturaleza salvaje y glaciares.",
      dates: "Mayo - Septiembre"
    }
  ]
};