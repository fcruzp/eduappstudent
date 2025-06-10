// Definir los tipos y datos para las materias y las competencias que están en la pantalla de calificaciones
import { MessageSquare, Brain, Heart, Microscope, LucideIcon } from "lucide-react";

// Lista fija de materias
export const materias = [
  {
    id: 1,
    name: "Lengua Española",
    teacher: "Prof. Sánchez"
  },
  {
    id: 2,
    name: "Inglés",
    teacher: "Prof. Johnson"
  },
  {
    id: 3,
    name: "Ciencias Sociales",
    teacher: "Prof. Martínez"
  },
  {
    id: 4,
    name: "Ciencias de la Naturaleza",
    teacher: "Prof. Torres"
  },
  {
    id: 5,
    name: "Formación Integral Humana",
    teacher: "Prof. López"
  },
  {
    id: 6,
    name: "Educación Física",
    teacher: "Prof. Ramírez"
  },
  {
    id: 7,
    name: "Educación Artística",
    teacher: "Prof. García"
  }
];

// Definir tipos para las notas
export type Periodo = {
  id: number;
  name: string;
  grade: number;
  weight: number;
};

export type NotasPorMateria = {
  [key: number]: Periodo[];
};

export type Competencia = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  materiasIds: number[];
  notas: NotasPorMateria;
};

