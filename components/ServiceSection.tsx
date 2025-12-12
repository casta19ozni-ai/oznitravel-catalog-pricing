import React from 'react';
import { ServiceFeature } from '../types';
import { Button } from './Button';
import { CONTACT_NUMBER } from '../constants';

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  features: ServiceFeature[];
  imageSrc: string;
  reversed?: boolean;
  theme?: 'light' | 'dark';
  id?: string;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  title, 
  subtitle, 
  features, 
  imageSrc, 
  reversed = false,
  theme = 'light',
  id
}) => {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-ozni-navy' : 'bg-ozni-cream';
  const textColor = isDark ? 'text-white' : 'text-ozni-dark';
  const subTextColor = isDark ? 'text-gray-300' : 'text-gray-600';

  const handleInquiry = () => {
    const cleanNumber = CONTACT_NUMBER.startsWith('0') ? CONTACT_NUMBER.substring(1) : CONTACT_NUMBER;
    const phoneNumber = `593${cleanNumber}`;
    const text = `Hola OZNITRAVEL, estoy viendo la sección de *${title}* en su web y quisiera una cotización personalizada o más detalles al respecto.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id={id} className={`${bgColor} py-20 md:py-32 overflow-hidden`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} items-center gap-12 lg:gap-20`}>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group">
            <div className={`absolute inset-0 transform translate-x-4 translate-y-4 border-2 ${isDark ? 'border-ozni-gold' : 'border-ozni-navy'} z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
            <img 
              src={imageSrc} 
              alt={title} 
              className="relative z-10 w-full h-[500px] object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h3 className="text-ozni-gold text-sm font-bold tracking-widest uppercase mb-2">Servicio Exclusivo</h3>
            <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${textColor}`}>{title}</h2>
            <p className={`text-lg mb-10 leading-relaxed ${subTextColor}`}>
              {subtitle}
            </p>

            <div className="space-y-8 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isDark ? 'bg-white/10 text-ozni-gold' : 'bg-ozni-navy/10 text-ozni-navy'} text-2xl`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 ${textColor}`}>{feature.title}</h4>
                    <p className={`text-sm ${subTextColor}`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant={isDark ? 'gold' : 'primary'} onClick={handleInquiry}>
              Cotizar esta Experiencia
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};