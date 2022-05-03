import clsx from 'clsx';
import * as ReactDOMServer from 'react-dom/server';
import { EyeIcon, EyeOffIcon, RefreshIcon } from '@heroicons/react/outline';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { MainLayout, Sidebar } from '../../../components/Layout';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { getOwnedDevices } from '../../devices/api/getDevices';
import {
  hideDevice,
  selectDevicePositions,
  selectDevices,
  selectHiddenDevices,
  setDevices,
  setDevicePositions,
  showDevice,
} from '../../devices/reducer';
import { Device } from '../../devices/types';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { divIcon, Map as LMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getOwnedDevicesPosition } from '../../devices/api/getDevicePositions';
import { useMemo, useState } from 'react';

const markerIcon = divIcon({
  className: 'bg-transperant border-none',
  html: ReactDOMServer.renderToString(
    <LocationMarkerIcon className="fill-blue-400 stroke-blue-600" />
  ),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const Map = () => {
  const [map, setMap] = useState<LMap | null>(null);

  const dispatch = useAppDispatch();
  const devices = useAppSelector(selectDevices);
  const hiddenDevices = useAppSelector(selectHiddenDevices);
  const currentDevicePositions = useAppSelector(selectDevicePositions);

  const refreshDevices = () => {
    getOwnedDevices().then((data) => {
      dispatch(setDevices(data.devices));
    });

    getOwnedDevicesPosition().then((data) => {
      dispatch(setDevicePositions(data.positions));
    });
  };

  const deviceEntryOnClick = (deviceId: string) => {
    const pos = currentDevicePositions.find((p) => p.deviceId === deviceId);
    if (!pos) return;

    if (map) {
      map.flyTo([pos.latitude, pos.longitude], 14);
    }
  };

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={[-39.520397, 176.86227]}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full"
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentDevicePositions.map((position, index) => {
          const deviceId = position.deviceId;
          if (hiddenDevices.includes(deviceId)) return null;
          return (
            <Marker
              key={index}
              position={[position.latitude, position.longitude]}
              icon={markerIcon}
            />
          );
        })}
      </MapContainer>
    ),
    [currentDevicePositions, hiddenDevices]
  );
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
              <DeviceEntry
                key={device.deviceId}
                device={device}
                onClick={() => deviceEntryOnClick(device.deviceId)}
              />
            </Sidebar.Entry>
          ))}
        </Sidebar>

        <div className="flex-1">{displayMap}</div>
      </div>
    </MainLayout>
  );
};

type DeviceEntryProps = {
  device: Device;
} & React.ComponentProps<'li'>;

const DeviceEntry = ({ device, className, onClick }: DeviceEntryProps) => {
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
      onClick={(e) => {
        e.preventDefault();

        toggleOnClick(true);

        if (onClick) {
          onClick(e);
        }
      }}
    >
      <span>{device.name}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleOnClick(!show);
        }}
      >
        {show ? <EyeIcon className="h-6 w-6" /> : <EyeOffIcon className="h-6 w-6" />}
      </button>
    </li>
  );
};
