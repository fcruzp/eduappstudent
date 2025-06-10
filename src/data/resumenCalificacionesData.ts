// Definir tipos para el resumen de calificaciones que está en la pantalla de calificaciones
export interface ResumenCalificacionesData {
  promedioGeneral: number;
  estadisticas: {
    aprobadas: number;
    pendientes: number;
    reprobadas: number;
  };
  ultimaActualizacion: string;
}

export const resumenCalificacionesData: ResumenCalificacionesData = {
  promedioGeneral: 69.5,
  estadisticas: {
    aprobadas: 25,
    pendientes: 2,
    reprobadas: 0
  },
  ultimaActualizacion: "2024-03-15"
}; 