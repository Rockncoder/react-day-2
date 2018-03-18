import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Routes from './routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

// const store = createStore(reducer);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);
