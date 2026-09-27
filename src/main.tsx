import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeGA } from './lib/ga';
import { initializeSchemas } from './lib/schema';

// Initialize GA4 (respects consent - only loads if user accepted)
initializeGA();

// Initialize JSON-LD structured data
initializeSchemas();

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);