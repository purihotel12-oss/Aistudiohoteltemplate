import React from 'react';
import { hotelData } from '../data/hotel';
import { awardsData } from '../data/awards';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Award, Leaf, HeartHandshake, Sparkles, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div id="about-page-root" className="pt-24 pb-20 space-y-16">
      <SEOHead
        metadata={{
          title: `Our Story & Philosophy | ${hotelData.name}`,
          description: `Learn about the architectural vision, heritage, and sustainable luxury philosophy behind ${hotelData.name}.`,
          path: '/about'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumbs & Hero Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Our Story' }]} onNavigate={onNavigate} />
          
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Heritage & Architecture</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Living Tribute to Coastal Tranquility
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              {hotelData.storyHeadline || 'Built on the gentle threshold where ancient coastal rhythms meet contemporary organic design.'}
            </p>
          </div>
        </div>

        {/* Story Paragraphs & Feature Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-white/70 text-sm sm:text-base leading-relaxed">
            {hotelData.longDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={hotelData.heroImages[2] || hotelData.primaryImage}
                alt={`${hotelData.name} architectural detail`}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-white/50 italic text-center">
              Natural travertine, reclaimed cedar timber, and panoramic coastal glass frame every interior space.
            </p>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 shadow-xl">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Our Commitments
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Guiding Principles of Our Hospitality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Environmental Stewardship</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Zero single-use plastics, solar water heating systems, organic waste composting, and indigenous botanical landscaping throughout our property.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Community Harmony</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                We partner with local organic coastal farmers, artisanal ceramicists, and native guides to preserve and celebrate regional traditions.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Unhurried Mindful Service</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Hospitality that respects personal privacy and space, offering seamless personalized care with 24/7 dedicated concierge assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Awards Strip */}
        {awardsData.length > 0 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Industry Accolades
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                Honors & Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {awardsData.map((award) => (
                <div key={award.id} className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">{award.title}</h4>
                  <p className="text-xs font-semibold text-amber-400">{award.organization} ({award.year})</p>
                  <p className="text-xs text-white/60">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Card */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/15 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Experience Our Sanctuary Firsthand
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Let our team curate your peaceful escape with customized itineraries, wellness therapies, and oceanfront suites.
          </p>
          <button
            onClick={onOpenBookingModal}
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
          >
            Check Availability & Reserve
          </button>
        </div>

      </div>
    </div>
  );
};
