import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { Navigation } from './Navigation';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { user } = useAuth();
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <div className="px-4 flex-1 flex items-center justify-between">
            <Link to={user ? '/map' : '/'} className="text-2xl">
              GPS Tracker
            </Link>
            <Navigation />
          </div>
        </div>
        <main className="z-0 flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
      </div>
    </div>
  );
};
