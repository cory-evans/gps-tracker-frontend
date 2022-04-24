import { Switch } from '@headlessui/react';
import clsx from 'clsx';

const variants = {
  primary: 'bg-primary-600',
  inverse: 'bg-white',
  danger: 'bg-danger-600',
};

type Size = {
  switchClass: string;
  circleClass: string;
  circleActiveClass: string;
};

const sizes: Record<string, Size> = {
  sm: {
    switchClass: 'h-[14px] w-[28px]',
    circleClass: 'h-[10px] w-[10px]',
    circleActiveClass: 'translate-x-[14px]',
  },
  md: {
    switchClass: 'h-[20px] w-[40px]',
    circleClass: 'h-[16px] w-[16px]',
    circleActiveClass: 'translate-x-5', // 20px
  },
  lg: {
    switchClass: 'h-[38px] w-[74px]',
    circleClass: 'h-[34px] w-[34px]',
    circleActiveClass: 'translate-x-9',
  },
};

type ToggleSwitchProps = {
  settingName: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;

  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
};

export default function ToggleSwitch({
  settingName,
  enabled,
  onChange,
  size = 'md',
  variant = 'primary',
}: ToggleSwitchProps) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={clsx(
        'relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
        enabled ? variants[variant] : 'bg-gray-400',
        sizes[size].switchClass
      )}
    >
      <span className="sr-only">{settingName}</span>
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0 transition ease-in-out duration-200',
          enabled ? sizes[size].circleActiveClass : 'translate-x-0',
          sizes[size].circleClass
        )}
      />
    </Switch>
  );
}
