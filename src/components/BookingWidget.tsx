import React, { useState } from 'react';
import { roomsData } from '../data/rooms';
import { Calendar, Users, Home, Search } from 'lucide-react';
import { handleBookingAction } from '../lib/booking';

interface BookingWidgetProps {
  onOpenBookingModal: (params: { checkIn?: string; checkOut?: string; guests?: number; roomSlug?: string }) => void;
  compact?: boolean;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onOpenBookingModal, compact = false }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);

  const [checkIn, setCheckIn] = useState<string>(tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState<string>(dayAfterTomorrow.toISOString().split('T')[0]);
  const [guests, setGuests] = useState<number>(2);
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = {
      checkIn,
      checkOut,
      guests,
      roomSlug: selectedRoomSlug || undefined
    };
    handleBookingAction(params, (p) => onOpenBookingModal(p));
  };

  return (
    <div
      id="booking-availability-widget"
      className={`bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/15 text-white transition-all shadow-[0_12px_40px_rgba(0,0,0,0.6)] ${
        compact ? 'p-4' : 'p-6 max-w-5xl mx-auto -mt-12 relative z-30'
      }`}
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Check-In Date */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="booking-widget-checkin" className="text-xs font-semibold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Check-in</span>
          </label>
          <input
            id="booking-widget-checkin"
            type="date"
            value={checkIn}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/80 transition-all [color-scheme:dark]"
            required
          />
        </div>

        {/* Check-Out Date */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="booking-widget-checkout" className="text-xs font-semibold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Check-out</span>
          </label>
          <input
            id="booking-widget-checkout"
            type="date"
            value={checkOut}
            min={checkIn || new Date().toISOString().split('T')[0]}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/80 transition-all [color-scheme:dark]"
            required
          />
        </div>

        {/* Guests & Room Selection */}
        <div className="space-y-1.5 text-left">
          <label htmlFor="booking-widget-guests" className="text-xs font-semibold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Guests & Suite</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              id="booking-widget-guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full bg-[#1A1E26] border border-white/15 rounded-xl px-3 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
            >
              <option value={1} className="bg-[#1A1E26] text-white">1 Guest</option>
              <option value={2} className="bg-[#1A1E26] text-white">2 Guests</option>
              <option value={3} className="bg-[#1A1E26] text-white">3 Guests</option>
              <option value={4} className="bg-[#1A1E26] text-white">4 Guests</option>
              <option value={5} className="bg-[#1A1E26] text-white">5+ Guests</option>
            </select>

            <select
              id="booking-widget-room-type"
              value={selectedRoomSlug}
              onChange={(e) => setSelectedRoomSlug(e.target.value)}
              className="w-full bg-[#1A1E26] border border-white/15 rounded-xl px-2.5 py-2.5 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 truncate transition-all"
            >
              <option value="" className="bg-[#1A1E26] text-white">Any Suite</option>
              {roomsData.map((room) => (
                <option key={room.id} value={room.slug} className="bg-[#1A1E26] text-white">
                  {room.shortName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search / Book Trigger Button */}
        <div>
          <button
            id="booking-widget-search-btn"
            type="submit"
            className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs tracking-wider uppercase py-3.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
          >
            <Search className="w-4 h-4" />
            <span>Check Availability</span>
          </button>
        </div>

      </form>
    </div>
  );
};
