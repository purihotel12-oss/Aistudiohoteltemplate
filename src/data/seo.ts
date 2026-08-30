/**
 * MASTER HOTEL WEBSITE TEMPLATE - SEO CONFIGURATION
 * 
 * Authoritative site domain, meta templates, and Open Graph defaults.
 * Future AI: Update siteUrl and default descriptions per hotel client.
 */

import { SEOConfig } from '../types';

export const seoConfig: SEOConfig = {
  siteUrl: 'https://azurehavenresort.com', // Authoritative canonical domain root
  defaultTitle: 'The Azure Haven Resort & Spa | Coastal Luxury & Wellness Retreat',
  titleTemplate: '%s | The Azure Haven Resort & Spa',
  defaultDescription:
    'Experience barefoot coastal luxury, curated oceanfront suites, holistic Ayurvedic wellness, and farm-to-table dining at The Azure Haven Resort & Spa.',
  defaultOgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&h=630&q=80',
  twitterHandle: '@azurehavenresort',
  siteLanguage: 'en-US',
  robotsDefault: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  organizationSchema: {
    type: 'Resort',
    priceRange: '$$$$'
  }
};
