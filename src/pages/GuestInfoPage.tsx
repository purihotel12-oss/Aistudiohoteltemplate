import React from 'react';
import { hotelData } from '../data/hotel';
import { policiesData } from '../data/policies';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Clock, Info, CheckCircle2 } from 'lucide-react';

interface GuestInfoPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: () => void;
}

export const GuestInfoPage: React.FC<GuestInfoPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const guestInfo = policiesData.guestInformation;

  return (
    <div id="guest-info-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `Guest Information & Arrival Guidelines | ${hotelData.name}`,
          description: `Everything you need for a smooth stay at ${hotelData.name}: check-in/out hours, government ID requirements, child policies, quiet hours, and house guidelines.`,
          path: '/guest-information'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Guest Information' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              <span>Arrival & Property Protocols</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {guestInfo.title}
            </h1>
            {guestInfo.introNotice && (
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {guestInfo.introNotice}
              </p>
            )}
          </div>
        </div>

        {/* Essential Timings Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-2 shadow-xl">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Check-in Time</span>
            </div>
            <p className="font-serif text-2xl font-bold text-white">{hotelData.booking.checkInTime}</p>
            <p className="text-xs text-white/50">Early check-in subject to room availability upon arrival.</p>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-2 shadow-xl">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Check-out Time</span>
            </div>
            <p className="font-serif text-2xl font-bold text-white">{hotelData.booking.checkOutTime}</p>
            <p className="text-xs text-white/50">Late check-out may be arranged with the front desk.</p>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-2 shadow-xl">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Front Desk Concierge</span>
            </div>
            <p className="font-serif text-2xl font-bold text-white">{hotelData.contact.receptionHours || '24 Hours'}</p>
            <p className="text-xs text-white/50">Assisting guest arrivals and personal requests day and night.</p>
          </div>
        </div>

        {/* Sections List */}
        <div className="space-y-6">
          {guestInfo.sections.map((section, idx) => (
            <div key={idx} className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {section.heading}
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <div key={bpIdx} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenBookingModal}
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
          >
            Reserve Your Stay
          </button>
        </div>

      </div>
    </div>
  );
};
