import React from 'react';
import { Amenity } from '../types';
import * as Icons from 'lucide-react';

interface AmenityCardProps {
  amenity: Amenity;
}

export const AmenityCard: React.FC<AmenityCardProps> = ({ amenity }) => {
  // Dynamically resolve icon from lucide-react with fallback
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[amenity.iconName] || Icons.Sparkles;

  return (
    <div
      id={`amenity-${amenity.id}`}
      className="bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-lg hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex items-start gap-4"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/25">
        <IconComponent className="w-5 h-5" />
      </div>

      <div className="space-y-1.5 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-serif text-base font-bold text-white">
            {amenity.name}
          </h4>
          <span className="text-[10px] uppercase font-semibold text-white/50 tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
            {amenity.category}
          </span>
        </div>

        <p className="text-xs text-white/60 leading-relaxed">
          {amenity.description}
        </p>

        {amenity.availabilityNote && (
          <p className="text-[11px] text-amber-400 font-medium pt-1">
            {amenity.availabilityNote}
          </p>
        )}
      </div>
    </div>
  );
};
