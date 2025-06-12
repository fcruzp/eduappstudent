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
    id: 'historia-asistencia',
    label: 'Historia de Asistencia',
    icon: BookOpen,
    path: '/historia-asistencia'
  },
  {
    id: 'horarios',
    label: 'Horarios',
    icon: Calendar,
    path: '/horarios'
  },
  {
    id: 'lista-clases',
    label: 'Lista de Clases',
    icon: CheckCircle,
    path: '/lista-clases'
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
    path: '/'
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