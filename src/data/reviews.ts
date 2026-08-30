/**
 * MASTER HOTEL WEBSITE TEMPLATE - REVIEWS DATA
 * 
 * DEMO CONTENT — REPLACE BEFORE PRODUCTION
 * Note: Never fabricate ratings or reviews in production. Supply genuine verified guest testimonials.
 */

import { Review } from '../types';

export const reviewsData: Review[] = [
  {
    id: 'rev-01',
    guestName: 'Eleanor & Marcus Vance',
    location: 'San Francisco, CA',
    stayDate: 'October 2025',
    roomStayed: 'Ocean Grand Sanctuary Suite',
    rating: 5,
    reviewTitle: 'An unmatched benchmark in coastal tranquility and hospitality',
    reviewText:
      'From the moment we arrived and were greeted with warm herbal towels and chilled coconut water, every detail was immaculate. Watching the sunset from our private plunge pool while the butler arranged dinner on the deck was unforgettable. We have already booked our anniversary return.',
    source: 'TripAdvisor',
    verifiedStay: true
  },
  {
    id: 'rev-02',
    guestName: 'David Chen',
    location: 'Seattle, WA',
    stayDate: 'September 2025',
    roomStayed: 'Azure Coastal Deluxe Villa',
    rating: 5,
    reviewTitle: 'A serene architectural masterpiece with world-class wellness',
    reviewText:
      'The Lotus Spa and the morning dawn yoga sessions overlooking the ocean restored my peace completely. The food at The Azure Pavilion was extraordinarily fresh — you can taste the dedication in every course. Truly five-star experience.',
    source: 'Google',
    verifiedStay: true
  },
  {
    id: 'rev-03',
    guestName: 'Sarah & Liam Jenkins',
    location: 'London, United Kingdom',
    stayDate: 'August 2025',
    roomStayed: 'Two-Bedroom Family Garden Residence',
    rating: 5,
    reviewTitle: 'The ideal luxury haven for family travel',
    reviewText:
      'Traveling with two young children can be exhausting, but Azure Haven made it completely effortless. The lawn access from our suite, the kids marine workshop, and the attentive staff who remembered our children’s names made this our best family vacation to date.',
    source: 'Booking.com',
    verifiedStay: true
  },
  {
    id: 'rev-04',
    guestName: 'Dr. Rebecca Althaus',
    location: 'Zurich, Switzerland',
    stayDate: 'July 2025',
    roomStayed: 'Panoramic Horizon King Room',
    rating: 5,
    reviewTitle: 'Quiet luxury done with pure authenticity and soul',
    reviewText:
      'No loud music, no rushed atmosphere — only whispering waves, magnificent architecture, and genuine smiles from the staff. The private catamaran cruise was the highlight of our stay.',
    source: 'Direct Guestbook',
    verifiedStay: true
  }
];
