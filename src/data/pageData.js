// Enable.llc Page Data Objects
// Following the object-driven approach from DR Vacations documentation

// Interactive Accordion Data - 5 Enable Services
export const enableServicesAccordion = [
  {
    id: "consulting",
    title: "Zoho Consulting",
    subtitle: "Strategic Planning & Roadmaps",
    description: "Not sure where to start? Our consulting sessions map your sales, service, and finance workflows against Zoho's ecosystem. You'll get a clear plan for what to implement, what to ignore, and how to phase your rollout.",
    color: "#1e40af", // Blue
    backgroundImage: "/images/consulting-bg.jpg"
  },
  {
    id: "implementation",
    title: "Zoho Implementation",
    subtitle: "Full Setup & Configuration",
    description: "We don't just 'set up' Zoho — we implement it with your real business in mind. From CRM to automation, we configure the tools, migrate your data, and train your team so adoption sticks.",
    color: "#059669", // Green
    backgroundImage: "/images/implementation-bg.jpg"
  },
  {
    id: "integration",
    title: "CRM & ERP Integration",
    subtitle: "Seamless Data Flow",
    description: "Your CRM shouldn't live in a silo. We connect Zoho to finance, operations, and third-party systems so data flows seamlessly. No more double entry, no more broken reports.",
    color: "#dc2626", // Red
    backgroundImage: "/images/integration-bg.jpg"
  },
  {
    id: "apps",
    title: "Zoho Apps Focus",
    subtitle: "The Right Tools Only",
    description: "Zoho offers dozens of apps — but you don't need them all. We focus on the handful that deliver results: CRM, Creator, Bigin, Desk, Finance, and Analytics. Everything you need, nothing you don't.",
    color: "#7c3aed", // Purple
    backgroundImage: "/images/apps-bg.jpg"
  },
  {
    id: "packages",
    title: "Support Packages",
    subtitle: "Ongoing Partnership",
    description: "Want a simple way to engage us? Our subscription packages give you predictable pricing and ongoing support. Choose Starter, Growth, or Enterprise based on your needs — each includes implementation, training, and updates.",
    color: "#ea580c", // Orange
    backgroundImage: "/images/packages-bg.jpg"
  }
];

export const pageTemplates = {
  // Hero + Article Page Template
  heroArticlePage: {
    hero: {
      title: "",
      subtitle: "",
      description: "",
      ctaText: "",
      backgroundImage: "",
      backgroundVideo: ""
    },
    article: {
      sections: [
        {
          heading: "",
          content: "",
          type: "text" // text, image, list, quote
        }
      ]
    },
    seo: {
      title: "",
      description: "",
      keywords: []
    }
  }
};

