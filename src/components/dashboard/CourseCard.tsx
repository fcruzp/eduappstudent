import React from "react";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

interface CourseCardProps {
  title: string;
  teacher: string;
  schedule: string;
  progress: number;
  imageUrl: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  teacher,
  schedule,
  progress,
  imageUrl
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-texto-principal-oscuro font-semibold text-lg mb-1">{title}</h3>
            <p className="text-texto-secundario text-sm mb-2">{teacher}</p>
            <p className="text-texto-secundario text-sm mb-4">{schedule}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-texto-secundario">Progreso</span>
                <span className="text-texto-principal-oscuro font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 