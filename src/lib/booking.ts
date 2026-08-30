/**
 * MASTER HOTEL WEBSITE TEMPLATE - BOOKING ENGINE HANDLER
 * 
 * Reusable booking configuration dispatcher:
 * - externalBooking: Opens verified external booking engine URL (SynXis, Cloudbeds, etc.)
 * - enquiry: Triggers client-side reservation inquiry modal / form
 * - directContact: Triggers verified direct phone, WhatsApp, or email contact
 */

import { hotelData } from '../data/hotel';
import { buildWhatsAppUrl } from './whatsapp';

export interface BookingSearchParams {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  roomSlug?: string;
}

export function handleBookingAction(params: BookingSearchParams = {}, onOpenEnquiryModal?: (params: BookingSearchParams) => void) {
  const mode = hotelData.booking.mode;

  if (mode === 'externalBooking' && hotelData.booking.externalEngineUrl) {
    let url = hotelData.booking.externalEngineUrl;
    const queryParams: string[] = [];
    if (params.checkIn) queryParams.push(`checkIn=${encodeURIComponent(params.checkIn)}`);
    if (params.checkOut) queryParams.push(`checkOut=${encodeURIComponent(params.checkOut)}`);
    if (params.guests) queryParams.push(`guests=${params.guests}`);
    if (queryParams.length > 0) {
      url += (url.includes('?') ? '&' : '?') + queryParams.join('&');
    }
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  if (mode === 'directContact') {
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    return;
  }

  // Default mode is enquiry modal
  if (onOpenEnquiryModal) {
    onOpenEnquiryModal(params);
  } else {
    // Dispatch global custom event for the BookingModal listener
    const event = new CustomEvent('open-hotel-enquiry-modal', { detail: params });
    window.dispatchEvent(event);
  }
}
