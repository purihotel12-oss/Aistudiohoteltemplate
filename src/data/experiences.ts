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
    title: 'Private Sunset Arabian Sea Catamaran Cruise',
    subtitle: 'Sail past dramatic coastal headlands with private sommelier service',
    description:
      'Board our resort’s private 45-foot luxury catamaran for a two-hour golden hour voyage across the calm Arabian Sea, accompanied by chilled champagne, fresh coastal canapés, and dolphin sightings.',
    longDescription: [
      'Embark from our private pier in the late afternoon as the warm coastal breeze settles. Guided by our experienced maritime skipper, glide past dramatic emerald headlands and secluded coves inaccessible by land.',
      'Enjoy freshly prepared coastal delicacies, artisanal cheese selections, and chilled champagne prepared by your on-board host as the sky turns into spectacular shades of saffron, amber, and rose.'
    ],
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80',
    duration: '2.5 Hours',
    distance: 'Departs from Resort Private Pier',
    location: 'Mobor Bay, Arabian Sea',
    difficulty: 'Relaxed',
    ageSuitability: 'Recommended for adults and ages 8+',
    priceEstimate: '₹14,500 per couple (or private yacht charter options)',
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
    title: "Executive Chef's Royal Spice & Coastal Masterclass",
    subtitle: 'Harvest organic spices and master Konkan and royal culinary secrets',
    description:
      'Join our Executive Chef for an interactive culinary journey through our organic estate spice gardens followed by a hands-on royal Indian and coastal cooking masterclass.',
    longDescription: [
      'Begin your morning with an aromatic stroll through our estate botanical spice gardens, hand-picking fragrant curry leaves, green cardamom, black pepper, and indigenous coastal greens.',
      'Move into our state-of-the-art open culinary pavilion for an immersive masterclass where you will prepare traditional Goan Saraswat fish curry, royal biryani, and delicate bebinca alongside our master chef.'
    ],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    duration: '3.5 Hours',
    distance: 'On-site Estate Gardens',
    location: 'The Royal Culinary Pavilion',
    difficulty: 'Relaxed',
    ageSuitability: 'All ages (Children with accompanying adult)',
    priceEstimate: '₹4,500 per guest',
    includes: [
      'Guided organic spice garden harvesting tour',
      'Hands-on interactive cooking masterclass with Executive Chef',
      'Four-course royal lunch with curated wine pairings and keepsake recipe journal'
    ],
    featured: true,
    bookingEnquiryCtaText: 'Book Cooking Masterclass'
  },
  {
    id: 'exp-03',
    slug: 'guided-cliffside-coastal-trail-hike',
    title: 'Guided Konkan Nature & Heritage Coastal Trail',
    subtitle: 'Discover dramatic sea lookouts, historic fort ramparts, and native birdlife',
    description:
      'An invigorating guided walk along the protected coastal trails, exploring scenic sea cliffs, tranquil lagoons, and seasonal dolphin watching vantage points with a resident naturalist.',
    longDescription: [
      'Traverse the scenic protected coastal trails flanking Samudra Heritage with our resident naturalist. Learn about local marine ecosystems, coastal flora, and medicinal herbs.',
      'Pause at elevated panoramic lookout points for fresh tender coconut water, gourmet trail refreshments, and high-powered binoculars for spotting kingfishers, sea eagles, and dolphins.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    duration: '2 Hours',
    distance: 'Trailhead adjacent to resort',
    location: 'South Goa Protected Coastal Sanctuary',
    difficulty: 'Moderate',
    ageSuitability: 'Ages 6+',
    priceEstimate: 'Complimentary for Resort Guests',
    includes: [
      'Professional resident naturalist guide',
      'Nordic walking poles and high-definition spotting binoculars',
      'Hydration kit with fresh coconut water and organic trail snacks'
    ],
    featured: true,
    bookingEnquiryCtaText: 'Reserve Trail Walk'
  },
  {
    id: 'exp-04',
    slug: 'dawn-ocean-yoga-sound-bath',
    title: 'Dawn Oceanfront Yoga & Vedic Sound Bath',
    subtitle: 'Awaken body and mind with authentic Hatha Yoga and singing bowl frequencies',
    description:
      'A revitalizing morning wellness session on our beachfront timber deck, combining gentle traditional yoga asanas with resonant Vedic chanting and singing bowl vibrational therapy.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    duration: '75 Minutes',
    distance: 'On-site Oceanfront Deck',
    location: 'Wellness Sanctuary Deck',
    difficulty: 'Relaxed',
    ageSuitability: 'All fitness levels',
    priceEstimate: 'Complimentary for Resort Guests',
    includes: [
      'Eco-friendly organic cotton yoga mats and meditation cushions',
      'Certified master yogi and Vedic sound therapist instruction',
      'Cold-pressed Ayurvedic herbal elixir after session'
    ],
    featured: false,
    bookingEnquiryCtaText: 'Join Yoga Session'
  }
];
