import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { ContentContainer } from '../styles/GlobalStyles';
import Button from '../components/UI/Button';

const AboutContainer = styled.div<{ $theme: any }>`
  min-height: calc(100vh - ${props => props.$theme.layout.headerHeight});
  padding: ${props => props.$theme.spacing.xl} 0;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    @media (min-width: 768px) {
      min-height: 100vh;
      padding: ${props.$theme.spacing.xxl} 0;
    }
  `}
`;

const PageTitle = styled.h1<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.xlarge};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.xxl};
  text-align: center;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    font-size: 3rem;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-left: 4px solid ${props.$theme.colors.primary};
    padding-left: ${props.$theme.spacing.lg};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: 3.5rem;
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${props.$theme.spacing.xxl};
  `}
`;

const ContentSection = styled.section<{ $theme: any }>`
  margin-bottom: ${props => props.$theme.spacing.xxl};

  ${props => props.$theme.layout.type === 'grid' && css`
    background: ${props.$theme.colors.card};
    padding: ${props.$theme.spacing.xxl};
    border-radius: ${props.$theme.layout.borderRadius};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border-top: 4px solid ${props.$theme.colors.primary};
  `}
`;

const SectionTitle = styled.h2<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.lg};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    color: ${props.$theme.colors.primary};
    border-bottom: 2px solid ${props.$theme.colors.primary};
    padding-bottom: ${props.$theme.spacing.sm};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: ${props.$theme.typography.fontSize.xlarge};
  `}
`;

const Paragraph = styled.p<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.medium};
  color: ${props => props.$theme.colors.textSecondary};
  line-height: ${props => props.$theme.typography.lineHeight.normal};
  margin-bottom: ${props => props.$theme.spacing.lg};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    font-size: ${props.$theme.typography.fontSize.large};
    line-height: ${props.$theme.typography.lineHeight.loose};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.large};
    line-height: ${props.$theme.typography.lineHeight.loose};
  `}
`;

const FeatureList = styled.ul<{ $theme: any }>`
  list-style: none;
  padding: 0;
  margin: ${props => props.$theme.spacing.lg} 0;

  ${props => props.$theme.layout.type === 'grid' && css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${props.$theme.spacing.lg};
  `}
`;

const FeatureItem = styled.li<{ $theme: any }>`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.$theme.spacing.md};
  margin-bottom: ${props => props.$theme.spacing.lg};
  padding: ${props => props.$theme.spacing.md};
  border-radius: ${props => props.$theme.layout.borderRadius};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};

  &:hover {
    background: ${props => props.$theme.colors.hover};
  }

  ${props => props.$theme.layout.type === 'sidebar' && css`
    border-left: 3px solid ${props.$theme.colors.primary};
    padding-left: ${props.$theme.spacing.lg};
    background: ${props.$theme.colors.surface};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: ${props.$theme.colors.surface};
    border-radius: ${props.$theme.spacing.lg};
    padding: ${props.$theme.spacing.xl};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  `}
`;

const FeatureIcon = styled.span<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  color: ${props => props.$theme.colors.primary};
  min-width: 24px;

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: 2rem;
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const FeatureText = styled.span<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.medium};
  color: ${props => props.$theme.colors.text};
  line-height: ${props => props.$theme.typography.lineHeight.normal};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    font-size: ${props.$theme.typography.fontSize.large};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.large};
  `}
`;

const StatsContainer = styled.div<{ $theme: any }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.$theme.spacing.lg};
  margin: ${props => props.$theme.spacing.xxl} 0;

  ${props => props.$theme.layout.type === 'sidebar' && css`
    gap: ${props.$theme.spacing.xl};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    gap: ${props.$theme.spacing.xxl};
  `}
`;

const StatCard = styled.div<{ $theme: any }>`
  text-align: center;
  padding: ${props => props.$theme.spacing.xl};
  background: ${props => props.$theme.colors.surface};
  border-radius: ${props => props.$theme.layout.borderRadius};
  border: 1px solid ${props => props.$theme.colors.border};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    background: ${props.$theme.colors.card};
    border: 2px solid ${props.$theme.colors.border};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.card} 0%, ${props.$theme.colors.surface} 100%);
    border: none;
    border-radius: ${props.$theme.spacing.lg};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
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
  `}
`;

