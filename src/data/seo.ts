/**
 * MASTER HOTEL WEBSITE TEMPLATE - SEO CONFIGURATION
 * 
 * Authoritative site domain, meta templates, and Open Graph defaults.
 * Future AI: Update siteUrl and default descriptions per hotel client.
 */

import { SEOConfig } from '../types';

export const seoConfig: SEOConfig = {
  siteUrl: 'https://samudraheritage.com', // Authoritative canonical domain root
  defaultTitle: 'The Samudra Heritage Resort & Spa | Luxury Coastal Sanctuary Goa',
  titleTemplate: '%s | The Samudra Heritage Resort & Spa',
  defaultDescription:
    'Experience authentic Indian coastal luxury, curated Arabian Sea suites, holistic Ayurvedic wellness, and royal dining at The Samudra Heritage Resort & Spa, Goa.',
  defaultOgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&h=630&q=80',
  twitterHandle: '@samudraheritage',
  siteLanguage: 'en-IN',
  robotsDefault: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  organizationSchema: {
    type: 'Resort',
    priceRange: '₹₹₹₹'
  }
};
