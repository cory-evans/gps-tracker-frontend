import { ManageDevices } from '../features/devices';
import { Map } from '../features/map';
import { SettingsRoutes } from '../features/settings';

export const protectedRoutes = [
  {
    path: '/map',
    element: <Map />,
  },
  {
    path: '/devices',
    element: <ManageDevices />,
  },
  {
    path: '/settings/*',
    element: <SettingsRoutes />,
  },
];
