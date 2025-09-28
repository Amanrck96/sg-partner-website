# SG Partner Website

This is a redeveloped website for SG Partner using Next.js, Tailwind CSS, and Shadcn UI components. It features a modern design with sections for About Us, Expertise, Services, Clientele, Blog, and Contact Us.

## Features
- Responsive design for all device sizes
- Dark mode support
- Contact form with validation and email submission via Formspree
- Static export for GitHub Pages deployment
- Professional UI/UX with fast loading times

## Prerequisites
- Node.js (v18 or later)
- npm or yarn

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/Amanrck96/sg-partner-website.git
   cd sg-partner-website
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Development
To run the development server:
```
npm run dev
```
Open http://localhost:3000 in your browser.

## Building for Production
To build the static site:
```
npm run build
```

## Deployment to GitHub Pages
1. Set `GH_PAGES=true` environment variable.
2. Run:
   ```
   npm run deploy
   ```
This will build the site with basePath '/sg-partner-website' and deploy to GitHub Pages using gh-pages.

## Configuration
- For the contact form, replace the Formspree endpoint in `src/components/sections/contact-form.tsx` with your actual Formspree form hash (e.g., 'https://formspree.io/f/yourhash').
- Sign up at https://formspree.io/ to get your form endpoint.

## License
All Rights Reserved by SG Partner. Designed by Anand M (AJK).
