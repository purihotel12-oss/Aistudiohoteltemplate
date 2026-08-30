import React from 'react';
import { hotelData } from '../data/hotel';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

interface PolicyPageProps {
  type: 'privacy' | 'refund' | 'terms' | 'cookies';
  onNavigate: (path: string) => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({ type, onNavigate }) => {
  const titles = {
    privacy: 'Privacy Policy',
    refund: 'Refund & Cancellation Policy',
    terms: 'Terms and Conditions of Stay',
    cookies: 'Cookie Policy'
  };

  const title = titles[type];

  return (
    <div id="policy-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `${title} | ${hotelData.name}`,
          description: `Official ${title.toLowerCase()} for reservations and stays at ${hotelData.name}.`,
          path: `/${type}-policy`
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs items={[{ label: title }]} onNavigate={onNavigate} />

        <div className="space-y-2 border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal & Guest Rights</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h1>
          <p className="text-xs text-white/50">
            Last Updated: {new Date().getFullYear()} • Governing Property: {hotelData.legalName || hotelData.name}
          </p>
        </div>

        {/* Master Template Legal Notice Banner */}
        <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-4 text-xs text-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed text-white/80">
            <strong className="text-amber-300">Hotel Master Template Legal Notice:</strong> This document contains standard hospitality policy frameworks. When customizing for an individual hotel property, the hotel operator or legal counsel must review and adapt these terms to comply with jurisdictional regulations and local statutory consumer rights.
          </p>
        </div>

        {/* Policy Body */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-white/80 leading-relaxed shadow-xl">
          {type === 'privacy' && (
            <>
              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">1. Information We Collect</h3>
                <p>
                  At {hotelData.name}, we collect personal information necessary to provide hospitality reservations, seamless check-in, and personalized concierge services. This information includes your name, contact email, telephone number, payment details, arrival preferences, and government-mandated guest identification.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">2. How We Protect Your Data</h3>
                <p>
                  We implement robust administrative, technical, and physical safeguards to protect guest personal records against unauthorized access, accidental loss, or unlawful processing. We do not sell or monetize personal guest information under any circumstance.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">3. Contacting the Data Controller</h3>
                <p>
                  If you have inquiries regarding your personal information, please write to our privacy desk at{' '}
                  <a href={`mailto:${hotelData.contact.emailGeneral || hotelData.contact.emailReservations}`} className="text-amber-400 underline">
                    {hotelData.contact.emailGeneral || hotelData.contact.emailReservations}
                  </a>.
                </p>
              </section>
            </>
          )}

          {type === 'refund' && (
            <>
              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">1. Standard Reservation Cancellation</h3>
                <p>
                  Direct reservations cancelled up to 48 hours prior to the standard check-in time (15:00 local time) are eligible for a full refund or complimentary date modification, unless explicitly specified otherwise in high-demand holiday package terms.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">2. Refund Processing Timeframes</h3>
                <p>
                  Approved refunds are credited to the original payment method within 5 to 7 business days, subject to the guest's issuing banking institution.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">3. Early Departures</h3>
                <p>
                  In the event of an early departure during an ongoing stay, please notify the front desk. Standard room night adjustments are evaluated based on room availability and package stipulations.
                </p>
              </section>
            </>
          )}

          {type === 'terms' && (
            <>
              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">1. Guest Conduct & Property Care</h3>
                <p>
                  Guests at {hotelData.name} agree to treat accommodations, gardens, spa facilities, and fellow travelers with mutual respect and care. Guests are financially responsible for any intentional damage caused to resort property.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">2. Check-In Verification & Security Deposit</h3>
                <p>
                  Valid physical government photo identification (Passport, Driving License, or National Identity Card) is strictly required upon arrival for all adult guests. An incidental security deposit authorization may be recorded at check-in.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">3. Force Majeure</h3>
                <p>
                  The resort shall not be held liable for failure to provide services caused by acts of God, civil emergencies, severe weather events, or governmental travel restrictions beyond reasonable operational control.
                </p>
              </section>
            </>
          )}

          {type === 'cookies' && (
            <>
              <section className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-white">1. Use of Cookies</h3>
                <p>
                  Our website uses essential session cookies to enable reservation navigation, remember selected suite preferences, and ensure secure form transmission. We do not use intrusive third-party cross-site trackers.
                </p>
              </section>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
