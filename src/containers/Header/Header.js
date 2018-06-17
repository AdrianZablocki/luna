import { connect } from 'react-redux';
import React, { Component } from 'react';

import * as actions from '../../store/actions/index';
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
    }
  }

  render() {
    return (
      <header className={classes.Header}>
        <Navigation 
          text="Menu" 
          transform={this.props.menu.openMenu} 
          clicked={this.props.onOpenMenu}
          show={this.props.menu.backdropShow}
        />
        <Jumbotron
          before={this.state.jumbotron.beforeTxt}
          text={this.state.jumbotron.txt}
          after={this.state.jumbotron.afterTxt} 
        />
        <ScrollBtn />         
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenMenu: () => dispatch(actions.openMenu())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);