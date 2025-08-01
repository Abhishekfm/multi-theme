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
  border-radius: ${props => props.$theme.layout.borderRadius};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* Base card styling */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.$theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  /* Theme-specific styling */
  ${props => props.$theme.layout.type === 'minimalist' && css`
    border: 1px solid ${props.$theme.colors.border};
    
    &:hover {
      border-color: ${props.$theme.colors.primary};
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.$theme.layout.type === 'sidebar' && css`
    background: ${props.$theme.colors.surface};
    border: 2px solid ${props.$theme.colors.border};
    border-radius: ${props.$theme.layout.borderRadius};

    &:hover {
      border-color: ${props.$theme.colors.primary};
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    }
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: ${props.$theme.colors.card};
    border: none;
    border-radius: ${props.$theme.spacing.lg};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
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
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const ImageContainer = styled.div<{ $theme: any }>`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  background: ${props => props.$theme.colors.surface};

  ${props => props.$theme.layout.type === 'grid' && css`
    height: 280px;
  `}

  ${props => props.$theme.layout.type === 'sidebar' && css`
    height: 220px;
  `}
`;

const ProductImage = styled.img<{ $theme: any }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${CardContainer}:hover & {
    transform: scale(1.08);
  }

  ${props => props.$theme.layout.type === 'grid' && css`
    object-fit: contain;
    padding: ${props.$theme.spacing.lg};
    background: white;
    
    ${CardContainer}:hover & {
      transform: scale(1.05);
    }
  `}
`;

const ImageOverlay = styled.div<{ $theme: any }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.primary}10, ${props.$theme.colors.secondary}10);
  `}
`;

const CardContent = styled.div<{ $theme: any }>`
  padding: ${props => props.$theme.spacing.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${props => props.$theme.spacing.md};

  ${props => props.$theme.layout.type === 'grid' && css`
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
`;

const ProductTitle = styled.h3<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  line-height: ${props => props.$theme.typography.lineHeight.tight};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: ${props => props.$theme.spacing.sm};

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.xlarge};
    background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const ProductDescription = styled.p<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.small};
  color: ${props => props.$theme.colors.textSecondary};
  line-height: ${props => props.$theme.typography.lineHeight.normal};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.medium};
  `}
`;

const ProductFooter = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.$theme.spacing.md};
  margin-top: auto;
  padding-top: ${props => props.$theme.spacing.lg};
  border-top: 1px solid ${props => props.$theme.colors.border};

  ${props => props.$theme.layout.type === 'grid' && css`
    flex-direction: column;
    gap: ${props.$theme.spacing.lg};
    align-items: stretch;
    border-top: none;
    padding-top: ${props.$theme.spacing.xl};
  `}
`;

const PriceSection = styled.div<{ $theme: any }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$theme.spacing.xs};
`;

const Price = styled.div<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.xlarge};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.primary};

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: 2.5rem;
    text-align: center;
    background: linear-gradient(135deg, ${props.$theme.colors.primary}, ${props.$theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const RatingContainer = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.sm};
`;

const Stars = styled.div<{ $theme: any; $rating: number }>`
  display: flex;
  align-items: center;
  gap: 2px;
  
  &::before {
    content: '★★★★★';
    color: ${props => props.$theme.colors.border};
    position: relative;
  }
  
  &::after {
    content: '★★★★★';
    color: ${props => props.$theme.colors.accent};
    position: absolute;
    overflow: hidden;
    width: ${props => (props.$rating / 5) * 100}%;
  }
`;

const RatingText = styled.span<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.small};
  color: ${props => props.$theme.colors.textSecondary};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
`;

const StyledButton = styled(Button)<{ $theme: any }>`
  ${props => props.$theme.layout.type === 'grid' && css`
    width: 100%;
  `}
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

  return (
    <CardContainer $theme={theme} onClick={handleClick}>
      <ImageContainer $theme={theme}>
        <ProductImage
          $theme={theme}
          src={product.image}
          alt={product.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300/f0f0f0/666?text=Product';
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
          <PriceSection $theme={theme}>
            <Price $theme={theme}>${product.price}</Price>
            <RatingContainer $theme={theme}>
              <Stars $theme={theme} $rating={product.rating.rate} />
              <RatingText $theme={theme}>
                {product.rating.rate} ({product.rating.count})
              </RatingText>
            </RatingContainer>
          </PriceSection>
          
          <StyledButton 
            $theme={theme}
            variant="primary" 
            size={theme.layout.type === 'grid' ? 'large' : 'medium'}
            onClick={handleAddToCart}
            icon="🛒"
          >
            Add to Cart
          </StyledButton>
        </ProductFooter>
      </CardContent>
    </CardContainer>
  );
};

export default Card;