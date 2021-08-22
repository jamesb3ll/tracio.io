import Feature from './Feature';

export default function Features() {
  return (
    <section
      id="features"
      className="relative flex flex-col items-center justify-center w-full mx-auto"
    >
      <div className="px-4 py-8 mx-auto bg-white w-full md:px-24 lg:px-8 lg:py-16">
        <div className="max-w-xl mx-auto mb-10 sm:text-center lg:max-w-2xl ">
          <h2
            className="
                  mb-6
                  font-sans
                  text-3xl
                  font-bold
                  leading-none
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                  md:mx-auto
                "
          >
            Privacy-focused, Google Analytics alternative for indie developers and startups
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Open source, privacy-focused, scalable and serverless web analytics platform that
            enables indie developers and startups to track and measure their websites without
            sacrificing privacy and without breaking the bank.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-brand-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            }
            title="Quick and easy to install"
          >
            You don't need much technical knowledge, simply add a single line of code to your site
            and view our easy-to-use dashboard interface that updates in real-time.
          </Feature>

          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-brand-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            }
            title="No cookie banners required"
          >
            Track your visitors anonymously with no cookies required. Get detailed insights into
            who's visiting your site without compromising on user privacy.
          </Feature>

          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-brand-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
            title="Open-source software"
          >
            Built using estabilished and well known technologies such as{' '}
            <a
              href="https://typescriptlang.org"
              className="text-brand-700 hover:text-brand-400"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>
            {', '}
            <a
              href="https://reactjs.org"
              className="text-brand-700 hover:text-brand-400"
              rel="noopener noreferrer"
            >
              React
            </a>
            {', '}
            <a
              href="https://nextjs.org"
              className="text-brand-700 hover:text-brand-400"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            {', '}
            <a
              href="https://workers.cloudflare.com"
              className="text-brand-700 hover:text-brand-400"
              rel="noopener noreferrer"
            >
              Workers
            </a>
            {', '}
            <a
              href="https://aws.amazon.com/timestream/"
              className="text-brand-700 hover:text-brand-400"
              rel="noopener noreferrer"
            >
              Timestream
            </a>
            {', '}
            <a
              href="https://aws.amazon.com/dynamodb/"
              className="text-brand-700 hover:text-brand-400"
              rel="noopener noreferrer"
            >
              DynamoDB
            </a>{' '}
            and{' '}
            <a
              href="https://aws.amazon.com/lambda/"
              className="text-brand-700 hover:text-brand-400"
              rel="noopener noreferrer"
            >
              Lambda
            </a>
            .
          </Feature>

          <Feature
            icon={
              <svg stroke="currentColor" viewBox="0 0 52 52" className="w-10 h-10 text-brand-500">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            }
            title="Fast and lightweight"
          >
            No heavy scripts that will slow down page load times. Our lightweight open-source script
            can be installed with just a single line of code added to your site.
          </Feature>
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-brand-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Transparent pricing"
          >
            With a free threshold of 5000 visits per month, it's perfect for indie developers and
            small companies looking to track their success without breaking the bank.
          </Feature>
          <Feature
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-brand-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Serverless"
          >
            Building on top of serverless technologies means there's no fixed monthly server costs
            and our platform can scale to millions of visits with guaranteed uptime.
          </Feature>
        </div>
      </div>
    </section>
  );
}
