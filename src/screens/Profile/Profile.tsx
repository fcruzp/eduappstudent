import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { useMenu } from "../../hooks/useMenu";
import { Menu } from "../../components/menu";
import { mainMenuItems } from "../../data/menuItems";
import { useNavigate } from "react-router-dom";
import { StudentProfileView } from "../../components/dashboard/StudentProfileView";
import { ResumenCalificaciones } from "../../components/calificaciones/ResumenCalificaciones";
import { mockResumenCalificacionesData, mockMateriasCalificaciones } from "../../data/mockGradesData";

export const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  const { isOpen: isMenuOpen, openMenu, closeMenu, toggleMenu, handleItemClick } = useMenu({
    autoClose: true,
    onItemClick: (item) => {
      console.log('Menu item clicked:', item.label);
    }
  });

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
        
        <div className="px-4 pt-24 pb-20">
          <StudentProfileView
            name="Mario Ramirez P."
            code="D-466"
            grade="3er grado de secundaria"
            profileImage="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
            email="mario.ramirez@estudiante.gob.do"
            phone="+1 (809) 555-0123"
            location="Santo Domingo, República Dominicana"
            career="Liceo Juan Pablo Duarte"
            semester="4to Periodo"
            modality="Presencial"
            shift="Matutino"
            onEditProfile={() => console.log('Edit profile clicked')}
            onViewHistory={() => console.log('View history clicked')}
          />
          <div className="mt-6">
            <ResumenCalificaciones
              data={mockResumenCalificacionesData}
              materias={mockMateriasCalificaciones}
            />
          </div>
        </div>

        <BottomNavigation
          currentView="profile"
        />
      </div>
    </div>
  );
}; 