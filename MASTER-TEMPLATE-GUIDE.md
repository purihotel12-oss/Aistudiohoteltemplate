# MASTER TEMPLATE DEVELOPER & ARCHITECTURE GUIDE

> **Engineering Specifications for Reusable Master Hotel Website Template V3**

---

## 1. Master Template Philosophy

### 1.1 The Reusability Contract
Every hotel website generated from this repository must adhere to the **Reusability Contract**:
- **Zero Component Coupling**: Components in `src/components/` must only depend on generic TypeScript interfaces in `src/types/index.ts` and standard utility helpers in `src/lib/`.
- **Strict Data Isolation**: Hotel-specific facts, copy, images, and contact information must **never** be hardcoded in `.tsx` layout files.
- **Pure Static Output**: The application builds to standard static assets (`dist/`) suitable for instant deployment to Cloudflare Pages, GitHub Pages, AWS S3/CloudFront, or Vercel.

---

## 2. Feature Flags System (`src/data/features.ts`)

The template includes a centralized feature toggle registry:

```typescript
export const featureFlags = {
  rooms: true,               // Rooms catalog & dynamic detail pages
  amenities: true,           // Amenities & spa page
  experiences: true,         // Excursions & curated activities
  gallery: true,             // Photo gallery with categories & lightbox
  offers: true,              // Special packages & seasonal discounts
  blog: false,               // Travel articles & local guides
  corporateEvents: false,    // Meetings, weddings & banquets
  faq: true,                 // FAQ accordion & schema
  reviews: true,             // Guest testimonials & TripAdvisor score
  awards: true,              // Industry recognitions & certifications
  floatingWhatsApp: true,    // Floating instant concierge button
  quickAvailabilityBar: true,// Homepage date & guest search widget
  trustNoticeBanner: true,   // Anti-fraud verified direct booking banner
};
```

### How Feature Flags Propagate:
1. **Header Navigation**: `Header.tsx` dynamically filters navigation items based on `featureFlags`.
2. **Homepage Sections**: `HomePage.tsx` conditionally mounts preview blocks only for enabled features.
3. **Footer Links**: `Footer.tsx` excludes links to disabled pages.

---

## 3. Dynamic Booking Engine Strategies

Configured via `hotelData.booking.mode` in `src/data/hotel.ts`:

### Mode A: `externalBooking`
Directs guests to verified third-party booking engines (e.g. SynXis, Cloudbeds, eZee, Sirvoy, Booking.com):
```typescript
booking: {
  mode: 'externalBooking',
  externalEngineUrl: 'https://reservations.yourhotel.com/book',
  guaranteeNotice: 'Official Best Rate Guaranteed',
}
```

### Mode B: `enquiry`
Triggers the built-in modal enquiry form (`BookingModal.tsx`) allowing guests to request reservations, specify guest counts, and receive confirmation within hours.

### Mode C: `directContact`
Instantly connects guests directly to the official hotel WhatsApp concierge or front desk phone.

---

## 4. Structured Data (Schema.org JSON-LD)

The template automatically constructs compliant JSON-LD schemas in `src/lib/structuredData.ts`:
- `getHotelJsonLd()`: Generates `schema.org/Hotel` with name, address, geo-coordinates, star rating, price range, check-in/out times, and amenities.
- `getHotelRoomJsonLd(room)`: Generates `schema.org/HotelRoom` with bed type, occupancy, square footage, and pricing offers.
- `getFAQPageJsonLd(faqs)`: Generates `schema.org/FAQPage` for instant Google Search FAQ rich snippets.
- `getBreadcrumbJsonLd(items)`: Generates `schema.org/BreadcrumbList`.

---

## 5. Theme Token Customization (`src/data/theme.ts`)

```typescript
export const themeConfig: ThemeConfig = {
  colors: {
    primary: '#1c1917',     // Main text & dark accents (Stone 900)
    secondary: '#b45309',   // Luxury warm amber/gold CTA (Amber 700)
    accent: '#047857',      // Verified / WhatsApp accents (Emerald 700)
    background: '#fafaf9',  // Page canvas neutral (Stone 50)
    surface: '#ffffff',     // Card & module surface
  },
  typography: {
    headingFont: 'Cormorant Garamond, Georgia, serif',
    bodyFont: 'Plus Jakarta Sans, system-ui, sans-serif',
  }
};
```

---

## 6. Cloudflare Pages Deployment Guide

1. Push customized hotel project to GitHub repository.
2. In Cloudflare Dashboard, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set Build Settings:
   - **Framework preset**: None / Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.
6. Set Custom Domain (e.g. `www.holidayresortpuri.com`) in Cloudflare DNS.
