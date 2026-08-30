/**
 * MASTER HOTEL WEBSITE TEMPLATE - WHATSAPP INTEGRATION
 * 
 * Generates dynamic, context-aware WhatsApp direct chat links.
 * Never hard-codes phone numbers or unconfigured templates.
 */

import { hotelData } from '../data/hotel';

export function buildWhatsAppUrl(contextMessage?: string): string {
  const cleanNumber = hotelData.contact.whatsappNumber.replace(/[^\d]/g, '');
  const message = contextMessage || hotelData.contact.whatsappDefaultMessage || `Hello, I would like to enquire about staying at ${hotelData.name}.`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

export function getRoomEnquiryWhatsAppUrl(roomName: string, checkIn?: string, checkOut?: string): string {
  let message = `Hello ${hotelData.shortName}, I am interested in reserving the "${roomName}".`;
  if (checkIn && checkOut) {
    message += ` Dates: ${checkIn} to ${checkOut}.`;
  }
  message += ` Please let me know availability and best direct rates.`;
  return buildWhatsAppUrl(message);
}

export function getOfferEnquiryWhatsAppUrl(offerTitle: string, promoCode?: string): string {
  let message = `Hello ${hotelData.shortName}, I would like to enquire about the special package: "${offerTitle}".`;
  if (promoCode) {
    message += ` Promo Code: ${promoCode}.`;
  }
  return buildWhatsAppUrl(message);
}
