import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Header from '../../components/header/Header';

class Home extends Component {
  render() {
    return <MuiThemeProvider><Header /></MuiThemeProvider>;
  }
}

export default Home;
