import React from 'react';

import classes from './Jumbotron.css';

const jumbotron = (props) => (
  <h2 className={classes.Jumbotron}>
    {props.before} 
    <span>{props.text}</span> 
    {props.after}
  </h2>
);

export default jumbotron;