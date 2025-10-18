import Link from 'next/link';
import Image from 'next/image';
import { counties, townships } from '@/data/locations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="container-custom mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Stop Foreclosures PA"
              width={200}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Licensed PA cash home buyers helping families avoid foreclosure since 2010.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Call 24/7:</span>{' '}
                <a href="tel:+18568791492" className="hover:text-primary">
                  (856) 879-1492
                </a>
              </p>
              <p className="text-gray-300">Licensed & Insured in PA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-primary">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-primary">
                  Foreclosure Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Counties Served */}
          <div>
            <h3 className="text-xl font-bold mb-4">Counties We Serve</h3>
            <ul className="space-y-2">
              {counties.slice(0, 8).map((county) => (
                <li key={county.slug}>
                  <Link
                    href={`/county/${county.slug}`}
                    className="text-gray-300 hover:text-primary text-sm"
                  >
                    {county.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Areas</h3>
            <ul className="space-y-2">
              {townships.slice(0, 8).map((township) => (
                <li key={township.slug}>
                  <Link
                    href={`/city/${township.slug}`}
                    className="text-gray-300 hover:text-primary text-sm"
                  >
                    {township.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Stop Foreclosures PA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-primary text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
