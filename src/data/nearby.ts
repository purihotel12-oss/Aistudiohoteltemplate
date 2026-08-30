/**
 * MASTER HOTEL WEBSITE TEMPLATE - NEARBY ATTRACTIONS DATA
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Future AI: Supply real local attractions with accurate distances and travel times.
 */

import { NearbyPlace } from '../types';

export const nearbyData: NearbyPlace[] = [
  {
    id: 'near-01',
    name: 'Point Serenity Historic Lighthouse',
    category: 'Heritage & Culture',
    description: 'An iconic 19th-century maritime landmark offering 360-degree views of the dramatic coastline and rocky headlands.',
    distanceKm: 3.8,
    travelTime: '7 mins by car or 25 mins on resort bicycle',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80',
    directionsUrl: 'https://maps.google.com/?q=Point+Serenity+Lighthouse',
    mapsUrl: 'https://maps.google.com/?q=Point+Serenity+Lighthouse',
    highlight: 'Spectacular sunset vantage point & museum'
  },
  {
    id: 'near-02',
    name: 'Pelican Cove Marine Reserve & Tide Pools',
    category: 'Beach & Nature',
    description: 'A protected aquatic sanctuary teeming with colorful sea stars, hermit crabs, playful sea otters, and gentle shallow swimming lagoons.',
    distanceKm: 1.5,
    travelTime: '3 mins by golf cart or 15 mins walk along the beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    directionsUrl: 'https://maps.google.com/?q=Pelican+Cove+Marine+Reserve',
    mapsUrl: 'https://maps.google.com/?q=Pelican+Cove+Marine+Reserve',
    highlight: 'Guided tide-pool excursions available'
  },
  {
    id: 'near-03',
    name: 'Old Town Havenport Artisans Village',
    category: 'Shopping',
    description: 'Cobblestone lanes lined with boutique art galleries, handcrafted pottery workshops, artisan bakeries, and antique curators.',
    distanceKm: 6.2,
    travelTime: '12 mins by resort car transfer',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    directionsUrl: 'https://maps.google.com/?q=Havenport+Artisans+Village',
    mapsUrl: 'https://maps.google.com/?q=Havenport+Artisans+Village',
    highlight: 'Weekly farmers & craft market every Saturday'
  },
  {
    id: 'near-04',
    name: 'Ridgeview Estate Vineyards & Olive Groves',
    category: 'Dining & Nightlife',
    description: 'Award-winning biodynamic winery nestled in the coastal hills offering cellar door tastings and wood-fired artisanal lunches.',
    distanceKm: 14.5,
    travelTime: '20 mins by private transfer',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    directionsUrl: 'https://maps.google.com/?q=Ridgeview+Estate+Vineyards',
    mapsUrl: 'https://maps.google.com/?q=Ridgeview+Estate+Vineyards',
    highlight: 'Exclusive private barrel room tastings for resort guests'
  }
];
