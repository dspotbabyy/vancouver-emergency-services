# Image Organization & Optimization Guide

## Directory Structure

```
public/images/
├── branding/           # Logo, favicon, brand assets
│   ├── logo.png        # Main company logo
│   └── favicon.png     # Site favicon
├── heroes/             # Hero section images
│   ├── emergency-hero.svg
│   ├── plumbing-hero.svg
│   └── electrical-hero.svg
├── services/           # Service-specific images
├── technicians/        # Staff and technician photos
│   ├── plumber-at-work.svg
│   └── electrician-panel-work.svg
├── testimonials/       # Customer testimonial photos
│   ├── customer-1.svg
│   ├── customer-2.svg
│   └── customer-3.svg
├── icons/              # UI icons and small graphics
├── ui/                 # Interface elements
└── optimized/          # Responsive variants
    ├── mobile/         # < 640px optimized
    ├── tablet/         # 640px - 1024px optimized
    └── desktop/        # > 1024px optimized
```

## Image Optimization Standards

### File Formats
- **SVG**: Vector graphics (logos, icons, illustrations)
- **WebP**: Modern format for photographs (with PNG/JPG fallback)
- **PNG**: Screenshots, graphics with transparency
- **JPG**: Photographs without transparency

### Size Guidelines
- **Mobile**: 400px - 800px wide
- **Tablet**: 800px - 1200px wide
- **Desktop**: 1200px - 1600px wide
- **Hero Images**: Up to 1920px wide for large displays

### Performance Requirements
- **File Size**: < 100KB for above-fold images
- **Loading**: Lazy loading (except critical images)
- **Format**: WebP with fallback for older browsers
- **Compression**: 80-85% quality for JPGs, lossless for PNG/SVG

## Responsive Images

### Using OptimizedImage Component

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<!-- Critical hero image -->
<OptimizedImage
  src="/images/heroes/emergency-hero.svg"
  alt="Professional emergency technician ready to help with 24/7 services"
  width={1200}
  height={600}
  priority={true}
  loading="eager"
  sizes="100vw"
  class="hero-image"
/>

<!-- Regular content image -->
<OptimizedImage
  src="/images/technicians/plumber-at-work.svg"
  alt="Licensed plumber repairing pipes with professional tools"
  width={600}
  height={400}
  aspectRatio="3/2"
  sizes="(max-width: 640px) 100vw, 50vw"
  class="service-image"
/>
```

### Alt Text Guidelines

#### Good Alt Text Examples:
- `"Professional emergency technician ready to help with 24/7 plumbing services"`
- `"Licensed electrician working on electrical panel installation"`
- `"Customer Sarah M. from Vancouver who received excellent plumbing service"`

#### Avoid:
- Generic descriptions: `"person"`, `"image"`, `"photo"`
- Redundant phrases: `"image of"`, `"picture showing"`
- Empty alt text for meaningful images

### Image Naming Convention

```
{category}-{description}-{variant}.{ext}
```

Examples:
- `emergency-hero-desktop.webp`
- `plumber-at-work-mobile.jpg`
- `customer-testimonial-sarah-m.webp`
- `electrical-panel-repair-400w.jpg`

## Performance Best Practices

### Critical Images (Above the Fold)
- Use `priority={true}` and `loading="eager"`
- Preload in `<head>` section
- Optimize for largest contentful paint (LCP)

### Non-Critical Images
- Use `loading="lazy"` (default)
- Implement intersection observer for advanced lazy loading
- Use appropriate `sizes` attribute

### Accessibility Features
- Descriptive alt text for all meaningful images
- Proper contrast ratios for text overlays
- Consider users with slow connections
- Support for reduced motion preferences

## Implementation Checklist

- [ ] All images have descriptive alt text
- [ ] Critical images load with priority
- [ ] Non-critical images lazy load
- [ ] WebP format with fallbacks provided
- [ ] Responsive sizes defined for different viewports
- [ ] Images compressed for web delivery
- [ ] File sizes optimized (< 100KB for heroes)
- [ ] Proper aspect ratios to prevent layout shift
- [ ] SVG images optimized and cleaned

## Tools for Optimization

### Recommended Tools:
- **squoosh.app**: Google's image optimization tool
- **ImageOptim**: macOS image compression
- **TinyPNG**: PNG/JPG compression service
- **SVGO**: SVG optimization tool

### Automated Optimization:
- Consider implementing build-time image optimization
- Use Astro's image optimization features when available
- Set up CI/CD pipeline for automatic image processing