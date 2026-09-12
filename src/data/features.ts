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

export const DEFAULT_FEATURE_FLAGS: FeatureFlags = {
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

const getStoredFlags = (): FeatureFlags => {
  if (typeof window === 'undefined') return { ...DEFAULT_FEATURE_FLAGS };
  try {
    const saved = localStorage.getItem('hotel_admin_feature_flags');
    if (saved) {
      return { ...DEFAULT_FEATURE_FLAGS, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Failed to parse stored feature flags', e);
  }
  return { ...DEFAULT_FEATURE_FLAGS };
};

export const featureFlags: FeatureFlags = getStoredFlags();

export const updateFeatureFlag = (key: keyof FeatureFlags, value: boolean) => {
  featureFlags[key] = value;
  try {
    localStorage.setItem('hotel_admin_feature_flags', JSON.stringify(featureFlags));
    window.dispatchEvent(new CustomEvent('hotel-config-updated', { detail: { featureFlags } }));
  } catch (e) {
    console.error('Failed to save feature flag', e);
  }
};

export const updateAllFeatureFlags = (newFlags: FeatureFlags) => {
  Object.assign(featureFlags, newFlags);
  try {
    localStorage.setItem('hotel_admin_feature_flags', JSON.stringify(featureFlags));
    window.dispatchEvent(new CustomEvent('hotel-config-updated', { detail: { featureFlags } }));
  } catch (e) {
    console.error('Failed to save feature flags', e);
  }
};

export const resetFeatureFlags = () => {
  Object.assign(featureFlags, DEFAULT_FEATURE_FLAGS);
  try {
    localStorage.removeItem('hotel_admin_feature_flags');
    window.dispatchEvent(new CustomEvent('hotel-config-updated', { detail: { featureFlags } }));
  } catch (e) {
    console.error('Failed to reset feature flags', e);
  }
};

