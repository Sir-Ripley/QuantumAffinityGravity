import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/**
 * Main entry point for the Quantum Affinity Gravity Research Hub.
 * This file mounts the React application to the root element.
 * Uses Babel standalone for browser-side transformation.
 */
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
}
