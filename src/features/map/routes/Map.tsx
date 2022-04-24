import clsx from 'clsx';
import { EyeIcon, EyeOffIcon, RefreshIcon } from '@heroicons/react/outline';
import { MainLayout, Sidebar } from '../../../components/Layout';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { getOwnedDevices } from '../../devices/api/getDevices';
import {
  hideDevice,
  selectDevices,
  selectHiddenDevices,
  setDevices,
  showDevice,
} from '../../devices/reducer';
import { Device } from '../../devices/types';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  const dispatch = useAppDispatch();
  const devices = useAppSelector(selectDevices);

  const refreshDevices = () => {
    getOwnedDevices().then((data) => {
      dispatch(setDevices(data.devices));
    });
  };
  return (
    <MainLayout>
      <div className="flex h-full">
        <Sidebar title="Map">
          <Sidebar.Entry>
            <div className="flex justify-between items-center p-2">
              <h1>Device List</h1>

              <button onClick={refreshDevices}>
                <RefreshIcon className="h-6 w-6" />
              </button>
            </div>
          </Sidebar.Entry>
          {devices.map((device) => (
            <Sidebar.Entry className="mx-2">
              <DeviceEntry key={device.deviceId} device={device} />
            </Sidebar.Entry>
          ))}
        </Sidebar>

        <div className="flex-1">
          <MapContainer
            center={[-39.520397, 176.86227]}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full"
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

type DeviceEntryProps = {
  device: Device;
} & React.ComponentProps<'li'>;

const DeviceEntry = ({ device, className }: DeviceEntryProps) => {
  const dispatch = useAppDispatch();
  const hiddenDevices = useAppSelector(selectHiddenDevices);
  const show = hiddenDevices.indexOf(device.deviceId) === -1;

  const toggleOnClick = (enabled: boolean) => {
    if (enabled) {
      dispatch(showDevice(device.deviceId));
    } else {
      dispatch(hideDevice(device.deviceId));
    }
  };

  return (
    <li
      className={clsx(
        'rounded hover:shadow cursor-pointer px-2 py-1 flex justify-between items-center',
        className
      )}
    >
      <span>{device.name}</span>
      <button onClick={() => toggleOnClick(!show)}>
        {show ? <EyeIcon className="h-6 w-6" /> : <EyeOffIcon className="h-6 w-6" />}
      </button>
    </li>
  );
};
