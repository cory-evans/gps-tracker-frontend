import * as React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Notifications } from '../features/notifications/components/Notifications';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Notifications />
        <Router>{children}</Router>
      </PersistGate>
    </Provider>
  );
};
