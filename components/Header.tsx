'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Stop Foreclosures PA Logo"
              width={450}
              height={130}
              priority
              className="h-24 w-auto md:h-28"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-secondary hover:text-primary font-semibold transition-colors">
              How It Works
            </Link>
            <Link href="/locations" className="text-secondary hover:text-primary font-semibold transition-colors">
              Service Areas
            </Link>
            <Link href="/resources" className="text-secondary hover:text-primary font-semibold transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary font-semibold transition-colors">
              About Us
            </Link>
            <a href="tel:+12155551234" className="text-primary hover:text-primary-dark font-bold text-lg">
              (215) 555-1234
            </a>
            <Link href="/get-offer" className="btn-primary">
              Get Relief!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-secondary p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/how-it-works"
              className="block text-secondary hover:text-primary font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/locations"
              className="block text-secondary hover:text-primary font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              href="/resources"
              className="block text-secondary hover:text-primary font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block text-secondary hover:text-primary font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <a
              href="tel:+12155551234"
              className="block text-primary font-bold text-lg py-2"
            >
              (215) 555-1234
            </a>
            <Link
              href="/get-offer"
              className="block btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Relief!
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
