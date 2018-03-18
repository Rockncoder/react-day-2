import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidenav from './Sidenav';

export const withRouter = Wrapped => props => (
  <Router>
    <Wrapped {...props} />
  </Router>
);

export const withSidenav = Wrapped => props => (
  <div className='wrapper'>
    <Sidenav/>
    <div className='container'>
      <Wrapped {...props} />
    </div>
  </div>
);
