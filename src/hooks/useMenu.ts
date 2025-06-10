import { useState, useCallback } from 'react';
import { MenuItem } from '../types/menu';

interface UseMenuOptions {
  autoClose?: boolean;
  onItemClick?: (item: MenuItem) => void;
}

export const useMenu = (options: UseMenuOptions = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveItem(null);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleItemClick = useCallback((item: MenuItem) => {
    setActiveItem(item.id);
    
    if (options.onItemClick) {
      options.onItemClick(item);
    }
    
    if (options.autoClose !== false && !item.children) {
      closeMenu();
    }
  }, [options, closeMenu]);

  return {
    isOpen,
    activeItem,
    openMenu,
    closeMenu,
    toggleMenu,
    handleItemClick
  };
};