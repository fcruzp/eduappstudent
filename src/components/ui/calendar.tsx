import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "../../lib/utils";

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  onClose?: () => void;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate = new Date(),
  onDateSelect,
  onClose,
  className
}) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const dayNames = [
    { key: "dom", label: "D" },
    { key: "lun", label: "L" },
    { key: "mar", label: "M" },
    { key: "mie", label: "M" },
    { key: "jue", label: "J" },
    { key: "vie", label: "V" },
    { key: "sab", label: "S" }
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    onDateSelect?.(newDate);
    onClose?.();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];
    const today = new Date();

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-9 w-9"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate.getDate() === day && 
                        selectedDate.getMonth() === currentMonth && 
                        selectedDate.getFullYear() === currentYear;
      const isToday = today.getDate() === day && 
                     today.getMonth() === currentMonth && 
                     today.getFullYear() === currentYear;

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={cn(
            "h-9 w-9 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-azul-vivo focus:ring-offset-1",
            isSelected && "bg-azul-vivo text-white shadow-lg hover:bg-azul-vivo/90",
            isToday && !isSelected && "bg-azul-vivo/10 text-azul-vivo font-semibold border border-azul-vivo/30",
            !isSelected && !isToday && "text-texto-principal-oscuro hover:bg-azul-vivo/5 hover:text-azul-vivo"
          )}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className={cn("bg-white border border-lightmodegreygrey-200 rounded-2xl shadow-2xl overflow-hidden", className)}>
      {/* Header */}
      <div className="bg-gradient-to-r from-azul-vivo to-azul-marino px-4 py-3">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevMonth}
            className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="text-center">
            <h3 className="text-lg font-bold text-white">
              {monthNames[currentMonth]}
            </h3>
            <p className="text-sm text-white/80 font-medium">
              {currentYear}
            </p>
          </div>
          
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextMonth}
              className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 text-white hover:bg-white/20 rounded-full ml-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Calendar Body */}
      <div className="p-4">
        {/* Day names */}
        <div className="grid grid-cols-7 gap-1 mb-3">
          {dayNames.map((day, index) => (
            <div key={day.key} className="h-8 flex items-center justify-center">
              <span className={cn(
                "text-xs font-semibold",
                index === 0 || index === 6 ? "text-color-secundario" : "text-texto-secundario"
              )}>
                {day.label}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {renderCalendarDays()}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between text-xs text-texto-secundario">
          <span>Selecciona una fecha</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-azul-vivo rounded-full"></div>
            <span>Seleccionado</span>
          </div>
        </div>
      </div>
    </div>
  );
};