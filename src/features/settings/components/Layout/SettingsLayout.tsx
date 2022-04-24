import { BellIcon, KeyIcon, UserIcon } from '@heroicons/react/outline';
import { MainLayout, Sidebar } from '../../../../components/Layout';

type SettingsLayoutProps = {
  children: React.ReactNode;
};

export const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <MainLayout>
      <div className="h-full flex flex-1">
        <Sidebar title="Settings" divider={true}>
          <Sidebar.NavLink to="../account">
            <div className="flex items-center space-x-3 text-gray-600">
              <UserIcon className="h-8 w-8" />
              <div>
                <h2 className="font-semibold text-black">Account</h2>
                <p>Manage your user account information</p>
              </div>
            </div>
          </Sidebar.NavLink>
          <Sidebar.NavLink to="../notifications">
            <div className="flex items-center space-x-3 text-gray-600">
              <BellIcon className="h-8 w-8" />
              <div>
                <h2 className="font-semibold text-black">Notifications</h2>
                <p>Manage your notification preferences</p>
              </div>
            </div>
          </Sidebar.NavLink>
          <Sidebar.NavLink to="../security">
            <div className="flex items-center space-x-3 text-gray-600">
              <KeyIcon className="h-8 w-8" />
              <div>
                <h2 className="font-semibold text-black">Security</h2>
                <p>Manage your sessions and security log</p>
              </div>
            </div>
          </Sidebar.NavLink>
        </Sidebar>
        <div className="p-2 flex flex-1">{children}</div>
      </div>
    </MainLayout>
  );
};
