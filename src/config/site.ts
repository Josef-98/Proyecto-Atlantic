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

  // Email de contacto (ejemplo).
  email: {
    display: 'contacto@atlantic-marine.com',
    href: 'mailto:contacto@atlantic-marine.com',
  },

  // Dirección completa (contenido de ejemplo). Se usa en Contacto y en su mapa.
  address: 'Calle Montpellier 1, Ciudad Ojeda, Estado Zulia',

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

  // Servicios (contenido de ejemplo). "description" = frase corta para la home;
  // "detail" e "includes" se muestran en la página /servicios.
  services: [
    {
      title: 'Construcción naval',
      description: 'Diseño y construcción de buques a medida, del proyecto a la botadura.',
      detail:
        'Acompañamos cada proyecto desde la ingeniería de detalle hasta la botadura y las pruebas de mar, con control de calidad en cada fase.',
      includes: [
        'Ingeniería y diseño de detalle',
        'Corte y armado del casco',
        'Instalación de sistemas y maquinaria',
        'Pruebas de mar y entrega',
      ],
    },
    {
      title: 'Reparación y mantenimiento',
      description: 'Reparaciones integrales y mantenimiento preventivo para mantener tu flota operativa.',
      detail:
        'Intervenciones programadas y de emergencia para minimizar el tiempo fuera de servicio y alargar la vida útil del buque.',
      includes: [
        'Reparación estructural y de casco',
        'Mantenimiento de motores y sistemas',
        'Trabajos de pintura y protección',
        'Diagnóstico y peritaje',
      ],
    },
    {
      title: 'Conversión y modernización',
      description: 'Transformación y actualización de buques para nuevos usos y normativas.',
      detail:
        'Adaptamos buques existentes a nuevas funciones, mercados o exigencias regulatorias, optimizando su rendimiento.',
      includes: [
        'Reacondicionamiento y ampliación',
        'Actualización de equipos y automatización',
        'Adaptación a normativa vigente',
        'Mejoras de eficiencia energética',
      ],
    },
    {
      title: 'Servicios en dique seco',
      description: 'Varada en dique seco para inspección de casco, obra viva y certificaciones.',
      detail:
        'Instalaciones de dique seco para trabajos de obra viva, inspecciones de clasificadora y certificaciones periódicas.',
      includes: [
        'Varada y puesta en seco',
        'Inspección de obra viva',
        'Limpieza y pintura de casco',
        'Certificaciones de clasificadora',
      ],
    },
  ],

  // Flota / portfolio de buques (contenido de ejemplo): nombre, tipo, ficha corta,
  // descripción y especificaciones (se muestran al abrir la ficha del buque).
  fleet: [
    {
      name: 'Guaicamacuto',
      type: 'Buque tanque',
      spec: 'Eslora 92 m · 2021',
      description:
        'Buque tanque para el transporte de productos petrolíferos refinados, con carga segregada y bombas de alto caudal.',
      specs: [
        { label: 'Eslora', value: '92 m' },
        { label: 'Manga', value: '15 m' },
        { label: 'Peso muerto', value: '6 500 DWT' },
        { label: 'Entrega', value: '2021' },
      ],
    },
    {
      name: 'Río Orinoco',
      type: 'Carguero',
      spec: 'Eslora 110 m · 2019',
      description:
        'Carguero polivalente para carga general y proyectos, con bodegas amplias y grúas propias para operar en puertos sin infraestructura.',
      specs: [
        { label: 'Eslora', value: '110 m' },
        { label: 'Manga', value: '18 m' },
        { label: 'Peso muerto', value: '9 800 DWT' },
        { label: 'Entrega', value: '2019' },
      ],
    },
    {
      name: 'Isla Margarita',
      type: 'Portacontenedores',
      spec: 'Eslora 135 m · 2022',
      description:
        'Portacontenedores feeder para rutas regionales del Caribe, optimizado para escalas rápidas y bajo consumo.',
      specs: [
        { label: 'Eslora', value: '135 m' },
        { label: 'Manga', value: '22 m' },
        { label: 'Capacidad', value: '1 100 TEU' },
        { label: 'Entrega', value: '2022' },
      ],
    },
    {
      name: 'Cardón',
      type: 'Granelero',
      spec: 'Eslora 120 m · 2018',
      description:
        'Granelero para el transporte de graneles sólidos, con bodegas reforzadas y sistema de autodescarga.',
      specs: [
        { label: 'Eslora', value: '120 m' },
        { label: 'Manga', value: '20 m' },
        { label: 'Peso muerto', value: '12 000 DWT' },
        { label: 'Entrega', value: '2018' },
      ],
    },
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

  // Página "Sobre nosotros" (contenido de ejemplo).
  about: {
    headline: 'Más de tres décadas construyendo confianza',
    lead: 'Somos un astillero naval en Ciudad Ojeda, a orillas del lago de Maracaibo. Combinamos oficio, ingeniería propia y un trato cercano para construir y reparar buques que aguantan el trabajo real.',
    history: [
      'Atlantic Marine nació en 1990 como un taller de reparación al servicio de la flota del lago. Con los años ampliamos instalaciones, sumamos dique seco e ingeniería propia, y dimos el salto a la construcción de buques completos.',
      'Hoy, con más de 120 buques construidos y cientos de reparaciones, seguimos con la misma idea del primer día: entregar a tiempo, cumplir la palabra y estar cerca del armador.',
    ],
    milestones: [
      { year: '1990', text: 'Fundación del astillero en Ciudad Ojeda.' },
      { year: '2003', text: 'Ampliación de instalaciones y dique seco.' },
      { year: '2015', text: 'Primera entrega de un buque tanque de gran porte.' },
      { year: '2024', text: 'Más de 120 buques construidos y 480 reparaciones.' },
    ],
    certifications: ['ISO 9001', 'Bureau Veritas', 'Lloyd’s Register', 'RINA', 'ABS'],
  },
};
