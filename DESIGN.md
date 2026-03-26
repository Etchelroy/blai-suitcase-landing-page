# LUNA'S DESIGN SPECIFICATION
## Premium Luggage Brand Landing Page

---

## SUMMARY
A luxury travel-inspired landing page showcasing high-end luggage through a clean, minimalist aesthetic with rich earth tones, expansive hero imagery, and a seamless user journey from discovery to purchase intent.

---

## LAYOUT

**VIEWPORT BREAKPOINTS:**
- Mobile: 375px–667px
- Tablet: 768px–1024px
- Desktop: 1025px+

**SECTION STACK (top to bottom):**

1. **STICKY NAVIGATION** (fixed top, 60px height)
   - Left: Logo wordmark "TRAVERSE" (18px, bold)
   - Center: Nav links (hidden on mobile, visible tablet+)
   - Right: Cart icon + CTA button

2. **HERO SECTION** (100vh on desktop, 90vh mobile)
   - Full-bleed background image
   - Overlay gradient (dark, 40% opacity, bottom-heavy)
   - Left-aligned text block (mobile: centered)
   - Large headline + subheadline + primary CTA button

3. **PRODUCT SHOWCASE** (120vh desktop, 140vh mobile)
   - Section title + subtitle
   - 4-card grid (1 column mobile, 2 tablet, 4 desktop)
   - Each card: product image, name, price, hover state

4. **FEATURES GRID** (100vh desktop, auto mobile)
   - 6 feature blocks in 2×3 grid (mobile: stacked)
   - Icon + heading + description per block

5. **TESTIMONIALS** (80vh desktop, 120vh mobile)
   - Section title
   - 3 testimonial cards (1 mobile, 2 tablet, 3 desktop)
   - Avatar + name/role + quote

6. **CTA SECTION** (60vh desktop, 50vh mobile)
   - Centered content: headline + description + dual buttons
   - Background: subtle pattern or gradient

7. **FOOTER** (auto height)
   - 4-column layout (mobile: stacked)
   - Links, company info, newsletter signup, social icons

---

## COLORS

**Primary Palette:**
- **Background (Light):** #FAFAF8 (warm off-white)
- **Background (Dark Accent):** #1A1A18 (charcoal)
- **Accent Brand:** #C9A876 (warm gold/bronze)
- **Accent Secondary:** #2D5A4E (deep teal)
- **Text Primary:** #2A2A2A (near-black)
- **Text Secondary:** #6B6B6B (mid-gray)
- **Text Light:** #FFFFFF (white, on dark)
- **Border/Divider:** #E8E8E4 (light gray)
- **Success/CTA:** #8B6F47 (muted brown)
- **Hover State:** #A0905D (lighter bronze)

**Application:**
- Nav background: #FAFAF8 with 95% opacity when scrolled
- Hero overlay: #000000 at 35% opacity
- Card backgrounds: #FFFFFF with subtle shadow
- Feature icons: #C9A876
- Buttons: #8B6F47 text on #C9A876 background; reverse on secondary

---

## COMPONENTS

### NAVIGATION BAR (Fixed, 60px)
- **Logo:** "TRAVERSE" in 18px Montserrat Bold, #1A1A18
- **Nav Links (Desktop/Tablet):** 14px, #2A2A2A, 24px spacing, hover: #C9A876
  - Links: "Shop," "About," "Travel Stories," "Support"
- **Cart Icon:** 20×20px, Heroicons shopping-bag, #2A2A2A
- **Primary CTA Button:** "Book Journey" — 12px, 12px×24px padding, #FAFAF8 text on #8B6F47 background, border-radius 4px, hover: scale 1.05
- **Hamburger Menu (Mobile only):** 24×24px, #2A2A2A

---

