import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/style.css';
import App from './components/app/App';
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
