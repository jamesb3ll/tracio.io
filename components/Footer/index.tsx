export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full mx-auto">
      <div className="bg-gray-100 px-4 pt-16 mx-auto w-full border-opacity-10 md:px-24 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="/" aria-label="tracio logo" className="inline-flex items-center">
              <svg
                version="1.2"
                baseProfile="tiny-ps"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 98"
                width="100"
                height="50"
              >
                <g strokeWidth="0">
                  <path
                    d="M39.46 26.93v-7.85H23.3V-.46L-.22 18.12v60.24c0 9.61 7.84 17.62 17.44 17.62 4 0 7.84-1.44 10.88-3.85l11.36-8.97-16.16.16V26.93h16.16z"
                    fill="#252c6e"
                    stroke="#252c6e"
                  ></path>
                  <path
                    d="M91.92 19.08c-6.72 0-12 5.29-12 12.02a12 12 0 0012 12.01c6.56 0 12-5.45 12-12.01a12 12 0 00-12-12.02zm-20.8 76.74v-76.9H47.6v76.9h23.52z"
                    fill="#2f4389"
                    stroke="#2f4389"
                  ></path>
                  <path
                    d="M129.46 43.11c6.56 0 12-5.28 12-12.01a12.1 12.1 0 00-12-12.02 12 12 0 00-12 12.02c0 6.73 5.28 12.01 12 12.01h0zm18.56 11.86a33.4 33.4 0 00-12.16-2.41c-14.4 0-26.08 9.78-26.08 21.79 0 12.02 11.68 21.79 26.08 21.79 4.32 0 8.48-.96 12.16-2.41-8.48-3.68-14.24-11.05-14.24-19.38 0-8.33 5.76-15.7 14.24-19.38zm27.2 28.19V36.54c0-9.61-7.84-17.46-17.6-17.46-2.08 0-4.16.32-6.08 1.12v58.16c0 9.61 7.84 17.46 17.6 17.46 4 0 7.84-1.28 10.88-3.69l11.36-8.97h-16.16z"
                    fill="#395aa4"
                    stroke="#395aa4"
                  ></path>
                  <path
                    d="M247.04 43.11c6.72 0 12-5.28 12-12.01a12 12 0 00-12-12.02c-6.56 0-12 5.45-12 12.02 0 6.73 5.44 12.01 12 12.01h0zm14.24 40.53a38.32 38.32 0 01-43.52-32.52 37.73 37.73 0 0110.08-31.72A38.36 38.36 0 00196 62.82a38.45 38.45 0 0043.52 32.52 38.55 38.55 0 0022.56-11.7h-.8 0z"
                    fill="#4271c0"
                    stroke="#4271c0"
                  ></path>
                  <path
                    d="M299.45 32.22h-23.52V78.2c0 9.77 7.84 17.62 17.44 17.62 4 0 7.84-1.28 10.88-3.85L315.77 83h-16.32V32.22zm-11.68-8.81c6.56 0 11.84-5.29 11.84-11.86 0-6.57-5.28-12.01-11.84-12.01a11.95 11.95 0 00-11.84 12.01c0 6.57 5.28 11.86 11.84 11.86z"
                    fill="#4c88db"
                    stroke="#4c88db"
                  ></path>
                  <path
                    d="M357.5 19.08c-18.4 0-39.04 15.06-39.04 38.45 0 23.23 20.64 38.29 39.04 38.29-6.24-3.05-12.32-19.07-12.32-38.29s4.96-35.24 12.32-38.45zm3.68 0c7.2 3.21 12.32 19.23 12.32 38.45 0 19.22-6.08 35.24-12.32 38.29 18.24 0 39.04-15.06 39.04-38.29 0-23.39-20.8-38.45-39.04-38.45z"
                    fill="#569ff6"
                    stroke="#569ff6"
                  ></path>
                </g>
              </svg>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-900">
                Open source, privacy-focused analytics platform that's simple and affordable.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Home</p>
            <div>
              <a
                href="#features"
                className="transition-colors duration-300 text-brand-500 hover:text-deep-purple-800"
              >
                Features
              </a>
            </div>
            <div>
              <a
                href="#pricing"
                className="transition-colors duration-300 text-brand-500 hover:text-deep-purple-800"
              >
                Pricing
              </a>
            </div>
            <div>
              <a
                href="#blog"
                className="transition-colors duration-300 text-brand-500 hover:text-deep-purple-800"
              >
                Blog
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-700 transition-colors duration-300 hover:text-brand-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-700 transition-colors duration-300 hover:text-brand-500"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-700 transition-colors duration-300 hover:text-brand-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="
                max-w-6xl
                mx-auto
                flex flex-col-reverse
                justify-between
                pt-5
                pb-10
                border-t
                lg:flex-row
              "
        >
          <p className="text-sm text-gray-700">© Copyright 2021 tracio. All rights reserved.</p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            {/* <li>
                  <a
                    href="/"
                    className="
                      text-sm text-gray-700
                      transition-colors
                      duration-300
                      hover:text-brand-500
                    "
                    >F.A.Q</a
                  >
                </li> */}
            <li>
              <a
                href="/"
                className="
                      text-sm text-gray-700
                      transition-colors
                      duration-300
                      hover:text-brand-500
                    "
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="
                      text-sm text-gray-700
                      transition-colors
                      duration-300
                      hover:text-brand-500
                    "
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
