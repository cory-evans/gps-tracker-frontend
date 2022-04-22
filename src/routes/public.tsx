import { AuthRoutes } from '../features/auth';

export const publcRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
