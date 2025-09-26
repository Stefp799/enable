import React from 'react';
import Header from '../components/Header';

const ZohoApps: React.FC = () => {
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
              Zoho Apps We Implement
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto px-6 py-16" style={{maxWidth: '1140px'}}>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zoho CRM</h2>
          <p className="text-gray-700 mb-4">The heart of most implementations, Zoho CRM organizes leads, tracks deals, and automates follow-up. We tailor workflows, dashboards, and automations so your team spends less time on admin and more time closing.</p>
          <p className="text-blue-600 font-medium">Learn More</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zoho Creator</h2>
          <p className="text-gray-700 mb-4">When off-the-shelf tools don't fit, Creator lets us build custom apps without heavy coding. From project tracking to unique approval flows, we design Creator apps that extend your system without creating headaches.</p>
          <p className="text-blue-600 font-medium">Learn More</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zoho Bigin</h2>
          <p className="text-gray-700 mb-4">For small teams that need CRM without the complexity, Bigin is a lightweight pipeline tool. We set it up to give you clarity on deals, tasks, and follow-ups — perfect for startups or focused sales groups.</p>
          <p className="text-blue-600 font-medium">Learn More</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zoho Finance Suite</h2>
          <p className="text-gray-700 mb-4">Managing money across Zoho Books, Invoice, and Inventory can be tricky. We configure the finance apps so quotes, invoices, and payments sync cleanly with CRM, giving you a clear line of sight from sales to cash.</p>
          <p className="text-blue-600 font-medium">Learn More</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zoho One</h2>
          <p className="text-gray-700 mb-4">Zoho CRM is the cornerstone of Zoho One, acting as a central force that streamlines sales, marketing, and customer support for businesses. This powerful tool collaborates with over 45 other Zoho applications, simplifying the overall management of your business operations.</p>
          <p className="text-blue-600 font-medium">Learn More</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zoho Campaigns & Marketing Tools</h2>
          <p className="text-gray-700">From email campaigns to marketing automation, Zoho's marketing apps can drive real growth when properly connected to CRM. We make sure your campaigns are targeted, automated, and measurable.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Zoho Apps</h2>
          <p className="text-gray-700">From Projects to Sign to Flow, Zoho has dozens of specialized tools. We don't implement them all — only the ones that fit your process. Our job is to simplify, not overwhelm.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Enable</h2>
          <p className="text-gray-700">Reports and dashboards are only useful if they answer the right questions. We design Analytics dashboards that combine CRM, finance, and other data sources so leaders see real insights — not just pretty charts.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let's Talk About Your Zoho Needs</h2>
          <p className="text-gray-700 mb-4">Whether you need a full CRM rollout, a Creator app, or just a better dashboard, we can help. Let's start with a quick consultation to see what's right for you.</p>
          <p className="text-lg">👉 [Schedule a Meeting]</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Which Zoho apps do most businesses actually need?</h3>
              <p className="text-gray-700">A: Most of our clients start with Zoho CRM, Finance (Books, Invoice, Inventory), and Desk. These three cover sales, billing, and support. Other apps can be added as the business grows.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Can we start small and add more Zoho apps later?</h3>
              <p className="text-gray-700">A: Yes. Many businesses begin with just CRM and one or two other apps. As your team gets comfortable, we can extend your system with Creator, Analytics, or Campaigns.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Do you integrate Zoho apps with non-Zoho tools?</h3>
              <p className="text-gray-700">A: Absolutely. We connect Zoho to third-party systems like QuickBooks, Salesforce, and custom apps. Our goal is a single flow of data without double entry.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: Do you provide training and support?</h3>
              <p className="text-gray-700">A: Yes. Every implementation includes user training and documentation. For ongoing needs, our subscription packages cover updates, automation tuning, and support.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ZohoApps;