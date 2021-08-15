import type { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

export default function NavLink({ children, ...props }: React.PropsWithChildren<LinkProps>) {
  return (
    <Link {...props}>
      <a
        className="
        font-medium
        tracking-wide
        text-gray-700
        transition-colors
        duration-200
        hover:text-brand-accent-400
      "
      >
        {children}
      </a>
    </Link>
  );
}
