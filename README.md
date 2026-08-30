# MASTER HOTEL WEBSITE TEMPLATE V3

> **Production-Ready, Reusable, Data-Driven Master Hotel Website Template**  
> Built with **React 18 + TypeScript + Tailwind CSS** | AI-Ready | Cloudflare Pages & Static Hosting Optimized

---

## 1. Executive Overview

This repository is **NOT** a single static website for one specific hotel. It is a **reusable master template architecture** engineered to spin up high-converting, SEO-optimized, independent hotel websites with zero code refactoring.

### Intended Future Workflow

```
MASTER HOTEL TEMPLATE (Clean Baseline)
        ↓
Clone / Fork Master Repository
        ↓
Provide Hotel-Specific Data (`src/data/`) + Photography (`/public/images/`)
        ↓
AI Customization (Automated Re-theming & Data Population)
        ↓
Hotel-Specific Production Build (`npm run build`)
        ↓
Export ZIP / Push to GitHub
        ↓
Deploy to Cloudflare Pages / Vercel / Netlify / CDN
        ↓
Connect Custom Hotel Domain
```

---

## 2. Core Architectural Principles

1. **Complete Separation of Data and UI**:
   - Reusable UI components (`src/components/`, `src/pages/`, `src/lib/`) **never** contain hardcoded hotel names, phone numbers, addresses, room names, or image links.
   - All hotel content lives strictly in typed configuration files within `src/data/`.
2. **Feature Flag Governed Modular Layout**:
   - Features (Rooms, Amenities, Experiences, Gallery, Offers, FAQ, Reviews, Awards, Trust Notice, WhatsApp) can be toggled on/off in `src/data/features.ts`. Disabling a flag instantly prunes the navigation menu, homepage sections, and routes.
3. **Pluggable Booking Engine Strategy**:
   - `externalBooking`: Directs guests to verified external booking engines (SynXis, Cloudbeds, Sirvoy, eZee, Sabre).
   - `enquiry`: Opens the built-in interactive reservation inquiry modal.
   - `directContact`: Opens verified direct communication channels (WhatsApp / Phone).
4. **Rich Structured Data & SEO**:
   - Dynamic OpenGraph, Twitter Cards, canonical tags, and Schema.org JSON-LD (`Hotel`, `HotelRoom`, `FAQPage`, `BreadcrumbList`).
5. **Verified Direct Channel Trust & Fraud Advisory**:
   - Built-in trust advisory banners protecting guests against fraudulent lookalike booking portals by verifying official phone numbers, domain names, and WhatsApp concierges.

---

## 3. Directory Structure

