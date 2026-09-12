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
    guestName: 'Aditya & Radhika Singhania',
    location: 'Mumbai, Maharashtra',
    stayDate: 'October 2025',
    roomStayed: 'Ocean Grand Sanctuary Suite',
    rating: 5,
    reviewTitle: 'An unmatched benchmark in Indian coastal luxury and hospitality',
    reviewText:
      'From the moment we arrived and were greeted with traditional marigold garlands and fresh tender coconut water, every detail was immaculate. Watching the Arabian Sea sunset from our private plunge pool while the royal butler arranged dinner on the teak deck was unforgettable. Truly world-class.',
    source: 'TripAdvisor',
    verifiedStay: true
  },
  {
    id: 'rev-02',
    guestName: 'Ananya Deshmukh',
    location: 'Bengaluru, Karnataka',
    stayDate: 'September 2025',
    roomStayed: 'Samudra Coastal Deluxe Villa',
    rating: 5,
    reviewTitle: 'A serene architectural sanctuary with authentic Ayurvedic wellness',
    reviewText:
      'The Lotus Spa and the morning dawn yoga sessions overlooking the ocean restored my inner peace. The food at The Samudra Pavilion was extraordinarily authentic — royal coastal thalis and fresh catch cooked to perfection. Five-star perfection in Goa.',
    source: 'Google',
    verifiedStay: true
  },
  {
    id: 'rev-03',
    guestName: 'Dr. Vikram & Shweta Malhotra',
    location: 'New Delhi',
    stayDate: 'August 2025',
    roomStayed: 'Two-Bedroom Family Garden Residence',
    rating: 5,
    reviewTitle: 'The ideal luxury haven for multi-generational family travel',
    reviewText:
      'Traveling with elderly parents and children can be demanding, but Samudra Heritage made it effortless. The ground-floor lawn access from our residence, the attentive staff embodying Atithi Devo Bhava, and the exquisite breakfast made this our most cherished family vacation.',
    source: 'Booking.com',
    verifiedStay: true
  },
  {
    id: 'rev-04',
    guestName: 'Marcus & Sophie Bennett',
    location: 'London, United Kingdom',
    stayDate: 'July 2025',
    roomStayed: 'Panoramic Horizon King Room',
    rating: 5,
    reviewTitle: 'Quiet Indian luxury executed with pure authenticity and soul',
    reviewText:
      'No loud music, no rushed commercial atmosphere — only whispering Arabian Sea waves, magnificent heritage architecture, and genuine warmth from the entire team. The private catamaran cruise was the highlight of our Indian journey.',
    source: 'Direct Guestbook',
    verifiedStay: true
  }
];
