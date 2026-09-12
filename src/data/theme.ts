/**
 * MASTER HOTEL WEBSITE TEMPLATE - THEME SYSTEM
 * 
 * Centralized design tokens for hotel branding.
 * Future AI: Customize this file to completely rebrand the hotel palette,
 * typography, and corner styling in one single place.
 */

import { ThemeConfig } from '../types';

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  config: ThemeConfig;
  previewColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'frosted-glass',
    name: 'Frosted Obsidian Glass (Default)',
    description: 'Dark obsidian canvas with glowing royal blue & warm amber ambient orbs and translucent glass panels.',
    previewColors: {
      primary: '#0F1115',
      secondary: '#F59E0B',
      accent: '#2563EB',
      background: '#0F1115'
    },
    config: {
      name: 'Frosted Glass Luxury',
      colors: {
        primary: '#0F1115',
        primaryHover: '#161920',
        secondary: '#F59E0B',
        secondaryHover: '#D97706',
        accent: '#2563EB',
        background: '#0F1115',
        surface: 'rgba(255, 255, 255, 0.05)',
        surfaceAlt: 'rgba(255, 255, 255, 0.08)',
        textMain: '#F9FAFB',
        textMuted: '#9CA3AF',
        border: 'rgba(255, 255, 255, 0.10)',
        darkSurface: '#0B0D11',
        darkText: '#F9FAFB'
      },
      typography: {
        headingFont: '"Cormorant Garamond", Georgia, serif',
        bodyFont: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif'
      },
      radius: 'lg'
    }
  },
  {
    id: 'mediterranean',
    name: 'Warm Mediterranean & Japandi',
    description: 'Travertine ivory canvas with sun-baked terracotta, raw cedar wood, and tranquil earth tones.',
    previewColors: {
      primary: '#2B231D',
      secondary: '#C86D51',
      accent: '#684C38',
      background: '#1A1614'
    },
    config: {
      name: 'Warm Mediterranean & Japandi',
      colors: {
        primary: '#1A1614',
        primaryHover: '#231E1B',
        secondary: '#C86D51',
        secondaryHover: '#B2583D',
        accent: '#8B5E3C',
        background: '#141110',
        surface: 'rgba(255, 255, 255, 0.04)',
        surfaceAlt: 'rgba(255, 255, 255, 0.07)',
        textMain: '#FDFBF7',
        textMuted: '#A89E96',
        border: 'rgba(200, 109, 81, 0.20)',
        darkSurface: '#100E0D',
        darkText: '#FDFBF7'
      },
      typography: {
        headingFont: '"Cormorant Garamond", Georgia, serif',
        bodyFont: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif'
      },
      radius: 'lg'
    }
  },
  {
    id: 'classic-heritage',
    name: 'Classic Heritage Grandeur',
    description: 'Deep British racing green with brushed champagne gold, polished brass, and royal crest elegance.',
    previewColors: {
      primary: '#0B1713',
      secondary: '#D4AF37',
      accent: '#1D3B31',
      background: '#0A1410'
    },
    config: {
      name: 'Classic Heritage Grandeur',
      colors: {
        primary: '#0A1410',
        primaryHover: '#10201A',
        secondary: '#D4AF37',
        secondaryHover: '#BF9B2D',
        accent: '#1B4332',
        background: '#080F0D',
        surface: 'rgba(255, 255, 255, 0.04)',
        surfaceAlt: 'rgba(255, 255, 255, 0.07)',
        textMain: '#F8FAFC',
        textMuted: '#94A3B8',
        border: 'rgba(212, 175, 55, 0.20)',
        darkSurface: '#050A08',
        darkText: '#F8FAFC'
      },
      typography: {
        headingFont: '"Playfair Display", Georgia, serif',
        bodyFont: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif'
      },
      radius: 'lg'
    }
  },
  {
    id: 'nordic-alpine',
    name: 'Nordic Chalet & Alpine Luxury',
    description: 'Crisp glacier midnight slate, warm caramel pine wood, and serene Scandinavian calm.',
    previewColors: {
      primary: '#0E1726',
      secondary: '#F59E0B',
      accent: '#0284C7',
      background: '#0B111C'
    },
    config: {
      name: 'Nordic Chalet & Alpine Luxury',
      colors: {
        primary: '#0B111C',
        primaryHover: '#131D2D',
        secondary: '#F59E0B',
        secondaryHover: '#D97706',
        accent: '#38BDF8',
        background: '#080D17',
        surface: 'rgba(255, 255, 255, 0.04)',
        surfaceAlt: 'rgba(255, 255, 255, 0.08)',
        textMain: '#F8FAFC',
        textMuted: '#94A3B8',
        border: 'rgba(56, 189, 248, 0.20)',
        darkSurface: '#05080E',
        darkText: '#F8FAFC'
      },
      typography: {
        headingFont: '"Cinzel", Georgia, serif',
        bodyFont: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif'
      },
      radius: 'lg'
    }
  },
  {
    id: 'tropical-eco',
    name: 'Tropical Eco-Resort',
    description: 'Deep rainforest volcanic slate with vibrant bamboo emerald and warm tropical sunrise tones.',
    previewColors: {
      primary: '#091510',
      secondary: '#10B981',
      accent: '#F59E0B',
      background: '#060E0B'
    },
    config: {
      name: 'Tropical Eco-Resort',
      colors: {
        primary: '#060E0B',
        primaryHover: '#0E1D17',
        secondary: '#10B981',
        secondaryHover: '#059669',
        accent: '#F59E0B',
        background: '#040907',
        surface: 'rgba(255, 255, 255, 0.04)',
        surfaceAlt: 'rgba(255, 255, 255, 0.07)',
        textMain: '#F8FAFC',
        textMuted: '#94A3B8',
        border: 'rgba(16, 185, 129, 0.20)',
        darkSurface: '#030605',
        darkText: '#F8FAFC'
      },
      typography: {
        headingFont: '"Cormorant Garamond", Georgia, serif',
        bodyFont: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif'
      },
      radius: 'lg'
    }
  }
];

