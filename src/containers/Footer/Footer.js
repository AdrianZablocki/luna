import React, { Component } from 'react';

import classes from './Footer.css';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/UI/Button/Button';


class Footer extends Component {
  state = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie dapibus arcu, imperdiet vulputate ante tincidunt vel.',
    buttonTxt: 'contact us'
  }

  render() {
    return (
      <section className={classes.FooterWrapper}>
        <div className={classes.FooterContainer}>  
          <Logo />
          <Button btnType="button" text={this.state.buttonTxt} />
        </div>
      </section>
    );
  }
}

export default Footer;