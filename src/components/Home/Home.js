import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Navbar, AddTimeTable, AddTeachersRooms, SavedTimeTables } from '../../components/';
import ComponentWrappers from '../../ComponentWrappers';

const welcome = () => <h3>Welcome to TT</h3>;

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        {/*<Switch>*/}
          <Route exact path="/" component={welcome} />
          <Route exact path="/addnew" component={AddTimeTable} />
          <Route exact path="/addnew/:key" component={AddTimeTable} />
          <Route exact path="/saved" component={SavedTimeTables} />
          <Route exact path="/teachers" component={AddTeachersRooms} />
          <Route exact path="/rooms" component={AddTeachersRooms} />
        {/*</Switch>*/}
      </div>
    );
  }
}

export default ComponentWrappers(Home);
