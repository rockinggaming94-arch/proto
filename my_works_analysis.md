# Technical Audit & Portfolio Analysis: Abulfaiz (Proofy Gamerz)

This document catalogs and evaluates the live software projects, scripts, and media channels built by **Abulfaiz (Proofy Gamerz)**. It serves as a professional portfolio audit to showcase real-world development experience, technical depth, and system design capability.

---

## 👤 Executive Summary & Developer Profile

* **Developer Name**: Abulfaiz (Alias: Proofy / Proofy Gamerz)
* **Primary Focus**: Full-Stack Web Development, Automation Scripting, Media Production.
* **YouTube Presence**: **Proofy Gamerz (7,000+ Subscribers)** — Focused on gaming content, tech guides, and video production/editing.
* **Key Strengths**:
  * **P2P & WebRTC Protocol Integration**: Experience implementing direct browser-to-browser data links and media streaming without intermediate server storage.
  * **API Consumption & Structured Data**: Consuming third-party media endpoints (TMDB API) and injecting semantic JSON-LD metadata for optimal search engine performance.
  * **Local Client Freelancing**: Successfully deploying responsive, high-performance business landing pages with custom domains, analytics, and contact routing.
  * **State Persistence & PWAs**: Implementing Progressive Web App manifests, service workers for offline support, and client-side database management via `localStorage`.

---

## 🌐 Live Web Applications & Projects

