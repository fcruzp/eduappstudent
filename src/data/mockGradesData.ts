export interface ResumenCalificacionesData {
  promedioGeneral: number;
  estadisticas: {
    aprobadas: number;
    pendientes: number;
    reprobadas: number;
  };
  ultimaActualizacion: string;
}

export interface MateriaCalificacion {
  id: number;
  name: string;
  teacher: string;
  promedio: number;
}

export const mockResumenCalificacionesData: ResumenCalificacionesData = {
  promedioGeneral: 85,
  estadisticas: {
    aprobadas: 6,
    pendientes: 1,
    reprobadas: 0,
  },
  ultimaActualizacion: "2024-06-19",
};

export const mockMateriasCalificaciones: MateriaCalificacion[] = [
  {
    id: 1,
    name: "Matemáticas",
    teacher: "Prof. Juan Pérez",
    promedio: 92,
  },
  {
    id: 2,
    name: "Lengua Española",
    teacher: "Prof. Ana Rodríguez",
    promedio: 88,
  },
  {
    id: 3,
    name: "Ciencias Sociales",
    teacher: "Prof. Roberto Castillo",
    promedio: 80,
  },
  {
    id: 4,
    name: "Ciencias Naturales",
    teacher: "Prof. María González",
    promedio: 75,
  },
  {
    id: 5,
    name: "Educación Física",
    teacher: "Prof. Gabriela Suárez",
    promedio: 95,
  },
  {
    id: 6,
    name: "Educación Artística",
    teacher: "Prof. Laura Martínez",
    promedio: 89,
  },
  {
    id: 7,
    name: "Inglés",
    teacher: "Prof. Michael Johnson",
    promedio: 65,
  },
]; 