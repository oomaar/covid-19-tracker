import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './GlobalStyle';
import App from './App';

render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
