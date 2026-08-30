import React, { useState, useEffect } from 'react';
import { hotelData } from '../data/hotel';
import { roomsData } from '../data/rooms';
import { X, Calendar, Users, Phone, Mail, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { getRoomEnquiryWhatsAppUrl, buildWhatsAppUrl } from '../lib/whatsapp';

export interface BookingModalInitialParams {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  roomSlug?: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialParams?: BookingModalInitialParams;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialParams }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState(initialParams?.checkIn || tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(initialParams?.checkOut || dayAfterTomorrow.toISOString().split('T')[0]);
  const [guests, setGuests] = useState(initialParams?.guests || 2);
  const [roomSlug, setRoomSlug] = useState(initialParams?.roomSlug || '');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialParams?.roomSlug) setRoomSlug(initialParams.roomSlug);
    if (initialParams?.checkIn) setCheckIn(initialParams.checkIn);
    if (initialParams?.checkOut) setCheckOut(initialParams.checkOut);
    if (initialParams?.guests) setGuests(initialParams.guests);
  }, [initialParams]);

  if (!isOpen) return null;

  const selectedRoom = roomsData.find((r) => r.slug === roomSlug);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable frontend reservation enquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleWhatsAppRedirect = () => {
    const roomTitle = selectedRoom ? selectedRoom.name : 'Luxury Suite';
    const waUrl = getRoomEnquiryWhatsAppUrl(roomTitle, checkIn, checkOut);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="booking-enquiry-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="bg-[#12151B]/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-white/15 relative my-8 text-white">
        
        {/* Header */}
        <div className="bg-white/5 text-white p-6 relative flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
              Official Direct Reservation Enquiry
            </span>
            <h2 id="booking-modal-title" className="font-serif text-2xl font-bold tracking-tight mt-0.5 text-white">
              {selectedRoom ? selectedRoom.name : `Reserve at ${hotelData.shortName}`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close Reservation Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Reservation Enquiry Received
              </h3>
              <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Our reservations concierge at {hotelData.name} has received your request for <strong>{checkIn}</strong> to <strong>{checkOut}</strong> and will contact you via email or phone within 2 hours with availability and confirmed rates.
              </p>
              
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 max-w-md mx-auto text-xs text-amber-300 text-left">
                <p className="font-semibold mb-1">Need immediate assistance?</p>
                <p className="text-white/80">
                  Connect with our 24/7 front desk directly at{' '}
                  <a href={`tel:${hotelData.contact.phonePrimary}`} className="underline font-bold text-amber-400">
                    {hotelData.contact.phoneDisplay || hotelData.contact.phonePrimary}
                  </a>{' '}
                  or via WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="text-white/80 hover:text-white text-xs font-medium px-5 py-2.5 border border-white/20 rounded-full hover:bg-white/5"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Stay Dates & Room Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Check-In Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Check-Out Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                    Accommodation Type
                  </label>
                  <select
                    value={roomSlug}
                    onChange={(e) => setRoomSlug(e.target.value)}
                    className="w-full bg-[#1A1E26] border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                  >
                    <option value="" className="bg-[#1A1E26] text-white">Best Available Suite</option>
                    {roomsData.map((r) => (
                      <option key={r.id} value={r.slug} className="bg-[#1A1E26] text-white">
                        {r.name} ({r.currency}{r.startingPrice}/night)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#1A1E26] border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                  >
                    <option value={1} className="bg-[#1A1E26] text-white">1 Adult</option>
                    <option value={2} className="bg-[#1A1E26] text-white">2 Adults</option>
                    <option value={3} className="bg-[#1A1E26] text-white">3 Adults / Family</option>
                    <option value={4} className="bg-[#1A1E26] text-white">4 Adults / Family</option>
                    <option value={5} className="bg-[#1A1E26] text-white">5+ Guests (Group)</option>
                  </select>
                </div>
              </div>

              {/* Guest Personal Information */}
              <div className="pt-3 border-t border-white/10">
                <h4 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-3">
                  Guest Contact Information
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-white/70 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none placeholder-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1 flex items-center gap-1">
                      <Mail className="w-3 h-3 text-amber-400" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none placeholder-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none placeholder-white/30"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    Special Requests / Dietary / Airport Transfer Needs (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Celebrating an anniversary, dietary preferences, or private chauffeur pickup."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none placeholder-white/30"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium px-4 py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-200"
                >
                  <span>{isSubmitting ? 'Submitting Request...' : 'Send Reservation Enquiry'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
