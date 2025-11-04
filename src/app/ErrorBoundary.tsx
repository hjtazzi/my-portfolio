import { } from 'react';
import { ErrorBoundary as ErrorBoundaries } from 'react-error-boundary';

import MainLayout from '../components/layouts/MainLayout';
import ErrorFallback from '../components/shared/ErrorFallback';


interface ErrorBoundary {
  children: React.ReactNode;
}


const ErrorBoundary = ({ children }: ErrorBoundary) => {
  return (
    <ErrorBoundaries
      FallbackComponent={() => <MainLayout><ErrorFallback /></MainLayout>}
      onError={(error: Error) => console.error('Error caught:', error)}
    >
      {children}
    </ErrorBoundaries>
  )
}

export default ErrorBoundary;
