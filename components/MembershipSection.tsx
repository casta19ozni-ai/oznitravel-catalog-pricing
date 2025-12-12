import React, { useState } from 'react';
import { MEMBERSHIP_BENEFITS, FEATURED_DESTINATIONS, CONTACT_NUMBER, CATALOG_DATA, CatalogItem, CATALOG_DISCLAIMER } from '../constants';
import { Button } from './Button';

export const MembershipSection: React.FC = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [activeCategory, setActiveCategory] = useState<keyof typeof CATALOG_DATA>("World Tours");
  const [selectedOffer, setSelectedOffer] = useState<CatalogItem | null>(null);

  const getWhatsAppLink = (message: string) => {
    const cleanNumber = CONTACT_NUMBER.startsWith('0') ? CONTACT_NUMBER.substring(1) : CONTACT_NUMBER;
    const phoneNumber = `593${cleanNumber}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleDestinationClick = (destName: string) => {
    const text = `Hola OZNITRAVEL, quiero más detalles sobre el destino destacado: *${destName}*.`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  const handleMembershipInquiry = () => {
    const text = `Hola OZNITRAVEL, quisiera información detallada sobre cómo adquirir la *Membresía* y sus beneficios exclusivos.`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  const handleBookOffer = (offer: CatalogItem) => {
    const text = `
Hola OZNITRAVEL, me interesa este ejemplo de viaje y quiero cotizar el precio real para mis fechas:
    
🌍 *Destino:* ${offer.name}
💰 *Precio Referencial Socio:* $${offer.memberPrice}
📅 *Fechas Preferidas:* (Escribe aquí tus fechas)
    
Por favor indíquenme disponibilidad real y requisitos de membresía.
    `.trim();
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section id="services" className="py-24 bg-ozni-dark text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ozni-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ozni-navy/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-ozni-gold font-bold tracking-[0.2em] uppercase text-sm">El Poder de la Membresía</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Acceso Global Privilegiado</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            A través de nuestra alianza exclusiva, desbloqueamos el verdadero costo del turismo. 
            No pagues publicidad ni intermediarios; paga solo por tu experiencia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {MEMBERSHIP_BENEFITS.map((benefit, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-ozni-gold text-xs font-bold uppercase tracking-wider mb-2 opacity-80 group-hover:opacity-100">
                {benefit.price}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-200">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Destinations Showcase */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-6 gap-4">
            <div>
              <h3 className="text-3xl font-serif mb-2">Destinos Trending</h3>
              <p className="text-gray-400 text-sm">Selecciona un destino para cotizar tu experiencia vía WhatsApp.</p>
            </div>
            <button 
              onClick={() => { setShowCatalog(true); setSelectedOffer(null); }}
              className="text-ozni-gold text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group"
            >
              Explora más de 2,000 destinos 
              <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_DESTINATIONS.map((dest, idx) => (
              <div 
                key={idx} 
                onClick={() => handleDestinationClick(dest.name)}
                className="group relative h-80 overflow-hidden cursor-pointer border border-transparent hover:border-ozni-gold/50 transition-colors"
                title="Cotizar este destino"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <span className="inline-block px-2 py-1 bg-ozni-gold text-ozni-navy text-[10px] font-bold uppercase tracking-wide mb-2">
                    {dest.tag}
                  </span>
                  <h4 className="text-xl font-serif font-bold mb-1 flex items-center gap-2">
                    {dest.name}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-ozni-gold">↗</span>
                  </h4>
                  <p className="text-xs text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {dest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
            <p className="mb-6 text-gray-300 italic">"Viaja más, viaja mejor, viaja inteligente."</p>
            <Button variant="gold" onClick={handleMembershipInquiry}>
              Solicitar Información de Membresía
            </Button>
        </div>

      </div>

      {/* Catalog Modal - Booking Engine Simulator */}
      {showCatalog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowCatalog(false)}></div>
          <div className="relative bg-ozni-dark border border-white/20 w-full max-w-6xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in-up">
            
            {/* Disclaimer Banner */}
            <div className="bg-yellow-600/90 text-white text-xs py-2 px-4 text-center font-bold uppercase tracking-wide z-30">
              {CATALOG_DISCLAIMER}
            </div>

            {/* Modal Header */}
            <div className="p-4 md:p-6 border-b border-white/10 flex justify-between items-center bg-ozni-navy/90 backdrop-blur-sm sticky top-0 z-20">
              <div>
                <h3 className="text-2xl font-serif text-ozni-gold">
                  {selectedOffer ? 'Detalle de Oferta' : 'Simulador de Ahorro Global'}
                </h3>
                <p className="text-xs text-gray-400">
                  {selectedOffer 
                    ? `Ejemplo ilustrativo de membresía para ${selectedOffer.name}` 
                    : 'Ejemplos de precios y ahorros históricos para socios activos.'}
                </p>
              </div>
              <button 
                onClick={() => {
                  if (selectedOffer) setSelectedOffer(null);
                  else setShowCatalog(false);
                }}
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider border border-gray-600 px-4 py-2 rounded-sm hover:border-white"
              >
                {selectedOffer ? '← Volver al Catálogo' : 'Cerrar'}
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto bg-gray-900 custom-scrollbar">
               
               {/* View 1: Offer Details (Like Booking.com but Luxury) */}
               {selectedOffer ? (
                 <div className="flex flex-col md:flex-row h-full">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 h-64 md:h-full relative">
                      <img src={selectedOffer.image} alt={selectedOffer.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
                      <div className="absolute top-6 left-6 bg-red-600 text-white px-3 py-1 text-sm font-bold shadow-lg">
                        AHORRO EST. ${selectedOffer.retailPrice - selectedOffer.memberPrice}
                      </div>
                    </div>
                    
                    {/* Info Side */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gray-900">
                      <span className="text-ozni-gold uppercase tracking-widest text-xs font-bold mb-2">{selectedOffer.region}</span>
                      <h2 className="text-4xl font-serif text-white mb-6">{selectedOffer.name}</h2>
                      
                      <div className="space-y-6 mb-8 border-b border-gray-700 pb-8">
                        <p className="text-gray-300 leading-relaxed">{selectedOffer.description}</p>
                        {selectedOffer.dates && (
                           <div className="flex items-center gap-2 text-gray-400 text-sm">
                             <span>📅 Fechas:</span>
                             <span className="text-white">{selectedOffer.dates}</span>
                           </div>
                        )}
                      </div>

                      <div className="bg-white/5 border border-white/10 p-6 rounded-sm mb-8">
                        <div className="flex justify-between items-center mb-2 text-gray-400 text-sm line-through">
                          <span>Precio Público Est.</span>
                          <span>${selectedOffer.retailPrice}</span>
                        </div>
                        {selectedOffer.pointsApply && (
                          <div className="flex justify-between items-center mb-4 text-ozni-gold text-sm font-bold">
                             <span>- Puntos Aplicables (Ejemplo)</span>
                             <span>-${selectedOffer.pointsApply}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-end border-t border-white/10 pt-4">
                          <span className="text-white font-medium">Precio Referencial Socio</span>
                          <div className="text-right">
                             <span className="text-4xl font-serif text-white font-bold">${selectedOffer.memberPrice}</span>
                             <span className="block text-[10px] text-gray-400">*Sujeto a cambios</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 flex-col sm:flex-row">
                        <Button variant="gold" onClick={() => handleBookOffer(selectedOffer)} className="w-full">
                          Cotizar Precio Actual
                        </Button>
                        <p className="text-xs text-gray-500 text-center sm:text-left mt-2 sm:mt-0 max-w-xs">
                          *Al dar clic, contactarás a un agente para verificar la disponibilidad real de esta oferta.
                        </p>
                      </div>
                    </div>
                 </div>
               ) : (
                 // View 2: Catalog Grid
                 <div className="p-6 md:p-10">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                      {(Object.keys(CATALOG_DATA) as Array<keyof typeof CATALOG_DATA>).map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full border ${
                            activeCategory === category 
                              ? 'bg-ozni-gold text-ozni-navy border-ozni-gold' 
                              : 'text-gray-400 border-gray-700 hover:border-white hover:text-white'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CATALOG_DATA[activeCategory].map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedOffer(item)}
                            className="bg-white/5 border border-white/10 overflow-hidden hover:border-ozni-gold transition-colors cursor-pointer group flex flex-col"
                          >
                            <div className="h-48 relative overflow-hidden">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute top-2 right-2 bg-ozni-navy/80 backdrop-blur-sm px-2 py-1 text-xs font-bold text-white rounded-sm">
                                {item.region}
                              </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                              <h4 className="text-xl font-serif font-bold text-white mb-2">{item.name}</h4>
                              <p className="text-xs text-gray-400 mb-4 line-clamp-2">{item.description}</p>
                              
                              <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-end">
                                <div>
                                  <span className="block text-xs text-gray-500 line-through">Retail: ${item.retailPrice}</span>
                                  <span className="text-xs text-green-400">Ahorro Est. ${item.retailPrice - item.memberPrice}</span>
                                </div>
                                <div className="text-right">
                                  <span className="block text-[10px] text-gray-400 uppercase">Ref. Socio</span>
                                  <span className="text-2xl font-bold text-white">${item.memberPrice}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};