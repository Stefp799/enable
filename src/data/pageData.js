// Enable.llc Page Data Objects
// Following the object-driven approach from DR Vacations documentation

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

// Example: Services Page Data
export const servicesPageData = {
  hero: {
    title: "Services",
    subtitle: "Practical Zoho solutions, built to fit your business and scale with your team.",
    description: "",
    ctaText: "Schedule Free Consultation",
    backgroundImage: "/images/Web-Development-Hero.jpg"
  },
  article: {
    sections: [
      {
        heading: "",
        content: "From first-time CRM setups to full ERP integrations, our services cover the core Zoho projects that drive adoption, automation, and growth. We help businesses implement Zoho the right way — fast, focused, and built to last. Every project starts with your process, not just the software. Explore our core services below.",
        type: "text"
      },
      {
        heading: "Zoho Consulting",
        content: "Not sure where to start? Our consulting sessions map your sales, service, and finance workflows against Zoho's ecosystem. You'll get a clear plan for what to implement, what to ignore, and how to phase your rollout.",
        type: "text"
      },
      {
        heading: "Zoho Implementation",
        content: "We don't just \"set up\" Zoho — we implement it with your real business in mind. From CRM to automation, we configure the tools, migrate your data, and train your team so adoption sticks.",
        type: "text"
      },
      {
        heading: "CRM & ERP Integration",
        content: "Your CRM shouldn't live in a silo. We connect Zoho to finance, operations, and third-party systems so data flows seamlessly. No more double entry, no more broken reports.",
        type: "text"
      },
      {
        heading: "Zoho Apps We Implement",
        content: "Zoho offers dozens of apps — but you don't need them all. We focus on the handful that deliver results: CRM, Creator, Bigin, Desk, Finance, and Analytics. Everything you need, nothing you don't.",
        type: "text"
      },
      {
        heading: "Packages",
        content: "Want a simple way to engage us? Our subscription packages give you predictable pricing and ongoing support. Choose Starter, Growth, or Enterprise based on your needs — each includes implementation, training, and updates.",
        type: "text"
      },
      {
        heading: "Why Enable?",
        content: "Most partners just resell Zoho. We deliver outcomes: cleaner pipelines, faster reporting, and systems your team actually uses. That's the difference.",
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
    title: "Zoho Services | Enable Solutions",
    description: "Practical Zoho solutions for business growth. Consulting, implementation, CRM/ERP integration, and subscription packages.",
    keywords: ["zoho services", "zoho consulting", "zoho implementation", "crm integration", "erp integration"]
  }
};

// Example: About Page Data
export const aboutPageData = {
  hero: {
    title: "About Enable Solutions",
    subtitle: "Empowering Businesses Through Technology",
    description: "Founded in 2018, Enable Solutions has helped over 500 businesses streamline operations and accelerate growth through strategic technology implementations.",
    ctaText: "Meet Our Team",
    backgroundImage: "/images/about-hero-bg.jpg"
  },
  article: {
    sections: [
      {
        heading: "Our Mission",
        content: "To bridge the gap between complex technology and business success by providing tailored solutions that actually work for real businesses.",
        type: "text"
      },
      {
        heading: "Why Businesses Choose Us",
        content: [
          "Certified Zoho Partner with proven expertise",
          "Focus on ROI and measurable business outcomes",
          "Comprehensive training and ongoing support",
          "Custom solutions, not one-size-fits-all approaches"
        ],
        type: "list"
      }
    ]
  },
  seo: {
    title: "About Enable Solutions | Zoho Implementation Experts",
    description: "Learn about Enable Solutions' mission to help businesses succeed through strategic Zoho implementations and automation.",
    keywords: ["enable solutions", "zoho partner", "business automation", "crm consulting"]
  }
};

// Page data registry - easy to add new pages
export const pages = {
  services: servicesPageData,
  about: aboutPageData
  // Add more pages here following the same pattern
};