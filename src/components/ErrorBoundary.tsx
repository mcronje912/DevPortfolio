// src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component to catch rendering errors
 * Wraps sections of the app to prevent the entire app from crashing on error
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="p-8 mx-auto max-w-xl text-center">
            <div className="p-6 bg-red-50 dark:bg-rich-black-400 border border-red-100 dark:border-rich-black-300 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">
                Something went wrong
              </h2>
              <p className="text-red-600 dark:text-red-300 mb-4">
                An error occurred while rendering this section. Please try
                refreshing the page.
              </p>
              <button
                className="px-4 py-2 bg-cerulean text-white rounded-md shadow hover:bg-cerulean-600 transition-colors"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
