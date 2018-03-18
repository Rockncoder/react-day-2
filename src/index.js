import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import TodoList from './TodoList';
//import './examples/higher-order'
import Routes from './routes';

render(
  <Routes />,
  document.getElementById('root')
);
