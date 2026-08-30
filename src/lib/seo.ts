/**
 * MASTER HOTEL WEBSITE TEMPLATE - SEO ENGINE
 * 
 * Dynamic canonical URLs, Open Graph, and Twitter metadata generator.
 * Never hard-codes master template URLs.
 */

import { seoConfig } from '../data/seo';
import { hotelData } from '../data/hotel';

export interface PageSEOMetadata {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'hotel';
  noIndex?: boolean;
  publishedTime?: string;
  authorName?: string;
}

export function getPageCanonicalUrl(path: string = ''): string {
  const baseUrl = seoConfig.siteUrl.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/' || cleanPath === '') {
    return baseUrl;
  }
  return `${baseUrl}${cleanPath}`;
}

export function buildPageSEO(metadata: PageSEOMetadata = {}) {
  const title = metadata.title
    ? `${metadata.title} | ${hotelData.shortName}`
    : seoConfig.defaultTitle;

  const description = metadata.description || seoConfig.defaultDescription;
  const canonicalUrl = getPageCanonicalUrl(metadata.path || '');
  const ogImage = metadata.ogImage || seoConfig.defaultOgImage;
  const ogType = metadata.ogType || 'website';
  const robots = metadata.noIndex ? 'noindex, nofollow' : seoConfig.robotsDefault;

  return {
    title,
    description,
    canonicalUrl,
    ogImage,
    ogType,
    robots,
    siteName: hotelData.name,
    twitterHandle: seoConfig.twitterHandle
  };
}
