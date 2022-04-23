import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Notification } from './types';

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications = [...state.notifications, action.payload];
    },
    dismissNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { pushNotification, dismissNotification } = notificationSlice.actions;
export const selectNotifications = (state: RootState) => state.notifications.notifications;
export default notificationSlice.reducer;
