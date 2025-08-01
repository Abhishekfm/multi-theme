import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyle, AppContainer, MainContent, LoadingOverlay, LoadingSpinner } from './styles/GlobalStyles';
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
      <LoadingOverlay $isVisible={isLoading}>
        <LoadingSpinner $theme={theme} />
      </LoadingOverlay>
      
      <Router>
        <AppContainer $theme={theme}>
          <Header />
          <MainContent $theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContent>
        </AppContainer>
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
