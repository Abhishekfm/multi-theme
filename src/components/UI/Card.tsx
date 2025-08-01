import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { Product } from '../../types/theme';
import Button from './Button';

interface CardProps {
  product: Product;
  onClick?: () => void;
}

const CardContainer = styled.div<{ $theme: any }>`
  background: ${props => props.$theme.colors.card};
  border: 1px solid ${props => props.$theme.colors.border};
  border-radius: ${props => props.$theme.layout.borderRadius};
  overflow: hidden;
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration} ${props => props.$theme.animation.easing};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Theme-specific styles */
  ${props => props.$theme.layout.type === 'minimalist' && css`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.$theme.layout.type === 'sidebar' && css`
    background: ${props.$theme.colors.surface};
    border: 2px solid ${props.$theme.colors.border};

    &:hover {
      border-color: ${props.$theme.colors.primary};
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    border-radius: ${props.$theme.spacing.lg};
    background: ${props.$theme.colors.card};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: none;
    overflow: hidden;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary}, ${props.$theme.colors.accent});
    }

    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const ImageContainer = styled.div<{ $theme: any }>`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  ${props => props.$theme.layout.type === 'grid' && css`
    height: 250px;
  `}
`;

const ProductImage = styled.img<{ $theme: any }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }

  ${props => props.$theme.layout.type === 'grid' && css`
    filter: brightness(0.9);

    ${CardContainer}:hover & {
      filter: brightness(1);
      transform: scale(1.1);
    }
  `}
`;

const CardContent = styled.div<{ $theme: any }>`
  padding: ${props => props.$theme.spacing.lg};

  ${props => props.$theme.layout.type === 'grid' && css`
    padding: ${props.$theme.spacing.xl};
  `}
`;

const ProductTitle = styled.h3<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.sm};
  line-height: ${props => props.$theme.typography.lineHeight.tight};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const ProductDescription = styled.p<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.small};
  color: ${props => props.$theme.colors.textSecondary};
  line-height: ${props => props.$theme.typography.lineHeight.normal};
  margin-bottom: ${props => props.$theme.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductFooter = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.$theme.spacing.md};
  margin-top: ${props => props.$theme.spacing.lg};

  ${props => props.$theme.layout.type === 'grid' && css`
    flex-direction: column;
    gap: ${props.$theme.spacing.lg};
  `}
`;

const PriceContainer = styled.div<{ $theme: any }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$theme.spacing.xs};
`;

const Price = styled.span<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.primary};

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.xlarge};
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const Rating = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.xs};
  font-size: ${props => props.$theme.typography.fontSize.small};
  color: ${props => props.$theme.colors.textSecondary};
`;

const Stars = styled.span<{ $theme: any }>`
  color: ${props => props.$theme.colors.accent};
`;

const Card: React.FC<CardProps> = ({ product, onClick }) => {
  const { theme } = useTheme();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push('☆');
    }

    return stars.join('');
  };

  return (
    <CardContainer $theme={theme} onClick={handleClick}>
      <ImageContainer $theme={theme}>
        <ProductImage
          $theme={theme}
          src={product.image}
          alt={product.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Product+Image';
          }}
        />
      </ImageContainer>
      
      <CardContent $theme={theme}>
        <ProductTitle $theme={theme}>{product.title}</ProductTitle>
        <ProductDescription $theme={theme}>
          {product.description}
        </ProductDescription>
        
        <ProductFooter $theme={theme}>
          <PriceContainer $theme={theme}>
            <Price $theme={theme}>${product.price}</Price>
            <Rating $theme={theme}>
              <Stars $theme={theme}>{renderStars(product.rating.rate)}</Stars>
              <span>({product.rating.count})</span>
            </Rating>
          </PriceContainer>
          
          <Button 
            variant="primary" 
            size={theme.layout.type === 'grid' ? 'large' : 'small'}
            onClick={(e) => {
              e.stopPropagation();
              console.log('Add to cart:', product.title);
            }}
          >
            {theme.layout.type === 'grid' ? 'Add to Cart' : 'Add'}
          </Button>
        </ProductFooter>
      </CardContent>
    </CardContainer>
  );
};

export default Card;