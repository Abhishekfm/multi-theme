import styled, { createGlobalStyle, css } from 'styled-components';
import { useTheme } from '../context/ThemeContext';

export const GlobalStyle = createGlobalStyle<{ $theme: any }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: ${props => props.$theme.typography.fontFamily};
    background: ${props => props.$theme.colors.background};
    color: ${props => props.$theme.colors.text};
    transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration} ${props => props.$theme.animation.easing};
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.$theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.$theme.colors.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.$theme.colors.secondary};
  }
`;

// Layout wrapper that adapts to theme
export const AppContainer = styled.div<{ $theme: any }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${props => props.$theme.colors.background};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration} ${props => props.$theme.animation.easing};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      flex-direction: row;
    }
  `}
`;

// Main content wrapper
export const MainContent = styled.main<{ $theme: any }>`
  flex: 1;
  padding-top: ${props => props.$theme.layout.headerHeight};
  
  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      margin-left: ${props.$theme.layout.sidebarWidth};
      padding-top: 0;
    }
  `}
`;

// Container for content with max-width
export const ContentContainer = styled.div<{ $theme: any }>`
  max-width: ${props => props.$theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${props => props.$theme.layout.containerPadding};
  
  ${props => props.$theme.layout.type === 'grid' && css`
    padding: ${props.$theme.spacing.xl};
  `}
`;

// Loading overlay
export const LoadingOverlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const LoadingSpinner = styled.div<{ $theme: any }>`
  width: 40px;
  height: 40px;
  border: 3px solid ${props => props.$theme.colors.border};
  border-top: 3px solid ${props => props.$theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;