import * as React from 'react';
import clsx from 'clsx';
import { RefreshIcon } from '@heroicons/react/solid';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { hideDevice, selectDevices, selectHiddenDevices, setDevices, showDevice } from '../reducer';
import type { Device } from '../types';
import { getOwnedDevices } from '../api/getDevices';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export const DeviceSidebar = () => {
  const dispatch = useAppDispatch();
  const devices = useAppSelector(selectDevices);

  const refreshDevices = () => {
    getOwnedDevices().then((data) => {
      dispatch(setDevices(data.devices));
    });
  };

  return (
    <div className="flex flex-col">
      <nav className="bg-white flex-1">
        <div className="px-2 mt-2 text-xl border-b border-black flex justify-between items-center">
          <h1>My Devices</h1>
          <button onClick={refreshDevices}>
            <RefreshIcon className="h-6 w-6" />
          </button>
        </div>
        <ul className="px-2 mt-2 flex flex-col w-60">
          {devices.map((device) => (
            <DeviceEntry key={device.deviceId} device={device} />
          ))}
        </ul>
      </nav>
    </div>
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
