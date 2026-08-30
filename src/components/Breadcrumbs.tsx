import React from 'react';
import { BreadcrumbItem } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs text-white/50">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-amber-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-amber-400/70" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-white/30" />
              {item.href && !isLast ? (
                <button
                  onClick={() => onNavigate(item.href!)}
                  className="hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <span className="font-semibold text-white">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
