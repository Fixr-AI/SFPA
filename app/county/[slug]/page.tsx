import { notFound } from 'next/navigation';
import Link from 'next/link';
import { counties, getCitiesByCounty } from '@/data/locations';
import LeadForm from '@/components/LeadForm';
import { generateMetadata as genMeta, generateCountySchema } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return counties.map((county) => ({
    slug: county.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const county = counties.find((c) => c.slug === slug);

  if (!county) return {};

  return genMeta({
    title: `Stop Foreclosure in ${county.name}, PA | Get Fair Cash Offer Today`,
    description: `Facing foreclosure in ${county.name}? We buy houses fast for cash. Licensed PA buyers, no fees, close in 7 days. Serving all of ${county.name} since 2010.`,
    keywords: county.keywords?.join(', '),
    canonical: `https://stopforeclosurespa.com/county/${county.slug}`,
  });
}

export default async function CountyPage({ params }: PageProps) {
  const { slug } = await params;
  const county = counties.find((c) => c.slug === slug);

  if (!county) {
    notFound();
  }

  const townships = getCitiesByCounty(slug);
  const schema = generateCountySchema(county);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-xl mb-6">
                Stop Foreclosure in {county.name}
                <span className="block text-primary mt-2">Licensed Cash Home Buyers</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Facing foreclosure in {county.name}? We help homeowners avoid foreclosure by buying houses fast for cash. No fees, no commissions, no repairs needed. Get a fair offer within 24 hours.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="font-bold text-lg mb-3">Fast Facts About {county.name}:</h3>
                <ul className="space-y-2 text-gray-700">
                  {county.population && (
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Population: {county.population.toLocaleString()}</span>
                    </li>
                  )}
                  {county.medianHomePrice && (
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Median Home Price: {county.medianHomePrice}</span>
                    </li>
                  )}
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Foreclosure filings increasing year-over-year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Average time to close: 7-14 days</span>
                  </li>
                </ul>
              </div>

              <a href="tel:+18568791492" className="btn-primary">
                Call Now: (856) 879-1492
              </a>
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
            Serving {county.name} homeowners facing foreclosure. Time-sensitive help available 24/7.
          </p>
        </div>
      </section>

      {/* Why We're Different in This County */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Why {county.name} Homeowners Choose Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4 text-primary">Local Expertise</h3>
              <p className="text-gray-700">
                We know {county.name} inside and out. From local market conditions to county-specific foreclosure procedures, our expertise ensures you get the best outcome.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4 text-primary">Beat the Sheriff Sale</h3>
              <p className="text-gray-700">
                Familiar with {county.name} court timelines, we can close before your sheriff sale date. Don't let foreclosure complete - act now.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4 text-primary">Fair Market Offers</h3>
              <p className="text-gray-700">
                Our offers are based on current {county.name} market data. We provide fair, competitive cash offers that reflect your home's true value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks & Info */}
      {county.landmarks && county.landmarks.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">About {county.name}</h2>
            <p className="text-xl text-gray-700 mb-6">
              {county.name} is home to many wonderful communities and landmarks, including:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {county.landmarks.map((landmark, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <p className="font-semibold text-secondary">{landmark}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700">
              Despite the beauty and community spirit of {county.name}, economic hardship can happen to anyone. If you're facing foreclosure, we're here to help you protect your future and avoid the devastating impact of foreclosure on your credit.
            </p>
          </div>
        </section>
      )}

      {/* Townships in County */}
      {townships.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-8 text-center">
              Cities & Townships We Serve in {county.name}
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              We buy houses throughout {county.name}. Click your city or township for local foreclosure information:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {townships.map((township) => (
                <Link
                  key={township.slug}
                  href={`/city/${township.slug}`}
                  className="bg-gray-50 hover:bg-primary hover:text-white transition-all p-4 rounded-lg text-center font-semibold border-2 border-gray-200 hover:border-primary"
                >
                  {township.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Our Process in {county.name}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="heading-sm mb-3">Call or Submit Form</h3>
              <p className="text-gray-700">
                Contact us by phone or form. Tell us about your {county.name} property and foreclosure situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="heading-sm mb-3">Get Cash Offer</h3>
              <p className="text-gray-700">
                We analyze {county.name} market data and present a fair cash offer within 24 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="heading-sm mb-3">Close Fast</h3>
              <p className="text-gray-700">
                Choose your closing date. We handle all paperwork and close at a local {county.name} title company.
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
                Don't Let Foreclosure Take Your {county.name} Home
              </h2>
              <p className="text-xl mb-8">
                Every day counts when facing foreclosure. Get a fair cash offer today and stop the process before it's too late.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cash offer in 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Close before sheriff sale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No fees or commissions</span>
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

      {/* Related Links */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h3 className="heading-md mb-8">More Foreclosure Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/resources" className="text-primary hover:text-primary-dark font-semibold underline">
              PA Foreclosure Laws & Resources
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/how-it-works" className="text-primary hover:text-primary-dark font-semibold underline">
              How Our Process Works
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/faq" className="text-primary hover:text-primary-dark font-semibold underline">
              Frequently Asked Questions
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/locations" className="text-primary hover:text-primary-dark font-semibold underline">
              All Service Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