### HERO SECTION (100vh desktop, 90vh mobile)
- **Background Image:** https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&h=900&fit=crop (winding mountain road with traveler)
- **Overlay:** Linear gradient 180°, transparent to #000000 at 40% opacity
- **Headline:** "Your Journey, Perfectly Packed" — 56px (desktop), 32px (mobile), Montserrat Bold, #FFFFFF, line-height 1.2, left-aligned (desktop), centered (mobile)
- **Subheadline:** "Experience uncompromising durability and elegance on every adventure." — 18px (desktop), 14px (mobile), Lato Regular, #F0F0F0, opacity 90%, 20px margin-top
- **Primary CTA:** "Explore Collection" button — 14px, 16px×40px padding, #FAFAF8 on #C9A876, border-radius 4px, margin-top 32px, hover: background #A0905D
- **Secondary CTA (link-style):** "Watch Our Story" — 14px, #FFFFFF, underline on hover

---

### PRODUCT SHOWCASE SECTION

**Section Header:**
- **Title:** "Crafted for Every Adventure" — 42px (desktop), 28px (mobile), Montserrat Bold, #1A1A18, centered
- **Subtitle:** "Explore our premium collection of durable, beautifully designed luggage." — 16px, Lato Regular, #6B6B6B, centered, max-width 600px, margin-top 12px

**Product Cards (4 total):**
Layout: 4-column grid (desktop), 2-column (tablet), 1-column (mobile), 24px gap

**Per Card (each 280px width desktop, 100% mobile):**
- **Product Image:** 280×320px, border-radius 8px, object-fit: cover
  - Card 1 (Carry-on): https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop (sleek luggage front view)
  - Card 2 (Roller): https://images.unsplash.com/photo-1606935248290-a2c3f88f3a81?w=600&h=700&fit=crop (modern hardshell suitcase)
  - Card 3 (Backpack): https://images.unsplash.com/photo-1553429784-e91953dec042?w=600&h=700&fit=crop (travel backpack detail)
  - Card 4 (Set): https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=700&fit=crop (luggage set lifestyle)
- **Product Name:** 16px, Montserrat SemiBold, #1A1A18, margin-top 16px
- **Price:** "$" + amount, 18px, Montserrat Bold, #C9A876, margin-top 8px
- **Description (hidden, shown on hover):** 13px, Lato Regular, #6B6B6B, max-height 80px, opacity 0 → 1 on hover
- **Add to Cart Button (hover state):** 12px, #FAFAF8 on #8B6F47, 8px×16px padding, border-radius 4px, opacity 0 → 1, y-translate -8px

**Hover Behavior:**
- Card: shadow 0 12px 32px rgba(0,0,0,0.12), scale 1.03
- Image: brightness 1.08
- Description & button: fade in, button rises

---

### FEATURES GRID (6 blocks)

Layout: 3-column (desktop), 2-column (tablet), 1-column (mobile), 40px gap

**Section Header:**
- **Title:** "Why Travel the TRAVERSE Way" — 42px, Montserrat Bold, #1A1A18, centered, margin-bottom 48px

**Per Feature Block (280px width desktop):**
- **Icon Container:** 64×64px, centered, background #F0E8DC, border-radius 12px
  - Icon: 32×32px, #C9A876, centered (Heroicons: briefcase, shield-check, zap, globe-alt, lock-closed, truck)
- **Heading:** 18px, Montserrat SemiBold, #1A1A18, margin-top 20px, centered
- **Description:** 14px, Lato Regular, #6B6B6B, line-height 1.6, margin-top 12px, text-align center

**Features (left to right, top to bottom):**
1. **Icon:** briefcase | **Heading:** "Premium Materials" | **Description:** "Aerospace-grade polycarbonate and YKK zippers built to last decades."
2. **Icon:** shield-check | **Heading:** "Lifetime Warranty" | **Description:** "We stand behind our craftsmanship with comprehensive coverage."
3. **Icon:** zap | **Heading:** "TSA Smart Locks" | **Description:** "Travel with confidence—biometric security for peace of mind."
4. **Icon:** globe-alt | **Heading:** "Global Support" | **Description:** "24/7 assistance in 50+ countries, wherever your journey takes you."
5. **Icon:** lock-closed | **Heading:** "Eco-Conscious" | **Description:** "Responsibly sourced materials and carbon-neutral shipping."
6. **Icon:** truck | **Heading:** "Free Shipping" | **Description:** "Orders ship worldwide with 30-day hassle-free returns."

