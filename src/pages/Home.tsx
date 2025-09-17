import Header from "../components/Header";
import Block from "../components/Block";
import { MarketingBlock, MarketingBlock1Style, MarketingBlock2Style, FullBleedDivider } from "../lib";

const zohoGallery = [
  { src: "/images/zoho-one-1.png", label: "Zoho One" },
  { src: "/images/zoho-iot.png", label: "Zoho IoT" },
  { src: "/images/zoho-crm.png", label: "Zoho CRM" },
  { src: "/images/zoho-creators.png", label: "Zoho Creator" },
  { src: "/images/zoho-bigin.png", label: "Zoho Bigin" },
  { src: "/images/crm-plus.png", label: "CRM Plus" },
  { src: "/images/landing-page.png", label: "Landing Page" },
  { src: "/images/zoho-one(1).png", label: "Zoho One" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <Header />

      {/* Hero - background image placeholder at /public/hero.jpg */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/Web-Development-Hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto px-6 pt-24 pb-28 text-white" style={{ maxWidth: "1260px" }}>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Zoho Consulting Partner & CRM-AI Integration Experts
            </h1>
            <p className="mt-4 font-montserrat-condensed text-white/90 leading-tight text-[16px] sm:text-[18px]">
              Drive Business Growth with Tailored Zoho Solutions
            </p>
            <p className="mt-4 font-montserrat-condensed text-white/90 leading-tight text-[16px] sm:text-[18px] max-w-3xl">
              Enable Solutions helps small to mid-sized businesses transform complex tasks into simple ones. Our Zoho consulting and CRM AI integration specialists strengthen forecasting, data control, and automation—driving solid growth and reliable outcomes for your operations.
            </p>
          </div>
        </div>
      </section>

      <MarketingBlock
        style={MarketingBlock1Style}
        content={{
          id: "problem-clarity",
          imageSrc: "/images/Challenges-in-Zoho-to-Salesforce-Migration.png",
          imageAlt: "Zoho Solutions placeholder",
          topLine:
            "We craft custom Zoho Solutions that add tremendous functionality to any aspect of your business.",
          heading: "Say goodbye to confusion and chaos choosing your CRM",
          body:
            "Are you spending countless hours researching CRM Solutions, only to feel more confused? Unsure who to trust and worried about making the wrong choice for your business?",
          line1: "We simplify every step for you to ensure a flawless outcome.",
          line2:
            "A Perfect Fit, Exceptional Code Quality, A Lasting and Durable Outcome - Guaranteed",
          ctaText: "Let Us Help You... Set Up a Visit",
          ctaHref: "#contact",
        }}
      />

      <MarketingBlock
        style={MarketingBlock2Style}
        imagePosition="right"
        content={{
          id: "mission-guidance",
          imageSrc: "/images/2-The-Future-of-Smart-Manufacturing-How-IoT-is-Revolutionizing-Production-Efficiency-3.png",
          imageAlt: "Placeholder image",
          topLine:
            "Is that is how you feel about your data and CRM stack? At Enable.llc, our mission is to deliver the perfect solution to meet that new vision.",
          heading: "We understand that creating the right vision and outcome involves lots of decisions.",
          body:
            "From choosing the right Zoho Consultant to selecting the perfect Software Solution every choice matters. It can feel overwhelming to navigate through all the options and ensure you're making the best decisions for your company. But fear not, we're here to guide you through every step of the process.",
          line1:
            "We've helped many Business Owners like you turn their visions into reality.",
          line2:
            "By collaborating closely with your team, we ensure the solution reflects your processes and goals — end to end.",
          ctaText: "Get Guidance",
          ctaHref: "#contact",
        }}
      />

      <FullBleedDivider
        id="projects-divider"
        bgClass="bg-white"
        eyebrow="Our weapons of choice."
        heading="Expert Coding For Every Aspect of Your Business"
      />

      {/* Gallery: 4 cards x 2 rows (placeholders using two images) */}
      <section id="gallery" className="py-12 bg-white -mt-[100px]">
        <div className="mx-auto px-6" style={{ maxWidth: '1260px' }}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {zohoGallery.map((item, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black shadow-md hover:shadow-lg transition-shadow">
                <img src={item.src} alt={item.label} className="absolute inset-0 w-full h-full object-contain p-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16">
        <div className="mx-auto px-6" style={{ maxWidth: "1260px" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Block number={1} title="Certified Zoho Expertise">
              Specialists across CRM, Books, Projects, Flow, Creator, and more.
            </Block>
            <Block number={2} title="Rapid Implementation">
              Launch in weeks, not months—sprints designed for measurable outcomes.
            </Block>
            <Block number={3} title="Automation-First">
              Reduce manual work with scalable workflows, APIs, and integrations.
            </Block>
            <Block number={4} title="Transparent Pricing">
              Clear scopes and fixed options—no surprises, just progress.
            </Block>
          </div>
        </div>
      </section>

      {/* Solutions Grid (Granite-style feature tiles) */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="mx-auto px-6" style={{ maxWidth: "1260px" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Zoho Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Block title="CRM Implementation">Pipelines, automations, blueprints, and role-based access.</Block>
            <Block title="Books & Billing">Invoices, subscriptions, and accounting integrations.</Block>
            <Block title="Creator Apps">Custom data models and workflows tailored to your ops.</Block>
            <Block title="Integrations & Flow">APIs, Flow, and webhooks to connect your stack.</Block>
            <Block title="Analytics & Reporting">Dashboards, KPIs, and decision-ready analytics.</Block>
            <Block title="Enablement & Support">Training, documentation, and continuous improvement.</Block>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="mx-auto px-6" style={{ maxWidth: "1260px" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="text-4xl mb-3">🧭</div>
              <h3 className="text-xl font-semibold mb-2">1) Discover</h3>
              <p className="text-gray-600">Map goals, systems, and constraints. Define a sprint plan and success metrics.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">2) Build</h3>
              <p className="text-gray-600">Configure apps, data models, and automations. Integrate with your stack.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2">3) Launch & Optimize</h3>
              <p className="text-gray-600">Train teams, monitor KPIs, and iterate for continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="py-16">
        <div className="mx-auto px-6" style={{ maxWidth: "1260px" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Proof</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {["Logo A", "Logo B", "Logo C", "Logo D"].map((logo) => (
              <div key={logo} className="h-14 rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500">
                {logo}
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <p className="text-gray-700 italic">
              “Enable helped us consolidate our sales and delivery across Zoho CRM, Projects, and Books. Our cycle times dropped noticeably in the first month.”
            </p>
            <div className="mt-3 text-sm text-gray-500">— Operations Lead, SaaS Co.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="mx-auto px-6" style={{ maxWidth: "1260px" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQ</h2>
          <div className="space-y-3">
            <details className="rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer font-medium">Which Zoho apps do you support?</summary>
              <p className="mt-2 text-gray-600">CRM, Books, Projects, Desk, Inventory, Flow, Analytics, Creator, Campaigns, and more.</p>
            </details>
            <details className="rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer font-medium">How quickly can we start?</summary>
              <p className="mt-2 text-gray-600">Typical kickoff within a week. Initial sprint usually 2–3 weeks.</p>
            </details>
            <details className="rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer font-medium">Do you provide training?</summary>
              <p className="mt-2 text-gray-600">Yes—role‑based enablement, documentation, and post‑launch support options.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Sticky CTA (mobile) */}
      <div className="fixed inset-x-0 bottom-0 sm:hidden z-40">
        <div className="mx-4 mb-4 rounded-xl shadow-lg overflow-hidden">
          <div className="flex">
            <a href="tel:+15555551234" className="flex-1 bg-emerald-600 text-white text-center py-3 font-semibold">Call</a>
            <a href="#contact" className="flex-1 bg-indigo-600 text-white text-center py-3 font-semibold">Book</a>
          </div>
        </div>
      </div>
    </div>
  );
}
