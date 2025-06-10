// Función para determinar el color según la calificación
export const getGradeColor = (grade: number): string => {
  if (grade >= 70) return "text-green-600"; // Aprobada (verde)
  if (grade >= 60) return "text-yellow-600"; // Regular (amarillo)
  return "text-red-600"; // Mala (rojo)
}; 