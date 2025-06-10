import React from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface StudentProfileCardProps {
  name: string;
  code: string;
  grade: string;
  profileImage: string;
  onClick?: () => void;
}

export const StudentProfileCard: React.FC<StudentProfileCardProps> = ({
  name,
  code,
  grade,
  profileImage,
  onClick
}) => {
  return (
    <section>
      <h2 className="text-texto-principal-oscuro font-semibold text-lg mb-4">Mi Perfil</h2>
      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-azul-marino to-azul-vivo p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <img 
                  src={profileImage}
                  alt={name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-white/90 text-sm">Código: {code}</p>
                <p className="text-white/90 text-sm">Curso: {grade}</p>
              </div>
              <div className="flex-shrink-0">
                <ChevronRight className="w-5 h-5 text-white/70" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}; 