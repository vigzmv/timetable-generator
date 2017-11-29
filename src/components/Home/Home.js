import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Welcome,
  Header,
  Navbar,
  AddTimeTable,
  AddTeachersRooms,
  SavedTimeTables,
} from '../../components/';
import ComponentWrappers from '../../ComponentWrappers';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Route exact path="/addnew" component={AddTimeTable} />
        <Route exact path="/addnew/:key" component={AddTimeTable} />
        <Route exact path="/saved" component={SavedTimeTables} />
        <Route exact path="/teachers" component={AddTeachersRooms} />
        <Route exact path="/rooms" component={AddTeachersRooms} />
        <Route exact path="/" component={Welcome} />
      </div>
    );
  }
}

export default ComponentWrappers(Home);
