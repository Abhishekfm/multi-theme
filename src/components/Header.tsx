import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ThemeType } from '../types/theme';

const HeaderWrapper = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.$theme.spacing.lg};
  width: 100%;
  height: 100%;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${props.$theme.spacing.xl};
    gap: ${props.$theme.spacing.xl};
    
    @media (max-width: 1024px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: ${props.$theme.spacing.lg};
      gap: ${props.$theme.spacing.md};
    }
  `}
`;

const LogoSection = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.sm};
`;

const Logo = styled(Link)<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.xlarge};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.sm};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};

  &:hover {
    color: ${props => props.$theme.colors.accent};
    transform: scale(1.02);
  }

  ${props => props.$theme.layout.type === 'sidebar' && css`
    font-size: 1.5rem;
    margin-bottom: ${props.$theme.spacing.lg};
    
    @media (max-width: 1024px) {
      font-size: ${props.$theme.typography.fontSize.xlarge};
      margin-bottom: 0;
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const LogoIcon = styled.div<{ $theme: any }>`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, ${props => props.$theme.colors.primary}, ${props => props.$theme.colors.secondary});
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const Navigation = styled.nav<{ $theme: any; $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.lg};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    flex-direction: column;
    align-items: flex-start;
    gap: ${props.$theme.spacing.md};
    width: 100%;
    
    @media (max-width: 1024px) {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: ${props.$theme.colors.surface};
      backdrop-filter: blur(20px);
      border-bottom: 1px solid ${props.$theme.colors.border};
      flex-direction: column;
      padding: ${props.$theme.spacing.lg};
      display: ${props.$isOpen ? 'flex' : 'none'};
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
  `}

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.$theme.colors.surface};
    backdrop-filter: blur(20px);
    border-bottom: 1px solid ${props => props.$theme.colors.border};
    flex-direction: column;
    padding: ${props => props.$theme.spacing.lg};
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
`;

const NavLink = styled(Link)<{ $theme: any; $isActive?: boolean }>`
  color: ${props => props.$isActive ? props.$theme.colors.primary : props.$theme.colors.textSecondary};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? props.$theme.typography.fontWeight.medium : props.$theme.typography.fontWeight.normal};
  font-size: ${props => props.$theme.typography.fontSize.medium};
  padding: ${props => props.$theme.spacing.sm} ${props => props.$theme.spacing.md};
  border-radius: ${props => props.$theme.layout.borderRadius};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};
  position: relative;
  
  &:hover {
    color: ${props => props.$theme.colors.primary};
    background: ${props => props.$theme.colors.hover};
  }

  ${props => props.$isActive && css`
    background: ${props.$theme.colors.primary}15;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: ${props.$theme.colors.primary};
      border-radius: 1px;
    }
  `}

  ${props => props.$theme.layout.type === 'sidebar' && css`
    width: 100%;
    padding: ${props.$theme.spacing.md};
    
    &::after {
      display: none;
    }
    
    ${props.$isActive && css`
      background: ${props.$theme.colors.primary};
      color: white;
      box-shadow: 0 4px 12px ${props.$theme.colors.primary}40;
    `}
    
    @media (max-width: 1024px) {
      width: auto;
      
      &::after {
        display: ${props.$isActive ? 'block' : 'none'};
      }
    }
  `}
`;

const HeaderActions = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.md};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    width: 100%;
    margin-top: auto;
    
    @media (max-width: 1024px) {
      width: auto;
      margin-top: 0;
    }
  `}
`;

const ThemeSelector = styled.div<{ $theme: any }>`
  position: relative;
  z-index: 1001;
`;

const ThemeButton = styled.button<{ $theme: any }>`
  background: ${props => props.$theme.colors.surface};
  border: 2px solid ${props => props.$theme.colors.border};
  color: ${props => props.$theme.colors.text};
  padding: ${props => props.$theme.spacing.sm} ${props => props.$theme.spacing.md};
  border-radius: ${props => props.$theme.layout.borderRadius};
  font-size: ${props => props.$theme.typography.fontSize.small};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.sm};
  min-width: 140px;
  justify-content: space-between;

  &:hover {
    border-color: ${props => props.$theme.colors.primary};
    background: ${props => props.$theme.colors.hover};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${props => props.$theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.$theme.colors.primary}30;
  }

  ${props => props.$theme.layout.type === 'grid' && css`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  `}
