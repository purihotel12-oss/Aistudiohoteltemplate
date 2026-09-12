import React from 'react';
import { NearbyPlace } from '../types';
import { Navigation, Clock, ArrowUpRight } from 'lucide-react';

interface NearbyPlaceCardProps {
  place: NearbyPlace;
}

export const NearbyPlaceCard: React.FC<NearbyPlaceCardProps> = ({ place }) => {
  return (
    <div
      id={`nearby-place-${place.id}`}
      className="bg-white/[0.04] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between"
    >
      {place.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div
            className="absolute inset-0 opacity-80"
            style={{ background: 'linear-gradient(to top, var(--theme-bg, #0F1115), transparent)' }}
          />
          <div
            className="absolute top-3 left-3 backdrop-blur-md border border-white/15 text-amber-400 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: 'var(--theme-bg, #0F1115)' }}
          >
            {place.category}
          </div>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <h4 className="font-serif text-lg font-bold text-white">
            {place.name}
          </h4>
          <p className="text-xs text-white/60 leading-relaxed">
            {place.description}
          </p>
          {place.highlight && (
            <p className="text-[11px] text-amber-400 font-medium pt-1">
              ★ {place.highlight}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-white/70 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{place.travelTime} ({place.distanceKm} km)</span>
          </div>

          {place.directionsUrl && (
            <a
              href={place.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold text-xs transition-colors"
            >
              <span>Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
