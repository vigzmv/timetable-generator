import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

class Navbar extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    return (
      <Paper style={{ width: '100%' }} elevation={3} square>
        <Tabs
          index={this.state.index}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="accent"
          textColor="accent"
          centered
        >
          <Tab label="➕ Add TimeTable" />
          <Tab label="Saved TimeTables" />
          <Tab label="Saved Teachers" />
          <Tab label="Saved Rooms" />
        </Tabs>
      </Paper>
    );
  }
}

export default Navbar;
