import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';

import * as actions from '../../store/actions/index';
import About from '../../containers/About/About';
import Aux from '../Aux/Aux';
import Header from '../../containers/Header/Header';
import ScrollBtn from '../../components/UI/ScrollButton/ScrollButton';
import WhatWeDo from '../../containers/WhatWeDo/WhatWeDo';
import PortfolioSlider from '../../containers/PortfolioSlider/PortfolioSlider';
import TwitterSlider from '../../containers/TwitterSlider/TwitterSlider';
import Footer from '../../containers/Footer/Footer';

class Layout extends Component {
  state = {
    stickyScroll: false
  }

  componentDidUpdate() {
    this.scrollToHandler();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.stickyScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.stickyScrollHandler);
  }

  stickyScrollHandler = () => {
    const header = ReactDOM.findDOMNode(this.About).getBoundingClientRect();
    (header.top <= 76) ? this.setState({ stickyScroll: true }) : this.setState({ stickyScroll: false }); // menu bar height 76px
  }

  scrollToHandler = () => {
    switch (this.props.menu.componentId) {
      case 'Top':
        scrollToComponent(this.Top, { offset: 0, align: 'top', duration: 600 });
        this.props.onRemoveComponentId();
        break;
      case 'About':
        scrollToComponent(this.About, { offset: 0, align: 'top', duration: 600 });
        this.props.onRemoveComponentId();
        break;
      case 'What':
        scrollToComponent(this.What, { offset: 0, align: 'top', duration: 600 });
        this.props.onRemoveComponentId();
        break;
      case 'Portfolio':
        scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 600 });
        this.props.onRemoveComponentId();
        break;
      case 'Customers':
        scrollToComponent(this.Customers, { offset: 0, align: 'top', duration: 600 });
        this.props.onRemoveComponentId();
        break;
      case 'Contact':
        scrollToComponent(this.Contact, { offset: 0, align: 'bottom', duration: 600 });
        this.props.onRemoveComponentId();
        break;
      default: break;
    };
  }

  render() {
    return (
      <Aux>
        <Header ref={(section) => { this.Top = section; }} fixed={this.state.stickyScroll}>
          <ScrollBtn 
            clicked={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 600 })} 
          />
        </Header>
        <About ref={(section) => { this.About = section; }} />
        <WhatWeDo ref={(section) => { this.What = section; }} />
        <PortfolioSlider ref={(section) => { this.Portfolio = section; }} />
        <TwitterSlider ref={(section) => { this.Customers = section; }} />
        <Footer ref={(section) => { this.Contact = section; }} />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveComponentId: () => dispatch(actions.removeComponentId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);