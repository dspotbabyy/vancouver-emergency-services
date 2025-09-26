# Vancouver Emergency Services Website

A professional contracting website built with Astro, featuring service-specific silos for plumbing and electrical emergency services.

## 🏢 Business Overview

Vancouver Emergency Plumbing & Electrical Services provides 24/7 professional emergency services throughout Vancouver and the Lower Mainland. The website features separate service areas for plumbing and electrical services while maintaining a unified brand experience.

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro          # Main layout component
│   ├── components/
│   │   ├── ServiceHero.astro         # Hero section for service pages
│   │   ├── ServiceCard.astro         # Service offering cards
│   │   ├── plumbing/                 # Plumbing-specific components
│   │   └── electrical/               # Electrical-specific components
│   ├── pages/
│   │   ├── index.astro               # Homepage
│   │   ├── contact.astro             # Contact information
│   │   ├── plumbing/
│   │   │   └── index.astro           # Plumbing services page
│   │   └── electrical/
│   │       └── index.astro           # Electrical services page
│   ├── styles/                       # Custom styles (if needed)
│   └── assets/
│       └── images/
│           ├── plumbing/             # Plumbing service images
│           └── electrical/           # Electrical service images
└── package.json
```

## 🎯 Features

- **Service-Specific Silos**: Separate sections for plumbing and electrical services
- **Emergency Contact Integration**: Prominent emergency phone numbers throughout
- **Mobile-Responsive Design**: Built with Tailwind CSS for all device sizes
- **Professional Branding**: Consistent Vancouver Emergency Services branding
- **SEO Optimized**: Proper meta tags and structured content
- **24/7 Emergency Focus**: Emphasizes immediate availability and response

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
