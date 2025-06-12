import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { useMenu } from "../../hooks/useMenu";
import { Menu } from "../../components/menu";
import { mainMenuItems } from "../../data/menuItems";
import { useNavigate } from "react-router-dom";

// Datos de ejemplo para las clases
const scheduleData = [
  {
    id: 1,
    subject: "Matemáticas",
    teacher: "Prof. García",
    room: "Aula 101",
    startTime: "08:00",
    endTime: "09:30",
    day: "Lunes",
    color: "bg-blue-500",
    borderColor: "border-blue-600"
  },
  {
    id: 2,
    subject: "Física",
    teacher: "Prof. Rodríguez",
    room: "Aula 203",
    startTime: "10:00",
    endTime: "11:30",
    day: "Lunes",
    color: "bg-green-500",
    borderColor: "border-green-600"
  },
  {
    id: 3,
    subject: "Programación",
    teacher: "Prof. Martínez",
    room: "Lab 305",
    startTime: "13:00",
    endTime: "14:30",
    day: "Martes",
    color: "bg-purple-500",
    borderColor: "border-purple-600"
  },
  {
    id: 4,
    subject: "Historia",
    teacher: "Prof. López",
    room: "Aula 102",
    startTime: "08:00",
    endTime: "09:30",
    day: "Miércoles",
    color: "bg-yellow-500",
    borderColor: "border-yellow-600"
  },
  {
    id: 5,
    subject: "Lengua Española",
    teacher: "Prof. Sánchez",
    room: "Aula 104",
    startTime: "10:00",
    endTime: "11:30",
    day: "Miércoles",
    color: "bg-red-500",
    borderColor: "border-red-600"
  }
];

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00"
];

export const Horarios = (): JSX.Element => {
  const navigate = useNavigate();
  const { isOpen: isMenuOpen, openMenu, closeMenu, toggleMenu, handleItemClick } = useMenu({
    autoClose: true,
    onItemClick: (item) => {
      switch (item.id) {
        case 'inicio':
          navigate('/dashboard');
          break;
        case 'horarios':
          navigate('/horarios');
          break;
        case 'calificaciones':
          navigate('/calificaciones');
          break;
        case 'profile':
        case 'view-profile':
          navigate('/profile');
          break;
        case 'clases':
          navigate('/clases');
          break;
        case 'asistencia':
          navigate('/asistencia');
          break;
        case 'logout':
          console.log('Logging out...');
          break;
        default:
          break;
      }
    }
  });

  const getClassForTimeSlot = (day: string, timeSlot: string) => {
    return scheduleData.find(
      classItem => classItem.day === day && classItem.startTime === timeSlot
    );
  };

  return (
    <div className="bg-gris-claro min-h-screen w-full">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
        <Header
          onMenuClick={toggleMenu}
          onSearchClick={() => console.log('Search clicked')}
          onUserProfileClick={() => navigate('/profile')}
        />
        
        <Menu
          items={mainMenuItems}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          onItemClick={handleItemClick}
        />
        
        <div className="px-4 pt-24 pb-20">
          <h1 className="text-2xl font-semibold text-texto-principal-oscuro mb-6">
            Horario de Asignaturas
          </h1>

          {/* Schedule Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header with days */}
              <div className="grid grid-cols-7 gap-1 mb-1">
                <div className="w-16"></div> {/* Time column */}
                {days.map((day) => (
                  <div key={day} className="text-center font-semibold text-texto-principal-oscuro bg-gray-50 py-2 rounded-lg border border-gray-200 text-sm">
                    {day}
                  </div>
                ))}
              </div>

              {/* Time slots and classes */}
              {timeSlots.map((timeSlot) => (
                <div key={timeSlot} className="grid grid-cols-7 gap-1 mb-1">
                  <div className="w-16 text-sm text-texto-secundario flex items-center bg-gray-50 py-2 px-2 rounded-lg border border-gray-200">
                    {timeSlot}
                  </div>
                  {days.map((day) => {
                    const classItem = getClassForTimeSlot(day, timeSlot);
                    return (
                      <div key={`${day}-${timeSlot}`} className="relative">
                        {classItem ? (
                          <div className={`p-1.5 rounded-lg ${classItem.color} ${classItem.borderColor} border-2 text-white shadow-sm hover:shadow-md transition-shadow`}>
                            <div className="font-medium text-xs">{classItem.subject}</div>
                            <div className="text-[10px] opacity-90">{classItem.room}</div>
                            <div className="text-[10px] opacity-90">{classItem.teacher}</div>
                          </div>
                        ) : (
                          <div className="h-16 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-texto-principal-oscuro mb-3">
              Leyenda
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {scheduleData.map((classItem) => (
                <div key={classItem.id} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${classItem.color}`}></div>
                  <span className="text-sm text-texto-secundario">{classItem.subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BottomNavigation
          currentView="horarios"
        />
      </div>
    </div>
  );
}; 