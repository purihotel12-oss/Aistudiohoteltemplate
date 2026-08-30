/**
 * MASTER HOTEL WEBSITE TEMPLATE - AMENITIES DATA
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI: Organize hotel amenities into standard categories with clean
 * Lucide icon descriptors and descriptive notes.
 */

import { Amenity } from '../types';

export const amenitiesData: Amenity[] = [
  // Wellness
  {
    id: 'amenity-01',
    name: 'Lotus Wellness Spa & Thermal Hydrotherapy',
    description: 'Six private treatment suites, cedar sauna, steam room, and outdoor mineral vitality baths.',
    category: 'Wellness',
    iconName: 'Sparkles',
    featured: true,
    availabilityNote: 'Open 08:00 AM – 09:00 PM | Appointments recommended'
  },
  {
    id: 'amenity-02',
    name: 'Oceanfront Heated Infinity Pool',
    description: 'Tiered multi-level freshwater infinity pool with submerged sun loungers and cabana service.',
    category: 'Wellness',
    iconName: 'Waves',
    featured: true,
    availabilityNote: 'Open daily 06:00 AM – 10:00 PM'
  },
  {
    id: 'amenity-03',
    name: 'State-of-the-Art Fitness Center',
    description: 'Technogym cardio stations, free weights, Peloton bikes, and dedicated oceanview yoga deck.',
    category: 'Wellness',
    iconName: 'Dumbbell',
    featured: false,
    availabilityNote: '24/7 Keycard Access'
  },

  // Dining
  {
    id: 'amenity-04',
    name: 'The Azure Pavilion Signature Restaurant',
    description: 'Locally caught coastal seafood, organic produce from our valley gardens, and fine regional wines.',
    category: 'Dining',
    iconName: 'Utensils',
    featured: true,
    availabilityNote: 'Breakfast, Lunch & Dinner | Smart Casual'
  },
  {
    id: 'amenity-05',
    name: 'Sunset Clifftop Lounge & Mixology Bar',
    description: 'Artisanal cocktails, small plates, and live acoustic sessions overlooking the golden hour horizon.',
    category: 'Dining',
    iconName: 'Wine',
    featured: true,
    availabilityNote: 'Open 04:00 PM – 12:00 Midnight'
  },
  {
    id: 'amenity-06',
    name: '24-Hour In-Room Gourmet Dining',
    description: 'Full culinary menu prepared fresh to order and served directly to your suite or terrace.',
    category: 'Dining',
    iconName: 'Clock',
    featured: false
  },

  // Connectivity & Services
  {
    id: 'amenity-07',
    name: 'High-Speed Wi-Fi 6 Throughout',
    description: 'Seamless ultra-fast gigabit fiber connectivity across all suites, gardens, pools, and beach areas.',
    category: 'Connectivity',
    iconName: 'Wifi',
    featured: true,
    availabilityNote: 'Complimentary for all guests'
  },
  {
    id: 'amenity-08',
    name: '24/7 Dedicated Concierge & Valet',
    description: 'Chauffeur coordination, private charter reservations, bespoke itinerary planning, and luggage care.',
    category: 'Property',
    iconName: 'Compass',
    featured: true
  },
  {
    id: 'amenity-09',
    name: 'Secure Valet Parking & EV Supercharging',
    description: 'Underground temperature-controlled parking with universal Level 2 EV charging stations.',
    category: 'Parking',
    iconName: 'Car',
    featured: false,
    availabilityNote: 'Complimentary on-site'
  },

  // Family & Recreation
  {
    id: 'amenity-10',
    name: 'Private Beach Access & Cabanas',
    description: 'Direct step access to secluded sand bay with complimentary sunbeds, umbrellas, and towel service.',
    category: 'Recreation',
    iconName: 'Umbrella',
    featured: true
  },
  {
    id: 'amenity-11',
    name: 'Complimentary Beach Cruisers & Water Sports',
    description: 'Stand-up paddleboards, sea kayaks, snorkeling gear, and custom handcrafted bicycles.',
    category: 'Recreation',
    iconName: 'Activity',
    featured: false,
    availabilityNote: 'Available at the Beach Clubhouse'
  },
  {
    id: 'amenity-12',
    name: 'Kids Discovery Club & Babysitting',
    description: 'Supervised marine biology workshops, creative arts, and certified professional childcare on demand.',
    category: 'Family',
    iconName: 'HeartHandshake',
    featured: false,
    availabilityNote: 'Ages 4–12 | Advance reservation for babysitting'
  },

  // Accessibility
  {
    id: 'amenity-13',
    name: 'Universal Accessibility & Elevator Access',
    description: 'Step-free pathways, accessible public restrooms, elevator access to all guest floors, and pool lifts.',
    category: 'Accessibility',
    iconName: 'Accessibility',
    featured: false
  }
];
