import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
// import BlogSection from '../components/BlogSection';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Head>
        <title>tracio</title>
      </Head>

      <Header />

      <Hero
        title="Open source, privacy-focused web analytics that's simple and affordable"
        // title="Simple, affordable, privacy-focused web analytics"
        // title="Privacy-focused, Google Analytics alternative for indie developers and startups"
        subtitle={
          <>
            <p className="text-base text-gray-700 md:text-lg">
              Get the insights you need without sacrificing your customer's privacy
            </p>
            <p className="mb-6 text-base font-semibold text-gray-700 md:text-lg">
              Up to 5000 free visits every month. <br className="sm:hidden" /> Traffic-based
              pricing.
            </p>
          </>
        }
      />

      <Features />

      <Pricing />

      {/* <BlogSection /> */}

      <Footer />
    </div>
  );
}
