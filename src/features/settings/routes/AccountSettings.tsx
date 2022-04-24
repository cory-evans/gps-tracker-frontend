import { Button } from '../../../components/Elements/Button/Button';
import { Input } from '../../../components/Elements/Input/Input';
import { SettingsLayout } from '../components/Layout/SettingsLayout';

export const AccountSettings = () => {
  return (
    <SettingsLayout>
      <div className="flex-1">
        <div className="mt-4 sm:mt-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Account</h1>

          <div className="my-4">
            <h2 className="text-xl font-semibold my-2">Profile</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="ml-2 text-gray-600 text-sm font-semibold">First Name</label>
                <Input type="text" />
              </div>
              <div className="flex flex-col">
                <label className="ml-2 text-gray-600 text-sm font-semibold">Last Name</label>
                <Input type="text" />
              </div>
            </div>
          </div>

          <div className="my-4">
            <h2 className="text-xl font-semibold my-2">Contact Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="ml-2 text-gray-600 text-sm font-semibold">Email Address</label>
                <Input type="email" />
              </div>
              <div className="flex flex-col">
                <label className="ml-2 text-gray-600 text-sm font-semibold">Phone Number</label>
                <Input type="tel" />
              </div>
            </div>
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
