export interface PlantaProducto {
  id: string;
  nombre: string;
  nombreCientifico?: string;
  categoria: string;
  categoriaSlug: string;
  descripcionCorta: string;
  usosTradicionales: string;
  preparacion: string;
  precio: number;
  presentacion?: string;
  imagenUrl: string;
  destacado?: boolean;
  beneficios: string[];
}

export const PLANTAS_INITIAL_DATA: PlantaProducto[] = [
  {
    id: "wisullo",
    nombre: "Wisullo",
    nombreCientifico: "Valeriana spp. (Saber Local)",
    categoria: "Salud Femenina & Matriz",
    categoriaSlug: "salud-femenina",
    descripcionCorta:
      "Planta tradicional empleada especialmente en infusiones para aliviar molestias relacionadas con el matriz y útero.",
    usosTradicionales:
      "Según los sabios y yatiris de Limbani, es una hierba sagrada para el cuidado femenino y la regulación del bienestar digestivo y reproductor.",
    preparacion:
      "Dejar reposar 1 cucharadita de hierba seca en 1 taza de agua hirviendo por 5 a 8 minutos. Colar y tomar tibia antes del desayuno y antes de dormir de manera constante.",
    precio: 5.0,
    presentacion: "50g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: true,
    beneficios: [
      "Alivio del matriz/útero",
      "Cuidado femenino",
      "Descanso reconfortante",
    ],
  },
  {
    id: "achancara",
    nombre: "Achancara",
    nombreCientifico: "Begonia veitchii / Begonia spp.",
    categoria: "Salud Masculina & Renal",
    categoriaSlug: "salud-masculina",
    descripcionCorta:
      "Flor y planta altoandina de los valles de Limbani, valorada por su acción en molestias de la próstata y el sistema urinario.",
    usosTradicionales:
      "Tradicionalmente recolectada en zonas de ladera andina por los pobladores para aliviar inflamaciones y cuidar las vías urinarias.",
    preparacion:
      "Hervir agua y verter sobre 2 flores/hojas secas. Reposar por 10 minutos tapado. Beber 2 veces al día (en ayunas y al acostarse).",
    precio: 5.0,
    presentacion: "50g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: true,
    beneficios: [
      "Bienestar de próstata",
      "Desinflamante renal",
      "Purificación natural",
    ],
  },
  {
    id: "pepelora",
    nombre: "Pepelora",
    nombreCientifico: "Saber Ancestral Limbani",
    categoria: "Salud Femenina & Digestivo",
    categoriaSlug: "salud-femenina",
    descripcionCorta:
      "Hierba nativa recolectada en las alturas de Limbani para molestias del matriz y malestares estomacales leves.",
    usosTradicionales:
      "Ampliamente transmitida por las abuelas de la comunidad para acompañar la recuperación y mantener la energía corporal.",
    preparacion:
      "Infusión ligera: 1 bolsita o pizca de hierba en agua bien caliente por 5 minutos. Consumir por las mañanas y noches.",
    precio: 5.0,
    presentacion: "50g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: false,
    beneficios: ["Equilibrio matriz", "Digestión suave", "Restaurador natural"],
  },
  {
    id: "wichullo",
    nombre: "Wichullo",
    nombreCientifico: "Planta Cicatrizante Andina",
    categoria: "Cicatrizante & Uso Tópico",
    categoriaSlug: "cicatrizante",
    descripcionCorta:
      "Conocida en la medicina tradicional por su potente poder cicatrizante en heridas abiertas y afecciones cutáneas.",
    usosTradicionales:
      "Se aplica como infusión concentrada en lavados o preparada como parche empapado en papel o gasa colocado directamente en la zona afectada.",
    preparacion:
      "Para infusión de lavado: hervir 3 minutos y dejar enfriar. Para parche: envolver la hierba tibia sobre la herida limpia.",
    precio: 5.0,
    presentacion: "50g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: true,
    beneficios: [
      "Cicatrización rápida",
      "Regenerante cutáneo",
      "Parche medicinal",
    ],
  },
  {
    id: "tobi",
    nombre: "Tobi",
    nombreCientifico: "Saber Ancestral Limbani",
    categoria: "Protección & Saberes Tradicionales",
    categoriaSlug: "saberes-tradicionales",
    descripcionCorta:
      "Hierba medicinal única usada tradicionalmente por la comunidad para el alivio del 'agarre de tierra' y decaimiento.",
    usosTradicionales:
      "Utilizada en baños espirituales/rituales y baños de vapor para devolver la vitalidad cuando una persona siente cansancio profundo.",
    preparacion:
      "Hervir un puñado en 2 litros de agua durante 10 minutos. Utilizar en baños tibios o tomar infusiones muy suaves según recomendación comunitaria.",
    precio: 5.0,
    presentacion: "50g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: false,
    beneficios: [
      "Alivio 'Agarre de Tierra'",
      "Rejuvenecedor energético",
      "Baño relajante",
    ],
  },
  {
    id: "chancapiedra",
    nombre: "Chancapiedra",
    nombreCientifico: "Phyllanthus niruri",
    categoria: "Salud Renal & Biliar",
    categoriaSlug: "renal-biliar",
    descripcionCorta:
      "Reconocida planta medicinal andina usada ancestralmente para disolver y prevenir cálculos biliares y renales.",
    usosTradicionales:
      "Famosa en toda la región andina por su acción depurativa sobre el hígado y los riñones.",
    preparacion:
      "Hervir 1 cucharada por litro de agua durante 5 minutos. Dejar reposar y tomar como agua del tiempo o en 3 tomas diarias.",
    precio: 5.0,
    presentacion: "50g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: true,
    beneficios: [
      "Desintegrador de cálculos",
      "Depurador hepático",
      "Salud renal",
    ],
  },
  {
    id: "matico",
    nombre: "Matico",
    nombreCientifico: "Piper aduncum",
    categoria: "Respiratorio & Digestivo",
    categoriaSlug: "respiratorio-digestivo",
    descripcionCorta:
      "Hierba medicinal multifuncional ideal para calmar dolores de estómago, cólicos y aliviar la tos y afecciones respiratorias.",
    usosTradicionales:
      "Las hojas de matico son preparadas en infusión caliente para combatir el resfrío del clima frío altoandino.",
    preparacion:
      "Reposar 2 a 3 hojas secas en 1 taza de agua hirviendo por 5 minutos. Tomar bien caliente con una gota de miel.",
    precio: 5.0,
    presentacion: "50g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: true,
    beneficios: [
      "Alivio de tos y resfrío",
      "Calma dolor estomacal",
      "Desinflamante",
    ],
  },
  {
    id: "mix-7-plantas",
    nombre: "Mix Completo 7 Plantas",
    nombreCientifico: "Combinado Ancestral de Limbani",
    categoria: "Mezclas & Mixes",
    categoriaSlug: "mezclas",
    descripcionCorta:
      "Mezcla medicinal completa de 200g que reúne las 7 plantas tradicionales de Limbani: Wisullo, Achancara, Pepelora, Wichullo, Tobi, Chancapiedra y Matico.",
    usosTradicionales:
      "Fórmula integral tradicional que combina la sabiduría de todas las variedades para un cuidado holístico de la salud humana.",
    preparacion:
      "Hervir 1 a 2 cucharadas de la mezcla en 1 litro de agua durante 5 a 8 minutos. Dejar reposar, colar y tomar caliente o como agua del tiempo.",
    precio: 12.0,
    presentacion: "200g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: true,
    beneficios: [
      "Contiene las 7 plantas",
      "Salud integral & holística",
      "Presentación 200g",
    ],
  },
  {
    id: "mix-5-plantas",
    nombre: "Mix 5 Plantas Tradicionales",
    nombreCientifico: "Selección Especial Limbani",
    categoria: "Mezclas & Mixes",
    categoriaSlug: "mezclas",
    descripcionCorta:
      "Mezcla especial de 200g que combina Pepelora, Wisullo, Achancara, Chancapiedra y Matico para la salud femenina, masculina, renal y respiratoria.",
    usosTradicionales:
      "Mezcla equilibrada seleccionada para potenciar el alivio renal, matriz, vías urinarias y digestión en un solo empaque.",
    preparacion:
      "Dejar reposar 1 cucharada del mix en 1 taza de agua hirviendo durante 7 minutos. Tomar de 2 a 3 veces al día según necesidad.",
    precio: 12.0,
    presentacion: "200g",
    imagenUrl: "/images/bolsa-ejemplo.jpeg",
    destacado: true,
    beneficios: [
      "Pepelora, Wisullo, Achancara, Chancapiedra, Matico",
      "Cuidado renal & matriz",
      "Presentación 200g",
    ],
  },
];

export const CATEGORIAS = [
  { nombre: "Todos", slug: "todos" },
  { nombre: "Mezclas & Mixes", slug: "mezclas" },
  { nombre: "Salud Femenina", slug: "salud-femenina" },
  { nombre: "Salud Masculina", slug: "salud-masculina" },
  { nombre: "Renal & Biliar", slug: "renal-biliar" },
  { nombre: "Respiratorio & Digestivo", slug: "respiratorio-digestivo" },
  { nombre: "Cicatrizante", slug: "cicatrizante" },
  { nombre: "Saberes Tradicionales", slug: "saberes-tradicionales" },
];
