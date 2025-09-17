1) Define the tiny deliverable (5 min)

One page only: Home (Granite-style skeleton) with:

Hero (headline, subhead, CTA)

Why Choose Us (1-4)

Process (1-3 with icons)

Proof (placeholder logos + 1 testimonial)

FAQ (3 items)

Sticky CTA

Acceptance criteria (copy into CHECKLIST.md):

Lighthouse Performance ≥ 95, no console errors.

Mobile viewport ≤ 390px clean (no overflow).

Single Home.tsx + Home.css (or Tailwind classes).

Re-usable Block component used at least twice.

Deployed preview on Vercel from branch build.

2) Guardrails to prevent context rot (paste into PROMPTS/guardrails.md)

Always restate Goal + Acceptance Criteria before coding.

Work in atomic PRs: one block at a time.

After each step, run npm run build and paste any errors.

If unsure, propose 2 options briefly and pick one.

No library adds without approval.

Keep diffs under 100 lines per PR.

3) Codex prompt script (use verbatim for each step)

Bootstrap prompt:

You are implementing a single page in React+Vite on branch dev/codex. Read SCOPE.md, CHECKLIST.md, PROMPTS/guardrails.md. Restate the goal and constraints in 3 bullets. Then generate a minimal task list of 4–6 steps to reach acceptance. Ask no questions—propose defaults and proceed.

Step prompts (run one at a time):

Scaffold

Implement the Hero only. Create src/pages/Home.tsx and local styles (Tailwind or Home.css). Include headline, subhead, primary CTA. Open a PR titled feat(hero): add hero block with a description mapping to CHECKLIST.md. Output diff only.

Why Choose Us

Add a numbered 1–4 “Why Choose Us” section using a reusable Block component. New PR: feat(why-us): reusable Block. Output diff only.

Process

Add “Our Process” (1–3) with placeholder icons (emoji ok). New PR. Output diff only.

Proof

Add logos row (placeholders) + 1 testimonial. New PR. Output diff only.

FAQ + Sticky CTA

Add FAQ (3 items) and a sticky bottom CTA on mobile. New PR. Output diff only.

Tidy + Build

Run a simulated build: list any likely warnings and fixes. Suggest Lighthouse improvements without adding libs.