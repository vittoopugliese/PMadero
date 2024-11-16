export const ExamplePosts = [
  {
    id: 1,
    title: "Mejores zonas para invertir en Buenos Aires 2024",
    description:
      "Descubre las áreas con mayor potencial de crecimiento inmobiliario en Buenos Aires. Análisis detallado de precios, desarrollo urbano y retorno de inversión en diferentes barrios.",
    author: {
      authorName: "Alejandro Navarret",
      authorImage: "../ale.png",
      authorRole: "Martillero - Corredor Inmobiliario",
    },
    date: "2024-03-15",
    readTime: "5 min",
    category: "Inversiones",
    image: "../post1.png",
    tags: ["Inversiones", "Buenos Aires", "Mercado Inmobiliario"],
  },
  {
    id: 2,
    title: "Guía completa: Documentos necesarios para alquilar",
    description:
      "Todo lo que necesitas saber sobre la documentación requerida para alquilar una propiedad en Argentina. Incluye nuevos requisitos según la última normativa.",
    author: {
      authorName: "Alejandro Navarret",
      authorImage: "../ale.png",
      authorRole: "Martillero - Corredor Inmobiliario",
    },
    date: "2024-03-10",
    readTime: "8 min",
    category: "Legal",
    image: "../post2.png",
    tags: ["Alquileres", "Documentación", "Legal"],
  },
  {
    id: 3,
    title: "Cómo elegir la mejor ubicación para tu próximo hogar",
    description: "Consejos y recomendaciones para encontrar la ubicación ideal para tu próximo hogar. Factores a tener en cuenta y errores comunes a evitar.",
    author: {
      authorName: "Alejandro Navarret",
      authorImage: "../ale.png",
      authorRole: "Martillero - Corredor Inmobiliario",
    },
    date: "2024-03-05",
    readTime: "6 min",
    category: "Consejos",
    image: "../post1.png",
    tags: ["Ubicación", "Consejos", "Comprar"],
  }
];

export const ExampleProperties = [
  {
    id: 1,
    building: "Departamento",
    type: "Alquiler",
    address: "Murgiondo al 5791",
    city: "CABA",
    locality: "Villa Lugano",
    price: 600000,
    description:
      "Departamento de 2 ambientes tipo loft con terraza y parrilla en alquiler en Villa Lugano. Expensas, luz, agua y abl TODO INCLUIDO en el valor excepto el gas.",
    number: "1166666666",
    email: "example@example.com",
    properties: {
      area: 48,
      rooms: 2,
      bathrooms: 1,
      parking: false,
      pool: true,
      security: false,
      elevator: false,
      garden: true,
      gym: false,
    },
    image: "../property1.png",
    bajo: false,
  },
  {
    id: 2,
    building: "Casa",
    type: "Venta",
    address: "Riestra al 6000",
    city: "CABA",
    locality: "Mataderos",
    price: 300000,
    description:
      "Casa de 3 ambientes con patio y cochera en Mataderos. Excelente ubicación a metros de Av. Directorio y Av. Emilio Castro.",
    number: "1166666666",
    email: "example@example.com",
    properties: {
      area: 120,
      rooms: 3,
      bathrooms: 2,
      parking: true,
      pool: true,
      security: true,
      elevator: true,
      garden: true,
      gym: true,
    },
    image: "../property2.png",
    bajo: true,
  },
  {
    id: 3,
    building: "PH",
    type: "Alquiler",
    address: "Av. San Juan al 3000",
    city: "CABA",
    locality: "Boedo",
    price: 45000,
    description: "PH de 4 ambientes con terraza y parrilla en alquiler en Boedo. Sin expensas, excelente estado y luminosidad.",
    number: "1166666666",
    email: "example@example.com",
    properties: {
      area: 100,
      rooms: 4,
      bathrooms: 2,
      parking: false,
      pool: false,
      security: false,
      elevator: false,
      garden: true,
      gym: false,
    },
    image: "../property1.png",
    bajo: true,
  }
];

export const TeamMembers = [
  {
    name: "Alejandro Navarret",
    role: "Martillero - Corredor Inmobiliario",
    image: "../ale.png",
  },
  {
    name: "Navarret Alejandro",
    role: "Martillero - Corredor Inmobiliario",
    image: "../ale.png",
  },
];
