import React from 'react';
import { Experience } from '../types';
import { Clock, MapPin, Compass, ArrowRight } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  onEnquire: (experienceTitle: string) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onEnquire }) => {
  return (
    <div
      id={`experience-card-${experience.slug}`}
      className="bg-white/[0.04] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col group"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: 'linear-gradient(to top, var(--theme-bg, #0F1115), transparent)' }}
        />
        
        {experience.difficulty && (
          <div
            className="absolute top-3 left-3 backdrop-blur-md border border-white/15 text-amber-400 text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: 'var(--theme-bg, #0F1115)' }}
          >
            {experience.difficulty} Pace
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {experience.title}
          </h3>

          {experience.subtitle && (
            <p className="text-xs font-medium text-amber-400">
              {experience.subtitle}
            </p>
          )}

          <p className="text-xs text-white/60 line-clamp-3 leading-relaxed">
            {experience.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs text-white/70">
            <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[11px]">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>{experience.duration}</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[11px]">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span className="truncate max-w-[150px]">{experience.location}</span>
            </div>
            {experience.ageSuitability && (
              <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[11px]">
                <Compass className="w-3 h-3 text-amber-400" />
                <span>{experience.ageSuitability}</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-white/40 uppercase tracking-wider block font-mono">Investment</span>
            <span className="text-xs font-semibold text-white/90">
              {experience.priceEstimate || 'Included for Guests'}
            </span>
          </div>

          <button
            onClick={() => onEnquire(experience.title)}
            className="inline-flex items-center gap-1.5 bg-white hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow transition-all"
          >
            <span>Reserve</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
