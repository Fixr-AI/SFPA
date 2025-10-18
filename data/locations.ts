// Pennsylvania Counties and Top Cities for SEO targeting

export interface Location {
  name: string;
  slug: string;
  type: 'county' | 'city';
  county?: string;
  population?: number;
  landmarks?: string[];
  keywords?: string[];
  medianHomePrice?: string;
}

export const counties: Location[] = [
  {
    name: 'Philadelphia County',
    slug: 'philadelphia-county',
    type: 'county',
    population: 1603797,
    medianHomePrice: '$185,000',
    landmarks: ['Liberty Bell', 'Independence Hall', 'Philadelphia Museum of Art'],
    keywords: [
      'sell house fast Philadelphia County',
      'stop foreclosure Philadelphia County PA',
      'cash home buyers Philadelphia County',
      'we buy houses Philadelphia PA'
    ]
  },
  {
    name: 'Allegheny County',
    slug: 'allegheny-county',
    type: 'county',
    population: 1250578,
    medianHomePrice: '$195,000',
    landmarks: ['Point State Park', 'Carnegie Museums', 'Phipps Conservatory'],
    keywords: [
      'sell house fast Allegheny County',
      'stop foreclosure Allegheny County PA',
      'cash home buyers Allegheny County',
      'we buy houses Pittsburgh PA'
    ]
  },
  {
    name: 'Montgomery County',
    slug: 'montgomery-county',
    type: 'county',
    population: 856553,
    medianHomePrice: '$345,000',
    landmarks: ['Valley Forge National Park', 'King of Prussia Mall', 'Elmwood Park Zoo'],
    keywords: [
      'sell house fast Montgomery County',
      'stop foreclosure Montgomery County PA',
      'cash home buyers Montgomery County',
      'we buy houses Montgomery PA'
    ]
  },
  {
    name: 'Bucks County',
    slug: 'bucks-county',
    type: 'county',
    population: 646538,
    medianHomePrice: '$395,000',
    landmarks: ['Washington Crossing Historic Park', 'Peddler\'s Village', 'Sesame Place'],
    keywords: [
      'sell house fast Bucks County',
      'stop foreclosure Bucks County PA',
      'cash home buyers Bucks County',
      'we buy houses Bucks PA'
    ]
  },
  {
    name: 'Delaware County',
    slug: 'delaware-county',
    type: 'county',
    population: 576830,
    medianHomePrice: '$265,000',
    landmarks: ['Ridley Creek State Park', 'Tyler Arboretum', 'Media Theatre'],
    keywords: [
      'sell house fast Delaware County',
      'stop foreclosure Delaware County PA',
      'cash home buyers Delaware County',
      'we buy houses Delaware County PA'
    ]
  },
  {
    name: 'Chester County',
    slug: 'chester-county',
    type: 'county',
    population: 534413,
    medianHomePrice: '$425,000',
    landmarks: ['Longwood Gardens', 'Brandywine River Museum', 'Valley Forge'],
    keywords: [
      'sell house fast Chester County',
      'stop foreclosure Chester County PA',
      'cash home buyers Chester County',
      'we buy houses Chester PA'
    ]
  },
  {
    name: 'Lancaster County',
    slug: 'lancaster-county',
    type: 'county',
    population: 552984,
    medianHomePrice: '$285,000',
    landmarks: ['Amish Country', 'Strasburg Rail Road', 'Dutch Wonderland'],
    keywords: [
      'sell house fast Lancaster County',
      'stop foreclosure Lancaster County PA',
      'cash home buyers Lancaster County',
      'we buy houses Lancaster PA'
    ]
  },
  {
    name: 'York County',
    slug: 'york-county',
    type: 'county',
    population: 456438,
    medianHomePrice: '$245,000',
    landmarks: ['York Fair', 'Harley-Davidson Factory', 'Agricultural History Museum'],
    keywords: [
      'sell house fast York County',
      'stop foreclosure York County PA',
      'cash home buyers York County',
      'we buy houses York PA'
    ]
  },
  {
    name: 'Berks County',
    slug: 'berks-county',
    type: 'county',
    population: 428849,
    medianHomePrice: '$225,000',
    landmarks: ['Reading Pagoda', 'Crystal Cave', 'Hawk Mountain Sanctuary'],
    keywords: [
      'sell house fast Berks County',
      'stop foreclosure Berks County PA',
      'cash home buyers Berks County',
      'we buy houses Reading PA'
    ]
  },
  {
    name: 'Lehigh County',
    slug: 'lehigh-county',
    type: 'county',
    population: 374557,
    medianHomePrice: '$255,000',
    landmarks: ['Dorney Park', 'Lehigh Valley Zoo', 'Da Vinci Science Center'],
    keywords: [
      'sell house fast Lehigh County',
      'stop foreclosure Lehigh County PA',
      'cash home buyers Lehigh County',
      'we buy houses Allentown PA'
    ]
  }
];

