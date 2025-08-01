import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: #f8fafc;
  color: #1e293b;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #dc2626;
`;

const ErrorMessage = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const ErrorDetails = styled.details`
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  max-width: 800px;
  width: 100%;
`;

const ErrorSummary = styled.summary`
  cursor: pointer;
  font-weight: 600;
  color: #475569;
  margin-bottom: 0.5rem;
`;

const ErrorStack = styled.pre`
  font-size: 0.875rem;
  color: #64748b;
  white-space: pre-wrap;
  word-break: break-word;
  background: #ffffff;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
`;

const RetryButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #2563eb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would send the error to your monitoring service
      // Example: logErrorToService(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Please try refreshing the page 
            or contact support if the problem persists.
          </ErrorMessage>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <ErrorDetails>
              <ErrorSummary>Error Details (Development Mode)</ErrorSummary>
              <ErrorStack>{this.state.error.stack}</ErrorStack>
            </ErrorDetails>
          )}
          
          <RetryButton onClick={this.handleRetry}>
            Try Again
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;