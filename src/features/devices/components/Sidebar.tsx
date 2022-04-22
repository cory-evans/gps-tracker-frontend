import * as React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectDevices } from '../reducer';
import type { Device } from '../types';
import clsx from 'clsx';
import ToggleSwitch from '../../../components/Elements/ToggleSwitch/ToggleSwitch';

export const DeviceSidebar = () => {
  const dispatch = useAppDispatch();
  const devices = useAppSelector(selectDevices);

  return (
    <div className="flex flex-col">
      <nav className="bg-white flex-1">
        <h1 className="px-2 mt-2 text-xl border-b border-black">My Devices</h1>
        <ul className="px-2 mt-2 flex flex-col w-60">
          {devices.map((device) => (
            <DeviceEntry device={device} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

type DeviceEntryProps = {
  device: Device;
} & React.ComponentProps<'li'>;

// const DeviceEntry = ({ device, ...props }: DeviceEntryProps) => {
const DeviceEntry = ({ device, className, ...props }: DeviceEntryProps) => {
  const [show, setShow] = React.useState(true);
  return (
    <li
      key={device.deviceId}
      className={clsx(
        'rounded hover:shadow cursor-pointer px-2 py-1 flex justify-between items-center',
        className
      )}
    >
      <span>{device.name}</span>
      <ToggleSwitch enabled={show} onChange={setShow} settingName="" />
    </li>
  );
};
