import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar la UI de repuesto
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de reporte de errores
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI de repuesto
      return (
        <div className="error-boundary">
          <h1>Algo salió mal.</h1>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
