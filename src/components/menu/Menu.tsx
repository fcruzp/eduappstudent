import React, { useEffect, useRef } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { MenuItem, MenuTheme } from '../../types/menu';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  /** Menu items to display */
  items: MenuItem[];
  /** Whether the menu is open */
  isOpen: boolean;
  /** Function to close the menu */
  onClose: () => void;
  /** Function to handle item clicks */
  onItemClick?: (item: MenuItem) => void;
  /** Menu title */
  title?: string;
  /** Custom theme for styling */
  theme?: Partial<MenuTheme>;
  /** Menu position */
  position?: 'left' | 'right';
  /** Menu width */
  width?: string;
  /** Enable backdrop blur */
  backdropBlur?: boolean;
  /** Custom overlay background */
  overlayBackground?: string;
  /** Animation duration */
  animationDuration?: string;
  /** Additional CSS classes */
  className?: string;
  /** Custom header content */
  headerContent?: React.ReactNode;
  /** Custom footer content */
  footerContent?: React.ReactNode;
  /** Enable keyboard navigation */
  enableKeyboardNavigation?: boolean;
  /** Auto close on item click */
  autoCloseOnClick?: boolean;
}

const defaultTheme: MenuTheme = {
  background: 'bg-[#142D69]',
  textColor: 'text-white',
  hoverBackground: 'hover:bg-white/10',
  hoverTextColor: 'hover:text-white',
  activeBackground: 'bg-white/20',
  activeTextColor: 'text-white',
  borderColor: 'border-white/20',
  iconColor: 'text-white/80',
  badgeBackground: 'bg-white',
  badgeTextColor: 'text-[#142D69]'
};

export const Menu: React.FC<MenuProps> = ({
  items,
  isOpen,
  onClose,
  onItemClick,
  title = 'Menú',
  theme = {},
  position = 'left',
  width = 'w-80',
  backdropBlur = false,
  overlayBackground = 'bg-black/50',
  animationDuration = 'duration-300',
  className,
  headerContent,
  footerContent,
  enableKeyboardNavigation = true,
  autoCloseOnClick = true
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLButtonElement>(null);
  const mergedTheme = { ...defaultTheme, ...theme };
  const navigate = useNavigate();

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen || !enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        // Handle tab navigation within menu
        const focusableElements = menuRef.current?.querySelectorAll(
          'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Focus first item when menu opens
    if (firstItemRef.current) {
      firstItemRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, enableKeyboardNavigation]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;
    
    if (onItemClick) {
      onItemClick(item);
    }
    
    if (item.children) {
      return;
    }

    if (item.path) {
      navigate(item.path);
    }
    
    if (autoCloseOnClick) {
      onClose();
    }
  };

  const renderMenuItem = (item: MenuItem, index: number, isFirst: boolean = false) => {
    if (item.divider) {
      return (
        <hr 
          key={`divider-${index}`} 
          className={cn('my-2 border-t', mergedTheme.borderColor)}
        />
      );
    }

    const IconComponent = item.icon;
    
    return (
      <Button
        key={item.id}
        ref={isFirst ? firstItemRef : undefined}
        variant="ghost"
        className={cn(
          'w-full justify-start gap-3 h-12 px-4 rounded-lg transition-all',
          mergedTheme.textColor,
          mergedTheme.hoverBackground,
          mergedTheme.hoverTextColor,
          item.disabled && 'opacity-50 cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent'
        )}
        onClick={() => handleItemClick(item)}
        disabled={item.disabled}
        aria-label={item.label}
        role="menuitem"
      >
        {IconComponent && (
          <IconComponent className={cn('w-5 h-5 flex-shrink-0', mergedTheme.iconColor)} />
        )}
        <span className="flex-1 text-left font-medium">{item.label}</span>
        
        {item.badge && (
          <span className={cn(
            'px-2 py-1 text-xs rounded-full font-medium',
            mergedTheme.badgeBackground,
            mergedTheme.badgeTextColor
          )}>
            {item.badge}
          </span>
        )}
        
        {item.children && (
          <ChevronRight className="w-4 h-4 text-white/60" />
        )}
      </Button>
    );
  };

  if (!isOpen) return null;

  const menuClasses = cn(
    'fixed top-0 h-full z-50 transform transition-transform',
    animationDuration,
    width,
    mergedTheme.background, // Using the custom background color #142D69
    position === 'left' ? 'left-0' : 'right-0',
    isOpen 
      ? 'translate-x-0' 
      : position === 'left' 
        ? '-translate-x-full' 
        : 'translate-x-full',
    'shadow-2xl',
    className
  );

  const overlayClasses = cn(
    'fixed inset-0 z-40 transition-opacity',
    animationDuration,
    overlayBackground,
    backdropBlur && 'backdrop-blur-sm'
  );

  return (
    <>
      {/* Overlay */}
      <div 
        className={overlayClasses}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu */}
      <nav 
        ref={menuRef}
        className={menuClasses}
        role="menu"
        aria-label={title}
        aria-modal="true"
      >
        <div className="flex flex-col h-full">
          {/* Header with Logo left-justified */}
          <div className="bg-[#142D69] p-6 border-b border-white/20">
            {headerContent ? (
              headerContent
            ) : (
              <div className="flex items-center justify-between">
                {/* Logo left-justified with same padding as menu items */}
                <div className="flex items-center">
                  <img
                    src="/minerd-logo.png"
                    alt="MINERD Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                {/* Close Button positioned to the right */}
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={onClose}
                  className="rounded-full hover:bg-white/10 text-white flex-shrink-0"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
          
          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4 px-4 bg-[#142D69]">
            <div className="space-y-1" role="none">
              {items.map((item, index) => 
                renderMenuItem(item, index, index === 0)
              )}
            </div>
          </div>

          {/* Footer */}
          {footerContent && (
            <div className="p-4 border-t border-white/20 bg-[#142D69]">
              {footerContent}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};