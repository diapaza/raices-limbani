-- Script SQL para Supabase (Proyecto Raíces de Limbani)

-- 1. Crear tabla de categorías
CREATE TABLE IF NOT EXISTS categorias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Crear tabla de productos / plantas medicinales
CREATE TABLE IF NOT EXISTS productos (
  id VARCHAR(100) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  nombre_cientifico VARCHAR(150),
  categoria VARCHAR(100) NOT NULL,
  categoria_slug VARCHAR(100) NOT NULL,
  descripcion_corta TEXT NOT NULL,
  usos_tradicionales TEXT NOT NULL,
  preparacion TEXT NOT NULL,
  precio DECIMAL(10,2) DEFAULT 0.00,
  imagen_url TEXT DEFAULT '/images/bolsa-ejemplo.jpeg',
  destacado BOOLEAN DEFAULT false,
  beneficios TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Insertar categorías
INSERT INTO categorias (nombre, slug) VALUES
  ('Salud Femenina', 'salud-femenina'),
  ('Salud Masculina', 'salud-masculina'),
  ('Renal & Biliar', 'renal-biliar'),
  ('Respiratorio & Digestivo', 'respiratorio-digestivo'),
  ('Cicatrizante', 'cicatrizante'),
  ('Saberes Tradicionales', 'saberes-tradicionales')
ON CONFLICT (slug) DO NOTHING;

-- 4. Insertar las 7 plantas medicinales de Limbani
INSERT INTO productos (
  id, nombre, nombre_cientifico, categoria, categoria_slug, 
  descripcion_corta, usos_tradicionales, preparacion, precio, 
  imagen_url, destacado, beneficios
) VALUES
(
  'wisullo', 'Wisullo', 'Valeriana spp. (Saber Local)', 'Salud Femenina & Matriz', 'salud-femenina',
  'Planta tradicional empleada especialmente en infusiones para aliviar molestias relacionadas con el matriz y útero.',
  'Según los sabios y yatiris de Limbani, es una hierba sagrada para el cuidado femenino y la regulación del bienestar digestivo y reproductor.',
  'Dejar reposar 1 cucharadita de hierba seca en 1 taza de agua hirviendo por 5 a 8 minutos. Colar y tomar tibia antes del desayuno y antes de dormir de manera constante.',
  12.00, '/images/bolsa-ejemplo.jpeg', true, ARRAY['Alivio del matriz/útero', 'Cuidado femenino', 'Descanso reconfortante']
),
(
  'achancara', 'Achancara', 'Begonia veitchii / Begonia spp.', 'Salud Masculina & Renal', 'salud-masculina',
  'Flor y planta altoandina de los valles de Limbani, valorada por su acción en molestias de la próstata y el sistema urinario.',
  'Tradicionalmente recolectada en zonas de ladera andina por los pobladores para aliviar inflamaciones y cuidar las vías urinarias.',
  'Hervir agua y verter sobre 2 flores/hojas secas. Reposar por 10 minutos tapado. Beber 2 veces al día (en ayunas y al acostarse).',
  15.00, '/images/bolsa-ejemplo.jpeg', true, ARRAY['Bienestar de próstata', 'Desinflamante renal', 'Purificación natural']
),
(
  'pepelora', 'Pepelora', 'Saber Ancestral Limbani', 'Salud Femenina & Digestivo', 'salud-femenina',
  'Hierba nativa recolectada en las alturas de Limbani para molestias del matriz y malestares estomacales leves.',
  'Ampliamente transmitida por las abuelas de la comunidad para acompañar la recuperación y mantener la energía corporal.',
  'Infusión ligera: 1 bolsita o pizca de hierba en agua bien caliente por 5 minutos. Consumir por las mañanas y noches.',
  10.00, '/images/bolsa-ejemplo.jpeg', false, ARRAY['Equilibrio matriz', 'Digestión suave', 'Restaurador natural']
),
(
  'wichullo', 'Wichullo', 'Planta Cicatrizante Andina', 'Cicatrizante & Uso Tópico', 'cicatrizante',
  'Conocida en la medicina tradicional por su potente poder cicatrizante en heridas abiertas y afecciones cutáneas.',
  'Se aplica como infusión concentrada en lavados o preparada como parche empapado en papel o gasa colocado directamente en la zona afectada.',
  'Para infusión de lavado: hervir 3 minutos y dejar enfriar. Para parche: envolver la hierba tibia tibia sobre la herida limpia.',
  14.00, '/images/bolsa-ejemplo.jpeg', true, ARRAY['Cicatrización rápida', 'Regenerante cutáneo', 'Parche medicinal']
),
(
  'tobi', 'Tobi', 'Saber Ancestral Limbani', 'Protección & Saberes Tradicionales', 'saberes-tradicionales',
  'Hierba medicinal única usada tradicionalmente por la comunidad para el alivio del "agarre de tierra" y decaimiento.',
  'Utilizada en baños espirituales/rituales y baños de vapor para devolver la vitalidad cuando una persona siente cansancio profundo.',
  'Hervir un puñado en 2 litros de agua durante 10 minutos. Utilizar en baños tibios o tomar infusiones muy suaves según recomendación comunitaria.',
  12.50, '/images/bolsa-ejemplo.jpeg', false, ARRAY['Alivio "Agarre de Tierra"', 'Rejuvenecedor energético', 'Baño relajante']
),
(
  'chancapiedra', 'Chancapiedra', 'Phyllanthus niruri', 'Salud Renal & Biliar', 'renal-biliar',
  'Reconocida planta medicinal andina usada ancestralmente para disolver y prevenir cálculos biliares y renales.',
  'Famosa en toda la región andina por su acción depurativa sobre el hígado y los riñones.',
  'Hervir 1 cucharada por litro de agua durante 5 minutos. Dejar reposar y tomar como agua del tiempo o en 3 tomas diarias.',
  13.00, '/images/bolsa-ejemplo.jpeg', true, ARRAY['Desintegrador de cálculos', 'Depurador hepático', 'Salud renal']
),
(
  'matico', 'Matico', 'Piper aduncum', 'Respiratorio & Digestivo', 'respiratorio-digestivo',
  'Hierba medicinal multifuncional ideal para calmar dolores de estómago, cólicos y aliviar la tos y afecciones respiratorias.',
  'Las hojas de matico son preparadas en infusión caliente para combatir el resfrío del clima frío altoandino.',
  'Reposar 2 a 3 hojas secas en 1 taza de agua hirviendo por 5 minutos. Tomar bien caliente con una gota de miel.',
  11.00, '/images/bolsa-ejemplo.jpeg', true, ARRAY['Alivio de tos y resfrío', 'Calma dolor estomacal', 'Desinflamante']
)
ON CONFLICT (id) DO UPDATE SET
  nombre = EXCLUDED.nombre,
  nombre_cientifico = EXCLUDED.nombre_cientifico,
  descripcion_corta = EXCLUDED.descripcion_corta,
  preparacion = EXCLUDED.preparacion,
  precio = EXCLUDED.precio;
