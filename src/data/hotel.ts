/**
 * MASTER HOTEL WEBSITE TEMPLATE - HOTEL CONFIGURATION
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI or developers: Update this file with your specific hotel details.
 * Reusable components read directly from this central store.
 */

import { HotelData } from '../types';

export const hotelData: HotelData = {
  name: 'The Azure Haven Resort & Spa',
  legalName: 'Azure Haven Hospitality Private Limited',
  shortName: 'Azure Haven',
  tagline: 'Where coastal serenity meets bespoke luxury',
  propertyType: 'Luxury Resort',
  starRating: 5,
  establishedYear: 2018,
  shortDescription:
    'Nestled along pristine turquoise waters, The Azure Haven Resort & Spa blends timeless architecture with heartfelt hospitality, curated wellness rituals, and locally-inspired culinary excellence.',
  longDescription: [
    'Conceived as an intimate sanctuary of peace, The Azure Haven Resort offers discerning travelers an oasis of tranquility amidst lush tropical gardens and whispering ocean breezes.',
    'Every architectural line draws inspiration from indigenous coastal craftsmanship, featuring expansive open-air pavilions, natural limestone accents, and floor-to-ceiling vistas framing panoramic sunsets.',
    'Whether you seek rejuvenation in our holistic wellness sanctuary, an intimate beachside dining experience, or an inspiring venue for meaningful gatherings, our dedicated team anticipates every desire with warmth and discretion.'
  ],
  storyHeadline: 'An Unhurried Sanctuary of Timeless Elegance',
  storySubheading: 'Rooted in heritage, designed for modern restorative travel',
  storyParagraphs: [
    'Founded with a profound reverence for the coastal landscape, Azure Haven was designed to blur the boundary between natural splendor and refined comfort.',
    'Our culinary philosophy honors regional organic growers, while our wellness programs weave ancient Ayurvedic principles with contemporary hydrotherapy.',
    'Here, luxury is experienced not through ostentation, but through generous spaces, quiet moments of wonder, and intuitive service that makes every arrival feel like coming home.'
  ],
  logo: {
    dark: '/images/logo/logo-dark.svg',
    light: '/images/logo/logo-light.svg',
    symbolOnly: '/images/logo/symbol.svg',
    alt: 'The Azure Haven Resort & Spa Emblem'
  },
  favicon: '/favicon.svg',
  primaryImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
  heroImages: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80'
  ],
  contact: {
    phonePrimary: '+1 (800) 555-0199',
    phoneSecondary: '+1 (800) 555-0198',
    phoneDisplay: '+1 (800) 555-0199',
    whatsappNumber: '18005550199',
    whatsappDefaultMessage: 'Hello! I would like to enquire about staying at The Azure Haven Resort & Spa.',
    emailReservations: 'reservations@azurehavenresort.com',
    emailEnquiry: 'concierge@azurehavenresort.com',
    emailGeneral: 'info@azurehavenresort.com',
    receptionHours: '24/7 Front Desk Assistance',
    conciergeHours: '07:00 AM – 11:00 PM Daily'
  },
  location: {
    addressLine1: '88 Ocean Crest Boulevard',
    addressLine2: 'Serenity Bay',
    locality: 'Coastal Haven',
    city: 'Havenport',
    district: 'Bayview County',
    state: 'California',
    country: 'United States',
    postalCode: '90210',
    latitude: 34.0195,
    longitude: -118.4912,
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=34.0195,-118.4912&hl=en&z=14&output=embed',
    googleMapsPlaceUrl: 'https://maps.google.com/?q=The+Azure+Haven+Resort',
    directionsUrl: 'https://maps.google.com/maps/dir//The+Azure+Haven+Resort',
    nearbyAirport: {
      name: 'Havenport International Airport (HPA)',
      code: 'HPA',
      distance: '24 km',
      travelTime: '30 mins by car / resort private transfer'
    },
    nearbyRailwayStation: {
      name: 'Havenport Central Coastal Station',
      distance: '12 km',
      travelTime: '18 mins by car'
    },
    nearbyBusStation: {
      name: 'Bayview Grand Terminal',
      distance: '8 km',
      travelTime: '12 mins'
    },
    arrivalInstructions: [
      'Resort private chauffeur transfers can be scheduled 24 hours in advance via our concierge team.',
      'Valet and self-parking are fully complimentary for all registered guests with EV charging stations on-site.',
      'Helipad arrival available upon advance coordination with resort operations.'
    ],
    parkingInfo: 'Complimentary secure valet parking & Level 2 EV charging stations available.'
  },
  booking: {
    mode: 'enquiry', // 'externalBooking' | 'enquiry' | 'directContact'
    externalEngineUrl: 'https://booking.example.com/hotel/azure-haven',
    externalEngineName: 'Official Direct Booking Engine',
    enquiryEndpoint: '/api/enquiry',
    minStayNights: 1,
    maxGuestsDefault: 4,
    depositPolicySummary: 'A credit card guarantee is required at the time of reservation.',
    acceptedPaymentMethods: ['Visa', 'MasterCard', 'American Express', 'Discover', 'Apple Pay', 'Bank Transfer'],
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM'
  },
  trustNotice: {
    enabled: true,
    title: 'Official Booking & Security Advisory',
    shortMessage: 'For your security and best rate guarantee, always book exclusively through our verified official website and certified contact channels.',
    fullMessage: 'Please be advised that The Azure Haven Resort & Spa does not authorize third-party unverified agents to solicit direct bank transfers or unauthorized deposits. Always verify your booking confirmation directly with reservations@azurehavenresort.com.',
    officialDomain: 'azurehavenresort.com',
    officialPhone: '+1 (800) 555-0199',
    officialWhatsApp: '+1 (800) 555-0199',
    badgeText: 'Verified Official Website'
  }
};
