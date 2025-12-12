import React from 'react';
import { SLOGAN } from '../constants';
import { Button } from './Button';

interface HeroProps {
  onCtaClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onExploreClick }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
          alt="Futuristic Luxury Travel" 
          className="w-full h-full object-cover"
        />
        {/* Stronger gradient overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ozni-dark/95 via-ozni-navy/60 to-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-ozni-gold tracking-[0.3em] uppercase mb-6 text-sm md:text-base font-bold animate-fade-in-up drop-shadow-md">
          Bienvenido al Futuro
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 font-bold leading-tight drop-shadow-2xl">
          OZNITRAVEL
        </h1>
        <div className="h-1 w-24 bg-ozni-gold mx-auto mb-8 rounded-full"></div>
        <p className="text-xl md:text-3xl text-gray-100 font-light mb-12 font-sans italic tracking-wide text-shadow-lg">
          "{SLOGAN}"
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button variant="gold" onClick={onCtaClick} className="min-w-[200px] shadow-lg hover:shadow-ozni-gold/50">
              Diseña tu Experiencia
            </Button>
            <button 
              onClick={onExploreClick}
              className="min-w-[200px] px-8 py-3 border border-white text-white hover:bg-white hover:text-ozni-navy transition-all duration-300 uppercase text-sm tracking-wider flex items-center justify-center font-medium shadow-lg backdrop-blur-sm"
            >
              Explorar Servicios
            </button>
        </div>
      </div>
    </section>
  );
};