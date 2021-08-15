import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  link?: string;
}

export default function Feature({ icon, title, link, children }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
      <div className="mr-4">
        <div
          className="
          flex
          items-center
          justify-center
          w-12
          h-12
          mb-4
          rounded-full
          bg-brand-100
        "
        >
          {icon}
        </div>
      </div>
      <div>
        <h6 className="mb-3 text-xl font-bold leading-5 text-gray-900">{title}</h6>
        <p className="mb-3 text-sm text-gray-700">{children}</p>
      </div>
      {link && (
        <Link href={link}>
          <a
            className="
            inline-flex
            items-center
            font-semibold
            text-brand-500
            transition-colors
            duration-200
            hover:text-brand-500
          "
          >
            Learn more
          </a>
        </Link>
      )}
    </div>
  );
}
