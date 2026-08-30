import React from 'react';
import { galleryData } from '../data/gallery';
import { hotelData } from '../data/hotel';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GalleryGrid } from '../components/GalleryGrid';
import { Camera } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  return (
    <div id="gallery-page-root" className="pt-24 pb-20 space-y-10">
      <SEOHead
        metadata={{
          title: `Photo Gallery | ${hotelData.name}`,
          description: `Explore high-resolution photography of ${hotelData.name}'s suites, ocean views, infinity pool, spa, and culinary venues.`,
          path: '/gallery'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs & Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Photo Gallery' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Journey</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Photographic Tour
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Immerse yourself in high-resolution photography of our oceanfront suites, spa sanctum, coastal dining, and grounds.
            </p>
          </div>
        </div>

        {/* Filterable Grid & Lightbox */}
        <GalleryGrid items={galleryData} showCategoryFilter={true} />

      </div>
    </div>
  );
};
