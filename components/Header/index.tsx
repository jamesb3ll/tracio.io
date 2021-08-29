import Logo from './Logo';
import Link from 'next/link';
import NavLink from './NavLink';
import { PrimaryButtonLink } from '../Button';
import MobileMenuToggle from './MobileMenuToggle';
import { useSession } from '../../hooks/auth';
import { cx } from '../../utils/utils';

export default function Header() {
  const [user] = useSession();
  return (
    <div className="relative flex flex-col items-center justify-center w-full mx-auto">
      <div className="w-full px-4 py-5 mx-auto md:px-24 lg:px-8 bg-gray-100">
        <div className="relative flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" aria-label="tracio">
            <a className="inline-flex items-center">
              <Logo />
            </a>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink href="#features">Features</NavLink>
            </li>
            <li>
              <NavLink href="#pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink href="#blog">Blog</NavLink>
            </li>
            <li>
              <NavLink href="https://github.com/jamesb3ll/tracio.io">GitHub</NavLink>
            </li>
            <li>
              <Link href={!user ? '/login' : '/dashboard'} passHref>
                <PrimaryButtonLink className={cx('shadow-md', !user && 'px-11')}>
                  {!user ? 'Login' : 'Dashboard'}
                </PrimaryButtonLink>
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <MobileMenuToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
