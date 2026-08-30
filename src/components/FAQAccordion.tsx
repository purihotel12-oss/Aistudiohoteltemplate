import React, { useState } from 'react';
import { FAQ, FAQCategory } from '../types';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  faqs: FAQ[];
  showCategoryTabs?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, showCategoryTabs = true }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | 'All'>('All');

  const categories: (FAQCategory | 'All')[] = [
    'All',
    ...(Array.from(new Set(faqs.map((f) => f.category))) as FAQCategory[])
  ];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Category Tabs */}
      {showCategoryTabs && categories.length > 2 && (
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion Items */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              id={`faq-${faq.id}`}
              className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-lg transition-all hover:border-white/20"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-base font-bold text-white hover:text-amber-400 transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-amber-300' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/10 animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
