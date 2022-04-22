import { useEffect } from 'react';
import { MainLayout } from '../../../components/Layout';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getOwnedDevices } from '../api/getDevices';
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
    <MainLayout>
      <h1>Manage Devices</h1>
      <ul>
        {devices.map((device) => (
          <li key={device.deviceId}>{device.name}</li>
        ))}
      </ul>
    </MainLayout>
  );
};
