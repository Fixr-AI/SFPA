# Stop Foreclosures PA Website

A high-performance Next.js website designed to rank highly on search engines and LLMs for Pennsylvania foreclosure prevention and cash home buying services.

## Features

- **SEO Optimized**: Comprehensive meta tags, Schema.org markup, and semantic HTML
- **Geographic Targeting**: Individual pages for 10 PA counties and 18 cities
- **Fast Performance**: Static generation with Next.js 15 for optimal load times
- **Mobile-First Design**: Responsive Tailwind CSS design
- **Lead Generation**: Multiple conversion-optimized forms throughout the site
- **Local Content**: County/city-specific landmarks, statistics, and keywords

## Site Structure

```
/                          - Homepage with hero and lead capture
/county/[slug]             - 10 county-specific landing pages
/city/[slug]               - 18 city-specific landing pages
/locations                 - All service areas index
/how-it-works              - Process explanation
/resources                 - Foreclosure resources
/about                     - About the company
```

## Geographic Coverage

### Counties (10 pages):
1. Philadelphia County
2. Allegheny County
3. Montgomery County
4. Bucks County
5. Delaware County
6. Chester County
7. Lancaster County
8. York County
9. Berks County
10. Lehigh County

### Cities (18 pages):
Including Philadelphia, Pittsburgh, Norristown, King of Prussia, Lansdale, Bensalem, Bristol, Levittown, Upper Darby, Chester, West Chester, Lancaster, York, Reading, Allentown, and more.

## SEO Strategy

### Target Keywords

**Primary Keywords**:
- stop foreclosure in Pennsylvania
- sell house fast to avoid foreclosure PA
- cash home buyers foreclosure PA
- we buy houses facing foreclosure

**Geographic Keywords** (per location):
- stop foreclosure [County Name] PA
- sell house fast [City Name]
- we buy houses [City Name] PA
- cash buyers [County Name]

### Schema Markup

- Organization Schema (homepage)
- LocalBusiness Schema (county/city pages)
- Service Schema (service-specific pages)
- FAQ Schema (FAQ page)

### LLM Optimization

- Comprehensive, factual content
- Clear answer formatting for common questions
- Citation of official PA resources
- Structured data for easy parsing
- Unbiased presentation of all homeowner options

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Fixr-AI/SFPA.git
   cd SFPA
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add the logo:
   - Place the Stop Foreclosures PA logo as `public/images/logo.png`
   - Create a white version as `public/images/logo-white.png` for the footer

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Automatic Deployment (Recommended)

This project is already connected to Vercel. Any push to the `main` branch will automatically deploy.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Manual Deployment

```bash
vercel --prod
```

## Environment Variables

No environment variables required for the current setup. If you add form submission handling, you may need:

- `NEXT_PUBLIC_FORM_ENDPOINT` - Form submission API endpoint
- `SENDGRID_API_KEY` - For email notifications
- `GOOGLE_ANALYTICS_ID` - For analytics tracking

## Adding Content

### Add a New County

1. Edit `data/locations.ts`
2. Add county object to `counties` array with:
   - name, slug, population, medianHomePrice, landmarks, keywords
3. Rebuild and deploy

### Add a New City

1. Edit `data/locations.ts`
2. Add city object to `cities` array
3. Link to parent county
4. Include landmarks and keywords
5. Rebuild and deploy

### Customize Phone Number

Find and replace all instances of `(215) 555-1234` and `+12155551234` with your actual phone number.

Files to update:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/page.tsx`
- All county and city page templates
- `lib/metadata.ts`

## Performance Optimization

### Current Optimizations

- Static generation for all location pages
- Optimized images with Next.js Image component
- Tailwind CSS for minimal CSS bundle
- Font optimization with next/font

### Recommended Additions

1. **Google Analytics**: Add tracking to monitor traffic
2. **Google Tag Manager**: For conversion tracking
3. **Hotjar**: For heatmaps and user behavior
4. **Call Tracking**: Implement call tracking with CallRail
5. **Image Optimization**: Add actual property images (optimize to WebP)

## SEO Checklist

- [x] Meta titles and descriptions for all pages
- [x] Schema.org markup (Organization, LocalBusiness, Service)
- [x] Semantic HTML structure
- [x] Mobile-responsive design
- [x] Fast page load times
- [ ] Google Search Console setup
- [ ] Google Business Profile creation
- [ ] Backlink acquisition strategy
- [ ] Content marketing (blog posts)
- [ ] Local citations (directories)

## Next Steps

### High Priority

1. **Add Real Logo**: Replace placeholder with actual logo image
2. **Update Phone Number**: Replace all instances of placeholder number
3. **Create Remaining Pages**:
   - /how-it-works
   - /resources (foreclosure resources)
   - /faq
   - /about
   - /contact
   - /get-offer (dedicated form page)
4. **Set Up Analytics**: Google Analytics 4, Google Search Console
5. **Form Integration**: Connect lead forms to CRM or email

### Medium Priority

6. Add testimonials and success stories
7. Create blog for content marketing
8. Add FAQ schema markup
9. Implement live chat widget
10. Create downloadable resources (PDFs)

### Long Term

11. Build out blog with 50+ posts
12. Create video content for testimonials
13. Implement A/B testing for conversion optimization
14. Build backlink profile with guest posts
15. Monthly content updates to maintain freshness

## File Structure

```
SFPA/
├── app/
│   ├── county/[slug]/page.tsx    # County landing pages
│   ├── city/[slug]/page.tsx      # City landing pages
│   ├── locations/page.tsx        # Service areas index
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Site header/navigation
│   ├── Footer.tsx                # Site footer
│   └── LeadForm.tsx              # Lead capture form
├── data/
│   └── locations.ts              # County and city data
├── lib/
│   └── metadata.ts               # SEO metadata helpers
├── public/
│   └── images/                   # Logo and images
├── tailwind.config.js            # Tailwind configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies

```

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)

## License

Proprietary - Stop Foreclosures PA © 2025
