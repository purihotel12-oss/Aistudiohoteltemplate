/**
 * MASTER HOTEL WEBSITE TEMPLATE - BLOG DATA
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI: Supply local destination guides, resort updates, and travel stories.
 */

import { BlogPost } from '../types';

export const blogData: BlogPost[] = [
  {
    id: 'post-01',
    slug: 'essential-guide-coastal-haven-hidden-coves',
    title: 'The Insider’s Guide to Coastal Haven’s Secret Sea Coves & Coastal Trails',
    excerpt: 'Discover secluded tide pools, ancient maritime lookouts, and peaceful walking trails known only to locals.',
    content: `
      Coastal Haven is celebrated for its dramatic meeting of azure waters and rugged headlands. While the resort beach offers pristine relaxation, the surrounding coastline harbors secret treasures for those eager to explore.

      ### 1. Point Serenity Clifftop Trail
      Beginning just beyond our south pavilion, this gentle 2-mile walking trail traverses protected coastal sage scrub before ascending to a breathtaking panoramic vantage point. In the early morning, pods of Pacific bottlenose dolphins can frequently be spotted playing in the surf below.

      ### 2. Pelican Cove Tide Pools
      During low tide, Pelican Cove transforms into a living marine aquarium. Natural basalt basins trap crystal-clear ocean water, revealing vibrant ochre sea stars, purple sea urchins, and translucent anemones. We recommend wearing sturdy reef shoes or picking up a naturalist kit from our concierge desk.

      ### 3. Sunset at Fisherman's Bluff
      For photography enthusiasts, Fisherman’s Bluff offers an unobstructed view of the golden hour sun dipping below the ocean horizon. Pack one of our chef's gourmet picnic baskets and savor a glass of chilled local sauvignon blanc as the evening twilight paints the sea.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Julian Vance',
      role: 'Head Concierge & Resident Naturalist'
    },
    publishedDate: '2026-02-15',
    readTime: '4 min read',
    category: 'Local Destination Guide',
    tags: ['Destination', 'Nature', 'Photography', 'Coastal Trails'],
    seoTitle: 'Secret Sea Coves & Coastal Trails of Havenport | Azure Haven Resort',
    seoDescription: 'Explore the most scenic secluded beaches, tide pools, and clifftop trails around Havenport with our resident naturalist guide.'
  },
  {
    id: 'post-02',
    slug: 'art-of-slow-hospitality-wellness-rituals',
    title: 'The Art of Slow Hospitality: Restoring Rhythm Through Holistic Wellness',
    excerpt: 'How mindful architecture, restorative sleep rituals, and botanical nutrition harmonize body and mind.',
    content: `
      In an increasingly hurried world, true luxury is the freedom of unhurried time. At Azure Haven, every sensory detail is designed to encourage deceleration.

      ### Designing for Natural Circadian Rhythm
      Our guest suites utilize architectural orientation to welcome soft, natural morning light while motorized linen sheers filter mid-day glare. In the evening, warm 2700K ambient illumination and acoustic soundproofing allow the nervous system to ease naturally into restorative deep sleep.

      ### Farm-to-Table Botanical Nutrition
      Our culinary team collaborates with four local bio-dynamic family farms to curate menus that celebrate seasonality. From crisp heirloom greens harvested at sunrise to wild coastal sea greens rich in essential minerals, every dish is an invitation to nourish.

      ### Hydrotherapy & Thermal Contrast
      The Lotus Spa embraces centuries-old thermal hydrotherapy traditions. Alternating between the eucalyptus cedar sauna and our mineral cold plunge enhances circulation, boosts immunity, and promotes deep muscular release.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Elena Rostova',
      role: 'Director of Holistic Wellness'
    },
    publishedDate: '2026-01-28',
    readTime: '5 min read',
    category: 'Wellness & Lifestyle',
    tags: ['Wellness', 'Spa', 'Nutrition', 'Quiet Luxury'],
    seoTitle: 'The Art of Slow Hospitality & Restorative Wellness | Azure Haven',
    seoDescription: 'Discover our philosophy of restorative slow travel, Ayurvedic therapies, and botanical dining at The Azure Haven Resort.'
  }
];
