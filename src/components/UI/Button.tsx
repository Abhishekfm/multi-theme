import styled, { css } from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{ 
  $theme: any; 
  $variant: string; 
  $size: string; 
  $disabled: boolean;
}>`
  border: none;
  border-radius: ${props => props.$theme.layout.borderRadius};
  font-family: ${props => props.$theme.typography.fontFamily};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration} ${props => props.$theme.animation.easing};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  position: relative;
  overflow: hidden;

  /* Size variations */
  ${props => props.$size === 'small' && css`
    padding: ${props.$theme.spacing.sm} ${props.$theme.spacing.md};
    font-size: ${props.$theme.typography.fontSize.small};
  `}

  ${props => props.$size === 'medium' && css`
    padding: ${props.$theme.spacing.md} ${props.$theme.spacing.lg};
    font-size: ${props.$theme.typography.fontSize.medium};
  `}

  ${props => props.$size === 'large' && css`
    padding: ${props.$theme.spacing.lg} ${props.$theme.spacing.xl};
    font-size: ${props.$theme.typography.fontSize.large};
  `}

  /* Primary variant */
  ${props => props.$variant === 'primary' && css`
    background: ${props.$theme.colors.primary};
    color: ${props.$theme.colors.surface};

    &:hover:not(:disabled) {
      background: ${props.$theme.colors.accent};
    }
  `}

  /* Secondary variant */
  ${props => props.$variant === 'secondary' && css`
    background: ${props.$theme.colors.secondary};
    color: ${props.$theme.colors.surface};

    &:hover:not(:disabled) {
      background: ${props.$theme.colors.textSecondary};
    }
  `}

  /* Outline variant */
  ${props => props.$variant === 'outline' && css`
    background: transparent;
    color: ${props.$theme.colors.primary};
    border: 2px solid ${props.$theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${props.$theme.colors.primary};
      color: ${props.$theme.colors.surface};
    }
  `}

  /* Theme-specific styles */
  ${props => props.$theme.layout.type === 'minimalist' && css`
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  `}

  ${props => props.$theme.layout.type === 'sidebar' && css`
    font-weight: ${props.$theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover:not(:disabled) {
      transform: scale(1.05);
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    border-radius: ${props.$theme.spacing.lg};
    background: ${props.$variant === 'primary' ? 
      `linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary})` : 
      props.$variant === 'secondary' ?
      `linear-gradient(45deg, ${props.$theme.colors.secondary}, ${props.$theme.colors.accent})` :
      'transparent'};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transform: perspective(1px) translateZ(0);

    &:hover:not(:disabled) {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    &:active:not(:disabled) {
      transform: translateY(-1px) scale(0.98);
    }

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
    }

    &:active:not(:disabled)::before {
      width: 300px;
      height: 300px;
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton
      $theme={theme}
      $variant={variant}
      $size={size}
      $disabled={disabled}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;