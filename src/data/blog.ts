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
    title: 'The Insider’s Guide to South Goa’s Secret Sea Coves & Coastal Heritage Trails',
    excerpt: 'Discover secluded lagoons, ancient maritime lookouts, and peaceful coconut grove walking trails.',
    content: `
      South Goa is celebrated for its pristine meeting of turquoise Arabian waters and swaying emerald palms. While our private beach offers pure relaxation, the surrounding coastline harbors secret treasures for those eager to explore.

      ### 1. Cabo de Rama Clifftop Trail
      Beginning just a short distance from our south pavilion, this gentle walking trail traverses coastal headlands before ascending to breathtaking panoramic fort ramparts. In the early morning, pods of playful Indian Ocean humpback dolphins can frequently be spotted in the calm sea below.

      ### 2. Betul Estuary & Hidden Tide Lagoons
      During low tide, the secluded coves near the estuary transform into serene tide pools. Crystal-clear water reveals vibrant marine life, gentle hermit crabs, and undisturbed golden sands. We recommend wearing comfortable walking footwear or taking an escorted morning trail with our resident naturalist.

      ### 3. Sunset at Mobor Fisherman's Point
      For photography enthusiasts, Mobor Point offers an unobstructed view of the golden hour sun dipping below the Arabian Sea. Pack one of our chef's royal picnic hampers and savor fresh tender coconut water or fine Indian vintage wine as evening twilight paints the sky in saffron and indigo.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Rohan Fernandes',
      role: 'Head Concierge & Resident Naturalist'
    },
    publishedDate: '2026-02-15',
    readTime: '4 min read',
    category: 'Local Destination Guide',
    tags: ['Destination', 'Nature', 'Photography', 'Coastal Trails', 'Goa'],
    seoTitle: 'Secret Sea Coves & Coastal Trails of South Goa | Samudra Heritage Resort',
    seoDescription: 'Explore the most scenic secluded beaches, lagoons, and clifftop trails around South Goa with our resident naturalist guide.'
  },
  {
    id: 'post-02',
    slug: 'art-of-slow-hospitality-wellness-rituals',
    title: 'The Art of Susegad: Restoring Natural Rhythm Through Ayurvedic Wellness',
    excerpt: 'How mindful Goan heritage architecture, restorative sleep rituals, and Ayurvedic nutrition harmonize body and soul.',
    content: `
      In an increasingly hurried world, true luxury is the freedom of unhurried time — what the Goan ethos affectionately calls "Susegad". At Samudra Heritage, every sensory detail is designed to encourage peaceful deceleration.

      ### Designing for Natural Circadian Rhythm
      Our heritage suites utilize traditional Portuguese-Goan veranda architecture to welcome soft, natural sea breezes and morning light. In the evening, warm ambient brass lamps and natural terracotta acoustic insulation allow the nervous system to ease into restorative sleep to the murmur of waves.

      ### Satvik & Coastal Botanical Nutrition
      Our culinary masters curate seasonal menus celebrating authentic regional herbs, freshly cold-pressed coconut oil, heirloom red rice, and organic spices harvested directly from our estate gardens. Every dish is an invitation to nourish vital prana.

      ### Authentic Ayurvedic Therapies & Herbal Steam
      The Lotus Spa embraces time-honored Ayurvedic wisdom. Personalized consultations with our resident Vaidya (Ayurvedic physician), traditional warm herbal oil Abhyanga, and fragrant cedarwood steam baths promote profound muscular rejuvenation and inner calm.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Dr. Meera Nambiar',
      role: 'Director of Ayurvedic & Holistic Wellness'
    },
    publishedDate: '2026-01-28',
    readTime: '5 min read',
    category: 'Wellness & Lifestyle',
    tags: ['Ayurveda', 'Spa', 'Nutrition', 'Quiet Luxury', 'Goa'],
    seoTitle: 'The Art of Susegad & Restorative Ayurvedic Wellness | Samudra Heritage',
    seoDescription: 'Discover our philosophy of restorative slow travel, traditional Ayurvedic therapies, and organic royal dining at The Samudra Heritage Resort & Spa.'
  }
];
