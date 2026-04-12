# Portfolio Upgrade — Complete Implementation Plan

> **For:** Any AI model continuing this work  
> **Project:** Yousef Ramadan's Shopify Developer Portfolio  
> **Root:** `e:\info\yousef-portfolio-multipage\site`  
> **Tech:** Static HTML + Tailwind CDN + Vanilla CSS (`style.css`) + Vanilla JS (`main.js`) + GSAP 3.12  

---

## Table of Contents

1. [Project Context & Architecture](#1-project-context--architecture)
2. [Phase 1: Dedicated Case Study Pages](#2-phase-1-dedicated-case-study-pages)
3. [Phase 2: Functional Contact Form](#3-phase-2-functional-contact-form)
4. [Phase 3: Blog Articles with Real Content](#4-phase-3-blog-articles-with-real-content)
5. [Phase 4: 404 Error Page](#5-phase-4-404-error-page)
6. [Phase 5: Scroll Animations & Micro-Interactions](#6-phase-5-scroll-animations--micro-interactions)
7. [Phase 6: Accessibility & SEO Hardening](#7-phase-6-accessibility--seo-hardening)
8. [Design System Reference](#8-design-system-reference)
9. [Verification Plan](#9-verification-plan)

---

## 1. Project Context & Architecture

### File Structure
```
site/
├── index.html          (Homepage — hero, about, impact, featured work, ROI calc, testimonials, CTA)
├── services.html       (6 service cards + comparison slider + ecosystem section)
├── work.html           (11 project cards + modal popup + brands section)
├── store.html          (Shopioso code snippet store — 33+ snippets with filter)
├── process.html        (4-step process + timeline)
├── pricing.html        (3-tier pricing + project/retainer toggle + FAQ)
├── about.html          (Full bio + skills + timeline)
├── blog.html           (3 placeholder article cards + newsletter CTA)
├── contact.html        (Contact form + channel cards + expectations)
├── style.css           (1639 lines — all shared styles, light/dark theme, responsive)
├── main.js             (425 lines — cursor, preloader, transitions, modal, accordion, filters, ROI)
└── img/                (Screenshots, banners, avatar)
```

### Shared HTML Boilerplate (Every Page Uses This)
Every HTML page follows this exact structure — **copy this pattern for new pages**:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="dark">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE TITLE | Yousef Ramadan | Front-End Shopify Developer</title>
  <meta name="description" content="...">
  <meta property="og:title" content="...">
  <meta property="og:description" content="...">
  <meta property="og:type" content="website">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://youseframadan.me/FILENAME.html">
  <link rel="icon" type="image/png" href="img/avatar.png">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script>tailwind.config={theme:{extend:{fontFamily:{heading:['Syne','sans-serif'],body:['Plus Jakarta Sans','sans-serif'],mono:['JetBrains Mono','monospace']},colors:{bg:'#0e0d0b',surface:'#161410',card:'#1e1b16','card-h':'#26221b',ink:'#f2ede4','ink-2':'#a09880','ink-3':'#5a5040',gold:'#d4a843','gold-l':'#e8c878',terra:'#c95f3a',jade:'#4ec994'}}}}</script>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="cursor"></div><div id="cursor-ring"></div>
<div class="orb orb-1"></div><div class="orb orb-2"></div><div class="orb orb-3"></div>
<div id="preloader"><div class="relative text-center"><div class="pre-text">Yousef<span class="pre-accent">.</span></div><div class="pre-bar" id="pre-bar"></div></div></div>

<!-- NAV — IDENTICAL ON EVERY PAGE, just change which .nav-link has class "active" -->
<nav id="navbar" style="background:rgba(14,13,11,0.8)">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Yousef<span class="logo-dot">.</span></a>
    <ul id="nav-links">
      <li><a href="services.html" class="nav-link">Services</a></li>
      <li><a href="work.html"     class="nav-link">Work</a></li>
      <li><a href="store.html"    class="nav-link">Store</a></li>
      <li><a href="process.html"  class="nav-link">Process</a></li>
      <li><a href="pricing.html"  class="nav-link">Pricing</a></li>
      <li><a href="contact.html"  class="nav-link">Contact</a></li>
    </ul>
    <div class="nav-right"><a href="contact.html" class="nav-cta desktop magnetic">Let's Talk</a><button id="theme-btn">🌙</button><button id="nav-toggle"><span></span><span></span><span></span></button></div>
  </div>
</nav>

<!-- PAGE CONTENT HERE -->

<!-- FOOTER — IDENTICAL ON EVERY PAGE -->
<footer><div class="container"><div class="mb-3"><a href="https://www.instagram.com/yousef.shopify/" target="_blank" class="footer-link">Instagram</a><a href="https://github.com/yousefHPramdan" target="_blank" class="footer-link">GitHub</a><a href="contact.html" class="footer-link">Contact</a></div><p class="text-[0.82rem] text-[#5a5040]">&copy; <span id="copyright-year">2026</span> Yousef Ramadan. All rights reserved.</p></div></footer>
<a href="contact.html" id="sticky-widget"><span class="sw-dot"></span><span class="sw-text">Available for Work <span>· Let's Talk</span></span></a>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="main.js"></script>
</body>
</html>
```

### Navigation Structure
The navbar links are: Services | Work | Store | Process | Pricing | Contact. Some pages (about.html, blog.html) add extra links like "About" and "Blog" to their local nav. For consistency, the standard 6 links above should be used on all pages. The "About" and "Blog" pages can be linked from the footer or other sections.

---

## 2. Phase 1: Dedicated Case Study Pages

> [!IMPORTANT]
> This is the **highest-impact** feature. Each project currently opens a basic modal on `work.html`. We need dedicated, long-form case study pages.

### Projects to Create Pages For

| # | Project | File to Create | Has Real Screenshot? | Live URL |
|---|---------|----------------|---------------------|----------|
| 1 | Tiavola | `case-tiavola.html` | ✅ `img/tiavola_mockup.png` | tiavola.com |
| 2 | ByPavo | `case-bypavo.html` | ✅ `img/bypavo_mockup.png` + `screencapture-bypavo-*.png` | bypavo.com |
| 3 | Loading-eg | `case-loading.html` | ✅ `img/loading_mockup.png` + `BANNERARCETIC.*` + `banner-loading_430x.*` | loading-eg.com |
| 4 | O2morny | `case-o2morny.html` | ✅ `img/BANNER-O2MORNY.webp` | — |
| 5 | Ocean Bottle | `case-oceanbottle.html` | ✅ `img/ocean_bottle_mockup.png` | oceanbottle.com |
| 6 | Icarus | `case-icarus.html` | ❌ Uses Unsplash placeholder | — |
| 7 | SPYDR | `case-spydr.html` | ❌ Uses Unsplash placeholder | — |
| 8 | M.G. Life | `case-mglife.html` | ❌ Uses Unsplash placeholder | — |
| 9 | Muscle Food | `case-musclefood.html` | ❌ Uses Unsplash placeholder | musclefood.com |
| 10 | Nordic Coffee | `case-nordic.html` | ❌ Uses Unsplash placeholder | — |
| 11 | Aura Jewelry | `case-aura.html` | ❌ Uses Unsplash placeholder | — |

### Case Study Page Template

Each case study page must follow this layout:

```
┌─────────────────────────────────────────────┐
│ NAV (standard)                              │
├─────────────────────────────────────────────┤
│ HERO SECTION                                │
│  - Full-width gradient background           │
│  - Project name (large, Syne heading)       │
│  - Tags (e.g., "Shopify Plus", "CRO")       │
│  - One-liner description                    │
│  - "Visit Live Store ↗" button (if live)    │
├─────────────────────────────────────────────┤
│ FULL-WIDTH SCREENSHOT                       │
│  - 16:10 aspect ratio, rounded corners      │
│  - Uses the real screenshot from /img/      │
│  - loading="lazy"                           │
├─────────────────────────────────────────────┤
│ METRICS ROW (4 stat cards)                  │
│  Scope | Timeline | Tech Stack | Key Result │
├─────────────────────────────────────────────┤
│ THE CHALLENGE (text section)                │
│  - "What problem did the client have?"      │
├─────────────────────────────────────────────┤
│ THE APPROACH (text section)                 │
│  - "What did I do technically?"             │
│  - Bullet points of technical work          │
├─────────────────────────────────────────────┤
│ THE RESULT (text section + optional metric) │
│  - "What happened after launch?"            │
├─────────────────────────────────────────────┤
│ TECH STACK (pills — reuse .tech-pill class) │
├─────────────────────────────────────────────┤
│ NEXT/PREV PROJECT NAVIGATION                │
│  - Left: ← Previous Project                │
│  - Right: Next Project →                    │
├─────────────────────────────────────────────┤
│ CTA BOX (reuse .cta-box pattern)            │
├─────────────────────────────────────────────┤
│ FOOTER (standard)                           │
└─────────────────────────────────────────────┘
```

### Data for Each Case Study

All project data already exists in `work.html` as `data-*` attributes on each project card. Extract from there:

```
data-title     → Project Name
data-link      → Live URL
data-tags      → Tag list (comma separated)
data-color     → Hero gradient background
data-scope     → Scope text
data-stack     → Tech stack text
data-timeline  → Timeline text
data-result    → Key result text
data-desc      → Full description paragraph
```

### CSS Additions Needed in `style.css`

```css
/* ── CASE STUDY ── */
.case-hero {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 160px 24px 80px;
  position: relative;
}

.case-hero h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: rgba(255,255,255,0.95);
  margin-bottom: 16px;
}

.case-screenshot {
  width: 100%;
  max-width: 1100px;
  margin: -60px auto 0;
  position: relative;
  z-index: 2;
}

.case-screenshot img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.5);
}

.case-section {
  max-width: 720px;
  margin: 0 auto;
  padding: 60px 24px;
}

.case-section h2 {
  font-family: 'Syne', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.case-section p {
  color: #a09880;
  font-size: 1rem;
  line-height: 1.85;
  margin-bottom: 16px;
}

.case-nav {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
  border-top: 1px solid rgba(242,237,228,0.06);
}

.case-nav a {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #a09880;
  transition: color 0.2s;
}

.case-nav a:hover { color: #d4a843; }
```

### JS Changes

In `work.html`, update each project card's click handler so that instead of opening a modal, it navigates to the case study page:

**Option A (Recommended):** Keep the modal as-is for backward compatibility, but ADD a "View Full Case Study →" link inside the modal that goes to the dedicated page.

**Option B:** Replace the `click` handler to navigate directly to the case study page. To do this, update the `data-project` attribute to match the filename and modify the `openModal` function in `main.js` to add a link.

### Linking Updates

In `work.html`, update the modal body (around line 221) to add a case study link:

```html
<!-- Add this inside the modal .flex.gap-3 div, before the "Visit Live Store" link -->
<a href="#" class="btn-primary" id="m-case-link">Full Case Study →</a>
```

Then in `main.js`, inside `openModal()`, add:

```js
const caseLink = document.getElementById('m-case-link');
if (caseLink) {
  const slug = d.project; // e.g., "tiavola", "pavo", "loading"
  const caseMap = {
    tiavola: 'case-tiavola.html',
    pavo: 'case-bypavo.html',
    loading: 'case-loading.html',
    icarus: 'case-icarus.html',
    o2morny: 'case-o2morny.html',
    spydr: 'case-spydr.html',
    mglife: 'case-mglife.html',
    oceanbottle: 'case-oceanbottle.html',
    musclefood: 'case-musclefood.html',
    nordic: 'case-nordic.html',
    aura: 'case-aura.html',
    vitality: 'case-vitality.html'
  };
  if (caseMap[slug]) {
    caseLink.href = caseMap[slug];
    caseLink.style.display = 'inline-flex';
  } else {
    caseLink.style.display = 'none';
  }
}
```

Also update the Featured Projects section on `index.html` (lines 229, 245) — the `<a href="work.html">` should point to `case-tiavola.html` and `case-bypavo.html` respectively.

---

## 3. Phase 2: Functional Contact Form

> [!IMPORTANT]
> The form currently submits to Web3Forms with a **placeholder API key** (`YOUR_WEB3FORMS_ACCESS_KEY`). This MUST be replaced.

### Steps

1. **User Action Required:** Yousef must go to [https://web3forms.com](https://web3forms.com), sign up with his email, and get an access key.

2. **Code Change:** In `contact.html`, line 191, replace:
   ```js
   data.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
   ```
   with the real key:
   ```js
   data.append('access_key', 'REAL_KEY_HERE');
   ```

3. **Enhance the form UX** by adding inline validation:

```js
// Add to the handleSubmit function, before the fetch call:
const name = form.querySelector('[name="name"]');
const email = form.querySelector('[name="email"]');

if (!name.value.trim()) {
  name.style.borderColor = '#c95f3a';
  name.focus();
  btn.textContent = 'Send Message';
  btn.disabled = false;
  return;
}
if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
  email.style.borderColor = '#c95f3a';
  email.focus();
  btn.textContent = 'Send Message';
  btn.disabled = false;
  return;
}

// Reset borders
name.style.borderColor = '';
email.style.borderColor = '';
```

4. **Add a success animation** — after `form.reset()`, add:

```js
gsap.from(successEl, {
  opacity: 0,
  y: 20,
  duration: 0.5,
  ease: 'power2.out'
});
```

---

## 4. Phase 3: Blog Articles with Real Content

### Current State
`blog.html` has 3 placeholder article cards with no real content and no article pages. The cards link to nothing.

### Articles to Create

| # | Title | Filename | Topic |
|---|-------|----------|-------|
| 1 | "Optimizing Liquid for Enterprise Scale" | `blog-liquid-optimization.html` | Reducing render times on 50K+ SKU stores |
| 2 | "The Sociology of the Checkout Flow" | `blog-checkout-sociology.html` | Consumer psychology + CRO insights |
| 3 | "Mastering Shopify Metaobjects" | `blog-metaobjects.html` | Dynamic content modeling for luxury brands |

### Blog Article Page Template

```
┌─────────────────────────────────────────────┐
│ NAV                                          │
├─────────────────────────────────────────────┤
│ Article Header                               │
│  - Category badge + Date + Read time         │
│  - Title (large Syne heading)                │
│  - Author line: "By Yousef Ramadan"          │
├─────────────────────────────────────────────┤
│ Article Body (max-width: 720px, centered)    │
│  - Proper heading hierarchy (h2, h3)         │
│  - Code blocks with JetBrains Mono font      │
│  - Inline code styling                       │
│  - Blockquote styling                        │
│  - Numbered/bullet lists                     │
├─────────────────────────────────────────────┤
│ Author Bio Card (reuse .about-card)          │
├─────────────────────────────────────────────┤
│ Related Articles (2-3 cards)                 │
├─────────────────────────────────────────────┤
│ Newsletter CTA (reuse from blog.html)        │
├─────────────────────────────────────────────┤
│ FOOTER                                       │
└─────────────────────────────────────────────┘
```

### CSS Additions for Blog Articles

```css
/* ── BLOG ARTICLE ── */
.article-body {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
}

.article-body h2 {
  font-family: 'Syne', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 48px 0 16px;
  letter-spacing: -0.02em;
}

.article-body h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 32px 0 12px;
}

.article-body p {
  color: #a09880;
  font-size: 1.05rem;
  line-height: 1.9;
  margin-bottom: 20px;
}

.article-body pre {
  background: #161410;
  border: 1px solid rgba(242,237,228,0.08);
  border-radius: 12px;
  padding: 20px 24px;
  overflow-x: auto;
  margin: 24px 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: #d4a843;
  line-height: 1.7;
}

.article-body code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.88em;
  background: rgba(212,168,67,0.1);
  color: #d4a843;
  padding: 2px 8px;
  border-radius: 4px;
}

.article-body pre code {
  background: none;
  padding: 0;
}

.article-body blockquote {
  border-left: 3px solid #d4a843;
  padding: 16px 24px;
  margin: 24px 0;
  background: rgba(212,168,67,0.04);
  border-radius: 0 12px 12px 0;
}

.article-body blockquote p {
  color: #f2ede4;
  font-style: italic;
}

.article-body ul, .article-body ol {
  color: #a09880;
  padding-left: 24px;
  margin-bottom: 20px;
}

.article-body li {
  margin-bottom: 8px;
  line-height: 1.8;
}
```

### Link the Articles

In `blog.html`, wrap each `<article>` card in an `<a>` tag:

```html
<a href="blog-liquid-optimization.html" style="text-decoration:none;color:inherit">
  <article class="card p-0 overflow-hidden reveal group cursor-pointer">
    <!-- existing content -->
  </article>
</a>
```

### Article Content Guidelines

Write each article from Yousef's perspective as a Shopify developer. The content should:
- Be 800-1200 words
- Include 2-3 code snippets (Liquid, JS, or HTML)
- Use practical, real-world examples
- End with a CTA linking to `contact.html`
- Mention relevant projects from the portfolio where applicable

---

## 5. Phase 4: 404 Error Page

### Create `404.html`

A branded error page that:
- Uses the standard boilerplate (nav, footer, preloader)
- Shows a large "404" in gradient text
- Has a heading: "Page not found"
- Has a subheading explaining the error
- Has two buttons: "Go Home" → `index.html`, "View My Work" → `work.html`
- Uses a fun animation — e.g., the "404" number has a subtle floating animation

### CSS Addition

```css
.error-number {
  font-family: 'Syne', sans-serif;
  font-size: clamp(8rem, 20vw, 16rem);
  font-weight: 800;
  background: linear-gradient(135deg, #d4a843 0%, #c95f3a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  animation: float404 3s ease-in-out infinite;
}

@keyframes float404 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
```

---

## 6. Phase 5: Scroll Animations & Micro-Interactions

### Add GSAP ScrollTrigger

Add ScrollTrigger CDN to ALL pages (after the GSAP core script):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

> [!NOTE]
> `blog.html` already includes ScrollTrigger. Add it to the other 8 pages.

### Section Entrance Animations

In `main.js`, add after the existing `DOMContentLoaded` block:

```js
// ── GSAP SCROLL ANIMATIONS ──
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Stagger cards on scroll
  gsap.utils.toArray('.card, .impact-card, .testi-card, .why-card, .pricing-card').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: (i % 3) * 0.15, // stagger within row
      ease: 'power2.out'
    });
  });

  // Section titles — slide in from left
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  // Parallax on featured project images (index.html)
  gsap.utils.toArray('.aspect-\\[16\\/10\\] img').forEach(img => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img.closest('a, .card'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      y: -30,
      ease: 'none'
    });
  });
}
```

> [!WARNING]
> The existing `.reveal` IntersectionObserver animation and the new GSAP ScrollTrigger may conflict on the same elements. Either:
> - Remove `class="reveal"` from elements that get GSAP animations, OR
> - Only apply GSAP to elements that DON'T have `.reveal`
>
> The safest approach is to keep `.reveal` as-is (it works) and only add GSAP for NEW enhanced animations (parallax, counter animations, etc).

### Smooth Counter Animation for Impact Numbers

The homepage impact section ("+40%", "<2s", etc.) should animate on scroll. Add:

```js
// Animate impact numbers on scroll
gsap.utils.toArray('.impact-number').forEach(el => {
  const text = el.textContent;
  const match = text.match(/[\d.]+/);
  if (!match) return;
  
  const target = parseFloat(match[0]);
  const prefix = text.slice(0, text.indexOf(match[0]));
  const suffix = text.slice(text.indexOf(match[0]) + match[0].length);
  
  gsap.from({val: 0}, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    onUpdate: function() {
      const current = this.targets()[0].val;
      el.textContent = prefix + (Number.isInteger(target) ? Math.round(current) : current.toFixed(1)) + suffix;
    }
  });
});
```

---

## 7. Phase 6: Accessibility & SEO Hardening

### Accessibility Fixes

1. **Skip Link** — Add to every page, right after `<body>`:
   ```html
   <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100000] focus:bg-gold focus:text-bg focus:px-4 focus:py-2 focus:rounded-lg">Skip to content</a>
   ```
   Add `id="main-content"` to the first content section after the nav.

2. **Focus States** — Add to `style.css`:
   ```css
   *:focus-visible {
     outline: 2px solid #d4a843;
     outline-offset: 3px;
     border-radius: 4px;
   }
   ```

3. **ARIA Labels** — Add `aria-label` to:
   - `#nav-toggle` → `aria-label="Toggle navigation menu"`
   - `#theme-btn` → `aria-label="Toggle light/dark theme"`
   - `.modal-close` → `aria-label="Close modal"`
   - Each social link in footer

