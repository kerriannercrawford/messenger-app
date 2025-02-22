import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store.js';
import App from './App.js';
import './index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);