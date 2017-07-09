import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Navbar, AddTimeTable } from '../../components/';
import ComponentWrappers from '../../ComponentWrappers';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Route exact path="/0" component={AddTimeTable} />
      </div>
    );
  }
}

export default ComponentWrappers(Home);
