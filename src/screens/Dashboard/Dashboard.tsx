import { useState } from "react";
import { Header } from "../../components/layout";
import { Menu } from "../../components/menu";
import { useMenu } from "../../hooks/useMenu";
import { DashboardView } from "../../components/dashboard/DashboardView";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { mainMenuItems } from "../../data/menuItems";
import { useNavigate } from "react-router-dom";


export const Dashboard = ({ onLogout }: { onLogout: () => void }): JSX.Element => {
  const navigate = useNavigate();
  //const [currentView, setCurrentView] = useState<'dashboard' | 'profile' | 'historia-asistencia' | 'horarios' | 'lista-clases' | 'calificaciones'>('dashboard');
 
  
  // Menu system
     const { isOpen: isMenuOpen, closeMenu, toggleMenu, handleItemClick } = useMenu({
        autoClose: true,
    onItemClick: (item) => {
      if (item.id === "logout") {
        onLogout();
      } else {
        console.log('Menu item clicked:', item.label);
      }
    }
    });

  return (
    <div className="bg-gris-claro min-h-screen w-full">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
        <Header
          onMenuClick={toggleMenu}
          onSearchClick={() => console.log('Search clicked')}
        />
        
        <Menu
          items={mainMenuItems}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          onItemClick={handleItemClick}
        />

        <DashboardView
            onHistoriaAsistenciaClick={() => navigate('/historia-asistencia')}  //Total de asistencia (Historial de asistencia)
            onClasesClick={() => navigate('/lista-clases')}  //asignartura de hoy (horarios de clases)
            onProfileClick={() => navigate('/profile')}  //asignartura de hoy (horarios de clases)
            onSearchClick={() => console.log('Search clicked')}
            userName="Mario Ramirez P."
          />

        <BottomNavigation
          currentView="dashboard"
        />
      </div>
    </div>
  );
};