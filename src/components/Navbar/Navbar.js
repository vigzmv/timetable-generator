import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.location.pathname[1] || 0,
    };
  }

  handleChange = (event, index) => {
    this.setState({ index });
    switch (index) {
      case 0:
      case 1:

        this.props.history.push(`${index}`);
        break;
      case 2:

        this.props.history.push("teachers");
        break;
      case 3:
        this.props.history.push("rooms");
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Paper style={{ width: '100%' }} elevation={3} square>
        <Tabs
          index={parseInt(this.state.index, 10)}
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

export default withRouter(Navbar);
