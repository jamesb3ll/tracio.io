import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react';
import Logo from '../components/Header/Logo';
import { login, useSession } from '../hooks/auth';

interface LoginState {
  isLoading: boolean;
  emailSent: boolean;
  error?: string;
}

type ActionType =
  | { type: 'reset' }
  | { type: 'fetching' }
  | { type: 'success' }
  | { type: 'error'; payload: string };

const initialState = {
  isLoading: false,
  emailSent: false,
};

function loginReducer(state: LoginState, action: ActionType) {
  switch (action.type) {
    case 'reset':
      return initialState as LoginState;
    case 'fetching':
      return { isLoading: true, emailSent: false };
    case 'error':
      return { isLoading: false, error: action.payload, emailSent: false };
    case 'success':
      return { isLoading: false, emailSent: true };
    default:
      return state;
  }
}

export default function Login() {
  const router = useRouter();
  const [user] = useSession();
  const [{ isLoading, error, emailSent }, dispatch] = useReducer(loginReducer, initialState);

  useEffect(() => {
    if (user) router.push('/dashboard');
    if (typeof router.query.error === 'string') {
      dispatch({ type: 'error', payload: router.query.error });
    }
  }, [router, user]);

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const { email } = event.target as typeof event.target & {
      email: { value: string };
    };

    dispatch({ type: 'fetching' });
    try {
      const { success, error } = await login(email.value);
      if (success) {
        dispatch({ type: 'success' });
      } else {
        dispatch({ type: 'error', payload: error! });
      }
    } catch (error) {
      dispatch({ type: 'error', payload: 'Something went wrong.' });
    }
  }

  if (emailSent) {
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
              Check your email inbox
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              If you didn't receive an email,{' '}
              <button
                onClick={() => dispatch({ type: 'reset' })}
                className="font-medium text-brand-500 hover:text-brand-400"
              >
                try login again
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

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
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/">
              <a className="font-medium text-brand-500 hover:text-brand-400">create an account</a>
            </Link>
          </p>
        </div>
        {error && (
          <div
            className="relative py-2 px-3 text-sm leading-normal text-red-700 bg-red-100 rounded-lg"
            role="alert"
          >
            <p>Error: {error}</p>
          </div>
        )}
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm mb-4">
            {/* <div className="mb-4">
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
              </div> */}

            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Email address
              </label>
              <input
                autoFocus
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm"
                placeholder="email@address.com"
                required
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
              disabled={isLoading}
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
              {isLoading ? 'Loading...' : 'Log in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
