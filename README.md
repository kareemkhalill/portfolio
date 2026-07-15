# Karim Khalil — AI Engineer Portfolio

Personal branding site for Karim Khalil, AI Engineer in AlUla, Saudi Arabia. Built to convert recruiters and clients: case studies with real demo videos, an interactive WhatsApp AI simulation, and business-value-first copy.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS 4** (design tokens in `src/app/globals.css`)
- **Framer Motion** (scroll reveals, demo animations)
- **Lucide** icons · **Vercel Analytics**

## Structure

```
src/
  lib/data.ts            ← ALL content lives here (projects, experience, skills, contact)
  components/            ← Nav, Footer, ProjectCard, Reveal, DriveVideo, WhatsAppDemo…
  app/
    page.tsx             ← Home (hero, capabilities, featured work, experience, CTA)
    projects/            ← Index + /projects/[slug] case-study pages
    about/  contact/
    layout.tsx           ← SEO metadata + JSON-LD Person schema + analytics
    sitemap.ts robots.ts opengraph-image.tsx
public/
  Karim_Khalil_Resume.docx ← served by every "Download CV" button
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Editing content

Everything a recruiter reads is in **`src/lib/data.ts`** — no page edits needed for:
- Adding/editing a project (add an object to `projects`; a case-study page is generated automatically)
- Updating experience, skills, certifications, contact details
- Demo videos: set `driveVideoId` to the Google Drive file ID (file must be shared "anyone with the link")

## Deployment (Vercel — recommended)

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — zero config needed.
3. Add your custom domain in Vercel → Settings → Domains.
4. **Update `site.url` in `src/lib/data.ts`** to the real domain (used by sitemap, robots, OG tags, JSON-LD).
5. Enable Analytics in the Vercel dashboard (the `<Analytics />` component is already wired).
6. Submit `https://yourdomain/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

## Maintenance checklist

- **CV file**: replace `public/Karim_Khalil_Resume.docx` whenever the CV changes (keep the filename).
- **GitHub link**: `site.github` in `data.ts` is empty — add it when ready.
- **Metrics honesty**: all figures (~15/20/25/30%) come from the CV. Don't inflate them; recruiters check.
- Keep `npm run build` green before deploying.
