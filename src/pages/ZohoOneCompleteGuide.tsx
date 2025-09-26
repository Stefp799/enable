import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const ZohoOneCompleteGuide: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://enable.llc/#org",
        "name": "Enable Solutions",
        "url": "https://enable.llc/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://enable.llc/images/Enable-Logo-v2.svg"
        },
        "sameAs": [
          "https://www.linkedin.com/company/EnableLLC",
          "https://x.com/EnableSolution",
          "https://www.youtube.com/@EnableSolution"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://enable.llc/#website",
        "url": "https://enable.llc/",
        "name": "Enable Solutions - Zoho Consulting",
        "publisher": { "@id": "https://enable.llc/#org" },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://enable.llc/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://enable.llc/zoho-apps/zoho-one-complete-guide/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Zoho Apps",
            "item": "https://enable.llc/zoho-apps/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Zoho One Applications: Complete Guide (A–Z)",
            "item": "https://enable.llc/zoho-apps/zoho-one-complete-guide/"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://enable.llc/zoho-apps/zoho-one-complete-guide/#webpage",
        "url": "https://enable.llc/zoho-apps/zoho-one-complete-guide/",
        "name": "Zoho One Applications: Complete Guide (A–Z)",
        "isPartOf": { "@id": "https://enable.llc/#website" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://enable.llc/images/zoho-apps-hero.png"
        },
        "breadcrumb": { "@id": "https://enable.llc/zoho-apps/zoho-one-complete-guide/#breadcrumbs" },
        "inLanguage": "en-US",
        "about": { "@id": "https://enable.llc/zoho-apps/zoho-one-complete-guide/#article" }
      },
      {
        "@type": "Article",
        "@id": "https://enable.llc/zoho-apps/zoho-one-complete-guide/#article",
        "headline": "Zoho One Applications: Complete Guide (A–Z)",
        "description": "Complete A-Z guide to all Zoho One applications. Detailed overview of 45+ business applications, features, integrations, and implementation strategies.",
        "image": [ "https://enable.llc/images/zoho-apps-hero.png" ],
        "author": {
          "@type": "Person",
          "name": "Enable Solutions Team",
          "@id": "https://enable.llc/#person"
        },
        "publisher": { "@id": "https://enable.llc/#org" },
        "mainEntityOfPage": { "@id": "https://enable.llc/zoho-apps/zoho-one-complete-guide/#webpage" },
        "datePublished": "2024-09-26",
        "dateModified": "2024-09-26",
        "articleSection": "Zoho Consulting",
        "keywords": ["Zoho One", "Business Software", "CRM", "ERP", "Implementation", "Consulting"],
        "wordCount": 3500,
        "inLanguage": "en-US",
        "about": {
          "@type": "Thing",
          "name": "Zoho One Business Suite",
          "description": "Comprehensive business software platform with 45+ integrated applications"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://enable.llc/zoho-apps/zoho-one-complete-guide/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which apps are included in Zoho One?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "45+ across CRM, Finance, HR, Ops, Marketing, Service, Productivity. This page lists them A–Z with use cases."
            }
          },
          {
            "@type": "Question",
            "name": "Zoho Projects vs Zoho Sprints — which should we use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Projects for waterfall/Gantt delivery; Sprints for agile dev/product. Hybrid teams often use both."
            }
          },
          {
            "@type": "Question",
            "name": "Does Zoho include e-signature?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Zoho Sign integrates with CRM/Writer/Books for proposals, orders, HR docs."
            }
          },
          {
            "@type": "Question",
            "name": "Is Zoho a QuickBooks replacement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zoho Books covers estimates, invoices, AR/AP, multi-entity, and integrates tightly with CRM/Inventory."
            }
          }
        ]
      }
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);

    document.title = 'Zoho One Applications: Complete Guide (A–Z) | Enable Solutions';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Complete A-Z guide to all Zoho One applications. Detailed overview of 45+ business applications, features, integrations, and implementation strategies.');

    // Scroll handling for scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.head.removeChild(script);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for sticky header height (approximately 80px)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
              Zoho One Applications: Complete Guide (A–Z)
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto px-6 py-16" style={{maxWidth: '1140px'}}>

        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            This is the definitive, human-readable directory of every app included in Zoho One. Use it to decide what to deploy now, what to trial later, and what to skip.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Start here if you're evaluating replacements for Slack, DocuSign, QuickBooks, Tableau, Calendly, etc.
          </p>
        </div>

        {/* Jump to Navigation */}
        <div className="mb-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Jump to an app</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
            {[
              'Analytics', 'Assist', 'Backstage', 'Bigin', 'Billing', 'Bookings', 'Books', 'Calendar',
              'Campaigns', 'Checkout', 'Cliq', 'Commerce', 'Connect', 'Contracts', 'Creator', 'CRM',
              'DataPrep', 'Desk', 'Expense', 'Flow', 'Forms', 'Inventory', 'Invoice', 'LandingPage',
              'Learn', 'Lens', 'Mail', 'Marketing Automation', 'Meeting', 'Notebook', 'PageSense', 'Payroll',
              'People', 'Projects', 'Recruit', 'SalesIQ', 'Sheet', 'Shifts', 'Show', 'Sign',
              'Sites', 'Social', 'Sprints', 'Survey', 'Tables', 'TeamInbox', 'Thrive', 'Vault',
              'WorkDrive', 'Writer', 'Zakya (POS)'
            ].map((app, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(app.toLowerCase().replace(/[^a-z0-9]/g, ''))}
                className="text-left text-blue-600 hover:text-blue-800 hover:underline p-1"
              >
                {app}
              </button>
            ))}
          </div>
        </div>

        {/* App Sections */}
        <div className="space-y-8">

          <div id="analytics" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Analytics</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Full BI/analytics (Tableau/Power BI class).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Cross-app dashboards, forecasts, exec scorecards, commissions.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Learning curve; heavy models need planning.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Books, Desk, Projects, WorkDrive, external DBs.</p>
          </div>

          <div id="assist" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Assist</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Remote support/control via link.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Basic IT/helpdesk sessions.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Lighter feature set (e.g., voice in-session).</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Desk; client launcher; browser extensions.</p>
          </div>

          <div id="backstage" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Backstage</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Event management/ticketing.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Conferences, paid events, badge printing.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Priced per event; fewer design themes than Eventbrite-like tools.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Books/Checkout for payments; CRM for attendees.</p>
          </div>

          <div id="bigin" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Bigin</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Lightweight pipeline CRM (mobile-first).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Simple pipelines; field reps.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Not a full CRM replacement for complex orgs.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Syncs with Zoho CRM.</p>
          </div>

          <div id="billing" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Billing</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Subscription/recurring billing.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> SaaS, memberships, usage plans.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Deep rating may require custom logic.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Books, CRM, Flow, Sign, Analytics.</p>
          </div>

          <div id="bookings" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Bookings</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Scheduling tool (Calendly-style).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Basic appointment intake.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Calendar intricacies may need testing.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Calendar, Mail.</p>
          </div>

          <div id="books" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Books</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Core accounting (QuickBooks/Xero class).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Estimates→Invoices, AR/AP, multi-entity rollups.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> 3rd-party payroll integrations vary by region.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM (quotes/invoices on deals), Inventory, Expense, Payroll, Analytics.</p>
          </div>

          <div id="calendar" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Calendar</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Business calendar with Streams.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Teams on Zoho Mail stack.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> If you're deep in Google/Outlook, stick there unless standardizing.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Mail, Bookings, Meeting, CRM.</p>
          </div>

          <div id="campaigns" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Campaigns</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Email marketing & newsletters.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Lists, segments, basic drips tied to CRM data.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Occasional template quirks; compare to MA below.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Analytics, Forms, PageSense.</p>
          </div>

          <div id="checkout" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Checkout</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Simple hosted payment pages.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Donations, one-off payments, quick pay links.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Limited API/theming/report depth.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Books, Billing, CRM (via Flow).</p>
          </div>

          <div id="cliq" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Cliq</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Team chat (Slack/Teams alternative).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Channels, DMs, calls, bots; easy Slack migration.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> If you require specific Slack-only apps, verify first.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Desk, Projects, Flow; broad bot hooks.</p>
          </div>

          <div id="commerce" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Commerce</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> E-commerce site/cart.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Catalogs tied to Inventory price lists (B2B/reseller tiers).</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Theming/extensions less extensive than Shopify.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Inventory, Books, CRM, Checkout.</p>
          </div>

          <div id="connect" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Connect</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Company intranet/community.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Wikis, town halls, internal groups.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Not a public web CMS.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> People (roles), SSO, WorkDrive.</p>
          </div>

          <div id="contracts" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Contracts</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> CLM—draft, negotiate, approve, execute.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Legal-heavy orgs needing clause libraries/approvals.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Overkill for small teams with simple MSAs.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Sign, Writer, CRM.</p>
          </div>

          <div id="creator" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Creator</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Low-code app builder.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Custom processes and extending native apps.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Don't rebuild what CRM/Desk/Projects already do well.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> All Zoho apps; REST; Deluge.</p>
          </div>

          <div id="crm" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho CRM</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Full CRM platform.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Pipelines, automations, CPQ, territory, journeys.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Advanced CPQ may need Creator/Writer/Sign combo.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Nearly everything in Zoho One + telephony.</p>
          </div>

          <div id="dataprep" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho DataPrep</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Data cleaning & pipelines.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Importing, normalizing, scheduled syncs into Zoho.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Very large/complex ETL → consider staged design.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Analytics, external DBs, Files.</p>
          </div>

          <div id="desk" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Desk</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Omnichannel ticketing/helpdesk.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Email/chat/phone tickets, SLAs, KB, CSAT.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Deep ITIL may require add-ons.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM (context on contacts), SalesIQ, Assist, Lens, Analytics.</p>
          </div>

          <div id="expense" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Expense</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Receipt capture & expense reports.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Sales teams, events travel, card feeds.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Advanced policy engines may need tuning.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Books (posting), People (policies), Analytics.</p>
          </div>

          <div id="flow" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Flow</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> No-code automation (Zapier-style).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Cross-app triggers/actions at lower cost.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Ultra-niche connectors: verify first.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Dozens of Zoho + external SaaS.</p>
          </div>

          <div id="forms" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Forms</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Form builder with direct writes.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Lead capture to CRM/Desk; internal requests.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Theming is practical, not flashy.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Desk, Campaigns, Analytics.</p>
          </div>

          <div id="inventory" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Inventory</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Inventory/Orders/Shipping.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Distributors, kitting, multi-channel sales.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Complex manufacturing flows → consider ERP alternatives.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Books, Commerce, CRM, Zakya, Shipping carriers.</p>
          </div>

          <div id="invoice" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Invoice</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Lightweight invoicing (subset of Books).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Solo/small teams not needing full accounting.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> If you use Books, use that instead.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Stripe/PayPal, CRM (via Flow).</p>
          </div>

          <div id="landingpage" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho LandingPage</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Visual landing-page builder.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Campaign pages with UTM capture.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Advanced components are growing; test templates.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Marketing Automation, Campaigns, Analytics.</p>
          </div>

          <div id="learn" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Learn</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> LMS + knowledge base.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Onboarding, SOPs, certs/quizzes by role.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Enterprise SCORM oddities—verify.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> People (assignments), Projects, CRM (contextual links).</p>
          </div>

          <div id="lens" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Lens</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> AR-style remote camera support.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Field troubleshooting, hardware installations.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Requires mobile adoption by end user.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Desk (launch sessions), Assist.</p>
          </div>

          <div id="mail" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Mail</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Business email with Streams.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Teams consolidating on Zoho stack.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> If you're deep in Google/Microsoft, migrate strategically.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Calendar, CRM (contextual), WorkDrive.</p>
          </div>

          <div id="marketingautomation" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Marketing Automation</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Behavior-driven marketing suite.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Journeys, web tracking, SMS/email, profile stitching.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Overlap with Campaigns; pick one primary.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Sites/LandingPage, SalesIQ, Analytics.</p>
          </div>

          <div id="meeting" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Meeting</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Video meetings/webinars.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Internal calls/webinars if quality suffices.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> AV stability varies—test your network.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Calendar, CRM (webinar leads), Campaigns.</p>
          </div>

          <div id="notebook" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Notebook</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Notes, cards, web clippers.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Team notes without a separate SaaS.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Hardcore Evernote power-features differ.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM (attach notes), WorkDrive.</p>
          </div>

          <div id="pagesense" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho PageSense</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> CRO suite—A/B testing, heat/scroll maps.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> On-site experiments tied to campaigns.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Occasionally finicky test setup—validate.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Sites, LandingPage, Campaigns, Analytics.</p>
          </div>

          <div id="payroll" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Payroll</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Payroll processing (region support varies).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Paying staff, filings, syncing to Books.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Benefits/401k admin may be limited; check locale.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Books, People.</p>
          </div>

          <div id="people" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho People</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> HRIS—profiles, time off, shifts, performance.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Full HR backbone tied to Projects/Payroll.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Configuration needs HR policy clarity.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Payroll, Projects (timesheets), Learn, Analytics.</p>
          </div>

          <div id="projects" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Projects</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Project management (waterfall/Gantt).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Delivery teams, templates, timesheets, utilization.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> If you're fully Agile, see Sprints.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM (auto-launch projects on won deals), People, Analytics.</p>
          </div>

          <div id="recruit" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Recruit</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> ATS—job postings, candidates, pipelines.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Staffing/recruiting, in-house TA teams.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> UI is dense; worth the payoff.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM (job creation on win), People, Analytics, Job boards.</p>
          </div>

          <div id="salesiq" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho SalesIQ</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Live chat, bots, visitor intel.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Lead capture, session tracking, proactive outreach.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Complex bot logic may need tuning.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM (lead creation), Desk, Campaigns, MA.</p>
          </div>

          <div id="sheet" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Sheet</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Spreadsheet with Deluge/macros.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Data ops inside WorkDrive + automations.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Excel purists—expect differences.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> WorkDrive, Analytics, CRM (linked files).</p>
          </div>

          <div id="shifts" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Shifts</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Shift scheduling/time.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Retail/field teams needing simple rosters.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Advanced labor rules may exceed scope.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> People, Payroll.</p>
          </div>

          <div id="show" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Show</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Presentations with live data embeds.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Decks that pull Analytics charts dynamically.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Template library smaller than Google/PowerPoint.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Analytics, WorkDrive.</p>
          </div>

          <div id="sign" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Sign</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> E-signature platform.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Quotes, contracts, onboarding packets.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Edge-case notarization/ID flows—verify.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Writer (merge→Sign), Books/Billing.</p>
          </div>

          <div id="sites" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Sites</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Basic website builder.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Simple microsites/subdomains.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Plugin ecosystem smaller than WordPress.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Forms, PageSense, CRM.</p>
          </div>

          <div id="social" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Social</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Social scheduling/analytics.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Multi-network calendars, approvals, lead forms → CRM.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Network API quirks apply to all vendors.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM (Meta lead ads), Campaigns.</p>
          </div>

          <div id="sprints" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Sprints</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Agile project management (Scrum/Kanban).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Dev/product teams sprinting.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> If you're waterfall PMO, use Projects.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Projects (hybrid), CRM (via Flow), Analytics.</p>
          </div>

          <div id="survey" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Survey</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Surveys/CSAT/NPS.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Post-delivery NPS tied to deals/accounts.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Some advanced logic/reporting—validate.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Campaigns/MA, Analytics.</p>
          </div>

          <div id="tables" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Tables</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Lightweight relational tables (Airtable-style).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Ops teams preferring grid UIs syncing back to CRM.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Newer product; fewer advanced blocks than Airtable.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Flow, Analytics.</p>
          </div>

          <div id="teaminbox" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho TeamInbox</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Shared inbox for teams.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Simple shared email without full helpdesk.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> If you need SLAs/KB, use Desk instead.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Mail, CRM (via Flow).</p>
          </div>

          <div id="thrive" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Thrive</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Affiliate/loyalty/referrals.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Managing partners, points, payouts.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Niche—ensure program fit.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM (partner contacts), Commerce/Books.</p>
          </div>

          <div id="vault" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Vault</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Enterprise password manager.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Shared creds, credit cards, API keys w/ audit.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Migrate from LastPass/1Password with plan.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> SSO, browser extensions, CLI.</p>
          </div>

          <div id="workdrive" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho WorkDrive</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Team file system (Drive/OneDrive class).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> Structured file governance tied to CRM/Projects.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> External sharing policies require setup.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Writer/Sheet/Show, CRM (auto folders), Sign.</p>
          </div>

          <div id="writer" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Writer</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Word processor + document automation.</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> CPQ proposals via merge → Sign; SOPs in WorkDrive.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Heavy Word macro parity differs.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> CRM, Sign, WorkDrive, Analytics (dynamic content).</p>
          </div>

          <div id="zakya" className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Zoho Zakya (POS)</h2>
            <p className="text-gray-700 mb-2"><strong>What it is:</strong> Point-of-sale (regional availability varies).</p>
            <p className="text-gray-700 mb-2"><strong>Best for:</strong> In-person retail tied to Inventory/Books.</p>
            <p className="text-gray-700 mb-2"><strong>Limits:</strong> Confirm hardware/locale support.</p>
            <p className="text-gray-700"><strong>Integrations:</strong> Inventory, Books, CRM (customers).</p>
          </div>
        </div>

        {/* Implementation Strategy */}
        <div className="mt-16 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to roll this out (practical path)</h2>
          <div className="space-y-3">
            <p className="text-gray-700"><strong>Core 4 first:</strong> CRM, Books, Desk, Projects (or Sprints).</p>
            <p className="text-gray-700"><strong>Replace costly point tools:</strong> Sign (DocuSign), Cliq (Slack), WorkDrive (Dropbox/Box), Expense (Concur).</p>
            <p className="text-gray-700"><strong>Add marketing layer:</strong> SalesIQ, MA/Campaigns, LandingPage, PageSense.</p>
            <p className="text-gray-700"><strong>Harden ops:</strong> Inventory/Commerce, People/Payroll, Creator extensions, Analytics dashboards.</p>
          </div>
        </div>

        {/* Green divider */}
        <div className="border-b-2 border-green-500 my-12"></div>

        {/* Frequently Asked Questions Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">FAQs (People Also Ask style)</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Which apps are included in Zoho One?</h3>
              <p className="text-gray-700">45+ across CRM, Finance, HR, Ops, Marketing, Service, Productivity. This page lists them A–Z with use cases.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Zoho Projects vs Zoho Sprints — which should we use?</h3>
              <p className="text-gray-700">Projects for waterfall/Gantt delivery; Sprints for agile dev/product. Hybrid teams often use both.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Does Zoho include e-signature?</h3>
              <p className="text-gray-700">Yes. Zoho Sign integrates with CRM/Writer/Books for proposals, orders, HR docs.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Is Zoho a QuickBooks replacement?</h3>
              <p className="text-gray-700">Zoho Books covers estimates, invoices, AR/AP, multi-entity, and integrates tightly with CRM/Inventory.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do I need Campaigns and Marketing Automation?</h3>
              <p className="text-gray-700">Pick one primary. Marketing Automation for journeys/tracking; Campaigns for simpler email lists.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can we keep Google Workspace or M365?</h3>
              <p className="text-gray-700">Yes. Many teams keep existing email/calendars while adopting Zoho One for CRM/Desk/Projects/Books.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Is there a website builder?</h3>
              <p className="text-gray-700">Zoho Sites exists for simple needs. For complex sites, WordPress remains the safer choice.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What if a Zoho app is "good, not great" for us?</h3>
              <p className="text-gray-700">Use the integrated apps where they clear the bar; keep niche tools where they matter. The platform value is unified data + lower cost.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 z-[9999]"
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '174px',
            right: '24px',
            zIndex: 9999
          }}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ZohoOneCompleteGuide;