import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/theme.css'; // Adjust if necessary to match your CSS file location

const container = document.getElementById('root');
const root = createRoot(container); // create a root

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
