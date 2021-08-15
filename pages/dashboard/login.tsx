import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../components/Header/Logo';

export default function Login() {
  const [isSignUp, setSignUp] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            {isSignUp ? 'Create your account' : 'Log in to your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <button
              className="font-medium text-brand-500 hover:text-brand-400"
              onClick={() => setSignUp(t => !t)}
            >
              {isSignUp ? 'log in to your account' : 'create your account'}
            </button>
          </p>
        </div>
        <form className="mt-8" action="#" method="POST">
          <div className="rounded-md shadow-sm mb-4">
            {isSignUp && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm"
                  placeholder="Alex Doe"
                  required
                />
              </div>
            )}
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm"
                placeholder="email@address.com"
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-brand-500 focus:ring-brand-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-brand-500 hover:text-brand-400">
                Forgot your password?
              </a>
            </div>
          </div> */}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-500 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-brand-300 group-hover:text-brand-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isSignUp ? 'Create account' : 'Log in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
