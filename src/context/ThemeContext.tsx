import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeContextType, ThemeType } from '../types/theme';
import { getTheme } from '../styles/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');
  const [isLoading, setIsLoading] = useState(true);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
      if (savedTheme && ['theme1', 'theme2', 'theme3'].includes(savedTheme)) {
        setCurrentTheme(savedTheme);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save theme to localStorage when changed
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('selectedTheme', currentTheme);
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  }, [currentTheme, isLoading]);

  const changeTheme = (newTheme: ThemeType) => {
    setIsLoading(true);
    
    // Add a small delay for smooth transition
    setTimeout(() => {
      setCurrentTheme(newTheme);
      setIsLoading(false);
    }, 100);
  };

  const theme = getTheme(currentTheme);

  const contextValue: ThemeContextType = {
    currentTheme,
    theme,
    changeTheme,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};