import React, { Component } from 'react';

import classes from './WhatWeDo.css';
import icons from '../../assets/images/icons_sprites.png';

class WhatWeDo extends Component {
  state = {
    header: 'What we do',
    icons: icons,
    panels: [
      {
        background: [classes.Design, classes.Icon],
        title: 'Beautiful design',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum, mauris nec'
      },
      {
        background: [classes.Development, classes.Icon],
        title: 'Best development',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum, mauris nec'
      },
      {
        background: [classes.Promote, classes.Icon],
        title: 'Web promote',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum, mauris nec'
      }
    ]
  }

  render() {
    let panels;
    panels = this.state.panels.map((el, index) => {
      return (
        <div key={index} className={classes.Panel}>
          <div className={el.background.join(' ')}></div>
          <h3>{el.title}</h3>
          <p>{el.text}</p>
        </div>
      )
    });

    return (
      <section className={classes.WhatWeDoWrapper}>
        <div className={classes.WhatWeDoContainer}>
          <h2>{this.state.header}</h2>
        </div>
        <div className={classes.PanelsContainer}>
          <div className={classes.PanelsWrapper}>{panels}</div>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;