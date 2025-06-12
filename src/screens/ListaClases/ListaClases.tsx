import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Calendar as CalendarComponent } from "../../components/ui/calendar";
import { ChevronDown, CheckCircle, Clock, Calendar } from "lucide-react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/layout/BottomNavigation";
import { useMenu } from "../../hooks/useMenu";
import { Menu } from "../../components/menu";
import { mainMenuItems } from "../../data/menuItems";
import {
  classScheduleData,
  calculateClassSummary,
  getClassesByDate,
  type ClassStatus,
  type ClassSchedule
} from "../../data/DataListaClases";

interface ListaClasesProps {
  onLogout: () => void;
}

const getStatusIcon = (status: ClassStatus) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-white" />;
    case 'in-progress':
      return <Clock className="w-5 h-5 text-white" />;
    case 'pending':
      return <Calendar className="w-5 h-5 text-texto-secundario" />;
    default:
      return <Calendar className="w-5 h-5 text-texto-secundario" />;
  }
};

const getCardStyles = (status: ClassStatus) => {
  switch (status) {
    case 'completed':
      return "bg-lightmodesuccesssuccess shadow-lg shadow-lightmodesuccesssuccess/25";
    case 'in-progress':
      return "bg-azul-marino shadow-lg shadow-azul-marino/30";
    case 'pending':
      return "bg-white shadow-md shadow-lightmodegreygrey-300/20 border border-lightmodegreygrey-200";
    default:
      return "bg-white shadow-md shadow-lightmodegreygrey-300/20 border border-lightmodegreygrey-200";
  }
};

const getTextStyles = (status: ClassStatus) => {
  switch (status) {
    case 'completed':
    case 'in-progress':
      return {
        primary: "text-white",
        secondary: "text-white/80",
        tertiary: "text-white/60"
      };
    case 'pending':
    default:
      return {
        primary: "text-texto-principal-oscuro",
        secondary: "text-texto-secundario",
        tertiary: "text-texto-secundario"
      };
  }
};

