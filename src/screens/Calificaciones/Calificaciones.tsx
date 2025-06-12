import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { BookOpen, Calendar, ChevronRight } from "lucide-react";
import { mainMenuItems } from "../../data/menuItems";
import { materias, competenciasData, type Competencia } from "../../data/calificacionesData";
import { resumenCalificacionesData } from "../../data/resumenCalificacionesData";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { useMenu } from "../../hooks/useMenu";
import { Menu } from "../../components/menu";
import { ResumenCalificaciones } from "../../components/calificaciones/ResumenCalificaciones";
import { getGradeColor } from "../../utils/getGradeColor";

interface CalificacionesProps {
  onLogout: () => void;
}

export const Calificaciones = ({ onLogout }: CalificacionesProps): JSX.Element => {

  const [currentCompetencia, setCurrentCompetencia] = useState<Competencia>(competenciasData.comunicacion);
  
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
        
        <div className="px-4 pt-24 pb-20">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-texto-principal-oscuro">
              Calificaciones
            </h1>
            <Button variant="ghost" size="sm" className="text-azul-vivo">
              Ver Historial
            </Button>
          </div>

          <ResumenCalificaciones 
            data={resumenCalificacionesData} 
            materias={materias.map(materia => ({
              id: materia.id,
              name: materia.name,
              teacher: materia.teacher,
              promedio: currentCompetencia.notas[materia.id].reduce((acc, period) => acc + period.grade, 0) / 4
            }))}
          />

          {/* Competencias Fundamentales */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-texto-principal-oscuro mb-3">
              Competencias Fundamentales
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {Object.values(competenciasData).map((competencia) => {
                const Icon = competencia.icon;
                return (
                  <button
                    key={competencia.id}
                    onClick={() => setCurrentCompetencia(competencia)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      currentCompetencia.id === competencia.id
                        ? 'border-azul-vivo bg-azul-vivo/5'
                        : 'border-gray-200 hover:border-azul-vivo/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${
                        currentCompetencia.id === competencia.id
                          ? 'text-azul-vivo'
                          : 'text-texto-secundario'
                      }`} />
                      <span className={`text-sm font-medium ${
                        currentCompetencia.id === competencia.id
                          ? 'text-azul-vivo'
                          : 'text-texto-principal-oscuro'
                      }`}>
                        {competencia.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-texto-secundario leading-relaxed">
              {currentCompetencia.description}
            </p>
          </div>

          {/* Lista de Calificaciones */}
          <div className="space-y-4">
            {materias
              .filter(materia => currentCompetencia.materiasIds.includes(materia.id))
              .map((materia) => (
                <Card key={materia.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-texto-principal-oscuro">{materia.name}</h3>
                        <p className="text-sm text-texto-secundario">{materia.teacher}</p>
                      </div>
                      <div className={`text-2xl font-bold ${getGradeColor(currentCompetencia.notas[materia.id].reduce((acc: number, period) => acc + period.grade, 0) / 4)}`}>
                        {currentCompetencia.notas[materia.id].reduce((acc: number, period) => acc + period.grade, 0) / 4}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {currentCompetencia.notas[materia.id].map((period) => (
                        <div key={period.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-texto-secundario" />
                            <span className="text-texto-secundario">{period.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`font-medium ${getGradeColor(period.grade)}`}>{period.grade}</span>
                            <span className="text-texto-secundario">({period.weight}%)</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-texto-secundario">
                        <Calendar className="w-4 h-4" />
                        <span>Última actualización: 2024-03-15</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-azul-vivo">
                        Ver Detalles
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        <BottomNavigation
          currentView="calificaciones"
        />
      </div>
    </div>
  );
};