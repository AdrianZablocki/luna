import React, { Component } from 'react';

import classes from './WhatWeDo.css';


class About extends Component {

  state = {
    header: 'What we do'
  }

  render() {


    return (
      <section className={classes.WhatWeDoWrapper}>
        <div className={classes.WhatWeDo}>
          <h2>{this.state.header}</h2>
        </div>
      </section>
    );
  }
}

export default About;