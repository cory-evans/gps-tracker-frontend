import * as React from 'react';
import { Link } from 'react-router-dom';

type MainLayoutProps = {
  children: React.ReactNode;
};

const navLinkClass = 'block px-4 py-2 text-lg font-semibold hover:text-blue-600 hover:bg-gray-100';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <nav className="bg-white">
        <ul className="max-w-4xl mx-auto flex items-center">
          <li>
            <Link className={navLinkClass} to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className={navLinkClass} to={'/devices'}>
              My Devices
            </Link>
          </li>
          <li className="flex-1"></li>
          <li>
            <Link className={navLinkClass} to={'/auth/login'}>
              Log In
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};
