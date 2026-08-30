import React from 'react';
import { experiencesData } from '../data/experiences';
import { hotelData } from '../data/hotel';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ExperienceCard } from '../components/ExperienceCard';
import { Compass } from 'lucide-react';

interface ExperiencesPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: (params?: { roomSlug?: string }) => void;
}

export const ExperiencesPage: React.FC<ExperiencesPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div id="experiences-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `Curated Experiences & Excursions | ${hotelData.name}`,
          description: `Private catamaran cruises, organic garden masterclasses, and coastal wildlife expeditions curated exclusively for guests at ${hotelData.name}.`,
          path: '/experiences'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Experiences' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Escapes</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Curated Resort Experiences
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Every excursion is guided by regional naturalists, master sommeliers, and wellness practitioners dedicated to authentic discovery.
            </p>
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiencesData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onEnquire={() => onOpenBookingModal()}
            />
          ))}
        </div>

        {/* Custom Itinerary Notice */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/15 rounded-3xl p-8 text-center space-y-4 max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-serif text-2xl font-bold text-white">
            Seeking a Tailored Private Expedition?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Our concierge team specializes in bespoke itineraries including private helicopter transfers, marine biology charters, and secluded beach picnics.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
          >
            Speak with Experience Concierge
          </button>
        </div>

      </div>
    </div>
  );
};
