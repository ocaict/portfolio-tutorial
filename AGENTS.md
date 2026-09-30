# AGENTS.md

## Project status

Built and running. React + Vite portfolio app with 5 pages (Home, About, Services, Projects, Contact). Not a git repository.

## Read first

`prompt.md` is the original build spec — refer to it for design intent and content rules. The app is already implemented; most sections map directly to components in `src/`.

## Assets

- `ocatech logo.png` — OCATECH DIGITAL SOLUTION brand logo
- `oluegwuc.png` — personal photo for Oluegwu Chigozie

These are the only provided images. Do not add stock photography of people coding.

## Tech stack

- **Build:** Vite 5 + React 18
- **Routing:** react-router-dom 6 (5 pages: `/`, `/about`, `/services`, `/projects`, `/contact`)
- **Styling:** Plain CSS with CSS custom properties for dark/light theming (`src/index.css`)
- **Icons:** Inline SVG components (`src/components/Icon.jsx`) — no icon library
- **Backend:** None. Contact form is frontend-only. Do not add a backend unless the user requests it.
- **Deployment target:** Vercel or Netlify

## Hard constraints

- **No fake content.** Never invent clients, projects, testimonials, certifications, awards, stats, or achievements. Use clearly labeled placeholders ("Projects coming soon") instead.
- **No fake links.** Do not create social media, GitHub, or CV links that don't exist. Hide unavailable links rather than showing broken icons.
- **No fake CV.** Do not link to a nonexistent CV file. Hide the button or show "coming soon."
- **Contact form is frontend-only** unless a backend/email service is configured. Never pretend messages are being delivered.
- **Do not deploy** unless the user explicitly requests it.
- **No hardcoded secrets.** Use environment variables for any sensitive config.

## Architecture direction

- Build a real, maintainable React application — not a static landing page.
- Use reusable components and a clean folder structure.
- Create a structured project data model (id, title, description, category, technologies, image, features, liveUrl, githubUrl, status) so real projects can be added later without rewriting the site.
- Structure social-links, CV, and contact-form components so they can be wired up later.
- Implement dark/light mode with localStorage persistence.
- Ensure full responsiveness (mobile-first quality, not a reduced desktop version).
- Follow SEO, accessibility, and performance best practices from the spec.

## Verification

After implementation, self-test: navigation, mobile menu, theme toggle, all buttons/links, contact form, WhatsApp CTA, responsive layout, keyboard navigation, console errors, broken imports, missing assets, build errors, routing, and accessibility. Fix all issues found before reporting completion.
