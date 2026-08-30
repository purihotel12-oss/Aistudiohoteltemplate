import React, { useState } from 'react';
import { amenitiesData } from '../data/amenities';
import { hotelData } from '../data/hotel';
import { AmenityCategory } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AmenityCard } from '../components/AmenityCard';
import { Sparkles, Filter, CheckCircle2 } from 'lucide-react';

interface AmenitiesPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: () => void;
}

export const AmenitiesPage: React.FC<AmenitiesPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<AmenityCategory | 'All'>('All');

  const categories: (AmenityCategory | 'All')[] = [
    'All',
    ...Array.from(new Set(amenitiesData.map((a) => a.category)))
  ];

  const filteredAmenities = selectedCategory === 'All'
    ? amenitiesData
    : amenitiesData.filter((a) => a.category === selectedCategory);

  return (
    <div id="amenities-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `Amenities & Facilities | ${hotelData.name}`,
          description: `Discover holistic spa, infinity pools, fine dining, private beach club, and wellness services at ${hotelData.name}.`,
          path: '/amenities'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Amenities & Facilities' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resort Experience</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Resort Amenities & Wellness
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Every facility at {hotelData.name} has been curated to inspire mindful relaxation, active rejuvenation, and sensory delight.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((amenity) => (
            <AmenityCard key={amenity.id} amenity={amenity} />
          ))}
        </div>

        {/* Complimentary Guest Privileges Banner */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h3 className="font-serif text-xl font-bold text-white">
            Included with Every Stay
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Complimentary artisanal morning breakfast</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Daily sunrise beach yoga sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>High-speed fiber optic Wi-Fi property-wide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Secure private valet parking</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
