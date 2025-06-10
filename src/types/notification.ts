export interface Notification {
  id: string;
  title: string;
  preview: string;
  fullMessage: string;
  timestamp: Date;
  isRead: boolean;
  type: 'assignment' | 'grade' | 'exam' | 'general' | 'payment';
  icon?: string;
  thumbnail?: string;
  actionButtons?: {
    label: string;
    action: string;
    variant?: 'primary' | 'secondary';
  }[];
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
}