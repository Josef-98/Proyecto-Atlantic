// Configuración y contenido del sitio, separado del código.
// Cuando llegue la información real, se edita aquí sin tocar componentes.

export const site = {
  name: 'Atlantic Marine',

  // Zona (ciudad/estado) para contexto rápido. La dirección exacta va solo en Contacto.
  location: 'Ciudad Ojeda · Estado Zulia, Venezuela',

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

  // Flota / portfolio de buques (contenido de ejemplo): nombre + tipo + ficha corta.
  fleet: [
    { name: 'Guaicamacuto', type: 'Buque tanque', spec: 'Eslora 92 m · 2021' },
    { name: 'Río Orinoco', type: 'Carguero', spec: 'Eslora 110 m · 2019' },
    { name: 'Isla Margarita', type: 'Portacontenedores', spec: 'Eslora 135 m · 2022' },
    { name: 'Cardón', type: 'Granelero', spec: 'Eslora 120 m · 2018' },
  ],

  // Qué nos diferencia (contenido de ejemplo). "icon" referencia un SVG del componente.
  differentiators: [
    { icon: 'clock', title: '35 años de trayectoria', text: 'Décadas construyendo y reparando buques en Venezuela.' },
    { icon: 'compass', title: 'Ingeniería propia', text: 'Diseño y departamento de ingeniería en casa, de principio a fin.' },
    { icon: 'check', title: 'Cumplimiento de plazos', text: 'Entregas en tiempo y forma, con seguimiento en cada fase.' },
    { icon: 'message', title: 'Trato cercano', text: 'Comunicación directa y un interlocutor para todo el proyecto.' },
  ],

  // Nuestro compromiso (contenido de ejemplo): tarjetas con foto.
  commitment: [
    { title: 'Calidad', text: 'Mejora continua en materiales, procesos, tecnología y servicio.' },
    { title: 'Seguridad y salud', text: 'La seguridad de nuestro equipo es el valor fundamental de cada proyecto.' },
    { title: 'Sostenibilidad', text: 'Contribuimos a preservar nuestro entorno social y natural.' },
  ],
};
