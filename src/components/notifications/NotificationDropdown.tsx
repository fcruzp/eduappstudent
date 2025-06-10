import React, { useRef, useEffect } from 'react';
import { Bell, Clock, CheckCircle, Circle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Notification } from '../../types/notification';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface NotificationDropdownProps {
  notifications: Notification[];
  isOpen: boolean;
  onClose: () => void;
  onNotificationClick: (notification: Notification) => void;
  onMarkAllRead: () => void;
  unreadCount: number;
}

export const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  notifications,
  isOpen,
  onClose,
  onNotificationClick,
  onMarkAllRead,
  unreadCount
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
        return 'bg-blue-50 border-blue-200';
      case 'grade':
        return 'bg-green-50 border-green-200';
      case 'exam':
        return 'bg-yellow-50 border-yellow-200';
      case 'payment':
        return 'bg-red-50 border-red-200';
      case 'general':
        return 'bg-gray-50 border-gray-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4" ref={dropdownRef}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      
      {/* Dropdown content */}
      <div className="relative w-full max-w-md">
        <Card className="shadow-2xl border border-lightmodegreygrey-200 bg-white">
          <CardContent className="p-0 bg-white">
            {/* Header */}
            <div className="p-4 border-b border-lightmodegreygrey-200 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-texto-principal-oscuro">
                  Notificaciones
                  {unreadCount > 0 && (
                    <span className="ml-2 px-2 py-1 bg-azul-vivo text-white text-xs rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </h3>
                {unreadCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onMarkAllRead}
                    className="text-azul-vivo hover:bg-azul-vivo/5"
                  >
                    Marcar todas como leídas
                  </Button>
                )}
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto bg-white">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-texto-secundario bg-white">
                  <Bell className="w-12 h-12 mx-auto mb-3 text-lightmodegreygrey-300" />
                  <p>No tienes notificaciones</p>
                </div>
              ) : (
                <div className="divide-y divide-lightmodegreygrey-200 bg-white">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors bg-white ${
                        !notification.isRead ? 'border-l-4 border-l-azul-vivo bg-blue-50/50' : ''
                      }`}
                      onClick={() => onNotificationClick(notification)}
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg border ${getNotificationColor(notification.type)}`}>
                            {notification.icon || getNotificationIcon(notification.type)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h4 className={`text-sm font-medium ${
                              !notification.isRead ? 'text-texto-principal-oscuro' : 'text-texto-secundario'
                            } line-clamp-2 pr-2`}>
                              {notification.title}
                            </h4>
                            <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                              {!notification.isRead ? (
                                <Circle className="w-2 h-2 fill-azul-vivo text-azul-vivo" />
                              ) : (
                                <CheckCircle className="w-3 h-3 text-lightmodegreygrey-400" />
                              )}
                            </div>
                          </div>
                          
                          <p className="text-xs text-texto-secundario line-clamp-2 mt-1">
                            {notification.preview}
                          </p>
                          
                          <div className="flex items-center gap-1 mt-2">
                            <Clock className="w-3 h-3 text-lightmodegreygrey-400 flex-shrink-0" />
                            <span className="text-xs text-lightmodegreygrey-500 truncate">
                              {formatDistanceToNow(notification.timestamp, { 
                                addSuffix: true, 
                                locale: es 
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 border-t border-lightmodegreygrey-200 bg-gray-50">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-azul-vivo hover:bg-azul-vivo/5"
                >
                  Ver todas las notificaciones
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};