```
├── metadata.json                     # AI Studio Applet Metadata & Capabilities
├── package.json                      # Build scripts and dependencies
├── src/
│   ├── types/
│   │   └── index.ts                  # Comprehensive TypeScript interfaces & types
│   ├── data/
│   │   ├── hotel.ts                  # Core hotel identity, contact, address, & booking config
│   │   ├── features.ts               # Feature toggles & modular section flags
│   │   ├── theme.ts                  # Design tokens, color palette, typography hierarchy
│   │   ├── rooms.ts                  # Accommodations, room specs, prices, amenities & galleries
│   │   ├── amenities.ts              # Resort amenities with icons & category tags
│   │   ├── experiences.ts            # Curated resort & regional excursions
│   │   ├── gallery.ts                # High-res photography library & category filters
│   │   ├── reviews.ts                # Verified guest reviews, star ratings, sources
│   │   ├── faqs.ts                   # Searchable & categorized guest FAQs
│   │   ├── nearby.ts                 # Local attractions, transit times, GPS coordinates
│   │   ├── offers.ts                 # Seasonal packages, promo codes, package inclusions
│   │   ├── policies.ts               # Property check-in times, child, pet, cancellation policies
│   │   ├── social.ts                 # Social media channels & links
│   │   ├── awards.ts                 # Honors, sustainability certifications, press accolades
│   │   └── seo.ts                    # Default site meta, robots directives, OG templates
│   ├── lib/
│   │   ├── utils.ts                  # Currency formatting, slug generator, string helpers
│   │   ├── seo.ts                    # Dynamic meta tags & canonical URL builder
│   │   ├── structuredData.ts         # Schema.org JSON-LD generators (Hotel, Room, FAQ)
│   │   ├── whatsapp.ts               # Context-aware WhatsApp link & room enquiry generator
│   │   └── booking.ts                # Centralized booking engine dispatcher
│   ├── components/
│   │   ├── SEOHead.tsx               # Dynamic head meta & JSON-LD injector
│   │   ├── Header.tsx                # Feature-flag aware navigation with mobile drawer
│   │   ├── Footer.tsx                # Structured footer with trust badges & links
│   │   ├── Hero.tsx                  # Luxury hero with background imagery & actions
│   │   ├── BookingWidget.tsx         # Date & guest availability search bar
│   │   ├── BookingModal.tsx          # Direct inquiry form & WhatsApp reservation modal
│   │   ├── RoomCard.tsx              # Suite card with specifications & direct actions
│   │   ├── RoomGallery.tsx           # Multi-photo room viewer with fullscreen lightbox
│   │   ├── AmenityCard.tsx           # Icon-backed amenity card with category badge
│   │   ├── GalleryGrid.tsx           # Category-filtered photo grid with lightbox modal
│   │   ├── ExperienceCard.tsx        # Excursion card with duration, difficulty, & enquiry
│   │   ├── ReviewCard.tsx            # Guest review card with star rating & stay badge
│   │   ├── FAQAccordion.tsx          # Accessible collapsible FAQ accordion
│   │   ├── NearbyPlaceCard.tsx       # Attraction card with transit duration & directions
│   │   ├── TrustNotice.tsx           # Fraud prevention & official booking advisory banner
│   │   ├── Breadcrumbs.tsx           # Accessible breadcrumb trail
│   │   ├── FloatingWhatsApp.tsx      # Floating concierge trigger with tooltip
│   │   └── TemplateCustomizerDrawer.tsx # Interactive template inspector & AI workflow hub
│   ├── pages/
│   │   ├── HomePage.tsx              # Modular homepage assembling all active sections
│   │   ├── RoomsPage.tsx             # Accommodations catalog with guest & category filters
│   │   ├── RoomDetailPage.tsx        # Deep suite page with gallery, specs, amenities & booking
│   │   ├── AboutPage.tsx             # Story, heritage, architectural philosophy, values
│   │   ├── AmenitiesPage.tsx         # Categorized resort facilities
│   │   ├── GalleryPage.tsx           # Full photo showcase with lightbox
│   │   ├── ExperiencesPage.tsx       # Curated activities & bespoke itineraries
│   │   ├── LocationPage.tsx          # Transit proximity, driving directions, GPS coordinates
│   │   ├── FAQPage.tsx               # Categorized questions & answers
│   │   ├── ReviewsPage.tsx           # Testimonials, ratings scorecard, TripAdvisor badges
│   │   ├── ContactPage.tsx           # Phone, email, WhatsApp, interactive message form
│   │   ├── GuestInfoPage.tsx         # Timings, ID rules, children, quiet hours
│   │   ├── OffersPage.tsx            # Seasonal packages & promo codes
│   │   ├── PolicyPage.tsx            # Privacy, Refund, Terms & Conditions, Cookies
│   │   └── NotFoundPage.tsx          # Clean 404 page
│   ├── App.tsx                       # Client-side router & layout wrapper
│   └── main.tsx                      # Vite React entry point
```

---

## 4. How to Create a New Hotel Website (Step-by-Step)

When onboarding a new hotel (e.g. *Holiday Resort Puri* or *Sonar Bangla Puri*):

1. **Clone the master template repository**:
   ```bash
   git clone <master-repo-url> my-hotel-website
   cd my-hotel-website
   ```
2. **Update Core Hotel Identity** in `src/data/hotel.ts`:
   - Property Name, Tagline, Short Description, Star Rating
   - Contact numbers, WhatsApp concierge, email addresses
   - Location address, landmarks, GPS coordinates, Google Maps URL
   - Booking mode (`externalBooking`, `enquiry`, or `directContact`)
3. **Populate Room Data** in `src/data/rooms.ts`:
   - Room names, slug, starting prices, square footage, bed types, gallery photos
4. **Configure Feature Modules** in `src/data/features.ts`:
   - Set `experiences: false` or `offers: false` if not applicable to the property
5. **Adjust Theme Tokens** in `src/data/theme.ts`:
   - Set primary, secondary, and neutral color hex codes matching the hotel brand
6. **Build for Production**:
   ```bash
   npm run build
   ```
7. **Deploy to Cloudflare Pages**:
   - Point Cloudflare Pages build output to `dist/` with build command `npm run build`.

---

## 5. AI Prompt Template for Customizing a New Hotel

Feed this prompt along with your hotel's brochure / details to any LLM:

```text
You are customizing the Master Hotel Website Template for a new property.
Hotel Name: [Insert Hotel Name]
Location: [Insert City, State, Country]
Star Rating: [e.g. 5-Star Luxury / Boutique / Heritage]
Contact Phone: [Insert Phone]
WhatsApp: [Insert WhatsApp with country code]
Email: [Insert Email]
Booking Mode: [externalBooking with URL | enquiry | directContact]

Please generate the updated TypeScript data file for:
1. src/data/hotel.ts
2. src/data/rooms.ts (with 4-6 realistic suites)
3. src/data/amenities.ts
4. src/data/theme.ts (matching brand colors)
5. src/data/features.ts

Do NOT modify any component or library files in src/components/ or src/lib/. Ensure all exports strictly match the TypeScript interfaces defined in src/types/index.ts.
```

---

## 6. Verification & Cloudflare Pages Compatibility

- **Pure Static Export**: Generates production HTML, JS, and CSS in `dist/`.
- **Zero Server Lock-in**: No external database or backend required.
- **Fast First Paint**: Responsive lazy-loaded images, system fallback typography, and lightweight icons from `lucide-react`.
