import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cx } from '../../utils/utils';
const primaryClasses = [
  'items-center',
  'justify-center',
  'h-12',
  'px-6',
  'font-semibold',
  'tracking-wide',
  'text-white',
  'transition',
  'duration-200',
  'rounded',
  'bg-brand-500',
  'hover:bg-brand-500',
  'focus:shadow-outline',
];

export function PrimaryButton({
  className,
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button {...props} className={cx(...primaryClasses, 'flex', className)}>
      {children}
    </button>
  );
}

export function PrimaryButtonLink({
  className,
  children,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a {...props} className={cx(...primaryClasses, 'inline-flex', className)}>
      {children}
    </a>
  );
}

const secondaryClasses = [
  'items-center',
  'justify-center',
  'h-12',
  'px-6',
  'font-semibold',
  'tracking-wide',
  'text-brand-500',
  'transition',
  'duration-200',
  'rounded',
  'bg-white',
  'hover:bg-gray-200',
  'focus:shadow-outline',
  'shadow-sm',
];

export function SecondaryButton({
  className,
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button {...props} className={cx(...secondaryClasses, 'flex', className)}>
      {children}
    </button>
  );
}

export function SecondaryButtonLink({
  className,
  children,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a {...props} className={cx(...secondaryClasses, 'inline-flex', className)}>
      {children}
    </a>
  );
}
