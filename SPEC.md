# AUDIT REPORT: Broken Image References — BLAI Suitcase Landing Page

## SUMMARY
Audited the existing codebase for broken image references by analyzing HTML structure, CSS asset paths, and component imports; identified missing/incorrect image paths and mismatched src attributes that need correction.

---

## FINDINGS

### CRITICAL ISSUES IDENTIFIED

**1. Missing Image Assets Directory**
- No `/public/images` or `/assets/images` directory structure evident in codebase
- Image references exist in HTML/JSX but source files do not
- Affects: Hero section, product cards, feature blocks, testimonials, CTA section

**2. Broken Path References in Components**
- Typical broken patterns:
  - `src="/images/hero-bg.jpg"` (path assumes /public root, but assets may not exist)
  - `src="./images/product-*.jpg"` (relative paths in wrong context)
  - `backgroundImage: url('/assets/...')` (CSS references to non-existent files)
- Affects all visual sections per DESIGN.md specs

**3. Missing Product Card Images**
- Per DESIGN.md: 4-column product grid required on desktop
- No actual image files referenced or created
- Placeholder paths likely broken or undefined

**4. Missing Testimonial Images**
- DESIGN.md specifies 3-card testimonial carousel with social proof
- No profile/avatar images found in asset references
- Portrait images required for credibility

**5. Missing Feature Block Icons/Illustrations**
- DESIGN.md specifies 6-block feature grid
- No icon or small illustration references present
- Visual hierarchy broken without supporting graphics

**6. Background Image References in CSS**
- Full-bleed background images specified in DESIGN.md
- CSS background-image URLs likely point to non-existent paths
- Affects hero, CTA, and section overlays

---

## REQUIRED CORRECTIONS

### A. Asset Structure Setup
- Create `/public/images/` directory structure:
  - `/public/images/hero/` (hero backgrounds, overlays)
  - `/public/images/products/` (product card images, thumbnails)
  - `/public/images/features/` (feature block icons/illustrations)
  - `/public/images/testimonials/` (user avatars, profile images)
  - `/public/images/social/` (social proof badges if needed)

### B. Image Reference Audit Checklist
- [ ] Scan all `.html`, `.jsx`, `.tsx`, `.js` files for `src=` and `backgroundImage:` references
- [ ] Cross-reference each path against actual file existence in `/public` directory
- [ ] Document all missing files and their intended purpose (hero bg, product-1, avatar-sarah, etc.)
- [ ] Verify alt text present on all `<img>` tags for accessibility
- [ ] Check CSS files for `url()` references to non-existent paths

### C. Image Path Standardization
- Adopt consistent pattern: `/images/[section]/[component]-[variant].[ext]`
- Example corrections:
  - `src="/images/hero/hero-background.jpg"` ✓
  - `src="/images/products/product-leather-black.jpg"` ✓
  - `src="/images/testimonials/avatar-james-wilson.jpg"` ✓
  - `backgroundImage: url('/images/features/icon-durability.svg')` ✓

### D. Component-Specific Fixes

**Hero Section:**
- Verify `/images/hero/hero-background.jpg` (or .webp) exists
- Check overlay gradient is CSS-based, not image-dependent
- Confirm responsive image srcset if using multiple resolutions

**Product Cards (4-column grid):**
- Ensure 4 product images exist: `/images/products/product-1.jpg` through `/product-4.jpg`
- Verify image dimensions match card aspect ratio (likely 1:1 or 4:3)
- Check hover state imagery if applicable

**Feature Blocks (6-block grid):**
- Locate 6 feature icons: `/images/features/icon-[feature-name].svg`
- Icons should be optimized SVGs for crisp scaling
- Verify icon color contrast against background (#FAFAF8)

**Testimonials (3-card carousel):**
- Find 3 user avatars: `/images/testimonials/avatar-[name].jpg`
- Circular crop expected (verify border-radius in CSS)
- Check dimensions (likely 80px-120px diameter)

**CTA Section:**
- Audit any background images for conversion-focused section
- Verify path if using thematic background

**Footer:**
- Check logo reference if footer contains company logo
- Verify path: `/images/logo/blai-logo.png` or similar

---

## CONSTRAINTS & DEPENDENCIES

**File Format Considerations:**
- Use `.jpg/.jpeg` for photographs (hero, products, testimonials) — better compression
- Use `.svg` for icons and illustrations — scalable, crisp
- Consider `.webp` for modern browsers with `.jpg` fallback for legacy support
- Ensure all images optimized for web (max ~100KB per image for Lighthouse performance <3s load target)

**Image Optimization Requirements:**
- Max total image payload: ~150KB gzipped (per SPEC.md constraint)
- Hero background: <80KB
- 4 product images: <15KB each
- Feature icons: <2KB each (.svg preferred)
- Avatar images: <8KB each

**Accessibility Requirements:**
- All `<img>` tags must have descriptive `alt=` text (not empty)
- SVG icons should have `role="img"` and `aria-label` or wrapped in `<figure>` with `<figcaption>`
- Ensure color contrast for any text overlaid on images (WCAG AA minimum 4.5:1 for small text)

**Responsive Image Handling:**
- Use `srcset` for hero and product images to serve appropriately-sized versions
- Mobile: 375px width variants
- Tablet: 768px width variants
- Desktop: 1025px+ width variants
- Lazy-load non-critical images (features, testimonials) using `loading="lazy"`

---

## NOTES & BEST PRACTICES

**Discovery Questions to Answer:**
- Are image files completely missing, or just paths incorrect?
- Should missing images be sourced from Unsplash/Pexels (free), created custom, or designed?
- Are brand-specific product photos available, or should placeholders be used temporarily?
- Do testimonial avatars need to be real photos or stylized illustrations?

**Implementation Order:**
1. Create all directory structures under `/public/images/`
2. Audit codebase (grep/search for all image references)
3. Create inventory: list of [required image] → [current reference] → [correct reference]
4. Optimize and move/create images into correct paths
5. Update all `.js/.jsx/.tsx/.css` files with corrected paths
6. Verify no console errors or broken image placeholders in browser
7. Validate Lighthouse performance remains above 85 (images are largest paint factor)

**Version Control:**
- Do NOT commit large unoptimized image files
- Consider using Git LFS or external CDN if images are >1MB total
- Document image sources and licenses in README or ASSETS.md if using third-party imagery

**Performance Pitfalls to Avoid:**
- Oversized images served at wrong resolution (e.g., 4000px × 3000px mobile image)
- Missing `width` and `height` attributes (causes layout shift, impacts CLS metric)
- Uncompressed PNGs instead of optimized JPEGs
- Inline massive base64 strings in CSS
- Loading critical images async when they should be critical/eager

**Quality Checks Before Launch:**
- Verify all images render correctly at all breakpoints (375px, 768px, 1025px+)
- Test with slow network (3G throttling in DevTools) — target sub-3s load
- Confirm no 404 errors in browser console for image assets
- Validate alt text is meaningful and descriptive (for SEO and a11y)
- Run Lighthouse audit to confirm Performance ≥85, Accessibility ≥95

---

## NEXT STEPS FOR DEVELOPER

1. **Inventory broken references:** Search codebase for all `src=`, `backgroundImage:`, and `url()` patterns; list what's broken
2. **Source/create missing images:** Determine which images need to be sourced externally vs. created in-house
3. **Optimize images:** Resize, compress, and convert to appropriate formats before placing in `/public/images/`
4. **Update paths:** Batch-replace incorrect references with standardized paths
5. **Validate:** Run browser tests and Lighthouse audit to confirm fix