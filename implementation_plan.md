# 🔥 FINAL Plan — Proofy Studio Portfolio

**Status**: ✅ Approved — Ready to build

---

## 📋 Confirmed Details

| Detail | Value |
|---|---|
| Brand | **Proofy Studio** |
| Name | Abulfaiz Sayyed |
| Email | proofystudio@gmail.com |
| WhatsApp | +91 9309848425 |
| GitHub | github.com/proofystudio |
| Instagram | Coming soon (skip for now) |
| YouTube | Proofy Gamerz (7K+ subs) |
| Profile Photo | GitHub avatar |
| Logo | Text-based "Proofy Studio" (no image logo) |
| Color Scheme | Premium black & white (like Dennis) |
| Available | Yes |

---

## 🎯 Sections — Final Design

### 1. Loading Screen
- Cycles: `Hello.` → `नमस्कार.` → `Welcome.` → `< Proofy Studio />`
- Dark screen, large centered text, each word fades in/out
- Final word stays, then screen slides up with curved transition
- Duration: ~3 seconds total

### 2. Hero (Full Screen, Dark)
- **Nav bar**: Left = `© Proofy Studio 2025` | Right = `Work`, `About`, `Contact`
- **Thin animated gradient line** under nav (slow color shift, barely visible = premium)
- Giant text: `ABULFAIZ SAYYED` — massive (~15vw), fills viewport
- Small subtitle below: `Full-Stack Developer & Creator`
- **Double marquee** at bottom:
  - Row 1 (→): `Abulfaiz Sayyed — Proofy Studio — Abulfaiz Sayyed —`
  - Row 2 (←): `Web Development • UI Design • WebRTC • Automation • Video Editing • SEO`
- Background: `#1C1D20`, text: `#FFFFFF`

### 3. Introduction (White Background)
- Strong dark ↔ white contrast on scroll
- **Left column (65%)**:
  > *"I help businesses in Solapur and beyond go digital. I design and build websites that don't just look good — they bring you customers."*
- **Right column (35%)**:
  - Body text: *"Proofy Studio is a one-man studio delivering tailor-made websites, web apps, and automation tools. From concept to code — everything hand-crafted."*
  - Circular **"About me →"** magnetic button
- Text: `#1C1D20`, accent links: `#455CE9`

### 4. Services (NEW — White Background)
- Small uppercase header: `SERVICES`
- 4 clean service blocks in a row:
  - 🌐 **Websites** — Business sites, landing pages, portfolios
  - ⚡ **Web Apps** — Custom tools, PWAs, dashboards
  - 🤖 **Automation** — Bots, scrapers, workflow tools
  - 🎬 **Editing** — Video editing, thumbnails, content
- Clean text layout, generous spacing, no card borders
- Each block fades in on scroll with stagger delay

### 5. Recent Work — Project List (⭐ Star Section)
- Small uppercase header: `RECENT WORK`
- Project rows separated by 1px lines:

| # | Project | Category | Year | Hover Color | Badge |
|---|---|---|---|---|---|
| 01 | Proofy Drop | Web App | 2025 | `#06b6d4` cyan | — |
| 02 | ProofyMax | Web App | 2025 | `#ef4444` red | — |
| 03 | Proofy Score | Tool | 2025 | `#f59e0b` amber | — |
| 04 | Proofy CET | PWA | 2026 | `#8b5cf6` purple | — |
| 05 | Heritage Fabrication | Client Website | 2025 | `#f97316` orange | `Client Project` |
| 06 | Creative Graphics | Client Website | 2025 | `#22c55e` green | `Client Project` |
| 07 | ProofyTube | Web App | 2025 | `#ec4899` pink | — |

- **Hover behavior**:
  - All other rows dim to 33% opacity
  - Hovered row: project name text shifts to its unique color
  - Thumbnail follows cursor with spring easing
  - Subtle color glow behind the row
- "Client Project" badge = small pill tag next to category
- Bottom: **"More work →"** button → GitHub profile

### 6. Horizontal Gallery Strip
- Row 1 (→): Project screenshots sliding right
- Row 2 (←): More screenshots sliding left
- Rounded corners, subtle shadow
- Scroll-speed driven (GSAP ScrollTrigger)

### 7. Contact & Footer (Dark Background)
- **Curved CSS transition** from white → dark (`#141517`)
- **Availability dot**: Green pulsing circle + `Available for projects`
- Giant heading: **"Let's work together"** with profile photo embedded inline
- Large **"Get in touch →"** magnetic button
- Contact info:
  - 📧 proofystudio@gmail.com
  - 📱 WhatsApp (+91 9309848425)
  - 📍 Solapur, Maharashtra, India
- **Footer row**:
  - Left: `© 2025 Proofy Studio`
  - Middle: `Local Time — XX:XX PM IST` (live JS clock)
  - Right: GitHub · YouTube

---

## 🎨 Final Color System

| Name | Value | Usage |
|---|---|---|
| Dark Background | `#1C1D20` | Hero, loader |
| Deep Dark | `#141517` | Footer, contact |
| White | `#FFFFFF` | Main content sections |
| Text Dark | `#1C1D20` | Body text on white |
| Text White | `#FFFFFF` | Text on dark |
| Accent Blue | `#455CE9` | Links, "About me" button |
| Muted Gray | `#999D9E` | Secondary text, labels, categories |
| Light Gray | `#E9EAEB` | Borders, separators |
| Nav Gradient | `#455CE9 → #7c3aed` | Animated nav underline |
| *Project colors* | *See table above* | *Per-project hover only* |

### Typography
| Element | Font | Size |
|---|---|---|
| Hero Name | Space Grotesk | ~15vw (massive) |
| Section Headings | Space Grotesk | clamp(3em, 5vw, 4.5em) |
| Body Text | Inter | clamp(16px, 1.2vw, 19px) |
| Labels | Inter (uppercase) | 0.6em, letter-spacing 0.05em |
| Project Titles | Space Grotesk | clamp(1.5em, 2.3vw, 2.5em) |

---

## 📁 File Structure

```
protofolio/
├── index.html
├── css/
│   ├── normalize.css
│   ├── style.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── projects.js
│   ├── magnetic.js
│   └── scroll-animations.js
├── assets/
│   └── images/
│       ├── profile.jpg
│       ├── proofy-drop.webp
│       ├── proofymax.webp
│       ├── proofy-score.webp
│       ├── proofy-cet.webp
│       ├── heritage.webp
│       ├── creative-graphics.webp
│       └── proofytube.webp
```

---

## ⚡ Tech Stack

| What | Library | Source |
|---|---|---|
| Smooth Scroll | Lenis (~3KB) | CDN |
| Scroll Animations | GSAP + ScrollTrigger (~40KB) | CDN |
| Fonts | Space Grotesk + Inter | Google Fonts CDN |
| Everything else | Vanilla HTML/CSS/JS | Hand-coded |

---

## Verification Plan
- Smooth scroll on Chrome, Firefox, Edge
- All 7 project hover effects with unique colors
- Mobile/tablet/desktop responsive
- Loader animation sequence
- Double marquee performance
- All links (project URLs, GitHub, YouTube, WhatsApp, Email)
- Lighthouse: Performance 90+ / SEO 95+
