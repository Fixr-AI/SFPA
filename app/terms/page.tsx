import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata = genMeta({
  title: 'Terms of Service | Stop Foreclosures PA',
  description: 'Terms of Service for Stop Foreclosures PA. Read our terms and conditions for using our services.',
  canonical: 'https://stopforeclosurespa.com/terms',
});

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-xl mb-8">Terms of Service</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="heading-md mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the Stop Foreclosures PA website ("Site") or services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services.
            </p>

            <h2 className="heading-md mt-8 mb-4">2. Description of Services</h2>
            <p className="mb-4">
              Stop Foreclosures PA provides real estate services including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Cash offers for residential properties in Pennsylvania</li>
              <li>Foreclosure prevention assistance</li>
              <li>Property evaluation and consultation services</li>
              <li>Fast property closing services</li>
            </ul>

            <h2 className="heading-md mt-8 mb-4">3. User Eligibility</h2>
            <p className="mb-4">
              You must be at least 18 years old and legally capable of entering into binding contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
            </p>

            <h2 className="heading-md mt-8 mb-4">4. SMS/Text Messaging Terms</h2>

            <h3 className="heading-sm mt-6 mb-3">4.1 Consent to Receive SMS Messages</h3>
            <p className="mb-4">
              By providing your mobile phone number to Stop Foreclosures PA, you expressly consent to receive automated and/or pre-recorded text messages from us at that number. Your consent is not required as a condition of purchasing any goods or services.
            </p>

            <h3 className="heading-sm mt-6 mb-3">4.2 Types of Messages</h3>
            <p className="mb-4">Messages may include but are not limited to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Property offer information and updates</li>
              <li>Appointment confirmations and reminders</li>
              <li>Transaction updates and closing information</li>
              <li>Service-related notifications</li>
              <li>Marketing and promotional messages (with your consent)</li>
            </ul>

            <h3 className="heading-sm mt-6 mb-3">4.3 Message Frequency and Costs</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Message frequency varies based on your interaction with our services</li>
              <li>Message and data rates may apply based on your carrier's plan</li>
              <li>We do not charge for messages, but your carrier may</li>
              <li>Check with your mobile carrier for details on your messaging plan</li>
            </ul>

            <h3 className="heading-sm mt-6 mb-3">4.4 Opt-Out and Help</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To stop receiving messages, reply <strong>STOP</strong> to any text message</li>
              <li>After opting out, you will receive a confirmation message</li>
              <li>For help or customer support, reply <strong>HELP</strong> or call (215) 555-1234</li>
              <li>You can also email us at support@stopforeclosurespa.com</li>
            </ul>

            <h3 className="heading-sm mt-6 mb-3">4.5 Supported Carriers</h3>
            <p className="mb-4">
              Our SMS service is supported by all major U.S. carriers including AT&T, T-Mobile, Verizon, Sprint, and others. Please check with your carrier for availability.
            </p>

            <h2 className="heading-md mt-8 mb-4">5. Property Information and Offers</h2>

            <h3 className="heading-sm mt-6 mb-3">5.1 No Guarantee of Offers</h3>
            <p className="mb-4">
              Submitting property information does not guarantee that we will make an offer to purchase your property. All offers are subject to property evaluation, inspection, and our sole discretion.
            </p>

            <h3 className="heading-sm mt-6 mb-3">5.2 Accuracy of Information</h3>
            <p className="mb-4">
              You agree to provide accurate, complete, and truthful information about your property. Misrepresentation of property details may result in withdrawal of any offer or termination of services.
            </p>

            <h3 className="heading-sm mt-6 mb-3">5.3 Property Evaluation</h3>
            <p className="mb-4">
              We reserve the right to inspect and evaluate any property before making a final offer. Offers are contingent upon satisfactory property inspection and title review.
            </p>

            <h2 className="heading-md mt-8 mb-4">6. No Professional Advice</h2>
            <p className="mb-4">
              Information provided on our Site or through our services is for general informational purposes only and does not constitute legal, financial, tax, or professional advice. We recommend consulting with qualified professionals regarding:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Legal implications of selling your property</li>
              <li>Tax consequences of property transactions</li>
              <li>Financial planning and foreclosure alternatives</li>
              <li>Any other matters requiring professional expertise</li>
            </ul>

            <h2 className="heading-md mt-8 mb-4">7. User Conduct</h2>
            <p className="mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide false or misleading information</li>
              <li>Use our services for any illegal purpose</li>
              <li>Interfere with or disrupt our Site or services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use automated systems (bots, scrapers) to access our Site</li>
            </ul>

            <h2 className="heading-md mt-8 mb-4">8. Intellectual Property</h2>
            <p className="mb-4">
              All content on this Site, including text, graphics, logos, images, and software, is the property of Stop Foreclosures PA and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2 className="heading-md mt-8 mb-4">9. Third-Party Links and Services</h2>
            <p className="mb-4">
              Our Site may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of these third parties. Your use of third-party sites is at your own risk and subject to their terms and conditions.
            </p>

            <h2 className="heading-md mt-8 mb-4">10. Disclaimers and Limitations of Liability</h2>

            <h3 className="heading-sm mt-6 mb-3">10.1 Service "As Is"</h3>
            <p className="mb-4">
              Our Site and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h3 className="heading-sm mt-6 mb-3">10.2 Limitation of Liability</h3>
            <p className="mb-4">
              To the fullest extent permitted by law, Stop Foreclosures PA shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from our Site</li>
              <li>Any bugs, viruses, or the like transmitted through our Site</li>
              <li>Any errors or omissions in content</li>
            </ul>

            <h2 className="heading-md mt-8 mb-4">11. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Stop Foreclosures PA, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services or violation of these Terms.
            </p>

            <h2 className="heading-md mt-8 mb-4">12. Privacy</h2>
            <p className="mb-4">
              Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>

            <h2 className="heading-md mt-8 mb-4">13. Governing Law and Dispute Resolution</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to its conflict of law provisions. Any disputes arising from these Terms or use of our services shall be resolved in the state or federal courts located in Pennsylvania.
            </p>

            <h2 className="heading-md mt-8 mb-4">14. Modifications to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="heading-md mt-8 mb-4">15. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className="heading-md mt-8 mb-4">16. Entire Agreement</h2>
            <p className="mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Stop Foreclosures PA regarding the use of our services and supersede any prior agreements.
            </p>

            <h2 className="heading-md mt-8 mb-4">17. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>Stop Foreclosures PA</strong></p>
              <p className="mb-2">Email: legal@stopforeclosurespa.com</p>
              <p className="mb-2">Phone: (215) 555-1234</p>
              <p className="mb-2">Address: Pennsylvania, United States</p>
            </div>

            <h2 className="heading-md mt-8 mb-4">18. SMS Terms Summary</h2>
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded mb-8">
              <p className="mb-2"><strong>Quick SMS Reference:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Text STOP to opt-out of messages</li>
                <li>Text HELP for assistance</li>
                <li>Message frequency varies</li>
                <li>Message and data rates may apply</li>
                <li>All major carriers supported</li>
                <li>Your consent is not required as a condition of service</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-8 pt-8 border-t">
              By using our services or providing your phone number, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
