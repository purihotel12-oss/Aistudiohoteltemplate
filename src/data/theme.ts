/**
 * MASTER HOTEL WEBSITE TEMPLATE - THEME SYSTEM
 * 
 * Centralized design tokens for hotel branding.
 * Future AI: Customize this file to completely rebrand the hotel palette,
 * typography, and corner styling in one single place.
 */

import { ThemeConfig } from '../types';

export const themeConfig: ThemeConfig = {
  name: 'Frosted Glass Luxury',
  colors: {
    primary: '#0F1115', // Deep Obsidian Frosted Canvas
    primaryHover: '#161920',
    secondary: '#F59E0B', // Glowing Warm Amber
    secondaryHover: '#D97706',
    accent: '#2563EB', // Frosted Royal Blue Glow
    background: '#0F1115', // Deep Obsidian Canvas
    surface: 'rgba(255, 255, 255, 0.05)', // Glass Surface
    surfaceAlt: 'rgba(255, 255, 255, 0.08)',
    textMain: '#F9FAFB', // Pure Crisp White
    textMuted: '#9CA3AF', // Cool Glass Slate
    border: 'rgba(255, 255, 255, 0.10)', // Subtle Glass Rim
    darkSurface: '#0B0D11',
    darkText: '#F9FAFB'
  },
  typography: {
    headingFont: '"Cormorant Garamond", Georgia, serif',
    bodyFont: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif'
  },
  radius: 'lg'
};
