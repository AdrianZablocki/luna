import { connect } from 'react-redux';
import React, { Component } from 'react';

import * as actions from '../../store/actions/index';
import Backdrop from '../UI/Backdrop/Backdrop';
import Logo from '../Logo/Logo';
import MenuBtn from '../UI/MenuButton/MenuButton';
import NavItem from './NavigationItem/NavigationItem';

import classes from './Navigation.css';

class Navigation extends Component {
  state = {
    links: [
      {
        link: 'About',
        id: 'About'
      },
      {
        link: 'What we do',
        id: 'What'
      },
      {
        link: 'Portfolio',
        id: 'Portfolio'
      },
      {
        link: 'Customers opinion',
        id: 'Customers'
      },
      {
        link: 'Contact',
        id: 'Contact'
      },
      {
        link: 'Go to top',
        id: 'Top'
      }
    ],  
  }

  render() {
    let links;
    links = this.state.links.map((link, index) => {
      return <NavItem 
        key={index} 
        link={link.link}
        id={link.id}
        clicked={this.props.onGetComponentID}
      />
    });

    return(   
      <div className={classes.NavBar}>
        <Logo />   
        <MenuBtn 
          text={this.props.text} 
          transform={this.props.transform} 
          clicked={this.props.clicked} /> 
          {this.props.children}
        <Backdrop show={this.props.show} clicked={this.props.clicked}>
          <ul className={classes.Links}>
            {links}
          </ul>
        </Backdrop>   
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetComponentID: (event) => dispatch(actions.getComponentId(event))
  }
}

export default connect(null, mapDispatchToProps)(Navigation);