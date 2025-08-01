import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyle, AppContainer, HeaderContainer, MainContent, ScrollableContent, LoadingOverlay, LoadingSpinner, GradientBackground } from './styles/GlobalStyles';
import { useTheme } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// App content wrapper to access theme context
const AppContent: React.FC = () => {
  const { theme, isLoading } = useTheme();

  return (
    <>
      <GlobalStyle $theme={theme} />
      <LoadingOverlay $isVisible={isLoading} $theme={theme}>
        <LoadingSpinner $theme={theme} />
      </LoadingOverlay>
      
      <Router>
        <GradientBackground $theme={theme}>
          <AppContainer $theme={theme}>
            <HeaderContainer $theme={theme}>
              <Header />
            </HeaderContainer>
            
            <MainContent $theme={theme}>
              <ScrollableContent $theme={theme}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </ScrollableContent>
            </MainContent>
          </AppContainer>
        </GradientBackground>
      </Router>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
