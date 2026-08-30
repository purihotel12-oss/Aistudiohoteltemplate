/**
 * MASTER HOTEL WEBSITE TEMPLATE - OFFERS & PACKAGES DATA
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI: Supply promotional packages with validity dates, inclusions, and terms.
 */

import { Offer } from '../types';

export const offersData: Offer[] = [
  {
    id: 'offer-01',
    slug: 'coastal-rejuvenation-wellness-escape',
    title: 'The Coastal Rejuvenation & Spa Escape',
    subtitle: 'A restorative 3-night package including daily holistic spa rituals and organic dining',
    description:
      'Immerse yourself in our signature wellness journey. Includes luxury suite accommodations, customized daily Ayurvedic spa treatments, private yoga instruction, and organic nourishing cuisine.',
    longDescription: [
      'Take time to slow down and reconnect with your inner balance. Our Coastal Rejuvenation package is curated by our wellness director to release tension and restore vitality through personalized bodywork and hydrotherapy.',
      'Enjoy complimentary access to thermal hydrotherapy suites, daily sunrise meditation sessions on the beach, and three-course nutrient-rich organic dinners prepared with local ingredients.'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    validFrom: '2026-01-01',
    validUntil: '2026-12-31',
    badge: 'Signature Package',
    inclusions: [
      '3 Nights in an Oceanfront Suite or Coastal Villa',
      'Daily 90-minute Lotus Spa signature treatment per guest',
      'Full daily champagne and organic breakfast in suite or restaurant',
      'One private sunset catamaran excursion with wine pairing',
      'Complimentary airport round-trip luxury transfer'
    ],
    exclusions: [
      'Gratuities and incidental alcohol outside specified pairings',
      'Additional laundry or off-site excursions'
    ],
    priceInfo: 'Starting from $2,400 for 3 Nights (Double Occupancy)',
    promoCode: 'WELLNESS2026',
    terms: [
      'Minimum stay of 3 consecutive nights required.',
      'Spa appointments must be reserved at least 48 hours prior to arrival to ensure preferred time slots.',
      'Offer subject to availability and blackout dates apply during holiday peak periods.'
    ],
    ctaText: 'Enquire About Spa Escape'
  },
  {
    id: 'offer-02',
    slug: 'romantic-anniversary-haven-retreat',
    title: 'Romantic Sunset & Gourmet Celebration',
    subtitle: 'Private candlelit beach dinner, champagne on arrival, and sunset cruise',
    description:
      'Celebrate your love story with bespoke romantic touches, including a bottle of chilled vintage champagne, fresh floral arrangements, a private candlelit beach dinner under the stars, and late check-out.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    validFrom: '2026-01-01',
    validUntil: '2026-12-31',
    badge: 'Romance Package',
    inclusions: [
      'Luxury suite accommodation with ocean view',
      'Bottle of Bollinger Special Cuvée Champagne on arrival',
      'Private 4-course candlelit dinner on the beach with sommelier wine pairing',
      'Guaranteed late check-out until 2:00 PM'
    ],
    priceInfo: 'Starting from $1,650 for 2 Nights',
    promoCode: 'ROMANCE2026',
    terms: [
      'Minimum stay of 2 nights required.',
      'Beach dinner is weather permitting; an intimate private pavilion alternative is provided in case of adverse weather.'
    ],
    ctaText: 'Enquire About Romance Package'
  }
];
