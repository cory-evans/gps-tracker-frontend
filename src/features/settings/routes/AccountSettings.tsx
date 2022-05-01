import { useEffect, useState } from 'react';
import { Button } from '../../../components/Elements/Button/Button';
import { Input } from '../../../components/Elements/Input/Input';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectUser, setUser } from '../../auth';
import { getMe } from '../../auth/api/me';
import { SettingsLayout } from '../components/Layout/SettingsLayout';

export const AccountSettings = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [email, setEmail] = useState(user?.email);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);

  useEffect(() => {
    if (loading) {
      getMe().then((data) => {
        const user = data.user;

        setLoading(false);
        dispatch(setUser(user));

        setEmail(user.email);
        setFirstName(user.firstName);
        setLastName(user.lastName);
      });
    }
  }, [dispatch, loading]);

  // TODO: add loading state

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
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="ml-2 text-gray-600 text-sm font-semibold">Last Name</label>
                <Input type="text" value={lastName} />
              </div>
            </div>
          </div>

          <div className="my-4">
            <h2 className="text-xl font-semibold my-2">Contact Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="ml-2 text-gray-600 text-sm font-semibold">Email Address</label>
                <Input type="email" value={email} />
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
