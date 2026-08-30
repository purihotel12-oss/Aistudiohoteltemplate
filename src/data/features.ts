/**
 * MASTER HOTEL WEBSITE TEMPLATE - FEATURE FLAGS
 * 
 * Future AI or developers: Enable or disable sections and pages here.
 * If a module is false:
 * - Its navigation items disappear automatically
 * - Its homepage section is omitted
 * - Its route/page is cleanly bypassed
 * - It is excluded from the dynamic sitemap
 */

import { FeatureFlags } from '../types';

export const featureFlags: FeatureFlags = {
  rooms: true,
  amenities: true,
  gallery: true,
  experiences: true,
  reviews: true,
  faq: true,
  offers: true,
  blog: true,
  corporateEvents: true,
  giftVouchers: true,
  careers: true,
  guestInformation: true,
  awards: true,
  trustNoticeBanner: true,
  floatingWhatsApp: true,
  quickAvailabilityBar: true,
  interactiveMap: true
};
