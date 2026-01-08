# OZNITRAVEL - Documentación Técnica

## Arquitectura del Sistema

### 1. STACK TECNOLÓGICO

**Frontend:**
- HTML5 con semántica moderna
- TailwindCSS para estilos responsive
- JavaScript Vanilla (ES6+)
- Lazy Loading de imágenes con srcset

**Futura Integración Backend:**
- Node.js / Supabase (recomendado)
- API REST / GraphQL
- PostgreSQL / MongoDB para base de datos

---

## 2. INTEGRACIONES API (PLACEHOLDERS)

### 2.1 TRAVELPAYOUTS API
**Propósito:** Búsqueda y reserva de vuelos, hoteles y paquetes turísticos
**Documentación:** https://www.travelpayouts.com/developers/api
**Endpoint Base:** `https://api.travelpayouts.com/v2/`

**Implementación Sugerida:**
```javascript
// Placeholder: Búsqueda de hoteles
async function searchHotels(city, checkIn, checkOut) {
  const API_KEY = process.env.TRAVELPAYOUTS_API_KEY;
  const response = await fetch(
    `https://api.travelpayouts.com/v2/prices/week-matrix?` +
    `currency=USD&origin=${city}&show_to_affiliates=true&token=${API_KEY}`
  );
  return await response.json();
}
```

**Variables de Entorno Requeridas:**
- `TRAVELPAYOUTS_API_KEY`
- `TRAVELPAYOUTS_MARKER` (ID de afiliado)

---

### 2.2 KLOOK API
**Propósito:** Actividades, tours y experiencias locales
**Documentación:** https://www.klook.com/tetris/
**Endpoint Base:** `https://api.klook.com/v1/`

**Implementación Sugerida:**
```javascript
// Placeholder: Búsqueda de actividades
async function searchActivities(destination, date) {
  const API_KEY = process.env.KLOOK_API_KEY;
  const response = await fetch(
    `https://api.klook.com/v1/activities/search?` +
    `destination=${destination}&date=${date}`,
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return await response.json();
}
```

**Variables de Entorno Requeridas:**
- `KLOOK_API_KEY`
- `KLOOK_SECRET`

---

### 2.3 KIWI API (Tequila)
**Propósito:** Motor de búsqueda de vuelos avanzado
**Documentación:** https://docs.kiwi.com/
**Endpoint Base:** `https://api.tequila.kiwi.com/`

**Implementación Sugerida:**
```javascript
// Placeholder: Búsqueda de vuelos multidestino
async function searchFlights(from, to, departDate, returnDate) {
  const API_KEY = process.env.KIWI_API_KEY;
  const response = await fetch(
    `https://api.tequila.kiwi.com/v2/search?` +
    `fly_from=${from}&fly_to=${to}&date_from=${departDate}&date_to=${returnDate}`,
    {
      headers: {
        'apikey': API_KEY
      }
    }
  );
  return await response.json();
}
```

**Variables de Entorno Requeridas:**
- `KIWI_API_KEY`

---

## 3. AUTOMATIZACIÓN DE MARKETING

### 3.1 MAILCHIMP / SENDGRID
**Propósito:** Email marketing y campañas automatizadas

**Flujos Automatizados Sugeridos:**
1. **Bienvenida:** Email al registrarse en membresía
2. **Confirmación de Reserva:** Detalles del itinerario
3. **Pre-viaje:** Recordatorios 7 días antes
4. **Post-viaje:** Encuesta de satisfacción + incentivos

**Implementación Mailchimp:**
```javascript
// Placeholder: Agregar contacto a lista
async function addToMailingList(email, name, membership) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  const response = await fetch(
    `https://us1.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name.split(' ')[0],
          LNAME: name.split(' ')[1] || '',
          MEMBERSHIP: membership
        }
      })
    }
  );
  return await response.json();
}
```

**Variables de Entorno:**
- `MAILCHIMP_API_KEY`
- `MAILCHIMP_LIST_ID`
- `SENDGRID_API_KEY` (alternativa)

---

### 3.2 WHATSAPP BUSINESS API
**Propósito:** Notificaciones en tiempo real y atención al cliente
**Documentación:** https://developers.facebook.com/docs/whatsapp

**Casos de Uso:**
1. Confirmaciones de reserva instantáneas
2. Recordatorios de check-in
3. Soporte de conserje 24/7
4. Ofertas personalizadas

**Implementación Sugerida:**
```javascript
// Placeholder: Enviar mensaje de confirmación
async function sendWhatsAppConfirmation(phoneNumber, bookingDetails) {
  const API_KEY = process.env.WHATSAPP_BUSINESS_TOKEN;
  const PHONE_ID = process.env.WHATSAPP_PHONE_ID;

  const response = await fetch(
    `https://graph.facebook.com/v18.0/${PHONE_ID}/messages`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: phoneNumber,
        type: 'template',
        template: {
          name: 'booking_confirmation',
          language: { code: 'es' },
          components: [
            {
              type: 'body',
              parameters: [
                { type: 'text', text: bookingDetails.destination },
                { type: 'text', text: bookingDetails.date }
              ]
            }
          ]
        }
      })
    }
  );
  return await response.json();
}
```

**Variables de Entorno:**
- `WHATSAPP_BUSINESS_TOKEN`
- `WHATSAPP_PHONE_ID`
- `WHATSAPP_BUSINESS_ACCOUNT_ID`

---

## 4. ANALÍTICA AVANZADA

### 4.1 GOOGLE ANALYTICS 4 (GA4)
**Eventos Críticos Implementados:**

```javascript
// Ya incluido en el código con trackEvent()
trackEvent('page_view', 'home');
trackEvent('cta_click', 'nav_reservar');
trackEvent('membership_click', 'platinum');
trackEvent('destination_click', 'dubai');
trackEvent('crew_service', 'express');
trackEvent('concierge_inquiry', 'custom');
trackEvent('form_submission', 'membership_request');
trackEvent('cookie_consent', 'accepted');
trackEvent('whatsapp_fab', 'click');
```

**Configuración GA4:**
1. Crear propiedad GA4
2. Obtener Measurement ID (G-XXXXXXXXXX)
3. Agregar al `<head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### 4.2 MIXPANEL
**Propósito:** Análisis de comportamiento de usuarios y funnels de conversión

