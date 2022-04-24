import * as React from 'react';
import { Navigation } from './Navigation';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      <div className="flex w-0 flex-1 overflow-hidden">
        <Navigation />
        <main className="z-0 flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
      </div>
    </div>
  );
};
