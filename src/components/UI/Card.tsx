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
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* Base card styling */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Theme-specific styling */
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

  /* Theme 3: Modern green styling inspired by GetIllustrations - KEEP THIS BEAUTIFUL DESIGN */
  ${props => props.$theme.id === 'theme3' && css`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    box-shadow: 0 8px 32px rgba(16, 185, 129, 0.1);
    position: relative;
    overflow: hidden;

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
      background: rgba(255, 255, 255, 1);
      transform: translateY(-12px) scale(1.03);
      box-shadow: 0 25px 50px rgba(16, 185, 129, 0.2);
      border-color: ${props.$theme.colors.primary};
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

  ${props => props.$theme.id === 'theme3' && css`
    height: 280px;
    background: rgba(255, 255, 255, 0.5);
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
    object-fit: contain;
    padding: ${props.$theme.spacing.lg};
    background: white;
    
    ${CardContainer}:hover & {
      transform: scale(1.1);
    }
  `}

  ${props => props.$theme.id === 'theme3' && css`
    object-fit: contain;
    padding: ${props.$theme.spacing.xl};
    
    ${CardContainer}:hover & {
      transform: scale(1.12) rotate(2deg);
    }
  `}
`;

const ImageOverlay = styled.div<{ $theme: any }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.05));
  opacity: 0;
  transition: opacity 0.4s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }

  ${props => props.$theme.id === 'theme3' && css`
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(245, 158, 11, 0.1));
  `}
`;

const PopularBadge = styled.div<{ $theme: any }>`
  position: absolute;
  top: ${props => props.$theme.spacing.lg};
  right: ${props => props.$theme.spacing.lg};
  background: ${props => props.$theme.colors.accent};
  color: white;
  padding: ${props => props.$theme.spacing.xs} ${props => props.$theme.spacing.sm};
  border-radius: 20px;
  font-size: ${props => props.$theme.typography.fontSize.small};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  ${props => props.$theme.id === 'theme3' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.accent}, #F97316);
  `}
`;

const CardContent = styled.div<{ $theme: any }>`
  padding: ${props => props.$theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${props => props.$theme.spacing.md};

  ${props => props.$theme.layout.type === 'grid' && css`
    padding: ${props.$theme.spacing.xl};
  `}

  ${props => props.$theme.id === 'theme3' && css`
    padding: ${props.$theme.spacing.xxl} ${props.$theme.spacing.xl};
  `}
`;

const ProductCategory = styled.div<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.small};
  color: ${props => props.$theme.colors.textSecondary};
  text-transform: uppercase;
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
  letter-spacing: 0.5px;
  margin-bottom: ${props => props.$theme.spacing.xs};

  ${props => props.$theme.layout.type === 'grid' && css`
    color: ${props.$theme.colors.primary};
    font-weight: ${props.$theme.typography.fontWeight.bold};
  `}

  ${props => props.$theme.id === 'theme3' && css`
    color: ${props.$theme.colors.primary};
    background: rgba(16, 185, 129, 0.1);
    padding: ${props.$theme.spacing.xs} ${props.$theme.spacing.sm};
    border-radius: 8px;
    display: inline-block;
    font-weight: ${props.$theme.typography.fontWeight.bold};
    letter-spacing: 1px;
    margin-bottom: ${props.$theme.spacing.sm};
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

  ${props => props.$theme.id === 'theme3' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: ${props.$theme.typography.fontSize.xlarge};
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
  flex: 1;

  ${props => props.$theme.id === 'theme3' && css`
    font-size: ${props.$theme.typography.fontSize.medium};
  `}
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

  ${props => props.$theme.id === 'theme3' && css`
    border-top: 1px solid rgba(16, 185, 129, 0.2);
    flex-direction: column;
    gap: ${props.$theme.spacing.lg};
    align-items: stretch;
    margin-top: auto;
    padding-top: ${props.$theme.spacing.lg};
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

  ${props => props.$theme.id === 'theme3' && css`
    font-size: 2.5rem;
    text-align: center;
    background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.accent});
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

  const handleAddToCart = () => {
    console.log('Add to cart:', product.title);
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

  // Determine if product is popular (rating > 4.0) - only show for Theme 3
  const isPopular = theme.id === 'theme3' && product.rating.rate > 4.0;

  return (
    <CardContainer $theme={theme} onClick={handleClick}>
      <ImageContainer $theme={theme}>
        {isPopular && <PopularBadge $theme={theme}>Popular</PopularBadge>}
        <ProductImage
          $theme={theme}
          src={product.image}
          alt={product.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Product+Image';
          }}
        />
        <ImageOverlay $theme={theme} />
      </ImageContainer>
      
      <CardContent $theme={theme}>
        <ProductCategory $theme={theme}>
          {product.category}
        </ProductCategory>
        
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
            onClick={handleAddToCart}
          >
            {theme.layout.type === 'grid' ? 'Add to Cart' : 'Add'}
          </Button>
        </ProductFooter>
      </CardContent>
    </CardContainer>
  );
};

export default Card;