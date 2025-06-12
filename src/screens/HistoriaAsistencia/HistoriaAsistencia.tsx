import { useState } from "react";
import { Button } from "../../components/ui/button";
import { ChevronDown, CheckCircle, X, Menu } from "lucide-react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { useMenu } from "../../hooks/useMenu";
import { Menu as AppMenu } from "../../components/menu";
import { mainMenuItems } from "../../data/menuItems";
import { mockAttendanceData, academicPeriods, SubjectAttendance } from "../../data/attendanceData";

interface HistoriaAsistenciaProps {
  onLogout: () => void;
}

export const HistoriaAsistencia = ({ onLogout }: HistoriaAsistenciaProps): JSX.Element => {

    const [selectedPeriod, setSelectedPeriod] = useState(academicPeriods[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            
            <AppMenu
              items={mainMenuItems}
              isOpen={isMenuOpen}
              onClose={closeMenu}
              onItemClick={handleItemClick}
            />
            
            <div className="px-4 pt-24 pb-20">
             {/* Header Section */}
             <div className="flex items-center justify-between mb-6"></div>
              <h1 className="text-2xl font-semibold text-texto-principal-oscuro">Historial de axistencia</h1>

              {/* Período Académico Selector */}
              <div className="mb-6">
                <p className="text-texto-secundario text-sm mb-2">Seleccionar</p>
                <div className="relative">
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center px-4 py-2 text-base rounded-lg border border-lightmodegreygrey-200 shadow-sm focus:ring-2 focus:ring-azul-vivo focus:border-azul-vivo"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <div className="flex items-center gap-2">
                      <Menu className="w-5 h-5 text-lightmodesuccesssuccess" />
                      {selectedPeriod}
                    </div>
                    <ChevronDown className="w-4 h-4 text-texto-secundario" />
                  </Button>
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full bg-white border border-lightmodegreygrey-200 rounded-lg shadow-lg mt-1">
                      {academicPeriods.map((period) => (
                        <div
                          key={period}
                          className="px-4 py-2 text-texto-principal-oscuro hover:bg-lightmodegreygrey-100 cursor-pointer"
                          onClick={() => {
                            setSelectedPeriod(period);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {period}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Attendance Table */}
              <div className="overflow-x-auto rounded-lg border border-lightmodegreygrey-200 shadow-sm">
                <div className="inline-block min-w-full">
                  {/* Table Header */}
                  <div className="flex bg-lightmodegreygrey-200 border-b border-lightmodegreygrey-200">
                    <div className="flex-shrink-0 w-60 p-3 bg-white text-texto-secundario font-semibold text-sm border-r border-lightmodegreygrey-200">Asignaturas</div>
                    <div className="flex flex-nowrap flex-grow">
                      {mockAttendanceData[0]?.attendance.map((day, index) => (
                        <div key={index} className="flex-shrink-0 w-24 p-3 bg-white text-center text-texto-secundario font-semibold text-sm border-r border-lightmodegreygrey-200 last:border-r-0">
                          <p>{day.dayName}</p>
                          <p>{new Date(day.date).getDate()}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Table Body */}
                  {mockAttendanceData.map((subjectData: SubjectAttendance, subjectIndex) => (
                    <div key={subjectIndex} className="flex bg-lightmodegreygrey-200 border-b border-lightmodegreygrey-200 last:border-b-0">
                      <div className="flex-shrink-0 w-60 p-3 bg-white flex items-center gap-3 border-r border-lightmodegreygrey-200">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <img src={subjectData.teacherAvatar} alt={subjectData.teacherName} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-texto-principal-oscuro text-sm">{subjectData.subjectName}</h3>
                          <p className="text-texto-secundario text-xs">{subjectData.teacherName}</p>
                          <p className="text-texto-secundario text-xs">Código: {subjectData.teacherId}</p>
                        </div>
                      </div>
                      <div className="flex flex-nowrap flex-grow">
                        {subjectData.attendance.map((day, dayIndex) => (
                          <div key={dayIndex} className="flex-shrink-0 w-24 p-3 bg-white flex flex-col items-center justify-center border-r border-lightmodegreygrey-200 last:border-r-0">
                            {day.status === 'present' ? (
                              <>
                                <p className="text-xs text-lightmodesuccesssuccess">Presente</p>
                                <CheckCircle className="w-5 h-5 text-lightmodesuccesssuccess" />
                              </>
                            ) : (
                              <>
                                <p className="text-xs text-red-500">Ausente</p>
                                <X className="w-5 h-5 text-red-500" />
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
             </div>
            </div>

            <BottomNavigation
              currentView="historia-asistencia"
            />
          </div>
    );
};