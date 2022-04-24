import { MainLayout, Sidebar } from '../../../components/Layout';

type DeviceLayoutProps = {
  children: React.ReactNode;
};

export const DeviceLayout = ({ children }: DeviceLayoutProps) => {
  return (
    <MainLayout>
      <div className="flex flex-1 h-full">
        <Sidebar title="Manage Devices" divider={true}>
          <Sidebar.NavLink to="../manage">My Devices</Sidebar.NavLink>
          <Sidebar.NavLink to="../add">Register New Device</Sidebar.NavLink>
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    </MainLayout>
  );
};
