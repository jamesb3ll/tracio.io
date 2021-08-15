import Link from 'next/link';
import type { ReactNode } from 'react';
import { PrimaryButton, SecondaryButtonLink } from '../Button';

export default function Hero({ title, subtitle }: { title: ReactNode; subtitle: ReactNode }) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full mx-auto">
      <div className="relative bg-gray-100 w-full">
        <div
          className="
            px-4
            py-16
            mx-auto
            sm:max-w-xl
            md:max-w-full
            lg:max-w-screen-xl
            md:px-24
            lg:px-8 lg:py-16
          "
        >
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2
              className="
                mb-6
                font-sans
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-4xl
                "
              // sm:leading-none
            >
              {title}
            </h2>
            {subtitle}
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <div className="flex flex-row w-full md:w-2/3">
                <div
                  className="
                    flex
                    w-auto
                    items-center
                    justify-center
                    h-12
                    pl-3
                    pr-2
                    rounded-tl rounded-bl
                    bg-gray-200
                    text-gray-600
                  "
                >
                  https://
                </div>
                <input
                  placeholder="yourwebsite.com"
                  required
                  type="text"
                  className="
                    w-full
                    h-12
                    pr-4
                    pl-2
                    mb-3
                    text-gray-700
                    tracking-wide
                    transition
                    duration-200
                    border-2 border-transparent
                    rounded-tr rounded-br
                    appearance-none
                    md:mr-2 md:mb-0
                    bg-deep-purple-900
                    focus:border-brand-accent-700 focus:outline-none focus:shadow-outline
                  "
                />
              </div>
              <PrimaryButton type="submit" className="flex w-full md:w-1/3">
                <span className="pr-1">Get started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </PrimaryButton>
            </form>
            <p
              className="
                max-w-md
                mb-10
                text-xs
                tracking-wide
                text-gray-700
                sm:text-sm sm:mx-auto
                md:mb-6
              "
            >
              Get setup in two easy steps. No sign-up or credit card required.
            </p>
            <div className="flex items-center justify-center pt-3 pb-10 mx-auto w-full md:w-1/2">
              <h4
                className="
                  absolute
                  px-4
                  text-sm
                  font-semibold
                  tracking-wider
                  uppercase
                  text-gray-500
                  bg-gray-100
                  leading-5
                "
              >
                Or
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <div className="flex items-center justify-center w-full md:px-16">
              <Link href="/dashboard/recoverweekly.com" passHref>
                <SecondaryButtonLink className="flex w-full md:w-1/2">
                  View demo dashboard
                </SecondaryButtonLink>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
