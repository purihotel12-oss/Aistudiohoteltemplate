import React, { useState } from 'react';
import { featureFlags } from '../data/features';
import { hotelData } from '../data/hotel';
import { themeConfig } from '../data/theme';
import { Settings2, X, Check, BookOpen, Layers, Shield, Sparkles } from 'lucide-react';

interface TemplateCustomizerDrawerProps {
  onFlagsChange?: (flags: typeof featureFlags) => void;
  onNavigate: (path: string) => void;
}

export const TemplateCustomizerDrawer: React.FC<TemplateCustomizerDrawerProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'flags' | 'architecture' | 'ai-guide'>('flags');
  const [localFlags, setLocalFlags] = useState({ ...featureFlags });

  const toggleFlag = (key: keyof typeof featureFlags) => {
    const updated = { ...localFlags, [key]: !localFlags[key] };
    setLocalFlags(updated);
  };

  return (
    <>
      {/* Floating Pill Button for Template Overview & Architecture Mode */}
      <button
        id="template-inspector-toggle-btn"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl border border-white/20 backdrop-blur-xl flex items-center gap-2 transition-all hover:scale-105"
        title="Master Hotel Template Controls & AI Customization Guide"
      >
        <Settings2 className="w-4 h-4 text-amber-400" />
        <span className="hidden sm:inline">Master Template Spec</span>
      </button>

      {/* Slide-over Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#12151B]/95 backdrop-blur-2xl w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-white/15 text-white">
            
            {/* Header */}
            <div className="bg-white/5 p-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white">Master Template Hub</h3>
                  <p className="text-[10px] text-white/50">Data-Driven Reusable Hotel Architecture</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white p-1.5 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Bar */}
            <div className="flex border-b border-white/10 bg-white/[0.02] text-xs font-medium text-white/60">
              <button
                onClick={() => setActiveTab('flags')}
                className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                  activeTab === 'flags'
                    ? 'border-amber-400 text-amber-400 bg-white/5 font-semibold'
                    : 'border-transparent hover:text-white'
                }`}
              >
                Feature Modules
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                  activeTab === 'architecture'
                    ? 'border-amber-400 text-amber-400 bg-white/5 font-semibold'
                    : 'border-transparent hover:text-white'
                }`}
              >
                Theme & Booking
              </button>
              <button
                onClick={() => setActiveTab('ai-guide')}
                className={`flex-1 py-3 text-center transition-colors border-b-2 ${
                  activeTab === 'ai-guide'
                    ? 'border-amber-400 text-amber-400 bg-white/5 font-semibold'
                    : 'border-transparent hover:text-white'
                }`}
              >
                AI Workflow
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs text-white/80">
              
              {activeTab === 'flags' && (
                <div className="space-y-3">
                  <p className="text-white/60 leading-normal">
                    Toggle feature flags in <code>src/data/features.ts</code>. Disabled modules automatically remove their navigation items, homepage preview blocks, and routes.
                  </p>

                  <div className="space-y-2 pt-2">
                    {Object.entries(localFlags).map(([key, val]) => (
                      <div
                        key={key}
                        onClick={() => toggleFlag(key as keyof typeof featureFlags)}
                        className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                      >
                        <span className="font-mono text-[11px] text-white font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            val ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-white/10 text-white/50 border border-white/10'
                          }`}
                        >
                          {val ? 'ENABLED' : 'DISABLED'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                    <h4 className="font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Theme System (src/data/theme.ts)</span>
                    </h4>
                    <p className="text-white/60 text-[11px]">
                      Frosted Glass Theme with dark obsidian backdrop and glowing ambient glassmorphism.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-xl">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: themeConfig.colors.primary }} />
                        <span className="text-[10px] font-mono text-white/90">Obsidian Navy</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-xl">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: themeConfig.colors.secondary }} />
                        <span className="text-[10px] font-mono text-white/90">Amber Gold</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                    <h4 className="font-bold text-white flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-amber-400" />
                      <span>Booking Engine Mode</span>
                    </h4>
                    <p className="text-white/60 text-[11px]">
                      Configured in <code>hotelData.booking.mode</code>:
                    </p>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl font-semibold text-amber-300">
                        Current Mode: <code className="text-amber-400 font-mono">{hotelData.booking.mode}</code>
                      </div>
                      <p className="text-white/50">
                        Supports: <code>externalBooking</code>, <code>enquiry</code>, or <code>directContact</code>.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai-guide' && (
                <div className="space-y-3">
                  <div className="p-4 bg-amber-500/10 border border-amber-500/25 rounded-2xl text-amber-200 space-y-2">
                    <h4 className="font-bold flex items-center gap-1.5 text-xs text-amber-300">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>AI Cloning & Customization Pattern</span>
                    </h4>
                    <p className="text-[11px] text-white/80 leading-relaxed">
                      To build a new hotel from this master template:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-[11px] text-white/80 pt-1 font-medium">
                      <li>Clone master template repository</li>
                      <li>Replace <code>src/data/hotel.ts</code> with hotel details</li>
                      <li>Update <code>src/data/rooms.ts</code>, <code>amenities.ts</code></li>
                      <li>Configure <code>features.ts</code> and <code>theme.ts</code></li>
                      <li>Run <code>npm run build</code> for Cloudflare Pages</li>
                    </ol>
                  </div>

                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate('/about');
                    }}
                    className="w-full text-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium py-2.5 rounded-xl text-xs transition-colors"
                  >
                    View Hotel Story Page
                  </button>
                </div>
              )}

            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-white/50">
              <span>Ready for Cloudflare Pages</span>
              <button
                onClick={() => setIsOpen(false)}
                className="font-semibold text-amber-400 hover:text-amber-300"
              >
                Close Drawer
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
