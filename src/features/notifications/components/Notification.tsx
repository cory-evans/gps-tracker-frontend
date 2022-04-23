import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

export const NotificationTypes = {
  info: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
  success: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
  warning: <ExclamationCircleIcon className="h-6 w-6 text-yellow-500" />,
  error: <XCircleIcon className="h-6 w-6 text-red-500" />,
};

export type NotificationProps = {
  type: keyof typeof NotificationTypes;
  title: string;
  message?: string;
  persist?: boolean;

  onDismiss: () => void;
};

export const Notification = ({ type, title, message, onDismiss, persist }: NotificationProps) => {
  if (!persist) {
    setTimeout(onDismiss, 5000);
  }

  return (
    <div className="w-full flex flex-col items-start">
      <Transition
        show={true}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="p-4" role="alert" aria-label={message}>
            <div className="flex items-start">
              <div className="flex-shrink-0">{NotificationTypes[type]}</div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">{title}</p>
                <p className="mt-1 text-sm text-gray-500">{message}</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-white rounded-md inline-flex items-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={onDismiss}
                >
                  <span>Dismiss</span>
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};