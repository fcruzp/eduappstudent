import React from "react";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface StudentProfileViewProps {
  name: string;
  code: string;
  grade: string;
  profileImage: string;
  email: string;
  phone: string;
  location: string;
  career: string;
  semester: string;
  modality: string;
  shift: string;
  progress: {
    completed: number;
    credits: number;
    index: number;
  };
  onEditProfile?: () => void;
  onViewHistory?: () => void;
}

export const StudentProfileView: React.FC<StudentProfileViewProps> = ({
  name,
  code,
  grade,
  profileImage,
  email,
  phone,
  location,
  career,
  semester,
  modality,
  shift,
  progress,
  onEditProfile,
  onViewHistory
}) => {
  return (
    <section>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-azul-marino to-azul-vivo p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <img 
                  src={profileImage}
                  alt={name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-white/90 text-sm">Código: {code}</p>
                <p className="text-white/90 text-sm">Curso: {grade}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="px-3 py-1 bg-white/20 rounded-full">
                    <span className="text-xs font-medium">Activo</span>
                  </div>
                  <div className="px-3 py-1 bg-color-secundario/20 rounded-full">
                    <span className="text-xs font-medium">Regular</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6 space-y-4">
            {/* Academic Information */}
            <div>
              <h4 className="text-texto-principal-oscuro font-semibold text-sm mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-azul-vivo" />
                Información Académica
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-texto-secundario">Carrera:</span>
                  <p className="text-texto-principal-oscuro font-medium">{career}</p>
                </div>
                <div>
                  <span className="text-texto-secundario">Semestre:</span>
                  <p className="text-texto-principal-oscuro font-medium">{semester}</p>
                </div>
                <div>
                  <span className="text-texto-secundario">Modalidad:</span>
                  <p className="text-texto-principal-oscuro font-medium">{modality}</p>
                </div>
                <div>
                  <span className="text-texto-secundario">Turno:</span>
                  <p className="text-texto-principal-oscuro font-medium">{shift}</p>
                </div>
              </div>
            </div>

            <hr className="border-lightmodegreygrey-200" />

            {/* Contact Information */}
            <div>
              <h4 className="text-texto-principal-oscuro font-semibold text-sm mb-3">Información de Contacto</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                  <span className="text-texto-principal-oscuro">{email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                  <span className="text-texto-principal-oscuro">{phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-azul-vivo flex-shrink-0" />
                  <span className="text-texto-principal-oscuro">{location}</span>
                </div>
              </div>
            </div>

            <hr className="border-lightmodegreygrey-200" />

            {/* Academic Progress */}
            <div>
              <h4 className="text-texto-principal-oscuro font-semibold text-sm mb-3">Progreso Académico</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-azul-vivo/5 rounded-lg p-3">
                  <div className="text-lg font-bold text-azul-vivo">{progress.completed}%</div>
                  <div className="text-xs text-texto-secundario">Completado</div>
                </div>
                <div className="bg-color-secundario/5 rounded-lg p-3">
                  <div className="text-lg font-bold text-color-secundario">{progress.credits}</div>
                  <div className="text-xs text-texto-secundario">Créditos</div>
                </div>
                <div className="bg-color-primario-2/5 rounded-lg p-3">
                  <div className="text-lg font-bold text-color-primario-2">{progress.index}</div>
                  <div className="text-xs text-texto-secundario">Índice</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 text-azul-vivo border-azul-vivo hover:bg-azul-vivo/5"
                onClick={onEditProfile}
              >
                Editar Perfil
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 text-texto-secundario"
                onClick={onViewHistory}
              >
                Ver Historial
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}; 