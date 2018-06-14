import React from 'react';
import classes from './Backdrop.css'

const backdrop = (props) => {
  const dropdownClasses = [
    classes.Backdrop,
    props.show ? classes.Show : null
  ]
  return (
    <div className={dropdownClasses.join(' ')} onClick={props.clicked}>{props.children}</div> 
  )
}; 

export default backdrop;