**Configuración Mixpanel:**
```html
<!-- Mixpanel -->
<script type="text/javascript">
(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\///)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);

mixpanel.init('YOUR_PROJECT_TOKEN');
</script>
```

**Variables de Entorno:**
- `MIXPANEL_PROJECT_TOKEN`

---

## 5. ARQUITECTURA CRM MODULAR (API-FIRST)

### Módulos del Sistema:

#### 5.1 MÓDULO USUARIOS
**Endpoints:**
- `POST /api/users/register` - Registro de nuevos usuarios
- `POST /api/users/login` - Autenticación
- `GET /api/users/:id` - Perfil de usuario
- `PUT /api/users/:id` - Actualizar perfil
- `GET /api/users/:id/memberships` - Membresías activas

**Esquema de Datos:**
```javascript
{
  id: UUID,
  name: String,
  email: String (unique),
  phone: String,
  membership_type: Enum['silver', 'platinum', 'titanium'],
  membership_start: Date,
  membership_end: Date,
  points_balance: Integer,
  created_at: Timestamp,
  updated_at: Timestamp
}
```

---

#### 5.2 MÓDULO RESERVAS
**Endpoints:**
- `POST /api/bookings` - Crear reserva
- `GET /api/bookings/:id` - Detalle de reserva
- `GET /api/bookings/user/:userId` - Historial de usuario
- `PUT /api/bookings/:id/cancel` - Cancelar reserva
- `POST /api/bookings/:id/modify` - Modificar reserva

**Esquema de Datos:**
```javascript
{
  id: UUID,
  user_id: UUID (FK),
  booking_type: Enum['hotel', 'flight', 'tour', 'package'],
  destination: String,
  check_in: Date,
  check_out: Date,
  guests: Integer,
  total_price: Decimal,
  points_used: Integer,
  status: Enum['pending', 'confirmed', 'cancelled'],
  api_provider: String, // travelpayouts, klook, kiwi
  external_booking_id: String,
  created_at: Timestamp
}
```

---

#### 5.3 MÓDULO MARKETING
**Endpoints:**
- `POST /api/marketing/campaigns` - Crear campaña
- `GET /api/marketing/campaigns/:id` - Detalle de campaña
- `POST /api/marketing/send-email` - Enviar email
- `POST /api/marketing/send-whatsapp` - Enviar WhatsApp
- `GET /api/marketing/analytics` - Métricas de campaña

**Esquema de Datos:**
```javascript
{
  id: UUID,
  campaign_name: String,
  campaign_type: Enum['email', 'whatsapp', 'sms'],
  target_segment: String, // 'all', 'platinum', 'new_users'
  message_template: String,
  sent_count: Integer,
  open_rate: Decimal,
  click_rate: Decimal,
  conversion_rate: Decimal,
  created_at: Timestamp
}
```

---

#### 5.4 MÓDULO CONSERJERÍA
**Endpoints:**
- `POST /api/concierge/inquiries` - Nueva consulta
- `GET /api/concierge/inquiries/:id` - Ver consulta
- `PUT /api/concierge/inquiries/:id/respond` - Responder
- `GET /api/concierge/inquiries/user/:userId` - Historial

