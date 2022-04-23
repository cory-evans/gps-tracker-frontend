import { Menu } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth';
import clsx from 'clsx';

type NavigationItem = {
  to: string;
  label: string;
  onClick?: () => void;
};

export const Navigation = () => {
  const { user, logout } = useAuth();

  const items = [
    user && { to: '/map', label: 'Home' },
    user && { to: '/devices', label: 'Devices' },
    !user && { to: '/auth/login', label: 'Login' },
    user && { to: '', label: 'Logout', onClick: logout },
  ].filter(Boolean) as NavigationItem[];

  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="max-w-xs bg-gray-200 p-2 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Open user menu</span>
              <MenuIcon className="h-8 w-8 rounded-full" />
            </Menu.Button>
          </div>
          {/* <Transition
            show={true}
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          > */}
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {items.map((item) => (
              <Menu.Item key={item.label}>
                {({ active }) => (
                  <Link
                    onClick={item.onClick}
                    to={item.to}
                    className={clsx(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
          {/* </Transition> */}
        </>
      )}
    </Menu>
  );
};
