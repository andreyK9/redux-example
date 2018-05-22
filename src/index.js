import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import Store from './store';

const store = Store();

store.subscribe(() => {
  console.log('subscribe',store.getState());
})

store.dispatch({
  type:'ADD_PRODUCT',
  payload:'мюсли'
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


