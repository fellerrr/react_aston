import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div>
      <h2>Something's gone wrong!</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>{error.message}</details>
    </div>
  )
}

interface MyErrorBoundaryProps {
  children: React.ReactNode
}

export default function MyErrorBoundary({ children }: MyErrorBoundaryProps) {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
}
