# LupinC Portfolio (React)

Modernized portfolio site built with React + Vite and deployed with GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

On push to `main`, it will:
1. Install dependencies with `npm ci`
2. Build the site
3. Deploy `dist/` to GitHub Pages
