import React from 'react';
import { reviewsData } from '../data/reviews';
import { hotelData } from '../data/hotel';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ReviewCard } from '../components/ReviewCard';
import { Star, MessageSquare, CheckCircle } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const avgRating = (reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length).toFixed(1);

  return (
    <div id="reviews-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `Guest Reviews & Ratings | ${hotelData.name}`,
          description: `Read authentic guest reviews and testimonials from travelers who experienced the tranquil hospitality of ${hotelData.name}.`,
          path: '/reviews'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Guest Reviews' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Guest Experiences</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Verified Guest Impressions
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We take deep pride in creating memorable, restorative escapes. Read unfiltered feedback from our guests.
            </p>
          </div>
        </div>

        {/* Rating Overview Scorecard */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="font-serif text-5xl font-bold text-white">
              {avgRating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-white/60 mt-1 font-medium">
                Based on {reviewsData.length}+ verified direct and traveler reviews
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
            >
              Reserve Your Stay
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

      </div>
    </div>
  );
};
