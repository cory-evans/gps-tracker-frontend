import * as React from 'react';
import { Button } from '../../../components/Elements/Button/Button';
import { MainLayout } from '../../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (await login(email, password)) {
      navigate('/map');
    }
  };
  return (
    <MainLayout>
      <div className="flex-1 flex justify-around">
        <div className="">
          <form
            className="bg-white p-4 m-4 rounded flex flex-col space-y-2"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div></div>
            <div className="flex">
              <div className="flex-1"></div>
              <Button variant="primary" size="md" type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};