export const cities: Location[] = [
  // Philadelphia County
  {
    name: 'Philadelphia',
    slug: 'philadelphia',
    type: 'city',
    county: 'Philadelphia County',
    population: 1603797,
    medianHomePrice: '$185,000',
    landmarks: ['Liberty Bell', 'Independence Hall', 'Reading Terminal Market'],
    keywords: ['sell house fast Philadelphia', 'we buy houses Philadelphia PA', 'cash for homes Philadelphia']
  },

  // Allegheny County
  {
    name: 'Pittsburgh',
    slug: 'pittsburgh',
    type: 'city',
    county: 'Allegheny County',
    population: 302898,
    medianHomePrice: '$195,000',
    landmarks: ['Point State Park', 'Strip District', 'North Shore'],
    keywords: ['sell house fast Pittsburgh', 'we buy houses Pittsburgh PA', 'cash for homes Pittsburgh']
  },

  // Montgomery County
  {
    name: 'Norristown',
    slug: 'norristown',
    type: 'city',
    county: 'Montgomery County',
    population: 35748,
    medianHomePrice: '$215,000',
    landmarks: ['Elmwood Park Zoo', 'Montgomery County Courthouse', 'Centre Square'],
    keywords: ['sell house fast Norristown', 'we buy houses Norristown PA', 'cash buyers Norristown']
  },
  {
    name: 'King of Prussia',
    slug: 'king-of-prussia',
    type: 'city',
    county: 'Montgomery County',
    population: 22028,
    medianHomePrice: '$385,000',
    landmarks: ['King of Prussia Mall', 'Valley Forge Park'],
    keywords: ['sell house fast King of Prussia', 'we buy houses King of Prussia PA']
  },
  {
    name: 'Lansdale',
    slug: 'lansdale',
    type: 'city',
    county: 'Montgomery County',
    population: 18773,
    medianHomePrice: '$295,000',
    landmarks: ['Lansdale Station', 'White\'s Road Park'],
    keywords: ['sell house fast Lansdale', 'we buy houses Lansdale PA', 'stop foreclosure Lansdale']
  },

  // Bucks County
  {
    name: 'Bensalem',
    slug: 'bensalem',
    type: 'city',
    county: 'Bucks County',
    population: 62707,
    medianHomePrice: '$315,000',
    landmarks: ['Neshaminy State Park', 'Parx Casino'],
    keywords: ['sell house fast Bensalem', 'we buy houses Bensalem PA', 'cash for homes Bensalem']
  },
  {
    name: 'Bristol',
    slug: 'bristol',
    type: 'city',
    county: 'Bucks County',
    population: 54582,
    medianHomePrice: '$285,000',
    landmarks: ['Bristol Wharf', 'Historic Bristol Borough'],
    keywords: ['sell house fast Bristol', 'we buy houses Bristol PA', 'stop foreclosure Bristol']
  },
  {
    name: 'Levittown',
    slug: 'levittown',
    type: 'city',
    county: 'Bucks County',
    population: 51981,
    medianHomePrice: '$275,000',
    landmarks: ['Core Creek Park', 'Veteran\'s Memorial'],
    keywords: ['sell house fast Levittown', 'we buy houses Levittown PA']
  },

  // Delaware County
  {
    name: 'Upper Darby',
    slug: 'upper-darby',
    type: 'city',
    county: 'Delaware County',
    population: 85681,
    medianHomePrice: '$195,000',
    landmarks: ['Tower Theater', '69th Street Terminal'],
    keywords: ['sell house fast Upper Darby', 'we buy houses Upper Darby PA', 'cash buyers Upper Darby']
  },
  {
    name: 'Chester',
    slug: 'chester',
    type: 'city',
    county: 'Delaware County',
    population: 32605,
    medianHomePrice: '$125,000',
    landmarks: ['Harrah\'s Philadelphia Casino', 'Chester Waterfront'],
    keywords: ['sell house fast Chester', 'we buy houses Chester PA', 'stop foreclosure Chester']
  },
  {
    name: 'Media',
    slug: 'media',
    type: 'city',
    county: 'Delaware County',
    population: 5543,
    medianHomePrice: '$285,000',
    landmarks: ['Media Theatre', 'Veteran\'s Square'],
    keywords: ['sell house fast Media', 'we buy houses Media PA']
  },

  // Chester County
  {
    name: 'West Chester',
    slug: 'west-chester',
    type: 'city',
    county: 'Chester County',
    population: 19960,
    medianHomePrice: '$395,000',
    landmarks: ['West Chester University', 'Historic Downtown'],
    keywords: ['sell house fast West Chester', 'we buy houses West Chester PA', 'cash for homes West Chester']
  },
  {
    name: 'Coatesville',
    slug: 'coatesville',
    type: 'city',
    county: 'Chester County',
    population: 13229,
    medianHomePrice: '$165,000',
    landmarks: ['National Iron & Steel Heritage Museum', 'Scott Park'],
    keywords: ['sell house fast Coatesville', 'we buy houses Coatesville PA', 'stop foreclosure Coatesville']
  },

  // Lancaster County
  {
    name: 'Lancaster',
    slug: 'lancaster',
    type: 'city',
    county: 'Lancaster County',
    population: 58039,
    medianHomePrice: '$165,000',
    landmarks: ['Central Market', 'Fulton Theatre', 'Lancaster Museum of Art'],
    keywords: ['sell house fast Lancaster', 'we buy houses Lancaster PA', 'cash buyers Lancaster']
  },

  // York County
  {
    name: 'York',
    slug: 'york',
    type: 'city',
    county: 'York County',
    population: 44800,
    medianHomePrice: '$145,000',
    landmarks: ['York Fairgrounds', 'Colonial Complex', 'Central Market'],
    keywords: ['sell house fast York', 'we buy houses York PA', 'cash for homes York']
  },

  // Berks County
  {
    name: 'Reading',
    slug: 'reading',
    type: 'city',
    county: 'Berks County',
    population: 95112,
    medianHomePrice: '$135,000',
    landmarks: ['Reading Pagoda', 'GoggleWorks Center', 'Santander Arena'],
    keywords: ['sell house fast Reading', 'we buy houses Reading PA', 'stop foreclosure Reading']
  },

  // Lehigh County
  {
    name: 'Allentown',
    slug: 'allentown',
    type: 'city',
    county: 'Lehigh County',
    population: 125845,
    medianHomePrice: '$175,000',
    landmarks: ['Coca-Cola Park', 'PPL Center', 'Allentown Art Museum'],
    keywords: ['sell house fast Allentown', 'we buy houses Allentown PA', 'cash buyers Allentown']
  },
];

export const allLocations = [...counties, ...cities];

export function getLocationBySlug(slug: string): Location | undefined {
  return allLocations.find(loc => loc.slug === slug);
}

export function getCitiesByCounty(countySlug: string): Location[] {
  const county = counties.find(c => c.slug === countySlug);
  if (!county) return [];
  return cities.filter(t => t.county === county.name);
}
