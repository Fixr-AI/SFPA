import Link from 'next/link';
import { counties, cities } from '@/data/locations';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata = genMeta({
  title: 'Service Areas | Stop Foreclosure in All PA Counties & Cities',
  description: 'We buy houses fast throughout Pennsylvania. Serving all 21 counties and major townships. Licensed cash buyers helping homeowners avoid foreclosure statewide.',
  keywords: 'NJ counties foreclosure help, Pennsylvania townships cash buyers, sell house fast PA areas',
  canonical: 'https://stopforeclosurespa.com/locations',
});

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            We Buy Houses Throughout Pennsylvania
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Licensed cash home buyers serving all 21 PA counties. Whether you're facing foreclosure in South Jersey or North Jersey, we can help with a fair cash offer in 24 hours.
          </p>
        </div>
      </section>

      {/* Counties Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-4">All Pennsylvania Counties</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Click on your county to learn about local foreclosure laws, statistics, and get a cash offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/county/${county.slug}`}
                className="bg-gray-50 hover:bg-primary hover:text-white transition-all p-6 rounded-lg border-2 border-gray-200 hover:border-primary group"
              >
                <h3 className="text-2xl font-bold mb-3">{county.name}</h3>
                {county.population && (
                  <p className="text-gray-600 group-hover:text-white mb-2">
                    Population: {county.population.toLocaleString()}
                  </p>
                )}
                {county.medianHomePrice && (
                  <p className="text-gray-600 group-hover:text-white mb-4">
                    Median Price: {county.medianHomePrice}
                  </p>
                )}
                <p className="font-semibold text-primary group-hover:text-white">
                  View {county.name} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Southern PA Highlight */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">
            Southern Pennsylvania Cities & Townships
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/city/${city.slug}`}
                className="bg-white hover:bg-primary hover:text-white transition-all p-4 rounded-lg text-center font-semibold border-2 border-gray-200 hover:border-primary"
              >
                <div className="text-lg mb-1">{city.name}</div>
                <div className="text-sm text-gray-500 hover:text-white">
                  {city.county}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Regional Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4 text-primary">South Jersey</h3>
              <p className="text-gray-700 mb-4">
                Serving Cumberland, Salem, Atlantic, Cape May, Gloucester, Camden, and Burlington counties. Local expertise in shore communities and rural markets.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vineland</li>
                <li>• Atlantic City</li>
                <li>• Cherry Hill</li>
                <li>• Camden</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4 text-primary">Central Jersey</h3>
              <p className="text-gray-700 mb-4">
                Covering Monmouth, Ocean, Mercer, and Middlesex counties. Experience with suburban and shore area properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Toms River</li>
                <li>• Long Branch</li>
                <li>• Lakewood</li>
                <li>• Freehold</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4 text-primary">North Jersey</h3>
              <p className="text-gray-700 mb-4">
                Serving Sussex, Warren, Passaic, Bergen, Essex, Hudson, and Union counties. Metro area and suburban market specialists.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Newark</li>
                <li>• Jersey City</li>
                <li>• Paterson</li>
                <li>• Elizabeth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #DC2626, #B91C1C)' }}>
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">
            Find Your County or City Above
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Click on your location to get local foreclosure information and a cash offer for your home. Or call us now for immediate assistance.
          </p>
          <a
            href="tel:+12155551234"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
          >
            Call Now: (215) 555-1234
          </a>
        </div>
      </section>
    </>
  );
}
