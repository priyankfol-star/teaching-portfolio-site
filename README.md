# Priyank Bhatt Teaching Portfolio Website

This is a modern responsive teaching portfolio website built from the supplied Word document content.

## Open Locally

Open `index.html` in a browser.

The page is fully local and dependency-free. It uses reusable JavaScript rendering functions, semantic HTML, custom responsive CSS, accessible controls, and local assets.

## Deploy to Vercel

The project includes `vercel.json` with security headers and the Canada region code `yul1` for any Vercel Functions that may be added later. Static files are served from Vercel's CDN edge network.

```powershell
$env:NODE_OPTIONS="--use-system-ca"
npx.cmd vercel login
npx.cmd vercel --prod --regions yul1 --yes
```

If you prefer token-based deployment:

```powershell
$env:NODE_OPTIONS="--use-system-ca"
$env:VERCEL_TOKEN="your_valid_vercel_token"
npx.cmd vercel --prod --regions yul1 --yes --token $env:VERCEL_TOKEN
```

If prompted, choose the current folder as the project root. The static site has no paid dependencies and can be deployed on Vercel's free Hobby plan, subject to Vercel's current plan limits.

## Files

- `index.html` - page shell and SEO metadata
- `app.js` - reusable rendering functions and interactivity
- `styles.css` - responsive design, theme variables, cards, timelines, and animations
- `assets/profile-headshot.jpg` - professional headshot used in the hero section
