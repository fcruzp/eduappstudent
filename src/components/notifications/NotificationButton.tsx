import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '../ui/button';

interface NotificationButtonProps {
  unreadCount: number;
  onClick: () => void;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({
  unreadCount,
  onClick
}) => {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="text-texto-principal-oscuro hover:bg-gray-100 relative"
      onClick={onClick}
    >
      <Bell className="w-6 h-6" />
      {unreadCount > 0 && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
          {unreadCount > 9 ? '9+' : unreadCount}
        </div>
      )}
    </Button>
  );
};