import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Layers, 
  Palette, 
  Building, 
  FileCode, 
  LogOut, 
  ExternalLink, 
  Check, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Search, 
  KeyRound,
  ArrowRight,
  HelpCircle,
  Sliders,
  Copy,
  Save,
  RefreshCw,
  Phone,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { 
  featureFlags, 
  updateFeatureFlag, 
  updateAllFeatureFlags, 
  resetFeatureFlags, 
  DEFAULT_FEATURE_FLAGS 
} from '../data/features';
import { 
  themeConfig, 
  THEME_PRESETS, 
  applyThemePreset, 
  updateThemeConfig, 
  resetThemeConfig,
  DEFAULT_THEME
} from '../data/theme';
import { hotelData, updateHotelData, resetHotelData } from '../data/hotel';
import { FeatureFlags } from '../types';

interface AdminPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal?: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return (
      sessionStorage.getItem('hotel_admin_authenticated') === 'true' ||
      localStorage.getItem('hotel_admin_authenticated') === 'true'
    );
  });

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Admin Dashboard State
  const [activeTab, setActiveTab] = useState<'flags' | 'theme' | 'property' | 'export'>('flags');
  const [localFlags, setLocalFlags] = useState<FeatureFlags>({ ...featureFlags });
  const [flagsSearch, setFlagsSearch] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Active theme preset ID
  const [activePresetId, setActivePresetId] = useState<string>(() => {
    return localStorage.getItem('hotel_admin_theme_preset_id') || 'frosted-glass';
  });

  // Property & NAP Form State
  const [propertyNameInput, setPropertyNameInput] = useState(hotelData.name);
  const [legalNameInput, setLegalNameInput] = useState(hotelData.legalName);
  const [propertyTypeInput, setPropertyTypeInput] = useState(hotelData.propertyType);
  const [whatsappInput, setWhatsappInput] = useState(hotelData.contact.whatsappNumber);
  const [phoneInput, setPhoneInput] = useState(hotelData.contact.phonePrimary);
  const [phoneTollFreeInput, setPhoneTollFreeInput] = useState(hotelData.contact.phoneTollFree || '');
  const [emailReservationsInput, setEmailReservationsInput] = useState(hotelData.contact.emailReservations);
  const [emailConciergeInput, setEmailConciergeInput] = useState(hotelData.contact.emailConcierge || '');
  const [addressLine1Input, setAddressLine1Input] = useState(hotelData.location.addressLine1);
  const [addressLine2Input, setAddressLine2Input] = useState(hotelData.location.addressLine2 || '');
  const [cityInput, setCityInput] = useState(hotelData.location.city);
  const [stateInput, setStateInput] = useState(hotelData.location.state);
  const [postalCodeInput, setPostalCodeInput] = useState(hotelData.location.postalCode);
  const [countryInput, setCountryInput] = useState(hotelData.location.country);
  const [checkInTimeInput, setCheckInTimeInput] = useState(hotelData.booking.checkInTime);
  const [checkOutTimeInput, setCheckOutTimeInput] = useState(hotelData.booking.checkOutTime);
  const [isSavingNap, setIsSavingNap] = useState(false);

  // Keep localFlags and NAP inputs in sync with global config events
  useEffect(() => {
    const handleConfigUpdated = () => {
      setLocalFlags({ ...featureFlags });
      setPropertyNameInput(hotelData.name);
      setLegalNameInput(hotelData.legalName);
      setPropertyTypeInput(hotelData.propertyType);
      setWhatsappInput(hotelData.contact.whatsappNumber);
      setPhoneInput(hotelData.contact.phonePrimary);
      setPhoneTollFreeInput(hotelData.contact.phoneTollFree || '');
      setEmailReservationsInput(hotelData.contact.emailReservations);
      setEmailConciergeInput(hotelData.contact.emailConcierge || '');
      setAddressLine1Input(hotelData.location.addressLine1);
      setAddressLine2Input(hotelData.location.addressLine2 || '');
      setCityInput(hotelData.location.city);
      setStateInput(hotelData.location.state);
      setPostalCodeInput(hotelData.location.postalCode);
      setCountryInput(hotelData.location.country);
      setCheckInTimeInput(hotelData.booking.checkInTime);
      setCheckOutTimeInput(hotelData.booking.checkOutTime);
    };
    window.addEventListener('hotel-config-updated', handleConfigUpdated);
    return () => window.removeEventListener('hotel-config-updated', handleConfigUpdated);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    const cleanUser = usernameInput.trim().toLowerCase();
    const cleanPass = passwordInput.trim();

    // Accepted default credentials:
    // User ID: admin or admin@hotel.com
    // Password: sanctuary2026 or admin2026
    const validUser = cleanUser === 'admin' || cleanUser === 'admin@hotel.com';
    const validPass = cleanPass === 'sanctuary2026' || cleanPass === 'admin2026';

    if (validUser && validPass) {
      setIsAuthenticated(true);
      sessionStorage.setItem('hotel_admin_authenticated', 'true');
      if (rememberMe) {
        localStorage.setItem('hotel_admin_authenticated', 'true');
      }
      showToast('Welcome back, Administrator!');
    } else {
      setAuthError('Invalid Admin ID or Password. Please review the credentials below.');
    }
  };

  // Quick autofill for demo / convenience
  const handleQuickLogin = () => {
    setUsernameInput('admin');
    setPasswordInput('sanctuary2026');
    setIsAuthenticated(true);
    sessionStorage.setItem('hotel_admin_authenticated', 'true');
    if (rememberMe) {
      localStorage.setItem('hotel_admin_authenticated', 'true');
    }
    showToast('Signed in with default Administrator credentials');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('hotel_admin_authenticated');
    localStorage.removeItem('hotel_admin_authenticated');
    showToast('Signed out of Admin Hub');
  };

  const handleToggleFlag = (key: keyof FeatureFlags) => {
    const newValue = !localFlags[key];
    updateFeatureFlag(key, newValue);
    setLocalFlags(prev => ({ ...prev, [key]: newValue }));
    showToast(`Module "${key}" ${newValue ? 'Enabled' : 'Disabled'}`);
  };

  const handleEnableAll = () => {
    const allEnabled = Object.keys(localFlags).reduce((acc, key) => {
      acc[key as keyof FeatureFlags] = true;
      return acc;
    }, {} as FeatureFlags);
    updateAllFeatureFlags(allEnabled);
    setLocalFlags(allEnabled);
    showToast('All feature modules enabled');
  };

  const handleDisableOptional = () => {
    const optionalDisabled: FeatureFlags = {
      ...localFlags,
      corporateEvents: false,
      giftVouchers: false,
      careers: false,
      blog: false,
      awards: false,
      floatingWhatsApp: false
    };
    updateAllFeatureFlags(optionalDisabled);
    setLocalFlags(optionalDisabled);
    showToast('Optional auxiliary modules disabled');
  };

  const handleResetFlags = () => {
    resetFeatureFlags();
    setLocalFlags({ ...DEFAULT_FEATURE_FLAGS });
    showToast('Feature flags reset to factory defaults');
  };

  const handleSelectThemePreset = (presetId: string) => {
    applyThemePreset(presetId);
    setActivePresetId(presetId);
    showToast(`Activated theme preset: ${THEME_PRESETS.find(p => p.id === presetId)?.name}`);
  };

  const handleResetTheme = () => {
    resetThemeConfig();
    setActivePresetId('frosted-glass');
    showToast('Theme reset to Frosted Glass Luxury');
  };

  // Property & NAP Management Handlers
  const handleSaveNap = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSavingNap(true);

    // Sanitize WhatsApp number (digits only for standard international link format)
    const cleanedWhatsapp = whatsappInput.trim().replace(/[^0-9]/g, '');

    updateHotelData({
      name: propertyNameInput.trim() || hotelData.name,
      legalName: legalNameInput.trim() || hotelData.legalName,
      propertyType: propertyTypeInput.trim() || hotelData.propertyType,
      contact: {
        ...hotelData.contact,
        whatsappNumber: cleanedWhatsapp || hotelData.contact.whatsappNumber,
        phonePrimary: phoneInput.trim() || hotelData.contact.phonePrimary,
        phoneTollFree: phoneTollFreeInput.trim() || undefined,
        emailReservations: emailReservationsInput.trim() || hotelData.contact.emailReservations,
        emailConcierge: emailConciergeInput.trim() || undefined,
      },
      location: {
        ...hotelData.location,
        addressLine1: addressLine1Input.trim() || hotelData.location.addressLine1,
        addressLine2: addressLine2Input.trim() || undefined,
        city: cityInput.trim() || hotelData.location.city,
        state: stateInput.trim() || hotelData.location.state,
        postalCode: postalCodeInput.trim() || hotelData.location.postalCode,
        country: countryInput.trim() || hotelData.location.country,
      },
      booking: {
        ...hotelData.booking,
        checkInTime: checkInTimeInput.trim() || hotelData.booking.checkInTime,
        checkOutTime: checkOutTimeInput.trim() || hotelData.booking.checkOutTime,
      }
    });

    setIsSavingNap(false);
    showToast('Property NAP & WhatsApp successfully updated and live across the website!');
  };

  const handleResetNap = () => {
    resetHotelData();
    setPropertyNameInput(hotelData.name);
    setLegalNameInput(hotelData.legalName);
    setPropertyTypeInput(hotelData.propertyType);
    setWhatsappInput(hotelData.contact.whatsappNumber);
    setPhoneInput(hotelData.contact.phonePrimary);
    setPhoneTollFreeInput(hotelData.contact.phoneTollFree || '');
    setEmailReservationsInput(hotelData.contact.emailReservations);
    setEmailConciergeInput(hotelData.contact.emailConcierge || '');
    setAddressLine1Input(hotelData.location.addressLine1);
    setAddressLine2Input(hotelData.location.addressLine2 || '');
    setCityInput(hotelData.location.city);
    setStateInput(hotelData.location.state);
    setPostalCodeInput(hotelData.location.postalCode);
    setCountryInput(hotelData.location.country);
    setCheckInTimeInput(hotelData.booking.checkInTime);
    setCheckOutTimeInput(hotelData.booking.checkOutTime);
    showToast('Property details reset to default configuration');
  };

  // Metadata for all feature flags
  const flagDefinitions: Array<{
    key: keyof FeatureFlags;
    title: string;
    description: string;
    category: 'core' | 'service' | 'secondary';
  }> = [
    {
      key: 'rooms',
      title: 'Rooms & Suites Showcase',
      description: 'Master accommodations catalog, individual suite detail pages, filters, and booking buttons.',
      category: 'core'
    },
    {
      key: 'amenities',
      title: 'Amenities & Spa',
      description: 'Dedicated amenities catalog, wellness highlights, pool & dining facilities.',
      category: 'core'
    },
    {
      key: 'experiences',
      title: 'Resort Experiences & Activities',
      description: 'Curated guest excursions, private dining, sunset cruises, and cultural tours.',
      category: 'core'
    },
    {
      key: 'gallery',
      title: 'Photo & Video Gallery',
      description: 'Categorized photography portfolio with high-resolution fullscreen lightbox.',
      category: 'core'
    },
    {
      key: 'reviews',
      title: 'Guest Reviews & Ratings',
      description: 'Verified guest impressions scorecard, star ratings, and direct feedback list.',
      category: 'core'
    },
    {
      key: 'offers',
      title: 'Special Offers & Packages',
      description: 'Seasonal promotion packages, promo codes, direct booking inclusions.',
      category: 'core'
    },
    {
      key: 'faq',
      title: 'FAQ & Check-In Guide',
      description: 'Categorized interactive questions accordion and search for guest queries.',
      category: 'service'
    },
    {
      key: 'guestInformation',
      title: 'Guest Arrival & Protocols',
      description: 'Comprehensive property guidelines, check-in schedules, luggage, and housekeeping policies.',
      category: 'service'
    },
    {
      key: 'floatingWhatsApp',
      title: 'Floating WhatsApp Concierge',
      description: 'Floating instant messaging launcher button in bottom-right corner for direct concierge chat.',
      category: 'service'
    },
    {
      key: 'quickAvailabilityBar',
      title: 'Homepage Quick Availability Bar',
      description: 'Instant dates and guest selector bar placed directly underneath the hero banner.',
      category: 'service'
    },
    {
      key: 'interactiveMap',
      title: 'Interactive GPS Map & Directions',
      description: 'Embedded property map, nearby airport distances, and transfer instructions.',
      category: 'service'
    },
    {
      key: 'trustNoticeBanner',
      title: 'Trust & Anti-Scam Security Notice',
      description: 'Official direct-booking verification notice informing guests about genuine payment channels.',
      category: 'service'
    },
    {
      key: 'corporateEvents',
      title: 'Corporate Events & Retreats',
      description: 'Corporate summit facilities, banquet halls, and business retreat inquiry forms.',
      category: 'secondary'
    },
    {
      key: 'giftVouchers',
      title: 'Gift Vouchers & Vouchers',
      description: 'Experiential gift voucher packages for anniversary, luxury stay, or spa credits.',
      category: 'secondary'
    },
    {
      key: 'careers',
      title: 'Careers & Hospitality Talent',
      description: 'Hospitality careers listing, department openings, and application contact.',
      category: 'secondary'
    },
    {
      key: 'blog',
      title: 'Editorial Journal / Blog',
      description: 'Luxury travel destination guide, seasonal stories, and hotel news.',
      category: 'secondary'
    },
    {
      key: 'awards',
      title: 'Awards & Accolades Banner',
      description: 'Recognition badges (Condé Nast, Michelin Guide, World Luxury Hotel Awards).',
      category: 'secondary'
    }
  ];

  const filteredFlags = flagDefinitions.filter(f => 
    f.title.toLowerCase().includes(flagsSearch.toLowerCase()) ||
    f.key.toLowerCase().includes(flagsSearch.toLowerCase()) ||
    f.description.toLowerCase().includes(flagsSearch.toLowerCase())
  );

  const activeCount = Object.values(localFlags).filter(Boolean).length;
  const totalCount = Object.keys(localFlags).length;

  // Render Exportable Code
  const exportCode = `// src/data/features.ts
export const featureFlags = ${JSON.stringify(localFlags, null, 2)};

// src/data/theme.ts
export const themeConfig = ${JSON.stringify(themeConfig, null, 2)};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(exportCode);
    setCopiedCode(true);
    showToast('Configuration code copied to clipboard!');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  // ==========================================
  // VIEW 1: LOGIN GATE (If not authenticated)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] py-16 px-4 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          
          {/* Brand Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/10">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-white tracking-wide">
              Admin Portal
            </h1>
            <p className="text-xs text-white/60">
              {hotelData.name} • Master Template Management
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-7 sm:p-8 shadow-2xl space-y-6">
            
            {authError && (
              <div className="bg-rose-500/15 border border-rose-500/30 rounded-2xl p-4 text-xs text-rose-300 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                  Admin ID / Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Enter admin ID (e.g. admin)"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                  <ShieldCheck className="w-4 h-4 text-white/30 absolute right-3.5 top-3.5" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-white/40 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/60 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-white/20 bg-black/40 text-amber-500 focus:ring-0 cursor-pointer"
                  />
                  <span>Remember on this browser</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2"
              >
                <span>Sign In to Admin Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Helper Box */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-4 text-xs text-amber-200 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-300">
                  <KeyRound className="w-4 h-4 text-amber-400" />
                  <span>Default Administrator Credentials:</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                  <div className="p-2 bg-black/40 rounded-lg border border-white/10">
                    <span className="text-white/50 block">ID:</span>
                    <strong className="text-white">admin</strong>
                  </div>
                  <div className="p-2 bg-black/40 rounded-lg border border-white/10">
                    <span className="text-white/50 block">Password:</span>
                    <strong className="text-white">sanctuary2026</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleQuickLogin}
                  className="w-full mt-2 text-center bg-white/10 hover:bg-white/20 border border-white/15 text-white py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>One-Click Demo Fill & Log In</span>
                </button>
              </div>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('/')}
              className="text-xs text-white/50 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>← Return to Public Hotel Website</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div id="admin-panel-root" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-500 text-black px-4 py-3 rounded-xl shadow-2xl font-semibold text-xs flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Secure Admin Session Active</span>
            </span>
            <span className="text-xs text-white/50">•</span>
            <span className="text-xs text-white/60 font-mono">User: admin</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Hotel Master Administration Hub
          </h1>
          <p className="text-xs sm:text-sm text-white/70">
            Control feature modules, switch luxury brand themes, and review property operational settings.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('/')}
            className="bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold px-4 py-3 rounded-xl transition-all flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4 text-amber-400" />
            <span>View Public Website</span>
          </button>

          <button
            onClick={handleLogout}
            className="bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-semibold px-4 py-3 rounded-xl transition-all flex items-center gap-1.5"
            title="Sign out of Administrator Session"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Overview Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-white/50 text-xs font-semibold uppercase tracking-wider">
            <span>Feature Modules</span>
            <Layers className="w-4 h-4 text-amber-400" />
          </div>
          <div className="font-serif text-3xl font-bold text-white">
            {activeCount} <span className="text-sm font-sans text-white/40 font-normal">/ {totalCount}</span>
          </div>
          <p className="text-[11px] text-emerald-400 font-medium">All active components render on live site</p>
        </div>

        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-white/50 text-xs font-semibold uppercase tracking-wider">
            <span>Active Theme</span>
            <Palette className="w-4 h-4 text-amber-400" />
          </div>
          <div className="font-serif text-xl font-bold text-white truncate">
            {THEME_PRESETS.find(p => p.id === activePresetId)?.name || themeConfig.name}
          </div>
          <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Live Repainting Active</span>
          </p>
        </div>

        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-white/50 text-xs font-semibold uppercase tracking-wider">
            <span>Booking Engine</span>
            <Building className="w-4 h-4 text-amber-400" />
          </div>
          <div className="font-serif text-xl font-bold text-amber-300 capitalize">
            {hotelData.booking.mode}
          </div>
          <p className="text-[11px] text-white/50">Check-in: {hotelData.booking.checkInTime} • Check-out: {hotelData.booking.checkOutTime}</p>
        </div>

        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-1 shadow-lg">
          <div className="flex items-center justify-between text-white/50 text-xs font-semibold uppercase tracking-wider">
            <span>Concierge Desk</span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="font-serif text-xl font-bold text-white">
            24/7 WhatsApp
          </div>
          <p className="text-[11px] text-white/50 font-mono truncate">{hotelData.contact.whatsappNumber}</p>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex border-b border-white/10 overflow-x-auto gap-2">
        <button
          onClick={() => setActiveTab('flags')}
          className={`px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-t-2xl transition-all flex items-center gap-2 border-b-2 shrink-0 ${
            activeTab === 'flags'
              ? 'bg-white/10 border-amber-400 text-amber-400'
              : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Feature Modules ({activeCount})</span>
        </button>

        <button
          onClick={() => setActiveTab('theme')}
          className={`px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-t-2xl transition-all flex items-center gap-2 border-b-2 shrink-0 ${
            activeTab === 'theme'
              ? 'bg-white/10 border-amber-400 text-amber-400'
              : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Palette className="w-4 h-4" />
          <span>Luxury Brand Themes (5)</span>
        </button>

        <button
          onClick={() => setActiveTab('property')}
          className={`px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-t-2xl transition-all flex items-center gap-2 border-b-2 shrink-0 ${
            activeTab === 'property'
              ? 'bg-white/10 border-amber-400 text-amber-400'
              : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>NAP & WhatsApp Config</span>
        </button>

        <button
          onClick={() => setActiveTab('export')}
          className={`px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-t-2xl transition-all flex items-center gap-2 border-b-2 shrink-0 ${
            activeTab === 'export'
              ? 'bg-white/10 border-amber-400 text-amber-400'
              : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>Astro & Deploy Spec</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: FEATURE MODULES & FLAGS */}
      {/* ========================================================= */}
      {activeTab === 'flags' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Controls Bar */}
          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search modules by name or key..."
                value={flagsSearch}
                onChange={(e) => setFlagsSearch(e.target.value)}
                className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-amber-400"
              />
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-3" />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={handleEnableAll}
                className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold px-3 py-2 rounded-xl transition-all"
              >
                Enable All
              </button>
              <button
                onClick={handleDisableOptional}
                className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold px-3 py-2 rounded-xl transition-all"
              >
                Disable Auxiliary
              </button>
              <button
                onClick={handleResetFlags}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-[11px] font-semibold px-3 py-2 rounded-xl transition-all flex items-center gap-1"
                title="Reset to factory settings"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>
          </div>

          {/* Flags Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFlags.map((flag) => {
              const isEnabled = localFlags[flag.key];
              return (
                <div
                  key={flag.key}
                  className={`bg-white/[0.04] backdrop-blur-xl border rounded-2xl p-5 transition-all flex flex-col justify-between space-y-4 ${
                    isEnabled
                      ? 'border-white/15 hover:border-amber-400/40'
                      : 'border-white/5 opacity-60 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-lg font-bold text-white">
                          {flag.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/60">
                          {flag.key}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {flag.description}
                      </p>
                    </div>

                    {/* Switch Toggle */}
                    <button
                      type="button"
                      onClick={() => handleToggleFlag(flag.key)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        isEnabled ? 'bg-amber-400' : 'bg-white/20'
                      }`}
                      role="switch"
                      aria-checked={isEnabled}
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-black shadow-lg ring-0 transition duration-200 ease-in-out ${
                          isEnabled ? 'translate-x-5' : 'translate-x-0 bg-white/80'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-white/40 uppercase tracking-wider font-semibold">
                      Category: {flag.category}
                    </span>
                    <span className={`font-semibold flex items-center gap-1 ${isEnabled ? 'text-emerald-400' : 'text-white/40'}`}>
                      {isEnabled ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Visible to Guests</span>
                        </>
                      ) : (
                        <span>Cleanly Omitted</span>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: LUXURY BRAND THEMES */}
      {/* ========================================================= */}
      {activeTab === 'theme' && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-white">
                Luxury Architectural Theme Presets
              </h3>
              <p className="text-xs text-white/70">
                Click any archetype to immediately preview the hotel's palette, font pairings, and aesthetic.
              </p>
            </div>

            <button
              onClick={handleResetTheme}
              className="bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Frosted Glass</span>
            </button>
          </div>

          {/* Theme Presets Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {THEME_PRESETS.map((preset) => {
              const isSelected = activePresetId === preset.id;
              return (
                <div
                  key={preset.id}
                  className={`bg-white/[0.04] backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border transition-all flex flex-col justify-between space-y-6 ${
                    isSelected
                      ? 'border-amber-400 ring-2 ring-amber-400/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-2xl font-bold text-white">
                        {preset.name}
                      </h4>
                      {isSelected && (
                        <span className="bg-amber-400 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>Active Theme</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed">
                      {preset.description}
                    </p>

                    {/* Color Swatch Bar */}
                    <div className="pt-2">
                      <p className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">Palette DNA:</p>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="space-y-1 text-center">
                          <div
                            className="h-10 rounded-xl border border-white/20 shadow-inner"
                            style={{ backgroundColor: preset.previewColors.primary }}
                          />
                          <span className="text-[10px] font-mono text-white/60 block">Canvas</span>
                        </div>
                        <div className="space-y-1 text-center">
                          <div
                            className="h-10 rounded-xl border border-white/20 shadow-inner"
                            style={{ backgroundColor: preset.previewColors.secondary }}
                          />
                          <span className="text-[10px] font-mono text-white/60 block">Secondary</span>
                        </div>
                        <div className="space-y-1 text-center">
                          <div
                            className="h-10 rounded-xl border border-white/20 shadow-inner"
                            style={{ backgroundColor: preset.previewColors.accent }}
                          />
                          <span className="text-[10px] font-mono text-white/60 block">Accent</span>
                        </div>
                        <div className="space-y-1 text-center">
                          <div
                            className="h-10 rounded-xl border border-white/20 shadow-inner"
                            style={{ backgroundColor: preset.previewColors.background }}
                          />
                          <span className="text-[10px] font-mono text-white/60 block">Backdrop</span>
                        </div>
                      </div>
                    </div>

                    {/* Typography Details */}
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-white/70 flex items-center justify-between">
                      <span>Heading Font: <strong className="text-white">{preset.config.typography.headingFont.split(',')[0]}</strong></span>
                      <span>Body Font: <strong className="text-white">{preset.config.typography.bodyFont.split(',')[0]}</strong></span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectThemePreset(preset.id)}
                    className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Current Selected Theme</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Activate {preset.name}</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: PROPERTY & BOOKING CONFIGURATION (NAP & WHATSAPP) */}
      {/* ========================================================= */}
      {activeTab === 'property' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Header Action Bar for Tab 3 */}
          <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-400" />
                <span>Property Details, NAP & WhatsApp Desk</span>
              </h2>
              <p className="text-xs text-white/50 mt-0.5">
                Edit property Name, Address, Phone, Email and WhatsApp number. Click <strong>"Save Property Changes"</strong> to immediately update the live website and booking modal.
              </p>
            </div>

            <div className="flex items-center gap-2 self-stretch sm:self-auto">
              <button
                type="button"
                onClick={handleResetNap}
                className="px-4 py-2.5 rounded-xl border border-white/15 hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
                title="Reset NAP to factory defaults"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <button
                type="button"
                onClick={() => handleSaveNap()}
                disabled={isSavingNap}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{isSavingNap ? 'Saving...' : 'Save Property Changes'}</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSaveNap} className="space-y-6">
            
            {/* Primary NAP Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* CARD 1: Property Identity & Name (N in NAP) */}
              <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <Building className="w-5 h-5 text-amber-400" />
                    <span>Property Identity (Name)</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 font-semibold">
                    Core Branding
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-white/70 font-semibold mb-1.5">
                      Hotel Display Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={propertyNameInput}
                      onChange={(e) => setPropertyNameInput(e.target.value)}
                      placeholder="e.g. The Sanctuary at Camelback Mountain"
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                      required
                    />
                    <p className="text-[11px] text-white/40 mt-1">Displays in header logo, hero headline, footer, meta titles, and vouchers.</p>
                  </div>

                  <div>
                    <label className="block text-white/70 font-semibold mb-1.5">
                      Legal Operating Entity
                    </label>
                    <input
                      type="text"
                      value={legalNameInput}
                      onChange={(e) => setLegalNameInput(e.target.value)}
                      placeholder="e.g. Camelback Luxury Resort & Spa LLC"
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                    />
                    <p className="text-[11px] text-white/40 mt-1">Rendered in copyright notice and legal disclaimers.</p>
                  </div>

                  <div>
                    <label className="block text-white/70 font-semibold mb-1.5">
                      Property Classification
                    </label>
                    <input
                      type="text"
                      value={propertyTypeInput}
                      onChange={(e) => setPropertyTypeInput(e.target.value)}
                      placeholder="e.g. Ultra-Luxury Mountain Sanctuary & Spa"
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* CARD 2: Direct Contact, WhatsApp & Phone (P in NAP) */}
              <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    <span>WhatsApp & Phone (Phone)</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 font-semibold">
                    Instant Connect
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-white/70 font-semibold mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-emerald-300">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Number (International format)</span>
                        <span className="text-amber-400">*</span>
                      </span>
                      <a
                        href={`https://wa.me/${whatsappInput.trim().replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
                      >
                        <span>Test Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={whatsappInput}
                        onChange={(e) => setWhatsappInput(e.target.value)}
                        placeholder="e.g. 14809482100 (digits only, no '+' or '-')"
                        className="w-full bg-emerald-950/20 border border-emerald-500/30 focus:border-emerald-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-emerald-200 font-mono text-xs placeholder-white/30 transition-all font-semibold"
                        required
                      />
                    </div>
                    <p className="text-[11px] text-white/40 mt-1">
                      Target number for the 24/7 Floating Concierge button, header button, and booking confirmation direct link.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        <span>Concierge / Primary Phone</span>
                        <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        placeholder="e.g. +1 (480) 948-2100"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">
                        Toll-Free Reservations Phone
                      </label>
                      <input
                        type="text"
                        value={phoneTollFreeInput}
                        onChange={(e) => setPhoneTollFreeInput(e.target.value)}
                        placeholder="e.g. 1-800-245-2100"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">
                        Reservations Desk Email
                      </label>
                      <input
                        type="email"
                        value={emailReservationsInput}
                        onChange={(e) => setEmailReservationsInput(e.target.value)}
                        placeholder="reservations@sanctuaryresort.com"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-mono placeholder-white/30 transition-all text-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">
                        Concierge Direct Email
                      </label>
                      <input
                        type="email"
                        value={emailConciergeInput}
                        onChange={(e) => setEmailConciergeInput(e.target.value)}
                        placeholder="concierge@sanctuaryresort.com"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-mono placeholder-white/30 transition-all text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3: Physical Location & Address (A in NAP) */}
              <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span>Physical Location & Address (Address)</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20 font-semibold">
                    Local SEO / Maps
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-white/70 font-semibold mb-1.5">
                      Street Address Line 1 <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={addressLine1Input}
                      onChange={(e) => setAddressLine1Input(e.target.value)}
                      placeholder="e.g. 5700 E McDonald Dr"
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 font-semibold mb-1.5">
                      Suite / Floor / Landmark (Line 2)
                    </label>
                    <input
                      type="text"
                      value={addressLine2Input}
                      onChange={(e) => setAddressLine2Input(e.target.value)}
                      placeholder="e.g. Camelback North Ridge"
                      className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">City</label>
                      <input
                        type="text"
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                        placeholder="Paradise Valley"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">State / Region</label>
                      <input
                        type="text"
                        value={stateInput}
                        onChange={(e) => setStateInput(e.target.value)}
                        placeholder="AZ"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">Postal Code</label>
                      <input
                        type="text"
                        value={postalCodeInput}
                        onChange={(e) => setPostalCodeInput(e.target.value)}
                        placeholder="85253"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3 py-2.5 text-white font-mono placeholder-white/30 transition-all text-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">Country</label>
                      <input
                        type="text"
                        value={countryInput}
                        onChange={(e) => setCountryInput(e.target.value)}
                        placeholder="United States"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 4: Operations, Check-In/Out & Live Testing */}
              <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-amber-400" />
                    <span>Booking Schedule & Channels</span>
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                    Front Desk
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">Standard Check-In</label>
                      <input
                        type="text"
                        value={checkInTimeInput}
                        onChange={(e) => setCheckInTimeInput(e.target.value)}
                        placeholder="4:00 PM"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 font-semibold mb-1.5">Standard Check-Out</label>
                      <input
                        type="text"
                        value={checkOutTimeInput}
                        onChange={(e) => setCheckOutTimeInput(e.target.value)}
                        placeholder="11:00 AM"
                        className="w-full bg-black/40 border border-white/15 focus:border-amber-400 focus:outline-none rounded-xl px-3.5 py-2.5 text-white font-medium placeholder-white/30 transition-all text-xs"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="text-white/60 font-semibold">Live Testing Controls:</div>
                    <p className="text-[11px] text-white/40">
                      Verify your updated details in action immediately:
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {onOpenBookingModal && (
                        <button
                          type="button"
                          onClick={onOpenBookingModal}
                          className="flex-1 min-w-[140px] bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-md active:scale-95"
                        >
                          Test Booking Modal
                        </button>
                      )}
                      <a
                        href={`https://wa.me/${whatsappInput.trim().replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[140px] bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-center text-xs font-bold py-2.5 px-3 rounded-xl transition-all"
                      >
                        Test WhatsApp Chat
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSavingNap}
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isSavingNap ? 'Saving Changes...' : 'Save & Publish Live to Website'}</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </form>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: ASTRO & DEPLOY SPEC */}
      {/* ========================================================= */}
      {activeTab === 'export' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-amber-400" />
                  <span>Production Configuration Export</span>
                </h3>
                <p className="text-xs text-white/60">
                  Copy this generated configuration into your Git repository before deploying to Astro, Cloudflare Pages, or Vercel.
                </p>
              </div>

              <button
                onClick={handleCopyCode}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-amber-200 overflow-x-auto max-h-96 leading-relaxed">
              {exportCode}
            </pre>
          </div>

          {/* Deployment Quick Guide */}
          <div className="bg-amber-500/10 border border-amber-500/25 rounded-3xl p-6 space-y-3 text-amber-200">
            <h4 className="font-bold flex items-center gap-2 text-sm text-amber-300">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>How to Deploy Live (Cloudflare Pages / Vercel / Netlify / Astro)</span>
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-white/80 leading-relaxed">
              <li>Export project as ZIP or push directly to your GitHub repository.</li>
              <li>Connect your GitHub repository to Cloudflare Pages or Vercel.</li>
              <li>Set build command: <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300">npm run build</code></li>
              <li>Set output directory: <code className="bg-black/40 px-2 py-0.5 rounded text-amber-300">dist</code></li>
              <li>Your luxury hotel website goes live on your custom domain with full SSL and global CDN!</li>
            </ol>
          </div>

        </div>
      )}

    </div>
  );
};
