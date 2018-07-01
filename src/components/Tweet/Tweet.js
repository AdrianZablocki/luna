import React from 'react';

import classes from './Tweet.css';

const tweet = (props) => {
  const slideClasses = [
    classes.TweetWrapper,
    (props.index === props.activeIndex) ? classes.TweetWrapperActive : null
  ];
  const containerClasses = [
    classes.TweetContainer,
    (props.index === props.activeIndex) ? classes.TweetContainerActive : null
  ];
  return (
    <li className={slideClasses.join(' ')} style={props.width}>
      <article className={containerClasses.join(' ')}>
        <p className={classes.Text}>
          <span className={classes.Member}>{props.member}</span>{props.text1}
          <span className={classes.Member}>{props.followers}</span>{props.mark}
        </p>
        <p className={classes.Text}>{props.text2}</p>
        <div className={classes.SignWrapper}>
          <div className={classes.Avatar}></div>
          <div className={classes.MemberWrapper}>
            <h5 className={classes.MemberName}>{props.name}</h5>
            <h6 className={classes.MemberNick}>{props.nick}</h6>
          </div>
        </div>
      </article>
    </li>
  );
}

export default tweet;