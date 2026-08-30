import React, { useState } from 'react';
import { GalleryItem, GalleryCategory } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
  showCategoryFilter?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items, showCategoryFilter = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories: GalleryCategory[] = ['All', ...(Array.from(new Set(items.map((item) => item.category))) as GalleryCategory[])];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <div className="space-y-6">
      
      {/* Optional Category Filter Pills */}
      {showCategoryFilter && categories.length > 2 && (
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(idx)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white backdrop-blur-[2px]">
              <span className="self-end bg-black/60 backdrop-blur-md p-2 rounded-full text-white/90 border border-white/15">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-semibold text-amber-300 tracking-wider">
                  {item.category}
                </span>
                <p className="text-xs font-medium leading-snug line-clamp-2 mt-0.5 text-white">
                  {item.caption || item.alt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-4 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between text-white pb-4 max-w-6xl">
            <span className="text-xs font-medium text-stone-300">
              {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Image */}
          <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              className="max-h-[75vh] max-w-full object-contain rounded"
              referrerPolicy="no-referrer"
            />

            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          <div className="text-center text-stone-300 text-sm max-w-2xl pt-4">
            <p className="font-medium text-white">{filteredItems[lightboxIndex].caption}</p>
            <p className="text-xs text-stone-400 mt-1">{filteredItems[lightboxIndex].alt}</p>
          </div>
        </div>
      )}

    </div>
  );
};
