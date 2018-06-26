import React from 'react';

import classes from './CarouselLeftArrow.css';

const arrowLeft = (props) => (
  <span onClick={props.onClick} className={classes.ArrowLeft}></span>
);

export default arrowLeft;