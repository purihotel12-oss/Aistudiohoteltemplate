/**
 * MASTER HOTEL WEBSITE TEMPLATE - HOTEL CONFIGURATION
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI or developers: Update this file with your specific hotel details.
 * Reusable components read directly from this central store.
 */

import { HotelData } from '../types';

export const DEFAULT_HOTEL_DATA: HotelData = {
  name: 'The Samudra Heritage Resort & Spa',
  legalName: 'Samudra Heritage Hospitality India Private Limited',
  shortName: 'Samudra Heritage',
  tagline: 'Where royal Indian elegance meets the tranquil Arabian Sea',
  propertyType: 'Heritage Retreat',
  starRating: 5,
  establishedYear: 2018,
  shortDescription:
    'Nestled along the pristine golden sands of South Goa, The Samudra Heritage Resort & Spa blends royal Indian palace architecture with heartfelt Atithi Devo Bhava hospitality, authentic Ayurvedic wellness rituals, and locally-inspired coastal culinary excellence.',
  longDescription: [
    'Conceived as an intimate sanctuary of peace along the Arabian Sea, The Samudra Heritage Resort offers discerning travelers a tranquil oasis amidst swaying coconut palms, grand stone courtyards, and whispering ocean breezes.',
    'Every architectural contour draws inspiration from timeless Konkan and Portuguese-Indian heritage, featuring expansive open-air verandas, hand-carved teakwood pillars, indigenous laterite stone, and floor-to-ceiling vistas framing panoramic sunsets.',
    'Whether you seek profound rejuvenation in our traditional Ayurvedic wellness sanctuary, an intimate candlelit beach dining experience under the stars, or an inspiring venue for memorable celebrations, our dedicated team anticipates every desire with warmth and discretion.'
  ],
  storyHeadline: 'An Unhurried Sanctuary of Timeless Indian Grace',
  storySubheading: 'Rooted in heritage, designed for modern restorative luxury',
  storyParagraphs: [
    'Founded with a profound reverence for the coastal landscape and India’s rich tradition of unconditional hospitality, Samudra Heritage was designed to blur the boundary between natural coastal splendor and royal comfort.',
    'Our culinary philosophy honors regional organic spice growers and coastal fishermen, while our wellness programs weave centuries-old Vedic and Ayurvedic principles with contemporary hydrotherapy.',
    'Here, luxury is experienced through generous open-air spaces, quiet moments of wonder, traditional welcome rituals with marigold garlands and fresh tender coconut water, and intuitive service that makes every arrival feel like coming home.'
  ],
  logo: {
    dark: '/images/logo/logo-dark.svg',
    light: '/images/logo/logo-light.svg',
    symbolOnly: '/images/logo/symbol.svg',
    alt: 'The Samudra Heritage Resort & Spa Emblem'
  },
  favicon: '/favicon.svg',
  primaryImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
  heroImages: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80'
  ],
  contact: {
    phonePrimary: '+91 (832) 674-8800',
    phoneSecondary: '+91 98200 11222',
    phoneDisplay: '+91 (832) 674-8800',
    whatsappNumber: '919820011222',
    whatsappDefaultMessage: 'Namaste! I would like to enquire about staying at The Samudra Heritage Resort & Spa, Goa.',
    emailReservations: 'reservations@samudraheritage.com',
    emailEnquiry: 'concierge@samudraheritage.com',
    emailGeneral: 'namaste@samudraheritage.com',
    receptionHours: '24/7 Front Desk & Royal Concierge',
    conciergeHours: '07:00 AM – 11:00 PM Daily'
  },
  location: {
    addressLine1: '108 Samudra Marg, Mobor Beach',
    addressLine2: 'Cavelossim',
    locality: 'Salcete',
    city: 'South Goa',
    district: 'South Goa',
    state: 'Goa',
    country: 'India',
    postalCode: '403731',
    latitude: 15.1583,
    longitude: 73.9458,
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=15.1583,73.9458&hl=en&z=14&output=embed',
    googleMapsPlaceUrl: 'https://maps.google.com/?q=Mobor+Beach+Cavelossim+Goa',
    directionsUrl: 'https://maps.google.com/maps/dir//Mobor+Beach+Cavelossim+Goa',
    nearbyAirport: {
      name: 'Dabolim International Airport (GOI) / Manohar Int’l Airport (GOX)',
      code: 'GOI / GOX',
      distance: '38 km (GOI) / 68 km (GOX)',
      travelTime: '45 mins from Dabolim / 75 mins from Mopa'
    },
    nearbyRailwayStation: {
      name: 'Madgaon Junction Railway Station (MAO)',
      distance: '16 km',
      travelTime: '22 mins by resort car transfer'
    },
    nearbyBusStation: {
      name: 'Margao KSRTC / Kadamba Central Bus Terminal',
      distance: '15 km',
      travelTime: '20 mins'
    },
    arrivalInstructions: [
      'Resort private luxury chauffeur transfers can be scheduled 24 hours in advance via our concierge team from Dabolim (GOI) or Mopa (GOX) airports.',
      'Valet and self-parking are fully complimentary for all registered guests with EV charging stations on-site.',
      'Guests are welcomed with a traditional floral garland, sandalwood tilak, and fresh coconut water upon arrival.'
    ],
    parkingInfo: 'Complimentary secure valet parking & Level 2 EV charging stations available.'
  },
  booking: {
    mode: 'enquiry', // 'externalBooking' | 'enquiry' | 'directContact'
    externalEngineUrl: 'https://booking.example.com/hotel/samudra-heritage',
    externalEngineName: 'Official Direct Booking Portal',
    enquiryEndpoint: '/api/enquiry',
    minStayNights: 1,
    maxGuestsDefault: 4,
    depositPolicySummary: 'A credit card pre-authorization or UPI/NEFT deposit guarantee is required at the time of reservation.',
    acceptedPaymentMethods: ['UPI (GPay / PhonePe / Paytm)', 'RuPay', 'Visa', 'MasterCard', 'American Express', 'Net Banking / NEFT', 'Bank Transfer'],
    checkInTime: '2:00 PM',
    checkOutTime: '11:00 AM'
  },
  trustNotice: {
    enabled: true,
    title: 'Official Direct Booking & Security Advisory',
    shortMessage: 'For your security, best rate guarantee, and authentic inclusions, always book exclusively through our verified official website and certified channels.',
    fullMessage: 'Please be advised that The Samudra Heritage Resort & Spa does not authorize third-party unverified agents to solicit cash deposits or unauthorized personal transfers. Always verify your booking confirmation directly with reservations@samudraheritage.com or call +91 (832) 674-8800.',
    officialDomain: 'samudraheritage.com',
    officialPhone: '+91 (832) 674-8800',
    officialWhatsApp: '+91 98200 11222',
    badgeText: 'Verified Official Resort Website'
  }
};

