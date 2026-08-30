/**
 * MASTER HOTEL WEBSITE TEMPLATE - FAQ DATA
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI: Customize questions and answers categorized by hospitality domain.
 */

import { FAQ } from '../types';

export const faqsData: FAQ[] = [
  {
    id: 'faq-01',
    question: 'What are the standard check-in and check-out times?',
    answer:
      'Standard check-in begins at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be arranged subject to availability and room readiness. Please notify our front desk team in advance.',
    category: 'Check-in',
    featuredOnHome: true
  },
  {
    id: 'faq-02',
    question: 'What is your reservation deposit and cancellation policy?',
    answer:
      'For flexible direct bookings, reservations may be cancelled with a full refund up to 7 days prior to scheduled arrival (5 days for Deluxe rooms). Stays cancelled within this window or no-shows incur a charge equal to the first night room rate plus applicable taxes.',
    category: 'Cancellation',
    featuredOnHome: true
  },
  {
    id: 'faq-03',
    question: 'Is breakfast included with room bookings?',
    answer:
      'Yes, all direct bookings made through our official website include complimentary gourmet a la carte or artisanal buffet breakfast served daily at The Azure Pavilion Restaurant or delivered to your suite.',
    category: 'Food',
    featuredOnHome: true
  },
  {
    id: 'faq-04',
    question: 'Do you offer airport or railway station transfers?',
    answer:
      'Yes, our concierge can arrange private luxury chauffeur transfers to and from Havenport International Airport (HPA) and Havenport Central Station. Please contact our concierge at least 24 hours prior to arrival with your travel itinerary.',
    category: 'Location',
    featuredOnHome: true
  },
  {
    id: 'faq-05',
    question: 'Are children welcome at the resort?',
    answer:
      'Yes, families are warmly welcomed. We offer Family Garden Residences, complimentary baby cots, kids discovery activities, children’s menus at all dining venues, and certified babysitting services upon advance request.',
    category: 'Children',
    featuredOnHome: false
  },
  {
    id: 'faq-06',
    question: 'Are pets permitted on the property?',
    answer:
      'We welcome well-behaved small companion dogs (up to 25 lbs / 11 kg) in designated ground-level Garden Villas. A one-time deep cleaning fee of $100 per stay applies. Guide and service animals are warmly accommodated across all room categories at no extra charge.',
    category: 'Pets',
    featuredOnHome: false
  },
  {
    id: 'faq-07',
    question: 'Is high-speed Wi-Fi available across the property?',
    answer:
      'Yes, complimentary enterprise-grade Wi-Fi 6 is available across the entire property, including all suites, balconies, swimming pools, gardens, and beach cabanas.',
    category: 'Wi-Fi',
    featuredOnHome: false
  },
  {
    id: 'faq-08',
    question: 'What payment methods are accepted at the resort?',
    answer:
      'We accept Visa, MasterCard, American Express, Discover, Apple Pay, Google Pay, and direct bank wire transfers for prepaid group stays. A valid government photo ID and credit card matching the reservation name are required upon check-in.',
    category: 'Payment',
    featuredOnHome: false
  }
];
