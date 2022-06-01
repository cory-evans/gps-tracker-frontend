import { Route, Routes, Navigate } from 'react-router-dom';
import { AccountSettings } from './AccountSettings';
import { NotificationSettings } from './NotificationSettings';
import { SecuritySettings } from './SecuritySettings';
import { SwaggerDocs } from './SwaggerDocs';

export const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/settings/account" />} />
      <Route path="/account" element={<AccountSettings />} />
      <Route path="/security" element={<SecuritySettings />} />
      <Route path="/notifications" element={<NotificationSettings />} />
      <Route path="/swagger" element={<SwaggerDocs />} />
    </Routes>
  );
};
