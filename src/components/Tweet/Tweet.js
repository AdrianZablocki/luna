import React, { Component } from 'react';

import classes from './Tweet.css';

class Tweet extends Component {
  render() {

    return (
      <article className={classes.TweetWrapper}>
        <p className={classes.Text}>
          <span className={classes.Member}>{this.props.member}</span>{this.props.text1}
          <span className={classes.Member}>{this.props.followers}</span>{this.props.mark}
        </p>
        <p className={classes.Text}>{this.props.text2}</p>
        <div className={classes.SignWrapper}>
          <div className={classes.Avatar}></div>
          <div className={classes.MemberWrapper}>
            <h5 className={classes.MemberName}>{this.props.name}</h5>
            <h6 className={classes.MemberNick}>{this.props.nick}</h6>
          </div>
        </div>
      </article>
    );
  }
}

export default Tweet;