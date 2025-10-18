import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import ThreeSolutions from '@/components/ThreeSolutions';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata = genMeta({
  title: 'How It Works | Sell Your House Fast & Stop Foreclosure in PA',
  description: 'Our simple 3-step process to sell your house fast and avoid foreclosure in Pennsylvania. Get a cash offer in 24 hours, close in 7 days. No fees, no repairs needed.',
  keywords: 'how to stop foreclosure PA, sell house fast process, cash home buyers process, avoid foreclosure steps',
  canonical: 'https://stopforeclosurespa.com/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            How to Get Relief from Foreclosure in PA
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Our simple 3-step process helps you avoid foreclosure with a solution tailored to your timeline and goals. Choose from Cash Offers, Creative Finance, or As-Is Listings.
          </p>
          <a href="tel:+18568791492" className="btn-primary">
            Call Now: (856) 879-1492
          </a>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Our Simple 3-Step Process</h2>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="heading-md mb-4">Contact Us</h3>
                <p className="text-xl text-gray-700 mb-4">
                  Call us at (856) 879-1492 or fill out our simple form. Tell us about your property and situation.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>No pressure or obligation to sell</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Free consultation about your options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Quick 5-minute phone call or form</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>All information kept 100% confidential</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gray-100 p-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-4">What We'll Ask:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Property address and basic details</li>
                    <li>✓ Condition of the property</li>
                    <li>✓ Your timeline and situation</li>
                    <li>✓ Any liens or mortgage balance</li>
                    <li>✓ When you need to close</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="bg-gray-100 p-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-4">Your Relief Options Include:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Cash Offer - fastest timeline</li>
                    <li>✓ Creative Finance - higher net proceeds</li>
                    <li>✓ As-Is Listing - maximum value</li>
                    <li>✓ No obligation to choose any option</li>
                    <li>✓ We recommend the best fit for you</li>
                  </ul>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="heading-md mb-4">Get Your Relief Options</h3>
                <p className="text-xl text-gray-700 mb-4">
                  We'll evaluate your property, timeline, and goals, then present up to 3 different solutions within 24 hours.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Multiple solutions in 24 hours or less</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Based on your timeline and goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>No pressure to choose any option</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>We help you pick the best solution</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="heading-md mb-4">Close on Your Timeline</h3>
                <p className="text-xl text-gray-700 mb-4">
                  Choose your closing date and walk away with cash. It's that simple.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Close in as little as 7 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Or take up to 60 days if you need time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>We handle all the paperwork</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Walk away with cash in hand</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gray-100 p-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-4">At Closing You Get:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Full cash payment</li>
                    <li>✓ Foreclosure stopped</li>
                    <li>✓ Fresh start for your future</li>
                    <li>✓ No more mortgage payments</li>
                    <li>✓ Peace of mind</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">
            Compare: Traditional Sale vs. Cash Sale
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Sale */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="heading-sm mb-6 text-center text-gray-700">
                Traditional Sale with Realtor
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✗</span>
                  <div>
                    <p className="font-semibold">3-6 months average</p>
                    <p className="text-sm text-gray-600">Time to close</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✗</span>
                  <div>
                    <p className="font-semibold">6% commission</p>
                    <p className="text-sm text-gray-600">Plus closing costs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✗</span>
                  <div>
                    <p className="font-semibold">Repairs required</p>
                    <p className="text-sm text-gray-600">Thousands in costs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✗</span>
                  <div>
                    <p className="font-semibold">Showings & open houses</p>
                    <p className="text-sm text-gray-600">Constant disruption</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">✗</span>
                  <div>
                    <p className="font-semibold">Deal can fall through</p>
                    <p className="text-sm text-gray-600">Buyer financing issues</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cash Sale */}
            <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
              <h3 className="heading-sm mb-6 text-center">
                Cash Sale with Stop Foreclosures PA
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <div>
                    <p className="font-semibold">7-14 days average</p>
                    <p className="text-sm opacity-90">Fast closing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <div>
                    <p className="font-semibold">Zero fees</p>
                    <p className="text-sm opacity-90">No commissions or costs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <div>
                    <p className="font-semibold">No repairs needed</p>
                    <p className="text-sm opacity-90">Sell AS-IS</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <div>
                    <p className="font-semibold">No showings</p>
                    <p className="text-sm opacity-90">Quick property visit only</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <div>
                    <p className="font-semibold">Guaranteed closing</p>
                    <p className="text-sm opacity-90">Cash in hand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Solutions */}
      <ThreeSolutions />

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Common Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">How do you determine your cash offer?</h3>
              <p className="text-gray-700">
                We analyze recent sales in your area, current market conditions, your home's condition, and repair needs. We provide a fair offer based on what we can realistically sell the property for after any necessary improvements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">What if I owe more than my house is worth?</h3>
              <p className="text-gray-700">
                We work with underwater properties all the time. We can negotiate with your lender for a short sale, potentially allowing you to sell even if you owe more than the home's value. This helps you avoid foreclosure and the devastating impact on your credit.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">How quickly can you close?</h3>
              <p className="text-gray-700">
                We can close in as little as 7 days if you're in a rush to stop foreclosure. Or we can wait up to 60 days if you need more time. You choose the timeline that works best for your situation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">Do I have to pay any fees?</h3>
              <p className="text-gray-700">
                No. We cover all closing costs. There are no realtor commissions, no repair costs, no cleaning fees. The cash offer we make is exactly what you'll receive at closing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">What condition does my house need to be in?</h3>
              <p className="text-gray-700">
                ANY condition. We buy houses that need major repairs, have fire or water damage, code violations, or are in perfect condition. You don't need to fix, clean, or improve anything before selling to us.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">Is this a scam? How do I know you're legitimate?</h3>
              <p className="text-gray-700">
                We're licensed real estate professionals in Pennsylvania with an A+ BBB rating. We've helped over 275 families avoid foreclosure since 2010. All closings happen through a licensed title company or attorney, ensuring a safe, legal transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #DC2626, #B91C1C)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8">
                Contact us today for a free, no-obligation consultation. We'll present up to 3 different relief options tailored to your timeline and goals.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free consultation in 5 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Up to 3 relief options within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No obligation to accept</span>
                </div>
              </div>

              <a
                href="tel:+18568791492"
                className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
              >
                Call Now: (856) 879-1492
              </a>
            </div>

            <div>
              <LeadForm className="bg-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
