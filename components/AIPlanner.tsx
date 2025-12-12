import React, { useState } from 'react';
import { generatePersonalizedPlan } from '../services/geminiService';
import { TravelType, GeneratedItinerary } from '../types';
import { Button } from './Button';
import { BRAND_NAME, CONTACT_EMAIL, CONTACT_NUMBER } from '../constants';

export const AIPlanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TravelType>(TravelType.FAMILY_VIP);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedItinerary | null>(null);

  const handleGenerate = async () => {
    if (!userInput.trim()) return;
    
    setLoading(true);
    setResult(null);
    try {
      const plan = await generatePersonalizedPlan(activeTab, userInput);
      setResult(plan);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppInquiry = () => {
    if (!result) return;
    const cleanNumber = CONTACT_NUMBER.startsWith('0') ? CONTACT_NUMBER.substring(1) : CONTACT_NUMBER;
    const phoneNumber = `593${cleanNumber}`;
    const text = `Hola OZNITRAVEL. La IA me sugirió este plan y me interesa:\n\n*${result.title}*\n"${result.description}"\n\nQuiero más detalles.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="concierge" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-ozni-gold font-bold tracking-widest uppercase">Inteligencia Artificial</span>
          <h2 className="text-4xl md:text-5xl font-serif text-ozni-navy mt-4 mb-6">Tu Conserje Digital</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cuéntanos qué buscas y deja que nuestra tecnología diseñe la propuesta perfecta para ti, ya sea en alta mar o en tierra firme.
          </p>
        </div>

        <div className="bg-white shadow-2xl border border-gray-100 p-8 md:p-12 rounded-sm">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 border-b border-gray-200 pb-6">
            <button
              onClick={() => { setActiveTab(TravelType.FAMILY_VIP); setResult(null); }}
              className={`pb-2 text-lg font-medium transition-colors ${
                activeTab === TravelType.FAMILY_VIP 
                  ? 'text-ozni-navy border-b-2 border-ozni-navy' 
                  : 'text-gray-400 hover:text-ozni-navy'
              }`}
            >
              Viajes VIP & Familia
            </button>
            <button
              onClick={() => { setActiveTab(TravelType.CREW_ON_SHORE); setResult(null); }}
              className={`pb-2 text-lg font-medium transition-colors ${
                activeTab === TravelType.CREW_ON_SHORE 
                  ? 'text-ozni-navy border-b-2 border-ozni-navy' 
                  : 'text-gray-400 hover:text-ozni-navy'
              }`}
            >
              Crew on Shore (Guayaquil)
            </button>
          </div>

          {/* Input Area */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-ozni-navy uppercase mb-3">
              {activeTab === TravelType.FAMILY_VIP 
                ? "¿Cuál es tu destino soñado o qué tipo de experiencia buscas?" 
                : "¿Cuánto tiempo libre tienes en Guayaquil y qué te gustaría ver?"}
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={activeTab === TravelType.FAMILY_VIP 
                  ? "Ej: Un resort todo incluido en el Caribe para 5 personas..." 
                  : "Ej: Tengo 4 horas libres y quiero comer algo local y seguro..."}
                className="flex-grow p-4 bg-gray-50 border border-gray-200 focus:outline-none focus:border-ozni-gold transition-colors text-ozni-dark"
              />
              <Button 
                onClick={handleGenerate} 
                disabled={loading || !userInput}
                className="md:w-64 flex items-center justify-center"
              >
                {loading ? (
                  <span className="animate-pulse">Consultando...</span>
                ) : (
                  "Revelar Propuesta"
                )}
              </Button>
            </div>
          </div>

          {/* Result Area */}
          {result && (
            <div className="animate-fade-in bg-ozni-cream p-8 border-l-4 border-ozni-gold">
              <h3 className="text-2xl font-serif text-ozni-navy mb-4 font-bold">{result.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{result.description}"</p>
              
              <div className="mb-8">
                <h4 className="text-sm font-bold text-ozni-navy uppercase mb-3">Lo más destacado:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {result.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-ozni-gold mt-1">✦</span>
                      <span className="text-gray-800 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-300 pt-6 gap-4">
                <p className="text-ozni-navy font-medium">{BRAND_NAME} recomienda:</p>
                <div className="flex gap-4">
                   <Button variant="gold" onClick={handleWhatsAppInquiry}>
                     Reservar por WhatsApp
                   </Button>
                   <button 
                     onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}?subject=Interesado en: ${result.title}`}
                     className="px-6 py-3 border border-ozni-navy text-ozni-navy hover:bg-ozni-navy hover:text-white transition-colors uppercase text-sm tracking-wider font-medium"
                   >
                     Enviar Email
                   </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};