// Services Page Data - Updated with WordPress Content
export const servicesPageData = {
  hero: {
    title: "Our Zoho Services: Consulting, Implementation & Integration",
    subtitle: "",
    description: "",
    ctaText: "Get Started Today",
    backgroundImage: "/images/Web-Development-Hero.jpg"
  },
  article: {
    sections: [
      {
        heading: "Practical Zoho solutions, built to fit your business and scale with your team.",
        content: "From first-time CRM setups to full ERP integrations, our services cover the core Zoho projects that drive adoption, automation, and growth. We help businesses implement Zoho the right way — fast, focused, and built to last. Every project starts with your process, not just the software. Explore our core services below.",
        type: "text"
      },
      {
        heading: "Zoho Consulting",
        content: "Not sure where to start? Our consulting sessions map your sales, service, and finance workflows against Zoho's ecosystem. You'll get a clear plan for what to implement, what to ignore, and how to phase your rollout.\nLearn More",
        type: "text"
      },
      {
        heading: "Zoho Implementation",
        content: "We don't just \"set up\" Zoho — we implement it with your real business in mind. From CRM to automation, we configure the tools, migrate your data, and train your team so adoption sticks.\nLearn More",
        type: "text"
      },
      {
        heading: "CRM & ERP Integration",
        content: "Your CRM shouldn't live in a silo. We connect Zoho to finance, operations, and third-party systems so data flows seamlessly. No more double entry, no more broken reports.\nLearn More",
        type: "text"
      },
      {
        heading: "Zoho Apps We Implement",
        content: "Zoho offers dozens of apps — but you don't need them all. We focus on the handful that deliver results: CRM, Creator, Bigin, Desk, Finance, and Analytics. Everything you need, nothing you don't.\nLearn More",
        type: "text"
      },
      {
        heading: "Packages",
        content: "Want a simple way to engage us? Our subscription packages give you predictable pricing and ongoing support. Choose Starter, Growth, or Enterprise based on your needs — each includes implementation, training, and updates.\nLearn More",
        type: "text"
      },
      {
        heading: "Why Enable?",
        content: "Most partners just resell Zoho. We deliver outcomes: cleaner pipelines, faster reporting, and systems your team actually uses. That's the difference.\nLearn More",
        type: "text"
      },
      {
        heading: "Frequently Asked Questions",
        content: `
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Q: What services does Enable provide?</h4>
              <p class="text-gray-700">A: We focus on Zoho consulting, implementation, CRM/ERP integration, and subscription packages. Each service is designed to streamline operations and improve adoption.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Q: How do I know which service is right for me?</h4>
              <p class="text-gray-700">A: Most clients start with consulting to define a roadmap, then move into implementation. If you already have Zoho in place, integration or packages may be the better entry point.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Q: Can I combine multiple services?</h4>
              <p class="text-gray-700">A: Yes. Services are modular but designed to work together. Many clients blend consulting + implementation, then add integration and packages as their system matures.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Q: Do you offer fixed pricing?</h4>
              <p class="text-gray-700">A: Yes. Our subscription packages give predictable monthly pricing with clear deliverables, while standalone services can be scoped project by project.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Q: What makes Enable different from other Zoho partners?</h4>
              <p class="text-gray-700">A: We don't resell every Zoho app. We focus on the ones that deliver real outcomes, and we implement them with your business process in mind — not just the software.</p>
            </div>
          </div>
        `,
        type: "html"
      }
    ]
  },
  seo: {
    title: "Our Zoho Services: Consulting, Implementation & Integration | Enable Solutions",
    description: "Expert Zoho consulting, implementation, and integration services. Transform your business operations with strategic Zoho solutions tailored to your needs.",
    keywords: ["zoho services", "zoho consulting", "zoho implementation", "crm integration", "erp integration", "zoho partner", "business automation"]
  }
};

