import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, counties } from '@/data/locations';
import LeadForm from '@/components/LeadForm';
import { generateMetadata as genMeta } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const city = cities.find((t) => t.slug === slug);

  if (!city) return {};

  return genMeta({
    title: `Sell House Fast ${city.name} PA | Stop Foreclosure | Cash Buyers`,
    description: `Facing foreclosure in ${city.name}? We buy houses fast for cash. ${city.county} licensed buyers. No fees, close in 7 days. Get offer today.`,
    keywords: city.keywords?.join(', '),
    canonical: `https://stopforeclosurespa.com/city/${city.slug}`,
  });
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = cities.find((t) => t.slug === slug);

  if (!city) {
    notFound();
  }

  const county = counties.find((c) => c.name === city.county);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Stop Foreclosures PA - ${city.name}`,
    description: `Cash home buyers serving ${city.name}, ${city.county}`,
    url: `https://stopforeclosurespa.com/city/${city.slug}`,
    telephone: '+1-215-555-1234',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
  };

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
                Sell Your House Fast in {city.name}, PA
                <span className="block text-primary mt-2">Stop Foreclosure Today</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Facing foreclosure in {city.name}? We buy houses fast for cash throughout {city.county}. Get a fair cash offer within 24 hours. No fees, no commissions, no repairs needed.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="font-bold text-lg mb-3">{city.name} Market Overview:</h3>
                <ul className="space-y-2 text-gray-700">
                  {city.population && (
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Population: {city.population.toLocaleString()}</span>
                    </li>
                  )}
                  {city.medianHomePrice && (
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Median Home Value: {city.medianHomePrice}</span>
                    </li>
                  )}
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>County: {city.county}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>We close in 7-14 days average</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+12155551234" className="btn-primary text-center">
                  Call: (215) 555-1234
                </a>
                <a href="#get-offer" className="btn-secondary text-center">
                  Get Cash Offer
                </a>
              </div>
            </div>

            <div>
              <LeadForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks */}
      {city.landmarks && city.landmarks.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">About {city.name}</h2>
            <p className="text-xl text-gray-700 mb-6">
              {city.name} is a vibrant community in {city.county} known for local attractions including:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {city.landmarks.map((landmark, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                  <p className="font-semibold text-secondary text-center">{landmark}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              We understand the {city.name} community and real estate market. Whether you're near {city.landmarks[0]} or anywhere else in {city.name}, we can help you avoid foreclosure with a fast, fair cash offer.
            </p>
          </div>
        </section>
      )}

      {/* Why Sell to Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">
            Why {city.name} Homeowners Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Know {city.name} Market</h3>
              <p className="text-gray-700">
                We're experts in the {city.name} real estate market. Our local knowledge ensures you get a fair, competitive cash offer based on current market conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Stop Foreclosure Fast</h3>
              <p className="text-gray-700">
                Received a foreclosure notice in {city.name}? We can close before your sheriff sale date, helping you avoid the devastating credit impact of foreclosure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Any Condition</h3>
              <p className="text-gray-700">
                We buy houses AS-IS in {city.name}. Don't spend money on repairs or cleaning. Sell your house exactly as it is and walk away with cash.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">No Hidden Fees</h3>
              <p className="text-gray-700">
                No realtor commissions, no closing costs, no repair expenses. The cash offer we make is what you get. Simple, transparent, fair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Situations We Help With */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">
            {city.name} Situations We Help With
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="heading-sm mb-3">Foreclosure</h3>
              <p className="text-gray-700">
                Behind on mortgage payments? We can help you avoid foreclosure and protect your credit.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="heading-sm mb-3">Job Loss</h3>
              <p className="text-gray-700">
                Lost your job and can't afford your {city.name} home? Get a fast cash offer.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="heading-sm mb-3">Medical Bills</h3>
              <p className="text-gray-700">
                Unexpected medical expenses making mortgage payments impossible? We can help.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="heading-sm mb-3">Divorce</h3>
              <p className="text-gray-700">
                Going through divorce? Sell your {city.name} house quickly and split proceeds fairly.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">👴</div>
              <h3 className="heading-sm mb-3">Inherited Property</h3>
              <p className="text-gray-700">
                Inherited a house in {city.name}? Sell it fast without the hassle of traditional listing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="heading-sm mb-3">Relocation</h3>
              <p className="text-gray-700">
                Need to relocate quickly for work? We can close on your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* County Link */}
      {county && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h3 className="heading-md mb-4">Learn More About {city.county}</h3>
            <p className="text-gray-700 mb-6">
              Explore foreclosure resources and information for all of {city.county}
            </p>
            <Link
              href={`/county/${county.slug}`}
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View {city.county} Page
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="get-offer" className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #DC2626, #B91C1C)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-white">
                Ready to Sell Your {city.name} House?
              </h2>
              <p className="text-xl mb-8">
                Get a fair cash offer today. No obligations, no pressure. Just honest help for {city.name} homeowners.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fair cash offer in 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Close in as little as 7 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Zero fees or commissions</span>
                </div>
              </div>

              <a
                href="tel:+12155551234"
                className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
              >
                Call Now: (215) 555-1234
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
