import { Theme } from '../types/theme';

// Theme 1: Glassmorphism Modern (Inspired by Nitec music interface)
export const theme1: Theme = {
  id: 'theme1',
  name: 'Glassmorphism Modern',
  colors: {
    primary: '#3B82F6',      // Blue
    secondary: '#1E40AF',    // Darker blue
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    surface: 'rgba(255, 255, 255, 0.15)',
    text: '#1F2937',
    textSecondary: '#6B7280',
    accent: '#06B6D4',       // Cyan
    border: 'rgba(255, 255, 255, 0.2)',
    card: 'rgba(255, 255, 255, 0.25)',
    hover: 'rgba(255, 255, 255, 0.35)',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '2.25rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      loose: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  layout: {
    type: 'minimalist',
    maxWidth: '1400px',
    containerPadding: '2rem',
    headerHeight: '5rem',
    gridGap: '2rem',
    borderRadius: '1.5rem',
  },
  animation: {
    transition: 'all',
    duration: '0.3s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Theme 2: Dark Elegant (Inspired by Velvety skincare interface)
export const theme2: Theme = {
  id: 'theme2',
  name: 'Dark Elegant',
  colors: {
    primary: '#C4B5A0',      // Warm beige
    secondary: '#8B7355',    // Darker beige
    background: '#0F0F0F',   // Deep black
    surface: '#1A1A1A',     // Dark grey
    text: '#F5F5F4',        // Light grey
    textSecondary: '#A8A29E', // Medium grey
    accent: '#D4AF37',      // Gold
    border: '#2A2A2A',      // Border grey
    card: '#1F1F1F',        // Card background
    hover: '#2A2A2A',       // Hover state
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '2.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      loose: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  layout: {
    type: 'sidebar',
    maxWidth: '100%',
    containerPadding: '2rem',
    headerHeight: '100vh',
    sidebarWidth: '320px',
    gridGap: '1.5rem',
    borderRadius: '1rem',
  },
  animation: {
    transition: 'all',
    duration: '0.4s',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
};

// Theme 3: Vibrant Green (Inspired by GetIllustrations interface)
export const theme3: Theme = {
  id: 'theme3',
  name: 'Vibrant Green',
  colors: {
    primary: '#10B981',      // Emerald green
    secondary: '#059669',    // Darker green
    background: 'linear-gradient(135deg, #A7F3D0 0%, #10B981 50%, #047857 100%)',
    surface: 'rgba(255, 255, 255, 0.95)',
    text: '#064E3B',         // Dark green
    textSecondary: '#047857', // Medium green
    accent: '#F59E0B',       // Amber accent
    border: 'rgba(16, 185, 129, 0.2)',
    card: 'rgba(255, 255, 255, 0.9)',
    hover: 'rgba(255, 255, 255, 1)',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '2rem',
    },
    fontWeight: {
      light: 400,
      normal: 500,
      medium: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      loose: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  layout: {
    type: 'grid',
    maxWidth: '1600px',
    containerPadding: '2rem',
    headerHeight: '5rem',
    gridGap: '2rem',
    borderRadius: '1.25rem',
  },
  animation: {
    transition: 'all',
    duration: '0.3s',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

export const themes = {
  theme1,
  theme2,
  theme3,
};

export const getTheme = (themeId: keyof typeof themes) => themes[themeId];