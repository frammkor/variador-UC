# Dandy Dancers website plan

## Purpose and source of truth

This document describes the current public website and its intended direction. It is a product and content brief, not the source of exact interface copy.

`src/lib/i18n/translations.js` is the source of truth for all user-facing English and Spanish text. When this plan and the translation file differ, follow the translation file and update this document to match the resulting product direction.

The website is a bilingual, component-based SvelteKit landing site for Dandy Dancers. The service is launching soon and will let adults book professional tango dance partners for milongas, lessons, and practice throughout Buenos Aires.

## Audience and positioning

The primary audience is international tango travelers visiting Buenos Aires, especially women aged 40 and over who want to spend more of their limited time dancing and feel comfortable in the local tango scene.

The service is open to customers aged 18 or older of every gender and dance level. Marketing may speak directly to the primary audience, but it must not imply that other adults are excluded.

Use “professional tango dance partner” when describing the service in English. Avoid the standalone word “companion” when it could be misunderstood. Dandy Dancers is a professional tango and cultural service, not an escort or dating service.

## Languages and routes

The current public languages are English and Spanish:

- `/en/`: English landing page
- `/es/`: Spanish landing page
- `/en/taxi-dancer-registration/`: English taxi-dancer application page
- `/es/taxi-dancer-registration/`: Spanish taxi-dancer application page

The root route sends visitors to English. All public copy must remain natural and equivalent in intent across English and Spanish rather than being translated word for word.

## Landing-page sections

### 1. Header

The header contains:

- The Dandy Dancers logo linked to the current language homepage.
- Instagram, email, and WhatsApp contact links.
- An English/Spanish language selector.

Contact labels, accessibility text, and the prefilled WhatsApp message come from the translation file.

### 2. Hero and platform preview

The hero leads with the promise that the visitor's best tandas await:

- English title: “Your Best Tandas Await”
- Spanish title: “Tus mejores tandas te esperan”
- English subtitle: “Book a professional dancer to go dancing.”
- Spanish subtitle: “Contratá un bailarín profesional para salir a bailar.”

The supporting message focuses on spending less time sitting and more time dancing while enjoying the tango experience the traveler came to Buenos Aires for.

The hero includes an interactive phone-style preview. It is illustrative and must not be presented as a fully accurate or currently bookable product. Visitors can click, tap, swipe, or use the step controls to move through three stages:

1. Select a milonga.
2. Pick an available dancer.
3. See a reservation-created confirmation.

The current preview includes example milongas, dancer profiles, ages, illustrative ratings and hourly prices, candidate status, a selected dancer, and confirmation details. These values are interface mock data, not public offers, verified reviews, or live availability. Any change to this flow must update the localized preview text in `src/lib/i18n/translations.js`.

### 3. Taxi-dancer service

This section explains that a taxi dancer is a professional dancer who can be booked for a milonga, class, or practice. It should emphasize that the dancer can also help a visitor:

- Feel comfortable in the local tango scene.
- Understand local customs and dance-floor codes.
- Make better use of limited time in Buenos Aires.

The customer-facing dancer directory remains marked “coming soon.” A separate CTA links prospective taxi dancers to the registration route.

### 4. Why Dandy Dancers

The section is organized around the promise “Never sit out a dance” / “No te quedes sin bailar.” It frames the visitor's time in Buenos Aires as valuable and shows how a trusted dancer can turn uncertainty into the dance experience they wanted.

The six benefit themes are:

1. Feel part of the dance scene.
2. Dance at the level you want.
3. Get more from classes.
4. Connect with the local community.
5. Practice in a real setting.
6. Enjoy comfort and peace of mind.

Together, these themes address the original customer concerns:

- Attending a milonga without being known or invited to dance.
- Spending too much of a night sitting instead of dancing.
- Finding dancers whose style and qualities match the customer's preferences.
- Finding a reliable partner for lessons and help understanding a teacher when translation is needed.
- Feeling nervous about attending a milonga alone or meeting the local community.
- Practicing techniques in a real social setting without feeling judged.
- Having reliable, respectful, personalized guidance during a limited visit.

Keep this section concise and benefit-led. The current presentation does not require expandable or collapsed pain-point lists.

### 5. Founder

The current section is “About the founder” / “Sobre el fundador.” It explains that Dandy Dancers is an independent project being created by its founder to make Buenos Aires tango experiences easier to access, more comfortable, and more memorable.

The complete founder biography and wider team story are still pending. Do not invent them. When the approved biography is available, add it to both languages and update the relevant SEO and LLM-facing documentation.

### 6. Footer

The footer contains:

- “More than a dance—a shared moment.” / “Más que un baile: un momento compartido.”
- Instagram, email, and WhatsApp links.
- The current under-construction status.

## Taxi-dancer registration page

The registration page is for dancers applying to join Dandy Dancers, not for travelers booking a dancer.

It should:

- Explain that Dandy Dancers wants to learn about and evaluate the applicant's profile.
- State that the form takes approximately 10 minutes.
- Explain that selected applicants will be contacted.
- Link to the configured external application form.

This route is intentionally excluded from search indexing and from the public sitemap unless that policy is explicitly changed.

## Content and trust rules

- Keep the site status as “launching soon” or “under construction” until customer booking is genuinely available.
- Do not present mock preview prices, ratings, reviews, dancers, dates, venues, or availability as verified business facts.
- Do not add real prices, reviews, guarantees, policies, launch dates, phone numbers, or addresses until they are confirmed and publicly supported.
- Keep contact details, service facts, structured data, and LLM-facing files consistent with the website.
- Track missing business and trust information in `SEO-PENDING.md`.

## SEO and LLM discovery

SEO maintenance requirements are documented in `AGENTS.md`. The site currently includes:

- Localized titles and meta descriptions.
- Canonical and reciprocal `hreflang` links.
- Open Graph and Twitter metadata.
- JSON-LD for the organization, website, pages, and service.
- `robots.txt` and a bilingual sitemap.
- Concise and extended LLM descriptions in `static/llms.txt` and `static/llms-full.txt`.

Update these resources whenever public routes, business facts, launch status, supported languages, or service details change.

## Visual direction

The interface uses shared CSS variables and reusable Svelte components. Core brand colors include:

- Primary: `#8E4CAB`
- Primary light: `#EED0FA`
- Primary dark: `#1A0622`

Maintain a welcoming, refined tango identity, responsive layouts, accessible controls, visible keyboard focus, and meaningful alternative text. The phone preview should remain clearly labeled as illustrative.

## Current official business facts

- Brand: Dandy Dancers
- Founder: Franco Cespi
- Founded: 2026
- Service area: all of Buenos Aires, Argentina
- Status: launching soon
- Email: `contact.dandydancers@gmail.com`
- Instagram: `https://www.instagram.com/dandydancers/`
- WhatsApp: `https://wa.me/5491155284015`
