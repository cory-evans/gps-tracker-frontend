import * as React from 'react';
import { Button } from '../../../components/Elements/Button/Button';
import { MainLayout } from '../../../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Input } from '../../../components/Elements/Input/Input';

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
            className="bg-white shadow-lg p-4 m-4 rounded flex flex-col space-y-2 sm:min-w-[460px]"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-2xl font-semibold pb-4">Login</h1>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Input
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
              <Input
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
            <div className="flex justify-between items-baseline">
              <Link to="/auth/register" className="text-gray-500 hover:underline">
                Register
              </Link>
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