---

### TESTIMONIALS SECTION

**Section Header:**
- **Title:** "Stories from Our Travelers" — 42px, Montserrat Bold, #1A1A18, centered, margin-bottom 48px

Layout: 3-column (desktop), 2-column (tablet), 1-column (mobile), 32px gap

**Per Testimonial Card (300px width desktop, 100% mobile):**
- **Background:** #FFFFFF
- **Shadow:** 0 4px 16px rgba(0,0,0,0.08)
- **Border-radius:** 8px
- **Padding:** 32px
- **Star Rating:** 5 Heroicons star-solid at 16×16px, #C9A876, margin-bottom 16px
- **Quote Text:** 15px, Lato Italic, #2A2A2A, line-height 1.8, margin-bottom 20px, quote mark ("") in #C9A876 48px at top-left, opacity 20%
- **Avatar:** 48×48px circle, object-fit cover, margin-right 12px
- **Author Name:** 14px, Montserrat SemiBold, #1A1A18
- **Role:** 12px, Lato Regular, #6B6B6B

**Testimonials:**
1. **Avatar:** https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop | **Name:** Maya Chen | **Role:** Travel Photographer | **Quote:** "The durability and lightweight design have been game-changers for my expeditions across Southeast Asia. Best investment I've made."

2. **Avatar:** https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop | **Name:** James Rodriguez | **Role:** Business Consultant | **Quote:** "Flying 50+ times yearly, I've tried every brand. TRAVERSE suitcases handle chaos better than anything on the market."

3. **Avatar:** https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop | **Name:** Priya Patel | **Role:** Adventure Blogger | **Quote:** "The craftsmanship is stunning, and the organization system saves hours. Every pocket is thoughtfully designed. Highly recommend."

---

### CTA SECTION (Call-to-Action)

**Background:** Linear gradient 135°, #2D5A4E at 0%, #1A1A18 at 100%

**Layout:** Centered content block, max-width 700px, padding 80px (desktop), 60px (mobile)

- **Headline:** "Ready for Your Next Adventure?" — 48px (desktop), 28px (mobile), Montserrat Bold, #FFFFFF
- **Description:** "Join thousands of travelers who've upgraded their journeys. Enjoy 15% off your first order." — 16px, Lato Regular, #F0E8DC, line-height 1.7, margin-top 20px
- **Email Input:** 
  - Width: 100%, max-width 400px
  - Height: 48px
  - Background: #FFFFFF
  - Padding: 12px 16px
  - Border: 1px #E8E8E4
  - Border-radius: 4px
  - Placeholder text: "Enter your email" — 14px, #A0A0A0
  - Margin-top: 24px
- **Primary Button:** "Claim Discount" — 14px, #2D5A4E on #C9A876, 16px×40px padding, border-radius 4px, margin-left 12px (inline on desktop, below on mobile), hover: background #A0905D
- **Secondary Button (margin-top 16px):** "Shop Without Discount" link-style — 14px, #C9A876, underline hover

---

### FOOTER

**Background:** #1A1A18

**Layout:** 4-column grid (desktop, 280px each), 2-column (tablet), 1-column (mobile), padding 60px 40px (desktop), 40px 24px (mobile)

