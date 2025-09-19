
4) Reusable Blocks (Library)

- Marketing Block 1
  - Component: `src/lib/components/MarketingBlock.tsx` (exported as `MarketingBlock`)
  - Style preset: `MarketingBlock1Style` exported from `src/lib/index.ts`
  - Data-agnostic props:
    - `content`: `{ id?, imageSrc, imageAlt?, topLine, heading, body, line1, line2, ctaText, ctaHref }`
    - `style`: optional style override (see `MarketingBlockStyle` in `src/lib/types.ts`)
  - Defaults encode our agreed typography and spacing:
    - Fonts: Montserrat (global), Montserrat Condensed for topLine + H2 + body
    - H2: `text-3xl sm:text-4xl`, weight 400, black
    - Emphasis lines: 18px, leading-tight, black; second line lifted `-mt-2.5`
    - Top line: green `text-green-600`, 18px, weight 300
    - CTA: centered, green button
  - Usage example:
    - See `src/pages/Home.tsx` where `MarketingBlock` + `MarketingBlock1Style` render the section under the hero.

5) Fonts & Base Styles

- Primary font: Montserrat; Headlines/body default to black (#000)
- Accent font: Montserrat Condensed for hero/marketing blocks
- Tailwind config already includes `font-montserrat` and `font-montserrat-condensed`

6) Workflow Notes (wake-up checklist)

- Branch on `dev/codex`
- Keep diffs scoped and under ~100 lines when possible
- Reuse `MarketingBlock` for similar sections; override via the `style` prop instead of duplicating markup
- When changing typography globally, update `src/index.css` and `tailwind.config.js`, then restart `npm run dev`

7) Session Recap (What's in place now)

- Branch: `dev/codex` (local)
- Fonts:
  - Global: Montserrat (default body; pure black text)
  - Accents: Montserrat Condensed for hero/marketing copy
- Header (`src/components/Header.tsx`):
  - Single CTA phone button (gradient) with `tel:` link; removed "Schedule A Meeting"
  - Menu font size reduced to 16px
- Hero (`src/pages/Home.tsx`):
  - H1: "Zoho Consulting Partner & CRM-AI Integration Experts"
  - Subheadline: "Drive Business Growth with Tailored Zoho Solutions"
  - Body (condensed, 16-18px, tight leading):
    "Enable Solutions helps small to mid-sized businesses transform complex tasks into simple ones. Our Zoho consulting and CRM AI integration specialists strengthen forecasting, data control, and automation, driving solid growth and reliable outcomes for your operations."
  - All hero buttons removed
- Marketing Block 1 (light variant) immediately under hero:
  - Image left, text right; exact copy and typography encoded in `MarketingBlock1Style`
  - Key lines:
    - Top (green, 18px, weight 300): "We craft custom Zoho Solutions for your business."
    - H2 (condensed, 3xl/4xl, weight 400, black): "Say goodbye to confusion and chaos choosing your CRM"
    - Body (condensed, black): CRM "countless hours" paragraph
    - Emphasis line 1 (black, 18px, tight, semibold): "We simplify every step for a flawless outcome."
    - Emphasis line 2 (black, 18px, tight, lifted `-mt-2.5`): "A Perfect Fit, Exceptional Code Quality, A Lasting and Durable Outcome - Guaranteed"
    - CTA (centered, green) text: "Let Us Help You... Set Up a Visit"
- Marketing Block 2 (dark variant):
  - `MarketingBlock2Style` on black background, text left, image right
  - Top line: "Is that how you feel about your data and CRM stack? At Enable.llc, our mission is to deliver the perfect solution to meet that new vision."
  - H2: "We understand that creating the right vision and outcome involves lots of decisions."
  - Body (condensed, tight): Zoho Consultant/Software Solution paragraph
  - Emphasis lines:
    - "We've helped many Business Owners like you turn their visions into reality."
    - "By collaborating closely with your team, we ensure the solution reflects your processes and goals - end to end."
  - Image (right): `/images/2-The-Future-of-Smart-Manufacturing-How-IoT-is-Revolutionizing-Production-Efficiency-3.png` scaled vertically ~10% (`scale-y-[1.1]`)
- Full Bleed Divider (`FullBleedDivider`):
  - No background image; white background; eyebrow and heading render black
  - Eyebrow: "Our weapons of choice." lifted `-mt-2.5`
  - Heading: "Expert Coding For Every Aspect of Your Business"
  - No subtext line
- Gallery (4x2):
  - Section `#gallery` lifted by `-mt-[100px]`
  - 8 cards, 1px black border (`border border-black`), subtle shadow
  - Images (object-contain, keep circular artwork):
    - `/images/zoho-one-1.png`, `/images/zoho-iot.png`, `/images/zoho-crm.png`, `/images/zoho-creators.png`, `/images/zoho-bigin.png`, `/images/crm-plus.png`, `/images/landing-page.png`, `/images/zoho-one(1).png`

8) Components & Types (quick map)

- `src/lib/components/MarketingBlock.tsx`
  - Default style tokens (colors, sizes, spacing)
  - Presets: `MarketingBlock1Style` (light), `MarketingBlock2Style` (dark)
  - Props: `content` (typed), `style?` (override tokens), `imagePosition` ('left'|'right')
- `src/lib/types.ts`
  - `MarketingBlockStyle` - class token bag for all elements
  - `MarketingBlockContent` - ids + image + 5 text lines + CTA
- `src/lib/components/FullBleedDivider.tsx`
  - Props: `{ id?, bgImage?, bgClass?, eyebrow, heading, subtext? }`
  - Auto color: black text when `bgImage` empty; golden/white when `bgImage` present

9) How to add another section fast

- New light/dark marketing block:
  - Import `{ MarketingBlock, MarketingBlock1Style|MarketingBlock2Style }`
  - Render with `content={...}` and `imagePosition` as needed
  - Override any class via `style={{ headingClass: 'text-4xl ...' }}`
- New divider:
  - Use `<FullBleedDivider eyebrow="..." heading="..." bgClass="bg-white" />`
  - For image background, pass `bgImage="/images/..."` (overlay auto-added)
- Gallery updates:
  - Edit `zohoGallery` in `src/pages/Home.tsx` with new images, captions optional

10) Hero copy snapshot (for reference)

- H1: Zoho Consulting Partner & CRM-AI Integration Experts
- Subheadline (condensed): Drive Business Growth with Tailored Zoho Solutions
- Body (condensed, tight): Enable Solutions helps small to mid-sized businesses deliver reliable outcomes.

11) Quick run

- `npm run dev` + http://localhost:3001
- No extra libs required; all styles are Tailwind classes
