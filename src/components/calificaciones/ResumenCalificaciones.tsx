import { Card, CardContent } from "../ui/card";
import { Award } from "lucide-react";
import { ResumenCalificacionesData } from "../../data/resumenCalificacionesData";
import { getGradeColor } from "../../utils/getGradeColor";
import { Button } from "../ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

interface ResumenCalificacionesProps {
  data: ResumenCalificacionesData;
  materias: Array<{
    id: number;
    name: string;
    teacher: string;
    promedio: number;
  }>;
}

export const ResumenCalificaciones = ({
  data,
  materias
}: ResumenCalificacionesProps): JSX.Element => {
  const { promedioGeneral, estadisticas } = data;
  const [showDialog, setShowDialog] = useState(false);
  const [selectedRange, setSelectedRange] = useState<'aprobadas' | 'completivo' | 'extraordinarias' | null>(null);

  const getMateriasByRange = (range: 'aprobadas' | 'completivo' | 'extraordinarias') => {
    switch (range) {
      case 'aprobadas':
        return materias.filter(m => m.promedio >= 70);
      case 'completivo':
        return materias.filter(m => m.promedio >= 60 && m.promedio < 70);
      case 'extraordinarias':
        return materias.filter(m => m.promedio < 60);
      default:
        return [];
    }
  };

  const handleRangeClick = (range: 'aprobadas' | 'completivo' | 'extraordinarias') => {
    setSelectedRange(range);
    setShowDialog(true);
  };

  return (
    <>
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className={`w-5 h-5 ${getGradeColor(promedioGeneral)}`} />
              <h3 className="font-semibold text-texto-principal-oscuro">Promedio General</h3>
            </div>
            <div className={`text-2xl font-bold ${getGradeColor(promedioGeneral)}`}>{promedioGeneral}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Button
              variant="ghost"
              className="text-center p-0 h-auto hover:bg-green-50"
              onClick={() => handleRangeClick('aprobadas')}
            >
              <div className="w-full">
                <div className="text-sm text-texto-secundario">Aprobadas</div>
                <div className="text-lg font-semibold text-green-500">{estadisticas.aprobadas}</div>
              </div>
            </Button>
            <Button
              variant="ghost"
              className="text-center p-0 h-auto hover:bg-yellow-50"
              onClick={() => handleRangeClick('completivo')}
            >
              <div className="w-full">
                <div className="text-sm text-texto-secundario">Completivo</div>
                <div className="text-lg font-semibold text-yellow-500">{estadisticas.pendientes}</div>
              </div>
            </Button>
            <Button
              variant="ghost"
              className="text-center p-0 h-auto hover:bg-red-50"
              onClick={() => handleRangeClick('extraordinarias')}
            >
              <div className="w-full">
                <div className="text-sm text-texto-secundario">Extraordinarias</div>
                <div className="text-lg font-semibold text-red-500">{estadisticas.reprobadas}</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedRange === 'aprobadas' && 'Materias Aprobadas'}
              {selectedRange === 'completivo' && 'Materias en Completivo'}
              {selectedRange === 'extraordinarias' && 'Materias Extraordinarias'}
            </DialogTitle>
            <DialogDescription>
              Listado de materias según el rango de calificación seleccionado.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {selectedRange && getMateriasByRange(selectedRange).map((materia) => (
              <div key={materia.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium text-texto-principal-oscuro">{materia.name}</h4>
                  <p className="text-sm text-texto-secundario">{materia.teacher}</p>
                </div>
                <div className={`text-xl font-bold ${getGradeColor(materia.promedio)}`}>
                  {materia.promedio}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}; 