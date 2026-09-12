import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal, BookingModalInitialParams } from './components/BookingModal';
import { applyThemeToDom, themeConfig } from './data/theme';

// Pages
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { AboutPage } from './pages/AboutPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { LocationPage } from './pages/LocationPage';
import { FAQPage } from './pages/FAQPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { GuestInfoPage } from './pages/GuestInfoPage';
import { OffersPage } from './pages/OffersPage';
import { PolicyPage } from './pages/PolicyPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingModalParams, setBookingModalParams] = useState<BookingModalInitialParams>({});
  const [configVersion, setConfigVersion] = useState(0);

  // Synchronize browser history navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Listen for global configuration updates (feature flags or theme changes)
  useEffect(() => {
    applyThemeToDom(themeConfig);
    const handleConfigChange = () => {
      applyThemeToDom(themeConfig);
      setConfigVersion(v => v + 1);
    };

    window.addEventListener('hotel-config-updated', handleConfigChange);
    return () => window.removeEventListener('hotel-config-updated', handleConfigChange);
  }, []);

  // Listen for global booking inquiry events from helper dispatchers
  useEffect(() => {
    const handleOpenEnquiryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<BookingModalInitialParams>;
      setBookingModalParams(customEvent.detail || {});
      setBookingModalOpen(true);
    };

    window.addEventListener('open-hotel-enquiry-modal', handleOpenEnquiryEvent);
    return () => window.removeEventListener('open-hotel-enquiry-modal', handleOpenEnquiryEvent);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (params: BookingModalInitialParams = {}) => {
    setBookingModalParams(params);
    setBookingModalOpen(true);
  };

  // Route Dispatcher
  const renderCurrentPage = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 2. Admin Panel (/admin or /admin/login)
    if (currentPath === '/admin' || currentPath === '/admin/login') {
      return <AdminPage onNavigate={navigate} onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 3. Room Detail: /rooms/:slug
    if (currentPath.startsWith('/rooms/')) {
      const slug = currentPath.replace('/rooms/', '').split('?')[0].split('#')[0];
      return <RoomDetailPage slug={slug} onNavigate={navigate} onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 4. Rooms Listing: /rooms
    if (currentPath === '/rooms') {
      return <RoomsPage onNavigate={navigate} onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 5. About: /about
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} onOpenBookingModal={() => handleOpenBookingModal()} />;
    }

    // 6. Amenities: /amenities
    if (currentPath === '/amenities') {
      return <AmenitiesPage onNavigate={navigate} onOpenBookingModal={() => handleOpenBookingModal()} />;
    }

    // 7. Gallery: /gallery
    if (currentPath === '/gallery') {
      return <GalleryPage onNavigate={navigate} />;
    }

    // 8. Experiences: /experiences
    if (currentPath === '/experiences') {
      return <ExperiencesPage onNavigate={navigate} onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 9. Location & Arrival: /location
    if (currentPath === '/location') {
      return <LocationPage onNavigate={navigate} />;
    }

    // 10. FAQs: /faq
    if (currentPath === '/faq') {
      return <FAQPage onNavigate={navigate} />;
    }

    // 11. Reviews: /reviews
    if (currentPath === '/reviews') {
      return <ReviewsPage onNavigate={navigate} onOpenBookingModal={() => handleOpenBookingModal()} />;
    }

    // 12. Contact: /contact
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 13. Guest Information: /guest-information
    if (currentPath === '/guest-information') {
      return <GuestInfoPage onNavigate={navigate} onOpenBookingModal={() => handleOpenBookingModal()} />;
    }

    // 14. Offers: /offers
    if (currentPath === '/offers') {
      return <OffersPage onNavigate={navigate} onOpenBookingModal={handleOpenBookingModal} />;
    }

    // 15. Legal & Policies
    if (currentPath === '/privacy-policy') {
      return <PolicyPage type="privacy" onNavigate={navigate} />;
    }
    if (currentPath === '/refund-policy') {
      return <PolicyPage type="refund" onNavigate={navigate} />;
    }
    if (currentPath === '/terms-and-conditions') {
      return <PolicyPage type="terms" onNavigate={navigate} />;
    }
    if (currentPath === '/cookie-policy') {
      return <PolicyPage type="cookies" onNavigate={navigate} />;
    }

    // 16. Default 404
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div
      className="min-h-screen flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 relative overflow-x-hidden transition-colors duration-500"
      style={{
        backgroundColor: 'var(--theme-bg, #0F1115)',
        color: 'var(--theme-text-main, #F9FAFB)'
      }}
    >
      {/* Dynamic Ambient Atmospheric Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Primary Ambient Accent Orb */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[160px] opacity-25 transition-all duration-700"
          style={{ backgroundColor: 'var(--theme-accent, #2563EB)' }}
        />
        {/* Secondary Warm / Accent Orb */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[160px] opacity-20 transition-all duration-700"
          style={{ backgroundColor: 'var(--theme-secondary, #D97706)' }}
        />
        {/* Center Atmospheric Glow */}
        <div
          className="absolute top-[45%] left-[20%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full blur-[180px] opacity-15 transition-all duration-700"
          style={{ backgroundColor: 'var(--theme-accent, #4F46E5)' }}
        />
      </div>

      {/* Site Header */}
      <Header
        key={`header-${configVersion}`}
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenBooking={() => handleOpenBookingModal()}
      />

      {/* Main Page Body */}
      <main key={`page-${configVersion}`} className="flex-1 relative z-10">
        {renderCurrentPage()}
      </main>

      {/* Site Footer */}
      <Footer key={`footer-${configVersion}`} onNavigate={navigate} />

      {/* Floating Concierge Action */}
      <FloatingWhatsApp key={`whatsapp-${configVersion}`} />

      {/* Booking / Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialParams={bookingModalParams}
      />
    </div>
  );
}

export default App;