// Datos de las competencias fundamentales
export const competenciasData: { [key: string]: Competencia } = {
  comunicacion: {
    id: "comunicacion",
    title: "Comunicación",
    icon: MessageSquare,
    description: "Capacidad para expresar ideas, pensamientos y sentimientos de manera clara y efectiva, utilizando diferentes medios y formatos. Incluye la comprensión lectora, expresión escrita y oral, así como la capacidad de escuchar activamente.",
    materiasIds: [1, 2, 3, 4, 5, 6, 7],
    notas: {
      1: [ // Lengua Española
        { id: 1, name: "Primer Período", grade: 85, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 92, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 88, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 95, weight: 25 }
      ],
      2: [ // Inglés - Con notas regulares y malas
        { id: 1, name: "Primer Período", grade: 78, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 65, weight: 25 }, // Regular
        { id: 3, name: "Tercer Período", grade: 55, weight: 25 }, // Mala
        { id: 4, name: "Cuarto Período", grade: 70, weight: 25 }
      ],
      3: [ // Ciencias Sociales
        { id: 1, name: "Primer Período", grade: 82, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 85, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 80, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 83, weight: 25 }
      ],
      4: [ // Ciencias de la Naturaleza - Con notas regulares
        { id: 1, name: "Primer Período", grade: 80, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 63, weight: 25 }, // Regular
        { id: 3, name: "Tercer Período", grade: 78, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 85, weight: 25 }
      ],
      5: [ // Formación Integral Humana
        { id: 1, name: "Primer Período", grade: 88, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 53, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 60, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 52, weight: 25 }
      ],
      6: [ // Educación Física
        { id: 1, name: "Primer Período", grade: 85, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 88, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 82, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 86, weight: 25 }
      ],
      7: [ // Educación Artística
        { id: 1, name: "Primer Período", grade: 90, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 87, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 92, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 89, weight: 25 }
      ]
    }
  },
  pensamientoLogico: {
    id: "pensamientoLogico",
    title: "Pensamiento Lógico",
    icon: Brain,
    description: "Habilidad para analizar, razonar y resolver problemas de manera sistemática. Incluye el pensamiento crítico, la resolución de problemas matemáticos y la capacidad de establecer relaciones causa-efecto.",
    materiasIds: [1, 2, 3, 4, 5, 6, 7],
    notas: {
      1: [ // Lengua Española
        { id: 1, name: "Primer Período", grade: 82, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 85, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 88, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 90, weight: 25 }
      ],
      2: [ // Inglés
        { id: 1, name: "Primer Período", grade: 80, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 83, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 85, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 87, weight: 25 }
      ],
      3: [ // Ciencias Sociales
        { id: 1, name: "Primer Período", grade: 90, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 87, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 93, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 89, weight: 25 }
      ],
      4: [ // Ciencias de la Naturaleza
        { id: 1, name: "Primer Período", grade: 88, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 91, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 85, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 93, weight: 25 }
      ],
      5: [ // Formación Integral Humana
        { id: 1, name: "Primer Período", grade: 85, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 88, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 82, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 86, weight: 25 }
      ],
      6: [ // Educación Física
        { id: 1, name: "Primer Período", grade: 83, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 86, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 80, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 88, weight: 25 }
      ],
      7: [ // Educación Artística
        { id: 1, name: "Primer Período", grade: 86, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 84, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 89, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 91, weight: 25 }
      ]
    }
  },
  etica: {
    id: "etica",
    title: "Ética",
    icon: Heart,
    description: "Conjunto de valores y principios que guían el comportamiento humano. Incluye la responsabilidad, el respeto, la honestidad y la capacidad de tomar decisiones éticas en diferentes situaciones.",
    materiasIds: [1, 2, 3, 4, 5, 6, 7],
    notas: {
      1: [ // Lengua Española
        { id: 1, name: "Primer Período", grade: 88, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 85, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 90, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 87, weight: 25 }
      ],
      2: [ // Inglés
        { id: 1, name: "Primer Período", grade: 85, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 88, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 82, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 86, weight: 25 }
      ],
      3: [ // Ciencias Sociales
        { id: 1, name: "Primer Período", grade: 92, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 89, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 95, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 91, weight: 25 }
      ],
      4: [ // Ciencias de la Naturaleza
        { id: 1, name: "Primer Período", grade: 86, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 89, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 83, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 90, weight: 25 }
      ],
      5: [ // Formación Integral Humana
        { id: 1, name: "Primer Período", grade: 94, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 91, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 96, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 93, weight: 25 }
      ],
      6: [ // Educación Física
        { id: 1, name: "Primer Período", grade: 89, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 92, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 87, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 90, weight: 25 }
      ],
      7: [ // Educación Artística
        { id: 1, name: "Primer Período", grade: 87, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 90, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 84, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 88, weight: 25 }
      ]
    }
  },
  cientifica: {
    id: "cientifica",
    title: "Científica",
    icon: Microscope,
    description: "Capacidad para investigar, experimentar y analizar fenómenos naturales y sociales. Incluye el método científico, la observación, la experimentación y la capacidad de formular hipótesis.",
    materiasIds: [1, 2, 3, 4, 5, 6, 7],
    notas: {
      1: [ // Lengua Española
        { id: 1, name: "Primer Período", grade: 85, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 88, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 82, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 86, weight: 25 }
      ],
      2: [ // Inglés
        { id: 1, name: "Primer Período", grade: 83, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 86, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 80, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 88, weight: 25 }
      ],
      3: [ // Ciencias Sociales
        { id: 1, name: "Primer Período", grade: 87, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 90, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 84, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 89, weight: 25 }
      ],
      4: [ // Ciencias de la Naturaleza
        { id: 1, name: "Primer Período", grade: 90, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 93, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 87, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 95, weight: 25 }
      ],
      5: [ // Formación Integral Humana
        { id: 1, name: "Primer Período", grade: 86, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 89, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 83, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 90, weight: 25 }
      ],
      6: [ // Educación Física
        { id: 1, name: "Primer Período", grade: 88, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 91, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 85, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 92, weight: 25 }
      ],
      7: [ // Educación Artística
        { id: 1, name: "Primer Período", grade: 84, weight: 25 },
        { id: 2, name: "Segundo Período", grade: 87, weight: 25 },
        { id: 3, name: "Tercer Período", grade: 81, weight: 25 },
        { id: 4, name: "Cuarto Período", grade: 89, weight: 25 }
      ]
    }
  }
}; 