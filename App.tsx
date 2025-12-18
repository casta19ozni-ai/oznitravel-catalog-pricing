import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onExploreClick }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo de alta calidad (Resort de Lujo) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-ozni-navy/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
          Revelamos el viaje <br />
          <span className="text-ozni-gold italic">que mereces.</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide text-gray-200">
          Especialistas en Eventos, Graduaciones y Viajes VIP. 
          Explora Punta Cana, Cartagena o Europa con el respaldo global de 
          <span className="font-bold text-white"> Travorium</span> y 
          <span className="font-bold text-white"> Crew on Shore</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto bg-ozni-gold text-ozni-navy hover:bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all shadow-2xl rounded-sm"
          >
            Diseña tu Experiencia Grupal
          </button>
          
          <button 
            onClick={onExploreClick}
            className="w-full sm:w-auto border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-ozni-navy px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all rounded-sm"
          >
            Explorar Destinos Globales
          </button>
        </div>
        
        {/* Etiquetas de confianza */}
        <div className="mt-12 flex justify-center gap-8 opacity-60 text-[10px] uppercase tracking-[0.2em]">
          <span>Membresías Travorium</span>
          <span className="text-ozni-gold">|</span>
          <span>Logística Crew on Shore</span>
        </div>
      </div>
    </div>
  );
};
