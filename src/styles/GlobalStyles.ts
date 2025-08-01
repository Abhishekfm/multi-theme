import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ $theme: any }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${props => props.$theme.typography.fontFamily};
    background: ${props => props.$theme.colors.background};
    color: ${props => props.$theme.colors.text};
    line-height: ${props => props.$theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    width: 100%;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.$theme.colors.border};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.$theme.colors.secondary};
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${props => props.$theme.colors.primary};
    outline-offset: 2px;
  }

  button:focus {
    outline-offset: 0;
  }

  /* Text selection */
  ::selection {
    background: ${props => props.$theme.colors.primary}33;
    color: ${props => props.$theme.colors.text};
  }
`;

// Main app container with proper layout structure
export const AppContainer = styled.div<{ $theme: any }>`
  min-height: 100vh;
  display: flex;
  background: ${props => props.$theme.colors.background};
  position: relative;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    flex-direction: row;
    
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  `}

  ${props => props.$theme.layout.type === 'minimalist' && css`
    flex-direction: column;
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    flex-direction: column;
    background: ${props.$theme.colors.background};
    min-height: 100vh;
  `}
`;

// Header that adapts to each theme
export const HeaderContainer = styled.header<{ $theme: any }>`
  /* Default: Top header for minimalist and grid themes */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.$theme.layout.headerHeight};
  background: ${props => props.$theme.colors.surface};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.$theme.colors.border};
  z-index: 1000;
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    /* Sidebar layout */
    position: fixed;
    top: 0;
    left: 0;
    width: ${props.$theme.layout.sidebarWidth};
    height: 100vh;
    border-right: 1px solid ${props.$theme.colors.border};
    border-bottom: none;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    @media (max-width: 1024px) {
      position: sticky;
      width: 100%;
      height: ${props.$theme.layout.headerHeight};
      flex-direction: row;
      overflow-y: visible;
      border-right: none;
      border-bottom: 1px solid ${props.$theme.colors.border};
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
  `}
`;

// Main content area that scrolls properly
export const MainContent = styled.main<{ $theme: any }>`
  flex: 1;
  min-height: 100vh;
  
  ${props => props.$theme.layout.type === 'sidebar' && css`
    margin-left: ${props.$theme.layout.sidebarWidth};
    overflow-y: auto;
    
    @media (max-width: 1024px) {
      margin-left: 0;
    }
  `}

  ${props => props.$theme.layout.type === 'minimalist' && css`
    /* Content starts after header */
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    /* Content starts after header */
  `}
`;

// Scrollable content container
export const ScrollableContent = styled.div<{ $theme: any }>`
  height: 100%;
  overflow-y: auto;
  padding: ${props => props.$theme.spacing.xl};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    padding: ${props.$theme.spacing.xxl};
    
    @media (max-width: 1024px) {
      padding: ${props.$theme.spacing.xl};
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    padding: ${props.$theme.spacing.xxl} ${props.$theme.spacing.xl};
  `}
`;

// Container for content with max-width
export const ContentContainer = styled.div<{ $theme: any }>`
  max-width: ${props => props.$theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    max-width: none;
  `}
`;

// Enhanced loading states
export const LoadingOverlay = styled.div<{ $isVisible: boolean; $theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

export const LoadingSpinner = styled.div<{ $theme: any }>`
  width: 48px;
  height: 48px;
  border: 3px solid ${props => props.$theme.colors.border};
  border-top: 3px solid ${props => props.$theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Modern glassmorphism card
export const GlassCard = styled.div<{ $theme: any }>`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.$theme.layout.borderRadius};
  padding: ${props => props.$theme.spacing.xl};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

// Gradient background for vibrant theme
export const GradientBackground = styled.div<{ $theme: any }>`
  ${props => props.$theme.layout.type === 'grid' && css`
    background: ${props.$theme.colors.background};
    min-height: 100vh;
    position: relative;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${props.$theme.colors.background};
      z-index: -1;
    }
  `}
`;