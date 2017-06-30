import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import ComponentWrappers from '../../ComponentWrappers';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default ComponentWrappers(Home);
