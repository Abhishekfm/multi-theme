import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useFakeStore } from '../hooks/useFakeStore';
import { ContentContainer } from '../styles/GlobalStyles';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const HomeContainer = styled.div<{ $theme: any }>`
  min-height: calc(100vh - ${props => props.$theme.layout.headerHeight});
  padding: ${props => props.$theme.spacing.xl} 0;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      min-height: 100vh;
      padding: ${props.$theme.spacing.xxl} 0;
    }
  `}
`;

const HeroSection = styled.section<{ $theme: any }>`
  text-align: center;
  margin-bottom: ${props => props.$theme.spacing.xxl};
  padding: ${props => props.$theme.spacing.xxl} 0;

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    border-radius: ${props.$theme.layout.borderRadius};
    margin: 0 ${props.$theme.spacing.lg} ${props.$theme.spacing.xxl};
  `}
`;

const HeroTitle = styled.h1<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.xlarge};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.lg};
  line-height: ${props => props.$theme.typography.lineHeight.tight};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: 3.5rem;
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  `}

  @media (max-width: 768px) {
    font-size: ${props => props.$theme.typography.fontSize.xlarge};
  }
`;

const HeroSubtitle = styled.p<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  color: ${props => props.$theme.colors.textSecondary};
  margin-bottom: ${props => props.$theme.spacing.xl};
  line-height: ${props => props.$theme.typography.lineHeight.normal};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.xlarge};
    margin-bottom: ${props.$theme.spacing.xxl};
  `}
`;

const CTASection = styled.div<{ $theme: any }>`
  display: flex;
  gap: ${props => props.$theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${props => props.$theme.spacing.xxl};
`;

const SectionTitle = styled.h2<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.xlarge};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.xl};
  text-align: center;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    text-align: left;
    border-left: 4px solid ${props.$theme.colors.primary};
    padding-left: ${props.$theme.spacing.lg};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const ProductGrid = styled.div<{ $theme: any }>`
  display: grid;
  gap: ${props => props.$theme.layout.gridGap};
  margin-bottom: ${props => props.$theme.spacing.xxl};

  /* Responsive grid based on theme */
  ${props => props.$theme.layout.type === 'minimalist' && css`
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  `}

  ${props => props.$theme.layout.type === 'sidebar' && css`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${props.$theme.spacing.xl};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: ${props.$theme.spacing.xxl};
  `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.$theme.spacing.lg};
  }
`;

const LoadingContainer = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: ${props => props.$theme.typography.fontSize.large};
  color: ${props => props.$theme.colors.textSecondary};
`;

const ErrorContainer = styled.div<{ $theme: any }>`
  text-align: center;
  padding: ${props => props.$theme.spacing.xxl};
  background: ${props => props.$theme.colors.surface};
  border-radius: ${props => props.$theme.layout.borderRadius};
  border: 1px solid ${props => props.$theme.colors.border};
`;

const ErrorTitle = styled.h3<{ $theme: any }>`
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.lg};
`;

const ErrorMessage = styled.p<{ $theme: any }>`
  color: ${props => props.$theme.colors.textSecondary};
  margin-bottom: ${props => props.$theme.spacing.lg};
`;

const LoadMoreContainer = styled.div<{ $theme: any }>`
  text-align: center;
  margin-top: ${props => props.$theme.spacing.xl};
`;

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { products, loading, error, refetch } = useFakeStore(8);

  const handleProductClick = (productId: number) => {
    console.log('Product clicked:', productId);
    // Navigate to product detail or open modal
  };

  if (loading) {
    return (
      <HomeContainer $theme={theme}>
        <ContentContainer $theme={theme}>
          <LoadingContainer $theme={theme}>
            Loading amazing products...
          </LoadingContainer>
        </ContentContainer>
      </HomeContainer>
    );
  }

  if (error) {
    return (
      <HomeContainer $theme={theme}>
        <ContentContainer $theme={theme}>
          <ErrorContainer $theme={theme}>
            <ErrorTitle $theme={theme}>Oops! Something went wrong</ErrorTitle>
            <ErrorMessage $theme={theme}>{error}</ErrorMessage>
            <Button onClick={refetch}>Try Again</Button>
          </ErrorContainer>
        </ContentContainer>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer $theme={theme}>
      <ContentContainer $theme={theme}>
        <HeroSection $theme={theme}>
          <HeroTitle $theme={theme}>
            Welcome to ThemeApp
          </HeroTitle>
          <HeroSubtitle $theme={theme}>
            Discover amazing products with our dynamic theme switcher. 
            Experience how different themes transform the entire shopping experience.
          </HeroSubtitle>
          <CTASection $theme={theme}>
            <Button variant="primary" size="large">
              Shop Now
            </Button>
            <Button variant="outline" size="large">
              Learn More
            </Button>
          </CTASection>
        </HeroSection>

        <SectionTitle $theme={theme}>Featured Products</SectionTitle>
        
        <ProductGrid $theme={theme}>
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </ProductGrid>

        <LoadMoreContainer $theme={theme}>
          <Button variant="secondary" size="large">
            Load More Products
          </Button>
        </LoadMoreContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;