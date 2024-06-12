import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './component/LandingPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
reportWebVitals();