const getStoredHotelData = (): HotelData => {
  if (typeof window === 'undefined') return DEFAULT_HOTEL_DATA;
  try {
    const raw = localStorage.getItem('hotel_admin_nap_config');
    if (!raw) return DEFAULT_HOTEL_DATA;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_HOTEL_DATA,
      ...parsed,
      contact: {
        ...DEFAULT_HOTEL_DATA.contact,
        ...(parsed.contact || {})
      },
      location: {
        ...DEFAULT_HOTEL_DATA.location,
        ...(parsed.location || {})
      },
      trustNotice: {
        ...DEFAULT_HOTEL_DATA.trustNotice,
        ...(parsed.trustNotice || {})
      }
    };
  } catch (e) {
    console.error('Failed to load hotelData from localStorage', e);
    return DEFAULT_HOTEL_DATA;
  }
};

export const hotelData: HotelData = getStoredHotelData();

/**
 * Updates hotel NAP (Name, Address, Phone, WhatsApp) and syncs across the entire application.
 */
export const updateHotelData = (updatedFields: Partial<HotelData>) => {
  if (updatedFields.contact) {
    hotelData.contact = { ...hotelData.contact, ...updatedFields.contact };
  }
  if (updatedFields.location) {
    hotelData.location = { ...hotelData.location, ...updatedFields.location };
  }
  if (updatedFields.trustNotice) {
    hotelData.trustNotice = { ...hotelData.trustNotice, ...updatedFields.trustNotice };
  }
  Object.assign(hotelData, {
    ...updatedFields,
    contact: hotelData.contact,
    location: hotelData.location,
    trustNotice: hotelData.trustNotice
  });

  try {
    localStorage.setItem('hotel_admin_nap_config', JSON.stringify(hotelData));
    window.dispatchEvent(new CustomEvent('hotel-config-updated', { detail: { hotelData } }));
  } catch (err) {
    console.error('Failed to persist hotelData', err);
  }
};

/**
 * Resets hotel data back to original defaults.
 */
export const resetHotelData = () => {
  Object.assign(hotelData, JSON.parse(JSON.stringify(DEFAULT_HOTEL_DATA)));
  try {
    localStorage.removeItem('hotel_admin_nap_config');
    window.dispatchEvent(new CustomEvent('hotel-config-updated', { detail: { hotelData } }));
  } catch (err) {
    console.error('Failed to reset hotelData', err);
  }
};
