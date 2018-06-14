import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem} onClick={props.clicked} id={props.id}>
    {props.link}
  </li>
);

export default navigationItem;