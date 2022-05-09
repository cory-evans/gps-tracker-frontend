import { Button } from '../../../components/Elements/Button/Button';
import { Input } from '../../../components/Elements/Input/Input';
import { DeviceLayout } from '../components/DeviceLayout';

import { ClipboardCopyIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import React, { useState } from 'react';
import { createDevice } from '../api/createDevice';

export const RegisterDevice = () => {
  const [deviceName, setDeviceName] = useState('');
  const [secret, setSecret] = useState('');

  const [formDeviceName, setFormDeviceName] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const respd = await createDevice(formDeviceName);
    setSecret(respd.token);
    setDeviceName(respd.device.name);
    setFormDeviceName('');
  };

  return (
    <DeviceLayout>
      <div className="p-4 sm:max-w-4xl sm:mx-auto">
        <h2 className="text-xl font-semibold my-2">Register a new Device</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="device-name">Device Name</label>
            <div className="flex space-x-2">
              <Input
                id="device-name"
                name="deviceName"
                type="text"
                placeholder="My Personal Vehicle"
                className="flex-1 placeholder-shown:italic"
                value={formDeviceName}
                onChange={(e) => setFormDeviceName(e.target.value)}
                required
              />
              <Button type="submit">Create Device</Button>
            </div>
          </div>
        </form>

        {secret ? <NewDevice deviceName={deviceName} secret={secret} /> : null}
      </div>
    </DeviceLayout>
  );
};

type NewDeviceProps = {
  deviceName: string;
  secret: string;
};

const NewDevice = ({ deviceName, secret }: NewDeviceProps) => {
  return (
    <div className="mt-6 flex flex-col space-y-4">
      <h2 className="text-xl font-semibold my-2">Your New Device</h2>

      <div className="flex flex-col">
        <h3>Name</h3>
        <div className="flex">
          <pre
            className={clsx(
              'flex-1 px-2 py-1 bg-white overflow-x-auto whitespace-nowrap shadow',
              'border border-r-0 rounded-l-lg'
            )}
          >
            {deviceName}
          </pre>
          <button
            className={clsx(
              'grid place-items-center bg-white px-2 shadow',
              'border border-l-0 rounded-r-lg',
              'hover:bg-gray-50'
            )}
            onClick={() => {
              navigator.clipboard.writeText(deviceName);
            }}
          >
            <ClipboardCopyIcon className="w-6 h-6 stroke-black" />
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <h3>Secret Token</h3>
        <div className="flex">
          <pre
            className={clsx(
              'flex-1 px-2 py-1 bg-white overflow-x-auto whitespace-nowrap shadow',
              'border border-r-0 rounded-l-lg'
            )}
          >
            {secret}
          </pre>
          <button
            className={clsx(
              'grid place-items-center bg-white px-2 shadow',
              'border border-l-0 rounded-r-lg',
              'hover:bg-gray-50'
            )}
            onClick={() => {
              navigator.clipboard.writeText(secret);
            }}
          >
            <ClipboardCopyIcon className="w-6 h-6 stroke-black" />
          </button>
        </div>
        <p className="text-gray-600">
          Use this secret token to register your device with the server. This token will only be
          shown once.
        </p>
      </div>
    </div>
  );
};
