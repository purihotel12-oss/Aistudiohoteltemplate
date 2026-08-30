/**
 * MASTER HOTEL WEBSITE TEMPLATE - TYPE DEFINITIONS
 * 
 * Strongly typed schema for all hotel data, themes, feature flags,
 * booking mechanisms, and content modules.
 */

export interface ContactConfig {
  phonePrimary: string;
  phoneSecondary?: string;
  phoneDisplay?: string;
  whatsappNumber: string;
  whatsappDefaultMessage?: string;
  emailReservations: string;
  emailEnquiry: string;
  emailGeneral?: string;
  receptionHours?: string;
  conciergeHours?: string;
}

export interface LocationConfig {
  addressLine1: string;
  addressLine2?: string;
  locality: string;
  city: string;
  district?: string;
  state: string;
  country: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  googleMapsEmbedUrl?: string;
  googleMapsPlaceUrl: string;
  directionsUrl?: string;
  nearbyAirport?: {
    name: string;
    code?: string;
    distance: string;
    travelTime: string;
  };
  nearbyRailwayStation?: {
    name: string;
    distance: string;
    travelTime: string;
  };
  nearbyBusStation?: {
    name: string;
    distance: string;
    travelTime: string;
  };
  arrivalInstructions?: string[];
  parkingInfo?: string;
}

export type BookingMode = 'externalBooking' | 'enquiry' | 'directContact';

export interface BookingConfiguration {
  mode: BookingMode;
  externalEngineUrl?: string;
  externalEngineName?: string; // e.g. "SynXis", "SiteMinder", "Cloudbeds", "Direct"
  enquiryEndpoint?: string; // Optional webhook or email handler
  minStayNights?: number;
  maxGuestsDefault?: number;
  depositPolicySummary?: string;
  acceptedPaymentMethods?: string[];
  checkInTime: string; // e.g. "14:00" or "2:00 PM"
  checkOutTime: string; // e.g. "11:00" or "11:00 AM"
}

export interface TrustNoticeConfig {
  enabled: boolean;
  title: string;
  shortMessage: string;
  fullMessage?: string;
  officialDomain: string;
  officialPhone: string;
  officialWhatsApp: string;
  badgeText?: string;
}

export interface HotelData {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  propertyType: 'Luxury Resort' | 'Boutique Hotel' | 'Heritage Retreat' | 'City Hotel' | 'Eco Lodge' | 'Beach Resort' | 'Homestay';
  starRating?: number;
  establishedYear?: number;
  shortDescription: string;
  longDescription: string[];
  storyHeadline?: string;
  storySubheading?: string;
  storyParagraphs?: string[];
  logo: {
    dark: string; // for light backgrounds
    light?: string; // for dark backgrounds
    symbolOnly?: string;
    alt: string;
  };
  favicon: string;
  primaryImage: string;
  heroImages: string[];
  contact: ContactConfig;
  location: LocationConfig;
  booking: BookingConfiguration;
  trustNotice?: TrustNoticeConfig;
}

export interface FeatureFlags {
  rooms: boolean;
  amenities: boolean;
  gallery: boolean;
  experiences: boolean;
  reviews: boolean;
  faq: boolean;
  offers: boolean;
  blog: boolean;
  corporateEvents: boolean;
  giftVouchers: boolean;
  careers: boolean;
  guestInformation: boolean;
  awards: boolean;
  trustNoticeBanner: boolean;
  floatingWhatsApp: boolean;
  quickAvailabilityBar: boolean;
  interactiveMap: boolean;
}

export interface ThemeColors {
  primary: string; // e.g. "#0f2c59"
  primaryHover: string;
  secondary: string; // e.g. "#c5a880"
  secondaryHover: string;
  accent: string; // e.g. "#d4af37"
  background: string; // e.g. "#faf8f5"
  surface: string; // e.g. "#ffffff"
  surfaceAlt: string; // e.g. "#f3efe8"
  textMain: string; // e.g. "#1e293b"
  textMuted: string; // e.g. "#64748b"
  border: string; // e.g. "#e2d9cd"
  darkSurface: string; // e.g. "#0d1b2a"
  darkText: string; // e.g. "#f8fafc"
}

export interface ThemeConfig {
  name: string;
  colors: ThemeColors;
  typography: {
    headingFont: string;
    bodyFont: string;
  };
  radius: 'none' | 'sm' | 'md' | 'lg';
}

export type RoomCategory = 'Suite' | 'Deluxe' | 'Villa' | 'Family' | 'Executive' | 'Standard';

