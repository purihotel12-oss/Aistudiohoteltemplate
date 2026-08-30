/**
 * MASTER HOTEL WEBSITE TEMPLATE - STRUCTURED DATA (JSON-LD) GENERATOR
 * 
 * Schema.org compliant structured data for:
 * - Hotel / Resort
 * - PostalAddress & GeoCoordinates
 * - BreadcrumbList
 * - FAQPage
 * - Article (Blog)
 * - Offer & Room specifications
 */

import { hotelData } from '../data/hotel';
import { seoConfig } from '../data/seo';
import { Room, FAQ, BlogPost, BreadcrumbItem, Offer } from '../types';
import { getPageCanonicalUrl } from './seo';

export function getHotelJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': seoConfig.organizationSchema.type || 'Resort',
    '@id': `${seoConfig.siteUrl}#hotel`,
    name: hotelData.name,
    legalName: hotelData.legalName,
    description: hotelData.shortDescription,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}${hotelData.logo.dark}`,
    image: hotelData.primaryImage,
    telephone: hotelData.contact.phonePrimary,
    email: hotelData.contact.emailReservations,
    priceRange: seoConfig.organizationSchema.priceRange || '$$$$',
    starRating: hotelData.starRating
      ? {
          '@type': 'Rating',
          ratingValue: hotelData.starRating,
          bestRating: 5
        }
      : undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${hotelData.location.addressLine1}${hotelData.location.addressLine2 ? ', ' + hotelData.location.addressLine2 : ''}`,
      addressLocality: hotelData.location.city,
      addressRegion: hotelData.location.state,
      postalCode: hotelData.location.postalCode,
      addressCountry: hotelData.location.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: hotelData.location.latitude,
      longitude: hotelData.location.longitude
    },
    checkinTime: hotelData.booking.checkInTime,
    checkoutTime: hotelData.booking.checkOutTime,
    hasMap: hotelData.location.googleMapsPlaceUrl
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? getPageCanonicalUrl(item.href) : undefined
    }))
  };
}

export function getFAQPageJsonLd(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function getArticleJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getPageCanonicalUrl(`/blog/${post.slug}`)
    },
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: hotelData.name,
      logo: {
        '@type': 'ImageObject',
        url: `${seoConfig.siteUrl}${hotelData.logo.dark}`
      }
    },
    datePublished: post.publishedDate,
    dateModified: post.publishedDate
  };
}

export function getRoomJsonLd(room: Room) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: room.name,
    description: room.description,
    image: room.featuredImage,
    bed: {
      '@type': 'BedDetails',
      numberOfBeds: 1,
      typeOfBed: room.bedType
    },
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: room.maxGuests
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: room.roomSizeSqFt,
      unitCode: 'FTK'
    },
    amenityFeature: room.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a.name,
      value: true
    })),
    offers: room.startingPrice
      ? {
          '@type': 'Offer',
          price: room.startingPrice,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: getPageCanonicalUrl(`/rooms/${room.slug}`)
        }
      : undefined
  };
}

export const getHotelRoomJsonLd = getRoomJsonLd;
