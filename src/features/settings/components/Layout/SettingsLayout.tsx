import { BellIcon, KeyIcon, UserIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { MainLayout } from '../../../../components/Layout';

type SettingsLayoutProps = {
  children: React.ReactNode;
};

export const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <MainLayout>
      <div className="h-full flex flex-1">
        <SettingsNav />
        {children}
      </div>
    </MainLayout>
  );
};

const SettingsNav = () => {
  return (
    <div className="h-full flex flex-col w-64">
      <div className="bg-white shadow z-[1] flex items-center h-16">
        <h1 className="text-xl font-semibold ml-2">Settings</h1>
      </div>
      <ul className="flex flex-col flex-1 bg-white divide-y">
        <li>
          <NavLink
            to="/settings/account"
            className={({ isActive }) =>
              clsx('flex items-center space-x-3 text-gray-600 p-2', isActive && 'bg-primary-50')
            }
          >
            <UserIcon className="h-8 w-8" />
            <div>
              <h2 className="font-semibold text-black">Account</h2>
              <p>Manage your user account information</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings/notifications"
            className={({ isActive }) =>
              clsx('flex items-center space-x-3 text-gray-600 p-2', isActive && 'bg-primary-50')
            }
          >
            <BellIcon className="h-8 w-8" />
            <div>
              <h2 className="font-semibold text-black">Notifications</h2>
              <p>Manage your notification preferences</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings/security"
            className={({ isActive }) =>
              clsx('flex items-center space-x-3 text-gray-600 p-2', isActive && 'bg-primary-50')
            }
          >
            <KeyIcon className="h-8 w-8" />
            <div>
              <h2 className="font-semibold text-black">Security</h2>
              <p>Manage your sessions and security log</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
