import { useEffect } from 'react';
import { Button } from '../../../components/Elements/Button/Button';
import { ConfirmationDialog } from '../../../components/Elements/ConfirmationDialog';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getOwnedDevices } from '../api/getDevices';
import { DeviceLayout } from '../components/DeviceLayout';
import { selectDevicePositions, selectDevices, setDevices } from '../reducer';
import { Device } from '../types';

export const ManageDevices = () => {
  const dispatch = useAppDispatch();

  const devices = useAppSelector(selectDevices);
  const devicePositions = useAppSelector(selectDevicePositions);

  useEffect(() => {
    getOwnedDevices().then((data) => {
      dispatch(setDevices(data.devices));
    });
  }, [dispatch]);

  return (
    <DeviceLayout>
      <div className="p-4 sm:max-w-4xl sm:mx-auto">
        <h2 className="text-xl font-semibold my-2">Devices</h2>

        <div>
          <ul className="flex flex-col space-y-2">
            {devices.map((device) => {
              const position = devicePositions.find((p) => p.deviceId === device.deviceId);
              var lastSeen = 'Never';
              if (position) {
                lastSeen = new Date(position.createdAt).toLocaleString();
              }
              return (
                <li key={device.deviceId}>
                  <ManageDevice device={device} lastSeen={lastSeen} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </DeviceLayout>
  );
};

type ManageDeviceProps = {
  device: Device;
  lastSeen: string;
};

const ManageDevice = ({ device, lastSeen }: ManageDeviceProps) => {
  return (
    <div className="bg-white rounded shadow p-4 text-gray-600">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col">
          <h3 className="font-bold">{device.name}</h3>
          <span className="text-gray-600 text-sm">ID: {device.deviceId}</span>
          <span className="text-gray-600 text-sm">Last seen: {lastSeen}</span>
        </div>
      </div>
      <div className="flex mt-4">
        <ConfirmationDialog
          icon="danger"
          title="Delete device"
          body="Are you sure you want to delete this device?"
          triggerButton={
            <Button variant="danger" onClick={(e) => e.stopPropagation()}>
              Delete this device
            </Button>
          }
          confirmButton={<Button variant="danger">Delete</Button>}
        />
      </div>
    </div>
  );
};
