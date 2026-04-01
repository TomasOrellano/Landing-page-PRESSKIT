# Revisión del código base y tareas propuestas

## Hallazgos principales

1. **Error tipográfico con impacto visual**: la release `Way To Heaven` referencia `../Imagen-video/RYNTHEP.webp`, pero el archivo existente es `Imagen-video/RynthEP.webp` (diferencia en mayúsculas/minúsculas y orden de letras), lo que rompe la portada en entornos case-sensitive.
2. **Falla funcional**: existe la función `setupGalleryFilters()` en JavaScript, pero no se invoca en la inicialización y en el HTML no hay controles `.filter-btn`, por lo que la funcionalidad de filtros no opera.
3. **Discrepancia entre documentación y producto**: el README afirma que hay sección de FAQ y filtros de galería implementados, pero en `index.html` no aparece una sección FAQ ni botones de filtro.
4. **Cobertura de pruebas insuficiente**: no hay pruebas automatizadas que detecten regresiones en assets, enlaces o funcionalidades declaradas.

---

## Tarea 1 — Corregir error tipográfico

**Título:** Corregir nombre/ruta de imagen de release "Way To Heaven".

**Problema:** La ruta de imagen `../Imagen-video/RYNTHEP.webp` no coincide con el archivo real `RynthEP.webp`.

**Propuesta de implementación:**
- Ajustar la ruta en `Index/script.js` para que coincida exactamente con el nombre del archivo real.
- Estandarizar convención de nombres para assets (por ejemplo, `kebab-case` o `PascalCase`) y aplicar validación manual de coincidencia.

**Criterios de aceptación:**
- La tarjeta de `Way To Heaven` carga portada sin errores 404.
- No hay rutas rotas de imágenes en la sección de releases.

---

## Tarea 2 — Corregir una falla funcional

**Título:** Activar y completar la funcionalidad de filtros de galería.

**Problema:** `setupGalleryFilters()` no se ejecuta y faltan los botones de filtro en la UI.

**Propuesta de implementación:**
- Agregar los botones de filtro en `index.html` con clase `.filter-btn` y atributo `data-filter`.
- Invocar `setupGalleryFilters()` dentro de `DOMContentLoaded` en `Index/script.js`.
- Verificar que los elementos de galería tengan clases de categoría coherentes.

**Criterios de aceptación:**
- Al hacer clic en cada filtro, solo se muestran elementos de su categoría.
- Existe estado visual activo del filtro seleccionado.
- El filtro "Todos" restaura la vista completa.

---

## Tarea 3 — Corregir discrepancia en comentarios/documentación

**Título:** Alinear README con funcionalidades realmente implementadas.

**Problema:** El README comunica funcionalidades (FAQ, filtros listos) que no están visibles/operativas en el HTML actual.

**Propuesta de implementación:**
- Actualizar `README.md` para reflejar el estado real del proyecto.
- Marcar como "pendiente" lo que aún no está implementado o, alternativamente, implementar lo documentado.
- Revisar comentarios en el código para evitar afirmaciones que no correspondan al estado actual.

**Criterios de aceptación:**
- README describe únicamente funciones existentes o explícitamente etiquetadas como pendientes.
- No hay contradicciones entre README, comentarios y comportamiento de la web.

---

## Tarea 4 — Mejorar una prueba

**Título:** Agregar prueba automatizada liviana de humo para contenidos críticos (sin frameworks nuevos).

**Problema:** No hay pruebas que validen presencia de secciones clave y carga de assets.

**Propuesta de implementación:**
- Crear un script simple (por ejemplo `scripts/smoke-check.sh`) que verifique:
  - Que todos los assets locales referenciados en `index.html` y `Index/script.js` existan en disco.
  - Que existan en el HTML los contenedores clave (`#releasesGrid`, `#videosGrid`, `#galleryGrid`).
  - Que, al implementar filtros, también exista al menos un botón `.filter-btn`.
- Ejecutarlo en CI o localmente con un comando único (por ejemplo `bash scripts/smoke-check.sh`).

**Criterios de aceptación:**
- La prueba falla si detecta rutas locales inexistentes (como portadas mal referenciadas).
- La prueba falla si faltan contenedores críticos o la UI mínima de filtros una vez implementada.
- La prueba se ejecuta localmente con un solo comando documentado y sin instalar frameworks extra.
