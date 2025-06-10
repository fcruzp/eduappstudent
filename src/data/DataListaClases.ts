// Types for class schedule data
export type ClassStatus = 'completed' | 'in-progress' | 'pending' | 'cancelled';

export interface Teacher {
  id: string;
  name: string;
  email: string;
  avatar: string;
  department: string;
  specialization: string[];
}

export interface ClassSchedule {
  id: number;
  subject: string;
  courseLevel: string;
  gradeLevel: string;
  section: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  teacherId: string;
  teacher: Teacher;
  status: ClassStatus;
  date: string;
  classroom: string;
  capacity: number;
  enrolledStudents: number;
  description?: string;
  materials?: string[];
  objectives?: string[];
}

export interface ClassSummary {
  totalClasses: number;
  completedClasses: number;
  inProgressClasses: number;
  pendingClasses: number;
  cancelledClasses: number;
  attendanceRate: number;
}

// Mock Teachers Data
export const teachersData: Teacher[] = [
  {
    id: "T-001",
    name: "Ana Rodríguez Méndez",
    email: "ana.rodriguez@escuela.edu.do",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    department: "Lenguas",
    specialization: ["Lengua Española", "Literatura", "Gramática"]
  },
  {
    id: "T-002",
    name: "Carlos Méndez Rivera",
    email: "carlos.mendez@escuela.edu.do",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    department: "Matemáticas",
    specialization: ["Álgebra", "Geometría", "Cálculo"]
  },
  {
    id: "T-003",
    name: "María González López",
    email: "maria.gonzalez@escuela.edu.do",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    department: "Ciencias",
    specialization: ["Biología", "Química", "Ciencias Naturales"]
  },
  {
    id: "T-004",
    name: "Roberto Castillo Guzmán",
    email: "roberto.castillo@escuela.edu.do",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    department: "Ciencias Sociales",
    specialization: ["Historia", "Geografía", "Educación Cívica"]
  },
  {
    id: "T-005",
    name: "Gabriela Suárez López",
    email: "gabriela.suarez@escuela.edu.do",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    department: "Educación Física",
    specialization: ["Deportes", "Recreación", "Salud Física"]
  },
  {
    id: "T-006",
    name: "Laura Martínez Pérez",
    email: "laura.martinez@escuela.edu.do",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    department: "Artes",
    specialization: ["Educación Artística", "Música", "Teatro"]
  },
  {
    id: "T-007",
    name: "Michael Johnson Smith",
    email: "michael.johnson@escuela.edu.do",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    department: "Idiomas",
    specialization: ["Inglés", "Francés", "Comunicación"]
  },
  {
    id: "T-008",
    name: "Carmen Jiménez Torres",
    email: "carmen.jimenez@escuela.edu.do",
    avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    department: "Tecnología",
    specialization: ["Informática", "Programación", "Tecnología Educativa"]
  }
];

// Helper function to get teacher by ID
export const getTeacherById = (teacherId: string): Teacher | undefined => {
  return teachersData.find(teacher => teacher.id === teacherId);
};

