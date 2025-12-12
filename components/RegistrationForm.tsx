import React, { useState } from 'react';
import { Button } from './Button';
import { TravelType } from '../types';
import { CONTACT_EMAIL, CONTACT_NUMBER } from '../constants';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: TravelType.FAMILY_VIP,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `
Hola *OZNITRAVEL*, quisiera registrarme e iniciar mi viaje.
    
📋 *Mis Datos:*
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Interés:* ${formData.type === TravelType.FAMILY_VIP ? 'Viajes VIP & Familia' : 'Crew on Shore'}
    
📝 *Mensaje:*
${formData.message}
    `.trim();

    // Format phone number (remove leading 0, add 593)
    const cleanNumber = CONTACT_NUMBER.startsWith('0') ? CONTACT_NUMBER.substring(1) : CONTACT_NUMBER;
    const phoneNumber = `593${cleanNumber}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp
    window.open(url, '_blank');
    
    // Show success state in UI
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-ozni-navy text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl animate-fade-in-up">
          <div className="w-20 h-20 bg-ozni-gold rounded-full flex items-center justify-center mx-auto mb-6 text-ozni-navy text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">Solicitud Iniciada</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Hemos abierto un chat de WhatsApp con tu solicitud. Si no se abrió, por favor envía el mensaje para que un asesor personal confirme tu registro.
          </p>
          <div className="p-6 border border-white/20 bg-white/5 rounded-sm">
            <p className="text-sm uppercase tracking-widest text-ozni-gold mb-2">Contacto Directo</p>
            <p className="text-xl mb-1">{CONTACT_NUMBER}</p>
            <p className="text-gray-400">{CONTACT_EMAIL}</p>
          </div>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm border-b border-ozni-gold text-ozni-gold hover:text-white transition-colors pb-1"
          >
            Enviar otra solicitud
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-ozni-gold font-bold tracking-widest uppercase mb-4 text-sm">Membresía & Contacto</h2>
            <h3 className="text-4xl font-serif text-ozni-navy font-bold mb-6">Inicia tu Viaje</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Déjanos tus datos para acceder a nuestras tarifas preferenciales o coordinar tu desembarque en Guayaquil. Te contactaremos de inmediato.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ozni-navy text-ozni-gold flex items-center justify-center shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-bold text-ozni-navy">Llámanos / WhatsApp</p>
                  <a href={`https://wa.me/593${CONTACT_NUMBER.startsWith('0') ? CONTACT_NUMBER.substring(1) : CONTACT_NUMBER}`} className="text-gray-600 hover:text-ozni-gold transition-colors">
                    {CONTACT_NUMBER}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ozni-navy text-ozni-gold flex items-center justify-center shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-bold text-ozni-navy">Correo Electrónico</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 hover:text-ozni-gold transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 shadow-xl border-t-4 border-ozni-gold">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-ozni-navy mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-ozni-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ozni-navy mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-ozni-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-ozni-navy mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-ozni-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ozni-navy mb-2">Interés Principal</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-ozni-gold transition-colors"
                  >
                    <option value={TravelType.FAMILY_VIP}>Viajes VIP & Familia</option>
                    <option value={TravelType.CREW_ON_SHORE}>Crew on Shore (Guayaquil)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-ozni-navy mb-2">Detalles Adicionales</label>
                <textarea 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre fechas, número de personas o requerimientos especiales..."
                  className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-ozni-gold transition-colors"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Continuar en WhatsApp
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};