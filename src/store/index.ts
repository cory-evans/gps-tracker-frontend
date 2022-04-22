import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/reducer';
import deviceReducer from '../features/devices/reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedAuthReducer = persistReducer({ key: 'auth', storage }, authReducer);
const persistedDeviceReducer = persistReducer({ key: 'devices', storage }, deviceReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    devices: persistedDeviceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
