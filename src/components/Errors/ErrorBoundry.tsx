import React, { Component, type ReactNode } from 'react';
import ErrorPage from './ErrorPage';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null | undefined;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // to keep track of when an error occurs
    // and the error itself
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  // update the component state when an error occurs
  static getDerivedStateFromError(error) {
    // specify that the error boundary has caught an error
    return {
      hasError: true,
      error: error,
    };
  }

  // defines what to do when an error gets caught
  componentDidCatch(error, errorInfo) {
    console.log('Error caught!');
    console.error(error);
    console.error(errorInfo);

    // record the error in an APM tool...
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    } else {
      // default behavior
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
