import React from 'react';
import { hotelData } from '../data/hotel';
import { Home, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div id="not-found-page-root" className="pt-32 pb-24 text-center px-4 max-w-lg mx-auto space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs uppercase font-bold tracking-widest text-amber-400">404 Error</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-white/70 leading-relaxed">
          The sanctuary page you are looking for may have moved or is no longer available.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>

        <button
          onClick={() => onNavigate('/rooms')}
          className="text-white/80 hover:text-white text-xs font-medium px-5 py-3 border border-white/15 rounded-xl hover:bg-white/10 transition-colors"
        >
          Explore Rooms & Suites
        </button>
      </div>
    </div>
  );
};
