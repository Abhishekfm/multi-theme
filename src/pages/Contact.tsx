import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { ContentContainer } from '../styles/GlobalStyles';
import Button from '../components/UI/Button';
import { 
  sanitizeInput, 
  validateEmail, 
  validateRequired, 
  validateMaxLength,
  formSubmissionLimiter 
} from '../utils/security';

const ContactContainer = styled.div<{ $theme: any }>`
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

const ContactLayout = styled.div<{ $theme: any }>`
  display: grid;
  gap: ${props => props.$theme.spacing.xxl};

  ${props => props.$theme.layout.type === 'minimalist' && css`
    grid-template-columns: 1fr;
    
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  `}

  ${props => props.$theme.layout.type === 'sidebar' && css`
    grid-template-columns: 1fr;
    gap: ${props.$theme.spacing.xxl};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    grid-template-columns: 1fr;
    gap: ${props.$theme.spacing.xxl};
    
    @media (min-width: 768px) {
      grid-template-columns: 1.2fr 0.8fr;
    }
  `}
`;

const ContactForm = styled.form<{ $theme: any }>`
  background: ${props => props.$theme.colors.card};
  padding: ${props => props.$theme.spacing.xxl};
  border-radius: ${props => props.$theme.layout.borderRadius};
  border: 1px solid ${props => props.$theme.colors.border};

  ${props => props.$theme.layout.type === 'sidebar' && css`
    background: ${props.$theme.colors.surface};
    border: 2px solid ${props.$theme.colors.border};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: ${props.$theme.colors.card};
    border: none;
    border-radius: ${props.$theme.spacing.lg};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border-top: 4px solid ${props.$theme.colors.primary};
  `}
`;

const FormTitle = styled.h2<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.xl};

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

const FormGroup = styled.div<{ $theme: any }>`
  margin-bottom: ${props => props.$theme.spacing.lg};
`;

const Label = styled.label<{ $theme: any }>`
  display: block;
  font-size: ${props => props.$theme.typography.fontSize.medium};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.sm};

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.large};
  `}
`;

const Input = styled.input<{ $theme: any }>`
  width: 100%;
  padding: ${props => props.$theme.spacing.md};
  border: 2px solid ${props => props.$theme.colors.border};
  border-radius: ${props => props.$theme.layout.borderRadius};
  font-size: ${props => props.$theme.typography.fontSize.medium};
  font-family: ${props => props.$theme.typography.fontFamily};
  background: ${props => props.$theme.colors.surface};
  color: ${props => props.$theme.colors.text};
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};

  &:focus {
    outline: none;
    border-color: ${props => props.$theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.$theme.colors.primary}33;
  }

  ${props => props.$theme.layout.type === 'grid' && css`
    border-radius: ${props.$theme.spacing.lg};
    padding: ${props.$theme.spacing.lg};
    font-size: ${props.$theme.typography.fontSize.large};
    
    &:focus {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 3px ${props.$theme.colors.primary}33;
    }
  `}
`;

const TextArea = styled.textarea<{ $theme: any }>`
  width: 100%;
  min-height: 120px;
  padding: ${props => props.$theme.spacing.md};
  border: 2px solid ${props => props.$theme.colors.border};
  border-radius: ${props => props.$theme.layout.borderRadius};
  font-size: ${props => props.$theme.typography.fontSize.medium};
  font-family: ${props => props.$theme.typography.fontFamily};
  background: ${props => props.$theme.colors.surface};
  color: ${props => props.$theme.colors.text};
  resize: vertical;
  transition: ${props => props.$theme.animation.transition} ${props => props.$theme.animation.duration};

  &:focus {
    outline: none;
    border-color: ${props => props.$theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.$theme.colors.primary}33;
  }

  ${props => props.$theme.layout.type === 'grid' && css`
    border-radius: ${props.$theme.spacing.lg};
    padding: ${props.$theme.spacing.lg};
    font-size: ${props.$theme.typography.fontSize.large};
    min-height: 150px;
    
    &:focus {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 3px ${props.$theme.colors.primary}33;
    }
  `}
`;

const ContactInfo = styled.div<{ $theme: any }>`
  background: ${props => props.$theme.colors.surface};
  padding: ${props => props.$theme.spacing.xxl};
  border-radius: ${props => props.$theme.layout.borderRadius};

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(135deg, ${props.$theme.colors.card} 0%, ${props.$theme.colors.surface} 100%);
    border-radius: ${props.$theme.spacing.lg};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  `}
