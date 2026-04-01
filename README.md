# 🎵 Landing Page de Tommy Orellano - Presskit DJ

## 📌 Versión Mejorada

Esta es la versión **optimizada para UX** de la landing page profesional de Tommy Orellano con múltiples mejoras en experiencia de usuario, diseño y funcionalidad.

## 🎯 Cambios Principales Implementados

### 🛠️ Correcciones recientes
- ✅ `Way To Heaven` path corregido a `Imagen-video/RynthEP.webp` para entornos case-sensitive.
- ✅ Galería: botones de filtro (`Todos`, `Sets en Vivo`, `Estudio`, `Eventos`) añadidos en UI.
- ✅ Filtrado de galería activado con `setupGalleryFilters()` invocado en carga de página.
- ✅ Documentación alineada con el comportamiento actual del sitio.

### ✨ Nuevas Secciones
| Sección | Descripción | Estado |
|---------|-----------|--------|
| 📊 Estadísticas | Muestra números destacados (seguidores, ciudades, top charts) | ✅ Agregado |
| 🎭 Próximos Eventos | Timeline de eventos y giras próximas | ✅ Agregado |
| 🔍 Filtros Galería | Categorizar fotos por tipo de evento | ✅ Agregado |
| 📱 Redes Sociales | Sección dedicada a seguir en redes | ✅ Agregado |
| ❓ FAQ & Rider | Preguntas frecuentes e información técnica | ✅ Agregado |
| 📧 Contacto Mejorado | Tabs para diferentes consultas + EmailJS | ✅ Mejorado |

### 🔧 Mejoras Técnicas
- ✅ **Formulario con EmailJS**: Envío automático de emails sin servidor
- ✅ **YouTube Embeds Corregidos**: Videos incrustados correctamente
- ✅ **Sistema de Tabs**: Navegación mejorada en contacto
- ✅ **Galería Filtrable**: Categorización dinámica de imágenes
- ✅ **Notificaciones Mejoradas**: Feedback visual al usuario
- ✅ **Responsive Design**: Optimizado para todos los dispositivos

## 🚀 Cómo Comienza

1. **Abre el archivo `index.html` en tu navegador**
   ```bash
   # En Windows, simplemente haz doble clic en index.html
   # En Mac/Linux: abre el navegador y arrastra el archivo
   ```

2. **Sigue las instrucciones en `INSTRUCCIONES_CAMBIOS.md`**
   - Configurar EmailJS (📧 muy importante)
   - Personalizar eventos y galería
   - Actualizar links de redes sociales

3. **Verifica que todo funciona**
   - Prueba los filtros de galería
   - Intenta enviar un mensaje en el formulario
   - Revisa en mobile (F12 > Toggle Device)

## 📂 Estructura de Archivos

```
Landing page PRESSKIT/
├── index.html                 # Página principal
├── Imagen-video/              # Carpeta de activos
│   ├── FONDO.jpg             # Imagen de fondo
│   ├── Galeria3.jpg          # Fotos galería
│   ├── Galeria5.jpeg
│   ├── Galeria7.jpeg
│   ├── *.webp                # Covers de releases
│   └── ...
├── Index/
│   ├── style.css             # Estilos CSS
│   ├── script.js             # Lógica JavaScript
│   └── ...
├── INSTRUCCIONES_CAMBIOS.md  # Guía de configuración
└── README.md                 # Este archivo
```

## ⚙️ Requisitos Previos

- **Navegador moderno** (Chrome, Firefox, Safari, Edge)
- **Conexión a internet** (para CDNs y APIs)
- **Cuenta en EmailJS** (para formulario de contacto)

## 🔐 Seguridad

- ✅ No guarda datos sensibles
- ✅ Emails se envían a través de EmailJS
- ✅ No hay datos almacenados en servidor propio
- ✅ Formularios validados en cliente

## 📊 Características por Sección

### Hero
- Título animado con gradiente
- Call-to-action doble (contratar / ver sets)
- Fondo con imagen personalizable
- Animaciones de partículas

### Biografía
- Texto descriptivo sobre Tommy
- Estilo glassmorphism
- Editable desde localStorage (opcional)

