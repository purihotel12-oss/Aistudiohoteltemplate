import React, { useState } from 'react';
import { roomsData } from '../data/rooms';
import { hotelData } from '../data/hotel';
import { RoomCategory } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RoomCard } from '../components/RoomCard';
import { ShieldCheck, Sparkles, Filter, Check } from 'lucide-react';

interface RoomsPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: (params?: { roomSlug?: string }) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<RoomCategory | 'All'>('All');
  const [maxGuestsFilter, setMaxGuestsFilter] = useState<number | 'All'>('All');

  const categories: (RoomCategory | 'All')[] = [
    'All',
    ...Array.from(new Set(roomsData.map((r) => r.category)))
  ];

  const filteredRooms = roomsData.filter((room) => {
    const matchesCategory = selectedCategory === 'All' || room.category === selectedCategory;
    const matchesGuests = maxGuestsFilter === 'All' || room.maxGuests >= Number(maxGuestsFilter);
    return matchesCategory && matchesGuests;
  });

  return (
    <div id="rooms-page-root" className="pt-24 pb-20">
      <SEOHead
        metadata={{
          title: 'Rooms & Oceanfront Luxury Suites',
          description: `Explore private luxury suites and villas at ${hotelData.name}. All accommodations feature panoramic ocean vistas, private balconies, and organic amenities.`,
          path: '/rooms'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Rooms & Suites' }]} onNavigate={onNavigate} />
          
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Accommodations
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Rooms & Coastal Suites
            </h1>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Designed with bespoke natural stone, raw coastal timber, and floor-to-ceiling glass to immerse you in ocean views and natural light.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Guest Count Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <label htmlFor="guest-filter" className="text-xs font-semibold text-white/60 whitespace-nowrap">
              Minimum Guests:
            </label>
            <select
              id="guest-filter"
              value={maxGuestsFilter}
              onChange={(e) => setMaxGuestsFilter(e.target.value === 'All' ? 'All' : Number(e.target.value))}
              className="bg-[#1A1E26] border border-white/15 rounded-xl px-3 py-1.5 text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            >
              <option value="All" className="bg-[#1A1E26] text-white">All Capacities</option>
              <option value={2} className="bg-[#1A1E26] text-white">2+ Guests</option>
              <option value={3} className="bg-[#1A1E26] text-white">3+ Guests</option>
              <option value={4} className="bg-[#1A1E26] text-white">4+ Guests (Family)</option>
            </select>
          </div>

        </div>

        {/* Room Cards Grid */}
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onExplore={(slug) => onNavigate(`/rooms/${slug}`)}
                onBook={(slug) => onOpenBookingModal({ roomSlug: slug })}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl space-y-3">
            <p className="font-serif text-lg font-bold text-white">
              No suites match the selected filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setMaxGuestsFilter('All');
              }}
              className="text-xs font-semibold text-amber-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Direct Booking Guarantee Card */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-white">
                Direct Booking Exclusive Privileges
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed">
                When you reserve your stay directly with {hotelData.name}, you receive complimentary gourmet daily breakfast, flexible check-in priority, and zero hidden service fees.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBookingModal()}
            className="whitespace-nowrap bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
          >
            Enquire For Stay
          </button>
        </div>

      </div>
    </div>
  );
};
