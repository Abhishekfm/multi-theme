import styled, { createGlobalStyle, css } from "styled-components";

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
    font-family: ${(props) => props.$theme.typography.fontFamily};
    background: ${(props) => props.$theme.colors.background};
    color: ${(props) => props.$theme.colors.text};
    line-height: ${(props) => props.$theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: ${(props) => props.$theme.animation.transition} ${(props) =>
  props.$theme.animation.duration} ${(props) => props.$theme.animation.easing};

    /* Prevent scrolling on body for sidebar layout */
    ${(props) =>
      props.$theme.layout.type === "sidebar" &&
      css`
        @media (min-width: 768px) {
          overflow: hidden;
          height: 100vh;
        }

        @media (max-width: 767px) {
          overflow: visible;
          height: auto;
        }
      `}

    /* Theme 3: Green gradient background */
    ${(props) =>
      props.$theme.id === "theme3" &&
      css`
        background: ${props.$theme.colors.background};
        position: relative;

        &::before {
          content: "";
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
    display: flex;
    flex-direction: column;
    width: 100%;

    /* For sidebar layout, make root a flex container */
    ${(props) =>
      props.$theme.layout.type === "sidebar" &&
      css`
        @media (min-width: 768px) {
          flex-direction: row;
          height: 100vh;
          overflow: hidden;
        }

        @media (max-width: 767px) {
          flex-direction: column;
          height: auto;
          overflow: visible;
        }
      `}
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.$theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.$theme.colors.border};
    border-radius: 4px;
    transition: background 0.2s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.$theme.colors.secondary};
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${(props) => props.$theme.colors.primary};
    outline-offset: 2px;
  }

  button:focus {
    outline-offset: 0;
  }

  /* Text selection */
  ::selection {
    background: ${(props) => props.$theme.colors.primary}33;
    color: ${(props) => props.$theme.colors.text};
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
`;

// Layout wrapper that adapts to theme
export const AppContainer = styled.div<{ $theme: any }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.$theme.colors.background};
  transition: ${(props) => props.$theme.animation.transition}
    ${(props) => props.$theme.animation.duration}
    ${(props) => props.$theme.animation.easing};
  position: relative;

  ${(props) =>
    props.$theme.layout.type === "sidebar" &&
    css`
      @media (min-width: 768px) {
        flex-direction: row;
        height: 100vh;
        overflow: hidden;
      }

      @media (max-width: 767px) {
        flex-direction: column;
        height: auto;
        overflow: visible;
      }
    `}
`;

// Header that adapts to each theme
export const HeaderContainer = styled.header<{ $theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.$theme.layout.headerHeight};
  background: ${(props) => props.$theme.colors.surface};
  border-bottom: 1px solid ${(props) => props.$theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${(props) => props.$theme.spacing.lg};
  z-index: 1000;
  transition: ${(props) => props.$theme.animation.transition}
    ${(props) => props.$theme.animation.duration}
    ${(props) => props.$theme.animation.easing};

  ${(props) =>
    props.$theme.layout.type === "sidebar" &&
    css`
      @media (min-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        width: ${props.$theme.layout.sidebarWidth};
        height: 100vh;
        flex-direction: column;
        justify-content: flex-start;
        padding: ${props.$theme.spacing.xl} ${props.$theme.spacing.lg};
        border-right: 1px solid ${props.$theme.colors.border};
        border-bottom: none;
        overflow-y: auto;
        right: auto;
      }

      @media (max-width: 767px) {
        height: ${props.$theme.layout.headerHeight};
        flex-direction: row;
        justify-content: space-between;
        padding: 0 ${props.$theme.spacing.lg};
        border-bottom: 1px solid ${props.$theme.colors.border};
        border-right: none;
        overflow: visible;
      }
    `}

  ${(props) =>
    props.$theme.id === "theme3" &&
    css`
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(16, 185, 129, 0.2);
      box-shadow: 0 4px 30px rgba(16, 185, 129, 0.1);
    `}
`;

// Main content wrapper
export const MainContent = styled.main<{ $theme: any }>`
  flex: 1;
  padding-top: ${(props) => props.$theme.layout.headerHeight};

  ${(props) =>
    props.$theme.layout.type === "sidebar" &&
    css`
      @media (min-width: 768px) {
        margin-left: ${props.$theme.layout.sidebarWidth};
        padding-top: 0;
        height: 100vh;
        overflow-y: auto;
      }

      @media (max-width: 767px) {
        padding-top: ${props.$theme.layout.headerHeight};
        margin-left: 0;
        height: auto;
        overflow-y: visible;
      }
    `}
`;

// Scrollable content container
export const ScrollableContent = styled.div<{ $theme: any }>`
  height: 100%;
  overflow-y: auto;
  padding: ${(props) => props.$theme.spacing.xl};

  ${(props) =>
    props.$theme.layout.type === "sidebar" &&
    css`
      padding: ${props.$theme.spacing.xxl};

      @media (max-width: 767px) {
        padding: ${props.$theme.spacing.xl};
      }

      @media (min-width: 768px) {
        height: auto;
        overflow-y: visible;
      }
    `}

  ${(props) =>
    props.$theme.layout.type === "grid" &&
    css`
      padding: ${props.$theme.spacing.xxl};
    `}
`;

// Container for content with max-width
export const ContentContainer = styled.div<{ $theme: any }>`
  max-width: ${(props) => props.$theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.$theme.layout.containerPadding};
  width: 100%;

  ${(props) =>
    props.$theme.layout.type === "grid" &&
    css`
      padding: ${props.$theme.spacing.xl};
    `}

  ${(props) =>
    props.$theme.layout.type === "sidebar" &&
    css`
      max-width: none;
      padding: 0;
    `}
`;

// Enhanced loading states
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
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transition: all 0.3s ease;

  ${(props) =>
    props.$theme.id === "theme2" &&
    css`
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(12px);
    `}

  ${(props) =>
    props.$theme.id === "theme3" &&
    css`
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(15px);
    `}
`;

export const LoadingSpinner = styled.div<{ $theme: any }>`
  width: 48px;
  height: 48px;
  border: 3px solid ${(props) => props.$theme.colors.border};
  border-top: 3px solid ${(props) => props.$theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Modern glassmorphism card (only for Theme 3)
export const GlassCard = styled.div<{ $theme: any }>`
  background: ${(props) => props.$theme.colors.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${(props) => props.$theme.colors.border};
  border-radius: ${(props) => props.$theme.layout.borderRadius};
  padding: ${(props) => props.$theme.spacing.xl};
  transition: ${(props) => props.$theme.animation.transition}
    ${(props) => props.$theme.animation.duration};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  ${(props) =>
    props.$theme.id === "theme3" &&
    css`
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(16, 185, 129, 0.2);
      box-shadow: 0 8px 32px rgba(16, 185, 129, 0.1);

      &:hover {
        background: rgba(255, 255, 255, 1);
        border-color: ${props.$theme.colors.primary};
        box-shadow: 0 16px 48px rgba(16, 185, 129, 0.2);
        transform: translateY(-4px);
      }
    `}
`;

// Gradient background for vibrant theme
export const GradientBackground = styled.div<{ $theme: any }>`
  ${(props) =>
    props.$theme.id === "theme3" &&
    css`
      min-height: 100vh;
      position: relative;
    `}
`;