export const DEFAULT_THEME: ThemeConfig = THEME_PRESETS[0].config;

const getStoredTheme = (): ThemeConfig => {
  if (typeof window === 'undefined') return { ...DEFAULT_THEME };
  try {
    const saved = localStorage.getItem('hotel_admin_theme');
    if (saved) {
      return { ...DEFAULT_THEME, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Failed to parse stored theme', e);
  }
  return { ...DEFAULT_THEME };
};

export const themeConfig: ThemeConfig = getStoredTheme();

/**
 * Injects theme variables dynamically into :root so all CSS classes,
 * Tailwind utilities, headings, orbs, borders, and surfaces update live across the entire site.
 */
export const applyThemeToDom = (theme: ThemeConfig = themeConfig) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  // Backgrounds & Base Surfaces
  root.style.setProperty('--theme-bg', theme.colors.background);
  root.style.setProperty('--theme-primary', theme.colors.primary);
  root.style.setProperty('--theme-primary-hover', theme.colors.primaryHover);
  
  // Dynamic secondary (color for buttons, badges, highlights)
  root.style.setProperty('--theme-secondary', theme.colors.secondary);
  root.style.setProperty('--theme-secondary-hover', theme.colors.secondaryHover);
  root.style.setProperty('--theme-secondary-light', theme.colors.secondary);
  
  // Ambient Accent / Orbs
  root.style.setProperty('--theme-accent', theme.colors.accent);
  
  // Surfaces & Glass
  root.style.setProperty('--theme-surface', theme.colors.surface);
  root.style.setProperty('--theme-surface-alt', theme.colors.surfaceAlt);
  root.style.setProperty('--theme-border', theme.colors.border);
  
  // Typography & Text
  root.style.setProperty('--theme-text-main', theme.colors.textMain);
  root.style.setProperty('--theme-text-muted', theme.colors.textMuted);
  root.style.setProperty('--theme-font-heading', theme.typography.headingFont);
  root.style.setProperty('--theme-font-body', theme.typography.bodyFont);

  // Border Radius
  const radiusMap: Record<string, string> = {
    none: '0px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px'
  };
  root.style.setProperty('--theme-radius', radiusMap[theme.radius] || '0.75rem');
};

// Apply saved theme to DOM on initial module load
if (typeof window !== 'undefined') {
  applyThemeToDom(themeConfig);
}

export const updateThemeConfig = (newTheme: Partial<ThemeConfig>) => {
  Object.assign(themeConfig, newTheme);
  applyThemeToDom(themeConfig);
  try {
    localStorage.setItem('hotel_admin_theme', JSON.stringify(themeConfig));
    window.dispatchEvent(new CustomEvent('hotel-config-updated', { detail: { themeConfig } }));
  } catch (e) {
    console.error('Failed to save theme config', e);
  }
};

export const applyThemePreset = (presetId: string) => {
  const preset = THEME_PRESETS.find(p => p.id === presetId);
  if (preset) {
    Object.assign(themeConfig, preset.config);
    applyThemeToDom(themeConfig);
    try {
      localStorage.setItem('hotel_admin_theme', JSON.stringify(themeConfig));
      localStorage.setItem('hotel_admin_theme_preset_id', presetId);
      window.dispatchEvent(new CustomEvent('hotel-config-updated', { detail: { themeConfig, presetId } }));
    } catch (e) {
      console.error('Failed to save preset theme', e);
    }
  }
};

export const resetThemeConfig = () => {
  Object.assign(themeConfig, DEFAULT_THEME);
  applyThemeToDom(themeConfig);
  try {
    localStorage.removeItem('hotel_admin_theme');
    localStorage.removeItem('hotel_admin_theme_preset_id');
    window.dispatchEvent(new CustomEvent('hotel-config-updated', { detail: { themeConfig } }));
  } catch (e) {
    console.error('Failed to reset theme', e);
  }
};

