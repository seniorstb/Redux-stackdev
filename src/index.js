import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './App';

const state = store;

ReactDOM.render(
  <Provider store={state}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