export interface RoomAmenity {
  name: string;
  icon?: string;
  highlight?: boolean;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: RoomCategory;
  tagline?: string;
  description: string;
  longDescription: string[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  featuredImage: string;
  maxGuests: number;
  maxAdults: number;
  maxChildren: number;
  bedType: string; // e.g. "1 King Bed" or "2 Queen Beds"
  roomSizeSqFt: number;
  roomSizeSqM: number;
  view: string; // e.g. "Panoramic Ocean View", "Lush Garden View"
  floor?: string;
  bathroomsCount: number;
  bathroomDetails?: string[];
  amenities: RoomAmenity[];
  featuresList: string[];
  startingPrice?: number;
  currency: string;
  priceLabel?: string; // e.g. "per night + taxes"
  mealPlanIncluded?: string; // e.g. "Complimentary Gourmet Breakfast"
  featured: boolean;
  bookingUrl?: string; // Direct override if needed
  enquiryEnabled: boolean;
  policies?: {
    cancellation?: string;
    checkIn?: string;
    smoking?: string;
    extraBed?: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export type AmenityCategory =
  | 'Room'
  | 'Property'
  | 'Dining'
  | 'Wellness'
  | 'Connectivity'
  | 'Family'
  | 'Parking'
  | 'Accessibility'
  | 'Recreation';

export interface Amenity {
  id: string;
  name: string;
  description: string;
  category: AmenityCategory;
  iconName: string; // Lucide icon identifier
  featured?: boolean;
  availabilityNote?: string;
  image?: string;
}

export type GalleryCategory =
  | 'All'
  | 'Exterior'
  | 'Rooms'
  | 'Bathrooms'
  | 'Dining'
  | 'Lobby'
  | 'Common Areas'
  | 'Wellness'
  | 'Nature'
  | 'Activities'
  | 'Nearby';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  featured?: boolean;
  width?: number;
  height?: number;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string[];
  image: string;
  duration: string; // e.g. "3 Hours" or "Full Day"
  distance?: string; // e.g. "On-site" or "15 km from resort"
  location: string;
  difficulty?: 'Relaxed' | 'Moderate' | 'Active';
  ageSuitability?: string; // e.g. "All ages" or "12+"
  priceEstimate?: string;
  includes?: string[];
  featured?: boolean;
  bookingEnquiryCtaText?: string;
}

export interface NearbyPlace {
  id: string;
  name: string;
  category: 'Heritage & Culture' | 'Beach & Nature' | 'Dining & Nightlife' | 'Shopping' | 'Adventure' | 'Transit';
  description: string;
  distanceKm: number;
  travelTime: string; // e.g. "12 mins by car"
  image?: string;
  directionsUrl?: string;
  mapsUrl?: string;
  highlight?: string;
}

export type FAQCategory =
  | 'Booking'
  | 'Rooms'
  | 'Check-in'
  | 'Check-out'
  | 'Children'
  | 'Pets'
  | 'Food'
  | 'Parking'
  | 'Wi-Fi'
  | 'Cancellation'
  | 'Payment'
  | 'Location'
  | 'General';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  featuredOnHome?: boolean;
}

export interface Review {
  id: string;
  guestName: string;
  location?: string;
  stayDate?: string;
  roomStayed?: string;
  rating: number; // 1 to 5
  reviewTitle?: string;
  reviewText: string;
  source: 'Google' | 'TripAdvisor' | 'Booking.com' | 'Direct Guestbook';
  verifiedStay: boolean;
  externalUrl?: string;
}

export interface Offer {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string[];
  image: string;
  validFrom: string; // YYYY-MM-DD
  validUntil: string; // YYYY-MM-DD
  badge?: string; // e.g. "Seasonal Special", "Early Bird"
  inclusions: string[];
  exclusions?: string[];
  priceInfo?: string;
  promoCode?: string;
  terms: string[];
  ctaText?: string;
  ctaUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // rich markdown / HTML structure
  featuredImage: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedDate: string; // YYYY-MM-DD
  readTime: string; // e.g. "5 min read"
  category: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface PolicySection {
  title: string;
  lastUpdated?: string;
  introNotice?: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
}

export interface PoliciesData {
  guestInformation: PolicySection;
  privacyPolicy: PolicySection;
  refundCancellationPolicy: PolicySection;
  termsAndConditions: PolicySection;
  cookiePolicy: PolicySection;
}

export interface SocialLink {
  platform: 'Instagram' | 'Facebook' | 'YouTube' | 'X' | 'LinkedIn' | 'TripAdvisor' | 'WhatsApp';
  url: string;
  label: string;
  ariaLabel: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string | number;
  description?: string;
  logo?: string;
  certificateUrl?: string;
}

export interface SEOConfig {
  siteUrl: string; // Authoritative canonical domain root
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultOgImage: string;
  twitterHandle?: string;
  siteLanguage: string;
  robotsDefault: string;
  organizationSchema: {
    type: 'Hotel' | 'Resort' | 'BedAndBreakfast';
    priceRange: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  featureFlag?: keyof FeatureFlags;
  isPrimaryAction?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
