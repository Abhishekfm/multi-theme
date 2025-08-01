import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ThemeType } from '../types/theme';

const HeaderContainer = styled.header<{ $theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.$theme.layout.headerHeight};
  background: ${props => props.$theme.colors.surface};
  border-bottom: 1px solid ${props => props.$theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${props => props.$theme.spacing.lg};
  z-index: 1000;
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration} ${props => props.$theme.animation.easing};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      position: relative;
      width: ${props.$theme.layout.sidebarWidth};
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      padding: ${props.$theme.spacing.xl} ${props.$theme.spacing.lg};
      border-right: 1px solid ${props.$theme.colors.border};
      border-bottom: none;
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: ${props.$theme.colors.card};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 ${props.$theme.layout.borderRadius} ${props.$theme.layout.borderRadius};
  `}
`;

const Logo = styled.div<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.$theme.colors.accent};
  }

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      font-size: ${props.$theme.typography.fontSize.xlarge};
      margin-bottom: ${props.$theme.spacing.xl};
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.xlarge};
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const Navigation = styled.nav<{ $theme: any; $isOpen?: boolean }>`
  display: none;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: ${props.$theme.spacing.lg};
      margin-bottom: auto;
    }
  `}

  @media (max-width: 767px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.$theme.colors.surface};
    flex-direction: column;
    padding: ${props => props.$theme.spacing.lg};
    border-bottom: 1px solid ${props => props.$theme.colors.border};
  }
`;

const NavLink = styled(Link)<{ $theme: any; $isActive?: boolean }>`
  color: ${props => props.$isActive ? props.$theme.colors.primary : props.$theme.colors.textSecondary};
  font-weight: ${props => props.$isActive ? props.$theme.typography.fontWeight.medium : props.$theme.typography.fontWeight.normal};
  padding: ${props => props.$theme.spacing.sm} 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.$theme.colors.primary};
    border-bottom-color: ${props => props.$theme.colors.primary};
  }

  ${props => props.$theme.layout.type === 'sidebar' && css`
    padding: ${props.$theme.spacing.md};
    border-radius: ${props.$theme.layout.borderRadius};
    border-bottom: none;
    background: ${props.$isActive ? props.$theme.colors.hover : 'transparent'};

    &:hover {
      background: ${props.$theme.colors.hover};
      border-bottom-color: transparent;
    }
  `}
`;

const HeaderActions = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.md};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      flex-direction: column;
      gap: ${props.$theme.spacing.lg};
    }
  `}
`;

const ThemeSelector = styled.div<{ $theme: any }>`
  position: relative;
`;

const ThemeButton = styled.button<{ $theme: any }>`
  background: ${props => props.$theme.colors.primary};
  color: ${props => props.$theme.colors.surface};
  padding: ${props => props.$theme.spacing.sm} ${props => props.$theme.spacing.md};
  border-radius: ${props => props.$theme.layout.borderRadius};
  font-size: ${props => props.$theme.typography.fontSize.small};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.$theme.colors.accent};
  }

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    border-radius: ${props.$theme.spacing.lg};
    padding: ${props.$theme.spacing.sm} ${props.$theme.spacing.lg};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transform: perspective(1px) translateZ(0);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  `}
`;

const ThemeDropdown = styled.div<{ $theme: any; $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + ${props => props.$theme.spacing.xs});
  right: 0;
  background: ${props => props.$theme.colors.card};
  border: 1px solid ${props => props.$theme.colors.border};
  border-radius: ${props => props.$theme.layout.borderRadius};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
  z-index: 1001;
  min-width: 160px;
`;

const ThemeOption = styled.button<{ $theme: any; $isActive: boolean }>`
  width: 100%;
  text-align: left;
  padding: ${props => props.$theme.spacing.md};
  background: ${props => props.$isActive ? props.$theme.colors.hover : 'transparent'};
  color: ${props => props.$theme.colors.text};
  border: none;
  transition: background-color 0.3s ease;

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

const MobileMenuButton = styled.button<{ $theme: any }>`
  display: block;
  background: none;
  color: ${props => props.$theme.colors.text};
  font-size: ${props => props.$theme.typography.fontSize.large};
  padding: ${props => props.$theme.spacing.sm};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      display: none;
    }
  `}

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const { theme, currentTheme, changeTheme } = useTheme();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const themes: { id: ThemeType; name: string }[] = [
    { id: 'theme1', name: 'Minimalist' },
    { id: 'theme2', name: 'Dark Professional' },
    { id: 'theme3', name: 'Playful' },
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
    <HeaderContainer $theme={theme}>
      <Logo $theme={theme} as={Link} to="/">
        ThemeApp
      </Logo>

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
            {themes.find(t => t.id === currentTheme)?.name} ▼
          </ThemeButton>
          
          <ThemeDropdown $theme={theme} $isOpen={isDropdownOpen}>
            {themes.map((themeOption) => (
              <ThemeOption
                key={themeOption.id}
                $theme={theme}
                $isActive={currentTheme === themeOption.id}
                onClick={() => handleThemeChange(themeOption.id)}
              >
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
    </HeaderContainer>
  );
};

export default Header;