import React from 'react';

import Logo from '../../assets/images/Logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <h1 className={classes.Logo}>
    <img src={Logo} alt="Luna" title="Luna"/>
  </h1>
);

export default logo;