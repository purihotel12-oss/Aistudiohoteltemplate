import React from 'react';
import { Room } from '../types';
import { Users, Maximize2, Bed, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { formatCurrency } from '../lib/utils';

interface RoomCardProps {
  room: Room;
  onExplore: (slug: string) => void;
  onBook: (slug: string) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onExplore, onBook }) => {
  return (
    <div
      id={`room-card-${room.slug}`}
      className="bg-white/[0.04] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col group"
    >
      {/* Image Container with Tag & Quick View */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <img
          src={room.featuredImage}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: 'linear-gradient(to top, var(--theme-bg, #0F1115), transparent)' }}
        />
        
        {/* Category Badge */}
        <div
          className="absolute top-3 left-3 backdrop-blur-md border border-white/15 text-amber-400 text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: 'var(--theme-bg, #0F1115)' }}
        >
          {room.category}
        </div>

        {/* View Indicator */}
        {room.view && (
          <div className="absolute bottom-3 left-3 text-white/90 text-xs font-medium flex items-center gap-1.5 drop-shadow">
            <Eye className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-[200px]">{room.view}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2.5">
          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {room.name}
          </h3>

          <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
            {room.description}
          </p>

          {/* Quick Specifications Pill Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-white/70">
            <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[11px]">
              <Users className="w-3 h-3 text-amber-400" />
              <span>Up to {room.maxGuests} Guests</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[11px]">
              <Maximize2 className="w-3 h-3 text-amber-400" />
              <span>{room.roomSizeSqFt} sq ft / {room.roomSizeSqM} m²</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[11px]">
              <Bed className="w-3 h-3 text-amber-400" />
              <span className="truncate max-w-[140px]">{room.bedType}</span>
            </div>
          </div>
        </div>

        {/* Highlighted Amenities */}
        {room.amenities.length > 0 && (
          <div className="pt-3 border-t border-white/10">
            <ul className="grid grid-cols-2 gap-1.5 text-[11px] text-white/60">
              {room.amenities.slice(0, 4).map((amenity, i) => (
                <li key={i} className="flex items-center gap-1.5 truncate">
                  <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{amenity.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price & Action Strip */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            {room.startingPrice ? (
              <div>
                <span className="text-[10px] text-white/40 uppercase tracking-wider block font-mono">From</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-xl font-bold text-white">
                    {formatCurrency(room.startingPrice, room.currency)}
                  </span>
                  <span className="text-[11px] text-white/50">{room.priceLabel || '/ night'}</span>
                </div>
              </div>
            ) : (
              <span className="text-xs text-white/50 font-medium">Rates on Request</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onExplore(room.slug)}
              className="text-xs font-semibold text-white/70 hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => onBook(room.slug)}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow transition-all"
            >
              <span>Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
