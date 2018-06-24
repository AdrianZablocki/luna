import React from 'react';

import classes from './Button.css';

const Button = (props) => {

  return (
    <button className={classes.Button} type={props.btnType} onClick={props.clicked}>{props.text}</button>  
  );
} 

export default Button;