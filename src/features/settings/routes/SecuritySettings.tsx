import { Button } from '../../../components/Elements/Button/Button';
import { ConfirmationDialog } from '../../../components/Elements/ConfirmationDialog';
import { useAuth } from '../../auth/hooks/useAuth';
import { SettingsLayout } from '../components/Layout/SettingsLayout';

export const SecuritySettings = () => {
  const { signOutEverywhere } = useAuth();

  return (
    <SettingsLayout>
      <div className="flex-1">
        <div className="mt-4 sm:mt-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Security</h1>
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
                confirmButton={
                  <Button variant="danger" onClick={signOutEverywhere}>
                    Sign Out Everywhere
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};
