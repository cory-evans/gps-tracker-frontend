import { MainLayout } from '../../../components/Layout';
import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate('/map', { replace: true });
  }

  return (
    <MainLayout>
      <h1>This is the landing page</h1>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </MainLayout>
  );
};
