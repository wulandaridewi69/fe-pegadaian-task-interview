import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';

import Router from '../src/routes/Route'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