4. **Alt Text Audit** — Ensure all `<img>` tags have descriptive `alt` text (they currently do — verify this stays true for new images).

### SEO Fixes

1. **Add `loading="lazy"` to ALL images below the fold** across every HTML file. Only the hero/first-visible image should NOT have lazy loading.

2. **Structured Data** — `index.html` already has a `Person` schema. Add `WebSite` schema:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "WebSite",
     "name": "Yousef Ramadan Portfolio",
     "url": "https://youseframadan.me",
     "potentialAction": {
       "@type": "SearchAction",
       "target": "https://youseframadan.me/work.html",
       "query-input": "required name=search_term_string"
     }
   }
   ```

3. **Internal Linking** — Add "breadcrumb-style" links on each case study page:
   ```html
   <div class="container pt-24">
     <a href="work.html" class="text-[0.82rem] text-[#5a5040] hover:text-gold transition-colors">← Back to All Projects</a>
   </div>
   ```

---

## 8. Design System Reference

### Color Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#0e0d0b` | Page background |
| `surface` | `#161410` | Section backgrounds |
| `card` | `#1e1b16` | Card backgrounds |
| `card-h` | `#26221b` | Card hover / elevated |
| `ink` | `#f2ede4` | Primary text |
| `ink-2` | `#a09880` | Secondary text |
| `ink-3` | `#5a5040` | Muted text |
| `gold` | `#d4a843` | Primary accent |
| `gold-l` | `#e8c878` | Light accent |
| `terra` | `#c95f3a` | Secondary accent |
| `jade` | `#4ec994` | Success/positive |

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | Syne | 700-800 | clamp responsive |
| Body | Plus Jakarta Sans | 300-600 | 0.82-1.1rem |
| Code | JetBrains Mono | 400-500 | 0.85rem |

