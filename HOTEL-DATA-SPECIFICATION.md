# HOTEL DATA SPECIFICATION & ONBOARDING CHECKLIST

> **Data Schema Dictionary for New Hotel Customization**

This document specifies the required and optional data structures in `src/data/` for onboarding a new hotel property into the Master Hotel Website Template.

---

## 1. Core Hotel Data (`src/data/hotel.ts`)

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | Unique identifier (e.g. `'holiday-resort-puri'`) |
| `name` | `string` | Yes | Full marketing name of the hotel |
| `shortName` | `string` | Yes | Compact name used in mobile header & breadcrumbs |
| `legalName` | `string` | No | Registered legal entity name for footer & terms |
| `tagline` | `string` | Yes | Short 6–10 word marketing subtitle |
| `propertyType` | `string` | Yes | `'Luxury Coastal Resort'`, `'Boutique Heritage Hotel'`, etc. |
| `starRating` | `number` | No | 1 to 5 star rating |
| `contact.phonePrimary` | `string` | Yes | International E.164 phone number for `tel:` links |
| `contact.phoneDisplay` | `string` | No | Formatted human-readable phone number |
| `contact.whatsapp` | `string` | Yes | WhatsApp phone number with country code (digits only) |
| `contact.emailReservations`| `string` | Yes | Direct reservations email address |
| `location.addressLine1` | `string` | Yes | Physical street address |
| `location.city` | `string` | Yes | City or locality |
| `location.state` | `string` | Yes | State / province |
| `location.postalCode` | `string` | Yes | Postal / ZIP code |
| `location.country` | `string` | Yes | Country name |
| `location.googleMapsUrl` | `string` | No | Direct Google Maps location link |
| `location.coordinates` | `object` | No | `{ latitude: number, longitude: number }` |
| `booking.mode` | `enum` | Yes | `'externalBooking'` \| `'enquiry'` \| `'directContact'` |
| `booking.externalEngineUrl`| `string` | No | Required if `mode === 'externalBooking'` |
| `trustNotice.enabled` | `boolean` | Yes | `true` to display verified direct booking banner |

---

## 2. Rooms Data (`src/data/rooms.ts`)

Each room in the `roomsData` array conforms to the `Room` interface:

```typescript
export interface Room {
  id: string;               // Unique room ID (e.g. 'ocean-suite')
  name: string;             // 'Oceanfront Presidential Suite'
  shortName: string;        // 'Presidential Suite'
  slug: string;             // 'oceanfront-presidential-suite'
  category: RoomCategory;   // 'Standard' | 'Deluxe' | 'Suite' | 'Villa' | 'Penthouse' | 'Cottage'
  featured: boolean;        // true to show on homepage
  startingPrice?: number;   // Numerical starting rate (e.g. 380)
  currency: string;         // '$', '₹', '€', '£'
  maxGuests: number;        // Maximum guest capacity
  maxAdults: number;        // Maximum adult capacity
  maxChildren: number;      // Maximum children capacity
  roomSizeSqFt: number;     // Area in square feet
  roomSizeSqM: number;      // Area in square meters
  bedType: string;          // '1 King Bed' | '2 Queen Beds'
  view?: string;            // 'Panoramic Ocean & Sunset View'
  featuredImage: string;    // Main card image URL / path
  galleryImages: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  description: string;      // 2-3 sentence overview
  longDescription?: string; // Multi-paragraph detailed breakdown
  amenities: {
    name: string;
    iconName?: string;
    description?: string;
  }[];
}
```

---

## 3. Amenities Data (`src/data/amenities.ts`)

Categories: `'Wellness & Spa'`, `'Dining & Drinks'`, `'Recreation & Pools'`, `'Services & Comfort'`, `'Family & Kids'`, `'Connectivity'`, `'Business & Events'`.

Each amenity includes:
- `id`: Unique string
- `name`: Feature title (e.g. `'Heated Thalassotherapy Pool'`)
- `description`: 1–2 sentence description
- `iconName`: Valid Lucide React icon name (e.g. `'Waves'`, `'Sparkles'`, `'Utensils'`, `'Wifi'`)
- `category`: Category name from list above
- `featured`: `true` to feature on homepage

---

## 4. Photography Asset Guidelines

When placing images into `/public/images/`:
- **Hero Banners**: Aspect ratio `16:9` or `21:9`, minimum width 1920px.
- **Room Gallery**: Aspect ratio `16:10` or `4:3`, minimum width 1200px.
- **Amenities / Experiences**: Aspect ratio `16:10`, minimum width 800px.
- **File formats**: WebP preferred for lightweight performance; high quality JPG / PNG supported.
