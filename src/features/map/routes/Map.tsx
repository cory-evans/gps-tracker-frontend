import { MainLayout } from '../../../components/Layout';
import { DeviceSidebar } from '../../devices/components/Sidebar';

export const Map = () => {
  return (
    <MainLayout>
      <div className="flex flex-1">
        <DeviceSidebar />

        <div>This is content</div>
      </div>
    </MainLayout>
  );
};
