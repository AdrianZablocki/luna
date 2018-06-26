import React from 'react';

import classes from './CarouselIndicator.css';

const carouselIndicator = (props) => {
  const indicatorClasses = [
    classes.Indicator,
    (props.index === props.activeIndex) ? classes.IndicatorActive : null
  ];  
  return (
    <span 
      onClick={props.onClick} 
      className={indicatorClasses.join(' ')}>{props.children}</span>    
  )
}

export default carouselIndicator;