**Esquema de Datos:**
```javascript
{
  id: UUID,
  user_id: UUID (FK),
  inquiry_type: Enum['destination', 'crew_shore', 'custom'],
  message: Text,
  destination: String (nullable),
  response: Text (nullable),
  status: Enum['pending', 'in_progress', 'resolved'],
  assigned_to: String (nullable),
  created_at: Timestamp,
  resolved_at: Timestamp (nullable)
}
```

---

## 6. SEGURIDAD Y CUMPLIMIENTO

### 6.1 SEGURIDAD FRONTEND
✅ **Implementado:**
- No se almacenan datos sensibles en localStorage (solo preferencias GDPR)
- Validación de formularios en cliente
- HTTPS obligatorio (producción)
- CSP (Content Security Policy) recomendado

### 6.2 SEGURIDAD BACKEND (Pendiente)
🔒 **Recomendaciones:**
- Encriptación SSL/TLS para todas las APIs
- Tokens JWT para autenticación
- Rate limiting en endpoints públicos
- Validación de input en servidor
- Sanitización de datos
- Logs de auditoría

### 6.3 CUMPLIMIENTO GDPR
✅ **Implementado:**
- Banner de consentimiento de cookies
- Política de privacidad accesible
- Opción de rechazar cookies

🔒 **Pendiente Backend:**
- Derecho al olvido (eliminación de datos)
- Exportación de datos del usuario
- Registro de consentimientos
- Encriptación de datos personales en BD

---

## 7. PERFORMANCE Y OPTIMIZACIÓN

### 7.1 IMÁGENES
✅ **Implementado:**
- Lazy loading (loading="lazy")
- Responsive images con srcset
- Formatos optimizados (WebP recomendado)
- CDN de Unsplash

### 7.2 FRONTEND
✅ **Implementado:**
- Minificación CSS/JS (producción)
- Font preconnect
- Smooth scrolling CSS
- Animaciones GPU-accelerated (transform, opacity)

### 7.3 MÉTRICAS OBJETIVO
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **TTI (Time to Interactive):** < 3.5s

---

## 8. ROADMAP DE IMPLEMENTACIÓN

### FASE 1: FOUNDATION (COMPLETADO)
✅ Diseño premium responsive
✅ Accesibilidad WCAG
✅ Lazy loading de imágenes
✅ Analytics placeholders
✅ Banner GDPR

### FASE 2: API INTEGRATIONS (Pendiente)
- [ ] Configurar APIs (Travelpayouts, Klook, Kiwi)
- [ ] Implementar búsqueda de hoteles
- [ ] Implementar búsqueda de vuelos
- [ ] Implementar búsqueda de actividades
- [ ] Sincronizar con sistema de puntos Travorium

### FASE 3: BACKEND & CRM (Pendiente)
- [ ] Setup Supabase / Node.js
- [ ] Implementar módulo Usuarios
- [ ] Implementar módulo Reservas
- [ ] Implementar módulo Marketing
- [ ] Implementar módulo Conserjería

### FASE 4: AUTOMATION (Pendiente)
- [ ] Configurar Mailchimp/SendGrid
- [ ] Configurar WhatsApp Business API
- [ ] Crear templates de emails
- [ ] Crear flujos automáticos

### FASE 5: ANALYTICS & OPTIMIZATION (Pendiente)
- [ ] Configurar GA4
- [ ] Configurar Mixpanel
- [ ] Implementar A/B testing
- [ ] Optimización de conversión

---

## 9. VARIABLES DE ENTORNO COMPLETAS

```env
# APIs Externas
TRAVELPAYOUTS_API_KEY=
TRAVELPAYOUTS_MARKER=
KLOOK_API_KEY=
KLOOK_SECRET=
KIWI_API_KEY=

# Marketing
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
SENDGRID_API_KEY=
WHATSAPP_BUSINESS_TOKEN=
WHATSAPP_PHONE_ID=
WHATSAPP_BUSINESS_ACCOUNT_ID=

# Analytics
GA4_MEASUREMENT_ID=
MIXPANEL_PROJECT_TOKEN=

# Base de Datos
DATABASE_URL=
DATABASE_PASSWORD=

# Seguridad
JWT_SECRET=
ENCRYPTION_KEY=

# General
NODE_ENV=production
API_BASE_URL=https://api.oznitravel.com
FRONTEND_URL=https://oznitravel.com
```

---

## 10. CONTACTO TÉCNICO

Para consultas técnicas sobre implementación:
- **Plataforma:** OZNITRAVEL
- **Email Soporte:** dev@oznitravel.com (pendiente)
- **Documentación:** Este archivo + comentarios en código

---

**Última Actualización:** 2026-01-08
**Versión:** 1.0.0
**Estado:** Diseño Frontend Completado + Documentación API Ready
