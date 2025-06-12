import React from "react";
import { Card, CardContent } from "../ui/card";
import { Award, TrendingUp, TrendingDown } from "lucide-react";


export const CalificacionesView = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-texto-principal-oscuro mt-4 mb-6">
        CalificacioneX
      </h1>

      <div className="space-y-4">
        {/* Promedio General */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-texto-principal-oscuro mb-4">Promedio General</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-azul-vivo" />
                <div>
                  <div className="text-2xl font-bold text-texto-principal-oscuro">8.5</div>
                  <div className="text-sm text-texto-secundario">Promedio Actual</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-azul-vivo">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">+0.5</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calificaciones por Materia */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-texto-principal-oscuro mb-4">Calificaciones por Materia</h3>
            <div className="space-y-4">
              {/* Matemáticas */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-texto-principal-oscuro">Matemáticas</div>
                  <div className="text-sm text-texto-secundario">Primer Parcial</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-bold text-azul-vivo">9.0</div>
                  <TrendingUp className="w-4 h-4 text-azul-vivo" />
                </div>
              </div>

              {/* Física */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-texto-principal-oscuro">Física</div>
                  <div className="text-sm text-texto-secundario">Primer Parcial</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-bold text-color-secundario">8.5</div>
                  <TrendingUp className="w-4 h-4 text-color-secundario" />
                </div>
              </div>

              {/* Programación */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-texto-principal-oscuro">Programación</div>
                  <div className="text-sm text-texto-secundario">Primer Parcial</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-bold text-color-primario-2">8.0</div>
                  <TrendingDown className="w-4 h-4 text-color-primario-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 