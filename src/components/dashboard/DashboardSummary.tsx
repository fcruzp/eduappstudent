import React from 'react';
import { Card, CardContent } from '../ui/card';
import { DivideIcon as LucideIcon } from 'lucide-react';

export interface SummaryItem {
  id: string;
  title: string;
  value: string | number;
  subtitle: string;
  icon: {
    component: LucideIcon | React.ComponentType<{ className?: string }>;
    backgroundColor: string;
    iconColor: string;
    decorations?: {
      topRight?: string;
      bottomLeft?: string;
    };
  };
  onClick?: () => void;
  className?: string;
}

export interface DashboardSummaryProps {
  /** Title of the summary section */
  title?: string;
  /** Array of summary items to display */
  items: SummaryItem[];
  /** Number of columns in the grid (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Custom CSS classes for the container */
  className?: string;
  /** Custom CSS classes for individual cards */
  cardClassName?: string;
  /** Show/hide the section title */
  showTitle?: boolean;
  /** Custom title component */
  titleComponent?: React.ReactNode;
  /** Gap between grid items */
  gap?: string;
  /** Enable hover effects */
  enableHover?: boolean;
  /** Custom card padding */
  cardPadding?: string;
}

export const DashboardSummary: React.FC<DashboardSummaryProps> = ({
  title = 'Resumen Diario',
  items,
  columns = 2,
  className = '',
  cardClassName = '',
  showTitle = true,
  titleComponent,
  gap = 'gap-4',
  enableHover = true,
  cardPadding = 'p-6'
}) => {
  const getGridCols = () => {
    switch (columns) {
      case 3:
        return 'grid-cols-3';
      case 4:
        return 'grid-cols-4';
      default:
        return 'grid-cols-2';
    }
  };

  const renderIcon = (item: SummaryItem) => {
    const IconComponent = item.icon.component;
    
    return (
      <div className="w-12 h-12 flex items-center justify-center mb-4">
        <div className="relative">
          <div className={`w-10 h-10 ${item.icon.backgroundColor} rounded-full flex items-center justify-center`}>
            <IconComponent className={`w-6 h-6 ${item.icon.iconColor}`} />
          </div>
          
          {/* Icon decorations */}
          {item.icon.decorations?.topRight && (
            <div className={`absolute -top-1 -right-1 w-3 h-3 ${item.icon.decorations.topRight} rounded-full`}></div>
          )}
          {item.icon.decorations?.bottomLeft && (
            <div className={`absolute -bottom-1 -left-1 w-2 h-2 ${item.icon.decorations.bottomLeft} rounded-full`}></div>
          )}
        </div>
      </div>
    );
  };

  const renderCard = (item: SummaryItem) => {
    const baseCardClasses = `bg-white shadow-lg transition-shadow ${
      enableHover ? 'hover:shadow-xl cursor-pointer' : ''
    } ${cardClassName}`;

    return (
      <Card 
        key={item.id}
        className={`${baseCardClasses} ${item.className || ''}`}
        onClick={item.onClick}
      >
        <CardContent className={`${cardPadding} flex flex-col items-center text-center`}>
          {renderIcon(item)}
          
          <div className="text-4xl font-bold text-texto-principal-oscuro mb-1">
            {item.value}
          </div>
          
          <span className="text-texto-secundario text-sm">
            {item.subtitle}
          </span>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className={className}>
      {/* Section Title */}
      {showTitle && (
        <div className="mb-4">
          {titleComponent || (
            <h2 className="text-texto-principal-oscuro font-semibold text-lg">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Summary Grid */}
      <div className={`grid ${getGridCols()} ${gap}`}>
        {items.map(renderCard)}
      </div>
    </section>
  );
};

export default DashboardSummary;