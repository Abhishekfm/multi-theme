import { Theme } from '../types/theme';

// Theme 1: Modern Minimalist - Clean and Professional
export const theme1: Theme = {
  id: 'theme1',
  name: 'Modern Minimalist',
  colors: {
    primary: '#6366f1', // Indigo
    secondary: '#8b5cf6', // Purple
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#0f172a',
    textSecondary: '#64748b',
    accent: '#06b6d4', // Cyan
    border: '#e2e8f0',
    card: '#ffffff',
    hover: '#f1f5f9',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: {
      small: '0.875rem',   // 14px
      medium: '1rem',      // 16px
      large: '1.125rem',   // 18px
      xlarge: '2rem',      // 32px
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
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    xxl: '3rem',     // 48px
  },
  layout: {
    type: 'minimalist',
    maxWidth: '1200px',
    containerPadding: '1rem',
    headerHeight: '4rem',
    gridGap: '1.5rem',
    borderRadius: '0.75rem',
  },
  animation: {
    transition: 'all',
    duration: '0.2s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Theme 2: Dark Professional - Sophisticated and Modern
export const theme2: Theme = {
  id: 'theme2',
  name: 'Dark Professional',
  colors: {
    primary: '#f59e0b',   // Amber
    secondary: '#ef4444',  // Red
    background: '#0f172a', // Dark slate
    surface: '#1e293b',   // Slate 800
    text: '#f8fafc',      // Slate 50
    textSecondary: '#cbd5e1', // Slate 300
    accent: '#10b981',    // Emerald
    border: '#334155',    // Slate 700
    card: '#1e293b',      // Slate 800
    hover: '#334155',     // Slate 700
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
    type: 'sidebar',
    maxWidth: '100%',
    containerPadding: '1.5rem',
    headerHeight: '100vh',
    sidebarWidth: '280px',
    gridGap: '1.5rem',
    borderRadius: '0.75rem',
  },
  animation: {
    transition: 'all',
    duration: '0.3s',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
};

// Theme 3: Vibrant Modern - Colorful and Engaging
export const theme3: Theme = {
  id: 'theme3',
  name: 'Vibrant Modern',
  colors: {
    primary: '#ec4899',   // Pink
    secondary: '#8b5cf6', // Purple
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    surface: '#ffffff',
    text: '#1f2937',      // Gray 800
    textSecondary: '#6b7280', // Gray 500
    accent: '#06b6d4',    // Cyan
    border: '#e5e7eb',    // Gray 200
    card: '#ffffff',
    hover: '#f3f4f6',     // Gray 100
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
    maxWidth: '1400px',
    containerPadding: '2rem',
    headerHeight: '5rem',
    gridGap: '2rem',
    borderRadius: '1rem',
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