import React from 'react';

import classes from './ScrollButton.css';

const scrollButton = (props) => {
  return (
    <div className={classes.ScrollBtn} onClick={props.clicked}>
      <span className={classes.Scroll1}></span>
      <span className={classes.Scroll2}></span>
      <span className={classes.Scroll3}></span>
    </div>    
  );
} 

export default scrollButton;