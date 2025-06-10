import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { BookOpen, Clock, MapPin } from "lucide-react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { useMenu } from "../../hooks/useMenu";
import { Menu } from "../../components/menu";
import { mainMenuItems } from "../../data/menuItems";

export const Clases = (): JSX.Element => {
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
            Mis Clases
          </h1>
          <div className="space-y-4">
            {/* Clase de Matemáticas */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-azul-vivo/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-azul-vivo" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-texto-principal-oscuro">Matemáticas</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-texto-secundario">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>8:00 AM - 9:30 AM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Prof. Juan Pérez</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-azul-vivo border-azul-vivo">
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Clase de Física */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-color-secundario/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-color-secundario" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-texto-principal-oscuro">Física</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-texto-secundario">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>10:00 AM - 11:30 AM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Prof. María García</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-color-secundario border-color-secundario">
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Clase de Programación */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-color-primario-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-color-primario-2" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-texto-principal-oscuro">Programación</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-texto-secundario">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>1:00 PM - 2:30 PM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Prof. Carlos Rodríguez</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-color-primario-2 border-color-primario-2">
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <BottomNavigation
          currentView="clases"
          onDashboardClick={() => window.location.href = '/dashboard'}
          onHorariosClick={() => window.location.href = '/horarios'}
          onCalificacionesClick={() => window.location.href = '/calificaciones'}
          onProfileClick={() => window.location.href = '/profile'}
        />
      </div>
    </div>
  );
}; 