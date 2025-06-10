import { MenuItem } from '../types/menu';
import { 
  Calendar, 
  FileText, 
  CreditCard, 
  Users, 
  BookOpen, 
  User,
  Settings,
  LogOut,
  Home,
  Bell,
  Clock,
  CheckCircle
} from 'lucide-react';

export const mainMenuItems: MenuItem[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: Home,
    path: '/dashboard'
  },
  {
    id: 'clases',
    label: 'Clases',
    icon: BookOpen,
    path: '/clases'
  },
  {
    id: 'horarios',
    label: 'Horarios',
    icon: Calendar,
    path: '/horarios'
  },
  {
    id: 'asistencia',
    label: 'Asistencia',
    icon: CheckCircle,
    path: '/asistencia'
  },
  {
    id: 'calificaciones',
    label: 'Calificaciones',
    icon: FileText,
    path: '/calificaciones',
    badge: 'Nuevo'
  },
  {
    id: 'divider-1',
    label: '',
    divider: true
  },
  {
    id: 'profile',
    label: 'Perfil',
    icon: User,
    path: '/profile'
  },
  {
    id: 'notifications',
    label: 'Notificaciones',
    icon: Bell,
    path: '/notifications',
    badge: 2
  },
  {
    id: 'settings',
    label: 'Configuración',
    icon: Settings,
    path: '/settings'
  },
  {
    id: 'divider-2',
    label: '',
    divider: true
  },
  {
    id: 'logout',
    label: 'Cerrar Sesión',
    icon: LogOut,
    onClick: () => {
      console.log('Logging out...');
      // Implement logout logic
    }
  }
];

export const profileMenuItems: MenuItem[] = [
  {
    id: 'view-profile',
    label: 'Ver Perfil',
    icon: User
  },
  {
    id: 'edit-profile',
    label: 'Editar Perfil',
    icon: Settings
  },
  {
    id: 'divider-1',
    label: '',
    divider: true
  },
  {
    id: 'logout',
    label: 'Cerrar Sesión',
    icon: LogOut
  }
];