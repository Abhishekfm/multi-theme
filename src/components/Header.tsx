import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ThemeType } from '../types/theme';

const HeaderWrapper = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.$theme.spacing.xl};
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  
  ${props => props.$theme.layout.type === 'sidebar' && css`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${props.$theme.spacing.xxl};
    gap: ${props.$theme.spacing.xl};
    
    @media (max-width: 1024px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: ${props.$theme.spacing.xl};
      gap: ${props.$theme.spacing.md};
    }
  `}
`;

const LogoSection = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.md};
`;

const Logo = styled(Link)<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.xlarge};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.md};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};

  &:hover {
    transform: scale(1.02);
  }

  ${props => props.$theme.layout.type === 'sidebar' && css`
    font-size: 1.875rem;
    color: ${props.$theme.colors.text};
    margin-bottom: ${props.$theme.spacing.xl};
    
    @media (max-width: 1024px) {
      font-size: ${props.$theme.typography.fontSize.xlarge};
      margin-bottom: 0;
    }
  `}

  ${props => props.$theme.id === 'theme1' && css`
    color: white;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const LogoIcon = styled.div<{ $theme: any }>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 24px;
  position: relative;
  overflow: hidden;

  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  `}

  ${props => props.$theme.id === 'theme2' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    box-shadow: 0 4px 20px rgba(196, 181, 160, 0.4);
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
  `}
`;

const Navigation = styled.nav<{ $theme: any; $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.xl};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    flex-direction: column;
    align-items: flex-start;
    gap: ${props.$theme.spacing.lg};
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
      padding: ${props.$theme.spacing.xl};
      display: ${props.$isOpen ? 'flex' : 'none'};
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
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
    padding: ${props => props.$theme.spacing.xl};
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    z-index: 100;
    border-radius: 0 0 ${props => props.$theme.layout.borderRadius} ${props => props.$theme.layout.borderRadius};
  }
`;

const NavLink = styled(Link)<{ $theme: any; $isActive?: boolean }>`
  color: ${props => props.$isActive ? props.$theme.colors.primary : props.$theme.colors.text};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? props.$theme.typography.fontWeight.bold : props.$theme.typography.fontWeight.medium};
  font-size: ${props => props.$theme.typography.fontSize.medium};
  padding: ${props => props.$theme.spacing.md} ${props => props.$theme.spacing.lg};
  border-radius: ${props => props.$theme.layout.borderRadius};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};
  position: relative;
  
  &:hover {
    color: ${props => props.$theme.colors.primary};
    background: ${props => props.$theme.colors.hover};
    transform: translateY(-2px);
  }

  ${props => props.$isActive && css`
    background: ${props.$theme.colors.card};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid ${props.$theme.colors.border};
  `}

  ${props => props.$theme.id === 'theme1' && css`
    color: ${props.$isActive ? props.$theme.colors.primary : 'white'};
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(20px);
    }
    
    ${props.$isActive && css`
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      color: ${props.$theme.colors.primary};
    `}
  `}

  ${props => props.$theme.layout.type === 'sidebar' && css`
    width: 100%;
    padding: ${props.$theme.spacing.lg};
    border-radius: ${props.$theme.layout.borderRadius};
    
    ${props.$isActive && css`
      background: ${props.$theme.colors.primary};
      color: white;
      box-shadow: 0 4px 20px ${props.$theme.colors.primary}40;
    `}
    
    @media (max-width: 1024px) {
      width: auto;
    }
  `}
`;

const HeaderActions = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.lg};

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
  background: ${props => props.$theme.colors.card};
  border: 1px solid ${props => props.$theme.colors.border};
  color: ${props => props.$theme.colors.text};
  padding: ${props => props.$theme.spacing.md} ${props => props.$theme.spacing.lg};
  border-radius: ${props => props.$theme.layout.borderRadius};
  font-size: ${props => props.$theme.typography.fontSize.small};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.sm};
  min-width: 180px;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${props => props.$theme.colors.hover};
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.$theme.colors.primary}40;
  }

  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  `}

  ${props => props.$theme.id === 'theme2' && css`
    background: ${props.$theme.colors.surface};
    border: 1px solid ${props.$theme.colors.border};
    
    &:hover {
      background: ${props.$theme.colors.hover};
      border-color: ${props.$theme.colors.primary};
    }
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(16, 185, 129, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 1);
      border-color: ${props.$theme.colors.primary};
    }
  `}
