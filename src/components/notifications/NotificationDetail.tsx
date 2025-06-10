import React from 'react';
import { X, Clock, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Notification } from '../../types/notification';
import { formatDistanceToNow, format } from 'date-fns';
import { es } from 'date-fns/locale';

interface NotificationDetailProps {
  notification: Notification | null;
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDetail: React.FC<NotificationDetailProps> = ({
  notification,
  isOpen,
  onClose
}) => {
  if (!isOpen || !notification) return null;

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'assignment':
        return '📚';
      case 'grade':
        return '🏆';
      case 'exam':
        return '📝';
      case 'payment':
        return '💳';
      case 'general':
        return '🔔';
      default:
        return '📢';
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'assignment':
        return 'bg-blue-500';
      case 'grade':
        return 'bg-green-500';
      case 'exam':
        return 'bg-yellow-500';
      case 'payment':
        return 'bg-red-500';
      case 'general':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleActionClick = (action: string) => {
    console.log('Action clicked:', action);
    // Implement action handling here
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-lightmodegreygrey-200">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${getNotificationColor(notification.type)}`}>
              <span className="text-white">
                {notification.icon || getNotificationIcon(notification.type)}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-texto-principal-oscuro">
                {notification.title}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-4 h-4 text-lightmodegreygrey-400" />
                <span className="text-sm text-texto-secundario">
                  {format(notification.timestamp, "d 'de' MMMM 'de' yyyy 'a las' HH:mm", { locale: es })}
                </span>
                <span className="text-xs text-lightmodegreygrey-400">
                  ({formatDistanceToNow(notification.timestamp, { addSuffix: true, locale: es })})
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-texto-secundario hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
              notification.isRead 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              <CheckCircle className="w-4 h-4" />
              {notification.isRead ? 'Leída' : 'Nueva'}
            </div>
          </div>

          {/* Message Body */}
          <div className="prose prose-sm max-w-none mb-6">
            <p className="text-texto-principal-oscuro leading-relaxed whitespace-pre-wrap">
              {notification.fullMessage}
            </p>
          </div>

          {/* Attachments */}
          {notification.attachments && notification.attachments.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-texto-principal-oscuro mb-3">
                Archivos adjuntos
              </h3>
              <div className="space-y-2">
                {notification.attachments.map((attachment, index) => (
                  <Card key={index} className="border border-lightmodegreygrey-200">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-azul-vivo/10 rounded flex items-center justify-center">
                            <span className="text-xs font-medium text-azul-vivo">
                              {attachment.type.toUpperCase()}
                            </span>
                          </div>
                          <span className="text-sm text-texto-principal-oscuro">
                            {attachment.name}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-azul-vivo hover:bg-azul-vivo/5"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Descargar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {notification.actionButtons && notification.actionButtons.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {notification.actionButtons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant === 'primary' ? 'default' : 'outline'}
                  onClick={() => handleActionClick(button.action)}
                  className={button.variant === 'primary' 
                    ? 'bg-azul-vivo hover:bg-azul-vivo/90 text-white' 
                    : 'text-azul-vivo border-azul-vivo hover:bg-azul-vivo/5'
                  }
                >
                  {button.label}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-lightmodegreygrey-200 bg-gray-50">
          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={onClose}
              className="text-texto-secundario"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};