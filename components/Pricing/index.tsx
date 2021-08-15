import { PrimaryButtonLink } from '../Button';
import Slider from './Slider';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative flex flex-col items-center justify-center w-full mx-auto"
    >
      <div className="px-4 pb-8 mx-auto md:px-24 lg:px-8 lg:pb-16 w-full bg-white">
        <div className="max-w-xl mx-auto lg:max-w-2xl md:mb-12">
          <div className="sm:text-center">
            <p
              className="
                    inline-block
                    px-3
                    py-px
                    mb-4
                    text-xs
                    font-semibold
                    tracking-wider
                    uppercase
                    rounded-full
                    text-brand-500
                    bg-brand-100
                  "
            >
              No traffic, no costs
            </p>
            <h2
              className="
                    mb-6
                    font-sans
                    text-3xl
                    font-bold
                    leading-none
                    tracking-tight
                    text-gray-900
                    sm:text-4xl
                    md:mx-auto
                  "
            >
              Transparent, traffic-based pricing
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Free threshold of 5000 visits every month. Only pay for what you need.
            </p>
          </div>
          <div className="flex flex-col w-full mt-10 p-5 bg-white border rounded shadow-sm text-left">
            <div className="mb-6">
              <Slider />
              <div>
                <p className="mb-2 font-bold tracking-wide">Features</p>
                <ul className="grid max-w-md gap-1 row-gap-1 lg:max-w-screen-md lg:grid-cols-2">
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-deep-purple-accent-400"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        ></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>
                    <p className="font-medium text-gray-700">Unlimited websites</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-deep-purple-accent-400"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        ></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>
                    <p className="font-medium text-gray-700">Unlimited data retention</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-deep-purple-accent-400"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        ></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>
                    <p className="font-medium text-gray-700">Unlimited team members</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-deep-purple-accent-400"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        ></polyline>
                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                      </svg>
                    </div>

                    <p className="font-medium text-gray-700">
                      Integrations (Email, Slack, Telegram)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <PrimaryButtonLink href="#" className="w-full mb-4">
                Get Started
              </PrimaryButtonLink>
              <p className="text-sm text-gray-700 text-center">
                No sign-up. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
