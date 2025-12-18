// ... (manten tus imports igual)

function App() {
  // ... (manten el estado de deferredPrompt y handleInstallClick igual)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // NUEVA FUNCIÓN: Captación de Grupos y Eventos (Punta Cana, Cartagena, Europa)
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
          <div className="text-xl font-serif font-bold tracking-wider cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            OZNITRAVEL
          </div>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex gap-8 text-xs uppercase tracking-widest font-medium">
              <button onClick={() => handleScroll('membership')} className="hover:text-ozni-gold transition-colors">Destinos Globales</button>
              <button onClick={() => handleScroll('crew')} className="hover:text-ozni-gold transition-colors">Logística On Shore</button>
              <button onClick={() => handleScroll('contact')} className="hover:text-ozni-gold transition-colors">Contacto</button>
            </div>
            
            <button onClick={handleWhatsAppNav} className="bg-ozni-gold text-ozni-navy px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">
              Reservar Ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero: Ahora cierra ventas de grupos directamente */}
      <Hero 
        onCtaClick={handleGroupTravel} 
        onExploreClick={() => handleScroll('membership')}
      />

      {/* ... (el resto de tus secciones: MembershipSection, VIP, Crew) */}
      <div id="membership">
        <MembershipSection />
      </div>

      <ServiceSection 
        id="vip"
        title="Eventos & Graduaciones"
        subtitle="Especialistas en Punta Cana, Cartagena y Europa. Logística completa para grupos corporativos y estudiantiles con respaldo internacional."
        features={VIP_FEATURES}
        imageSrc="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80" 
        theme="light"
      />
      
      {/* ... (mantén el resto igual) */}
      <Footer />
    </div>
  );
}

export default App;
