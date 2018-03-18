import React from 'react';
import {NavLink} from 'react-router-dom';


const Sidenav = props => (
  <div className=''>
    <section>
      <ul>
        <li><NavLink to='/'>Todo</NavLink></li>
        <li><NavLink to='/calc'>Calc</NavLink></li>
      </ul>
    </section>
  </div>
);

export default Sidenav;