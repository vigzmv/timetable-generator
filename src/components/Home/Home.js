import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Navbar, AddTimeTable , AddTeachersRooms } from '../../components/';
import ComponentWrappers from '../../ComponentWrappers';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Route exact path="/0" component={AddTimeTable} />
        <Route exact path="/teachers" component={AddTeachersRooms} />
        <Route exact path="/rooms" component={AddTeachersRooms} />
      </div>
    );
  }
}

export default ComponentWrappers(Home);
