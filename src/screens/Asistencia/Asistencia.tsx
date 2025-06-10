import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { useMenu } from "../../hooks/useMenu";
import { Menu } from "../../components/menu";
import { mainMenuItems } from "../../data/menuItems";

export const Asistencia = (): JSX.Element => {
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
          <h1 className="text-2xl font-semibold text-texto-principal-oscuro mb-6">
            Asistencia
          </h1>
          <div className="space-y-4">
            {/* Resumen de Asistencia */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-texto-principal-oscuro mb-4">Resumen</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-azul-vivo/5 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-azul-vivo">95%</div>
                    <div className="text-xs text-texto-secundario">Asistencia</div>
                  </div>
                  <div className="bg-color-secundario/5 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-color-secundario">2</div>
                    <div className="text-xs text-texto-secundario">Faltas</div>
                  </div>
                  <div className="bg-color-primario-2/5 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-color-primario-2">1</div>
                    <div className="text-xs text-texto-secundario">Tardanzas</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registro de Asistencia */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-texto-principal-oscuro mb-4">Registro de Asistencia</h3>
                <div className="space-y-3">
                  {/* Asistencia */}
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-azul-vivo" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-texto-principal-oscuro">Matemáticas</div>
                      <div className="text-xs text-texto-secundario">Lunes, 8:00 AM</div>
                    </div>
                    <div className="text-xs text-texto-secundario">Presente</div>
                  </div>

                  {/* Falta */}
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-color-secundario" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-texto-principal-oscuro">Física</div>
                      <div className="text-xs text-texto-secundario">Martes, 10:00 AM</div>
                    </div>
                    <div className="text-xs text-color-secundario">Ausente</div>
                  </div>

                  {/* Tardanza */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-color-primario-2" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-texto-principal-oscuro">Programación</div>
                      <div className="text-xs text-texto-secundario">Miércoles, 1:00 PM</div>
                    </div>
                    <div className="text-xs text-color-primario-2">Tardanza</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <BottomNavigation
          currentView="asistencia"
          onDashboardClick={() => window.location.href = '/dashboard'}
          onHorariosClick={() => window.location.href = '/horarios'}
          onCalificacionesClick={() => window.location.href = '/calificaciones'}
          onProfileClick={() => window.location.href = '/profile'}
        />
      </div>
    </div>
  );
}; 