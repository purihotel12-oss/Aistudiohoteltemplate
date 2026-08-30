import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface RoomGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  roomName: string;
}

export const RoomGallery: React.FC<RoomGalleryProps> = ({ images, roomName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[selectedIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      
      {/* Main Image Showcase */}
      <div
        className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group shadow-xl"
        onClick={() => setLightboxOpen(true)}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt || roomName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
          <div className="bg-black/70 border border-white/20 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-2xl">
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Click to View Fullscreen Gallery</span>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 border border-white/15 text-white p-2.5 rounded-full transition-all opacity-90 hover:opacity-100 backdrop-blur-md"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 border border-white/15 text-white p-2.5 rounded-full transition-all opacity-90 hover:opacity-100 backdrop-blur-md"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Caption Bar */}
        {currentImage.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-white text-xs font-medium">
            {currentImage.caption}
          </div>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                selectedIndex === idx ? 'border-amber-400 ring-2 ring-amber-400/30 scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-4 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full flex items-center justify-between text-white pb-4">
            <span className="text-sm font-medium text-stone-300">
              {roomName} — Photo {selectedIndex + 1} of {images.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[75vh] max-w-full object-contain rounded"
              referrerPolicy="no-referrer"
            />

            {images.length > 1 && (
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

          <div className="text-center text-stone-300 text-sm pt-4">
            <p>{currentImage.caption || currentImage.alt}</p>
          </div>
        </div>
      )}

    </div>
  );
};
