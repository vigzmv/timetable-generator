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
        <Route exact path={`${process.env.PUBLIC_URL}/addnew`} component={AddTimeTable} />
        <Route exact path={`${process.env.PUBLIC_URL}/addnew/:key`} component={AddTimeTable} />
        <Route exact path={`${process.env.PUBLIC_URL}/saved`} component={SavedTimeTables} />
        <Route exact path={`${process.env.PUBLIC_URL}/teachers`} component={AddTeachersRooms} />
        <Route exact path={`${process.env.PUBLIC_URL}/rooms`} component={AddTeachersRooms} />
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Welcome} />
      </div>
    );
  }
}

export default ComponentWrappers(Home);
