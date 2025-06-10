import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

interface HorariosViewProps {
  onBackClick: () => void;
}

export const HorariosView: React.FC<HorariosViewProps> = ({ onBackClick }) => {
  return (
    <div className="p-4">
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-azul-vivo"
        onClick={onBackClick}
      >
        ← Volver
      </Button>
      
      <h1 className="text-2xl font-bold text-texto-principal-oscuro mt-4 mb-6">
        Horarios
      </h1>

      <div className="space-y-4">
        {/* Lunes */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-azul-vivo" />
              <h3 className="font-semibold text-texto-principal-oscuro">Lunes</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-texto-secundario" />
                <span className="text-texto-secundario">8:00 AM - 9:30 AM</span>
                <span className="text-texto-principal-oscuro font-medium">Matemáticas</span>
                <MapPin className="w-4 h-4 text-texto-secundario ml-auto" />
                <span className="text-texto-secundario">Aula 101</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-texto-secundario" />
                <span className="text-texto-secundario">10:00 AM - 11:30 AM</span>
                <span className="text-texto-principal-oscuro font-medium">Física</span>
                <MapPin className="w-4 h-4 text-texto-secundario ml-auto" />
                <span className="text-texto-secundario">Aula 203</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Martes */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-color-secundario" />
              <h3 className="font-semibold text-texto-principal-oscuro">Martes</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-texto-secundario" />
                <span className="text-texto-secundario">1:00 PM - 2:30 PM</span>
                <span className="text-texto-principal-oscuro font-medium">Programación</span>
                <MapPin className="w-4 h-4 text-texto-secundario ml-auto" />
                <span className="text-texto-secundario">Lab 305</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Miércoles */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-color-primario-2" />
              <h3 className="font-semibold text-texto-principal-oscuro">Miércoles</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-texto-secundario" />
                <span className="text-texto-secundario">8:00 AM - 9:30 AM</span>
                <span className="text-texto-principal-oscuro font-medium">Matemáticas</span>
                <MapPin className="w-4 h-4 text-texto-secundario ml-auto" />
                <span className="text-texto-secundario">Aula 101</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-texto-secundario" />
                <span className="text-texto-secundario">10:00 AM - 11:30 AM</span>
                <span className="text-texto-principal-oscuro font-medium">Física</span>
                <MapPin className="w-4 h-4 text-texto-secundario ml-auto" />
                <span className="text-texto-secundario">Aula 203</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 