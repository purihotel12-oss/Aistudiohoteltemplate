/**
 * MASTER HOTEL WEBSITE TEMPLATE - ROOMS & SUITES DATA
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI: Customize this array to reflect the exact room portfolio,
 * dimensions, bed types, pricing, amenities, and high-res imagery.
 */

import { Room } from '../types';

export const roomsData: Room[] = [
  {
    id: 'room-01',
    slug: 'ocean-grand-sanctuary-suite',
    name: 'Ocean Grand Sanctuary Suite',
    shortName: 'Grand Sanctuary Suite',
    category: 'Suite',
    tagline: 'Panoramic coastal horizon vistas with private plunge pool & sun terrace',
    description:
      'Perched directly above the shoreline, this marquee suite offers expansive floor-to-ceiling glass doors opening onto an expansive private teak terrace with a heated infinity plunge pool.',
    longDescription: [
      'The Ocean Grand Sanctuary Suite represents the pinnacle of residential coastal living. Featuring bespoke solid oak furnishings, an airy open-concept salon, and hand-woven textiles inspired by tidal patterns.',
      'The marble bathroom functions as a private day spa, complete with a freestanding soaking tub overlooking the waves, a dual rainforest shower enclosure, and organic botanic bath amenities crafted exclusively for Samudra Heritage.',
      'Guests enjoy dedicated personal butler service, complimentary sunset aperitifs served on the private deck, and priority reservations across all resort wellness and dining venues.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Ocean Grand Sanctuary Suite Bedroom with direct sea view',
        caption: 'Master bedroom with plush California King bed and wraparound ocean views'
      },
      {
        src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
        alt: 'Private living salon and terrace lounge',
        caption: 'Spacious light-filled lounge with handcrafted timber appointments'
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        alt: 'Ensuite marble bathroom with oceanview freestanding soaking tub',
        caption: 'Spa bathroom featuring custom travertine soaking tub and dual vanity'
      },
      {
        src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
        alt: 'Private infinity plunge pool on private sun deck',
        caption: 'Heated private infinity plunge pool facing the golden sunset'
      }
    ],
    maxGuests: 3,
    maxAdults: 2,
    maxChildren: 1,
    bedType: '1 California King Bed (Organic Cotton Linen)',
    roomSizeSqFt: 1150,
    roomSizeSqM: 107,
    view: '180° Unobstructed Oceanfront & Sunset View',
    floor: 'Top Floor (Level 4)',
    bathroomsCount: 2,
    bathroomDetails: [
      'Deep travertine soaking tub with ocean vistas',
      'Dual walk-in rainfall shower with chromotherapy lighting',
      'Double marble vanities with illuminated vanity mirrors',
      'Separate private powder room for visitors'
    ],
    amenities: [
      { name: 'Private Heated Plunge Pool', highlight: true },
      { name: '24/7 Dedicated Butler Service', highlight: true },
      { name: 'Complimentary High-Speed Wi-Fi 6', highlight: false },
      { name: 'Sonos Architectural Sound System', highlight: false },
      { name: 'Nespresso Vertuo & Artisan Tea Bar', highlight: false },
      { name: 'Curated Sommelier Wine Cellar in Room', highlight: true },
      { name: 'Custom Pillow Menu & Aromatherapy', highlight: false },
      { name: 'Motorized Blackout Drapery', highlight: false }
    ],
    featuresList: [
      'Private 400 sq ft teak terrace with daybeds and dining table',
      'Complimentary daily sunrise yoga and sunset sparkling wine',
      'Walk-in dressing room with personal safe & steamer',
      'Twice-daily housekeeping with bespoke evening turn-down ritual'
    ],
    startingPrice: 58000,
    currency: '₹',
    priceLabel: 'per night + taxes',
    mealPlanIncluded: 'A la Carte Champagne & Royal Breakfast Included',
    featured: true,
    enquiryEnabled: true,
    policies: {
      checkIn: 'Guaranteed check-in at 2:00 PM; early check-in subject to availability.',
      cancellation: 'Complimentary cancellation up to 7 days prior to scheduled arrival.',
      smoking: '100% Non-smoking room and terrace.',
      extraBed: 'One rollaway bed or crib available upon advance request.'
    },
    faqs: [
      {
        question: 'Is the private plunge pool heated year-round?',
        answer: 'Yes, the private infinity plunge pool is climate-controlled to a soothing 86°F (30°C) throughout all seasons.'
      },
      {
        question: 'Can breakfast be served on the private terrace?',
        answer: 'Absolutely. Your dedicated butler will set up full white-glove breakfast service on your private terrace at your preferred time.'
      }
    ]
  },
  {
    id: 'room-02',
    slug: 'samudra-coastal-deluxe-villa',
    name: 'Samudra Coastal Deluxe Villa',
    shortName: 'Coastal Deluxe Villa',
    category: 'Villa',
    tagline: 'Secluded beachfront haven surrounded by indigenous flora with private courtyard',
    description:
      'Set within a private landscaped courtyard steps from the beach, the Coastal Deluxe Villa balances generous indoor elegance with an outdoor rain shower and sunlit verandah.',
    longDescription: [
      'The Samudra Coastal Deluxe Villa offers unmatched privacy for couples seeking an intimate getaway. Designed with vaulted cedar ceilings, whitewashed stone, and polished terrazzo flooring.',
      'Step directly from your bedroom through sliding pocket doors into a secluded sun courtyard equipped with plush daybeds, tropical garden foliage, and an open-sky rain shower.',
      'Evenings invite stargazing from your private patio while listening to the gentle rhythm of the surf.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        alt: 'Samudra Coastal Deluxe Villa Bedroom Interior',
        caption: 'Airy bedroom with vaulted cedar ceiling and garden patio access'
      },
      {
        src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
        alt: 'Villa private garden patio lounge',
        caption: 'Private enclosed garden terrace with sun loungers'
      },
      {
        src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
        alt: 'Villa outdoor private rain shower',
        caption: 'Secluded open-air garden rain shower surrounded by tropical palms'
      }
    ],
    maxGuests: 2,
    maxAdults: 2,
    maxChildren: 0,
    bedType: '1 King Bed (400-Thread Count Egyptian Cotton)',
    roomSizeSqFt: 880,
    roomSizeSqM: 82,
    view: 'Private Garden Courtyard & Partial Ocean View',
    floor: 'Ground Level (Beach Access)',
    bathroomsCount: 1,
    bathroomDetails: [
      'Indoor marble walk-in shower & dual vanity',
      'Private outdoor botanical rain shower garden',
      'Custom organic sandalwood & sea salt bath products'
    ],
    amenities: [
      { name: 'Private Garden Sun Verandah', highlight: true },
      { name: 'Direct Beach Path Access', highlight: true },
      { name: 'High-Speed Wi-Fi 6', highlight: false },
      { name: 'Smart Climate Control', highlight: false },
      { name: 'Artisan Espresso Machine', highlight: false },
      { name: 'Organic Beach Bag & Turkish Towels', highlight: false }
    ],
    featuresList: [
      'Secluded garden sanctuary with exterior dining niche',
      'Complimentary beach cruiser bicycles during stay',
      'Nightly botanical sleep mist and pillow service'
    ],
    startingPrice: 38000,
    currency: '₹',
    priceLabel: 'per night + taxes',
    mealPlanIncluded: 'Gourmet Organic & Coastal Breakfast Included',
    featured: true,
    enquiryEnabled: true,
    policies: {
      checkIn: '2:00 PM Check-in',
      cancellation: 'Free cancellation up to 5 days prior to arrival.',
      smoking: 'Non-smoking.'
    }
  },
  {
    id: 'room-03',
    slug: 'panoramic-horizon-king-room',
    name: 'Panoramic Horizon King Room',
    shortName: 'Horizon King Room',
    category: 'Deluxe',
    tagline: 'Elevated ocean views with private sunrise balcony and refined modern comfort',
    description:
      'Elevated on the upper tiers of the resort, the Horizon King Room provides uninterrupted horizon panoramas, an oversized work-and-relax lounge, and warm coastal aesthetics.',
    longDescription: [
      'The Panoramic Horizon King Room brings the coastal horizon directly into your sanctuary. Thoughtfully appointed with warm neutral tones, artisanal timber accents, and bespoke brass fixtures.',
      'Enjoy morning coffee on your glass-fronted balcony while observing morning dolphins in the bay. The spacious work lounge and ergonomic seating provide effortless ease for remote leisure travelers.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
        alt: 'Panoramic Horizon King Room Interior',
        caption: 'Sophisticated king room with glass doors opening onto ocean balcony'
      },
      {
        src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Balcony seating with horizon ocean view',
        caption: 'Glass balustrade balcony with lounge chairs facing the Pacific'
      }
    ],
    maxGuests: 2,
    maxAdults: 2,
    maxChildren: 1,
    bedType: '1 Plush King Bed',
    roomSizeSqFt: 620,
    roomSizeSqM: 58,
    view: 'Panoramic Ocean & Coastal Headland View',
    floor: 'Level 2 & 3',
    bathroomsCount: 1,
    bathroomDetails: [
      'Oversized walk-in rainforest glass shower',
      'Natural stone vanity with LED backlit mirror',
      'Plush microfiber bathrobes and waffle slippers'
    ],
    amenities: [
      { name: 'Private Oceanview Balcony', highlight: true },
      { name: '55" 4K Smart TV with Casting', highlight: false },
      { name: 'High-Speed Wi-Fi', highlight: false },
      { name: 'Gourmet In-Room Refreshment Bar', highlight: false }
    ],
    featuresList: [
      'Spacious glass balcony with morning sunrise orientation',
      'Integrated USB-C bedside charging ports & digital safe',
      'Individual climate control with quiet eco-mode'
    ],
    startingPrice: 22500,
    currency: '₹',
    priceLabel: 'per night + taxes',
    mealPlanIncluded: 'Buffet Breakfast Included',
    featured: true,
    enquiryEnabled: true
  },
  {
    id: 'room-04',
    slug: 'two-bedroom-family-garden-residence',
    name: 'Two-Bedroom Family Garden Residence',
    shortName: 'Family Garden Residence',
    category: 'Family',
    tagline: 'Dual connecting suites with shared dining lounge and direct lawn access',
    description:
      'Designed specifically for multi-generational families and small groups, featuring two private bedrooms, two full bathrooms, and a shared living lounge with lawn access.',
    longDescription: [
      'Our Two-Bedroom Family Garden Residence blends effortless communal gathering with individual privacy. One master king bedroom and a second flexible twin bedroom ensure restful slumber for all generations.',
      'The central salon opens onto an expansive private grass terrace perfect for children to play safely while adults relax with afternoon refreshments.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
        alt: 'Family Residence Master Bedroom',
        caption: 'Master bedroom with king bed and garden patio access'
      },
      {
        src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
        alt: 'Second twin bedroom for family members',
        caption: 'Second bedroom with two twin queen beds and en-suite bath'
      }
    ],
    maxGuests: 5,
    maxAdults: 4,
    maxChildren: 3,
    bedType: '1 King Bed + 2 Twin Queen Beds',
    roomSizeSqFt: 1350,
    roomSizeSqM: 125,
    view: 'Lush Botanical Gardens & Central Pool Courtyard',
    floor: 'Ground Floor with Lawn Access',
    bathroomsCount: 2,
    bathroomDetails: [
      'Two full en-suite bathrooms',
      'One deep soaking bathtub suitable for children',
      'Dual walk-in rainfall showers'
    ],
    amenities: [
      { name: 'Two Independent En-Suite Bedrooms', highlight: true },
      { name: 'Shared Living & Dining Lounge', highlight: true },
      { name: 'Family Board Games & Child Amenities', highlight: false },
      { name: 'Microwave, Mini-Fridge & Snack Pantry', highlight: false }
    ],
    featuresList: [
      'Direct safe garden lawn access from private patio',
      'Complimentary baby cots and high chairs upon request',
      'Separate entrance doors for each room with connecting foyer'
    ],
    startingPrice: 52000,
    currency: '₹',
    priceLabel: 'per night + taxes',
    mealPlanIncluded: 'Family Royal Buffet Breakfast Included',
    featured: false,
    enquiryEnabled: true
  }
];
