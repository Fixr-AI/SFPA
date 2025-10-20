import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata = genMeta({
  title: 'PA Foreclosure Resources | Free Help & Information | Stop Foreclosures PA',
  description: 'Free Pennsylvania foreclosure resources, timelines, laws, and options. Learn about PA foreclosure process, government assistance programs, and how to protect your rights.',
  keywords: 'PA foreclosure laws, Pennsylvania foreclosure timeline, foreclosure help PA, stop foreclosure assistance',
  canonical: 'https://stopforeclosurespa.com/resources',
});

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Pennsylvania Foreclosure Resources
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Free educational resources to help you understand the foreclosure process, know your rights, and explore all your options. Knowledge is power.
          </p>
        </div>
      </section>

      {/* PA Foreclosure Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">
            Understanding the PA Foreclosure Timeline
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8">
              Pennsylvania is a judicial foreclosure state, meaning lenders must go through the court system. The process typically takes 270-400 days, but you have options at every stage.
            </p>

            <div className="space-y-6">
              {/* Day 1-30 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading-sm">Days 1-30: Missed Payment</h3>
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm font-semibold">Act Now</span>
                </div>
                <p className="text-gray-700 mb-3">
                  You miss your first mortgage payment. Your lender will start calling and sending notices.
                </p>
                <p className="font-semibold text-primary">Your Options:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                  <li>Contact your lender to discuss payment plans</li>
                  <li>Apply for loan modification</li>
                  <li>Explore government assistance programs</li>
                  <li>Contact us for a cash offer</li>
                </ul>
              </div>

              {/* Day 31-90 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading-sm">Days 31-90: Default Status</h3>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm font-semibold">Still Time</span>
                </div>
                <p className="text-gray-700 mb-3">
                  After 90 days of non-payment, your loan is officially in default. Lender may file a Notice of Intent (NOI).
                </p>
                <p className="font-semibold text-primary">Your Options:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                  <li>Reinstate the loan by paying all missed payments</li>
                  <li>Negotiate forbearance agreement</li>
                  <li>Sell your house to avoid foreclosure</li>
                  <li>Consider short sale if underwater</li>
                </ul>
              </div>

              {/* Day 91-150 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading-sm">Days 91-150: Lis Pendens Filed</h3>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold">Urgent</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Lender files a Lis Pendens (notice of pending legal action) with the county. This is public record and appears on your credit report.
                </p>
                <p className="font-semibold text-primary">Your Options:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                  <li>Hire a foreclosure defense attorney</li>
                  <li>File answer to foreclosure complaint</li>
                  <li>Sell quickly to cash buyer</li>
                  <li>Apply for emergency assistance programs</li>
                </ul>
              </div>

              {/* Day 151-270 */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading-sm">Days 151-270: Court Proceedings</h3>
                  <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">Critical</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Court hearings, mediation, and potential judgment. If you lose in court, the judge issues a Final Judgment of Foreclosure.
                </p>
                <p className="font-semibold text-primary">Your Options:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                  <li>Attend mandatory mediation sessions</li>
                  <li>Present hardship case to lender</li>
                  <li>Sell immediately to stop sheriff sale</li>
                  <li>File bankruptcy to delay (last resort)</li>
                </ul>
              </div>

              {/* Day 270+ */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-700">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading-sm">Day 270+: Sheriff Sale Scheduled</h3>
                  <span className="bg-red-700 text-white px-3 py-1 rounded text-sm font-semibold">Final Stage</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Sheriff sale date is set. Your home will be auctioned to the highest bidder. You typically have 10 days to vacate after the sale.
                </p>
                <p className="font-semibold text-primary">Your Final Options:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                  <li>Sell before the sheriff sale date (we can close in 7 days)</li>
                  <li>Request postponement from the court</li>
                  <li>Bankruptcy may delay but not stop the process</li>
                  <li>Cash-for-keys agreement with lender</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary text-white rounded-lg">
              <p className="text-xl font-semibold mb-3">Don't Wait Until It's Too Late</p>
              <p className="mb-4">
                The earlier you act, the more options you have. We can help at ANY stage of the foreclosure process, even days before the sheriff sale.
              </p>
              <a href="tel:+12155551234" className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
                Call Now: (215) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Know Your Rights in PA</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Right to Mediation</h3>
              <p className="text-gray-700">
                Pennsylvania offers foreclosure mediation programs where you can negotiate with your lender face-to-face. A neutral mediator helps facilitate discussions about loan modifications, repayment plans, or other alternatives to foreclosure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Right to Reinstate</h3>
              <p className="text-gray-700">
                You have the right to reinstate your mortgage by paying all missed payments, late fees, and legal costs up until the sheriff sale. This stops the foreclosure process completely.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Right to Redemption</h3>
              <p className="text-gray-700">
                In PA, you have a limited right of redemption after the sheriff sale. You can reclaim your property by paying the full amount owed plus costs within 10 days of the sale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Right to Legal Representation</h3>
              <p className="text-gray-700">
                You have the right to hire an attorney to defend against foreclosure. Legal Aid organizations in PA offer free services to qualifying homeowners facing foreclosure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Fair Debt Collection Protections</h3>
              <p className="text-gray-700">
                Lenders and debt collectors must follow the Fair Debt Collection Practices Act. They cannot harass you, call at unreasonable hours, or make false threats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Right to Challenge</h3>
              <p className="text-gray-700">
                You can challenge the foreclosure in court if the lender made procedural errors, didn't follow proper notification requirements, or if you believe the foreclosure is wrongful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Assistance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">
            Government Assistance Programs
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">PA Homeowner Assistance Fund (PAHAF)</h3>
              <p className="text-gray-700 mb-3">
                Provides financial assistance to eligible Pennsylvania homeowners for mortgage payments, property taxes, utilities, and other housing-related expenses.
              </p>
              <p className="text-sm text-gray-600">
                Website: <a href="https://pahaf.org" className="text-primary hover:underline" target="_blank" rel="noopener">pahaf.org</a> or call 1-888-987-2423
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">HUD-Approved Housing Counseling in PA</h3>
              <p className="text-gray-700 mb-3">
                Free foreclosure prevention counseling from HUD-certified counselors. They can help you understand your options and negotiate with your lender.
              </p>
              <p className="text-sm text-gray-600">
                Hotline: 1-800-569-4287 or visit <a href="https://www.hud.gov/findacounselor" className="text-primary hover:underline" target="_blank" rel="noopener">HUD.gov/findacounselor</a>
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">PA Foreclosure Diversion Program</h3>
              <p className="text-gray-700 mb-3">
                Court-ordered mediation program that brings you and your lender together with a neutral mediator to explore alternatives to foreclosure.
              </p>
              <p className="text-sm text-gray-600">
                Contact your county court or visit <a href="https://www.pacourts.us/judicial-administration/court-programs/foreclosure-diversion-program" className="text-primary hover:underline" target="_blank" rel="noopener">pacourts.us</a>
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">Pennsylvania Housing Finance Agency (PHFA)</h3>
              <p className="text-gray-700 mb-3">
                Offers counseling and assistance programs for homeowners struggling with mortgage payments, including loan modification resources.
              </p>
              <p className="text-sm text-gray-600">
                Website: <a href="https://www.phfa.org" className="text-primary hover:underline" target="_blank" rel="noopener">phfa.org</a> or call 1-855-827-3466
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-3">Legal Aid Organizations in PA</h3>
              <p className="text-gray-700 mb-3">
                Free legal help for low-income homeowners facing foreclosure. Attorneys can represent you in court and negotiate with lenders.
              </p>
              <p className="text-sm text-gray-600">
                Website: <a href="https://www.palegalaid.net" className="text-primary hover:underline" target="_blank" rel="noopener">palegalaid.net</a> or call your local legal aid office
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives to Foreclosure */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">
            Alternatives to Foreclosure
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Loan Modification</h3>
              <p className="text-gray-700 mb-4">
                Work with your lender to permanently change the terms of your mortgage - lower interest rate, extended term, or reduced principal.
              </p>
              <p className="font-semibold text-sm">Best for:</p>
              <p className="text-sm text-gray-600">Homeowners who want to keep their home and can afford modified payments.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Forbearance Agreement</h3>
              <p className="text-gray-700 mb-4">
                Temporarily reduce or suspend your mortgage payments for a specific period. You'll need to repay missed amounts later.
              </p>
              <p className="font-semibold text-sm">Best for:</p>
              <p className="text-sm text-gray-600">Temporary financial hardship with expected income recovery.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Short Sale</h3>
              <p className="text-gray-700 mb-4">
                Sell your home for less than you owe with lender approval. Lender forgives the difference. Less damaging to credit than foreclosure.
              </p>
              <p className="font-semibold text-sm">Best for:</p>
              <p className="text-sm text-gray-600">Homeowners who owe more than their home is worth.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Deed in Lieu</h3>
              <p className="text-gray-700 mb-4">
                Voluntarily transfer ownership to your lender in exchange for release from mortgage debt. Faster than foreclosure.
              </p>
              <p className="font-semibold text-sm">Best for:</p>
              <p className="text-sm text-gray-600">Cooperative lenders and homeowners who can't sell traditionally.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary">
              <h3 className="heading-sm mb-4 text-primary">Sell to Cash Buyer</h3>
              <p className="text-gray-700 mb-4">
                Sell quickly to an investor for cash. Close in days, stop foreclosure, protect your credit, and potentially walk away with money.
              </p>
              <p className="font-semibold text-sm">Best for:</p>
              <p className="text-sm text-gray-600">Homeowners who need fast solutions and want to move on.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4 text-primary">Bankruptcy</h3>
              <p className="text-gray-700 mb-4">
                Chapter 13 can stop foreclosure temporarily and allow you to catch up on payments over time. Chapter 7 may delay but not prevent foreclosure.
              </p>
              <p className="font-semibold text-sm">Best for:</p>
              <p className="text-sm text-gray-600">Last resort when other options have failed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Documents */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">
            Important Foreclosure Documents Explained
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-lg cursor-pointer text-primary">Notice of Intent to Foreclose (NOI)</summary>
              <p className="text-gray-700 mt-3">
                First formal notice that you're in default. Required 30 days before lender can file foreclosure lawsuit. Lists amount owed and gives you time to cure the default.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-lg cursor-pointer text-primary">Lis Pendens</summary>
              <p className="text-gray-700 mt-3">
                Latin for "suit pending." Public notice filed with county that foreclosure lawsuit has begun. Appears on property records and your credit report.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-lg cursor-pointer text-primary">Summons and Complaint</summary>
              <p className="text-gray-700 mt-3">
                Official foreclosure lawsuit documents. You have 35 days to file an answer with the court. Failure to respond results in automatic judgment against you.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-lg cursor-pointer text-primary">Final Judgment of Foreclosure</summary>
              <p className="text-gray-700 mt-3">
                Court order allowing lender to sell your property at sheriff sale. Includes total amount owed and sets the minimum bid amount for the auction.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-lg cursor-pointer text-primary">Writ of Execution</summary>
              <p className="text-gray-700 mt-3">
                Court order directing the sheriff to schedule and conduct the foreclosure sale. Sale must be advertised publicly for several weeks before the auction date.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-lg cursor-pointer text-primary">Sheriff's Deed</summary>
              <p className="text-gray-700 mt-3">
                Transfers ownership from you to the winning bidder at the sheriff sale. You typically have 10 days to vacate the property after this is issued.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #DC2626, #B91C1C)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-white">
                Still Have Questions? We're Here to Help.
              </h2>
              <p className="text-xl mb-8">
                Whether you're exploring your options or ready to sell, we provide honest answers and fair solutions. No pressure, no obligation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free consultation about your situation</span>
                </div>
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
                  <span>Close before your sheriff sale date</span>
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
