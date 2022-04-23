import { NotificationTypes } from '../components/Notification';

export type Notification = {
  id: string;
  type: keyof typeof NotificationTypes;
  title: string;
  message?: string;
  persist?: boolean;
};
