# SAMKIT — THE SERIES

A cinematic, streaming-inspired portfolio branded for **Samkit**.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** It was generated from the resume, and every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` (add an object; it appears in Originals, the overlay, the resume sheet and the counts) |
| Achievements / certifications | `achievements`, `certifications` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Developer / Creative) | `viewerProfiles` |
| Intro overline and identity | `profile.fullName` |

**Resume:** `public/assets/Samkit_Resume.pdf` is the provided Samkit resume. Update `profile.resumePdf` in `src/data/portfolio.ts` if you change its filename.

**Photo:** replace `public/assets/samkit-portrait.png` with Samkit's transparent cutout, then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## What's inside

```
src/
  data/portfolio.ts        ← single source of truth (from the resume)
  App.tsx                  ← stages: opening → profile select → home; overlays
  components/
    NetflixIntro           ← cinematic title card, original synthesized bass sting, session memory
    ProfileSelector        ← "Who's watching?" (changes section order only)
    Navbar                 ← hide-on-scroll nav, profile switcher, mobile menu
    Hero                   ← billboard: parallax portrait, particles, light streaks, floating chips
    PlayIntro              ← ▶ Play Intro: zoom into portrait → highlight reel (pause, ← →, tap zones)
    ContinueWatching       ← cards with real "watched" progress bars
    About                  ← The Pilot
    Seasons / EpisodeCard  ← My Journey as seasons and episodes
    Originals / ProjectCard← pinned horizontal sequence on desktop, swipe rail on touch
    ProjectModal           ← full-screen project overlay with a shared-element transition
    TopPicks               ← Top 10-style row
    Skills                 ← skill genres; each card shows where the skill appears
    Achievements           ← award-poster cards + certification rail (links to credentials)
    ResumeViewer/ResumeModal ← designed resume sheet, PDF viewer, download
    FinalCTA               ← TO BE CONTINUED… + contact links
    MarketingServices     ← service cards for paid media, content, SEO and CRO
    PricingPackages       ← quote-based plans with a retainer/project toggle
    ClientProjects        ← CV-backed project showcase with the existing case-study overlay
    ClientReviews         ← verified-review cards; stays in an honest empty state until populated
    CustomCursor, fx.tsx  ← cursor states, magnetic buttons, 3D tilt, text reveals, particles
  hooks/                   ← Lenis smooth scroll + scroll lock, media queries, watch progress
  utils/netflixSound.ts    ← original two-hit Web Audio intro cue (no audio asset required)
scripts/build-images.mjs   ← portrait/share-image pipeline (sharp)
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Marketing sections

The four sections are mounted in `src/App.tsx` and linked from the responsive navigation:

- `MarketingServices.tsx` exports the editable `marketingServices` list.
- `PricingPackages.tsx` exports `pricingTiers`; prices are custom-quoted rather than invented.
- `ClientProjects.tsx` uses the real project data from `src/data/portfolio.ts` and opens its existing case-study overlay.
- `ClientReviews.tsx` exports the `ClientReview` type and an initially empty `clientReviews` list. Add only genuine, approved feedback; placeholder testimonials are intentionally not published.

## Deploying to Vercel

Import `Samkit2704/SAMKITPORTFOLIO` in Vercel and keep the Vite defaults (`npm run build`, output directory `dist`). Subsequent pushes to the connected production branch deploy automatically. To deploy from a machine with the Vercel CLI authenticated and the project linked, run `vercel --prod`.

## Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll, the custom cursor, tilt, particles, grain and the pinned horizontal scroll turn off, and the opening jumps straight to its final frame.
- Hover effects only run on devices with a precise pointer. Touch devices get tap interactions and native swipe rails.
- The custom cursor appears only with a mouse or trackpad.
- Overlays close with Esc, and the highlight reel supports Space and the ← → keys.
- Portraits are responsive WebP files (25–90 KB). Overlays are code-split, and particles pause when they're off screen.
- The intro sound is synthesized with Web Audio after an explicit button press; the cue is an original cinematic sting, not a copy of a branded sound logo.
- `hasSeenIntro` is stored for the current browser tab session. The final contact section's **REPLAY OPENING** action replays it.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, ← and → change slides, Esc closes.
- **Project and resume overlays:** Esc closes.
