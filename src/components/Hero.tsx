import React from 'react';
import { hotelData } from '../data/hotel';
import { featureFlags } from '../data/features';
import { MapPin, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreRooms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRooms }) => {
  return (
    <section id="homepage-hero-section" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Photography with Sophisticated Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hotelData.primaryImage}
          alt={`${hotelData.name} exterior and coastal ocean vista`}
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom opacity-40 mix-blend-luminosity"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-[#0F1115]/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24 space-y-8">
        
        {/* Destination & Star Category Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full text-white/80 text-xs font-medium tracking-widest uppercase animate-fadeIn shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>{hotelData.location.city}, {hotelData.location.country}</span>
          {hotelData.starRating && (
            <>
              <span className="text-white/30">•</span>
              <span className="text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {hotelData.starRating}-Star Sanctuary
              </span>
            </>
          )}
        </div>

        {/* Marquee Headline */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Experience Serene <br className="hidden sm:inline" />
            <span className="italic font-serif text-amber-400">{hotelData.name}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 font-normal max-w-2xl mx-auto leading-relaxed">
            {hotelData.tagline}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            id="hero-reserve-stay-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-amber-400 text-black font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-200 active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Availability & Book</span>
          </button>

          <button
            id="hero-explore-suites-btn"
            onClick={onExploreRooms}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/15 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-200"
          >
            <span>Explore Suites</span>
          </button>

          {featureFlags.floatingWhatsApp && (
            <a
              id="hero-whatsapp-btn"
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-400 backdrop-blur-xl px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          )}
        </div>

        {/* Quick Highlights Strip in Frosted Glass Cards */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
            <p className="text-[10px] uppercase tracking-widest text-amber-400 font-mono font-bold">Direct Booking</p>
            <p className="text-xs text-white/80 mt-1 font-medium">Complimentary Breakfast</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
            <p className="text-[10px] uppercase tracking-widest text-amber-400 font-mono font-bold">Flexibility</p>
            <p className="text-xs text-white/80 mt-1 font-medium">Free Cancellation Option</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
            <p className="text-[10px] uppercase tracking-widest text-amber-400 font-mono font-bold">Concierge</p>
            <p className="text-xs text-white/80 mt-1 font-medium">24/7 Dedicated Support</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
            <p className="text-[10px] uppercase tracking-widest text-amber-400 font-mono font-bold">Wellness</p>
            <p className="text-xs text-white/80 mt-1 font-medium">Thermal Spa & Yoga Deck</p>
          </div>
        </div>

      </div>
    </section>
  );
};
