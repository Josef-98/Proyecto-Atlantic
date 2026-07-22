# Plan de trabajo — Proyecto Atlantic

> Documento **vivo**: el plan por fases + el orden de secciones de la home +
> las decisiones pendientes. Mantener al día a medida que avanzamos.

## Fases

**Fase A — Home completa (contenido de ejemplo)** ✅ COMPLETA
Montar todas las secciones de la home con contenido falso nuestro.

**Fase B — Sitio navegable** ✅ COMPLETA
Todas las páginas del menú creadas (sin 404), menú móvil y WhatsApp listos.

Progreso:
- `/flota` ✅ (catálogo; cada buque abre su ficha en un modal centrado)
- `/servicios` ✅ (servicios detallados, filas alternadas, fotos enmarcadas)
- `/sobre-nosotros` ✅ (historia, hitos, certificaciones)
- `/contacto` ✅ (datos + mapa de Google incrustado)
- Menú hamburguesa (móvil) ✅
- Botón flotante de WhatsApp ✅ (interruptor en site.ts, encendido en la demo)

**Fase C — Pulir y publicar** ← en curso
- Repaso de responsive ✅
- Deploy en Vercel ✅ → https://proyectoatlanticmarine.vercel.app/
- Pendiente: retoques (favicon, imagen de compartir) y, cuando llegue, sustituir el
  contenido de ejemplo por el real que pase el padre de Josef.

## Orden de secciones de la home

1. Hero (foto grande) — ✅
2. Contadores de credibilidad — ✅
3. Servicios (tarjetas con foto) — ✅
4. **Nuestros buques / flota** (tarjetas de barco) — ✅ *corazón del sitio*
5. **What makes us different** (iconos — estilo distinto, da respiro) — ✅
6. **Nuestro compromiso** (tarjetas con foto) — ✅
7. Footer (marca + zona "Ciudad Ojeda, Zulia" + navegación + copyright) — ✅

Idea: alternar estilos (foto → barcos → iconos → foto) para que no se sienta repetido.

## Decisiones pendientes / NO olvidar

- **Mapa de Google + dirección EXACTA → solo en CONTACTO.** El footer sí muestra la
  zona general (Ciudad Ojeda, Estado Zulia) como contexto rápido, pero no la calle. El
  mapa se monta en Fase B; evaluar incrustado vs. versión ligera.
- **Versión móvil / responsive:** pasada dedicada + menú hamburguesa (Fase C).
- **WhatsApp:** interruptor en `src/config/site.ts`, hoy **encendido** con número de
  ejemplo para la demo; si el padre de Josef no lo quiere, se apaga (`enabled: false`).
## Visibilidad en Google y retoques (futuro)

> Objetivo de Josef: que al buscar **"Atlantic Marine"** en Venezuela, la web salga en Google.

- **Indexación / SEO:** dar de alta la web en **Google Search Console** y esperar a que
  Google la rastree (días/semanas). Es lo que hace que aparezca en las búsquedas.
- **Google Business Profile:** registrar el negocio en google.com/business para salir en
  **Google Maps** al buscar el nombre. Gratis, externo a la web; luego se puede enlazar
  el perfil desde Contacto.
- **Imagen de compartir (Open Graph / og:image):** la miniatura que aparece al pegar el
  link en WhatsApp/redes. Hoy no hay; poner una foto del astillero + el nombre.
- **Favicon propio:** el iconito de la pestaña (hoy es el de Astro); poner uno de
  Atlantic Marine (ancla o iniciales).
