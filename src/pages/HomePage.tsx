import React from 'react';
import { hotelData } from '../data/hotel';
import { featureFlags } from '../data/features';
import { roomsData } from '../data/rooms';
import { amenitiesData } from '../data/amenities';
import { experiencesData } from '../data/experiences';
import { galleryData } from '../data/gallery';
import { reviewsData } from '../data/reviews';
import { awardsData } from '../data/awards';
import { nearbyData } from '../data/nearby';
import { faqsData } from '../data/faqs';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { BookingWidget } from '../components/BookingWidget';
import { RoomCard } from '../components/RoomCard';
import { AmenityCard } from '../components/AmenityCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { GalleryGrid } from '../components/GalleryGrid';
import { ReviewCard } from '../components/ReviewCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { NearbyPlaceCard } from '../components/NearbyPlaceCard';
import { TrustNotice } from '../components/TrustNotice';
import { getHotelJsonLd, getFAQPageJsonLd } from '../lib/structuredData';
import { Sparkles, ArrowRight, ShieldCheck, Award, MapPin, Compass, Phone } from 'lucide-react';
import { handleBookingAction } from '../lib/booking';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: (params?: { roomSlug?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const featuredRooms = roomsData.filter((r) => r.featured).slice(0, 3);
  const featuredAmenities = amenitiesData.filter((a) => a.featured).slice(0, 6);
  const featuredExperiences = experiencesData.filter((e) => e.featured).slice(0, 3);
  const homeFaqs = faqsData.filter((f) => f.featuredOnHome);

  const jsonLd = [getHotelJsonLd(), getFAQPageJsonLd(homeFaqs)];

  return (
    <div id="homepage-root" className="space-y-20 sm:space-y-28 pb-20">
      <SEOHead
        metadata={{
          title: 'Coastal Luxury & Wellness Sanctuary',
          path: '/'
        }}
        jsonLd={jsonLd}
      />

      {/* 1. Hero Section */}
      <Hero
        onOpenBooking={() => onOpenBookingModal()}
        onExploreRooms={() => onNavigate('/rooms')}
      />

      {/* 2. Availability / Booking Widget */}
      {featureFlags.quickAvailabilityBar && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingWidget onOpenBookingModal={onOpenBookingModal} />
        </div>
      )}

      {/* 3. About / Story Preview */}
      <section id="homepage-story-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Sanctuary Philosophy</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {hotelData.storyHeadline || 'An Unhurried Sanctuary of Timeless Elegance'}
              </h2>
            </div>

            <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
              {hotelData.longDescription.slice(0, 2).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm group"
              >
                <span>Read Full Story & Heritage</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={hotelData.heroImages[1] || hotelData.primaryImage}
                alt={`${hotelData.name} architectural courtyard`}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/[0.08] backdrop-blur-2xl p-5 rounded-2xl shadow-2xl border border-white/15 items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Rated #1 Luxury Retreat</p>
                <p className="text-white/60">World Boutique Hospitality 2025</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Featured Accommodations */}
      {featureFlags.rooms && featuredRooms.length > 0 && (
        <section id="homepage-featured-rooms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Sanctuaries of Restful Living
              </h2>
              <p className="text-sm text-white/60">
                Every suite is thoughtfully oriented toward coastal horizons, blending bespoke organic timber appointments with private outdoor relaxation.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/rooms')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 border-b border-amber-400/40 pb-0.5"
            >
              <span>View All Suites ({roomsData.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onExplore={(slug) => onNavigate(`/rooms/${slug}`)}
                onBook={(slug) => onOpenBookingModal({ roomSlug: slug })}
              />
            ))}
          </div>
        </section>
      )}

      {/* 5. Key Amenities & Wellness */}
      {featureFlags.amenities && featuredAmenities.length > 0 && (
        <section id="homepage-amenities" className="bg-white/[0.02] backdrop-blur-md py-16 sm:py-20 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Resort Facilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Holistic Wellness & Dining
              </h2>
              <p className="text-sm text-white/60">
                From oceanfront thermal hydrotherapy to artisanal garden cuisine, our facilities inspire total rejuvenation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAmenities.map((amenity) => (
                <AmenityCard key={amenity.id} amenity={amenity} />
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => onNavigate('/amenities')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full shadow transition-all"
              >
                <span>Explore All Resort Facilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 6. Curated Experiences */}
      {featureFlags.experiences && featuredExperiences.length > 0 && (
        <section id="homepage-experiences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Curated Moments
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Signature Resort Experiences
              </h2>
              <p className="text-sm text-white/60">
                Immerse yourself in authentic coastal rituals, from private catamaran sunset cruises to organic culinary masterclasses.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/experiences')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 border-b border-amber-400/40 pb-0.5"
            >
              <span>View All Experiences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredExperiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                onEnquire={() => onOpenBookingModal()}
              />
            ))}
          </div>
        </section>
      )}

      {/* 7. Gallery Highlights */}
      {featureFlags.gallery && galleryData.length > 0 && (
        <section id="homepage-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Visual Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Moments of Stillness & Wonder
            </h2>
            <p className="text-sm text-white/60">
              A glimpse into life at {hotelData.name}, where every angle frames the majesty of the sea.
            </p>
          </div>

          <GalleryGrid items={galleryData.slice(0, 8)} showCategoryFilter={false} />

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('/gallery')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-amber-400 border border-white/20 hover:border-amber-400/50 bg-white/5 px-6 py-3 rounded-full transition-all"
            >
              <span>Open Full Gallery ({galleryData.length} Photos)</span>
            </button>
          </div>
        </section>
      )}

      {/* 8. Guest Reviews & Accolades */}
      {featureFlags.reviews && reviewsData.length > 0 && (
        <section id="homepage-reviews" className="bg-white/[0.02] backdrop-blur-md py-16 sm:py-20 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Guest Impressions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Words From Our Travelers
              </h2>
              <p className="text-sm text-white/60">
                Verified reviews from guests who made {hotelData.shortName} their coastal home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviewsData.slice(0, 3).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => onNavigate('/reviews')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300"
              >
                <span>Read All Verified Guest Reviews</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 9. Awards & Certifications */}
      {featureFlags.awards && awardsData.length > 0 && (
        <section id="homepage-awards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-white/10 rounded-3xl p-8 sm:p-10 bg-white/[0.04] backdrop-blur-xl shadow-xl">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Recognitions & Sustainability
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Honors & Industry Accolades
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awardsData.map((award) => (
                <div key={award.id} className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/25">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">
                    {award.title}
                  </h4>
                  <p className="text-xs text-amber-400 font-semibold">
                    {award.organization} • {award.year}
                  </p>
                  {award.description && (
                    <p className="text-xs text-white/60 leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Nearby Attractions */}
      {nearbyData.length > 0 && (
        <section id="homepage-nearby" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Destination Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Nearby Attractions & Culture
              </h2>
              <p className="text-sm text-white/60">
                Immerse in the rich coastal environment, nature reserves, and historic villages situated just minutes from our grounds.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/location')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300"
            >
              <span>Explore Location & Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyData.slice(0, 4).map((place) => (
              <NearbyPlaceCard key={place.id} place={place} />
            ))}
          </div>
        </section>
      )}

      {/* 11. FAQ Accordion Preview */}
      {featureFlags.faq && homeFaqs.length > 0 && (
        <section id="homepage-faqs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Essential Questions
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-white/60">
              Everything you need to know regarding check-in, policies, and direct booking perks.
            </p>
          </div>

          <FAQAccordion faqs={homeFaqs} showCategoryTabs={false} />

          <div className="text-center">
            <button
              onClick={() => onNavigate('/faq')}
              className="text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300"
            >
              <span>View All Frequently Asked Questions</span>
            </button>
          </div>
        </section>
      )}

      {/* 12. Trust Notice Banner */}
      {featureFlags.trustNoticeBanner && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustNotice />
        </div>
      )}

      {/* 13. Final CTA Section */}
      <section id="homepage-final-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/15 text-white p-10 sm:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <img
              src={hotelData.primaryImage}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Reserve Your Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Begin Your Restorative Journey
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Book directly on our official website to enjoy complimentary daily gourmet breakfast, flexible cancellation options, and personalized concierge planning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
              >
                Check Availability & Reserve
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="w-full sm:w-auto border border-white/20 hover:border-white text-white text-xs font-medium uppercase tracking-wider px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                Contact Concierge Desk
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