// Homepage Data - Migrated from WordPress
export const homePageData = {
  hero: {
    title: "Zoho Consulting Partner & CRM-AI Integration Experts",
    subtitle: "Drive Business Growth with Tailored Zoho Solutions",
    description: "Enable Solutions helps small to mid-sized businesses transform complex tasks into simple ones. Our Zoho consulting and CRM AI integration specialists strengthen forecasting, data control, and automation.",
    ctaText: "Start Your Transformation",
    backgroundImage: "/images/digital-transformation-hero.jpg"
  },
  article: {
    sections: [
      {
        heading: "Problems We Solve",
        content: "Stop struggling with pipeline chaos, reporting blind spots, and broken integrations. Our proven approach transforms operational challenges into competitive advantages through strategic Zoho implementation.",
        type: "text"
      },
      {
        heading: "Our Core Capabilities",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div class="border-l-4 border-blue-500 pl-6">
              <h4 class="font-bold text-xl mb-2">Digital Transformation</h4>
              <p class="text-gray-700">Radically altering your operational methods and delivering enhanced value to customers through strategic technology adoption.</p>
            </div>
            <div class="border-l-4 border-green-500 pl-6">
              <h4 class="font-bold text-xl mb-2">Intelligent Workflow</h4>
              <p class="text-gray-700">Combining analytics, artificial intelligence (AI), machine learning, and automation to optimize your business processes.</p>
            </div>
            <div class="border-l-4 border-purple-500 pl-6">
              <h4 class="font-bold text-xl mb-2">Zoho Consulting</h4>
              <p class="text-gray-700">Creating tailored systems aligning perfectly with your business needs and operational requirements.</p>
            </div>
            <div class="border-l-4 border-red-500 pl-6">
              <h4 class="font-bold text-xl mb-2">Data Driven</h4>
              <p class="text-gray-700">Driving real-time decision-making by utilizing data efficiently across your entire organization.</p>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Proven Results",
        content: `
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center my-8">
            <div class="bg-blue-50 p-6 rounded-lg">
              <div class="text-3xl font-bold text-blue-600">100</div>
              <div class="text-sm text-gray-600">Custom Portals Created</div>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <div class="text-3xl font-bold text-green-600">300</div>
              <div class="text-sm text-gray-600">Projects Implemented</div>
            </div>
            <div class="bg-purple-50 p-6 rounded-lg">
              <div class="text-3xl font-bold text-purple-600">2,000</div>
              <div class="text-sm text-gray-600">APIs Built</div>
            </div>
            <div class="bg-red-50 p-6 rounded-lg">
              <div class="text-3xl font-bold text-red-600">10,000</div>
              <div class="text-sm text-gray-600">Workflows Integrated</div>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "What Our Clients Say",
        content: `
          <div class="space-y-6 my-8">
            <blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700">
              <p class="mb-2">"We chose Zoho because it was part of a single ecosystem."</p>
              <footer class="text-sm font-semibold">— Steve, Managing Partner</footer>
            </blockquote>
            <blockquote class="border-l-4 border-green-500 pl-6 italic text-gray-700">
              <p class="mb-2">"We can now track all service requests for these life-saving medical devices."</p>
              <footer class="text-sm font-semibold">— Patrick, Owner</footer>
            </blockquote>
            <blockquote class="border-l-4 border-purple-500 pl-6 italic text-gray-700">
              <p class="mb-2">"I can open up the dashboard and see how many opportunities we have in the business."</p>
              <footer class="text-sm font-semibold">— Jacqui, CEO</footer>
            </blockquote>
          </div>
        `,
        type: "html"
      }
    ]
  },
  seo: {
    title: "Zoho Consulting Partner & CRM-AI Integration Experts | Enable Solutions",
    description: "Transform complex business tasks into simple ones with our Zoho consulting and CRM AI integration services. Strengthen forecasting, data control, and automation.",
    keywords: ["zoho consulting", "crm ai integration", "digital transformation", "business automation", "zoho partner"]
  }
};

// About Page Data - Enhanced with WordPress Content
export const aboutPageData = {
  hero: {
    title: "About Enable Solutions",
    subtitle: "Transforming Complex Tasks Into Simple Ones",
    description: "Located in Milford, MA, Enable Solutions specializes in helping small to mid-sized businesses achieve operational excellence through strategic Zoho implementations.",
    ctaText: "Get In Touch",
    backgroundImage: "/images/about-hero-bg.jpg"
  },
  article: {
    sections: [
      {
        heading: "Our Mission",
        content: "Help small to mid-sized businesses transform complex tasks into simple ones by strengthening forecasting, data control, and automation through tailored Zoho solutions that align perfectly with your business needs.",
        type: "text"
      },
      {
        heading: "Company Information",
        content: `
          <div class="bg-gray-50 p-6 rounded-lg my-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-lg mb-2">Location</h4>
                <p class="text-gray-700">11 Temple St<br>Milford, MA 01757<br>United States</p>
              </div>
              <div>
                <h4 class="font-semibold text-lg mb-2">Contact</h4>
                <p class="text-gray-700">Phone: +1 (774) 213-1092<br>Web: enable.llc</p>
              </div>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Why Businesses Choose Enable Solutions",
        content: [
          "Certified Zoho Partner with specialized expertise",
          "Focus on measurable business outcomes and ROI",
          "Proven track record with 300+ successful implementations",
          "Comprehensive approach combining consulting, implementation, and support",
          "Custom solutions tailored to your specific industry and needs",
          "Ongoing partnership with flexible support packages"
        ],
        type: "list"
      },
      {
        heading: "Our Achievements",
        content: "With a proven track record of success, Enable Solutions has delivered transformational results across hundreds of businesses. Our achievements include 100 custom portals created, 300 projects implemented, 2,000 APIs built, and 10,000 workflows integrated.",
        type: "text"
      },
      {
        heading: "Connect With Us",
        content: `
          <div class="flex flex-wrap gap-4 mt-6">
            <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Twitter @EnableSolution</a>
            <a href="#" class="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">Facebook enablesolutionsllc</a>
            <a href="#" class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">LinkedIn EnableLLC</a>
            <a href="#" class="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Instagram enablesolutions</a>
            <a href="#" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">YouTube Channel</a>
          </div>
        `,
        type: "html"
      }
    ]
  },
  seo: {
    title: "About Enable Solutions | Zoho Consulting Partner in Milford, MA",
    description: "Learn about Enable Solutions' mission to help small and mid-sized businesses transform complex tasks into simple ones through strategic Zoho implementations.",
    keywords: ["enable solutions", "zoho partner", "milford ma", "business consulting", "crm consulting", "digital transformation"]
  }
};

