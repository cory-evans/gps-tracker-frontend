import { Button } from '../../../components/Elements/Button/Button';
import { ConfirmationDialog } from '../../../components/Elements/ConfirmationDialog';
import { SettingsLayout } from '../components/Layout/SettingsLayout';

export const SecuritySettings = () => {
  const devices = [
    {
      name: 'My iPhone',
      deviceId: '4e22f3fa-c3a8-11ec-9d64-0242ac120002',
      lastSeen: new Date(Date.now() - 4948 * 60 * 60 * 24 * 7),
    },
    {
      name: 'My iPad',
      deviceId: '674e6ada-c3a8-11ec-9d64-0242ac120002',
      lastSeen: new Date(Date.now() - 1655 * 60 * 60 * 24 * 2),
    },
  ];
  return (
    <SettingsLayout>
      <div className="flex-1">
        <div className="mt-4 sm:mt-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Security</h1>

          <div className="my-4">
            <h2 className="text-xl font-semibold my-2">Devices</h2>

            <div>
              <ul className="flex flex-col space-y-2">
                {devices.map((device) => (
                  <li key={device.name}>
                    <ManageDevice {...device} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="my-8" />

          <div className="my-4">
            <h2 className="text-xl font-semibold my-2">User Sessions</h2>
            <div>
              <p className="my-1">
                Signing out everywhere will not effect your GPS devices. It will sign you out of
                every browser you are using.
              </p>

              <ConfirmationDialog
                icon="danger"
                title="Sign Out Everywhere"
                body="Are you sure you want to sign out of every browser you are using?"
                triggerButton={<Button variant="danger">Sign Out Everywhere</Button>}
                confirmButton={<Button variant="danger">Sign Out Everywhere</Button>}
              />
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

type ManageDeviceProps = {
  name: string;
  deviceId: string;
  lastSeen: Date;
};

const ManageDevice = ({ name, lastSeen, deviceId }: ManageDeviceProps) => {
  return (
    <div className="bg-white rounded shadow p-4 text-gray-600 cursor-pointer">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <span className="text-gray-600 text-sm">ID: {deviceId}</span>
          <span className="text-gray-600 text-sm">Last seen: {lastSeen.toLocaleString()}</span>
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
