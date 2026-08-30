import React from 'react';
import { hotelData } from '../data/hotel';
import { nearbyData } from '../data/nearby';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NearbyPlaceCard } from '../components/NearbyPlaceCard';
import { MapPin, Navigation, Plane, Train, Bus, ArrowUpRight, Phone, MessageCircle, Info } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface LocationPageProps {
  onNavigate: (path: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onNavigate }) => {
  const { location } = hotelData;

  return (
    <div id="location-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `Location & Directions | ${hotelData.name}`,
          description: `Detailed driving directions, airport transfer options, and transit coordinates for arriving at ${hotelData.name} in ${hotelData.location.city}.`,
          path: '/location'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Location & Arrival' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Destination & Arrival</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Getting to {hotelData.shortName}
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Located in {location.locality ? `${location.locality}, ` : ''}{location.city}, {location.state}, {location.country}. Accessible via private chauffeured car, scenic coastal highway, or direct airport transfer.
            </p>
          </div>
        </div>

        {/* Address Card & Map Embed / Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Address & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-4 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white">
                Official Property Address
              </h3>
              
              <div className="text-sm text-white/80 leading-relaxed space-y-1">
                <p className="font-semibold text-white">{hotelData.name}</p>
                <p>{location.addressLine1}</p>
                {location.addressLine2 && <p>{location.addressLine2}</p>}
                <p>{location.locality ? `${location.locality}, ` : ''}{location.city}, {location.state} {location.postalCode}</p>
                <p>{location.country}</p>
              </div>

              {location.googleMapsPlaceUrl && (
                <div className="pt-2">
                  <a
                    href={location.googleMapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Arrival Coordinates */}
            {location.latitude && location.longitude && (
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-xs text-white/70 space-y-2">
                <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
                  GPS Navigation Coordinates
                </p>
                <p className="font-mono text-amber-300">
                  Latitude: {location.latitude} | Longitude: {location.longitude}
                </p>
              </div>
            )}

            {/* Parking & Arrival Instructions */}
            {(location.parkingInfo || (location.arrivalInstructions && location.arrivalInstructions.length > 0)) && (
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-xs text-white/70 space-y-2">
                {location.parkingInfo && (
                  <div>
                    <p className="font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                      Parking Facilities
                    </p>
                    <p className="text-white/80">{location.parkingInfo}</p>
                  </div>
                )}
                {location.arrivalInstructions && location.arrivalInstructions.length > 0 && (
                  <div className="pt-2 border-t border-white/10 space-y-1">
                    <p className="font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                      Arrival Tips
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-white/70">
                      {location.arrivalInstructions.map((inst, i) => (
                        <li key={i}>{inst}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Chauffeur Service */}
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-3xl p-5 space-y-3 text-xs text-amber-200">
              <p className="font-bold text-sm text-amber-300">Arrival Coordination Desk</p>
              <p className="leading-relaxed text-white/80">
                Contact our concierge desk 24 hours prior to arrival to arrange private luxury chauffeur pickup or luggage handling assistance.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={`tel:${hotelData.contact.phonePrimary}`}
                  className="font-semibold text-amber-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Concierge</span>
                </a>
                <span>•</span>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right 7 cols: Interactive Map or Satellite View */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative min-h-[380px] flex items-center justify-center text-white">
              {location.googleMapsEmbedUrl ? (
                <iframe
                  title="Hotel Location Map"
                  src={location.googleMapsEmbedUrl}
                  className="w-full h-[400px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="relative w-full h-[400px]">
                  <img
                    src={hotelData.primaryImage}
                    alt="Map satellite view placeholder"
                    className="w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-black/60 backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400 text-black flex items-center justify-center shadow-lg shadow-amber-500/30 animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-white">{hotelData.name}</h4>
                    <p className="text-xs text-white/70 max-w-sm">
                      {location.addressLine1}, {location.city}, {location.country}
                    </p>
                    {location.googleMapsPlaceUrl && (
                      <a
                        href={location.googleMapsPlaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors mt-2"
                      >
                        <span>Navigate via Google Maps</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Transit Distance Highlights */}
        {(location.nearbyAirport || location.nearbyRailwayStation || location.nearbyBusStation) && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">
              Transit Hub Proximity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {location.nearbyAirport && (
                <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      Airport
                    </span>
                    <Plane className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">{location.nearbyAirport.name}</h4>
                  <div className="text-xs text-white/70 flex items-center justify-between pt-1">
                    <span>{location.nearbyAirport.distance}</span>
                    <span className="font-semibold text-amber-400">{location.nearbyAirport.travelTime}</span>
                  </div>
                </div>
              )}

              {location.nearbyRailwayStation && (
                <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      Railway Station
                    </span>
                    <Train className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">{location.nearbyRailwayStation.name}</h4>
                  <div className="text-xs text-white/70 flex items-center justify-between pt-1">
                    <span>{location.nearbyRailwayStation.distance}</span>
                    <span className="font-semibold text-amber-400">{location.nearbyRailwayStation.travelTime}</span>
                  </div>
                </div>
              )}

              {location.nearbyBusStation && (
                <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      Bus Terminal
                    </span>
                    <Bus className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">{location.nearbyBusStation.name}</h4>
                  <div className="text-xs text-white/70 flex items-center justify-between pt-1">
                    <span>{location.nearbyBusStation.distance}</span>
                    <span className="font-semibold text-amber-400">{location.nearbyBusStation.travelTime}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Nearby Attractions */}
        {nearbyData.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Surrounding Highlights
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Nearby Natural & Cultural Points of Interest
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nearbyData.map((place) => (
                <NearbyPlaceCard key={place.id} place={place} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
