import React from 'react';
import { offersData } from '../data/offers';
import { hotelData } from '../data/hotel';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Tag, Calendar, Check, ArrowRight } from 'lucide-react';

interface OffersPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: (params?: { roomSlug?: string }) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div id="offers-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `Special Offers & Packages | ${hotelData.name}`,
          description: `Explore seasonal wellness packages, extended stay privileges, and honeymoon retreats at ${hotelData.name}.`,
          path: '/offers'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Special Offers' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Direct Privileges</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Seasonal Packages & Privileges
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Curated experiences crafted to offer exceptional value when reserving directly through our official channels.
            </p>
          </div>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer) => (
            <div
              key={offer.id}
              className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              {offer.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {offer.badge && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-black text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-lg shadow-amber-500/20">
                      {offer.badge}
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {offer.title}
                  </h3>
                  {offer.subtitle && (
                    <p className="text-xs font-semibold text-amber-400">{offer.subtitle}</p>
                  )}
                  <p className="text-xs text-white/70 leading-relaxed">
                    {offer.description}
                  </p>

                  {offer.inclusions && offer.inclusions.length > 0 && (
                    <div className="pt-2 space-y-1.5">
                      <p className="text-[11px] font-bold text-white/90 uppercase tracking-wider">Package Inclusions:</p>
                      <ul className="space-y-1 text-xs text-white/70">
                        {offer.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-white/50">
                    {offer.validUntil && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-white/40" />
                        <span>Valid until {offer.validUntil}</span>
                      </span>
                    )}
                    {offer.promoCode && (
                      <span className="font-mono bg-white/10 px-2.5 py-0.5 rounded text-[11px] font-bold text-amber-300 border border-white/10">
                        CODE: {offer.promoCode}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenBookingModal()}
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider py-3 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Reserve Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
