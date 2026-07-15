# Plan de trabajo — Proyecto Atlantic

> Documento **vivo**: el plan por fases + el orden de secciones de la home +
> las decisiones pendientes. Mantener al día a medida que avanzamos.

## Fases

**Fase A — Home completa (contenido de ejemplo)** ← en curso
Montar todas las secciones de la home con contenido falso nuestro.

**Fase B — Sitio navegable**
Crear las páginas del menú (Servicios · Flota · Sobre nosotros · Contacto) para que
no den 404. Menú hamburguesa (móvil) + botón flotante de WhatsApp (apagado).

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
7. Footer (marca + navegación + copyright, **sin** dirección) — ⬜

Idea: alternar estilos (foto → barcos → iconos → foto) para que no se sienta repetido.

## Decisiones pendientes / NO olvidar

- **Mapa de Google + dirección → SOLO en la página de CONTACTO** (no en la home ni en
  el footer). El mapa se monta en Fase B; evaluar incrustado vs. versión ligera.
- **Versión móvil / responsive:** pasada dedicada + menú hamburguesa (Fase C).
- **WhatsApp:** interruptor en `src/config/site.ts`, hoy apagado; se decide con el
  padre de Josef.
