import React from 'react';
import { Review } from '../types';
import { Star, CheckCircle } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div
      id={`review-card-${review.id}`}
      className="bg-white/[0.04] backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3">
        
        {/* Star Rating & Source */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`}
              />
            ))}
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
            {review.source}
          </span>
        </div>

        {/* Review Title */}
        {review.reviewTitle && (
          <h4 className="font-serif text-base font-bold text-white leading-snug">
            "{review.reviewTitle}"
          </h4>
        )}

        {/* Review Body */}
        <p className="text-xs text-white/70 leading-relaxed italic">
          "{review.reviewText}"
        </p>
      </div>

      {/* Guest Attribution */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
        <div>
          <p className="font-semibold text-white flex items-center gap-1.5">
            <span>{review.guestName}</span>
            {review.verifiedStay && (
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Verified Guest Stay" />
            )}
          </p>
          {review.location && <p className="text-[11px] text-white/50">{review.location}</p>}
        </div>

        {review.stayDate && (
          <span className="text-[11px] text-white/40 font-medium">
            {review.stayDate}
          </span>
        )}
      </div>
    </div>
  );
};
