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

  // Contadores de credibilidad de la home (datos de ejemplo).
  stats: [
    { value: '35', label: 'Años de trayectoria' },
    { value: '120', label: 'Buques construidos' },
    { value: '480', label: 'Reparaciones realizadas' },
    { value: '60', label: 'Clientes satisfechos' },
  ],

  // Servicios (contenido de ejemplo): titular corto + una frase.
  services: [
    {
      title: 'Construcción naval',
      description: 'Diseño y construcción de buques a medida, del proyecto a la botadura.',
    },
    {
      title: 'Reparación y mantenimiento',
      description: 'Reparaciones integrales y mantenimiento preventivo para mantener tu flota operativa.',
    },
    {
      title: 'Conversión y modernización',
      description: 'Transformación y actualización de buques para nuevos usos y normativas.',
    },
    {
      title: 'Servicios en dique seco',
      description: 'Varada en dique seco para inspección de casco, obra viva y certificaciones.',
    },
  ],
};
