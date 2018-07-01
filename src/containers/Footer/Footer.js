import React, { Component } from 'react';

import classes from './Footer.css';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/UI/Button/Button';


class Footer extends Component {
  state = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie dapibus arcu, imperdiet vulputate ante tincidunt vel.',
    buttonTxt: 'contact us',
    designInfo: {
      copyright: 'copyright',
      year: '2015.',
      studio: ' luna studio',
      rights: '. all rights reserved.',
    }
  }

  render() {
    return (
      <section className={classes.FooterWrapper}>
        <div className={classes.FooterContainer}>  
          <div className={classes.ContactWrapper}>
            <div className={classes.ContactContent}>
              <Logo />
              <p className={classes.ContactText}>
                {this.state.text}
              </p>
            </div>
            <div className={classes.ContactButton}>
              <Button btnType="button" text={this.state.buttonTxt} />
            </div>
          </div>
          <div className={classes.DesignInfoWrapper}>
            <h4 className={classes.DesignInfoHeader}>
              {this.state.designInfo.copyright} &#169; {this.state.designInfo.year}
              <span className={classes.DesignInfoHeaderBlue}>{this.state.designInfo.studio}</span>
              {this.state.designInfo.rights}
            </h4>
            <h4 className={classes.DesignInfoHeader}>Designed with 
              <span className={classes.DesignInfoHeart}></span>by 
              <span className={classes.DesignInfoHeaderBlue}> symu.co</span>
            </h4>
          </div> 
        </div>
      </section>
    );
  }
}

export default Footer;