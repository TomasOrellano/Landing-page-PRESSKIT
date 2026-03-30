# 📋 Instrucciones de Configuración - Landing Page Mejorada

## ✅ Cambios Realizados

Se han implementado todas las mejoras de UX solicitadas:

### 1. **Sección de Estadísticas** ✨
- Muestra tus números: 3K+ seguidores, 10+ ciudades, 9 sellos, #1 en Top Charts
- Animaciones profesionales
- Ubicación: Después del Hero, antes de Biografía

### 2. **Próximos Eventos & Giras** 🎵
- Sección nueva con 3 eventos de ejemplo
- Diseño tipo timeline con fechas
- Ubicación: Entre Videos y Galería
- **Editable**: Reemplaza los eventos por los tuyos

### 3. **Mejoras en Formulario de Contacto** 📋
- Integración automática con **EmailJS**
- Campos mejorados con Select para tipo de evento
- Sistema de tabs (DJ Booking / Info / Presskit)
- Validación en cliente
- Sistema de notificaciones

### 4. **Filtros en Galería** 🖼️
- Botones para filtrar por categoría
- Categorías: Todos / Sets en Vivo / Estudio / Eventos
- Filtrado dinámico sin recargar

### 5. **Player de SoundCloud** 🎶
- Logo flotante mejorado
- Links en nueva sección "Sígueme en Redes"

### 6. **Redes Sociales Destacadas** 📱
- Nueva sección visible antes de contacto
- Links directos a Instagram, SoundCloud, Beatport
- Diseño responsivo y atractivo

### 7. **FAQ / Rider Técnico** ❓
- Sección con preguntas frecuentes
- Links a descarga de Presskit
- Información sobre tarifas, duración, equipamiento
- Disponibilidad geográfica

### 8. **Videos con YouTube Embeds Corregidos** 🎬
- Ya no usa URL de watch, ahora incrusta correctamente
- Títulos dinámicos desde YouTube API

## 🔧 CONFIGURACIÓN REQUERIDA

### ⚠️ 1. Configurar EmailJS (Muy Importante!)

EmailJS permite enviar emails automáticamente desde el formulario sin servidor backend.

**Pasos:**

1. **Crear cuenta en EmailJS:**
   - Ve a https://www.emailjs.com/
   - Crea una cuenta gratis
   - Confirma tu email

2. **Obtener Public Key:**
   - Inicia sesión
   - Ve a "Account" > "General"
   - Copia tu **Public Key**

3. **Actualizar en index.html:**
   ```html
   <!-- Busca esta línea (aprox. línea 18) -->
   emailjs.init("Y5jxR9qF7L3K2M0X");
   
   <!-- Reemplaza "Y5jxR9qF7L3K2M0X" con tu Public Key -->
   emailjs.init("TU_PUBLIC_KEY_AQUI");
   ```

4. **Crear Email Service:**
   - En EmailJS Dashboard: "Email Services"
   - Crea un nuevo servicio (pode usar Gmail, Outlook, etc)
   - Copia el **Service ID** (ej: service_abc123)
   
5. **Crear Template de Email:**
   - En "Email Templates"
   - Crea nuevo template con nombre: `template_booking`
   - Variables disponibles en el formulario:
     - {{eventName}} - Nombre del evento
     - {{email}} - Email del solicitante
     - {{phone}} - Teléfono
     - {{eventDate}} - Fecha del evento
     - {{eventType}} - Tipo de evento
     - {{message}} - Mensaje detallado
     - {{to_email}} - Tu email (tomiiorellano@gmail.com)

6. **Actualizar Service ID en script.js:**
   ```javascript
   // Busca la línea en script.js (aprox. línea 410)
   emailjs.send('service_tommyorellano', 'template_booking', templateParams)
   
   // Reemplaza 'service_tommyorellano' con tu Service ID
   emailjs.send('service_abc123', 'template_booking', templateParams)
   ```

### 2. Actualizar Próximos Eventos

En **index.html**, busca la sección `<!-- Events Section -->` y reemplaza los eventos de ejemplo con los tuyos:

```html
<div class="event-card">
    <div class="event-date">
        <div class="date-day">NUMERO</div>
        <div class="date-month">MES (3 letras)</div>
    </div>
    <div class="event-info">
        <h3>Nombre del Evento</h3>
        <p><i class="fas fa-map-marker-alt"></i> Ubicación</p>
        <p><i class="fas fa-clock"></i> Horario</p>
        <a href="#contact" class="btn btn-small"><i class="fas fa-ticket-alt"></i> Información</a>
    </div>
</div>
```

### 3. Categorizar Imágenes de Galería

En **script.js**, actualiza el array `galleryImages` (aprox. línea 90):

```javascript
const galleryImages = [
    { url: 'ruta/imagen1.jpg', category: 'sets-vivo' },
    { url: 'ruta/imagen2.jpg', category: 'eventos' },
    { url: 'ruta/imagen3.jpg', category: 'estudio' },
    // category puede ser: 'sets-vivo', 'estudio', 'eventos'
];
```

### 4. Descargar Presskit desde Google Drive

En **script.js**, busca la función `downloadPreskit()`:

```javascript
function downloadPreskit() {
    window.open('URL_DE_TU_PRESSKIT_PDF', '_blank');
}
```

Reemplaza `URL_DE_TU_PRESSKIT_PDF` con el link directo a tu Presskit en Google Drive.

## 🎨 Personalizaciones Opcionales

### Cambiar Colores
- Color principal: `#00d4ff` (cyan)
- En **style.css** busca y reemplaza este color por el que quieras

### Cambiar fuentes
- Actual: "Inter" desde Google Fonts
- En **index.html** línea 18, cambia el import de Google Fonts

### Agregar más videos
En **script.js**, actualiza el array `youtubeVideos` con tus URLs:

```javascript
const youtubeVideos = [
    'https://youtu.be/VIDEO_ID_1',
    'https://youtu.be/VIDEO_ID_2'
];
```

## 📱 Responsividad

La página es completamente responsiva:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

Todos los cambios se adaptan automáticamente a pantallas pequeñas.

## 🚀 Testing

Para probar localmente:
1. Abre `index.html` en tu navegador
2. Verifica que todas las secciones se ven correctamente
3. Prueba el formulario de contacto
4. Verifica los filtros de galería
5. Revisa en mobile con F12 > Device Toggle

## ⚡ Performance

Optimizaciones incluidas:
- Lazy loading en imágenes
- Animaciones CSS eficientes (AOS)
- Compresión de assets
- Carga asíncrona de datos

## 📞 Contacto Directo

Los usuarios también pueden contactarte vía:
- **Email:** tomiiorellano@gmail.com
- **WhatsApp:** +54 2494 537710
- **Instagram:** @tommyorellano
- **SoundCloud:** tommyorellano
- **Beatport:** Tommy Orellano (#631353)

---

**¿Necesitas ayuda adicional?** Revisa la sección de comentarios en los archivos HTML/CSS/JS para más detalles técnicos.
