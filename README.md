# Dr Alex Rivera: one-page site

A static, one-page website for a fictional clinical psychologist and trainer, built with Astro for the Lead Web Developer technical assessment. All content is rendered to HTML at build time; the page ships **no client-side JavaScript** (the only `<script>` is the JSON-LD data block).

## Why Astro

- Static output by default: every word of content is in the HTML, with no hydration.
- Components and typed data (`src/data/*.ts`) give one source of truth for both the markup and the JSON-LD, so they cannot drift apart.
- Built-in image optimisation (`astro:assets`) produces responsive WebP, width/height attributes and a share image without extra dependencies.
- Deploys to Cloudflare Pages as plain static files, with no adapter.

## Technology

Astro 7, TypeScript (strict), semantic HTML5, plain CSS with custom properties and BEM (`psy_` prefix), system fonts, `@astrojs/sitemap`. Dev dependencies: `@astrojs/check` and `typescript` only.

## Getting started

Requires Node 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # Astro + TypeScript diagnostics
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Deploying to Cloudflare Pages

1. Push this repository to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
3. Set the framework preset to **Astro** (or enter manually):
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. No environment variables or adapter are needed.
5. Add the custom domain under the Pages project's **Custom domains** tab. The site URL is set in `SITE_URL` in `astro.config.mjs` and drives the canonical URL, Open Graph URLs, JSON-LD ids, the sitemap and `robots.txt`. Change it there if the domain changes.

The URL currently configured is `https://psychwire.patmayo.com`. Until that custom domain is connected in Cloudflare, the canonical and sitemap point at a domain that isn't live yet.

## Project structure

```
src/
  assets/female-doctor-white-coat-portrait.webp   Hero photo (optimised at build)
  components/              Header, Hero, About, Courses, CourseCard, Contact, Footer, StructuredData
  data/site.ts             Name, title, bio, email, location
  data/courses.ts          Typed course data (renders cards AND JSON-LD)
  layouts/BaseLayout.astro <head>, meta, skip link
  pages/index.astro        Page composition and meta text
  styles/global.css        Tokens, base styles and BEM blocks
public/                    favicon.svg
  (src/pages/robots.txt.ts generates robots.txt from the configured site URL)
astro.config.mjs
```

## SEO, AEO and structured data

- Unique `<title>`, meta description (146 characters), 51-character title, canonical URL, Open Graph and Twitter card tags, `lang="en-AU"`.
- `og:image` (with width, height and alt) is generated from the hero photo (1200×630 JPEG); `og:site_name` is set.
- `StructuredData.astro` emits one JSON-LD `@graph` in the static HTML: a `Person` (name, job title, bio, email, Sydney/AU address) and three `Course` entries generated from `courses.ts`. Courses reference the Person through `@id` as `provider` and as the `instructor` of an online `CourseInstance`. `timeRequired` is included only for the two courses whose length maps cleanly to an ISO 8601 duration; the monthly supervision course has none.
- Nothing is invented: no prices, ratings, dates, accreditation, course URLs or credentials.
- `sitemap-index.xml` is produced by the official integration; `robots.txt` references it.

## Accessibility notes

- Layout: tinted hero with call-to-action, two-column About, three course cards, centred Contact; blue palette defined as `--psy_color-*` tokens in `global.css`.
- Landmarks: `header`, `nav` (labelled "Main"), `main`, `section`, `article`, `footer`; skip-to-content link is the first focusable element.
- One `h1`, then `h2` sections and `h3` course titles.
- Visible 3px focus ring (a contrasting orange-brown); navigation links have comfortable touch targets.
- Hero image has descriptive alt text, states it is a stock photo and does not claim to show Dr Rivera. Width and height are set to prevent layout shift; it loads eagerly with high fetch priority.
- Navigation is plain wrapping links, so it works on mobile without JavaScript. Smooth scrolling is disabled under `prefers-reduced-motion`. No ARIA beyond the `aria-label` that distinguishes the navigation landmark.

## Placeholder course links

The supplied course links are `#`. They are kept in `courses.ts`, but the Courses component only renders a link when `href` is not `#`, so the page does not present a dead enrolment link. Replace the `href` values with real URLs and the links appear automatically.

## Image credit

Hero image (`src/assets/female-doctor-white-coat-portrait.webp`): an AI-generated image (created with ChatGPT) supplied by the site owner, used under the generator's terms, which give the user rights to the output. It does not depict a real person or Dr Rivera, and the alt text says it is AI-generated. The source file is WebP; Astro generates responsive WebP sizes at build time, and the 1200×630 share image is JPEG for compatibility with social crawlers.

## QA performed

- [x] `npm run check`: 0 errors, 0 warnings, 0 hints
- [x] `npm run build`: succeeds; one static page, sitemap generated
- [x] Built HTML contains all content; the only script tag is JSON-LD
- [x] Title and description verified in output; JSON-LD parsed (1 Person, 3 Course)
- [x] Heading order: h1 → h2 (About, Courses, Contact) with h3 course titles
- [x] Keyboard: skip link first and visible, then brand, nav links and mailto, each with a focus ring
- [x] Layout checked at 375, 768 and desktop widths; no horizontal overflow
- [x] Contrast measured on the blue palette: all text at 7:1 or higher
- [x] Lighthouse (local production preview, default mobile profile): Performance 100, Accessibility 100, Best Practices 100, SEO 100; LCP 0.9 s, CLS 0

## Known limitations

- The configured domain (`psychwire.patmayo.com`) must be connected in Cloudflare Pages for the canonical URL and sitemap to resolve.
- Not done: screen-reader testing (VoiceOver/NVDA), cross-browser testing beyond Chromium, and Lighthouse against the live Cloudflare URL.
- Course links are placeholders by design, so there is no enrolment path yet.
