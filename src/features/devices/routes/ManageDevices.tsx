import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getOwnedDevices } from '../api/getDevices';
import { DeviceLayout } from '../components/DeviceLayout';
import { selectDevices, setDevices } from '../reducer';

export const ManageDevices = () => {
  const dispatch = useAppDispatch();

  const devices = useAppSelector(selectDevices);

  useEffect(() => {
    getOwnedDevices().then((data) => {
      dispatch(setDevices(data.devices));
    });
  }, [dispatch]);

  return (
    <DeviceLayout>
      <ul>
        {devices.map((device) => (
          <li key={device.deviceId}>{device.name}</li>
        ))}
      </ul>
    </DeviceLayout>
  );
};
