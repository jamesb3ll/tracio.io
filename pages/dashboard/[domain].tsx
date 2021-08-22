import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, ReactNode, useCallback, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LineChart from 'react-svg-line-chart';
import { PrimaryButton } from '../../components/Button';
import Logo from '../../components/Header/Logo';
import { cx } from '../../utils/utils';
import Footer from '../../components/Footer';

export default function Dashboard() {
  const { query } = useRouter();
  const { domain } = query;

  return (
    <div className="w-full mx-auto">
      <Head>
        <title>tracio – {domain}</title>
      </Head>
      <main className="bg-gray-100 dark:bg-gray-800 relative">
        <div className="container mx-auto flex flex-col w-full">
          <header className="w-full z-40 flex items-center justify-between px-4 py-3 mx-auto md:px-24 lg:px-8 bg-gray-100">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
              <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                <button className="flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md">
                  <svg
                    width="20"
                    height="20"
                    className=""
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path>
                  </svg>
                </button>
                <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md">
                  <svg
                    width="20"
                    height="20"
                    className="text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
                  </svg>
                </button>
                <span className="w-1 h-8 rounded-lg bg-gray-200"></span>
                {/* <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="/images/person/1.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a> */}
                <button className="flex items-center text-gray-500 dark:text-white text-md">
                  Alex Doe
                  <svg
                    width="20"
                    height="20"
                    className="ml-2 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <div className="py-4 px-4 md:px-6">
            <div className="flex w-full flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://icons.duckduckgo.com/ip3/${domain}.ico`}
                  referrerPolicy="no-referrer"
                  className="inline w-8 h-8 mr-2 align-middle"
                  alt=""
                  width="32"
                  height="32"
                />
                {domain}
              </h1>
              <TimeSelector />
            </div>
            <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
              <div className="flex items-center w-full flex-wrap md:flex-nowrap md:space-x-4">
                <div className="w-full xs:w-1/2 md:w-1/4">
                  <Stat name="Unique Visits" amount="843" difference={2} />
                </div>
                <div className="w-full xs:w-1/2 md:w-1/4">
                  <Stat name="Total Visits" amount="1346" difference={-5} />
                </div>
                <div className="w-full xs:w-1/2 md:w-1/4">
                  <Stat name="Bounce rate" amount="82%" difference={-8} invert />
                </div>
                <div className="w-full xs:w-1/2 md:w-1/4">
                  <Stat name="Visit duration" amount="2:54" difference={-3} />
                </div>
              </div>
            </div>
            <div className="shadow-sm px-4 py-6 w-full bg-white dark:bg-gray-700">
              <Chart />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <Sources
                blur={false}
                data={[
                  ['google.com', 'Google', 5000],
                  ['twitter.com', 'Twitter', 3000],
                  ['producthunt.com', 'producthunt.com', 1200],
                  ['atlassian.com', 'atlassian.com', 200],
                  ['recoverweekly.com', 'recoverweekly.com', 120],
                  ['news.ycombinator.com', 'news.ycombinator.com', 8],
                ]}
              />
              <Pages
                blur={false}
                data={[
                  ['/', 2480],
                  ['/login', 732],
                  ['/about', 309],
                ]}
              />
              <Countries
                blur={false}
                data={[
                  ['au', 'Australia', 2480],
                  ['pt', 'Portugal', 732],
                  ['es', 'Spain', 309],
                  ['in', 'India', 39],
                ]}
              />
              <Devices
                blur={false}
                data={[
                  ['Mobile', 2480],
                  ['Desktop', 732],
                  ['Laptop', 309],
                  ['Tablet', 30],
                ]}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Stat({
  name,
  amount,
  difference,
  invert = false,
}: {
  name: string;
  amount: string;
  difference: number;
  invert?: boolean;
}) {
  const isPositiveDifference = Math.sign(difference) === 1;
  return (
    <div className="md:shadow-md px-4 py-6 w-full border border-gray-100 bg-white dark:bg-gray-700 relative">
      <p className="text-gray-400 tracking-wide pb-1 text-sm uppercase">{name}</p>
      <div className="flex items-center space-x-2">
        <p className="text-3xl text-black dark:text-white font-bold">{amount}</p>
        {difference !== 0 && (
          <span
            className={cx(
              // 'flex items-center',
              'text-xs font-semibold',
              isPositiveDifference || invert ? 'text-green-500' : 'text-red-500'
            )}
          >
            {isPositiveDifference && (
              <svg
                width="20"
                fill="currentColor"
                height="20"
                className="h-3 text-green-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
              </svg>
            )}
            {difference}%
            {!isPositiveDifference && (
              <svg
                width="20"
                fill="currentColor"
                height="20"
                className="h-3 rotate-180 transform"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
              </svg>
            )}
          </span>
        )}
      </div>
    </div>
  );
}

function Sources({
  data,
  blur = false,
}: {
  data: Array<[string, string, number]>;
  blur?: boolean;
}) {
  return (
    <div className="shadow-sm px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
      <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200 mb-6">
        Sources
      </p>
      {blur && (
        <div className="absolute w-full h-full flex flex-col items-center justify-center top-4 left-0">
          <p className="text-lg mb-3">Get insights into the source of your traffic</p>
          <PrimaryButton className="h-8 px-3 font-normal text-sm">Create Account</PrimaryButton>
        </div>
      )}
      <div className={cx('dark:text-white', blur && 'blur-sm opacity-50')}>
        {data.map(([domain, name, visits], index) => (
          <div
            key={domain}
            className={cx(
              'flex items-center text-sm sm:space-x-12 justify-between',
              index > 0 && 'pt-2 mt-2 border-t border-gray-200'
            )}
          >
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://icons.duckduckgo.com/ip3/${domain}.ico`}
                referrerPolicy="no-referrer"
                className="inline w-4 h-4 mr-2 align-middle"
                alt=""
                width="16"
                height="16"
              />
              <p>{name}</p>
            </div>
            <div className="flex items-end text-xs">
              {visits}
              {/* <span className="flex items-center">
              <svg
                width="20"
                fill="currentColor"
                height="20"
                className="h-3 text-green-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
              </svg>
              22%
            </span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pages({ data, blur = false }: { data: Array<[string, number]>; blur?: boolean }) {
  return (
    <div className="shadow-sm px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
      <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200 mb-6">
        Pages
      </p>
      {blur && (
        <div className="absolute w-full h-full flex flex-col items-center justify-center top-4 left-0">
          <p className="text-lg mb-3">See your most visited pages</p>
          <PrimaryButton className="h-8 px-3 font-normal text-sm">Claim your website</PrimaryButton>
        </div>
      )}
      <div className={cx('dark:text-white', blur && 'blur-sm opacity-50')}>
        {data.map(([page, visits], index) => (
          <div
            key={page}
            className={cx(
              'flex items-center text-sm sm:space-x-12 justify-between',
              index > 0 && 'pt-2 mt-2 border-t border-gray-200'
            )}
          >
            <p>{page}</p>
            <div className="flex items-end text-xs">{visits}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Countries({
  data,
  blur = false,
}: {
  data: Array<[string, string, number]>;
  blur?: boolean;
}) {
  return (
    <div className="shadow-sm px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
      <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200 mb-6">
        Countries
      </p>
      {blur && (
        <div className="absolute w-full h-full flex flex-col items-center justify-center top-4 left-0">
          <p className="text-lg mb-3">See where your visitors are from</p>
          <PrimaryButton className="h-8 px-3 font-normal text-sm">Sign up</PrimaryButton>
        </div>
      )}
      <div className={cx('dark:text-white', blur && 'blur-sm opacity-50')}>
        {data.map(([code, name, visits], index) => (
          <div
            key={code}
            className={cx(
              'flex items-center text-sm sm:space-x-12 justify-between',
              index > 0 && 'pt-2 mt-2 border-t border-gray-200'
            )}
          >
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://lipis.github.io/flag-icon-css/flags/4x3/${code}.svg`}
                referrerPolicy="no-referrer"
                className="inline w-4 h-4 mr-2 align-middle rounded"
                alt=""
                width="16"
                height="16"
              />
              <p>{name}</p>
            </div>
            <div className="flex items-end text-xs">{visits}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const devices: Record<string, ReactNode> = {
  Desktop: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </>
  ),
  Laptop: (
    <>
      <rect width="20" height="14" x="2" y="3" rx="2" ry="2"></rect>
      <path d="M2 20L22 20"></path>
    </>
  ),
  Tablet: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect>
      <line x1="12" y1="18" x2="12" y2="18"></line>
    </>
  ),
  Mobile: (
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
      <path d="M12 18L12 18"></path>
    </>
  ),
};

function Devices({ data, blur = false }: { data: Array<[string, number]>; blur?: boolean }) {
  return (
    <div className="shadow-sm px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
      <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200 mb-6">
        Devices
      </p>
      {blur && (
        <div className="absolute w-full h-full flex flex-col items-center justify-center top-4 left-0">
          <p className="text-lg mb-3">Are your customer's mobile users or desktop?</p>
          <PrimaryButton className="h-8 px-3 font-normal text-sm">Find out</PrimaryButton>
        </div>
      )}
      <div className={cx('dark:text-white', blur && 'blur-sm opacity-50')}>
        {data.map(([device, visits], index) => (
          <div
            key={device}
            className={cx(
              'flex items-center text-sm sm:space-x-12 justify-between',
              index > 0 && 'pt-2 mt-2 border-t border-gray-200'
            )}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 mr-2"
                viewBox="0 0 24 24"
              >
                {devices[device]}
              </svg>
              <p>{device}</p>
            </div>
            <div className="flex items-end text-xs">{visits}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimeSelector() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button className="flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brand-500">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2 text-gray-500"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"></path>
            </svg>
            Last 7 Days
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="z-10 origin-top-right absolute right-0 mt-2 w-full sm:w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Today
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Last 7 Days
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Last 30 Days
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      This Week
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Last Week
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      This Month
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Last Month
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Last 6 Months
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Last Year
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

// https://github.com/cedricdelpoux/react-svg-line-chart
function Chart() {
  const [{ tooltipTrigger, point }, setTooltipData] = useState<{
    tooltipTrigger?: DOMRect | null;
    point?: { x: number; y: number } | null;
  }>({});
  const handlePointHover = useCallback((point, event) => {
    setTooltipData({
      tooltipTrigger: event ? (event.target as SVGCircleElement).getBoundingClientRect() : null,
      point: event ? point : null,
    });
  }, []);
  return (
    <div className="relative">
      {tooltipTrigger && point && (
        <span
          className="fixed rounded shadow-lg px-2 py-1 bg-gray-100 text-brand-500 font-semibold -mt-8"
          style={{
            top: tooltipTrigger.top + 'px',
            left: tooltipTrigger.left - (tooltipTrigger.right - tooltipTrigger.left) / 2 + 'px',
          }}
        >
          {point.y} visits
        </span>
      )}
      {typeof window !== 'undefined' && (
        <LineChart
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 12 },
            { x: 5, y: 18 },
            { x: 6, y: 0 },
            { x: 7, y: 2 },
          ]}
          pointsStrokeColor="#4578C8"
          pathColor="#4578C8"
          areaColor="#4578C8"
          areaVisible
          gridVisible={false}
          axisVisible
          labelsVisible
          pathVisible
          pointsVisible
          pointsRadius={8}
          labelsStepX={1}
          labelsFormatX={(x: number) =>
            new Date(Date.now() + x * 86400000).toString().split(' ')[0]
          }
          viewBoxHeight={window.innerHeight}
          viewBoxWidth={window.innerWidth * 1.5}
          // pointsIsHoverOnZone={true}
          pointsOnHover={handlePointHover}
        />
      )}
    </div>
  );
}
