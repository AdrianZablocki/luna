import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';

import * as actions from '../../store/actions/index';
import About from '../../containers/About/About';
import Aux from '../Aux/Aux';
import Header from '../../containers/Header/Header';
import WhatWeDo from '../../containers/WhatWeDo/WhatWeDo';

class Layout extends Component {
  state = {
    stickyScroll: false
  }

  componentDidUpdate() {
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
        scrollToComponent(this.Customers, { offset: 0, align: 'bottom', duration: 600 });
        this.props.onRemoveComponentId();
        break;
      case 'Contact':
        scrollToComponent(this.Contact, { offset: 0, align: 'bottom', duration: 600 });
        this.props.onRemoveComponentId();
        break;
      default: break;
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.stickyScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.stickyScrollHandler);
  }

  stickyScrollHandler = () => {
    const $header = ReactDOM.findDOMNode(this.About).getBoundingClientRect();
    //menu bar height 76px
    ($header.top <= 76) ? this.setState({ stickyScroll: true }) : this.setState({ stickyScroll: false });
  }

  render() {
    return (
      <Aux>
        <Header ref={(section) => { this.Top = section; }} fixed={this.state.stickyScroll}/>
        <About ref={(section) => { this.About = section; }} />
        <WhatWeDo ref={(section) => { this.What = section; }} />
        <section ref={(section) => { this.Portfolio = section; }}>Portfolio</section>
        <section ref={(section) => { this.Customers = section; }}>Tweets</section>
        <footer ref={(section) => { this.Contact = section; }}>Contact</footer>
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