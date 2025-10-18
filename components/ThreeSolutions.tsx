export default function ThreeSolutions() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">Three Solutions to Fit Your Needs</h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          We understand every situation is unique. That's why we offer three different solutions based on your timeline and financial goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cash Offer */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="heading-sm mb-2">Cash Offer</h3>
              <p className="text-sm text-primary font-semibold mb-4">Fastest Timeline • Lower Net</p>
            </div>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">Close in 7-14 days</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">Get cash immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">No fees or commissions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">Sell AS-IS, no repairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">Stop foreclosure fast</span>
              </li>
            </ul>

            <p className="text-sm text-gray-600 italic">
              <strong>Best for:</strong> Homeowners who need to sell immediately and want the fastest, simplest solution.
            </p>
          </div>

          {/* Creative Finance */}
          <div className="bg-primary text-white p-8 rounded-lg border-2 border-primary shadow-lg transform scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-2">Creative Finance</h3>
              <p className="text-sm opacity-90 font-semibold mb-4">Moderate Timeline • Higher Net</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span className="text-sm">Subject-To or Seller Finance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span className="text-sm">Higher offer than cash</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span className="text-sm">Close in 14-30 days</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span className="text-sm">No fees or commissions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">✓</span>
                <span className="text-sm">Flexible terms available</span>
              </li>
            </ul>

            <p className="text-sm opacity-90 italic">
              <strong>Best for:</strong> Homeowners who want maximum value and have a bit more time to close.
            </p>
          </div>

          {/* As Is Listing */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="heading-sm mb-2">As Is Listing</h3>
              <p className="text-sm text-primary font-semibold mb-4">Longest Timeline • Highest Net</p>
            </div>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">List on open market</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">Maximum potential value</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">30-90 days to close</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">Sell AS-IS, no repairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm">We handle all showings</span>
              </li>
            </ul>

            <p className="text-sm text-gray-600 italic">
              <strong>Best for:</strong> Homeowners who have time and want to maximize their sale price on the retail market.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Not sure which solution is right for you? We'll analyze your situation and recommend the best option.
          </p>
          <a href="tel:+18568791492" className="btn-primary">
            Call for Free Consultation: (856) 879-1492
          </a>
        </div>
      </div>
    </section>
  );
}
