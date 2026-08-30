import React from 'react';
import { hotelData } from '../data/hotel';
import { featureFlags } from '../data/features';
import { socialLinksData } from '../data/social';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ChevronRight, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-site-footer" className="bg-[#0F1115]/90 backdrop-blur-2xl text-white/70 pt-16 pb-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Hotel Identity & Quick Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Story & Trust */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                {hotelData.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-amber-400 font-medium">
                {hotelData.tagline}
              </p>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              {hotelData.shortDescription}
            </p>

            {/* Official Trust Badge */}
            {hotelData.trustNotice?.enabled && (
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-start gap-3 max-w-md">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">
                    {hotelData.trustNotice.badgeText || 'Verified Official Booking Channel'}
                  </p>
                  <p className="text-white/60 leading-normal">
                    Direct bookings receive guaranteed best rates, complimentary breakfast, and flexible arrival support.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Col 3: Explore Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Explore Property
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/rooms"
                  onClick={(e) => handleLinkClick(e, '/rooms')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  <span>Rooms & Suites</span>
                </a>
              </li>
              {featureFlags.amenities && (
                <li>
                  <a
                    href="/amenities"
                    onClick={(e) => handleLinkClick(e, '/amenities')}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    <span>Amenities & Spa</span>
                  </a>
                </li>
              )}
              {featureFlags.experiences && (
                <li>
                  <a
                    href="/experiences"
                    onClick={(e) => handleLinkClick(e, '/experiences')}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    <span>Resort Experiences</span>
                  </a>
                </li>
              )}
              {featureFlags.gallery && (
                <li>
                  <a
                    href="/gallery"
                    onClick={(e) => handleLinkClick(e, '/gallery')}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    <span>Photo Gallery</span>
                  </a>
                </li>
              )}
              {featureFlags.offers && (
                <li>
                  <a
                    href="/offers"
                    onClick={(e) => handleLinkClick(e, '/offers')}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    <span>Special Offers</span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  <span>Our Story</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Guest Guidelines & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Guest Guidelines
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/guest-information"
                  onClick={(e) => handleLinkClick(e, '/guest-information')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  <span>Guest Information</span>
                </a>
              </li>
              {featureFlags.faq && (
                <li>
                  <a
                    href="/faq"
                    onClick={(e) => handleLinkClick(e, '/faq')}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    <span>FAQs & Check-in</span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href="/location"
                  onClick={(e) => handleLinkClick(e, '/location')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  <span>Location & Directions</span>
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleLinkClick(e, '/privacy-policy')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  onClick={(e) => handleLinkClick(e, '/refund-policy')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  <span>Refund & Cancellation</span>
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => handleLinkClick(e, '/terms-and-conditions')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-white/70"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  <span>Terms & Conditions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Channels */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {hotelData.location.addressLine1}, {hotelData.location.city}, {hotelData.location.state} {hotelData.location.postalCode}, {hotelData.location.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${hotelData.contact.phonePrimary}`} className="hover:text-amber-400 transition-colors">
                  {hotelData.contact.phoneDisplay || hotelData.contact.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${hotelData.contact.emailReservations}`} className="hover:text-amber-400 transition-colors">
                  {hotelData.contact.emailReservations}
                </a>
              </div>
              {featureFlags.floatingWhatsApp && (
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>WhatsApp Concierge</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Social Icons */}
            {socialLinksData.length > 0 && (
              <div className="pt-2">
                <p className="text-[11px] uppercase tracking-wider text-white/40 mb-2">Connect With Us</p>
                <div className="flex items-center gap-3">
                  {socialLinksData.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-amber-400 hover:text-black hover:border-amber-400 text-white/80 flex items-center justify-center text-xs transition-all"
                      aria-label={social.ariaLabel}
                      title={social.label}
                    >
                      {social.platform.substring(0, 2)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} {hotelData.legalName || hotelData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLinkClick(e, '/privacy-policy')}
              className="hover:text-white/80"
            >
              Privacy
            </a>
            <span>•</span>
            <a
              href="/cookie-policy"
              onClick={(e) => handleLinkClick(e, '/cookie-policy')}
              className="hover:text-white/80"
            >
              Cookies
            </a>
            <span>•</span>
            <a
              href="/terms-and-conditions"
              onClick={(e) => handleLinkClick(e, '/terms-and-conditions')}
              className="hover:text-white/80"
            >
              Terms of Stay
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
