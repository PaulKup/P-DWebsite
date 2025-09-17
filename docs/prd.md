# PRD — P&D Web Development Website

## 1. Objective

Launch a four-page marketing site that converts visitors into qualified inquiries.

## 2. Scope

- Pages: Home, Our Services, About Us, Contact Us (with form).
- Global nav & footer on all pages.
- Contact form sends confirmation to site owner and customer.

## 3. Non-Goals

- CMS, blog, or e-commerce (future).
- Authentication or dashboards.

## 4. Users & Goals

- Prospective small-business owners → understand offering, trust P&D, contact easily.

## 5. Information Architecture

- `/` Home
- `/services`
- `/about`
- `/contact` (form)

## 6. Content Sources

- Copy: `@/docs/copy/*.md`
- Wireframes: `@/docs/wireframes/*.png`
- Brand: `@/public/brand/logo.svg`, `@/public/images/*`
- Styling: `@/docs/styleGuide/*.md`

## 7. Tech Stack

- Front end: Next.js 14 (App Router, TS), React 18, Tailwind, shadcn, Radix, CVA
- Backend: Node.js, Express, Zod, Nodemailer (or provider)
- Tooling: ESLint/Prettier, Vitest/Jest, Husky, Prettier Tailwind plugin

## 8. Design System

- Tokens: colors (brand/ink/sand), spacing (8-pt), radii
- Typography: Inter via next/font; optional display title for “Why Choose Us?”
- Components: Button, Card, Section, Navbar, Footer

## 9. Functional Requirements

- Sticky Navbar; accessible mobile menu.
- Home sections: Hero, Why Choose Us, Features, CTA.
- Contact form: fields { name, email, message }, POST `/contact`, dual email send, success state.
- Error states: validation (client + server), rate limiting, friendly failure UX.

## 10. Accessibility

- WCAG 2.1 AA: focus rings, labels, roles, color contrast; keyboard-only nav.

## 11. Performance & SEO

- next/font; no CDN CSS/JS.
- next/image with dimensions; CLS < 0.1; LCP < 2.5s.
- Metadata + OG images; optional JSON-LD.

## 12. Analytics

- Plausible or GA4; cookie banner if needed.

## 13. Environment & Deployment

- Env vars: `NEXT_PUBLIC_API_URL`, `MAIL_FROM`, `MAIL_TO`, `SMTP_*` or provider keys.
- Deploy: Vercel (client), Render/Railway/AWS (server).

## 14. Acceptance Criteria

- Lighthouse: Perf ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- All pages responsive; nav present; links correct.
- Contact form sends two emails; error handling & rate limit verified.

## 15. Risks

- Email deliverability (SPF/DKIM).
- Designer late changes → mitigate via tokens and CVA.

## 16. Timeline

- Week 1: Setup, tokens, layout, Home.
- Week 2: Services, About, Contact + API.
- Week 3: QA, perf, a11y, deploy.
