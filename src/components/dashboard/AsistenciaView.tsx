import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface AsistenciaViewProps {
  onBackClick: () => void;
}

export const AsistenciaView: React.FC<AsistenciaViewProps> = ({ onBackClick }) => {
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
        Asistencia
      </h1>

      <div className="space-y-4">
        {/* Resumen de Asistencia */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-texto-principal-oscuro mb-4">Resumen</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-azul-vivo/5 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-azul-vivo">95%</div>
                <div className="text-xs text-texto-secundario">Asistencia</div>
              </div>
              <div className="bg-color-secundario/5 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-color-secundario">2</div>
                <div className="text-xs text-texto-secundario">Faltas</div>
              </div>
              <div className="bg-color-primario-2/5 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-color-primario-2">1</div>
                <div className="text-xs text-texto-secundario">Tardanzas</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registro de Asistencia */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-texto-principal-oscuro mb-4">Registro de Asistencia</h3>
            <div className="space-y-3">
              {/* Asistencia */}
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-azul-vivo" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-texto-principal-oscuro">Matemáticas</div>
                  <div className="text-xs text-texto-secundario">Lunes, 8:00 AM</div>
                </div>
                <div className="text-xs text-texto-secundario">Presente</div>
              </div>

              {/* Falta */}
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-color-secundario" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-texto-principal-oscuro">Física</div>
                  <div className="text-xs text-texto-secundario">Martes, 10:00 AM</div>
                </div>
                <div className="text-xs text-color-secundario">Ausente</div>
              </div>

              {/* Tardanza */}
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-color-primario-2" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-texto-principal-oscuro">Programación</div>
                  <div className="text-xs text-texto-secundario">Miércoles, 1:00 PM</div>
                </div>
                <div className="text-xs text-color-primario-2">Tardanza</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 