// Zoho Consulting Page Data - Migrated from WordPress
export const zohoConsultingPageData = {
  hero: {
    title: "Zoho Consulting Partner for Businesses That Need Results, Not Shelfware",
    subtitle: "We help companies turn Zoho into a system their teams actually use",
    description: "Strategic Zoho consulting focused on user adoption, workflow optimization, and measurable business outcomes.",
    ctaText: "Schedule a Consultation",
    backgroundImage: "/images/zoho-consulting-hero.jpg"
  },
  article: {
    sections: [
      {
        heading: "Why Zoho Consulting Matters",
        content: "Most Zoho implementations fail because of low user adoption, license waste, disconnected processes, and unclear ROI. Our consulting approach addresses these core challenges by focusing on your business processes first, then configuring Zoho to support them.",
        type: "text"
      },
      {
        heading: "Our Consulting Coverage",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-lg mb-3 text-blue-600">Workflow Mapping</h4>
              <p class="text-gray-700">Document current processes and identify optimization opportunities before any technical implementation begins.</p>
            </div>
            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-lg mb-3 text-green-600">System Audit</h4>
              <p class="text-gray-700">Comprehensive review of existing Zoho setup, identifying gaps, redundancies, and improvement areas.</p>
            </div>
            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-lg mb-3 text-purple-600">Roadmap Creation</h4>
              <p class="text-gray-700">Strategic implementation plan with phases, timelines, and resource requirements for sustainable growth.</p>
            </div>
            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-lg mb-3 text-red-600">Change Management</h4>
              <p class="text-gray-700">User adoption strategies, training plans, and ongoing support structures to ensure long-term success.</p>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Domain-Specific Consulting",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div class="bg-blue-50 p-4 rounded-lg text-center">
              <h4 class="font-semibold text-blue-800 mb-2">Zoho CRM</h4>
              <p class="text-sm text-blue-700">Sales process optimization</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg text-center">
              <h4 class="font-semibold text-green-800 mb-2">Zoho Finance & ERP</h4>
              <p class="text-sm text-green-700">Financial workflow integration</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg text-center">
              <h4 class="font-semibold text-purple-800 mb-2">Zoho Creator</h4>
              <p class="text-sm text-purple-700">Custom application development</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg text-center">
              <h4 class="font-semibold text-yellow-800 mb-2">Zoho Analytics</h4>
              <p class="text-sm text-yellow-700">Business intelligence setup</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg text-center">
              <h4 class="font-semibold text-indigo-800 mb-2">Zoho Desk & Service</h4>
              <p class="text-sm text-indigo-700">Customer support optimization</p>
            </div>
            <div class="bg-pink-50 p-4 rounded-lg text-center">
              <h4 class="font-semibold text-pink-800 mb-2">Zoho Campaigns</h4>
              <p class="text-sm text-pink-700">Marketing automation strategy</p>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Consulting Deliverables",
        content: [
          "Comprehensive workflow documentation with current and future state mapping",
          "Detailed system audit report with prioritized recommendations",
          "Strategic implementation roadmap with phases and timelines",
          "Budget recommendations with ROI projections",
          "Comprehensive training plan tailored to user roles",
          "Change management strategy for sustainable adoption"
        ],
        type: "list"
      },
      {
        heading: "Case Study: Manufacturing Client Success",
        content: `
          <div class="bg-gray-50 border-l-4 border-blue-500 p-6 my-8">
            <h4 class="font-bold text-lg mb-4">70% CRM Adoption in 60 Days</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h5 class="font-semibold text-red-600 mb-2">Problem</h5>
                <p class="text-gray-700">Manufacturing client had low CRM adoption with sales team avoiding the system entirely.</p>
              </div>
              <div>
                <h5 class="font-semibold text-blue-600 mb-2">Solution</h5>
                <p class="text-gray-700">2-week consulting sprint focused on workflow mapping and user-centric configuration.</p>
              </div>
              <div>
                <h5 class="font-semibold text-green-600 mb-2">Result</h5>
                <p class="text-gray-700">70% team adoption within 60 days, with improved pipeline visibility and forecasting accuracy.</p>
              </div>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Frequently Asked Questions",
        content: `
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">How long does Zoho consulting typically take?</h4>
              <p class="text-gray-700">Consulting engagements range from 1-2 weeks for focused audits to 6-8 weeks for comprehensive transformation projects. We tailor the timeline to your specific needs and complexity.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">What are the typical consulting costs?</h4>
              <p class="text-gray-700">Consulting is priced based on scope and duration. We offer fixed-price packages for standard audits and custom pricing for complex transformations. All projects include detailed ROI projections.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Can you fix a failed Zoho implementation?</h4>
              <p class="text-gray-700">Yes, we specialize in rescue projects. Our approach includes comprehensive audit, user feedback sessions, and strategic redesign focused on adoption and business value.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Do you provide training as part of consulting?</h4>
              <p class="text-gray-700">Training is included in all consulting engagements. We provide role-based training, documentation, and ongoing support to ensure successful user adoption across your organization.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Can you integrate Zoho with our existing systems during consulting?</h4>
              <p class="text-gray-700">Integration planning is a core part of our consulting process. We assess current systems, design integration architecture, and can implement connections as part of the overall project.</p>
            </div>
          </div>
        `,
        type: "html"
      }
    ]
  },
  seo: {
    title: "Zoho Consulting Partner | Strategic Business Process Optimization",
    description: "Expert Zoho consulting focused on user adoption and business results. Transform your Zoho investment into a system your team actually uses.",
    keywords: ["zoho consulting", "business process optimization", "user adoption", "zoho implementation", "workflow mapping", "system audit"]
  }
};

// Zoho Developer Page Data - Migrated from WordPress
export const zohoDeveloperPageData = {
  hero: {
    title: "Zoho Development Services for Manufacturing Companies",
    subtitle: "Custom Zoho solutions built for production environments",
    description: "Enable LLC specializes in Zoho implementations for manufacturing companies with 90-day deployment cycles and zero production disruption.",
    ctaText: "Discuss Your Project",
    backgroundImage: "/images/zoho-development-hero.jpg"
  },
  article: {
    sections: [
      {
        heading: "Manufacturing-Focused Development",
        content: "Our Zoho development services are specifically designed for manufacturing environments, including production scheduling integration, inventory control systems, quality management workflows, supply chain automation, and customer communication systems.",
        type: "text"
      },
      {
        heading: "Core Development Capabilities",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div class="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 class="font-bold text-lg mb-3 text-blue-700">ERP & MRP Integration</h4>
              <p class="text-gray-700">Seamless integration with existing production systems and material planning resources.</p>
            </div>
            <div class="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h4 class="font-bold text-lg mb-3 text-green-700">Real-time Inventory</h4>
              <p class="text-gray-700">Live inventory tracking and management across multiple locations and production lines.</p>
            </div>
            <div class="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h4 class="font-bold text-lg mb-3 text-purple-700">Multi-Plant Sync</h4>
              <p class="text-gray-700">Synchronized data across multiple manufacturing facilities and production sites.</p>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Development Approach",
        content: "Our unique 90-day deployment cycle ensures no-disruption workflow integration with secure backup protocols and scalable communication systems. Every implementation is designed to integrate seamlessly with your existing production environment.",
        type: "text"
      },
      {
        heading: "Critical Evaluation Criteria",
        content: [
          "Data Visibility Management - Real-time access to production data",
          "Email Reliability - Consistent communication across teams",
          "Data Backup/Recovery - Comprehensive protection protocols",
          "Shop Floor Alerting - Instant notifications for critical events",
          "Module Customization - Tailored solutions for specific processes"
        ],
        type: "list"
      },
      {
        heading: "Investment and Risk Management",
        content: `
          <div class="bg-gray-50 border-l-4 border-orange-500 p-6 my-8">
            <h4 class="font-bold text-lg mb-4">Project Investment Range</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 class="font-semibold text-orange-600 mb-2">Typical Range</h5>
                <p class="text-gray-700">$50,000 - $200,000 depending on integration complexity and customization requirements.</p>
              </div>
              <div>
                <h5 class="font-semibold text-red-600 mb-2">Risk Mitigation</h5>
                <p class="text-gray-700">Avoid generic CRM templates, workflow disruption, and potential production line stoppage through careful planning.</p>
              </div>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Frequently Asked Questions",
        content: `
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Why do manufacturing companies need specialized Zoho developers?</h4>
              <p class="text-gray-700">Manufacturing environments have unique requirements including production scheduling, quality control, and supply chain management that generic implementations can't address effectively.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">What should I expect for implementation costs?</h4>
              <p class="text-gray-700">Projects typically range from $50K-$200K depending on complexity. We provide detailed cost projections after analyzing your specific manufacturing processes and integration requirements.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">How do you protect our data during development?</h4>
              <p class="text-gray-700">We implement comprehensive backup protocols, secure development environments, and staged deployment processes to ensure zero data loss and production continuity.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">What is your typical deployment timeline?</h4>
              <p class="text-gray-700">Our standard deployment cycle is 90 days, designed to ensure thorough testing and seamless integration without disrupting ongoing production operations.</p>
            </div>
          </div>
        `,
        type: "html"
      }
    ]
  },
  seo: {
    title: "Zoho Development Services for Manufacturing | Custom Solutions",
    description: "Specialized Zoho development for manufacturing companies. 90-day deployment cycles with zero production disruption. Custom ERP, inventory, and production integrations.",
    keywords: ["zoho development", "manufacturing software", "erp integration", "production management", "inventory control", "custom development"]
  }
};

