import React from 'react';

import classes from './MenuButton.css';

const menuButton = (props) => {
  const TopBarClasses = [
    classes.TopBar,
    props.transform ? classes.Active : null
  ];
  const MidleBarClasses = [
    classes.MidleBar,
    props.transform ? classes.Active : null
  ];
  const BottomBarClasses = [
    classes.BottomBar,
    props.transform ? classes.Active : null
  ];

  return (
    <div className={classes.MenuBtn} onClick={props.clicked}>
      {props.text}
      <div className={classes.BarsWrapper}>
        <span className={TopBarClasses.join(' ')}></span>
        <span className={MidleBarClasses.join(' ')}></span>
        <span className={BottomBarClasses.join(' ')}></span>
      </div>
    </div>    
  );
} 

export default menuButton;