### 1. Proofy Drop (Instant P2P File Sharing)
* **URL**: [proofydrop.netlify.app](https://proofydrop.netlify.app)
* **Tech Stack**: HTML5, CSS3 (Custom Glassmorphism), JavaScript (ES6+), WebRTC (PeerJS), Lucide Icons.
* **Core Features**:
  * **True Peer-to-Peer Transfers**: Utilizes WebRTC data channels to send files directly between browsers, ensuring zero server upload logs and infinite transfer size limits.
  * **Multi-Device Sync**: Synchronizes clipboards, textual messages, and screenshots between up to 4 connected devices in a single room via a 6-digit pin or QR code.
  * **Advanced Analytics UI**: Implements a canvas-drawn real-time transfer speed graph, displaying current speed, peak transfer rate, bytes transferred, and ETA.
  * **PWA & Offline Capability**: Complete with service worker registration and custom manifests for offline installations.
* **Engineering Value**: High-level networking expertise. Shows proficiency with asynchronous WebRTC handshakes, signal servers, and local browser memory constraints.

### 2. ProofyMax (Stream Free Movies & TV)
* **URL**: [proofymax.netlify.app](https://proofymax.netlify.app)
* **Tech Stack**: HTML5, CSS3, JavaScript, TMDB API (The Movie Database), LocalStorage API.
* **Core Features**:
  * **Dynamic Metadata Scraping**: Live calls to TMDB endpoints to populate search queries, genres, ratings, cast profiles, and movie trailers.
  * **Netflix-Style Profile Selection**: Implements localized profile generation ("Who's watching?") with custom avatars and color themes.
  * **State Persistence**: Saves continue watching progress, watch history, and watchlists directly in the browser's `localStorage` (privacy-first model).
  * **PWA & Android TV Support**: Implements keyboard D-pad event listeners for full remote control compatibility on Smart TV browsers.
  * **Cinema Mode Layout**: A custom overlay hiding peripheral UI for a clean video player viewport.
* **Engineering Value**: Demonstrates structured JSON-LD integration (FAQPage, SoftwareApplication, and WebSite schemas), REST API consumption, and local browser state management.

### 3. MHT-CET PCM 2026 Companion
* **URL**: [proofycet.netlify.app](https://proofycet.netlify.app)
* **Tech Stack**: HTML5, custom responsive CSS (neon/cyber dark theme), JavaScript, PWA.
* **Core Features**:
  * **Personalized Onboarding**: Captures name and target percentiles (90+, 95+, 99+, 99.9+) on first launch.
  * **Interactive Prep Dashboard**: Contains daily checklist items, progress indicators per subject (PCM), exam countdown timer, and streak calendar tracker.
  * **Score Estimator**: Interactive calculator that estimates percentile ranges based on inputs.
  * **Study Tools Integration**: Built-in Pomodoro focus timer (SVG-drawn countdown circle) and custom breathing exercise card.
* **Engineering Value**: Outstanding user-experience design. Demonstrates form validation, conditional PWA onboarding routing, and state persistence.

### 4. ProofyTube (Distraction-Free Video Viewer)
* **URL**: [proofytube.netlify.app](https://proofytube.netlify.app)
* **Tech Stack**: HTML5, CSS3, Vanilla JS, YouTube Embed API.
* **Core Features**:
  * **Distraction-Free Watching**: Strip out YouTube recommendations, comment threads, ads, and sidebars to focus entirely on the video content.
  * **Mini Player / Picture-in-Picture**: An overlay window allowing users to browse their watch list while streaming a video.
  * **Visual Design**: Uses premium fonts (`Bebas Neue` & `Syne`) with responsive canvas-based cursor glow lighting.
* **Engineering Value**: Shows proficiency in parsing YouTube video URLs (handling multiple formats like `youtu.be`, `watch?v=`, embeds) and controlling iframe actions.

### 5. Heritage Fabrication & Welding (Client Site)
* **URL**: [heritagefabrication.me](https://heritagefabrication.me)
* **Tech Stack**: HTML5, custom CSS (light/dark themes), JavaScript, structured LocalBusiness SEO.
* **Core Features**:
  * **Custom Domain Deploy**: Launched under a custom `.me` domain with fully configured DNS and SSL.
  * **Welding Sparks Canvas**: A physics-based HTML5 canvas drawing interactive welding sparks on the hero section.
  * **Structured Schema JSON-LD**: Comprehensive search schema providing operational hours, geo-coordinates, founding year, and services.
  * **WhatsApp Query Routing**: Connects service requests directly to the business owner's mobile via automated template strings.
* **Engineering Value**: Demonstrates direct commercial freelancing experience. Shows mastery of local SEO ranking indicators and high-performance asset loading.

### 6. Creative Graphics & Printers (Client Site)
* **URL**: [creativegraphic.netlify.app](https://creativegraphic.netlify.app)
* **Tech Stack**: HTML5, CSS3, JS, FontAwesome, Local Business SEO.
* **Core Features**:
  * **Dynamic Service Search**: Implements a client-side search bar filtering custom print categories dynamically.
  * **Interactive AI Chat Widget**: Includes a local bot window greeting visitors and handling inquiries (location, services, pricing).
  * **Custom Preloader Progress**: Displays custom graphics with a loading percentage bar on page load.
* **Engineering Value**: Solid business-to-consumer layout design, displaying clear lists of services, price tables, customer review carousels, and contact maps.

### 7. ProofyCET Marks Calculator (Proofy Score)
* **URL**: [proofyscore.netlify.app](https://proofyscore.netlify.app)
* **Tech Stack**: HTML5, CSS3, JavaScript, PDF.js API, Canvas API.
* **Core Features**:
  * **Interactive Response Sheet Parsing**: Uses PDF.js to extract text from uploaded MHT-CET HTML/PDF response sheets in the browser.
  * **Shift-Wise Percentile Predictor**: Compares marks against real 2nd attempt shift difficulty data (Easy, Moderate, Hard) to calculate percentile ranges. Displays comparisons using a custom canvas line graph.
  * **Bento Performance Indicators**: Visual bento grid showing total marks, subject-wise scores, and count lists (correct, wrong, skipped).
  * **Searchable Question Matrix**: Renders a complete table of all 150 questions, filterable by subject and status, and fully searchable by Question ID.
  * **Slide-Up Question Viewer**: A bottom-sheet modal rendering details, options, and correctness markers for individual questions.
* **Engineering Value**: High-level computational logic. Demonstrates binary file parsing inside the client, canvas charting, and complex state synchronization.

---

## ⚙️ Automation & Scripting

### Swiggy Offer Scraper Bot
* **Tech Stack**: Python, BeautifulSoup4, Requests, SQLite.
* **Functionality**:
  * Scrapes Swiggy promo banners and discount codes from localized delivery addresses.
  * Parses JSON payloads and drops clean discount details into a localized SQLite database.
  * Generates Telegram/Discord notifications whenever high-value discounts are live.
* **Engineering Value**: Showcases data parsing, backend DB storage, scripting automation, and API communication.

---

## 🎥 Media & Creative Production

### YouTube Channel: Proofy Gamerz
* **Metric**: **7,000+ Subscribers**
* **Technical Application**:
  * **Video Editing**: Proficiency with professional timelines, transitions, color grading, and audio syncing (Adobe Premiere Pro / DaVinci Resolve).
  * **SEO & Analytics**: Understanding YouTube's algorithm, CTR optimization, custom thumbnail generation, and keyword tags ranking.
* **Portfolio Value**: Highlights strong soft skills in communication, visual storytelling, digital marketing, and personal brand building.
