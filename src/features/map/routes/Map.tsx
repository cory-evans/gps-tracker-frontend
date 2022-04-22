import { MainLayout } from '../../../components/Layout';
import { DeviceSidebar } from '../../devices/components/Sidebar';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

export const Map = () => {
  return (
    <MainLayout>
      <div className="flex flex-1">
        <DeviceSidebar />

        <div className="flex-1">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </MainLayout>
  );
};
