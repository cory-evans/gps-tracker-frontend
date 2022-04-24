import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/map', { replace: true });
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>This is the landing page</h1>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </div>
  );
};
