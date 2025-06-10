import React from "react";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

interface ProgressDetail {
  subject: string;
  progress: number;
}

interface ProgressCardProps {
  title: string;
  progress: number;
  details: ProgressDetail[];
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
  details
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-texto-principal-oscuro font-semibold text-lg mb-4">{title}</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-texto-secundario">Promedio General</span>
              <span className="text-texto-principal-oscuro font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="space-y-4">
            {details.map((detail, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-texto-secundario">{detail.subject}</span>
                  <span className="text-texto-principal-oscuro font-medium">{detail.progress}%</span>
                </div>
                <Progress value={detail.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 