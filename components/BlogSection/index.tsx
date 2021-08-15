export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative flex flex-col items-center justify-center w-full mx-auto"
    >
      <div className="bg-white px-4 pb-16 mx-auto w-full md:px-24 lg:px-8 lg:pb-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2
            className="
              max-w-lg
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
            Blog
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Read about tracio's journey and what we've learnt while building a privacy-focused,
            serverless analytics platform.
          </p>
        </div>
        <div
          className="
                max-w-6xl
                mx-auto
                mb-10
                border-t border-b
                divide-y divide-gray-100
                border-gray-100
              "
        >
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-brand-500 hover:text-brand-500"
                >
                  About
                </a>
                <p className="text-gray-700">5 Sept 2021</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  className="
                        inline-block
                        text-gray-900
                        transition-colors
                        duration-200
                        hover:text-brand-500
                      "
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    Yet another analytics platform?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
                Well, the way they make shows is, they make one show. That show's called a pilot.
                Then they show that show to the people who make shows.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-brand-500 hover:text-brand-500"
                >
                  Help
                </a>
                <p className="text-gray-700">15 Sep 2021</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  className="
                        inline-block
                        text-gray-900
                        transition-colors
                        duration-200
                        hover:text-brand-500
                      "
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    Web analytics in two easy steps
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
                Chase ball of string eat plants, meow, and throw up because I ate plants going to
                catch the red dot today going.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-brand-500 hover:text-brand-500"
                >
                  Technology
                </a>
                <p className="text-gray-700">28 Dec 2021</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  className="
                        inline-block
                        text-gray-900
                        transition-colors
                        duration-200
                        hover:text-brand-500
                      "
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    6 months of AWS Timestream
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
                Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha
                trion zap.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="
                  inline-flex
                  items-center
                  font-semibold
                  transition-colors
                  duration-200
                  text-brand-500
                  hover:text-brand-500
                "
          >
            See all articles
            <svg fill="currentColor" viewBox="0 0 12 12" className="inline-block w-3 ml-2">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
