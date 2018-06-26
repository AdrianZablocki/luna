import React from 'react';

import classes from './CarouselSlide.css';

const carouselSlide = (props) => {
  const slideClasses = [
    classes.Slide,
    (props.index === props.activeIndex) ? classes.SlideActive : null
  ];
  return (
    <li className={slideClasses.join(' ')} style={props.style}>
      {props.children}
    </li>
  )
} 

export default carouselSlide;