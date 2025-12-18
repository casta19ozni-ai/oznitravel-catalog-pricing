import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ServiceSection } from './components/ServiceSection';
import { MembershipSection } from './components/MembershipSection';
import { AIPlanner } from './components/AIPlanner';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { VIP_FEATURES, CREW_FEATURES, CONTACT_NUMBER } from './constants';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // CAPTACIÓN DE GRUPOS: Punta Cana, Cartagena, Europa (Travorium & Crew on Shore)
  const handleGroupTravel = () => {
    const cleanNumber = CONTACT_NUMBER.startsWith('0') ? CONTACT_NUMBER.substring(1) : CONTACT_NUMBER;
    const message = encodeURIComponent(
      "💎 *SOLICITUD DE EVENTO/GRUPO OZNITRAVEL* 💎\n\n" +
      "Hola, me interesa diseñar una experiencia para:\n" +
      "• Empresa / Evento Corporativo\n" +
      "• Graduación (Punta Cana / Cartagena)\n" +
      "• Tour Escolar / Familiar\n\n" +
      "Respaldo: Alianza Travorium & Crew On Shore."
    );
    window.open(`https://wa.me/593${cleanNumber}?text=${message}`, '_blank');
  };

  const handleWhatsAppNav = () => {
    const cleanNumber = CONTACT_NUMBER.startsWith('0') ? CONTACT_NUMBER.substring(1) : CONTACT_NUMBER;
    window.open(`https://wa.me/593${cleanNumber}?text=${encodeURIComponent("Hola OZNITRAVEL, deseo información sobre membresías de viaje.")}`, '_blank');
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-ozni-dark">
      {/* Navbar con mención a aliados */}
      <nav className="fixed w-full z-50 bg-ozni-navy/95 backdrop-blur-sm text-white py-4 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-xl font-serif font-bold tracking-wider cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            OZNITRAVEL
          </div>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex gap-8 text-xs uppercase tracking-widest font-medium">
              <button onClick={() => handleScroll('membership')} className="hover:text-ozni-gold transition-colors">Destinos Globales</button>
              <button onClick={() => handleScroll('crew')} className="hover:text-ozni-gold transition-colors">Logística On Shore</button>
              <button onClick={() => handleScroll('contact')} className="hover:text-ozni-gold transition-colors">Contacto</button>
            </div>
            
            <div className="flex gap-2">
              {deferredPrompt && (
                <button onClick={handleInstallClick} className="bg-white/10 border border-white/20 text-white px-3 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-ozni-navy transition-colors rounded-sm flex items-center gap-2">
                  <span className="text-ozni-gold">⬇</span> App
                </button>
              )}
              <button onClick={handleWhatsAppNav} className="bg-ozni-gold text-ozni-navy px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">
                Reservar Ahora
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero: Cierre de ventas directo */}
      <Hero 
        onCtaClick={handleGroupTravel} 
        onExploreClick={() => handleScroll('membership')}
      />

      <div className="bg-white py-16 text-center px-4">
         <p className="max-w-3xl mx-auto text-xl md:text-2xl font-serif text-ozni-navy leading-relaxed">
            "Transformamos la forma de viajar de quienes viven en el mar y de quienes sueñan con él."
         </p>
      </div>

      <div id="membership">
        <MembershipSection />
      </div>

      <ServiceSection 
        id="vip"
        title="Eventos & Graduaciones"
        subtitle="Especialistas en Punta Cana, Cartagena y Europa. Logística completa para grupos corporativos y estudiantiles con respaldo internacional de Travorium."
        features={VIP_FEATURES}
        imageSrc="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80" 
        theme="light"
      />

      <ServiceSection 
        id="crew"
        title="Crew on Shore"
        subtitle="Servicio exclusivo para tripulantes en Guayaquil. Desconexión segura y logística garantizada por nuestro equipo local."
        features={CREW_FEATURES}
        imageSrc="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
        reversed={true}
        theme="dark"
      />

      <div id="concierge">
        <AIPlanner />
      </div>

      <div id="contact">
        <RegistrationForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
