import React, { Component } from 'react';

import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';

//import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
      </Aux>
    );
  }
}

export default App;