### Border & Radius Patterns
- Cards: `border-radius: 20px`, `border: 1px solid rgba(242,237,228,0.06)`
- Buttons: `border-radius: 999px`
- Tags/Badges: `border-radius: 999px`
- Inputs: `border-radius: 12px`

### Animation Easing
- Standard: `cubic-bezier(0.23, 1, 0.32, 1)` — used everywhere for butter-smooth motion
- GSAP equivalent: `power2.out` or `power4.inOut`

### Light Theme
All light theme overrides use `[data-theme="light"]` selector prefix. The theme toggle is in `main.js` and stores preference in `localStorage` under key `ys-theme`.

---

## 9. Verification Plan

### Automated Checks

After implementing each phase, verify:

1. **HTML Validation** — Run each new HTML file through the W3C validator
2. **Link Check** — Verify all internal links (`href="*.html"`) point to files that exist
3. **Image Check** — Verify all `src="img/*"` paths point to files that exist
4. **Responsive Test** — Open each page in the browser and resize to mobile (375px), tablet (768px), and desktop (1440px)
5. **Theme Toggle** — Click the 🌙/☀️ button and verify light mode looks correct on new pages
6. **Page Transitions** — Click internal links and verify the GSAP preloader transition plays correctly

### Manual Checks

- [ ] Case study pages load with correct project data
- [ ] Navigation `active` class is set correctly on each page
- [ ] Contact form submits (requires real Web3Forms key)
- [ ] Blog articles render with proper typography
- [ ] 404 page looks good
- [ ] Modal still works on work.html
- [ ] New ScrollTrigger animations don't conflict with existing `.reveal` animations
- [ ] No console errors on any page
- [ ] All pages pass Lighthouse accessibility audit > 90

### Priority Order

Execute in this order:
1. **Phase 1** — Case Study Pages (highest client impact)
2. **Phase 2** — Contact Form (removes "broken" functionality)
3. **Phase 4** — 404 Page (quick win, 15 min)
4. **Phase 3** — Blog Articles (SEO + credibility)
5. **Phase 6** — A11y & SEO (polish)
6. **Phase 5** — Scroll Animations (visual polish — do last to avoid breaking things)