// Zoho Apps Page Data - Migrated from WordPress
export const zohoAppsPageData = {
  hero: {
    title: "Zoho Apps We Implement",
    subtitle: "Configure and customize Zoho applications to solve your specific business problems",
    description: "We focus on the core Zoho apps that deliver real business value, with expert configuration, customization, and ongoing support.",
    ctaText: "See Our App Expertise",
    backgroundImage: "/images/zoho-apps.jpg"
  },
  article: {
    sections: [
      {
        heading: "Core Zoho Applications We Implement",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-xl mb-3 text-blue-600">Zoho CRM</h4>
              <p class="text-gray-700 mb-3">Organizes leads, tracks deals, and automates follow-up processes with custom workflows, dashboards, and automations.</p>
              <span class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Sales Management</span>
            </div>

            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-xl mb-3 text-green-600">Zoho Creator</h4>
              <p class="text-gray-700 mb-3">Build custom applications without heavy coding for project tracking, approval workflows, and unique business processes.</p>
              <span class="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">Custom Development</span>
            </div>

            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-xl mb-3 text-purple-600">Zoho Bigin</h4>
              <p class="text-gray-700 mb-3">Lightweight pipeline tool perfect for small teams, startups, and focused sales groups needing simple deal tracking.</p>
              <span class="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Small Team CRM</span>
            </div>

            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-xl mb-3 text-orange-600">Zoho Finance Suite</h4>
              <p class="text-gray-700 mb-3">Includes Books, Invoice, and Inventory to sync quotes, invoices, and payments seamlessly with your CRM system.</p>
              <span class="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Financial Management</span>
            </div>

            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-xl mb-3 text-indigo-600">Zoho One</h4>
              <p class="text-gray-700 mb-3">Central platform streamlining sales, marketing, and customer support across 45+ integrated Zoho applications.</p>
              <span class="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Complete Suite</span>
            </div>

            <div class="border border-gray-200 p-6 rounded-lg">
              <h4 class="font-bold text-xl mb-3 text-pink-600">Zoho Campaigns & Marketing</h4>
              <p class="text-gray-700 mb-3">Email campaigns and marketing automation tools designed to drive growth through targeted, measurable campaigns.</p>
              <span class="text-sm bg-pink-100 text-pink-800 px-3 py-1 rounded-full">Marketing Automation</span>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Our Implementation Approach",
        content: "We don't just install Zoho apps—we simplify complex systems, design analytics dashboards with real insights, and provide comprehensive training and ongoing support to ensure your team gets maximum value from every application.",
        type: "text"
      },
      {
        heading: "Getting Started with Zoho Apps",
        content: `
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h4 class="font-bold text-lg mb-4">Recommended Starting Point</h4>
            <p class="text-gray-700 mb-4">Most businesses begin with these three core applications:</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="text-center p-4 bg-white rounded">
                <h5 class="font-semibold text-blue-600">Zoho CRM</h5>
                <p class="text-sm text-gray-600">Lead and deal management</p>
              </div>
              <div class="text-center p-4 bg-white rounded">
                <h5 class="font-semibold text-green-600">Zoho Finance</h5>
                <p class="text-sm text-gray-600">Invoicing and accounting</p>
              </div>
              <div class="text-center p-4 bg-white rounded">
                <h5 class="font-semibold text-purple-600">Zoho Desk</h5>
                <p class="text-sm text-gray-600">Customer support</p>
              </div>
            </div>
          </div>
        `,
        type: "html"
      },
      {
        heading: "Frequently Asked Questions",
        content: `
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Which Zoho apps should my business start with?</h4>
              <p class="text-gray-700">Most businesses start with CRM, Finance (Books), and Desk applications. This provides a solid foundation for sales, accounting, and customer support operations.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Do you take a flexible implementation approach?</h4>
              <p class="text-gray-700">Absolutely. We customize our implementation approach based on your business needs, starting with core applications and expanding as your team adopts and grows comfortable with the system.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Can Zoho apps integrate with non-Zoho tools?</h4>
              <p class="text-gray-700">Yes, we specialize in integrating Zoho apps with your existing business systems, including accounting software, marketing platforms, e-commerce solutions, and custom applications.</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h4 class="font-semibold text-lg mb-2">Is training included with app implementations?</h4>
              <p class="text-gray-700">Comprehensive training is included with all our app implementations. We provide role-based training, documentation, and ongoing support to ensure successful adoption across your team.</p>
            </div>
          </div>
        `,
        type: "html"
      }
    ]
  },
  seo: {
    title: "Zoho Apps Implementation | CRM, Finance, Creator & More",
    description: "Expert implementation of core Zoho applications including CRM, Finance Suite, Creator, and marketing tools. Custom configuration and comprehensive training included.",
    keywords: ["zoho apps", "zoho crm", "zoho creator", "zoho finance", "zoho bigin", "zoho one", "app implementation"]
  }
};

// Page data registry - easy to add new pages
export const pages = {
  home: homePageData,
  services: servicesPageData,
  about: aboutPageData,
  zohoConsulting: zohoConsultingPageData,
  zohoDeveloper: zohoDeveloperPageData,
  zohoApps: zohoAppsPageData
  // Add more pages here following the same pattern
};