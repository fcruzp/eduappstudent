export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  path?: string;
  onClick?: () => void;
  badge?: string | number;
  disabled?: boolean;
  divider?: boolean;
  children?: MenuItem[];
}

export interface MenuTheme {
  background: string;
  textColor: string;
  hoverBackground: string;
  hoverTextColor: string;
  activeBackground: string;
  activeTextColor: string;
  borderColor: string;
  iconColor: string;
  badgeBackground: string;
  badgeTextColor: string;
}