**Column 1 — Brand:**
- **Logo:** "TRAVERSE" — 16px, Montserrat Bold, #C9A876
- **Tagline:** "Travel Redefined" — 12px, Lato Regular, #A0A0A0, margin-top 8px
- **Social Icons (24×24px, margin-top 16px, 12px gap):**
  - Facebook: https://heroicons.com (outline)
  - Instagram: https://heroicons.com (outline)
  - Twitter: https://heroicons.com (outline)
  - LinkedIn: https://heroicons.com (outline)
  - Color: #C9A876, hover: #FFFFFF

**Column 2 — Shop:**
- **Heading:** "Shop" — 12px, Montserrat Bold, #FFFFFF, text-transform uppercase, margin-bottom 16px
- **Links (12px, Lato Regular, #A0A0A0, 10px vertical spacing, hover: #C9A876):**
  - Carry-On Luggage
  - Roller Suitcases
  - Backpacks
  - Travel Accessories

**Column 3 — Company:**
- **Heading:** "Company" — 12px, Montserrat Bold, #FFFFFF, text-transform uppercase, margin-bottom 16px
- **Links (12px, Lato Regular, #A0A0A0, 10px vertical spacing, hover: #C9A876):**
  - About Us
  - Sustainability
  - Blog
  - Careers

**Column 4 — Support:**
- **Heading:** "Support" — 12px, Montserrat Bold, #FFFFFF, text-transform uppercase, margin-bottom 16px
- **Links (12px, Lato Regular, #A0A0A0, 10px vertical spacing, hover: #C9A876):**
  - Help Center
  - Contact
  - Shipping Info
  - Returns & Warranty

**Bottom Bar (border-top 1px #333333, padding 24px 0, margin-top 40px):**
- **Copyright:** "© 2024 TRAVERSE. All rights reserved." — 11px, Lato Regular, #6B6B6B, left-aligned
- **Legal Links (right-aligned):** "Privacy Policy" | "Terms of Service" — 11px, Lato Regular, #6B6B6B, hover: #C9A876

---

## INTERACTIONS

**NAVIGATION:**
- Scroll 100px down → Nav background opacity shift to 95%, add subtle bottom shadow (0 2px 8px rgba(0,0,0,0.08))
- Hover nav links → text color change to #C9A876, smooth 200ms transition
- Mobile menu open → hamburger icon rotates 90°, overlay menu slides in from right (300ms cubic-bezier 0.4, 0, 0.2, 1)
- Mobile menu items → staggered fade-in, 100ms between each

**HERO SECTION:**
- Page load → text and buttons fade in over 800ms (opacity 0 → 1), stagger 200ms between elements
- Primary CTA hover → background color shift to #A0905D, scale 1.05, 300ms ease
- Secondary CTA hover → text color to #C9A876, underline appears

**PRODUCT CARDS:**
- Hover (desktop) → entire card lifts (transform translateY -8px), shadow expands (0 12px 32px rgba(0,0,0,0.12)), image brightness increases to 1.08, 300ms ease
- Description & button fade in (opacity 0 → 1, 300ms)
- Button hover → background shifts to #A0905D, 200ms
- Click product → modal or page nav to detail view (out of scope for this spec)

**FEATURE BLOCKS:**
- Scroll into view → icon container background color animates from #E8E8DC to #F0E8DC, text fades in (opacity 0 → 1) over 600ms with stagger 100ms

**TESTIMONIALS:**
- Scroll into view → card slides in from bottom (transform translateY 24px → 0, opacity 0 → 1) over 700ms, stagger 150ms between cards
- Hover (desktop) → card lifts (translateY -6px), shadow increases, 250ms ease
- Star rating → each star animates in sequence on scroll (100ms between), color #C9A876

**CTA SECTION:**
- Email input focus → border color changes to #C9A876, background slight shift to #FAFAF8, box-shadow 0 0 0 3px rgba(201, 168, 118, 0.1)
- Button hover → background shifts to #A0905D, scale 1.05, 250ms
- Submit flow (mock) → button text changes to "Check Your Email ✓" (2s), then resets
- Secondary link hover → text color to #FFFFFF, 200ms

**FOOTER:**
- Link hover → text color changes to #FFFFFF, 150ms ease
- Newsletter signup (if integrated) → same as CTA email flow

**GLOBAL:**
- Smooth scroll behavior for anchor links (scroll-behavior: smooth)
- All transitions use cubic-bezier(0.4, 0, 0.2, 1) unless noted
- Mobile menu close on link click → instant
- Accessibility: focus states visible on all interactive elements (outline 2px #C9A876)

---

## IMAGES

**Hero Section:**
- Background: https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&h=900&fit=crop
  *(Description: Winding mountain road with distant traveler on vista, warm golden-hour lighting)*

**Product Showcase:**
1. https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop *(Sleek carry-on suitcase, front 3/4 view, studio lighting)*
2. https://images.unsplash.com/photo-1606935248290-a2c3f88f3a81?w=600&h=700&fit=crop *(Modern hardshell roller suitcase, side profile, minimalist background)*
3. https://images.unsplash.com/photo-1553429784-e91953dec042?w=600&h=700&fit=crop *(Premium travel backpack, detail shot, earthy tones)*
4. https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=700&fit=crop *(Luggage set lifestyle, packed and ready for travel, warm ambient)*

**Testimonials (Avatars):**
1. https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop *(Portrait: woman, travel/outdoor context)*
2. https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop *(Portrait: man, professional/approachable)*
3. https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop *(Portrait: woman, diverse representation)*

---

## STYLE NOTES

**Typography:**
- **Headlines (h1, h2, h3):** Montserrat (Bold 700, SemiBold 600) — geometric, confident, modern
- **Body & Labels:** Lato (Regular 400, Italic 400) — highly legible, friendly, classic sans-serif
- **Sizing Hierarchy:**
  - Page Hero H1: 56px (desktop) / 32px (mobile), line-height 1.2
  - Section H2: 42px (desktop) / 28px (mobile), line-height 1.3
  - Card H3: 18px / 16px, line-height 1.4
  - Body: 16px (desktop) / 14px (mobile), line-height 1.6–1.8
  - Small text (labels, footer): 12px–14px

**Spacing:**
- Padding (sections): 80px horizontal (desktop), 40px (tablet), 24px (mobile)
- Margins (between sections): 120px (desktop), 80px (mobile)
- Gap (grids/cards): 32–40px (desktop), 20px (mobile)
- Component padding: 16–32px (interior spacing), 12–16px (buttons)
- Line-height: 1.6–1.8 for readability on body text

**Visual Feel:**
- **Aesthetic:** Minimalist luxury with travel-inspired warmth
- **Color Temperature:** Warm earth tones (golds, teals, charcoal) evoke natural materials and wanderlust
- **Contrast:** High contrast text on light backgrounds (#2A2A2A on #FAFAF8), reversed on dark sections (#FFFFFF on #1A1A18)
- **Depth:** Subtle shadows (0 4px 16px rgba(0,0,0,0.08) for cards) create layering without heaviness
- **Imagery Style:** Real, authentic travel photography with golden-hour tones and aspirational lifestyle context
- **Animation Feel:** Smooth, purposeful micro-interactions (ease-out transitions 200–800ms) that feel premium and responsive, not jarring
- **Whitespace:** Generous breathing room (40–60px margins, 24px+ gap between components) creates sophistication and prevents visual clutter

**Accessibility Notes:**
- All text meets WCAG AA contrast ratios (7:1 minimum for body text)
- Focus states visible: 2px outline in #C9A876
- Images include descriptive alt text
- Interactive elements minimum 48×48px touch target (mobile)
- Form labels explicitly linked to inputs
- Icons accompanied by text labels or aria-labels

---

**END OF SPECIFICATION**

Developer: Implement using Next.js/React + Tailwind CSS + Framer Motion. Use exact hex colors, image URLs, and typography as defined. Prioritize mobile-first responsive design. All transitions and hover states are mandatory for polished UX.