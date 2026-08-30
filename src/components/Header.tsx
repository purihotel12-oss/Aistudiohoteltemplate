import React, { useState, useEffect } from 'react';
import { hotelData } from '../data/hotel';
import { featureFlags } from '../data/features';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { handleBookingAction } from '../lib/booking';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    ...(featureFlags.rooms ? [{ label: 'Rooms & Suites', path: '/rooms' }] : []),
    ...(featureFlags.amenities ? [{ label: 'Amenities', path: '/amenities' }] : []),
    ...(featureFlags.experiences ? [{ label: 'Experiences', path: '/experiences' }] : []),
    ...(featureFlags.gallery ? [{ label: 'Gallery', path: '/gallery' }] : []),
    ...(featureFlags.offers ? [{ label: 'Offers', path: '/offers' }] : []),
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F1115]/85 backdrop-blur-xl shadow-lg border-b border-white/10 py-3.5 text-white'
          : 'bg-gradient-to-b from-black/80 via-[#0F1115]/60 to-transparent backdrop-blur-[2px] py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <button
            id="header-brand-logo"
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center font-serif font-bold text-black text-lg shadow-md group-hover:scale-105 transition-transform shrink-0">
              {hotelData.shortName ? hotelData.shortName.charAt(0) : 'H'}
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                {hotelData.shortName}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-white/50 group-hover:text-white/70 transition-colors">
                {hotelData.propertyType}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-sm font-medium tracking-wide transition-all relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-amber-400 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-amber-500 after:rounded-full'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {hotelData.contact.phonePrimary && (
              <a
                id="header-phone-action"
                href={`tel:${hotelData.contact.phonePrimary}`}
                className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white backdrop-blur-md transition-all"
                title={`Call ${hotelData.name}`}
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{hotelData.contact.phoneDisplay || hotelData.contact.phonePrimary}</span>
              </a>
            )}

            {featureFlags.floatingWhatsApp && (
              <a
                id="header-whatsapp-action"
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 transition-all backdrop-blur-md"
                title="Chat with Concierge on WhatsApp"
                aria-label="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            )}

            <button
              id="header-book-now-cta"
              onClick={() => {
                if (hotelData.booking.mode === 'enquiry') {
                  onOpenBooking();
                } else {
                  handleBookingAction({}, () => onOpenBooking());
                }
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-amber-400 text-black font-bold text-xs tracking-wider uppercase px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-200 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu & Book Quick Action */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              id="mobile-quick-book-cta"
              onClick={() => onOpenBooking()}
              className="bg-white hover:bg-amber-400 text-black text-xs font-bold px-4 py-1.5 rounded-full transition-colors"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-[#0F1115]/95 backdrop-blur-2xl text-white border-b border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 animate-fadeIn"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left text-base font-medium py-2.5 px-4 rounded-xl transition-all ${
                    isActive
                      ? 'bg-white/10 border border-white/15 text-amber-400 font-semibold'
                      : 'text-white/75 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Additional links for mobile */}
            {featureFlags.faq && (
              <button
                onClick={() => handleNavClick('/faq')}
                className="text-left text-sm text-white/60 py-2 px-4 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
              >
                Frequently Asked Questions
              </button>
            )}
            {featureFlags.guestInformation && (
              <button
                onClick={() => handleNavClick('/guest-information')}
                className="text-left text-sm text-white/60 py-2 px-4 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
              >
                Guest Information & Arrival
              </button>
            )}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                id="mobile-drawer-book-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-sm py-3 rounded-full text-center tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
              >
                Reserve Your Stay
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-white/60">
                <a
                  href={`tel:${hotelData.contact.phonePrimary}`}
                  className="flex items-center gap-1.5 text-white/80 font-medium hover:text-amber-400"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{hotelData.contact.phoneDisplay || hotelData.contact.phonePrimary}</span>
                </a>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 font-medium hover:text-emerald-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
