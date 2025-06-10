import { useState, useEffect } from 'react';
import { Notification } from '../types/notification';

// Mock notification data
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Nueva tarea disponible',
    preview: 'Matemáticas III - Ejercicios Cap. 5',
    fullMessage: 'Se ha asignado una nueva tarea para la materia de Matemáticas III. Los ejercicios del capítulo 5 deben ser completados antes del viernes 15 de enero. La tarea incluye problemas de álgebra avanzada y sistemas de ecuaciones lineales.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    isRead: false,
    type: 'assignment',
    icon: '📚',
    actionButtons: [
      { label: 'Ver Tarea', action: 'view-assignment', variant: 'primary' },
      { label: 'Descargar PDF', action: 'download-pdf', variant: 'secondary' }
    ],
    attachments: [
      { name: 'Ejercicios_Cap5.pdf', url: '#', type: 'pdf' }
    ]
  },
  {
    id: '2',
    title: 'Calificación publicada',
    preview: 'Historia Universal - Examen Parcial: 9.2',
    fullMessage: 'Tu calificación para el examen parcial de Historia Universal ha sido publicada. Has obtenido una calificación de 9.2 sobre 10. Excelente trabajo en el análisis de las civilizaciones antiguas.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    isRead: false,
    type: 'grade',
    icon: '🏆',
    actionButtons: [
      { label: 'Ver Detalles', action: 'view-grade', variant: 'primary' }
    ]
  },
  {
    id: '3',
    title: 'Próximo examen',
    preview: 'Física II - 15 de Enero, 2025',
    fullMessage: 'Recordatorio: El examen de Física II está programado para el 15 de enero de 2025 a las 10:00 AM en el aula 205. El examen cubrirá los temas de mecánica cuántica y termodinámica vistos en las últimas 4 semanas.',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    isRead: true,
    type: 'exam',
    icon: '📝',
    actionButtons: [
      { label: 'Ver Temario', action: 'view-syllabus', variant: 'primary' },
      { label: 'Agregar al Calendario', action: 'add-calendar', variant: 'secondary' }
    ]
  },
  {
    id: '4',
    title: 'Pago pendiente',
    preview: 'Colegiatura Enero 2025 - Vence en 5 días',
    fullMessage: 'Te recordamos que tienes un pago pendiente correspondiente a la colegiatura del mes de enero 2025. El monto es de $15,000 pesos y vence el 20 de enero. Puedes realizar el pago a través del portal de pagos en línea.',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    isRead: true,
    type: 'payment',
    icon: '💳',
    actionButtons: [
      { label: 'Pagar Ahora', action: 'pay-now', variant: 'primary' },
      { label: 'Ver Detalles', action: 'view-payment', variant: 'secondary' }
    ]
  },
  {
    id: '5',
    title: 'Actualización del sistema',
    preview: 'Nuevas funciones disponibles en el portal',
    fullMessage: 'Hemos actualizado el portal estudiantil con nuevas funciones que mejorarán tu experiencia. Ahora puedes acceder a un calendario integrado, descargar certificados digitales y recibir notificaciones push en tiempo real.',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    isRead: true,
    type: 'general',
    icon: '🔄',
    actionButtons: [
      { label: 'Explorar Funciones', action: 'explore-features', variant: 'primary' }
    ]
  }
];

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Sort notifications by timestamp (newest first)
  const sortedNotifications = [...notifications].sort((a, b) => 
    b.timestamp.getTime() - a.timestamp.getTime()
  );

  return {
    notifications: sortedNotifications,
    unreadCount,
    isDropdownOpen,
    markAsRead,
    markAllAsRead,
    toggleDropdown,
    closeDropdown
  };
};