### Releases
- Grid de releases desde Beatport
- Covers de álbumes/EPs
- Links directos a descargar

### Videos
- Embeds de YouTube corregidos
- Títulos dinámicos desde YouTube API
- Fallback graceful si falla API

### Estadísticas
- 4 números destacados
- Animaciones al scroll
- Diseño responsivo

### Próximos Eventos
- Tarjetas con fecha destacada
- Información de lugar y hora
- CTA a contacto

### Galería
- **Nueva**: Sistema de filtros
- Categorías: Todos / Sets en Vivo / Estudio / Eventos
- Lightbox simple al hacer clic
- Lazy loading de imágenes

### Redes Sociales
- Links directos a Instagram, SoundCloud, Beatport
- Diseño colorido y atractivo
- Antes de sección de contacto

### Contacto Mejorado
- **3 Tabs:**
  - DJ Booking: Formulario para contratar
  - Info General: Información rápida
  - Presskit: Acceso a mediakit
- **Campos mejorados:**
  - Tipo de evento (select)
  - Teléfono
  - Validación en cliente
- **Integración EmailJS:** Envío automático

### FAQ
- 4 preguntas frecuentes
- Iconos animados
- Responsive grid

## 🎨 Personalización Rápida

### Cambiar Color Principal
Busca `#00d4ff` en `style.css` y reemplaza por tu color:
```css
/* Busca cualquier instancia de */
#00d4ff
/* Y reemplaza con tu color, ej: */
#FF6B35  /* Naranja */
```

### Agregar Tus Imágenes de Galería
En `script.js`, sección `galleryImages`:
```javascript
const galleryImages = [
    { url: 'ruta/a/tu/imagen.jpg', category: 'sets-vivo' },
    // Más imágenes...
];
```

### Actualizar Próximos Eventos
En `index.html`, sección `Events Section`:
```html
<div class="event-card">
    <div class="event-date">
        <div class="date-day">15</div>
        <div class="date-month">ABR</div>
    </div>
    <!-- Reemplaza fecha, nombre, ubicación, hora -->
</div>
```

## 📱 Responsive

La página se adapta automáticamente a:
- **Desktop:** 1920px y más
- **Tablet:** 768px - 1366px  
- **Mobile:** Hasta 767px

Prueba con F12 > Toggle Device Toolbar

## 🔗 Links Útiles

- **EmailJS**: https://www.emailjs.com/
- **Bootstrap CDN**: https://getbootstrap.com/
- **Google Fonts**: https://fonts.google.com/
- **Font Awesome**: https://fontawesome.com/
- **AOS (Animaciones)**: https://michalsnik.github.io/aos/

## 📞 Soporte

- **Email:** tomiiorellano@gmail.com
- **WhatsApp:** +54 2494 537710
- **Instagram:** https://www.instagram.com/tommyorellano/

## 📋 Checklist Final

Antes de usar en producción:

- [ ] Configurar EmailJS Public Key
- [ ] Configurar EmailJS Service ID y Template
- [ ] Actualizar eventos próximos
- [ ] Categorizar imágenes de galería
- [ ] Actualizar Presskit link
- [ ] Probar formulario de contacto
- [ ] Probar filtros de galería
- [ ] Verificar en mobile
- [ ] Verificar velocidad de carga
- [ ] Compartir con Tommy para aprobación final

## 🚀 Deploy

Para publicar online:

1. **GitHub Pages** (Gratis)
   - Crea repositorio `tommyorellano.github.io`
   - Sube estos archivos
   - Tu sitio estará en `https://tommyorellano.github.io`

2. **Netlify** (Recomendado)
   - Conecta tu repositorio
   - Deploy automático
   - Certificado SSL incluido

3. **Tu propio servidor**
   - Sube archivos vía FTP
   - Asegúrate de mantener estructura de carpetas

---

**Versión:** 2.0 - Mejorada for UX  
**Fecha:** Marzo 2026  
**Autor:** Mejoras implementadas por GitHub Copilot  
**Estado:** ✅ Listo para uso
