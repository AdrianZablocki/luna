import React, { Component } from 'react';

import Logo from '../Logo/Logo';
import MenuBtn from '../UI/MenuButton/MenuButton';
import Backdrop from '../UI/Backdrop/Backdrop';
import NavItem from './NavigationItem/NavigationItem';
import classes from './Navigation.css';

class Navigation extends Component {
  state = {
    links: ['chuj', 'gnój'],
    clicked: null
  }

  linkClickedHandler = (event) => {
    console.log(event.target.id)
    this.setState({clicked: event.target.id})
  }

  render() {
    let links;
    links = this.state.links.map((link, index) => {
      return <NavItem key={index} id={index} link={link} clicked={(event) => this.linkClickedHandler(event)}/>
    });

    return(
      <div className={classes.NavBar}>
        <Logo />   
        <MenuBtn 
          text={this.props.text} 
          transform={this.props.transform} 
          clicked={this.props.clicked} /> 
        <Backdrop 
          show={this.props.show} 
          clicked={this.props.clicked}>
          <div className={classes.Links}>{links}</div>
        </Backdrop>   
      </div>
    )
  }
}

export default Navigation;