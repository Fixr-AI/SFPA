import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import ThreeSolutions from '@/components/ThreeSolutions';
import { counties } from '@/data/locations';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl mb-6">
                Stop Foreclosure in Pennsylvania
                <span className="block text-primary mt-2">Get Relief with 3 Flexible Solutions</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Licensed PA real estate professionals helping families avoid foreclosure. We offer Cash Offers, Creative Finance, or As-Is Listings - choose the solution that fits your timeline and goals.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Close in as little as 7 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">We buy houses in ANY condition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Licensed & insured in Pennsylvania</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">No fees, no commissions, no obligation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18568791492" className="btn-primary text-center">
                  Call Now: (856) 879-1492
                </a>
                <a href="#get-offer" className="btn-secondary text-center">
                  Get Relief!
                </a>
              </div>
            </div>

            <div>
              <LeadForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-primary text-white py-6">
        <div className="container-custom text-center">
          <p className="text-xl font-bold">
            Received a Foreclosure Notice? Time is Critical. We Can Help Stop the Process Today.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">How We Help You Avoid Foreclosure</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="heading-sm mb-4">Contact Us</h3>
              <p className="text-gray-700">
                Call us or fill out the form. Tell us about your property and situation. No pressure, no obligation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="heading-sm mb-4">Get Your Solutions</h3>
              <p className="text-gray-700">
                We'll evaluate your property and timeline, then present you with up to 3 different solutions within 24 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="heading-sm mb-4">Close on Your Timeline</h3>
              <p className="text-gray-700">
                Choose your closing date - as fast as 7 days or up to 60 days. Walk away with cash, foreclosure stopped.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-primary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Three Solutions */}
      <ThreeSolutions />

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Why Choose Stop Foreclosures PA?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Foreclosure Specialists</h3>
              <p className="text-gray-700">
                We exclusively work with homeowners facing foreclosure. We understand PA foreclosure law and timelines, ensuring you get the help you need fast.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Licensed & Trusted</h3>
              <p className="text-gray-700">
                Licensed real estate professionals with A+ BBB rating. We've helped over 275 PA families avoid foreclosure since 2010.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Fast Closings</h3>
              <p className="text-gray-700">
                Need to close before the sheriff sale? We can close in as little as 7 days and work around your foreclosure timeline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Buy AS-IS</h3>
              <p className="text-gray-700">
                No need to make repairs, clean, or stage your home. We buy houses in ANY condition - from perfect to distressed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">No Fees or Commissions</h3>
              <p className="text-gray-700">
                No realtor fees, no closing costs, no hidden charges. The offer we make is what you walk away with.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">All 21 PA Counties</h3>
              <p className="text-gray-700">
                We buy houses throughout Pennsylvania, from Cumberland to Sussex County. Local expertise in every market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counties Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-4">We Buy Houses Throughout Pennsylvania</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Serving homeowners facing foreclosure in all 21 counties. Click your county to learn about local foreclosure laws and get a cash offer.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/county/${county.slug}`}
                className="bg-gray-50 hover:bg-primary hover:text-white transition-all p-4 rounded-lg text-center font-semibold border-2 border-gray-200 hover:border-primary"
              >
                {county.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/locations" className="text-primary hover:text-primary-dark font-semibold text-lg underline">
              View All Service Areas & Townships →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-offer" className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #DC2626, #B91C1C)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-white">Ready to Stop Your Foreclosure?</h2>
              <p className="text-xl mb-8">
                Don't wait until it's too late. Get your custom solution today and stop the foreclosure process. Multiple options available - no fees, no obligations, no pressure.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Up to 3 solutions within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Close before sheriff sale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">275+ families helped since 2010</span>
                </div>
              </div>

              <a href="tel:+18568791492" className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors shadow-lg mt-8">
                Call Now: (856) 879-1492
              </a>
            </div>

            <div>
              <LeadForm className="bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Not Ready to Sell? That's Okay.</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide free educational resources about Pennsylvania foreclosure laws, government assistance programs, and all your options. Knowledge is power.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Free Foreclosure Resources
          </Link>
        </div>
      </section>
    </>
  );
}