const StatNumber = styled.div<{ $theme: any }>`
  font-size: 2.5rem;
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.primary};
  margin-bottom: ${props => props.$theme.spacing.sm};

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: 3rem;
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const StatLabel = styled.div<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.medium};
  color: ${props => props.$theme.colors.textSecondary};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
`;

const CTASection = styled.div<{ $theme: any }>`
  text-align: center;
  margin-top: ${props => props.$theme.spacing.xxl};
  padding: ${props => props.$theme.spacing.xxl};
  background: ${props => props.$theme.colors.surface};
  border-radius: ${props => props.$theme.layout.borderRadius};

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    border-radius: ${props.$theme.spacing.lg};
  `}
`;

const About: React.FC = () => {
  const { theme } = useTheme();

  const features = [
    { icon: '🎨', text: 'Three distinct themes with unique layouts and styling' },
    { icon: '📱', text: 'Fully responsive design for all devices' },
    { icon: '⚡', text: 'Smooth animations and theme transitions' },
    { icon: '💾', text: 'Persistent theme selection with localStorage' },
    { icon: '🛒', text: 'Integration with real API for dynamic content' },
    { icon: '🔒', text: 'Secure and optimized performance' },
  ];

  return (
    <AboutContainer $theme={theme}>
      <ContentContainer $theme={theme}>
        <PageTitle $theme={theme}>About ThemeApp</PageTitle>

        <ContentSection $theme={theme}>
          <SectionTitle $theme={theme}>Our Mission</SectionTitle>
          <Paragraph $theme={theme}>
            ThemeApp is a demonstration of modern web development practices, showcasing how different 
            themes can completely transform the user experience. Built with React, TypeScript, and 
            styled-components, this application demonstrates the power of dynamic theming and responsive design.
          </Paragraph>
          <Paragraph $theme={theme}>
            Our goal is to show how the same content can feel completely different depending on the 
            visual presentation, layout structure, and interactive elements. Each theme represents a 
            different design philosophy and user experience approach.
          </Paragraph>
        </ContentSection>

        <ContentSection $theme={theme}>
          <SectionTitle $theme={theme}>Key Features</SectionTitle>
          <FeatureList $theme={theme}>
            {features.map((feature, index) => (
              <FeatureItem key={index} $theme={theme}>
                <FeatureIcon $theme={theme}>{feature.icon}</FeatureIcon>
                <FeatureText $theme={theme}>{feature.text}</FeatureText>
              </FeatureItem>
            ))}
          </FeatureList>
        </ContentSection>

        <StatsContainer $theme={theme}>
          <StatCard $theme={theme}>
            <StatNumber $theme={theme}>3</StatNumber>
            <StatLabel $theme={theme}>Unique Themes</StatLabel>
          </StatCard>
          <StatCard $theme={theme}>
            <StatNumber $theme={theme}>100%</StatNumber>
            <StatLabel $theme={theme}>Responsive</StatLabel>
          </StatCard>
          <StatCard $theme={theme}>
            <StatNumber $theme={theme}>∞</StatNumber>
            <StatLabel $theme={theme}>Possibilities</StatLabel>
          </StatCard>
        </StatsContainer>

        <ContentSection $theme={theme}>
          <SectionTitle $theme={theme}>Technology Stack</SectionTitle>
          <Paragraph $theme={theme}>
            This application is built using cutting-edge web technologies including React 18, 
            TypeScript for type safety, styled-components for dynamic styling, React Router for 
            navigation, and integrates with the Fake Store API for realistic product data.
          </Paragraph>
          <Paragraph $theme={theme}>
            The theme system uses React Context for state management, localStorage for persistence, 
            and CSS-in-JS for dynamic styling. Each theme completely transforms the layout, 
            typography, colors, spacing, and interactive elements.
          </Paragraph>
        </ContentSection>

        <CTASection $theme={theme}>
          <SectionTitle $theme={theme}>Ready to Experience the Difference?</SectionTitle>
          <Paragraph $theme={theme}>
            Try switching between our three themes using the dropdown in the header. 
            Notice how each theme creates a completely different feel and user experience.
          </Paragraph>
          <Button variant="primary" size="large">
            Explore Products
          </Button>
        </CTASection>
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;