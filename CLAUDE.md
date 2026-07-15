# Proyecto Atlantic — Reglas del proyecto

## Qué es esto

Web corporativa de **Atlantic Marine**, un astillero naval en Venezuela (propiedad
del padre de Josef). Hoy no tienen web.

Esta primera versión es un **POC con contenido 100% falso** (texto genérico + fotos
de stock con licencia libre) para enseñárselo al padre de Josef y conseguir su
aprobación. Cuando la apruebe, llegará el contenido real.

Es, sobre todo, un **proyecto de aprendizaje**: el objetivo es que Josef aprenda
desarrollo web, no solo que la web quede hecha. Josef es Data Engineer (Snowflake,
dbt, Python), programa y usa Git a diario, pero es **nuevo en HTML/CSS y en el
ecosistema web**.

> ⚠️ El nombre correcto es **Atlantic Marine** (con "c"). El brief original escribe
> "Atlantis" por error. Nunca escribir "Atlantis" en código, copys, títulos ni docs.

## Reglas de colaboración (INNEGOCIABLES)

1. **Pasos pequeños.** Un componente o una sección por vez. Parar y esperar
   confirmación de Josef antes de seguir.
2. **DESPUÉS de escribir cada bloque de código, explicar SIEMPRE** (no antes):
   - qué hace cada parte,
   - por qué se eligió ESA etiqueta HTML / ESA clase de Tailwind / ESE patrón,
   - qué alternativas se descartaron y por qué,
   - qué error común evita este enfoque.
3. Explicaciones **cortas y en lenguaje llano**. Josef sabe programar, pero asume
   que no sabe nada de HTML, CSS ni web.
4. Al usar un concepto nuevo (flexbox, grid, semantic HTML, media queries, viewport,
   cascade, specificity, box model...), marcarlo con `📚 CONCEPTO NUEVO:` y
   explicarlo en 3-4 líneas.
5. **Nunca hacer commit automáticamente.** Proponer el mensaje de commit y esperar
   a que Josef lo apruebe.
6. Si Josef pide una mala práctica, decírselo y discutirlo, no obedecer sin más.

## Flujo de trabajo

- **Ver en local mientras se construye:** levantar `astro dev` y trabajar con el
  navegador abierto en `localhost`, para que Josef vea cada cambio en vivo.
- **Desplegar (Vercel) va después:** primero construir y pulir en local; el deploy
  llega cuando Josef esté contento con lo que ve.

## Stack

Astro + Tailwind CSS + TypeScript. Deploy en Vercel. Repo público en GitHub
(github.com/Josef-98/Proyecto-Atlantic). Sin backend, sin base de datos, sin CMS.

## Restricciones no negociables

- **Rendimiento como parte del craft.** Las webs top del mundo son rápidas; la nuestra
  también. No es un tema de "conexión en Venezuela", es calidad profesional. Objetivo
  LCP < 2,5 s. JS solo donde aporte a la experiencia (islands de Astro), nunca por
  defecto. Imágenes optimizadas y en formato moderno.
- **Accesibilidad de serie:** contraste AA, navegación por teclado, alt text, áreas
  táctiles grandes. No como parche al final.
- **Responsive / móvil (PENDIENTE — no olvidar):** la web debe verse impecable en
  móvil. Habrá una pasada dedicada de responsive + menú hamburguesa tras montar la
  estructura de escritorio.
- **Contenido separado del código** en `src/content/` (o similar). Cuando llegue el
  contenido real, debe cambiarse sin tocar código.
- **Preparado para bilingüe ES/EN** sin reescritura. El POC sale solo en español.
- Un banner visible **"DEMO — contenido de ejemplo"** mientras sea POC.
- **Sin** carruseles. **Sin** WebGL/3D. **Sin** tipografía animada. **Sin** formas
  orgánicas/blobs. En B2B naval, la sobriedad transmite confianza.
- **Fotos de stock solo con licencia libre** (Unsplash, Pexels). NUNCA fotos de la
  competencia (riesgo legal real si el POC se aprueba con ellas dentro).

## Contacto / WhatsApp (decisión pendiente)

- WhatsApp es el canal de contacto principal en Venezuela. Los teléfonos llevan
  prefijo **+58**. Dominio **.com**.
- **PERO** está sin decidir si el padre de Josef quiere que le escriban directamente.
  Por eso: construir el WhatsApp (`wa.me`, botón flotante) como un **interruptor de
  configuración** en el archivo de contenido — número + "mostrar sí/no". Hoy queda
  **apagado o con número de ejemplo**; se activa cambiando una línea, sin tocar código.

## Dirección visual

Oscura y cinematográfica: azul marino profundo / grafito / acero. Serio, industrial,
de confianza. Sin colorines. La tipografía grande y contundente y las fotos hacen el
trabajo. Mucho espacio en blanco. Sistema de diseño con **design tokens** desde el día uno.

## Arquitectura de contenido del sector (qué construir)

- La **flota/portfolio de buques es el corazón del sitio**: un catálogo, no una
  galería. Cada barco con foto, nombre, tipo y ficha.
- **Contadores de credibilidad** en la home (buques construidos, años en el sector...).
- **La antigüedad como argumento de venta**, en el hero.
- **Servicios en bloques de 3-4**, cada uno con titular corto + una frase.
- **Certificaciones, clasificadoras y clientes** como sellos de confianza.
- **Teléfono clicable** (`tel:`) en la cabecera.
- Sitemap del POC: `Inicio` · `Servicios` · `Flota / Proyectos` · `Sobre nosotros` · `Contacto`.

## Referencias e investigación

Webs del sector que usamos como guía (arquitectura de contenido a replicar):

- https://atlantic-marine.es/
- https://gondan.com/en/
- https://www.astillerosmurueta.com/home/

> ⚠️ Ojo: nunca copiar sus fotos (riesgo legal). Copiamos estructura/patrones, no assets.

**Pendiente:** hacer un *research de webs top* (fuera del sector naval, ejecución de
clase mundial) para ver qué craft podemos trasladar a nuestra web. La tesis del
proyecto es: *arquitectura de contenido del sector + ejecución de las mejores webs
del mundo*.

---

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
