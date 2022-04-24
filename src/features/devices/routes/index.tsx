import { Navigate, Route, Routes } from 'react-router-dom';
import { ManageDevices } from './ManageDevices';
import { RegisterDevice } from './RegisterDevice';

export const DeviceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="manage" />} />
      <Route path="manage" element={<ManageDevices />} />
      <Route path="add" element={<RegisterDevice />} />
    </Routes>
  );
};
