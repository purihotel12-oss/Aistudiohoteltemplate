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
      'Standard check-in begins at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be arranged subject to room availability and readiness. Please notify our concierge team in advance.',
    category: 'Check-in',
    featuredOnHome: true
  },
  {
    id: 'faq-02',
    question: 'What is your reservation deposit and cancellation policy?',
    answer:
      'For flexible direct bookings, reservations may be cancelled with a full refund up to 7 days prior to scheduled arrival (5 days for Deluxe rooms). Stays cancelled within this window or no-shows incur a charge equal to the first night room rate plus applicable statutory taxes (18% GST).',
    category: 'Cancellation',
    featuredOnHome: true
  },
  {
    id: 'faq-03',
    question: 'Is breakfast included with room bookings?',
    answer:
      'Yes, all direct bookings made through our official website include complimentary royal breakfast served daily at The Samudra Pavilion Restaurant or delivered white-glove to your suite veranda.',
    category: 'Food',
    featuredOnHome: true
  },
  {
    id: 'faq-04',
    question: 'Do you offer airport or railway station transfers?',
    answer:
      'Yes, our concierge can arrange private luxury chauffeur transfers to and from Dabolim International Airport (GOI), Manohar International Airport, Mopa (GOX), and Madgaon Junction Railway Station (MAO). Please contact our concierge at least 24 hours prior to arrival with your travel details.',
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
      'We welcome well-behaved small companion dogs (up to 25 lbs / 11 kg) in designated ground-level Garden Villas. A one-time deep sanitization fee of ₹3,500 per stay applies. Guide and service animals are warmly accommodated across all room categories at no extra charge.',
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
      'We accept UPI (Google Pay, PhonePe, Paytm, BHIM), RuPay, Visa, MasterCard, American Express, Net Banking, and direct NEFT/RTGS bank transfers. In accordance with Government of India statutory hospitality regulations, all Indian guests must present a valid government-issued photo ID (Aadhaar Card, Passport, Driving License, or Voter ID; PAN card is not acceptable as proof of address). Foreign nationals must present an original valid Passport and Visa / OCI card.',
    category: 'Payment',
    featuredOnHome: false
  }
];
