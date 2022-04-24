import { Menu } from '@headlessui/react';
import {
  UserIcon,
  MapIcon,
  CollectionIcon,
  LogoutIcon,
  AdjustmentsIcon,
  CubeTransparentIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth';
import clsx from 'clsx';

type NavigationItem = {
  to: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

const iconClassName =
  'w-12 h-12 p-2 rounded-full text-white hover:text-primary-600 hover:bg-white hover:shadow-sm transition-colors';

export const Navigation = () => {
  const { logout } = useAuth();

  const items = [
    { to: '/map', label: 'Home', icon: <MapIcon className={iconClassName} /> },
    { to: '/devices/manage', label: 'Devices', icon: <CollectionIcon className={iconClassName} /> },
  ].filter(Boolean) as NavigationItem[];

  return (
    <nav className="flex flex-col bg-primary-700">
      <div className="flex justify-center p-2 shadow-sm">
        <Link to="/">
          <CubeTransparentIcon className={iconClassName} />
        </Link>
      </div>
      <ul className="flex flex-col flex-1 bg-primary-600 p-2">
        {items.map(({ to, label, icon }) => (
          <li key={to}>
            <Link to={to}>
              <span className="sr-only">{label}</span>
              {icon}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center p-2 bg-primary-600">
        <Menu as="div" className="relative">
          <Menu.Button>
            <UserIcon className={iconClassName} />
          </Menu.Button>
          <Menu.Items
            className={clsx(
              'z-40 absolute origin-bottom-right left-full bottom-1/3',
              'w-56 rounded shadow-xl',
              'ring ring-primary-500 bg-white',
              'p-1'
            )}
          >
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/settings/account"
                  className="p-1 flex items-center space-x-2 rounded hover:bg-primary-500 hover:text-white hover:shadow"
                >
                  <AdjustmentsIcon className="h-8 w-8" />
                  <span>Settings</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item onClick={logout}>
              {({ active }) => (
                <div className="p-1 flex items-center space-x-2 cursor-pointer rounded hover:bg-danger-500 hover:text-white hover:shadow">
                  <LogoutIcon className="h-8 w-8" />
                  <span>Logout</span>
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};
