import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Header from '../../containers/Header/Header';
import About from '../../containers/About/About';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <About />





        <section>Images</section>
        <section>What we do</section>
        <section>Portfolio</section>
        <section>Tweets</section>
        <footer>Contact</footer>
      </Aux>
    );
  }
}

export default Layout;