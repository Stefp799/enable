import React, { useEffect } from 'react';
import Header from '../components/Header';

const ZohoCrmFreeTrial: React.FC = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Zoho CRM Free Trial - Start Your 15-Day Journey | Enable Solutions';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Start your Zoho CRM free trial today. Get expert setup assistance and strategic guidance from Enable Solutions to maximize your CRM success from day one.');
  }, []);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section
        className="relative"
        style={{
          height: '400px',
          backgroundImage: 'url(/images/zoho-apps-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="mx-auto relative z-10 h-full flex items-center px-6" style={{maxWidth: '1140px'}}>
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight mb-6 text-white">
              Start Your Zoho CRM Free Trial with Expert Guidance
            </h1>
            <p className="text-xl text-white mb-8">
              Don't waste your 15-day trial figuring it out alone. Get professional setup and strategic guidance from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto px-6 py-16" style={{maxWidth: '1140px'}}>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Trial Benefits */}
          <div style={{marginTop: '50px'}}>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Start Your Trial with Enable Solutions?</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Setup</h3>
                  <p className="text-gray-700">We'll configure your CRM properly from day one, ensuring you don't waste precious trial time on basic setup.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Strategic Guidance</h3>
                  <p className="text-gray-700">Our experts will align Zoho CRM with your specific business processes and sales methodology.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Team Training</h3>
                  <p className="text-gray-700">We'll train your team on best practices, ensuring maximum adoption and ROI from the start.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Ongoing Support</h3>
                  <p className="text-gray-700">Continue receiving expert support throughout your trial and beyond with our comprehensive service packages.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Zoho Trial Form Card */}
          <div className="relative">
            {/* White Card Modal Style */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Sign up for your Free Trial Today!</h3>
              <p className="text-gray-600 mb-6 text-center">When you do, tag us as your Zoho partner to get FREE consulting services.</p>

              {/* Native Zoho Form */}
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6">
                <form
                  action='https://forms.zohopublic.com/enablellc/form/ZohoTrial/formperma/dSnbsdHpM3N-LHKxywOhzbIUt71CIHCflFPfLi833bo/htmlRecords/submit'
                  name='form'
                  method='POST'
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Add form validation logic here
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);

                    // Basic validation
                    const email = formData.get('Email') as string;
                    const firstName = formData.get('Name_First') as string;
                    const lastName = formData.get('Name_Last') as string;
                    const phone = formData.get('PhoneNumber_countrycode') as string;
                    const terms = formData.get('DecisionBox');

                    if (!email || !firstName || !lastName) {
                      alert('Please fill in all required fields.');
                      return;
                    }

                    if (!terms) {
                      alert('Please agree to the Terms of service and Privacy Policy.');
                      return;
                    }

                    // Submit form
                    form.submit();
                  }}
                  acceptCharset='UTF-8'
                  encType='multipart/form-data'
                  id='zoho-trial-form'
                  className="space-y-4"
                >
                  <input type="hidden" name="zf_referrer_name" value="" />
                  <input type="hidden" name="zf_redirect_url" value="" />
                  <input type="hidden" name="zc_gad" value="" />

                  {/* Email Field */}
                  <div className="mb-4">
                    <input
                      type="email"
                      name="Email"
                      required
                      maxLength={255}
                      placeholder="Business Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <input
                      type="text"
                      name="Name_First"
                      required
                      maxLength={255}
                      placeholder="First Name"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="text"
                      name="Name_Last"
                      required
                      maxLength={255}
                      placeholder="Last Name"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Phone Field - Positioned higher with reduced margin */}
                  <div className="mb-3">
                    <input
                      type="tel"
                      name="PhoneNumber_countrycode"
                      maxLength={20}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-2 mb-4">
                    <input
                      type="checkbox"
                      name="DecisionBox"
                      id="DecisionBox"
                      required
                      className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="DecisionBox" className="text-sm text-gray-700 leading-5">
                      I agree to the Terms of service and Privacy Policy
                    </label>
                  </div>

                  {/* Submit Button - Reduced bottom margin */}
                  <div className="mb-2">
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors text-lg"
                    >
                      Start My Free Trial
                    </button>
                  </div>
                </form>
              </div>

              <p className="text-sm text-gray-600 mt-4 text-center">
                We'll contact you within 24 hours to schedule your setup session.
              </p>
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="bg-white p-8 rounded-xl border border-gray-200 mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">What's Included in Your Guided Trial</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Complete Setup</h3>
              <p className="text-gray-600">We'll configure your Zoho CRM with your business processes, custom fields, and integrations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Team Training</h3>
              <p className="text-gray-600">Live training sessions for your team on Zoho CRM best practices and daily workflows.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Direct access to our Zoho experts throughout your trial period via email and phone.</p>
            </div>
          </div>
        </div>

        {/* Why Zoho CRM Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Why Zoho CRM?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Powerful Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lead and contact management
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sales pipeline automation
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics and reporting
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email integration and automation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Affordable Excellence</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Starting at $12/user/month
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No setup fees
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free mobile apps
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-green-50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Transform Your Sales Process?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Don't waste your free trial period. Get expert guidance from day one and see real results faster.
          </p>
          <button className="bg-green-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-green-600 transition-colors text-lg">
            Start Your Guided Trial Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default ZohoCrmFreeTrial;