import { Button } from '../../../components/Elements/Button/Button';
import { SettingsLayout } from '../components/Layout/SettingsLayout';

export const NotificationSettings = () => {
  return (
    <SettingsLayout>
      <div className="flex-1">
        <div className="mt-4 sm:mt-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Notifications</h1>

          <div className="my-4">
            <h2 className="text-xl font-semibold my-2">Email</h2>
            <div></div>
          </div>

          <div className="my-4">
            <h2 className="text-xl font-semibold my-2">Text (SMS)</h2>

            <div></div>
          </div>

          <hr className="my-8" />

          <div className="flex items-center justify-end space-x-2">
            <Button variant="inverse">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};
