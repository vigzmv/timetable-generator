import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Navbar, AddTimeTable, AddTeachersRooms ,SavedTimeTables } from '../../components/';
import ComponentWrappers from '../../ComponentWrappers';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Route exact path="/0" component={AddTimeTable} />
        <Route path="/1" component={SavedTimeTables} />
        <Route exact path="/teachers" component={AddTeachersRooms} />
        <Route exact path="/rooms" component={AddTeachersRooms} />
        <Route exact path="/" component={AddTimeTable} />
      </div>
    );
  }
}

export default ComponentWrappers(Home);
