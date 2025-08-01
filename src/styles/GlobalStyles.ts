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
    position: relative;

    /* Theme 1: Glassmorphism background */
    ${props => props.$theme.id === 'theme1' && css`
      background: ${props.$theme.colors.background};
      position: relative;
      
      &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${props.$theme.colors.background};
        z-index: -2;
      }
      
      &::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
        z-index: -1;
      }
    `}

    /* Theme 2: Dark elegant background */
    ${props => props.$theme.id === 'theme2' && css`
      background: ${props.$theme.colors.background};
    `}

    /* Theme 3: Green gradient background */
    ${props => props.$theme.id === 'theme3' && css`
      background: ${props.$theme.colors.background};
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
  }

  #root {
    min-height: 100vh;
    width: 100%;
    position: relative;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.$theme.colors.border};
    border-radius: 4px;
    transition: background 0.2s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.$theme.colors.primary};
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

  /* Loading animation keyframes */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

// Main app container with proper layout structure
export const AppContainer = styled.div<{ $theme: any }>`
  min-height: 100vh;
  display: flex;
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
  `}
`;

// Header that adapts to each theme with glassmorphism
export const HeaderContainer = styled.header<{ $theme: any }>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.$theme.layout.headerHeight};
  background: ${props => props.$theme.colors.surface};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => props.$theme.colors.border};
  z-index: 1000;
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};

  ${props => props.$theme.layout.type === 'sidebar' && css`
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

  /* Theme-specific header styling */
  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(30px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  `}

  ${props => props.$theme.id === 'theme2' && css`
    background: ${props.$theme.colors.surface};
    border-bottom: 1px solid ${props.$theme.colors.border};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(16, 185, 129, 0.2);
    box-shadow: 0 4px 30px rgba(16, 185, 129, 0.1);
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
`;

// Scrollable content container
export const ScrollableContent = styled.div<{ $theme: any }>`
  height: 100%;
  overflow-y: auto;
  padding: ${props => props.$theme.spacing.xxl};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    padding: ${props.$theme.spacing.xxl};
    
    @media (max-width: 1024px) {
      padding: ${props.$theme.spacing.xl};
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    padding: ${props.$theme.spacing.xxl};
  `}

  /* Theme-specific content styling */
  ${props => props.$theme.id === 'theme1' && css`
    position: relative;
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

// Enhanced loading states with glassmorphism
export const LoadingOverlay = styled.div<{ $isVisible: boolean; $theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;

  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
  `}

  ${props => props.$theme.id === 'theme2' && css`
    background: rgba(15, 15, 15, 0.9);
    backdrop-filter: blur(12px);
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
  `}
`;

export const LoadingSpinner = styled.div<{ $theme: any }>`
  width: 48px;
  height: 48px;
  border: 3px solid transparent;
  border-top: 3px solid ${props => props.$theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 3px solid ${props => props.$theme.colors.primary}30;
    border-radius: 50%;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Modern glassmorphism card inspired by the designs
export const GlassCard = styled.div<{ $theme: any }>`
  background: ${props => props.$theme.colors.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.$theme.colors.border};
  border-radius: ${props => props.$theme.layout.borderRadius};
  padding: ${props => props.$theme.spacing.xl};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  }

  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
    }
  `}

  ${props => props.$theme.id === 'theme2' && css`
    background: ${props.$theme.colors.card};
    border: 1px solid ${props.$theme.colors.border};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

    &:hover {
      border-color: ${props.$theme.colors.primary};
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
    }
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    box-shadow: 0 8px 32px rgba(16, 185, 129, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 1);
      border-color: ${props.$theme.colors.primary};
      box-shadow: 0 16px 48px rgba(16, 185, 129, 0.2);
    }
  `}
`;

// Animated gradient background for vibrant themes
export const GradientBackground = styled.div<{ $theme: any }>`
  ${props => (props.$theme.id === 'theme1' || props.$theme.id === 'theme3') && css`
    min-height: 100vh;
    position: relative;
  `}
`;

// Beautiful section containers
export const Section = styled.section<{ $theme: any }>`
  margin-bottom: ${props => props.$theme.spacing.xxl};
  
  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${props.$theme.layout.borderRadius};
    padding: ${props.$theme.spacing.xxl};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: ${props.$theme.layout.borderRadius};
    padding: ${props.$theme.spacing.xxl};
    box-shadow: 0 8px 32px rgba(16, 185, 129, 0.1);
  `}
`;