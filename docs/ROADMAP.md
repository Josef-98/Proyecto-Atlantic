# Plan de trabajo — Proyecto Atlantic

> Documento **vivo**: el plan por fases + el orden de secciones de la home +
> las decisiones pendientes. Mantener al día a medida que avanzamos.

## Fases

**Fase A — Home completa (contenido de ejemplo)** ← en curso
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

**Fase C — Pulir y publicar**
Repaso de diseño, accesibilidad y responsive. Deploy en Vercel. Después, sustituir
el contenido de ejemplo por el real cuando lo pase el padre de Josef.

## Orden de secciones de la home

1. Hero (foto grande) — ✅
2. Contadores de credibilidad — ✅
3. Servicios (tarjetas con foto) — ✅
4. **Nuestros buques / flota** (tarjetas de barco) — ⬜ siguiente · *corazón del sitio*
5. **What makes us different** (iconos — estilo distinto, da respiro) — ⬜
6. **Nuestro compromiso** (tarjetas con foto) — ⬜
7. Footer (marca + zona "Ciudad Ojeda, Zulia" + navegación + copyright) — ✅

Idea: alternar estilos (foto → barcos → iconos → foto) para que no se sienta repetido.

## Decisiones pendientes / NO olvidar

- **Mapa de Google + dirección EXACTA → solo en CONTACTO.** El footer sí muestra la
  zona general (Ciudad Ojeda, Estado Zulia) como contexto rápido, pero no la calle. El
  mapa se monta en Fase B; evaluar incrustado vs. versión ligera.
- **Versión móvil / responsive:** pasada dedicada + menú hamburguesa (Fase C).
- **WhatsApp:** interruptor en `src/config/site.ts`, hoy **encendido** con número de
  ejemplo para la demo; si el padre de Josef no lo quiere, se apaga (`enabled: false`).
- **Google Business Profile (futuro):** registrar la empresa en google.com/business
  para que aparezca en Google Maps al buscar el nombre. Es externo a la web; después
  se puede enlazar el perfil desde Contacto.
