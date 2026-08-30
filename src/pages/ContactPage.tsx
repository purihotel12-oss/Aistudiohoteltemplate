import React, { useState } from 'react';
import { hotelData } from '../data/hotel';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2, Send } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="contact-page-root" className="pt-24 pb-20 space-y-12">
      <SEOHead
        metadata={{
          title: `Contact & Direct Reservations | ${hotelData.name}`,
          description: `Connect with the front desk, concierge team, and reservation managers at ${hotelData.name}. Phone, email, WhatsApp, and location details.`,
          path: '/contact'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} onNavigate={onNavigate} />

          <div className="space-y-2 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Contact Our Concierge
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Whether reserving a private villa, scheduling bespoke wellness retreats, or arranging airport chauffeur transfers, our desk is here to assist.
            </p>
          </div>
        </div>

        {/* Grid: Contact Channels & Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left 5 cols: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-5 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white">
                Direct Communication Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Direct Front Desk & Reservations</p>
                    <a href={`tel:${hotelData.contact.phonePrimary}`} className="text-amber-400 hover:underline font-medium">
                      {hotelData.contact.phoneDisplay || hotelData.contact.phonePrimary}
                    </a>
                    {hotelData.contact.phoneSecondary && (
                      <p className="text-white/50 text-xs mt-0.5">Alt: {hotelData.contact.phoneSecondary}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Reservations & Inquiries</p>
                    <a href={`mailto:${hotelData.contact.emailReservations}`} className="text-amber-400 hover:underline">
                      {hotelData.contact.emailReservations}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp Concierge Desk</p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-medium"
                    >
                      Chat Instantly with Reservations
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 text-white/80 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Physical Sanctuary Address</p>
                    <p className="text-white/60 text-xs">
                      {hotelData.location.addressLine1}, {hotelData.location.city}, {hotelData.location.state} {hotelData.location.postalCode}, {hotelData.location.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 text-white/80 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Desk Operations</p>
                    <p className="text-white/60 text-xs">
                      {hotelData.contact.receptionHours || '24 Hours Daily'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 cols: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mb-6">
                Our reservations team responds to all inquiries within 2 hours.
              </p>

              {sent ? (
                <div className="py-12 text-center space-y-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/30">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-white">Message Received</h4>
                  <p className="text-xs text-white/70 max-w-sm mx-auto">
                    Thank you, {name}. A member of our concierge team will reach out to {email} shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-semibold text-amber-400 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#1A1E26]/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none placeholder-white/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="eleanor@example.com"
                        className="w-full bg-[#1A1E26]/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none placeholder-white/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Group booking, private wedding inquiry, or dietary requests"
                      className="w-full bg-[#1A1E26]/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none placeholder-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please share details regarding your desired dates, party size, or specific requirements..."
                      className="w-full bg-[#1A1E26]/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-amber-400/50 focus:outline-none placeholder-white/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Concierge Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
