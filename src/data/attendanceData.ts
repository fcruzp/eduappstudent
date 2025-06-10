export interface AttendanceDay {
  date: string; // e.g., "2024-06-13"
  dayName: string; // e.g., "Lunes"
  status: 'present' | 'absent';
}

export interface SubjectAttendance {
  id: string;
  subjectName: string;
  teacherName: string;
  teacherId: string; // Corresponds to Código: M-XXXX
  teacherAvatar: string;
  attendance: AttendanceDay[];
}

export const mockAttendanceData: SubjectAttendance[] = [
  {
    id: "MAT-001",
    subjectName: "Matemáticas",
    teacherName: "Luis Cedeño Perez",
    teacherId: "M-2341",
    teacherAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face", // Reusing teacher avatars from classScheduleData
    attendance: [
      { date: "2024-06-13", dayName: "Lunes", status: "present" },
      { date: "2024-06-14", dayName: "Martes", status: "present" },
      { date: "2024-06-15", dayName: "Miércoles", status: "present" },
      { date: "2024-06-16", dayName: "Jueves", status: "present" },
      { date: "2024-06-17", dayName: "Viernes", status: "absent" },
      { date: "2024-06-18", dayName: "Sábado", status: "present" },
      { date: "2024-06-19", dayName: "Domingo", status: "present" },
    ]
  },
  {
    id: "LEN-001",
    subjectName: "Lengua Española",
    teacherName: "Ana Rodríguez Méndez",
    teacherId: "M-1982",
    teacherAvatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    attendance: [
      { date: "2024-06-13", dayName: "Lunes", status: "present" },
      { date: "2024-06-14", dayName: "Martes", status: "present" },
      { date: "2024-06-15", dayName: "Miércoles", status: "absent" },
      { date: "2024-06-16", dayName: "Jueves", status: "present" },
      { date: "2024-06-17", dayName: "Viernes", status: "present" },
      { date: "2024-06-18", dayName: "Sábado", status: "present" },
      { date: "2024-06-19", dayName: "Domingo", status: "present" },
    ]
  },
  {
    id: "CIE-001",
    subjectName: "Ciencias Naturales",
    teacherName: "Carlos Peña Núñez",
    teacherId: "M-2467",
    teacherAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    attendance: [
      { date: "2024-06-13", dayName: "Lunes", status: "present" },
      { date: "2024-06-14", dayName: "Martes", status: "present" },
      { date: "2024-06-15", dayName: "Miércoles", status: "present" },
      { date: "2024-06-16", dayName: "Jueves", status: "present" },
      { date: "2024-06-17", dayName: "Viernes", status: "present" },
      { date: "2024-06-18", dayName: "Sábado", status: "absent" },
      { date: "2024-06-19", dayName: "Domingo", status: "present" },
    ]
  },
  {
    id: "SOC-001",
    subjectName: "Ciencias Sociales",
    teacherName: "Albert Grullón Pantaleón",
    teacherId: "M-2991",
    teacherAvatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    attendance: [
      { date: "2024-06-13", dayName: "Lunes", status: "present" },
      { date: "2024-06-14", dayName: "Martes", status: "present" },
      { date: "2024-06-15", dayName: "Miércoles", status: "present" },
      { date: "2024-06-16", dayName: "Jueves", status: "present" },
      { date: "2024-06-17", dayName: "Viernes", status: "present" },
      { date: "2024-06-18", dayName: "Sábado", status: "present" },
      { date: "2024-06-19", dayName: "Domingo", status: "present" },
    ]
  },
  {
    id: "ART-001",
    subjectName: "Educación Artística",
    teacherName: "Gabriela Suárez López",
    teacherId: "M-2055",
    teacherAvatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    attendance: [
      { date: "2024-06-13", dayName: "Lunes", status: "present" },
      { date: "2024-06-14", dayName: "Martes", status: "present" },
      { date: "2024-06-15", dayName: "Miércoles", status: "present" },
      { date: "2024-06-16", dayName: "Jueves", status: "present" },
      { date: "2024-06-17", dayName: "Viernes", status: "present" },
      { date: "2024-06-18", dayName: "Sábado", status: "present" },
      { date: "2024-06-19", dayName: "Domingo", status: "present" },
    ]
  },
  {
    id: "HUM-001",
    subjectName: "Formación Humana.",
    teacherName: "Joel Martínez Herrera",
    teacherId: "M-1982",
    teacherAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    attendance: [
      { date: "2024-06-13", dayName: "Lunes", status: "present" },
      { date: "2024-06-14", dayName: "Martes", status: "present" },
      { date: "2024-06-15", dayName: "Miércoles", status: "present" },
      { date: "2024-06-16", dayName: "Jueves", status: "present" },
      { date: "2024-06-17", dayName: "Viernes", status: "present" },
      { date: "2024-06-18", dayName: "Sábado", status: "present" },
      { date: "2024-06-19", dayName: "Domingo", status: "present" },
    ]
  },
  {
    id: "FIS-001",
    subjectName: "Educación Física",
    teacherName: "Pedro Castillo Guzmán",
    teacherId: "M-1432",
    teacherAvatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
    attendance: [
      { date: "2024-06-13", dayName: "Lunes", status: "present" },
      { date: "2024-06-14", dayName: "Martes", status: "present" },
      { date: "2024-06-15", dayName: "Miércoles", status: "present" },
      { date: "2024-06-16", dayName: "Jueves", status: "present" },
      { date: "2024-06-17", dayName: "Viernes", status: "present" },
      { date: "2024-06-18", dayName: "Sábado", status: "present" },
      { date: "2024-06-19", dayName: "Domingo", status: "present" },
    ]
  },
];

export const academicPeriods = [
  "1er Periodo",
  "2do Periodo",
  "3er Periodo",
  "4to Periodo",
  "5to Periodo",
  "6to Periodo",
  "Año Completo"
]; 