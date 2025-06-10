import React from "react";
import { Card, CardContent } from "../ui/card";
import { Calendar, Clock } from "lucide-react";

interface Event {
  title: string;
  date: string;
  time: string;
  type: 'exam' | 'assignment' | 'meeting';
}

interface UpcomingEventsCardProps {
  events: Event[];
}

export const UpcomingEventsCard: React.FC<UpcomingEventsCardProps> = ({
  events
}) => {
  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'exam':
        return 'text-red-500';
      case 'assignment':
        return 'text-blue-500';
      case 'meeting':
        return 'text-green-500';
      default:
        return 'text-texto-secundario';
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-texto-principal-oscuro font-semibold text-lg mb-4">Próximos Eventos</h3>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${getEventTypeColor(event.type)}`} />
              <div className="flex-1">
                <h4 className="text-texto-principal-oscuro font-medium mb-1">{event.title}</h4>
                <div className="flex items-center gap-4 text-sm text-texto-secundario">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}; 