`;

const InfoTitle = styled.h3<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  font-weight: ${props => props.$theme.typography.fontWeight.bold};
  color: ${props => props.$theme.colors.text};
  margin-bottom: ${props => props.$theme.spacing.xl};

  ${props => props.$theme.layout.type === 'grid' && css`
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const ContactItem = styled.div<{ $theme: any }>`
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
    background: ${props.$theme.colors.card};
  `}

  ${props => props.$theme.layout.type === 'grid' && css`
    background: ${props.$theme.colors.card};
    border-radius: ${props.$theme.spacing.lg};
    padding: ${props.$theme.spacing.xl};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
  `}
`;

const ContactIcon = styled.span<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.large};
  color: ${props => props.$theme.colors.primary};
  min-width: 24px;

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: 1.5rem;
    background: linear-gradient(45deg, ${props.$theme.colors.primary}, ${props.$theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}
`;

const ContactDetails = styled.div<{ $theme: any }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$theme.spacing.xs};
`;

const ContactLabel = styled.span<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.small};
  color: ${props => props.$theme.colors.textSecondary};
  font-weight: ${props => props.$theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.span<{ $theme: any }>`
  font-size: ${props => props.$theme.typography.fontSize.medium};
  color: ${props => props.$theme.colors.text};
  font-weight: ${props => props.$theme.typography.fontWeight.normal};

  ${props => props.$theme.layout.type === 'grid' && css`
    font-size: ${props.$theme.typography.fontSize.large};
  `}
`;

const SuccessMessage = styled.div<{ $theme: any }>`
  background: ${props => props.$theme.colors.accent};
  color: white;
  padding: ${props => props.$theme.spacing.lg};
  border-radius: ${props => props.$theme.layout.borderRadius};
  margin-bottom: ${props => props.$theme.spacing.lg};
  text-align: center;
`;

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!formSubmissionLimiter.canAttempt('contact-form')) {
      alert('Too many submission attempts. Please wait a minute before trying again.');
      return;
    }

    // Validate and sanitize form data
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    // Validation checks
    if (!validateRequired(sanitizedData.name) || !validateMaxLength(sanitizedData.name, 100)) {
      alert('Please enter a valid name (max 100 characters).');
      return;
    }

    if (!validateRequired(sanitizedData.email) || !validateEmail(sanitizedData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validateRequired(sanitizedData.subject) || !validateMaxLength(sanitizedData.subject, 200)) {
      alert('Please enter a valid subject (max 200 characters).');
      return;
    }

    if (!validateRequired(sanitizedData.message) || !validateMaxLength(sanitizedData.message, 1000)) {
      alert('Please enter a valid message (max 1000 characters).');
      return;
    }

    console.log('Form submitted with sanitized data:', sanitizedData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactItems = [
    {
      icon: '📍',
      label: 'Address',
      value: '#01-04, 75 Ayer Rajah Crescent\n139953, Singapore',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+65 8231 4107',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'hr@hipster-inc.com',
    },
    {
      icon: '🕒',
      label: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: Closed',
    },
  ];

  return (
    <ContactContainer $theme={theme}>
      <ContentContainer $theme={theme}>
        <PageTitle $theme={theme}>Contact Us</PageTitle>

        <ContactLayout $theme={theme}>
          <ContactForm $theme={theme} onSubmit={handleSubmit}>
            <FormTitle $theme={theme}>Send us a Message</FormTitle>
            
            {isSubmitted && (
              <SuccessMessage $theme={theme}>
                Thank you for your message! We'll get back to you soon.
              </SuccessMessage>
            )}

            <FormGroup $theme={theme}>
              <Label $theme={theme} htmlFor="name">Name *</Label>
              <Input
                $theme={theme}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup $theme={theme}>
              <Label $theme={theme} htmlFor="email">Email *</Label>
              <Input
                $theme={theme}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup $theme={theme}>
              <Label $theme={theme} htmlFor="subject">Subject *</Label>
              <Input
                $theme={theme}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup $theme={theme}>
              <Label $theme={theme} htmlFor="message">Message *</Label>
              <TextArea
                $theme={theme}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <Button type="submit" variant="primary" size="large">
              Send Message
            </Button>
          </ContactForm>

          <ContactInfo $theme={theme}>
            <InfoTitle $theme={theme}>Get in Touch</InfoTitle>
            
            {contactItems.map((item, index) => (
              <ContactItem key={index} $theme={theme}>
                <ContactIcon $theme={theme}>{item.icon}</ContactIcon>
                <ContactDetails $theme={theme}>
                  <ContactLabel $theme={theme}>{item.label}</ContactLabel>
                  <ContactValue $theme={theme}>
                    {item.value.split('\n').map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < item.value.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </ContactValue>
                </ContactDetails>
              </ContactItem>
            ))}
          </ContactInfo>
        </ContactLayout>
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;