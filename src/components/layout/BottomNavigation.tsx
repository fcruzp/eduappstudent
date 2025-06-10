import React from "react";
import { Calendar, FileText, Users } from "lucide-react";
import { Button } from "../ui/button";
import { BottomNavigationProps } from "../../types/bottomNavigation";
import { useNavigate } from "react-router-dom";

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentView
}) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-lightmodegreygrey-200 px-6 py-3">
        <div className="flex items-center justify-around">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex flex-col items-center gap-1 ${currentView === 'dashboard' ? 'text-azul-vivo' : 'text-texto-secundario'}`}
            onClick={() => navigate('/dashboard')}
          >
            <div className={`w-6 h-6 ${currentView === 'dashboard' ? 'bg-azul-vivo' : 'bg-texto-secundario'} rounded-sm flex items-center justify-center`}>
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-xs">Inicio</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex flex-col items-center gap-1 ${currentView === 'horarios' ? 'text-azul-vivo' : 'text-texto-secundario'}`}
            onClick={() => navigate('/horarios')}
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xs">Horarios</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex flex-col items-center gap-1 ${currentView === 'calificaciones' ? 'text-azul-vivo' : 'text-texto-secundario'}`}
            onClick={() => navigate('/calificaciones')}
          >
            <FileText className="w-6 h-6" />
            <span className="text-xs">Notas</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex flex-col items-center gap-1 ${currentView === 'profile' ? 'text-azul-vivo' : 'text-texto-secundario'}`}
            onClick={() => navigate('/profile')}
          >
            <Users className="w-6 h-6" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </nav>
      {/* Bottom Padding for Navigation */}
      <div className="h-20"></div>
    </>
  );
}; 