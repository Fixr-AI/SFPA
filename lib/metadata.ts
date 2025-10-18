import type { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    canonical = 'https://stopforeclosurespa.com',
  } = config;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      siteName: 'Stop Foreclosures PA',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical,
    },
  };
}

export function generateCountySchema(county: {
  name: string;
  slug: string;
  population?: number;
  medianHomePrice?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Foreclosure Prevention Services in ${county.name}, PA`,
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Stop Foreclosures PA',
      telephone: '+1-215-555-1234',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'PA',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: county.name,
      '@id': `https://stopforeclosurespa.com/county/${county.slug}`,
    },
    description: `Fast cash home buying service for homeowners facing foreclosure in ${county.name}, Pennsylvania. Licensed buyers, fair offers within 24 hours.`,
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Stop Foreclosures PA',
    description: 'Licensed Pennsylvania cash home buyers specializing in foreclosure prevention',
    url: 'https://stopforeclosurespa.com',
    telephone: '+1-215-555-1234',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.0583',
      longitude: '-75.1652',
    },
    areaServed: {
      '@type': 'State',
      name: 'Pennsylvania',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  };
}
