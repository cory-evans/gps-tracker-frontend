import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Elements/Button/Button';
import { Input } from '../../../components/Elements/Input/Input';
import { MainLayout } from '../../../components/Layout';
import { useAuth } from '../hooks/useAuth';

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (await register(email, password, firstName, lastName, displayName)) {
      navigate('/auth/login');
    }
  };
  return (
    <MainLayout>
      <div className="flex-1 flex justify-around">
        <div className="">
          <form
            className="bg-white shadow-lg p-4 m-4 rounded flex flex-col space-y-2"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-2xl font-semibold pb-4">Register</h1>
            <div className="flex space-x-2 flex-col sm:flex-row">
              <div className="flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="displayName">Display Name (username)</label>
              <Input
                type="text"
                name="displayName"
                id="displayName"
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
                required
              />
            </div>
            <div></div>
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
                required
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
                required
              />
            </div>
            <div className="flex justify-between items-baseline">
              <Link to="/auth/login" className="text-gray-500 hover:underline">
                Already have an account?
              </Link>
              <Button variant="primary" size="md" type="submit">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};
