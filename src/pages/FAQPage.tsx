import React from 'react';
import { faqsData } from '../data/faqs';
import { hotelData } from '../data/hotel';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { getFAQPageJsonLd } from '../lib/structuredData';
import { HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface FAQPageProps {
  onNavigate: (path: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const jsonLd = getFAQPageJsonLd(faqsData);

  return (
    <div id="faq-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `Frequently Asked Questions | ${hotelData.name}`,
          description: `Answers to common questions regarding check-in times, cancellation policies, dining reservations, and direct booking perks at ${hotelData.name}.`,
          path: '/faq'
        }}
        jsonLd={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumbs & Header */}
        <div className="space-y-4 border-b border-white/10 pb-8 text-center sm:text-left">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5 justify-center sm:justify-start">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Guest Assistance</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Find instant answers regarding reservations, check-in schedules, dietary options, policies, and local experiences.
            </p>
          </div>
        </div>

        {/* Accordion Component */}
        <FAQAccordion faqs={faqsData} showCategoryTabs={true} />

        {/* Still Have Questions Box */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="font-serif text-xl font-bold text-white">
            Have a Specific Question or Request?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
            Our guest services and reservations desk is available 24/7 to provide personal assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${hotelData.contact.phonePrimary}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {hotelData.contact.phoneDisplay || hotelData.contact.phonePrimary}</span>
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
