import React from 'react';
import { featureFlags } from '../data/features';
import { hotelData } from '../data/hotel';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  if (!featureFlags.floatingWhatsApp) return null;

  return (
    <div id="floating-whatsapp-trigger" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <span className="hidden sm:block mr-3 bg-black/80 backdrop-blur-md border border-white/15 text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
        Chat with Concierge
      </span>

      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none border border-emerald-300/40"
        aria-label={`Chat with ${hotelData.shortName} Concierge on WhatsApp`}
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
