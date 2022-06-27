import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('name').focus();
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
