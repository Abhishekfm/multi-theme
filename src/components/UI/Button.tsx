import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const StyledButton = styled.button<{ 
  $theme: any; 
  $variant: string; 
  $size: string; 
  $disabled: boolean;
  $fullWidth: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.$theme.spacing.sm};
  border: none;
  border-radius: ${props => props.$theme.layout.borderRadius};
  font-family: ${props => props.$theme.typography.fontFamily};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  overflow: hidden;

  /* Size variations */
  ${props => props.$size === 'small' && css`
    padding: ${props.$theme.spacing.sm} ${props.$theme.spacing.md};
    font-size: ${props.$theme.typography.fontSize.small};
    min-height: 36px;
  `}

  ${props => props.$size === 'medium' && css`
    padding: ${props.$theme.spacing.md} ${props.$theme.spacing.lg};
    font-size: ${props.$theme.typography.fontSize.medium};
    min-height: 44px;
  `}

  ${props => props.$size === 'large' && css`
    padding: ${props.$theme.spacing.lg} ${props.$theme.spacing.xl};
    font-size: ${props.$theme.typography.fontSize.large};
    min-height: 52px;
  `}

  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transition: width 0.6s, height 0.6s;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  &:active:not(:disabled)::before {
    width: 300px;
    height: 300px;
  }

  /* Focus styles */
  &:focus:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.$theme.colors.primary}40;
  }

  /* Primary variant */
  ${props => props.$variant === 'primary' && css`
    background: ${props.$theme.colors.primary};
    color: white;
    box-shadow: 0 2px 8px ${props.$theme.colors.primary}30;

    &:hover:not(:disabled) {
      background: ${props.$theme.colors.accent};
      transform: translateY(-2px);
      box-shadow: 0 4px 16px ${props.$theme.colors.primary}40;
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px ${props.$theme.colors.primary}30;
    }

    ${props.$theme.layout.type === 'grid' && css`
      background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
      box-shadow: 0 4px 20px ${props.$theme.colors.primary}30;

      &:hover:not(:disabled) {
        background: linear-gradient(135deg, ${props.$theme.colors.accent}, ${props.$theme.colors.primary});
        transform: translateY(-3px);
        box-shadow: 0 8px 30px ${props.$theme.colors.primary}40;
      }
    `}
  `}

  /* Secondary variant */
  ${props => props.$variant === 'secondary' && css`
    background: ${props.$theme.colors.secondary};
    color: white;
    box-shadow: 0 2px 8px ${props.$theme.colors.secondary}30;

    &:hover:not(:disabled) {
      background: ${props.$theme.colors.textSecondary};
      transform: translateY(-2px);
      box-shadow: 0 4px 16px ${props.$theme.colors.secondary}40;
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px ${props.$theme.colors.secondary}30;
    }
  `}

  /* Outline variant */
  ${props => props.$variant === 'outline' && css`
    background: transparent;
    color: ${props.$theme.colors.primary};
    border: 2px solid ${props.$theme.colors.primary};
    box-shadow: none;

    &:hover:not(:disabled) {
      background: ${props.$theme.colors.primary};
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 16px ${props.$theme.colors.primary}30;
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `}

  /* Ghost variant */
  ${props => props.$variant === 'ghost' && css`
    background: transparent;
    color: ${props.$theme.colors.text};
    box-shadow: none;

    &:hover:not(:disabled) {
      background: ${props.$theme.colors.hover};
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      background: ${props.$theme.colors.border};
    }
  `}

  /* Theme-specific enhancements */
  ${props => props.$theme.layout.type === 'sidebar' && css`
    font-weight: ${props.$theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover:not(:disabled) {
      transform: translateY(-2px) scale(1.02);
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    border-radius: ${props.$theme.spacing.md};
    backdrop-filter: blur(10px);

    ${props.$variant === 'primary' && css`
      &:hover:not(:disabled) {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 12px 40px ${props.$theme.colors.primary}40;
      }
    `}

    ${props.$variant === 'outline' && css`
      border: 2px solid transparent;
      background: linear-gradient(${props.$theme.colors.surface}, ${props.$theme.colors.surface}) padding-box,
                  linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary}) border-box;

      &:hover:not(:disabled) {
        background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
        color: white;
      }
    `}
  `}
`;

const ButtonIcon = styled.span<{ $theme: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton
      $theme={theme}
      $variant={variant}
      $size={size}
      $disabled={disabled}
      $fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {icon && <ButtonIcon $theme={theme}>{icon}</ButtonIcon>}
      {children}
    </StyledButton>
  );
};

export default Button;