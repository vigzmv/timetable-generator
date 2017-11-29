import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router-dom';

const getPathIndex = (path) => {
  const paths = ['addnew', 'saved', 'teachers', 'rooms'];
  return paths.indexOf(path.slice(1));
};

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.path = props.location.pathname;
    this.state = {
      index: getPathIndex(this.path),
    };
  }

  handleChange = (event, index) => {
    this.setState({ index });

    const { history } = this.props;
    switch (index) {
      case 0:
        history.push(`${process.env.PUBLIC_URL}/addnew`);
        break;
      case 1:
        history.push(`${process.env.PUBLIC_URL}/saved`);
        break;
      case 2:
        history.push(`${process.env.PUBLIC_URL}/teachers`);
        break;
      case 3:
        history.push(`${process.env.PUBLIC_URL}/rooms`);
        break;
      default:
        break;
    }
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

export default withRouter(Navbar);
