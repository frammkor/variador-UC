# Dandy Dancers

Temporary static website for the Dandy Dancers project. It is built with SvelteKit
and generates static pages for English (`/en/`) and Spanish (`/es/`).

## Local development

Install dependencies once:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Then open the URL printed in the terminal, normally `http://localhost:5173`.

To verify the production output locally:

```sh
npm run build
npm run preview
```

The same commands are available from **Terminal → Run Task** in VS Code.

## Images

Place public image files in `static/images`. They are served from `/images`, so
`static/images/example.jpg` is referenced in the site as `/images/example.jpg`.

## GitHub Pages

Pushing the `master` branch runs `.github/workflows/deploy.yml`, which builds and
publishes the site. In the repository's **Settings → Pages**, set **Source** to
**GitHub Actions** before the first deployment.

The VS Code deploy task builds locally and pushes the current `master` branch.
Only committed changes are pushed.

Configure a custom domain under **Settings → Pages → Custom domain** and update
the DNS records at the domain provider. GitHub recommends verifying the domain
and enabling **Enforce HTTPS**.
