# Dandy Dancers development guidance

## SEO is part of every content and routing change

When adding or changing public pages, treat search metadata and LLM-facing documentation as part of the implementation, not as a separate follow-up.

The canonical production origin is `https://dandydancers.com`. Public URLs use trailing slashes.

## New or changed routes

For every new indexable public route:

1. Add the canonical production URL to `static/sitemap.xml`.
2. If the page has translated equivalents, add reciprocal `hreflang` links in both the page head and every corresponding sitemap entry. Include `x-default` when appropriate.
3. Give the page a unique, descriptive title and meta description in every available language. Describe the page's actual purpose and user benefit; do not reuse generic homepage text.
4. Add a canonical link using the absolute production URL.
5. Add appropriate Open Graph and Twitter metadata when the page is intended to be shared.
6. Ensure the page has one clear `h1`, semantic headings, useful visible text, and descriptive link labels.
7. Update `static/llms.txt` when the route is an important canonical resource. Update `static/llms-full.txt` when it adds meaningful facts about the service.

Do not add utility pages, private flows, duplicate URLs, or pages marked `noindex` to the sitemap. Registration/admin/test routes should remain excluded unless their indexing policy intentionally changes.

When removing or renaming a route, remove or replace all sitemap, canonical, `hreflang`, and LLM-file references to it. Configure a permanent redirect at the hosting layer when an indexed URL moves.

## Metadata and structured data

The localized landing-page SEO is implemented through `src/lib/components/SeoHead.svelte`, with copy supplied from `src/lib/i18n/translations.js`.

- Keep titles concise, distinct, natural, and relevant to tango travelers in Buenos Aires.
- Prefer the unambiguous phrase “professional tango dance partner.” Do not use “companion” where it could imply a dating or sexual service.
- Keep the service inclusive: it is for adults aged 18 or older of every gender and dance level. The primary marketing audience may be international travelers, especially women aged 40 and over, but copy must not imply that other adults are excluded.
- Structured data must match visible page content and current business reality.
- Reuse stable `@id` values for the organization, website, service, and pages.
- Update JSON-LD, visible copy, and LLM files together when business facts change.
- Never add fabricated prices, availability, addresses, reviews, ratings, awards, dancer credentials, or policies.
- Do not add `Offer`, `Review`, `AggregateRating`, `FAQPage`, or `LocalBusiness` data until the corresponding real, visible information exists and the schema type is accurate.
- Keep the status as “launching soon” until customer booking is genuinely available. Remove that wording everywhere when the service launches.

## LLM-facing files

Maintain both files:

- `static/llms.txt` is the concise index of the business, its purpose, canonical resources, contact details, and key facts.
- `static/llms-full.txt` is the fuller factual explanation of the service, audience, boundaries, benefits, availability, languages, and organization.

When editing them:

- Write plain, factual Markdown that can stand without JavaScript or page context.
- Link only to canonical, public, production URLs.
- Add important new pages with a short explanation of what each page contains.
- Reflect material changes such as launch status, booking flow, supported languages, service area, pricing, policies, safety practices, or verified contact channels.
- Preserve the clarification that Dandy Dancers is a professional tango and cultural service, not an escort or dating service.
- Avoid marketing exaggeration and claims that cannot be verified from the site.
- Keep `llms.txt` concise; place extensive detail in `llms-full.txt` rather than duplicating everything.

## Languages

English and Spanish currently have public routes. German, French, Turkish, Portuguese, Greek, and Polish may be supported by the service, but do not add language-route sitemap entries or `hreflang` values until real translated pages exist at stable public URLs.

Every translated page should communicate the same business facts and indexing intent. Translation should be natural for the target audience rather than a literal keyword-heavy copy of another language.

## Business facts and pending information

Use `SEO-PENDING.md` as the checklist for information that is not available yet. When an item becomes real and public:

1. Add it to the appropriate visible page.
2. Update structured data where valid.
3. Update `llms.txt` and/or `llms-full.txt`.
4. Remove the completed item from `SEO-PENDING.md`.

Current official facts must remain consistent:

- Brand: Dandy Dancers
- Founder: Franco Cespi
- Founded: 2026
- Service area: all of Buenos Aires, Argentina
- Email: `contact.dandydancers@gmail.com`
- Instagram: `https://www.instagram.com/dandydancers/`
- Status: launching soon

Do not invent a phone number, WhatsApp number, physical customer-facing address, launch date, prices, or reviews.

## Images and accessibility

- Use descriptive alternative text based on the image's purpose; do not stuff keywords.
- When a suitable asset becomes available, replace the logo fallback with a dedicated 1200 × 630 px social-sharing image and update Open Graph/Twitter metadata.
- Optimize new public images for file size and provide explicit dimensions when practical to reduce layout shift.

## Validation before completion

After SEO-related changes:

1. Run `npm run check`.
2. Run `npm run build` for changes affecting routes, rendering, or head markup.
3. Inspect generated HTML in `build/` to confirm canonical, `hreflang`, robots directives, descriptions, and JSON-LD are present server-side.
4. Confirm JSON-LD is valid JSON and that all referenced production URLs are correct.
5. Confirm `static/robots.txt`, `static/sitemap.xml`, `static/llms.txt`, and `static/llms-full.txt` are copied into the production build.
6. Check that every sitemap URL is indexable and returns the intended canonical page after deployment.

When the production site launches or hosting changes, submit the sitemap to Google Search Console and Bing Webmaster Tools and verify that the root-domain language redirect is an HTTP permanent redirect rather than relying only on the current HTML meta refresh.
