import { ManageDevices } from '../features/devices';
import { Map } from '../features/map';

export const protectedRoutes = [
  {
    path: '/',
    element: <Map />,
  },
  {
    path: '/devices',
    element: <ManageDevices />,
  },
];
