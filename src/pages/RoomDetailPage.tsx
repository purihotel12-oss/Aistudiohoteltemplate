import React from 'react';
import { roomsData } from '../data/rooms';
import { hotelData } from '../data/hotel';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RoomGallery } from '../components/RoomGallery';
import { RoomCard } from '../components/RoomCard';
import { formatCurrency } from '../lib/utils';
import { getHotelRoomJsonLd } from '../lib/structuredData';
import { Users, Maximize2, Bed, Check, Sparkles, ShieldCheck, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface RoomDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenBookingModal: (params?: { roomSlug?: string }) => void;
}

export const RoomDetailPage: React.FC<RoomDetailPageProps> = ({ slug, onNavigate, onOpenBookingModal }) => {
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) {
    return (
      <div className="pt-32 pb-20 text-center space-y-4 max-w-md mx-auto px-4">
        <h1 className="font-serif text-2xl font-bold text-stone-900">Suite Not Found</h1>
        <p className="text-sm text-stone-600">The requested suite profile does not exist or has been updated.</p>
        <button
          onClick={() => onNavigate('/rooms')}
          className="bg-amber-700 text-white text-xs font-semibold px-5 py-2.5 rounded hover:bg-amber-800"
        >
          Return to All Suites
        </button>
      </div>
    );
  }

  const otherRooms = roomsData.filter((r) => r.slug !== slug).slice(0, 3);
  const jsonLd = getHotelRoomJsonLd(room);

  return (
    <div id={`room-detail-${room.slug}`} className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `${room.name} | Luxury Accommodations`,
          description: room.description,
          ogImage: room.featuredImage,
          path: `/rooms/${room.slug}`
        }}
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4 border-b border-white/10 pb-6">
          <Breadcrumbs
            items={[
              { label: 'Rooms & Suites', href: '/rooms' },
              { label: room.name }
            ]}
            onNavigate={onNavigate}
          />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                {room.category} • {room.view || 'Panoramic Ocean View'}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {room.name}
              </h1>
            </div>

            <div className="text-left md:text-right">
              {room.startingPrice ? (
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider block">Starting Rate</span>
                  <div className="flex items-baseline md:justify-end gap-1">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {formatCurrency(room.startingPrice, room.currency)}
                    </span>
                    <span className="text-xs text-white/60">{room.priceLabel || '/ night'}</span>
                  </div>
                </div>
              ) : (
                <span className="text-sm font-semibold text-white/80">Rates on Request</span>
              )}
            </div>
          </div>
        </div>

        {/* Top Grid: Gallery & Sticky Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left 8 Cols: Visual Gallery & Description */}
          <div className="lg:col-span-8 space-y-8">
            <RoomGallery images={room.images} roomName={room.name} />

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/[0.04] backdrop-blur-xl p-4 rounded-2xl border border-white/10">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-semibold text-white/50 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Max Guests</span>
                </span>
                <p className="text-xs font-bold text-white">
                  {room.maxGuests} Guests ({room.maxAdults} Adults)
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-semibold text-white/50 flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Room Size</span>
                </span>
                <p className="text-xs font-bold text-white">
                  {room.roomSizeSqFt} sq ft ({room.roomSizeSqM} m²)
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-semibold text-white/50 flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bedding</span>
                </span>
                <p className="text-xs font-bold text-white truncate">
                  {room.bedType}
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-semibold text-white/50 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Atmosphere</span>
                </span>
                <p className="text-xs font-bold text-white truncate">
                  {room.view || 'Scenic Horizon'}
                </p>
              </div>
            </div>

            {/* Description Narrative */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white">
                About this Suite
              </h2>
              <div className="text-white/70 text-sm sm:text-base leading-relaxed space-y-3">
                <p>{room.description}</p>
                {room.longDescription && room.longDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Room Amenities & Facilities */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="font-serif text-xl font-bold text-white">
                Suite Amenities & Appointments
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-white">{amenity.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Specific Policies */}
            {room.policies && (
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="font-serif text-xl font-bold text-white">
                  Suite Policies & Guidelines
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70">
                  {room.policies.checkIn && (
                    <div className="bg-white/[0.04] p-3.5 rounded-xl border border-white/10 backdrop-blur-md">
                      <span className="font-semibold text-white block">Check-In / Out</span>
                      <span>{room.policies.checkIn}</span>
                    </div>
                  )}
                  {room.policies.cancellation && (
                    <div className="bg-white/[0.04] p-3.5 rounded-xl border border-white/10 backdrop-blur-md">
                      <span className="font-semibold text-white block">Cancellation</span>
                      <span>{room.policies.cancellation}</span>
                    </div>
                  )}
                  {room.policies.smoking && (
                    <div className="bg-white/[0.04] p-3.5 rounded-xl border border-white/10 backdrop-blur-md">
                      <span className="font-semibold text-white block">Smoking Policy</span>
                      <span>{room.policies.smoking}</span>
                    </div>
                  )}
                  {room.policies.extraBed && (
                    <div className="bg-white/[0.04] p-3.5 rounded-xl border border-white/10 backdrop-blur-md">
                      <span className="font-semibold text-white block">Children & Extra Beds</span>
                      <span>{room.policies.extraBed}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Right 4 Cols: Reservation Action Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white/[0.05] backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  Official Direct Reservation
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Reserve {room.name}
                </h3>
              </div>

              {room.startingPrice && (
                <div className="p-4 bg-amber-500/10 border border-amber-500/25 rounded-2xl">
                  <span className="text-[10px] uppercase font-semibold text-amber-300 block">Best Guaranteed Direct Rate</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl font-bold text-white">
                      {formatCurrency(room.startingPrice, room.currency)}
                    </span>
                    <span className="text-xs text-white/70">{room.priceLabel || '/ night'}</span>
                  </div>
                </div>
              )}

              {/* Direct Booking Inclusions */}
              <ul className="space-y-2 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Complimentary daily gourmet breakfast</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>High-speed optical Wi-Fi access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct concierge arrival assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero reservation processing surcharges</span>
                </li>
              </ul>

              <div className="space-y-2.5 pt-2">
                <button
                  id="room-detail-book-now-btn"
                  onClick={() => onOpenBookingModal({ roomSlug: room.slug })}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Check Availability & Book</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 font-medium text-xs py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-center">
                <p className="text-[11px] text-white/50">
                  Questions? Call Front Desk:{' '}
                  <a href={`tel:${hotelData.contact.phonePrimary}`} className="font-semibold text-white hover:text-amber-400 transition-colors">
                    {hotelData.contact.phoneDisplay || hotelData.contact.phonePrimary}
                  </a>
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Similar Accommodations */}
        {otherRooms.length > 0 && (
          <div className="pt-12 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-white">
                Other Accommodations You May Like
              </h3>
              <button
                onClick={() => onNavigate('/rooms')}
                className="text-xs font-semibold uppercase tracking-wider text-amber-400 hover:underline"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherRooms.map((r) => (
                <RoomCard
                  key={r.id}
                  room={r}
                  onExplore={(s) => onNavigate(`/rooms/${s}`)}
                  onBook={(s) => onOpenBookingModal({ roomSlug: s })}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
