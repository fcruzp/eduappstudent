import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { DashboardSummary } from "./DashboardSummary";
import { StudentProfileCard } from "./StudentProfileCard";
import { PendingTasksList } from "./PendingTasksList";
import { createDashboardSummaryData } from "../../data/dashboardSummaryData.tsx";
import { pendingTasks } from "../../data/pendingTasksData";

interface DashboardViewProps {
  onAsistenciaClick?: () => void;
  onHistoriaAsistenciaClick?: () => void;
  onProfileClick?: () => void;
  onSearchClick?: () => void;
  onTaskClick?: (taskId: string) => void;
  userName?: string;
  className?: string;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onAsistenciaClick,
  onHistoriaAsistenciaClick,
  onProfileClick,
  onSearchClick,
  onTaskClick,
  userName = "Usuario",
  className = ""
}) => {
  // Mouse drag scrolling state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag scrolling handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  }, []);

  // Create dashboard summary data with navigation callbacks
  const dashboardSummaryData = createDashboardSummaryData(
    onAsistenciaClick,
    onHistoriaAsistenciaClick
  );

  return (
    <div className={`bg-gris-claro min-h-screen w-full ${className}`}>
      <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-texto-principal-oscuro">
              Hola, {userName}
            </h1>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-texto-principal-oscuro hover:bg-gray-100"
              onClick={onSearchClick}
            >
              <Search className="w-6 h-6" />
            </Button>
          </div>

          <StudentProfileCard
            name={userName}
            code="D-466"
            grade="3er grado de secundaria"
            profileImage="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
            onClick={onProfileClick}
          />

          <DashboardSummary items={dashboardSummaryData} />

          <PendingTasksList
            tasks={pendingTasks}
            onViewAllClick={onHistoriaAsistenciaClick}
            onTaskClick={onTaskClick}
          />
        </div>
      </div>
    </div>
  );
}; 