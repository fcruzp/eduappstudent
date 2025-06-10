import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { NotificationButton } from '../notifications/NotificationButton';
import { NotificationDropdown } from '../notifications/NotificationDropdown';
import { NotificationDetail } from '../notifications/NotificationDetail';
import { useNotifications } from '../../hooks/useNotifications';
import { Notification } from '../../types/notification';

interface HeaderProps {
  /** Custom background color/style classes */
  backgroundColor?: string;
  /** Custom height classes */
  height?: string;
  /** Enable transparency/blur effects */
  transparent?: boolean;
  /** Enable blur backdrop effect */
  blur?: boolean;
  /** Custom z-index value */
  zIndex?: number;
  /** Logo source URL */
  logoSrc?: string;
  /** Logo alt text */
  logoAlt?: string;
  /** User profile image URL */
  userImageSrc?: string;
  /** User name for alt text */
  userName?: string;
  /** Show menu button */
  showMenu?: boolean;
  /** Show search button */
  showSearch?: boolean;
  /** Show notifications */
  showNotifications?: boolean;
  /** Show user profile */
  showUserProfile?: boolean;
  /** Menu click handler */
  onMenuClick?: () => void;
  /** Search click handler */
  onSearchClick?: () => void;
  /** User profile click handler */
  onUserProfileClick?: () => void;
  /** Custom content to render in the center */
  centerContent?: React.ReactNode;
  /** Custom content to render on the left */
  leftContent?: React.ReactNode;
  /** Custom content to render on the right */
  rightContent?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Custom container max width */
  maxWidth?: string;
  /** Menu button icon component */
  menuIcon?: React.ComponentType<{ className?: string }>;
  /** Search button icon component */
  searchIcon?: React.ComponentType<{ className?: string }>;
}

export const Header: React.FC<HeaderProps> = ({
  backgroundColor = 'bg-white',
  height = 'pt-8 pb-4',
  transparent = false,
  blur = false,
  zIndex = 50,
  logoSrc = '/logo-central-gral-rd-minerd-1.svg',
  logoAlt = 'Logo',
  userImageSrc = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
  userName = 'Usuario',
  showMenu = true,
  showSearch = true,
  showNotifications = true,
  showUserProfile = true,
  onMenuClick,
  onSearchClick,
  onUserProfileClick,
  centerContent,
  leftContent,
  rightContent,
  className,
  maxWidth = 'max-w-[430px]',
  menuIcon: MenuIcon = Menu,
  searchIcon: SearchIcon = Search
}) => {
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [isNotificationDetailOpen, setIsNotificationDetailOpen] = useState(false);

  const {
    notifications,
    unreadCount,
    isDropdownOpen,
    markAsRead,
    markAllAsRead,
    toggleDropdown,
    closeDropdown
  } = useNotifications();

  const handleNotificationClick = (notification: Notification) => {
    setSelectedNotification(notification);
    setIsNotificationDetailOpen(true);
    markAsRead(notification.id);
    closeDropdown();
  };

  const closeNotificationDetail = () => {
    setIsNotificationDetailOpen(false);
    setSelectedNotification(null);
  };

  const headerClasses = cn(
    // Fixed positioning and layout
    'fixed top-0 left-0 right-0 w-full',
    // Z-index
    `z-${zIndex}`,
    // Background and transparency
    transparent ? 'bg-transparent' : backgroundColor,
    // Blur effect
    blur && 'backdrop-blur-md',
    // Border
    !transparent && 'border-b border-lightmodegreygrey-200',
    // Additional classes
    className
  );

  const containerClasses = cn(
    // Container styling
    maxWidth,
    'mx-auto px-6',
    height
  );

  return (
    <header className={headerClasses}>
      <div className={containerClasses}>
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center">
            {leftContent ? (
              leftContent
            ) : (
              showMenu && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-texto-principal-oscuro hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-azul-vivo focus:ring-offset-2"
                  onClick={onMenuClick}
                  aria-label="Abrir menú"
                >
                  <MenuIcon className="w-6 h-6" />
                </Button>
              )
            )}
          </div>

          {/* Center Content */}
          <div className="flex-1 flex justify-center">
            {centerContent ? (
              centerContent
            ) : (
              <img
                className="h-8"
                alt={logoAlt}
                src={logoSrc}
              />
            )}
          </div>

          {/* Right Content */}
          <div className="flex items-center gap-2">
            {rightContent ? (
              rightContent
            ) : (
              <>
                {showSearch && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-texto-principal-oscuro hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-azul-vivo focus:ring-offset-2"
                    onClick={onSearchClick}
                    aria-label="Buscar"
                  >
                    <SearchIcon className="w-6 h-6" />
                  </Button>
                )}
                
                {showNotifications && (
                  <div className="relative">
                    <NotificationButton
                      unreadCount={unreadCount}
                      onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                      <NotificationDropdown
                        notifications={notifications}
                        onNotificationClick={handleNotificationClick}
                        onMarkAllRead={markAllAsRead}
                        onClose={closeDropdown}
                        isOpen={isDropdownOpen}
                        unreadCount={unreadCount}
                      />
                    )}
                  </div>
                )}
                
                {showUserProfile && (
                  <button 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-2 border-2 border-azul-vivo hover:border-azul-marino transition-colors focus:outline-none focus:ring-2 focus:ring-azul-vivo focus:ring-offset-2"
                    onClick={onUserProfileClick}
                    aria-label={`Perfil de ${userName}`}
                  >
                    <img 
                      src={userImageSrc} 
                      alt={userName} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Notification Detail Modal */}
      {selectedNotification && (
        <NotificationDetail
          notification={selectedNotification}
          isOpen={isNotificationDetailOpen}
          onClose={closeNotificationDetail}
        />
      )}
    </header>
  );
};