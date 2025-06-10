import React, { useRef, useState, useEffect } from "react";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface Task {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  time: string;
  description: string;
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
}

interface PendingTasksListProps {
  tasks: Task[];
  onViewAllClick?: () => void;
  onTaskClick?: (taskId: string) => void;
}

export const PendingTasksList: React.FC<PendingTasksListProps> = ({
  tasks,
  onViewAllClick,
  onTaskClick
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-texto-principal-oscuro font-semibold text-lg">Tareas Pendientes</h2>
        <Button variant="ghost" size="sm" className="text-azul-vivo" onClick={onViewAllClick}>
          Ver todo
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: 'grab' }}
      >
        {tasks.map((task) => (
          <Card 
            key={task.id}
            className="min-w-[320px] max-w-[320px] flex-shrink-0 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onTaskClick?.(task.id)}
          >
            <CardContent className="p-6 h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${task.gradientFrom} ${task.gradientTo} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <img 
                      src={task.imageUrl}
                      alt={task.subject}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-texto-principal-oscuro text-base mb-3 leading-tight">
                      {task.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                  <span className="text-azul-vivo text-sm font-medium">{task.dueDate}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-texto-secundario flex-shrink-0" />
                  <span className="text-texto-secundario text-sm">{task.time}</span>
                </div>
                
                <div className="flex-1">
                  <p className="text-texto-secundario text-sm leading-relaxed break-words">
                    {task.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}; 