`;

const ThemeIcon = styled.span<{ $theme: any }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.$theme.colors.surface};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: ${props => {
    if (props.$theme.id === 'theme1') return 'linear-gradient(135deg, #3B82F6, #1E40AF)';
    if (props.$theme.id === 'theme2') return 'linear-gradient(135deg, #C4B5A0, #8B7355)';
    return 'linear-gradient(135deg, #10B981, #059669)';
  }};
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
  
  ${props => props.$theme.id === 'theme1' && css`
    color: rgba(255, 255, 255, 0.8);
  `}
`;

const ThemeDropdown = styled.div<{ $theme: any; $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + ${props => props.$theme.spacing.sm});
  right: 0;
  background: ${props => props.$theme.colors.card};
  border: 1px solid ${props => props.$theme.colors.border};
  border-radius: ${props => props.$theme.layout.borderRadius};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'}) scale(${props => props.$isOpen ? '1' : '0.95'});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 220px;
  overflow: hidden;

  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.3);
  `}
`;

const ThemeOption = styled.button<{ $theme: any; $isActive: boolean; $optionTheme: any }>`
  width: 100%;
  text-align: left;
  padding: ${props => props.$theme.spacing.lg};
  background: ${props => props.$isActive ? props.$theme.colors.hover : 'transparent'};
  color: ${props => props.$theme.colors.text};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.md};
  font-size: ${props => props.$theme.typography.fontSize.medium};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};

  &:hover {
    background: ${props => props.$theme.colors.hover};
    transform: translateX(4px);
  }

  ${props => props.$theme.id === 'theme1' && css`
    color: white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `}
`;

const ThemePreview = styled.div<{ $optionTheme: any }>`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: ${props => {
    if (props.$optionTheme === 'theme1') return 'linear-gradient(135deg, #3B82F6, #1E40AF)';
    if (props.$optionTheme === 'theme2') return 'linear-gradient(135deg, #C4B5A0, #8B7355)';
    return 'linear-gradient(135deg, #10B981, #059669)';
  }};
`;

const MobileMenuButton = styled.button<{ $theme: any }>`
  display: none;
  background: ${props => props.$theme.colors.card};
  border: 1px solid ${props => props.$theme.colors.border};
  color: ${props => props.$theme.colors.text};
  font-size: 20px;
  cursor: pointer;
  padding: ${props => props.$theme.spacing.md};
  border-radius: ${props => props.$theme.layout.borderRadius};
  transition: all 0.2s ease;
  backdrop-filter: blur(20px);

  &:hover {
    background: ${props => props.$theme.colors.hover};
    transform: translateY(-2px);
  }

  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  `}

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

  const themes: { id: ThemeType; name: string }[] = [
    { id: 'theme1', name: 'Glassmorphism Modern' },
    { id: 'theme2', name: 'Dark Elegant' },
    { id: 'theme3', name: 'Vibrant Green' },
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ThemeIcon $theme={theme} />
              <span>{themes.find(t => t.id === currentTheme)?.name}</span>
            </div>
            <DropdownIcon $isOpen={isDropdownOpen} $theme={theme}>
              ▼
            </DropdownIcon>
          </ThemeButton>
          
          <ThemeDropdown $theme={theme} $isOpen={isDropdownOpen}>
            {themes.map((themeOption) => (
              <ThemeOption
                key={themeOption.id}
                $theme={theme}
                $optionTheme={themeOption.id}
                $isActive={currentTheme === themeOption.id}
                onClick={() => handleThemeChange(themeOption.id)}
              >
                <ThemePreview $optionTheme={themeOption.id} />
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