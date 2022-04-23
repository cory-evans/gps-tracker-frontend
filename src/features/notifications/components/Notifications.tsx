import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectNotifications, dismissNotification } from '../reducer';

import { Notification } from './Notification';

export const Notifications = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(selectNotifications);

  return (
    <div
      aria-live="assertive"
      className="z-50 fixed inset-0 space-y-4 px-4 py-6 pointer-events-none sm:p-6 "
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          onDismiss={() => {
            dispatch(dismissNotification(notification.id));
          }}
          {...notification}
        />
      ))}
    </div>
  );
};
