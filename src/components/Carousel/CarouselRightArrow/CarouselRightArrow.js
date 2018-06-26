import React from 'react';

import classes from './CarouselRightArrow.css';

const arrowRight = (props) => (
  <span onClick={props.onClick} className={classes.ArrowRight}></span>
);

export default arrowRight;