# Atlantic Marine

[![Web en vivo](https://img.shields.io/badge/web-en_vivo-1f6feb?logo=vercel&logoColor=white)](https://proyectoatlanticmarine.vercel.app/)

**🌐 En producción → [proyectoatlanticmarine.vercel.app](https://proyectoatlanticmarine.vercel.app/)**

Web corporativa de **Atlantic Marine**, un astillero naval con sede en Venezuela.
Sitio estático, rápido y accesible, pensado para dar presencia profesional al
astillero y servir como catálogo de su flota y servicios.

> 🚧 **DEMO — contenido de ejemplo.** Esta es una versión de prueba (POC) con textos
> genéricos y fotos de stock con licencia libre. El contenido real se incorporará
> tras la aprobación del cliente.

## Stack

- **[Astro](https://astro.build)** — framework de contenido estático (cero JS por defecto).
- **[Tailwind CSS](https://tailwindcss.com)** — estilos mediante clases utilitarias.
- **TypeScript** — en modo `strict`.
- **Vercel** — despliegue.

## Objetivos de calidad

- ⚡ **Rendimiento** como requisito (no lujo): conexiones lentas en Venezuela. Meta LCP < 2,5 s.
- ♿ **Accesibilidad** de serie: contraste AA, navegación por teclado, texto alternativo.
- 🌐 Arquitectura preparada para **bilingüe ES/EN** sin reescritura.
- 🧱 Contenido separado del código, para actualizarlo sin tocar la lógica.

## Cómo arrancar en local

Requisitos: [Node.js](https://nodejs.org) 22.12 o superior.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Luego abre **http://localhost:4321** en tu navegador. Los cambios se recargan solos.

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye la web final en `dist/` |
| `npm run preview` | Previsualiza la build de producción en local |

## Estructura del sitio

`Inicio` · `Servicios` · `Flota / Proyectos` · `Sobre nosotros` · `Contacto`

---

Proyecto de aprendizaje de desarrollo web. Construido con [Astro](https://astro.build).
