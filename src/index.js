import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/app/App.jsx';
import { SessionProvider } from './state/SessionProvider';

render(
  <React.StrictMode>
    <Router>
      <SessionProvider>
          <App />
      </SessionProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
