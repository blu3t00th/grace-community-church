# Grace Community Church Website

Production-ready static church website built with Astro, Tailwind CSS, TypeScript, Astro content collections, Markdown content, and Decap CMS.
<img width="2529" height="1233" alt="image" src="https://github.com/user-attachments/assets/e7818e1f-071a-460a-8478-7ce3d694f6f5" />


Current versions in this project:

astro: 6.3.7
tailwindcss: 4.3.0
typescript: 6.0.3
@astrojs/check: 0.9.9
decap-cms (CDN in /admin): 3.12.2

## Tech Stack

- Astro (static output)
- Tailwind CSS
- TypeScript
- Astro Content Collections (with Zod schemas)
- Decap CMS (`/admin`)
- Netlify-ready deployment

## Quick Start

```bash
npm install
npm run dev
```

Open: `http://localhost:4321`

## Scripts

```bash
npm run dev
npm run check
npm run build
npm run preview
```

## Command Flow (Requested)

```bash
npm create astro@latest grace-community-church
cd grace-community-church
npm install
npm run dev
npm run check
npm run build
```

This project is already generated with that structure and equivalent configuration.

## Content Editing

All core content is Markdown in `src/content/`:

- `src/content/sermons/`
- `src/content/events/`
- `src/content/news/`
- `src/content/pages/`

Schemas are defined in `src/content.config.ts`.

## Decap CMS

Admin route: `/admin`

Files:

- `src/pages/admin.astro`
- `public/admin/config.yml`

### Run Decap CMS Locally

Terminal 1:

```bash
npx decap-server
```

Terminal 2:

```bash
npm run dev
```

Then visit:

- `http://localhost:4321/admin`

`local_backend: true` is enabled in CMS config.

## Netlify Deployment

1. Push this project to GitHub.
2. In Netlify: **Add new site** -> **Import an existing project**.
3. Build settings (already in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

### Enable Decap Auth on Netlify (Recommended)

1. In Netlify site settings, enable **Identity**.
2. Under Identity, enable **Git Gateway**.
3. Invite church staff users in Identity.
4. Staff can log in at `/admin` and edit content.

## Netlify Forms (Contact Page)

`src/components/ContactForm.astro` is Netlify Forms-ready:

- `method="POST"`
- `data-netlify="true"`
- hidden `form-name`
- honeypot spam field

Form submissions appear in Netlify dashboard after deployment.

## Vercel / Cloudflare Pages Notes

- Static deployment works on both Vercel and Cloudflare Pages.
- Decap CMS authentication is simplest on Netlify with Identity + Git Gateway.
- For Vercel/Cloudflare, Decap requires extra OAuth/backend setup (for example an external auth provider and compatible Git backend).

## CMS Editor Workflow

1. Open `/admin`.
2. Log in (Netlify Identity user).
3. Edit sermons/events/news/pages.
4. Save draft or request review (editorial workflow).
5. Publish changes.

## Project Structure

```text
src/
  components/
  layouts/
  pages/
  content/
  styles/
  content.config.ts
public/
  admin/
  uploads/
astro.config.mjs
netlify.toml
tailwind.config.mjs
postcss.config.mjs
tsconfig.json
README.md
```
