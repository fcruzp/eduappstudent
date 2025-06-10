import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Header } from "../../components/layout";
import { Menu } from "../../components/menu";
import { useMenu } from "../../hooks/useMenu";
import { useNotifications } from "../../hooks/useNotifications";
import { NotificationButton } from "../../components/notifications/NotificationButton";
import { NotificationDropdown } from "../../components/notifications/NotificationDropdown";
import { NotificationDetail } from "../../components/notifications/NotificationDetail";
import { DashboardView } from "../../components/dashboard/DashboardView";
import { StudentProfileView } from "../../components/dashboard/StudentProfileView";
import { ClasesView } from "../../components/dashboard/ClasesView";
import { HorariosView } from "../../components/dashboard/HorariosView";
import { AsistenciaView } from "../../components/dashboard/AsistenciaView";
import { CalificacionesView } from "../../components/dashboard/CalificacionesView";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { Notification } from "../../types/notification";
import { mainMenuItems } from "../../data/menuItems";
import { useNavigate } from "react-router-dom";
import { HistoriaAsistenciaView } from "../../components/dashboard/HistoriaAsistenciaView";

export const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'historia-asistencia' | 'horarios' | 'lista-clases' | 'calificaciones'>('dashboard');
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [isNotificationDetailOpen, setIsNotificationDetailOpen] = useState(false);
  
  // Menu system
  const { isOpen: isMenuOpen, openMenu, closeMenu, toggleMenu, handleItemClick } = useMenu({
    autoClose: true,
    onItemClick: (item) => {
      switch (item.id) {
        case 'inicio':
          navigate('/dashboard');
          break;
        case 'profile':
        case 'view-profile':
          navigate('/profile');
          break;
        case 'historia-asistencia':
          navigate('/historia-asistencia');
          break;
        case 'horarios':
          navigate('/horarios');
          break;
        case 'lista-clases':
          navigate('/lista-clases');
          break;
        case 'calificaciones':
          navigate('/calificaciones');
          break;
        case 'logout':
          console.log('Logging out...');
          break;
        default:
          break;
      }
    }
  });
  
  // Notification system
  const {
    notifications,
    unreadCount,
    isDropdownOpen,
    markAsRead,
    markAllAsRead,
    toggleDropdown,
    closeDropdown
  } = useNotifications();

  const handleNotificationClick = (notification: Notification) => {
    setSelectedNotification(notification);
    setIsNotificationDetailOpen(true);
    markAsRead(notification.id);
    closeDropdown();
  };

  const closeNotificationDetail = () => {
    setIsNotificationDetailOpen(false);
    setSelectedNotification(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <DashboardView
            onAsistenciaClick={() => navigate('/lista-clases')}
            onClasesClick={() => navigate('/clases')}
            onProfileClick={() => navigate('/profile')}
            onSearchClick={() => console.log('Search clicked')}
            userName="Mario Ramirez P."
          />
        );
      case 'profile':
        return (
          <StudentProfileView
            name="Mario Ramirez P."
            code="D-466"
            grade="3er grado de secundaria"
            profileImage="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
            email="mario.ramirez@estudiante.edu.do"
            phone="+1 (809) 555-0123"
            location="Santo Domingo, República Dominicana"
            career="Ingeniería en Sistemas"
            semester="4to Periodo"
            modality="Presencial"
            shift="Matutino"
            progress={{
              completed: 75,
              credits: 120,
              index: 8.5
            }}
            onEditProfile={() => console.log('Edit profile clicked')}
            onViewHistory={() => console.log('View history clicked')}
          />
        );
      case 'historia-asistencia':
        return <HistoriaAsistenciaView onBackClick={() => navigate('/dashboard')} />;
      case 'horarios':
        return <HorariosView onBackClick={() => navigate('/dashboard')} />;
      case 'lista-clases':
        return <AsistenciaView onBackClick={() => navigate('/dashboard')} />;
      case 'calificaciones':
        return <CalificacionesView onBackClick={() => navigate('/dashboard')} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gris-claro min-h-screen w-full">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
        <Header
          onMenuClick={toggleMenu}
          onSearchClick={() => console.log('Search clicked')}
          onUserProfileClick={() => console.log('Profile clicked')}
        />
        
        <Menu
          items={mainMenuItems}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          onItemClick={handleItemClick}
        />

        {renderContent()}

        {selectedNotification && (
          <NotificationDetail
            notification={selectedNotification}
            onClose={closeNotificationDetail}
            isOpen={isNotificationDetailOpen}
          />
        )}

        <BottomNavigation
          currentView={currentView}
        />
      </div>
    </div>
  );
};