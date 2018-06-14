import React, { Component } from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Navigation from '../../components/Navigation/Navigation';
import ScrollBtn from '../../components/UI/ScrollButton/ScrollButton';

import classes from './Header.css';

class Header extends Component {

  state = {
    jumbotron: {
      beforeTxt: 'We make ',
      txt: 'Web ',
      afterTxt: 'better'
    },
    openMenu: false,
    backdropShow: false
  }

  openMenuHandler = (prevState) => {
    this.setState(prevState => ({
      openMenu: !prevState.openMenu,
      backdropShow: !prevState.backdropShow
    }));
  }

  render() {
    return (
      <header className={classes.Header}>
        <Navigation 
          text="Menu" 
          transform={this.state.openMenu} 
          clicked={this.openMenuHandler}
          show={this.state.backdropShow} />
        <Jumbotron
          before={this.state.jumbotron.beforeTxt}
          text={this.state.jumbotron.txt}
          after={this.state.jumbotron.afterTxt} />
        <ScrollBtn />         
      </header>
    );
  }
}


export default Header;