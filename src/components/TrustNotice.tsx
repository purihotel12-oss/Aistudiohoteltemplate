import React from 'react';
import { hotelData } from '../data/hotel';
import { ShieldCheck, Phone, Globe, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

export const TrustNotice: React.FC = () => {
  if (!hotelData.trustNotice?.enabled) return null;

  const { title, shortMessage, fullMessage, officialDomain, officialPhone, officialWhatsApp } =
    hotelData.trustNotice;

  return (
    <div
      id="hotel-trust-notice-banner"
      className="bg-amber-500/10 backdrop-blur-2xl border border-amber-500/25 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-lg font-bold text-white">
              {title}
            </h3>
            <span className="bg-amber-400/20 border border-amber-400/30 text-amber-400 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">
              Official Direct Channel
            </span>
          </div>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            {fullMessage || shortMessage}
          </p>

          {/* Official Verification Channels */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>Domain: {officialDomain}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href={`tel:${officialPhone}`} className="hover:text-amber-400 transition-colors">
                Desk: {officialPhone}
              </a>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                WhatsApp: {officialWhatsApp}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
