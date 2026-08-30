/**
 * MASTER HOTEL WEBSITE TEMPLATE - EXPERIENCES DATA
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI: Highlight signature property and local destination experiences.
 */

import { Experience } from '../types';

export const experiencesData: Experience[] = [
  {
    id: 'exp-01',
    slug: 'private-sunset-catamaran-cruise',
    title: 'Private Sunset Catamaran & Champagne Cruise',
    subtitle: 'Sail past dramatic coastal sea cliffs with private sommelier service',
    description:
      'Board our resort’s private 45-foot luxury catamaran for a two-hour golden hour voyage across the pristine bay, accompanied by chilled vintage champagne and fresh oysters.',
    longDescription: [
      'Embark from our private pier in the late afternoon as the coastal breeze settles. Guided by our experienced maritime skipper, glide past dramatic sea stacks and secluded coves inaccessible by land.',
      'Enjoy freshly shucked regional oysters, artisanal cheese selections, and chilled champagne prepared by your on-board host as the sky turns into shades of amber and rose.'
    ],
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80',
    duration: '2.5 Hours',
    distance: 'Departs from Resort Private Pier',
    location: 'Coastal Haven Bay',
    difficulty: 'Relaxed',
    ageSuitability: 'Recommended for adults and ages 8+',
    priceEstimate: '$240 per guest (or private charter options)',
    includes: [
      'Private luxury catamaran charter with certified skipper',
      'Champagne, handcrafted cocktails, and gourmet canapés',
      'Warm cashmere deck throws and sunset photography service'
    ],
    featured: true,
    bookingEnquiryCtaText: 'Enquire About Catamaran Voyage'
  },
  {
    id: 'exp-02',
    slug: 'chef-garden-table-cooking-masterclass',
    title: "Executive Chef's Garden-to-Table Masterclass",
    subtitle: 'Harvest organic ingredients and master coastal culinary secrets',
    description:
      'Join our Executive Chef for an interactive culinary journey through our organic heritage gardens followed by a private 4-course interactive cooking session and wine pairing.',
    longDescription: [
      'Begin your morning with an aromatic stroll through our estate botanical gardens, hand-picking heirloom herbs, sun-ripened tomatoes, and indigenous coastal greens.',
      'Move into our state-of-the-art open culinary studio for an immersive masterclass where you will prepare fresh seafood pasta, ceviche, and delicate pastries alongside our master chef.'
    ],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    duration: '3.5 Hours',
    distance: 'On-site Estate Gardens',
    location: 'The Culinary Pavilion',
    difficulty: 'Relaxed',
    ageSuitability: 'All ages (Children with accompanying adult)',
    priceEstimate: '$160 per guest',
    includes: [
      'Guided organic garden harvesting tour',
      'Hands-on interactive cooking masterclass with Executive Chef',
      'Four-course lunch with sommelier wine pairings and keepsake recipe book'
    ],
    featured: true,
    bookingEnquiryCtaText: 'Book Cooking Masterclass'
  },
  {
    id: 'exp-03',
    slug: 'guided-cliffside-coastal-trail-hike',
    title: 'Guided Coastal Clifftop Nature Trail',
    subtitle: 'Discover dramatic sea lookouts and native wildlife with a resident naturalist',
    description:
      'An invigorating guided walk along the protected coastal bluffs, exploring hidden sea caves, historic lighthouses, and seasonal whale watching vantage points.',
    longDescription: [
      'Traverse the scenic protected trails flanking Azure Haven with our resident naturalist. Learn about local marine ecosystems, coastal flora, and geological wonders.',
      'Pause at elevated panoramic lookout points for fresh gourmet trail refreshments and high-powered binoculars for spotting dolphins, sea otters, and migrating whales.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    duration: '2 Hours',
    distance: 'Trailhead adjacent to resort',
    location: 'Coastal Haven Marine Sanctuary',
    difficulty: 'Moderate',
    ageSuitability: 'Ages 6+',
    priceEstimate: 'Complimentary for Resort Guests',
    includes: [
      'Professional resident naturalist guide',
      'Nordic walking poles and high-definition spotting binoculars',
      'Hydration backpack with fresh organic fruit and snacks'
    ],
    featured: true,
    bookingEnquiryCtaText: 'Reserve Trail Walk'
  },
  {
    id: 'exp-04',
    slug: 'dawn-ocean-yoga-sound-bath',
    title: 'Dawn Ocean Yoga & Tibetan Sound Bath',
    subtitle: 'Awaken your spirit with soothing sound frequencies to the rhythm of ocean waves',
    description:
      'A revitalizing morning wellness session on our beachfront timber deck, combining gentle Vinyasa flow with resonant vibrational crystal sound therapy.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    duration: '75 Minutes',
    distance: 'On-site Oceanfront Deck',
    location: 'Wellness Sanctuary Deck',
    difficulty: 'Relaxed',
    ageSuitability: 'All fitness levels',
    priceEstimate: 'Complimentary for Resort Guests',
    includes: [
      'Eco-friendly cork yoga mats and meditation cushions',
      'Certified master yoga and sound therapist instruction',
      'Cold-pressed botanical wellness elixir after session'
    ],
    featured: false,
    bookingEnquiryCtaText: 'Join Yoga Session'
  }
];