// Mock Class Schedule Data
export const classScheduleData: ClassSchedule[] = [
  {
    id: 1,
    subject: "Lengua Española",
    courseLevel: "Grado 4º Grupo A",
    gradeLevel: "4º",
    section: "A",
    startTime: "8:00",
    endTime: "9:00",
    duration: 60,
    teacherId: "T-001",
    teacher: teachersData[0],
    status: "completed",
    date: "2024-06-10",
    classroom: "Aula 201",
    capacity: 30,
    enrolledStudents: 28,
    description: "Análisis de textos narrativos y comprensión lectora",
    materials: ["Libro de texto", "Cuaderno", "Lápices de colores"],
    objectives: ["Mejorar comprensión lectora", "Analizar estructura narrativa"]
  },
  {
    id: 2,
    subject: "Matemáticas",
    courseLevel: "Grado 4º Grupo A",
    gradeLevel: "4º",
    section: "A",
    startTime: "9:00",
    endTime: "10:00",
    duration: 60,
    teacherId: "T-002",
    teacher: teachersData[1],
    status: "in-progress",
    date: "2024-06-10",
    classroom: "Aula 202",
    capacity: 30,
    enrolledStudents: 29,
    description: "Operaciones con fracciones y números decimales",
    materials: ["Calculadora", "Regla", "Compás"],
    objectives: ["Dominar operaciones con fracciones", "Resolver problemas prácticos"]
  },
  {
    id: 3,
    subject: "Ciencias Naturales",
    courseLevel: "Grado 4º Grupo A",
    gradeLevel: "4º",
    section: "A",
    startTime: "10:15",
    endTime: "11:15",
    duration: 60,
    teacherId: "T-003",
    teacher: teachersData[2],
    status: "pending",
    date: "2024-06-10",
    classroom: "Laboratorio 1",
    capacity: 25,
    enrolledStudents: 27,
    description: "Experimentos sobre el ciclo del agua",
    materials: ["Microscopio", "Probetas", "Agua", "Colorantes"],
    objectives: ["Comprender el ciclo del agua", "Realizar experimentos científicos"]
  },
  {
    id: 4,
    subject: "Ciencias Sociales",
    courseLevel: "Grado 4º Grupo A",
    gradeLevel: "4º",
    section: "A",
    startTime: "11:15",
    endTime: "12:15",
    duration: 60,
    teacherId: "T-004",
    teacher: teachersData[3],
    status: "pending",
    date: "2024-06-10",
    classroom: "Aula 203",
    capacity: 30,
    enrolledStudents: 26,
    description: "Historia de la República Dominicana - Época Colonial",
    materials: ["Atlas", "Mapas históricos", "Línea de tiempo"],
    objectives: ["Conocer la historia colonial", "Analizar causas y consecuencias"]
  },
  {
    id: 5,
    subject: "Educación Física",
    courseLevel: "Grado 4º Grupo A",
    gradeLevel: "4º",
    section: "A",
    startTime: "1:00",
    endTime: "2:00",
    duration: 60,
    teacherId: "T-005",
    teacher: teachersData[4],
    status: "pending",
    date: "2024-06-10",
    classroom: "Cancha Deportiva",
    capacity: 35,
    enrolledStudents: 30,
    description: "Deportes en equipo - Voleibol básico",
    materials: ["Balón de voleibol", "Red", "Conos"],
    objectives: ["Desarrollar coordinación", "Fomentar trabajo en equipo"]
  },
  {
    id: 6,
    subject: "Educación Artística",
    courseLevel: "Grado 4º Grupo A",
    gradeLevel: "4º",
    section: "A",
    startTime: "2:00",
    endTime: "3:00",
    duration: 60,
    teacherId: "T-006",
    teacher: teachersData[5],
    status: "pending",
    date: "2024-06-10",
    classroom: "Aula de Arte",
    capacity: 25,
    enrolledStudents: 24,
    description: "Técnicas de pintura con acuarelas",
    materials: ["Acuarelas", "Pinceles", "Papel especial", "Agua"],
    objectives: ["Desarrollar creatividad", "Aprender técnicas artísticas"]
  },
  {
    id: 7,
    subject: "Inglés",
    courseLevel: "Grado 4º Grupo A",
    gradeLevel: "4º",
    section: "A",
    startTime: "3:15",
    endTime: "4:15",
    duration: 60,
    teacherId: "T-007",
    teacher: teachersData[6],
    status: "pending",
    date: "2024-06-10",
    classroom: "Aula 204",
    capacity: 30,
    enrolledStudents: 28,
    description: "Vocabulario sobre la familia y conversación básica",
    materials: ["Diccionario", "Audio CD", "Flashcards"],
    objectives: ["Ampliar vocabulario", "Practicar pronunciación"]
  },
  {
    id: 8,
    subject: "Informática",
    courseLevel: "Grado 4º Grupo A",
    gradeLevel: "4º",
    section: "A",
    startTime: "4:15",
    endTime: "5:15",
    duration: 60,
    teacherId: "T-008",
    teacher: teachersData[7],
    status: "pending",
    date: "2024-06-10",
    classroom: "Laboratorio de Computación",
    capacity: 20,
    enrolledStudents: 22,
    description: "Introducción a la programación con Scratch",
    materials: ["Computadora", "Software Scratch", "Manual"],
    objectives: ["Introducir conceptos de programación", "Desarrollar pensamiento lógico"]
  }
];

