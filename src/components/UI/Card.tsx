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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.$theme.colors.border};

  /* Base modern card styling */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  /* Theme 1: Glassmorphism styling inspired by Nitec */
  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-12px) scale(1.02);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }
  `}

  /* Theme 2: Dark elegant styling inspired by Velvety */
  ${props => props.$theme.id === 'theme2' && css`
    background: ${props.$theme.colors.card};
    border: 1px solid ${props.$theme.colors.border};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

    &:hover {
      border-color: ${props.$theme.colors.primary};
      transform: translateY(-10px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
    }
  `}

  /* Theme 3: Modern green styling inspired by GetIllustrations */
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
  height: 280px;
  overflow: hidden;
  position: relative;
  background: ${props => props.$theme.colors.surface};

  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  `}

  ${props => props.$theme.id === 'theme2' && css`
    background: ${props.$theme.colors.surface};
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: rgba(255, 255, 255, 0.5);
  `}
`;

const ProductImage = styled.img<{ $theme: any }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: ${props => props.$theme.spacing.xl};
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }

  ${props => props.$theme.id === 'theme1' && css`
    padding: ${props.$theme.spacing.xl};
    
    ${CardContainer}:hover & {
      transform: scale(1.08);
    }
  `}

  ${props => props.$theme.id === 'theme2' && css`
    padding: ${props.$theme.spacing.lg};
    
    ${CardContainer}:hover & {
      transform: scale(1.06);
    }
  `}

  ${props => props.$theme.id === 'theme3' && css`
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

  ${props => props.$theme.id === 'theme1' && css`
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  `}

  ${props => props.$theme.id === 'theme2' && css`
    background: linear-gradient(to bottom, transparent 40%, rgba(196, 181, 160, 0.1));
  `}

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

  ${props => props.$theme.id === 'theme1' && css`
    background: rgba(6, 182, 212, 0.9);
    backdrop-filter: blur(10px);
  `}

  ${props => props.$theme.id === 'theme2' && css`
    background: ${props.$theme.colors.accent};
  `}

  ${props => props.$theme.id === 'theme3' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.accent}, #F97316);
  `}
`;

const CardContent = styled.div<{ $theme: any }>`
  padding: ${props => props.$theme.spacing.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${props => props.$theme.spacing.md};

  ${props => props.$theme.id === 'theme1' && css`
    padding: ${props.$theme.spacing.xxl} ${props.$theme.spacing.xl};
  `}

  ${props => props.$theme.id === 'theme2' && css`
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
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  letter-spacing: 1px;
  margin-bottom: ${props => props.$theme.spacing.sm};

  ${props => props.$theme.id === 'theme1' && css`
    color: rgba(255, 255, 255, 0.8);
    background: rgba(59, 130, 246, 0.2);
    padding: ${props.$theme.spacing.xs} ${props.$theme.spacing.sm};
    border-radius: 12px;
    display: inline-block;
    backdrop-filter: blur(10px);
  `}

  ${props => props.$theme.id === 'theme2' && css`
    color: ${props.$theme.colors.primary};
    border-left: 3px solid ${props.$theme.colors.primary};
    padding-left: ${props.$theme.spacing.sm};
  `}

  ${props => props.$theme.id === 'theme3' && css`
    color: ${props.$theme.colors.primary};
    background: rgba(16, 185, 129, 0.1);
    padding: ${props.$theme.spacing.xs} ${props.$theme.spacing.sm};
    border-radius: 8px;
    display: inline-block;
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

  ${props => props.$theme.id === 'theme1' && css`
    color: white;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    font-size: ${props.$theme.typography.fontSize.xlarge};
  `}

  ${props => props.$theme.id === 'theme2' && css`
    color: ${props.$theme.colors.text};
    font-size: ${props.$theme.typography.fontSize.xlarge};
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
  font-size: ${props => props.$theme.typography.fontSize.medium};
  color: ${props => props.$theme.colors.textSecondary};
  line-height: ${props => props.$theme.typography.lineHeight.normal};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;

  ${props => props.$theme.id === 'theme1' && css`
    color: rgba(255, 255, 255, 0.9);
  `}

  ${props => props.$theme.id === 'theme2' && css`
    color: ${props.$theme.colors.textSecondary};
  `}

  ${props => props.$theme.id === 'theme3' && css`
    color: ${props.$theme.colors.textSecondary};
  `}
`;

const ProductFooter = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.$theme.spacing.lg};
  margin-top: auto;
  padding-top: ${props => props.$theme.spacing.lg};
  border-top: 1px solid ${props => props.$theme.colors.border};

  ${props => props.$theme.id === 'theme1' && css`
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  `}

  ${props => props.$theme.id === 'theme2' && css`
    border-top: 1px solid ${props.$theme.colors.border};
  `}

  ${props => props.$theme.id === 'theme3' && css`
    border-top: 1px solid rgba(16, 185, 129, 0.2);
    flex-direction: column;
    gap: ${props.$theme.spacing.lg};
    align-items: stretch;
  `}
`;

const PriceSection = styled.div<{ $theme: any }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$theme.spacing.sm};
`;

const Price = styled.div<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.xlarge};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.primary};

  ${props => props.$theme.id === 'theme1' && css`
    color: white;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    font-size: 2rem;
  `}

  ${props => props.$theme.id === 'theme2' && css`
    color: ${props.$theme.colors.primary};
    font-size: 2rem;
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

const RatingContainer = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$theme.spacing.sm};

  ${props => props.$theme.id === 'theme3' && css`
    justify-content: center;
  `}
`;

const Stars = styled.div<{ $theme: any; $rating: number }>`
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
  
  &::before {
    content: '★★★★★';
    color: ${props => props.$theme.colors.border};
    position: relative;
  }
  
  &::after {
    content: '★★★★★';
    color: ${props => props.$theme.colors.accent};
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: ${props => (props.$rating / 5) * 100}%;
  }

  ${props => props.$theme.id === 'theme1' && css`
    &::before {
      color: rgba(255, 255, 255, 0.3);
    }
    
    &::after {
      color: #FFC107;
    }
  `}
`;

const RatingText = styled.span<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.small};
  color: ${props => props.$theme.colors.textSecondary};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};

  ${props => props.$theme.id === 'theme1' && css`
    color: rgba(255, 255, 255, 0.8);
  `}
`;

const StyledButton = styled(Button)<{ $theme: any }>`
  ${props => props.$theme.id === 'theme3' && css`
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

  // Determine if product is popular (rating > 4.0)
  const isPopular = product.rating.rate > 4.0;

  return (
    <CardContainer $theme={theme} onClick={handleClick}>
      <ImageContainer $theme={theme}>
        {isPopular && <PopularBadge $theme={theme}>Popular</PopularBadge>}
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
            size="large"
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