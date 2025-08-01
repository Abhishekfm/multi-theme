import { Theme } from '../types/theme';

// Theme 1: Minimalist Light Theme
export const theme1: Theme = {
  id: 'theme1',
  name: 'Minimalist',
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1e293b',
    textSecondary: '#64748b',
    accent: '#3b82f6',
    border: '#e2e8f0',
    card: '#ffffff',
    hover: '#f1f5f9',
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.5rem',
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
    type: 'minimalist',
    maxWidth: '1200px',
    containerPadding: '1rem',
    headerHeight: '4rem',
    gridGap: '1rem',
    borderRadius: '0.5rem',
  },
  animation: {
    transition: 'all',
    duration: '0.3s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Theme 2: Dark Sidebar Theme
export const theme2: Theme = {
  id: 'theme2',
  name: 'Dark Professional',
  colors: {
    primary: '#f59e0b',
    secondary: '#a3a3a3',
    background: '#111827',
    surface: '#1f2937',
    text: '#f9fafb',
    textSecondary: '#d1d5db',
    accent: '#fbbf24',
    border: '#374151',
    card: '#1f2937',
    hover: '#374151',
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    fontSize: {
      small: '0.875rem',
      medium: '1.125rem',
      large: '1.25rem',
      xlarge: '1.875rem',
    },
    fontWeight: {
      light: 400,
      normal: 500,
      medium: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.6,
      loose: 1.8,
    },
  },
  spacing: {
    xs: '0.375rem',
    sm: '0.75rem',
    md: '1.25rem',
    lg: '2rem',
    xl: '2.5rem',
    xxl: '4rem',
  },
  layout: {
    type: 'sidebar',
    maxWidth: '100%',
    containerPadding: '1.5rem',
    headerHeight: '5rem',
    sidebarWidth: '16rem',
    gridGap: '1.5rem',
    borderRadius: '0.75rem',
  },
  animation: {
    transition: 'all',
    duration: '0.4s',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
};

// Theme 3: Colorful Card Grid Theme
export const theme3: Theme = {
  id: 'theme3',
  name: 'Playful',
  colors: {
    primary: '#ec4899',
    secondary: '#8b5cf6',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    surface: '#ffffff',
    text: '#1f2937',
    textSecondary: '#6b7280',
    accent: '#10b981',
    border: '#e5e7eb',
    card: '#ffffff',
    hover: '#f3f4f6',
  },
  typography: {
    fontFamily: '"Pacifico", "Comic Sans MS", cursive',
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '2rem',
    },
    fontWeight: {
      light: 400,
      normal: 400,
      medium: 400,
      bold: 400,
    },
    lineHeight: {
      tight: 1.3,
      normal: 1.6,
      loose: 2,
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  layout: {
    type: 'grid',
    maxWidth: '1400px',
    containerPadding: '2rem',
    headerHeight: '6rem',
    gridGap: '2rem',
    borderRadius: '1rem',
  },
  animation: {
    transition: 'all',
    duration: '0.5s',
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

export const themes = {
  theme1,
  theme2,
  theme3,
};

export const getTheme = (themeId: keyof typeof themes) => themes[themeId];