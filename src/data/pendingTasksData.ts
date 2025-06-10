export interface Task {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  time: string;
  description: string;
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
}

export const pendingTasks: Task[] = [
  {
    id: '1',
    title: 'Lengua Española - Redacción y Ortografía',
    subject: 'Lengua Española',
    dueDate: 'Hoy',
    time: 'Antes del día de hoy',
    description: 'Revisión de técnicas de redacción y reglas ortográficas fundamentales para mejorar la expresión escrita. Esta clase incluye ejercicios prácticos de escritura y corrección de textos.',
    imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600'
  },
  {
    id: '2',
    title: 'Matemáticas III - Álgebra Avanzada',
    subject: 'Matemáticas',
    dueDate: 'Hoy',
    time: '10:00 AM - 11:30 AM',
    description: 'Estudio de ecuaciones cuadráticas y sistemas de ecuaciones lineales con aplicaciones prácticas. Resolveremos problemas complejos usando métodos algebraicos avanzados.',
    imageUrl: 'https://images.pexels.com/photos/6256/mathematics-computation-math-numbers.jpg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-green-600'
  },
  {
    id: '3',
    title: 'Historia Universal - Civilizaciones Antiguas',
    subject: 'Historia',
    dueDate: 'Hoy',
    time: '2:00 PM - 3:30 PM',
    description: 'Análisis de las principales civilizaciones de la antigüedad y su impacto en la cultura moderna. Exploraremos Egipto, Mesopotamia, Grecia y Roma en detalle.',
    imageUrl: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-600'
  }
]; 