// Additional sample data for different dates and scenarios
export const weeklyScheduleData: ClassSchedule[] = [
  // Monday classes (already defined above)
  ...classScheduleData,
  
  // Tuesday classes
  {
    id: 9,
    subject: "Matemáticas Avanzadas",
    courseLevel: "Grado 5º Grupo B",
    gradeLevel: "5º",
    section: "B",
    startTime: "8:00",
    endTime: "9:30",
    duration: 90,
    teacherId: "T-002",
    teacher: teachersData[1],
    status: "pending",
    date: "2024-06-11",
    classroom: "Aula 301",
    capacity: 25,
    enrolledStudents: 23,
    description: "Geometría avanzada y cálculo de áreas",
    materials: ["Calculadora científica", "Compás", "Transportador"],
    objectives: ["Dominar cálculos geométricos", "Resolver problemas complejos"]
  },
  
  // Wednesday classes
  {
    id: 10,
    subject: "Química Básica",
    courseLevel: "Grado 6º Grupo A",
    gradeLevel: "6º",
    section: "A",
    startTime: "10:00",
    endTime: "11:30",
    duration: 90,
    teacherId: "T-003",
    teacher: teachersData[2],
    status: "cancelled",
    date: "2024-06-12",
    classroom: "Laboratorio 2",
    capacity: 20,
    enrolledStudents: 18,
    description: "Reacciones químicas básicas - CLASE CANCELADA",
    materials: ["Tubos de ensayo", "Reactivos", "Gafas de seguridad"],
    objectives: ["Comprender reacciones químicas", "Aplicar medidas de seguridad"]
  }
];

// Utility functions for data manipulation
export const getClassesByStatus = (status: ClassStatus): ClassSchedule[] => {
  return classScheduleData.filter(classItem => classItem.status === status);
};

export const getClassesByDate = (date: string): ClassSchedule[] => {
  return classScheduleData.filter(classItem => classItem.date === date);
};

export const getClassesByTeacher = (teacherId: string): ClassSchedule[] => {
  return classScheduleData.filter(classItem => classItem.teacherId === teacherId);
};

export const getClassesBySubject = (subject: string): ClassSchedule[] => {
  return classScheduleData.filter(classItem => classItem.subject === subject);
};

// Calculate class summary statistics
export const calculateClassSummary = (classes: ClassSchedule[] = classScheduleData): ClassSummary => {
  const totalClasses = classes.length;
  const completedClasses = classes.filter(c => c.status === 'completed').length;
  const inProgressClasses = classes.filter(c => c.status === 'in-progress').length;
  const pendingClasses = classes.filter(c => c.status === 'pending').length;
  const cancelledClasses = classes.filter(c => c.status === 'cancelled').length;
  
  const attendanceRate = totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;
  
  return {
    totalClasses,
    completedClasses,
    inProgressClasses,
    pendingClasses,
    cancelledClasses,
    attendanceRate: Math.round(attendanceRate * 100) / 100
  };
};

// Get classes for current week
export const getCurrentWeekClasses = (): ClassSchedule[] => {
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
  
  return weeklyScheduleData.filter(classItem => {
    const classDate = new Date(classItem.date);
    return classDate >= startOfWeek && classDate <= endOfWeek;
  });
};

// Default export for easy importing
export default {
  classScheduleData,
  teachersData,
  weeklyScheduleData,
  getClassesByStatus,
  getClassesByDate,
  getClassesByTeacher,
  getClassesBySubject,
  calculateClassSummary,
  getCurrentWeekClasses,
  getTeacherById
}; 