import { SummaryItem } from '../components/dashboard/DashboardSummary';

// Custom icon components for the summary items
const CheckmarkBadgeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const BookMailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CheckmarkSquareIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const XMarkSquareIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const createDashboardSummaryData = (
  onAsistenciaClick?: () => void,
  onClasesClick?: () => void
): SummaryItem[] => [
  {
    id: 'asistencia',
    title: 'Total de asistencia',
    value: '90%',
    subtitle: 'Total de asistencia',
    icon: {
      component: CheckmarkBadgeIcon,
      backgroundColor: 'bg-yellow-400',
      iconColor: 'text-white',
      decorations: {
        topRight: 'bg-yellow-300',
        bottomLeft: 'bg-yellow-300'
      }
    },
    onClick: onAsistenciaClick
  },
  {
    id: 'asignaturas',
    title: 'Asignatura de hoy',
    value: '6',
    subtitle: 'Asignatura de hoy',
    icon: {
      component: BookMailIcon,
      backgroundColor: 'bg-blue-100',
      iconColor: 'text-blue-500'
    },
    onClick: onClasesClick
  },
  {
    id: 'tarea-completada',
    title: 'Tarea completada',
    value: '1',
    subtitle: 'Tarea completada',
    icon: {
      component: CheckmarkSquareIcon,
      backgroundColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  },
  {
    id: 'tareas-pendientes',
    title: 'Tareas pendientes',
    value: '3',
    subtitle: 'Tareas pendientes',
    icon: {
      component: XMarkSquareIcon,
      backgroundColor: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  }
];