export const ListaClases = ({ onLogout }: ListaClasesProps): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  
  // Se agrega la llamada a onLogout en el menú
  const { isOpen: isMenuOpen, openMenu, closeMenu, toggleMenu, handleItemClick } = useMenu({
    autoClose: true,
    onItemClick: (item) => {
      if (item.id === 'logout') {
        onLogout();
      } else {
        console.log('Menu item clicked:', item.label);
      }
    }
  });

  // Cierra el calendario al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const formatDate = (date: Date) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${dayName}, ${day} de ${month} ${year}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

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
        
        <div className="px-3 pt-24 pb-16">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-texto-principal-oscuro">
              Horario de Clases
            </h1>
            <div className="relative" ref={calendarRef}>
              <Button
                variant="ghost"
                size="sm"
                className="text-texto-secundario text-xs font-normal"
                onClick={handleCalendarToggle}
              >
                Cambiar Fecha
                <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
              
              {/* Calendar Dropdown */}
              {showCalendar && (
                <>
                  {/* Backdrop */}
                  <div className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm" onClick={() => setShowCalendar(false)} />
                  
                  {/* Calendar - Desktop positioning */}
                  <div className="hidden sm:block absolute top-full right-0 mt-2 z-50 w-72">
                    <CalendarComponent
                      selectedDate={selectedDate}
                      onDateSelect={handleDateSelect}
                      onClose={() => setShowCalendar(false)}
                      className="animate-in slide-in-from-top-2 duration-200"
                    />
                  </div>
                  
                  {/* Calendar - Mobile positioning (centered) */}
                  <div className="sm:hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-72 max-w-[calc(100vw-1.5rem)]">
                    <CalendarComponent
                      selectedDate={selectedDate}
                      onDateSelect={handleDateSelect}
                      onClose={() => setShowCalendar(false)}
                      className="animate-in zoom-in-95 duration-200"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Date Selection */}
          <div className="mb-6">
            <span className="text-xs text-texto-secundario">{formatDate(selectedDate)}</span>
          </div>

          {/* Class Schedule List */}
          <div className="space-y-3">
            {classScheduleData.map((classItem) => {
              const cardStyles = getCardStyles(classItem.status);
              
              return (
                <Card key={classItem.id} className={`${cardStyles} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-2xl overflow-hidden border-none`}>
                  <CardContent className="p-4 relative">
                    {/* Subject Title and Course Level */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h2 className={`text-lg font-bold mb-1 ${classItem.status === 'pending' ? 'text-texto-principal-oscuro' : 'text-white'}`}>
                          {classItem.subject}
                        </h2>
                        <p className={`text-sm font-medium ${classItem.status === 'pending' ? 'text-texto-secundario' : 'text-white/80'}`}>
                          Curso: {classItem.courseLevel}
                        </p>
                      </div>
                    </div>

                    {/* Time Display */}
                    <div className="text-center mb-3">
                      <div className={`text-2xl font-bold ${classItem.status === 'pending' ? 'text-texto-principal-oscuro' : 'text-white'}`}>
                        {classItem.startTime} - {classItem.endTime}
                      </div>
                    </div>

                    {/* Teacher Information */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30 shadow-lg">
                        <img
                          src={classItem.teacher.avatar}
                          alt={classItem.teacher.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs font-medium mb-1 ${classItem.status === 'pending' ? 'text-texto-secundario' : 'text-white/90'}`}>
                          Docente:
                        </div>
                        <h3 className={`text-base font-bold mb-1 ${classItem.status === 'pending' ? 'text-texto-principal-oscuro' : 'text-white'}`}>
                          {classItem.teacher.name}
                        </h3>
                        <p className={`text-xs ${classItem.status === 'pending' ? 'text-texto-secundario' : 'text-white/70'}`}>
                          Código: {classItem.teacher.id}
                        </p>
                        <p className={`text-xs font-medium ${classItem.status === 'pending' ? 'text-azul-vivo' : 'text-white'}`}>
                          Materia: {classItem.subject}
                        </p>
                      </div>
                    </div>

                    {/* Icon and Status Badge - Bottom Right */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        classItem.status === 'completed'
                          ? 'bg-white/20 text-white'
                          : classItem.status === 'in-progress'
                          ? 'bg-white/20 text-white'
                          : 'bg-azul-vivo/10 text-azul-vivo border border-azul-vivo/30'
                      }`}>
                        {classItem.status === 'completed' && 'Completada'}
                        {classItem.status === 'in-progress' && 'En curso'}
                        {classItem.status === 'pending' && 'Pendiente'}
                      </div>
                      <div className="flex items-center justify-center">
                        {getStatusIcon(classItem.status)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Compact Status Summary */}
          <div className="mt-4 p-4 bg-white rounded-xl border border-lightmodegreygrey-200 shadow-sm">
            {/* Header with Total Count */}
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-semibold text-texto-principal-oscuro">Resumen de Clases</h4>
              <div className="bg-azul-vivo/10 px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-azul-vivo">
                  Total: {classScheduleData.length} clases
                </span>
              </div>
            </div>

            {/* Compact Status Cards Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Completed Classes */}
              <div className="bg-lightmodesuccesssuccess/5 border border-lightmodesuccesssuccess/30 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-lightmodesuccesssuccess rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h5 className="font-bold text-lightmodesuccesssuccess text-xs mb-1">COMPLETADAS</h5>
                <p className="text-xs text-texto-secundario mb-2">Clases finalizadas</p>
                <div className="text-2xl font-bold text-lightmodesuccesssuccess mb-1">
                  {classScheduleData.filter(c => c.status === 'completed').length}
                </div>
                <div className="text-xs text-texto-secundario">
                  {Math.round((classScheduleData.filter(c => c.status === 'completed').length / classScheduleData.length) * 100)}% del total
                </div>
              </div>

              {/* In Progress Classes */}
              <div className="bg-azul-marino/5 border border-azul-marino/30 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-azul-marino rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h5 className="font-bold text-azul-marino text-xs mb-1">EN PROGRESO</h5>
                <p className="text-xs text-texto-secundario mb-2">Clase actual</p>
                <div className="text-2xl font-bold text-azul-marino mb-1">
                  {classScheduleData.filter(c => c.status === 'in-progress').length}
                </div>
                <div className="text-xs text-texto-secundario">
                  {Math.round((classScheduleData.filter(c => c.status === 'in-progress').length / classScheduleData.length) * 100)}% del total
                </div>
              </div>

              {/* Pending Classes */}
              <div className="bg-lightmodegreygrey-200/20 border border-lightmodegreygrey-300 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-white border border-lightmodegreygrey-400 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-lightmodegreygrey-600" />
                  </div>
                </div>
                <h5 className="font-bold text-lightmodegreygrey-700 text-xs mb-1">PENDIENTES</h5>
                <p className="text-xs text-texto-secundario mb-2">Por realizar</p>
                <div className="text-2xl font-bold text-lightmodegreygrey-700 mb-1">
                  {classScheduleData.filter(c => c.status === 'pending').length}
                </div>
                <div className="text-xs text-texto-secundario">
                  {Math.round((classScheduleData.filter(c => c.status === 'pending').length / classScheduleData.length) * 100)}% del total
                </div>
              </div>
            </div>

            {/* Compact Progress Bar */}
            <div className="bg-lightmodegreygrey-200 rounded-full h-2 overflow-hidden mb-3">
              <div className="h-full flex">
                <div
                  className="bg-lightmodesuccesssuccess transition-all duration-500"
                  style={{
                    width: `${(classScheduleData.filter(c => c.status === 'completed').length / classScheduleData.length) * 100}%`
                  }}
                ></div>
                <div
                  className="bg-azul-marino transition-all duration-500"
                  style={{
                    width: `${(classScheduleData.filter(c => c.status === 'in-progress').length / classScheduleData.length) * 100}%`
                  }}
                ></div>
                <div
                  className="bg-lightmodegreygrey-400 transition-all duration-500"
                  style={{
                    width: `${(classScheduleData.filter(c => c.status === 'pending').length / classScheduleData.length) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            {/* Compact Legend */}
            <div className="flex items-center justify-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-lightmodesuccesssuccess rounded-full"></div>
                <span className="text-texto-secundario">Completadas</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-azul-marino rounded-full"></div>
                <span className="text-texto-secundario">En Progreso</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-lightmodegreygrey-400 rounded-full"></div>
                <span className="text-texto-secundario">Pendientes</span>
              </div>
            </div>
          </div>
        </div>

        <BottomNavigation
          currentView="lista-clases"
        />
      </div>
    </div>
  );
};