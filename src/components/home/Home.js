import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Navbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
