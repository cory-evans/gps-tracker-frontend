import { useRoutes } from 'react-router-dom';
import { Landing } from '../features/misc/routes/Landing';
import { protectedRoutes } from './protected';
import { publcRoutes } from './public';

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '/',
      element: <Landing />,
    },
  ];

  const element = useRoutes([...publcRoutes, ...protectedRoutes, ...commonRoutes]);

  return <>{element}</>;
};