`;

const ThemeIcon = styled.span<{ $theme: any }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => {
    if (props.$theme.id === 'theme1') return props.$theme.colors.primary;
    if (props.$theme.id === 'theme2') return props.$theme.colors.primary;
    return `linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary})`;
  }};
  border: 2px solid ${props => props.$theme.colors.surface};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownIcon = styled.span<{ $isOpen: boolean; $theme: any }>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
  color: ${props => props.$theme.colors.textSecondary};
`;

const ThemeDropdown = styled.div<{ $theme: any; $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + ${props => props.$theme.spacing.xs});
  right: 0;
  background: ${props => props.$theme.colors.card};
  border: 1px solid ${props => props.$theme.colors.border};
  border-radius: ${props => props.$theme.layout.borderRadius};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'}) scale(${props => props.$isOpen ? '1' : '0.95'});
  transition: all 0.2s ease;
  min-width: 180px;
  overflow: hidden;
`;

const ThemeOption = styled.button<{ $theme: any; $isActive: boolean; $optionTheme: any }>`
  width: 100%;
  text-align: left;
  padding: ${props => props.$theme.spacing.md};
  background: ${props => props.$isActive ? props.$theme.colors.hover : 'transparent'};
  color: ${props => props.$theme.colors.text};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.sm};
  font-size: ${props => props.$theme.typography.fontSize.small};

  &:hover {
    background: ${props => props.$theme.colors.hover};
  }

  &:first-child {
    border-radius: ${props => props.$theme.layout.borderRadius} ${props => props.$theme.layout.borderRadius} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${props => props.$theme.layout.borderRadius} ${props => props.$theme.layout.borderRadius};
  }
`;

const ThemePreview = styled.div<{ $optionTheme: any }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: ${props => {
    if (props.$optionTheme.id === 'theme1') return props.$optionTheme.colors.primary;
    if (props.$optionTheme.id === 'theme2') return props.$optionTheme.colors.background;
    return `linear-gradient(135deg, ${props.$optionTheme.colors.primary}, ${props.$optionTheme.colors.secondary})`;
  }};
  border: 1px solid ${props => props.$optionTheme.colors.border};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MobileMenuButton = styled.button<{ $theme: any }>`
  display: none;
  background: none;
  border: none;
  color: ${props => props.$theme.colors.text};
  font-size: 24px;
  cursor: pointer;
  padding: ${props => props.$theme.spacing.sm};
  border-radius: ${props => props.$theme.layout.borderRadius};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${props => props.$theme.colors.hover};
  }

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (max-width: 1024px) {
      display: block;
    }
  `}

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const { theme, currentTheme, changeTheme } = useTheme();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const themes: { id: ThemeType; name: string; theme: any }[] = [
    { id: 'theme1', name: 'Modern Minimalist', theme: theme },
    { id: 'theme2', name: 'Dark Professional', theme: theme },
    { id: 'theme3', name: 'Vibrant Modern', theme: theme },
  ];

  const handleThemeChange = (themeId: ThemeType) => {
    changeTheme(themeId);
    setIsDropdownOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <HeaderWrapper $theme={theme}>
      <LogoSection $theme={theme}>
        <Logo $theme={theme} to="/">
          <LogoIcon $theme={theme}>T</LogoIcon>
          ThemeApp
        </Logo>
      </LogoSection>

      <Navigation $theme={theme} $isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            $theme={theme}
            $isActive={location.pathname === item.path}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </Navigation>

      <HeaderActions $theme={theme}>
        <ThemeSelector $theme={theme}>
          <ThemeButton
            $theme={theme}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <ThemeIcon $theme={theme} />
            <span>{themes.find(t => t.id === currentTheme)?.name}</span>
            <DropdownIcon $isOpen={isDropdownOpen} $theme={theme}>
              ▼
            </DropdownIcon>
          </ThemeButton>
          
          <ThemeDropdown $theme={theme} $isOpen={isDropdownOpen}>
            {themes.map((themeOption) => (
              <ThemeOption
                key={themeOption.id}
                $theme={theme}
                $optionTheme={themeOption.theme}
                $isActive={currentTheme === themeOption.id}
                onClick={() => handleThemeChange(themeOption.id)}
              >
                <ThemePreview $optionTheme={themeOption.theme} />
                {themeOption.name}
              </ThemeOption>
            ))}
          </ThemeDropdown>
        </ThemeSelector>

        <MobileMenuButton
          $theme={theme}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </MobileMenuButton>
      </HeaderActions>
    </HeaderWrapper>
  );
};

export default Header;