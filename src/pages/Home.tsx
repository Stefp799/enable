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
        <div className="relative mx-auto px-6 pt-24 pb-28 text-white" style={{ maxWidth: "1140px" }}>
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
          imageSrc: "/images/zohoconfused.jpg",
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

      <div className="w-full h-[10px] bg-blue-900" role="separator" aria-hidden="true" />

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

      <div className="w-full h-[10px] bg-blue-900" role="separator" aria-hidden="true" />
      <FullBleedDivider
        id="projects-divider"
        bgClass="bg-white"
        eyebrow="Our weapons of choice"
        heading="Expert Coding For Every Aspect of Your Business"
      />

      {/* Gallery: 4 cards x 2 rows (placeholders using two images) */}
      <section id="gallery" className="py-12 bg-white -mt-[100px]">
        <div className="mx-auto px-6" style={{ maxWidth: '1140px' }}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {zohoGallery.map((item, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black shadow-md hover:shadow-lg transition-shadow">
                <img src={item.src} alt={item.label} className="absolute inset-0 w-full h-full object-contain p-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-[10px] bg-blue-900" role="separator" aria-hidden="true" />
      <div className="-mt-1">
        <FullBleedDivider
          eyebrow="Why Choose Us"
          heading="Get the Inside Scoop on Our unique Benefits!"
          bgClass="bg-white"
          paddingClass="pt-12 pb-6"
        />
      </div>
      {/* Why Choose Us */}
      <section id="why-us" className="py-16">
        <div className="mx-auto px-6" style={{ maxWidth: "1140px" }}>
          <MarketingBlock
            style={{
              ...MarketingBlock1Style,
              sectionClass: `${MarketingBlock1Style.sectionClass} -mt-[150px]`,
              imageWrapClass: `${MarketingBlock1Style.imageWrapClass ?? ""} mt-4`,
              ctaWrapClass: `${MarketingBlock1Style.ctaWrapClass ?? "flex justify-center"} mt-10`
            }}
            content={{
              id: "why-intro",
              imageSrc: "/images/Challenges-in-Zoho-to-Salesforce-Migration.png",
              imageAlt: "Consulting conversation",
              topLine: "Reasons our clients trust Enable",
              heading: "",
              body: "",
              line1: "",
              line2: "",
              ctaText: "Set Up a Visit",
              ctaHref: "#contact",
            }}
          >
            <div className="mt-14 space-y-5">
              <div className="flex items-start gap-4">
                <img src="/images/lens.jpg" alt="Lens" className="h-10 w-10 object-contain rounded" />
                <div>
                  <div className="font-montserrat-condensed text-xl text-black">Transparent Choices</div>
                  <p className="text-black/80">Clear options, demos, and estimates so you can decide with confidence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/images/warranty.jpg" alt="Warranty" className="h-10 w-10 object-contain rounded" />
                <div>
                  <div className="font-montserrat-condensed text-xl text-black">Endless Expertise</div>
                  <p className="text-black/80">Seasoned Zoho builders across CRM, Books, Projects, Flow, Creator, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/images/square.jpg" alt="Square" className="h-10 w-10 object-contain rounded" />
                <div>
                  <div className="font-montserrat-condensed text-xl text-black">Precision Perfection</div>
                  <p className="text-black/80">Digital design, disciplined builds, and QA for a precise finish.</p>
                </div>
              </div>
            </div>
          </MarketingBlock>
        </div>
      </section>

      <div className="w-full h-[10px] bg-blue-900" role="separator" aria-hidden="true" />
      <div className="-mt-1">
        <FullBleedDivider
          eyebrow="How It Works"
          heading="Working with Enable.llc is as easy as 1, 2, 3"
          bgClass="bg-white"
          paddingClass="pt-12 pb-6"
        />
      </div>
      {/* How It Works - Three Column Layout */}
      <section id="how-it-works-2" className="py-16">
        <div className="mx-auto px-6 -mt-[50px]" style={{ maxWidth: "1140px" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/images/image-5.jpeg"
                  alt="Step 1"
                  className="w-full h-[576px] object-cover rounded-lg shadow-md mx-auto"
                />
              </div>
              <h3 className="text-xl font-montserrat-condensed font-semibold text-black mb-3">1. Initial Phone Call</h3>
              <p className="text-black/80">In our initial phone call we listen to your concerns and vision. We analyze your current processes and identify opportunities for optimization with Zoho solutions.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/images/checklist.png"
                  alt="Step 2"
                  className="w-full h-[576px] object-cover rounded-lg shadow-md mx-auto"
                />
              </div>
              <h3 className="text-xl font-montserrat-condensed font-semibold text-black mb-3">2. Design</h3>
              <p className="text-black/80">The design process is the heart of the matter. Our experts configure and customize your Zoho environment to match your business requirements.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/images/CRM-Agency.webp"
                  alt="Step 3"
                  className="w-full h-[576px] object-cover rounded-lg shadow-md mx-auto"
                />
              </div>
              <h3 className="text-xl font-montserrat-condensed font-semibold text-black mb-3">3. Deliver</h3>
              <p className="text-black/80">We not only deliver the solution, but we provide comprehensive training and ongoing support to ensure your team maximizes their productivity.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Give us a call and see how easy it can be
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-[10px] bg-blue-900" role="separator" aria-hidden="true" />
      <div className="-mt-1">
        <FullBleedDivider
          eyebrow="Testimonials"
          heading="Transformations That Speak Volumes"
          bgClass="bg-white"
          paddingClass="pt-12 pb-6"
        />
      </div>
      {/* Testimonials - Three Column Layout */}
      <section id="how-it-works-3" className="py-16">
        <div className="mx-auto px-6 -mt-[50px]" style={{ maxWidth: "1140px" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
              </div>
              <p className="text-black/80">Stop searching for a fabricator. Granite Guy Inc. is hands down the best in metro west. Geovanna and team were amazing. The shop carries beautiful slabs, they use high tech computer-driven CNC milling to cut your slab to perfection. Before they cut the slab, they use software to plan the cuts to follow the movement of the stone, and enhance the natural feel when installed. This team delivers counters and workmanship of the highest quality. Choose Granite Guy Inc. for your kitchen and you will truly be happy!</p>
            </div>

            {/* Testimonial 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
              </div>
              <p className="text-black/80">Stop searching for a fabricator. Granite Guy Inc. is hands down the best in metro west. Geovanna and team were amazing. The shop carries beautiful slabs, they use high tech computer-driven CNC milling to cut your slab to perfection. Before they cut the slab, they use software to plan the cuts to follow the movement of the stone, and enhance the natural feel when installed. This team delivers counters and workmanship of the highest quality. Choose Granite Guy Inc. for your kitchen and you will truly be happy!</p>
            </div>

            {/* Testimonial 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
              </div>
              <p className="text-black/80">Stop searching for a fabricator. Granite Guy Inc. is hands down the best in metro west. Geovanna and team were amazing. The shop carries beautiful slabs, they use high tech computer-driven CNC milling to cut your slab to perfection. Before they cut the slab, they use software to plan the cuts to follow the movement of the stone, and enhance the natural feel when installed. This team delivers counters and workmanship of the highest quality. Choose Granite Guy Inc. for your kitchen and you will truly be happy!</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-32">
            <a
              href="#contact"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Give us a call and see how easy it can be
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-[10px] bg-blue-900" role="separator" aria-hidden="true" />
      <div className="-mt-1">
        <FullBleedDivider
          eyebrow="What Sets Us Apart"
          heading="Excellence You Can Trust"
          bgClass="bg-white"
          paddingClass="pt-12 pb-6"
        />
      </div>
      {/* Excellence You Can Trust */}
      <section id="why-us-2" className="py-16">
        <div className="mx-auto px-6 -mt-[150px]" style={{ maxWidth: "1140px" }}>
          <div className="w-full overflow-hidden rounded-2xl shadow-lg h-96">
            <img
              src="/images/whatsets.png"
              alt="What Sets Us Apart"
              className="w-full object-cover h-[400px]"
              style={{objectPosition: '0 -120px'}}
            />
          </div>

          {/* Four Text Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-left">
              <h3 className="font-montserrat-condensed text-xl font-light text-black mb-1">Complete Showroom</h3>
              <p className="text-black/80">Learn about material options, their characteristics, and care tips.</p>
            </div>

            <div className="text-left">
              <img src="/images/timeicon.jpg" alt="Time Icon" className="w-8 h-8 mb-2 transform scale-x-125 scale-120" />
              <h3 className="font-montserrat-condensed text-xl font-light text-black mb-1">Quick Turnaround</h3>
              <p className="text-black/80">Swift, transparent and precise, we get your project completed without delay.</p>
            </div>

            <div className="text-left">
              <h3 className="font-montserrat-condensed text-xl font-light text-black mb-1">Digital Layout</h3>
              <p className="text-black/80">Double-check and adjust layouts before cutting, ensuring precision and no surprises.</p>
            </div>

            <div className="text-left">
              <h3 className="font-montserrat-condensed text-xl font-light text-black mb-1">High-Tech Fabrication</h3>
              <p className="text-black/80">Achieve flawless execution, even for complex shapes or custom projects, with our advanced fabrication technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="mx-auto px-6" style={{ maxWidth: "1140px" }}>
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





