import PageBanner from '../components/hero-banner/PageBanner';

const Privacy = () => {
  return (
    <div>
      <PageBanner title={'Privacy Policies'} />
      <div className="bg-white max-w-6xl mx-auto py-10 lg:py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-0 leading-6">
          <div className="mb-10">
            <h2 className="text-gray-900 text-3xl font-garamond font-bold pb-10 lg:text-4xl">
              Privacy Policy for Shortlet Elders December Investment Scheme
            </h2>
            <p className="text-xl text-gray-800 font-normal font-Montserrat leading-normal">
              At Shortlet Elders, we are committed to protecting the privacy and
              personal information of our investors.
              <br />
              <br />
              This Privacy Policy outlines how we collect, use, store, and
              protect the information you provide when participating in our
              December Investment Scheme.
            </p>
          </div>
          <div>
            <ul className="list-decimal  list-outside ms-5 flex flex-col gap-4 leading-normal">
              <li className="pb-5 text-xl font-medium leading-normal font-merriweather">
                Information We Collect
                <ul className="list-disc list-outside ms-5 flex flex-col gap-4 leading-normal pt-5 text-base font-Montserrat font-normal">
                  <li>
                    {' '}
                    Personal Information: Name, contact details, identification
                    information, and payment details collected during
                    registration and transactions.
                  </li>
                  <li>
                    Usage Data: Information about how you interact with our
                    platform, including IP address, device type, and browsing
                    data.
                  </li>
                  <li>
                    Financial Information: Bank account details and investment
                    history for transaction purposes.
                  </li>
                </ul>
              </li>
              <li className="pb-5 text-xl font-medium leading-normal font-merriweather">
                How We Use Your Information
                <ul className="list-disc list-outside ms-5 flex flex-col gap-4 leading-normal pt-5 text-base font-Montserrat font-normal">
                  <li>
                    {' '}
                    To Process Investments: We use your information to manage
                    and execute your investments, including processing
                    transactions, calculating returns, and issuing payments.
                  </li>
                  <li>
                    Communication: We send updates, confirmations, and relevant
                    investment notifications.
                  </li>
                  <li>
                    Improving Services: Analyzing usage data to enhance our
                    platform and user experience.
                  </li>
                  <li>
                    Compliance: Using information to meet legal, regulatory, and
                    compliance requirements.
                  </li>
                </ul>
              </li>
              <li className="pb-5 text-xl font-medium leading-normal font-merriweather">
                Information Sharing
                <ul className="list-disc list-outside ms-5 flex flex-col gap-4 leading-normal pt-5 text-base font-Montserrat font-normal">
                  <li>
                    {' '}
                    With Authorized Personnel: Access to your information is
                    restricted to authorized personnel who manage or process
                    your investment.
                  </li>
                  <li>
                    Third-Party Service Providers: We may share information with
                    service providers (e.g., payment processors) under strict
                    confidentiality and data protection requirements.
                  </li>
                  <li>
                    Legal Requirements: In cases of compliance with legal
                    obligations or in response to lawful requests by public
                    authorities.
                  </li>
                  <li>Data Protection and Security</li>
                  <li>
                    Encryption: We use encryption to secure your data during
                    transactions and storage.
                  </li>
                  <li>
                    Access Control: Restricted access to personal information to
                    authorized personnel only.
                  </li>
                  <li>
                    Monitoring: Regular monitoring of our platform to prevent
                    unauthorized access and ensure data integrity.
                  </li>
                </ul>
              </li>
              <li className="pb-5 text-xl font-medium leading-normal font-merriweather">
                Your Rights
                <ul className="list-disc list-outside ms-5 flex flex-col gap-4 leading-normal pt-5 text-base font-Montserrat font-normal">
                  <li>
                    {' '}
                    Access: You may request to view the information we hold
                    about you.
                  </li>
                  <li>
                    Correction: You can update or correct any personal
                    information.
                  </li>
                  <li>
                    Deletion: You have the right to request the deletion of your
                    personal data, subject to legal obligations.
                  </li>
                  <li>
                    Opt-Out: You may unsubscribe from non-essential
                    communications at any time.
                  </li>
                </ul>
              </li>
              <li className="pb-5 text-xl font-medium leading-normal font-merriweather">
                Cookies and Tracking
                <ul className="list-disc list-outside ms-5 flex flex-col gap-4 leading-normal pt-5 text-base font-Montserrat font-normal">
                  <li>
                    We may use cookies and tracking tools to improve your
                    experience on our platform. You can manage cookie
                    preferences in your browser settings.
                  </li>
                </ul>
              </li>
              <li className="pb-5 text-xl font-medium leading-normal font-merriweather">
                Policy Updates
                <ul className="list-disc list-outside ms-5 flex flex-col gap-4 leading-normal pt-5 text-base font-Montserrat font-normal">
                  <li>
                    This Privacy Policy may be updated periodically. We will
                    notify users of significant changes via email or on our
                    platform.
                  </li>
                </ul>
              </li>
              <li className="pb-5 text-xl font-medium leading-normal font-merriweather">
                Contact Information
                <ul className="list-disc list-outside ms-5 flex flex-col gap-4 leading-normal pt-5 text-base font-Montserrat font-normal">
                  <li>
                    For questions or concerns regarding our privacy practices,
                    please contact us at{' '}
                    <a
                      href={`mailto:${'support@shortletelders.com'}`}
                      className="text-blue-500 hover:underline"
                    >
                      {'support@shortletelders.com'}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="py-10 text-gray-800 text-lg font-Montserrat">
            <p>
              By participating in the Shortlet Elders December Investment
              Scheme, you agree to this Privacy Policy and the ways we handle
              your personal information to deliver our services safely and
              securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
