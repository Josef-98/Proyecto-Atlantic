// Configuración y contenido del sitio, separado del código.
// Cuando llegue la información real, se edita aquí sin tocar componentes.

export const site = {
  name: 'Atlantic Marine',

  // Teléfono (contenido de ejemplo). display = lo que se ve; href = para el enlace tel:
  phone: {
    display: '+58 281 555 0100',
    href: 'tel:+582815550100',
  },

  // WhatsApp: INTERRUPTOR. Hoy apagado (enabled: false) y con número de ejemplo.
  // Para activarlo cuando el padre de Josef decida: poner enabled en true.
  whatsapp: {
    enabled: false,
    number: '582815550100', // formato wa.me: sin "+", espacios ni guiones
    message: 'Hola, me gustaría más información sobre Atlantic Marine.',
  },

  // Navegación principal (el sitemap del POC).
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Flota', href: '/flota' },
    { label: 'Sobre nosotros', href: '/sobre-nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ],
};
