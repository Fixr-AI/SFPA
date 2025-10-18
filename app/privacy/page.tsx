import { generateMetadata as genMeta } from '@/lib/metadata';

export const metadata = genMeta({
  title: 'Privacy Policy | Stop Foreclosures PA',
  description: 'Privacy Policy for Stop Foreclosures PA. Learn how we collect, use, and protect your personal information.',
  canonical: 'https://stopforeclosurespa.com/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="heading-xl mb-8">Privacy Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="heading-md mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Stop Foreclosures PA ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us via phone, text message (SMS), or other channels.
            </p>

            <h2 className="heading-md mt-8 mb-4">2. Information We Collect</h2>

            <h3 className="heading-sm mt-6 mb-3">2.1 Information You Provide to Us</h3>
            <p className="mb-4">We collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
              <li><strong>Property Information:</strong> Property address, condition, ownership details, mortgage information</li>
              <li><strong>Financial Information:</strong> Information about your financial situation relevant to property sale</li>
              <li><strong>Communications:</strong> Content of messages, emails, calls, and SMS communications with us</li>
            </ul>

            <h3 className="heading-sm mt-6 mb-3">2.2 Information Automatically Collected</h3>
            <p className="mb-4">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, links clicked)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Location data (general geographic location based on IP address)</li>
            </ul>

            <h2 className="heading-md mt-8 mb-4">3. SMS/Text Messaging Privacy & A2P Compliance</h2>

            <h3 className="heading-sm mt-6 mb-3">3.1 SMS Communications</h3>
            <p className="mb-4">
              When you provide your phone number and opt-in to receive text messages from us, you consent to receive SMS messages including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Property offer updates and information</li>
              <li>Appointment reminders and confirmations</li>
              <li>Service-related communications</li>
              <li>Marketing messages (only with your explicit consent)</li>
            </ul>

            <h3 className="heading-sm mt-6 mb-3">3.2 Your SMS Rights</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Opt-Out:</strong> You can opt-out of SMS messages at any time by replying STOP to any message</li>
              <li><strong>Help:</strong> Reply HELP for assistance or contact us at (215) 555-1234</li>
              <li><strong>Message Frequency:</strong> Message frequency varies based on your interaction with us</li>
              <li><strong>Charges:</strong> Message and data rates may apply. We do not charge for our messages, but your carrier may</li>
              <li><strong>Supported Carriers:</strong> All major carriers supported. See carrier list at your carrier's website</li>
            </ul>

            <h3 className="heading-sm mt-6 mb-3">3.3 SMS Data Protection</h3>
            <p className="mb-4">
              Your phone number and SMS data are protected and will not be shared with third parties for their marketing purposes. We use industry-standard security measures to protect your mobile number and message content.
            </p>

            <h2 className="heading-md mt-8 mb-4">4. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Evaluate your property and provide cash offers</li>
              <li>Communicate with you about our services via phone, email, or SMS</li>
              <li>Process and complete property transactions</li>
              <li>Send you updates, offers, and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations and prevent fraud</li>
              <li>Analyze usage patterns and optimize user experience</li>
            </ul>

            <h2 className="heading-md mt-8 mb-4">5. How We Share Your Information</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (SMS providers, CRM systems, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
              <li><strong>With Your Consent:</strong> When you have given us explicit permission</li>
            </ul>
            <p className="mb-4">
              <strong>We do NOT sell your personal information to third parties.</strong>
            </p>

            <h2 className="heading-md mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookies through your browser settings, but disabling cookies may limit website functionality.
            </p>

            <h2 className="heading-md mt-8 mb-4">7. Your Privacy Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information</li>
              <li><strong>Opt-Out:</strong> Opt-out of marketing communications (email or SMS)</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Restrict Processing:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
            <p className="mb-4">
              To exercise any of these rights, contact us at privacy@stopforeclosurespa.com or (215) 555-1234.
            </p>

            <h2 className="heading-md mt-8 mb-4">8. California Privacy Rights (CCPA)</h2>
            <p className="mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information.
            </p>

            <h2 className="heading-md mt-8 mb-4">9. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="heading-md mt-8 mb-4">10. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="heading-md mt-8 mb-4">11. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>

            <h2 className="heading-md mt-8 mb-4">12. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="heading-md mt-8 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="heading-md mt-8 mb-4">14. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>Stop Foreclosures PA</strong></p>
              <p className="mb-2">Email: privacy@stopforeclosurespa.com</p>
              <p className="mb-2">Phone: (215) 555-1234</p>
              <p className="mb-2">Address: Pennsylvania, United States</p>
            </div>

            <h2 className="heading-md mt-8 mb-4">15. SMS Compliance Statement</h2>
            <p className="mb-4">
              By providing your phone number, you agree to receive text messages from Stop Foreclosures PA. These may include property updates, appointment reminders, and promotional messages. Message frequency varies. Message and data rates may apply. Reply STOP to opt-out or HELP for help. Your information will be handled in accordance with this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
